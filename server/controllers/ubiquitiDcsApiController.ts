import type { Request, Response } from "express";
import { removeUploadedFiles } from "../utils/safeUpload";
import fs from "fs";
import {
  createUbiquitiDcsProduct,
  deleteUbiquitiDcsProductById,
  getUbiquitiDcsProductById,
  listUbiquitiDcsProducts,
  reorderUbiquitiDcsProducts,
  updateUbiquitiDcsProduct,
} from "../models/ubiquitiDcsProductModel";
import {
  filePathFromUbiquitiPublicPath,
  publicPathFromUbiquitiDcsFilename,
} from "../middleware/uploadUbiquitiDcs";
import {
  isValidUbiquitiDcsCategory,
  toCanonicalUbiquitiDcsCategory,
  UBIQUITI_DCS_CATEGORIES,
} from "../../client/src/ubiquiti/categories";
import { requireRole } from "../middleware/requireRole";

// ─── HELPERS ─────────────────────────────────────────────────
function getUploadedPaths(req: Request, field: string): string[] {
  const files = (req.files as Record<string, Express.Multer.File[]> | undefined)?.[field] ?? [];
  return files.map((f) => publicPathFromUbiquitiDcsFilename(f.filename));
}

function parseJsonField<T>(raw: unknown, fallback: T): T {
  if (!raw) return fallback;
  try { return JSON.parse(String(raw)) as T; }
  catch { return fallback; }
}

function safeDeleteFile(publicPath: string) {
  try {
    const fp = filePathFromUbiquitiPublicPath(publicPath);
    if (fp && fs.existsSync(fp)) fs.unlinkSync(fp);
  } catch { /* ignore */ }
}

// Guard: endpoint admin Ubiquiti butuh role 'admin' (perilaku tidak berubah).
const requireAdminSession = requireRole("admin");

// ─── AUTH ─────────────────────────────────────────────────────
export async function apiUbiquitiDcsMe(req: Request, res: Response): Promise<void> {
  const authed = Boolean(req.session.mikrotikDcsAdmin);
  res.json({ ok: true, data: { authed } });
}

