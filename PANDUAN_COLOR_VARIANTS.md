# Panduan Color Variants System

## 📋 Overview

Sistem Color Variants memungkinkan produk memiliki beberapa pilihan warna dengan gambar yang berbeda untuk setiap warna. User dapat memilih warna dengan mengklik bulatan warna, dan gambar produk akan berubah sesuai pilihan.

## 🎨 Fitur

- **Color Selector UI**: Bulatan warna yang dapat diklik dengan label nama warna
- **Dynamic Image Switching**: Gambar produk berubah otomatis saat warna dipilih
- **Responsive Design**: Tampilan optimal di semua ukuran layar
- **Accessibility**: Support keyboard navigation dan screen readers
- **Visual Feedback**: Checkmark dan ring indicator untuk warna yang dipilih

## 📁 File Structure

```
client/src/
├── lib/
│   └── productColors.ts          # Database warna produk
├── components/
│   └── ColorSelector.tsx          # Komponen UI color selector
└── pages/
    └── product.tsx                # Halaman product (sudah terintegrasi)
```

## 🔧 Cara Menggunakan

### 1. Menambahkan Warna untuk Produk Baru

Edit file [`client/src/lib/productColors.ts`](client/src/lib/productColors.ts):

```typescript
export const productColorVariants: Record<string, ProductColorVariant> = {
  // Tambahkan produk baru di sini
  "product-id-dari-data-ts": {
    productId: "product-id-dari-data-ts",
    defaultColor: "Black",  // Warna yang ditampilkan pertama kali
    colors: [
      {
        name: "Black",
        hex: "#000000",
        image: "/images/products/product-name-black.png"
      },
      {
        name: "White",
        hex: "#FFFFFF",
        image: "/images/products/product-name-white.png"
      }
    ]
  },
};
```

### 2. Format Kode Warna di Product ID

Gunakan format berikut di ID produk untuk menandakan varian warna:

- `B/W` = Black and White (2 warna)
- `DG/G/LG` = Dark Gray, Gray, Light Gray (3 warna)
- `R/B/G` = Red, Blue, Green (3 warna)
- dll (bisa custom sesuai kebutuhan)

**Contoh ID Produk:**
```
"ubiquiti-u7-pro-B/W"           // Produk dengan varian Black/White
"mikrotik-rb5009-DG/G/LG"       // Produk dengan varian Dark Gray/Gray/Light Gray
```

### 3. Menyiapkan Gambar Produk

1. **Lokasi Gambar**: Simpan di [`client/public/images/products/`](client/public/images/products/)
2. **Naming Convention**: `Product-Name-Color.png`
   - Contoh: `Product-U7-Pro-Black.png`
   - Contoh: `Product-U7-Pro-White.png`
3. **Format**: PNG dengan background transparan (recommended)
4. **Ukuran**: Minimal 1000x1000px untuk kualitas optimal

### 4. Kode Hex Warna yang Umum Digunakan

```typescript
// Grayscale
"#000000"  // Black
"#FFFFFF"  // White
"#4A4A4A"  // Dark Gray
"#808080"  // Gray
"#D3D3D3"  // Light Gray

// Colors
"#FF0000"  // Red
"#0000FF"  // Blue
"#00FF00"  // Green
"#FFD700"  // Gold
"#C0C0C0"  // Silver
```

## 💻 Contoh Implementasi Lengkap

### Contoh 1: Produk dengan 2 Warna (Black/White)

```typescript
"ubiquiti-u7-pro-B/W": {
  productId: "ubiquiti-u7-pro-B/W",
  defaultColor: "Black",
  colors: [
    {
      name: "Black",
      hex: "#000000",
      image: "/images/products/Product-U7-Pro-Black.png"
    },
    {
      name: "White",
      hex: "#FFFFFF",
      image: "/images/products/Product-U7-Pro-White.png"
    }
  ]
}
```

### Contoh 2: Produk dengan 3 Warna (Dark Gray/Gray/Light Gray)

```typescript
"mikrotik-rb5009-DG/G/LG": {
  productId: "mikrotik-rb5009-DG/G/LG",
  defaultColor: "Gray",
  colors: [
    {
      name: "Dark Gray",
      hex: "#4A4A4A",
      image: "/images/products/Product-RB5009-Dark-Gray.png"
    },
    {
      name: "Gray",
      hex: "#808080",
      image: "/images/products/Product-RB5009-Gray.png"
    },
    {
      name: "Light Gray",
      hex: "#D3D3D3",
      image: "/images/products/Product-RB5009-Light-Gray.png"
    }
  ]
}
```

