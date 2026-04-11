import type { Express } from "express";
import { createServer, type Server } from "http";
import { registerCatalogMultiBrandRoutes } from "./routes/catalogMultiBrandRoutes";
import { registerMikrotikRoutes } from "./routes/mikrotikRoutes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  registerMikrotikRoutes(app);
  registerCatalogMultiBrandRoutes(app);

  return httpServer;
}
