import type { Express, NextFunction, Request, Response } from "express";
import express from "express";
import {
  apiMikrotikDcsAdminCreate,
  apiMikrotikDcsAdminDelete,
  apiMikrotikDcsAdminGet,
  apiMikrotikDcsAdminList,
  apiMikrotikDcsAdminUpdate,
  apiMikrotikDcsLogin,
  apiMikrotikDcsLogout,
  apiMikrotikDcsMe,
  apiMikrotikDcsMetaCategories,
  apiMikrotikDcsPublicGet,
  apiMikrotikDcsPublicList,
} from "../controllers/mikrotikDcsApiController";
import { ensureMikrotikDcsUploadDir, uploadMikrotikDcsProduct } from "../middleware/uploadMikrotikDcs";

function withMultipart(
  api: (req: Request, res: Response) => void | Promise<void>,
) {
  return (req: Request, res: Response, next: NextFunction) => {
    uploadMikrotikDcsProduct(req, res, (err: unknown) => {
      if (err) {
        const message = err instanceof Error ? err.message : "Upload gagal";
        return res.status(400).json({ ok: false, message });
      }
      void Promise.resolve(api(req, res)).catch(next);
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

  app.post(`${base}/auth/login`, express.json(), apiMikrotikDcsLogin);
  app.post(`${base}/auth/logout`, apiMikrotikDcsLogout);
  app.get(`${base}/auth/me`, apiMikrotikDcsMe);

  app.get(`${base}/public/products`, apiMikrotikDcsPublicList);
  app.get(`${base}/public/products/:id`, apiMikrotikDcsPublicGet);

  app.get(`${base}/meta/categories`, apiMikrotikDcsMetaCategories);

  app.get(`${base}/admin/products`, apiMikrotikDcsAdminList);
  app.get(`${base}/admin/products/:id`, apiMikrotikDcsAdminGet);
  app.post(
    `${base}/admin/products`,
    withMultipart(apiMikrotikDcsAdminCreate),
  );
  app.put(
    `${base}/admin/products/:id`,
    withMultipart(apiMikrotikDcsAdminUpdate),
  );
  app.delete(`${base}/admin/products/:id`, apiMikrotikDcsAdminDelete);
}
