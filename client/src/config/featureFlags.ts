export const FEATURE_FLAGS = {
  /**
   * Saat `true`, semua path MikroTik (landing, shop, admin DCS, support/mikrotik) diarahkan ke Coming Soon.
   * - Default: halaman **dibuka** (false) jika env tidak di-set.
   * - Untuk coming soon lagi: set `VITE_DISABLE_MIKROTIK_ROUTES=true` di `.env` (root proyek, sama folder `vite.config.ts`) lalu restart dev server.
   */
  disableMikrotikRoutes: (() => {
    const raw = import.meta.env.VITE_DISABLE_MIKROTIK_ROUTES;
    if (raw == null || String(raw).trim() === "") return false;
    return String(raw).toLowerCase() === "true";
  })(),
} as const;

