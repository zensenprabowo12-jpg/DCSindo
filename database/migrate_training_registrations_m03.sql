-- Migration: M-03 bagian 2 — collation + cegah duplikat pendaftaran training
-- Jalankan MANUAL sekali via phpMyAdmin. TIDAK dijalankan otomatis saat startup.
--
-- Server: MariaDB 11.8.6, database `dcsindo`, tabel `training_registrations`.
--
-- CATATAN PARTIAL INDEX: MariaDB TIDAK mendukung
--   CREATE UNIQUE INDEX ... WHERE status <> 'cancelled'
-- Klausa WHERE pada indeks itu fitur PostgreSQL/SQL Server, bukan MariaDB.
-- Gantinya dipakai kolom generated yang bernilai NULL saat status 'cancelled'.
-- Karena UNIQUE di MariaDB mengizinkan NULL berkali-kali, baris yang
-- dibatalkan tidak saling bentrok dan peserta BOLEH mendaftar ulang --
-- sementara dua pendaftaran AKTIF dengan email sama tetap ditolak.
--
-- Seluruh perilaku di atas sudah diuji langsung di server ini memakai
-- TEMPORARY TABLE, jadi tidak meninggalkan jejak apa pun.

-- -- 1. PRE-FLIGHT ---------------------------------------------------
-- Saat migrasi ini ditulis tabelnya masih KOSONG (0 baris), jadi kedua
-- query ini seharusnya nihil. Tetap jalankan kalau-kalau sudah ada data.
SELECT training_id, email, COUNT(*) AS jumlah,
       GROUP_CONCAT(id ORDER BY id) AS ids
FROM training_registrations
WHERE status <> 'cancelled'
GROUP BY training_id, email
HAVING COUNT(*) > 1;

SELECT training_id, LOWER(TRIM(email)) AS email_norm, COUNT(*) AS jumlah
FROM training_registrations
WHERE status <> 'cancelled'
GROUP BY training_id, email_norm
HAVING COUNT(*) > 1;

-- -- 2. Patok collation ----------------------------------------------
-- ensureTable() membuat tabel ini TANPA klausa COLLATE, jadi MariaDB 11.x
-- memilih default barunya: utf8mb4_uca1400_ai_ci. Huruf "ai" = accent-
-- insensitive, sehingga 'jose@x.com' dianggap SAMA dengan 'jose@x.com'
-- beraksen. Disamakan dengan tabel lain di proyek ini.
ALTER TABLE training_registrations
  CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- -- 3. Kolom generated + UNIQUE --------------------------------------
ALTER TABLE training_registrations
  ADD COLUMN active_email VARCHAR(190)
    AS (CASE WHEN status <> 'cancelled' THEN email ELSE NULL END) STORED,
  ADD UNIQUE KEY uq_treg_active_email (training_id, active_email);

-- -- 4. Verifikasi ---------------------------------------------------
SHOW INDEX FROM training_registrations WHERE Key_name = 'uq_treg_active_email';

SELECT COLUMN_NAME, COLLATION_NAME
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'training_registrations'
  AND COLUMN_NAME IN ('email', 'phone', 'active_email');

-- -- 5. ROLLBACK -----------------------------------------------------
-- Urutan terbalik: indeks dulu, baru kolomnya.
-- ALTER TABLE training_registrations DROP INDEX uq_treg_active_email;
-- ALTER TABLE training_registrations DROP COLUMN active_email;
-- Collation tidak ikut kembali sendiri; kalau memang perlu:
-- ALTER TABLE training_registrations
--   CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci;
