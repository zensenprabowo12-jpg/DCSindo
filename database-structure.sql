-- ============================================
-- DATABASE STRUCTURE untuk Import CSV
-- ============================================
-- Script ini membuat struktur tabel untuk import data produk
-- dari file CSV yang dihasilkan oleh convert-to-csv.js
--
-- URUTAN IMPORT:
-- 1. products.csv
-- 2. product_specs.csv
-- 3. product_images.csv
-- 4. product_overview_images.csv
-- 5. product_bullet_points.csv
-- 6. product_tech_specs.csv
-- 7. product_in_the_box.csv
-- 8. product_addons.csv
-- 9. addon_specs.csv
-- 10. addon_detailed_specs.csv
-- ============================================

-- Buat database (opsional, sesuaikan dengan kebutuhan)
-- CREATE DATABASE IF NOT EXISTS dcssindo_products CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- USE dcssindo_products;

-- ============================================
-- 1. TABEL PRODUCTS (Tabel Utama)
-- ============================================
CREATE TABLE IF NOT EXISTS `products` (
  `id` VARCHAR(50) PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `category` VARCHAR(100) NOT NULL,
  `subfilter` VARCHAR(100) NOT NULL,
  `image` VARCHAR(500),
  `short_description` TEXT,
  `is_new` TINYINT(1) DEFAULT 0,
  `sku` VARCHAR(100),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_category` (`category`),
  INDEX `idx_subfilter` (`subfilter`),
  INDEX `idx_is_new` (`is_new`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 2. TABEL PRODUCT_SPECS (Spesifikasi Produk)
-- ============================================
CREATE TABLE IF NOT EXISTS `product_specs` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `product_id` VARCHAR(50) NOT NULL,
  `label` VARCHAR(255) NOT NULL,
  `value` TEXT NOT NULL,
  `sort_order` INT DEFAULT 0,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE,
  INDEX `idx_product_id` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 3. TABEL PRODUCT_IMAGES (Gambar Produk)
-- ============================================
CREATE TABLE IF NOT EXISTS `product_images` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `product_id` VARCHAR(50) NOT NULL,
  `image_url` VARCHAR(500) NOT NULL,
  `sort_order` INT DEFAULT 0,
  `is_primary` TINYINT(1) DEFAULT 0,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE,
  INDEX `idx_product_id` (`product_id`),
  INDEX `idx_is_primary` (`is_primary`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 4. TABEL PRODUCT_OVERVIEW_IMAGES (Gambar Overview)
-- ============================================
CREATE TABLE IF NOT EXISTS `product_overview_images` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `product_id` VARCHAR(50) NOT NULL,
  `image_url` VARCHAR(500) NOT NULL,
  `sort_order` INT DEFAULT 0,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE,
  INDEX `idx_product_id` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 5. TABEL PRODUCT_BULLET_POINTS (Bullet Points)
-- ============================================
CREATE TABLE IF NOT EXISTS `product_bullet_points` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `product_id` VARCHAR(50) NOT NULL,
  `bullet_point` TEXT NOT NULL,
  `sort_order` INT DEFAULT 0,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE,
  INDEX `idx_product_id` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 6. TABEL PRODUCT_TECH_SPECS (Technical Specifications)
-- ============================================
CREATE TABLE IF NOT EXISTS `product_tech_specs` (
  `id` INT PRIMARY KEY,
  `product_id` VARCHAR(50) NOT NULL,
  `section_title` VARCHAR(255) NOT NULL,
  `section_order` INT DEFAULT 0,
  `label` VARCHAR(255) NOT NULL,
  `value` TEXT NOT NULL,
  `is_check` TINYINT(1) DEFAULT 0,
  `is_list` TINYINT(1) DEFAULT 0,
  `item_order` INT DEFAULT 0,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE,
  INDEX `idx_product_id` (`product_id`),
  INDEX `idx_section` (`product_id`, `section_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 7. TABEL PRODUCT_IN_THE_BOX (Items in the Box)
-- ============================================
CREATE TABLE IF NOT EXISTS `product_in_the_box` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `product_id` VARCHAR(50) NOT NULL,
  `item_name` VARCHAR(255) NOT NULL,
  `item_image` VARCHAR(500),
  `sort_order` INT DEFAULT 0,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE,
  INDEX `idx_product_id` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 8. TABEL PRODUCT_ADDONS (Product Addons/Accessories)
-- ============================================
CREATE TABLE IF NOT EXISTS `product_addons` (
  `id` INT PRIMARY KEY,
  `product_id` VARCHAR(50) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `image` VARCHAR(500),
  `price` DECIMAL(10, 2),
  `description` TEXT,
  `product_link` VARCHAR(500),
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE,
  INDEX `idx_product_id` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 9. TABEL ADDON_SPECS (Addon Short Specifications)
-- ============================================
CREATE TABLE IF NOT EXISTS `addon_specs` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `addon_id` INT NOT NULL,
  `spec_text` TEXT NOT NULL,
  `sort_order` INT DEFAULT 0,
  FOREIGN KEY (`addon_id`) REFERENCES `product_addons`(`id`) ON DELETE CASCADE,
  INDEX `idx_addon_id` (`addon_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 10. TABEL ADDON_DETAILED_SPECS (Addon Detailed Specifications)
-- ============================================
CREATE TABLE IF NOT EXISTS `addon_detailed_specs` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `addon_id` INT NOT NULL,
  `label` VARCHAR(255) NOT NULL,
  `value` TEXT NOT NULL,
  `sort_order` INT DEFAULT 0,
  FOREIGN KEY (`addon_id`) REFERENCES `product_addons`(`id`) ON DELETE CASCADE,
  INDEX `idx_addon_id` (`addon_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- VIEWS (Opsional - untuk kemudahan query)
-- ============================================

-- View untuk melihat produk dengan semua spesifikasi
CREATE OR REPLACE VIEW `v_products_with_specs` AS
SELECT 
  p.*,
  GROUP_CONCAT(
    CONCAT(ps.label, ': ', ps.value) 
    ORDER BY ps.sort_order 
    SEPARATOR ' | '
  ) as specs
FROM products p
LEFT JOIN product_specs ps ON p.id = ps.product_id
GROUP BY p.id;

-- View untuk melihat produk dengan gambar utama
CREATE OR REPLACE VIEW `v_products_with_primary_image` AS
SELECT 
  p.*,
  pi.image_url as primary_image
FROM products p
LEFT JOIN product_images pi ON p.id = pi.product_id AND pi.is_primary = 1;

-- ============================================
-- SAMPLE QUERIES (Contoh Query)
-- ============================================

-- Query untuk mendapatkan semua data produk lengkap
/*
SELECT 
  p.*,
  (SELECT GROUP_CONCAT(CONCAT(label, ': ', value) SEPARATOR ', ') 
   FROM product_specs WHERE product_id = p.id) as specs,
  (SELECT image_url FROM product_images WHERE product_id = p.id AND is_primary = 1) as primary_image,
  (SELECT COUNT(*) FROM product_addons WHERE product_id = p.id) as addon_count
FROM products p;
*/

-- Query untuk mendapatkan produk berdasarkan kategori
/*
SELECT * FROM products WHERE category = 'Cloud Gateways';
*/

-- Query untuk mendapatkan produk baru
/*
SELECT * FROM products WHERE is_new = 1;
*/

-- Query untuk mendapatkan detail produk dengan semua relasi
/*
SELECT 
  p.id,
  p.name,
  p.category,
  (SELECT JSON_ARRAYAGG(JSON_OBJECT('label', label, 'value', value))
   FROM product_specs WHERE product_id = p.id) as specs,
  (SELECT JSON_ARRAYAGG(image_url)
   FROM product_images WHERE product_id = p.id ORDER BY sort_order) as images
FROM products p
WHERE p.id = 'efg';
*/
