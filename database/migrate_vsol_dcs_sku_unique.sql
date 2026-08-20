-- Migration: UNIQUE constraint pada vsol_dcs_products.sku  (M-07)
-- Jalankan MANUAL sekali via phpMyAdmin. TIDAK dijalankan otomatis saat startup.
--
-- Server: MariaDB 11.8 (bukan MySQL), database `dcsindo`.
-- Kolom: sku VARCHAR(100) NOT NULL, collation utf8mb4_unicode_ci.

-- -- 1. PRE-FLIGHT: wajib kosong sebelum lanjut ke langkah 2 ----------
-- Collation utf8mb4_unicode_ci bersifat case-insensitive DAN mengabaikan
-- spasi di akhir, jadi query ini sekaligus menangkap 'v1600gs-r' vs
-- 'V1600GS-R' dan 'ABC' vs 'ABC '. Semuanya akan bentrok setelah UNIQUE aktif.
SELECT sku, COUNT(*) AS jumlah, GROUP_CONCAT(id ORDER BY id) AS ids
FROM vsol_dcs_products
GROUP BY sku
HAVING COUNT(*) > 1;

-- SKU kosong juga bentrok satu sama lain (kolom NOT NULL tanpa default).
SELECT id, nama_produk, sku
FROM vsol_dcs_products
WHERE TRIM(sku) = '';

-- -- 2. Terapkan constraint -------------------------------------------
ALTER TABLE vsol_dcs_products
  ADD CONSTRAINT uq_vsol_dcs_sku UNIQUE (sku);

-- -- 3. Verifikasi ----------------------------------------------------
SHOW INDEX FROM vsol_dcs_products WHERE Key_name = 'uq_vsol_dcs_sku';

-- -- 4. ROLLBACK (kalau perlu dibatalkan) -----------------------------
-- ALTER TABLE vsol_dcs_products DROP INDEX uq_vsol_dcs_sku;
