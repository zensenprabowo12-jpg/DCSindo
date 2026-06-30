/**
 * Definisi role pengguna panel (dipakai lintas backend).
 * Fase 0: hanya 'admin' yang aktif penuh; 'trainer' & 'sales' disiapkan
 * untuk fase berikutnya (pemisahan hak akses).
 */
export const USER_ROLES = ["admin", "trainer", "sales"] as const;
export type UserRole = (typeof USER_ROLES)[number];

export function isValidRole(value: unknown): value is UserRole {
  return typeof value === "string" && (USER_ROLES as readonly string[]).includes(value);
}
