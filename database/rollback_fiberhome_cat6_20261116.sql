-- ============================================================================
-- ROLLBACK untuk update_fiberhome_cat6_datasheet_20261116.sql
-- Mengembalikan produk FiberHome id = 2 dari tabel backup bak_20261116_*.
--
-- Yang dikembalikan: sku, name, description (+ category, untuk jaga-jaga),
--                    technical specs, key features, applications (dengan id asli).
-- Yang TIDAK disentuh: image_path, gallery, datasheet_path, sort_order,
--                      is_published — supaya perubahan admin setelah update
--                      (foto, PDF, saklar Published) tidak ikut mundur.
--
-- Jika tabel backup tidak ada, statement pertama error dan tidak ada yang berubah.
-- Tabel backup TIDAK dihapus otomatis (lihat langkah 3, opsional).
-- ============================================================================

SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci;

-- ── 0. Cek backup: produk harus 1 baris ────────────────────────────────────
SELECT id, sku, name, category FROM dcsindo.bak_20261116_fiberhome_products;
SELECT
  (SELECT COUNT(*) FROM dcsindo.bak_20261116_fiberhome_technical_specs) AS bak_specs,
  (SELECT COUNT(*) FROM dcsindo.bak_20261116_fiberhome_key_features)    AS bak_features,
  (SELECT COUNT(*) FROM dcsindo.bak_20261116_fiberhome_applications)    AS bak_applications;

-- ── 1. Restore dalam satu transaksi ────────────────────────────────────────
START TRANSACTION;

-- @pid = 2 hanya jika backup produk id 2 ada; selain itu NULL → tidak ada perubahan.
SET @pid = (SELECT id FROM dcsindo.bak_20261116_fiberhome_products WHERE id = 2);
SELECT @pid AS target_product_id;

UPDATE dcsindo.fiberhome_products p
  JOIN dcsindo.bak_20261116_fiberhome_products b ON b.id = p.id
   SET p.sku         = b.sku,
       p.name        = b.name,
       p.category    = b.category,
       p.description = b.description
 WHERE p.id = @pid;

DELETE FROM dcsindo.fiberhome_technical_specs WHERE product_id = @pid;
DELETE FROM dcsindo.fiberhome_key_features    WHERE product_id = @pid;
DELETE FROM dcsindo.fiberhome_applications    WHERE product_id = @pid;

INSERT INTO dcsindo.fiberhome_technical_specs (id, product_id, label, value, spec_group, sort_order)
SELECT id, product_id, label, value, spec_group, sort_order
  FROM dcsindo.bak_20261116_fiberhome_technical_specs
 WHERE product_id = @pid;

INSERT INTO dcsindo.fiberhome_key_features (id, product_id, feature, sort_order)
SELECT id, product_id, feature, sort_order
  FROM dcsindo.bak_20261116_fiberhome_key_features
 WHERE product_id = @pid;

INSERT INTO dcsindo.fiberhome_applications (id, product_id, title, description, sort_order)
SELECT id, product_id, title, description, sort_order
  FROM dcsindo.bak_20261116_fiberhome_applications
 WHERE product_id = @pid;

COMMIT;

-- ── 2. Verifikasi: sku kembali FH-CAT6-UTP-PVC-305, jumlah = jumlah backup ─
SELECT id, sku, name, category, is_published FROM dcsindo.fiberhome_products WHERE id = 2;
SELECT
  (SELECT COUNT(*) FROM dcsindo.fiberhome_technical_specs WHERE product_id = 2) AS specs,
  (SELECT COUNT(*) FROM dcsindo.fiberhome_key_features    WHERE product_id = 2) AS features,
  (SELECT COUNT(*) FROM dcsindo.fiberhome_applications    WHERE product_id = 2) AS applications;

-- ── 3. (Opsional, NANTI setelah yakin) hapus tabel backup ───────────────────
-- DROP TABLE dcsindo.bak_20261116_fiberhome_products;
-- DROP TABLE dcsindo.bak_20261116_fiberhome_technical_specs;
-- DROP TABLE dcsindo.bak_20261116_fiberhome_key_features;
-- DROP TABLE dcsindo.bak_20261116_fiberhome_applications;
