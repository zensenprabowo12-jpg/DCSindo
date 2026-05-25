import type { Express } from "express";
import { createServer, type Server } from "http";
import { registerEjsViewPaths } from "./ejsViews";
import { registerCatalogMultiBrandRoutes } from "./routes/catalogMultiBrandRoutes";
import { registerMikrotikDcsRoutes } from "./routes/mikrotikDcsRoutes";
import { registerMikrotikRoutes } from "./routes/mikrotikRoutes";
import { registerUbiquitiDcsRoutes } from "./routes/ubiquitiDcsRoutes";
import { registerVsolDcsRoutes } from "./routes/vsolDcsRoutes";
import { registerTrainingRoutes } from "./routes/trainingRoutes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  registerEjsViewPaths(app);
  // Katalog multi-brand didaftarkan lebih dulu agar path /brand/* konsisten
  registerCatalogMultiBrandRoutes(app);
  registerMikrotikRoutes(app);
  registerMikrotikDcsRoutes(app);
  registerUbiquitiDcsRoutes(app);
  registerVsolDcsRoutes(app);
  registerTrainingRoutes(app);

  return httpServer;
}
