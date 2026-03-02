# Panduan Split Products System

## 📋 Overview

File [`data.ts`](client/src/lib/data.ts) yang besar (1.2MB+, 292 produk) telah dipisahkan menjadi 8 file kategori terpisah untuk memudahkan maintenance dan editing.

## 📁 Struktur Baru

```
client/src/lib/products/
├── cloudGateways.ts       # 11 produk Cloud Gateways
├── switching.ts           # 52 produk Switching
├── wifi.ts                # 35 produk WiFi
├── cameraSecurity.ts      # 92 produk Camera Security
├── doorAccess.ts          # 59 produk Door Access
├── integrations.ts        # 31 produk Integrations
├── advancedHosting.ts     # 9 produk Advanced Hosting
├── accessories.ts         # 3 produk Accessories
└── index.ts               # Merge semua kategori (auto-generated)
```

**Total: 292 produk** tersebar di 8 file kategori

## 🎯 Keuntungan Sistem Baru

### 1. **Mudah Diedit**
- File lebih kecil dan mudah dibuka
- Fokus pada 1 kategori saja
- Tidak perlu scroll ribuan baris

### 2. **Organized**
- Setiap kategori punya file sendiri
- Struktur folder yang jelas
- Mudah dicari

### 3. **Maintainable**
- Edit 1 kategori tidak ganggu kategori lain
- Merge conflict lebih jarang terjadi
- Team bisa kerja parallel

### 4. **Scalable**
- Mudah tambah produk baru
- Mudah tambah kategori baru
- Performance lebih baik

## 📝 Cara Mengedit Produk

### Edit Produk di Kategori Tertentu

**Contoh: Edit produk WiFi**

1. Buka file [`client/src/lib/products/wifi.ts`](client/src/lib/products/wifi.ts)
2. Cari produk yang ingin diedit
3. Edit field yang diinginkan:
   - `name` - Nama produk
   - `image` - Path gambar
   - `shortDescription` - Deskripsi singkat
   - `specs` - Spesifikasi
   - `bulletPoints` - Bullet points
   - `technicalSpecs` - Spesifikasi teknis detail
   - `inTheBox` - Item dalam box
   - `addons` - Addon produk
   - dll
4. Save file
5. Aplikasi akan auto-reload

**Contoh Edit:**
```typescript
// Di wifi.ts
{
  id: "u7-pro",
  name: "U7 Pro",  // ← Edit nama
  category: "WiFi",
  subfilter: "Wall",
  image: "/images/products/Product-U7-Pro.png",  // ← Edit gambar
  shortDescription: "Deskripsi baru...",  // ← Edit deskripsi
  specs: [
    { label: "Speed", value: "6 Gbps" },  // ← Edit specs
  ],
  bulletPoints: [
    "Feature 1",  // ← Edit bullet points
    "Feature 2",
  ],
  // ... field lainnya
}
```

### Menambahkan Produk Baru

**Contoh: Tambah produk WiFi baru**

1. Buka [`client/src/lib/products/wifi.ts`](client/src/lib/products/wifi.ts)
2. Tambahkan produk baru di array:

```typescript
export const wifiProducts: Product[] = [
  // ... produk existing ...
  
  // Produk baru
  {
    id: "u7-pro-max",  // ID unik
    name: "U7 Pro Max",
    category: "WiFi",
    subfilter: "Wall",  // Sesuaikan subfilter
    image: "/images/products/Product-U7-Pro-Max.png",
    shortDescription: "Next-gen WiFi 7 access point...",
    specs: [
      { label: "Speed", value: "10 Gbps" },
      { label: "Bands", value: "Tri-Band" },
    ],
    isNew: true,  // Tampilkan badge "New"
    bulletPoints: [
      "WiFi 7 technology",
      "10 Gbps throughput",
      "Advanced security",
    ],
    // ... field lainnya optional
  },
];
```

3. Save file
4. Produk baru akan muncul otomatis di website

## 🔄 Cara Kerja Auto-Merge

File [`client/src/lib/products/index.ts`](client/src/lib/products/index.ts) otomatis merge semua kategori:

```typescript
// Import dari setiap file kategori
import { cloudGatewaysProducts } from './cloudGateways';
import { switchingProducts } from './switching';
// ... dll

// Merge jadi 1 array
export const products = [
  ...cloudGatewaysProducts,
  ...switchingProducts,
  ...wifiProducts,
  // ... dll
];
```

**Aplikasi tetap menggunakan 1 array `products`** seperti sebelumnya!

## 📂 File Kategori

### 1. [`cloudGateways.ts`](client/src/lib/products/cloudGateways.ts) - 11 produk
**Subfilters:**
- Enterprise Scale
- Large Scale
- Compact
- WiFi Integrated

### 2. [`switching.ts`](client/src/lib/products/switching.ts) - 52 produk
**Subfilters:**
- Enterprise
- Flagship
- Standard
- Lite
- Flex
- Industrial

### 3. [`wifi.ts`](client/src/lib/products/wifi.ts) - 35 produk
**Subfilters:**
- Enterprise
- Flagship
- Wall
- Outdoor
- Mega Capacity
- Bridging

### 4. [`cameraSecurity.ts`](client/src/lib/products/cameraSecurity.ts) - 92 produk
**Subfilters:**
- AI Pro
- AI Bullet
- AI Dome
- AI 360
- AI Theta
- G5
- G4
- Accessories

### 5. [`doorAccess.ts`](client/src/lib/products/doorAccess.ts) - 59 produk
**Subfilters:**
- Readers
- Hubs
- Locks
- Intercoms
- Accessories

### 6. [`integrations.ts`](client/src/lib/products/integrations.ts) - 31 produk
**Subfilters:**
- Smart Power
- Sensors
- Displays

