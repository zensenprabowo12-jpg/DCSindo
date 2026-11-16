-- ============================================================================
-- Update FiberHome produk id = 2 agar SAMA PERSIS dengan datasheet resmi
-- ("ganti total"): U/UTP 4Pairs Cat.6 LSZH Sheath Lan Cable, 24AWG.
--
--   SKU lama : FH-CAT6-UTP-PVC-305
--   SKU baru : FH-CAT6-UTP-LSZH-24AWG   → URL publik /fiberhome/FH-CAT6-UTP-LSZH-24AWG
--
-- Yang DIGANTI : sku, name, description, technical specs (24), key features (5),
--                applications (3).
-- Yang TIDAK diubah: category, image_path, gallery, datasheet_path, sort_order,
--                    is_published (tetap 0 = hidden).
--
-- Pengaman:
--   * Hanya mengenai baris id = 2 DAN sku ∈ {lama, baru}. Kalau tidak cocok,
--     @pid = NULL dan semua UPDATE/DELETE/INSERT tidak mengenai apa pun.
--   * @pid juga NULL jika SKU baru sudah dipakai produk LAIN (konflik URL).
--   * Backup dibuat SEBELUM perubahan (CREATE TABLE IF NOT EXISTS → kalau
--     dijalankan ulang, backup asli TIDAK ditimpa).
--   * Aman dijalankan ulang setelah sukses: guard mencocokkan SKU baru, anak
--     dihapus & di-insert ulang dengan isi yang sama (hasil identik).
--   * Rollback: database/rollback_fiberhome_cat6_20261116.sql
-- ============================================================================

SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci;

-- ── 0. Cek awal (informasi saja) ────────────────────────────────────────────
-- Harus 1 baris: id 2, sku lama (atau sku baru kalau ini run ulang).
SELECT id, sku, name, category, is_published
  FROM dcsindo.fiberhome_products WHERE id = 2;
-- Harus 0: SKU baru tidak boleh dipakai produk lain.
SELECT COUNT(*) AS sku_baru_dipakai_produk_lain
  FROM dcsindo.fiberhome_products
 WHERE sku = 'FH-CAT6-UTP-LSZH-24AWG' AND id <> 2;

-- ── 1. Backup (DDL → di luar transaksi; hanya dibuat sekali) ────────────────
CREATE TABLE IF NOT EXISTS dcsindo.bak_20261116_fiberhome_products AS
  SELECT * FROM dcsindo.fiberhome_products WHERE id = 2;
CREATE TABLE IF NOT EXISTS dcsindo.bak_20261116_fiberhome_technical_specs AS
  SELECT * FROM dcsindo.fiberhome_technical_specs WHERE product_id = 2;
CREATE TABLE IF NOT EXISTS dcsindo.bak_20261116_fiberhome_key_features AS
  SELECT * FROM dcsindo.fiberhome_key_features WHERE product_id = 2;
CREATE TABLE IF NOT EXISTS dcsindo.bak_20261116_fiberhome_applications AS
  SELECT * FROM dcsindo.fiberhome_applications WHERE product_id = 2;

-- Cek backup (produk harus 1 baris).
SELECT
  (SELECT COUNT(*) FROM dcsindo.bak_20261116_fiberhome_products)        AS bak_products,
  (SELECT COUNT(*) FROM dcsindo.bak_20261116_fiberhome_technical_specs) AS bak_specs,
  (SELECT COUNT(*) FROM dcsindo.bak_20261116_fiberhome_key_features)    AS bak_features,
  (SELECT COUNT(*) FROM dcsindo.bak_20261116_fiberhome_applications)    AS bak_applications;

-- ── 2. Perubahan dalam satu transaksi ──────────────────────────────────────
START TRANSACTION;

SET @pid = (
  SELECT p.id FROM dcsindo.fiberhome_products p
   WHERE p.id = 2
     AND p.sku IN ('FH-CAT6-UTP-PVC-305', 'FH-CAT6-UTP-LSZH-24AWG')
     AND NOT EXISTS (
       SELECT 1 FROM dcsindo.fiberhome_products x
        WHERE x.sku = 'FH-CAT6-UTP-LSZH-24AWG' AND x.id <> 2
     )
);
-- Harus 2. Kalau NULL → guard gagal, langkah di bawah tidak mengubah apa pun.
SELECT @pid AS target_product_id;

UPDATE dcsindo.fiberhome_products
   SET sku         = 'FH-CAT6-UTP-LSZH-24AWG',
       name        = 'U/UTP 4Pairs Cat.6 LSZH Sheath Lan Cable',
       description = 'Category 6 U/UTP Cable, 24AWG, LSZH sheath, 4 pairs. Category 6 cable is the ultimate solution for a future proof network. It is specifically designed to support the exacting requirements for tomorrow''s protocols, yet is fully backwards compatible with today''s needs. Cable shall be ANSI/TIA-568.2-D and IEC 61156.'
 WHERE id = @pid;

DELETE FROM dcsindo.fiberhome_technical_specs WHERE product_id = @pid;
DELETE FROM dcsindo.fiberhome_key_features    WHERE product_id = @pid;
DELETE FROM dcsindo.fiberhome_applications    WHERE product_id = @pid;

