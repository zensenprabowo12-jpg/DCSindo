import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { isStaticAssetPath } from "./utils/staticAssetPath";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  // Di dalam app.use() ber-pattern, req.path selalu "/" — path asli ada di originalUrl.
  app.use("/{*path}", (req, res) => {
    if (isStaticAssetPath(req.originalUrl)) {
      res.status(404).type("txt").send("Not found");
      return;
    }
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
