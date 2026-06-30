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
import {
  ensureTrainingUploadDir,
  uploadTrainingGallery,
  uploadTrainingSessionFiles,
} from "../middleware/uploadTraining";

function withSessionFiles(
  api: (req: Request, res: Response) => void | Promise<void>,
) {
  return (req: Request, res: Response, next: NextFunction) => {
    uploadTrainingSessionFiles(req, res, (err: unknown) => {
      if (err) {
        const message = err instanceof Error ? err.message : "Upload gagal";
        return res.status(400).json({ ok: false, message });
      }
      void Promise.resolve(api(req, res)).catch(next);
    });
  };
}

function withGallery(
  api: (req: Request, res: Response) => void | Promise<void>,
) {
  return (req: Request, res: Response, next: NextFunction) => {
    uploadTrainingGallery(req, res, (err: unknown) => {
      if (err) {
        const message = err instanceof Error ? err.message : "Upload gagal";
        return res.status(400).json({ ok: false, message });
      }
      void Promise.resolve(api(req, res)).catch(next);
    });
  };
}

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