## 🎯 Tampilan di Website

Ketika produk memiliki varian warna, color selector akan muncul di halaman product detail:

```
Product Name
Short description here...

• Bullet point 1
• Bullet point 2
• Bullet point 3

Color: Black        ← Label warna yang dipilih
⚫ ⚪               ← Bulatan warna (clickable)

[Contact Us Button]
```

## 🔍 Helper Functions

File [`productColors.ts`](client/src/lib/productColors.ts) menyediakan helper functions:

### `getProductColors(productId: string)`
Mendapatkan konfigurasi warna untuk produk tertentu.

```typescript
const colors = getProductColors("ubiquiti-u7-pro-B/W");
if (colors) {
  console.log(colors.defaultColor);  // "Black"
  console.log(colors.colors.length); // 2
}
```

### `hasColorVariants(productId: string)`
Mengecek apakah produk memiliki varian warna.

```typescript
if (hasColorVariants("ubiquiti-u7-pro-B/W")) {
  // Tampilkan color selector
}
```

### `getColorByName(productId: string, colorName: string)`
Mendapatkan data warna spesifik berdasarkan nama.

```typescript
const blackColor = getColorByName("ubiquiti-u7-pro-B/W", "Black");
console.log(blackColor?.hex);   // "#000000"
console.log(blackColor?.image); // "/images/products/..."
```

## 🎨 Customization

### Mengubah Tampilan Color Selector

Edit file [`client/src/components/ColorSelector.tsx`](client/src/components/ColorSelector.tsx):

```typescript
// Ukuran bulatan warna
className="w-10 h-10"  // Default: 40x40px

// Spacing antar bulatan
className="flex items-center gap-3"  // Default: 12px gap

// Border thickness
className="border-2"  // Default: 2px
```

### Menambahkan Animasi Custom

```typescript
// Di ColorSelector.tsx, tambahkan motion dari framer-motion
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  // ... rest of props
>
```

## ⚠️ Troubleshooting

### Color Selector Tidak Muncul

1. **Cek Product ID**: Pastikan product ID di [`data.ts`](client/src/lib/data.ts) sama dengan key di [`productColors.ts`](client/src/lib/productColors.ts)
2. **Cek Minimal 2 Warna**: Color selector hanya muncul jika ada minimal 2 warna
3. **Cek Import**: Pastikan `ColorSelector` dan `getProductColors` sudah di-import di [`product.tsx`](client/src/pages/product.tsx)

### Gambar Tidak Berubah

1. **Cek Path Gambar**: Pastikan path gambar di `productColors.ts` benar
2. **Cek File Exists**: Pastikan file gambar ada di folder [`client/public/images/products/`](client/public/images/products/)
3. **Cek Console**: Buka browser console untuk melihat error loading gambar

### Warna Tidak Sesuai

1. **Cek Hex Code**: Pastikan kode hex warna benar (harus diawali dengan `#`)
2. **Test di Color Picker**: Gunakan online color picker untuk verify hex code

## 📝 Checklist Menambahkan Produk Baru

- [ ] Tentukan warna yang tersedia (minimal 2)
- [ ] Siapkan gambar produk untuk setiap warna
- [ ] Upload gambar ke [`client/public/images/products/`](client/public/images/products/)
- [ ] Tambahkan entry di [`productColors.ts`](client/src/lib/productColors.ts)
- [ ] Pastikan product ID di [`data.ts`](client/src/lib/data.ts) sesuai
- [ ] Test di browser (klik setiap warna)
- [ ] Verify gambar berubah dengan benar

## 🚀 Best Practices

1. **Konsistensi Naming**: Gunakan format yang sama untuk semua gambar produk
2. **Optimasi Gambar**: Compress gambar untuk loading lebih cepat
3. **Fallback Image**: Selalu sediakan gambar default jika warna tidak tersedia
4. **Accessibility**: Gunakan nama warna yang jelas dan deskriptif
5. **Testing**: Test di berbagai browser dan device

## 📚 Resources

- [Hex Color Picker](https://htmlcolorcodes.com/)
- [Image Compression Tool](https://tinypng.com/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Dibuat**: 2026-02-23  
**Last Updated**: 2026-02-23  
**Version**: 1.0.0
