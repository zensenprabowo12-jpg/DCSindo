export const FEATURE_FLAGS = {
  /**
   * Temporarily blocks all MikroTik pages by routing them to a "Coming Soon" page.
   * Toggle via `VITE_DISABLE_MIKROTIK_ROUTES=true` (easy to revert).
   */
  disableMikrotikRoutes: (() => {
    const raw = import.meta.env.VITE_DISABLE_MIKROTIK_ROUTES;
    // Default ON (blocked) until explicitly set to "false"
    if (raw == null || String(raw).trim() === "") return true;
    return String(raw).toLowerCase() === "true";
  })(),
} as const;

