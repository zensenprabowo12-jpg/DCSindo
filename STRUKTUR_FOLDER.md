# Struktur Folder Website DCSindo

## Struktur Folder Public (client/public/)

Folder public telah dirapihkan dengan struktur yang lebih terorganisir:

```
client/public/
├── favicon.png                    # Favicon website
├── opengraph.jpg                  # Open Graph image untuk social media
└── images/
    ├── wifi-ap.jpg               # Gambar WiFi AP yang digunakan
    ├── banners/                  # Banner dan gambar hero sections
    │   ├── dcs-access.png
    │   ├── dcs-box.png
    │   ├── dcs-network.png
    │   ├── dcs-overview-1.png
    │   ├── dcs-overview-2.png
    │   ├── dcs-protect.png
    │   ├── gateway-banner.png
    │   ├── Home-Camera-Security.png
    │   ├── home-Cloud-Gateways.png
    │   ├── Home-Door-Access.png
    │   ├── Home-Switching.png
    │   ├── Home-WiFi.png
    │   ├── support-banner.png
    │   └── wifi-banner.png
    ├── brands/                   # Logo brand (Ubiquiti, MikroTik, dll)
    │   ├── chatgpt_algcom_1770612894086.png
    │   ├── chatgpt_mikrotik_1770612894087.png
    │   ├── chatgpt_ubiquiti_1770612894088.png
    │   └── chatgpt_vsol_1770612894089.png
    ├── icons/                    # Icon kategori produk
    │   ├── icon-accessories.5446cef0.png
    │   ├── icon-camera-security.f70cc582.png
    │   ├── icon-cloud-gateways.fd169efc.png
    │   ├── icon-cloud-keys-gateways.c3a4111b.png
    │   ├── icon-door-access.f5ce13b9.png
    │   ├── icon-new-integrations.e6104f51.png
    │   ├── icon-switching.0fe78dd4.png
    │   └── icon-wifi.10459860.png
    ├── logos/                    # Logo perusahaan
    │   ├── DCS-Logo-hitam.png
    │   ├── DCS-Logo-putih.png
    │   ├── UniFi-Dark.png
    │   └── UniFi-Light.png
    └── products/                 # Gambar produk
        ├── Product-Dream-Machine-Pro-Max.png
        ├── Product-Dream-Machine-Pro.png
        ├── Product-Dream-Machine-Special-Edition.png
        ├── Product-Enterprise-Fortress-Gateway.png
        ├── Product-UCG-Fiber.png
        ├── Product-UCG-Max.png
        ├── Product-UCG-Ultra.png
        ├── Product-UDR-5G-Max.png
        ├── Product-UDR-7.png
        ├── Product-UDW.png
        └── Product-UX-7.png
```

## File yang Dihapus

### 1. Temporary Scripts (Root & scripts/)
- Semua file `.js` dan `.py` temporary di root directory
- Seluruh folder `scripts/` beserta isinya (12 file .cjs)

### 2. Backup Files
- 5 file backup `data.ts.backup-*`
- 1 file backup `.bak`

### 3. Documentation Files (Temporary)
- `LAPORAN_MISSING_FIELDS.md`
- `CARA_APPLY_KE_SEMUA_PRODUK.md`
- `RINGKASAN_PERUBAHAN.md`
- `SOLUSI_FINAL.md`
- `CLEANUP_GUIDE.md`

### 4. Unused Images
- `camera.jpg` (tidak digunakan)
- `door-access.jpg` (tidak digunakan)
- `switch.jpg` (tidak digunakan)
- `infrastructure-highres.jpg` (tidak digunakan)
- Folder `icon svg/` (8 file SVG yang tidak digunakan)

## File yang Dipertahankan

### Core Files
- `package.json` & `package-lock.json`
- `tsconfig.json`
- `vite.config.ts`
- `postcss.config.js`
- `drizzle.config.ts`
- `components.json`
- `.replit`
- `vite-plugin-meta-images.ts`

### Documentation (Berguna)
- `PANDUAN_STEP_BY_STEP.md`
- `PRODUCT_DATA_GUIDE.md`
- `TEMPLATE_PRODUCT.md`

### Source Code
- `client/` - Aplikasi frontend
- `server/` - Backend server
- `shared/` - Shared schema
- `script/` - Build scripts

## Perubahan Path di Code

Semua referensi path gambar telah diupdate di:
- [`client/src/components/layout.tsx`](client/src/components/layout.tsx) - Logo DCS
- [`client/src/pages/home-utama.tsx`](client/src/pages/home-utama.tsx) - Brand images
- [`client/src/pages/home-ubiquiti.tsx`](client/src/pages/home-ubiquiti.tsx) - Banner images & logo UniFi
- [`client/src/pages/product.tsx`](client/src/pages/product.tsx) - Product images & default images
- [`client/src/lib/data.ts`](client/src/lib/data.ts) - Semua product images

## Manfaat Reorganisasi

1. **Lebih Terorganisir**: Gambar dikelompokkan berdasarkan fungsi (logos, brands, products, banners, icons)
2. **Mudah Dicari**: Struktur folder yang jelas memudahkan pencarian file
3. **Maintenance Lebih Mudah**: Lebih mudah untuk menambah/menghapus gambar di kategori tertentu
4. **Performa**: Menghapus file yang tidak digunakan mengurangi ukuran project
5. **Clean Repository**: File temporary dan backup tidak akan ter-commit ke Git
