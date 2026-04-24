import type { Request, Response } from "express";
import { findBrandBySlug } from "../models/brandModel";
import {
  findCatalogProductByIdWithBrand,
  getProductsByBrandSlug,
} from "../models/catalogProductModel";
import { formatZodIssues, idParamSchema } from "../validation/catalogProductSchema";

export async function pageBrandCatalog(req: Request, res: Response) {
  const slug = String(req.params.slug ?? "").trim();
  if (!slug) {
    res.status(404).render("catalog/error", {
      title: "Tidak ditemukan",
      message: "Brand tidak valid.",
    });
    return;
  }
  try {
    const brand = await findBrandBySlug(slug);
    if (!brand) {
      res.status(404).render("catalog/error", {
        title: "Brand tidak ditemukan",
        message: `Tidak ada brand untuk “${slug}”.`,
      });
      return;
    }
    const products = await getProductsByBrandSlug(brand.slug);
    res.render("catalog/brand-index", {
      title: `${brand.nama_brand} — Katalog`,
      brand,
      products,
    });
  } catch (e) {
    console.error(e);
    res.status(500).render("catalog/error", {
      title: "Error",
      message: "Tidak dapat memuat katalog (periksa database).",
    });
  }
}

export async function pageBrandProductDetail(req: Request, res: Response) {
  const slug = String(req.params.slug ?? "").trim();
  const parsedId = idParamSchema.safeParse(req.params.id);
  if (!parsedId.success) {
    res.status(400).render("catalog/error", {
      title: "Error",
      message: formatZodIssues(parsedId.error),
    });
    return;
  }
  try {
    const brand = await findBrandBySlug(slug);
    if (!brand) {
      res.status(404).render("catalog/error", {
        title: "Brand tidak ditemukan",
        message: "Brand tidak valid.",
      });
      return;
    }
    const product = await findCatalogProductByIdWithBrand(parsedId.data);
    if (!product || product.brand_slug.toLowerCase() !== brand.slug.toLowerCase()) {
      res.status(404).render("catalog/error", {
        title: "Produk tidak ditemukan",
        message: "Produk tidak ada di brand ini.",
      });
      return;
    }
    res.render("catalog/brand-detail", {
      title: product.nama_produk,
      brand,
      product,
    });
  } catch (e) {
    console.error(e);
    res.status(500).render("catalog/error", {
      title: "Error",
      message: "Tidak dapat memuat detail produk.",
    });
  }
}
