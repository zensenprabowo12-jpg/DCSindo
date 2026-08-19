import type { Express, NextFunction, Request, Response } from "express";
import express from "express";
import {
  apiTrainingAdminCreate,
  apiTrainingAdminDelete,
  apiTrainingAdminGalleryDelete,
  apiTrainingAdminGalleryList,
  apiTrainingAdminGalleryUpload,
  apiTrainingAdminGet,
  apiTrainingAdminList,
  apiTrainingAdminUpdate,
  apiTrainingAvailability,
  apiTrainingMeta,
  apiTrainingPublicGet,
  apiTrainingPublicList,
  apiTrainingPublicRegister,
  apiTrainingRegistrationsList,
  apiTrainingRegistrationStatus,
} from "../controllers/trainingApiController";
import type { RequestHandler } from "express";
import {
  commitTrainingUploads,
  discardTrainingUploads,
  ensureTrainingUploadDir,
  uploadTrainingGallery,
  uploadTrainingSessionFiles,
} from "../middleware/uploadTraining";

/**
 * Jalankan multer dulu, lalu commit (sniff isi file + beri nama final).
 * Semua field training bertipe gambar, jadi satu pembungkus cukup untuk
 * thumbnail/QR maupun galeri.
 */
function withTrainingUpload(
  upload: RequestHandler,
  api: (req: Request, res: Response) => void | Promise<void>,
) {
  return (req: Request, res: Response, next: NextFunction) => {
    upload(req, res, (err: unknown) => {
      void (async () => {
        if (err) {
          // File yang sudah tertulis sebelum multer menolak jangan ditinggal di disk.
          await discardTrainingUploads(req);
          const message = err instanceof Error ? err.message : "Upload gagal";
          res.status(400).json({ ok: false, message });
          return;
        }
        try {
          // Nama file final baru ada setelah ini — controller memakai f.filename.
          await commitTrainingUploads(req);
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

const withSessionFiles = (
  api: (req: Request, res: Response) => void | Promise<void>,
) => withTrainingUpload(uploadTrainingSessionFiles, api);

const withGallery = (
  api: (req: Request, res: Response) => void | Promise<void>,
) => withTrainingUpload(uploadTrainingGallery, api);

export function registerTrainingRoutes(app: Express): void {
  ensureTrainingUploadDir();

  const base = "/api/training";

  // Public
  app.get(`${base}/sessions`, apiTrainingPublicList);
  app.get(`${base}/sessions/:id`, apiTrainingPublicGet);
  app.get(`${base}/meta`, apiTrainingMeta);

  // Pendaftaran publik (tanpa auth)
  app.get(`${base}/:id/availability`, apiTrainingAvailability);
  app.post(`${base}/:id/register`, express.json(), apiTrainingPublicRegister);

  // Peserta training (read-only; admin/trainer/sales) + ubah status (admin/trainer)
  app.get(`${base}/registrations`, apiTrainingRegistrationsList);
  app.put(`${base}/registrations/:id/status`, express.json(), apiTrainingRegistrationStatus);

  // Admin sessions
  app.get(`${base}/admin/sessions`, apiTrainingAdminList);
  app.get(`${base}/admin/sessions/:id`, apiTrainingAdminGet);
  app.post(`${base}/admin/sessions`, express.json(), withSessionFiles(apiTrainingAdminCreate));
  app.put(`${base}/admin/sessions/:id`, express.json(), withSessionFiles(apiTrainingAdminUpdate));
  app.delete(`${base}/admin/sessions/:id`, apiTrainingAdminDelete);

  // Admin gallery
  app.get(`${base}/admin/sessions/:id/gallery`, apiTrainingAdminGalleryList);
  app.post(`${base}/admin/sessions/:id/gallery`, withGallery(apiTrainingAdminGalleryUpload));
  app.delete(`${base}/admin/gallery/:imageId`, apiTrainingAdminGalleryDelete);
}
