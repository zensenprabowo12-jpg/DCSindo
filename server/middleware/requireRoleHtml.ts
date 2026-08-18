import type { NextFunction, Request, Response } from "express";
import type { UserRole } from "../auth/roles";
import { currentRole } from "./requireRole";

/**
 * Guard untuk halaman SSR (EJS).
 *
 * Browser tidak bisa menampilkan body JSON 401 dengan layak, jadi pengunjung yang
 * belum login — atau login dengan role yang salah — diarahkan ke halaman login SPA.
 * Sengaja tidak membedakan 401 vs 403: keduanya berujung ke layar login yang sama.
 *
 * Signature middleware `(req, res, next)` supaya bisa dipasang SEBELUM multer.
 */
export function requireRoleHtml(...roles: UserRole[]) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const role = currentRole(req);
    if (!role || (roles.length && !roles.includes(role))) {
      res.redirect(302, "/admin/login");
      return;
    }
    next();
  };
}
