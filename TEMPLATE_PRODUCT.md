# Template untuk Menambahkan Field Baru ke Produk

## 📋 Template Lengkap

Copy template ini dan sesuaikan dengan produk Anda:

```typescript
{
  // ===== FIELD YANG SUDAH ADA (JANGAN DIUBAH) =====
  id: "product-id",
  name: "Product Name",
  category: "Cloud Gateways", // atau kategori lainnya
  subfilter: "Enterprise Scale",
  image: "/images/product-image.png",
  shortDescription: "Deskripsi singkat produk...",
  specs: [
    { label: "Throughput", value: "10 Gbps IPS" },
    { label: "Ports", value: "8x GbE RJ45, 1x 10G SFP+" },
  ],
  isNew: true, // atau false
  
  // ===== FIELD BARU (TAMBAHKAN INI) =====
  
  // SKU Produk (opsional - akan random jika tidak ada)
  sku: "PRODUCT-SKU-001",
  
  // Array gambar untuk gallery (gambar pertama = gambar utama)
  images: [
    "/images/product-image.png",           // Gambar utama (sama dengan field 'image')
    "/images/product-image-2.png",         // Gambar tambahan 1
    "/images/product-image-3.png"          // Gambar tambahan 2
  ],
  
  // Gambar untuk tab Overview (bisa 2 atau lebih gambar)
  overviewImages: [
    "/images/product-overview-1.png",
    "/images/product-overview-2.png"
  ],
  
  // Bullet points untuk deskripsi produk
  bulletPoints: [
    "Fitur utama 1",
    "Fitur utama 2",
    "Fitur utama 3",
    "Fitur utama 4"
  ],
  
  // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  technicalSpecs: [
    {
      title: "Overview",
      items: [
        { label: "Dimensions", value: "442.4 x 43.7 x 325 mm (17.4 x 1.7 x 12.8\")" },
        { label: "Network", value: "✓", isCheck: true },  // Akan tampil sebagai checkmark
        { label: "Managed UniFi Devices", value: "500+" },
        { label: "Simultaneous Users Connected", value: "5,000+" },
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
    {
      title: "Hardware",
      items: [
        { label: "Processor", value: "Quad-Core ARM Cortex-A57 at 1.7 GHz" },
        { label: "Memory", value: "4 GB DDR4" }
      ]
    },
    // ... tambahkan section lainnya (VPN & SD-WAN, Networking, Software, dll)
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
      productLink: "/products/mounting-kit"  // Link ke halaman produk addon (opsional)
    },
    // ... tambahkan addon lainnya
  ]
}
```

---

## 🎯 Template Minimal (Jika Tidak Punya Data Lengkap)

Jika Anda tidak punya semua data, gunakan template minimal ini:

```typescript
{
  // Field yang sudah ada (JANGAN DIUBAH)
  id: "product-id",
  name: "Product Name",
  category: "Cloud Gateways",
  subfilter: "Enterprise Scale",
  image: "/images/product-image.png",
  shortDescription: "Deskripsi singkat produk...",
  specs: [
    { label: "Throughput", value: "10 Gbps IPS" },
    { label: "Ports", value: "8x GbE RJ45, 1x 10G SFP+" },
  ],
  
  // Field baru minimal
  sku: "PRODUCT-SKU-001",
  images: ["/images/product-image.png"],
  overviewImages: ["/images/dcs-overview-1.png", "/images/dcs-overview-2.png"],
  bulletPoints: [
    "Fitur utama 1",
    "Fitur utama 2",
    "Fitur utama 3"
  ],
  technicalSpecs: [
    {
      title: "Overview",
      items: [
        { label: "Dimensions", value: "TBD" },
        { label: "Network", value: "✓", isCheck: true }
      ]
    }
  ],
  inTheBox: [
    { name: "Device", image: "/images/dcs-box.png" },
    { name: "Power Cable", image: "/images/dcs-box.png" }
  ],
  addons: []  // Kosong jika tidak ada addon
}
```

---

## 📝 Catatan Penting

1. **Semua field baru bersifat OPSIONAL** - Jika tidak ditambahkan, akan menggunakan default
2. **Field yang sudah ada JANGAN DIUBAH** - Hanya tambahkan field baru di bawahnya
3. **Gambar bisa menggunakan placeholder** - Gunakan `/images/dcs-box.png` atau gambar lain yang sudah ada
4. **Technical specs bisa disesuaikan** - Tambah/kurangi section sesuai kebutuhan
5. **Addon bisa kosong** - Gunakan `addons: []` jika tidak ada addon

---

## 🚀 Cara Cepat Apply ke Banyak Produk

### Opsi 1: Copy-Paste Manual
1. Buka `client/src/lib/data.ts`
2. Cari produk yang ingin diupdate
3. Copy template di atas
4. Paste di bawah field `isNew` (atau field terakhir yang ada)
5. Sesuaikan nilai-nilainya
6. Simpan file

### Opsi 2: Gunakan Template Minimal
Jika tidak punya data lengkap, gunakan template minimal dengan placeholder:

