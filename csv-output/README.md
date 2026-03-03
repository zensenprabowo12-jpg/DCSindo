# 📊 Panduan Import CSV ke phpMyAdmin

File-file CSV ini dihasilkan dari konversi `data.ts` untuk diimport ke database MySQL melalui phpMyAdmin.

## 📁 File yang Dihasilkan

Total **10 file CSV** dengan **14,369 baris data**:

1. **products.csv** - 283 produk (tabel utama)
2. **product_specs.csv** - 1,132 spesifikasi produk
3. **product_images.csv** - 849 gambar produk
4. **product_overview_images.csv** - 566 gambar overview
5. **product_bullet_points.csv** - 1,131 bullet points
6. **product_tech_specs.csv** - 3,081 spesifikasi teknis
7. **product_in_the_box.csv** - 1,120 item dalam box
8. **product_addons.csv** - 839 addon/aksesori
9. **addon_specs.csv** - 2,517 spesifikasi addon
10. **addon_detailed_specs.csv** - 3,353 spesifikasi detail addon

---

## 🚀 Langkah-Langkah Import

### Step 1: Buat Database

1. Buka **phpMyAdmin**
2. Klik tab **"Databases"**
3. Buat database baru (contoh: `dcssindo_products`)
4. Set **Collation**: `utf8mb4_unicode_ci`

### Step 2: Buat Struktur Tabel

1. Pilih database yang baru dibuat
2. Klik tab **"SQL"**
3. Copy seluruh isi file **`database-structure.sql`** (ada di folder parent)
4. Paste ke SQL editor
5. Klik **"Go"** untuk execute

✅ Semua tabel akan otomatis dibuat dengan struktur yang benar.

### Step 3: Import CSV Files

**PENTING**: Import harus dilakukan sesuai urutan berikut (karena ada foreign key constraints):

#### 3.1. Import Tabel Utama (Products)

1. Klik tabel **`products`**
2. Klik tab **"Import"**
3. Pilih file **`products.csv`**
4. **Format**: CSV
5. **Format-specific options**:
   - Columns separated with: `,` (comma)
   - Columns enclosed with: `"` (double quote)
   - Columns escaped with: `"` (double quote)
   - Lines terminated with: `auto`
   - Column names in first row: ✅ **CENTANG**
6. Klik **"Go"**

✅ Harus berhasil import **283 rows**

#### 3.2. Import Tabel Relasi (Urutan Penting!)

Ulangi langkah yang sama untuk file-file berikut **SESUAI URUTAN**:

| No | Tabel | File CSV | Expected Rows |
|----|-------|----------|---------------|
| 2 | `product_specs` | `product_specs.csv` | 1,132 |
| 3 | `product_images` | `product_images.csv` | 849 |
| 4 | `product_overview_images` | `product_overview_images.csv` | 566 |
| 5 | `product_bullet_points` | `product_bullet_points.csv` | 1,131 |
| 6 | `product_tech_specs` | `product_tech_specs.csv` | 3,081 |
| 7 | `product_in_the_box` | `product_in_the_box.csv` | 1,120 |
| 8 | `product_addons` | `product_addons.csv` | 839 |
| 9 | `addon_specs` | `addon_specs.csv` | 2,517 |
| 10 | `addon_detailed_specs` | `addon_detailed_specs.csv` | 3,353 |

---

## ⚙️ Pengaturan Import yang Penting

### Encoding
- Pastikan **Character set**: `utf8mb4`
- Ini penting untuk karakter khusus dan emoji

### CSV Options
```
Columns separated with: ,
Columns enclosed with: "
Columns escaped with: "
Lines terminated with: auto
Column names in first row: ✅ CHECKED
```

### Jika Ada Error

#### Error: "Duplicate entry"
- Hapus semua data di tabel
- Import ulang dari awal

#### Error: "Cannot add or update a child row: a foreign key constraint fails"
- Pastikan tabel `products` sudah diimport terlebih dahulu
- Pastikan tabel `product_addons` sudah diimport sebelum `addon_specs` dan `addon_detailed_specs`

#### Error: "Invalid utf8 character"
- Pastikan encoding file CSV adalah UTF-8
- Buka file CSV dengan text editor dan save as UTF-8

---

## 🔍 Verifikasi Import

Setelah semua import selesai, jalankan query berikut untuk verifikasi:

