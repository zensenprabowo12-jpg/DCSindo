import rateLimit from "express-rate-limit";

/**
 * M-03 bagian 1 — pembatas laju untuk pendaftaran training publik.
 *
 * Endpoint POST /api/training/:id/register terbuka tanpa auth, jadi tanpa
 * pembatas siapa pun bisa membanjiri satu sesi dengan peserta palsu sampai
 * kuotanya habis — memblokir peserta asli tanpa perlu login sama sekali.
 *
 * Beda penting dari H-02 (loginRateLimit.ts): di sana
 * `skipSuccessfulRequests: true` karena yang mencurigakan adalah login GAGAL.
 * Di sini justru sebaliknya — pendaftaran spam menjawab 201 SUKSES, jadi
 * kalau sukses tidak dihitung, pembatasnya tidak menahan apa pun.
 *
 * Store memakai memori proses; sama seperti H-02 ini benar selama PM2 jalan
 * fork mode satu instance, dan counter ikut kosong saat restart.
 */

const WINDOW_MS = 15 * 60 * 1000; // 15 menit

/**
 * Body 429 HARUS objek, bukan teks polos.
 *
 * client/src/pages/training/types.ts:123 memanggil res.json() tanpa syarat.
 * Bawaan express-rate-limit adalah teks polos -> res.json() melempar ->
 * tertangkap catch di :124 -> pengunjung melihat "Koneksi ke server gagal"
 * alih-alih alasan sebenarnya. Persis jebakan yang sudah didokumentasikan di
 * loginRateLimit.ts:32-39.
 */
const TOO_MANY_BODY = {
  ok: false,
  message: "Terlalu banyak percobaan pendaftaran. Coba lagi dalam 15 menit.",
};

/**
 * Batas 10 per 15 menit per IP.
 *
 * `req.ip` tepercaya berkat `trust proxy: "loopback"` (server/index.ts:29):
 * X-Forwarded-For palsu dari klien selalu di kiri dan diabaikan.
 *
 * KONSEKUENSI YANG PERLU DISADARI: satu staf HR yang mendaftarkan lebih dari
 * 10 rekan kerja dari satu IP kantor akan terblokir 15 menit, dan saat ini
 * TIDAK ada endpoint admin untuk menambah peserta secara manual sebagai jalan
 * keluar. Kalau pola pemakaian seperti itu nyata, angka ini perlu dinaikkan
 * atau perlu jalur khusus admin.
 */
export const trainingRegisterRateLimit = rateLimit({
  windowMs: WINDOW_MS,
  limit: 10,
  message: TOO_MANY_BODY,
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: false,
});
