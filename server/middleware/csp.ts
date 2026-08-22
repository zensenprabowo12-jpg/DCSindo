import type { RequestHandler } from "express";

/**
 * H-06 Tahap 2 Fase B — Content Security Policy, MODE ENFORCE.
 *
 * Header yang dikirim adalah `Content-Security-Policy`: browser sekarang
 * BENAR-BENAR MEMBLOKIR apa pun yang melanggar policy di bawah, bukan lagi
 * sekadar melapor. Fase A (Report-Only) sudah lewat: laporannya bersih setelah
 * whitelist frame-src ditambal di 337fc88.
 *
 * `report-uri` sengaja DIPERTAHANKAN. Dalam mode enforce ia tetap mengirim
 * laporan untuk setiap request yang diblokir — jadi kalau ada sumber yang
 * terlewat, kita melihatnya di log alih-alih menebak dari keluhan pengguna.
 *
 * Setiap sumber di bawah sudah diverifikasi terhadap `dist/` hasil build, bukan
 * dikira-kira dari kode sumber.
 */

/** Semua origin yang terbukti dimuat, dikelompokkan agar alasannya terbaca. */
const DIRECTIVES: Record<string, string> = {
  // Jaring pengaman untuk direktif yang tidak disebut eksplisit di bawah.
  "default-src": "'self'",

  // Menutup injeksi <base href> yang bisa membelokkan semua URL relatif.
  "base-uri": "'none'",

  // Tidak ada Flash/applet/embed.
  "object-src": "'none'",

  // Pengganti modern X-Frame-Options: DENY dari Tahap 1; keduanya berdampingan.
  "frame-ancestors": "'none'",

  // Semua submit lewat fetch(); tidak ada <form action> ke luar.
  "form-action": "'self'",

  // Terverifikasi di dist/public/index.html: NOL script inline — Vite menaruh
  // seluruh kode di /assets/*.js sebagai modul eksternal. Bundle juga bebas
  // eval/new Function/WebAssembly, jadi 'unsafe-eval' tidak diperlukan.
  // Inilah direktif yang membuat CSP di sini benar-benar bernilai.
  "script-src": "'self'",

  // 'unsafe-inline' terpaksa: 9 komponen memakai <style>{...}</style> dan
  // Google Fonts mengirim stylesheet dari fonts.googleapis.com. Jauh kurang
  // berbahaya daripada 'unsafe-inline' di script — style tidak menjalankan kode.
  "style-src": "'self' 'unsafe-inline' https://fonts.googleapis.com",

  // File font (.woff2) datang dari gstatic, BUKAN googleapis. Dua host berbeda
  // untuk dua direktif berbeda; sering tertukar.
  "font-src": "'self' https://fonts.gstatic.com",

  // blob: WAJIB — 5 form admin memakai URL.createObjectURL untuk pratinjau
  // gambar sebelum upload (ProductForm mikrotik/ubiquiti/vsol, TrainingForm
  // thumbnail + QR). Tanpa ini pratinjau mati tanpa pesan error apa pun.
  // data: disertakan sebagai bantalan; aset build sekarang tidak memakainya,
  // jadi boleh dicabut di Fase B kalau laporan bersih.
  "img-src": "'self' data: blob:",

  // Video produk yang diunggah, dilayani dari /uploads.
  "media-src": "'self'",

  // script.googleusercontent.com WAJIB ikut: endpoint Apps Script /exec selalu
  // membalas 302 ke sana, dan browser mengevaluasi setiap URL dalam rantai
  // redirect. Tanpa host kedua ini, daftar tiket di /support diam-diam kosong —
  // dan laporan pelanggarannya akan menyebut URL SEBELUM redirect, yaitu host
  // yang justru sudah diizinkan.
  "connect-src": "'self' https://script.google.com https://script.googleusercontent.com",

  // Tiga iframe. Sengaja tanpa 'self': aplikasi tidak pernah meng-iframe
  // halamannya sendiri. Isi di DALAM iframe tunduk pada CSP milik YouTube/UI,
  // bukan milik kita — jadi googlevideo/ytimg tidak perlu didaftarkan.
  "frame-src":
    "https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com https://player.vimeo.com https://gpt.distributor.ui-apps.com",

  // Tidak ada Worker sama sekali; 'self' dipilih agar tidak meledak bila suatu
  // library menambahkannya diam-diam.
  "worker-src": "'self'",

  "manifest-src": "'self'",
};

/**
 * Endpoint laporan. Sengaja hanya `report-uri` (relatif), tanpa `report-to`:
 * report-uri memang sudah usang di spesifikasi, tapi justru yang paling luas
 * didukung hari ini (Chrome, Firefox, Safari), sementara `report-to` menuntut
 * header Reporting-Endpoints berisi URL absolut — dan menyusunnya dari
 * `req.get("host")` membuat tujuan laporan bisa dibelokkan lewat Host header.
 * Pertimbangkan lagi di Fase B dengan origin yang dipatok di konfigurasi.
 */
export const CSP_REPORT_PATH = "/api/csp-report";

/**
 * `upgrade-insecure-requests` masih SENGAJA belum ada. Alasannya berubah: dulu
 * karena Report-Only mengabaikannya, sekarang karena menambahkannya adalah
 * perubahan direktif tersendiri — ia menulis ulang setiap URL http:// menjadi
 * https://, termasuk milik pihak ketiga, dan itu perlu audit mixed-content
 * sendiri. Flip ini sengaja hanya mengganti nama header, tidak lebih.
 */
export const CSP_POLICY = [
  ...Object.entries(DIRECTIVES).map(([name, value]) => `${name} ${value}`),
  `report-uri ${CSP_REPORT_PATH}`,
].join("; ");

const IS_PROD = process.env.NODE_ENV === "production";

/**
 * Digate ke production, dan sekarang gate itu jauh lebih penting: dalam mode
 * enforce, policy ini akan benar-benar membuat layar putih di komputer
 * developer karena Vite dev butuh script inline dan WebSocket HMR. Keputusannya
 * diambil sekali saat modul dimuat, jadi mode dev tidak menanggung biaya
 * per-request.
 */
export const csp: RequestHandler = IS_PROD
  ? (_req, res, next) => {
      res.setHeader("Content-Security-Policy", CSP_POLICY);
      next();
    }
  : (_req, _res, next) => next();
