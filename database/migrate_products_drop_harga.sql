-- Hapus kolom harga dari katalog multi-brand (tabel products).
--
-- Urutan aman:
--   1) Deploy kode backend/frontend yang sudah tidak memakai kolom `harga`.
--   2) Jalankan skrip ini (hentikan server dulu jika perlu).
--
-- mysql -u USER -p NAMA_DATABASE < database/migrate_products_drop_harga.sql

ALTER TABLE products DROP COLUMN harga;
