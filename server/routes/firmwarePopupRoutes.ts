import type { Express } from "express";
import express from "express";
import {
  apiFirmwarePopupAdminGet,
  apiFirmwarePopupAdminUpdate,
  apiFirmwarePopupPublicGet,
} from "../controllers/firmwarePopupApiController";

/**
 * API konten template popup firmware (Panduan Instalasi & Disclaimer).
 * Base path: /api/firmware-popup
 * Tabel `firmware_popup_settings` — konten GLOBAL, dipakai semua brand.
 */
export function registerFirmwarePopupRoutes(app: Express): void {
  const base = "/api/firmware-popup";

  // Public — tanpa auth, tidak pernah 500 (lihat controller).
  app.get(`${base}/public`, apiFirmwarePopupPublicGet);

  // Admin — `/admin` didaftarkan sebelum `/admin/:key` agar tidak tertangkap param.
  app.get(`${base}/admin`, apiFirmwarePopupAdminGet);
  app.put(`${base}/admin/:key`, express.json(), apiFirmwarePopupAdminUpdate);
}
