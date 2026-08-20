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
import {
  commitFirmwareUpload,
  discardFirmwareUpload,
  ensureFirmwareUploadDir,
  uploadFirmwareFile,
} from "../middleware/uploadFirmware";
import { uploadErrorMessage } from "../utils/safeUpload";
import { requireRoleMw } from "../middleware/requireRole";

function withUpload(api: (req: Request, res: Response) => void | Promise<void>) {
  return (req: Request, res: Response, next: NextFunction) => {
    uploadFirmwareFile(req, res, (err: unknown) => {
      void (async () => {
        if (err) {
          // File yang sudah tertulis sebelum multer menolak jangan ditinggal di disk.
          await discardFirmwareUpload(req);
          const message = uploadErrorMessage(err);
          res.status(400).json({ ok: false, message });
          return;
        }
        try {
          // Nama file final baru ada setelah ini — controller memakai f.filename.
          await commitFirmwareUpload(req);
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
 * API Firmware: pusat unduhan firmware per brand + admin panel.
 * Base path: /api/firmware
 * Tabel `firmware_files` berdiri sendiri (tidak terhubung ke produk).
 * Static `/uploads` dilayani oleh `registerMikrotikRoutes` (public/uploads).
 */
export function registerFirmwareRoutes(app: Express): void {
  ensureFirmwareUploadDir();

  const base = "/api/firmware";

  // Guard SEBELUM multer — lihat C-04 Step 8.
  const uploadGuard = requireRoleMw("admin");

  // Public
  app.get(`${base}/public/list`, apiFirmwarePublicList);

  // Admin — `/admin/list` didaftarkan sebelum `/admin/:id` agar tidak tertangkap param.
  app.get(`${base}/admin/list`, apiFirmwareAdminList);
  app.get(`${base}/admin/:id`, apiFirmwareAdminGet);
  app.post(`${base}/admin/reorder`, express.json(), apiFirmwareAdminReorder);
  app.post(`${base}/admin`, uploadGuard, withUpload(apiFirmwareAdminCreate));
  app.put(`${base}/admin/:id`, uploadGuard, withUpload(apiFirmwareAdminUpdate));
  app.delete(`${base}/admin/:id`, apiFirmwareAdminDelete);
}
