/**
 * Batas atas jumlah baris untuk SEMUA query listing (M-05).
 *
 * Tujuannya bukan paginasi, melainkan *bounding*: tanpa ini satu request bisa
 * menarik seluruh isi tabel. Endpoint yang sudah punya paginasi sendiri
 * (`visitor_log`) dan yang sudah ber-LIMIT (`admin_activity_log`) memakai
 * angka yang sama dan sengaja TIDAK ikut diubah.
 *
 * SEBELUM MENAIKKAN ANGKA INI — atau sebelum data mana pun tumbuh melewati 500
 * baris — dua pemakai berikut harus ditangani lebih dulu. Keduanya
 * mengasumsikan daftar yang diterima UTUH dan akan gagal DIAM-DIAM (hasil salah
 * tanpa pesan error apa pun) begitu daftarnya terpotong:
 *
 *   1. `client/src/components/search-modal.tsx` — memuat seluruh produk per
 *      brand lalu memfilter di klien. Terpotong = produk yang sebenarnya ada
 *      dilaporkan tidak ditemukan. Perlu endpoint `/public/search` ringan
 *      lebih dulu (commit #3 di rencana M-05).
 *   2. `client/src/ubiquiti/admin/ProductForm.tsx` — memuat seluruh produk
 *      Ubiquiti untuk mengisi pemilih add-on. Terpotong = produk hilang dari
 *      dropdown tanpa tanda apa pun.
 *
 * Per 2026-09-15 tabel terbesar yang terkena batas ini adalah
 * `ubiquiti_dcs_products` = 395 baris, jadi cap 500 belum memotong apa pun.
 * Inventaris lengkap, prioritas, dan rencana paginasi: bagian "M-05" di
 * `laporan.md`.
 */
export const LIST_ROW_CAP = 500;
