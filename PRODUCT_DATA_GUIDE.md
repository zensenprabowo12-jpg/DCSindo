# Panduan Konfigurasi Data Produk

## 📋 Daftar Isi
1. [Penjelasan Struktur Data](#penjelasan-struktur-data)
2. [Cara Menambah/Edit Produk](#cara-menambah-edit-produk)
3. [Contoh Lengkap](#contoh-lengkap)
4. [Tips & Trik](#tips--trik)

---

## 🏗️ Penjelasan Struktur Data

Semua data produk sekarang terpusat di file **`client/src/lib/data.ts`**. Berikut penjelasan setiap bagian:

### 1. **Interface TechSpecItem**
```typescript
export interface TechSpecItem {
  label: string;        // Label spesifikasi (contoh: "Dimensions")
  value: string;        // Nilai spesifikasi (contoh: "442.4 x 200 x 43.7 mm")
  isCheck?: boolean;    // Untuk menampilkan checkmark icon (✓)
  isList?: boolean;     // Untuk menampilkan sebagai list
}
```

### 2. **Interface TechSpecSection**
```typescript
export interface TechSpecSection {
  title: string;              // Judul section (contoh: "Overview", "Security")
  items: TechSpecItem[];      // Array dari item spesifikasi
}
```
**Fungsi:** Digunakan untuk tab "Technical" yang bisa di-expand/collapse per section.

### 3. **Interface InTheBoxItem**
```typescript
export interface InTheBoxItem {
  name: string;    // Nama item (contoh: "Device", "Mounting Kit")
  image: string;   // Path ke gambar item
}
```
**Fungsi:** Untuk menampilkan item yang ada dalam box produk (tab "In The Box").

### 4. **Interface AddonDetailedSpec**
```typescript
export interface AddonDetailedSpec {
  label: string;   // Label spesifikasi (contoh: "Dimensions")
  value: string;   // Nilai spesifikasi (contoh: "442.4 x 200 x 43.7 mm")
}
```

### 5. **Interface ProductAddon**
```typescript
export interface ProductAddon {
  id: number;                           // ID unik addon
  name: string;                         // Nama addon
  image: string;                        // Path ke gambar addon
  price?: number;                       // Harga addon (opsional)
  description?: string;                 // Deskripsi addon (opsional)
  specs: string[];                      // Array fitur/spesifikasi singkat
  detailedSpecs: AddonDetailedSpec[];   // Spesifikasi detail untuk popup
  productLink?: string;                 // Link ke halaman produk addon (untuk tombol "More")
}
```
**Fungsi:** Untuk menampilkan addon/aksesori produk dengan preview lebih kecil.

### 6. **Interface Product (Utama)**
```typescript
export interface Product {
  // Field yang sudah ada sebelumnya
  id: string;
  name: string;
  category: "Cloud Gateways" | "Switching" | "WiFi" | ...;
  subfilter: string;
  image: string;
  shortDescription: string;
  specs: { label: string; value: string }[];
  isNew?: boolean;
  
  // Field baru untuk halaman detail produk
  images?: string[];                    // Array gambar untuk gallery
  overviewImages?: string[];            // Gambar untuk tab Overview
  technicalSpecs?: TechSpecSection[];   // Spesifikasi teknis dengan section
  inTheBox?: InTheBoxItem[];            // Item dalam box produk
  addons?: ProductAddon[];              // Addon/aksesori produk
  sku?: string;                         // SKU produk
  bulletPoints?: string[];              // Bullet points deskripsi
}
```

---

## ✏️ Cara Menambah/Edit Produk

### Langkah 1: Buka file `client/src/lib/data.ts`

### Langkah 2: Cari produk yang ingin diedit atau tambahkan produk baru

### Langkah 3: Tambahkan field-field baru sesuai kebutuhan

**Contoh untuk produk "Enterprise Fortress Gateway":**

```typescript
{
  id: "efg",
  name: "Enterprise Fortress Gateway",
  category: "Cloud Gateways",
  subfilter: "Enterprise Scale",
  image: "/images/Product-Enterprise-Fortress-Gateway.png",
  shortDescription: "25G Cloud Gateway with 500+ UniFi device...",
  specs: [
    { label: "Throughput", value: "10 Gbps IPS" },
    { label: "Ports", value: "8x GbE RJ45, 1x 10G SFP+" },
  ],
  isNew: true,
  
  // ===== FIELD BARU =====
  
  // SKU Produk (akan muncul di halaman detail)
  sku: "EFG-001",
  
  // Array gambar untuk gallery (gambar pertama = gambar utama)
  images: [
    "/images/Product-Enterprise-Fortress-Gateway.png",
    "/images/dcs-overview-1.png",
    "/images/dcs-overview-2.png"
  ],
  
  // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
  overviewImages: [
    "/images/dcs-overview-1.png",
    "/images/dcs-overview-2.png"
  ],
  
  // Bullet points untuk deskripsi produk
  bulletPoints: [
    "25G cloud gateways with 500+ UniFi Device",
    "5000+ client support",
    "12.5gbps ips routing",
    "complete high availability"
  ],
  
  // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  technicalSpecs: [
    {
      title: "Overview",  // Judul section
      items: [
        { label: "Dimensions", value: "442.4 x 43.7 x 325 mm" },
        { label: "Network", value: "✓", isCheck: true },  // Akan tampil sebagai checkmark
        { label: "Managed UniFi Devices", value: "500+" },
        // ... tambahkan item lainnya
      ]
    },
    {
      title: "Security",
      items: [
        { label: "Firewall", value: "Enterprise-class Application-aware Firewall" },
        { label: "Threat Management", value: "Signature-based IPS/IDS" }
      ]
    },
    // ... tambahkan section lainnya (VPN & SD-WAN, Networking, Hardware, Software)
  ],
  
  // Item yang ada dalam box produk (hanya gambar, tanpa text)
  inTheBox: [
    { name: "Device", image: "/images/dcs-box.png" },
    { name: "Mounting Kit", image: "/images/dcs-box.png" },
    { name: "Power Cable", image: "/images/dcs-box.png" },
    { name: "Quick Start", image: "/images/dcs-box.png" }
  ],
  
  // Addon/aksesori yang tersedia untuk produk ini
  addons: [
    {
      id: 1,
      name: "Mounting Kit",
      image: "/images/dcs-box.png",
      price: 299,
      description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
      specs: [
        "Compatible with 19\" racks",
        "Steel construction",
        "Easy installation"
      ],
      detailedSpecs: [
        { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
        { label: "Weight", value: "1.2 kg" },
        { label: "Material", value: "SGCC Steel" },
        { label: "Mounting", value: "1U Rack Mount" }
      ],
      productLink: "/products/mounting-kit-efg"  // Link ke halaman produk addon
    },
    // ... tambahkan addon lainnya
  ]
}
```

---

## 📝 Contoh Lengkap

Lihat produk **"Enterprise Fortress Gateway"** di file `client/src/lib/data.ts` untuk contoh lengkap implementasi semua field.

---

## 💡 Tips & Trik

### 1. **Mengganti Gambar Overview**
```typescript
overviewImages: [
  "/images/gambar-overview-1.png",
  "/images/gambar-overview-2.png"
]
```
- Gambar akan ditampilkan dalam grid 2 kolom
- Bisa menambahkan lebih dari 2 gambar

### 2. **Mengganti Gambar In The Box**
```typescript
inTheBox: [
  { name: "Device", image: "/images/device.png" },
  { name: "Mounting Kit", image: "/images/mounting-kit.png" },
  { name: "Power Cable", image: "/images/power-cable.png" },
  { name: "Quick Start", image: "/images/quick-start.png" }
]
```
- Gambar akan ditampilkan dalam grid 4 kolom
- Text tidak ditampilkan, hanya gambar
- Field `name` tetap diperlukan untuk alt text

### 3. **Menambah Section Technical Specs**
```typescript
technicalSpecs: [
  {
    title: "Nama Section Baru",
    items: [
      { label: "Label 1", value: "Value 1" },
      { label: "Label 2", value: "Value 2" },
      { label: "Fitur Aktif", value: "✓", isCheck: true }  // Tampil sebagai checkmark
    ]
  }
]
```
- Setiap section bisa di-expand/collapse
- Section pertama ("Overview") akan terbuka secara default

### 4. **Menambah Addon dengan Link "More"**
```typescript
addons: [
  {
    id: 1,
    name: "Nama Addon",
    image: "/images/addon.png",
    price: 299,
    description: "Deskripsi addon...",
    specs: ["Fitur 1", "Fitur 2", "Fitur 3"],
    detailedSpecs: [
      { label: "Spec 1", value: "Value 1" },
      { label: "Spec 2", value: "Value 2" }
    ],
    productLink: "/products/addon-link"  // Tombol "More" akan muncul jika ada
  }
]
```
- Preview addon sekarang lebih kecil (grid 4 kolom)
- Popup addon menampilkan detail lengkap
- Tombol "More" hanya muncul jika `productLink` ada

### 5. **Menambah Bullet Points**
```typescript
bulletPoints: [
  "Point 1",
  "Point 2",
  "Point 3",
  "Point 4"
]
```
- Akan ditampilkan dengan bullet point bulat
- Muncul di bawah deskripsi produk

### 6. **Menambah SKU Custom**
```typescript
sku: "CUSTOM-SKU-001"
```
- Jika tidak ada, akan di-generate random

---

## 🔄 Cara Menerapkan ke Produk Lain

1. **Copy struktur dari "Enterprise Fortress Gateway"**
2. **Paste ke produk lain yang ingin ditambahkan**
3. **Ganti nilai-nilai sesuai dengan produk tersebut**
4. **Simpan file `data.ts`**
5. **Refresh browser untuk melihat perubahan**

---

## ⚠️ Catatan Penting

1. **Semua field baru bersifat opsional** - Jika tidak ada, akan menggunakan default
2. **Technical specs sekarang berlaku untuk semua kategori** - Tidak hanya Cloud Gateways
3. **Gambar In The Box tidak menampilkan text** - Hanya gambar saja
4. **Addon preview lebih kecil** - Grid 4 kolom untuk tampilan lebih compact
5. **Tombol "More" di addon popup** - Hanya muncul jika `productLink` ada

---

## 📞 Troubleshooting

**Q: Gambar tidak muncul?**
A: Pastikan path gambar benar dan file ada di folder `public/images/`

**Q: Technical specs tidak muncul?**
A: Pastikan struktur `technicalSpecs` sesuai dengan interface `TechSpecSection[]`

**Q: Addon tidak muncul?**
A: Pastikan struktur `addons` sesuai dengan interface `ProductAddon[]`

**Q: Tombol "More" tidak muncul?**
A: Pastikan field `productLink` ada di addon

---

## 🎉 Selesai!

Sekarang semua data produk terpusat di satu file (`data.ts`) dan mudah untuk diatur!