-- Technical specs (24). Group "Electrical" untuk 8 sifat listrik (lihat laporan).
INSERT INTO dcsindo.fiberhome_technical_specs (product_id, label, value, spec_group, sort_order)
SELECT @pid, t.label, t.value, t.spec_group, t.sort_order FROM (
  SELECT 'Conductor Resistance (20°C)' AS label, '≤9.5 Ω/100m' AS value, 'Electrical' AS spec_group, 0 AS sort_order
  UNION ALL SELECT 'Electrical Resistance Unbalance (20°C)', '≤2.0%', 'Electrical', 1
  UNION ALL SELECT 'Insulation Resistance', '>5000 MΩ·km', 'Electrical', 2
  UNION ALL SELECT 'Pair to Ground Capacitance Unbalance (0.8 kHz or 1kHz)', '≤160 pF/100m', 'Electrical', 3
  UNION ALL SELECT 'Nominal Velocity of Propagation (NVP)', '69%', 'Electrical', 4
  UNION ALL SELECT 'Skew', '45 ns/100m', 'Electrical', 5
  UNION ALL SELECT 'Operating Frequency, maximum', '250 MHz', 'Electrical', 6
  UNION ALL SELECT 'Fluke Test', 'Pass: 100m Channel test and 90m Permanent Link test', 'Electrical', 7
  UNION ALL SELECT 'Conductor Material', 'Solid Bare Copper (99.99% oxygen free copper)', 'Mechanical', 8
  UNION ALL SELECT 'Conductor Diameter', '24AWG / 0.51 ± 0.01mm', 'Mechanical', 9
  UNION ALL SELECT 'Insulation Material', 'HDPE', 'Mechanical', 10
  UNION ALL SELECT 'Insulation Diameter', '0.94mm', 'Mechanical', 11
  UNION ALL SELECT 'Rip Cord', 'Yes', 'Mechanical', 12
  UNION ALL SELECT 'Separator', 'Yes', 'Mechanical', 13
  UNION ALL SELECT 'Sheath Material', 'LSZH', 'Mechanical', 14
  UNION ALL SELECT 'Jacket Thickness', '0.53 ± 0.1mm', 'Mechanical', 15
  UNION ALL SELECT 'Diameter Over Jacket', '5.6 ± 0.5mm', 'Mechanical', 16
  UNION ALL SELECT 'Pulling Tension, maximum', '100N', 'Mechanical', 17
  UNION ALL SELECT 'Minimum Laying Operation Bending Radius', '8 times the outer cable diameter', 'Mechanical', 18
  UNION ALL SELECT 'Operating Temperature, range', '-20°C to +60°C', 'Environmental', 19
  UNION ALL SELECT 'Storage Temperature, range', '-10°C to +50°C', 'Environmental', 20
  UNION ALL SELECT 'Installation Temperature, range', '-5°C to +40°C', 'Environmental', 21
  UNION ALL SELECT 'Flame Retardant', 'IEC 60332-1', 'Environmental', 22
  UNION ALL SELECT 'RoHS', 'All materials comply with 2011/65/EU (RoHS 2.0)', 'Environmental', 23
) AS t
WHERE @pid IS NOT NULL;

-- Key features (5).
INSERT INTO dcsindo.fiberhome_key_features (product_id, feature, sort_order)
SELECT @pid, t.feature, t.sort_order FROM (
  SELECT 'Solid Bare Copper conductor (99.99% oxygen free copper), 24AWG' AS feature, 0 AS sort_order
  UNION ALL SELECT 'LSZH (Low Smoke Zero Halogen) sheath', 1
  UNION ALL SELECT 'Supports 10BASE-T, 100BASE-T Fast Ethernet and 1000BASE-T Gigabit Ethernet up to 250 MHz', 2
  UNION ALL SELECT 'Passes Fluke test: 100m Channel test and 90m Permanent Link test', 3
  UNION ALL SELECT 'Flame retardant IEC 60332-1, RoHS 2.0 compliant', 4
) AS t
WHERE @pid IS NOT NULL;

-- Applications (3).
INSERT INTO dcsindo.fiberhome_applications (product_id, title, description, sort_order)
SELECT @pid, t.title, t.description, t.sort_order FROM (
  SELECT '10BASE-T' AS title, 'Ethernet' AS description, 0 AS sort_order
  UNION ALL SELECT '100BASE-T', 'Fast Ethernet', 1
  UNION ALL SELECT '1000BASE-T', 'Gigabit Ethernet', 2
) AS t
WHERE @pid IS NOT NULL;

COMMIT;

-- ── 3. Verifikasi ──────────────────────────────────────────────────────────
-- Harus: sku FH-CAT6-UTP-LSZH-24AWG, category LAN Cable, is_published 0.
SELECT id, sku, name, category, description, image_path, datasheet_path, sort_order, is_published
  FROM dcsindo.fiberhome_products WHERE id = 2;

-- Harus: specs 24, features 5, applications 3.
SELECT
  (SELECT COUNT(*) FROM dcsindo.fiberhome_technical_specs WHERE product_id = 2) AS specs,
  (SELECT COUNT(*) FROM dcsindo.fiberhome_key_features    WHERE product_id = 2) AS features,
  (SELECT COUNT(*) FROM dcsindo.fiberhome_applications    WHERE product_id = 2) AS applications;

-- Per group: Electrical 8, Mechanical 11, Environmental 5.
SELECT spec_group, COUNT(*) AS jumlah
  FROM dcsindo.fiberhome_technical_specs WHERE product_id = 2
 GROUP BY spec_group ORDER BY MIN(sort_order);
