-- Migration: panduan instalasi PER-ITEM untuk tabel `firmware_files`.
--
-- Catatan nama tabel: tabelnya `firmware_files`, BUKAN `firmware`.
--
-- Isi kolom = teks biasa, SATU LANGKAH PER BARIS (dipisah newline), sama persis
-- dengan format kunci global `install_guide` di `firmware_popup_settings`.
-- Penomoran 1,2,3… dibuat otomatis oleh komponen — JANGAN ditulis di teks.
--
-- NULL / kosong = firmware ini tidak punya panduan sendiri → popup publik
-- memakai panduan GLOBAL dari `firmware_popup_settings.install_guide`.
-- Karena itu kolom ini sengaja NULL tanpa DEFAULT: 20 firmware yang sudah ada
-- tetap menampilkan panduan global, tidak ada yang berubah setelah migrasi.
--
-- `IF NOT EXISTS` didukung MariaDB (server produksi MariaDB 11.8), sehingga
-- file ini aman dijalankan berulang kali. Di MySQL asli klausa ini TIDAK ada —
-- kalau suatu saat pindah ke MySQL, buang `IF NOT EXISTS` dan jalankan sekali.
--
-- Harus dijalankan di DUA database: lokal (XAMPP) dan produksi (192.168.92.27).

SET NAMES utf8mb4;

ALTER TABLE firmware_files
  ADD COLUMN IF NOT EXISTS install_guide TEXT NULL AFTER notes;

-- ── Verifikasi setelah import ────────────────────────────────────────────────
-- Kolom harus muncul dengan Null='YES' dan Default=NULL:
SELECT COLUMN_NAME, COLUMN_TYPE, IS_NULLABLE, COLUMN_DEFAULT
  FROM information_schema.COLUMNS
 WHERE TABLE_SCHEMA = DATABASE()
   AND TABLE_NAME   = 'firmware_files'
   AND COLUMN_NAME  = 'install_guide';

-- Berapa firmware yang sudah punya panduan sendiri (harus 0 tepat setelah migrasi):
-- SELECT COUNT(*) AS punya_panduan_sendiri
--   FROM firmware_files
--  WHERE install_guide IS NOT NULL AND install_guide <> '';
