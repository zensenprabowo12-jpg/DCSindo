-- Training — skema sesi & silabus (baseline dari produksi)
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
-- Isi: training_sessions, training_syllabus

SET NAMES utf8mb4;

CREATE TABLE IF NOT EXISTS `training_sessions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `brand` enum('MikroTik','Ubiquiti','V-SOL','General') NOT NULL DEFAULT 'General',
  `format` enum('Online','Offline','Hybrid') NOT NULL DEFAULT 'Offline',
  `location` varchar(255) DEFAULT NULL,
  `start_datetime` datetime NOT NULL,
  `end_datetime` datetime NOT NULL,
  `duration_hours` decimal(5,2) DEFAULT NULL,
  `capacity` int(11) DEFAULT NULL,
  `price` decimal(12,2) DEFAULT NULL,
  `is_free` tinyint(1) NOT NULL DEFAULT 0,
  `has_certificate` tinyint(1) NOT NULL DEFAULT 0,
  `has_hands_on_lab` tinyint(1) NOT NULL DEFAULT 0,
  `instructor_name` varchar(255) DEFAULT NULL,
  `instructor_contact` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(500) DEFAULT NULL,
  `qr_image` varchar(500) DEFAULT NULL,
  `custom_link_url` varchar(1000) DEFAULT NULL,
  `custom_link_label` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

CREATE TABLE IF NOT EXISTS `training_syllabus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `training_id` int(11) NOT NULL,
  `item` varchar(500) NOT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `training_id` (`training_id`),
  CONSTRAINT `training_syllabus_ibfk_1` FOREIGN KEY (`training_id`) REFERENCES `training_sessions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
