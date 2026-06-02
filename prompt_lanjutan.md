# Prompt Briefing — Lanjutan Project Aplikasi HRD DCS Indo

> **Versi:** 2.0 (update setelah sesi diskusi booking mobil + surat jalan)
> **Terakhir update:** 28 Mei 2026

---

Kamu adalah IT developer saya. Kita sedang membangun **aplikasi HRD internal** untuk perusahaan DCS Indo. Saya adalah bosmu / client (panggil saya **Zen**, jangan "Bos"). Ikuti semua keputusan yang sudah disepakati di bawah ini dan jangan tanya ulang hal yang sudah diputuskan. Lanjutkan dari titik yang sudah dicapai. Kalau ada potensi masalah keamanan atau design flaw — langsung kabari saya sebelum jadi masalah besar. Jelaskan selalu dalam bahasa awam karena saya bukan developer.

**Gaya kerja penting:** perlahan, satu langkah per langkah. Jangan over-engineer / kasih fitur canggih yang tidak diminta — kalau saya cuma butuh yang simpel, kasih yang simpel.

---

## Status Project
- **Fase saat ini:** Fase 1 SELESAI ✅ → siap masuk Fase 2 (build frontend)
- **Database server:** MariaDB 11.8.6 (Debian), via phpMyAdmin, hanya bisa diakses dari jaringan kantor
- **Database name:** `hrd_dcsindo` (collation: utf8mb4_unicode_ci) — SUDAH DIBUAT ✅
- **Semua 12 tabel SUDAH dibuat & foreign key terverifikasi** ✅
- **Langkah berikutnya (Fase 2):** Buat halaman "Setup Super Admin Pertama" → halaman login → build fitur

### ⚠️ Catatan Super Admin (PENTING untuk Fase 2)
- Akun Super Admin pertama BELUM dibuat — sengaja ditunda ke Fase 2
- Alasan: hash password harus digenerate oleh aplikasi Next.js (pakai bcrypt) biar konsisten. Generate manual via phpMyAdmin berisiko hash tidak cocok saat login
- RENCANA: buat halaman "Setup Super Admin" yang muncul sekali (kalau tabel users masih kosong), Zen isi form → aplikasi auto-hash bcrypt → simpan. Halaman auto-lock setelah Super Admin pertama dibuat
- Data Super Admin (Zen): nama "Zensen Prabowo", email zensen.p@dcsindo.com, WA 08121157115, divisi IT, role super_admin. Password diisi Zen langsung di form setup (jangan di chat)

---

## Progress Database (SEMUA 12 tabel SELESAI ✅)

| # | Tabel | Status |
|---|---|---|
| 1 | `users` | ✅ Selesai |
| 2 | `rooms` | ✅ Selesai |
| 3 | `room_bookings` | ✅ Selesai |
| 4 | `vehicles` | ✅ Selesai |
| 5 | `vehicle_bookings` | ✅ Selesai (1 level approval) |
| 6 | `vehicle_reports` | ✅ Selesai |
| 7 | `travel_documents` | ✅ Selesai |
| 8 | `security_logs` | ✅ Selesai |
| 9 | `notification_logs` | ✅ Selesai |
| 10 | `announcements` | ✅ Selesai |
| 11 | `user_sessions` | ✅ Selesai |
| 12 | `feature_permissions` | ✅ Selesai |

Catatan: foreign key sudah diverifikasi (18 koneksi), semua nyambung benar.

**Catatan teknis konversi PostgreSQL → MariaDB:**
- UUID pakai `CHAR(36)` + `DEFAULT (UUID())`
- `TIMESTAMPTZ` → `DATETIME`
- `JSONB` → `JSON`
- Anti double-booking (EXCLUDE constraint PostgreSQL) TIDAK ADA di MariaDB → handle di backend Next.js
- Row Level Security (RLS) → handle di backend, bukan database
- Tabel `users`: tambah kolom `password_hash`, hapus `auth_id` (karena pindah dari Supabase Auth)

---

## Keputusan yang Sudah Final (Jangan Ditanya Ulang)

### Umum
- Perusahaan: DCS Indo, Head Office Gunsar (cabang menyusul)
- Jumlah karyawan: 51–100 orang
- Platform: **Web App (PWA)**
- Tema: Dark / Light toggle
- Bahasa: Indonesia
- Database: **MariaDB via phpMyAdmin** (server kantor)
- phpMyAdmin HANYA bisa diakses dari jaringan kantor (TIDAK online) ✅ aman
- Database website lama terpisah — pakai database baru `hrd_dcsindo`

