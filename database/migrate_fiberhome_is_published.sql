-- Migration: saklar "Published" per produk FiberHome (Stage 1 pola published).
--
-- is_published = 1 → tampil di situs publik (list /fiberhome, detail
--                    /fiberhome/:sku, search modal).
-- is_published = 0 → disembunyikan dari situs publik, tetapi TIDAK dihapus:
--                    tetap tampil dan bisa diedit di /admin/fiberhome.
--
-- DEFAULT 1 + NOT NULL: semua produk yang sudah ada otomatis tetap tampil,
-- jadi tidak ada yang berubah di situs setelah migrasi ini dijalankan.
--
-- `IF NOT EXISTS` didukung MariaDB (server produksi MariaDB 11.8), sehingga
-- file ini aman dijalankan berulang kali. Di MySQL asli klausa ini TIDAK ada.
--
-- ⚠️ JALANKAN SEBELUM deploy kode yang membaca kolom ini. Tanpa kolom ini,
-- semua endpoint FiberHome (publik & admin) gagal dengan error 500
-- "Unknown column 'is_published'".

SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE fiberhome_products
  ADD COLUMN IF NOT EXISTS is_published TINYINT(1) NOT NULL DEFAULT 1 AFTER sort_order;

-- ── Verifikasi setelah import ────────────────────────────────────────────────
-- 1) Kolom harus ada: COLUMN_TYPE='tinyint(1)', IS_NULLABLE='NO', COLUMN_DEFAULT='1'.
SELECT COLUMN_NAME, COLUMN_TYPE, IS_NULLABLE, COLUMN_DEFAULT
  FROM information_schema.COLUMNS
 WHERE TABLE_SCHEMA = DATABASE()
   AND TABLE_NAME   = 'fiberhome_products'
   AND COLUMN_NAME  = 'is_published';

-- 2) Semua produk lama harus published (hidden = 0).
SELECT COUNT(*) AS total, SUM(is_published = 1) AS published, SUM(is_published = 0) AS hidden
  FROM fiberhome_products;
