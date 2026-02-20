# 📚 Panduan Step-by-Step: Cara Menambahkan Field Baru ke Produk

## ⚠️ PENTING: Baca Ini Dulu!

Sebenarnya Anda **TIDAK PERLU** menambahkan field baru ke semua produk secara manual! 

Saya sudah membuat sistem yang **otomatis generate** data lengkap untuk semua produk. Tapi jika Anda ingin produk tertentu punya data **custom** (bukan auto-generated), ikuti panduan ini.

---

## 🎯 Kapan Perlu Menambahkan Field Manual?

Anda hanya perlu menambahkan field manual jika:
1. ✅ Ingin data produk yang **lebih spesifik** (bukan generic)
2. ✅ Punya gambar/foto **asli** produk tersebut
3. ✅ Punya spesifikasi **detail** produk tersebut

Jika tidak, **biarkan auto-generate** saja (sudah saya buat).

---

## 📝 Step-by-Step: Menambahkan Field Baru

### Step 1: Buka File data.ts

1. Buka VSCode
2. Buka file: `client/src/lib/data.ts`
3. Cari produk yang ingin Anda edit (contoh: "Dream Machine Pro Max")

### Step 2: Cari Produk yang Ingin Diedit

Gunakan **Ctrl+F** (Windows) atau **Cmd+F** (Mac) untuk mencari:

```
id: "udm-pro-max"
```

Anda akan menemukan kode seperti ini:

```typescript
{
  id: "udm-pro-max",
  name: "Dream Machine Pro Max ",
  category: "Cloud Gateways",
  subfilter: "Large Scale",
  image: "/images/Product-Dream-Machine-Pro-Max.png",
  shortDescription: "10G CLoud Gateway with 200+ UniFi device...",
  specs: [
    { label: "Throughput", value: "10 Gbps IPS" },
    { label: "Ports", value: "8x GbE RJ45, 1x 10G SFP+" },
    { label: "Storage", value: '2x 3.5" HDD Bays' },
    { label: "Processor", value: "Quad-Core ARM Cortex-A57" },
  ],
  isNew: true,
},  // <-- PERHATIKAN KOMA DAN KURUNG KURAWAL INI
```

### Step 3: Tambahkan Field Baru

**PENTING:** Tambahkan field baru **SEBELUM** kurung kurawal penutup `},`

Letakkan kursor **SETELAH** `isNew: true,` dan **SEBELUM** `},`

Kemudian tambahkan kode ini:

```typescript
{
  id: "udm-pro-max",
  name: "Dream Machine Pro Max ",
  category: "Cloud Gateways",
  subfilter: "Large Scale",
  image: "/images/Product-Dream-Machine-Pro-Max.png",
  shortDescription: "10G CLoud Gateway with 200+ UniFi device...",
  specs: [
    { label: "Throughput", value: "10 Gbps IPS" },
    { label: "Ports", value: "8x GbE RJ45, 1x 10G SFP+" },
    { label: "Storage", value: '2x 3.5" HDD Bays' },
    { label: "Processor", value: "Quad-Core ARM Cortex-A57" },
  ],
  isNew: true,
  
  // ===== TAMBAHKAN FIELD BARU DI SINI =====
  
  // SKU produk (ganti dengan SKU yang sesuai)
  sku: "UDM-PRO-MAX",
  
  // Array gambar untuk gallery (ganti dengan gambar yang sesuai)
  images: [
    "/images/Product-Dream-Machine-Pro-Max.png",  // Gambar utama
    "/images/dcs-overview-1.png",                 // Gambar tambahan 1
    "/images/dcs-overview-2.png"                  // Gambar tambahan 2
  ],
  
  // Gambar untuk tab Overview (ganti dengan gambar yang sesuai)
  overviewImages: [
    "/images/dcs-overview-1.png",
    "/images/dcs-overview-2.png"
  ],
  
  // Bullet points untuk deskripsi produk (ganti dengan deskripsi yang sesuai)
  bulletPoints: [
    "10G cloud gateway with 200+ UniFi Device",
    "2000+ client support",
    "5 Gbps IPS routing",
    "Redundant NVR storage"
  ],
  
  // Spesifikasi teknis (ganti dengan spesifikasi yang sesuai)
  technicalSpecs: [
    {
      title: "Overview",
      items: [
        { label: "Dimensions", value: "442.4 x 43.7 x 325 mm" },
        { label: "Network", value: "✓", isCheck: true },
        { label: "Managed UniFi Devices", value: "200+" },
        { label: "Simultaneous Users Connected", value: "2,000+" },
        { label: "Throughput", value: "10 Gbps" },
        { label: "IDS/IPS Throughput", value: "5 Gbps" }
      ]
    },
    {
      title: "Hardware",
      items: [
        { label: "Processor", value: "Quad-Core ARM Cortex-A57" },
        { label: "Memory", value: "4 GB DDR4" },
        { label: "Storage", value: "2x 3.5\" HDD Bays" }
      ]
    }
  ],
  
  // Item dalam box (bisa pakai gambar yang sama atau ganti)
  inTheBox: [
    { name: "Device", image: "/images/dcs-box.png" },
    { name: "Mounting Kit", image: "/images/dcs-box.png" },
    { name: "Power Cable", image: "/images/dcs-box.png" },
    { name: "Quick Start", image: "/images/dcs-box.png" }
  ],
  
  // Addons (bisa pakai yang sama atau ganti)
  addons: [
    {
      id: 1,
      name: "Mounting Kit",
      image: "/images/dcs-box.png",
      price: 299,
      description: "Compact, stackable, and toolless design.",
      specs: [
        "Compatible with 19\" racks",
        "Steel construction",
        "Easy installation"
      ],
      detailedSpecs: [
        { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
        { label: "Weight", value: "1.2 kg" },
        { label: "Material", value: "SGCC Steel" }
      ],
      productLink: "/products/mounting-kit"
    },
    {
      id: 2,
      name: "Power Cable",
      image: "/images/dcs-box.png",
      price: 299,
      description: "High-quality power cable.",
      specs: [
        "2m Length",
        "High durability",
        "Standard fit"
      ],
      detailedSpecs: [
        { label: "Length", value: "2.0 m" },
        { label: "Conductor", value: "Copper" }
      ],
      productLink: "/products/power-cable"
    }
  ]
},  // <-- JANGAN LUPA KOMA DAN KURUNG KURAWAL PENUTUP
```

