import type { Express, NextFunction, Request, Response } from "express";
import express from "express";
import path from "path";
import {
  apiCreateMikrotik,
  apiDeleteMikrotik,
  apiGetMikrotik,
  apiListMikrotik,
  apiUpdateMikrotik,
} from "../controllers/mikrotikApiController";
import {
  formCreateMikrotik,
  formDeleteMikrotik,
  formUpdateMikrotik,
  pageAdminEdit,
  pageAdminList,
  pageAdminNew,
} from "../controllers/mikrotikPageController";
import { ensureMikrotikUploadDir, uploadMikrotikImage } from "../middleware/uploadMikrotik";

function handleUpload(
  single: ReturnType<typeof uploadMikrotikImage.single>,
  htmlErrorRedirect: (req: Request, err: Error) => string,
) {
  return (req: Request, res: Response, next: NextFunction) => {
    single(req, res, (err: unknown) => {
      if (!err) {
        next();
        return;
      }
      const message = err instanceof Error ? err.message : "Upload gagal";
      if (req.path.startsWith("/api/")) {
        res.status(400).json({ ok: false, message });
        return;
      }
      res.redirect(htmlErrorRedirect(req, err instanceof Error ? err : new Error(message)));
    });
  };
}

export function registerMikrotikRoutes(app: Express): void {
  ensureMikrotikUploadDir();

  app.use(
    "/uploads",
    express.static(path.join(process.cwd(), "public", "uploads")),
  );

  /** Katalog publik MikroTik memakai multi-brand (tabel products), bukan produk_mikrotik. */
  app.get("/mikrotik", (_req, res) => {
    res.redirect(302, "/brand/mikrotik");
  });
  app.get("/mikrotik/:id", (req, res) => {
    const raw = req.params.id ?? "";
    res.redirect(302, `/brand/mikrotik/${encodeURIComponent(raw)}`);
  });

  app.get("/admin/mikrotik", pageAdminList);
  app.get("/admin/mikrotik/new", pageAdminNew);
  app.get("/admin/mikrotik/:id/edit", pageAdminEdit);

  app.post(
    "/admin/mikrotik",
    handleUpload(uploadMikrotikImage.single("gambar"), () => "/admin/mikrotik/new?error=Upload%20gagal"),
    formCreateMikrotik,
  );
  app.post(
    "/admin/mikrotik/:id/update",
    handleUpload(uploadMikrotikImage.single("gambar"), (req) => {
      const id = encodeURIComponent(req.params.id ?? "");
      return `/admin/mikrotik/${id}/edit?error=Upload%20gagal`;
    }),
    formUpdateMikrotik,
  );
  app.post("/admin/mikrotik/:id/delete", formDeleteMikrotik);

  app.get("/api/mikrotik", apiListMikrotik);
  app.get("/api/mikrotik/:id", apiGetMikrotik);
  app.post(
    "/api/mikrotik",
    handleUpload(uploadMikrotikImage.single("gambar"), () => "/admin/mikrotik?error=upload_api"),
    apiCreateMikrotik,
  );
  app.put(
    "/api/mikrotik/:id",
    handleUpload(uploadMikrotikImage.single("gambar"), () => "/admin/mikrotik?error=upload_api"),
    apiUpdateMikrotik,
  );
  app.delete("/api/mikrotik/:id", apiDeleteMikrotik);
}
