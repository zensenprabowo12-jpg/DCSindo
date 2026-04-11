-- =============================================================================
-- Migrasi: produk_mikrotik → products (brand MikroTik)
-- Tabel lama produk_mikrotik TIDAK dihapus.
--
-- Prasyarat:
--   - Tabel `produk_mikrotik`, `brands`, `products` sudah ada.
--   - Skema sesuai database/produk_mikrotik.sql & catalog_multi_brand.sql
--
-- Menjalankan:
--   mysql -u USER -p NAMA_DATABASE < database/migrate_produk_mikrotik_to_products.sql
--
-- Atau dari mysql client:
--   SOURCE C:/path/ke/database/migrate_produk_mikrotik_to_products.sql;
-- =============================================================================

START TRANSACTION;

-- 1) Pastikan brand MikroTik ada (slug = mikrotik; aman jika seed sudah mengisinya)
INSERT IGNORE INTO brands (nama_brand, slug) VALUES ('MikroTik', 'mikrotik');

SET @mikrotik_brand_id := (
  SELECT id FROM brands WHERE LOWER(slug) = 'mikrotik' LIMIT 1
);

-- Jika somehow masih NULL, hentikan migrasi
SELECT IF(
  @mikrotik_brand_id IS NULL,
  'ERROR: brand MikroTik (slug mikrotik) tidak ditemukan setelah INSERT IGNORE',
  'OK: brand_id MikroTik siap'
) AS migrasi_brand_check;

-- MySQL tidak punya "abort" native; jika NULL, INSERT berikut akan gagal (brand_id NULL) — cek pesan di atas.

-- 2) Pindahkan data: INSERT … SELECT (hanya baris yang belum ada di products untuk brand yang sama)
--    Kunci duplikat: nama_produk + created_at + brand_id (cukup untuk kebanyakan kasus)
INSERT INTO products (
  brand_id,
  nama_produk,
  deskripsi,
  spesifikasi,
  harga,
  gambar,
  created_at
)
SELECT
  @mikrotik_brand_id,
  pm.nama_produk,
  pm.deskripsi,
  pm.spesifikasi,
  pm.harga,
  pm.gambar,
  pm.created_at
FROM produk_mikrotik pm
WHERE @mikrotik_brand_id IS NOT NULL
  AND NOT EXISTS (
    SELECT 1
    FROM products p
    WHERE p.brand_id = @mikrotik_brand_id
      AND p.nama_produk = pm.nama_produk
      AND p.created_at = pm.created_at
  );

COMMIT;

-- =============================================================================
-- Verifikasi (jalankan setelah COMMIT; bisa di file yang sama atau manual)
-- =============================================================================

-- Jumlah baris sumber vs tujuan untuk brand MikroTik
SELECT
  (SELECT COUNT(*) FROM produk_mikrotik) AS jumlah_produk_mikrotik,
  (
    SELECT COUNT(*)
    FROM products p
    INNER JOIN brands b ON b.id = p.brand_id AND LOWER(b.slug) = 'mikrotik'
  ) AS jumlah_products_mikrotik;

-- Contoh sampel join (pastikan nama brand & data terisi)
SELECT
  p.id,
  b.nama_brand,
  b.slug,
  p.nama_produk,
  p.harga,
  p.gambar,
  p.created_at
FROM products p
INNER JOIN brands b ON b.id = p.brand_id
WHERE LOWER(b.slug) = 'mikrotik'
ORDER BY p.created_at DESC, p.id DESC
LIMIT 20;
