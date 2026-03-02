/**
 * Product Color Variants Configuration
 * 
 * File ini berisi mapping warna untuk produk-produk yang memiliki varian warna.
 * Format ID produk dengan varian warna: "product-id-B/W", "product-id-DG/G/LG", dll
 * 
 * Kode Warna:
 * - B/W = Black and White
 * - DG/G/LG = Dark Gray, Gray, Light Gray
 * - dll (bisa ditambahkan sesuai kebutuhan)
 */

export interface ProductColor {
  name: string;           // Nama warna (contoh: "Black", "White")
  hex: string;            // Kode hex warna (contoh: "#000000")
  image: string;          // Path ke gambar produk dengan warna ini
  thumbnail?: string;     // Optional: thumbnail untuk preview
}

export interface ProductColorVariant {
  productId: string;      // ID produk dari data.ts
  defaultColor: string;   // Warna default yang ditampilkan pertama kali
  colors: ProductColor[]; // Array pilihan warna
}

/**
 * Database warna produk
 * Key: Product ID dari data.ts
 * Value: Konfigurasi warna untuk produk tersebut
 */
export const productColorVariants: Record<string, ProductColorVariant> = {
  // Contoh untuk produk dengan varian Black/White
  // Ganti "example-product-B/W" dengan ID produk sebenarnya dari data.ts
  "example-product-B/W": {
    productId: "ubiquiti-u7-pro-B/W",
    defaultColor: "Black",
    colors: [
      {
        name: "Black",
        hex: "#000000",
        image: "/images/products/placeholder-black.png", // Ganti dengan path gambar sebenarnya
      },
      {
        name: "White",
        hex: "#FFFFFF",
        image: "/images/products/placeholder-white.png", // Ganti dengan path gambar sebenarnya
      }
    ]
  },

  // Contoh untuk produk dengan varian Dark Gray/Gray/Light Gray
  // Ganti "example-product-DG/G/LG" dengan ID produk sebenarnya dari data.ts
  "example-product-DG/G/LG": {
    productId: "example-product-DG/G/LG",
    defaultColor: "Gray",
    colors: [
      {
        name: "Dark Gray",
        hex: "#4A4A4A",
        image: "/images/products/placeholder-dark-gray.png", // Ganti dengan path gambar sebenarnya
      },
      {
        name: "Gray",
        hex: "#808080",
        image: "/images/products/placeholder-gray.png", // Ganti dengan path gambar sebenarnya
      },
      {
        name: "Light Gray",
        hex: "#D3D3D3",
        image: "/images/products/placeholder-light-gray.png", // Ganti dengan path gambar sebenarnya
      }
    ]
  },

  // TODO: Tambahkan mapping warna untuk produk lainnya di sini
  // Format:
  // "product-id-dari-data-ts": {
  //   productId: "product-id-dari-data-ts",
  //   defaultColor: "nama-warna-default",
  //   colors: [
  //     { name: "Warna 1", hex: "#XXXXXX", image: "/path/to/image1.png" },
  //     { name: "Warna 2", hex: "#XXXXXX", image: "/path/to/image2.png" },
  //   ]
  // },
};

/**
 * Helper function untuk mendapatkan konfigurasi warna produk
 * @param productId - ID produk dari data.ts
 * @returns Konfigurasi warna produk atau undefined jika tidak ada
 */
export function getProductColors(productId: string): ProductColorVariant | undefined {
  return productColorVariants[productId];
}

/**
 * Helper function untuk mengecek apakah produk memiliki varian warna
 * @param productId - ID produk dari data.ts
 * @returns true jika produk memiliki varian warna
 */
export function hasColorVariants(productId: string): boolean {
  return productId in productColorVariants;
}

/**
 * Helper function untuk mendapatkan warna berdasarkan nama
 * @param productId - ID produk dari data.ts
 * @param colorName - Nama warna yang dicari
 * @returns Data warna atau undefined jika tidak ditemukan
 */
export function getColorByName(productId: string, colorName: string): ProductColor | undefined {
  const variant = productColorVariants[productId];
  if (!variant) return undefined;
  
  return variant.colors.find(color => color.name === colorName);
}
