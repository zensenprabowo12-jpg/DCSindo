-- Firmware DCS — konten template GLOBAL untuk popup detail firmware.
-- Satu set konten dipakai untuk SEMUA firmware dan SEMUA brand (bukan per-item, bukan per-brand).
-- Jalankan di phpMyAdmin / MySQL setelah database (mis. dcsindo) dipilih.
--
-- Isi tabel = dua blok teks biasa (plain text, tanpa rich text / HTML):
--   install_guide → section "Panduan Instalasi" di modal.
--                   SATU LANGKAH PER BARIS (dipisah newline). Penomoran 1,2,3...
--                   dibuat otomatis oleh komponen, jadi JANGAN ditulis di teks.
--   disclaimer    → section "Peringatan & Disclaimer" di modal. Paragraf biasa;
--                   pisahkan dengan baris kosong bila ingin lebih dari satu paragraf.
--
-- Catatan: file ini aman dijalankan berulang kali — CREATE TABLE IF NOT EXISTS +
-- INSERT IGNORE, sehingga konten yang sudah diedit admin TIDAK akan tertimpa.
-- Harus dijalankan di DUA database: lokal (XAMPP) dan produksi (192.168.92.27).

SET NAMES utf8mb4;

CREATE TABLE IF NOT EXISTS firmware_popup_settings (
  -- Kunci konten, contoh: 'install_guide', 'disclaimer'
  setting_key   VARCHAR(64)  NOT NULL,
  -- Teks biasa. Kosong ('') = admin sengaja mengosongkan section.
  setting_value TEXT         NOT NULL,
  updated_at    TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (setting_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Nilai awal — sama persis dengan teks dummy yang sekarang ada di
-- client/src/components/firmware/FirmwareDetailModal.tsx, agar tampilan popup
-- tidak berubah setelah nanti dihubungkan ke database.
INSERT IGNORE INTO firmware_popup_settings (setting_key, setting_value) VALUES
('install_guide',
'Backup konfigurasi perangkat Anda terlebih dahulu sebelum melakukan proses flashing.
Unduh file firmware di halaman ini, lalu verifikasi checksum-nya agar file tidak korup.
Masuk ke antarmuka manajemen perangkat (web UI / Winbox / console) dan unggah file firmware.
Jalankan proses upgrade, tunggu hingga selesai, lalu reboot dan pastikan versi firmware sudah berubah.'),
('disclaimer',
'Proses flashing firmware berisiko. Jangan mematikan atau mencabut daya perangkat selama proses berlangsung — hal ini dapat menyebabkan perangkat tidak dapat digunakan (brick). Downgrade ke versi lama tidak selalu didukung dan dapat menghapus konfigurasi. Pastikan firmware yang dipilih sesuai dengan model perangkat Anda. Kerusakan akibat kesalahan proses upgrade berada di luar tanggung jawab kami.');

-- Verifikasi setelah import (opsional):
-- SELECT setting_key, CHAR_LENGTH(setting_value) AS panjang, updated_at
--   FROM firmware_popup_settings;