```typescript
// Tambahkan ini di bawah field yang sudah ada
sku: "AUTO-" + id.toUpperCase(),
images: [image],
overviewImages: ["/images/dcs-overview-1.png", "/images/dcs-overview-2.png"],
bulletPoints: ["High performance", "Enterprise grade", "Easy to manage"],
technicalSpecs: [
  {
    title: "Overview",
    items: [
      { label: "Category", value: category },
      { label: "Subfilter", value: subfilter }
    ]
  }
],
inTheBox: [
  { name: "Device", image: "/images/dcs-box.png" },
  { name: "Power Cable", image: "/images/dcs-box.png" },
  { name: "Quick Start", image: "/images/dcs-box.png" }
],
addons: []
```

---

## 📚 Contoh Lengkap per Kategori

### Cloud Gateways
Lihat produk **"Enterprise Fortress Gateway"** (id: "efg") di `data.ts` - sudah lengkap dengan semua field.

### Switching
```typescript
{
  id: "USW-Pro-Max-48-PoE",
  name: "Pro Max 48 PoE",
  // ... field yang sudah ada ...
  
  sku: "USW-PRO-MAX-48-POE",
  images: ["/images/Product-Pro-Max-48-PoE.png"],
  overviewImages: ["/images/switch-overview-1.png", "/images/switch-overview-2.png"],
  bulletPoints: [
    "48x 2.5 GbE PoE+ ports",
    "720W total PoE budget",
    "Layer 3 switching",
    "Rack mountable"
  ],
  technicalSpecs: [
    {
      title: "Overview",
      items: [
        { label: "Ports", value: "48x 2.5 GbE PoE+" },
        { label: "PoE Budget", value: "720W" },
        { label: "Switching Capacity", value: "176 Gbps" }
      ]
    },
    {
      title: "Hardware",
      items: [
        { label: "Dimensions", value: "442.4 x 43.7 x 325 mm" },
        { label: "Weight", value: "5.2 kg" }
      ]
    }
  ],
  inTheBox: [
    { name: "Switch", image: "/images/dcs-box.png" },
    { name: "Rack Mount Kit", image: "/images/dcs-box.png" },
    { name: "Power Cable", image: "/images/dcs-box.png" }
  ],
  addons: []
}
```

### WiFi
```typescript
{
  id: "U7-Pro",
  name: "U7 Pro",
  // ... field yang sudah ada ...
  
  sku: "U7-PRO",
  images: ["/images/Product-U7-Pro.png"],
  overviewImages: ["/images/wifi-overview-1.png", "/images/wifi-overview-2.png"],
  bulletPoints: [
    "WiFi 7 (802.11be)",
    "6 GHz support",
    "4x4 MIMO",
    "PoE powered"
  ],
  technicalSpecs: [
    {
      title: "Overview",
      items: [
        { label: "WiFi Standard", value: "WiFi 7 (802.11be)" },
        { label: "Bands", value: "2.4 GHz, 5 GHz, 6 GHz" },
        { label: "Max Speed", value: "11 Gbps" }
      ]
    }
  ],
  inTheBox: [
    { name: "Access Point", image: "/images/dcs-box.png" },
    { name: "Mounting Plate", image: "/images/dcs-box.png" }
  ],
  addons: []
}
```

### Camera Security
```typescript
{
  id: "UVC-G6-Pro-Turret",
  name: "G6 Pro Turret",
  // ... field yang sudah ada ...
  
  sku: "UVC-G6-PRO-TURRET",
  images: ["/images/Product-G6-Pro-Turret.png"],
  overviewImages: ["/images/camera-overview-1.png", "/images/camera-overview-2.png"],
  bulletPoints: [
    "4K resolution",
    "AI detection",
    "Night vision",
    "Weather resistant"
  ],
  technicalSpecs: [
    {
      title: "Overview",
      items: [
        { label: "Resolution", value: "4K (3840 x 2160)" },
        { label: "Frame Rate", value: "30 FPS" },
        { label: "AI Detection", value: "✓", isCheck: true }
      ]
    }
  ],
  inTheBox: [
    { name: "Camera", image: "/images/dcs-box.png" },
    { name: "Mounting Base", image: "/images/dcs-box.png" }
  ],
  addons: [
    {
      id: 1,
      name: "Junction Box",
      image: "/images/dcs-box.png",
      price: 49,
      description: "Weather-resistant junction box for clean cable management.",
      specs: ["Weather resistant", "Easy installation", "Cable management"],
      detailedSpecs: [
        { label: "Material", value: "Aluminum" },
        { label: "IP Rating", value: "IP67" }
      ],
      productLink: "/products/camera-junction-box"
    }
  ]
}
```

---

## ✅ Checklist

Setelah menambahkan field baru ke produk, pastikan:

- [ ] Field `sku` ditambahkan (atau biarkan kosong untuk auto-generate)
- [ ] Field `images` ditambahkan (minimal 1 gambar)
- [ ] Field `overviewImages` ditambahkan (minimal 2 gambar)
- [ ] Field `bulletPoints` ditambahkan (minimal 3 poin)
- [ ] Field `technicalSpecs` ditambahkan (minimal 1 section)
- [ ] Field `inTheBox` ditambahkan (minimal 2 item)
- [ ] Field `addons` ditambahkan (bisa kosong `[]`)
- [ ] Tidak ada syntax error (cek dengan save file)
- [ ] Test di browser dengan klik produk tersebut

---

## 🎉 Selesai!

Sekarang Anda bisa menambahkan field baru ke produk manapun dengan mudah!
