import type { Request, Response } from "express";
import {
  findByUsername,
  toPublicUser,
  verifyPassword,
  type PublicUser,
} from "../models/userModel";
import { recordAdminLoginAttempt } from "../models/adminActivityLogModel";

/** Ambil IP asli klien (memperhatikan reverse proxy / X-Forwarded-For). */
function getClientIp(req: Request): string | null {
  const fwd = req.headers["x-forwarded-for"];
  if (typeof fwd === "string" && fwd.trim()) return fwd.split(",")[0]!.trim();
  if (Array.isArray(fwd) && fwd.length) return fwd[0]!.trim();
  return req.socket?.remoteAddress ?? null;
}

/**
 * Logika login inti (dipakai endpoint baru /api/auth/login DAN endpoint lama
 * /api/mikrotik-dcs/auth/login agar tidak ada duplikasi).
 *
 * - Verifikasi username+password ke tabel `users` (bcrypt).
 * - Kalau sukses: set sesi (userId, username, role) + `mikrotikDcsAdmin=true`
 *   untuk kompatibilitas guard/endpoint lama.
 * - Selalu mencatat percobaan ke admin_activity_log (sukses/gagal).
 */
export async function performLogin(
  req: Request,
  username: unknown,
  password: unknown,
): Promise<{ ok: true; user: PublicUser } | { ok: false; message: string }> {
  const uname = typeof username === "string" ? username : "";
  const pass = typeof password === "string" ? password : "";

  const record = (success: boolean) =>
    void recordAdminLoginAttempt({
      attemptedUsername: uname,
      success,
      ipAddress: getClientIp(req),
      userAgent: typeof req.headers["user-agent"] === "string" ? req.headers["user-agent"] : null,
    });

  const user = await findByUsername(uname);
  if (!user || !user.is_active) {
    record(false);
    return { ok: false, message: "Username atau password salah." };
  }

  const valid = await verifyPassword(pass, user.password_hash);
  if (!valid) {
    record(false);
    return { ok: false, message: "Username atau password salah." };
  }

  // Sukses → terbitkan session ID baru SEBELUM identitas ditulis (H-03).
  // Tanpa ini, ID yang sudah dipegang penyerang sebelum korban login ikut
  // naik pangkat menjadi sesi admin (session fixation).
  //
  // Tidak ada state pra-login yang perlu diselamatkan: SessionData hanya
  // berisi empat field di bawah ini, dan tidak ada token CSRF maupun
  // keranjang yang hidup sebelum autentikasi.
  //
  // regenerate() berbasis callback; error-nya dilempar agar Express 5
  // meneruskannya ke error handler (→ 500 yang sudah tersanitasi H-04),
  // bukan berpura-pura login berhasil di atas sesi lama.
  await new Promise<void>((resolve, reject) => {
    req.session.regenerate((err) => (err ? reject(err) : resolve()));
  });

  // Mulai baris ini req.session sudah objek baru dengan ID baru.
  req.session.userId = user.id;
  req.session.username = user.username;
  req.session.role = user.role;
  req.session.mikrotikDcsAdmin = true; // kompatibilitas guard/endpoint lama

  record(true);
  return { ok: true, user: toPublicUser(user) };
}

// ─── ENDPOINT NETRAL /api/auth/* ──────────────────────────────

export async function apiAuthLogin(req: Request, res: Response): Promise<void> {
  const { username, password } = (req.body ?? {}) as { username?: unknown; password?: unknown };
  const result = await performLogin(req, username, password);
  if (result.ok) {
    res.json({ ok: true, data: { user: result.user } });
    return;
  }
  res.status(401).json({ ok: false, message: result.message });
}

export function apiAuthLogout(req: Request, res: Response): void {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({ ok: false, message: "Gagal logout" });
      return;
    }
    res.json({ ok: true });
  });
}

export function apiAuthMe(req: Request, res: Response): void {
  const authed = Boolean(req.session.userId || req.session.mikrotikDcsAdmin);
  const user =
    authed && req.session.username && req.session.role
      ? { username: req.session.username, role: req.session.role }
      : null;
  res.json({ ok: true, authed, user });
}
