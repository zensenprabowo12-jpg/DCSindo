-- Snapshot sebelum normalisasi kategori Ubiquiti (spasi ganda -> tunggal)
-- Dibuat: 2026-07-31T05:49:55.915Z
-- Rollback: jalankan UPDATE di bawah untuk mengembalikan nilai lama.

-- id=22 Ubiquiti airFiber 5XHD (AF-5XHD)
--   sebelum: 'Wireless  Radio' char_len=15 byte_len=15 hex=576972656C6573732020526164696F
UPDATE firmware_files SET category='Wireless  Radio' WHERE id=22;

-- SESUDAH:
--   id=22 'Wireless Radio' char_len=14 byte_len=14 hex=576972656C65737320526164696F
