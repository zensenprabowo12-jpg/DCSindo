import type { Express } from "express";
import { createServer, type Server } from "http";
import { registerUploadStatic } from "./middleware/staticUploads";
import { registerAuthRoutes } from "./routes/authRoutes";
import { registerCspReportRoutes } from "./routes/cspReportRoutes";
import { registerMikrotikDcsRoutes } from "./routes/mikrotikDcsRoutes";
import { registerMikrotikRoutes } from "./routes/mikrotikRoutes";
import { registerUbiquitiDcsRoutes } from "./routes/ubiquitiDcsRoutes";
import { registerVsolDcsRoutes } from "./routes/vsolDcsRoutes";
import { registerFiberHomeDcsRoutes } from "./routes/fiberHomeDcsRoutes";
import { registerTrainingRoutes } from "./routes/trainingRoutes";
import { registerFirmwareRoutes } from "./routes/firmwareRoutes";
import { registerFirmwarePopupRoutes } from "./routes/firmwarePopupRoutes";
import { registerVisitorLogRoutes } from "./routes/visitorLogRoutes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Static /uploads didaftarkan paling awal — dipakai semua modul brand.
  registerUploadStatic(app);
  // Auth netral (/api/auth/*) didaftarkan paling awal
  registerAuthRoutes(app);
  // Penerima laporan pelanggaran CSP (H-06 Tahap 2 Fase A). Anonim & tanpa sesi:
  // pengirimnya browser, bukan manusia.
  registerCspReportRoutes(app);
  registerMikrotikRoutes(app);
  registerMikrotikDcsRoutes(app);
  registerUbiquitiDcsRoutes(app);
  registerVsolDcsRoutes(app);
  registerFiberHomeDcsRoutes(app);
  registerTrainingRoutes(app);
  registerFirmwareRoutes(app);
  registerFirmwarePopupRoutes(app);
  registerVisitorLogRoutes(app);

  return httpServer;
}
