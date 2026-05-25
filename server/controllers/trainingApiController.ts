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

// ─── HELPERS ─────────────────────────────────────────────────

function requireAdmin(req: Request, res: Response): boolean {
  if (req.session.mikrotikDcsAdmin) return true;
  res.status(401).json({ ok: false, message: "Unauthorized" });
  return false;
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
