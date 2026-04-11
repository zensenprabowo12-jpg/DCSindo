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

function redirectAdminList(res: Response, query: Record<string, string>) {
  const q = new URLSearchParams(query).toString();
  res.redirect(`/admin/mikrotik${q ? `?${q}` : ""}`);
}

export async function pageListMikrotik(_req: Request, res: Response) {
  try {
    const products = await findAllProdukMikrotik();
    res.render("mikrotik/index", {
      title: "Katalog MikroTik",
      products,
    });
  } catch (e) {
    console.error(e);
    res.status(500).render("mikrotik/error", {
      title: "Error",
      message: "Tidak dapat memuat katalog. Periksa koneksi database.",
    });
  }
}

export async function pageDetailMikrotik(req: Request, res: Response) {
  const parsed = idParamSchema.safeParse(req.params.id);
  if (!parsed.success) {
    res.status(400).render("mikrotik/error", {
      title: "Error",
      message: formatZodIssues(parsed.error),
    });
    return;
  }
  try {
    const product = await findProdukMikrotikById(parsed.data);
    if (!product) {
      res.status(404).render("mikrotik/error", {
        title: "Tidak ditemukan",
        message: "Produk tidak ditemukan.",
      });
      return;
    }
    res.render("mikrotik/detail", { title: product.nama_produk, product });
  } catch (e) {
    console.error(e);
    res.status(500).render("mikrotik/error", {
      title: "Error",
      message: "Tidak dapat memuat detail produk.",
    });
  }
}

export async function pageAdminList(_req: Request, res: Response) {
  try {
    const products = await findAllProdukMikrotik();
    res.render("admin/mikrotik/list", {
      title: "Admin — Produk MikroTik",
      products,
      query: _req.query,
    });
  } catch (e) {
    console.error(e);
    res.status(500).render("mikrotik/error", {
      title: "Error",
      message: "Tidak dapat memuat daftar admin.",
    });
  }
}

export async function pageAdminNew(_req: Request, res: Response) {
  res.render("admin/mikrotik/form", {
    title: "Tambah Produk MikroTik",
    mode: "create",
    product: null,
    query: _req.query,
  });
}

export async function pageAdminEdit(req: Request, res: Response) {
  const parsed = idParamSchema.safeParse(req.params.id);
  if (!parsed.success) {
    redirectAdminList(res, { error: formatZodIssues(parsed.error) });
    return;
  }
  try {
    const product = await findProdukMikrotikById(parsed.data);
    if (!product) {
      redirectAdminList(res, { error: "Produk tidak ditemukan" });
      return;
    }
    res.render("admin/mikrotik/form", {
      title: "Edit Produk MikroTik",
      mode: "edit",
      product,
      query: req.query,
    });
  } catch (e) {
    console.error(e);
    redirectAdminList(res, { error: "Gagal memuat data untuk edit" });
  }
}

function redirectNewForm(res: Response, message: string) {
  res.redirect(`/admin/mikrotik/new?error=${encodeURIComponent(message)}`);
}

export async function formCreateMikrotik(req: Request, res: Response) {
  try {
    if (!req.file) {
      redirectNewForm(res, "Gambar wajib diupload");
      return;
    }
    const body = produkMikrotikBodySchema.safeParse(req.body);
    if (!body.success) {
      tryUnlinkPublicImage(publicPathFromFilename(req.file.filename));
      redirectNewForm(res, formatZodIssues(body.error));
      return;
    }
    const gambar = publicPathFromFilename(req.file.filename);
    await insertProdukMikrotik({ ...body.data, gambar });
    redirectAdminList(res, { success: "Produk berhasil ditambahkan" });
  } catch (e) {
    console.error(e);
    if (req.file) {
      tryUnlinkPublicImage(publicPathFromFilename(req.file.filename));
    }
    redirectNewForm(res, "Gagal menyimpan produk (periksa database dan variabel lingkungan MySQL).");
  }
}

export async function formUpdateMikrotik(req: Request, res: Response) {
  const parsed = idParamSchema.safeParse(req.params.id);
  if (!parsed.success) {
    redirectAdminList(res, { error: formatZodIssues(parsed.error) });
    return;
  }
  const id = parsed.data;
  try {
    const existing = await findProdukMikrotikById(id);
    if (!existing) {
      redirectAdminList(res, { error: "Produk tidak ditemukan" });
      return;
    }
    const body = produkMikrotikBodySchema.safeParse(req.body);
    if (!body.success) {
      if (req.file) {
        tryUnlinkPublicImage(publicPathFromFilename(req.file.filename));
      }
      res.redirect(
        `/admin/mikrotik/${id}/edit?error=${encodeURIComponent(formatZodIssues(body.error))}`,
      );
      return;
    }
    let gambar = existing.gambar;
    if (req.file) {
      tryUnlinkPublicImage(existing.gambar);
      gambar = publicPathFromFilename(req.file.filename);
    }
    const ok = await updateProdukMikrotik(id, { ...body.data, gambar });
    if (!ok) {
      redirectAdminList(res, { error: "Gagal memperbarui (produk hilang)" });
      return;
    }
    redirectAdminList(res, { success: "Produk berhasil diperbarui" });
  } catch (e) {
    console.error(e);
    if (req.file) {
      tryUnlinkPublicImage(publicPathFromFilename(req.file.filename));
    }
    res.redirect(
      `/admin/mikrotik/${id}/edit?error=${encodeURIComponent("Gagal memperbarui produk")}`,
    );
  }
}

export async function formDeleteMikrotik(req: Request, res: Response) {
  const parsed = idParamSchema.safeParse(req.params.id);
  if (!parsed.success) {
    redirectAdminList(res, { error: formatZodIssues(parsed.error) });
    return;
  }
  try {
    const existing = await findProdukMikrotikById(parsed.data);
    if (!existing) {
      redirectAdminList(res, { error: "Produk tidak ditemukan" });
      return;
    }
    await deleteProdukMikrotik(parsed.data);
    tryUnlinkPublicImage(existing.gambar);
    redirectAdminList(res, { success: "Produk berhasil dihapus" });
  } catch (e) {
    console.error(e);
    redirectAdminList(res, { error: "Gagal menghapus produk" });
  }
}
