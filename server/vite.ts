import { type Express } from "express";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";
import { isStaticAssetPath } from "./utils/staticAssetPath";

const viteLogger = createLogger();

export async function setupVite(server: Server, app: Express) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server, path: "/vite-hmr" },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);

  /** Jangan kirim index.html SPA untuk path yang di-handle Express (API/aset). */
  function isServerRenderedPath(p: string): boolean {
    return p.startsWith("/api/") || p.startsWith("/uploads/");
  }

  app.use("/{*path}", async (req, res, next) => {
    if (isServerRenderedPath(req.path)) {
      next();
      return;
    }
    // Aset yang tidak ditemukan harus 404, bukan index.html berstatus 200.
    // req.path selalu "/" di dalam app.use() ber-pattern; pakai originalUrl.
    if (isStaticAssetPath(req.originalUrl)) {
      res.status(404).type("txt").send("Not found");
      return;
    }
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}
