-- Training gallery table — foto dokumentasi/preview per sesi training
-- Jalankan di phpMyAdmin / MySQL setelah database dipilih.

SET NAMES utf8mb4;

CREATE TABLE IF NOT EXISTS training_gallery (
  id INT AUTO_INCREMENT PRIMARY KEY,
  training_id INT NOT NULL,
  image_path VARCHAR(500) NOT NULL,
  caption VARCHAR(255) DEFAULT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (training_id) REFERENCES training_sessions(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
