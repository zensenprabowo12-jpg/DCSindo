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
  ensureVsolDcsUploadDir,
  uploadVsolDcsProduct,
} from "../middleware/uploadVsolDcs";

function withMultipart(
  api: (req: Request, res: Response) => void | Promise<void>,
) {
  return (req: Request, res: Response, next: NextFunction) => {
    uploadVsolDcsProduct(req, res, (err: unknown) => {
      if (err) {
        const message = err instanceof Error ? err.message : "Upload failed";
        return res.status(400).json({ ok: false, message });
      }
      void Promise.resolve(api(req, res)).catch(next);
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
  app.post(`${base}/admin/products`, withMultipart(apiVsolDcsAdminCreate));
  app.put(`${base}/admin/products/:id`, withMultipart(apiVsolDcsAdminUpdate));
  app.delete(`${base}/admin/products/:id`, apiVsolDcsAdminDelete);
}
