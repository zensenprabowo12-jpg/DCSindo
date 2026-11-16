import type { Request, Response } from "express";
import fs from "fs";
import {
  addGalleryImage,
  createProduct,
  deleteGalleryImage,
  deleteProduct,
  getAllProducts,
  getProductById,
  getProductBySku,
  reorderProducts,
  setDatasheetPath,
  setPublished,
  updateProduct,
  upsertApplications,
  upsertFeatures,
  upsertSpecs,
  type FiberHomeApplicationInput,
  type FiberHomeSpecInput,
} from "../models/fiberHomeDcsProductModel";
import {
  filePathFromFiberHomePublicPath,
  publicPathFromFiberHomeDatasheetFilename,
  publicPathFromFiberHomeFilename,
} from "../middleware/uploadFiberHomeDcs";
import { requireRole } from "../middleware/requireRole";

// ─── HELPERS ─────────────────────────────────────────────────
const requireAdminSession = requireRole("admin");

function parseId(req: Request, res: Response): number | null {
  const id = Number.parseInt(String(req.params.id ?? ""), 10);
  if (!Number.isFinite(id) || id < 1) {
    res.status(400).json({ ok: false, message: "Invalid ID" });
    return null;
  }
  return id;
}

function parseJsonField<T>(raw: unknown, fallback: T): T {
  if (!raw) return fallback;
  if (Array.isArray(raw)) return raw as T; // body JSON (bukan multipart) sudah ter-parse
  try {
    return JSON.parse(String(raw)) as T;
  } catch {
    return fallback;
  }
}

function parseSpecs(raw: unknown): FiberHomeSpecInput[] {
  return parseJsonField<FiberHomeSpecInput[]>(raw, [])
    .filter((s) => s && typeof s.label === "string" && s.label.trim())
    .map((s) => ({
      label: String(s.label).trim(),
      value: String(s.value ?? "").trim(),
      spec_group: String(s.spec_group ?? "").trim() || undefined,
    }));
}

/** Array of string; entri kosong dibuang. */
function parseFeatures(raw: unknown): string[] {
  return parseJsonField<unknown[]>(raw, [])
    .map((f) => String(f ?? "").trim())
    .filter(Boolean);
}

function parseApplications(raw: unknown): FiberHomeApplicationInput[] {
  return parseJsonField<FiberHomeApplicationInput[]>(raw, [])
    .filter((a) => a && typeof a.title === "string" && a.title.trim())
    .map((a) => ({ title: String(a.title).trim(), description: String(a.description ?? "").trim() }));
}

/**
 * Nilai boolean dari body JSON atau multipart (selalu string di multipart).
 * `undefined` = field tidak dikirim; `null` = dikirim tapi tidak valid.
 */
function parsePublished(raw: unknown): boolean | undefined | null {
  if (raw === undefined) return undefined;
  if (raw === true || raw === 1 || raw === "1" || raw === "true") return true;
  if (raw === false || raw === 0 || raw === "0" || raw === "false") return false;
  return null;
}

function safeDeleteFile(publicPath: string | null | undefined) {
  if (!publicPath) return;
  try {
    const fp = filePathFromFiberHomePublicPath(publicPath);
    if (fp && fs.existsSync(fp)) fs.unlinkSync(fp);
  } catch {
    /* ignore */
  }
}

function uploadedImagePath(req: Request): string | null {
  return req.file ? publicPathFromFiberHomeFilename(req.file.filename) : null;
}

