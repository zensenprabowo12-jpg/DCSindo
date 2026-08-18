import type { NextFunction, Request, Response } from "express";
import type { UserRole } from "../auth/roles";

/**
 * Role efektif dari sesi.
 * Kompatibilitas: sesi lama yang hanya punya `mikrotikDcsAdmin=true`
 * (tanpa `role`) tetap dianggap 'admin'.
 */
export function currentRole(req: Request): UserRole | null {
  if (req.session?.role) return req.session.role;
  if (req.session?.mikrotikDcsAdmin) return "admin";
  return null;
}

export function isAuthed(req: Request): boolean {
  return currentRole(req) !== null;
}

/**
 * Guard berbasis role dengan gaya yang sama seperti guard lama
 * (mengembalikan boolean + sudah menulis respons error bila gagal):
 *
 *   const ok = requireRole("admin")(req, res);
 *   if (!ok) return;
 *
 * - Belum login            → 401
 * - Login tapi role salah  → 403
 */
export function requireRole(...roles: UserRole[]) {
  return (req: Request, res: Response): boolean => {
    const role = currentRole(req);
    if (!role) {
      res.status(401).json({ ok: false, message: "Perlu login." });
      return false;
    }
    if (roles.length && !roles.includes(role)) {
      res.status(403).json({ ok: false, message: "Akses ditolak untuk role ini." });
      return false;
    }
    return true;
  };
}

/**
 * Bentuk middleware Express dari `requireRole`.
 *
 * Dipakai bila guard HARUS berjalan sebelum middleware lain — khususnya multer:
 * guard boolean yang dipanggil di dalam handler baru jalan setelah file terlanjur
 * ditulis ke disk. Respons error identik dengan `requireRole` (401 / 403 JSON).
 */
export function requireRoleMw(...roles: UserRole[]) {
  const guard = requireRole(...roles);
  return (req: Request, res: Response, next: NextFunction): void => {
    if (guard(req, res)) next();
  };
}
