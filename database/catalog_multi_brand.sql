-- =============================================================================
-- Katalog multi-brand (pondasi v2) — TIDAK mengganti tabel lama (produk_mikrotik, dll.)
-- Jalankan: mysql -u USER -p NAMA_DATABASE < database/catalog_multi_brand.sql
-- =============================================================================

CREATE TABLE IF NOT EXISTS brands (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nama_brand VARCHAR(128) NOT NULL,
  slug VARCHAR(64) NOT NULL COMMENT 'Identifier URL/query stabil, mis. ubiquiti, vsol',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_brands_slug (slug),
  KEY idx_brands_nama (nama_brand)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS products (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  brand_id INT UNSIGNED NOT NULL,
  nama_produk VARCHAR(255) NOT NULL,
  deskripsi TEXT NOT NULL,
  spesifikasi TEXT NOT NULL,
  harga DECIMAL(14, 2) NULL DEFAULT NULL,
  gambar VARCHAR(512) NOT NULL DEFAULT '' COMMENT 'Path web, mis. /uploads/products/xxx.jpg',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_products_brand (brand_id),
  KEY idx_products_created (created_at),
  CONSTRAINT fk_products_brand
    FOREIGN KEY (brand_id) REFERENCES brands (id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- Seed brand (ubah/tambah sesuai kebutuhan)
-- -----------------------------------------------------------------------------
INSERT INTO brands (nama_brand, slug) VALUES
  ('Ubiquiti', 'ubiquiti'),
  ('MikroTik', 'mikrotik'),
  ('VSOL', 'vsol'),
  ('ALGcom', 'algcom')
ON DUPLICATE KEY UPDATE nama_brand = VALUES(nama_brand);
