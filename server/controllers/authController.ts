import type { Request, Response } from "express";
import {
  findByUsername,
  toPublicUser,
  verifyPassword,
  type PublicUser,
} from "../models/userModel";
import { recordAdminLoginAttempt } from "../models/adminActivityLogModel";

/**
 * IP asli klien untuk jejak audit.
 *
 * Memakai `req.ip`, BUKAN membaca X-Forwarded-For sendiri. Versi sebelumnya
 * mengambil entri paling KIRI dari header itu, dan entri itu sepenuhnya
 * dikendalikan klien: penyerang tinggal mengirim `X-Forwarded-For: 6.6.6.6`
 * dan admin_activity_log mencatat IP karangan — persis saat log itu paling
 * dibutuhkan, yaitu ketika brute force sedang berlangsung.
 *
 * `req.ip` diselesaikan Express lewat `trust proxy: "loopback"`: penelusuran
 * dimulai dari kanan, alamat loopback Apache dilewati, dan berhenti di entri
 * yang ditambahkan Apache sendiri. Entri palsu selalu berada di kiri, jadi
 * tidak pernah terpilih. Ini juga sumber IP yang sama dengan yang dipakai
 * rate limiter H-02, sehingga log dan pembatas tidak lagi bisa berbeda.
 */
function getClientIp(req: Request): string | null {
  return req.ip ?? null;
}

/**
 * Logika login inti. Dulu dipakai berdua dengan alias lama
 * /api/mikrotik-dcs/auth/login; alias itu sudah dihapus, jadi sekarang
 * /api/auth/login satu-satunya pemanggil. Tetap dipisah dari handler-nya
 * supaya penambahan pintu login berikutnya tidak menyalin logikanya lagi.
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
