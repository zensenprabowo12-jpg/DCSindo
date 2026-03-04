# 📊 Panduan Konversi Data.ts ke CSV untuk phpMyAdmin

## ✅ Status Konversi

**SELESAI!** File [`data.ts`](client/src/lib/data.ts) telah berhasil dikonversi ke format CSV.

### 📈 Hasil Konversi

- **Total Produk**: 283 produk
- **Total Baris Data**: 14,369 baris
- **Total File CSV**: 10 file
- **Format**: CSV (UTF-8)
- **Lokasi**: Folder [`csv-output/`](csv-output/)

---

## 📁 File yang Dihasilkan

| No | File CSV | Rows | Deskripsi |
|----|----------|------|-----------|
| 1 | [`products.csv`](csv-output/products.csv) | 283 | Data utama produk |
| 2 | [`product_specs.csv`](csv-output/product_specs.csv) | 1,132 | Spesifikasi produk |
| 3 | [`product_images.csv`](csv-output/product_images.csv) | 849 | Gambar produk |
| 4 | [`product_overview_images.csv`](csv-output/product_overview_images.csv) | 566 | Gambar overview |
| 5 | [`product_bullet_points.csv`](csv-output/product_bullet_points.csv) | 1,131 | Bullet points |
| 6 | [`product_tech_specs.csv`](csv-output/product_tech_specs.csv) | 3,081 | Spesifikasi teknis |
| 7 | [`product_in_the_box.csv`](csv-output/product_in_the_box.csv) | 1,120 | Item dalam box |
| 8 | [`product_addons.csv`](csv-output/product_addons.csv) | 839 | Addon/aksesori |
| 9 | [`addon_specs.csv`](csv-output/addon_specs.csv) | 2,517 | Spesifikasi addon |
| 10 | [`addon_detailed_specs.csv`](csv-output/addon_detailed_specs.csv) | 3,353 | Detail spesifikasi addon |

---

## 🚀 Cara Import ke phpMyAdmin

### Quick Start (3 Langkah)

1. **Buat Database & Tabel**
   ```sql
   -- Jalankan file database-structure.sql di phpMyAdmin
   ```
   File: [`database-structure.sql`](database-structure.sql)

2. **Import CSV Files**
   - Buka folder [`csv-output/`](csv-output/)
   - Import sesuai urutan (lihat panduan lengkap di bawah)

3. **Verifikasi**
   ```sql
   SELECT COUNT(*) FROM products; -- Harus 283
   ```

### 📖 Panduan Lengkap

Lihat file: [`csv-output/README.md`](csv-output/README.md)

Panduan lengkap berisi:
- ✅ Langkah-langkah detail import
- ✅ Pengaturan encoding dan format
- ✅ Troubleshooting common errors
- ✅ Query verifikasi
- ✅ Contoh query untuk ambil data

---

## 🔧 Tools yang Digunakan

### 1. Script Konversi
- **File**: [`convert-to-csv.mjs`](convert-to-csv.mjs)
- **Bahasa**: JavaScript (ES Module)
- **Fungsi**: Membaca data.ts dan mengkonversi ke 10 file CSV

### 2. Struktur Database
- **File**: [`database-structure.sql`](database-structure.sql)
- **Fungsi**: Membuat 10 tabel dengan relasi foreign key
- **Engine**: InnoDB
- **Charset**: utf8mb4_unicode_ci

---

## 📊 Struktur Database

### Relasi Tabel

```
products (tabel utama)
├── product_specs (1:N)
├── product_images (1:N)
├── product_overview_images (1:N)
├── product_bullet_points (1:N)
├── product_tech_specs (1:N)
├── product_in_the_box (1:N)
└── product_addons (1:N)
    ├── addon_specs (1:N)
    └── addon_detailed_specs (1:N)
```

### Primary Keys & Foreign Keys

- **products.id** → Primary Key (VARCHAR)
- **product_addons.id** → Primary Key (INT)
- Semua tabel relasi menggunakan **foreign key** dengan `ON DELETE CASCADE`

