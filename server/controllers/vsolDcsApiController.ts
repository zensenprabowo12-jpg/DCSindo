import type { Request, Response } from "express";
import fs from "fs";
import {
  createVsolDcsProduct,
  deleteVsolDcsProductById,
  getVsolDcsProductById,
  listVsolDcsProducts,
  reorderVsolDcsProducts,
  updateVsolDcsProduct,
} from "../models/vsolDcsProductModel";
import {
  filePathFromVsolPublicPath,
  publicPathFromVsolDcsFilename,
} from "../middleware/uploadVsolDcs";
import {
  isValidVsolDcsCategory,
  toCanonicalVsolDcsCategory,
  VSOL_DCS_CATEGORIES,
} from "../../client/src/vsol/categories";
import { requireRole } from "../middleware/requireRole";

// ─── HELPERS ─────────────────────────────────────────────────
function getUploadedPaths(req: Request, field: string): string[] {
  const files = (req.files as Record<string, Express.Multer.File[]> | undefined)?.[field] ?? [];
  return files.map((f) => publicPathFromVsolDcsFilename(f.filename));
}

function parseJsonField<T>(raw: unknown, fallback: T): T {
  if (!raw) return fallback;
  try { return JSON.parse(String(raw)) as T; }
  catch { return fallback; }
}

function safeDeleteFile(publicPath: string) {
  try {
    const fp = filePathFromVsolPublicPath(publicPath);
    if (fp && fs.existsSync(fp)) fs.unlinkSync(fp);
  } catch { /* ignore */ }
}

/**
 * Semua file yang DITULIS oleh request ini. Dipakai HANYA di jalur gagal.
 *
 * Membaca req.files langsung, bukan variabel per-field, karena dua alasan:
 * variabel path baru dideklarasikan di dalam blok try sehingga tidak terlihat
 * dari catch, dan pendataan manual per-field mudah ketinggalan satu (V-SOL
 * punya tiga, Ubiquiti lima) sehingga kebocorannya kembali tanpa terlihat.
 *
 * File LAMA aman: yang dipertahankan admin dikirim lewat body JSON
 * (existing_gallery, existing_in_the_box), tidak pernah lewat req.files.
 */
function discardRequestUploads(req: Request): void {
  const files = req.files as Record<string, Express.Multer.File[]> | undefined;
  if (!files) return;
  for (const list of Object.values(files)) {
    for (const f of list) safeDeleteFile(publicPathFromVsolDcsFilename(f.filename));
  }
}

// M-07: MariaDB melempar errno 1062 / code ER_DUP_ENTRY saat SKU menabrak
// indeks UNIQUE uq_vsol_dcs_sku. Diterjemahkan jadi 400 yang ramah
// supaya admin tidak melihat pesan driver mentah (yang juga membocorkan nama
// tabel & indeks) lewat handler 500 generik.
function isDuplicateEntryError(e: unknown): boolean {
  const err = e as { code?: string; errno?: number } | null;
  return err?.code === "ER_DUP_ENTRY" || err?.errno === 1062;
}

// Guard: endpoint admin V-SOL butuh role 'admin' (perilaku tidak berubah).
const requireAdminSession = requireRole("admin");

// ─── AUTH ─────────────────────────────────────────────────────
export async function apiVsolDcsMe(req: Request, res: Response): Promise<void> {
  const authed = Boolean(req.session.mikrotikDcsAdmin);
  res.json({ ok: true, data: { authed } });
}

