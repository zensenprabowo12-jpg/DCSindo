import type { Express } from "express";
import { createServer, type Server } from "http";
import { registerEjsViewPaths } from "./ejsViews";
import { registerCatalogMultiBrandRoutes } from "./routes/catalogMultiBrandRoutes";
import { registerMikrotikRoutes } from "./routes/mikrotikRoutes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  registerEjsViewPaths(app);
  // Katalog multi-brand didaftarkan lebih dulu agar path /brand/* konsisten
  registerCatalogMultiBrandRoutes(app);
  registerMikrotikRoutes(app);

  return httpServer;
}
