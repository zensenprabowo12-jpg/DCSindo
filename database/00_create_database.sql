-- Buat database aplikasi (jalan sekali jika belum ada).
-- mysql -u root -p < database/00_create_database.sql
-- Atau: mysql -u root -p -e "SOURCE .../00_create_database.sql"

CREATE DATABASE IF NOT EXISTS dcsindo
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
