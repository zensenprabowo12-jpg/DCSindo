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
  commitFiberHomeDatasheet,
  commitFiberHomeImage,
  discardFiberHomeUploads,
  ensureFiberHomeUploadDir,
  uploadFiberHomeDatasheet,
  uploadFiberHomeImage,
} from "../middleware/uploadFiberHomeDcs";
import { uploadErrorMessage } from "../utils/safeUpload";
import { requireRoleMw } from "../middleware/requireRole";

/**
 * Jalankan multer dulu, lalu `commit` (sniff isi file + beri nama final);
 * error upload → 400 JSON, bukan HTML stack.
 */
function withUpload(
  upload: RequestHandler,
  commit: (req: Request) => Promise<void>,
  api: (req: Request, res: Response) => void | Promise<void>,
) {
  return (req: Request, res: Response, next: NextFunction) => {
    upload(req, res, (err: unknown) => {
      void (async () => {
        if (err) {
          // File yang sudah tertulis sebelum multer menolak jangan ditinggal di disk.
          await discardFiberHomeUploads(req);
          const message = uploadErrorMessage(err);
          res.status(400).json({ ok: false, message });
          return;
        }
        try {
          // Nama file final baru ada setelah ini — controller memakai f.filename.
          await commit(req);
        } catch (e) {
          const message = uploadErrorMessage(e);
          res.status(400).json({ ok: false, message });
          return;
        }
        await api(req, res);
      })().catch(next);
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

  // Guard SEBELUM multer — lihat C-04 Step 8.
  const uploadGuard = requireRoleMw("admin");

  // Public
  app.get(`${base}/products`, apiFiberHomeList);
  app.get(`${base}/products/:id`, apiFiberHomeGet); // id numerik atau SKU

  // Admin — guard requireRole("admin") ada di dalam tiap handler.
  app.post(`${base}/admin/products/reorder`, express.json(), apiFiberHomeAdminReorder);
  app.post(`${base}/admin/products`, uploadGuard, withUpload(uploadFiberHomeImage, commitFiberHomeImage, apiFiberHomeAdminCreate));
  app.put(`${base}/admin/products/:id`, uploadGuard, withUpload(uploadFiberHomeImage, commitFiberHomeImage, apiFiberHomeAdminUpdate));
  app.delete(`${base}/admin/products/:id`, apiFiberHomeAdminDelete);

  app.post(
    `${base}/admin/products/:id/gallery`,
    uploadGuard,
    withUpload(uploadFiberHomeImage, commitFiberHomeImage, apiFiberHomeAdminAddGallery),
  );
  app.delete(`${base}/admin/gallery/:id`, apiFiberHomeAdminDeleteGallery);

  app.post(
    `${base}/admin/products/:id/datasheet`,
    uploadGuard,
    withUpload(uploadFiberHomeDatasheet, commitFiberHomeDatasheet, apiFiberHomeAdminUploadDatasheet),
  );
}