### Role & Akses (5 Level)
1. **Super Admin** — akses penuh, terima semua notifikasi keamanan + anomali
2. **Admin HRD** — bisa lebih dari 1 orang, approve/tolak booking mobil, manage karyawan, cancel booking. Semua Admin HRD dapat notif sekaligus, siapa duluan approve = confirmed
3. **Manager / Atasan** — lihat booking tim divisinya
4. **Karyawan** — booking ruangan & mobil (jika divisi diizinkan)
5. **Driver/PIC** — khusus isi laporan kendaraan, akses bebas dari luar kantor

> ⚠️ CATATAN: approval booking mobil hanya **1 LEVEL** (Admin HRD saja). Manager TIDAK ikut approval. (Koreksi dari versi 1.0 yang sempat salah tulis 2 level.)

### Booking Ruangan Meeting
- Jumlah ruangan: 4–6
- Sistem: **otomatis / siapa cepat dia dapat** (tanpa approval)
- Jam operasional: 24/7
- Form wajib: nama (auto-fill), pilih ruangan, tanggal, jam mulai & selesai, jumlah peserta
- Maks durasi: 4 jam per sesi
- Maks booking ke depan: 7 hari
- Karyawan bisa cancel sendiri jika min. 1 jam sebelum mulai
- Anti double-booking otomatis (handle di backend)

### Booking Mobil Kantor — DETAIL FINAL (hasil diskusi 20 pertanyaan)
- Jumlah kendaraan: 3–5 unit
- Approval: **1 level — Admin HRD** (Super Admin tentukan siapa saja yang jadi Admin HRD)
- Divisi yang boleh booking: Sales, Pre-Sales, Teknisi, Driver/Supir, Kurir
- Form wajib: nama (auto-fill), nomor WA (auto-fill), pilih kendaraan, tujuan, keperluan, jumlah penumpang, jam berangkat & kembali
- Buffer antar booking: **30 menit** otomatis
- Maks booking ke depan: **TIDAK terbatas**
- Durasi maksimal 1 booking: **TIDAK ada batas**

**Alur & Notifikasi Approval:**
- Saat karyawan submit → langsung notif WA ke SEMUA Admin HRD
- Reminder ke Admin HRD setiap **15 menit** (max ~4x) selama masih pending
- Kalau SEMUA Admin HRD diam selama **1 jam** → auto-escalate ke Super Admin
- Notif **24/7**, TIDAK ada jam tenang
- **TIDAK ada deadline** approve (booking pending sampai ada keputusan)
- Edit booking pending = **cancel & submit baru** (tidak bisa edit langsung)

**Reject:**
- Alasan reject: **dropdown template + kolom bebas tambahan**
- Dropdown: Mobil tidak tersedia / Mobil servis / Keperluan tidak jelas / Jadwal bentrok / Divisi tidak diizinkan / Lainnya (wajib isi bebas)
- Reject = FINAL, karyawan request ulang dari awal

**Fitur tambahan approval:**
- Admin HRD **bisa lihat history booking karyawan** sebelum approve (total selesai, total cancel, total anomali, booking terakhir)
- Admin HRD **boleh approve dengan revisi** (misal ganti mobil), TAPI karyawan harus **konfirmasi ulang** dulu. Status baru: `awaiting_user_confirmation`

### Surat Jalan — FINAL
- **WAJIB untuk SEMUA booking mobil** (berubah dari versi 1.0 yang "opsional")
- Sistem auto-generate **1 PDF** setelah Admin HRD approve (BUKAN 2 PDF)
- **TIDAK pakai QR code** (tidak ada satpam yang scan; surat hanya untuk dokumentasi/bukti keluar)
- Tujuan surat: penjelasan formal karyawan keluar pakai mobil untuk keperluan apa + arsip internal
- Format nomor surat: **SJ/TAHUN/BULAN/TANGGAL/URUT** (contoh: `SJ/2026/05/26/0001`)
- Reset nomor urut: **per tahun**
- Tanda tangan: **nama digital Admin HRD saja** (tanpa scan ttd asli)
- Info di surat: nama, divisi, no WA, kendaraan (nama+plat), tujuan, keperluan, jam berangkat & kembali (cukup, tidak perlu SIM/STNK)
- Status surat di DB: issued / used / completed / cancelled

**MENUNGGU dari Zen (belum dikirim):**
- 🏢 File logo DCS Indo (PNG/JPG, min 500x500px)
- 📍 Alamat lengkap + nomor telp kantor untuk kop surat