// ─── PUBLIC ───────────────────────────────────────────────────
export async function apiUbiquitiDcsPublicList(req: Request, res: Response): Promise<void> {
  try {
    const category = typeof req.query.category === "string" ? req.query.category : undefined;
    const sort = (req.query.sort as string) === "oldest" ? "oldest"
      : (req.query.sort as string) === "custom" ? "custom" : "latest";
    const data = await listUbiquitiDcsProducts({ category, sort });
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

export async function apiUbiquitiDcsPublicGet(req: Request, res: Response): Promise<void> {
  try {
    const id = Number.parseInt(String(req.params.id ?? ""), 10);
    if (!Number.isFinite(id) || id < 1) { res.status(400).json({ ok: false, message: "ID tidak valid" }); return; }
    const data = await getUbiquitiDcsProductById(id);
    if (!data) { res.status(404).json({ ok: false, message: "Produk tidak ditemukan" }); return; }
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

export async function apiUbiquitiDcsMetaCategories(_req: Request, res: Response): Promise<void> {
  res.json({ ok: true, data: UBIQUITI_DCS_CATEGORIES });
}

// ─── ADMIN LIST & GET ─────────────────────────────────────────
export async function apiUbiquitiDcsAdminList(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  try {
    const category = typeof req.query.category === "string" ? req.query.category : undefined;
    const sort = (req.query.sort as string) === "oldest" ? "oldest"
      : (req.query.sort as string) === "custom" ? "custom" : "latest";
    const data = await listUbiquitiDcsProducts({ category, sort });
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

export async function apiUbiquitiDcsAdminGet(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  try {
    const id = Number.parseInt(String(req.params.id ?? ""), 10);
    if (!Number.isFinite(id) || id < 1) { res.status(400).json({ ok: false, message: "ID tidak valid" }); return; }
    const data = await getUbiquitiDcsProductById(id);
    if (!data) { res.status(404).json({ ok: false, message: "Produk tidak ditemukan" }); return; }
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

// ─── ADMIN CREATE ─────────────────────────────────────────────
export async function apiUbiquitiDcsAdminCreate(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  const mainFiles = (req.files as any)?.main_image as Express.Multer.File[] | undefined;
  const mainPath = mainFiles?.[0] ? publicPathFromUbiquitiDcsFilename(mainFiles[0].filename) : null;
  // Penanda transaksi DB sudah commit. Tanpa ini, error apa pun SESUDAH commit
  // (mis. res.json gagal di socket putus) akan menghapus file yang justru sudah
  // ditunjuk baris DB — mengubah error kosmetik jadi kehilangan data.
  let dbCommitted = false;
  try {
    if (!mainPath) { await removeUploadedFiles(req); res.status(400).json({ ok: false, message: "Gambar utama wajib diupload" }); return; }
    const { nama_produk, sku, category, subfilter, deskripsi, is_new } = req.body as Record<string, string>;
    if (!nama_produk?.trim()) { await removeUploadedFiles(req); res.status(400).json({ ok: false, message: "nama_produk wajib" }); return; }
    if (!sku?.trim()) { await removeUploadedFiles(req); res.status(400).json({ ok: false, message: "sku wajib" }); return; }
    if (!isValidUbiquitiDcsCategory(category ?? "")) { await removeUploadedFiles(req); res.status(400).json({ ok: false, message: "Kategori tidak valid" }); return; }
    const canonical = toCanonicalUbiquitiDcsCategory(category)!;
    const bullets = parseJsonField<string[]>(req.body.bullets, []).filter(Boolean).slice(0, 9);
    const technicalSpecs = parseJsonField<any[]>(req.body.technical_specs, []).filter(
      (s) => s?.section_title && s?.label
    );
    const addonIds = parseJsonField<number[]>(req.body.addon_ids, []).filter((n) => Number.isFinite(n));

    const id = await createUbiquitiDcsProduct({
      nama_produk: nama_produk.trim(),
      sku: sku.trim(),
      category: canonical,
      subfilter: subfilter?.trim() || null,
      deskripsi: (deskripsi ?? "").trim(),
      bullet_points: bullets,
      main_image: mainPath,
      is_new: is_new === "1" || is_new === "true",
      galleryPaths: getUploadedPaths(req, "gallery"),
      overviewImagePaths: getUploadedPaths(req, "overview_images"),
      overviewVideoPaths: getUploadedPaths(req, "overview_videos"),
      technicalSpecs,
      inTheBoxPaths: getUploadedPaths(req, "in_the_box"),
      addonIds,
    });
    dbCommitted = true;
    res.status(201).json({ ok: true, data: { id } });
  } catch (e) {
    if (!dbCommitted) await removeUploadedFiles(req);
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

// ─── ADMIN UPDATE ─────────────────────────────────────────────
export async function apiUbiquitiDcsAdminUpdate(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  // Lihat catatan dbCommitted di apiUbiquitiDcsAdminCreate.
  let dbCommitted = false;
  try {
    const id = Number.parseInt(String(req.params.id ?? ""), 10);
    if (!Number.isFinite(id) || id < 1) { await removeUploadedFiles(req); res.status(400).json({ ok: false, message: "ID tidak valid" }); return; }
    const existing = await getUbiquitiDcsProductById(id);
    if (!existing) { await removeUploadedFiles(req); res.status(404).json({ ok: false, message: "Produk tidak ditemukan" }); return; }

    const { nama_produk, sku, category, subfilter, deskripsi, is_new } = req.body as Record<string, string>;
    if (!isValidUbiquitiDcsCategory(category ?? "")) { await removeUploadedFiles(req); res.status(400).json({ ok: false, message: "Kategori tidak valid" }); return; }
    const canonical = toCanonicalUbiquitiDcsCategory(category)!;

    const mainFiles = (req.files as any)?.main_image as Express.Multer.File[] | undefined;
    const newMainPath = mainFiles?.[0] ? publicPathFromUbiquitiDcsFilename(mainFiles[0].filename) : null;
    const mainImage = newMainPath ?? existing.main_image;
    // M-04: foto lama hanya dicatat di sini; dihapus setelah update DB sukses.
    const staleMain =
      newMainPath && existing.main_image !== newMainPath ? existing.main_image : null;

    const bullets = parseJsonField<string[]>(req.body.bullets, []).filter(Boolean).slice(0, 9);
    const technicalSpecs = parseJsonField<any[]>(req.body.technical_specs, []).filter(
      (s) => s?.section_title && s?.label
    );
    const addonIds = parseJsonField<number[]>(req.body.addon_ids, []).filter((n) => Number.isFinite(n));
    const existingGallery = parseJsonField<string[]>(req.body.existing_gallery, []);
    const existingOvImg = parseJsonField<string[]>(req.body.existing_overview_images, []);
    const existingOvVid = parseJsonField<string[]>(req.body.existing_overview_videos, []);
    const existingItb = parseJsonField<string[]>(req.body.existing_in_the_box, []);

    await updateUbiquitiDcsProduct(id, {
      nama_produk: (nama_produk ?? "").trim(),
      sku: (sku ?? "").trim(),
      category: canonical,
      subfilter: subfilter?.trim() || null,
      deskripsi: (deskripsi ?? "").trim(),
      bullet_points: bullets,
      main_image: mainImage,
      is_new: is_new === "1" || is_new === "true",
      galleryPaths: { keepExisting: existingGallery, newUploads: getUploadedPaths(req, "gallery") },
      overviewImagePaths: { keepExisting: existingOvImg, newUploads: getUploadedPaths(req, "overview_images") },
      overviewVideoPaths: { keepExisting: existingOvVid, newUploads: getUploadedPaths(req, "overview_videos") },
      technicalSpecs,
      inTheBoxPaths: { keepExisting: existingItb, newUploads: getUploadedPaths(req, "in_the_box") },
      addonIds,
    });
    dbCommitted = true;

    // Baru aman: baris DB sudah menunjuk foto baru.
    if (staleMain) safeDeleteFile(staleMain);
    res.json({ ok: true, data: { id } });
  } catch (e) {
    // M-04 tetap utuh: staleMain (foto LAMA, dari DB) hanya dihapus di jalur
    // sukses. Yang dibuang di sini file BARU dari req.files — dua himpunan
    // yang tidak pernah beririsan.
    if (!dbCommitted) await removeUploadedFiles(req);
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

// ─── ADMIN DELETE ─────────────────────────────────────────────
export async function apiUbiquitiDcsAdminDelete(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  try {
    const id = Number.parseInt(String(req.params.id ?? ""), 10);
    if (!Number.isFinite(id) || id < 1) { res.status(400).json({ ok: false, message: "ID tidak valid" }); return; }
    const ok = await deleteUbiquitiDcsProductById(id);
    if (!ok) { res.status(404).json({ ok: false, message: "Produk tidak ditemukan" }); return; }
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

// ─── ADMIN REORDER ────────────────────────────────────────────
export async function apiUbiquitiDcsAdminReorder(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  try {
    const { category, orderedIds } = req.body as { category: string; orderedIds: number[] };
    if (!isValidUbiquitiDcsCategory(category ?? "")) { res.status(400).json({ ok: false, message: "Kategori tidak valid" }); return; }
    const canonical = toCanonicalUbiquitiDcsCategory(category)!;
    if (!Array.isArray(orderedIds)) { res.status(400).json({ ok: false, message: "orderedIds harus array" }); return; }
    await reorderUbiquitiDcsProducts(canonical, orderedIds);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}
