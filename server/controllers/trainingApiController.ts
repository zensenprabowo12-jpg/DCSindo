import type { Request, Response } from "express";
import fs from "fs";
import {
  createTrainingSession,
  deleteTrainingSession,
  getTrainingSessionById,
  listTrainingSessions,
  updateTrainingSession,
} from "../models/trainingModel";
import {
  addGalleryImages,
  deleteGalleryImage,
  getGalleryImage,
  listGallery,
} from "../models/trainingGalleryModel";
import {
  filePathFromTrainingPublicPath,
  publicPathFromTrainingFilename,
} from "../middleware/uploadTraining";

type SessionFiles = Record<string, Express.Multer.File[] | undefined>;
import { TRAINING_BRANDS, TRAINING_FORMATS } from "../training/categories";
import { requireRole } from "../middleware/requireRole";
import {
  countByTraining,
  createRegistrationAtomic,
  isValidRegistrationStatus,
  listRegistrations,
  updateStatus,
} from "../models/trainingRegistrationModel";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function parseIdParam(raw: unknown): number | null {
  const n = Number.parseInt(String(raw ?? ""), 10);
  return Number.isFinite(n) && n > 0 ? n : null;
}

/**
 * M-03: MariaDB melempar errno 1062 / code ER_DUP_ENTRY saat pendaftaran
 * menabrak indeks UNIQUE uq_treg_active_email. Diterjemahkan jadi 400 yang
 * ramah supaya pengunjung tidak melihat pesan driver mentah (yang juga
 * membocorkan nama tabel & indeks) lewat handler 500 generik.
 *
 * Kembaran dari helper senama di vsolDcsApiController.ts (M-07). Sengaja
 * disalin, bukan diangkat jadi util bersama, agar commit ini tidak menyentuh
 * berkas di luar area training.
 */
function isDuplicateEntryError(e: unknown): boolean {
  const err = e as { code?: string; errno?: number } | null;
  return err?.code === "ER_DUP_ENTRY" || err?.errno === 1062;
}

// ─── HELPERS ─────────────────────────────────────────────────

// Guard: kelola training boleh admin & trainer (Fase 1).
const requireAdmin = requireRole("admin", "trainer");

// Guard: lihat peserta boleh admin, trainer, sales (read-only).
const requireViewPeserta = requireRole("admin", "trainer", "sales");
// Guard: ubah status peserta hanya admin & trainer (sales read-only).
const requireManagePeserta = requireRole("admin", "trainer");

