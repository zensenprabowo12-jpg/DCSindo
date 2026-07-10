import type { Request, Response } from "express";
import fs from "fs";
import {
  createFirmwareFile,
  deleteFirmwareFileById,
  getFirmwareFileById,
  isValidFirmwareBrand,
  listFirmwareFiles,
  reorderFirmwareFiles,
  updateFirmwareFile,
  type FirmwareBrand,
  type FirmwareSourceType,
} from "../models/firmwareModel";
import {
  filePathFromFirmwarePublicPath,
  publicPathFromFirmwareFilename,
} from "../middleware/uploadFirmware";
import { requireRole } from "../middleware/requireRole";

// ─── HELPERS ─────────────────────────────────────────────────
function safeDeleteFile(publicPath: string | null | undefined): void {
  if (!publicPath) return;
  try {
    const fp = filePathFromFirmwarePublicPath(publicPath);
    if (fp && fs.existsSync(fp)) fs.unlinkSync(fp);
  } catch {
    /* ignore */
  }
}

function parseId(req: Request): number | null {
  const id = Number.parseInt(String(req.params.id ?? ""), 10);
  return Number.isFinite(id) && id >= 1 ? id : null;
}

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

function nullableStr(v: unknown): string | null {
  const s = str(v);
  return s ? s : null;
}

function normalizeSourceType(v: unknown): FirmwareSourceType | null {
  const s = str(v);
  if (s === "upload" || s === "external") return s;
  return null;
}

// Guard: endpoint admin firmware butuh role 'admin'.
const requireAdminSession = requireRole("admin");

