import type { Request, Response } from "express";
import { findAllBrands, findBrandById } from "../models/brandModel";
import {
  deleteCatalogProduct,
  findAllCatalogProductsWithBrand,
  findCatalogProductById,
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

function redirectAdminList(res: Response, query: Record<string, string>) {
  const q = new URLSearchParams(query).toString();
  res.redirect(`/admin/v2/products${q ? `?${q}` : ""}`);
}

function redirectNewForm(res: Response, message: string) {
  res.redirect(`/admin/v2/products/new?error=${encodeURIComponent(message)}`);
}

export async function pageAdminV2ProductList(req: Request, res: Response) {
  try {
    const products = await findAllCatalogProductsWithBrand(null);
    const brands = await findAllBrands();
    res.render("admin/v2/products-list", {
      title: "Admin — Katalog multi-brand",
      products,
      brands,
      query: req.query,
    });
  } catch (e) {
    console.error(e);
    res.status(500).render("catalog/error", {
      title: "Error",
      message: "Tidak dapat memuat daftar produk.",
    });
  }
}

export async function pageAdminV2ProductNew(req: Request, res: Response) {
  try {
    const brands = await findAllBrands();
    res.render("admin/v2/product-form", {
      title: "Tambah produk",
      mode: "create",
      product: null,
      brands,
      query: req.query,
    });
  } catch (e) {
    console.error(e);
    redirectAdminList(res, { error: "Gagal memuat form (database?)" });
  }
}

export async function pageAdminV2ProductEdit(req: Request, res: Response) {
  const parsed = idParamSchema.safeParse(req.params.id);
  if (!parsed.success) {
    redirectAdminList(res, { error: formatZodIssues(parsed.error) });
    return;
  }
  try {
    const product = await findCatalogProductById(parsed.data);
    if (!product) {
      redirectAdminList(res, { error: "Produk tidak ditemukan" });
      return;
    }
    const brands = await findAllBrands();
    res.render("admin/v2/product-form", {
      title: "Edit produk",
      mode: "edit",
      product,
      brands,
      query: req.query,
    });
  } catch (e) {
    console.error(e);
    redirectAdminList(res, { error: "Gagal memuat data edit" });
  }
}

export async function formAdminV2CreateProduct(req: Request, res: Response) {
  try {
    if (!req.file) {
      redirectNewForm(res, "Gambar wajib diupload");
      return;
    }
    const body = catalogProductBodySchema.safeParse(req.body);
    if (!body.success) {
      tryUnlinkPublicImage(publicPathFromCatalogFilename(req.file.filename));
      redirectNewForm(res, formatZodIssues(body.error));
      return;
    }
    if (!(await findBrandById(body.data.brand_id))) {
      tryUnlinkPublicImage(publicPathFromCatalogFilename(req.file.filename));
      redirectNewForm(res, "Brand tidak valid");
      return;
    }
    const gambar = publicPathFromCatalogFilename(req.file.filename);
    await insertCatalogProduct({ ...body.data, gambar });
    redirectAdminList(res, { success: "Produk berhasil ditambahkan" });
  } catch (e) {
    console.error(e);
    if (req.file) {
      tryUnlinkPublicImage(publicPathFromCatalogFilename(req.file.filename));
    }
    redirectNewForm(res, "Gagal menyimpan (periksa database).");
  }
}

export async function formAdminV2UpdateProduct(req: Request, res: Response) {
  const parsed = idParamSchema.safeParse(req.params.id);
  if (!parsed.success) {
    redirectAdminList(res, { error: formatZodIssues(parsed.error) });
    return;
  }
  const id = parsed.data;
  try {
    const existing = await findCatalogProductById(id);
    if (!existing) {
      redirectAdminList(res, { error: "Produk tidak ditemukan" });
      return;
    }
    const body = catalogProductBodySchema.safeParse(req.body);
    if (!body.success) {
      if (req.file) {
        tryUnlinkPublicImage(publicPathFromCatalogFilename(req.file.filename));
      }
      res.redirect(
        `/admin/v2/products/${id}/edit?error=${encodeURIComponent(formatZodIssues(body.error))}`,
      );
      return;
    }
    if (!(await findBrandById(body.data.brand_id))) {
      if (req.file) {
        tryUnlinkPublicImage(publicPathFromCatalogFilename(req.file.filename));
      }
      res.redirect(
        `/admin/v2/products/${id}/edit?error=${encodeURIComponent("Brand tidak valid")}`,
      );
      return;
    }
    let gambar = existing.gambar;
    if (req.file) {
      tryUnlinkPublicImage(existing.gambar);
      gambar = publicPathFromCatalogFilename(req.file.filename);
    }
    const ok = await updateCatalogProduct(id, { ...body.data, gambar });
    if (!ok) {
      redirectAdminList(res, { error: "Gagal memperbarui" });
      return;
    }
    redirectAdminList(res, { success: "Produk berhasil diperbarui" });
  } catch (e) {
    console.error(e);
    if (req.file) {
      tryUnlinkPublicImage(publicPathFromCatalogFilename(req.file.filename));
    }
    res.redirect(
      `/admin/v2/products/${id}/edit?error=${encodeURIComponent("Gagal memperbarui")}`,
    );
  }
}

export async function formAdminV2DeleteProduct(req: Request, res: Response) {
  const parsed = idParamSchema.safeParse(req.params.id);
  if (!parsed.success) {
    redirectAdminList(res, { error: formatZodIssues(parsed.error) });
    return;
  }
  try {
    const existing = await findCatalogProductById(parsed.data);
    if (!existing) {
      redirectAdminList(res, { error: "Produk tidak ditemukan" });
      return;
    }
    await deleteCatalogProduct(parsed.data);
    tryUnlinkPublicImage(existing.gambar);
    redirectAdminList(res, { success: "Produk berhasil dihapus" });
  } catch (e) {
    console.error(e);
    redirectAdminList(res, { error: "Gagal menghapus" });
  }
}
