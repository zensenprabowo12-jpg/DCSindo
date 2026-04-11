import type { Request, Response } from "express";
import {
  deleteProdukMikrotik,
  findAllProdukMikrotik,
  findProdukMikrotikById,
  insertProdukMikrotik,
  updateProdukMikrotik,
} from "../models/produkMikrotikModel";
import { publicPathFromFilename } from "../middleware/uploadMikrotik";
import {
  formatZodIssues,
  idParamSchema,
  produkMikrotikBodySchema,
} from "../validation/produkMikrotikSchema";
import { tryUnlinkPublicImage } from "../utils/unlinkPublicImage";

function parseId(req: Request, res: Response): number | null {
  const parsed = idParamSchema.safeParse(req.params.id);
  if (!parsed.success) {
    res.status(400).json({ ok: false, message: formatZodIssues(parsed.error) });
    return null;
  }
  return parsed.data;
}

export async function apiListMikrotik(_req: Request, res: Response) {
  try {
    const rows = await findAllProdukMikrotik();
    res.json({ ok: true, data: rows });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, message: "Gagal mengambil data produk" });
  }
}

export async function apiGetMikrotik(req: Request, res: Response) {
  const id = parseId(req, res);
  if (id === null) return;
  try {
    const row = await findProdukMikrotikById(id);
    if (!row) {
      res.status(404).json({ ok: false, message: "Produk tidak ditemukan" });
      return;
    }
    res.json({ ok: true, data: row });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, message: "Gagal mengambil detail produk" });
  }
}

export async function apiCreateMikrotik(req: Request, res: Response) {
  try {
    if (!req.file) {
      res.status(400).json({ ok: false, message: "Gambar wajib diupload" });
      return;
    }
    const body = produkMikrotikBodySchema.safeParse(req.body);
    if (!body.success) {
      tryUnlinkPublicImage(publicPathFromFilename(req.file.filename));
      res.status(400).json({ ok: false, message: formatZodIssues(body.error) });
      return;
    }
    const gambar = publicPathFromFilename(req.file.filename);
    const newId = await insertProdukMikrotik({ ...body.data, gambar });
    res.status(201).json({ ok: true, id: newId, message: "Produk berhasil ditambahkan" });
  } catch (e) {
    console.error(e);
    if (req.file) {
      tryUnlinkPublicImage(publicPathFromFilename(req.file.filename));
    }
    res.status(500).json({ ok: false, message: "Gagal menyimpan produk" });
  }
}

export async function apiUpdateMikrotik(req: Request, res: Response) {
  const id = parseId(req, res);
  if (id === null) return;
  try {
    const existing = await findProdukMikrotikById(id);
    if (!existing) {
      res.status(404).json({ ok: false, message: "Produk tidak ditemukan" });
      return;
    }
    const body = produkMikrotikBodySchema.safeParse(req.body);
    if (!body.success) {
      if (req.file) {
        tryUnlinkPublicImage(publicPathFromFilename(req.file.filename));
      }
      res.status(400).json({ ok: false, message: formatZodIssues(body.error) });
      return;
    }
    let gambar = existing.gambar;
    if (req.file) {
      tryUnlinkPublicImage(existing.gambar);
      gambar = publicPathFromFilename(req.file.filename);
    }
    const ok = await updateProdukMikrotik(id, { ...body.data, gambar });
    if (!ok) {
      res.status(404).json({ ok: false, message: "Produk tidak ditemukan" });
      return;
    }
    res.json({ ok: true, message: "Produk berhasil diperbarui" });
  } catch (e) {
    console.error(e);
    if (req.file) {
      tryUnlinkPublicImage(publicPathFromFilename(req.file.filename));
    }
    res.status(500).json({ ok: false, message: "Gagal memperbarui produk" });
  }
}

export async function apiDeleteMikrotik(req: Request, res: Response) {
  const id = parseId(req, res);
  if (id === null) return;
  try {
    const existing = await findProdukMikrotikById(id);
    if (!existing) {
      res.status(404).json({ ok: false, message: "Produk tidak ditemukan" });
      return;
    }
    await deleteProdukMikrotik(id);
    tryUnlinkPublicImage(existing.gambar);
    res.json({ ok: true, message: "Produk berhasil dihapus" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, message: "Gagal menghapus produk" });
  }
}
