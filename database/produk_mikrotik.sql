-- Tabel katalog produk MikroTik (MySQL 8+)
-- Jalankan: mysql -u USER -p NAMA_DATABASE < database/produk_mikrotik.sql

CREATE TABLE IF NOT EXISTS produk_mikrotik (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nama_produk VARCHAR(255) NOT NULL,
  deskripsi TEXT NOT NULL,
  spesifikasi TEXT NOT NULL,
  harga DECIMAL(14, 2) NULL DEFAULT NULL COMMENT 'Opsional; NULL jika tidak diisi',
  gambar VARCHAR(512) NOT NULL DEFAULT '' COMMENT 'Path relatif web, mis. /uploads/mikrotik/xxx.jpg',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_produk_mikrotik_nama (nama_produk)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
