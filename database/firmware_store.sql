-- Firmware DCS — pusat unduhan firmware per brand (tabel BERDIRI SENDIRI).
-- Tidak terhubung ke tabel produk mana pun (mikrotik_dcs_products / ubiquiti_dcs_* / vsol_dcs_*).
-- Jalankan di phpMyAdmin / MySQL setelah database (mis. dcsindo) dipilih.
--
-- Mendukung DUA sumber file:
--   source_type='upload'   → file diunggah admin, tersimpan di public/uploads/firmware (kolom file_path).
--   source_type='external' → file di layanan luar (mikrotik.com, Google Drive, dll) via external_url.

SET NAMES utf8mb4;

CREATE TABLE IF NOT EXISTS firmware_files (
  id            INT UNSIGNED NOT NULL AUTO_INCREMENT,
  brand         ENUM('mikrotik','ubiquiti','vsol') NOT NULL,
  -- Kategori bebas per brand, contoh: '10G-PON', 'GPON', 'RouterOS', 'airFiber'
  category      VARCHAR(100) NOT NULL DEFAULT '',
  product_name  VARCHAR(255) NOT NULL,
  -- Nullable — contoh: V1600XG02-W
  model_sku     VARCHAR(100) NULL,
  -- Nullable — diisi manual oleh admin, contoh: v1.5.6
  version       VARCHAR(100) NULL,
  release_date  DATE NULL,
  -- Sumber file: unggah sendiri atau tautan eksternal
  source_type   ENUM('upload','external') NOT NULL DEFAULT 'upload',
  -- Diisi bila source_type='upload' — path relatif situs, contoh: /uploads/firmware/173...-routeros.npk
  file_path     VARCHAR(500) NULL,
  -- Diisi bila source_type='external'
  external_url  VARCHAR(1000) NULL,
  -- Ukuran file dalam bytes (nullable)
  file_size     BIGINT UNSIGNED NULL,
  checksum      VARCHAR(191) NULL,
  notes         TEXT NULL,
  -- Urutan tampil per brand+kategori (drag & drop di admin)
  sort_order    INT NOT NULL DEFAULT 0,
  created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_firmware_brand (brand),
  KEY idx_firmware_brand_category (brand, category),
  KEY idx_firmware_sort (brand, category, sort_order),
  KEY idx_firmware_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Contoh data (opsional — hapus komentar untuk menjalankan):
-- INSERT INTO firmware_files
--   (brand, category, product_name, model_sku, version, release_date, source_type, external_url, notes, sort_order)
-- VALUES
--   ('mikrotik', 'RouterOS', 'RouterOS', NULL, '7.x', NULL, 'external',
--    'https://mikrotik.com/download', 'Halaman unduhan resmi MikroTik', 0),
--   ('vsol', '10G-PON', 'Chassis OLT', 'V1600XG02-W', NULL, NULL, 'external',
--    'https://drive.google.com/...', 'Firmware via Google Drive', 0);
