-- MikroTik DCS store — katalog produk (bukan tabel `products` multi-brand yang sudah ada)
-- Jalankan di phpMyAdmin / MySQL setelah database (mis. dcsindo) dipilih.
--
-- Catatan: nama tabel memakai prefix `mikrotik_dcs_` agar tidak bentrok dengan tabel
-- `products` (katalog brand) yang sudah dipakai proyek ini.
--
-- PERINGATAN: seluruh berkas ini memakai CREATE TABLE IF NOT EXISTS, jadi
-- menjalankannya ulang pada database yang tabelnya SUDAH ada tidak melakukan
-- apa pun. Perubahan skema pada DB yang sudah hidup HARUS lewat ALTER TABLE
-- tersendiri. Kalau tidak, berkas ini dan DB akan diam-diam berbeda persis
-- seperti yang sempat terjadi pada indeks UNIQUE sku di bawah.

SET NAMES utf8mb4;

CREATE TABLE IF NOT EXISTS mikrotik_dcs_products (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nama_produk VARCHAR(255) NOT NULL,
  sku VARCHAR(100) NOT NULL,
  category VARCHAR(64) NOT NULL,
  -- Urutan tampil per kategori (diatur dari admin dashboard drag & drop)
  sort_order INT NOT NULL DEFAULT 0,
  deskripsi TEXT NOT NULL,
  -- JSON string (max 9 bullet). Dipakai agar kompatibel di MariaDB lama.
  bullet_points LONGTEXT NOT NULL,
  -- path relatif situs, contoh: /uploads/mikrotik-dcs/173....jpg
  main_image VARCHAR(500) NOT NULL,
  created_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  -- SENGAJA komposit (sku, category), BUKAN UNIQUE pada sku saja.
  --
  -- Satu produk MikroTik boleh tampil di beberapa kategori sekaligus, dan itu
  -- fitur katalog — bukan data kotor. Contoh nyata di produksi (diverifikasi
  -- 2026-08-21): SKU RB924i-2nD-BT5&BG77 ada di "wireless home & office",
  -- "lte / 5g", dan "iot products" (id 104/131/151), masing-masing dengan
  -- galeri gambarnya sendiri. Totalnya 15 SKU tersebar di 31 baris.
  --
  -- JANGAN "diperbaiki" kembali jadi UNIQUE (sku). Perubahan itu menghapus 16
  -- baris dan mencabut produk dari kategori tempatnya tampil sekarang —
  -- kategori "antennas" saja kehilangan 5 dari 9 isinya. Yang dicegah komposit
  -- ini adalah duplikat SEBENARNYA: SKU sama DI kategori yang sama. Per
  -- 2026-08-21 pelanggaran semacam itu nol.
  --
  -- Brand lain memang UNIQUE (sku) saja (uq_vsol_dcs_sku, dan indeks sku di
  -- ubiquiti_dcs_products), tapi di sana satu produk hanya pernah menempati
  -- satu kategori — jadi bukan pembanding yang setara.
  UNIQUE KEY uq_mikrotik_dcs_sku_category (sku, category),
  KEY idx_mikrotik_dcs_category (category),
  -- Catatan drift: indeks ini ada di file ini tetapi BELUM ada di DB produksi
  -- (diverifikasi 2026-08-21). Sengaja tidak diterapkan sekarang karena
  -- keputusannya nol perubahan DB. Aman ditambahkan kapan saja lewat:
  --   ALTER TABLE mikrotik_dcs_products ADD INDEX idx_mikrotik_dcs_sort (category, sort_order)
  KEY idx_mikrotik_dcs_sort (category, sort_order),
  KEY idx_mikrotik_dcs_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS mikrotik_dcs_product_gallery_images (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  product_id INT UNSIGNED NOT NULL,
  image_path VARCHAR(500) NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  KEY idx_mikrotik_gallery_product (product_id),
  CONSTRAINT fk_mikrotik_gallery_product
    FOREIGN KEY (product_id) REFERENCES mikrotik_dcs_products (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