/** Admin/trainer/sales: daftar peserta (JOIN training), filter opsional per training. */
export async function apiTrainingRegistrationsList(req: Request, res: Response): Promise<void> {
  if (!requireViewPeserta(req, res)) return;
  const tid = req.query.training_id != null ? parseIdParam(req.query.training_id) : null;
  try {
    const data = await listRegistrations({ training_id: tid ?? undefined });
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

/** Admin/trainer: ubah status satu peserta. */
export async function apiTrainingRegistrationStatus(req: Request, res: Response): Promise<void> {
  if (!requireManagePeserta(req, res)) return;
  const id = parseIdParam(req.params.id);
  if (id == null) {
    res.status(400).json({ ok: false, message: "ID peserta tidak valid" });
    return;
  }
  const status = String((req.body ?? {}).status ?? "");
  if (!isValidRegistrationStatus(status)) {
    res.status(400).json({ ok: false, message: "Status tidak valid" });
    return;
  }
  try {
    const ok = await updateStatus(id, status);
    if (!ok) {
      res.status(404).json({ ok: false, message: "Peserta tidak ditemukan" });
      return;
    }
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

/** Publik: info ketersediaan kuota + status pendaftaran. */
export async function apiTrainingAvailability(req: Request, res: Response): Promise<void> {
  const id = parseIdParam(req.params.id);
  if (id == null) {
    res.status(400).json({ ok: false, message: "ID training tidak valid" });
    return;
  }
  const training = await getTrainingSessionById(id);
  if (!training) {
    res.status(404).json({ ok: false, message: "Training tidak ditemukan" });
    return;
  }
  const registered = await countByTraining(id);
  const capacity = training.capacity ?? null;
  const remaining = capacity != null ? Math.max(0, capacity - registered) : null;
  const open = training.status !== "Completed" && (remaining == null || remaining > 0);
  res.json({
    ok: true,
    data: { capacity, registered, remaining, status: training.status, open },
  });
}

/** Publik (tanpa auth): pendaftaran peserta training. */
export async function apiTrainingPublicRegister(req: Request, res: Response): Promise<void> {
  const id = parseIdParam(req.params.id);
  if (id == null) {
    res.status(400).json({ ok: false, message: "ID training tidak valid" });
    return;
  }
  const body = (req.body ?? {}) as {
    full_name?: unknown;
    email?: unknown;
    phone?: unknown;
    company?: unknown;
  };
  const full_name = String(body.full_name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const company = typeof body.company === "string" ? body.company.trim() : "";

  if (!full_name || !email || !phone) {
    res.status(400).json({ ok: false, message: "Nama, email, dan nomor HP wajib diisi." });
    return;
  }
  if (!EMAIL_RE.test(email)) {
    res.status(400).json({ ok: false, message: "Format email tidak valid." });
    return;
  }

  const training = await getTrainingSessionById(id);
  if (!training) {
    res.status(404).json({ ok: false, message: "Training tidak ditemukan." });
    return;
  }
  if (training.status === "Completed") {
    res.status(400).json({ ok: false, message: "Pendaftaran ditutup — training sudah selesai." });
    return;
  }
  // M-03: kuota diperiksa DI DALAM transaksi yang sama dengan INSERT-nya.
  // Pemeriksaan di sini (di luar transaksi) selalu bisa dilewati balapan,
  // jadi sengaja tidak ada lagi cek kuota pra-insert di controller.
  try {
    const result = await createRegistrationAtomic({
      training_id: id,
      full_name,
      email,
      phone,
      company,
    });
    if (!result.ok) {
      if (result.reason === "not_found") {
        res.status(404).json({ ok: false, message: "Training tidak ditemukan." });
        return;
      }
      res.status(400).json({ ok: false, message: "Kuota penuh." });
      return;
    }
    res.status(201).json({ ok: true, data: { id: result.id } });
  } catch (e) {
    if (isDuplicateEntryError(e)) {
      res.status(400).json({
        ok: false,
        message: "Email ini sudah terdaftar untuk sesi training ini",
      });
      return;
    }
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

function safeDeleteFile(publicPath: string | null | undefined) {
  if (!publicPath) return;
  try {
    const fp = filePathFromTrainingPublicPath(publicPath);
    if (fp && fs.existsSync(fp)) fs.unlinkSync(fp);
  } catch { /* ignore */ }
}

function parseIntField(v: unknown): number | null {
  if (v == null || v === "") return null;
  const n = parseInt(String(v), 10);
  return Number.isFinite(n) ? n : null;
}

function parseFloatField(v: unknown): number | null {
  if (v == null || v === "") return null;
  const n = parseFloat(String(v));
  return Number.isFinite(n) ? n : null;
}

function parseBool(v: unknown): boolean {
  return v === "1" || v === "true" || v === true || v === 1;
}

function parseSyllabus(raw: unknown): { item: string; sort_order: number }[] {
  if (typeof raw === "string") {
    try { return JSON.parse(raw) as { item: string; sort_order: number }[]; }
    catch { return []; }
  }
  if (Array.isArray(raw)) return raw as { item: string; sort_order: number }[];
  return [];
}

// ─── PUBLIC ───────────────────────────────────────────────────

export async function apiTrainingPublicList(req: Request, res: Response): Promise<void> {
  try {
    const brand = typeof req.query.brand === "string" ? req.query.brand : undefined;
    const status = typeof req.query.status === "string" ? req.query.status : undefined;
    const format = typeof req.query.format === "string" ? req.query.format : undefined;
    const handsOn = req.query.hands_on;
    const has_hands_on_lab = handsOn === "1" || handsOn === "true" ? true : undefined;
    const data = await listTrainingSessions({ brand, status, format, has_hands_on_lab });
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

export async function apiTrainingPublicGet(req: Request, res: Response): Promise<void> {
  try {
    const id = parseInt(String(req.params.id ?? ""), 10);
    if (!Number.isFinite(id) || id < 1) {
      res.status(400).json({ ok: false, message: "ID tidak valid" });
      return;
    }
    const data = await getTrainingSessionById(id);
    if (!data) { res.status(404).json({ ok: false, message: "Training tidak ditemukan" }); return; }
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

export async function apiTrainingMeta(_req: Request, res: Response): Promise<void> {
  res.json({ ok: true, data: { brands: TRAINING_BRANDS, formats: TRAINING_FORMATS } });
}

// ─── ADMIN ────────────────────────────────────────────────────

export async function apiTrainingAdminList(req: Request, res: Response): Promise<void> {
  if (!requireAdmin(req, res)) return;
  try {
    const data = await listTrainingSessions();
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

export async function apiTrainingAdminGet(req: Request, res: Response): Promise<void> {
  if (!requireAdmin(req, res)) return;
  try {
    const id = parseInt(String(req.params.id ?? ""), 10);
    if (!Number.isFinite(id) || id < 1) {
      res.status(400).json({ ok: false, message: "ID tidak valid" });
      return;
    }
    const data = await getTrainingSessionById(id);
    if (!data) { res.status(404).json({ ok: false, message: "Tidak ditemukan" }); return; }
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

export async function apiTrainingAdminCreate(req: Request, res: Response): Promise<void> {
  if (!requireAdmin(req, res)) return;
  try {
    const b = req.body as Record<string, unknown>;
    const files = req.files as SessionFiles | undefined;

    const thumbFile = files?.thumbnail?.[0];
    const qrFile = files?.qr_image?.[0];
    const thumbnail = thumbFile ? publicPathFromTrainingFilename(thumbFile.filename) : (b.thumbnail as string | undefined) ?? null;
    const qr_image = qrFile ? publicPathFromTrainingFilename(qrFile.filename) : (b.qr_image as string | undefined) ?? null;

    const id = await createTrainingSession({
      title: String(b.title ?? ""),
      description: b.description ? String(b.description) : null,
      brand: (b.brand as string ?? "General") as import("../training/categories").TrainingBrand,
      format: (b.format as string ?? "Offline") as import("../training/categories").TrainingFormat,
      location: b.location ? String(b.location) : null,
      start_datetime: new Date(String(b.start_datetime)),
      end_datetime: new Date(String(b.end_datetime)),
      duration_hours: parseFloatField(b.duration_hours),
      capacity: parseIntField(b.capacity),
      price: parseFloatField(b.price),
      is_free: parseBool(b.is_free),
      has_certificate: parseBool(b.has_certificate),
      has_hands_on_lab: parseBool(b.has_hands_on_lab),
      instructor_name: b.instructor_name ? String(b.instructor_name) : null,
      instructor_contact: b.instructor_contact ? String(b.instructor_contact) : null,
      thumbnail,
      qr_image,
      custom_link_url: b.custom_link_url ? String(b.custom_link_url) : null,
      custom_link_label: b.custom_link_label ? String(b.custom_link_label) : null,
      syllabus: parseSyllabus(b.syllabus),
    });

    res.status(201).json({ ok: true, data: { id } });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

export async function apiTrainingAdminUpdate(req: Request, res: Response): Promise<void> {
  if (!requireAdmin(req, res)) return;
  try {
    const id = parseInt(String(req.params.id ?? ""), 10);
    if (!Number.isFinite(id) || id < 1) {
      res.status(400).json({ ok: false, message: "ID tidak valid" });
      return;
    }

    const b = req.body as Record<string, unknown>;
    const files = req.files as SessionFiles | undefined;
    const thumbFile = files?.thumbnail?.[0];
    const qrFile = files?.qr_image?.[0];

    // Delete old files if new ones uploaded
    if (thumbFile || qrFile) {
      const existing = await getTrainingSessionById(id);
      if (thumbFile && existing?.thumbnail) safeDeleteFile(existing.thumbnail);
      if (qrFile && existing?.qr_image) safeDeleteFile(existing.qr_image);
    }

    const thumbnail = thumbFile ? publicPathFromTrainingFilename(thumbFile.filename) : undefined;
    const qr_image = qrFile ? publicPathFromTrainingFilename(qrFile.filename) : undefined;

    await updateTrainingSession(id, {
      ...(b.title != null && { title: String(b.title) }),
      ...(b.description != null && { description: String(b.description) }),
      ...(b.brand != null && { brand: b.brand as import("../training/categories").TrainingBrand }),
      ...(b.format != null && { format: b.format as import("../training/categories").TrainingFormat }),
      ...(b.location != null && { location: String(b.location) }),
      ...(b.start_datetime != null && { start_datetime: new Date(String(b.start_datetime)) }),
      ...(b.end_datetime != null && { end_datetime: new Date(String(b.end_datetime)) }),
      ...(b.duration_hours != null && { duration_hours: parseFloatField(b.duration_hours) }),
      ...(b.capacity != null && { capacity: parseIntField(b.capacity) }),
      ...(b.price != null && { price: parseFloatField(b.price) }),
      ...(b.is_free != null && { is_free: parseBool(b.is_free) }),
      ...(b.has_certificate != null && { has_certificate: parseBool(b.has_certificate) }),
      ...(b.has_hands_on_lab != null && { has_hands_on_lab: parseBool(b.has_hands_on_lab) }),
      ...(b.instructor_name != null && { instructor_name: String(b.instructor_name) }),
      ...(b.instructor_contact != null && { instructor_contact: String(b.instructor_contact) }),
      ...(thumbnail !== undefined && { thumbnail }),
      ...(qr_image !== undefined && { qr_image }),
      ...(b.custom_link_url != null && { custom_link_url: b.custom_link_url ? String(b.custom_link_url) : null }),
      ...(b.custom_link_label != null && { custom_link_label: b.custom_link_label ? String(b.custom_link_label) : null }),
      ...(b.syllabus != null && { syllabus: parseSyllabus(b.syllabus) }),
    });

    res.json({ ok: true, data: { id } });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

export async function apiTrainingAdminDelete(req: Request, res: Response): Promise<void> {
  if (!requireAdmin(req, res)) return;
  try {
    const id = parseInt(String(req.params.id ?? ""), 10);
    if (!Number.isFinite(id) || id < 1) {
      res.status(400).json({ ok: false, message: "ID tidak valid" });
      return;
    }
    const existing = await getTrainingSessionById(id);
    if (!existing) { res.status(404).json({ ok: false, message: "Tidak ditemukan" }); return; }

    // Delete gallery images from disk before deleting session (CASCADE handles DB rows)
    const gallery = await listGallery(id);
    for (const img of gallery) safeDeleteFile(img.image_path);

    safeDeleteFile(existing.thumbnail);
    safeDeleteFile(existing.qr_image);
    await deleteTrainingSession(id);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

// ─── ADMIN GALLERY ────────────────────────────────────────────

export async function apiTrainingAdminGalleryList(req: Request, res: Response): Promise<void> {
  if (!requireAdmin(req, res)) return;
  try {
    const id = parseInt(String(req.params.id ?? ""), 10);
    if (!Number.isFinite(id) || id < 1) {
      res.status(400).json({ ok: false, message: "ID tidak valid" });
      return;
    }
    const data = await listGallery(id);
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

export async function apiTrainingAdminGalleryUpload(req: Request, res: Response): Promise<void> {
  if (!requireAdmin(req, res)) return;
  try {
    const id = parseInt(String(req.params.id ?? ""), 10);
    if (!Number.isFinite(id) || id < 1) {
      res.status(400).json({ ok: false, message: "ID tidak valid" });
      return;
    }
    const files = req.files as Express.Multer.File[] | undefined;
    if (!files?.length) {
      res.status(400).json({ ok: false, message: "Tidak ada file yang diupload" });
      return;
    }
    const items = files.map((f) => ({ imagePath: publicPathFromTrainingFilename(f.filename) }));
    const ids = await addGalleryImages(id, items);
    res.status(201).json({ ok: true, data: { ids } });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

export async function apiTrainingAdminGalleryDelete(req: Request, res: Response): Promise<void> {
  if (!requireAdmin(req, res)) return;
  try {
    const imageId = parseInt(String(req.params.imageId ?? ""), 10);
    if (!Number.isFinite(imageId) || imageId < 1) {
      res.status(400).json({ ok: false, message: "ID tidak valid" });
      return;
    }
    const img = await getGalleryImage(imageId);
    if (!img) { res.status(404).json({ ok: false, message: "Gambar tidak ditemukan" }); return; }
    safeDeleteFile(img.image_path);
    await deleteGalleryImage(imageId);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}
