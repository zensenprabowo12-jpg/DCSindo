import type { Express, NextFunction, Request, RequestHandler, Response } from "express";
import express from "express";
import {
  apiFiberHomeAdminAddGallery,
  apiFiberHomeAdminCreate,
  apiFiberHomeAdminDelete,
  apiFiberHomeAdminDeleteGallery,
  apiFiberHomeAdminReorder,
  apiFiberHomeAdminUpdate,
  apiFiberHomeAdminUploadDatasheet,
  apiFiberHomeGet,
  apiFiberHomeList,
} from "../controllers/fiberHomeDcsApiController";
import {
  ensureFiberHomeUploadDir,
  uploadFiberHomeDatasheet,
  uploadFiberHomeImage,
} from "../middleware/uploadFiberHomeDcs";

/** Jalankan multer dulu; error upload → 400 JSON, bukan HTML stack. */
function withUpload(
  upload: RequestHandler,
  api: (req: Request, res: Response) => void | Promise<void>,
) {
  return (req: Request, res: Response, next: NextFunction) => {
    upload(req, res, (err: unknown) => {
      if (err) {
        const message = err instanceof Error ? err.message : "Upload failed";
        return res.status(400).json({ ok: false, message });
      }
      void Promise.resolve(api(req, res)).catch(next);
    });
  };
}

/**
 * API FiberHome: katalog publik + admin panel.
 * Base path: /api/fiberhome-dcs
 */
export function registerFiberHomeDcsRoutes(app: Express): void {
  ensureFiberHomeUploadDir();

  const base = "/api/fiberhome-dcs";

  // Public
  app.get(`${base}/products`, apiFiberHomeList);
  app.get(`${base}/products/:id`, apiFiberHomeGet); // id numerik atau SKU

  // Admin — guard requireRole("admin") ada di dalam tiap handler.
  app.post(`${base}/admin/products/reorder`, express.json(), apiFiberHomeAdminReorder);
  app.post(`${base}/admin/products`, withUpload(uploadFiberHomeImage, apiFiberHomeAdminCreate));
  app.put(`${base}/admin/products/:id`, withUpload(uploadFiberHomeImage, apiFiberHomeAdminUpdate));
  app.delete(`${base}/admin/products/:id`, apiFiberHomeAdminDelete);

  app.post(
    `${base}/admin/products/:id/gallery`,
    withUpload(uploadFiberHomeImage, apiFiberHomeAdminAddGallery),
  );
  app.delete(`${base}/admin/gallery/:id`, apiFiberHomeAdminDeleteGallery);

  app.post(
    `${base}/admin/products/:id/datasheet`,
    withUpload(uploadFiberHomeDatasheet, apiFiberHomeAdminUploadDatasheet),
  );
}
