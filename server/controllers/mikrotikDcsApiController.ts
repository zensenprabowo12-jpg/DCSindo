import type { Request, Response } from "express";
import fs from "fs";

type MulterFile = Express.Multer.File;
type MulterFileMap = Record<string, MulterFile[] | undefined>;
import { MIKROTIK_DCS_CATEGORIES, toCanonicalMikrotikDcsCategory } from "../mikrotikDcs/categories";
import { filePathFromPublicImagePath, publicPathFromMikrotikDcsFilename } from "../middleware/uploadMikrotikDcs";
import {
  createMikrotikDcsProduct,
  deleteMikrotikDcsProductById,
  getMikrotikDcsProductById,
  listMikrotikDcsProducts,
  updateMikrotikDcsProduct,
} from "../models/mikrotikDcsProductModel";

const ADMIN_USER = "admin";
const ADMIN_PASS = "admindcs";

function requireMikrotikDcsSession(req: Request, res: Response): boolean {
  if (req.session.mikrotikDcsAdmin) return true;
  res.status(401).json({ ok: false, message: "Perlu login admin." });
  return false;
}

function parseIntParam(
  id: string | string[] | undefined,
  res: Response,
): number | null {
  const n = Number.parseInt(
    String(Array.isArray(id) ? id[0] : id ?? ""),
    10,
  );
  if (Number.isNaN(n) || n < 1) {
    res.status(400).json({ ok: false, message: "ID tidak valid" });
    return null;
  }
  return n;
}

function tryUnlinkMany(paths: string[]): void {
  for (const p of paths) {
    const disk = filePathFromPublicImagePath(p);
    if (disk) {
      try {
        fs.unlinkSync(disk);
      } catch {
        /* ignore */
      }
    }
  }
}

export async function apiMikrotikDcsLogin(
  req: Request,
  res: Response,
): Promise<void> {
  const { username, password } = (req.body ?? {}) as { username?: string; password?: string };
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    req.session.mikrotikDcsAdmin = true;
    res.json({ ok: true, data: { username: ADMIN_USER } });
    return;
  }
  res.status(401).json({ ok: false, message: "Username atau password salah." });
}

export function apiMikrotikDcsLogout(req: Request, res: Response) {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ ok: false, message: "Gagal logout" });
    }
    res.json({ ok: true });
  });
}

export function apiMikrotikDcsMe(req: Request, res: Response): void {
  res.json({
    ok: true,
    data: { authed: Boolean(req.session.mikrotikDcsAdmin) },
  });
}

/** Publik: daftar (filter + sort) */
export async function apiMikrotikDcsPublicList(
  req: Request,
  res: Response,
): Promise<void> {
  const category = typeof req.query.category === "string" ? req.query.category : null;
  const sortQ = (req.query.sort as string) || "latest";
  const sort = sortQ === "oldest" ? "oldest" : "latest";
  const rows = await listMikrotikDcsProducts({ category, sort });
  res.json({ ok: true, data: rows });
}

export async function apiMikrotikDcsPublicGet(
  req: Request,
  res: Response,
): Promise<void> {
  const id = parseIntParam(req.params.id, res);
  if (id == null) return;
  const row = await getMikrotikDcsProductById(id);
  if (!row) {
    res.status(404).json({ ok: false, message: "Produk tidak ditemukan" });
    return;
  }
  res.json({ ok: true, data: row });
}

/** Admin: daftar (sama seperti publik) */
export async function apiMikrotikDcsAdminList(
  req: Request,
  res: Response,
): Promise<void> {
  if (!requireMikrotikDcsSession(req, res)) return;
  const category = typeof req.query.category === "string" ? req.query.category : null;
  const sortQ = (req.query.sort as string) || "latest";
  const sort = sortQ === "oldest" ? "oldest" : "latest";
  const rows = await listMikrotikDcsProducts({ category, sort });
  res.json({ ok: true, data: rows });
}

export async function apiMikrotikDcsAdminGet(
  req: Request,
  res: Response,
): Promise<void> {
  if (!requireMikrotikDcsSession(req, res)) return;
  const id = parseIntParam(req.params.id, res);
  if (id == null) return;
  const row = await getMikrotikDcsProductById(id);
  if (!row) {
    res.status(404).json({ ok: false, message: "Produk tidak ditemukan" });
    return;
  }
  res.json({ ok: true, data: row });
}

function readBulletsFromBody(body: Record<string, unknown>): string[] {
  const raw = body.bullets;
  if (typeof raw === "string" && raw.trim()) {
    try {
      const j = JSON.parse(raw) as unknown;
      if (Array.isArray(j)) {
        return j
          .map((x) => String(x).trim())
          .filter(Boolean)
          .slice(0, 9);
      }
    } catch {
      return [];
    }
  }
  return [];
}

