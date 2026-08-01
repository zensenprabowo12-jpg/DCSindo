import type { Express } from "express";
import {
  apiVisitorLogList,
  apiVisitorLogStats,
} from "../controllers/visitorLogApiController";

/**
 * API statistik pengunjung — khusus admin, tidak ada endpoint publik.
 * Base path: /api/admin/visitor-log
 *
 * Data ditulis oleh middleware `visitorTracker`; di sini hanya dibaca.
 */
export function registerVisitorLogRoutes(app: Express): void {
  const base = "/api/admin/visitor-log";

  app.get(`${base}/list`, apiVisitorLogList);
  app.get(`${base}/stats`, apiVisitorLogStats);
}
