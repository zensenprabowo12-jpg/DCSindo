-- Migration: saklar "Published" per produk — MikroTik, Ubiquiti, V-SOL
-- (Stage 2; pola sama dengan FiberHome, lihat migrate_fiberhome_is_published.sql
-- dan PROJECT_SUMMARY.md §7 "Pola Published per produk").
--
-- is_published = 1 → tampil di situs publik.
-- is_published = 0 → disembunyikan dari situs publik, TIDAK dihapus:
--                    tetap tampil & bisa diedit di /admin/<brand>.
--
-- DEFAULT 1 + NOT NULL: semua produk yang sudah ada otomatis tetap tampil.
-- `IF NOT EXISTS` (MariaDB 11.8): aman dijalankan berulang kali.
-- Nama tabel selalu diawali `dcsindo.` supaya tidak salah database di phpMyAdmin.
--
-- ⚠️ JALANKAN SEBELUM deploy kode. Tanpa kolom ini, endpoint produk
-- MikroTik/Ubiquiti/V-SOL (publik & admin) gagal 500 "Unknown column 'is_published'".

SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE dcsindo.mikrotik_dcs_products
  ADD COLUMN IF NOT EXISTS is_published TINYINT(1) NOT NULL DEFAULT 1 AFTER sort_order;

ALTER TABLE dcsindo.ubiquiti_dcs_products
  ADD COLUMN IF NOT EXISTS is_published TINYINT(1) NOT NULL DEFAULT 1 AFTER sort_order;

ALTER TABLE dcsindo.vsol_dcs_products
  ADD COLUMN IF NOT EXISTS is_published TINYINT(1) NOT NULL DEFAULT 1 AFTER sort_order;

-- ── Verifikasi: tiap tabel harus hidden = 0 dan published = total ────────────
SELECT 'mikrotik_dcs_products' AS tabel, COUNT(*) AS total, SUM(is_published = 1) AS published, SUM(is_published = 0) AS hidden
  FROM dcsindo.mikrotik_dcs_products;

SELECT 'ubiquiti_dcs_products' AS tabel, COUNT(*) AS total, SUM(is_published = 1) AS published, SUM(is_published = 0) AS hidden
  FROM dcsindo.ubiquiti_dcs_products;

SELECT 'vsol_dcs_products' AS tabel, COUNT(*) AS total, SUM(is_published = 1) AS published, SUM(is_published = 0) AS hidden
  FROM dcsindo.vsol_dcs_products;