---

## 🎯 Urutan Import (PENTING!)

Harus import sesuai urutan ini karena ada foreign key constraints:

1. ✅ **products.csv** (harus pertama!)
2. ✅ product_specs.csv
3. ✅ product_images.csv
4. ✅ product_overview_images.csv
5. ✅ product_bullet_points.csv
6. ✅ product_tech_specs.csv
7. ✅ product_in_the_box.csv
8. ✅ **product_addons.csv** (harus sebelum addon_*)
9. ✅ addon_specs.csv
10. ✅ addon_detailed_specs.csv

---

## 💡 Tips & Catatan

### ✅ Yang Sudah Dilakukan

- ✅ Konversi TypeScript object ke CSV format
- ✅ Escape special characters (comma, quotes, newlines)
- ✅ Flatten nested structures ke relational tables
- ✅ Generate proper foreign keys
- ✅ UTF-8 encoding untuk karakter khusus
- ✅ Sort order untuk maintain urutan data

### ⚠️ Catatan Penting

1. **Encoding**: Semua file CSV menggunakan UTF-8
2. **Delimiter**: Comma (`,`)
3. **Quote**: Double quote (`"`)
4. **Header**: Baris pertama adalah nama kolom
5. **NULL Values**: Empty string untuk nilai kosong

### 🔄 Jika Ingin Re-generate CSV

Jalankan script konversi lagi:

```bash
node convert-to-csv.mjs
```

File CSV di folder `csv-output/` akan di-overwrite.

---

## 📝 Contoh Query Setelah Import

### Ambil produk dengan semua relasi

```sql
SELECT 
  p.*,
  (SELECT GROUP_CONCAT(CONCAT(label, ': ', value) SEPARATOR ', ') 
   FROM product_specs WHERE product_id = p.id) as specs,
  (SELECT image_url FROM product_images WHERE product_id = p.id AND is_primary = 1) as primary_image,
  (SELECT COUNT(*) FROM product_addons WHERE product_id = p.id) as addon_count
FROM products p
WHERE p.category = 'Cloud Gateways';
```

### Ambil produk dengan gambar (JSON format)

```sql
SELECT 
  p.id,
  p.name,
  (SELECT JSON_ARRAYAGG(image_url)
   FROM product_images WHERE product_id = p.id ORDER BY sort_order) as images
FROM products p
WHERE p.id = 'efg';
```

Lebih banyak contoh query ada di [`database-structure.sql`](database-structure.sql)

---

## 🐛 Troubleshooting

### Import Error: "Cannot add foreign key constraint"
**Solusi**: Import tabel `products` terlebih dahulu sebelum tabel lainnya.

### Import Error: "Invalid utf8 character"
**Solusi**: Pastikan file CSV encoding adalah UTF-8, bukan UTF-8 with BOM.

### Import Lambat
**Solusi**: Disable foreign key checks sementara:
```sql
SET FOREIGN_KEY_CHECKS=0;
-- Import semua CSV
SET FOREIGN_KEY_CHECKS=1;
```

Lebih banyak troubleshooting ada di [`csv-output/README.md`](csv-output/README.md)

---

## 📞 Support

Jika ada pertanyaan atau masalah:

1. Cek [`csv-output/README.md`](csv-output/README.md) untuk panduan detail
2. Cek [`database-structure.sql`](database-structure.sql) untuk struktur tabel
3. Lihat contoh data di file CSV

---

## ✨ Summary

| Item | Value |
|------|-------|
| **Source File** | [`client/src/lib/data.ts`](client/src/lib/data.ts) (1.3 MB) |
| **Output Folder** | [`csv-output/`](csv-output/) |
| **Total Products** | 283 |
| **Total CSV Files** | 10 |
| **Total Data Rows** | 14,369 |
| **Database Tables** | 10 |
| **Ready for Import** | ✅ YES |

---

**🎉 Data siap untuk diimport ke phpMyAdmin!**

Ikuti panduan di [`csv-output/README.md`](csv-output/README.md) untuk langkah-langkah detail.
