-- Tambah tabel item technical accordion per produk
SET NAMES utf8mb4;

CREATE TABLE IF NOT EXISTS mikrotik_dcs_product_technical_items (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  product_id INT UNSIGNED NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  KEY idx_mikrotik_tech_product (product_id),
  KEY idx_mikrotik_tech_product_sort (product_id, sort_order, id),
  CONSTRAINT fk_mikrotik_tech_product
    FOREIGN KEY (product_id) REFERENCES mikrotik_dcs_products (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
