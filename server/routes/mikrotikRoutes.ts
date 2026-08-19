import type { Express } from "express";

/**
 * Sisa route brand MikroTik lama: hanya redirect ID numerik.
 *
 * Katalog dan admin MikroTik sekarang sepenuhnya di SPA (`/mikrotik/shop`,
 * `/admin/mikrotik`) dengan API `/api/mikrotik-dcs`. CRUD legacy berbasis tabel
 * `produk_mikrotik` sudah dihapus — tabelnya memang tidak ada lagi di produksi,
 * jadi seluruh route-nya pasti gagal sejak query pertama.
 */
export function registerMikrotikRoutes(app: Express): void {
  /**
   * Landing page MikroTik ada di SPA `/mikrotik`.
   * Katalog produk ada di SPA `/mikrotik/shop`.
   *
   * Di server Express, kita cukup biarkan catch-all SPA menangani `/mikrotik`
   * dan hanya redirect ID numerik lama ke detail shop.
   */
  app.get("/mikrotik/:id", (req, res, next) => {
    const raw = String(req.params.id ?? "");
    if (raw === "shop") return next(); // biarkan SPA
    if (/^\d+$/.test(raw)) {
      res.redirect(302, `/mikrotik/shop/${encodeURIComponent(raw)}`);
      return;
    }
    next();
  });
}