// ─── PUBLIC ───────────────────────────────────────────────────
// Endpoint publik HANYA melihat produk `is_published = 1`. Produk tersembunyi
// diperlakukan persis seperti SKU yang tidak ada (404 di detail).
export async function apiFiberHomeList(_req: Request, res: Response): Promise<void> {
  try {
    res.json({ ok: true, data: await getAllProducts({ publishedOnly: true }) });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

/** `:id` menerima ID numerik maupun SKU (halaman detail publik pakai SKU). */
export async function apiFiberHomeGet(req: Request, res: Response): Promise<void> {
  try {
    const raw = String(req.params.id ?? "").trim();
    if (!raw) {
      res.status(400).json({ ok: false, message: "Invalid ID" });
      return;
    }
    const asId = Number.parseInt(raw, 10);
    const opts = { publishedOnly: true };
    const data = /^\d+$/.test(raw) && Number.isFinite(asId)
      ? await getProductById(asId, opts)
      : await getProductBySku(raw, opts);
    if (!data) {
      res.status(404).json({ ok: false, message: "Product not found" });
      return;
    }
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

// ─── ADMIN: READ (termasuk produk tersembunyi) ────────────────
export async function apiFiberHomeAdminList(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  try {
    res.json({ ok: true, data: await getAllProducts({ publishedOnly: false }) });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

export async function apiFiberHomeAdminGet(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  try {
    const id = parseId(req, res);
    if (id === null) return;
    const data = await getProductById(id, { publishedOnly: false });
    if (!data) {
      res.status(404).json({ ok: false, message: "Product not found" });
      return;
    }
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

// ─── ADMIN: PUBLISHED ON/OFF ──────────────────────────────────
/** Body JSON `{ is_published: boolean }`. */
export async function apiFiberHomeAdminSetPublished(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  try {
    const id = parseId(req, res);
    if (id === null) return;
    const published = parsePublished((req.body as Record<string, unknown> | undefined)?.is_published);
    if (published === undefined || published === null) {
      res.status(400).json({ ok: false, message: "is_published must be true or false" });
      return;
    }
    if (!(await setPublished(id, published))) {
      res.status(404).json({ ok: false, message: "Product not found" });
      return;
    }
    res.json({ ok: true, data: { id, is_published: published } });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

// ─── ADMIN: CREATE ────────────────────────────────────────────
export async function apiFiberHomeAdminCreate(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  const imagePath = uploadedImagePath(req);
  try {
    const { sku, name, category, description } = req.body as Record<string, string>;
    if (!sku?.trim()) {
      res.status(400).json({ ok: false, message: "sku is required" });
      return;
    }
    if (!name?.trim()) {
      res.status(400).json({ ok: false, message: "name is required" });
      return;
    }
    const published = parsePublished(req.body.is_published);
    if (published === null) {
      safeDeleteFile(imagePath);
      res.status(400).json({ ok: false, message: "is_published must be true or false" });
      return;
    }
    const id = await createProduct({
      is_published: published ?? true,
      sku,
      name,
      category: category ?? "",
      description: description ?? "",
      image_path: imagePath ?? "",
      specs: parseSpecs(req.body.specs),
    });
    if (req.body.features !== undefined) await upsertFeatures(id, parseFeatures(req.body.features));
    if (req.body.applications !== undefined)
      await upsertApplications(id, parseApplications(req.body.applications));
    res.status(201).json({ ok: true, data: { id } });
  } catch (e) {
    safeDeleteFile(imagePath);
    const err = e as { code?: string; message: string };
    if (err.code === "ER_DUP_ENTRY") {
      res.status(409).json({ ok: false, message: "SKU sudah dipakai produk lain" });
      return;
    }
    res.status(500).json({ ok: false, message: err.message });
  }
}

// ─── ADMIN: UPDATE ────────────────────────────────────────────
export async function apiFiberHomeAdminUpdate(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  const newImagePath = uploadedImagePath(req);
  try {
    const id = parseId(req, res);
    if (id === null) return;
    const existing = await getProductById(id);
    if (!existing) {
      res.status(404).json({ ok: false, message: "Product not found" });
      return;
    }

    const { sku, name, category, description } = req.body as Record<string, string>;
    if (!sku?.trim()) {
      res.status(400).json({ ok: false, message: "sku is required" });
      return;
    }
    if (!name?.trim()) {
      res.status(400).json({ ok: false, message: "name is required" });
      return;
    }
    // Opsional: field tidak dikirim → status published tidak berubah.
    const published = parsePublished(req.body.is_published);
    if (published === null) {
      res.status(400).json({ ok: false, message: "is_published must be true or false" });
      return;
    }

    await updateProduct(id, {
      sku,
      name,
      category: category ?? "",
      description: description ?? "",
      image_path: newImagePath ?? existing.image_path,
    });
    if (published !== undefined) await setPublished(id, published);
    if (req.body.specs !== undefined) await upsertSpecs(id, parseSpecs(req.body.specs));
    if (req.body.features !== undefined) await upsertFeatures(id, parseFeatures(req.body.features));
    if (req.body.applications !== undefined)
      await upsertApplications(id, parseApplications(req.body.applications));

    // Hapus foto lama hanya setelah update sukses.
    if (newImagePath && existing.image_path && existing.image_path !== newImagePath)
      safeDeleteFile(existing.image_path);

    res.json({ ok: true, data: { id } });
  } catch (e) {
    safeDeleteFile(newImagePath);
    const err = e as { code?: string; message: string };
    if (err.code === "ER_DUP_ENTRY") {
      res.status(409).json({ ok: false, message: "SKU sudah dipakai produk lain" });
      return;
    }
    res.status(500).json({ ok: false, message: err.message });
  }
}

// ─── ADMIN: DELETE ────────────────────────────────────────────
export async function apiFiberHomeAdminDelete(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  try {
    const id = parseId(req, res);
    if (id === null) return;
    const existing = await getProductById(id);
    if (!existing) {
      res.status(404).json({ ok: false, message: "Product not found" });
      return;
    }
    await deleteProduct(id); // gallery & specs ikut terhapus (ON DELETE CASCADE)
    safeDeleteFile(existing.image_path);
    safeDeleteFile(existing.datasheet_path);
    existing.gallery.forEach((g) => safeDeleteFile(g.image_path));
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

// ─── ADMIN: GALLERY ───────────────────────────────────────────
export async function apiFiberHomeAdminAddGallery(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  const imagePath = uploadedImagePath(req);
  try {
    const id = parseId(req, res);
    if (id === null) return;
    if (!imagePath) {
      res.status(400).json({ ok: false, message: "File gambar wajib diisi" });
      return;
    }
    if (!(await getProductById(id))) {
      res.status(404).json({ ok: false, message: "Product not found" });
      return;
    }
    const galleryId = await addGalleryImage(id, imagePath);
    res.status(201).json({ ok: true, data: { id: galleryId, image_path: imagePath } });
  } catch (e) {
    safeDeleteFile(imagePath);
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

export async function apiFiberHomeAdminDeleteGallery(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  try {
    const id = parseId(req, res);
    if (id === null) return;
    const removed = await deleteGalleryImage(id);
    if (!removed) {
      res.status(404).json({ ok: false, message: "Gallery image not found" });
      return;
    }
    safeDeleteFile(removed);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

// ─── ADMIN: DATASHEET ─────────────────────────────────────────
export async function apiFiberHomeAdminUploadDatasheet(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  const datasheetPath = req.file
    ? publicPathFromFiberHomeDatasheetFilename(req.file.filename)
    : null;
  try {
    const id = parseId(req, res);
    if (id === null) return;
    if (!datasheetPath) {
      res.status(400).json({ ok: false, message: "File PDF wajib diisi" });
      return;
    }
    const existing = await getProductById(id);
    if (!existing) {
      res.status(404).json({ ok: false, message: "Product not found" });
      return;
    }
    await setDatasheetPath(id, datasheetPath);
    if (existing.datasheet_path && existing.datasheet_path !== datasheetPath)
      safeDeleteFile(existing.datasheet_path);
    res.json({ ok: true, data: { datasheet_path: datasheetPath } });
  } catch (e) {
    safeDeleteFile(datasheetPath);
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

// ─── ADMIN: REORDER ───────────────────────────────────────────
export async function apiFiberHomeAdminReorder(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  try {
    const { orderedIds } = req.body as { orderedIds: unknown };
    if (!Array.isArray(orderedIds)) {
      res.status(400).json({ ok: false, message: "orderedIds must be an array" });
      return;
    }
    await reorderProducts(orderedIds.map(Number));
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}