```sql
-- Cek jumlah data di setiap tabel
SELECT 'products' as tabel, COUNT(*) as jumlah FROM products
UNION ALL
SELECT 'product_specs', COUNT(*) FROM product_specs
UNION ALL
SELECT 'product_images', COUNT(*) FROM product_images
UNION ALL
SELECT 'product_overview_images', COUNT(*) FROM product_overview_images
UNION ALL
SELECT 'product_bullet_points', COUNT(*) FROM product_bullet_points
UNION ALL
SELECT 'product_tech_specs', COUNT(*) FROM product_tech_specs
UNION ALL
SELECT 'product_in_the_box', COUNT(*) FROM product_in_the_box
UNION ALL
SELECT 'product_addons', COUNT(*) FROM product_addons
UNION ALL
SELECT 'addon_specs', COUNT(*) FROM addon_specs
UNION ALL
SELECT 'addon_detailed_specs', COUNT(*) FROM addon_detailed_specs;
```

**Expected Result:**
```
products                    : 283
product_specs               : 1132
product_images              : 849
product_overview_images     : 566
product_bullet_points       : 1131
product_tech_specs          : 3081
product_in_the_box          : 1120
product_addons              : 839
addon_specs                 : 2517
addon_detailed_specs        : 3353
```

---

## 📝 Contoh Query Setelah Import

### Ambil semua produk dengan kategori tertentu
```sql
SELECT * FROM products WHERE category = 'Cloud Gateways';
```

### Ambil produk dengan spesifikasi
```sql
SELECT 
  p.id,
  p.name,
  p.category,
  ps.label,
  ps.value
FROM products p
LEFT JOIN product_specs ps ON p.id = ps.product_id
WHERE p.id = 'efg'
ORDER BY ps.sort_order;
```

### Ambil produk dengan gambar
```sql
SELECT 
  p.id,
  p.name,
  pi.image_url,
  pi.is_primary
FROM products p
LEFT JOIN product_images pi ON p.id = pi.product_id
WHERE p.id = 'efg'
ORDER BY pi.sort_order;
```

### Ambil produk dengan semua addon
```sql
SELECT 
  p.name as product_name,
  pa.name as addon_name,
  pa.price,
  pa.description
FROM products p
LEFT JOIN product_addons pa ON p.id = pa.product_id
WHERE p.id = 'efg';
```

---

## 🎯 Tips & Tricks

1. **Backup Database**: Selalu backup database sebelum import data besar
2. **Batch Import**: Jika ada error, coba import per batch (misalnya 100 rows per batch)
3. **Check Logs**: Lihat error log di phpMyAdmin untuk troubleshooting
4. **Index**: Tabel sudah memiliki index yang optimal, tidak perlu tambahan
5. **Foreign Keys**: Jangan hapus data di tabel `products` jika ada data relasi, gunakan CASCADE

---

## 📞 Troubleshooting

### Import Lambat?
- Disable foreign key checks sementara:
  ```sql
  SET FOREIGN_KEY_CHECKS=0;
  -- Import semua CSV
  SET FOREIGN_KEY_CHECKS=1;
  ```

### Memory Limit Error?
- Tingkatkan `upload_max_filesize` dan `post_max_size` di `php.ini`
- Atau import via command line:
  ```bash
  mysql -u username -p database_name < import.sql
  ```

### Character Encoding Issues?
- Pastikan database collation: `utf8mb4_unicode_ci`
- Pastikan tabel collation: `utf8mb4_unicode_ci`
- Pastikan file CSV encoding: `UTF-8`

---

## ✅ Checklist Import

- [ ] Database dibuat dengan collation `utf8mb4_unicode_ci`
- [ ] Struktur tabel dibuat dari `database-structure.sql`
- [ ] Import `products.csv` (283 rows) ✅
- [ ] Import `product_specs.csv` (1,132 rows) ✅
- [ ] Import `product_images.csv` (849 rows) ✅
- [ ] Import `product_overview_images.csv` (566 rows) ✅
- [ ] Import `product_bullet_points.csv` (1,131 rows) ✅
- [ ] Import `product_tech_specs.csv` (3,081 rows) ✅
- [ ] Import `product_in_the_box.csv` (1,120 rows) ✅
- [ ] Import `product_addons.csv` (839 rows) ✅
- [ ] Import `addon_specs.csv` (2,517 rows) ✅
- [ ] Import `addon_detailed_specs.csv` (3,353 rows) ✅
- [ ] Verifikasi jumlah rows dengan query
- [ ] Test query untuk ambil data produk

---

**🎉 Selamat! Data produk Anda sudah siap digunakan di database MySQL!**