### Step 4: Simpan File

1. Tekan **Ctrl+S** (Windows) atau **Cmd+S** (Mac)
2. Pastikan tidak ada error (lihat di bawah VSCode)

### Step 5: Test di Browser

1. Buka browser: `http://localhost:5000`
2. Cari produk "Dream Machine Pro Max"
3. Klik produk tersebut
4. Lihat semua tab (Overview, Technical, In The Box, Add Ons)
5. Pastikan semua data muncul dengan benar

---

## ✅ Checklist Setelah Menambahkan Field

- [ ] Field ditambahkan **SEBELUM** kurung kurawal penutup `},`
- [ ] Ada **koma** setelah `isNew: true,`
- [ ] Semua string menggunakan **tanda kutip** (`"..."`)
- [ ] Semua array menggunakan **kurung siku** (`[...]`)
- [ ] Semua object menggunakan **kurung kurawal** (`{...}`)
- [ ] File disimpan tanpa error
- [ ] Test di browser berhasil

---

## 🎨 Tips Customize

### 1. Ganti SKU
```typescript
sku: "UDM-PRO-MAX",  // Ganti dengan SKU yang sesuai
```

### 2. Ganti Gambar
```typescript
images: [
  "/images/Product-Dream-Machine-Pro-Max.png",  // Gambar asli produk
  "/images/udm-pro-max-front.png",              // Gambar depan
  "/images/udm-pro-max-back.png"                // Gambar belakang
],
```

### 3. Ganti Bullet Points
```typescript
bulletPoints: [
  "Fitur utama 1",  // Ganti dengan fitur produk
  "Fitur utama 2",
  "Fitur utama 3",
  "Fitur utama 4"
],
```

### 4. Tambah/Kurangi Technical Specs
```typescript
technicalSpecs: [
  {
    title: "Overview",  // Bisa tambah section baru
    items: [
      { label: "Label 1", value: "Value 1" },
      { label: "Label 2", value: "Value 2" },
      // Tambah item baru di sini
    ]
  },
  {
    title: "Hardware",  // Section baru
    items: [
      { label: "Processor", value: "..." },
      { label: "Memory", value: "..." }
    ]
  }
  // Bisa tambah section lainnya
],
```

---

## ⚠️ Common Errors & Solusi

### Error 1: "Unexpected token"
**Penyebab:** Lupa koma atau kurung kurawal
**Solusi:** Pastikan setiap field dipisahkan dengan koma

### Error 2: "Cannot read property"
**Penyebab:** Typo di nama field
**Solusi:** Pastikan nama field sesuai (sku, images, bulletPoints, dll)

### Error 3: Gambar tidak muncul
**Penyebab:** Path gambar salah
**Solusi:** Pastikan gambar ada di folder `public/images/`

---

## 🚀 Cara Cepat: Copy-Paste Template

Jika ingin cepat, copy template ini dan ganti nilai-nilainya:

```typescript
// ===== TEMPLATE - COPY DARI SINI =====

// SKU produk
sku: "PRODUCT-SKU",

// Array gambar
images: [
  "/images/product-image.png",
  "/images/dcs-overview-1.png",
  "/images/dcs-overview-2.png"
],

// Overview images
overviewImages: [
  "/images/dcs-overview-1.png",
  "/images/dcs-overview-2.png"
],

// Bullet points
bulletPoints: [
  "Fitur 1",
  "Fitur 2",
  "Fitur 3",
  "Fitur 4"
],

// Technical specs
technicalSpecs: [
  {
    title: "Overview",
    items: [
      { label: "Label 1", value: "Value 1" },
      { label: "Label 2", value: "Value 2" }
    ]
  }
],

// In the box
inTheBox: [
  { name: "Device", image: "/images/dcs-box.png" },
  { name: "Power Cable", image: "/images/dcs-box.png" }
],

// Addons
addons: [
  {
    id: 1,
    name: "Addon Name",
    image: "/images/dcs-box.png",
    price: 299,
    description: "Description...",
    specs: ["Spec 1", "Spec 2"],
    detailedSpecs: [
      { label: "Label", value: "Value" }
    ],
    productLink: "/products/addon-link"
  }
]

// ===== TEMPLATE - SAMPAI SINI =====
```

---

## 🎉 Kesimpulan

**YA, Anda tinggal copy-paste dan atur saja!**

Tapi ingat:
1. ✅ Copy dari `// SKU produk` sampai `addons: [...]`
2. ✅ Paste **SEBELUM** kurung kurawal penutup `},`
3. ✅ Ganti nilai-nilai sesuai produk Anda
4. ✅ Simpan dan test di browser

**ATAU** biarkan auto-generate saja (sudah saya buat) dan hanya edit produk yang penting!

---

## 📞 Jika Masih Bingung

Lihat contoh lengkap di produk **"Enterprise Fortress Gateway"** (id: "efg") di file `data.ts` baris 71-238.

Copy struktur dari sana dan ganti nilai-nilainya!