// ─── PUBLIC ───────────────────────────────────────────────────
export async function apiFirmwarePublicList(req: Request, res: Response): Promise<void> {
  try {
    const brand = typeof req.query.brand === "string" ? req.query.brand : undefined;
    const category = typeof req.query.category === "string" ? req.query.category : undefined;
    const sort =
      req.query.sort === "latest" ? "latest" : req.query.sort === "oldest" ? "oldest" : "custom";
    const data = await listFirmwareFiles({ brand, category, sort });
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

// ─── ADMIN LIST & GET ─────────────────────────────────────────
export async function apiFirmwareAdminList(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  try {
    const brand = typeof req.query.brand === "string" ? req.query.brand : undefined;
    const category = typeof req.query.category === "string" ? req.query.category : undefined;
    const sort =
      req.query.sort === "latest" ? "latest" : req.query.sort === "oldest" ? "oldest" : "custom";
    const data = await listFirmwareFiles({ brand, category, sort });
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

export async function apiFirmwareAdminGet(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  try {
    const id = parseId(req);
    if (!id) {
      res.status(400).json({ ok: false, message: "Invalid ID" });
      return;
    }
    const data = await getFirmwareFileById(id);
    if (!data) {
      res.status(404).json({ ok: false, message: "Firmware not found" });
      return;
    }
    res.json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

// ─── ADMIN CREATE ─────────────────────────────────────────────
export async function apiFirmwareAdminCreate(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  const file = req.file as Express.Multer.File | undefined;
  const uploadedPath = file ? publicPathFromFirmwareFilename(file.filename) : null;
  try {
    const brand = str(req.body.brand);
    if (!isValidFirmwareBrand(brand)) {
      safeDeleteFile(uploadedPath);
      res.status(400).json({ ok: false, message: "Invalid brand" });
      return;
    }
    const product_name = str(req.body.product_name);
    if (!product_name) {
      safeDeleteFile(uploadedPath);
      res.status(400).json({ ok: false, message: "product_name is required" });
      return;
    }
    const source_type = normalizeSourceType(req.body.source_type) ?? "upload";

    let file_path: string | null = null;
    let file_size: number | null = null;
    let external_url: string | null = null;

    if (source_type === "upload") {
      if (!uploadedPath || !file) {
        res.status(400).json({
          ok: false,
          message: "File firmware wajib diunggah untuk source_type=upload",
        });
        return;
      }
      file_path = uploadedPath;
      file_size = file.size;
    } else {
      external_url = nullableStr(req.body.external_url);
      if (!external_url) {
        safeDeleteFile(uploadedPath);
        res.status(400).json({
          ok: false,
          message: "external_url wajib diisi untuk source_type=external",
        });
        return;
      }
      // Abaikan file yang mungkin terlanjur terkirim pada mode external.
      safeDeleteFile(uploadedPath);
    }

    const id = await createFirmwareFile({
      brand: brand as FirmwareBrand,
      category: str(req.body.category),
      product_name,
      model_sku: nullableStr(req.body.model_sku),
      version: nullableStr(req.body.version),
      release_date: nullableStr(req.body.release_date),
      source_type,
      file_path,
      external_url,
      file_size,
      checksum: nullableStr(req.body.checksum),
      notes: nullableStr(req.body.notes),
    });
    res.status(201).json({ ok: true, data: { id } });
  } catch (e) {
    safeDeleteFile(uploadedPath);
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

// ─── ADMIN UPDATE ─────────────────────────────────────────────
export async function apiFirmwareAdminUpdate(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  const file = req.file as Express.Multer.File | undefined;
  const uploadedPath = file ? publicPathFromFirmwareFilename(file.filename) : null;
  try {
    const id = parseId(req);
    if (!id) {
      safeDeleteFile(uploadedPath);
      res.status(400).json({ ok: false, message: "Invalid ID" });
      return;
    }
    const existing = await getFirmwareFileById(id);
    if (!existing) {
      safeDeleteFile(uploadedPath);
      res.status(404).json({ ok: false, message: "Firmware not found" });
      return;
    }

    const brand = str(req.body.brand);
    if (!isValidFirmwareBrand(brand)) {
      safeDeleteFile(uploadedPath);
      res.status(400).json({ ok: false, message: "Invalid brand" });
      return;
    }
    const product_name = str(req.body.product_name);
    if (!product_name) {
      safeDeleteFile(uploadedPath);
      res.status(400).json({ ok: false, message: "product_name is required" });
      return;
    }
    // Bila source_type tidak dikirim, pertahankan yang lama.
    const source_type = normalizeSourceType(req.body.source_type) ?? existing.source_type;

    let file_path: string | null = existing.file_path;
    let file_size: number | null = existing.file_size;
    let external_url: string | null = existing.external_url;

    if (source_type === "upload") {
      external_url = null;
      if (uploadedPath && file) {
        // File baru menggantikan file lama (jika sebelumnya juga upload).
        if (existing.source_type === "upload") safeDeleteFile(existing.file_path);
        file_path = uploadedPath;
        file_size = file.size;
      } else if (existing.source_type === "upload" && existing.file_path) {
        // Tidak ada file baru → pertahankan file lama.
        file_path = existing.file_path;
        file_size = existing.file_size;
      } else {
        // Beralih dari external ke upload tanpa mengirim file.
        res.status(400).json({
          ok: false,
          message: "File firmware wajib diunggah untuk source_type=upload",
        });
        return;
      }
    } else {
      // external
      external_url = nullableStr(req.body.external_url) ?? existing.external_url;
      if (!external_url) {
        safeDeleteFile(uploadedPath);
        res.status(400).json({
          ok: false,
          message: "external_url wajib diisi untuk source_type=external",
        });
        return;
      }
      // Hapus file lama yang diunggah (jika ada) dan abaikan file baru.
      if (existing.source_type === "upload") safeDeleteFile(existing.file_path);
      safeDeleteFile(uploadedPath);
      file_path = null;
      file_size = null;
    }

    await updateFirmwareFile(id, {
      brand: brand as FirmwareBrand,
      category: str(req.body.category),
      product_name,
      model_sku: nullableStr(req.body.model_sku),
      version: nullableStr(req.body.version),
      release_date: nullableStr(req.body.release_date),
      source_type,
      file_path,
      external_url,
      file_size,
      checksum: nullableStr(req.body.checksum),
      notes: nullableStr(req.body.notes),
    });
    res.json({ ok: true, data: { id } });
  } catch (e) {
    safeDeleteFile(uploadedPath);
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

// ─── ADMIN DELETE ─────────────────────────────────────────────
export async function apiFirmwareAdminDelete(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  try {
    const id = parseId(req);
    if (!id) {
      res.status(400).json({ ok: false, message: "Invalid ID" });
      return;
    }
    const existing = await getFirmwareFileById(id);
    if (!existing) {
      res.status(404).json({ ok: false, message: "Firmware not found" });
      return;
    }
    const ok = await deleteFirmwareFileById(id);
    if (ok && existing.source_type === "upload") {
      safeDeleteFile(existing.file_path);
    }
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}

// ─── ADMIN REORDER ────────────────────────────────────────────
export async function apiFirmwareAdminReorder(req: Request, res: Response): Promise<void> {
  if (!requireAdminSession(req, res)) return;
  try {
    const { brand, category, orderedIds } = req.body as {
      brand: string;
      category?: string;
      orderedIds: number[];
    };
    if (!isValidFirmwareBrand(brand ?? "")) {
      res.status(400).json({ ok: false, message: "Invalid brand" });
      return;
    }
    if (!Array.isArray(orderedIds)) {
      res.status(400).json({ ok: false, message: "orderedIds must be an array" });
      return;
    }
    await reorderFirmwareFiles(brand as FirmwareBrand, str(category), orderedIds);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
}
