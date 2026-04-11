import type { Request, Response } from "express";
import { brandIdExists } from "../models/brandModel";
import {
  deleteCatalogProduct,
  findAllCatalogProductsWithBrand,
  findCatalogProductById,
  findCatalogProductByIdWithBrand,
  insertCatalogProduct,
  updateCatalogProduct,
} from "../models/catalogProductModel";
import { publicPathFromCatalogFilename } from "../middleware/uploadCatalogProduct";
import {
  catalogProductBodySchema,
  formatZodIssues,
  idParamSchema,
} from "../validation/catalogProductSchema";
import { tryUnlinkPublicImage } from "../utils/unlinkPublicImage";

function queryBrandParam(req: Request): string | undefined {
  const q = req.query.brand;
  if (q === undefined || q === null) return undefined;
  if (Array.isArray(q)) {
    const first = q[0];
    return typeof first === "string" ? first : undefined;
  }
  return typeof q === "string" ? q : undefined;
}

function parseId(req: Request, res: Response): number | null {
  const parsed = idParamSchema.safeParse(req.params.id);
  if (!parsed.success) {
    res.status(400).json({ ok: false, message: formatZodIssues(parsed.error) });
    return null;
  }
  return parsed.data;
}

export async function apiListProducts(req: Request, res: Response) {
  try {
    const brand = queryBrandParam(req);
    const data = await findAllCatalogProductsWithBrand(brand ?? null);
    res.json({ ok: true, data, filter: brand ?? null });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, message: "Gagal mengambil produk" });
  }
}

export async function apiGetProduct(req: Request, res: Response) {
  const id = parseId(req, res);
  if (id === null) return;
  try {
    const row = await findCatalogProductByIdWithBrand(id);
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

export async function apiCreateProduct(req: Request, res: Response) {
  try {
    if (!req.file) {
      res.status(400).json({ ok: false, message: "Gambar wajib diupload" });
      return;
    }
    const body = catalogProductBodySchema.safeParse(req.body);
    if (!body.success) {
      tryUnlinkPublicImage(publicPathFromCatalogFilename(req.file.filename));
      res.status(400).json({ ok: false, message: formatZodIssues(body.error) });
      return;
    }
    if (!(await brandIdExists(body.data.brand_id))) {
      tryUnlinkPublicImage(publicPathFromCatalogFilename(req.file.filename));
      res.status(400).json({ ok: false, message: "brand_id tidak valid" });
      return;
    }
    const gambar = publicPathFromCatalogFilename(req.file.filename);
    const newId = await insertCatalogProduct({ ...body.data, gambar });
    res.status(201).json({ ok: true, id: newId, message: "Produk berhasil ditambahkan" });
  } catch (e) {
    console.error(e);
    if (req.file) {
      tryUnlinkPublicImage(publicPathFromCatalogFilename(req.file.filename));
    }
    res.status(500).json({ ok: false, message: "Gagal menyimpan produk" });
  }
}

export async function apiUpdateProduct(req: Request, res: Response) {
  const id = parseId(req, res);
  if (id === null) return;
  try {
    const existing = await findCatalogProductById(id);
    if (!existing) {
      res.status(404).json({ ok: false, message: "Produk tidak ditemukan" });
      return;
    }
    const body = catalogProductBodySchema.safeParse(req.body);
    if (!body.success) {
      if (req.file) {
        tryUnlinkPublicImage(publicPathFromCatalogFilename(req.file.filename));
      }
      res.status(400).json({ ok: false, message: formatZodIssues(body.error) });
      return;
    }
    if (!(await brandIdExists(body.data.brand_id))) {
      if (req.file) {
        tryUnlinkPublicImage(publicPathFromCatalogFilename(req.file.filename));
      }
      res.status(400).json({ ok: false, message: "brand_id tidak valid" });
      return;
    }
    let gambar = existing.gambar;
    if (req.file) {
      tryUnlinkPublicImage(existing.gambar);
      gambar = publicPathFromCatalogFilename(req.file.filename);
    }
    const ok = await updateCatalogProduct(id, { ...body.data, gambar });
    if (!ok) {
      res.status(404).json({ ok: false, message: "Produk tidak ditemukan" });
      return;
    }
    res.json({ ok: true, message: "Produk berhasil diperbarui" });
  } catch (e) {
    console.error(e);
    if (req.file) {
      tryUnlinkPublicImage(publicPathFromCatalogFilename(req.file.filename));
    }
    res.status(500).json({ ok: false, message: "Gagal memperbarui produk" });
  }
}

export async function apiDeleteProduct(req: Request, res: Response) {
  const id = parseId(req, res);
  if (id === null) return;
  try {
    const existing = await findCatalogProductById(id);
    if (!existing) {
      res.status(404).json({ ok: false, message: "Produk tidak ditemukan" });
      return;
    }
    await deleteCatalogProduct(id);
    tryUnlinkPublicImage(existing.gambar);
    res.json({ ok: true, message: "Produk berhasil dihapus" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, message: "Gagal menghapus produk" });
  }
}
