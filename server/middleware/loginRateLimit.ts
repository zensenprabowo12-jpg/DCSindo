import rateLimit, { ipKeyGenerator } from "express-rate-limit";
import type { Request } from "express";

/**
 * H-02 — pembatas laju untuk endpoint login.
 *
 * Dua lapis, karena satu lapis tidak menjawab dua ancaman yang berbeda:
 *
 * - `loginIpRateLimit`       — menahan satu penyerang yang menggempur dari satu
 *                              tempat.
 * - `loginUsernameRateLimit` — menahan botnet yang menyasar SATU akun dari
 *                              banyak IP; lapis per-IP sama sekali tidak
 *                              melindungi dari pola itu.
 *
 * Keduanya diekspor sebagai instance TUNGGAL dan dipasang di kedua endpoint
 * login (/api/auth/login dan alias lama /api/mikrotik-dcs/auth/login). Ini
 * disengaja: kalau tiap endpoint punya limiter sendiri, penyerang cukup
 * menyelang-nyeling kedua URL untuk mendapat jatah dua kali lipat.
 *
 * Store memakai memori proses. Itu benar SELAMA PM2 berjalan fork mode satu
 * instance (`pm2 start dist/index.cjs --name dcsindo`, tanpa flag -i). Kalau
 * suatu saat diubah ke cluster, tiap instance punya hitungan sendiri dan batas
 * efektifnya terkali jumlah instance — tanpa error, tanpa peringatan.
 *
 * Counter ikut kosong saat `pm2 restart`. Untuk throttling login itu bukan
 * kelemahan (penyerang tidak bisa memicu restart) dan sekaligus jadi tombol
 * darurat bila ada admin yang telanjur terkunci.
 */

const WINDOW_MS = 15 * 60 * 1000; // 15 menit

/**
 * Body 429 HARUS objek, bukan string.
 *
 * Bawaan express-rate-limit adalah teks polos. client/src/admin/Login.tsx
 * memanggil res.json() lalu membaca `data.message`; teks polos membuat parse
 * itu melempar, tertangkap catch, dan admin melihat "Koneksi ke server gagal"
 * alih-alih alasan sebenarnya.
 */
const TOO_MANY_BODY = {
  ok: false,
  message: "Terlalu banyak percobaan login. Coba lagi dalam 15 menit.",
};

/**
 * `skipSuccessfulRequests` memakai default `requestWasSuccessful`, yaitu
 * status < 400. Login gagal menjawab 401 (dihitung), login sukses 200 (tidak
 * dihitung) — jadi admin yang bekerja normal praktis tidak pernah menyentuh
 * batas ini, hanya kegagalan yang menumpuk.
 */
const shared = {
  windowMs: WINDOW_MS,
  message: TOO_MANY_BODY,
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
};

/**
 * Lapis A — per IP. Sengaja 20, bukan 5: seluruh admin kantor kemungkinan
 * berbagi satu IP publik lewat NAT, dan batas ketat membuat mereka saling
 * mengunci hanya karena salah ketik. Dua puluh kegagalan per 15 menit tetap
 * membatasi penyerang ke sekitar 1.900 percobaan sehari — bukan ancaman
 * terhadap bcrypt.
 *
 * `req.ip` sudah tepercaya berkat `trust proxy: "loopback"`: entri
 * X-Forwarded-For palsu dari klien selalu berada di kiri dan diabaikan.
 */
export const loginIpRateLimit = rateLimit({
  ...shared,
  limit: 20,
});

/**
 * Lapis B — per nama akun, lintas IP.
 *
 * Perlu `express.json()` sudah berjalan lebih dulu supaya `req.body` terbaca.
 * Username dinormalkan (trim + huruf kecil) agar "Admin" dan "admin" tidak
 * mendapat dua jatah terpisah.
 *
 * Bila username kosong/bukan string, kunci jatuh kembali ke IP lewat
 * `ipKeyGenerator` — helper resmi yang meringkas alamat IPv6 ke satu subnet,
 * supaya klien IPv6 tidak lolos hanya dengan berganti alamat di blok yang sama.
 */
export const loginUsernameRateLimit = rateLimit({
  ...shared,
  limit: 8,
  keyGenerator: (req: Request): string => {
    const raw = (req.body as { username?: unknown } | undefined)?.username;
    const uname = typeof raw === "string" ? raw.trim().toLowerCase() : "";
    return uname ? `u:${uname}` : `ip:${ipKeyGenerator(req.ip ?? "")}`;
  },
});
