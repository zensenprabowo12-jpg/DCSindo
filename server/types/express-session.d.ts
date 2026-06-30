import "express-session";
import type { UserRole } from "../auth/roles";

declare module "express-session" {
  interface SessionData {
    /**
     * Kompatibilitas lama: true setelah login admin sukses.
     * Masih di-set saat login agar guard & endpoint `/auth/me` lama tetap jalan.
     * Akan dipensiunkan setelah semua guard pindah ke `role`.
     */
    mikrotikDcsAdmin?: boolean;

    /** Identitas user yang login (dari tabel `users`). */
    userId?: number;
    username?: string;
    role?: UserRole;
  }
}
