-- Tambah kolom QR image dan custom link ke training_sessions
-- Jalankan di phpMyAdmin / MySQL setelah database dipilih.

SET NAMES utf8mb4;

ALTER TABLE training_sessions
  ADD COLUMN qr_image VARCHAR(500) DEFAULT NULL AFTER thumbnail,
  ADD COLUMN custom_link_url VARCHAR(1000) DEFAULT NULL AFTER qr_image,
  ADD COLUMN custom_link_label VARCHAR(255) DEFAULT NULL AFTER custom_link_url;
