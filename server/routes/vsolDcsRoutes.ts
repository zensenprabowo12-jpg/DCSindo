import type { Express, NextFunction, Request, Response } from "express";
import express from "express";
import {
  apiVsolDcsAdminCreate,
  apiVsolDcsAdminDelete,
  apiVsolDcsAdminGet,
  apiVsolDcsAdminList,
  apiVsolDcsAdminReorder,
  apiVsolDcsAdminUpdate,
  apiVsolDcsMe,
  apiVsolDcsMetaCategories,
  apiVsolDcsPublicGet,
  apiVsolDcsPublicList,
} from "../controllers/vsolDcsApiController";
import {
  commitVsolDcsUploads,
  discardVsolDcsUploads,
  ensureVsolDcsUploadDir,
  uploadVsolDcsProduct,
} from "../middleware/uploadVsolDcs";
import { uploadErrorMessage } from "../utils/safeUpload";
import { requireRoleMw } from "../middleware/requireRole";

function withMultipart(
  api: (req: Request, res: Response) => void | Promise<void>,
) {
  return (req: Request, res: Response, next: NextFunction) => {
    uploadVsolDcsProduct(req, res, (err: unknown) => {
      void (async () => {
        if (err) {
          // File yang sudah tertulis sebelum multer menolak jangan ditinggal di disk.
          await discardVsolDcsUploads(req);
          const message = uploadErrorMessage(err);
          res.status(400).json({ ok: false, message });
          return;
        }
        try {
          // Nama file final baru ada setelah ini — controller memakai f.filename.
          await commitVsolDcsUploads(req);
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
 * API V-SOL DCS: catalog + admin panel.
 * Base path: /api/vsol-dcs
 */
export function registerVsolDcsRoutes(app: Express): void {
  ensureVsolDcsUploadDir();

  const base = "/api/vsol-dcs";

  // Guard SEBELUM multer: tanpa ini request anonim sudah menulis file ke disk
  // dulu, baru ditolak 401 oleh guard di dalam handler. Lihat C-04 Step 8.
  const uploadGuard = requireRoleMw("admin");

  // Auth
  app.get(`${base}/auth/me`, apiVsolDcsMe);

  // Public
  app.get(`${base}/public/products`, apiVsolDcsPublicList);
  app.get(`${base}/public/products/:id`, apiVsolDcsPublicGet);

  // Meta
  app.get(`${base}/meta/categories`, apiVsolDcsMetaCategories);

  // Admin
  app.get(`${base}/admin/products`, apiVsolDcsAdminList);
  app.get(`${base}/admin/products/:id`, apiVsolDcsAdminGet);
  app.post(`${base}/admin/products/reorder`, express.json(), apiVsolDcsAdminReorder);
  app.post(`${base}/admin/products`, uploadGuard, withMultipart(apiVsolDcsAdminCreate));
  app.put(`${base}/admin/products/:id`, uploadGuard, withMultipart(apiVsolDcsAdminUpdate));
  app.delete(`${base}/admin/products/:id`, apiVsolDcsAdminDelete);
}
