import type { Express, NextFunction, Request, Response } from "express";
import express from "express";
import {
  apiFirmwareAdminCreate,
  apiFirmwareAdminDelete,
  apiFirmwareAdminGet,
  apiFirmwareAdminList,
  apiFirmwareAdminReorder,
  apiFirmwareAdminUpdate,
  apiFirmwarePublicList,
} from "../controllers/firmwareApiController";
import { ensureFirmwareUploadDir, uploadFirmwareFile } from "../middleware/uploadFirmware";

function withUpload(api: (req: Request, res: Response) => void | Promise<void>) {
  return (req: Request, res: Response, next: NextFunction) => {
    uploadFirmwareFile(req, res, (err: unknown) => {
      if (err) {
        const message = err instanceof Error ? err.message : "Upload gagal";
        return res.status(400).json({ ok: false, message });
      }
      void Promise.resolve(api(req, res)).catch(next);
    });
  };
}

/**
 * API Firmware: pusat unduhan firmware per brand + admin panel.
 * Base path: /api/firmware
 * Tabel `firmware_files` berdiri sendiri (tidak terhubung ke produk).
 * Static `/uploads` dilayani oleh `registerMikrotikRoutes` (public/uploads).
 */
export function registerFirmwareRoutes(app: Express): void {
  ensureFirmwareUploadDir();

  const base = "/api/firmware";

  // Public
  app.get(`${base}/public/list`, apiFirmwarePublicList);

  // Admin — `/admin/list` didaftarkan sebelum `/admin/:id` agar tidak tertangkap param.
  app.get(`${base}/admin/list`, apiFirmwareAdminList);
  app.get(`${base}/admin/:id`, apiFirmwareAdminGet);
  app.post(`${base}/admin/reorder`, express.json(), apiFirmwareAdminReorder);
  app.post(`${base}/admin`, withUpload(apiFirmwareAdminCreate));
  app.put(`${base}/admin/:id`, withUpload(apiFirmwareAdminUpdate));
  app.delete(`${base}/admin/:id`, apiFirmwareAdminDelete);
}
