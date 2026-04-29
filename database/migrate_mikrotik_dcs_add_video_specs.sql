-- Migration: add video + specifications to mikrotik_dcs_products
-- Jalankan sekali di DB yang sudah punya tabel `mikrotik_dcs_products`.

ALTER TABLE mikrotik_dcs_products
  ADD COLUMN video_url VARCHAR(500) NULL AFTER main_image,
  ADD COLUMN video_title VARCHAR(255) NULL AFTER video_url,
  ADD COLUMN video_description TEXT NULL AFTER video_title,
  -- JSON string untuk specification key-value (agar kompatibel MariaDB lama)
  ADD COLUMN specifications LONGTEXT NULL AFTER video_description;

