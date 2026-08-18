import type { Express, NextFunction, Request, Response } from "express";
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
} from "../controllers/mikrotikPageController";
import { ensureMikrotikUploadDir, uploadMikrotikImage } from "../middleware/uploadMikrotik";
import { requireRoleMw } from "../middleware/requireRole";
import { requireRoleHtml } from "../middleware/requireRoleHtml";

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

  /**
   * Guard katalog MikroTik lama (tabel `produk_mikrotik`).
   * Bentuk middleware (bukan guard boolean di dalam handler) supaya bisa
   * dipasang SEBELUM multer — lihat requireRoleMw di middleware/requireRole.ts.
   */
  const adminApi = requireRoleMw("admin");
  const adminPage = requireRoleHtml("admin");

  /**
   * Landing page MikroTik ada di SPA `/mikrotik`.
   * Katalog produk ada di SPA `/mikrotik/shop`.
   *
   * Di server Express, kita cukup biarkan Vite catch-all menangani `/mikrotik`
   * dan hanya redirect ID numerik lama ke detail shop.
   */
  app.get("/mikrotik/:id", (req, res, next) => {
    const raw = String(req.params.id ?? "");
    if (raw === "shop") return next(); // biarkan SPA
    if (/^\d+$/.test(raw)) {
      res.redirect(302, `/mikrotik/shop/${encodeURIComponent(raw)}`);
      return;
    }
    next();
  });

  app.post(
    "/admin/mikrotik",
    adminPage,
    handleUpload(uploadMikrotikImage.single("gambar"), () => "/admin/mikrotik/new?error=Upload%20gagal"),
    formCreateMikrotik,
  );
  app.post(
    "/admin/mikrotik/:id/update",
    adminPage,
    handleUpload(uploadMikrotikImage.single("gambar"), (req) => {
      const id = encodeURIComponent(String(req.params.id ?? ""));
      return `/admin/mikrotik/${id}/edit?error=Upload%20gagal`;
    }),
    formUpdateMikrotik,
  );
  app.post("/admin/mikrotik/:id/delete", adminPage, formDeleteMikrotik);

  app.get("/api/mikrotik", adminApi, apiListMikrotik);
  app.get("/api/mikrotik/:id", adminApi, apiGetMikrotik);
  app.post(
    "/api/mikrotik",
    adminApi,
    handleUpload(uploadMikrotikImage.single("gambar"), () => "/admin/mikrotik?error=upload_api"),
    apiCreateMikrotik,
  );
  app.put(
    "/api/mikrotik/:id",
    adminApi,
    handleUpload(uploadMikrotikImage.single("gambar"), () => "/admin/mikrotik?error=upload_api"),
    apiUpdateMikrotik,
  );
  app.delete("/api/mikrotik/:id", apiDeleteMikrotik);
}
