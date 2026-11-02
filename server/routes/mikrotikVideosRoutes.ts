import type { Express } from "express";
import { apiMikrotikVideosPublic } from "../controllers/mikrotikVideosApiController";

/**
 * Feed video resmi MikroTik (YouTube @mikrotik + TikTube mikrotik_news).
 * Base path: /api/mikrotik-videos — publik, tanpa auth, tanpa tabel DB.
 */
export function registerMikrotikVideosRoutes(app: Express): void {
  const base = "/api/mikrotik-videos";

  app.get(`${base}/public`, apiMikrotikVideosPublic);
}
