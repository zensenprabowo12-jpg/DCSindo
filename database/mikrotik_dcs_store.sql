-- MikroTik DCS store — katalog produk (bukan tabel `products` multi-brand yang sudah ada)
-- Jalankan di phpMyAdmin / MySQL setelah database (mis. dcsindo) dipilih.
--
-- Catatan: nama tabel memakai prefix `mikrotik_dcs_` agar tidak bentrok dengan tabel
-- `products` (katalog brand) yang sudah dipakai proyek ini.

SET NAMES utf8mb4;

CREATE TABLE IF NOT EXISTS mikrotik_dcs_products (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nama_produk VARCHAR(255) NOT NULL,
  sku VARCHAR(100) NOT NULL,
  category VARCHAR(64) NOT NULL,
  -- Urutan tampil per kategori (diatur dari admin dashboard drag & drop)
  sort_order INT NOT NULL DEFAULT 0,
  deskripsi TEXT NOT NULL,
  -- JSON string (max 9 bullet). Dipakai agar kompatibel di MariaDB lama.
  bullet_points LONGTEXT NOT NULL,
  -- path relatif situs, contoh: /uploads/mikrotik-dcs/173....jpg
  main_image VARCHAR(500) NOT NULL,
  created_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  UNIQUE KEY uq_mikrotik_dcs_sku (sku),
  KEY idx_mikrotik_dcs_category (category),
  KEY idx_mikrotik_dcs_sort (category, sort_order),
  KEY idx_mikrotik_dcs_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS mikrotik_dcs_product_gallery_images (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  product_id INT UNSIGNED NOT NULL,
  image_path VARCHAR(500) NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  KEY idx_mikrotik_gallery_product (product_id),
  CONSTRAINT fk_mikrotik_gallery_product
    FOREIGN KEY (product_id) REFERENCES mikrotik_dcs_products (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