### 7. [`advancedHosting.ts`](client/src/lib/products/advancedHosting.ts) - 9 produk
**Subfilters:**
- Cloud Keys
- Servers

### 8. [`accessories.ts`](client/src/lib/products/accessories.ts) - 3 produk
**Subfilters:**
- Mounting
- Power
- Cables

## 🔧 Maintenance

### Menambahkan Kategori Baru

1. Buat file baru di [`client/src/lib/products/`](client/src/lib/products/)
   ```typescript
   // newCategory.ts
   export const newCategoryProducts: Product[] = [
     // ... produk
   ];
   ```

2. Update [`index.ts`](client/src/lib/products/index.ts):
   ```typescript
   import { newCategoryProducts } from './newCategory';
   
   export const products = [
     // ... existing
     ...newCategoryProducts,
   ];
   ```

3. Update CATEGORIES array:
   ```typescript
   export const CATEGORIES = [
     // ... existing
     "New Category",
   ] as const;
   ```

### Menghapus Produk

1. Buka file kategori yang sesuai
2. Hapus object produk dari array
3. Save file
4. Produk akan hilang dari website

### Memindahkan Produk ke Kategori Lain

1. Copy object produk dari file kategori lama
2. Paste ke file kategori baru
3. Update field `category` dan `subfilter`
4. Hapus dari file kategori lama
5. Save kedua file

## ⚠️ Important Notes

### JANGAN Edit index.ts Manual!

File [`index.ts`](client/src/lib/products/index.ts) adalah auto-generated. Jika perlu regenerate:

```bash
node split-products-manual.cjs
```

### Struktur Data Tetap Sama

Struktur object produk **TIDAK BERUBAH**:
- ✅ Semua field tetap sama
- ✅ Subfilter tetap sama
- ✅ Layout tetap sama
- ✅ Hanya dipisahkan ke file berbeda

### Backup Tersedia

Backup file lama tersimpan di:
- [`client/src/lib/data.ts.backup-before-split`](client/src/lib/data.ts.backup-before-split)

## 🚀 Workflow Editing

### Scenario 1: Edit 1 Produk

```
1. Identifikasi kategori produk
2. Buka file kategori (contoh: wifi.ts)
3. Cari produk by ID atau nama
4. Edit field yang diinginkan
5. Save
6. Done! ✅
```

### Scenario 2: Tambah Produk Baru

```
1. Tentukan kategori produk
2. Buka file kategori
3. Copy template produk existing
4. Edit semua field
5. Tambahkan ke array
6. Save
7. Done! ✅
```

### Scenario 3: Bulk Edit 1 Kategori

```
1. Buka file kategori
2. Find & Replace untuk edit massal
3. Save
4. Done! ✅
```

## 📊 Statistics

| Kategori | File | Produk | Size |
|----------|------|--------|------|
| Cloud Gateways | [`cloudGateways.ts`](client/src/lib/products/cloudGateways.ts) | 11 | 55 KB |
| Switching | [`switching.ts`](client/src/lib/products/switching.ts) | 52 | 240 KB |
| WiFi | [`wifi.ts`](client/src/lib/products/wifi.ts) | 35 | 163 KB |
| Camera Security | [`cameraSecurity.ts`](client/src/lib/products/cameraSecurity.ts) | 92 | 427 KB |
| Door Access | [`doorAccess.ts`](client/src/lib/products/doorAccess.ts) | 59 | 274 KB |
| Integrations | [`integrations.ts`](client/src/lib/products/integrations.ts) | 31 | 145 KB |
| Advanced Hosting | [`advancedHosting.ts`](client/src/lib/products/advancedHosting.ts) | 9 | 41 KB |
| Accessories | [`accessories.ts`](client/src/lib/products/accessories.ts) | 3 | 11 KB |
| **TOTAL** | **8 files** | **292** | **~1.3 MB** |

## 🔍 Troubleshooting

### Import Error

Jika ada error `Cannot find module '@/lib/products'`:

1. Pastikan folder [`client/src/lib/products/`](client/src/lib/products/) ada
2. Pastikan [`index.ts`](client/src/lib/products/index.ts) ada
3. Restart TypeScript server di VSCode

### Produk Tidak Muncul

1. Cek apakah produk ada di file kategori yang benar
2. Cek field `category` sesuai dengan nama kategori
3. Cek syntax TypeScript (tidak ada error)

### Duplikasi Produk

Jika produk muncul 2x:
1. Cek apakah produk ada di 2 file kategori
2. Hapus salah satu
3. Save

## 📚 Related Documentation

- [`PANDUAN_COLOR_VARIANTS.md`](PANDUAN_COLOR_VARIANTS.md) - Sistem color variants
- [`STRUKTUR_FOLDER.md`](STRUKTUR_FOLDER.md) - Struktur folder images
- [`PRODUCT_DATA_GUIDE.md`](PRODUCT_DATA_GUIDE.md) - Panduan data produk
- [`TEMPLATE_PRODUCT.md`](TEMPLATE_PRODUCT.md) - Template produk baru

## ✅ Checklist Setelah Split

- [x] 8 file kategori dibuat
- [x] index.ts dibuat
- [x] Imports diupdate di semua file
- [x] Backup data.ts lama dibuat
- [x] .gitignore diupdate
- [ ] Test aplikasi di browser
- [ ] Verify semua produk muncul
- [ ] Verify filter & search berfungsi

---

**Dibuat**: 2026-02-24  
**Total Produk**: 292  
**Total File**: 8 kategori + 1 index  
**Backup**: [`data.ts.backup-before-split`](client/src/lib/data.ts.backup-before-split)
