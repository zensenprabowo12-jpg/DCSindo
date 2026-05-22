import type { Express } from "express";
import path from "path";

/** Dua root: `views/` (halaman app) + `mikrotik/views/` (layout & partial global). */
export function registerEjsViewPaths(app: Express): void {
  app.set("views", [
    path.join(process.cwd(), "views"),
    path.join(process.cwd(), "client", "src", "mikrotik", "views"),
  ]);
  app.set("view engine", "ejs");
}
