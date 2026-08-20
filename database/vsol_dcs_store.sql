-- V-SOL DCS Product Store
-- Simpler than Ubiquiti: no overview_videos, no addons

CREATE TABLE IF NOT EXISTS vsol_dcs_products (
  id           INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nama_produk  VARCHAR(255)  NOT NULL,
  sku          VARCHAR(100)  NOT NULL,
  category     VARCHAR(100)  NOT NULL,
  subfilter    VARCHAR(100)  NULL,
  deskripsi    TEXT          NOT NULL DEFAULT '',
  bullet_points JSON         NOT NULL DEFAULT (JSON_ARRAY()),
  main_image   VARCHAR(500)  NOT NULL DEFAULT '',
  is_new       TINYINT(1)    NOT NULL DEFAULT 0,
  sort_order   INT           NOT NULL DEFAULT 0,
  created_at   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_vsol_dcs_sku (sku),
  INDEX idx_category (category),
  INDEX idx_sort    (sort_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS vsol_dcs_product_gallery (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  product_id  INT UNSIGNED NOT NULL,
  image_path  VARCHAR(500) NOT NULL,
  sort_order  INT          NOT NULL DEFAULT 0,
  INDEX idx_product (product_id),
  CONSTRAINT fk_vsol_gallery_product
    FOREIGN KEY (product_id) REFERENCES vsol_dcs_products(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS vsol_dcs_technical_specs (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  product_id    INT UNSIGNED NOT NULL,
  section_title VARCHAR(200) NOT NULL DEFAULT '',
  label         VARCHAR(300) NOT NULL,
  value         TEXT         NOT NULL DEFAULT '',
  is_check      TINYINT(1)   NOT NULL DEFAULT 0,
  sort_order    INT          NOT NULL DEFAULT 0,
  INDEX idx_product (product_id),
  CONSTRAINT fk_vsol_specs_product
    FOREIGN KEY (product_id) REFERENCES vsol_dcs_products(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS vsol_dcs_in_the_box (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  product_id  INT UNSIGNED NOT NULL,
  image_path  VARCHAR(500) NOT NULL,
  sort_order  INT          NOT NULL DEFAULT 0,
  INDEX idx_product (product_id),
  CONSTRAINT fk_vsol_inbox_product
    FOREIGN KEY (product_id) REFERENCES vsol_dcs_products(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
