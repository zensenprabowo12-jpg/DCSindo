import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { metaImagesPlugin } from "./vite-plugin-meta-images";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    tailwindcss(),
    metaImagesPlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@mikrotik": path.resolve(import.meta.dirname, "client", "src", "mikrotik"),
      "@ubiquiti": path.resolve(import.meta.dirname, "client", "src", "ubiquiti"),
      "@admin": path.resolve(import.meta.dirname, "client", "src", "admin"),
      "@vsol": path.resolve(import.meta.dirname, "client", "src", "vsol"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  // Karena `root` diarahkan ke folder `client`, Vite default-nya akan cari `.env` di folder itu.
  // Kita set `envDir` ke root repo supaya `.env` di root proyek tetap terbaca.
  envDir: import.meta.dirname,
  css: {
    postcss: {
      plugins: [],
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
