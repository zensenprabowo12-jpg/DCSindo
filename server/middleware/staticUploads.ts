import express, { type Express } from "express";
import path from "path";

/**
 * Static mount untuk file hasil upload admin (`public/uploads`).
 *
 * Dipisah dari route brand mana pun: ini urusan seluruh situs. Sebelumnya
 * "menumpang" di registerMikrotikRoutes — kalau modul itu dihapus, SELURUH
 * gambar produk ikut mati.
 *
 * Header keamanan:
 * - nosniff            : browser tidak boleh menebak tipe konten. Ini yang
 *                        menahan file berekstensi menyesatkan agar tidak
 *                        dieksekusi sebagai HTML (C-04 — lapis pertahanan,
 *                        bukan obatnya; akar masalahnya ditangani di Step 1+).
 * - dotfiles: "deny"   : .env / .htaccess dijawab 403, bukan disajikan.
 * - Content-Disposition: firmware & PDF diunduh, tidak dirender inline.
 *
 * Cache: nama file diawali timestamp dan praktis tidak pernah ditulis ulang,
 * jadi aman di-cache (menutup temuan M-08). Sengaja TANPA `immutable` — ada
 * beberapa file bernama tetap yang ditaruh manual (mis. mikrotik_logo.png);
 * `immutable` membuat penggantiannya tidak terlihat browser sampai cache habis.
 */
const NON_INLINE = /\.(ubi|npk|itb|bin|img|zip|tar|gz|pdf)$/i;

export function registerUploadStatic(app: Express): void {
  app.use(
    "/uploads",
    express.static(path.join(process.cwd(), "public", "uploads"), {
      dotfiles: "deny",
      maxAge: "7d",
      setHeaders: (res, filePath) => {
        res.setHeader("X-Content-Type-Options", "nosniff");
        if (NON_INLINE.test(filePath)) {
          res.setHeader("Content-Disposition", "attachment");
        }
      },
    }),
  );
}