// ─── PUBLIC ───────────────────────────────────────────────────
export async function apiVsolDcsPublicList(req: Request, res: Response): Promise<void> {
  try {
    const category = typeof req.query.category === "string" ? req.query.category : undefined;
    const sort = (req.query.sort as string) === "oldest" ? "oldest"
      : (req.query.sort as string) === "custom" ? "custom" : "latest";
    const data = await listVsolDcsProducts({ category, sort });
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

export async function apiVsolDcsPublicGet(req: Request, res: Response): Promise<void> {
  try {
    const id = Number.parseInt(String(req.params.id ?? ""), 10);
    if (!Number.isFinite(id) || id < 1) { res.status(400).json({ ok: false, message: "Invalid ID" }); return; }
    const data = await getVsolDcsProductById(id);
    if (!data) { res.status(404).json({ ok: false, message: "Product not found" }); return; }
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

export async function apiVsolDcsMetaCategories(_req: Request, res: Response): Promise<void> {
  res.json({ ok: true, data: VSOL_DCS_CATEGORIES });
}

// ─── ADMIN LIST & GET ─────────────────────────────────────────
export async function apiVsolDcsAdminList(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  try {
    const category = typeof req.query.category === "string" ? req.query.category : undefined;
    const sort = (req.query.sort as string) === "oldest" ? "oldest"
      : (req.query.sort as string) === "custom" ? "custom" : "latest";
    const data = await listVsolDcsProducts({ category, sort });
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

export async function apiVsolDcsAdminGet(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  try {
    const id = Number.parseInt(String(req.params.id ?? ""), 10);
    if (!Number.isFinite(id) || id < 1) { res.status(400).json({ ok: false, message: "Invalid ID" }); return; }
    const data = await getVsolDcsProductById(id);
    if (!data) { res.status(404).json({ ok: false, message: "Product not found" }); return; }
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

// ─── ADMIN CREATE ─────────────────────────────────────────────
export async function apiVsolDcsAdminCreate(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  const mainFiles = (req.files as any)?.main_image as Express.Multer.File[] | undefined;
  const mainPath = mainFiles?.[0] ? publicPathFromVsolDcsFilename(mainFiles[0].filename) : null;
  // Penanda transaksi DB sudah commit. Tanpa ini, error apa pun SESUDAH commit
  // (mis. res.json gagal di socket putus) akan menghapus file yang justru sudah
  // ditunjuk baris DB — mengubah error kosmetik jadi kehilangan data.
  let dbCommitted = false;
  try {
    if (!mainPath) { res.status(400).json({ ok: false, message: "Main image is required" }); return; }
    const { nama_produk, sku, category, subfilter, deskripsi, is_new } = req.body as Record<string, string>;
    if (!nama_produk?.trim()) { res.status(400).json({ ok: false, message: "nama_produk is required" }); return; }
    if (!sku?.trim()) { res.status(400).json({ ok: false, message: "sku is required" }); return; }
    if (!isValidVsolDcsCategory(category ?? "")) { res.status(400).json({ ok: false, message: "Invalid category" }); return; }
    const canonical = toCanonicalVsolDcsCategory(category)!;
    const bullets = parseJsonField<string[]>(req.body.bullets, []).filter(Boolean).slice(0, 9);

    const technicalSpecs = parseJsonField<{ item: string; sub_item: string | null; value: string; sort_order: number }[]>(
      req.body.technical_specs, []
    ).filter((s) => s?.item);

    const orderingInfo = parseJsonField<{ product_name: string; product_description: string; power_configuration: string; accessories: string; sort_order: number }[]>(
      req.body.ordering_info, []
    );

    const id = await createVsolDcsProduct({
      nama_produk: nama_produk.trim(),
      sku: sku.trim(),
      category: canonical,
      subfilter: subfilter?.trim() || null,
      deskripsi: (deskripsi ?? "").trim(),
      bullet_points: bullets,
      main_image: mainPath,
      is_new: is_new === "1" || is_new === "true",
      galleryPaths: getUploadedPaths(req, "gallery"),
      technicalSpecs,
      orderingInfo,
      inTheBoxPaths: getUploadedPaths(req, "in_the_box"),
    });
    dbCommitted = true;
    res.status(201).json({ ok: true, data: { id } });
  } catch (e) {
    if (!dbCommitted) discardRequestUploads(req);
    if (isDuplicateEntryError(e)) {
      res.status(400).json({ ok: false, message: "SKU sudah dipakai produk lain" });
      return;
    }
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

// ─── ADMIN UPDATE ─────────────────────────────────────────────
export async function apiVsolDcsAdminUpdate(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  // Lihat catatan dbCommitted di apiVsolDcsAdminCreate.
  let dbCommitted = false;
  try {
    const id = Number.parseInt(String(req.params.id ?? ""), 10);
    if (!Number.isFinite(id) || id < 1) { res.status(400).json({ ok: false, message: "Invalid ID" }); return; }
    const existing = await getVsolDcsProductById(id);
    if (!existing) { res.status(404).json({ ok: false, message: "Product not found" }); return; }

    const { nama_produk, sku, category, subfilter, deskripsi, is_new } = req.body as Record<string, string>;
    if (!isValidVsolDcsCategory(category ?? "")) { res.status(400).json({ ok: false, message: "Invalid category" }); return; }
    const canonical = toCanonicalVsolDcsCategory(category)!;

    const mainFiles = (req.files as any)?.main_image as Express.Multer.File[] | undefined;
    const newMainPath = mainFiles?.[0] ? publicPathFromVsolDcsFilename(mainFiles[0].filename) : null;
    const mainImage = newMainPath ?? existing.main_image;
    // M-04: foto lama hanya dicatat di sini; dihapus setelah update DB sukses.
    const staleMain =
      newMainPath && existing.main_image !== newMainPath ? existing.main_image : null;

    const bullets = parseJsonField<string[]>(req.body.bullets, []).filter(Boolean).slice(0, 9);

    const technicalSpecs = parseJsonField<{ item: string; sub_item: string | null; value: string; sort_order: number }[]>(
      req.body.technical_specs, []
    ).filter((s) => s?.item);

    const orderingInfo = parseJsonField<{ product_name: string; product_description: string; power_configuration: string; accessories: string; sort_order: number }[]>(
      req.body.ordering_info, []
    );

    const existingGallery = parseJsonField<string[]>(req.body.existing_gallery, []);
    const existingItb = parseJsonField<string[]>(req.body.existing_in_the_box, []);

    await updateVsolDcsProduct(id, {
      nama_produk: (nama_produk ?? "").trim(),
      sku: (sku ?? "").trim(),
      category: canonical,
      subfilter: subfilter?.trim() || null,
      deskripsi: (deskripsi ?? "").trim(),
      bullet_points: bullets,
      main_image: mainImage,
      is_new: is_new === "1" || is_new === "true",
      galleryPaths: { keepExisting: existingGallery, newUploads: getUploadedPaths(req, "gallery") },
      technicalSpecs,
      orderingInfo,
      inTheBoxPaths: { keepExisting: existingItb, newUploads: getUploadedPaths(req, "in_the_box") },
    });
    dbCommitted = true;

    // Baru aman: baris DB sudah menunjuk foto baru.
    if (staleMain) safeDeleteFile(staleMain);
    res.json({ ok: true, data: { id } });
  } catch (e) {
    // M-04 tetap utuh: staleMain (foto LAMA, dari DB) hanya dihapus di jalur
    // sukses. Yang dibuang di sini file BARU dari req.files — dua himpunan
    // yang tidak pernah beririsan.
    if (!dbCommitted) discardRequestUploads(req);
    if (isDuplicateEntryError(e)) {
      res.status(400).json({ ok: false, message: "SKU sudah dipakai produk lain" });
      return;
    }
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

// ─── ADMIN DELETE ─────────────────────────────────────────────
export async function apiVsolDcsAdminDelete(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  try {
    const id = Number.parseInt(String(req.params.id ?? ""), 10);
    if (!Number.isFinite(id) || id < 1) { res.status(400).json({ ok: false, message: "Invalid ID" }); return; }
    const ok = await deleteVsolDcsProductById(id);
    if (!ok) { res.status(404).json({ ok: false, message: "Product not found" }); return; }
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

// ─── ADMIN REORDER ────────────────────────────────────────────
export async function apiVsolDcsAdminReorder(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  try {
    const { category, orderedIds } = req.body as { category: string; orderedIds: number[] };
    if (!isValidVsolDcsCategory(category ?? "")) { res.status(400).json({ ok: false, message: "Invalid category" }); return; }
    const canonical = toCanonicalVsolDcsCategory(category)!;
    if (!Array.isArray(orderedIds)) { res.status(400).json({ ok: false, message: "orderedIds must be an array" }); return; }
    await reorderVsolDcsProducts(canonical, orderedIds);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}