export async function apiMikrotikDcsAdminCreate(
  req: Request,
  res: Response,
): Promise<void> {
  if (!requireMikrotikDcsSession(req, res)) return;
  const body = req.body as Record<string, unknown>;
  const files = (req as Request & { files?: MulterFileMap }).files;
  const main = files?.main_image?.[0];
  if (!main) {
    res.status(400).json({ ok: false, message: "Gambar utama wajib diupload" });
    return;
  }
  const galleryFiles = files?.gallery ?? [];
  const category = toCanonicalMikrotikDcsCategory(String(body.category ?? ""));
  if (!category) {
    res.status(400).json({ ok: false, message: "Kategori tidak valid" });
    return;
  }
  const bullets = readBulletsFromBody(body);
  const nama = String(body.nama_produk ?? "").trim();
  const sku = String(body.sku ?? "").trim();
  const desk = String(body.deskripsi ?? "").trim();
  if (!nama || !sku || !desk) {
    res.status(400).json({ ok: false, message: "Nama, SKU, dan deskripsi wajib diisi" });
    return;
  }
  const mainPath = publicPathFromMikrotikDcsFilename(main.filename);
  const galleryPaths = galleryFiles.map((f) => publicPathFromMikrotikDcsFilename(f.filename));
  try {
    const newId = await createMikrotikDcsProduct({
      nama_produk: nama,
      sku,
      category,
      deskripsi: desk,
      bullet_points: bullets,
      main_image: mainPath,
      galleryPaths,
    });
    res.status(201).json({ ok: true, data: { id: newId } });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Gagal simpan";
    if ((e as { code?: string }).code === "ER_DUP_ENTRY") {
      res.status(400).json({ ok: false, message: "SKU sudah dipakai" });
    } else {
      res.status(500).json({ ok: false, message: msg });
    }
  }
}

export async function apiMikrotikDcsAdminUpdate(
  req: Request,
  res: Response,
): Promise<void> {
  if (!requireMikrotikDcsSession(req, res)) return;
  const id = parseIntParam(req.params.id, res);
  if (id == null) return;
  const existing = await getMikrotikDcsProductById(id);
  if (!existing) {
    res.status(404).json({ ok: false, message: "Produk tidak ditemukan" });
    return;
  }

  const body = req.body as Record<string, unknown>;
  const files = (req as Request & { files?: MulterFileMap }).files;
  const main = files?.main_image?.[0];
  const galleryFiles = files?.gallery ?? [];
  const category = toCanonicalMikrotikDcsCategory(String(body.category ?? ""));
  if (!category) {
    res.status(400).json({ ok: false, message: "Kategori tidak valid" });
    return;
  }
  const bullets = readBulletsFromBody(body);
  const nama = String(body.nama_produk ?? "").trim();
  const sku = String(body.sku ?? "").trim();
  const desk = String(body.deskripsi ?? "").trim();
  if (!nama || !sku || !desk) {
    res.status(400).json({ ok: false, message: "Nama, SKU, dan deskripsi wajib diisi" });
    return;
  }

  let mainPath = existing.main_image;
  if (main) {
    if (existing.main_image) {
      tryUnlinkMany([existing.main_image]);
    }
    mainPath = publicPathFromMikrotikDcsFilename(main.filename);
  }

  let keepGallery: string[] = [];
  const eg = body.existing_gallery;
  if (typeof eg === "string" && eg.trim()) {
    try {
      const j = JSON.parse(eg) as unknown;
      if (Array.isArray(j)) {
        keepGallery = j.map(String).filter(Boolean);
      }
    } catch {
      keepGallery = existing.gallery.map((g) => g.image_path);
    }
  } else {
    keepGallery = existing.gallery.map((g) => g.image_path);
  }

  const newUploads = galleryFiles.map((f) => publicPathFromMikrotikDcsFilename(f.filename));
  const removed = existing.gallery
    .map((g) => g.image_path)
    .filter((p) => !keepGallery.includes(p));
  tryUnlinkMany(removed);

  try {
    await updateMikrotikDcsProduct(id, {
      nama_produk: nama,
      sku,
      category,
      deskripsi: desk,
      bullet_points: bullets,
      main_image: mainPath,
      galleryPaths: { keepExisting: keepGallery, newUploads },
    });
    res.json({ ok: true, data: { id } });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Gagal update";
    if ((e as { code?: string }).code === "ER_DUP_ENTRY") {
      res.status(400).json({ ok: false, message: "SKU sudah dipakai" });
    } else {
      res.status(500).json({ ok: false, message: msg });
    }
  }
}

export async function apiMikrotikDcsAdminDelete(
  req: Request,
  res: Response,
): Promise<void> {
  if (!requireMikrotikDcsSession(req, res)) return;
  const id = parseIntParam(req.params.id, res);
  if (id == null) return;
  const existing = await getMikrotikDcsProductById(id);
  if (!existing) {
    res.status(404).json({ ok: false, message: "Produk tidak ditemukan" });
    return;
  }
  const paths: string[] = [existing.main_image, ...existing.gallery.map((g) => g.image_path)];
  const deleted = await deleteMikrotikDcsProductById(id);
  if (deleted) {
    tryUnlinkMany(paths);
  }
  if (!deleted) {
    res.status(500).json({ ok: false, message: "Gagal hapus" });
    return;
  }
  res.json({ ok: true });
}

export function apiMikrotikDcsMetaCategories(_req: Request, res: Response): void {
  res.json({ ok: true, data: [...MIKROTIK_DCS_CATEGORIES] });
}
