-- Seed produk FiberHome kedua: U/UTP Cat.6 PVC, 305m/box (FH-CAT6-UTP-PVC-305).
--
-- Jalankan MANUAL sekali via phpMyAdmin. TIDAK ada perubahan kode — file ini
-- hanya data. Tabelnya sudah dibuat oleh fiberhome_schema.sql +
-- fiberhome_improvements.sql + fiberhome_specs_grouping.sql.
--
-- IDEMPOTEN: boleh dijalankan berulang. `ON DUPLICATE KEY UPDATE id =
-- LAST_INSERT_ID(id)` membuat @pid tetap terisi id lama saat SKU sudah ada
-- (tanpa trik itu LAST_INSERT_ID() mengembalikan 0 dan seluruh baris anak
-- nyasar ke product_id 0), dan ketiga DELETE di bawah membersihkan baris anak
-- lama sebelum di-insert ulang.
--
-- image_path & datasheet_path SENGAJA dibiarkan NULL — diisi lewat upload di
-- /admin/fiberhome, bukan dari file ini.

-- -- 1. Produk ------------------------------------------------------
INSERT INTO fiberhome_products (sku, name, category, description, sort_order)
VALUES (
  'FH-CAT6-UTP-PVC-305',
  'U/UTP Cat.6 4 Pairs PVC Sheath LAN Cable',
  'LAN Cable',
  'Kabel LAN Cat.6 U/UTP dengan 4 pasang konduktor solid bare copper (99.99% oxygen free copper) — BUKAN CCA (Copper Clad Aluminum). Mendukung Gigabit Ethernet (1000BASE-T) hingga 250 MHz, cocok untuk instalasi jaringan LAN indoor di kantor, gedung komersial, dan data center.',
  1
) ON DUPLICATE KEY UPDATE id = LAST_INSERT_ID(id);

SET @pid = LAST_INSERT_ID();

-- -- 2. Bersihkan baris anak lama (aman di-run ulang) ---------------
DELETE FROM fiberhome_key_features    WHERE product_id = @pid;
DELETE FROM fiberhome_applications    WHERE product_id = @pid;
DELETE FROM fiberhome_technical_specs WHERE product_id = @pid;

-- -- 3. Key features ------------------------------------------------
INSERT INTO fiberhome_key_features (product_id, feature, sort_order) VALUES
  (@pid, 'Solid Bare Copper 99.99% oxygen free copper — BUKAN CCA (Copper Clad Aluminum) yang gagal Fluke test', 1),
  (@pid, 'Konduktor 24AWG dengan 4 pasang twisted pair — mendukung Gigabit Ethernet penuh', 2),
  (@pid, 'Sheath PVC — cocok untuk instalasi indoor standar', 3),
  (@pid, 'Lulus Fluke test — 100m Channel test dan 90m Permanent Link test', 4),
  (@pid, 'Kemasan 305m per box dengan easy-pull design — hemat waktu instalasi', 5);

-- -- 4. Applications ------------------------------------------------
INSERT INTO fiberhome_applications (product_id, title, description, sort_order) VALUES
  (@pid, 'Kantor & Gedung Komersial', 'Backbone LAN untuk workstation, printer, dan access point', 1),
  (@pid, 'Data Center',               'Interkoneksi server-to-switch dan patching di rack',         2),
  (@pid, 'IPTV & CCTV',               'Distribusi sinyal video dan power (PoE/PoE+) ke perangkat endpoint', 3);

-- -- 5. Technical specs ---------------------------------------------
-- spec_group menentukan collapsible section di halaman detail. Nama grupnya
-- dipakai persis seperti GJYCH-1 (Optical / Mechanical / Environmental) supaya
-- kedua produk tidak memunculkan section berbeda-beda.
INSERT INTO fiberhome_technical_specs (product_id, label, value, spec_group, sort_order) VALUES
  (@pid, 'Standard',                     'ANSI/TIA-568.2-D, IEC 61156',                  'Optical',        1),
  (@pid, 'Category',                     'Cat.6',                                        'Optical',        2),
  (@pid, 'Operating Frequency',          '250 MHz max',                                  'Optical',        3),
  (@pid, 'Conductor Resistance (20°C)',  '≤9.5 Ω/100m',                                  'Optical',        4),
  (@pid, 'Insulation Resistance',        '>5000 MΩ·km',                                  'Optical',        5),
  (@pid, 'Conductor Material',           'Solid Bare Copper (99.99% oxygen free copper)', 'Mechanical',     6),
  (@pid, 'Conductor Diameter',           '24AWG / 0.51 ± 0.01mm',                        'Mechanical',     7),
  (@pid, 'Insulation Material',          'HDPE',                                         'Mechanical',     8),
  (@pid, 'Sheath Material',              'PVC',                                          'Mechanical',     9),
  (@pid, 'Diameter Over Jacket',         '5.6 ± 0.5mm',                                  'Mechanical',    10),
  (@pid, 'Panjang per Box',              '305m',                                         'Mechanical',    11),
  (@pid, 'Berat per Box',                '11.2 kg',                                      'Mechanical',    12),
  (@pid, 'Operating Temperature',        '-20°C s/d +60°C',                              'Environmental', 13),
  (@pid, 'Storage Temperature',          '-10°C s/d +50°C',                              'Environmental', 14),
  (@pid, 'Flame Retardant',              'IEC 60332-1',                                  'Environmental', 15);

-- -- 6. Verifikasi --------------------------------------------------
SELECT id, sku, category, sort_order FROM fiberhome_products ORDER BY sort_order;

SELECT
  (SELECT COUNT(*) FROM fiberhome_key_features    WHERE product_id = @pid) AS features,
  (SELECT COUNT(*) FROM fiberhome_applications    WHERE product_id = @pid) AS applications,
  (SELECT COUNT(*) FROM fiberhome_technical_specs WHERE product_id = @pid) AS specs;

-- -- 7. ROLLBACK ---------------------------------------------------
-- Baris anak ikut terhapus lewat ON DELETE CASCADE.
-- DELETE FROM fiberhome_products WHERE sku = 'FH-CAT6-UTP-PVC-305';
