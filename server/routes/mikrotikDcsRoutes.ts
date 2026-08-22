import type { Express, NextFunction, Request, Response } from "express";
import express from "express";
import {
  apiMikrotikDcsActivityLog,
  apiMikrotikDcsAdminCreate,
  apiMikrotikDcsAdminDelete,
  apiMikrotikDcsAdminGet,
  apiMikrotikDcsAdminList,
  apiMikrotikDcsAdminReorder,
  apiMikrotikDcsAdminUpdate,
  apiMikrotikDcsLogin,
  apiMikrotikDcsLogout,
  apiMikrotikDcsMetaCategories,
  apiMikrotikDcsPublicGet,
  apiMikrotikDcsPublicList,
} from "../controllers/mikrotikDcsApiController";
import {
  commitMikrotikDcsUploads,
  discardMikrotikDcsUploads,
  ensureMikrotikDcsUploadDir,
  uploadMikrotikDcsProduct,
} from "../middleware/uploadMikrotikDcs";
import { uploadErrorMessage } from "../utils/safeUpload";
import { requireRoleMw } from "../middleware/requireRole";
import { loginIpRateLimit, loginUsernameRateLimit } from "../middleware/loginRateLimit";

function withMultipart(
  api: (req: Request, res: Response) => void | Promise<void>,
) {
  return (req: Request, res: Response, next: NextFunction) => {
    uploadMikrotikDcsProduct(req, res, (err: unknown) => {
      void (async () => {
        if (err) {
          // File yang sudah tertulis sebelum multer menolak jangan ditinggal di disk.
          await discardMikrotikDcsUploads(req);
          const message = uploadErrorMessage(err);
          res.status(400).json({ ok: false, message });
          return;
        }
        try {
          // Nama file final baru ada setelah ini — controller memakai f.filename.
          await commitMikrotikDcsUploads(req);
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
 * API MikroTik DCS: katalog + admin panel.
 * Base path: /api/mikrotik-dcs
 * Static `/uploads` dilayani oleh `registerMikrotikRoutes` (public/uploads).
 */
export function registerMikrotikDcsRoutes(app: Express): void {
  ensureMikrotikDcsUploadDir();

  const base = "/api/mikrotik-dcs";

  // Guard SEBELUM multer — lihat C-04 Step 8.
  const uploadGuard = requireRoleMw("admin");

  // H-02: instance limiter yang SAMA dengan /api/auth/login, supaya counter-nya
  // satu. Limiter terpisah per endpoint berarti jatah dua kali lipat bagi
  // penyerang yang menyelang-nyeling kedua URL.
  app.post(
    `${base}/auth/login`,
    loginIpRateLimit,
    express.json(),
    loginUsernameRateLimit,
    apiMikrotikDcsLogin,
  );
  app.post(`${base}/auth/logout`, apiMikrotikDcsLogout);
  app.get(`${base}/admin/activity-log`, apiMikrotikDcsActivityLog);

  app.get(`${base}/public/products`, apiMikrotikDcsPublicList);
  app.get(`${base}/public/products/:id`, apiMikrotikDcsPublicGet);

  app.get(`${base}/meta/categories`, apiMikrotikDcsMetaCategories);

  app.get(`${base}/admin/products`, apiMikrotikDcsAdminList);
  app.get(`${base}/admin/products/:id`, apiMikrotikDcsAdminGet);
  app.post(`${base}/admin/products/reorder`, express.json(), apiMikrotikDcsAdminReorder);
  app.post(
    `${base}/admin/products`,
    uploadGuard,
    withMultipart(apiMikrotikDcsAdminCreate),
  );
  app.put(
    `${base}/admin/products/:id`,
    uploadGuard,
    withMultipart(apiMikrotikDcsAdminUpdate),
  );
  app.delete(`${base}/admin/products/:id`, apiMikrotikDcsAdminDelete);
}
