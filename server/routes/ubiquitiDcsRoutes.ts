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
  ensureUbiquitiDcsUploadDir,
  uploadUbiquitiDcsProduct,
} from "../middleware/uploadUbiquitiDcs";

function withMultipart(
  api: (req: Request, res: Response) => void | Promise<void>,
) {
  return (req: Request, res: Response, next: NextFunction) => {
    uploadUbiquitiDcsProduct(req, res, (err: unknown) => {
      if (err) {
        const message = err instanceof Error ? err.message : "Upload gagal";
        return res.status(400).json({ ok: false, message });
      }
      void Promise.resolve(api(req, res)).catch(next);
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
  app.post(`${base}/admin/products`, withMultipart(apiUbiquitiDcsAdminCreate));
  app.put(`${base}/admin/products/:id`, withMultipart(apiUbiquitiDcsAdminUpdate));
  app.delete(`${base}/admin/products/:id`, apiUbiquitiDcsAdminDelete);
}
