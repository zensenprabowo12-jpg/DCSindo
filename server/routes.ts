import type { Express } from "express";
import { createServer, type Server } from "http";
import { registerEjsViewPaths } from "./ejsViews";
import { registerAuthRoutes } from "./routes/authRoutes";
import { registerCatalogMultiBrandRoutes } from "./routes/catalogMultiBrandRoutes";
import { registerMikrotikDcsRoutes } from "./routes/mikrotikDcsRoutes";
import { registerMikrotikRoutes } from "./routes/mikrotikRoutes";
import { registerUbiquitiDcsRoutes } from "./routes/ubiquitiDcsRoutes";
import { registerVsolDcsRoutes } from "./routes/vsolDcsRoutes";
import { registerTrainingRoutes } from "./routes/trainingRoutes";
import { registerFirmwareRoutes } from "./routes/firmwareRoutes";
import { registerFirmwarePopupRoutes } from "./routes/firmwarePopupRoutes";
import { registerVisitorLogRoutes } from "./routes/visitorLogRoutes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  registerEjsViewPaths(app);
  // Auth netral (/api/auth/*) didaftarkan paling awal
  registerAuthRoutes(app);
  // Katalog multi-brand didaftarkan lebih dulu agar path /brand/* konsisten
  registerCatalogMultiBrandRoutes(app);
  registerMikrotikRoutes(app);
  registerMikrotikDcsRoutes(app);
  registerUbiquitiDcsRoutes(app);
  registerVsolDcsRoutes(app);
  registerTrainingRoutes(app);
  registerFirmwareRoutes(app);
  registerFirmwarePopupRoutes(app);
  registerVisitorLogRoutes(app);

  return httpServer;
}
