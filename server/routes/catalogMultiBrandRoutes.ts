import type { Express, NextFunction, Request, Response } from "express";
import { apiListBrands } from "../controllers/catalogBrandApiController";
import {
  formAdminV2CreateProduct,
  formAdminV2DeleteProduct,
  formAdminV2UpdateProduct,
  pageAdminV2ProductEdit,
  pageAdminV2ProductList,
  pageAdminV2ProductNew,
} from "../controllers/catalogAdminV2Controller";
import {
  pageBrandCatalog,
  pageBrandProductDetail,
} from "../controllers/catalogBrandPageController";
import {
  apiCreateProduct,
  apiDeleteProduct,
  apiGetProduct,
  apiListProducts,
  apiUpdateProduct,
} from "../controllers/catalogProductApiController";
import {
  ensureCatalogProductUploadDir,
  uploadCatalogProductImage,
} from "../middleware/uploadCatalogProduct";
import { requireRoleMw } from "../middleware/requireRole";
import { requireRoleHtml } from "../middleware/requireRoleHtml";

function handleUpload(
  single: ReturnType<typeof uploadCatalogProductImage.single>,
  htmlRedirect: (req: Request, err: Error) => string,
) {
  return (req: Request, res: Response, next: NextFunction) => {
    single(req, res, (err: unknown) => {
      if (!err) {
        next();
        return;
      }
      const message = err instanceof Error ? err.message : "Upload gagal";
      if (req.path.startsWith("/api/")) {
        res.status(400).json({ ok: false, message });
        return;
      }
      res.redirect(htmlRedirect(req, err instanceof Error ? err : new Error(message)));
    });
  };
}

/**
 * Katalog multi-brand (tabel `brands` + `products`).
 * Dipasang terpisah dari /api/mikrotik; GET /mikrotik dialihkan ke /brand/mikrotik di mikrotikRoutes.
 */
export function registerCatalogMultiBrandRoutes(app: Express): void {
  ensureCatalogProductUploadDir();

  /**
   * Guard katalog multi-brand.
   * `adminApi`  → 401/403 JSON     (dipakai rute /api/*)
   * `adminPage` → 302 /admin/login (dipakai rute SSR /admin/v2/*)
   * Keduanya middleware, jadi bisa dipasang SEBELUM handleUpload (multer).
   */
  const adminApi = requireRoleMw("admin");
  const adminPage = requireRoleHtml("admin");

  /* SSR katalog brand — didaftarkan di atas agar jelas dipisah dari SPA */
  /* PUBLIK — halaman katalog untuk pengunjung, sengaja tidak di-guard. */
  app.get("/brand/:slug/:id", pageBrandProductDetail);
  app.get("/brand/:slug", pageBrandCatalog);

  app.get("/api/brands", apiListBrands);
  app.get("/api/products", apiListProducts);
  app.get("/api/products/:id", apiGetProduct);
  app.post(
    "/api/products",
    adminApi,
    handleUpload(uploadCatalogProductImage.single("gambar"), () => "/admin/v2/products/new?error=upload"),
    apiCreateProduct,
  );
  app.put(
    "/api/products/:id",
    adminApi,
    handleUpload(uploadCatalogProductImage.single("gambar"), (req) => {
      const id = encodeURIComponent(String(req.params.id ?? ""));
      return `/admin/v2/products/${id}/edit?error=upload`;
    }),
    apiUpdateProduct,
  );
  app.delete("/api/products/:id", apiDeleteProduct);

  app.get("/admin/v2/products", adminPage, pageAdminV2ProductList);
  app.get("/admin/v2/products/new", adminPage, pageAdminV2ProductNew);
  app.get("/admin/v2/products/:id/edit", adminPage, pageAdminV2ProductEdit);
  app.post(
    "/admin/v2/products",
    adminPage,
    handleUpload(uploadCatalogProductImage.single("gambar"), () => "/admin/v2/products/new?error=upload"),
    formAdminV2CreateProduct,
  );
  app.post(
    "/admin/v2/products/:id/update",
    adminPage,
    handleUpload(uploadCatalogProductImage.single("gambar"), (req) => {
      const id = encodeURIComponent(String(req.params.id ?? ""));
      return `/admin/v2/products/${id}/edit?error=upload`;
    }),
    formAdminV2UpdateProduct,
  );
  app.post("/admin/v2/products/:id/delete", adminPage, formAdminV2DeleteProduct);
}
