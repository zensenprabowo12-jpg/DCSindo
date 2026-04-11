import type { Express, NextFunction, Request, Response } from "express";
import path from "path";
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
 * Dipasang terpisah dari /api/mikrotik dan halaman /mikrotik lama.
 */
export function registerCatalogMultiBrandRoutes(app: Express): void {
  ensureCatalogProductUploadDir();
  app.set("views", path.join(process.cwd(), "views"));
  app.set("view engine", "ejs");

  app.get("/api/brands", apiListBrands);
  app.get("/api/products", apiListProducts);
  app.get("/api/products/:id", apiGetProduct);
  app.post(
    "/api/products",
    handleUpload(uploadCatalogProductImage.single("gambar"), () => "/admin/v2/products/new?error=upload"),
    apiCreateProduct,
  );
  app.put(
    "/api/products/:id",
    handleUpload(uploadCatalogProductImage.single("gambar"), (req) => {
      const id = encodeURIComponent(req.params.id ?? "");
      return `/admin/v2/products/${id}/edit?error=upload`;
    }),
    apiUpdateProduct,
  );
  app.delete("/api/products/:id", apiDeleteProduct);

  app.get("/brand/:slug/:id", pageBrandProductDetail);
  app.get("/brand/:slug", pageBrandCatalog);

  app.get("/admin/v2/products", pageAdminV2ProductList);
  app.get("/admin/v2/products/new", pageAdminV2ProductNew);
  app.get("/admin/v2/products/:id/edit", pageAdminV2ProductEdit);
  app.post(
    "/admin/v2/products",
    handleUpload(uploadCatalogProductImage.single("gambar"), () => "/admin/v2/products/new?error=upload"),
    formAdminV2CreateProduct,
  );
  app.post(
    "/admin/v2/products/:id/update",
    handleUpload(uploadCatalogProductImage.single("gambar"), (req) => {
      const id = encodeURIComponent(req.params.id ?? "");
      return `/admin/v2/products/${id}/edit?error=upload`;
    }),
    formAdminV2UpdateProduct,
  );
  app.post("/admin/v2/products/:id/delete", formAdminV2DeleteProduct);
}
