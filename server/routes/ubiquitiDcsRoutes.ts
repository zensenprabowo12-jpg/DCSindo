import type { Express, NextFunction, Request, Response } from "express";
import express from "express";
import {
  apiUbiquitiDcsAdminCreate,
  apiUbiquitiDcsAdminDelete,
  apiUbiquitiDcsAdminGet,
  apiUbiquitiDcsAdminList,
  apiUbiquitiDcsAdminReorder,
  apiUbiquitiDcsAdminUpdate,
  apiUbiquitiDcsMe,
  apiUbiquitiDcsMetaCategories,
  apiUbiquitiDcsPublicGet,
  apiUbiquitiDcsPublicList,
} from "../controllers/ubiquitiDcsApiController";
import {
  commitUbiquitiDcsUploads,
  discardUbiquitiDcsUploads,
  ensureUbiquitiDcsUploadDir,
  uploadUbiquitiDcsProduct,
} from "../middleware/uploadUbiquitiDcs";
import { requireRoleMw } from "../middleware/requireRole";

function withMultipart(
  api: (req: Request, res: Response) => void | Promise<void>,
) {
  return (req: Request, res: Response, next: NextFunction) => {
    uploadUbiquitiDcsProduct(req, res, (err: unknown) => {
      void (async () => {
        if (err) {
          // File yang sudah tertulis sebelum multer menolak jangan ditinggal di disk.
          await discardUbiquitiDcsUploads(req);
          const message = err instanceof Error ? err.message : "Upload gagal";
          res.status(400).json({ ok: false, message });
          return;
        }
        try {
          // Nama file final baru ada setelah ini — controller memakai f.filename.
          await commitUbiquitiDcsUploads(req);
        } catch (e) {
          const message = e instanceof Error ? e.message : "Upload ditolak";
          res.status(400).json({ ok: false, message });
          return;
        }
        await api(req, res);
      })().catch(next);
    });
  };
}

/**
 * API Ubiquiti DCS: katalog + admin panel.
 * Base path: /api/ubiquiti-dcs
 */
export function registerUbiquitiDcsRoutes(app: Express): void {
  ensureUbiquitiDcsUploadDir();

  const base = "/api/ubiquiti-dcs";

  // Guard SEBELUM multer — lihat C-04 Step 8.
  const uploadGuard = requireRoleMw("admin");

  // Auth
  app.get(`${base}/auth/me`, apiUbiquitiDcsMe);

  // Public
  app.get(`${base}/public/products`, apiUbiquitiDcsPublicList);
  app.get(`${base}/public/products/:id`, apiUbiquitiDcsPublicGet);

  // Meta
  app.get(`${base}/meta/categories`, apiUbiquitiDcsMetaCategories);

  // Admin
  app.get(`${base}/admin/products`, apiUbiquitiDcsAdminList);
  app.get(`${base}/admin/products/:id`, apiUbiquitiDcsAdminGet);
  app.post(`${base}/admin/products/reorder`, express.json(), apiUbiquitiDcsAdminReorder);
  app.post(`${base}/admin/products`, uploadGuard, withMultipart(apiUbiquitiDcsAdminCreate));
  app.put(`${base}/admin/products/:id`, uploadGuard, withMultipart(apiUbiquitiDcsAdminUpdate));
  app.delete(`${base}/admin/products/:id`, apiUbiquitiDcsAdminDelete);
}