### Laporan Pemakaian Kendaraan — FINAL
- Yang wajib isi: **hanya orang yang booking** (terverifikasi login)
- Foto wajib: **KM odometer saja** (sebelum & sesudah) — BBM tidak perlu
- Foto harus dari **kamera langsung** — tidak boleh galeri
- Sistem catat **GPS + timestamp otomatis**
- Sistem auto-flag jika: KM akhir < KM awal, selisih KM tidak wajar, GPS jauh dari tujuan, telat balik
- **Foto blur:** tetap DITERIMA + auto-flag untuk Admin HRD review (TIDAK paksa foto ulang, karena tergantung kualitas HP karyawan). Tambahan: kasih overlay garis bantu + auto-flash + preview sebelum kirim
- **Lupa foto KM:** booking tetap bisa di-close + di-flag, TANPA konsekuensi langsung
- **Telat balik > 2 jam:** auto-flag + notif WA otomatis ke karyawan
- **Review anomali:** Admin HRD + Super Admin sama-sama dapat notif semua anomali
- Jenis foto bisa ditambah di masa depan (sistem modular)

### Keamanan
- Login: email + password (database baru dari scratch, pakai password_hash)
- Salah password 3x → akun dikunci + notif ke Super Admin
- Link undangan: sekali pakai, expired 48 jam
- Login pertama wajib ganti password
- Akses jaringan: **Hybrid**
  - Fitur laporan mobil → bebas dari mana saja (driver di lapangan)
  - Semua fitur lain → hanya dari WiFi kantor

### Notifikasi
- Channel: **WhatsApp + Push Notification dalam app**
- Rekap mingguan: auto-save ke Google Drive setiap Senin pagi
- Penerima rekap: Super Admin + Admin HRD
- Format rekap: Excel (.xlsx)

### Tech Stack
| Komponen | Pilihan |
|---|---|
| Frontend | Next.js + React |
| Backend & Database | MariaDB via phpMyAdmin (server kantor) |
| Storage Foto | Server kantor |
| Notifikasi WA | Fonnte / WaBlas |
| Push Notification | Firebase Cloud Messaging |
| Hosting | Vercel |
| Rekap Otomatis | Google Drive API |

### Akun & Akses
- Email utama project: `ict@dcsindo.com`
- Domain perusahaan: `dcsindo.com`
- Email pribadi: `zensen.p@dcsindo.com`
- ⚠️ Jangan pernah minta password / kredensial server di chat

---

## Fitur Tambahan yang Sudah Disetujui

### ✅ Masuk Sekarang (Fase 1–4)
1. **Status Mobil Real-Time** — karyawan lihat mobil mana yang dipakai/bebas tanpa tanya HRD
2. **Reminder Booking Ruangan** — 15 menit sebelum meeting, WA + push ke pemesan
3. **Blast Slot Ruangan Kosong** — kalau ada cancel, blast WA + push ke semua karyawan
4. **Pengumuman dari Admin HRD** — broadcast WA + push, atau cukup di app
5. **Online Status Karyawan (Stealth Mode)** — fitur tersembunyi, permission per user (ala Discord), Super Admin yang tentukan siapa bisa akses

### 🔮 Future / Fase Berikutnya
- Absensi via UniFi Camera API
- Pengajuan cuti & izin
- Slip gaji digital

---

## Roadmap
| Fase | Isi | Status |
|---|---|---|
| Fase 1 | Setup database MariaDB (12 tabel) | ✅ SELESAI |
| Fase 2 | Halaman setup Super Admin + auth/login + fitur booking ruangan | ⏳ Berikutnya |
| Fase 3 | Fitur booking mobil + laporan + surat jalan | ⏳ Belum mulai |
| Fase 4 | Dashboard + rekap otomatis | ⏳ Belum mulai |
| Fase 5 | Absensi UniFi, cuti/izin, slip gaji | 🔮 Future |

---

## Cara Kerja Kita
- Zen adalah prompt engineer, bukan developer — semua kode ditulis Claude
- Gaya kerja: **perlahan, satu langkah per langkah**
- Untuk hal mudah: kasih guide 1-3 step ringkas. Untuk hal penting/rumit: pelan-pelan
- JANGAN over-engineer — kalau Zen butuh simpel, kasih simpel
- Selalu kabari kalau ada potensi masalah keamanan atau design flaw
- Jelaskan semua dalam bahasa awam
- Panggil "Zen", bukan "Bos"
- Kalau ada error, Zen paste pesan error mentah ke chat
- Setiap fitur selesai, review keamanan dulu sebelum lanjut

---

## Langkah Berikutnya Setelah Baca Ini
1. Konfirmasi sudah paham konteks
2. Lanjutkan bikin sisa tabel database (mulai dari `travel_documents`)
3. Pandu Zen paste SQL ke phpMyAdmin step by step (satu per satu)

---

*Dokumen handover antar sesi Claude. Selalu update setiap ada keputusan baru.*
