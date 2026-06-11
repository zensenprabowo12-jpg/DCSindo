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
  reorderMikrotikDcsProducts,
  updateMikrotikDcsProduct,
} from "../models/mikrotikDcsProductModel";
import {
  listAdminLoginAttempts,
  recordAdminLoginAttempt,
} from "../models/adminActivityLogModel";

// Kredensial admin. Bisa di-override lewat .env (ADMIN_USER / ADMIN_PASS).
// Kalau env tidak di-set, pakai nilai default di bawah.
const ADMIN_USER = process.env.ADMIN_USER?.trim() || "admin";
const ADMIN_PASS = process.env.ADMIN_PASS?.trim() || "MBGratisdcsindo";

/** Ambil IP asli klien (memperhatikan reverse proxy / X-Forwarded-For). */
function getClientIp(req: Request): string | null {
  const fwd = req.headers["x-forwarded-for"];
  if (typeof fwd === "string" && fwd.trim()) return fwd.split(",")[0]!.trim();
  if (Array.isArray(fwd) && fwd.length) return fwd[0]!.trim();
  return req.socket?.remoteAddress ?? null;
}

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
  const success = username === ADMIN_USER && password === ADMIN_PASS;

  // Catat percobaan login (tidak menggagalkan login walau gagal mencatat).
  void recordAdminLoginAttempt({
    attemptedUsername: typeof username === "string" ? username : "",
    success,
    ipAddress: getClientIp(req),
    userAgent: typeof req.headers["user-agent"] === "string" ? req.headers["user-agent"] : null,
  });

  if (success) {
    req.session.mikrotikDcsAdmin = true;
    res.json({ ok: true, data: { username: ADMIN_USER } });
    return;
  }
  res.status(401).json({ ok: false, message: "Username atau password salah." });
}

/** Admin: daftar log percobaan login. */
export async function apiMikrotikDcsActivityLog(
  req: Request,
  res: Response,
): Promise<void> {
  if (!requireMikrotikDcsSession(req, res)) return;
  try {
    const rows = await listAdminLoginAttempts(200);
    res.json({ ok: true, data: rows });
  } catch (e) {
    res.status(500).json({ ok: false, message: (e as Error).message });
  }
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
  const sort = sortQ === "custom" ? "custom" : sortQ === "oldest" ? "oldest" : "latest";
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
  const sort = sortQ === "custom" ? "custom" : sortQ === "oldest" ? "oldest" : "latest";
  const rows = await listMikrotikDcsProducts({ category, sort });
  res.json({ ok: true, data: rows });
}

export async function apiMikrotikDcsAdminReorder(
  req: Request,
  res: Response,
): Promise<void> {
  if (!requireMikrotikDcsSession(req, res)) return;
  const body = (req.body ?? {}) as { category?: unknown; orderedIds?: unknown }
  const rawCategory = typeof body.category === "string" ? body.category : ""
  const category = toCanonicalMikrotikDcsCategory(rawCategory)
  if (!category) {
    res.status(400).json({ ok: false, message: "Kategori tidak valid" })
    return
  }
  const ids = Array.isArray(body.orderedIds)
    ? body.orderedIds.map((x) => Number(x)).filter((n) => Number.isFinite(n) && n > 0)
    : []
  if (!ids.length) {
    res.status(400).json({ ok: false, message: "orderedIds wajib diisi" })
    return
  }
  await reorderMikrotikDcsProducts(category, ids)
  res.json({ ok: true })
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

/** Multer kadang mengisi field teks sebagai string[] — ambil string pertama yang valid */
function multipartString(body: Record<string, unknown>, key: string): string | undefined {
  const v = body[key];
  if (typeof v === "string") return v;
  if (Array.isArray(v)) {
    const s = v.find((x) => typeof x === "string" && String(x).trim());
    return typeof s === "string" ? s : undefined;
  }
  return undefined;
}

function readBulletsFromBody(body: Record<string, unknown>): string[] {
  const raw = multipartString(body, "bullets");
  if (raw?.trim()) {
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

function readSpecsFromBody(
  body: Record<string, unknown>,
): { title: string; items: { label: string; value: string }[] }[] | null {
  const raw =
    multipartString(body, "specification_sections") ?? multipartString(body, "specifications");
  if (raw?.trim()) {
    try {
      const j = JSON.parse(raw) as unknown;
      if (Array.isArray(j)) {
        const sections = j
          .map((section) => {
            if (!section || typeof section !== "object") return null;
            const s = section as Record<string, unknown>;
            const title = String(s.title ?? "").trim();
            const rawItems = Array.isArray(s.items) ? s.items : [];
            const items = rawItems
              .map((entry) => {
                if (!entry || typeof entry !== "object") return null;
                const e = entry as Record<string, unknown>;
                const label = String(e.label ?? "").trim();
                const value = String(e.value ?? "").trim();
                if (!label || !value) return null;
                return { label, value };
              })
              .filter((item): item is { label: string; value: string } => Boolean(item));
            if (!title || !items.length) return null;
            return { title, items };
          })
          .filter(
            (
              section,
            ): section is { title: string; items: { label: string; value: string }[] } =>
              Boolean(section),
          );
        return sections.length ? sections : null;
      }
      if (j && typeof j === "object") {
        const legacyItems = Object.entries(j as Record<string, unknown>)
          .map(([k, v]) => ({
            label: String(k).trim(),
            value: v == null ? "" : String(v).trim(),
          }))
          .filter((x) => x.label && x.value);
        return legacyItems.length ? [{ title: "SPECIFICATIONS", items: legacyItems }] : null;
      }
    } catch {
      return null;
    }
  }
  return null;
}

function readTechnicalItemsFromBody(
  body: Record<string, unknown>,
): { title: string; content: string; sort_order: number }[] {
  const raw = multipartString(body, "technical_items");
  if (!raw?.trim()) return [];
  try {
    const j = JSON.parse(raw) as unknown;
    if (!Array.isArray(j)) return [];
    return j
      .map((item, index) => {
        if (!item || typeof item !== "object") return null;
        const row = item as Record<string, unknown>;
        const title = String(row.title ?? "").trim();
        const content = String(row.content ?? "").trim();
        const sort_order = Number.isFinite(row.sort_order)
          ? Number(row.sort_order)
          : index;
        if (!title || !content) return null;
        return { title, content, sort_order };
      })
      .filter((x): x is { title: string; content: string; sort_order: number } => Boolean(x));
  } catch {
    return [];
  }
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
  const specs = readSpecsFromBody(body);
  const technicalItems = readTechnicalItemsFromBody(body);
  const video_url = String(body.video_url ?? "").trim() || null;
  const video_title = String(body.video_title ?? "").trim() || null;
  const video_description = String(body.video_description ?? "").trim() || null;
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
      video_url,
      video_title,
      video_description,
      specifications: specs,
      galleryPaths,
      technicalItems,
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
  const specs = readSpecsFromBody(body);
  const technicalItems = readTechnicalItemsFromBody(body);
  const video_url = String(body.video_url ?? "").trim() || null;
  const video_title = String(body.video_title ?? "").trim() || null;
  const video_description = String(body.video_description ?? "").trim() || null;
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
      video_url,
      video_title,
      video_description,
      specifications: specs,
      galleryPaths: { keepExisting: keepGallery, newUploads },
      technicalItems,
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
