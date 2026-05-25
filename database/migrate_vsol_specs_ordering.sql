-- Migration: V-SOL specs restructure + ordering info
-- Run this once against the existing database

-- 1. Restructure vsol_dcs_technical_specs:
--    section_title → item (group/row label)
--    label         → sub_item (optional; NULL means item has a direct value)
--    drop is_check (no longer needed)

ALTER TABLE vsol_dcs_technical_specs
  CHANGE COLUMN section_title item     VARCHAR(255) NOT NULL DEFAULT '',
  CHANGE COLUMN label         sub_item VARCHAR(300) NULL DEFAULT NULL,
  DROP COLUMN   is_check;

-- 2. New table: ordering information rows per product

CREATE TABLE IF NOT EXISTS vsol_dcs_ordering_info (
  id                  INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  product_id          INT UNSIGNED NOT NULL,
  product_name        VARCHAR(255) NOT NULL DEFAULT '',
  product_description TEXT         NOT NULL DEFAULT '',
  power_configuration VARCHAR(255) NOT NULL DEFAULT '',
  accessories         TEXT         NOT NULL DEFAULT '',
  sort_order          INT          NOT NULL DEFAULT 0,
  INDEX idx_product (product_id),
  CONSTRAINT fk_vsol_ordering_product
    FOREIGN KEY (product_id) REFERENCES vsol_dcs_products(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
