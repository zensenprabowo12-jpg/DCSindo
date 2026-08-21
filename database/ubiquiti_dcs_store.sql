-- Ubiquiti DCS store — skema lengkap (baseline dari produksi)
--
-- L-05: DDL ini SEBELUMNYA tidak ada di mana pun — bukan di database/*.sql,
-- bukan pula di ensureTable() mana pun. Tabelnya hanya hidup di server produksi
-- karena dulu diterapkan manual, sehingga environment baru tidak bisa dibangun
-- dari repo ini dan perubahan constraint tidak pernah terlihat di diff.
--
-- Diambil apa adanya dari produksi (MariaDB 11.8.6, database `dcsindo`) lewat
-- SHOW CREATE TABLE pada 2026-08-21. Sengaja TIDAK dirapikan supaya berkas ini
-- benar-benar mencerminkan keadaan server, bukan keadaan yang diinginkan.
--
-- IF NOT EXISTS ditambahkan agar aman dijalankan ulang. Konsekuensinya sama
-- seperti berkas skema lain di folder ini: menjalankan ini pada database yang
-- tabelnya SUDAH ada tidak melakukan apa pun. Perubahan skema pada DB hidup
-- tetap harus lewat ALTER TABLE tersendiri.
--
-- Isi: ubiquiti_dcs_products, ubiquiti_dcs_addons, ubiquiti_dcs_in_the_box, ubiquiti_dcs_overview_images, ubiquiti_dcs_overview_videos, ubiquiti_dcs_product_gallery, ubiquiti_dcs_technical_specs

SET NAMES utf8mb4;

CREATE TABLE IF NOT EXISTS `ubiquiti_dcs_products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nama_produk` varchar(255) NOT NULL,
  `sku` varchar(100) NOT NULL,
  `category` varchar(64) NOT NULL,
  `subfilter` varchar(64) DEFAULT NULL,
  `deskripsi` text NOT NULL,
  `bullet_points` longtext DEFAULT NULL,
  `main_image` varchar(500) NOT NULL,
  `is_new` tinyint(1) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `sku` (`sku`)
) ENGINE=InnoDB AUTO_INCREMENT=397 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

CREATE TABLE IF NOT EXISTS `ubiquiti_dcs_addons` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(10) unsigned NOT NULL,
  `addon_product_id` int(10) unsigned NOT NULL,
  `sort_order` int(11) DEFAULT 0,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `addon_product_id` (`addon_product_id`),
  CONSTRAINT `ubiquiti_dcs_addons_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `ubiquiti_dcs_products` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ubiquiti_dcs_addons_ibfk_2` FOREIGN KEY (`addon_product_id`) REFERENCES `ubiquiti_dcs_products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1179 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

CREATE TABLE IF NOT EXISTS `ubiquiti_dcs_in_the_box` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(10) unsigned NOT NULL,
  `image_path` varchar(500) NOT NULL,
  `sort_order` int(11) DEFAULT 0,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `ubiquiti_dcs_in_the_box_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `ubiquiti_dcs_products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=380 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

CREATE TABLE IF NOT EXISTS `ubiquiti_dcs_overview_images` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(10) unsigned NOT NULL,
  `image_path` varchar(500) NOT NULL,
  `sort_order` int(11) DEFAULT 0,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `ubiquiti_dcs_overview_images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `ubiquiti_dcs_products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=795 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

CREATE TABLE IF NOT EXISTS `ubiquiti_dcs_overview_videos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(10) unsigned NOT NULL,
  `video_path` varchar(500) NOT NULL,
  `sort_order` int(11) DEFAULT 0,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `ubiquiti_dcs_overview_videos_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `ubiquiti_dcs_products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

CREATE TABLE IF NOT EXISTS `ubiquiti_dcs_product_gallery` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(10) unsigned NOT NULL,
  `image_path` varchar(500) NOT NULL,
  `sort_order` int(11) DEFAULT 0,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `ubiquiti_dcs_product_gallery_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `ubiquiti_dcs_products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2616 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

CREATE TABLE IF NOT EXISTS `ubiquiti_dcs_technical_specs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(10) unsigned NOT NULL,
  `section_title` varchar(255) NOT NULL,
  `label` varchar(500) NOT NULL,
  `value` text NOT NULL,
  `is_check` tinyint(1) DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `ubiquiti_dcs_technical_specs_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `ubiquiti_dcs_products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12473 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
