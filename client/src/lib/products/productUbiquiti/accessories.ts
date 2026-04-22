// Interface untuk spesifikasi teknis item
export interface TechSpecItem {
  label: string;
  value: string;
  isCheck?: boolean; // Untuk menampilkan checkmark icon
  isList?: boolean; // Untuk menampilkan sebagai list
}

// Interface untuk section spesifikasi teknis
export interface TechSpecSection {
  title: string; // Judul section (contoh: "Overview", "Security", "Hardware")
  items: TechSpecItem[]; // Array dari item spesifikasi
}

// Interface untuk item "In The Box"
export interface InTheBoxItem {
  name: string; // Nama item (contoh: "Device", "Mounting Kit")
  image: string; // Path ke gambar item
}

// Interface untuk spesifikasi detail addon
export interface AddonDetailedSpec {
  label: string; // Label spesifikasi (contoh: "Dimensions")
  value: string; // Nilai spesifikasi (contoh: "442.4 x 200 x 43.7 mm")
}

// Interface untuk addon/aksesori produk
export interface ProductAddon {
  id: number; // ID unik addon
  name: string; // Nama addon
  image: string; // Path ke gambar addon
  price?: number; // Harga addon (opsional)
  description?: string; // Deskripsi addon (opsional)
  specs: string[]; // Array fitur/spesifikasi singkat
  detailedSpecs: AddonDetailedSpec[]; // Spesifikasi detail untuk popup
  productLink?: string; // Link ke halaman produk addon (untuk tombol "More")
}

// Interface utama untuk Product
export interface Product {
  id: string;
  name: string;
  category:
  | "Cloud Gateways"
  | "Switching"
  | "WiFi"
  | "Camera Security"
  | "Door Access"
  | "Integrations"
  | "Advanced Hosting"
  | "Accessories";
  subfilter: string;
  image: string;
  shortDescription: string;
  specs: { label: string; value: string }[];
  isNew?: boolean;

  // Field baru untuk halaman detail produk
  images?: string[]; // Array gambar untuk gallery (termasuk gambar utama)
  overviewImages?: string[]; // Gambar untuk tab Overview
  technicalSpecs?: TechSpecSection[]; // Spesifikasi teknis dengan section yang bisa di-expand
  inTheBox?: InTheBoxItem[]; // Item yang ada dalam box produk
  addons?: ProductAddon[]; // Addon/aksesori yang tersedia untuk produk ini
  sku?: string; // SKU produk (opsional, akan di-generate random jika tidak ada)
  bulletPoints?: string[]; // Bullet points untuk deskripsi produk
}

// Accessories Products
export const accessoriesProducts: Product[] = [

  //Produk Pertama dari accessories, SF RJ45 & Copper
  {
    id: "U-Cable-Patch-RJ45-Indoor",
    name: "UniFi Patch Cable Indoor",
    category: "Accessories",
    subfilter: "RJ45 & Copper",
    image: "/images/camera.jpg",
    shortDescription:
      "Ultra-thin patch cable with GbE support and flexible, bendable boots for enhanced installation versatility.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "U-Cable-Patch-RJ45-Indoor",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-CloudKey-Enterprise.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    /* overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ], */

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Bendable booted RJ45",
      "3 mm outer diameter",
      "Cable length: 0.1 to 8m",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Available Lengths", value: "0.1, 0.3, 1, 2, 3, 5, 8 m (0.3, 1, 3.3, 6.6, 9.9, 16.4, 26.3 ft)" },
          { label: "Available Colors", value: "White, Blue, Black" },
          { label: "Pack Options", value: "Single Unit 50-pack (0.1 m)" },
          { label: "Supported Data Rate", value: "GbE" },
          { label: "Supported PoE type", value: "Up to PoE+++" },
          { label: "Connector", value: "(2) Bendable booted RJ45" },
          { label: "Operating Environment", value: "Indoor" },
          { label: "Cable Jacket Diameter", value: "3 mm (0.1')" },
          { label: "Cable Jacket Material", value: "Thermoplastic elastomer (TPE)" },
          { label: "Cable Shielding Type", value: "UTP" },
          { label: "Cable Conductor Type", value: "Stranded copper" },
          { label: "Cable Conductor Wire Gage", value: "30 AWG" },
          { label: "Cable Bend Radius", value: "Min. 24 mm ( (0.94'')" },
          { label: "Flame Rating", value: "FT-2(UL1581)" },
          { label: "Standars", value: "TIA/EIA-568-B.2 ISO/IEC 11801" },
          { label: "Installion Temperature", value: "0 to 60°C (32 to 140°F)" },
          { label: "Ambient Storage Temperature", value: "-20 to 80°C (-4 to 176°F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 75°C (14 to 167°F)" },
        ]
      },
    ],
  },

  //Produk Kedua dari accessories, SF RJ45 & Copper
  {
    id: "U-Cable-Patch-RJ45-Outdoor",
    name: "UniFi Patch Cable Outdoor",
    category: "Accessories",
    subfilter: "RJ45 & Copper",
    image: "/images/camera.jpg",
    shortDescription:
      "Rugged, outdoor patch cable designed to function in the harshest environments.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "U-Cable-Patch-RJ45-Outdoor",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-CloudKey-Enterprise.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Shielded RJ45",
      "Insulated, weatherpoof jacket",
      "Internal foil shielding and drain wire for increased ESD damage protection",
      "Cable Lenghth: 1 to 8 m"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Available Lengths", value: "1, 2, 3, 5, 8 m(3.3, 6.6, 9.8, 16.4, 26.3 ft)" },
          { label: "Available Colors", value: "White, Black" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Supported Data Rate", value: "GbE" },
          { label: "Supported PoE type", value: "Up to PoE+++" },
          { label: "Connector", value: "(2) Shielding RJ45" },
          { label: "Operating Environment", value: "Outdoor" },
          { label: "Cable Jacket Diameter", value: "6.3 mm (0.25')" },
          { label: "Cable Jacket Material", value: "Thermoplastic elastomer (TPE)" },
          { label: "Cable Shielding Type", value: "S/FTP" },
          { label: "Cable Conductor Type", value: "Stranded copper" },
          { label: "Cable Conductor Wire Gage", value: "24 AWG" },
          { label: "Cable Bend Radius", value: "Min. 50.4 mm ( (1.98'')" },
          { label: "UV Resistance", value: "ASTM G 151/154" },
          { label: "Flame Rating", value: "VW-1 (UL1581)" },
          { label: "Standars", value: "TIA/EIA-568-B.2 ISO/IEC 11801" },
          { label: "Installion Temperature", value: "-20 to 60°C (-4 to 140°F)" },
          { label: "Ambient Storage Temperature", value: "-40 to 80°C (-40 to 176°F)" },
          { label: "Ambient Operating Temperature", value: "-30 to 75°C (-22 to 167°F)" },
        ]
      },
    ],
  },

  //Produk Ketiga dari accessories, SF RJ45 & Copper
  {
    id: "UACC-Cable-Patch-EL-0.15M-W",
    name: "UniFi Etherlighting Patch Cable",
    category: "Accessories",
    subfilter: "RJ45 & Copper",
    image: "/images/camera.jpg",
    shortDescription:
      "Nano-thin patch cable with 10 GbE support, designed to showcase Etherlighting™ effects.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Cable-Patch-EL-0.15M-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-CloudKey-Enterprise.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Translucent booted RJ45 for optimal Etherlighting™ brightness",
      "— 2.5 mm outer diameter for 0.15-8 m lengths",
      "— 2.9 mm outer diameter for 12-15 m lengths",
      "Length: 0.15 to 15 m"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Available Lengths", value: "End-to-end: 0.15, 0.3, 1, 2, 3, 5, 8, 12, 15 m(0.5, 1, 3.3, 6.6, 9.8, 16.4, 26.2, 39.8, 49.2 ft)" },
          { label: "Available Colors", value: "White" },
          { label: "Pack Options", value: "Single Unit 24-pack (0.15 m)" },
          { label: "Supported Data Rate", value: "10G" },
          { label: "Supported PoE type", value: "Up to PoE+++" },
          { label: "Connector", value: "(2) Translucent booted RJ45" },
          { label: "Operating Environment", value: "Indoor" },
          { label: "Cable Jacket Diameter", value: "0.15-8 m: 2.5 mm (0.1')12-15 m: 2.9 mm (0.11')" },
          { label: "Cable Jacket Material", value: "Thermoplastic elastomer (TPE)" },
          { label: "Cable Shielding Type", value: "UTP" },
          { label: "Cable Conductor Type", value: "Stranded copper" },
          { label: "Cable Conductor Wire Gage", value: "1-8 m (3-26 ft): 34 AWG12-15 m (39-49 ft): 32 AWG" },
          { label: "Cable Bend Radius", value: "Min. 24 mm  (0.94'')" },
          { label: "Flame Rating", value: "FT-2(UL1581)" },
          { label: "Standars", value: "TIA/EIA-568-B.2 ISO/IEC 11801" },
          { label: "Installion Temperature", value: "0 to 60°C (32 to 140°F)" },
          { label: "Ambient Storage Temperature", value: "-20 to 80°C (-4 to 176°F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 75°C (14 to 167°F)" },
        ]
      },
    ],
  },

  //Produk Keempat dari accessories, SF RJ45 & Copper
  {
    id: "UACC-Cable-Patch-EL-C6A-0.15M-W-Indoor",
    name: "UniFi Premium Patch Cable Indoor",
    category: "Accessories",
    subfilter: "RJ45 & Copper",
    image: "/images/camera.jpg",
    shortDescription:
      "Ultra-thin braided patch cable, designed and optimized for 10 GbE networking..",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Cable-Patch-EL-C6A-0.15M-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-CloudKey-Enterprise.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Translucent booted RJ45 for optimal Etherlighting™ brightness",
      "— 3 mm outer diameter for 0.15-8 m lengths",
      "— 3.3 mm outer diameter for 12-15 m lengths",
      "Length: 0.15 to 15 m"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Available Lengths", value: "End-to-end: 0.15, 0.3, 1, 2, 3, 5, 8, 12, 15 m (0.5, 1, 3.3, 6.6, 9.8, 16.4, 26.2, 39.8, 49.2 ft)" },
          { label: "Available Colors", value: "White" },
          { label: "Pack Options", value: "Single Unit 24-Pack (0.15 m)" },
          { label: "Supported Data Rate", value: "10G" },
          { label: "Supported PoE type", value: "Up to PoE+++" },
          { label: "Connector", value: "(2) Translucent booted RJ45" },
          { label: "Operating Environment", value: "Indoor" },
          { label: "Cable Jacket Diameter", value: "0.15-8 m: 3 mm (0.11') 12-15 m: 2.9 mm (0.11')" },
          { label: "Cable Jacket Material", value: "Thermoplastic elastomer (TPE)" },
          { label: "Cable Shielding Type", value: "UTP" },
          { label: "Cable Conductor Type", value: "Stranded copper" },
          { label: "Cable Conductor Wire Gage", value: "1-8 m (3-26 ft): 34 AWG 12-15 m (39-49 ft): 32 AWG" },
          { label: "Cable Bend Radius", value: "1-8 m: Min. 21 mm (0.83'')12-15 m: Min. 24 mm (0.94'')" },
          { label: "UV Resistance", value: "ASTM G 151/154" },
          { label: "Flame Rating", value: "VW-1 (UL1581)" },
          { label: "Standars", value: "TIA/EIA-568-B.2 ISO/IEC 11801" },
          { label: "Installion Temperature", value: "-20 to 60°C (-4 to 140°F)" },
          { label: "Ambient Storage Temperature", value: "-20 to 75°C (-4 to 167°F)" },
          { label: "Ambient Operating Temperature", value: "-20 to 60°C (-4 to 140°F)" },
        ]
      },
    ],
  },

  //Produk Kelima dari accessories, SF RJ45 & Copper
  {
    id: "UACC-Cable-Patch-EL-C6A-0.15M-W-Outdoor",
    name: "UniFi Premium Patch Cable Outdoor",
    category: "Accessories",
    subfilter: "RJ45 & Copper",
    image: "/images/camera.jpg",
    shortDescription:
      "Ultra-thin, rugged, shielded outdoor patch cable, designed and optimized to perform in the harshest environments for 10 GbE networking.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Cable-Patch-EL-C6A-0.15M-W-Outdoor",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-CloudKey-Enterprise.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Shielded RJ45",
      "Insulated, weatherproof jacket",
      "Internal foil shielding and drain wire for increased ESD damage protection",
      "— 3.5 mm outer diameter for 1-8 m lengths",
      "— 3.9 mm outer diameter for 12-15 m lengths",
      "Length: 1 to 15 m"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Available Lengths", value: "End-to-end: 1, 2, 3, 5, 8, 12, 15 m (3.3, 6.6, 9.8, 16.4, 26.2, 39.8, 49.2 ft)" },
          { label: "Available Colors", value: "White, Black" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Supported Data Rate", value: "10G" },
          { label: "Supported PoE type", value: "Up to PoE+++" },
          { label: "Connector", value: "(2) Frosted booted and shielding RJ45" },
          { label: "Operating Environment", value: "Outdoor" },
          { label: "Cable Jacket Diameter", value: "1-8 m: 3.5 mm (0.14') 12-15 m: 3.9 mm (0.15')" },
          { label: "Cable Jacket Material", value: "Thermoplastic elastomer (TPE)" },
          { label: "Cable Shielding Type", value: "F/UTP" },
          { label: "Cable Conductor Type", value: "Stranded copper" },
          { label: "Cable Conductor Wire Gage", value: "1-8 m (3-26 ft): 34 AWG 12-15 m (39-49 ft): 32 AWG" },
          { label: "Cable Bend Radius", value: "1-8 m: Min. 28 mm (1.1'')12-15 m: Min. 31 mm (1.22'')" },
          { label: "UV Resistance", value: "ISO4892-2" },
          { label: "Flame Rating", value: "VW-1 (UL1581)" },
          { label: "Standars", value: "TIA/EIA-568-B.2 ISO/IEC 11801" },
          { label: "Installion Temperature", value: "-20 to 60°C (-4 to 140°F)" },
          { label: "Ambient Storage Temperature", value: "-40 to 85°C (-40 to 185°F)" },
          { label: "Ambient Operating Temperature", value: "-20 to 60°C (-4 to 140°F)" },
        ]
      },
    ],
  },

  //Produk Keenam dari accessories, SF RJ45 & Copper
  {
    id: "U-Cable-C6-CMR-Indoor",
    name: "UniFi Indoor Cable Cat6 CMR Indoor",
    category: "Accessories",
    subfilter: "RJ45 & Copper",
    image: "/images/camera.jpg",
    shortDescription:
      "Category 6 Ethernet cable for high-speed, indoor deployments.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "U-Cable-C6-CMR-Indoor",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-CloudKey-Enterprise.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Category 6 UTP communications multipurpose cable",
      "Riser (CMR)-rated, fire-resistant jacket",
      "Anti-crosstalk divider",
      "Cable length 305 m"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Length", value: "305 m (1,000 ft)" },
          { label: "Type", value: "Category 6" },
          { label: "Flame Rating", value: "CMR" },
          { label: "Operating Environment", value: "Indoor" },
          { label: "Box Dimensions", value: "476 x 306 x 419 mm (18.7 x 12 x 16.5')" },
          { label: "Box Weight", value: "14.6 kg (32.2 lb)" },
          { label: "Cable Jacket Color", value: "White" },
          { label: "Cable Jacket Diameter", value: "5.9 ± 0.2 mm" },
          { label: "Cable Jacket Material", value: "Flame retardant polyvinyl chloride (FRPVC)" },
          { label: "Cable Shielding Type", value: "UTP" },
          { label: "Cable Conductor Type", value: "Solid bare copper" },
          { label: "Cable Conductor Wire Gage", value: "23 AWG" },
          { label: "Cable Bend Radius", value: "Min. 24 mm" },
          { label: "Cable Twisting", value: "4 Twisted pairs with color code. Pair 1: white-blue / blue Pair 2: white-orange / orange Pair 3: white-green / green Pair 4: white-brown / brown" },
          { label: "Anti-Crosstalk Divider", value: "✓" },
          { label: "Ripcord", value: "✓" },
          { label: "Standards Electrical Transmission", value: "ANSI/TIA-568.2-DISO/IEC 11801 (Edition 2.2) IEC 61156-5 (Edition 2.1)" },
          { label: "Standars Flame Test", value: "UL 1666 (CMR)" },
          { label: "Standars Material and Construction", value: "UL 444 CSA 22.2 NO.214 EU Directive 2011/65/EU (RoHS2) EU Directive 2006/95/EC (LVD)" },
          { label: "Installation Temperature", value: "0 to 60°C (32 to 140°F)" },
          { label: "Ambient Storage Temperature", value: "-20 to 75°C (-4 to 167°F)" },
          { label: "Ambient Operating Temperature", value: "-20 to 60°C (-4 to 140°F)" },
        ]
      },
    ],
  },

  //Produk Ketujuh dari accessories, SF RJ45 & Copper
  {
    id: "U-Cable-C6-CMR-Outdoor",
    name: "UniFi Indoor Cable Cat6 CMR Outdoor",
    category: "Accessories",
    subfilter: "RJ45 & Copper",
    image: "/images/camera.jpg",
    shortDescription:
      "Outdoor Category 5e cable designed to resist harsh weather damage and electromagnetic interference.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "U-Cable-C6-CMR-Outdoor",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-CloudKey-Enterprise.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Category 5e cable",
      "Insulated, weatherproof jacket",
      "Internal foil shielding and drain wire for increased ESD damage protection",
      "Cable length 305 m"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Length", value: "305 m (1,000 ft)" },
          { label: "Type", value: "Category 5e" },
          { label: "Flame Rating", value: "VW-1 (UL1581)" },
          { label: "Operating Environment", value: "Outdoor" },
          { label: "Box Dimensions", value: "358 x 341 x 352 mm (14.09 x 13.43 x 13.86')" },
          { label: "Box Weight", value: "14.2 kg (31.32 lb)" },
          { label: "Cable Jacket Color", value: "White" },
          { label: "Cable Jacket Diameter", value: "6 mm (0.24')" },
          { label: "Cable Jacket Material", value: "Thermoplastic elastomer (TPE)" },
          { label: "Cable Shielding Type", value: "F/UTP" },
          { label: "Cable Conductor Type", value: "Solid bare copper" },
          { label: "Cable Conductor Wire Gage", value: "24 AWG" },
          { label: "Cable Bend Radius", value: "Min. 48 mm (1.89'')" },
          { label: "Cable Twisting", value: "4 Twisted pairs with color code. Pair 1: white-blue / blue Pair 2: white-orange / orange Pair 3: white-green / green Pair 4: white-brown / brown" },
          { label: "Anti-Crosstalk Divider", value: "—" },
          { label: "Ripcord", value: "✓" },
          { label: "Draind Wire", value: "✓" },
          { label: "Standards Electrical Transmission", value: "TIA/EIA-568-B.2" },
          { label: "Standars Flame Test", value: "UL 1581 (VW-1)" },
          { label: "Standars UV Resistance", value: "ASTM G 151/154" },
          { label: "Installation Temperature", value: "-20 to 60°C (-4 to 140°F)" },
          { label: "Ambient Storage Temperature", value: "-40 to 80°C (40° to 176°F)" },
          { label: "Ambient Operating Temperature", value: "-30 to 75°C (-22°F to 167°F" },
        ]
      },
    ],
  },

  //Produk Kedelapan dari accessories, SF RJ45 & Copper
  { //-bulletpoint
    id: "UACC-Adapter-RJ45-USBC-5GE",
    name: "5G Ethernet Adapter",
    category: "Accessories",
    subfilter: "RJ45 & Copper",
    image: "/images/camera.jpg",
    shortDescription:
      "Plug-and-play, Ethernet adapter with USB-C for seamless 5GbE network connectivity.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Adapter-RJ45-USBC-5GE",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-CloudKey-Enterprise.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Polycarbonate, aluminum alloy",
      "LAN Activity Indicator ✓"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "83.4 x 25 x 16.5 mm(3.3 x 1 x 0.6')" },
          { label: "Weight", value: "38 g (1.3 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy" },
          { label: "LAN Activity Indicator", value: "✓" },
          { label: "Networking Interface", value: "(1) 5 GbE RJ45 port (1) USB Type-C port" },
          { label: "Gigabit LAN Port", value: "✓" },
          { label: "Compatibility", value: "Compatible operating systems: Mac OS 14.2 and future releases Windows 7/8/8.1, 32/64 bit; Windows 10/11, 32/64 bit and future releases Linux" },
          { label: "Ambient Operating Temperature", value: "5 to 45° C (41 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "20 to 80% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, UKCA" },
        ]
      },
    ],
  },

  //Produk Kesembilan dari accessories, SF RJ45 & Copper
  { //-bulletpoint
    id: "UACC-Adapter-RJ45-USBC-10GE",
    name: "10G Ethernet Adapter",
    category: "Accessories",
    subfilter: "RJ45 & Copper",
    image: "/images/camera.jpg",
    shortDescription:
      "Plug-and-play, Ethernet adapter with USB-C for seamless 5GbE network connectivity.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Adapter-RJ45-USBC-10GE",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-CloudKey-Enterprise.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Category 5e cable",
      "Insulated, weatherproof jacket",
      "Internal foil shielding and drain wire for increased ESD damage protection",
      "Cable length 305 m"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "107 x 56 x 22 mm (4.2 x 2.2 x 0.9'" },
          { label: "Weight", value: "160 g (5.6 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy" },
          { label: "LAN Activity Indicator", value: "✓" },
          { label: "Networking Interface", value: "(1) 10 GbE RJ45 port (1) USB Type-C port" },
          { label: "Gigabit LAN Port", value: "✓" },
          { label: "Compatibility", value: "Compatible operating systems: Mac OS 14.2 and future releases Windows 7/8/8.1, 32/64 bit; Windows 10/11, 32/64 bit and future releases Linux" },
          { label: "Ambient Operating Temperature", value: "5 to 45° C (41 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "20 to 80% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, UKCA" },
        ]
      },
    ],
  },

  //Produk Kesepuluh dari accessories, SF RJ45 & Copper
  { //-bulletpoint
    id: "UACC-RJ45-Coupler-C6A-Indoor",
    name: "RJ45 Inline Coupler Indoor, 10-Pack",
    category: "Accessories",
    subfilter: "RJ45 & Copper",
    image: "/images/camera.jpg",
    shortDescription:
      "Plug-and-play, Ethernet adapter with USB-C for seamless 5GbE network connectivity.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-RJ45-Coupler-C6A-Indoor",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-CloudKey-Enterprise.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Material Stainless steel",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Pack Options", value: "10-Pack" },
          { label: "Dimensions", value: "16 x 16 x 31 mm (0.6 x 0.6 x 1.2')" },
          { label: "Weight", value: "7.1 g (0.3 oz)" },
          { label: "Material", value: "Stainless steel" },
          { label: "Standards", value: "Complies with ANSI/TIA-568-D.2" },
        ]
      },
    ],
  },

  //Produk Kesebelas dari accessories, SF RJ45 & Copper
  { //-bulletpoint
    id: "UACC-RJ45-Coupler-C6A-Outdoor",
    name: "RJ45 Inline Coupler Outdoor, 2-Pack",
    category: "Accessories",
    subfilter: "RJ45 & Copper",
    image: "/images/camera.jpg",
    shortDescription: "Compact, weatherproof RJ45 coupler for extending Ethernet cables in outdoor installations.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-RJ45-Coupler-C6A-Outdoor",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-CloudKey-Enterprise.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Material Polycarbonate",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Pack Options", value: "2-Pack" },
          { label: "Dimensions", value: "⌀20 x 93 mm (⌀0.8 x 3.7')" },
          { label: "Weight", value: "19 g (0.7 oz)" },
          { label: "Material", value: "Polycarbonate" },
          { label: "Weatherproofing", value: "IPX6" },
          { label: "Standards", value: "Complies with ANSI/TIA-568-D.2" },
        ]
      },
    ],
  },

  //Produk Keduabelas dari accessories, SF RJ45 & Copper
  { //-bulletpoint
    id: "UACC-Cable-Extender-C6A",
    name: "Easy Cable, 2-Pack",
    category: "Accessories",
    subfilter: "RJ45 & Copper",
    image: "/images/camera.jpg",
    shortDescription:
      "Shielded, ultra-thin extension cable with waterproof cap, designed for tight spaces and last inch reach installations.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Cable-Extender-C6A",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-CloudKey-Enterprise.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Cable Jacket Material Thermoplastic elastomer (TPE)",
      "Weatherproofing IPX6 (Waterproof cap end)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Length", value: "Excluding waterproof cap: 0.15 m (5.9')Including waterproof cap: 0.185 m (7.3')" },
          { label: "Type", value: "Category 6A" },
          { label: "Flame Rating", value: "VW-1 (UL1581)" },
          { label: "Operating Environment", value: "Indoor/Outdoor" },
          { label: "Supported PoE Type", value: "Up to PoE+++" },
          { label: "Color", value: "White" },
          { label: "Weight", value: "18.5 g (0.7 oz)" },
          { label: "Cable Jacket Diameter", value: "3.5 mm (0.14')" },
          { label: "Cable Jacket Material", value: "Thermoplastic elastomer (TPE)" },
          { label: "Cable Shielding Type", value: "F/UTP" },
          { label: "Cable Bend Radius", value: "Min. 14 mm (0.6')" },
          { label: "Weatherproofing", value: "IPX6 (Waterproof cap end)" },
          { label: "UV Resistance", value: "ISO4892-2" },
          { label: "Pack Options", value: "2-Pack" },
        ]
      },
    ],
  },

  //Produk Ketigabelas dari accessories, SF RJ45 & Copper
  {
    id: "UACC-LRE",
    name: "Long-Range Ethernet Repeater",
    category: "Accessories",
    subfilter: "RJ45 & Copper",
    image: "/images/camera.jpg",
    shortDescription:
      "Long-range Gigabit Ethernet adapter that receives PoE/PoE+ and offers passthrough PoE output.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-LRE",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Extend PoE connections up to 1 km",
      "(1) GbE RJ45 port for PoE/PoE+ input",
      "(1) GbE RJ45 port for passthrough PoE output",
      "10kA+ surge protection",
      "10kA+ surge protection",
      "Works reliably in extreme temperatures (-40 to 80° C)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "196.5 x 93.5 x 39 mm (7.7 x 3.7 x 1.5')" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "350 g (12.3 oz)" },
          { label: "Enclosure Material", value: "UV stabilized polycarbonate" },
          { label: "Mounting Material", value: "Stainless steel" },
          { label: "Weatherproofing", value: "IPX5" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Power Method", value: "PoE/PoE+ 2-pairs (Pins 1, 2+; 3, 6-)" },
          { label: "Max. Power Consumption", value: "1.5W (Excluding PoE output)" },
          { label: "Networking Interface", value: "(2) GbE RJ45 ports" },
          { label: "PoE Interface", value: "PoE Interface" },
          { label: "Total Non-Blocking Line Rate", value: "2 Gbps" },
          { label: "Switching Capacity", value: "4 Gbps" },
          { label: "Forwarding Rate", value: "Forwarding Rate 1.488 Mpps" },
          { label: "Total Available PoE", value: "22.5W" },
          { label: "Voltage Range PoE Mode", value: "37—57V DC" },
          { label: "ESD/EMP Protection", value: "Air/contact: ± 30kV" },
          { label: "DC Sparkover Voltage", value: "90V at 100V/s" },
          { label: "Max. Impulse Sparkover Voltage", value: "700V at 1kV/μs" },
          { label: "Discharge Current", value: "10kA+" },
          { label: "Max. MTU", value: "1,500 bytes" },
          { label: "LEDs System", value: "Blue: power ON" },
          { label: "LEDs Ethernet", value: "Green: 1 Gbps Amber: 10/100 Mbps" },
          { label: "LEDs PoE", value: "Amber: passthrough PoE out" },
          { label: "Ambient Operating Temperature", value: "-40 to 80° C (-40 to 176° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing" }
        ]
      }
    ],
  },

  //Produk Keempatbelas dari accessories, SF RJ45 & Copper
  {
    id: "UACC-AE",
    name: "Media Converter",
    category: "Accessories",
    subfilter: "RJ45 & Copper",
    image: "/images/camera.jpg",
    shortDescription:
      "A fiber-to-copper media module that allows wireless equipment without SFP ports to support fiber uplinks up to 1 Gbps.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-AE",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "(1) SFP port and (1) GbE RJ45 LAN port",
      "Fiber-to-Ethernet conversion",
      "Fiber connectivity to any PoE device",
      "Designed for indoor use"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "70 g (2.4 oz)" },
          { label: "Enclosure Material", value: "UV stabilized polycarbonate" },
          { label: "Dimensions", value: "76.5 x 76.5 x 26.8 mm (3 x 3 x 1')" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Power Method", value: "PoE Passive PoE, 24V" },
          { label: "Max. Power Consumption", value: "1.5W (Excluding PoE output)" },
          { label: "Networking Interface", value: "(1) 1G SFP Port (1) GbE RJ45 port" },
          { label: "Power Supply", value: "UniFi PoE switch" },
          { label: "Supported Voltage Range", value: "16–57V" },
          { label: "Max. Power Consumption", value: "1.5W" },
          { label: "LEDs", value: "Status, Ethernet" },
          { label: "Ambient Operating Temperature", value: "-40 to 60° C (-40 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" }
        ]
      }
    ],
  },

  //Produk Pertama dari accessories, SF SFP & Fiber
  {
    id: "UACC-SFP-Wizard",
    name: "SFP Wizard",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "Instantly reprogram, test, and unlock universal compatibility for every optical module — with full diagnostics and OTA updates built in.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-SFP-Wizard",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-CloudKey-Enterprise.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Copy optical module profiles",
      "Write or restore profile to Ubiquiti optical module instantly",
      "Monitor optical module health in real time via DDM",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "90.8 x 52.1 x 20.2 mm (3.6 x 2.1 x 0.8')" },
          { label: "Weight", value: "84 g (3 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Networking Interface", value: "BLE" },
          { label: "Power Method", value: "Li-ion battery" },
          { label: "Battery Life", value: "Up to 75 minutes of continuous SFP transceiver diagnostics with laser on, or 35 minutes with QSFP transceivers" },
          { label: "Power Supply", value: "Rechargeable Li-ion battery, 3.7V DC, 300mAh" },
          { label: "Supported Voltage Range", value: "USB-C: 5V DC/0.5A" },
          { label: "Max. Power Consumption", value: "0.6W" },
          { label: "Supported Form Factor", value: "SFP, SFP+, SFP28, QSFP+, QSFP28" },
          { label: "LCM Display", value: "1.9' touchscreen" },
          { label: "Buttons", value: "(1) Power" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C  (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" }
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements Mobile App", value: "UniFi iOS™ version 10.29.1 and later UniFi Android™ version 10.30.2 and later" }
        ]
      }
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
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
        name: "100G LR4 Single-Mode Optical Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "QSFP28 transceiver that supports 100G connections up to 10 km using single-mode fiber with a duplex LC UPC connector.",
        specs: [
          "Max data rate: 100 Gbps",
          "Compatible with QSFP28 and QSFP+ interfaces",
          "Duplex LC UPC connector",
          "Supports single-mode fiber connections up to 10 km*"

        ],
        detailedSpecs: [
          { label: "Form Factor", value: "QSFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "TX Wavelength", value: "1295 / 1300 / 1304 / 1309 nm" },
          { label: "RX Wavelength", value: "1295 / 1300 / 1304 / 1309 nm nm" },
          { label: "Supported Data Rate", value: "100 Gbps" },
          { label: "Supported Cable Distance", value: "10 km (6.2 mi)" },
          { label: "Max. Power Consumption", value: "4 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ],
        productLink: "/products/mounting-kit"
      },
      {
        id: 2,
        name: "25G Direct Attach Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "High-quality power cable with durable construction.",
        specs: [
          "Supported data rates: 25 / 10 / 1 Gbps",
          "Compatible with SFP28, SFP+, and SFP interfaces",
          "Cable length: 0.5 to 3 m"

        ],
        detailedSpecs: [
          { label: "Length", value: "2.0 m" },
          { label: "Conductor", value: "Copper" },
          { label: "Rating", value: "10A / 250V" },
          { label: "Jacket", value: "PVC" }
        ],
        productLink: "/products/power-cable"
      },
      {
        id: 3,
        name: "SFP to RJ45 Adapter",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP to RJ45 transceiver that supports 1G connections up to 100 m",
        specs: [
          "Supported data rates: 1000 / 100 / 10 Mbps",
          "Compatible with SFP interfaces",
          "Supports connections up to 100 m*"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "RJ45" },
          { label: "Supported Media", value: "Copper" },
          { label: "Supported Data Rate", value: "10 / 100 / 1000 Mbps" },
          { label: "Supported Cable Distance", value: "100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "1.2 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "Uplink Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Direct attach cable with auto link optimization for seamless 1G SFP, 10G SFP+, and 25G SFP28 interconnects between UniFi devices.",
        specs: [
          "Supported data rates: 25/10/1 Gbps",
          "Compatible with SFP28, SFP+, and SFP interfaces",
          "Auto-optimization of link speed and stability when used to interconnect UniFi devices",
          "Cable length: 0.15 to 30 m"
        ],
        detailedSpecs: [
          { label: "Available Lengths", value: "0.15 / 0.3 / 3 / 30 m (0.5 / 1 / 9.8 / 98.4 ft)" },
          { label: "Pack Options", value: "Single Unit 10-Pack (0.15 m)" },
          { label: "Auto Link Optimization", value: "✓" },
          { label: "Supported Data Rate", value: "25 / 1 Gbps" },
          { label: "Cable Features Wire", value: "Copper (0.15 / 0.3 m) Fiber  (3 / 30 m)" },
          { label: "Cable Features Connector Type", value: "SFP28 to SFP28" },
          { label: "Cable Features Jacket Color", value: "White" },
          { label: "Cable Features Jacket Material", value: "PVC" },
          { label: "Cable Features Jacket Outer Diameter", value: "0.15 / 0.3 m: 4.5 mm (0.18'')3 / 30 m: 3 mm (0.12'')" },
          { label: "Cable Features Bend Radius", value: "0.15 / 0.3 m: MIn. 23mm (0.9') 3 / 30 m: Min. 30mm (1.18')" },
          { label: "Ambient Operating Temperature", value: "0°C to 70°C (32°F to 158°F)" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 5,
        name: "25G Multi-Mode Optical Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP28 transceiver that supports 25G connections up to 100 m using multi-mode fiber with a duplex LC UPC connector.",
        specs: [
          "Max data rate: 25 Gbps",
          "Compatible with SFP28, SFP+, and SFP interfaces",
          "Duplex LC UPC connector",
          "Supports multi-mode fiber connections up to 100 m*"],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Multi-Mode Fiber" },
          { label: "TX Wavelength", value: "850 nm" },
          { label: "RX Wavelength", value: "850 nm" },
          { label: "Supported Data Rate", value: "1/10/25 Gbps" },
          { label: "Supported Cable Distance", value: "100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "0.8 W" },
          { label: "Pack Options", value: "Single Unit 2-Pack 20-Pack" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 6,
        name: "1G Bidirectional Single-Mode Optical Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP transceiver that supports 1G connections up to 3 km using single-mode fiber with a simplex LC UPC connector.",

        specs: [
          "Max data rate: 25 Gbps",
          "Compatible with SFP28, SFP+, and SFP interfaces",
          "Duplex LC UPC connector",
          "Supports multi-mode fiber connections up to 100 m*"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Simplex LC UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "BiDi", value: "✓" },
          { label: "TX Wavelength", value: "1310 / 1550 nm nm" },
          { label: "RX Wavelength", value: "1550 / 1310 nm" },
          { label: "Supported Data Rate", value: "1 Gbps" },
          { label: "Supported Cable Distance", value: "3 km (1.9 mi)" },
          { label: "Max. Power Consumption", value: "0.66 W" },
          { label: "Pack Options", value: "2-Pack 20-Pack" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 7,
        name: "100G SR4 Multi-Mode Optical Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "QSFP28 transceiver that supports 100G connections up to 100 m using multi-mode fiber with an MPO-12 Type B UPC connector.",

        specs: [
          "Max data rate: 100 Gbps",
          "Compatible with QSFP28 and QSFP+ interfaces",
          "MPO-12 Type B UPC connector",
          "Supports multi-mode fiber connections up to 100 m*"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "QSFP" },
          { label: "Connector", value: "MPO-12 Type B UPC" },
          { label: "Supported Media", value: "Multi-Mode Fiber" },
          { label: "TX Wavelength", value: "850 nm" },
          { label: "RX Wavelength", value: "850 nm" },
          { label: "Supported Data Rate", value: "40/100 Gbps" },
          { label: "Supported Cable Distance", value: "100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "2.5 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 8,
        name: "10G Single-Mode Optical Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP+ transceiver that supports 10G connections up to 10 km using single-mode fiber with a duplex LC UPC connector",

        specs: [
          "Max data rate: 10 Gbps",
          "Compatible with SFP+ and SFP interfaces",
          "Duplex LC UPC connector",
          "Supports single-mode fiber connections up to 10 km*"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "TX Wavelength", value: "1310 nm" },
          { label: "RX Wavelength", value: "1310 nm" },
          { label: "Supported Data Rate", value: "1/10 Gbps" },
          { label: "Supported Cable Distance", value: "10 km (6.2 mi)" },
          { label: "Max. Power Consumption", value: "1 W" },
          { label: "Pack Options", value: "2-Pack 20-Pack" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 9,
        name: "10G Bidirectional Single-Mode Optical Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "10G Bidirectional Single-Mode Optical Module SFP+ transceiver that supports 10G connections up to 10 km using single-mode fiber with a simplex LC UPC connector.",

        specs: [
          "Max data rate: 10 Gbps",
          "Compatible with SFP+ and SFP interfaces",
          "Simplex LC UPC connector",
          "Supports single-mode fiber connections up to 10 km*"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Simplex LC UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "BiDi", value: "✓" },
          { label: "TX Wavelength", value: "1270 / 1330 nm" },
          { label: "RX Wavelength", value: "1330 / 1270 nm" },
          { label: "Supported Data Rate", value: "1/10 Gbps" },
          { label: "Supported Cable Distance", value: "10 km (6.2 mi)" },
          { label: "Max. Power Consumption", value: "1 W" },
          { label: "Pack Options", value: "2-Pack 20-Pack" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 10,
        name: "25G Long-Range Direct Attach Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Long-range SFP28 direct attach cable with a 25 Gbps max data rate",

        specs: [
          "Supported data rates: 25 / 10 / 1 Gbps",
          "Compatible with SFP28, SFP+, and SFP interfaces",
          "Cable length: 5 to 30 m"
        ],
        detailedSpecs: [
          { label: "Available Lengths", value: "5 / 10 / 20 / 30 m (16.4 / 32.8 / 65.6 / 98.4 ft)" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Supported Data Rate", value: "10 Gbps" },
          { label: "Cable Features Wire", value: "OM3 Fiber" },
          { label: "Cable Features Wave Length", value: "850 nm" },
          { label: "Cable Features Connector Type", value: "SFP+ to SFP+" },
          { label: "Cable Features Jacket Color", value: "Aqua" },
          { label: "Cable Features Jacket Material", value: "PVC" },
          { label: "Cable Features Jacket Outer Diameter", value: "3.0 mm (0.12')" },
          { label: "Cable Features Bend Radius", value: "Min. 30mm (1.18')" },
          { label: "Ambient Operating Temperature", value: "0°C to 70°C (32°F to 158°F)" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 11,
        name: "10G Long-Range Direct Attach Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Long-range SFP+ direct attach cable with a 10 Gbps max data rate",

        specs: [
          "Supported data rates: 10 / 1 Gbps",
          "Compatible with SFP+ and SFP interfaces",
          "Cable length: 5 to 30 m"
        ],
        detailedSpecs: [
          { label: "Available Lengths", value: "5 / 10 / 20 / 30 m (16.4 / 32.8 / 65.6 / 98.4 ft)" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Supported Data Rate", value: "25 / 10Gbps" },
          { label: "Cable Features Wire", value: "OM3 Fiber" },
          { label: "Cable Features Wave Length", value: "850 nm" },
          { label: "Cable Features Connector Type", value: "SFP28 to SFP28" },
          { label: "Cable Features Jacket Color", value: "Aqua" },
          { label: "Cable Features Jacket Material", value: "PVC" },
          { label: "Cable Features Jacket Outer Diameter", value: "3.0 mm (0.12')" },
          { label: "Cable Features Bend Radius", value: "Min. 30mm (1.18')" },
          { label: "Ambient Operating Temperature", value: "0°C to 70°C (32°F to 158°F)" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 12,
        name: "100G Direct Attach Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "QSFP28 direct attach cable with a 100 Gbps max data rate",

        specs: [
          "Supported data rates: 100 / 40 Gbps",
          "Compatible with QSFP28 and QSFP+ interfaces",
          "Cable length: 0.5 to 3 m"
        ],
        detailedSpecs: [
          { label: "Available Lengths", value: "0.5, 1, 3 m (1.6, 3.3, 9.8 ft)" },
          { label: "Pack Options", value: "Single Unit 10-Pack (0.15 /1 m)" },
          { label: "Supported Data Rate", value: "100 / 40 Gbps" },
          { label: "Cable Features Wire", value: "Copper" },
          { label: "Cable Features Connector Type", value: "QSFP28 to QSFP28" },
          { label: "Cable Features Jacket Color", value: "Black" },
          { label: "Cable Features Jacket Material", value: "PVC" },
          { label: "Cable Features Jacket Outer Diameter", value: "0.5/ 1 m: 7.0 mm (0.28') 3 m: 8.9 mm (0.35')" },
          { label: "Cable Features Bend Radius", value: "0.5/ 1 m: Min. 37 mm (1.46') 3 m: Min. 47 mm (1.85')" },
          { label: "Ambient Operating Temperature", value: "0°C to 70°C (32°F to 158°F)" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 13,
        name: "100G PSM4 Single-Mode Optical Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "QSFP28 transceiver that supports 100G connections up to 2 km using single-mode fiber with an MPO-12 APC connector.",

        specs: [
          "Max data rate: 100 Gbps",
          "Compatible with QSFP28 and QSFP+ interfaces",
          "MPO-12 Type B APC connector",
          "Supports single-mode fiber connections up to 2 km*"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "QSFP" },
          { label: "Connector", value: "MPO-12 Type B UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "TX Wavelength", value: "1310 nm" },
          { label: "RX Wavelength", value: "1310 nm" },
          { label: "Supported Data Rate", value: "100 Gbps" },
          { label: "Supported Cable Distance", value: "2 km (1.2 mi)" },
          { label: "Max. Power Consumption", value: "3.5 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 14,
        name: "100G Long-Range Direct Attach Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Long-range QSFP28 direct attach cable with a 100 Gbps max data rate",

        specs: [
          "Supported data rates: 100 / 40 Gbps",
          "Compatible with QSFP28 and QSFP+ interfaces",
          "Cable length: 5 to 30 m"
        ],
        detailedSpecs: [
          { label: "Available Lengths", value: "5, 10, 20, 30 m (16.4, 32.8, 65.6, 98.4 ft)" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Supported Data Rate", value: "40 / 100 Gbps" },
          { label: "Cable Features Wire", value: "OM3 Fiber" },
          { label: "Cable Features Wave Length", value: "850 nm" },
          { label: "Cable Features Connector Type", value: "SFP28 to SFP28" },
          { label: "Cable Features Jacket Color", value: "Aqua" },
          { label: "Cable Features Jacket Material", value: "PVC" },
          { label: "Cable Features Jacket Outer Diameter", value: "3.0 mm (0.12')" },
          { label: "Cable Features Bend Radius", value: "Min. 30mm (1.18')" },
          { label: "Ambient Operating Temperature", value: "0°C to 70°C (32°F to 158°F)" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 15,
        name: "10G Multi-Mode Optical Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP+ transceiver that supports 10G connections up to 300 m using multi-mode fiber with a duplex LC UPC connector",

        specs: [
          "Max data rate: 10 Gbps",
          "Compatible with SFP+ and SFP interfaces",
          "Duplex LC UPC connector",
          "Supports multi-mode fiber connections up to 300 m*"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Multi-Mode Fiber" },
          { label: "TX Wavelength", value: "850 nm" },
          { label: "RX Wavelength", value: "850 nm" },
          { label: "Supported Data Rate", value: "1/10 Gbps" },
          { label: "Supported Cable Distance", value: "300 m (984 ft)" },
          { label: "Max. Power Consumption", value: "0.8 W" },
          { label: "Pack Options", value: "Single Unit 2-Pack 20-Pack" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 16,
        name: "10G CWDM Single-Mode Optical Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP+ transceiver for CWDM that supports 10G connections up to 20 km using single-mode fiber with a duplex LC UPC connector",

        specs: [
          "Max data rate: 10 Gbps",
          "Compatible with SFP+ and SFP interfaces",
          "Duplex LC UPC connector",
          "Operate in pairs of the same wavelength",
          "Supports single-mode fiber connections up to 20 km*"
        ],
        detailedSpecs: [
          { label: "Connector", value: "SFP+ to Duplex LC" },
          { label: "Supported Media", value: "Fiber" },
          { label: "Supported Cable Distance", value: "20 km (65,617 ft)" },
          { label: "Max. Power Consumption", value: "1.2 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "Ambient Operating Humidity", value: "0 to 85% noncondensing" },
          { label: "Operating Wavelength", value: "UACC-OM-SFP10-1270~1330: 1260 to 1620 nm UACC-OM-SFP10-1450~1590: 1340 to 1620 nm" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },

  //Produk Kedua dari accessories, SF SFP & Fiber
  {
    id: "UACC-Uplink-SFP28-0.15M",
    name: "Uplink Cable",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "Direct attach cable with auto link optimization for seamless 1G SFP, 10G SFP+, and 25G SFP28 interconnects between UniFi devices.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Uplink-SFP28-0.15M",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Supported data rates: 25/10/1 Gbps",
      "Compatible with SFP28, SFP+, and SFP interfaces",
      "Auto-optimization of link speed and stability when used to interconnect UniFi devices",
      "Cable length: 0.15 to 30 m"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Available Lengths", value: "0.15 / 0.3 / 3 / 30 m (0.5 / 1 / 9.8 / 98.4 ft)" },
          { label: "Pack Options", value: "Single Unit 10-Pack (0.15 m)" },
          { label: "Auto Link Optimization", value: "✓" },
          { label: "Supported Data Rate", value: "25 / 1 Gbps" },
          { label: "Cable Features Wire", value: "Copper (0.15 / 0.3 m) Fiber  (3 / 30 m)" },
          { label: "Cable Features Connector Type", value: "SFP28 to SFP28" },
          { label: "Cable Features Jacket Color", value: "White" },
          { label: "Cable Features Jacket Material", value: "PVC" },
          { label: "Cable Features Jacket Outer Diameter", value: "0.15 / 0.3 m: 4.5 mm (0.18'')3 / 30 m: 3 mm (0.12'')" },
          { label: "Cable Features Bend Radius", value: "0.15 / 0.3 m: MIn. 23mm (0.9') 3 / 30 m: Min. 30mm (1.18')" },
          { label: "Ambient Operating Temperature", value: "0°C to 70°C (32°F to 158°F)" }
        ]
      },
    ],
  },

  //Produk Ketiga dari accessories, SF SFP & Fiber
  {
    id: "UACC-DAC-SFP10-3M",
    name: "10G Direct Attach Cable",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "SFP+ direct attach cable with a 10 Gbps max data rate.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-DAC-SFP10-3M",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Supported data rates: 10 / 1 Gbps",
      "Compatible with SFP+ and SFP interfaces",
      "Cable length: 0.5 to 3 m"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Available Lengths", value: "0.5 / 1 / 3 m (1.6 / 3.3 / 9.8 ft)" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Supported Data Rate", value: "10 Gbps" },
          { label: "Cable Features Wire", value: "Copper" },
          { label: "Cable Features Connector Type", value: "SFP+ to SFP+" },
          { label: "Cable Features Jacket Color", value: "Black" },
          { label: "Cable Features Jacket Material", value: "PVC" },
          { label: "Cable Features Jacket Outer Diameter", value: "0.5/ 1m: 4.2 mm (0.17') 3m: 6 mm (0.24')" },
          { label: "Cable Features Bend Radius", value: "0.15 / 1 m: Min. 22mm (0.87') 3 m: Min. 32mm (1.26'))" },
          { label: "Ambient Operating Temperature", value: "0°C to 70°C (32°F to 158°F)" }
        ]
      },
    ],
  },

  //Produk Keempat dari accessories, SF SFP & Fiber
  {
    id: "UACC-AOC-SFP10-5M",
    name: "10G Long-Range Direct Attach Cable",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "Long-range SFP+ direct attach cable with a 10 Gbps max data rate.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-AOC-SFP10-5M",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Supported data rates: 10 / 1 Gbps",
      "Compatible with SFP+ and SFP interfaces",
      "Cable length: 5 to 30 m"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Available Lengths", value: "5 / 10 / 20 / 30 m (16.4 / 32.8 / 65.6 / 98.4 ft)" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Supported Data Rate", value: "10 Gbps" },
          { label: "Cable Features Wire", value: "OM3 Fiber" },
          { label: "Cable Features Wave Length", value: "850 nm" },
          { label: "Cable Features Connector Type", value: "SFP+ to SFP+" },
          { label: "Cable Features Jacket Color", value: "Aqua" },
          { label: "Cable Features Jacket Material", value: "PVC" },
          { label: "Cable Features Jacket Outer Diameter", value: "3.0 mm (0.12')" },
          { label: "Cable Features Bend Radius", value: "Min. 30mm (1.18')" },
          { label: "Ambient Operating Temperature", value: "0°C to 70°C (32°F to 158°F)" }
        ]
      },
    ],
  },

  //Produk Kelima dari accessories, SF SFP & Fiber
  {
    id: "UACC-DAC-SFP28-3M",
    name: "25G Direct Attach Cable",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "SFP28 direct attach cable available with a 25 Gbps max data rate.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-DAC-SFP28-3M",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Supported data rates: 25 / 10 / 1 Gbps",
      "Compatible with SFP28, SFP+, and SFP interfaces",
      "Cable length: 0.5 to 3 m"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Available Lengths", value: "0.5 / 1 / 3 m (1.6 / 3.3 / 9.8 ft)" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Supported Data Rate", value: "25 / 10 Gbps" },
          { label: "Cable Features Wire", value: "Copper" },
          { label: "Cable Features Connector Type", value: "SFP28 to SFP28" },
          { label: "Cable Features Jacket Color", value: "Black" },
          { label: "Cable Features Jacket Material", value: "PVC" },
          { label: "Cable Features Jacket Outer Diameter", value: "0.5/ 1m: 4.5 mm (0.18') 3m: 5.6 mm (0.22')" },
          { label: "Cable Features Bend Radius", value: "0.15 / 1 m: Min. 24mm (0.94') 3 m: Min. 31mm (1.22')" },
          { label: "Ambient Operating Temperature", value: "0°C to 70°C (32°F to 158°F)" }
        ]
      },
    ],
  },

  //Produk Keenam dari accessories, SF SFP & Fiber
  {
    id: "UACC-AOC-SFP28-5M",
    name: "25G Long-Range Direct Attach Cable",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "Long-range SFP28 direct attach cable with a 25 Gbps max data rate.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-AOC-SFP28-5M",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Supported data rates: 25 / 10 / 1 Gbps",
      "Compatible with SFP28, SFP+, and SFP interfaces",
      "Cable length: 5 to 30 m"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Available Lengths", value: "5 / 10 / 20 / 30 m (16.4 / 32.8 / 65.6 / 98.4 ft)" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Supported Data Rate", value: "25 / 10Gbps" },
          { label: "Cable Features Wire", value: "OM3 Fiber" },
          { label: "Cable Features Wave Length", value: "850 nm" },
          { label: "Cable Features Connector Type", value: "SFP28 to SFP28" },
          { label: "Cable Features Jacket Color", value: "Aqua" },
          { label: "Cable Features Jacket Material", value: "PVC" },
          { label: "Cable Features Jacket Outer Diameter", value: "3.0 mm (0.12')" },
          { label: "Cable Features Bend Radius", value: "Min. 30mm (1.18')" },
          { label: "Ambient Operating Temperature", value: "0°C to 70°C (32°F to 158°F)" }
        ]
      },
    ],
  },

  //Produk Ketujuh dari accessories, SF SFP & Fiber
  {
    id: "UACC-DAC-QSFP28-3M",
    name: "100G Direct Attach Cable",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "QSFP28 direct attach cable with a 100 Gbps max data rate.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-DAC-QSFP28-3M",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Supported data rates: 100 / 40 Gbps",
      "Compatible with QSFP28 and QSFP+ interfaces",
      "Cable length: 0.5 to 3 m"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Available Lengths", value: "0.5, 1, 3 m (1.6, 3.3, 9.8 ft)" },
          { label: "Pack Options", value: "Single Unit 10-Pack (0.15 /1 m)" },
          { label: "Supported Data Rate", value: "100 / 40 Gbps" },
          { label: "Cable Features Wire", value: "Copper" },
          { label: "Cable Features Connector Type", value: "QSFP28 to QSFP28" },
          { label: "Cable Features Jacket Color", value: "Black" },
          { label: "Cable Features Jacket Material", value: "PVC" },
          { label: "Cable Features Jacket Outer Diameter", value: "0.5/ 1 m: 7.0 mm (0.28') 3 m: 8.9 mm (0.35')" },
          { label: "Cable Features Bend Radius", value: "0.5/ 1 m: Min. 37 mm (1.46') 3 m: Min. 47 mm (1.85')" },
          { label: "Ambient Operating Temperature", value: "0°C to 70°C (32°F to 158°F)" }
        ]
      },
    ],
  },

  //Produk Kedelapan dari accessories, SF SFP & Fiber
  {
    id: "UACC-AOC-QSFP28-5M",
    name: "100G Long-Range Direct Attach Cable",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "Long-range QSFP28 direct attach cable with a 100 Gbps max data rate.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-AOC-QSFP28-5M",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Supported data rates: 100 / 40 Gbps",
      "Compatible with QSFP28 and QSFP+ interfaces",
      "Cable length: 5 to 30 m"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Available Lengths", value: "5, 10, 20, 30 m (16.4, 32.8, 65.6, 98.4 ft)" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Supported Data Rate", value: "40 / 100 Gbps" },
          { label: "Cable Features Wire", value: "OM3 Fiber" },
          { label: "Cable Features Wave Length", value: "850 nm" },
          { label: "Cable Features Connector Type", value: "SFP28 to SFP28" },
          { label: "Cable Features Jacket Color", value: "Aqua" },
          { label: "Cable Features Jacket Material", value: "PVC" },
          { label: "Cable Features Jacket Outer Diameter", value: "3.0 mm (0.12')" },
          { label: "Cable Features Bend Radius", value: "Min. 30mm (1.18')" },
          { label: "Ambient Operating Temperature", value: "0°C to 70°C (32°F to 158°F)" }
        ]
      },
    ],
  },

  //Produk Kesembilan dari accessories, SF SFP & Fiber
  {
    id: "UACC-CM-RJ45-1G",
    name: "SFP to RJ45 Adapter",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "SFP to RJ45 transceiver that supports 1G connections up to 100 m.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-CM-RJ45-1G",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Supported data rates: 1000 / 100 / 10 Mbps",
      "Compatible with SFP interfaces",
      "Supports connections up to 100 m*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "RJ45" },
          { label: "Supported Media", value: "Copper" },
          { label: "Supported Data Rate", value: "10 / 100 / 1000 Mbps" },
          { label: "Supported Cable Distance", value: "100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "1.2 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" }
        ]
      },
    ],
  },

  //Produk Kesepuluh dari accessories, SF SFP & Fiber
  {
    id: "UACC-CM-RJ45-MG",
    name: "SFP+ to RJ45 Adapter",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "SFP+ to RJ45 transceiver module that supports 10G connections up to 100 m.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-CM-RJ45-MG",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Supported data rates: 10 / 5 / 2.5 / 1 Gbps",
      "Compatible with SFP+ and SFP interfaces",
      "Supports connections up to 100 m*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "RJ45" },
          { label: "Supported Media", value: "Copper" },
          { label: "Supported Data Rate", value: "1 / 2.5 / 5 / 10 Gbps" },
          { label: "Supported Cable Distance", value: "10 Gbps (Cat 6A): 100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "1.9 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" }
        ]
      },
    ],
  },

  //Produk Kesebelas dari Accessories, SF SFp & Fiber
  {
    id: "UACC-OM-MM-1G-D",
    name: "1G Multi-Mode Optical Module",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "SFP transceiver that supports 1G connections up to 550 m using multi-mode fiber with a duplex LC UPC connector.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OM-MM-1G-D",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max data rate: 1 Gbps",
      "Compatible with SFP interfaces",
      "Duplex LC UPC connector",
      "Supports multi-mode fiber connections up to 550 m*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Multi-Mode Fiber" },
          { label: "TX Wavelength", value: "850 nm" },
          { label: "RX Wavelength", value: "850 nm" },
          { label: "Supported Data Rate", value: "1 Gbps" },
          { label: "Supported Cable Distance", value: "550 m (1,804 ft)" },
          { label: "Max. Power Consumption", value: "0.66 W" },
          { label: "Pack Options", value: "Single Unit 2-Pack 20-Pack" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ]
      },
    ],
  },

  //Produk Kedua Belas dari Accessories, SF SFP & Fiber
  // {
  //   id: "UACC-OM-MM-1G-D-2",
  //   name: "1G Multi-Mode Optical Module",
  //   category: "Accessories",
  //   subfilter: "SFP & Fiber",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "SFP transceiver that supports 1G connections up to 550 m using multi-mode fiber with a duplex LC UPC connector.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-OM-MM-1G-D-2",

  //   // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
  //   images: [
  //     "/images/camera.jpg",
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
  //   overviewImages: [
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Bullet points untuk deskripsi produk
  //   bulletPoints: [
  //     "Max data rate: 1 Gbps",
  //     "Compatible with SFP interfaces",
  //     "Duplex LC UPC connector",
  //     "Supports multi-mode fiber connections up to 550 m*"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Form Factor", value: "SFP" },
  //         { label: "Connector", value: "Duplex LC UPC" },
  //         { label: "Supported Media", value: "Multi-Mode Fiber" },
  //         { label: "TX Wavelength", value: "850 nm" },
  //         { label: "RX Wavelength", value: "850 nm" },
  //         { label: "Supported Data Rate", value: "1 Gbps" },
  //         { label: "Supported Cable Distance", value: "550 m (1,804 ft)" },
  //         { label: "Max. Power Consumption", value: "0.66 W" },
  //         { label: "Pack Options", value: "Single Unit 2-Pack 20-Pack" },
  //         { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
  //         { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
  //       ]
  //     },
  //   ],
  // },

  //Produk Ketiga Belas dari Accessories, SF SFP & Fiber
  // {
  //   id: "UACC-OM-MM-1G-D-20",
  //   name: "1G Multi-Mode Optical Module",
  //   category: "Accessories",
  //   subfilter: "SFP & Fiber",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "SFP transceiver that supports 1G connections up to 550 m using multi-mode fiber with a duplex LC UPC connector.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-OM-MM-1G-D-20",

  //   // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
  //   images: [
  //     "/images/camera.jpg",
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
  //   overviewImages: [
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Bullet points untuk deskripsi produk
  //   bulletPoints: [
  //     "Max data rate: 1 Gbps",
  //     "Compatible with SFP interfaces",
  //     "Duplex LC UPC connector",
  //     "Supports multi-mode fiber connections up to 550 m*"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Form Factor", value: "SFP" },
  //         { label: "Connector", value: "Duplex LC UPC" },
  //         { label: "Supported Media", value: "Multi-Mode Fiber" },
  //         { label: "TX Wavelength", value: "850 nm" },
  //         { label: "RX Wavelength", value: "850 nm" },
  //         { label: "Supported Data Rate", value: "1 Gbps" },
  //         { label: "Supported Cable Distance", value: "550 m (1,804 ft)" },
  //         { label: "Max. Power Consumption", value: "0.66 W" },
  //         { label: "Pack Options", value: "Single Unit 2-Pack 20-Pack" },
  //         { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
  //         { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
  //       ]
  //     },
  //   ],
  // },

  //Produk Keempat Belas dari Accessories, SF SFP & Fiber
  {
    id: "UACC-OM-MM-10G-D",
    name: "10G Multi-Mode Optical Module",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "SFP+ transceiver that supports 10G connections up to 300 m using multi-mode fiber with a duplex LC UPC connector.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OM-MM-10G-D",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max data rate: 10 Gbps",
      "Compatible with SFP+ and SFP interfaces",
      "Duplex LC UPC connector",
      "Supports multi-mode fiber connections up to 300 m*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Multi-Mode Fiber" },
          { label: "TX Wavelength", value: "850 nm" },
          { label: "RX Wavelength", value: "850 nm" },
          { label: "Supported Data Rate", value: "1/10 Gbps" },
          { label: "Supported Cable Distance", value: "300 m (984 ft)" },
          { label: "Max. Power Consumption", value: "0.8 W" },
          { label: "Pack Options", value: "Single Unit 2-Pack 20-Pack" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ]
      },
    ],
  },

  //Produk Kelima Belas dari Accessories, SF SFP & Fiber
  // {
  //   id: "UACC-OM-MM-10G-D-2",
  //   name: "10G Multi-Mode Optical Module",
  //   category: "Accessories",
  //   subfilter: "SFP & Fiber",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "SFP+ transceiver that supports 10G connections up to 300 m using multi-mode fiber with a duplex LC UPC connector.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-OM-MM-10G-D-2",

  //   // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
  //   images: [
  //     "/images/camera.jpg",
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
  //   overviewImages: [
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Bullet points untuk deskripsi produk
  //   bulletPoints: [
  //     "Max data rate: 10 Gbps",
  //     "Compatible with SFP+ and SFP interfaces",
  //     "Duplex LC UPC connector",
  //     "Supports multi-mode fiber connections up to 300 m*"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Form Factor", value: "SFP" },
  //         { label: "Connector", value: "Duplex LC UPC" },
  //         { label: "Supported Media", value: "Multi-Mode Fiber" },
  //         { label: "TX Wavelength", value: "850 nm" },
  //         { label: "RX Wavelength", value: "850 nm" },
  //         { label: "Supported Data Rate", value: "1/10 Gbps" },
  //         { label: "Supported Cable Distance", value: "300 m (984 ft)" },
  //         { label: "Max. Power Consumption", value: "0.8 W" },
  //         { label: "Pack Options", value: "Single Unit 2-Pack 20-Pack" },
  //         { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
  //         { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
  //       ]
  //     },
  //   ],
  // },

  //Produk Keenam Belas dari Accessories, SF SFP & Fiber
  // {
  //   id: "UACC-OM-MM-10G-D-20",
  //   name: "10G Multi-Mode Optical Module",
  //   category: "Accessories",
  //   subfilter: "SFP & Fiber",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "SFP+ transceiver that supports 10G connections up to 300 m using multi-mode fiber with a duplex LC UPC connector.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-OM-MM-10G-D-20",

  //   // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
  //   images: [
  //     "/images/camera.jpg",
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
  //   overviewImages: [
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Bullet points untuk deskripsi produk
  //   bulletPoints: [
  //     "Max data rate: 10 Gbps",
  //     "Compatible with SFP+ and SFP interfaces",
  //     "Duplex LC UPC connector",
  //     "Supports multi-mode fiber connections up to 300 m*"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Form Factor", value: "SFP" },
  //         { label: "Connector", value: "Duplex LC UPC" },
  //         { label: "Supported Media", value: "Multi-Mode Fiber" },
  //         { label: "TX Wavelength", value: "850 nm" },
  //         { label: "RX Wavelength", value: "850 nm" },
  //         { label: "Supported Data Rate", value: "1/10 Gbps" },
  //         { label: "Supported Cable Distance", value: "300 m (984 ft)" },
  //         { label: "Max. Power Consumption", value: "0.8 W" },
  //         { label: "Pack Options", value: "Single Unit 2-Pack 20-Pack" },
  //         { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
  //         { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
  //       ]
  //     },
  //   ],
  // },

  //Produk Ketujuh Belas dari Accessories, SF SFP & Fiber
  {
    id: "UACC-OM-SFP28-SR",
    name: "25G Multi-Mode Optical Module",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "SFP28 transceiver that supports 25G connections up to 100 m using multi-mode fiber with a duplex LC UPC connector.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OM-SFP28-SR",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max data rate: 25 Gbps",
      "Compatible with SFP28, SFP+, and SFP interfaces",
      "Duplex LC UPC connector",
      "Supports multi-mode fiber connections up to 100 m*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Multi-Mode Fiber" },
          { label: "TX Wavelength", value: "850 nm" },
          { label: "RX Wavelength", value: "850 nm" },
          { label: "Supported Data Rate", value: "1/10/25 Gbps" },
          { label: "Supported Cable Distance", value: "100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "0.8 W" },
          { label: "Pack Options", value: "Single Unit 2-Pack 20-Pack" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ]
      },
    ],
  },

  //Produk Kedelapan Belas dari Accessories, SF SFP & Fiber
  {
    id: "UACC-OFC-MA-MPMP-5M",
    name: "OM4 MPO-12 UPC Fiber Patch Cable",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "Indoor OM4 multi-mode fiber patch cable with MPO-12 Type B UPC connectors designed for 100G applications.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OFC-MA-MPMP-5M",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "OM4 multi-mode fiber",
      "MPO-12 Type B UPC connectors",
      "Cable length: 0.5 to 100 m"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Available Lengths", value: "0.5, 1, 3, 5, 10, 15, 30, 60, 100 m (1.6, 3.3, 9.8, 16.4, 32.8, 49.2, 98.4, 196.9, 328 ft)" },
          { label: "Pack Options", value: "Single Unit 10-Pack (0.5/1/3 m)" },
          { label: "Connector", value: "(2) MPO-12 Type B UPC" },
          { label: "Operating Environment", value: "Indoor" },
          { label: "Cable Features Fiber Mode", value: "OM4" },
          { label: "Cable Features Jacket Diameter", value: "3 mm (0.012')" },
          { label: "Cable Features Jacket Material", value: "Low smoke zero halogen (LSZH)" },
          { label: "Cable Features Jacket Color", value: "Rose" },
          { label: "Wavelength", value: "850/1300 nm" },
          { label: "Insertion Loss", value: "≤ 0.6 dB" },
          { label: "Return Loss", value: "≥ 20 dB" },
          { label: "Repeatability", value: "≤ 0.1 dB" },
          { label: "Durability", value: "≤ 0.2 dB (1,000 times mating)" },
          { label: "Ambient Operating Temperature", value: "-40 to 75° C (-40 to 167° F)" }
        ]
      },
    ],
  },

  //Produk Kesembilan Belas dari Accessories, SF SFP & Fiber
  {
    id: "UACC-OM-SM-1G-S-2",
    name: "1G Bidirectional Single-Mode Optical Module",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "SFP transceiver that supports 1G connections up to 3 km using single-mode fiber with a simplex LC UPC connector.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OM-SM-1G-S-2",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max data rate: 1 Gbps",
      "Compatible with SFP interfaces",
      "Simplex LC UPC connector",
      "Supports single-mode fiber connections up to 3 km*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Simplex LC UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "BiDi", value: "✓" },
          { label: "TX Wavelength", value: "1310 / 1550 nm nm" },
          { label: "RX Wavelength", value: "1550 / 1310 nm" },
          { label: "Supported Data Rate", value: "1 Gbps" },
          { label: "Supported Cable Distance", value: "3 km (1.9 mi)" },
          { label: "Max. Power Consumption", value: "0.66 W" },
          { label: "Pack Options", value: "2-Pack 20-Pack" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ]
      },
    ],
  },

  //Produk Kedua Puluh dari Accessories, SF SFP & Fiber
  // {
  //   id: "UACC-OM-SM-1G-S-20",
  //   name: "1G Bidirectional Single-Mode Optical Module",
  //   category: "Accessories",
  //   subfilter: "SFP & Fiber",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "SFP transceiver that supports 1G connections up to 3 km using single-mode fiber with a simplex LC UPC connector.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-OM-SM-1G-S-20",

  //   // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
  //   images: [
  //     "/images/camera.jpg",
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
  //   overviewImages: [
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Bullet points untuk deskripsi produk
  //   bulletPoints: [
  //     "Max data rate: 1 Gbps",
  //     "Compatible with SFP interfaces",
  //     "Simplex LC UPC connector",
  //     "Supports single-mode fiber connections up to 3 km*"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Form Factor", value: "SFP" },
  //         { label: "Connector", value: "Simplex LC UPC" },
  //         { label: "Supported Media", value: "Single-Mode Fiber" },
  //         { label: "BiDi", value: "✓" },
  //         { label: "TX Wavelength", value: "1310 / 1550 nm nm" },
  //         { label: "RX Wavelength", value: "1550 / 1310 nm" },
  //         { label: "Supported Data Rate", value: "1 Gbps" },
  //         { label: "Supported Cable Distance", value: "3 km (1.9 mi)" },
  //         { label: "Max. Power Consumption", value: "0.66 W" },
  //         { label: "Pack Options", value: "2-Pack 20-Pack" },
  //         { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
  //         { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
  //       ]
  //     },
  //   ],
  // },

  //Produk Kedua Puluh Satu dari Accessories, SF SFP & Fiber
  {
    id: "UACC-OM-SM-10G-S-2",
    name: "10G Bidirectional Single-Mode Optical Module",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "SFP+ transceiver that supports 10G connections up to 10 km using single-mode fiber with a simplex LC UPC connector.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OM-SM-10G-S-2",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max data rate: 10 Gbps",
      "Compatible with SFP+ and SFP interfaces",
      "Simplex LC UPC connector",
      "Supports single-mode fiber connections up to 10 km*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Simplex LC UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "BiDi", value: "✓" },
          { label: "TX Wavelength", value: "1270 / 1330 nm" },
          { label: "RX Wavelength", value: "1330 / 1270 nm" },
          { label: "Supported Data Rate", value: "1/10 Gbps" },
          { label: "Supported Cable Distance", value: "10 km (6.2 mi)" },
          { label: "Max. Power Consumption", value: "1 W" },
          { label: "Pack Options", value: "2-Pack 20-Pack" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ]
      },
    ],
  },


  //Produk Kedua Puluh Dua dari Accessories, SF SFP & Fiber
  // {
  //   id: "UACC-OM-SM-10G-S-20",
  //   name: "10G Bidirectional Single-Mode Optical Module",
  //   category: "Accessories",
  //   subfilter: "SFP & Fiber",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "SFP+ transceiver that supports 10G connections up to 10 km using single-mode fiber with a simplex LC UPC connector.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-OM-SM-10G-S-20",

  //   // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
  //   images: [
  //     "/images/camera.jpg",
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
  //   overviewImages: [
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Bullet points untuk deskripsi produk
  //   bulletPoints: [
  //     "Max data rate: 10 Gbps",
  //     "Compatible with SFP+ and SFP interfaces",
  //     "Simplex LC UPC connector",
  //     "Supports single-mode fiber connections up to 10 km*"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Form Factor", value: "SFP" },
  //         { label: "Connector", value: "Simplex LC UPC" },
  //         { label: "Supported Media", value: "Single-Mode Fiber" },
  //         { label: "BiDi", value: "✓" },
  //         { label: "TX Wavelength", value: "1270 / 1330 nm" },
  //         { label: "RX Wavelength", value: "1330 / 1270 nm" },
  //         { label: "Supported Data Rate", value: "1/10 Gbps" },
  //         { label: "Supported Cable Distance", value: "10 km (6.2 mi)" },
  //         { label: "Max. Power Consumption", value: "1 W" },
  //         { label: "Pack Options", value: "2-Pack 20-Pack" },
  //         { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
  //         { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
  //       ]
  //     },
  //   ],
  // },

  //Produk Kedua Puluh Tiga dari Accessories, SF SFP & Fiber
  {
    id: "UACC-OM-SM-10G-D-2",
    name: "10G Single-Mode Optical Module",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "SFP+ transceiver that supports 10G connections up to 10 km using single-mode fiber with a duplex LC UPC connector.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OM-SM-10G-D-2",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max data rate: 10 Gbps",
      "Compatible with SFP+ and SFP interfaces",
      "Duplex LC UPC connector",
      "Supports single-mode fiber connections up to 10 km*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "TX Wavelength", value: "1310 nm" },
          { label: "RX Wavelength", value: "1310 nm" },
          { label: "Supported Data Rate", value: "1/10 Gbps" },
          { label: "Supported Cable Distance", value: "10 km (6.2 mi)" },
          { label: "Max. Power Consumption", value: "1 W" },
          { label: "Pack Options", value: "2-Pack 20-Pack" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ]
      },
    ],
  },

  //Produk Kedua Puluh Empat dari Accessories, SF SFP & Fiber
  // {
  //   id: "UACC-OM-SM-10G-D-20",
  //   name: "10G Single-Mode Optical Module",
  //   category: "Accessories",
  //   subfilter: "SFP & Fiber",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "SFP+ transceiver that supports 10G connections up to 10 km using single-mode fiber with a duplex LC UPC connector.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-OM-SM-10G-D-20",

  //   // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
  //   images: [
  //     "/images/camera.jpg",
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
  //   overviewImages: [
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Bullet points untuk deskripsi produk
  //   bulletPoints: [
  //     "Max data rate: 10 Gbps",
  //     "Compatible with SFP+ and SFP interfaces",
  //     "Duplex LC UPC connector",
  //     "Supports single-mode fiber connections up to 10 km*"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Form Factor", value: "SFP" },
  //         { label: "Connector", value: "Duplex LC UPC" },
  //         { label: "Supported Media", value: "Single-Mode Fiber" },
  //         { label: "TX Wavelength", value: "1310 nm" },
  //         { label: "RX Wavelength", value: "1310 nm" },
  //         { label: "Supported Data Rate", value: "1/10 Gbps" },
  //         { label: "Supported Cable Distance", value: "10 km (6.2 mi)" },
  //         { label: "Max. Power Consumption", value: "1 W" },
  //         { label: "Pack Options", value: "2-Pack 20-Pack" },
  //         { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
  //         { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
  //       ]
  //     },
  //   ],
  // },

  //Produk Kedua Puluh Lima dari Accessories, SF SFP & Fiber
  {
    id: "UACC-OM-SFP28-LR",
    name: "25G Single-Mode Optical Module",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "SFP28 transceiver that supports 25G connections up to 10 km using single-mode fiber with a duplex LC UPC connector.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OM-SFP28-LR",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max data rate: 25 Gbps",
      "Compatible with SFP28, SFP+, and SFP interfaces",
      "Duplex LC UPC connector",
      "Supports single-mode fiber connections up to 10 km*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "TX Wavelength", value: "1310 nm" },
          { label: "RX Wavelength", value: "1310 nm" },
          { label: "Supported Data Rate", value: "1/10/25 Gbps" },
          { label: "Supported Cable Distance", value: "10 km (6.2 mi)" },
          { label: "Max. Power Consumption", value: "1.3 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ]
      },
    ],
  },

  //Produk Kedua Puluh Enam dari Accessories, SF SFP & Fiber
  {
    id: "UACC-OFC-S2-LULU-3M",
    name: "OS2 Duplex LC UPC Fiber Patch Cable",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "Lightweight fiber patch cable for up to 100G connections.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OFC-S2-LULU-3",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "OS2 single-mode fiber",
      "Duplex LC UPC connectors",
      "Cable length 0.5 to 30 m"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Available Lengths", value: "0.5, 1, 3, 5, 10, 15, 30 m (1.6, 3.3, 9.8, 16.4, 32.8, 49.2, 98.4 ft)" },
          { label: "Pack Options", value: "Single Unit 50-Pack (0.5/1/3m)" },
          { label: "Connector", value: "(2) Duplex LC UPC" },
          { label: "Operating Environment", value: "Indoor" },
          { label: "Cable Features Fiber Mode", value: "OS2" },
          { label: "Cable Features Jacket Diameter", value: "2 mm (0.08')" },
          { label: "Cable Features Jacket Material", value: "Low smoke zero halogen (LSZH)" },
          { label: "Cable Features Jacket Color", value: "Yellow" },
          { label: "Wavelength", value: "1310/1550 nm" },
          { label: "Insertion Loss", value: "≤ 0.3 dB" },
          { label: "Return Loss", value: "≥ 50 dB" },
          { label: "Repeatability", value: "≤ 0.1 dB" },
          { label: "Durability", value: "≤ 0.2 dB (1,000 times mating)" },
          { label: "Ambient Operating Temperature", value: "-40 to 75° C (-40 to 167° F)" }
        ]
      },
    ],
  },

  //Produk Kedua Puluh Tujuh dari Accessories, SF SFP & Fiber
  {
    id: "UACC-OFC-SA-MPMP-5M",
    name: "OS2 MPO-12 APC Fiber Patch Cable",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "Indoor OS2 single-mode fiber patch cable with MPO-12 Type B APC connectors designed for 100G applications.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OFC-SA-MPMP-5M",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "OS2 single-mode fiber",
      "MPO-12 Type B APC connectors",
      "Cable length: 0.5 to 10 m"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Available Lengths", value: "0.5, 1, 3, 5, 10 m (1.6, 3.3, 9.8, 16.4, 32.8 ft)" },
          { label: "Pack Options", value: "Single Unit 10-Pack (0.5/1/3m)" },
          { label: "Connector", value: "(2) MPO-12 Type B APC" },
          { label: "Operating Environment", value: "Indoor" },
          { label: "Cable Features Fiber Mode", value: "OS2" },
          { label: "Cable Features Jacket Diameter", value: "3 mm (0.12')" },
          { label: "Cable Features Jacket Material", value: "Low smoke zero halogen (LSZH)" },
          { label: "Cable Features Jacket Color", value: "Yellow" },
          { label: "Wavelength", value: "1310/1550 nm" },
          { label: "Insertion Loss", value: "≤ 0.6 dB" },
          { label: "Return Loss", value: "≥ 20 dB" },
          { label: "Repeatability", value: "≤ 0.1 dB" },
          { label: "Durability", value: "≤ 0.2 dB (1,000 times mating)" },
          { label: "Ambient Operating Temperature", value: "-40 to 75° C (-40 to 167° F)" }
        ]
      },
    ],
  },

  //Produk Kedua Puluh Delapan dari Accessories, SF SFP & Fiber
  {
    id: "FC-SM-200",
    name: "OS1 Simplex LC UPC Fiber Patch Cable",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "Outdoor OS1 single-mode fiber cable with simplex LC UPC connectors.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "FC-SM-200",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "OS1 single-mode fib",
      "Simplex LC UPC connectors",
      "Cable length: 30.5 to 91.5 m",
      "Outdoor-rated jacket with ripcord",
      "Kevlar yarn for added tensile strength"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Available Lengths", value: "30.5/61/91.5 m  (100/200/300 ft)" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Connector", value: "(12) Simplex LC UPC" },
          { label: "Operating Environment", value: "Outdoor" },
          { label: "Weather Proofing", value: "IP65" },
          { label: "Cable Features Fiber Mode", value: "OS2" },
          { label: "Cable Features Jacket Diameter", value: "6 mm (0.24')" },
          { label: "Cable Features Jacket Material", value: "Thermoplastic polyurethane (TPU) with Kevlar strength member inside" },
          { label: "Cable Features Jacket Color", value: "Black" },
          { label: "Wavelength", value: "1310/1550 nm" },
          { label: "Insertion Loss", value: "≤ 0.3 dB" },
          { label: "Return Loss", value: "≥ 50 dB" },
          { label: "Repeatability", value: "≤ 0.5 dB" },
          { label: "Ambient Operating Temperature", value: "-40 to 80° C (-40 to 176° F)" }
        ]
      },
    ],
  },

  //Produk Kedua Puluh Sembilan dari Accessories, SF SFP & Fiber
  {
    id: "UACC-OM-QSFP28-SR4",
    name: "100G SR4 Multi-Mode Optical Module",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "QSFP28 transceiver that supports 100G connections up to 100 m using multi-mode fiber with an MPO-12 Type B UPC connector.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OM-QSFP28-SR4",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max data rate: 100 Gbps",
      "Compatible with QSFP28 and QSFP+ interfaces",
      "MPO-12 Type B UPC connector",
      "Supports multi-mode fiber connections up to 100 m*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Form Factor", value: "QSFP" },
          { label: "Connector", value: "MPO-12 Type B UPC" },
          { label: "Supported Media", value: "Multi-Mode Fiber" },
          { label: "TX Wavelength", value: "850 nm" },
          { label: "RX Wavelength", value: "850 nm" },
          { label: "Supported Data Rate", value: "40/100 Gbps" },
          { label: "Supported Cable Distance", value: "100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "2.5 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ]
      },
    ],
  },

  //Produk Ketiga Puluh dari Accessories, SF SFP & Fiber 
  {
    id: "UACC-OM-QSFP28-PSM4",
    name: "100G PSM4 Single-Mode Optical Module",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "QSFP28 transceiver that supports 100G connections up to 2 km using single-mode fiber with an MPO-12 APC connector.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OM-QSFP28-PSM4",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max data rate: 100 Gbps",
      "Compatible with QSFP28 and QSFP+ interfaces",
      "MPO-12 Type B APC connector",
      "Supports single-mode fiber connections up to 2 km*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Form Factor", value: "QSFP" },
          { label: "Connector", value: "MPO-12 Type B UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "TX Wavelength", value: "1310 nm" },
          { label: "RX Wavelength", value: "1310 nm" },
          { label: "Supported Data Rate", value: "100 Gbps" },
          { label: "Supported Cable Distance", value: "2 km (1.2 mi)" },
          { label: "Max. Power Consumption", value: "3.5 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ]
      },
    ],
  },

  //Produk Ketiga Puluh Satu dari Accessories, SF SFP & Fiber
  {
    id: "UACC-OM-QSFP28-LR4",
    name: "100G LR4 Single-Mode Optical Module",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "QSFP28 transceiver that supports 100G connections up to 10 km using single-mode fiber with a duplex LC UPC connector.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OM-QSFP28-LR4",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max data rate: 100 Gbps",
      "Compatible with QSFP28 and QSFP+ interfaces",
      "Duplex LC UPC connector",
      "Supports single-mode fiber connections up to 10 km*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Form Factor", value: "QSFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "TX Wavelength", value: "1295 / 1300 / 1304 / 1309 nm" },
          { label: "RX Wavelength", value: "1295 / 1300 / 1304 / 1309 nm nm" },
          { label: "Supported Data Rate", value: "100 Gbps" },
          { label: "Supported Cable Distance", value: "10 km (6.2 mi)" },
          { label: "Max. Power Consumption", value: "4 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ]
      },
    ],
  },

  //Produk Ketiga Puluh Dua dari Accessories,SF SFP & Fiber 
  {
    id: "UACC-CWDM-4",
    name: "CWDM Mux Demux 4",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "Rack-mountable 4-channel 1270 to 1330 nm CWDM mux demux designed to increase capacity of existing fiber infrastructure.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-CWDM-4",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-CloudKey-Enterprise.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "(4) 1270 to 1330 nm channel ports",
      "(1) Duplex LC UPC communication port for linking to another CWDM Mux Demux 4 with a pair of single-mode fiber cables",
      "(1) Duplex LC UPC monitor port for seamless observation with a power meter or optical spectrum analyzer"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442 x 120 x 43.7 mm (17.4 x 4.7 x 1.7')" },
          { label: "Enclosure Material", value: "SGCC steel" },
          { label: "Weight", value: "1.4 kg (3.2 lb)" },
          { label: "Pigtail and Connector Type", value: "0.9 mm white LC/UPC" },
          { label: "Connector", value: "(1) COM (LC/UPC) (1) MON (LC/UPC) (1) 1270 to 1330 nm (LC/UPC)" },
          { label: "Fiber Type", value: "SMF-28e" },
          { label: "Fiber Length", value: "≥0.5 to 1 m" },
          { label: "Isolation", value: "Adjacent Channel: Max. 30 dB Non-Adjacent Channel: Min. 40 dB" },
          { label: "Channel Count", value: "4 CH Mux/Demux" },
          { label: "Channel Center Wavelength", value: "1270/1290/1310/1330 nm" },
          { label: "Min. Channel Passband", value: "±6.5 nm" },
          { label: "Insertion Loss", value: "<1.5 dB (Max.)" },
          { label: "Return Loss", value: "50 dB (Min.)" },
          { label: "Max. Power Handling", value: "500 mW" },
          { label: "Max. Passband Ripple", value: "0.3 dB" },
          { label: "Max. Polarization Dependent Loss", value: "0.1 dB" },
          { label: "Max. Polarization Mode Dispersion", value: "0.1 ps" },
          { label: "Min. Directivity", value: "55 dB" },
          { label: "Ambient Storage Temperature", value: "-40 to 90° C (-40 to 194° F)" },
          { label: "Ambient Operating Temperature", value: "-30 to 75° C (-22 to 167° F)" },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },

  //Produk Ketiga Puluh Tiga dari Accessories, SF SFP & Fiber
  {
    id: "UACC-CWDM-8",
    name: "CWDM Mux Demux 8",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "Rack-mountable 8-channel 1450 to 1590 nm CWDM mux demux designed to increase capacity of existing fiber infrastructure.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-CWDM-8",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-CloudKey-Enterprise.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "(8) 1450 to1590 nm channel ports",
      "(1) Duplex LC UPC communication port for linking to another CWDM Mux Demux 8 with a pair of single-mode fiber cables",
      "(1) Duplex LC UPC monitor port for seamless observation with a power meter or optical spectrum analyzer",
      "(1) Duplex LC UPC expansion port for linking to CWDM Mux Demux 4 to add more channels"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442 x 120 x 43.7 mm (17.4 x 4.7 x 1.7')" },
          { label: "Enclosure Material", value: "SGCC steel" },
          { label: "Weight", value: "1.4 kg (3.2 lb)" },
          { label: "Pigtail and Connector Type", value: "COM: 0.9 mm black LC/UPC Other ports: 0.9 mm white LC/UPC" },
          { label: "Connector", value: "(1) COM (LC/UPC) (1) MON (LC/UPC) (1) EXP (LC/UPC) (1) 1450 to 1590 nm (LC/UPC)" },
          { label: "Fiber Type", value: "SMF-28e" },
          { label: "Fiber Length", value: "≥0.5 to 1 m" },
          { label: "Isolation", value: "Adjacent Channel: Max. 30 dB Non-Adjacent Channel: Min. 40 dB" },
          { label: "Channel Count", value: "8 CH Mux/Demux" },
          { label: "Channel Center Wavelength", value: "1450/1470/1490/1510/1530/1550/1570/1590 nm" },
          { label: "Min. Channel Passband", value: "±6.5 nm" },
          { label: "Insertion Loss", value: "<2.5 dB (Max.)" },
          { label: "Return Loss", value: "50 dB (Min.)" },
          { label: "Max. Power Handling", value: "500 mW" },
          { label: "Max. Passband Ripple", value: "0.3 dB" },
          { label: "Max. Polarization Dependent Loss", value: "0.1 dB" },
          { label: "Max. Polarization Mode Dispersion", value: "0.1 ps" },
          { label: "Min. Directivity", value: "55 dB" },
          { label: "Ambient Storage Temperature", value: "-40 to 90° C (-40 to 194° F)" },
          { label: "Ambient Operating Temperature", value: "-30 to 75° C (-22 to 167° F)" },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },

  //Produk Ketiga Puluh Empat dari Accessories, SF SFP & Fiber
  {
    id: "UACC-OM-SFP10-1490",
    name: "10G CWDM Single-Mode Optical Module",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "SFP+ transceiver for CWDM that supports 10G connections up to 20 km using single-mode fiber with a duplex LC UPC connector.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OM-SFP10-1490",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max data rate: 10 Gbps",
      "Compatible with SFP+ and SFP interfaces",
      "Duplex LC UPC connector",
      "Operate in pairs of the same wavelength",
      "Supports single-mode fiber connections up to 20 km*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Connector", value: "SFP+ to Duplex LC" },
          { label: "Supported Media", value: "Fiber" },
          { label: "Supported Cable Distance", value: "20 km (65,617 ft)" },
          { label: "Max. Power Consumption", value: "1.2 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "Ambient Operating Humidity", value: "0 to 85% noncondensing" },
          { label: "Operating Wavelength", value: "UACC-OM-SFP10-1270~1330: 1260 to 1620 nm UACC-OM-SFP10-1450~1590: 1340 to 1620 nm" },
        ]
      },
    ],
  },

  //Produk Ketiga Puluh Lima dari Accessories, SF SFP & Fiber
  {
    id: "F-POE-G2",
    name: "Optical Data Transport",
    category: "Accessories",
    subfilter: "SFP & Fiber",
    image: "/images/camera.jpg",
    shortDescription:
      "Connects remote PoE devices and provides data and power using fiber and DC cabling.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "F-POE-G2",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-CloudKey-Enterprise.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Reliable long-distance Gigabit PoE runs",
      "Dependable 24V/50V passive PoE transport",
      "Enhanced ESD protection and EMI reduction",
      "Works reliably in extreme temperatures (-40 to 60° C)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "196.4 x 93.5 x 32.4 mm ( 7.7 x 3.7 x 1.3')" },
          { label: "Enclosure Material", value: "Polycarbonat" },
          { label: "Weight", value: "288 g (10.2 oz)" },
          { label: "Weatherproofing", value: "IPX5" },
          { label: "Surge Protection", value: "Built-in high-current gas discharge tube for DC terminal block and PoE port" },
          { label: "Networking Interface", value: "(1) 1 Gbps SFP port (1) DC terminal block (1) DC RJ45 port DC injection (1) GbE PoE port (10/100 MbE not supported)" },
          { label: "Input DC voltage", value: "16-57V" },
          { label: "DC Output", value: "Terminal block, 24V DC/50V DC, 2-wire" },
          { label: "Power Method", value: "DC Terminal Block, 2-Wire, 24V DC/50 VDC DC in RJ45 Port, 2-pair (4, 5+; 7, 8-) (24V DC input), or 4-pair (24V DC/50V DC input) passthrough PoE RJ45 port, 2-pair (4, 5+; 7, 8-) (24V DC input), or 4-pair (24V DC/50V DC input) PoE passthrough" },
          { label: "Power Consumption", value: "1.5W (Typical)" },
          { label: "ESD Protection", value: "± 24kV Contact / Air for Ethernet" },
          { label: "Ambient Operating Temperature", value: "-40 to 60° C (-40 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" }
        ]
      },
    ],
  },

  //Produk Pertama dari Accessories, SF Liberation Day
  {
    id: "UACC-SFP-Wizard",
    name: "SFP Wizard",
    category: "Accessories",
    subfilter: "SFP Liberation Day",
    image: "/images/camera.jpg",
    shortDescription:
      "Instantly reprogram, test, and unlock universal compatibility for every optical module — with full diagnostics and OTA updates built in.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-SFP-Wizard",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-CloudKey-Enterprise.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Copy optical module profiles",
      "Write or restore profile to Ubiquiti optical module instantly",
      "Monitor optical module health in real time via DDM",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "90.8 x 52.1 x 20.2 mm (3.6 x 2.1 x 0.8')" },
          { label: "Weight", value: "84 g (3 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Networking Interface", value: "BLE" },
          { label: "Power Method", value: "Li-ion battery" },
          { label: "Battery Life", value: "Up to 75 minutes of continuous SFP transceiver diagnostics with laser on, or 35 minutes with QSFP transceivers" },
          { label: "Power Supply", value: "Rechargeable Li-ion battery, 3.7V DC, 300mAh" },
          { label: "Supported Voltage Range", value: "USB-C: 5V DC/0.5A" },
          { label: "Max. Power Consumption", value: "0.6W" },
          { label: "Supported Form Factor", value: "SFP, SFP+, SFP28, QSFP+, QSFP28" },
          { label: "LCM Display", value: "1.9' touchscreen" },
          { label: "Buttons", value: "(1) Power" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C  (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" }
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements Mobile App", value: "UniFi iOS™ version 10.29.1 and later UniFi Android™ version 10.30.2 and later" }
        ]
      }
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
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
        name: "100G LR4 Single-Mode Optical Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "QSFP28 transceiver that supports 100G connections up to 10 km using single-mode fiber with a duplex LC UPC connector.",
        specs: [
          "Max data rate: 100 Gbps",
          "Compatible with QSFP28 and QSFP+ interfaces",
          "Duplex LC UPC connector",
          "Supports single-mode fiber connections up to 10 km*"

        ],
        detailedSpecs: [
          { label: "Form Factor", value: "QSFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "TX Wavelength", value: "1295 / 1300 / 1304 / 1309 nm" },
          { label: "RX Wavelength", value: "1295 / 1300 / 1304 / 1309 nm nm" },
          { label: "Supported Data Rate", value: "100 Gbps" },
          { label: "Supported Cable Distance", value: "10 km (6.2 mi)" },
          { label: "Max. Power Consumption", value: "4 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ],
        productLink: "/products/mounting-kit"
      },
      {
        id: 2,
        name: "25G Direct Attach Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "High-quality power cable with durable construction.",
        specs: [
          "Supported data rates: 25 / 10 / 1 Gbps",
          "Compatible with SFP28, SFP+, and SFP interfaces",
          "Cable length: 0.5 to 3 m"

        ],
        detailedSpecs: [
          { label: "Length", value: "2.0 m" },
          { label: "Conductor", value: "Copper" },
          { label: "Rating", value: "10A / 250V" },
          { label: "Jacket", value: "PVC" }
        ],
        productLink: "/products/power-cable"
      },
      {
        id: 3,
        name: "SFP to RJ45 Adapter",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP to RJ45 transceiver that supports 1G connections up to 100 m",
        specs: [
          "Supported data rates: 1000 / 100 / 10 Mbps",
          "Compatible with SFP interfaces",
          "Supports connections up to 100 m*"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "RJ45" },
          { label: "Supported Media", value: "Copper" },
          { label: "Supported Data Rate", value: "10 / 100 / 1000 Mbps" },
          { label: "Supported Cable Distance", value: "100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "1.2 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "Uplink Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Direct attach cable with auto link optimization for seamless 1G SFP, 10G SFP+, and 25G SFP28 interconnects between UniFi devices.",
        specs: [
          "Supported data rates: 25/10/1 Gbps",
          "Compatible with SFP28, SFP+, and SFP interfaces",
          "Auto-optimization of link speed and stability when used to interconnect UniFi devices",
          "Cable length: 0.15 to 30 m"
        ],
        detailedSpecs: [
          { label: "Available Lengths", value: "0.15 / 0.3 / 3 / 30 m (0.5 / 1 / 9.8 / 98.4 ft)" },
          { label: "Pack Options", value: "Single Unit 10-Pack (0.15 m)" },
          { label: "Auto Link Optimization", value: "✓" },
          { label: "Supported Data Rate", value: "25 / 1 Gbps" },
          { label: "Cable Features Wire", value: "Copper (0.15 / 0.3 m) Fiber  (3 / 30 m)" },
          { label: "Cable Features Connector Type", value: "SFP28 to SFP28" },
          { label: "Cable Features Jacket Color", value: "White" },
          { label: "Cable Features Jacket Material", value: "PVC" },
          { label: "Cable Features Jacket Outer Diameter", value: "0.15 / 0.3 m: 4.5 mm (0.18'')3 / 30 m: 3 mm (0.12'')" },
          { label: "Cable Features Bend Radius", value: "0.15 / 0.3 m: MIn. 23mm (0.9') 3 / 30 m: Min. 30mm (1.18')" },
          { label: "Ambient Operating Temperature", value: "0°C to 70°C (32°F to 158°F)" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 5,
        name: "25G Multi-Mode Optical Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP28 transceiver that supports 25G connections up to 100 m using multi-mode fiber with a duplex LC UPC connector.",
        specs: [
          "Max data rate: 25 Gbps",
          "Compatible with SFP28, SFP+, and SFP interfaces",
          "Duplex LC UPC connector",
          "Supports multi-mode fiber connections up to 100 m*"],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Multi-Mode Fiber" },
          { label: "TX Wavelength", value: "850 nm" },
          { label: "RX Wavelength", value: "850 nm" },
          { label: "Supported Data Rate", value: "1/10/25 Gbps" },
          { label: "Supported Cable Distance", value: "100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "0.8 W" },
          { label: "Pack Options", value: "Single Unit 2-Pack 20-Pack" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 6,
        name: "1G Bidirectional Single-Mode Optical Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP transceiver that supports 1G connections up to 3 km using single-mode fiber with a simplex LC UPC connector.",

        specs: [
          "Max data rate: 25 Gbps",
          "Compatible with SFP28, SFP+, and SFP interfaces",
          "Duplex LC UPC connector",
          "Supports multi-mode fiber connections up to 100 m*"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Simplex LC UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "BiDi", value: "✓" },
          { label: "TX Wavelength", value: "1310 / 1550 nm nm" },
          { label: "RX Wavelength", value: "1550 / 1310 nm" },
          { label: "Supported Data Rate", value: "1 Gbps" },
          { label: "Supported Cable Distance", value: "3 km (1.9 mi)" },
          { label: "Max. Power Consumption", value: "0.66 W" },
          { label: "Pack Options", value: "2-Pack 20-Pack" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 7,
        name: "100G SR4 Multi-Mode Optical Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "QSFP28 transceiver that supports 100G connections up to 100 m using multi-mode fiber with an MPO-12 Type B UPC connector.",

        specs: [
          "Max data rate: 100 Gbps",
          "Compatible with QSFP28 and QSFP+ interfaces",
          "MPO-12 Type B UPC connector",
          "Supports multi-mode fiber connections up to 100 m*"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "QSFP" },
          { label: "Connector", value: "MPO-12 Type B UPC" },
          { label: "Supported Media", value: "Multi-Mode Fiber" },
          { label: "TX Wavelength", value: "850 nm" },
          { label: "RX Wavelength", value: "850 nm" },
          { label: "Supported Data Rate", value: "40/100 Gbps" },
          { label: "Supported Cable Distance", value: "100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "2.5 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 8,
        name: "10G Single-Mode Optical Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP+ transceiver that supports 10G connections up to 10 km using single-mode fiber with a duplex LC UPC connector",

        specs: [
          "Max data rate: 10 Gbps",
          "Compatible with SFP+ and SFP interfaces",
          "Duplex LC UPC connector",
          "Supports single-mode fiber connections up to 10 km*"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "TX Wavelength", value: "1310 nm" },
          { label: "RX Wavelength", value: "1310 nm" },
          { label: "Supported Data Rate", value: "1/10 Gbps" },
          { label: "Supported Cable Distance", value: "10 km (6.2 mi)" },
          { label: "Max. Power Consumption", value: "1 W" },
          { label: "Pack Options", value: "2-Pack 20-Pack" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 9,
        name: "10G Bidirectional Single-Mode Optical Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "10G Bidirectional Single-Mode Optical Module SFP+ transceiver that supports 10G connections up to 10 km using single-mode fiber with a simplex LC UPC connector.",

        specs: [
          "Max data rate: 10 Gbps",
          "Compatible with SFP+ and SFP interfaces",
          "Simplex LC UPC connector",
          "Supports single-mode fiber connections up to 10 km*"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Simplex LC UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "BiDi", value: "✓" },
          { label: "TX Wavelength", value: "1270 / 1330 nm" },
          { label: "RX Wavelength", value: "1330 / 1270 nm" },
          { label: "Supported Data Rate", value: "1/10 Gbps" },
          { label: "Supported Cable Distance", value: "10 km (6.2 mi)" },
          { label: "Max. Power Consumption", value: "1 W" },
          { label: "Pack Options", value: "2-Pack 20-Pack" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 10,
        name: "25G Long-Range Direct Attach Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Long-range SFP28 direct attach cable with a 25 Gbps max data rate",

        specs: [
          "Supported data rates: 25 / 10 / 1 Gbps",
          "Compatible with SFP28, SFP+, and SFP interfaces",
          "Cable length: 5 to 30 m"
        ],
        detailedSpecs: [
          { label: "Available Lengths", value: "5 / 10 / 20 / 30 m (16.4 / 32.8 / 65.6 / 98.4 ft)" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Supported Data Rate", value: "10 Gbps" },
          { label: "Cable Features Wire", value: "OM3 Fiber" },
          { label: "Cable Features Wave Length", value: "850 nm" },
          { label: "Cable Features Connector Type", value: "SFP+ to SFP+" },
          { label: "Cable Features Jacket Color", value: "Aqua" },
          { label: "Cable Features Jacket Material", value: "PVC" },
          { label: "Cable Features Jacket Outer Diameter", value: "3.0 mm (0.12')" },
          { label: "Cable Features Bend Radius", value: "Min. 30mm (1.18')" },
          { label: "Ambient Operating Temperature", value: "0°C to 70°C (32°F to 158°F)" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 11,
        name: "10G Long-Range Direct Attach Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Long-range SFP+ direct attach cable with a 10 Gbps max data rate",

        specs: [
          "Supported data rates: 10 / 1 Gbps",
          "Compatible with SFP+ and SFP interfaces",
          "Cable length: 5 to 30 m"
        ],
        detailedSpecs: [
          { label: "Available Lengths", value: "5 / 10 / 20 / 30 m (16.4 / 32.8 / 65.6 / 98.4 ft)" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Supported Data Rate", value: "25 / 10Gbps" },
          { label: "Cable Features Wire", value: "OM3 Fiber" },
          { label: "Cable Features Wave Length", value: "850 nm" },
          { label: "Cable Features Connector Type", value: "SFP28 to SFP28" },
          { label: "Cable Features Jacket Color", value: "Aqua" },
          { label: "Cable Features Jacket Material", value: "PVC" },
          { label: "Cable Features Jacket Outer Diameter", value: "3.0 mm (0.12')" },
          { label: "Cable Features Bend Radius", value: "Min. 30mm (1.18')" },
          { label: "Ambient Operating Temperature", value: "0°C to 70°C (32°F to 158°F)" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 12,
        name: "100G Direct Attach Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "QSFP28 direct attach cable with a 100 Gbps max data rate",

        specs: [
          "Supported data rates: 100 / 40 Gbps",
          "Compatible with QSFP28 and QSFP+ interfaces",
          "Cable length: 0.5 to 3 m"
        ],
        detailedSpecs: [
          { label: "Available Lengths", value: "0.5, 1, 3 m (1.6, 3.3, 9.8 ft)" },
          { label: "Pack Options", value: "Single Unit 10-Pack (0.15 /1 m)" },
          { label: "Supported Data Rate", value: "100 / 40 Gbps" },
          { label: "Cable Features Wire", value: "Copper" },
          { label: "Cable Features Connector Type", value: "QSFP28 to QSFP28" },
          { label: "Cable Features Jacket Color", value: "Black" },
          { label: "Cable Features Jacket Material", value: "PVC" },
          { label: "Cable Features Jacket Outer Diameter", value: "0.5/ 1 m: 7.0 mm (0.28') 3 m: 8.9 mm (0.35')" },
          { label: "Cable Features Bend Radius", value: "0.5/ 1 m: Min. 37 mm (1.46') 3 m: Min. 47 mm (1.85')" },
          { label: "Ambient Operating Temperature", value: "0°C to 70°C (32°F to 158°F)" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 13,
        name: "100G PSM4 Single-Mode Optical Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "QSFP28 transceiver that supports 100G connections up to 2 km using single-mode fiber with an MPO-12 APC connector.",

        specs: [
          "Max data rate: 100 Gbps",
          "Compatible with QSFP28 and QSFP+ interfaces",
          "MPO-12 Type B APC connector",
          "Supports single-mode fiber connections up to 2 km*"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "QSFP" },
          { label: "Connector", value: "MPO-12 Type B UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "TX Wavelength", value: "1310 nm" },
          { label: "RX Wavelength", value: "1310 nm" },
          { label: "Supported Data Rate", value: "100 Gbps" },
          { label: "Supported Cable Distance", value: "2 km (1.2 mi)" },
          { label: "Max. Power Consumption", value: "3.5 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 14,
        name: "100G Long-Range Direct Attach Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Long-range QSFP28 direct attach cable with a 100 Gbps max data rate",

        specs: [
          "Supported data rates: 100 / 40 Gbps",
          "Compatible with QSFP28 and QSFP+ interfaces",
          "Cable length: 5 to 30 m"
        ],
        detailedSpecs: [
          { label: "Available Lengths", value: "5, 10, 20, 30 m (16.4, 32.8, 65.6, 98.4 ft)" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Supported Data Rate", value: "40 / 100 Gbps" },
          { label: "Cable Features Wire", value: "OM3 Fiber" },
          { label: "Cable Features Wave Length", value: "850 nm" },
          { label: "Cable Features Connector Type", value: "SFP28 to SFP28" },
          { label: "Cable Features Jacket Color", value: "Aqua" },
          { label: "Cable Features Jacket Material", value: "PVC" },
          { label: "Cable Features Jacket Outer Diameter", value: "3.0 mm (0.12')" },
          { label: "Cable Features Bend Radius", value: "Min. 30mm (1.18')" },
          { label: "Ambient Operating Temperature", value: "0°C to 70°C (32°F to 158°F)" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 15,
        name: "10G Multi-Mode Optical Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP+ transceiver that supports 10G connections up to 300 m using multi-mode fiber with a duplex LC UPC connector",

        specs: [
          "Max data rate: 10 Gbps",
          "Compatible with SFP+ and SFP interfaces",
          "Duplex LC UPC connector",
          "Supports multi-mode fiber connections up to 300 m*"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Multi-Mode Fiber" },
          { label: "TX Wavelength", value: "850 nm" },
          { label: "RX Wavelength", value: "850 nm" },
          { label: "Supported Data Rate", value: "1/10 Gbps" },
          { label: "Supported Cable Distance", value: "300 m (984 ft)" },
          { label: "Max. Power Consumption", value: "0.8 W" },
          { label: "Pack Options", value: "Single Unit 2-Pack 20-Pack" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 16,
        name: "10G CWDM Single-Mode Optical Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP+ transceiver for CWDM that supports 10G connections up to 20 km using single-mode fiber with a duplex LC UPC connector",

        specs: [
          "Max data rate: 10 Gbps",
          "Compatible with SFP+ and SFP interfaces",
          "Duplex LC UPC connector",
          "Operate in pairs of the same wavelength",
          "Supports single-mode fiber connections up to 20 km*"
        ],
        detailedSpecs: [
          { label: "Connector", value: "SFP+ to Duplex LC" },
          { label: "Supported Media", value: "Fiber" },
          { label: "Supported Cable Distance", value: "20 km (65,617 ft)" },
          { label: "Max. Power Consumption", value: "1.2 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "Ambient Operating Humidity", value: "0 to 85% noncondensing" },
          { label: "Operating Wavelength", value: "UACC-OM-SFP10-1270~1330: 1260 to 1620 nm UACC-OM-SFP10-1450~1590: 1340 to 1620 nm" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },

  //Produk Kedua dari Accessories, SF Liberation Day
  {
    id: "UACC-OM-MM-10G-D",
    name: "10G Multi-Mode Optical Module",
    category: "Accessories",
    subfilter: "SFP Liberation Day",
    image: "/images/camera.jpg",
    shortDescription:
      "SFP+ transceiver that supports 10G connections up to 300 m using multi-mode fiber with a duplex LC UPC connector.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OM-MM-10G-D",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max data rate: 10 Gbps",
      "Compatible with SFP+ and SFP interfaces",
      "Duplex LC UPC connector",
      "Supports multi-mode fiber connections up to 300 m*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Multi-Mode Fiber" },
          { label: "TX Wavelength", value: "850 nm" },
          { label: "RX Wavelength", value: "850 nm" },
          { label: "Supported Data Rate", value: "1/10 Gbps" },
          { label: "Supported Cable Distance", value: "300 m (984 ft)" },
          { label: "Max. Power Consumption", value: "0.8 W" },
          { label: "Pack Options", value: "Single Unit 2-Pack 20-Pack" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ]
      },
    ],
  },

  //Produk Ketiga dari Accessories, SF Liberation Day
  // {
  //   id: "UACC-OM-MM-10G-D-2",
  //   name: "10G Multi-Mode Optical Module",
  //   category: "Accessories",
  //   subfilter: "SFP Liberation Day",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "SFP+ transceiver that supports 10G connections up to 300 m using multi-mode fiber with a duplex LC UPC connector.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-OM-MM-10G-D-2",

  //   // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
  //   images: [
  //     "/images/camera.jpg",
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
  //   overviewImages: [
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Bullet points untuk deskripsi produk
  //   bulletPoints: [
  //     "Max data rate: 10 Gbps",
  //     "Compatible with SFP+ and SFP interfaces",
  //     "Duplex LC UPC connector",
  //     "Supports multi-mode fiber connections up to 300 m*"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Form Factor", value: "SFP" },
  //         { label: "Connector", value: "Duplex LC UPC" },
  //         { label: "Supported Media", value: "Multi-Mode Fiber" },
  //         { label: "TX Wavelength", value: "850 nm" },
  //         { label: "RX Wavelength", value: "850 nm" },
  //         { label: "Supported Data Rate", value: "1/10 Gbps" },
  //         { label: "Supported Cable Distance", value: "300 m (984 ft)" },
  //         { label: "Max. Power Consumption", value: "0.8 W" },
  //         { label: "Pack Options", value: "Single Unit 2-Pack 20-Pack" },
  //         { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
  //         { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
  //       ]
  //     },
  //   ],
  // },

  //Produk Keempat dari Accessories, SF Liberation Day
  // {
  //   id: "UACC-OM-MM-10G-D-20",
  //   name: "10G Multi-Mode Optical Module",
  //   category: "Accessories",
  //   subfilter: "SFP Liberation Day",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "SFP+ transceiver that supports 10G connections up to 300 m using multi-mode fiber with a duplex LC UPC connector.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-OM-MM-10G-D-20",

  //   // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
  //   images: [
  //     "/images/camera.jpg",
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
  //   overviewImages: [
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Bullet points untuk deskripsi produk
  //   bulletPoints: [
  //     "Max data rate: 10 Gbps",
  //     "Compatible with SFP+ and SFP interfaces",
  //     "Duplex LC UPC connector",
  //     "Supports multi-mode fiber connections up to 300 m*"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Form Factor", value: "SFP" },
  //         { label: "Connector", value: "Duplex LC UPC" },
  //         { label: "Supported Media", value: "Multi-Mode Fiber" },
  //         { label: "TX Wavelength", value: "850 nm" },
  //         { label: "RX Wavelength", value: "850 nm" },
  //         { label: "Supported Data Rate", value: "1/10 Gbps" },
  //         { label: "Supported Cable Distance", value: "300 m (984 ft)" },
  //         { label: "Max. Power Consumption", value: "0.8 W" },
  //         { label: "Pack Options", value: "Single Unit 2-Pack 20-Pack" },
  //         { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
  //         { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
  //       ]
  //     },
  //   ],
  // },

  //Produk Kelima dari Accessories, SF Liberation Day
  // {
  //   id: "UACC-OM-MM-1G-D-20",
  //   name: "1G Multi-Mode Optical Module",
  //   category: "Accessories",
  //   subfilter: "SFP Liberation Day",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "SFP transceiver that supports 1G connections up to 550 m using multi-mode fiber with a duplex LC UPC connector.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-OM-MM-1G-D-20",

  //   // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
  //   images: [
  //     "/images/camera.jpg",
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
  //   overviewImages: [
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Bullet points untuk deskripsi produk
  //   bulletPoints: [
  //     "Max data rate: 1 Gbps",
  //     "Compatible with SFP interfaces",
  //     "Duplex LC UPC connector",
  //     "Supports multi-mode fiber connections up to 550 m*"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Form Factor", value: "SFP" },
  //         { label: "Connector", value: "Duplex LC UPC" },
  //         { label: "Supported Media", value: "Multi-Mode Fiber" },
  //         { label: "TX Wavelength", value: "850 nm" },
  //         { label: "RX Wavelength", value: "850 nm" },
  //         { label: "Supported Data Rate", value: "1 Gbps" },
  //         { label: "Supported Cable Distance", value: "550 m (1,804 ft)" },
  //         { label: "Max. Power Consumption", value: "0.66 W" },
  //         { label: "Pack Options", value: "Single Unit 2-Pack 20-Pack" },
  //         { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
  //         { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
  //       ]
  //     },
  //   ],
  // },

  //Produk Keenam dari Accessories, SF Liberation Day
  {
    id: "UACC-OM-MM-1G-D-2",
    name: "1G Multi-Mode Optical Module",
    category: "Accessories",
    subfilter: "SFP Liberation Day",
    image: "/images/camera.jpg",
    shortDescription:
      "SFP transceiver that supports 1G connections up to 550 m using multi-mode fiber with a duplex LC UPC connector.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OM-MM-1G-D-2",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max data rate: 1 Gbps",
      "Compatible with SFP interfaces",
      "Duplex LC UPC connector",
      "Supports multi-mode fiber connections up to 550 m*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Multi-Mode Fiber" },
          { label: "TX Wavelength", value: "850 nm" },
          { label: "RX Wavelength", value: "850 nm" },
          { label: "Supported Data Rate", value: "1 Gbps" },
          { label: "Supported Cable Distance", value: "550 m (1,804 ft)" },
          { label: "Max. Power Consumption", value: "0.66 W" },
          { label: "Pack Options", value: "Single Unit 2-Pack 20-Pack" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ]
      },
    ],
  },

  //Produk Ketujuh dari Accessories, SF Liberation Day
  // {
  //   id: "UACC-OM-MM-1G-D-20",
  //   name: "1G Multi-Mode Optical Module",
  //   category: "Accessories",
  //   subfilter: "SFP Liberation Day",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "SFP transceiver that supports 1G connections up to 550 m using multi-mode fiber with a duplex LC UPC connector.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-OM-MM-1G-D-20",

  //   // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
  //   images: [
  //     "/images/camera.jpg",
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
  //   overviewImages: [
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Bullet points untuk deskripsi produk
  //   bulletPoints: [
  //     "Max data rate: 1 Gbps",
  //     "Compatible with SFP interfaces",
  //     "Duplex LC UPC connector",
  //     "Supports multi-mode fiber connections up to 550 m*"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Form Factor", value: "SFP" },
  //         { label: "Connector", value: "Duplex LC UPC" },
  //         { label: "Supported Media", value: "Multi-Mode Fiber" },
  //         { label: "TX Wavelength", value: "850 nm" },
  //         { label: "RX Wavelength", value: "850 nm" },
  //         { label: "Supported Data Rate", value: "1 Gbps" },
  //         { label: "Supported Cable Distance", value: "550 m (1,804 ft)" },
  //         { label: "Max. Power Consumption", value: "0.66 W" },
  //         { label: "Pack Options", value: "Single Unit 2-Pack 20-Pack" },
  //         { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
  //         { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
  //       ]
  //     },
  //   ],
  // },

  //Produk Kedelapan dari Accessories, SF Liberation Day
  {
    id: "UACC-OM-SFP28-SR",
    name: "25G Multi-Mode Optical Module",
    category: "Accessories",
    subfilter: "SFP Liberation Day",
    image: "/images/camera.jpg",
    shortDescription:
      "SFP28 transceiver that supports 25G connections up to 100 m using multi-mode fiber with a duplex LC UPC connector.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OM-SFP28-SR",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max data rate: 25 Gbps",
      "Compatible with SFP28, SFP+, and SFP interfaces",
      "Duplex LC UPC connector",
      "Supports multi-mode fiber connections up to 100 m*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Multi-Mode Fiber" },
          { label: "TX Wavelength", value: "850 nm" },
          { label: "RX Wavelength", value: "850 nm" },
          { label: "Supported Data Rate", value: "1/10/25 Gbps" },
          { label: "Supported Cable Distance", value: "100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "0.8 W" },
          { label: "Pack Options", value: "Single Unit 2-Pack 20-Pack" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ]
      },
    ],
  },

  //Produk Kesembilan dari Accessories, SF Liberation Day
  {
    id: "UACC-OM-QSFP28-SR4",
    name: "100G SR4 Multi-Mode Optical Module",
    category: "Accessories",
    subfilter: "SFP Liberation Day",
    image: "/images/camera.jpg",
    shortDescription:
      "QSFP28 transceiver that supports 100G connections up to 100 m using multi-mode fiber with an MPO-12 Type B UPC connector.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OM-QSFP28-SR4",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max data rate: 100 Gbps",
      "Compatible with QSFP28 and QSFP+ interfaces",
      "MPO-12 Type B UPC connector",
      "Supports multi-mode fiber connections up to 100 m*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Form Factor", value: "QSFP" },
          { label: "Connector", value: "MPO-12 Type B UPC" },
          { label: "Supported Media", value: "Multi-Mode Fiber" },
          { label: "TX Wavelength", value: "850 nm" },
          { label: "RX Wavelength", value: "850 nm" },
          { label: "Supported Data Rate", value: "40/100 Gbps" },
          { label: "Supported Cable Distance", value: "100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "2.5 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ]
      },
    ],
  },

  //Produk Kesepuluh dari Accessories, SF Liberation Day
  {
    id: "UACC-OM-QSFP28-PSM4",
    name: "100G PSM4 Single-Mode Optical Module",
    category: "Accessories",
    subfilter: "SFP Liberation Day",
    image: "/images/camera.jpg",
    shortDescription:
      "QSFP28 transceiver that supports 100G connections up to 2 km using single-mode fiber with an MPO-12 APC connector.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OM-QSFP28-PSM4",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max data rate: 100 Gbps",
      "Compatible with QSFP28 and QSFP+ interfaces",
      "MPO-12 Type B APC connector",
      "Supports single-mode fiber connections up to 2 km*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Form Factor", value: "QSFP" },
          { label: "Connector", value: "MPO-12 Type B UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "TX Wavelength", value: "1310 nm" },
          { label: "RX Wavelength", value: "1310 nm" },
          { label: "Supported Data Rate", value: "100 Gbps" },
          { label: "Supported Cable Distance", value: "2 km (1.2 mi)" },
          { label: "Max. Power Consumption", value: "3.5 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ]
      },
    ],
  },

  //Produk Kesebelas dari Accessories, SF Liberation Day
  {
    id: "UACC-OM-QSFP28-LR4",
    name: "100G LR4 Single-Mode Optical Module",
    category: "Accessories",
    subfilter: "SFP Liberation Day",
    image: "/images/camera.jpg",
    shortDescription:
      "QSFP28 transceiver that supports 100G connections up to 10 km using single-mode fiber with a duplex LC UPC connector.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OM-QSFP28-LR4",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max data rate: 100 Gbps",
      "Compatible with QSFP28 and QSFP+ interfaces",
      "Duplex LC UPC connector",
      "Supports single-mode fiber connections up to 10 km*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Form Factor", value: "QSFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "TX Wavelength", value: "1295 / 1300 / 1304 / 1309 nm" },
          { label: "RX Wavelength", value: "1295 / 1300 / 1304 / 1309 nm nm" },
          { label: "Supported Data Rate", value: "100 Gbps" },
          { label: "Supported Cable Distance", value: "10 km (6.2 mi)" },
          { label: "Max. Power Consumption", value: "4 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ]
      },
    ],
  },

  //Produk Kedua Belas dari Accessories, SF Liberation Day
  {
    id: "UACC-OM-SM-10G-D-2",
    name: "10G Single-Mode Optical Module",
    category: "Accessories",
    subfilter: "SFP Liberation Day",
    image: "/images/camera.jpg",
    shortDescription:
      "SFP+ transceiver that supports 10G connections up to 10 km using single-mode fiber with a duplex LC UPC connector.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OM-SM-10G-D-2",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max data rate: 10 Gbps",
      "Compatible with SFP+ and SFP interfaces",
      "Duplex LC UPC connector",
      "Supports single-mode fiber connections up to 10 km*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "TX Wavelength", value: "1310 nm" },
          { label: "RX Wavelength", value: "1310 nm" },
          { label: "Supported Data Rate", value: "1/10 Gbps" },
          { label: "Supported Cable Distance", value: "10 km (6.2 mi)" },
          { label: "Max. Power Consumption", value: "1 W" },
          { label: "Pack Options", value: "2-Pack 20-Pack" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ]
      },
    ],
  },

  //Produk Ketiga Belas dari Accessories, SF Liberation Day
  // {
  //   id: "UACC-OM-SM-10G-D-20",
  //   name: "10G Single-Mode Optical Module",
  //   category: "Accessories",
  //   subfilter: "SFP Liberation Day",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "SFP+ transceiver that supports 10G connections up to 10 km using single-mode fiber with a duplex LC UPC connector.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-OM-SM-10G-D-20",

  //   // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
  //   images: [
  //     "/images/camera.jpg",
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
  //   overviewImages: [
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Bullet points untuk deskripsi produk
  //   bulletPoints: [
  //     "Max data rate: 10 Gbps",
  //     "Compatible with SFP+ and SFP interfaces",
  //     "Duplex LC UPC connector",
  //     "Supports single-mode fiber connections up to 10 km*"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Form Factor", value: "SFP" },
  //         { label: "Connector", value: "Duplex LC UPC" },
  //         { label: "Supported Media", value: "Single-Mode Fiber" },
  //         { label: "TX Wavelength", value: "1310 nm" },
  //         { label: "RX Wavelength", value: "1310 nm" },
  //         { label: "Supported Data Rate", value: "1/10 Gbps" },
  //         { label: "Supported Cable Distance", value: "10 km (6.2 mi)" },
  //         { label: "Max. Power Consumption", value: "1 W" },
  //         { label: "Pack Options", value: "2-Pack 20-Pack" },
  //         { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
  //         { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
  //       ]
  //     },
  //   ],
  // },

  //Produk Keempat Belas dari Accessories, SF Liberation Day
  {
    id: "UACC-OM-SM-1G-S-2",
    name: "1G Bidirectional Single-Mode Optical Module",
    category: "Accessories",
    subfilter: "SFP Liberation Day",
    image: "/images/camera.jpg",
    shortDescription:
      "SFP transceiver that supports 1G connections up to 3 km using single-mode fiber with a simplex LC UPC connector.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OM-SM-1G-S-2",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max data rate: 1 Gbps",
      "Compatible with SFP interfaces",
      "Simplex LC UPC connector",
      "Supports single-mode fiber connections up to 3 km*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Simplex LC UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "BiDi", value: "✓" },
          { label: "TX Wavelength", value: "1310 / 1550 nm nm" },
          { label: "RX Wavelength", value: "1550 / 1310 nm" },
          { label: "Supported Data Rate", value: "1 Gbps" },
          { label: "Supported Cable Distance", value: "3 km (1.9 mi)" },
          { label: "Max. Power Consumption", value: "0.66 W" },
          { label: "Pack Options", value: "2-Pack 20-Pack" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ]
      },
    ],
  },

  //Produk Kelima Belas dari Accessories, SF Liberation Day
  // {
  //   id: "UACC-OM-SM-1G-S-20",
  //   name: "1G Bidirectional Single-Mode Optical Module",
  //   category: "Accessories",
  //   subfilter: "SFP Liberation Day",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "SFP transceiver that supports 1G connections up to 3 km using single-mode fiber with a simplex LC UPC connector.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-OM-SM-1G-S-20",

  //   // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
  //   images: [
  //     "/images/camera.jpg",
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
  //   overviewImages: [
  //     "/images/banners/dcs-overview-1.png",
  //     "/images/banners/dcs-overview-2.png"
  //   ],

  //   // Bullet points untuk deskripsi produk
  //   bulletPoints: [
  //     "Max data rate: 1 Gbps",
  //     "Compatible with SFP interfaces",
  //     "Simplex LC UPC connector",
  //     "Supports single-mode fiber connections up to 3 km*"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Form Factor", value: "SFP" },
  //         { label: "Connector", value: "Simplex LC UPC" },
  //         { label: "Supported Media", value: "Single-Mode Fiber" },
  //         { label: "BiDi", value: "✓" },
  //         { label: "TX Wavelength", value: "1310 / 1550 nm nm" },
  //         { label: "RX Wavelength", value: "1550 / 1310 nm" },
  //         { label: "Supported Data Rate", value: "1 Gbps" },
  //         { label: "Supported Cable Distance", value: "3 km (1.9 mi)" },
  //         { label: "Max. Power Consumption", value: "0.66 W" },
  //         { label: "Pack Options", value: "2-Pack 20-Pack" },
  //         { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
  //         { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
  //       ]
  //     },
  //   ],
  // },

  //Produk Keenam Belas dari Accessories, SF Liberation Day
  {
    id: "UACC-OM-SFP28-LR",
    name: "25G Single-Mode Optical Module",
    category: "Accessories",
    subfilter: "SFP Liberation Day",
    image: "/images/camera.jpg",
    shortDescription:
      "SFP28 transceiver that supports 25G connections up to 10 km using single-mode fiber with a duplex LC UPC connector.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-OM-SFP28-LR",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max data rate: 25 Gbps",
      "Compatible with SFP28, SFP+, and SFP interfaces",
      "Duplex LC UPC connector",
      "Supports single-mode fiber connections up to 10 km*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "TX Wavelength", value: "1310 nm" },
          { label: "RX Wavelength", value: "1310 nm" },
          { label: "Supported Data Rate", value: "1/10/25 Gbps" },
          { label: "Supported Cable Distance", value: "10 km (6.2 mi)" },
          { label: "Max. Power Consumption", value: "1.3 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING 'CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014 Do not look into the ends of the fiber optic cable or SFP module while converters are powered.'", value: "" }
        ]
      },
    ],
  },

  //Produk Pertama dari Accessories, SF Storage
  {
    id: "UACC-HDD-E-24TB",
    name: "Enterprise 3.5' HDD, 24 TB",
    category: "Accessories",
    subfilter: "Storage",
    image: "/images/camera.jpg",
    shortDescription:
      "Enterprise-grade 3.5' SATA hard drive ideal for storage-intensive UniFi camera security and NAS systems.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-HDD-E-24TB",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Workload rating: 550 TB/year",
      "Mean time between failure (MTBF): 2.5 million hours"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "147 x 101.9 x 26.1 mm (5.75 x 4 x 1')" },
          { label: "Weight", value: "670 g (1.5 lb)" },
          { label: "Form Factor", value: "3.5-inch HDD" },
          { label: "Capacity", value: "24 TB" },
          { label: "Power Method", value: "5V/12V input" },
          { label: "Management Interface", value: "SATA 6 Gb/s" },
          { label: "Rotation Speed", value: "7200 RPM" },
          { label: "Workload Rating", value: "550 TB/year" },
          { label: "Mean Time Between Failure (MTBF)", value: "2,500,000 h" },
          { label: "Ambient Operating Temperature", value: "5 to 60° C (41 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" }
        ]
      },
    ],
  },

  //Produk Kedua dari Accessories, SF Storage
  {
    id: "UACC-HDD-E-16TB",
    name: "Enterprise 3.5' HDD, 16 TB",
    category: "Accessories",
    subfilter: "Storage",
    image: "/images/camera.jpg",
    shortDescription:
      "Enterprise-grade 3.5' SATA hard drive ideal for storage-intensive UniFi camera security and NAS systems.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-HDD-E-16TB",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Workload rating: 550 TB/year",
      "Mean time between failure (MTBF): 2.5 million hours"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "147 x 101.9 x 26.1 mm (5.75 x 4 x 1')" },
          { label: "Weight", value: "720 g (1.6 lb)" },
          { label: "Form Factor", value: "3.5-inch HDD" },
          { label: "Capacity", value: "16 TB" },
          { label: "Power Method", value: "5V/12V input" },
          { label: "Management Interface", value: "SATA 6 Gb/s" },
          { label: "Rotation Speed", value: "7200 RPM" },
          { label: "Workload Rating", value: "550 TB/year" },
          { label: "Mean Time Between Failure (MTBF)", value: "2,500,000 h" },
          { label: "Ambient Operating Temperature", value: "5 to 60° C (41 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" }
        ]
      },
    ],
  },

  //Produk Ketiga dari Accessories, SF Storage
  {
    id: "UACC-HDD-E-8TB",
    name: "Enterprise 3.5' HDD, 8 TB",
    category: "Accessories",
    subfilter: "Storage",
    image: "/images/camera.jpg",
    shortDescription:
      "Enterprise-grade 3.5' SATA hard drive ideal for storage-intensive UniFi camera security and NAS systems.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-HDD-E-8TB",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Workload rating: 550 TB/year",
      "Mean time between failure (MTBF): 2.5 million hours"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "147 x 101.9 x 26.1 mm (5.75 x 4 x 1')" },
          { label: "Weight", value: "720 g (1.6 lb)" },
          { label: "Form Factor", value: "3.5-inch HDD" },
          { label: "Capacity", value: "8 TB" },
          { label: "Power Method", value: "5V/12V input" },
          { label: "Management Interface", value: "SATA 6 Gb/s" },
          { label: "Rotation Speed", value: "7200 RPM" },
          { label: "Workload Rating", value: "550 TB/year" },
          { label: "Mean Time Between Failure (MTBF)", value: "2,000,000 h" },
          { label: "Ambient Operating Temperature", value: "5 to 60° C (41 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" }
        ]
      },
    ],
  },

  //Produk Keempat dari Accessories, SF Storage
  {
    id: "UACC-HDD-S-4TB",
    name: "Basic Capacity 3.5' HDD, 4 TB",
    category: "Accessories",
    subfilter: "Storage",
    image: "/images/camera.jpg",
    shortDescription:
      "3.5' SATA hard drive optimized for small-scale Protect camera security deployments and cloud gateway NVR storage.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-HDD-S-4TB",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Workload rating: 180 TB/year",
      "Mean time between failure (MTBF): 1 million hours"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "147 x 101.6 x 26.1 mm (5.75 x 4 x 1')" },
          { label: "Weight", value: "570 g (1.3 lb)" },
          { label: "Form Factor", value: "3.5-inch HDD" },
          { label: "Capacity", value: "4 TB" },
          { label: "Power Method", value: "5V/12V input" },
          { label: "Management Interface", value: "SATA 6 Gb/s" },
          { label: "Rotation Speed", value: "5400 RPM" },
          { label: "Workload Rating", value: "180 TB/year" },
          { label: "Mean Time Between Failure (MTBF)", value: "1,000,000 h" },
          { label: "Ambient Operating Temperature", value: "0 to 65° C (32 to 149° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" }
        ]
      },
    ],
  },

  //Produk kelima dari Accessories, SF Storage
  {
    id: "HDD-1TB",
    name: "Basic Capacity 3.5' HDD, 1 TB",
    category: "Accessories",
    subfilter: "Storage",
    image: "/images/camera.jpg",
    shortDescription:
      "3.5' SATA hard drive optimized for small-scale Protect camera security deployments and cloud gateway NVR storage.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "HDD-1TB",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Workload rating: 180 TB/year",
      "Mean time between failure (MTBF): 1 million hours"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "147 x 101.6 x 26.1 mm (5.75 x 4 x 1')" },
          { label: "Weight", value: "450 g (0.99 lb)" },
          { label: "Form Factor", value: "3.5-inch HDD" },
          { label: "Capacity", value: "1 TB" },
          { label: "Power Method", value: "5V/12V input" },
          { label: "Management Interface", value: "SATA 6 Gb/s" },
          { label: "Rotation Speed", value: "5400 RPM" },
          { label: "Workload Rating", value: "180 TB/year" },
          { label: "Mean Time Between Failure (MTBF)", value: "1,000,000 h" },
          { label: "Ambient Operating Temperature", value: "0 to 65° C (32 to 149° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" }
        ]
      },
    ],
  },

  //Produk keenam dari Accessories, SF Storage
  {
    id: "MSD-128GB",
    name: "microSD Card",
    category: "Accessories",
    subfilter: "Storage",
    image: "/images/camera.jpg",
    shortDescription:
      "A microSD card designed for ultra endurance, optimized for UniFi devices, providing local storage and edge recording capabilities.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "MSD-128GB",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Compact form factor, microSDXC™"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "15 x 11 x 1 mm (5.75 x 4 x 1')" },
          { label: "Form Factor", value: "microSDXC™" },
          { label: "Capacity", value: "128/256/512 GB/1 TB" },
          { label: "Power Method", value: "5V/12V input" },
          { label: "Management Interface", value: "SDA 6.0" },
          { label: "Speed Class", value: "Class 10, UHS-I (U1), V10" },
          { label: "Sequential Read Performance", value: "128 GB: 100 MB/s 256 GB: 100 MB/s 512 GB: 160 MB/s 1 TB: 160 MB/s" },
          { label: "Endurance (TBW)", value: "128 GB: 64 256 GB: 128 512 GB: 500 1 TB: 1,000" },
          { label: "Ambient Operating Temperature", value: "-25 to 85° C (-13 to 185° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },

  //Produk Ketujuh dari Accessories, SF Storage
  {
    id: "UACC-MSD-256GB",
    name: "microSD Card",
    category: "Accessories",
    subfilter: "Storage",
    image: "/images/camera.jpg",
    shortDescription:
      "A microSD card designed for ultra endurance, optimized for UniFi devices, providing local storage and edge recording capabilities.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-MSD-256GB",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Compact form factor, microSDXC™"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "15 x 11 x 1 mm (5.75 x 4 x 1')" },
          { label: "Form Factor", value: "microSDXC™" },
          { label: "Capacity", value: "128/256/512 GB/1 TB" },
          { label: "Power Method", value: "5V/12V input" },
          { label: "Management Interface", value: "SDA 6.0" },
          { label: "Speed Class", value: "Class 10, UHS-I (U1), V10" },
          { label: "Sequential Read Performance", value: "128 GB: 100 MB/s 256 GB: 100 MB/s 512 GB: 160 MB/s 1 TB: 160 MB/s" },
          { label: "Endurance (TBW)", value: "128 GB: 64 256 GB: 128 512 GB: 500 1 TB: 1,000" },
          { label: "Ambient Operating Temperature", value: "-25 to 85° C (-13 to 185° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },

  //Produk Ke Delapan dari Accessories, SF Storage
  {
    id: "UACC-MSD-512GB",
    name: "microSD Card",
    category: "Accessories",
    subfilter: "Storage",
    image: "/images/camera.jpg",
    shortDescription:
      "A microSD card designed for ultra endurance, optimized for UniFi devices, providing local storage and edge recording capabilities.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-MSD-512GB",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Compact form factor, microSDXC™"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "15 x 11 x 1 mm (5.75 x 4 x 1')" },
          { label: "Form Factor", value: "microSDXC™" },
          { label: "Capacity", value: "128/256/512 GB/1 TB" },
          { label: "Power Method", value: "5V/12V input" },
          { label: "Management Interface", value: "SDA 6.0" },
          { label: "Speed Class", value: "Class 10, UHS-I (U1), V10" },
          { label: "Sequential Read Performance", value: "128 GB: 100 MB/s 256 GB: 100 MB/s 512 GB: 160 MB/s 1 TB: 160 MB/s" },
          { label: "Endurance (TBW)", value: "128 GB: 64 256 GB: 128 512 GB: 500 1 TB: 1,000" },
          { label: "Ambient Operating Temperature", value: "-25 to 85° C (-13 to 185° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },

  //Produk Kesembilan dari Accessories, SF Storage
  {
    id: "UACC-MSD-1TB",
    name: "microSD Card",
    category: "Accessories",
    subfilter: "Storage",
    image: "/images/camera.jpg",
    shortDescription:
      "A microSD card designed for ultra endurance, optimized for UniFi devices, providing local storage and edge recording capabilities.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-MSD-1TB",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Compact form factor, microSDXC™"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "15 x 11 x 1 mm (5.75 x 4 x 1')" },
          { label: "Form Factor", value: "microSDXC™" },
          { label: "Capacity", value: "128/256/512 GB/1 TB" },
          { label: "Power Method", value: "5V/12V input" },
          { label: "Management Interface", value: "SDA 6.0" },
          { label: "Speed Class", value: "Class 10, UHS-I (U1), V10" },
          { label: "Sequential Read Performance", value: "128 GB: 100 MB/s 256 GB: 100 MB/s 512 GB: 160 MB/s 1 TB: 160 MB/s" },
          { label: "Endurance (TBW)", value: "128 GB: 64 256 GB: 128 512 GB: 500 1 TB: 1,000" },
          { label: "Ambient Operating Temperature", value: "-25 to 85° C (-13 to 185° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },

  //Produk Kesepuluh dari Accessories, SF Storage
  {
    id: "UACC-SSD-2.5-1TB",
    name: "2.5' SSD, 1 TB",
    category: "Accessories",
    subfilter: "Storage",
    image: "/images/camera.jpg",
    shortDescription:
      "2.5' SATA solid-state drive designed for local storage of CloudKey+.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-SSD-2.5-1TB",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Management Interface SATA 3, 6 Gb/s"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "100.1 x 69.9 x 7 mm (3.9 x 2.8 x 0.3')" },
          { label: "Weight", value: "45 g (1.6 oz)" },
          { label: "Form Factor", value: "2.5-inch SSD" },
          { label: "Capacity", value: "1 TB" },
          { label: "Management Interface", value: "SATA 3, 6 Gb/s" },
          { label: "Speed Class", value: "Read: 550 MB/s Write: 515 MB/s" },
          { label: "Mean Time Between Failure (MTBF)", value: "1,500,000 h" },
          { label: "Endurance (TBW)", value: "640 TBW" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 149° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 85% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, CE, UL, RCM, KC, BSMI" }
        ]
      },
    ],
  },

  //Produk Pertama dari Accessories, SF Rack Mount
  {
    id: "U-Rack-6U-TL",
    name: "Toolless Mini Rack",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Compact, stackable, and toolless 6U open-frame rack designed for UniFi rack-mount devices.*",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "U-Rack-6U-TL",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "6U-sized device rack",
      "Combine two Mini Racks into a 12U rack with a Stacking Kit",
      "Toolless assembly and device mounting",
      "Lockable casters"
    ],


    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "With handle and caster: 519 x 460 x 485 mm (20.43 x 18.11 x 19.09') Without handle and caster: 519 x 460 x 351 mm (20.43 x 18.11 x 13.82')" },
          { label: "Weight", value: "10.3 kg (22.7 lb)" },
          { label: "Max. Weight Capacity", value: "Single Toolless Mini Rack Static: 80 kg (176 lb) Rolling: 45 kg (99 lb) Double Toolless Mini Racks with Stacking Kit Static: 70 kg (154 lb) Rolling: 35 kg (77 lb)" },
          { label: "Enclosure Material ", value: "Frame/Bracket: SPCC steel Handle: Stainless steel" },
          { label: "Color", value: "Silver" },
          { label: "Treatment", value: "Liquid Coating" },
          { label: "Pack Option", value: "(1) Flat pack box" },
          { label: "Rack Features U Height", value: "6U" },
          { label: "Rack Features Rack Type", value: "Open Frame" },
          { label: "Rack Features Mounting", value: "Floor Stand" },
          { label: "Rack Features Lockable Casters", value: "✓" },
          { label: "Incompatible Devices", value: "UniFi Switch (Gen1), US-24-250W US-24-500W US-48-500W US-48-750W USG USG-Pro-4 EdgeSwitch ES-24-250W ES-24-500W ES-48-500W ES-48-750W EdgeRouter ER-8 Others CKG2-RM ER-RMKIT UACC-Pro-Max-16-RM" },
          { label: "NDA Compliant", value: "✓" },
        ]
      },
    ],
  },

  //Produk Kedua dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-Shelf-TL",
    name: "Toolless Mini Rack Shelf",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Fixed shelf accessory for installing non-rack-mountable devices in the toolless mini rack.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-Shelf-TL",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Enclosure Material Cold rolled carbon steel (SPCC)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "453.8 x 460 x 27.4 mm  (17.9 x 18.1 x 1.1')" },
          { label: "Weight", value: "2.8 kg (6.2 lb)" },
          { label: "Enclosure Material ", value: "Cold rolled carbon steel (SPCC)" },
          { label: "Color", value: "Silver" },
          { label: "Rack Features Max. Weight Capacity", value: "20 kg (44 lb)" },
        ]
      },
    ],
  },

  //Produk Ketiga dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-Shelf-TL-SD",
    name: "Toolless Mini Rack Shelf",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Sliding shelf accessory for installing non-rack-mountable devices in the toolless mini rack.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-Shelf-TL-SD",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Rack Features Max. Weight Capacity 20 kg (44 lb)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "453.8 x 230 x 27.4 mm (17.9 x 9.1 x 1.1')" },
          { label: "Weight", value: "1.75 kg (3.9 lb)" },
          { label: "Enclosure Material ", value: "Cold rolled carbon steel (SPCC)" },
          { label: "Color", value: "Silver" },
          { label: "Rack Features Max. Weight Capacity", value: "20 kg (44 lb)" },
        ]
      },
    ],
  },

  //Produk Keempat dari Accessories, SF Rack Mount
  {
    id: "UACC-Keystone-Jack-C6",
    name: "Cat6 Keystone Jack, 12-Pack",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Toolless keystone for terminating a Cat6 Ethernet jack without the use of a punch-down or crimping tool.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Keystone-Jack-C6",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Easy snap-in installation on a blank patch panel",
      "(12) Keystone Jacks per pack"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "34.8 x 14.5 x 16.1 mm (1.4 x 0.6 x 0.6')" },
          { label: "Weight", value: "7.3 g (0.3 oz)" },
          { label: "Type ", value: "Category 6" },
          { label: "Standard", value: "TIA-568A and 568B wiring compatible" },
          { label: "Material", value: "Polycarbonate" },
          { label: "Mounting", value: "Flush Mount Installations" },
          { label: "Suggested Cable Gauge", value: "23-26AWG" },
          { label: "Pack Options", value: "12-Pack" }
        ]
      },
    ],
  },

  //Produk Kelima dari Accessories, SF Rack Mount
  {
    id: "UACC-Keystone-Coupler-C6",
    name: "Cat6 Keystone Jack, 12-Pack",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Pass-through Cat6 keystone coupler for connecting pre-terminated Ethernet cables seamlessly.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Keystone-Coupler-C6",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Easy snap-in installation on a blank patch panel",
      "(12) Keystone Couplers per pack"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "31.6 x 16 x 16.1 mm (1.2 x 0.6 x 0.6')" },
          { label: "Weight", value: "4.9 g (0.2 oz)" },
          { label: "Type ", value: "Category 6" },
          { label: "Material", value: "Polycarbonate" },
          { label: "Mounting", value: "Flush Mount Installations" },
          { label: "Pack Options", value: "12-Pack" }
        ]
      },
    ],
  },

  //Produk Keenam dari Accessories, SF Rack Mount
  {
    id: "UACC-Keystone-Jack-C6A",
    name: "Cat6A Keystone Jack, 12-Pack",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Toolless keystone for terminating a Cat6A Ethernet jack without the use of a punch-down or crimping tool",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Keystone-Jack-C6A",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Easy snap-in installation on a blank patch panel",
      "(12) Keystone Jacks per pack"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "37.8 x 14.5 x 16.1 mm (1.5 x 0.6 x 0.6')" },
          { label: "Weight", value: "22.5 g (0.8 oz)" },
          { label: "Type ", value: "Category 6A" },
          { label: "Standard", value: "TIA-568A and 568B wiring compatible" },
          { label: "Material", value: "Zinc Alloy" },
          { label: "Mounting", value: "Flush Mount Installations" },
          { label: "Suggested Cable Gauge", value: "23-26 AWG" },
          { label: "Pack Options", value: "12-Pack" }
        ]
      },
    ],
  },

  //Produk Ketujuh dari Accessories, SF Rack Mount
  {
    id: "UACC-Keystone-Coupler-C6A",
    name: "Cat6A Keystone Jack, 12-Pack",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Pass-through Cat6A keystone coupler for connecting pre-terminated Ethernet cables seamlessly.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Keystone-Coupler-C6A",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Easy snap-in installation on a blank patch panel",
      "(12) Keystone Coupler per pack"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "31.2 x 16 x 16 mm (1.2 x 0.6 x 0.6')" },
          { label: "Weight", value: "7.5 g (0.3 oz)" },
          { label: "Type ", value: "Category 6A" },
          { label: "Material", value: "Stainless Steel" },
          { label: "Mounting", value: "Flush Mount Installations" },
          { label: "Pack Options", value: "12-Pack" }
        ]
      },
    ],
  },

  //Produk Kedelapan dari Accessories, SF Rack Mount
  {
    id: "UACC-Keystone-Blank-Insert",
    name: "Keystone Blank Insert, 24-Pack",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "24-pack of snap-in inserts that cover unused ports on the UniFi 24-Port Blank Keystone Patch Panel while maintaining its aesthetic.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Keystone-Blank-Insert",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Easy snap-in installation",
      "Uniform aesthetic with 24-Port Blank Keystone Patch Panel",
      "(24) Keystone Blank Inserts per pack"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "16.3 x 14.6 x 18 mm (0.64 x 0.57 x 0.7')" },
          { label: "Weight", value: "1.8 g (0.06 oz)" },
          { label: "Material", value: "Flame retardant ABS" },
          { label: "Treatment", value: "Painting" },
          { label: "Pack Options", value: "24-Pack" }
        ]
      },
    ],
  },


  //Produk Kesembilan dari Accessories, SF Rack Mount
  {
    id: "UACC-Keystone-Blank-Insert-TH",
    name: "Keystone Blank Insert Pass-Through, 12-Pack",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Snap-in inserts designed to cover unused ports on a blank keystone patch panel while maintaining a clean and aesthetic appearance.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Keystone-Blank-Insert-TH ",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Easy snap-in installation",
      "Uniform aesthetic with 24-Port Blank Keystone Patch Panel",
      "Through-hole designed for cable pass-through and management flexibility",
      "(12) Keystone Blank Inserts per pack"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "6.3 x 14.6 x 18 mm (0.64 x 0.57 x 0.7')" },
          { label: "Weight", value: "1.8 g (0.06 oz)" },
          { label: "Material", value: "Flame retardant PC" },
          { label: "Treatment", value: "Painting" },
          { label: "Pack Options", value: "12-Pack" }
        ]
      },
    ],
  },

  //Produk Kesepuluh dari Accessories, SF Rack Mount
  {
    id: "UACC-RJ45-Cover",
    name: "RJ45 Dust Cover, 24-Pack",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "24-pack of protective inserts that keep dust and debris out of unused RJ45 ports.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-RJ45-Cover",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Easy installation and removal",
      "Keeps unused Ethernet ports safe from dust and debris",
      "Uniform aesthetic with UniFi rack-mount equipment",
      "(24) RJ45 Dust Covers per pack"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "15.8 x 13.8 x 10.6 mm (0.6 x 0.5 x 0.4')" },
          { label: "Weight", value: "0.6 g (0.02 oz)" },
          { label: "Material", value: "Polycarbonate" },
          { label: "Treatment", value: "Painting" },
          { label: "Pack Options", value: "24-Pack" }
        ]
      },
    ],
  },

  //Produk Kesebelas dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-PM-Kit",
    name: "Precision Rack Mount Kit, 20-Pack",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "1U snap-in inserts with two vertically aligned cage nuts designed to ensure uniform rack installations.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-PM-Kit",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Easy installation and removal",
      "Pair multiple inserts to mount larger devices",
      "(20) Precision Rack Mount inserts per kit"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "42.7 x 15.5 x 8.7 mm (1.7 x 0.6 x 0.34')" },
          { label: "Weight", value: "4 g (0.03 oz)" },
          { label: "Material", value: "Thermoplastic (PA66)" },
          { label: "Treatment", value: "Texture" },
          { label: "Rack Rail Thickness", value: "Up to 2.2 mm (0.08')" },
          { label: "Screw", value: "#10-32" },
          { label: "Strength", value: "SnapMount rack inserts have been tested and qualified with the following shear forces: 1U: Supports devices with a depth of up to 400 mm and a maximum weight of 10 kg. 2U: Supports devices with a depth of up to 325 mm and a maximum weight of 20 kg. It is recommended to support installed devices from the rear if depth exceeds 400 mm for 1U or 325 mm for 2U." },
          { label: "Pack Options", value: "20-Pack (for 10U installation)" }
        ]
      },
    ],
  },

  //Produk Kedua Belas dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-Ear-1U",
    name: "Rack Ear Kit",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Replacement rack ears for UniFi 1U or 2U rack-mount devices with included Precision Rack Mount inserts and screws.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-Ear-1U",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Material Metal ear: galvanized steel (SGCC) Plastic kit: thermoplastics (PA66)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "UACC-Rack-Ear-1U metal ear: 50 x 42.8 x 19.5 mm (2 x 1.7 x 0.8') UACC-Rack-Ear-2U metal ear: 87.4 x 42.8 x 19.5 mm (3.4 x 1.7 x 0.8') Plastic kit: 42.7 x 15.5 x 8.7 mm (1.7 x 0.6 x 0.3')" },
          { label: "Weight", value: "UACC-Rack-Ear-1U metal ear: 50 g (1.8 oz) UACC-Rack-Ear-2U metal ear: 105 g (3.7 oz) Plastic kit: 4 g (0.1 oz)" },
          { label: "Material", value: "Metal ear: galvanized steel (SGCC) Plastic kit: thermoplastics (PA66)" },
          { label: "Treatment", value: "Texture" },
          { label: "Screw", value: "#10-32, M4" }
        ]
      },
    ],
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  //Produk Ketiga Belas dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-Ear-2U",
    name: "Rack Ear Kit",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Replacement rack ears for UniFi 1U or 2U rack-mount devices with included Precision Rack Mount inserts and screws.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-Ear-2U",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Material Metal ear: galvanized steel (SGCC) Plastic kit: thermoplastics (PA66)"
    ],
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "UACC-Rack-Ear-1U metal ear: 50 x 42.8 x 19.5 mm (2 x 1.7 x 0.8') UACC-Rack-Ear-2U metal ear: 87.4 x 42.8 x 19.5 mm (3.4 x 1.7 x 0.8') Plastic kit: 42.7 x 15.5 x 8.7 mm (1.7 x 0.6 x 0.3')" },
          { label: "Weight", value: "UACC-Rack-Ear-1U metal ear: 50 g (1.8 oz) UACC-Rack-Ear-2U metal ear: 105 g (3.7 oz) Plastic kit: 4 g (0.1 oz)" },
          { label: "Material", value: "Metal ear: galvanized steel (SGCC) Plastic kit: thermoplastics (PA66)" },
          { label: "Treatment", value: "Texture" },
          { label: "Screw", value: "#10-32, M4" }
        ]
      },
    ],
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  //Produk Keempat Belas dari Accessories, SF Rack Mount
  {
    id: "CKG2-RM",
    name: "CloudKey Rack Mount",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Mount your CloudKey or CloudKey+ into a 19' rack.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "CKG2-RM",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Mounts into a 19' rack",
      "Front-panel ethernet port for a clean installation"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "481.5 x 43.7 x 47 mm (19 x 1.7 x 1.9')" },
          { label: "Weight", value: "600 g (1.3 lb)" },
          { label: "Enclosure Material", value: "PC, aluminum alloy, SGCC steel" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Power Method", value: "PoE, 5V DC, 1A USB-C 5V, Min. 1A" },
          { label: "Max. Power Consumption", value: "12.95W (PoE)" },
          { label: "Buttons", value: "(1) Reset (1) Power" },
          { label: "Ambient Operating Temperature", value: "0 to 35° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "20 to 80% noncondensing" },
          { label: "Certifications", value: "CE, FCC, IC" }
        ]
      },
    ],
  },

  //produk Kelima Belas dari Accessories, SF Rack Mount
  {
    id: "UACC-AI-Port-RM",
    name: "AI Port Rack Mount",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "1U rack-mount accessory that supports up to six AI Ports.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-AI-Port-RM",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Mounting Mini rack / rack",
      "Enclosure Material SGCC steel, polycarbonate"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 158.5 x 42.8 mm (17.4 x 6.2 x 1.7')" },
          { label: "Weight", value: "650 g (1.4 lb)" },
          { label: "Enclosure Material", value: "SGCC steel, polycarbonate" },
          { label: "Mounting", value: "Mini rack / rack" },
          { label: "Ambient Operating Temperature", value: "-20 to 40° C (-4 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "20 to 90% noncondensing" }
        ]
      },
    ],
  },

  //Produk Keenam Belas dari Accessories, SF Rack Mount
  {
    id: "UACC-UCG-Industrial-RM",
    name: "Cloud Gateway Industrial Rack Mount",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Rack mount for the Cloud Gateway Industrial.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-UCG-Industrial-RM",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Treatment Power coating, liquid coating"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Left hanger: 203.5 x 71 x 43.8 mm (8 x 2.8 x 1.7') Right hanger: 203.5 x 202.2 x 43.8 mm (8 x 8 x 1.7')" },
          { label: "U Weight", value: "1U" },
          { label: "Weight", value: "1.5 kg (3.3 lb)" },
          { label: "Enclosure Material", value: "Polycarbonate, galvanized steel" },
          { label: "Color", value: "Black" },
          { label: "Treatment", value: "Power coating, liquid coating" },
          { label: "Buttons", value: "(2) Release buttons" },
          { label: "Ambient Operating Temperature", value: "-30 to 50 °C (-22 to 122º F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" }
        ]
      },
    ],
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  //Produk Ketujuh Belas dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-Stacking-Kit",
    name: "Toolless Mini Rack Stacking Kit",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Easy-to-install accessory set that connects two Toolless Mini Racks to create a 12U network rack.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-Stacking-Kit",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [

      "Toolless assembly",
      "Easy installation"

    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Stacking kit: 500 x 68.2 x 21.7 mm (19.7 x 2.7 x 0.9') Stacking 2x Tooless Mini Racks (with handle and caster): 460 x 525.5 x 838 mm (18.1 x 20.7 x 33')" },
          { label: "Weight", value: "Stacking kit: 589 g (1.3 lb) Stacking 2x Tooless Mini Racks (with handle and caster): 21.9 kg (48.3 lb)" },
          { label: "Enclosure Material", value: "Cold rolled carbon steel (SPCC)" },
          { label: "Treatment", value: "Liquid painting" }
        ]
      },
    ],
  },

  //Produk Kedepalapan Belas dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-Panel-Blank-1U",
    name: "Rack Mount OCD Panels",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Standalone insert that can be easily installed into an existing network equipment rack to create a clean, uniform aesthetic.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-Panel-Blank-1U",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [

      "1U or 2U-sized standalone insert",
      "Uniform aesthetic with UI rack mount gears"

    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "UACC-Rack-Panel-Blank-1U Dimensions", value: "442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7')" },
          { label: "UACC-Rack-Panel-Blank-1U Weight", value: "250g (8.8 oz)" },
          { label: "UACC-Rack-Panel-Blank-1U Enclosure Material", value: "Cold-rolled carbon steel (SPCC)" },
          { label: "UACC-Rack-Panel-Blank-1U Treatment", value: "Painting" },

          { label: "UACC-Rack-Panel-Blank-2U Dimensions", value: "442.4 x 63.5 x 87.4 mm (17.4 x 2.5 x 3.4')" },
          { label: "UACC-Rack-Panel-Blank-2U Weight", value: "446 g (15.7 oz)" },
          { label: "UACC-Rack-Panel-Blank-2U Enclosure Material", value: "Cold-rolled carbon steel (SPCC)" },
          { label: "UACC-Rack-Panel-Blank-2U Treatment", value: "Painting" },

          { label: "UACC-Rack-Panel-Vented-1U Dimensions", value: "442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7')" },
          { label: "UACC-Rack-Panel-Vented-1U Weight", value: "420 g (14.8 oz)" },
          { label: "UACC-Rack-Panel-Vented-1U Enclosure Material", value: "Aluminum alloy, cold-rolled carbon steel (SPCC)" },
          { label: "UACC-Rack-Panel-Vented-1U Treatment", value: "Painting" },

          { label: "UACC-Rack-Panel-Vented-2U Dimensions", value: "442.4 x 63.5 x 87.4 mm (17.4 x 2.5 x 3.4')" },
          { label: "UACC-Rack-Panel-Vented-2U Weight", value: "627 g (22.1 oz)" },
          { label: "UACC-Rack-Panel-Vented-2U Enclosure Material", value: "Aluminum alloy, cold-rolled carbon steel (SPCC)" },
          { label: "UACC-Rack-Panel-Vented-2U Treatment", value: "Painting" },

          { label: "UACC-Rack-Panel-Brush-1U Dimensions", value: "Panel: 442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7') Opening: 400 x 24 mm (15.75 x 0.94')" },
          { label: "UACC-Rack-Panel-Brush-1U Weight", value: "420 g (14.8 oz)" },
          { label: "UACC-Rack-Panel-Brush-1U Enclosure Material", value: "Aluminum alloy, cold-rolled carbon steel (SPCC), polypropylene (PP)" },
          { label: "UACC-Rack-Panel-Brush-1U Treatment", value: "Painting" },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },

  //Produk Kesembilan Belas dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-Panel-Blank-2U",
    name: "Rack Mount OCD Panels",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Standalone insert that can be easily installed into an existing network equipment rack to create a clean, uniform aesthetic.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-Panel-Blank-2U",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [

      "1U or 2U-sized standalone insert",
      "Uniform aesthetic with UI rack mount gears"

    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "UACC-Rack-Panel-Blank-1U Dimensions", value: "442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7')" },
          { label: "UACC-Rack-Panel-Blank-1U Weight", value: "250g (8.8 oz)" },
          { label: "UACC-Rack-Panel-Blank-1U Enclosure Material", value: "Cold-rolled carbon steel (SPCC)" },
          { label: "UACC-Rack-Panel-Blank-1U Treatment", value: "Painting" },

          { label: "UACC-Rack-Panel-Blank-2U Dimensions", value: "442.4 x 63.5 x 87.4 mm (17.4 x 2.5 x 3.4')" },
          { label: "UACC-Rack-Panel-Blank-2U Weight", value: "446 g (15.7 oz)" },
          { label: "UACC-Rack-Panel-Blank-2U Enclosure Material", value: "Cold-rolled carbon steel (SPCC)" },
          { label: "UACC-Rack-Panel-Blank-2U Treatment", value: "Painting" },

          { label: "UACC-Rack-Panel-Vented-1U Dimensions", value: "442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7')" },
          { label: "UACC-Rack-Panel-Vented-1U Weight", value: "420 g (14.8 oz)" },
          { label: "UACC-Rack-Panel-Vented-1U Enclosure Material", value: "Aluminum alloy, cold-rolled carbon steel (SPCC)" },
          { label: "UACC-Rack-Panel-Vented-1U Treatment", value: "Painting" },

          { label: "UACC-Rack-Panel-Vented-2U Dimensions", value: "442.4 x 63.5 x 87.4 mm (17.4 x 2.5 x 3.4')" },
          { label: "UACC-Rack-Panel-Vented-2U Weight", value: "627 g (22.1 oz)" },
          { label: "UACC-Rack-Panel-Vented-2U Enclosure Material", value: "Aluminum alloy, cold-rolled carbon steel (SPCC)" },
          { label: "UACC-Rack-Panel-Vented-2U Treatment", value: "Painting" },

          { label: "UACC-Rack-Panel-Brush-1U Dimensions", value: "Panel: 442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7') Opening: 400 x 24 mm (15.75 x 0.94')" },
          { label: "UACC-Rack-Panel-Brush-1U Weight", value: "420 g (14.8 oz)" },
          { label: "UACC-Rack-Panel-Brush-1U Enclosure Material", value: "Aluminum alloy, cold-rolled carbon steel (SPCC), polypropylene (PP)" },
          { label: "UACC-Rack-Panel-Brush-1U Treatment", value: "Painting" },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },

  //Produk Kedua Puluh dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-Panel-Vented-1U",
    name: "Rack Mount OCD Panels",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Standalone insert that can be easily installed into an existing network equipment rack to create a clean, uniform aesthetic.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-Panel-Vented-1U",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [

      "1U or 2U-sized standalone insert",
      "Uniform aesthetic with UI rack mount gears"

    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "UACC-Rack-Panel-Blank-1U Dimensions", value: "442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7')" },
          { label: "UACC-Rack-Panel-Blank-1U Weight", value: "250g (8.8 oz)" },
          { label: "UACC-Rack-Panel-Blank-1U Enclosure Material", value: "Cold-rolled carbon steel (SPCC)" },
          { label: "UACC-Rack-Panel-Blank-1U Treatment", value: "Painting" },

          { label: "UACC-Rack-Panel-Blank-2U Dimensions", value: "442.4 x 63.5 x 87.4 mm (17.4 x 2.5 x 3.4')" },
          { label: "UACC-Rack-Panel-Blank-2U Weight", value: "446 g (15.7 oz)" },
          { label: "UACC-Rack-Panel-Blank-2U Enclosure Material", value: "Cold-rolled carbon steel (SPCC)" },
          { label: "UACC-Rack-Panel-Blank-2U Treatment", value: "Painting" },

          { label: "UACC-Rack-Panel-Vented-1U Dimensions", value: "442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7')" },
          { label: "UACC-Rack-Panel-Vented-1U Weight", value: "420 g (14.8 oz)" },
          { label: "UACC-Rack-Panel-Vented-1U Enclosure Material", value: "Aluminum alloy, cold-rolled carbon steel (SPCC)" },
          { label: "UACC-Rack-Panel-Vented-1U Treatment", value: "Painting" },

          { label: "UACC-Rack-Panel-Vented-2U Dimensions", value: "442.4 x 63.5 x 87.4 mm (17.4 x 2.5 x 3.4')" },
          { label: "UACC-Rack-Panel-Vented-2U Weight", value: "627 g (22.1 oz)" },
          { label: "UACC-Rack-Panel-Vented-2U Enclosure Material", value: "Aluminum alloy, cold-rolled carbon steel (SPCC)" },
          { label: "UACC-Rack-Panel-Vented-2U Treatment", value: "Painting" },

          { label: "UACC-Rack-Panel-Brush-1U Dimensions", value: "Panel: 442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7') Opening: 400 x 24 mm (15.75 x 0.94')" },
          { label: "UACC-Rack-Panel-Brush-1U Weight", value: "420 g (14.8 oz)" },
          { label: "UACC-Rack-Panel-Brush-1U Enclosure Material", value: "Aluminum alloy, cold-rolled carbon steel (SPCC), polypropylene (PP)" },
          { label: "UACC-Rack-Panel-Brush-1U Treatment", value: "Painting" },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },

  //Produk Kedua Puluh Satu dari Accessories SF Rack MOunt
  {
    id: "UACC-Rack-Panel-Vented-2U",
    name: "Rack Mount OCD Panels",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Standalone insert that can be easily installed into an existing network equipment rack to create a clean, uniform aesthetic.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-Panel-Vented-2U",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [

      "1U or 2U-sized standalone insert",
      "Uniform aesthetic with UI rack mount gears"

    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "UACC-Rack-Panel-Blank-1U Dimensions", value: "442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7')" },
          { label: "UACC-Rack-Panel-Blank-1U Weight", value: "250g (8.8 oz)" },
          { label: "UACC-Rack-Panel-Blank-1U Enclosure Material", value: "Cold-rolled carbon steel (SPCC)" },
          { label: "UACC-Rack-Panel-Blank-1U Treatment", value: "Painting" },

          { label: "UACC-Rack-Panel-Blank-2U Dimensions", value: "442.4 x 63.5 x 87.4 mm (17.4 x 2.5 x 3.4')" },
          { label: "UACC-Rack-Panel-Blank-2U Weight", value: "446 g (15.7 oz)" },
          { label: "UACC-Rack-Panel-Blank-2U Enclosure Material", value: "Cold-rolled carbon steel (SPCC)" },
          { label: "UACC-Rack-Panel-Blank-2U Treatment", value: "Painting" },

          { label: "UACC-Rack-Panel-Vented-1U Dimensions", value: "442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7')" },
          { label: "UACC-Rack-Panel-Vented-1U Weight", value: "420 g (14.8 oz)" },
          { label: "UACC-Rack-Panel-Vented-1U Enclosure Material", value: "Aluminum alloy, cold-rolled carbon steel (SPCC)" },
          { label: "UACC-Rack-Panel-Vented-1U Treatment", value: "Painting" },

          { label: "UACC-Rack-Panel-Vented-2U Dimensions", value: "442.4 x 63.5 x 87.4 mm (17.4 x 2.5 x 3.4')" },
          { label: "UACC-Rack-Panel-Vented-2U Weight", value: "627 g (22.1 oz)" },
          { label: "UACC-Rack-Panel-Vented-2U Enclosure Material", value: "Aluminum alloy, cold-rolled carbon steel (SPCC)" },
          { label: "UACC-Rack-Panel-Vented-2U Treatment", value: "Painting" },

          { label: "UACC-Rack-Panel-Brush-1U Dimensions", value: "Panel: 442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7') Opening: 400 x 24 mm (15.75 x 0.94')" },
          { label: "UACC-Rack-Panel-Brush-1U Weight", value: "420 g (14.8 oz)" },
          { label: "UACC-Rack-Panel-Brush-1U Enclosure Material", value: "Aluminum alloy, cold-rolled carbon steel (SPCC), polypropylene (PP)" },
          { label: "UACC-Rack-Panel-Brush-1U Treatment", value: "Painting" },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },

  //Produk Kedua Puluh Dua dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-Panel-Brush-1U",
    name: "Rack Mount OCD Panels",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Standalone insert that can be easily installed into an existing network equipment rack to create a clean, uniform aesthetic.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-Panel-Brush-1U",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [

      "1U or 2U-sized standalone insert",
      "Uniform aesthetic with UI rack mount gears"

    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "UACC-Rack-Panel-Blank-1U Dimensions", value: "442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7')" },
          { label: "UACC-Rack-Panel-Blank-1U Weight", value: "250g (8.8 oz)" },
          { label: "UACC-Rack-Panel-Blank-1U Enclosure Material", value: "Cold-rolled carbon steel (SPCC)" },
          { label: "UACC-Rack-Panel-Blank-1U Treatment", value: "Painting" },

          { label: "UACC-Rack-Panel-Blank-2U Dimensions", value: "442.4 x 63.5 x 87.4 mm (17.4 x 2.5 x 3.4')" },
          { label: "UACC-Rack-Panel-Blank-2U Weight", value: "446 g (15.7 oz)" },
          { label: "UACC-Rack-Panel-Blank-2U Enclosure Material", value: "Cold-rolled carbon steel (SPCC)" },
          { label: "UACC-Rack-Panel-Blank-2U Treatment", value: "Painting" },

          { label: "UACC-Rack-Panel-Vented-1U Dimensions", value: "442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7')" },
          { label: "UACC-Rack-Panel-Vented-1U Weight", value: "420 g (14.8 oz)" },
          { label: "UACC-Rack-Panel-Vented-1U Enclosure Material", value: "Aluminum alloy, cold-rolled carbon steel (SPCC)" },
          { label: "UACC-Rack-Panel-Vented-1U Treatment", value: "Painting" },

          { label: "UACC-Rack-Panel-Vented-2U Dimensions", value: "442.4 x 63.5 x 87.4 mm (17.4 x 2.5 x 3.4')" },
          { label: "UACC-Rack-Panel-Vented-2U Weight", value: "627 g (22.1 oz)" },
          { label: "UACC-Rack-Panel-Vented-2U Enclosure Material", value: "Aluminum alloy, cold-rolled carbon steel (SPCC)" },
          { label: "UACC-Rack-Panel-Vented-2U Treatment", value: "Painting" },

          { label: "UACC-Rack-Panel-Brush-1U Dimensions", value: "Panel: 442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7') Opening: 400 x 24 mm (15.75 x 0.94')" },
          { label: "UACC-Rack-Panel-Brush-1U Weight", value: "420 g (14.8 oz)" },
          { label: "UACC-Rack-Panel-Brush-1U Enclosure Material", value: "Aluminum alloy, cold-rolled carbon steel (SPCC), polypropylene (PP)" },
          { label: "UACC-Rack-Panel-Brush-1U Treatment", value: "Painting" },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },

  //Produk Kedua Puluh Tiga dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-Panel-Patch-Blank-24",
    name: "24-Port Blank Keystone Patch Panel",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Standalone insert that can be easily installed into an existing network equipment rack to create a clean, uniform aesthetic.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-Panel-Patch-Blank-24",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [

      "1U 24-port blank patch panel with cable management bar",
      "Ideal for keystone module installation",
      "Uniform aesthetic with UniFi rack-mount equipment"

    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Standalone insert: 442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7') Management bar: 433.8 x 71.5 x 17 mm (17.1 x 2.8 x 0.7')" },
          { label: "Weight", value: "Standalone insert: 260 g (9.17 oz) Management bar: 390 g (13.8 oz)" },
          { label: "Material", value: "Front panel housing: Cold rolled carbon steel (SPCC) Inner module: Polycarbonate Management bar: Cold rolled carbon steel (SPCC" },
          { label: "Treatment", value: "Painting" }
        ]
      },
    ],
  },

  //Produk Kedua Puluh Empat dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-42U-800-G",
    name: "42U Rack Cabinet",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Fully assembled floor rack with built-in fans, removable panels, and lockable casters, engineered for optimal airflow, heavy-duty stability, and easy equipment access.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-42U-800-G",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [

      "Rack Features Cabinet Interconnect ✓",
      "Rack Features Lockable Casters ✓"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Packaging: 740 x 965 x 2,223 mm  (29.1 x 38 x 87.5') Rack with caster: 600 x 800 x 2,050 mm  (23.6 x 31.5 x 80.7') Rack without caster: 600 x 800 x 1,966 mm (23.6 x 31.5 x 77.4')" },
          { label: "Weight", value: "Packaging: 118.6 kg (261.5 lb) Rack: 92.4 kg (203.7 lb)" },
          { label: "Enclosure Material ", value: "SPCC steel Door/side panels: 1.2 mm (0.05') Main body: 1 mm (0.04') Posts: 2 mm (0.08')" },
          { label: "Color", value: "White" },
          { label: "Treatment", value: "Powder Coating" },
          { label: "Rack Features U Height", value: "42U" },
          { label: "Rack Features Rack Type", value: "4 post, enclosed cabinet" },
          { label: "Rack Features Mounting", value: "Square" },
          { label: "Rack Features Adjustable Mounting Depth", value: "Default 607.2 mm (23.9') Max. 682.2 mm (26.9') Adjustable pitch 15 mm (0.6')" },
          { label: "Rack Features Max. Weight Capacity", value: "Static 800 kg (1764 lb) Rolling 320 kg (705 lb)" },
          { label: "Rack Features Front Door", value: "Tempered glass Default left-hand outswing, reversible" },
          { label: "Rack Features Rear Door", value: "Solid Default left-hand outswing, reversible" },
          { label: "Rack Features Side Panels", value: "(4) Solid, removable and lockable" },
          { label: "Rack Features Mounting", value: "Floor stand" },
          { label: "Rack Features Lockable Casters", value: "✓" },
          { label: "Rack Features Leveling Stands", value: "✓" },
          { label: "Rack Features Cabinet Interconnect", value: "✓" },
          { label: "Rack Features Floor Anchor", value: "✓" },
          { label: "Rack Features Fan Module", value: "✓" },
          { label: "Rack Features Grounding Lugs", value: "✓" },
          { label: "Rack Features Cable Entry Opening", value: "(2) Top: 335 x 52.5 mm (13.2 x 2.1') (2) Bottom: 335 x 52.5 mm (13.2 x 2.1')" },
          { label: "Rack Features Security", value: "(1) Front door lock (1) Rear door lock (8) Side panel locks (3) Keys" },
          { label: "Rack Features  Standard", value: "CE; EIA/ECA-310-E; RoHS" },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  //Produk Keduapuluh Lima dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-42U-800-P",
    name: "42U Rack Cabinet",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Fully assembled floor rack with built-in fans, removable panels, and lockable casters, engineered for optimal airflow, heavy-duty stability, and easy equipment access.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-42U-800-P",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Enclosure Material SPCC steel Door/side panels: 1.2 mm (0.05') Main body: 1 mm (0.04') Posts: 2 mm (0.08')",
      "Rack Features Max. Weight Capacity Static 800 kg (1764 lb) Rolling 320 kg (705 lb)"
    ],
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Packaging: 740 x 965 x 2,223 mm  (29.1 x 38 x 87.') Rack with caster: 600 x 800 x 2,050 mm  (23.6 x 31.5 x 80.7') Rack without caster: 600 x 800 x 1,966 mm (23.6 x 31.5 x 77.4')" },
          { label: "Weight", value: "Packaging: 110.4 kg (243.4 lb) Rack: 84.6 kg(186.5 lb)" },
          { label: "Enclosure Material ", value: "SPCC steel Door/side panels: 1.2 mm (0.05') Main body: 1 mm (0.04') Posts: 2 mm (0.08')" },
          { label: "Color", value: "White" },
          { label: "Treatment", value: "Powder Coating" },
          { label: "Rack Features U Height", value: "42U" },
          { label: "Rack Features Rack Type", value: "4 post, enclosed cabinet" },
          { label: "Rack Features Mounting", value: "Square" },
          { label: "Rack Features Adjustable Mounting Depth", value: "Default 607.2 mm (23.9') Max. 682.2 mm (26.9') Adjustable pitch 15 mm (0.6')" },
          { label: "Rack Features Max. Weight Capacity", value: "Static 800 kg (1764 lb) Rolling 320 kg (705 lb)" },
          { label: "Rack Features Front Door", value: "Perforated Default left-hand outswing, reversible" },
          { label: "Rack Features Rear Door", value: "Perforated Default left-hand outswing, reversible" },
          { label: "Rack Features Side Panels", value: "(4) Solid, removable and lockable" },
          { label: "Rack Features Mounting", value: "Floor stand" },
          { label: "Rack Features Lockable Casters", value: "✓" },
          { label: "Rack Features Leveling Stands", value: "✓" },
          { label: "Rack Features Cabinet Interconnect", value: "✓" },
          { label: "Rack Features Floor Anchor", value: "✓" },
          { label: "Rack Features Fan Module", value: "✓" },
          { label: "Rack Features Grounding Lugs", value: "✓" },
          { label: "Rack Features Cable Entry Opening", value: "(2) Top: 335 x 52.5 mm (13.2 x 2.1') (2) Bottom: 335 x 52.5 mm (13.2 x 2.1')" },
          { label: "Rack Features Security", value: "(1) Front door lock (1) Rear door lock (8) Side panel locks (3) Keys" },
          { label: "Rack Features  Standard", value: "CE; EIA/ECA-310-E; RoHS" },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  //Produk Kedua Puluh Tujuh dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-42U-1000-G",
    name: "42U Rack Cabinet",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Fully assembled floor rack with built-in fans, removable panels, and lockable casters, engineered for optimal airflow, heavy-duty stability, and easy equipment access.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-42U-1000-G",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Enclosure Material SPCC steel Door/side panels: 1.2 mm (0.05') Main body: 1 mm (0.04') Posts: 2 mm (0.08')",
      "Rack Features Max. Weight Capacity Static 800 kg (1764 lb) Rolling 320 kg (705 lb)"
    ],
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Packaging: 740 x 1,165 x 2,223 mm (29.1 x 45.9 x 87.5') Rack with caster: 600 x 1,000 x 2,050 mm (23.6 x 39.4 x 80.7') Rack without caster: 600 x 1,000 x 1,966 mm (23.6 x 39.4 x 77.4')" },
          { label: "Weight", value: "Packaging: 120.6 kg (265.9 lb) Rack: 92.4 kg (203.7 lb)" },
          { label: "Enclosure Material ", value: "SPCC steel Door/side panels: 1.2 mm (0.05') Main body: 1 mm (0.04') Posts: 2 mm (0.08')" },
          { label: "Color", value: "White" },
          { label: "Treatment", value: "Powder Coating" },
          { label: "Rack Features U Height", value: "42U" },
          { label: "Rack Features Rack Type", value: "4 post, enclosed cabinet" },
          { label: "Rack Features Mounting", value: "Square" },
          { label: "Rack Features Adjustable Mounting Depth", value: "Default 652.3 mm (25.7') Max. 877.3 mm (34.5') Adjustable pitch 15 mm (0.6')" },
          { label: "Rack Features Max. Weight Capacity", value: "Static 800 kg (1764 lb) Rolling 320 kg (705 lb)" },
          { label: "Rack Features Front Door", value: "Tempered glass Default left-hand outswing, reversible" },
          { label: "Rack Features Rear Door", value: "Solid Default left-hand outswing, reversible" },
          { label: "Rack Features Side Panels", value: "(4) Solid, removable and lockable" },
          { label: "Rack Features Mounting", value: "Floor stand" },
          { label: "Rack Features Lockable Casters", value: "✓" },
          { label: "Rack Features Leveling Stands", value: "✓" },
          { label: "Rack Features Cabinet Interconnect", value: "✓" },
          { label: "Rack Features Floor Anchor", value: "✓" },
          { label: "Rack Features Fan Module", value: "✓" },
          { label: "Rack Features Grounding Lugs", value: "✓" },
          { label: "Rack Features Cable Entry Opening", value: "(2) Top: 335 x 52.5 mm (13.2 x 2.1') (2) Bottom: 335 x 52.5 mm (13.2 x 2.1')" },
          { label: "Rack Features Security", value: "(1) Front door lock (1) Rear door lock (8) Side panel locks (3) Keys" },
          { label: "Rack Features  Standard", value: "CE; EIA/ECA-310-E; RoHS" },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  //Produk Kedua Puluh Delapan dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-42U-1000-P",
    name: "42U Rack Cabinet",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Fully assembled floor rack with built-in fans, removable panels, and lockable casters, engineered for optimal airflow, heavy-duty stability, and easy equipment access.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-42U-1000-P",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Enclosure Material SPCC steel Door/side panels: 1.2 mm (0.05') Main body: 1 mm (0.04') Posts: 2 mm (0.08')",
      "Rack Features Max. Weight Capacity Static 800 kg (1764 lb) Rolling 320 kg (705 lb)"
    ],
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Packaging: 740 x 1,165 x 2,223 mm (29.1 x 45.9 x 87.5') Rack with caster: 600 x 1,000 x 2,050 mm (23.6 x 39.4 x 80.7') Rack without caster: 600 x 1,000 x 1,966 mm (23.6 x 39.4 x 77.4')" },
          { label: "Weight", value: "Packaging: 112.4 kg (247.8 lb) Rack: 84.2 kg (185.6 lb)" },
          { label: "Enclosure Material ", value: "SPCC steel Door/side panels: 1.2 mm (0.05') Main body: 1 mm (0.04') Posts: 2 mm (0.08')" },
          { label: "Color", value: "White" },
          { label: "Treatment", value: "Powder Coating" },
          { label: "Rack Features U Height", value: "42U" },
          { label: "Rack Features Rack Type", value: "4 post, enclosed cabinet" },
          { label: "Rack Features Mounting", value: "Square" },
          { label: "Rack Features Adjustable Mounting Depth", value: "Default 652.3 mm (25.7') Max. 877.3 mm (34.5') Adjustable pitch 15 mm (0.6')" },
          { label: "Rack Features Max. Weight Capacity", value: "Static 800 kg (1764 lb) Rolling 320 kg (705 lb)" },
          { label: "Rack Features Front Door", value: "Perforated Default left-hand outswing, reversible" },
          { label: "Rack Features Rear Door", value: "Perforated Default left-hand outswing, reversible" },
          { label: "Rack Features Side Panels", value: "(4) Solid, removable and lockable" },
          { label: "Rack Features Mounting", value: "Floor stand" },
          { label: "Rack Features Lockable Casters", value: "✓" },
          { label: "Rack Features Leveling Stands", value: "✓" },
          { label: "Rack Features Cabinet Interconnect", value: "✓" },
          { label: "Rack Features Floor Anchor", value: "✓" },
          { label: "Rack Features Fan Module", value: "✓" },
          { label: "Rack Features Grounding Lugs", value: "✓" },
          { label: "Rack Features Cable Entry Opening", value: "(2) Top: 335 x 52.5 mm (13.2 x 2.1') (2) Bottom: 335 x 52.5 mm (13.2 x 2.1')" },
          { label: "Rack Features Security", value: "(1) Front door lock (1) Rear door lock (8) Side panel locks (3) Keys" },
          { label: "Rack Features  Standard", value: "CE; EIA/ECA-310-E; RoHS" },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  //Produk Kedua Puluh Sembilan dari accessories, SF Rack Mount
  {
    id: "UACC-Rack-42U",
    name: "42U Rack Cabinet",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Fully assembled floor rack with built-in fans, removable panels, and lockable casters, engineered for optimal airflow, heavy-duty stability, and easy equipment access.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-42U",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Enclosure Material SPCC steel Door/side panels: 1.2 mm (0.05') Main body: 1 mm (0.04') Posts: 2 mm (0.08')",
      "Rack Features Max. Weight Capacity Static 800 kg (1764 lb) Rolling 320 kg (705 lb)"
    ],
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Packaging: 850 x 1,200 x 2,320 mm  (33.5 x 47.2 x 91.3') Rack with caster: 600 x 1,000 x 2,135 mm  (23.6 x 39.8 x 84') Rack without caster: 600 x 1,000 x 2,000 mm  (23.6 x 39.8 x 78.7')" },
          { label: "Weight", value: "Packaging: 209 kg (460 lb) Rack: 164 kg  (361 lb)" },
          { label: "Enclosure Material ", value: "SPCC steel Doors/side panels; 1.2 mm (0.05') Main body/posts: 2 mm (0.08')" },
          { label: "Color", value: "White" },
          { label: "Treatment", value: "Powder Coating" },
          { label: "Rack Features U Height", value: "42U" },
          { label: "Rack Features Rack Type", value: "4 post, enclosed cabinet" },
          { label: "Rack Features Mounting", value: "Square" },
          { label: "Rack Features Adjustable Mounting Depth", value: "Default 658 mm (25.9') Max. 838 mm (33') Min. 138 mm (5.4')" },
          { label: "Rack Features Max. Weight Capacity", value: "Static 1,500 kg (3,307 lb) Rolling 1,000 kg (2,200 lb)" },
          { label: "Rack Features Front Door", value: "Tempered glass Default left-hand outswing, reversible" },
          { label: "Rack Features Rear Door", value: "Perforated Default left-hand outswing, reversible" },
          { label: "Rack Features Side Panels", value: "(2) Solid, removable" },
          { label: "Rack Features Mounting", value: "Floor stand" },
          { label: "Rack Features Lockable Casters", value: "✓" },
          { label: "Rack Features Leveling Stands", value: "✓" },
          { label: "Rack Features Cabinet Interconnect", value: "✓" },
          { label: "Rack Features Floor Anchor", value: "✓" },
          { label: "Rack Features Fan Module", value: "✓" },
          { label: "Rack Features Thermal Sensor Switch", value: "Sensor OFF (Switch Pop-Up) The fan module operates continuously when the power cable is connected. Sensor ON (Switch Drop-Down) The fan module activates automatically when the internal cabinet temperature exceeds 35°C (95°F)." },
          { label: "Rack Features Grounding Lugs", value: "✓" },
          { label: "Rack Features Cable Entry Opening", value: "Top: 320 x 55 mm (12.6 x 2.2') Bottom: 320 x 55 mm (12.6 x 2.2')" },
          { label: "Rack Features Security", value: "(1) Front door lock (1) Rear door lock (3) Keys" },
          { label: "Rack Features  Standard", value: "CE; EIA/ECA-310-E; RoHS" },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  //Produk Ketiga Puluh dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-12U-Wall-450-G",
    name: "12U Rack Cabinet",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Fully assembled wall-mount rack with built-in fans and removable panels, engineered for easy equipment access and space-efficient small-scale deployments.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-12U-Wall-450-G",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],
    bulletPoints: [
      "Enclosure Material SPCC steel Door/side panels: 0.8 mm (0.03') Main body: 0.8 mm (0.03') Posts: 2 mm (0.08')",
      "Rack Features Max. Weight Capacity Static 50 kg (110 lb)"
    ],
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Packaging: 580 x 675 x 735 mm (22.8 x 26.6 x 28.9') Rack: 550 x 450 x 635 mm (21.7 x 17.7 x 25')" },
          { label: "Weight", value: "Packaging: 23.2 kg (51.1 lb) Rack: 19 kg (41.9 lb)" },
          { label: "Enclosure Material ", value: "SPCC steel Door/side panels: 0.8 mm (0.03') Main body: 0.8 mm (0.03') Posts: 2 mm (0.08')" },
          { label: "Color", value: "White" },
          { label: "Treatment", value: "Powder Coating" },
          { label: "Rack Features U Height", value: "12U" },
          { label: "Rack Features Rack Type", value: "4 post, enclosed cabinet" },
          { label: "Rack Features Mounting", value: "Square" },
          { label: "Rack Features Adjustable Mounting Depth", value: "Default 283 mm (11.1') Max. 305 mm (12') Adjustable pitch 22 mm (0.09')" },
          { label: "Rack Features Max. Weight Capacity", value: "50 kg (110 lb)" },
          { label: "Rack Features Front Door", value: "Tempered glass Default left-hand outswing, reversible" },
          { label: "Rack Features Side Panels", value: "(2) Solid, removable and lockable" },
          { label: "Rack Features Mounting", value: "Wall Mount" },
          { label: "Rack Features Fan Module", value: "✓" },
          { label: "Rack Features Acoustic Noise", value: "≤ 50 dB(A) sound pressure level" },
          { label: "Rack Features Grounding Lugs", value: "✓" },
          { label: "Rack Features Cable Entry Opening", value: "(1) Rear wall: 350 x 100 mm (13.8 x 3.9') (1) Top: 336.5 x 52.5 mm (13.2 x 2.1') (1) Bottom: 336.5 x 52.5 mm (13.2 x 2.1')" },
          { label: "Rack Features Security", value: "(1) Front door lock (4) Side panel locks (2) Keys" },
          { label: "Rack Features  Standard", value: "CE; EIA/ECA-310-E; RoHS" },
          { label: "Supported Devices", value: "Compatible with Ubiquiti rack-mount devices up to 325 mm in depth. Note: 325 mm devices can be installed when the mounting depth is set to 305 mm (max), but DC power backup is not supported due to limited rear-side clearance." },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },

  //Produk Ketiga Puluh Satu dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-12U-Wall-450-P",
    name: "12U Rack Cabinet",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Fully assembled wall-mount rack with built-in fans and removable panels, engineered for easy equipment access and space-efficient small-scale deployments.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-12U-Wall-450-P",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],
    bulletPoints: [
      "Enclosure Material SPCC steel Door/side panels: 0.8 mm (0.03') Main body: 0.8 mm (0.03') Posts: 2 mm (0.08')",
      "Rack Features Max. Weight Capacity Static 50 kg (110 lb)"
    ],
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Packaging: 580 x 675 x 735 mm (22.8 x 26.6 x 28.9') Rack: 550 x 450 x 635 mm (21.7 x 17.7 x 25')" },
          { label: "Weight", value: "Packaging: 22 kg (48.5 lb) Rack: 17.8 kg (39.2 lb)" },
          { label: "Enclosure Material ", value: "SPCC steel Door/side panels: 0.8 mm (0.03') Main body: 0.8 mm (0.03') Posts: 2 mm (0.08')" },
          { label: "Color", value: "White" },
          { label: "Treatment", value: "Powder Coating" },
          { label: "Rack Features U Height", value: "12U" },
          { label: "Rack Features Rack Type", value: "4 post, enclosed cabinet" },
          { label: "Rack Features Mounting", value: "Square" },
          { label: "Rack Features Adjustable Mounting Depth", value: "Default 283 mm (11.1') Max. 305 mm (12') Adjustable pitch 22 mm (0.09')" },
          { label: "Rack Features Max. Weight Capacity", value: "50 kg (110 lb)" },
          { label: "Rack Features Front Door", value: "Perforated Default left-hand outswing, reversible" },
          { label: "Rack Features Side Panels", value: "(2) Solid, removable and lockable" },
          { label: "Rack Features Mounting", value: "Wall Mount" },
          { label: "Rack Features Fan Module", value: "✓" },
          { label: "Rack Features Acoustic Noise", value: "≤ 50 dB(A) sound pressure level" },
          { label: "Rack Features Grounding Lugs", value: "✓" },
          { label: "Rack Features Cable Entry Opening", value: "(1) Rear wall: 350 x 100 mm (13.8 x 3.9') (1) Top: 336.5 x 52.5 mm (13.2 x 2.1') (1) Bottom: 336.5 x 52.5 mm (13.2 x 2.1')" },
          { label: "Rack Features Security", value: "(1) Front door lock (4) Side panel locks (2) Keys" },
          { label: "Rack Features  Standard", value: "CE; EIA/ECA-310-E; RoHS" },
          { label: "Supported Devices", value: "Compatible with Ubiquiti rack-mount devices up to 325 mm in depth. Note: 325 mm devices can be installed when the mounting depth is set to 305 mm (max), but DC power backup is not supported due to limited rear-side clearance." },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },

  //Produk Ketiga Puluh Tiga dari Acceessories, SF Rack Mount
  {
    id: "UACC-Rack-12U-Wall-600-G",
    name: "12U Rack Cabinet",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Fully assembled wall-mount rack with built-in fans and removable panels, engineered for easy equipment access and space-efficient small-scale deployments.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-12U-Wall-600-G",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],
    bulletPoints: [
      "Enclosure Material SPCC steel Door/side panels: 0.8 mm (0.03') Main body: 0.8 mm (0.03') Posts: 2 mm (0.08')",
      "Rack Features Max. Weight Capacity Static 50 kg (110 lb)"
    ],
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Packaging: 740 x 730 x 735 mm (29.1 x 28.7 x 28.9') Rack: 598 x 600 x 639 mm (23.5 x 23.6 x 25.2')" },
          { label: "Weight", value: "Packaging: 33.6 kg (74.1 lb) Rack: 28.2 kg (62.2 lb)" },
          { label: "Enclosure Material ", value: "SPCC steel Door/side panels: 1.2 mm (0.05') Main body: 1.2 mm (0.05') Posts: 2 mm (0.08')" },
          { label: "Color", value: "White" },
          { label: "Treatment", value: "Powder Coating" },
          { label: "Rack Features U Height", value: "12U" },
          { label: "Rack Features Rack Type", value: "4 post, enclosed cabinet" },
          { label: "Rack Features Mounting", value: "Square" },
          { label: "Rack Features Adjustable Mounting Depth", value: "Default 448 mm (17.6') Max. 508 mm (20') Adjustable pitch 20 mm (0.08')" },
          { label: "Rack Features Max. Weight Capacity", value: "80 kg (176 lb)" },
          { label: "Rack Features Front Door", value: "Tempered glass Default left-hand outswing, reversible" },
          { label: "Rack Features Side Panels", value: "(2) Solid, removable and lockable" },
          { label: "Rack Features Mounting", value: "Wall Mount" },
          { label: "Rack Features Fan Module", value: "✓" },
          { label: "Rack Features Acoustic Noise", value: "≤ 50 dB(A) sound pressure level" },
          { label: "Rack Features Grounding Lugs", value: "✓" },
          { label: "Rack Features Cable Entry Opening", value: "(1) Rear wall: 350 x 100 mm (13.8 x 3.9') (1) Top: 336.5 x 52.5 mm (13.2 x 2.1') (1) Bottom: 336.5 x 52.5 mm (13.2 x 2.1')" },
          { label: "Rack Features Security", value: "(1) Front door lock (4) Side panel locks (2) Keys" },
          { label: "Rack Features  Standard", value: "CE; EIA/ECA-310-E; RoHS" },
          { label: "Supported Devices", value: "Compatible with Ubiquiti rack-mount devices up to 325 mm in depth. Note: 325 mm devices can be installed when the mounting depth is set to 305 mm (max), but DC power backup is not supported due to limited rear-side clearance." },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },

  //Produk Ketiga Puluh Empat dari Accessories< SF Rack Mount
  {
    id: "UACC-Rack-12U-Wall-600-P",
    name: "12U Rack Cabinet",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Fully assembled wall-mount rack with built-in fans and removable panels, engineered for easy equipment access and space-efficient small-scale deployments.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-12U-Wall-600-P",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],
    bulletPoints: [
      "Enclosure Material SPCC steel Door/side panels: 0.8 mm (0.03') Main body: 0.8 mm (0.03') Posts: 2 mm (0.08')",
      "Rack Features Max. Weight Capacity Static 50 kg (110 lb)"
    ],
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Packaging: 740 x 730 x 735 mm (29.1 x 28.7 x 28.9') Rack: 598 x 600 x 639 mm (23.5 x 23.6 x 25.2')" },
          { label: "Weight", value: "Packaging: 33.6 kg (74.1 lb) Rack: 28.2 kg (62.2 lb)" },
          { label: "Enclosure Material ", value: "SPCC steel Door/side panels: 1.2 mm (0.05') Main body: 1.2 mm (0.05') Posts: 2 mm (0.08')" },
          { label: "Color", value: "White" },
          { label: "Treatment", value: "Powder Coating" },
          { label: "Rack Features U Height", value: "12U" },
          { label: "Rack Features Rack Type", value: "4 post, enclosed cabinet" },
          { label: "Rack Features Mounting", value: "Square" },
          { label: "Rack Features Adjustable Mounting Depth", value: "Default 448 mm (17.6') Max. 508 mm (20') Adjustable pitch 20 mm (0.08')" },
          { label: "Rack Features Max. Weight Capacity", value: "80 kg (176 lb)" },
          { label: "Rack Features Front Door", value: "Perforated Default left-hand outswing, reversible" },
          { label: "Rack Features Side Panels", value: "(2) Solid, removable and lockable" },
          { label: "Rack Features Mounting", value: "Wall Mount" },
          { label: "Rack Features Fan Module", value: "✓" },
          { label: "Rack Features Acoustic Noise", value: "≤ 50 dB(A) sound pressure level" },
          { label: "Rack Features Grounding Lugs", value: "✓" },
          { label: "Rack Features Cable Entry Opening", value: "(1) Rear wall: 350 x 100 mm (13.8 x 3.9') (1) Top: 336.5 x 52.5 mm (13.2 x 2.1') (1) Bottom: 336.5 x 52.5 mm (13.2 x 2.1')" },
          { label: "Rack Features Security", value: "(1) Front door lock (4) Side panel locks (2) Keys" },
          { label: "Rack Features  Standard", value: "CE; EIA/ECA-310-E; RoHS" },
          { label: "Supported Devices", value: "Compatible with Ubiquiti rack-mount devices up to 325 mm in depth. Note: 325 mm devices can be installed when the mounting depth is set to 305 mm (max), but DC power backup is not supported due to limited rear-side clearance." },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },

  //Produk Ketiga Puluh Lima dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-12U-Wall-Slim",
    name: "12U Slim Rack Cabinet",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Fully assembled wall-mount rack with built-in fans and removable panels, engineered for easy equipment access and space-efficient small-scale deployments.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-12U-Wall-Slim",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],
    bulletPoints: [
      "Enclosure Material SPCC steel Door/side panels: 1.2 mm (0.05') Main body: 1.5 mm (0.06') Posts: 2 mm (0.08')",
      "Rack Features Max. Weight Capacity Static 100 kg (220 lb)"
    ],
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Packaging: 800 x 755 x 815 mm  (31.5 x 29.7 x 32.1') Rack: 600 x 560 x 650 mm  (23.6 x 22 x 25.6')" },
          { label: "Weight", value: "Packaging: 41 kg  (90.4 lb) Rack: 32 kg (71 lb)" },
          { label: "Enclosure Material ", value: "SPCC steel Door/side panels: 1.2 mm (0.05') Main body: 1.5 mm (0.06') Posts: 2 mm (0.08')" },
          { label: "Color", value: "White" },
          { label: "Treatment", value: "Powder Coating" },
          { label: "Rack Features U Height", value: "12U" },
          { label: "Rack Features Rack Type", value: "4 post, enclosed cabinet" },
          { label: "Rack Features Mounting", value: "Square" },
          { label: "Rack Features Adjustable Mounting Depth", value: "Default 446 mm (17.6') Max. 469 mm (18.5') Min. 78 mm (3.1')" },
          { label: "Rack Features Max. Weight Capacity", value: "100 kg (220 lb)" },
          { label: "Rack Features Front Door", value: "Tempered glass Default left-hand outswing, reversible" },
          { label: "Rack Features Rear Door", value: "Solid Swing-out" },
          { label: "Rack Features Side Panels", value: "(2) Solid, removable and lockable" },
          { label: "Rack Features Mounting", value: "Wall Mount" },
          { label: "Rack Features Fan Module", value: "✓" },
          { label: "Rack Features Thermal Sensor Switch", value: "Sensor OFF (Switch Pop-Up) The fan module operates continuously when the power cable is connected. Sensor ON (Switch Drop-Down) The fan module activates automatically when the internal cabinet temperature exceeds 35°C (95°F)." },
          { label: "Rack Features Grounding Lugs", value: "✓" },
          { label: "Rack Features Cable Entry Opening", value: "Rear wall: 300 x 60 mm (11.8 x 2.4') Bottom: 318 x 53.5 mm (12.5 x 2.1')" },
          { label: "Rack Features Security", value: "(1) Front door lock (2) Side panel locks (3) Keys" },
          { label: "Rack Features  Standard", value: "CE; EIA/ECA-310-E; RoHS" },
          { label: "Supported Devices", value: "Compatible with Ubiquiti rack-mount devices up to 325 mm in depth. Note: 325 mm devices can be installed when the mounting depth is set to 305 mm (max), but DC power backup is not supported due to limited rear-side clearance." },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },


  //Produk Ketiga Puluh Enam dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-12U-Wall-SW-G",
    name: "12U Rack Cabinet",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Fully assembled wall-mount rack with built-in fans and removable panels, engineered for easy equipment access and space-efficient small-scale deployments.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-12U-Wall-SW-G",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],
    bulletPoints: [
      "Enclosure Material SPCC steel Door/side panels: 1.2 mm (0.05') Main body: 1.2 mm (0.05') Posts: 2 mm (0.08')",
      "Rack Features Max. Weight Capacity Static 80 kg (176 lb)"
    ],
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Packaging: 725 x 840 x 735 mm (28.5 x 33.1 x 28.9') Rack: 600 x 703 x 639 mm (23.6 x 27.7 x 25.2')" },
          { label: "Weight", value: "Packaging: 35.3 kg (77.8 lb) Rack: 29.4 kg (64.8 lb)" },
          { label: "Enclosure Material ", value: "SPCC steel Door/side panels: 1.2 mm (0.05') Main body: 1.2 mm (0.05') Posts: 2 mm (0.08')" },
          { label: "Color", value: "White" },
          { label: "Treatment", value: "Powder Coating" },
          { label: "Rack Features U Height", value: "12U" },
          { label: "Rack Features Rack Type", value: "4 post, enclosed cabinet" },
          { label: "Rack Features Mounting", value: "Square" },
          { label: "Rack Features Adjustable Mounting Depth", value: "Default 434 mm (17.1') Max. 559 mm (22') Adjustable pitch 25 mm (1')" },
          { label: "Rack Features Max. Weight Capacity", value: "80 kg (176 lb)" },
          { label: "Rack Features Front Door", value: "Tempered glass Default left-hand outswing, reversible" },
          { label: "Rack Features Rear Door", value: "Solid Swing-out" },
          { label: "Rack Features Side Panels", value: "(2) Solid, removable and lockable" },
          { label: "Rack Features Mounting", value: "Wall Mount" },
          { label: "Rack Features Fan Module", value: "✓" },
          { label: "Rack Features Thermal Sensor Switch", value: "≤ 50 dB(A) sound pressure level" },
          { label: "Rack Features Grounding Lugs", value: "✓" },
          { label: "Rack Features Cable Entry Opening", value: "(1) Rear wall: 350 x 100 mm (13.8 x 3.9') (2) Top: 235 x 62 mm (9.3 x 2.4') (4) Top knockout: 35 mm (1.4') (1) Bottom: 235 x 62 mm (9.3 x 2.4') (4) Bottom knockout: 35 mm (1.4')" },
          { label: "Rack Features Security", value: "(1) Front door lock(1) Swing out door lock (4) Side panel locks (2) Keys" },
          { label: "Rack Features  Standard", value: "CE; EIA/ECA-310-E; RoHS" },
          { label: "Supported Devices", value: "Compatible with Ubiquiti rack-mount devices up to 325 mm in depth. Note: 325 mm devices can be installed when the mounting depth is set to 305 mm (max), but DC power backup is not supported due to limited rear-side clearance." },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },

  //Produk Ketiga Puluh Tujuh dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-12U-Wall-SW-P",
    name: "12U Rack Cabinet",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Fully assembled wall-mount rack with built-in fans and removable panels, engineered for easy equipment access and space-efficient small-scale deployments.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-12U-Wall-SW-P",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],
    bulletPoints: [
      "Enclosure Material SPCC steel Door/side panels: 1.2 mm (0.05') Main body: 1.2 mm (0.05') Posts: 2 mm (0.08')",
      "Rack Features Max. Weight Capacity Static 80 kg (176 lb)"
    ],
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Packaging: 725 x 840 x 735 mm (28.5 x 33.1 x 28.9') Rack: 600 x 703 x 639 mm (23.6 x 27.7 x 25.2')" },
          { label: "Weight", value: "Packaging: 35.3 kg (77.8 lb) Rack: 29.4 kg (64.8 lb)" },
          { label: "Enclosure Material ", value: "SPCC steel Door/side panels: 1.2 mm (0.05') Main body: 1.2 mm (0.05') Posts: 2 mm (0.08')" },
          { label: "Color", value: "White" },
          { label: "Treatment", value: "Powder Coating" },
          { label: "Rack Features U Height", value: "12U" },
          { label: "Rack Features Rack Type", value: "4 post, enclosed cabinet" },
          { label: "Rack Features Mounting", value: "Square" },
          { label: "Rack Features Adjustable Mounting Depth", value: "Default 434 mm (17.1') Max. 559 mm (22') Adjustable pitch 25 mm (1')" },
          { label: "Rack Features Max. Weight Capacity", value: "80 kg (176 lb)" },
          { label: "Rack Features Front Door", value: "Perforated Default left-hand outswing, reversible" },
          { label: "Rack Features Rear Door", value: "Solid Swing-out" },
          { label: "Rack Features Side Panels", value: "(2) Solid, removable and lockable" },
          { label: "Rack Features Mounting", value: "Wall Mount" },
          { label: "Rack Features Fan Module", value: "✓" },
          { label: "Rack Features Thermal Sensor Switch", value: "≤ 50 dB(A) sound pressure level" },
          { label: "Rack Features Grounding Lugs", value: "✓" },
          { label: "Rack Features Cable Entry Opening", value: "(1) Rear wall: 350 x 100 mm (13.8 x 3.9') (2) Top: 235 x 62 mm (9.3 x 2.4') (4) Top knockout: 35 mm (1.4') (1) Bottom: 235 x 62 mm (9.3 x 2.4') (4) Bottom knockout: 35 mm (1.4')" },
          { label: "Rack Features Security", value: "(1) Front door lock(1) Swing out door lock (4) Side panel locks (2) Keys" },
          { label: "Rack Features  Standard", value: "CE; EIA/ECA-310-E; RoHS" },
          { label: "Supported Devices", value: "Compatible with Ubiquiti rack-mount devices up to 325 mm in depth. Note: 325 mm devices can be installed when the mounting depth is set to 305 mm (max), but DC power backup is not supported due to limited rear-side clearance." },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },

  //Produk Ketiga Puluh Delapan dari Accessories, SF Rack Mount 
  {
    id: "UACC-Rack-12U-Wall-Slim",
    name: "12U Rack Cabinet",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Fully assembled, compact and wall-mount rack cabinet with glass front, dual fans, and removable side panels.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-12U-Wall",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],
    bulletPoints: [
      "Enclosure Material SPCC steel Door/side panels: 1.2 mm (0.05') Main body: 1.2 mm (0.05') Posts: 2 mm (0.08')",
      "Rack Features Max. Weight Capacity Static 80 kg (176 lb)"
    ],
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Packaging: 720 x 735 x 840 mm (28.3 x 28.9 x 33.1') Rack: 600 x 720 x 650 mm (23.6 x 28.3 x 25.6')" },
          { label: "Weight", value: "Packaging: 45.5 kg (103.3 lb) Rack: 38 kg (84 lb)" },
          { label: "Enclosure Material ", value: "SPCC steel Door/side panels: 1.2 mm (0.05') Main body: 1.5 mm (0.06') Posts: 2 mm (0.08')" },
          { label: "Color", value: "White" },
          { label: "Treatment", value: "Powder Coating" },
          { label: "Rack Features U Height", value: "12U" },
          { label: "Rack Features Rack Type", value: "4 post, enclosed cabinet" },
          { label: "Rack Features Mounting", value: "Square" },
          { label: "Rack Features Adjustable Mounting Depth", value: "Default 452 mm (17.8') Max. 532 mm (20.9') Min. 72 mm (2.8')" },
          { label: "Rack Features Max. Weight Capacity", value: "100 kg (220 lb)" },
          { label: "Rack Features Front Door", value: "Tempered glass Default left-hand outswing, reversible" },
          { label: "Rack Features Rear Door", value: "Solid Swing-out" },
          { label: "Rack Features Side Panels", value: "(2) Solid, removable and lockable" },
          { label: "Rack Features Mounting", value: "Wall Mount" },
          { label: "Rack Features Fan Module", value: "✓" },
          { label: "Rack Features Thermal Sensor Switch", value: "Sensor OFF (Switch Pop-Up) The fan module operates continuously when the power cable is connected. Sensor ON (Switch Drop-Down) The fan module activates automatically when the internal cabinet temperature exceeds 35°C (95°F)." },
          { label: "Rack Features Grounding Lugs", value: "✓" },
          { label: "Rack Features Cable Entry Opening", value: "Rear wall: 394 x 82 mm (15.5 x 3.2') Top: 350 x 50 mm (13.8 x 2') Bottom: 350 x 50 mm (13.8 x 2')" },
          { label: "Rack Features Security", value: "(1) Front door lock (1) Rear door lock (2) Side panel locks (3) Keys" },
          { label: "Rack Features  Standard", value: "CE; EIA/ECA-310-E; RoHS" },
          { label: "Supported Devices", value: "Compatible with Ubiquiti rack-mount devices up to 325 mm in depth. Note: 325 mm devices can be installed when the mounting depth is set to 305 mm (max), but DC power backup is not supported due to limited rear-side clearance." },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },

  //Produk Ketiga Puluh Sembilan dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-Shelf-CLV",
    name: "Fixed Rack Shelf",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "1U fixed cantilever shelf for mounting non-rackmount devices in standard 19' racks.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-Shelf-CLV",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Material Cold rolled carbon steel (SPCC)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "481.4 x 250 x 44 mm (19 x 9.8 x 1.7')" },
          { label: "Weight", value: "2.5 kg (5.5 lb)" },
          { label: "Material", value: "Cold rolled carbon steel (SPCC)" },
          { label: "Max. Weight Capacity", value: "20 kg (44 lb)" }
        ]
      },
    ],
  },

  //Produk Ketiga Empat Puluh dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-Rails-Slide",
    name: "UniFi Sliding Rack Rails",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "Adjustable sliding rails for UniFi rack-mount gear, designed for smooth sliding and flexible fit in 4-post racks.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Rack-Rails-Slide",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Max. Weight Capacity 45 kg (99 lb)",
      "Sliding Mechanism Ball-bearing"
    ],
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "625 x 43 x 21 mm (24.6 x 1.7 x 0.8')" },
          { label: "Weight", value: "2.5 kg (5.5 lb)" },
          { label: "Enclosure Material", value: "SGCC steel" },
          { label: "Max. Weight Capacity", value: "45 kg (99 lb)" },
          { label: "Sliding Mechanism", value: "Ball-bearing" },
          { label: "Supported Rack Depth", value: "600—1066 mm (23.6—42')" },
          { label: "Supported Rack Type", value: "4-post" },
          { label: "Supported Mounting Hole Type", value: "Square" }
        ]
      },
    ],
  },

  //Produk Keempat Puluh Satu dari Accessories, SF Rack Mount
  {
    id: "UACC-Pro-Max-16-RM",
    name: "Pro Max 16 Rack Mount",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "1U rack-mount accessory for Pro Max 16 switches.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Pro-Max-16-RM",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Power cable management and adapter storage for a clean installation",
      "Uniform aesthetic with UniFi rack-mount equipment"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "280.9 x 115.1 x 42.8 mm (11.1 x 4.5 x 1.7')" },
          { label: "Weight", value: "1.1 kg (2.4 lb" },
          { label: "Enclosure Material", value: "SGCC steel, polycarbonate" }
        ]
      },
    ],
  },

  //Produk Keempat Puluh Dua dari Accessories, SF Rack Mount
  {
    id: "UACC-AI-Key-RM",
    name: "AI Key Rack Mount",
    category: "Accessories",
    subfilter: "Rack Mount",
    image: "/images/camera.jpg",
    shortDescription:
      "1U rack-mount accessory that supports up to three AI Keys.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-AI-Key-RM",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camera.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    bulletPoints: [
      "Enclosure Material Aluminum alloy"
    ],
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "464.4 x 56 x 43.7 mm (18.3 x 2.2 x 1.7')" },
          { label: "Weight", value: "430 g (0.9 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy" }
        ]
      },
    ],
  },

  //Produk Pertama dari Accessories, SF PoE & Power
  {
    id: "UPS-Power-Kit",
    name: "UniFi Power Kit",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "A complete rack power solution with per-port power control, combining the UniFi UPS 2U Rackmount and Power Distribution Pro. Designed for continuous, managed power — ensuring uptime, remote outlet control, and graceful shutdown during power events.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UPS-Power-Kit",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "High-performance networking solution",
      "Enterprise-grade reliability",
      "Easy management and monitoring",
      "Scalable architecture"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "442.4 x 300 x 87.4 mm (17.4 x 11.8 x 3.4')" },
          { label: "Weight", value: "14 kg (30.9 lb)" },
          { label: "Enclosure Material", value: "Galvanized steel" },
          { label: "Form Factor", value: "Rack mount (2U)" },
          { label: "Weatherproofing", value: "IP20" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Management", value: "Ethernet" },
          { label: "Networking Interface", value: "(1) 100/10 MbE port for network connection (2) GbE ports for surge in/out" },
          { label: "Power", value: "Standard" },
          { label: "Form Factor", value: "(1) OVC II AC in: NEMA 5‑15P, 1.8 m (5.9 ft) non-removable power cord (4) Battery backup/surge protection: NEMA 5‑15R (4) Surge protection: NEMA 5‑15R" },
          { label: "Capacity", value: "1,440VA/1,000W" },
          { label: "Type", value: "Line interactive" },
          { label: "Input Voltage Range", value: "89-145V AC" },
          { label: "Power Method", value: "(1) TN system, 120V AC, 12A Max., 50/60 Hz" },
          { label: "Nominal Input Voltage", value: "120V AC" },
          { label: "Output Voltage", value: "120V AC" },
          { label: "Frequency Range", value: "AC mode: 50/60 Hz ±5 Hz (Auto sensing) Battery mode: 60 Hz ±1 Hz" },
          { label: "AC Voltage Regulation", value: "±10% (Battery mode)" },
          { label: "Transfer Time", value: "6 ms typical; 10 ms max. (Battery mode)" },
          { label: "Wave Form", value: "Simulated sine wave (Battery mode)" },
          { label: "Battery Type", value: "(2) Lead Acid 12V, 9Ah" },
          { label: "Runtimer", value: "Full load: 2.3 min Half load: 8 min" },
          { label: "Battery Charging Time", value: "6-8 hours recovery to 90% capacity" },
          { label: "Overload at On-Line Mode", value: "110% 5 min go to fault 120% go to fault immediately" },
          { label: "Overload at Battery Mode", value: "110% shutdown in 5 sec 120% shutdown immediately" },
          { label: "Short Circuit Protection at On-Line Mode", value: "Breaker, 250V AC, 15A" },
          { label: "Output Short-Circuit Current", value: "Ipeak 348.0A Irms 115.1A" },
          { label: "Buttons", value: "(1) Power (1) Factory reset" },
          { label: "LEDs Status", value: "Off: device not turned on Flashing white: initializing / factory default Steady white: waiting for adoption Steady blue: device adoption and working Flashing blue: battery mode Alternating white/blue: firmware upgrading Rapid flashing blue: locate Steady red: warning Flashing red: low battery" },
          { label: "Operating Altitude", value: "3,000 m (1.9 mi)" },
          { label: "Operating Environment", value: "Pollution Degree 2" },
          { label: "Ambient Storage Temperature", value: "-20 to 50° C (-4 to 122° F)" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "0 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, UL 1778, CSA C22.2 No. 107.3" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  //Produk Kedua dari Accessories, SF PoE & Power 
  {
    id: "UPS-2U",
    name: "UniFi UPS 2U",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "UniFi managed 1.44kVA rackmount uninterruptible power supply with 4 backup outlets, 4 surge outlets, and a field replaceable battery, 216Wh, half load (500W) runtime of 8 minutes. Supports Graceful Shutdown for UNVR and UNAS, and includes NUT compatibility for third-party devices.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UPS-2U",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "High-performance networking solution",
      "Enterprise-grade reliability",
      "Easy management and monitoring",
      "Scalable architecture"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "442.4 x 300 x 87.4 mm (17.4 x 11.8 x 3.4')" },
          { label: "Weight", value: "14 kg (30.9 lb)" },
          { label: "Enclosure Material", value: "Galvanized steel" },
          { label: "Form Factor", value: "Rack mount (2U)" },
          { label: "Weatherproofing", value: "IP20" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Management", value: "Ethernet" },
          { label: "Networking Interface", value: "(1) 100/10 MbE port for network connection (2) GbE ports for surge in/out" },
          { label: "Power", value: "Standard" },
          { label: "Form Factor", value: "(1) OVC II AC in: NEMA 5-15P, 1.8 m (5.9 ft) non-removable power cord (4) Battery backup/surge protection: NEMA 5‑15R (4) Surge protection: NEMA 5‑15R" },
          { label: "Capacity", value: "1,440VA/1,000W" },
          { label: "Type", value: "Line interactive" },
          { label: "Input Voltage Range", value: "89-145V AC" },
          { label: "Power Method", value: "(1) TN system, 120V AC, 12A Max., 50/60 Hz" },
          { label: "Nominal Input Voltage", value: "120V AC" },
          { label: "Output Voltage", value: "120V AC" },
          { label: "Frequency Range", value: "AC mode: 50/60 Hz ±5 Hz (Auto sensing) Battery mode: 60 Hz ±1 Hz" },
          { label: "AC Voltage Regulation", value: "±10% (Battery mode)" },
          { label: "Transfer Time", value: "6 ms typical; 10 ms max. (Battery mode)" },
          { label: "Wave Form", value: "Simulated sine wave (Battery mode)" },
          { label: "Battery Type", value: "(2) Lead Acid 12V, 9Ah" },
          { label: "Runtimer", value: "Full load: 2.3 min Half load: 8 min" },
          { label: "Battery Charging Time", value: "6-8 hours recovery to 90% capacity" },
          { label: "Overload at On-Line Mode", value: "110% 5 min go to fault 120% go to fault immediately" },
          { label: "Overload at Battery Mode", value: "110% shutdown in 5 sec 120% shutdown immediately" },
          { label: "Short Circuit Protection at On-Line Mode", value: "Breaker, 250V AC, 15A" },
          { label: "Output Short-Circuit Current", value: "Ipeak 348.0A Irms 115.1A" },
          { label: "Buttons", value: "(1) Power (1) Factory reset" },
          { label: "LEDs Status", value: "Off: device not turned on Flashing white: initializing / factory default Steady white: waiting for adoption Steady blue: device adoption and working Flashing blue: battery mode Alternating white/blue: firmware upgrading Rapid flashing blue: locate Steady red: warning Flashing red: low battery" },
          { label: "Operating Altitude", value: "3,000 m (1.9 mi)" },
          { label: "Operating Environment", value: "Pollution Degree 2" },
          { label: "Ambient Storage Temperature", value: "-20 to 50° C (-4 to 122° F)" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "0 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, UL 1778, CSA C22.2 No. 107.3" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  //Produk Ketiga dari Accessories, SF PoE & Power
  {
    id: "UPS-Tower",
    name: "UniFi UPS Tower",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "UniFi managed 1kVA uninterruptible power supply with 5 backup outlets 5 surge outlets and hot swappable battery, 108Wh, half load (300W) runtime of 7 minutes. Supports Graceful Shutdown for UNVR and UNAS, and includes NUT compatibility for third-party devices.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UPS-Tower",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "High-performance networking solution",
      "Enterprise-grade reliability",
      "Easy management and monitoring",
      "Scalable architecture"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "288 x 99 x 280.5 mm (11.3 x 3.9 x 11')" },
          { label: "Weight", value: "8.17 kg (18 lb)" },
          { label: "Enclosure Material", value: "Polycarbonate and acrylonitrile butadiene styrene blend" },
          { label: "Form Factor", value: "Desktop" },
          { label: "Weatherproofing", value: "IP20" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Management", value: "Ethernet" },
          { label: "Networking Interface", value: "(1) 100/10 MbE port for network connection (2) GbE ports for surge in/out" },
          { label: "Power", value: "Standard" },
          { label: "Form Factor", value: "(1) OVC II AC in: NEMA 5-15P, 1.8 m (5.9 ft) non-removable power cord (4) Battery backup/surge protection: NEMA 5‑15R (4) Surge protection: NEMA 5‑15R" },
          { label: "Capacity", value: "1,000VA/600W" },
          { label: "Type", value: "Line interactive" },
          { label: "Input Voltage Range", value: "89-145V AC" },
          { label: "Power Method", value: "(1) TN system, 120V AC, 12A Max., 50/60 Hz" },
          { label: "Nominal Input Voltage", value: "120V AC" },
          { label: "Output Voltage", value: "120V AC" },
          { label: "Frequency Range", value: "AC mode: 50/60 Hz ±5 Hz (Auto sensing) Battery mode: 60 Hz ±1 Hz" },
          { label: "AC Voltage Regulation", value: "±10% (Battery mode)" },
          { label: "Transfer Time", value: "6 ms typical; 10 ms max. (Battery mode)" },
          { label: "Wave Form", value: "Simulated sine wave (Battery mode)" },
          { label: "Battery Type", value: "(1) Lead Acid 12V, 9Ah" },
          { label: "Runtimer", value: "ull load: 2 min Half load: 7 min" },
          { label: "Battery Charging Time", value: "6-8 hours recovery to 90% capacity" },
          { label: "Overload at On-Line Mode", value: "110% 5 min go to fault 120% go to fault immediately" },
          { label: "Overload at Battery Mode", value: "110% shutdown in 5 sec 120% shutdown immediately" },
          { label: "Short Circuit Protection at On-Line Mode", value: "Breaker, 250V AC, 15A" },
          { label: "Output Short-Circuit Current", value: "Ipeak 334.8A Irms 68.2A" },
          { label: "Buttons", value: "(1) Power (1) Factory reset" },
          { label: "LEDs Status", value: "Off: device not turned on Flashing white: initializing / factory default Steady white: waiting for adoption Steady blue: device adoption and working Flashing blue: battery mode Alternating white/blue: firmware upgrading Rapid flashing blue: locate Steady red: warning Flashing red: low battery" },
          { label: "LEDs Indicator", value: "All off: 0% (1) Steady blue: battery 1–19% (2) Steady blue: battery 20–39% (3) Steady blue: battery 40–59% (4) Steady blue: battery 60–79% (5) Steady blue: battery 80–100%" },
          { label: "Operating Altitude", value: "3,000 m (1.9 mi)" },
          { label: "Operating Environment", value: "Pollution Degree 2" },
          { label: "Ambient Storage Temperature", value: "-20 to 50° C (-4 to 122° F)" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "0 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, UL 1778, CSA C22.2 No. 107.3" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },
  //Produk Keempat dari Accessories, SF PoE & Power
  {
    id: "USW-Mission-Critical (120W)",
    name: "UPS PoE Switch ",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "A switch with an integrated 368Wh lithium-ion battery capable of providing uninterruptible PoE to 8 devices.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "USW-Mission-Critical (120W)",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "(4) GbE PoE+, (4) GbE PoE++ ports",
      "(1) GbE port",
      "(2) 110V AC outputs; 120W total PoE available",
      "Battery backup power system",
      "Internal battery 368Wh"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "288 x 99 x 280.5 mm (11.3 x 3.9 x 11')" },
          { label: "Port Layout 1 GbE RJ45", value: "9 (4 PoE+; 4 PoE++) (1G/100M/10M)" },
          { label: "Max. PoE Output", value: "Up to PoE++" },
          { label: "Total PoE Availability", value: "120W" },
          { label: "Redundancy", value: "Battery Power Backup" },
          { label: "Layer 3", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U)" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "18 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "9 Gbps" },
          { label: "Forwarding Rate", value: "13 Mpps" },
          { label: "Supported VLANs", value: "1,000" },
          { label: "Packet Buffer Size", value: "0.5 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
          { label: "MAC Address Table Size", value: "8,000" },
        ]
      },
      {
        title: "Layer 2 Feature",
        items: [
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Advanced IGMP Configuration (Querier, Fast Leave, Router Port)", value: "✓" },
          { label: "IGMP Snooping", value: "✓" },
          { label: "802.1X Control", value: "✓" },
          { label: "MAC-Based ACLs & Device Isolation", value: "✓" },
          { label: "DHCP Snooping & Guarding", value: "✓" },
          { label: "Egress Rate Limit", value: "✓" },
          { label: "Flow Control", value: "✓" },
          { label: "Storm Control", value: "✓" },
          { label: "Multicast & Broadcast Rate Limiting", value: "✓" },
          { label: "MAC Address Blocking", value: "✓" },
          { label: "IP-Based ACLs & Network Isolation", value: "✓" },
          { label: "MAC-Based Port Restriction", value: "✓" },
          { label: "Port Isolation", value: "✓" },
          { label: "Port Mirroring", value: "✓" },
          { label: "Jumbo Frames", value: "✓" },
          { label: "LLDP-MED", value: "✓" },
          { label: "Voice VLAN", value: "✓" },
          { label: "Loop Protection", value: "✓" },
          { label: "Virtual Network Override", value: "✓" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "PoE Ports PoE+", value: "4" },
          { label: "PoE Ports PoE++", value: "4" },
          { label: "Max. PoE Wattage per Port by PSE PoE++", value: "32W" },
          { label: "Max. PoE Wattage per Port by PSE PoE++", value: "64W" },
          { label: "Max. Power Consumption", value: "50W (Excluding PoE Output) 240W (Including PoE Output and AC Output)" },
          { label: "Power Method", value: "Universal input, 100-240V AC, 50/60 Hz External battery input, 48V DC" },
          { label: "Power Input Method", value: "AC input DC input (Backup)" },
          { label: "Power Supply", value: "AC/DC, internal, 240W" },
          { label: "Supported Voltage Range", value: "100-240V AC" },
          { label: "Management", value: "Ethernet AR" },
          { label: "Heat Dissipation", value: "170.6 BTU/hr (Excluding PoE Output)" },
          { label: "Weight", value: "Without mount: 9 kg (19.9 lb) With mount: 9.2 kg (20.3 lb)" },
          { label: "Enclosure Material", value: "SGCC steel" },
          { label: "Mount Material", value: "SGCC steel" },
          { label: "Supported Rack Depth", value: "482.6 mm (19') four-post racks Posts depths ranging from 700 to 1,000 mm (27.6–39.4”)" },
          { label: "LCM Display", value: "1.3' touchscreen" },
          { label: "ESD Protection", value: "Air/contact: ± 24kV" },
          { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)V " },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 06679-25-08356" }
        ]
      },
      {
        title: "Software,",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 6.2.26 and later" },
        ]
      }
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],

    addons: [
      {
        id: 1,
        name: "UniFi Patch Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "QSFP28 transceiver that supports 100G connections up to 10 km using single-mode fiber with a duplex LC UPC connector.",
        specs: [
          "Shielded RJ45",
          "Insulated, weatherpoof jacket",
          "Internal foil shielding and drain wire for increased ESD damage protection",
          "Cable Lenghth: 1 to 8 m"

        ],
        detailedSpecs: [
          { label: "Available Lengths", value: "0.1, 0.3, 1, 2, 3, 5, 8 m (0.3, 1, 3.3, 6.6, 9.9, 16.4, 26.3 ft)" },
          { label: "Available Colors", value: "White, Blue, Black" },
          { label: "Pack Options", value: "Single Unit 50-pack (0.1 m)" },
          { label: "Supported Data Rate", value: "GbE" },
          { label: "Supported PoE type", value: "Up to PoE+++" },
          { label: "Connector", value: "(2) Bendable booted RJ45" },
          { label: "Operating Environment", value: "Indoor" },
          { label: "Cable Jacket Diameter", value: "3 mm (0.1')" },
          { label: "Cable Jacket Material", value: "Thermoplastic elastomer (TPE)" },
          { label: "Cable Shielding Type", value: "UTP" },
          { label: "Cable Conductor Type", value: "Stranded copper" },
          { label: "Cable Conductor Wire Gage", value: "30 AWG" },
          { label: "Cable Bend Radius", value: "Min. 24 mm ( (0.94'')" },
          { label: "Flame Rating", value: "FT-2(UL1581)" },
          { label: "Standars", value: "TIA/EIA-568-B.2 ISO/IEC 11801" },
          { label: "Installion Temperature", value: "0 to 60°C (32 to 140°F)" },
          { label: "Ambient Storage Temperature", value: "-20 to 80°C (-4 to 176°F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 75°C (14 to 167°F)" },
        ],
        productLink: "/products/mounting-kit"
      },
      {
        id: 2,
        name: "G3 Gate Starter Kit",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Starter kit with a Gate Hub, G3 Intercom, PoE++ adapter, and PoE++ over twisted pair extender for access control at a single gate with Touch Pass support.",
        specs: [
          "(1) Gate Hub",
          "(1) G3 Intercom",
          "(1) PoE++ adapter",
          "(2) 2 - wire PoE extenders"

        ],
        detailedSpecs: [
          { label: "In the Box", value: "(1) Gate Hub (1) G3 Intercom (1) PoE++ adapter (2) 2-wire Retrofit Extenders" },
          { label: "Touch Pass", value: "10 free 1-year Touch Passes included " },
          { label: "Gate Hub", value: "" },

          { label: "Dimensions", value: "175 x 126 x 26 mm (6.9 x 5 x 1')" },
          { label: "Supported Doors", value: "1 gate, 1 side door" },
          { label: "Maximum User Count", value: "6,000" },
          { label: "Input Terminals", value: "(1) Gate exit request (1) Gate position (1) Side door exit (1) Side door position (1) Emergency" },
          { label: "Power Method", value: "PoE++ UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mounting", value: "DIN-rail (Included)" },
          { label: "Weight", value: "460 g (1 lb)" },
          { label: "Indoor and Outdoor Use", value: "Indoor only: device itself Outdoor: with waterproof junction box" },
          { label: "NDAA Compliant", value: "✓" },

          /* { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Ambient Operating Temperature", value: "-30 to 60° C (-22 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Networking Interface", value: "(5) 10/100/1000 Base-T" },
          { label: "PoE Interface", value: "(1) PoE++ input, 50V DC, 1A (4) PoE outputs, 50V DC, 30W per port (Max 55W aggregated)" },
          { label: "Max. Power Consumption", value: "22W (Without PoE output) 60W (With PoE output)" },
          { label: "Digital Input", value: "Gate exit request, gate position, side door exit request, side door position, emergency" },
          { label: "Dry Output Relay", value: "(2) Operator: rated 30V DC, up to 1A (1) Aux: rated 30V DC, up to 1A" },
          { label: "Powered Output Relay", value: "Side door lock: 12V DC, up to 1A" },
          { label: "LEDs", value: "W/B " },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Recommend Max. Cable Length UA-Lock-Electric (400mA)", value: "24 AWG length: 25 m (82 ft) 22 AWG length: 42 m (138 ft) 20 AWG length: 66 m (217 ft) 18 UACC-Cable-DoorLockRelay length: 100 m (328 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-540kg (500mA)", value: "24 AWG length: 20 m (66 ft) 22 AWG length: 32 m (105 ft) 20 AWG length: 51 m (167 ft) 18 UACC-Cable-DoorLockRelay length: 80 m (262 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-270kg (800mA)", value: "24 AWG length: 12 m (29 ft) 22 AWG length: 20 m (66 ft) 20 AWG length: 30 m (98 ft) 18 UACC-Cable-DoorLockRelay length: 46 m (151 ft) " },
          { label: "Recommend Max. Cable Length Other locks (1A)", value: "24 AWG length: 9 m (30 ft) 22 AWG length: 15 m (49 ft) 20 AWG length: 24 m (79 ft) 18 UACC-Cable-DoorLockRelay length: 36 m (118 ft)" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },

          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-Hub-Gate, V01" },
          { label: "Software Information", value: "The software version can be checked at https://unifi.ui.com" },
          { label: "G3 Intercom", value: "" },
          { label: "Dimensions", value: "324.8 x 113.7 x 28.3 mm (12.8 x 4.5 x 1.1')" },
          { label: "Integrated Camera", value: "✓" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "PIN Access", value: "✓" },
          { label: "Apple/Google Wallet", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Face Unlock", value: "✓" },
          { label: "Two-Way Intercom & Doorbell Access", value: "✓" },
          { label: "Weatherproofing", value: "IP65" },
          { label: "NDAA Compliant", value: "✓" },

          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weight", value: "Device: 965 g (2.1 lb) Bracket: 445 g (1 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, UV-stabilized polycarbonate, glass" },
          { label: "Mount Material", value: "Powder-coated stainless steel" },
          { label: "Mounting", value: "Wall mount, adapter to the gooseneck pedestal (Included) Surface angle, flush mount, sunshield kit (Optional)" },
          { label: "Indoor and Outdoor Use", value: "✓" },
          { label: "Ambient Operating Temperature", value: "Device: -30 to 60° C (-22 to 140° F) Display: -25 to 60° C (-13 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.2 NFC" },
          { label: "Power Method", value: "PoE UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "13W" },
          { label: "Supported Voltage Range", value: "48V DC" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "VIdeo Resolution", value: "2MP 1200 x 1600 (3:4)" },
          { label: "Optics Resolution", value: "8 MP (2448 x 3264" },
          { label: "Optic Field of View", value: "H: 79.4°, V: 97.5°, D: 118.2°" },
          { label: "Sensors", value: "Proximity sensor ALS sensor" },
          { label: "Display Luminance", value: "Max. 1000 nits (Typical)" },
          { label: "Display Resolution", value: "1024 x 600 px" },
          { label: "Display Screen Technology", value: "Capacitive multi-touch" },
          { label: "Display Size", value: "177 mm (7') diagonal" },
          { label: "Microphone", value: "(1) Yes, 2W" },
          { label: "Speaker", value: "13.56 MHz" },
          { label: "NFC Frequency", value: "< 30 mm (1.18'')" },
          { label: "NFC Read Range", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T ECP 2.0" },
          { label: "NFC Technology", value: "Amber" },
          { label: "LEDs", value: "(1) Factory reset" },
          { label: "Buttons", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "PoE Cabling Requirements", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },

          { label: "UL 294 Statement", value: "Grade assignment: I" },
          { label: "CAN/ULC-60839-11-1 Grade", value: "CE, FCC, IC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Certifications", value: "UA-G3-Intercom, V01" },
          { label: "Document number, and issue date and/or revision level", value: "The software version can be checked at " },
          { label: "Software Information", value: "The software version can be checked at" },
          { label: "Retrofit Extender", value: "" },
          { label: "Dimensions", value: "PoE in/out: 40 x 105 x 25 mm (1.6 x 4.1 x 1') Adapter: 43.5 x 138 x 30 mm (1.7 x 5.4 x 1.2')" },
          { label: "Weight", value: "PoE in: 77 g (2.7 oz) PoE out: 79 g (2.8 oz) Adapter: 140 g (4.9 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Coaxial Connector", value: "BNC female" },
          { label: "Networking Interface", value: "(1) 10/100 MbE (1) Homeplug AV" },
          { label: "Power Method", value: "PoE++" },
          { label: "PoE Interface", value: "PoE in: (1) PoE++, 50V DC, 1.2A PoE out: (1) PoE+, 48V DC, 0.6A" },
          { label: "Max. Power Consumption", value: "3W (Without PoE output)" },
          { label: "ESD/EMP Protection", value: "Air: ± 8kV, contact: ± 4kV" },
          { label: "LEDs", value: "White" },
          { label: "Ambient Operating Temperature", value: "-10 to 40° C (14 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
          { label: "PoE++ Adapter", value: "" },
          { label: "Model", value: "U-PoE++" },
          { label: "Dimensions", value: "106 x 63 x 34 mm  (4.2 x 2.5 x 1.3')" },
          { label: "Weight", value: "210 g (7.4 oz)" },
          { label: "Output Voltage", value: "48V DC @ 1.25A" },
          { label: "Gigabit LAN Port", value: "100–240V AC at 50/60Hz" },
          { label: "Rated Voltage", value: "100–240V AC at 50/60Hz" },
          { label: "Input Current", value: "1.3A @ 120V AC 0.75A @ 230V AC" },
          { label: "Inrush Current", value: "<100A peak @ 120V AC <200A peak @ 230V AC" },
          { label: "Efficiency", value: "85+%" },
          { label: "Output Ripple", value: "1% max." },
          { label: "Switching Frequency", value: "65 kHz" },
          { label: "Line Regulation", value: "≤ 1%" },
          { label: "Load Regulation", value: "≤ 3%." },
          { label: "4-pair Powering", value: "Pins 1, 2, 4, 5 (+) and 3, 6, 7, 8 (-)" },
          { label: "AC Connector", value: "IEC-320 C6" },
          { label: "Data In / PoE", value: "RJ45 shielded socket" },
          { label: "Surge Protection", value: "Difference and common mode" },
          { label: "Clamping Protection", value: "11V data, 60V power" },
          { label: "Max. Surge Discharge", value: "1500A (8/20 μs) power" },
          { label: "Peak Pulse Current", value: "36A (10/1000 μs) data" },
          { label: "Shunt Capacitance", value: "<5 pF data" },
          { label: "Response Time", value: "<1 ns" },
          { label: "Power Method", value: "Universal AC input, 100–240V AC, 50/60 Hz" },
          { label: "Power Supply", value: "AC/DC" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Max. PoE+ Wattage per Port by PSE", value: "60W" },
          { label: "Ambient Storage Temperature", value: "-30 to 70°C (-22 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "CE, FCC, IC, UL, UKCA, KC, CCC, KC, RoHS" },
          { label: "Certifications", value: "10 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" }, */
        ],
        productLink: "/products/mounting-kit"
      },
      {
        id: 3,
        name: "Gate Starter Kit",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Control a vehicle gate using the connected Intercom and authorize gate access with License Plate Unlock when paired with a compatible Protect AI camera.",
        specs: [
          "(1) Gate Hub",
          "(1) Intercom",
          "(1) PoE++ adapter",
          "(2) 2 - wire PoE extenders"

        ],
        detailedSpecs: [
          { label: "In the Box", value: "(1) Gate Hub (1) Intercom (1) PoE++ adapter (2) 2-wire Retrofit Extenders" },
          { label: "Gate Hub", value: "" },

          { label: "Dimensions", value: "175 x 126 x 26 mm (6.9 x 5 x 1')" },
          { label: "Supported Doors", value: "1 gate, 1 side door" },
          { label: "Maximum User Count", value: "6,000" },
          { label: "Input Terminals", value: "(1) Gate exit request (1) Gate position (1) Side door exit (1) Side door position (1) Emergency" },
          { label: "Power Method", value: "PoE++ UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mounting", value: "DIN-rail (Included)" },
          { label: "Weight", value: "460 g (1 lb)" },
          { label: "Indoor and Outdoor Use", value: "Indoor only: device itself Outdoor: with waterproof junction box" },
          { label: "NDAA Compliant", value: "✓" },

          /* { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Ambient Operating Temperature", value: "-30 to 60° C (-22 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Networking Interface", value: "(5) 10/100/1000 Base-T" },
          { label: "PoE Interface", value: "(1) PoE++ input, 50V DC, 1A (4) PoE outputs, 50V DC, 30W per port (Max 55W aggregated)" },
          { label: "Max. Power Consumption", value: "22W (Without PoE output) 60W (With PoE output)" },
          { label: "Digital Input", value: "Gate exit request, gate position, side door exit request, side door position, emergency" },
          { label: "Dry Output Relay", value: "(2) Operator: rated 30V DC, up to 1A (1) Aux: rated 30V DC, up to 1A" },
          { label: "Powered Output Relay", value: "Side door lock: 12V DC, up to 1A" },
          { label: "LEDs", value: "W/B " },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Recommend Max. Cable Length UA-Lock-Electric (400mA)", value: "24 AWG length: 25 m (82 ft) 22 AWG length: 42 m (138 ft) 20 AWG length: 66 m (217 ft) 18 UACC-Cable-DoorLockRelay length: 100 m (328 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-540kg (500mA)", value: "24 AWG length: 20 m (66 ft) 22 AWG length: 32 m (105 ft) 20 AWG length: 51 m (167 ft) 18 UACC-Cable-DoorLockRelay length: 80 m (262 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-270kg (800mA)", value: "24 AWG length: 12 m (29 ft) 22 AWG length: 20 m (66 ft) 20 AWG length: 30 m (98 ft) 18 UACC-Cable-DoorLockRelay length: 46 m (151 ft) " },
          { label: "Recommend Max. Cable Length Other locks (1A)", value: "24 AWG length: 9 m (30 ft) 22 AWG length: 15 m (49 ft) 20 AWG length: 24 m (79 ft) 18 UACC-Cable-DoorLockRelay length: 36 m (118 ft)" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },

          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-Hub-Gate, V01" },
          { label: "Software Information", value: "The software version can be checked at https://unifi.ui.com" },
          { label: "G3 Intercom", value: "" },
          { label: "Dimensions", value: "324.8 x 113.7 x 28.3 mm (12.8 x 4.5 x 1.1')" },
          { label: "Integrated Camera", value: "✓" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "PIN Access", value: "✓" },
          { label: "Apple/Google Wallet", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Face Unlock", value: "✓" },
          { label: "Two-Way Intercom & Doorbell Access", value: "✓" },
          { label: "Weatherproofing", value: "IP65" },
          { label: "NDAA Compliant", value: "✓" },

          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weight", value: "Device: 965 g (2.1 lb) Bracket: 445 g (1 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, UV-stabilized polycarbonate, glass" },
          { label: "Mount Material", value: "Powder-coated stainless steel" },
          { label: "Mounting", value: "Wall mount, adapter to the gooseneck pedestal (Included) Surface angle, flush mount, sunshield kit (Optional)" },
          { label: "Indoor and Outdoor Use", value: "✓" },
          { label: "Ambient Operating Temperature", value: "Device: -30 to 60° C (-22 to 140° F) Display: -25 to 60° C (-13 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.2 NFC" },
          { label: "Power Method", value: "PoE UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "13W" },
          { label: "Supported Voltage Range", value: "48V DC" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "VIdeo Resolution", value: "2MP 1200 x 1600 (3:4)" },
          { label: "Optics Resolution", value: "8 MP (2448 x 3264" },
          { label: "Optic Field of View", value: "H: 79.4°, V: 97.5°, D: 118.2°" },
          { label: "Sensors", value: "Proximity sensor ALS sensor" },
          { label: "Display Luminance", value: "Max. 1000 nits (Typical)" },
          { label: "Display Resolution", value: "1024 x 600 px" },
          { label: "Display Screen Technology", value: "Capacitive multi-touch" },
          { label: "Display Size", value: "177 mm (7') diagonal" },
          { label: "Microphone", value: "(1) Yes, 2W" },
          { label: "Speaker", value: "13.56 MHz" },
          { label: "NFC Frequency", value: "< 30 mm (1.18'')" },
          { label: "NFC Read Range", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T ECP 2.0" },
          { label: "NFC Technology", value: "Amber" },
          { label: "LEDs", value: "(1) Factory reset" },
          { label: "Buttons", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "PoE Cabling Requirements", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },

          { label: "UL 294 Statement", value: "Grade assignment: I" },
          { label: "CAN/ULC-60839-11-1 Grade", value: "CE, FCC, IC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Certifications", value: "UA-G3-Intercom, V01" },
          { label: "Document number, and issue date and/or revision level", value: "The software version can be checked at " },
          { label: "Software Information", value: "The software version can be checked at" },
          { label: "Retrofit Extender", value: "" },
          { label: "Dimensions", value: "PoE in/out: 40 x 105 x 25 mm (1.6 x 4.1 x 1') Adapter: 43.5 x 138 x 30 mm (1.7 x 5.4 x 1.2')" },
          { label: "Weight", value: "PoE in: 77 g (2.7 oz) PoE out: 79 g (2.8 oz) Adapter: 140 g (4.9 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Coaxial Connector", value: "BNC female" },
          { label: "Networking Interface", value: "(1) 10/100 MbE (1) Homeplug AV" },
          { label: "Power Method", value: "PoE++" },
          { label: "PoE Interface", value: "PoE in: (1) PoE++, 50V DC, 1.2A PoE out: (1) PoE+, 48V DC, 0.6A" },
          { label: "Max. Power Consumption", value: "3W (Without PoE output)" },
          { label: "ESD/EMP Protection", value: "Air: ± 8kV, contact: ± 4kV" },
          { label: "LEDs", value: "White" },
          { label: "Ambient Operating Temperature", value: "-10 to 40° C (14 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
          { label: "PoE++ Adapter", value: "" },
          { label: "Model", value: "U-PoE++" },
          { label: "Dimensions", value: "106 x 63 x 34 mm  (4.2 x 2.5 x 1.3')" },
          { label: "Weight", value: "210 g (7.4 oz)" },
          { label: "Output Voltage", value: "48V DC @ 1.25A" },
          { label: "Gigabit LAN Port", value: "100–240V AC at 50/60Hz" },
          { label: "Rated Voltage", value: "100–240V AC at 50/60Hz" },
          { label: "Input Current", value: "1.3A @ 120V AC 0.75A @ 230V AC" },
          { label: "Inrush Current", value: "<100A peak @ 120V AC <200A peak @ 230V AC" },
          { label: "Efficiency", value: "85+%" },
          { label: "Output Ripple", value: "1% max." },
          { label: "Switching Frequency", value: "65 kHz" },
          { label: "Line Regulation", value: "≤ 1%" },
          { label: "Load Regulation", value: "≤ 3%." },
          { label: "4-pair Powering", value: "Pins 1, 2, 4, 5 (+) and 3, 6, 7, 8 (-)" },
          { label: "AC Connector", value: "IEC-320 C6" },
          { label: "Data In / PoE", value: "RJ45 shielded socket" },
          { label: "Surge Protection", value: "Difference and common mode" },
          { label: "Clamping Protection", value: "11V data, 60V power" },
          { label: "Max. Surge Discharge", value: "1500A (8/20 μs) power" },
          { label: "Peak Pulse Current", value: "36A (10/1000 μs) data" },
          { label: "Shunt Capacitance", value: "<5 pF data" },
          { label: "Response Time", value: "<1 ns" },
          { label: "Power Method", value: "Universal AC input, 100–240V AC, 50/60 Hz" },
          { label: "Power Supply", value: "AC/DC" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Max. PoE+ Wattage per Port by PSE", value: "60W" },
          { label: "Ambient Storage Temperature", value: "-30 to 70°C (-22 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "CE, FCC, IC, UL, UKCA, KC, CCC, KC, RoHS" },
          { label: "Certifications", value: "10 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" }, */
        ],
        productLink: "/products/mounting-kit"
      },
    ]
  },

  //Produk Kelima dari Accessories, SF PoE & Power
  {
    id: "USP-RPS",
    name: "Redundant Power",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "950W redundant power supply for rack-mounted UniFi devices.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UPS-Tower",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "950W DC power availability",
      "(6) DC SmartPower ports",
      "1.3' LCM touchscreen"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "442.4 x 325.6 x 43.7 mm (17.4 x 12.8 x 1.7')" },
          { label: "Weight", value: "Without mount brackets : 5.5 kg (12.1 lb) With mount brackets: 5.6 kg (12.3 lb)" },
          { label: "Enclosure Material", value: "SGCC steel" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Management", value: "Ethernet" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Power Method", value: "(1) Universal AC input, 100-240V AC" },
          { label: "Power Supply", value: "54V DC output: AC/DC, internal, 645W 12V DC output: AC/DC, internal, 350W" },
          { label: "Supported Voltage Range", value: "100-240V AC" },
          { label: "Max. Power Consumption", value: "995W" },
          { label: "Power Output", value: "(6) RPS DC ports" },
          { label: "Max. Power Output", value: "52V DC: 11.54A (600W) 11.5V DC: 30.44A (350W)" },
          { label: "Wave Form", value: "Simulated sine wave (Battery mode)" },
          { label: "Max. Output Power per RPS Port", value: "52V DC: 11.54A (600W) 11.5V DC: 30.44A (350W)" },
          { label: "ESD/EMP Protection", value: "Air: ± 16kV, contact: ± 12kV" },
          { label: "Display", value: "1.3' touchscreen" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "LEDs Sytem", value: "Status" },
          { label: "LEDs USP RPS", value: "Activity" },
          { label: "Ambient Operating Temperature", value: "-5 to 45° C (23 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  //Produk Keenam dari Accessories, SF PoE & Power
  {
    id: "USP-PDU-Pro",
    name: "Power Distribution Pro",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "Designed to supply power to an entire rack-mounted UniFi system and remotely manage each connection.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "USP-PDU-Pro",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "(16) Remotely resettable outlets",
      "(4) USB-C ports",
      "1.3' LCM touchscreen",
      "Virtual Router Redundancy*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "442.4 x 87.4 x 106 mm (17.4 x 3.4 x 4.2')" },
          { label: "Weight", value: "Without mount: 3.5 kg (7.6 lb) With mount: 3.7 kg (8.2 lb)" },
          { label: "Enclosure Material", value: "SGCC steel" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Management", value: "Ethernet" },
          { label: "Networking Interface", value: "(1) 100 MbE RJ45 port (3) GbE RJ45 ports" },
          { label: "Power Method", value: "125V AC, 15A Max., 50/60 Hz" },
          { label: "Power Supply", value: "AC/DC internal, 40W" },
          { label: "Supported Voltage Range", value: "100-240V AC" },
          { label: "Max. Power Output", value: "125V AC: 1,875W" },
          { label: "Power Output", value: "(16) Power control outlets, 125V AC, 15A Max., 50/60Hz (1,875W Max. total) (4) USB-C ports, 2A Max. per port (4A/20W Max. total)" },
          { label: "Display", value: "1.3' touchscreen" },
          { label: "Buttons", value: "(1) Factory reset (1) Circuit breaker" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC" }
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  //Produk Ketujuh dari Accessories, SF PoE & Power
  {
    id: "USP-PDU-HD",
    name: "Power Distribution Hi-Density",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "Power distribution unit designed to support large, rack-mounted UniFi hardware deployments.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "USP-PDU-HD",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "(24) Remote-reset outlets",
      "(4) USB-C ports",
      "3 m power cord with NEMA L5-30 plug",
      "1.3' auto-rotating LCM touchscreen",
      "Compatible with 36U racks and taller"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "1485 x 55 x 56 mm (58.5 x 2.17 x 2.2')" },
          { label: "Weight", value: "6.3 kg (13.9 lb)" },
          { label: "Enclosure Material", value: "SGCC steel" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Management", value: "Ethernet" },
          { label: "Networking Interface", value: "(1) 10/100 MbE RJ45 port (3) GbE RJ45 ports for network redundancy" },
          { label: "Power Method", value: "100-125V AC, 30A Max. (Derated to 24A), 50/60 Hz (NEMA L5-30P)" },
          { label: "Power Output", value: "(24) Power control outlets: Per Bank (Bank1: port 1 to 12, Bank2: port 17 to 28): Rating output current: 12A at 125V AC (1500W) Max. output current: 15A at 125V AC (1875W) Total: Rating output current: 24A at 125V AC (3000W) Max. output current: 30A at 125V AC (3750W) (4) USB type C ports:5VDC 2A per port, total 20W Max. power" },
          { label: "ESD/EMP Protection", value: "Air: ± 8kV, contact: ± 4kV" },
          { label: "Display", value: "1.3' touchscreen" },
          { label: "Buttons", value: "(1) Factory reset (1) Circuit breaker" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC" }
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements Mobile Apps", value: "UniFi iOS™ and 10.11.0 and later Android™ 10.11.0 and later" },
          { label: "Application Requirements UniFi Netwrok", value: "Version 8.0.24 and later" }
        ]
      }
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  //Produk Kedelapan dari Accessories, SF PoE & Power
  {
    id: "U-PoE",
    name: "PoE Adapter (15W)",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "An adapter that can power UniFi PoE devices, reduce dependency on PoE switch power, and provide a Gigabit LAN connection.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "U-PoE",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Delivers up to 15W of PoE",
      "Surge, peak pulse, and overcurrent protection",
      "Contains RJ45 data input, AC cable with earth ground, and PoE output",
      "LED indicator for status monitoring"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "86 x 46 x 33 mm (3.4 x 1.8 x 1.3')" },
          { label: "Weight", value: "100 g (3.5 oz)" },
          { label: "Output Voltage", value: "48V DC @ 0.32A" },
          { label: "Rated Voltage", value: "100-240V AC at 50/60Hz" },
          { label: "LAN Activity Indicator", value: "—" },
          { label: "Gigabit LAN Port", value: "✓" },
          { label: "Remote Reset Capability", value: "—" },
          { label: "Reset Button", value: "_" },
          { label: "2-pair Powering", value: "Pins 4, 5 (+) and 7, 8 (-)" },
          { label: "AC Connector", value: "IEC-320 C6" },
          { label: "Clamping Protection", value: "11V Data, 60V Power" },
          { label: "Data In / PoE", value: "RJ45 Shielded Socket" },
          { label: "Input Current", value: "500mA Max." },
          { label: "Inrush Current", value: "<100A peak at 25°C" },
          { label: "Efficiency", value: "84.25+%" },
          { label: "Switching Frequency", value: "65 kHz" },
          { label: "Output Ripple", value: "200mV pp" },
          { label: "Line Regulation", value: "≤ 3%" },
          { label: "Load Regulation", value: "≤ 5%" },
          { label: "Max. Surge Discharge", value: "1500A (8/20 μs) power" },
          { label: "Peak Pulse Current", value: "36A (10/1000 μs) data" },
          { label: "Response Time", value: "<1 ns" },
          { label: "Shunt Capacitance", value: "<5 pF data" },
          { label: "Surge Protection", value: "Difference and common mode" },
          { label: "Ambient Storage Temperature", value: "-30 to 70°C (-22 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, UL, CCC" }
        ]
      },
    ],
  },

  //Produk Kesembilan dari Accessories, SF PoE & Power
  {
    id: "U-PoE+",
    name: "PoE+ Adapter (30W)",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "An adapter that can power UniFi PoE+ devices, reduce dependency on PoE switch power, and provide a Gigabit LAN connection.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "U-PoE+",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Delivers up to 30W of PoE+",
      "Surge, peak pulse, and overcurrent protection",
      "Contains RJ45 data input, AC cable with earth ground, and PoE+ output",
      "LED indicator for status monitoring"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "93 x 62 x 35 mm (3.7 x 2.4 x 1.4')" },
          { label: "Weight", value: "156 g (5.5 oz)" },
          { label: "Output Voltage", value: "48V DC @ 0.65A" },
          { label: "Rated Voltage", value: "100-240V AC at 50/60Hz" },
          { label: "LAN Activity Indicator", value: "—" },
          { label: "Gigabit LAN Port", value: "✓" },
          { label: "Remote Reset Capability", value: "—" },
          { label: "Reset Button", value: "_" },
          { label: "2-pair Powering", value: "Pins 4, 5 (+) and 7, 8 (-)" },
          { label: "AC Connector", value: "IEC-320 C6" },
          { label: "Clamping Protection", value: "11V Data, 60V Power" },
          { label: "Data In / PoE", value: "RJ45 Shielded Socket" },
          { label: "Input Current", value: "0.75A Max." },
          { label: "Inrush Current", value: "<100A peak at 26°C" },
          { label: "Efficiency", value: "87%" },
          { label: "Switching Frequency", value: "70 kHz Max." },
          { label: "Output Ripple", value: "1% Max." },
          { label: "Line Regulation", value: "≤ 3%" },
          { label: "Load Regulation", value: "≤ 5%" },
          { label: "Max. Surge Discharge", value: "1500A (8/20 μs) power" },
          { label: "Peak Pulse Current", value: "36A (10/1000 μs) data" },
          { label: "Response Time", value: "<1 ns" },
          { label: "Shunt Capacitance", value: "<5 pF data" },
          { label: "Surge Protection", value: "Difference and common mode" },
          { label: "Ambient Storage Temperature", value: "-30 to 70°C (-22 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, UL, CCC" }
        ]
      },
    ],
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  //Produk Kesepuluh dari Accessories, SF PoE & Power
  {
    id: "UACC-PoE+-2.5G",
    name: "2.5G PoE+ Adapter (30W)",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "An adapter that can power UniFi PoE+ devices, reduce dependency on PoE switch power, and provide a Multi-Gigabit LAN connection.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-PoE+-2.5G",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Delivers up to 30W of PoE+",
      "Surge, peak pulse, and overcurrent protection",
      "Contains RJ45 data input, AC cable with earth ground, and PoE+ output",
      "LED indicator for status monitoring"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "93 x 62 x 35 mm (3.7 x 2.4 x 1.4')" },
          { label: "Weight", value: "156 g (5.5 oz)" },
          { label: "Output Voltage", value: "48V DC @ 0.65A" },
          { label: "Rated Voltage", value: "100-240V AC at 50/60Hz" },
          { label: "LAN Activity Indicator", value: "—" },
          { label: "Gigabit LAN Port", value: "✓" },
          { label: "Remote Reset Capability", value: "—" },
          { label: "Reset Button", value: "_" },
          { label: "2-pair Powering", value: "Pins 4, 5 (+) and 7, 8 (-)" },
          { label: "AC Connector", value: "IEC-320 C6" },
          { label: "Clamping Protection", value: "11V Data, 60V Power" },
          { label: "Data In / PoE", value: "RJ45 Shielded Socket" },
          { label: "Input Current", value: "0.75A Max." },
          { label: "Inrush Current", value: "<150A peak @ 230V AC" },
          { label: "Efficiency", value: ">87%" },
          { label: "Switching Frequency", value: "65 kHz Max" },
          { label: "Output Ripple", value: "1% Max." },
          { label: "Line Regulation", value: "≤ 1%" },
          { label: "Load Regulation", value: "≤ 3%" },
          { label: "Max. Surge Discharge", value: "1500A (8/20 μs) power" },
          { label: "Peak Pulse Current", value: "36A (10/1000 μs) data" },
          { label: "Response Time", value: "<1 ns" },
          { label: "Shunt Capacitance", value: "<5 pF data" },
          { label: "Surge Protection", value: "Difference and common mode" },
          { label: "Ambient Storage Temperature", value: "-30 to 70°C (-22 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, UL, UKCA, KC, CCC, RoHS" }
        ]
      },
    ],
  },

  //Produk Kesebelas dari Accessories, SF PoE & Power
  {
    id: "U-PoE++",
    name: "PoE++ Adapter (60W)",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "An adapter that can power UniFi PoE++ devices, reduce dependency on PoE switch power, and provide a Gigabit LAN connection.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "U-PoE++",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Delivers up to 60W of PoE++",
      "Surge, peak pulse, and overcurrent protection",
      "Contains RJ45 data input, AC cable with earth ground, and PoE++ output",
      "LED indicator for status monitoring"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "106 x 63 x 34 mm (4.2 x 2.5 x 1.3')" },
          { label: "Weight", value: "210 g (7.4 oz)" },
          { label: "Output Voltage", value: "48V DC @ 0.65A" },
          { label: "Rated Voltage", value: "100-240V AC at 50/60Hz" },
          { label: "LAN Activity Indicator", value: "—" },
          { label: "Gigabit LAN Port", value: "✓" },
          { label: "Remote Reset Capability", value: "—" },
          { label: "Reset Button", value: "_" },
          { label: "2-pair Powering", value: "Pins 1, 2, 4, 5 (+) and 3, 6, 7, 8 (-)" },
          { label: "AC Connector", value: "IEC-320 C6" },
          { label: "Clamping Protection", value: "11V Data, 60V Power" },
          { label: "Data In / PoE", value: "RJ45 Shielded Socket" },
          { label: "Input Current", value: "1.3A @ 120V AC" },
          { label: "Inrush Current", value: "<100A peak @ 120V AC <200A peak @ 230V AC" },
          { label: "Efficiency", value: "85+%" },
          { label: "Switching Frequency", value: "65 kHz Max" },
          { label: "Output Ripple", value: "1% Max." },
          { label: "Line Regulation", value: "≤ 1%" },
          { label: "Load Regulation", value: "≤ 3%" },
          { label: "Max. PoE+ Wattage per Port by PSE", value: "60W" },
          { label: "Max. Surge Discharge", value: "1500A (8/20 μs) power" },
          { label: "Peak Pulse Current", value: "36A (10/1000 μs) data" },
          { label: "Power Method", value: "Universal AC input, 100–240V AC, 50/60 Hz" },
          { label: "Power Supply", value: "AC/DC" },
          { label: "Response Time", value: "<1 ns" },
          { label: "Shunt Capacitance", value: "<5 pF data" },
          { label: "Surge Protection", value: "Difference and common mode" },
          { label: "Ambient Storage Temperature", value: "-30 to 70°C (-22 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, UL, UKCA, KC, CCC, RoHS" }
        ]
      },
    ],
  },

  //Produk Kedua Belas dari Accessories, SF PoE & Power
  {
    id: "UACC-PoE++-10G",
    name: "10G PoE++ Adapter (60W)",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "An adapter that can power UniFi PoE++ devices, reduce dependency on PoE switch power, and provide a Multi-Gigabit LAN connection.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-PoE++-10G",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Delivers up to 60W of PoE++",
      "Surge, peak pulse, and overcurrent protection",
      "Contains RJ45 data input, AC cable with earth ground, and PoE++ output",
      "LED indicator for status monitoring"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "106 x 63 x 34 mm (4.2 x 2.5 x 1.3')" },
          { label: "Weight", value: "210 g (7.4 oz)" },
          { label: "Output Voltage", value: "54V DC at 1.12A" },
          { label: "Rated Voltage", value: "100-240V AC at 50/60Hz" },
          { label: "LAN Activity Indicator", value: "—" },
          { label: "Gigabit LAN Port", value: "✓" },
          { label: "Remote Reset Capability", value: "—" },
          { label: "Reset Button", value: "_" },
          { label: "2-pair Powering", value: "Pins 1, 2, 4, 5 (+) and 3, 6, 7, 8 (-)" },
          { label: "Clamping Protection", value: "11V Data, 60V Power" },
          { label: "Data In / PoE", value: "RJ45 Shielded Socket" },
          { label: "Input Current", value: "1.5A Max." },
          { label: "Inrush Current", value: "<150A peak at 230V AC" },
          { label: "Efficiency", value: ">88%" },
          { label: "Switching Frequency", value: "65 kHz" },
          { label: "Output Ripple", value: "1% Max." },
          { label: "Line Regulation", value: "≤ 2%" },
          { label: "Load Regulation", value: "≤ 5%" },
          { label: "Max. PoE+ Wattage per Port by PSE", value: "60W" },
          { label: "Max. Surge Discharge", value: "1500A (8/20 μs) power" },
          { label: "Peak Pulse Current", value: "36A (10/1000 μs) data" },
          { label: "Response Time", value: "<1 ns" },
          { label: "Shunt Capacitance", value: "<5 pF data" },
          { label: "Surge Protection", value: "Difference and common mode" },
          { label: "Ambient Storage Temperature", value: "-30 to 70°C (-22 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, UL, UKCA, KC, CCC, RoHS" }
        ]
      },
    ],
  },

  //Produk Ketiga Belas dari Accessories, SF PoE & Power
  {
    id: "UACC-PoE+++-10G",
    name: "10G PoE+++ Adapter (90W)",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "An adapter that can power UniFi PoE+++ devices, reduce dependency on PoE switch power, and provide a Multi-Gigabit LAN connection.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-PoE+++-10G",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Delivers up to 90W of PoE+++",
      "Surge, peak pulse, and overcurrent protection",
      "Contains RJ45 data input, AC cable with earth ground, and PoE+++ output",
      "LED indicator for status monitoring",
      "Supports wall mount, DIN rail and floating mount*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "164.5 x 71 x 42 mm (6.5 x 2.8 x 1.7')" },
          { label: "Weight", value: "372 g (13.1 oz)" },
          { label: "Output Voltage", value: "54V DC at 1.12A" },
          { label: "Rated Voltage", value: "100-240V AC at 50/60Hz" },
          { label: "LAN Activity Indicator", value: "—" },
          { label: "Gigabit LAN Port", value: "✓" },
          { label: "Remote Reset Capability", value: "—" },
          { label: "Reset Button", value: "_" },
          { label: "2-pair Powering", value: "Pins 1, 2, 4, 5 (+) and 3, 6, 7, 8 (-)" },
          { label: "Clamping Protection", value: "11V Data, 60V Power" },
          { label: "Data In / PoE", value: "RJ45 Shielded Socket" },
          { label: "Input Current", value: "1.5A Max." },
          { label: "Inrush Current", value: "<120A peak @ 230V AC" },
          { label: "Efficiency", value: ">88%" },
          { label: "Switching Frequency", value: "65 kHz" },
          { label: "Output Ripple", value: "1% Max." },
          { label: "Line Regulation", value: "≤ 2%" },
          { label: "Load Regulation", value: "≤ 5%" },
          { label: "Max. PoE+ Wattage per Port by PSE", value: "90W" },
          { label: "Max. Surge Discharge", value: "1500A (8/20 μs) power" },
          { label: "Peak Pulse Current", value: "36A (10/1000 μs) data" },
          { label: "Response Time", value: "<1 ns" },
          { label: "Shunt Capacitance", value: "<5 pF data" },
          { label: "Surge Protection", value: "Difference and common mode" },
          { label: "Ambient Storage Temperature", value: "-30 to 70°C (-22 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, UL, UKCA, KC, CCC, RoHS" }
        ]
      },
    ],
  },

  //Produk Keempat Belas dari Accessories, SF PoE & Power
  {
    id: "UACC-ETH-SP-DIN",
    name: "Ethernet Surge Protection",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "Bidirectional protection for up to 10 GbE, PoE++, and 20kA surge discharge for indoor installation.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-ETH-SP-DIN",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Wall/DIN rail mount",
      "Multiple grounding points"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "89 x 25.5 x 37.4 mm (3.5 x 1 x 1.5')" },
          { label: "Weight", value: "74 g (2.6 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, SGCC steel" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Networking Interface", value: "(2) RJ45 female connectors" },
          { label: "DC Spark-Over Voltage", value: "90V @ 100V/s" },
          { label: "Max. Impulse Spark-Over Voltage", value: "600V @ 1kV/µs" },
          { label: "Discharge Current", value: "20kA" },
          { label: "Insulation", value: "Max. Resistance: 1G ohm @ 50V" },
          { label: "Max. Capacitance", value: "1.0 pF @ 1 MHz" },
          { label: "Data Line Protection", value: "Up to 10 Gbps" },
          { label: "PoE Support", value: "✓" },
          { label: "ESD/EMP Protection", value: "Absorbing transient current with response to surge voltage from 100V/s to 1kV/µs" },
          { label: "Ambient Operating Temperature", value: "-40° to +80° C (-40° to 176° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" }
        ]
      },
    ],
  },

  //Produk Kelima Belas dari Accessories, SF PoE & Power
  {
    id: "UACC-ETH-SP-Panel-24",
    name: "Ethernet Surge Protection",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "Rack-mount indoor panel supports up to 10 GbE, PoE++, and 20kA surge discharge per port.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-ETH-SP-Panel-24",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "24-port integrated",
      "1U rack-mount design"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "442.4 x 134 x 43.7 mm (17.4 x 5.3 x 1.7')" },
          { label: "Weight", value: "2 kg (4.4 lb)" },
          { label: "Enclosure Material", value: "SGCC steel" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Networking Interface", value: "(48) RJ45 female connectors" },
          { label: "DC Spark-Over Voltage", value: "90V @ 100V/s" },
          { label: "Max. Impulse Spark-Over Voltage", value: "600V @ 1kV/µs" },
          { label: "Discharge Current", value: "20kA" },
          { label: "Insulation", value: "Max. Resistance: 1G ohm @ 50V" },
          { label: "Max. Capacitance", value: "1.0 pF @ 1 MHz" },
          { label: "Data Line Protection", value: "Up to 10 Gbps" },
          { label: "PoE Support", value: "✓" },
          { label: "ESD/EMP Protection", value: "Absorbing transient current with response to surge voltage from 100V/s to 1kV/µs" },
          { label: "Ambient Operating Temperature", value: "-40° to +80° C (-40° to 176° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" }
        ]
      },
    ],
  },

  //Produk Keenam Belas dari Accessories, SF PoE & Power
  {
    id: "ETH-SP-G2",
    name: "Ethernet Surge Protection Outdoor",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "ESD protection for outdoor high-speed networks.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "ETH-SP-G2",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Protects outdoor Ethernet devices",
      "(2) Passive, surge-protected RJ45 connections",
      "Quick and easy installation",
      "Compatible with 2.5 GbE networks"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "91 x 61 x 32.5 mm (3.6 x 2.4 x 1.3')" },
          { label: "Weight", value: "80 g (2.8 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Weatherproofing", value: "IPX5" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Networking Interface", value: "(2) RJ45 female connectors" },
          { label: "DC Spark-Over Voltage", value: "90V @ 100V/s" },
          { label: "Max. Impulse Spark-Over Voltage", value: "700V @ 1kV/µs" },
          { label: "Discharge Current", value: "10kA+" },
          { label: "Insulation", value: "Max. Resistance: 1G ohm @ 50V" },
          { label: "Max. Capacitance", value: "1.0 pF @ 1 MHz" },
          { label: "Data Line Protection", value: "Up to 2.5 Gbps" },
          { label: "PoE Support", value: "✓" },
          { label: "ESD/EMP Protection", value: "Absorbing transient current with response to surge voltage from 100V/s to 1kV/µs" },
          { label: "Ambient Operating Temperature", value: "-30 to 65° C (-22 to 149° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "Shock and Vibration Certification", value: "ETSI300-019-1.4 Standard" }
        ]
      },
    ],
  },

  //Produk Ketujuh Belas dari Accessories, SF PoE & Power
  {
    id: "UACC-ETH-SP-Pro",
    name: "Ethernet Surge Protection Outdoor",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "ESD protection for outdoor high-speed networks.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-ETH-SP-Pro",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Protects outdoor Ethernet devices, up to 20kA discharge current.",
      "(2) Passive, surge-protected RJ45 connections",
      "Quick and easy installation",
      "Compatible with 10 GbE networks"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "91 x 61 x 32.5 mm (3.6 x 2.4 x 1.3')" },
          { label: "Weight", value: "95 g (3.35 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Weatherproofing", value: "IPX5" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Networking Interface", value: "(2) RJ45 female connectors" },
          { label: "DC Spark-Over Voltage", value: "90V @ 100V/s" },
          { label: "Max. Impulse Spark-Over Voltage", value: "600V @ 1kV/µs" },
          { label: "Discharge Current", value: "20kA+" },
          { label: "Insulation", value: "Max. Resistance: 1G ohm @ 50V" },
          { label: "Max. Capacitance", value: "1.0 pF @ 1 MHz" },
          { label: "Data Line Protection", value: "Up to 10 Gbps" },
          { label: "PoE Support", value: "✓" },
          { label: "ESD/EMP Protection", value: "Absorbing transient current with response to surge voltage from 100V/s to 1kV/µs" },
          { label: "Ambient Operating Temperature", value: "-30 to 65° C (-22 to 149° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "Shock and Vibration Certification", value: "ETSI300-019-1.4 Standard" }
        ]
      },
    ],
  },

  //Produk KeTujuh Belas dari Accessories SF PoE & Power
  {
    id: "UACC-PSU-12V-150W",
    name: "Hot-Swappable Power Module (150W)",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "Replacement hot-swappable power module for Enterprise Fortress Gateway and Gateway Enterprise.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-PSU-12V-150W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "150W (12V) AC-to-DC power supply"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "185 x 73.5 x 40 mm (7.3 x 2.9 x 1.6')" },
          { label: "Weight", value: "733 g (1.6 lb)" },
          { label: "Enclosure Material", value: "SGCC steel" },
          { label: "Input Voltage Range", value: "100-240V AC" },
          { label: "Input Frequency", value: "50/60 Hz" },
          { label: "Output Voltage", value: "12V DC at 12.5A" },
          { label: "Input Current", value: "7A Max. at 120V AC 3.6A Max. at 230V AC" },
          { label: "Inrush Current", value: "<50A peak" },
          { label: "Efficiency", value: "_" },
          { label: "Total Output Power", value: "Full load >81%" },
          { label: "Clamping Protection", value: "150W" },
          { label: "Over Voltage Protection", value: "13.5V" },
          { label: "Over Current Protection", value: "18.5-22.5A" },
          { label: "Ambient Operating Temperature", value: "-5 to 50° C (23 to 122° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, UL, UKCA, KC, CCC, RoHS" }
        ]
      },
    ],
  },

  //Produk Kedelapan Belas dari Accessories, SF PoE & Power
  {
    id: "UACC-PSU-12V-550W",
    name: "Hot-Swappable Power Module (550W)",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "Replacement hot-swappable power module for CloudKey Enterprise, Enterprise Aggregation, Enterprise NVR and UNAS Pro 8.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-PSU-12V-550W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "550W (12V) AC-to-DC power supply",
      "Included power cable"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "185 x 73.5 x 40 mm (7.3 x 2.9 x 1.6')" },
          { label: "Weight", value: "744 g (1.6 lb)" },
          { label: "Enclosure Material", value: "SGCC steel" },
          { label: "Input Connector", value: "C14" },
          { label: "Input Voltage Range", value: "100-240V AC" },
          { label: "Input Frequency", value: "50/60 Hz" },
          { label: "Output Voltage", value: "12V DC" },
          { label: "Output Current", value: "45A" },
          { label: "Total Output Power", value: "550W" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" }
        ]
      },
    ],
  },

  //Produl Kesembilan Belas dari Accessories, SF PoE & Power
  {
    id: "UACC-PSU-54V-600W",
    name: "Hot-Swappable Power Module (600W)",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "Replacement hot-swappable power module for CloudKey Enterprise, Enterprise Aggregation, Enterprise NVR and UNAS Pro 8.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-PSU-54V-600W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "600W (54V) AC-to-DC power supply",
      "Included power cable"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "185 x 73.5 x 40 mm (7.3 x 2.9 x 1.6')" },
          { label: "Weight", value: "750 g (1.65 lb)" },
          { label: "Enclosure Material", value: "SGCC steel" },
          { label: "Input Connector", value: "C14" },
          { label: "Input Voltage Range", value: "100-240V AC" },
          { label: "Input Frequency", value: "50/60 Hz" },
          { label: "Output Voltage", value: "54.5V" },
          { label: "Output Current", value: "11A" },
          { label: "Total Output Power", value: "60 0W" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" }
        ]
      },
    ],
  },

  //Produk Kedua Puluh dari Accessories, SF PoE & Power
  {
    id: "UACC-PSU-54V-1200W",
    name: "Hot-Swappable Power Module (1,200W)",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "Hot swappable AC/DC power module, 1,200W, 54V.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-PSU-54V-1200W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "1,200W (54V) AC-to-DC power supply",
      "Included power cable"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "185 x 73.5 x 40 mm (7.3 x 2.9 x 1.6')" },
          { label: "Weight", value: "750 g (1.65 lb)" },
          { label: "Enclosure Material", value: "SGCC steel" },
          { label: "Input Connector", value: "C14" },
          { label: "Input Voltage Range", value: "100-240V AC" },
          { label: "Input Frequency", value: "50/60 Hz" },
          { label: "Output Voltage", value: "54.5V" },
          { label: "Output Current", value: "18.35A" },
          { label: "Total Output Power", value: "200-240V AC: 1,200W 100-120V AC: 1,000W" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" }
        ]
      },
    ],
  },

  //Produk Kedua Puluh Satu dari Accessories, SF PoE & Power
  {
    id: "UACC-PSU-UDW",
    name: "Power Module",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "Provides optional power redundancy for Dream Wall.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-PSU-UDW",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "550W (54.8V) AC-to-DC auxiliary power module"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "252.8 x 87.4 x 43.3 mm (9.9 x 3.4 x 1.7')" },
          { label: "Weight", value: "970 g (2.1 lb)" },
          { label: "Enclosure Material", value: "Aluminium alloy, SGCC steel, polycarbonate" },
          { label: "Input Connector", value: "JYP-M1207D-RT03R" },
          { label: "Input Voltage Range", value: "100-240V AC" },
          { label: "Input Frequency", value: "50/60 Hz" },
          { label: "Output Voltage", value: "54.5V" },
          { label: "Output Current", value: "10A" },
          { label: "Total Output Power", value: "550W" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" }
        ]
      },
    ],
  },

  //Produk KeduaPuluh Dua dari Accessories, SF PoE & Power
  {
    id: "UACC-PoE+-USBC",
    name: "PoE Integrated AC Adapter",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "AC adapter with integrated PoE+ that powers a UniFi Cloud Gateway via USB-C while delivering up to 30W PoE+ to a connected device—ideal for adding PoE output or supporting a UniFi 5G backup, with flexible wall, DIN rail, or floating mount options.*",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-PoE+-USBC",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Delivers up to 90W of PoE+++",
      "Surge, peak pulse, and overcurrent protection",
      "Contains RJ45 data input, AC cable with earth ground, and PoE+++ output",
      "LED indicator for status monitoring",
      "Supports wall mount, DIN rail and floating mount*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "146 x 62 x 42 mm (5.7 x 2.4 x 1.7')" },
          { label: "Weight", value: "358 g (12.6 oz)" },
          { label: "Length", value: "Cable: 150 cm (4.9 ft) total, including 30 cm split Type-C/Ethernet ends Power cord: 180 cm (5.9 ft)" },
          { label: "Output Voltage", value: "Type-C: 5V@ 5A PoE+: 48V@ 0.65A" },
          { label: "Rated Voltage", value: "100–240V AC at 50/60Hz" },
          { label: "LAN Activity Indicator", value: "—" },
          { label: "Gigabit LAN Port", value: "✓" },
          { label: "Remote Reset Capability", value: "—" },
          { label: "Reset Button", value: "_" },
          { label: "4-pair Powering", value: "Pins 1, 2, 4, 5 (+) and 3, 6, 7, 8 (-)" },
          { label: "Clamping Protection", value: "11V Data, 60V Power" },
          { label: "Data In / PoE", value: "RJ45 Shielded Socket" },
          { label: "Input Current", value: "1.5A Max." },
          { label: "Inrush Current", value: "<120A" },
          { label: "Efficiency", value: ">82%" },
          { label: "Switching Frequency", value: "65 kHz" },
          { label: "Output Ripple", value: "1% Max." },
          { label: "Line Regulation", value: "≤ 5%" },
          { label: "Load Regulation", value: "≤ 5%" },
          { label: "Max. Surge Discharge", value: "1500A (8/20 μs) power" },
          { label: "Peak Pulse Current", value: "36A (10/1000 μs) data" },
          { label: "Response Time", value: "<1 ns" },
          { label: "Shunt Capacitance", value: "<5 pF data" },
          { label: "Surge Protection", value: "Difference and common mode" },
          { label: "Ambient Storage Temperature", value: "-30 to 70°C (-22 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, UL, UKCA, KC, CCC, RoHS" }
        ]
      },
    ],
  },

  //Produk keduaPuluh Tiga dari Accessories, SF PoE & Power
  {
    id: "UACC-Retrofit-PoE-2Wire",
    name: "PoE Over 2-Wire Retrofit Extender",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "A pair of extenders that extends PoE over twisted-pair or coaxial cables, ideal for retrofit scenarios.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Retrofit-PoE-2Wire",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Transmitter (1) PoE++ input",
      "Transmitter (1) 2-wire output",
      "Transmitter (1) 2-wire to BNC adapter",
      "Receiver (1) PoE/PoE+ output",
      "Receiver (1) 2-wire input",
      "Receiver (1) 2-wire to BNC adapter"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "	PoE in/out: 40 x 105 x 25 mm (1.6 x 4.1 x 1') Adapter: 43.5 x 138 x 30 mm (1.7 x 5.4 x 1.2')" },
          { label: "Weight", value: "	PoE in: 77 g (2.7 oz) PoE out: 79 g (2.8 oz) Adapter: 140 g (4.9 oz)" },
          { label: "Enclosure Material", value: "	Polycarbonate" },
          { label: "Mounting material", value: "	Polycarbonate" },
          { label: "Coaxial connector", value: "BNC female" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Networking Interface", value: "	(1) 10/100 MbE(1) Homeplug AV" },
          { label: "Power Method", value: "	PoE++" },
          { label: "PoE input", value: "(1) PoE++, 50V DC, 1.2A" },
          { label: "PoE Output", value: "	(1) PoE+, 48V DC, 0.6A" },
          { label: "Max. Power Consumptlon", value: "	3W (Without PoE output)" },
          { label: "ESD/EMP protection", value: "	Air: ±8kV, contact: ±4kV" },
          { label: "LED", value: "White" },
          { label: "Ambient Operating Temperature", value: "-10 to 40° C (14 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "	5 to 90% noncondensing" },
          { label: "Certifications", value: "	CE, FCC, IC, UL 62368-1, CSA C22.2 No. 62368-1" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
    addons: [
      {
        id: 1,
        name: "G6 Pro Entry",
        image: "/images/dcs-box.png",
        price: 299,
        description: "An intelligent door entry system with native UniFi Protect and UniFi Access integration with a 12MP camera, two-way audio, and a 3' touch display.",
        specs: [
          "Max. Power Consumption 18W",
          "Supported Voltage Range 42—57V DC",
          "Power Method PoE+",
          "Processor Quad-core Arm® Cortex®-A53 based chip"

        ],
        detailedSpecs: [
          { label: "Dimensions", value: "220 x 49.3 x 29.6 mm (8.7 x 1.9 x 1.2')" },
          { label: "IR Night Vision", value: "5 m (16 ft)" },
          { label: "Face Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "Main camera: 12MP Package camera: 8MP" },
          { label: "Field of View", value: "Main camera: H: 100°, V: 136.3°, D: 176.4° (12MP) H: 70.9°, V: 127.5°, D: 147.4° (8MP) Package camera: H: 66°, V: 51.7°, D: 78°" },
          { label: "Audio", value: "Two-way audio" },
          { label: "Weatherproofing", value: "IP55" },
          { label: "Tamper Resistance", value: "IK07 LCM IK04" },
          { label: "Mounting", value: "Wall mount, Gangbox mount plate, 20° wedge mount (Included) Junction box (Optional)" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "PIN Access", value: "✓" },
          { label: "Apple/Google Wallet", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Two-Way Intercom & Doorbell Access", value: "✓" },
          { label: "UniFi Application Suite Protect", value: "✓" },
          { label: "UniFi Application Suite Access", value: "✓" },
          { label: "Performance Networking Interface", value: "GbE RJ45 port" },
          { label: "Performance Connectivity", value: "BLE 4.1 NFC" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate Main camera: 12MP, 20 FPS or 8", value: "Main camera: 12MP, 20 FPS or 8MP, 30 FPS Package camera: 3 FPS" },
          { label: "Video Resolution", value: "Main camera: 12MP, 3024 x 4096 (3:4) or 8MP, 2160 x 3840 (9:16) Package camera: 8MP, 3264 x 2448 (4:3)" },
          { label: "Optics Sensor", value: "Main camera: 12MP CMOS Package camera: 8MP CMOS" },
          { label: "Optics Lens", value: "Fixed focal length" },
          { label: "OpticsNight Mode", value: "Built-in IR LED illumination and IR cut filter" }
        ],
        productLink: "/products/mounting-kit"
      },
      {
        id: 2,
        name: "G6 Entry",
        image: "/images/dcs-box.png",
        price: 299,
        description: "An intelligent door entry system with native UniFi Protect and UniFi Access integration.",
        specs: [
          "Max. Power Consumption 16W",
          "Supported Voltage Range 42—57V DC",
          "Power Method PoE+",
          "Processor Quad-core Arm® Cortex®-A53 based chip"

        ],
        detailedSpecs: [
          { label: "Dimensions", value: "176 x 45 x 29.6 mm (6.9 x 1.8 x 1.2')" },
          { label: "IR Night Vision", value: "5 m (16 ft)" },
          { label: "Face Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "Main camera: 5MP Package camera: 8MP" },
          { label: "Field of View", value: "Main camera: H: 100°, V: 135°, D: 180° Package camera: H: 66°, V: 51.7°, D: 78°" },
          { label: "Audio", value: "Two-way audio" },
          { label: "Weatherproofing", value: "IP55" },
          { label: "Tamper Resistance", value: "  IK07" },
          { label: "Mounting", value: "Wall mount, Gangbox mount plate, 20° wedge mount (Included) Junction box (Optional)" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "PIN Access", value: "✓" },
          { label: "Apple/Google Wallet", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Two-Way Intercom & Doorbell Access", value: "✓" },
          { label: "UniFi Application Suite Protect", value: "✓" },
          { label: "UniFi Application Suite Access", value: "✓" },
          { label: "Performance Networking Interface", value: "GbE RJ45 port" },
          { label: "Performance Connectivity", value: "BLE 4.1 NFC" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate Main camera: 12MP, 20 FPS or 8", value: "Main camera: 30 FPSPackage camera: 3 FPS" },
          { label: "Video Resolution", value: "Main camera: 5MP, 1920 x 2560 (3:4) Package camera: 8MP 3264 x 2448 (4:3)" },
          { label: "Optics Sensor", value: "Main camera: 5MP CMOS Package camera: 8MP CMOS" },
          { label: "Optics Lens", value: "Fixed focal length" },
          { label: "OpticsNight Mode", value: "Built-in IR LED illumination and IR cut filter" }
        ],
        productLink: "/products/mounting-kit"
      },
    ]
  },

  //Produk Kedua Puluh Empat dari Accessories, SF PoE & Power
  {
    id: "UACC-Adapter-AC-210W",
    name: "AC Adapter 210W",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "An AC power adapter delivers 210W at 54V DC for a PoE switch.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Adapter-AC-210W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Wall-mountable"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "190 x 86 x 26 mm (7.5 x 3.4 x 1')" },
          { label: "Weight", value: "1.2 kg (2.6 lb)" },
          { label: "AC Connector", value: "C14 INLET (input)" },
          { label: "Output Plug", value: "DC plug: 5.5 x 2.1 x 11.5 mm (0.2 x 0.08 x 0.5') DC cable: UL11353 16AWG 1.5 m (4.9 ft)" },
          { label: "Supported Voltage Range", value: "Input: 100-240V AC Output: 54V DC" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
        ]
      },
    ],

    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ]

  },

  //Produk Kedua Puluh Lima dari Accessories, SF PoE & Power
  {
    id: "UACC-Adapter-PoE-USBC",
    name: "PoE to USB-C Adapter",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "Versatile adapter that provides power and connectivity to USB-C devices, including compatible Protect WiFi cameras.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Adapter-PoE-USBC",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "(1) GbE PoE input",
      "(1) USB-C output",
      "Transforms the G4 Doorbell Pro* and G4/G6 Instant** into a wired PoE camera",
      "Provide GbE connectivity*** to USB-C device, such as notebook"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "Without cable: ⌀30.4 x 95 mm (⌀1.2 x 3.7')" },
          { label: "Weight", value: "85 g (3 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Ports", value: "(1) Input: RJ45 (1) Output: USB Type-C" },
          { label: "Networking Interface", value: "(1) Input: RJ45 (1) Output: USB Type-C" },
          { label: "Power Method", value: "PoE" },
          { label: "Input Rating", value: "48V DC, 0.25A" },
          { label: "Output Rating", value: "5V DC, 2A" },
          { label: "ESD/EMP Protection", value: "Air: ± 8kV, contact: ± 4kV" },
          { label: "Compatibility", value: "Camera G4 Instant (UVC-G4-INS) G4 DoorBell Pro (UVC-G4-Doorbell-Pro)" },
          { label: "Ambient Operating Temperature", value: "-10 to 40° C (14 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],
  },

  //Produk Kedua Puluh Enam dari Accessories, SF PoE & Power
  {
    id: "USP-Cable",
    name: "SmartPower Cable",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "A cable used to deliver redundant power from an associated SmartPower device.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "USP-Cable",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Supported UniFi SmartPower connect",
      "Cable length 1.5 m"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Length", value: "1.5 m (4.9 ft)" },
          { label: "Insulation", value: "Thickness: 0.35 mm (0.01') Diameter: 2 mm (0.08') Material: PVC" },
          { label: "Conductor Wire Gauge", value: "(18) 16 AWG (6) 24 AWG" },
          { label: "Cable Jacket Material", value: "PVC" },
          { label: "Cable Jacket Outer Diameter", value: "9.5 x 23 mm (0.4 x 0.9')" },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },

  //Produk Kedua Puluh Tujuh dari Accessories, SF PoE & Power
  {
    id: "UACC-Cable-USB-100W-2M-BK",
    name: "USB-C Cable with Charge Display",
    category: "Accessories",
    subfilter: "PoE & Power",
    image: "/images/camera.jpg",
    shortDescription:
      "Braided power and data cable with a double-sided charge display.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Cable-USB-100W-2M-BK",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-CloudKey-Enterprise.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    /* overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ], */

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Integrated power meter",
      "100W max power output",
      "480 Mbps max data transfer rate (0.3 / 1 / 2 m length only)",
      "Durable braided cable design"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Available Lengths", value: "0.3/1/2/4.5/7 m (1/3.3/6.6/13.1/23 ft)" },
          { label: "Shielding Type", value: "Shielded twisted pair (STP)" },
          { label: "Conductor Type", value: "Stranded tinned copper" },
          { label: "Conductor Wire Gauge", value: "0.3/1/2: (3) 24AWG (2) 30AWG (2) 32AWG 4.5/7 m: (7) 23AWG (3) 32AWG" },
          { label: "Cable Jacket Diameter", value: "0.3/1/2: 4.4 mm (0.17') 4.5/7 m: 5.3 mm (0.2')" },
          { label: "Cable Jacket Material", value: "PP & PET braiding" },
          { label: "Cable Jacket Color", value: "Black, cool gray" },
          { label: "Cable Cable Connector Type", value: "USB Type-C" },
          { label: "Bend Radius", value: "0.3/1/2 m: 15 mm (0.6') 4.5/7 m: 27 mm (1.1')" },
          { label: "Power Output", value: "Max. 100W PD" },
          { label: "Ambient Operating Temperature", value: "-20 to 60° C (-4 to 140° F)" },
          { label: "Ambient Operating Humadity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },

  //Produk Pertama dari Accessories, SF For APs
  {
    id: "WM-W",
    name: "WiFiMan Wizard",
    category: "Accessories",
    subfilter: "For APs",
    image: "/images/camera.jpg",
    shortDescription:
      "A portable spectrum analyzer designed for the WiFiMan iOS and Android mobile app.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "WM-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "2.4 GHz and 5 GHz unlicensed band scanning",
      "240 minutes continuous scanning battery life",
      "BLE smartphone pairing with USB-C charging port",
      "iPhone Magsafe attachable support*"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "78.5 x 50.5 x 7.9 mm (3.1 x 2 x 0.3')" },
          { label: "Weight", value: "32 g (1.1 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Weatherproofing", value: "IP55" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Power Method", value: "Li-ion battery" },
          { label: "Power Supply", value: "Rechargeable Li-ion battery, 3.7V DC, 300mAh" },
          { label: "Supported Voltage Range", value: "USB-C: 5V DC/1A" },
          { label: "Max. Power Consumption", value: "32.4mW" },
          { label: "SSID Scan Frequency Range", value: "2.4 to 2.5 GHz 5.15 to 5.85 GHz" },
          { label: "SSID Scan Amplitude Range", value: "-96 dBm to 0 dBm" },
          { label: "SSID Scan Amplitude Resolution", value: "1 dBm" },
          { label: "LEDs", value: "W/B/R" },
          { label: "Buttons", value: "(1) Power (1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 10051-23-08356" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements Mobile App", value: "UniFi WiFiman iOS™: Version 0.18.0 and later UniFi WiFiman Android™: Version 1.15.0 and later" },
        ]
      }
    ],
  },

  //Produk Kedua dari Accessories, SF For APs
  {
    id: "UACC-UK-Ultra-Panel-Antenna",
    name: "Panel Antenna",
    category: "Accessories",
    subfilter: "For APs",
    image: "/images/camera.jpg",
    shortDescription:
      "Sleek, clip-on external antenna for the Swiss Army Knife that provides 90-degree directional, extended range coverage.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-UK-Ultra-Panel-Antenna",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "High-efficiency 90° directional radiation pattern",
      "Optimized for dual-band, extended range coverage",
      "Clip-on attachment with support for all Swiss Army Knife mounting methods",
      "Weatherproof (outdoor exposed)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "138 x 207 x 43 mm (5.4 x 8.1 x 1.7')" },
          { label: "Weight", value: "450 g (1 lb)" },
          { label: "Enclosure Material", value: "UV-stabilized polycarbonate, aluminum" },
          { label: "Mounting", value: "1~2' on pipe outer diameter Compatible with the UK-Ultra" },
          { label: "Wind Survivability", value: "75 N at 200 km/h (16.7 lbf at 125 mph)" },
          { label: "Weatherproofing", value: "IPX6" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Antenna Gain 5 GHz", value: "15 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "10 dBi" },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },

  //Produk Ketiga dari Accessories, SF For APs 
  {
    id: "UMA-D",
    name: "AC Mesh Dual-Band Antenna",
    category: "Accessories",
    subfilter: "For APs",
    image: "/images/camera.jpg",
    shortDescription:
      "An optional mesh antenna for AC Mesh.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UMA-D",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Outdoor weather-resistant enclosure",
      "High-efficiency directional radiation pattern",
      "Dual-band, dual-polarity optimized for 802.11ac",
      "Ball joint 3-axis mount for precise aiming",
      "Wall and pole mount included"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "201.3 x 128 x 32.5 mm (7.9 x 5 x 1.3')" },
          { label: "Weight", value: "Without mount: 400 g (0.9 lb) With mount: 480 g (1.1 lb)" },
          { label: "Enclosure Material", value: "Outdoor UV-stabilized plastic" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Supported Frequency Range", value: "2.4-2.5 GHz 5.1-5.9 GHz" },
          { label: "RF Connections", value: "(2) RP-SMA" },
          { label: "Gain 5 GHz", value: "15 dBi" },
          { label: "Gain 2.4 GHz", value: "10 dBi" },
          { label: "HPOL Beamwidth 5 GHz", value: "45°" },
          { label: "HPOL Beamwidth 2.4 GHz", value: "90°" },
          { label: "VPOL Beamwidth 5 GHz", value: "45°" },
          { label: "VPOL Beamwidth 2.4 GHz", value: "90°" },
          { label: "Elevation Beamwidth 5 GHz", value: "45°" },
          { label: "Elevation Beamwidth 2.4 GHz", value: "90°" },
          { label: "Max VSWR", value: "2:1" },
          { label: "Polarization", value: "Dual-linear" },
          { label: "Cross-Pol Isolation 5 GHz", value: "30 dB" },
          { label: "Cross-Pol Isolation 2.4 GHz", value: "25 dB" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "Anatel: 06187-19-08356" }
        ]
      },
    ],
  },

  //Produk Keempat dari Accessories, SF For APs
  {
    id: "UACC-UK-Ultra-Omni-Antenna-AO",
    name: "Swiss Army Knife Omni Antenna",
    category: "Accessories",
    subfilter: "For APs",
    image: "/images/camera.jpg",
    shortDescription:
      "Antenna accessory that provides omnidirectional, extended range coverage for Swiss Army Knife Ultra.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-UK-Ultra-Omni-Antenna-AO",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "High-efficiency omnidirectional radiation pattern",
      "Optimized for dual-band, extended range coverage",
      "Weatherproof (outdoor exposed)",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "154 x 15 x 15 mm (6.1 x 0.6 x 0.6')" },
          { label: "Weight", value: "42 g (1.5 oz) a pair" },
          { label: "Enclosure Material", value: "Thermoplastic polyester elastomer, polycarbonate, polybutylene terephthalate, polyoxymethylene" },
          { label: "Weatherproofing", value: "IPX6" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Antenna Gain 5 GHz", value: "4 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "3 dBi" }
        ]
      },
    ],
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  //Produk Kelima dari Accessories, SF For APs
  {
    id: "UACC-U7-Pro-Wall-FM",
    name: "U7 Pro Wall Paintable Flush Mount",
    category: "Accessories",
    subfilter: "For APs",
    image: "/images/camera.jpg",
    shortDescription:
      "Paintable mounting kit for the U7 Pro Wall that enables near-invisible, recessed installation.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-U7-Pro-Wall-FM",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Polycarbonate"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "190 x 142 x 49 mm (7.5 x 5.6 x 1.9')" },
          { label: "Weight", value: "213 g (7.5 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
        ]
      },
    ],
  },

  //Produk Keenam dari Accessories, SF For APs
  {
    id: "UACC-U7-Pro-Wall-TS",
    name: "U7 Pro Wall Table Stand",
    category: "Accessories",
    subfilter: "For APs",
    image: "/images/camera.jpg",
    shortDescription:
      "Lightweight, aluminum table stand for the U7 Pro Wall.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-U7-Pro-Wall-TS",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Polycarbonate"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: " 92.1 x 80 x 183.6 mm (3.6 x 3.1 x 7.2')" },
          { label: "Weight", value: "222 g (7.8 oz)" },
          { label: "Enclosure Material", value: "Aluminum" },
          { label: "Mounting Material", value: "Polycarbonate" }
        ]
      },
    ],
  },

  //Produk Ketujuh dari Accessories, SF For APs
  {
    id: "UACC-U7-Pro-XG-Wall-TS",
    name: "U7 Pro XG Wall Table Stand",
    category: "Accessories",
    subfilter: "For APs",
    image: "/images/camera.jpg",
    shortDescription:
      "Table stand accessory for U7 Pro XG Wall access points.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-U7-Pro-XG-Wall-TS",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Polycarbonate"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "181.9 x 83.8 x 77.5 mm (7.2 x 3.3 x 3.1')" },
          { label: "Weight", value: "200 g (7.1 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy, silicone rubber" }
        ]
      },
    ],
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  //Produk Kedelapan dari Accessories, SF For APs
  {
    id: "UACC-U7-Cover",
    name: "U7 Paintable Cover",
    category: "Accessories",
    subfilter: "For APs",
    image: "/images/camera.jpg",
    shortDescription:
      "Protective cover for the U7 Pro and U7 Pro Max that can be painted for a custom appearance.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-U7-Cover",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Blends seamlessly into a variety of backgrounds",
      "Sold as a single pack",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀217.4 x 48.3 mm (⌀8.6 x 1.9')" },
          { label: "Weight", value: "129 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Compatible Coloring Materials", value: "Spray can (Krylon/Telox) Acrylic color Poster color (Pentel) Coloring pen (Gel pen/Sharpie)" }
        ]
      },
    ],
  },

  //Produk Kesembilan dari Accessories, SF For APs
  {
    id: "nHD-cover-Camo-3",
    name: "U6+ Cover",
    category: "Accessories",
    subfilter: "For APs",
    image: "/images/camera.jpg",
    shortDescription:
      "Customized encasing for U6+, U6 Lite and nanoHD.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "nHD-cover-Camo-3",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Blends seamlessly into a variety of backgrounds",
      "Sold as a 3-pack",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀169.3 x 34.2 mm  (⌀6.7 x 1.3')" },
          { label: "Weight", value: "70 g (2.5 oz)" },
          { label: "Enclosure Material", value: "Black/Camo/Concrete/Marble/Wood: Polycarbonate Fabric: Polycarbonate, acrylonitrile butadiene styrene, fabric" },
          { label: "Available Colors", value: "Black Camo Concrete Fabric Marble Wood" }
        ]
      },
    ],
  },

  //Produk Kesepuluh dari Accessories, SF For APs
  {
    id: "U-PRO-MP",
    name: "Flagship AP Replacement Mounting System",
    category: "Accessories",
    subfilter: "For APs",
    image: "/images/camera.jpg",
    shortDescription:
      "Professional mounting system for UniFi access points.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "U-PRO-MP",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Variety of mounting holes for different applications",
      "Legend printed on the mounting plate for identifying the holes used for each AP"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "175.6 mm (6.9')" },
          { label: "Weight", value: "139 g (4.9 oz)" },
          { label: "Enclosure Material", value: "Stainless steel" }
        ]
      },
    ],
  },

  //Produk Keseblas dari Accessories, SF For APs
  {
    id: "UACC-AP-AM",
    name: "AP Arm Mount",
    category: "Accessories",
    subfilter: "For APs",
    image: "/images/camera.jpg",
    shortDescription:
      "Wall mount for full-size UniFi Flagship WiFi access points.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-AP-AM",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Polycarbonate"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "200.5 x 175.1 x 31.2 mm (7.9 x 6.9 x 1.2')" },
          { label: "Weight", value: "160 g (5.6 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" }
        ]
      },
    ],
  },

  //Produk KeduaBelas dari Accessories, SF For APs
  {
    id: "UACC-Lite-AP-AM",
    name: "AP Lite Arm Mount",
    category: "Accessories",
    subfilter: "For APs",
    image: "/images/camera.jpg",
    shortDescription:
      "Wall mount for full-size UniFi Flagship WiFi access points.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Lite-AP-AM",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Plastic"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "	149 x 89 x 29 mm (5.9 x 3.5 x 1.1 ')" },
          { label: "Weight", value: "	45 g (1.59 oz)" },
          { label: "Enclosure Material", value: "Plastic" }
        ]
      },
    ],
  },

  //Produk Kedua Belas dari Accessories, SF For APs
  {
    id: "nanoHD-RetroFit-3",
    name: "Compact Flagship AP Retrofit Mount",
    category: "Accessories",
    subfilter: "For APs",
    image: "/images/camera.jpg",
    shortDescription:
      "Retrofit mount for U6 Lite, U6+, and nanoHD.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "nanoHD-RetroFit-3",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Allows installation over existing UniFi AP mounting brackets",
      "Sold as a 3-pack"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀187.8 x 16.7 mm (⌀7.4 x 0.7')" },
          { label: "Weight", value: "105 g (3.7 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" }
        ]
      },
    ],
  },

  //Produk Ketiga Belas dari Accessories, SF For APs
  {
    id: "nanoHD-RCM-3",
    name: "Compact Flagship AP Recessed Ceiling Mount",
    category: "Accessories",
    subfilter: "For APs",
    image: "/images/camera.jpg",
    shortDescription:
      "Recessed ceiling mount for U6 Lite, U6+, AC Lite and nanoHD.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "nanoHD-RCM-3",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Low-profile mounting option to sit discreetly within your ceiling",
      "Sold as a 3-pack"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀210 x 20.6 mm (⌀8.3 x 0.8')" },
          { label: "Weight", value: "310 g (10.9 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, SGCC" }
        ]
      },
    ],
  },
  //Produk Keempat Belas dari Accessories, SF For APs
  {
    id: "UACC-UK-Ultra-TS",
    name: "Swiss Army Knife Table Stand",
    category: "Accessories",
    subfilter: "For APs",
    image: "/images/camera.jpg",
    shortDescription:
      "Table stand accessory for Swiss Army Knife Ultra.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-UK-Ultra-TS",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Thermoplastic polyester elastomer, polycarbonate, polybutylene terephthalate, polyoxymethylene"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "92.7 x 41.8 x 58.8 mm (3.6 x 1.6 x 2.3')" },
          { label: "Weight", value: "98 g (3.5 oz)" },
          { label: "Enclosure Material", value: "Thermoplastic polyester elastomer, polycarbonate, polybutylene terephthalate, polyoxymethylene" }
        ]
      },
    ],
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  //Produk Kelima Belas dari Accessories, SF For APs
  {
    id: "FlexHD-CM-3",
    name: "Mesh AP In-Ceiling Mount",
    category: "Accessories",
    subfilter: "For APs",
    image: "/images/camera.jpg",
    shortDescription:
      "Recessed ceiling mount for U6 Mesh and FlexHD.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "FlexHD-CM-3",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Mounts to a drop ceiling tile, drywall* ceiling, or solid ceiling",
      "Sliding retainer** with locking threads and a snap-in mechanism for the AP",
      "Sold as a 3-pack"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀87.1 x 112 mm (⌀3.4 x 4.4')" },
          { label: "Weight", value: "85 g (3 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mounting", value: "Indoors only" },
          { label: "Pack Options", value: "3-Pack" }
        ]
      },
    ],
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  //Produk Keenam Belas dari Accessories, SF For APs
  {
    id: "UACC-U7-Pro-XG-Wall-Cover",
    name: "U7 Pro XG Wall Paintable Cover",
    category: "Accessories",
    subfilter: "For APs",
    image: "/images/camera.jpg",
    shortDescription:
      "Cover for U7 Pro XG Wall that can be painted for a customized appearance.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-U7-Pro-XG-Wall-Cover",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Blends seamlessly into a variety of backgrounds",
      "Sold as a single pack"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "112.7 x 159.7 x 37.1 mm (4.4 x 6.3 x 1.5')" },
          { label: "Weight", value: "80 g (2.8 oz)" },
          { label: "Treatment", value: "Painting" }
        ]
      },
    ],
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  //Produk Ketujuh Belas dari Accessories, SF For APs
  {
    id: "UACC-U7-Pro-Wall-Cover",
    name: "U7 Pro Wall Paintable Cover",
    category: "Accessories",
    subfilter: "For APs",
    image: "/images/camera.jpg",
    shortDescription:
      "Cover for U7 Pro Wall that can be painted for a customized appearance.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-U7-Pro-Wall-Cover",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Blends seamlessly into a variety of backgrounds",
      "Sold as a single pack"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "157.8 x 110.8 x 39.5 mm (6.2 x 4.4 x 1.6')" },
          { label: "Weight", value: "86 g (3 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" }
        ]
      },
    ],
  },

  //Produk Kedelapan Belas dari Accessories, SF For APs
  {
    id: "EXTD-cover-Black-3",
    name: "U6 Extender Cover",
    category: "Accessories",
    subfilter: "For APs",
    image: "/images/camera.jpg",
    shortDescription:
      "Customized encasing for U6 Extender and BeaconHD.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "EXTD-cover-Black-3",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Blends seamlessly into a variety of backgrounds",
      "Sold as a 3-pack"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "172 x 113.6 x 32.7 mm (6.8 x 4.5 x 1.3')" },
          { label: "Weight", value: "35 g (1.2 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Available Colors", value: "Black Concrete Wood" }
        ]
      },
    ],
  },

  //Produk Kesembilan Belas dari Accessories, SF For APs
  {
    id: "IW-HD-BK-3",
    name: "In-Wall HD Cover",
    category: "Accessories",
    subfilter: "For APs",
    image: "/images/camera.jpg",
    shortDescription:
      "Customized encasing for In-Wall HD.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "IW-HD-BK-3",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Blends seamlessly into a variety of backgrounds",
      "Sold as a 3-pack"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "145.6 x 93.6 x 27.7 mm  (5.7 x 3.7 x 1.1')" },
          { label: "Weight", value: "56 g (2 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Available Colors", value: "Black Camo Concrete Marble Wood" }
        ]
      },
    ],
  },

  //Produk Pertama dari Accessories, SF For Cameras
  {
    id: "UP-AI-Horn-Speaker-B",
    name: "AI Horn Speaker",
    category: "Accessories",
    subfilter: "For Cameras",
    image: "/images/camera.jpg",
    shortDescription:
      "All-weather PoE 120 dB horn speaker with advanced AI alert functionality and versatile wall, corner, and pole mounting options.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UP-AI-Horn-Speaker-B",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Blends seamlessly into a variety of backgrounds",
      "Sold as a 3-pack"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Device: 267 x 189 x 247 mm (10.5 x 7.4 x 9.7') Articulating mount: ⌀104 x 149.4 mm  (⌀4.1 x 5.9')" },
          { label: "Mounting", value: "Articulating mount for wall, pole mount (Included)" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "Device: 1.55 kg (2.4 lb) Articulating mount: 1.3 kg (2.9 lb)" },
          { label: "Enclosure Material", value: "UV-stabilized polycarbonate, aluminum alloy" },
          { label: "Mounting Material", value: "Stainless steel, aluminum alloy" },
          { label: "Pole Mount Diameter", value: "1—2.5' (25—63.5 mm)" },
          { label: "Weatherproofing", value: "IP66" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Power Method", value: "PoE+" },
          { label: "Max. Power Consumption", value: "14.3W" },
          { label: "Speaker", value: "✓" },
          { label: "Networking Interface", value: "(1) 100/10 MbE RJ45 port" },
          { label: "LEDs System", value: "R/G/B/W" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-40 to 60° C (-40 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "Certifications", value: "FCC, IC, CE" },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management Application UniFi Protect Web", value: "✓" },
          { label: "Management Application UniFi Protect iOS™ and Android™", value: "✓" }
        ]
      },
    ],
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  // Produk Kedua dari Accessories, SF For Cameras
  {
    id: "UP-FloodLight",
    name: "Floodlight",
    category: "Accessories",
    subfilter: "For Cameras",
    image: "/images/camera.jpg",
    shortDescription:
      "Bright, motion-triggered light.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UP-FloodLight",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Intense 550 lumens of LED light",
      "Wall-mountable",
      "Motion detection",
      "Weatherproof (outdoor exposed)",
      "Connect and power using PoE"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "135 x 65 x 50 mm (5.3 x 2.6 x 2')" },
          { label: "Weight", value: "Without mount: 216 g (7.6 oz) With flat wall mount: 236 g (8.3 oz) With angle mount: 273 g (9.6 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy" },
          { label: "Mounting Material", value: "Angle Mount: Polycarbonate Flat Wall Mount: Polycarbonate" },
          { label: "Weatherproofing", value: "IPX5" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Networking Interface", value: "10/100 MbE RJ45 port" },
          { label: "Power Method", value: "PoE, 48V DC, 0.22A Max." },
          { label: "Max. Power Consumption", value: "12.95W" },
          { label: "ESD/EMP Protection", value: "Air: ± 8kV, contact: ± 8kV" },
          { label: "Radio Frequency", value: "Bluetooth 4.0" },
          { label: "LEDs", value: "R/B/W" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-10 to 45° C (14 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "20 to 80% noncondensing" },
          { label: "Certifications", value: "FCC, IC, CE, Anatel: 08447-22-08356" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements Web Application", value: "UniFi Protect" },
          { label: "Application Requirements Mobile App", value: "UniFi Protect iOS™ and Android™" }
        ]
      },
    ],
  },

  //Produk Ketiga dari Accessories, SF For Cameras
  {
    id: "UACC-Adapter-PoE-USBC",
    name: "PoE to USB-C Adapter",
    category: "Accessories",
    subfilter: "For Cameras",
    image: "/images/camera.jpg",
    shortDescription:
      "Versatile adapter that provides power and connectivity to USB-C devices, including compatible Protect WiFi cameras.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Adapter-PoE-USBC",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "(1) GbE PoE input",
      "(1) USB-C output",
      "Provide GbE connectivity*** to USB-C device, such as notebook *G4 Doorbell Pro PoE to USB-C Cable sold separately. **G4/G6 Instant PoE to USB-C Cable sold separately. ***Speed depends on USB-C cable max data transfer rate.",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "Without cable: ⌀30.4 x 95 mm (⌀1.2 x 3.7')" },
          { label: "Weight", value: "85 g (3 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Ports", value: "(1) Input: RJ45 (1) Output: USB Type-C" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port (Data out)" },
          { label: "Power Method", value: "PoE" },
          { label: "Input Rating", value: "48V DC, 0.25A" },
          { label: "Output Rating", value: "5V DC, 2A" },
          { label: "ESD/EMP Protection", value: "Air: ± 8kV, contact: ± 4kV" },
          { label: "Compatibility", value: "Camera G4 Instant (UVC-G4-INS) G4 DoorBell Pro (UVC-G4-Doorbell-Pro)" },
          { label: "Ambient Operating Temperature", value: "-10 to 40° C (14 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],
  },

  // Produk Keempat dari Accessories, SF For Cameras
  {
    id: "UACC-Camera-CJB-B",
    name: "Camera Compact Junction Box",
    category: "Accessories",
    subfilter: "For Cameras",
    image: "/images/camera.jpg",
    shortDescription:
      "Tamper-resistant junction box for compact UniFi Dome and Turret cameras that enhances mounting durability, aesthetics, and ease of maintenanc",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Camera-CJB-B",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Supports flat surface, pole and pendant mounting",
      "Includes side and rear 3/4' conduit entrances"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Longer holder: 87 x 147 x 49 mm (3.4 x 5.8 x 1.9') Shorter cap:  87 x 110 x 49 mm (3.4 x 4.3 x 1.9')" },
          { label: "Pole Mount Diameter", value: "1.5-2' (38-50 mm)" },
          { label: "Weight", value: "Box: 270 g (9.5 oz) Longer holder: 125 g (4.4 oz) Shorter cap: 80 g (2.8 oz)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Mounting Material", value: "Aluminum alloy" },
          { label: "Compatibility", value: "UVC-G5-Dome-Ultra UVC-G5-Turret-Ultra UVC-G6-Bullet" }
        ]
      },
    ],
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  // Produk Kelima dari Accessories, SF For Cameras
  {
    id: "UACC-Camera-JB-B",
    name: "Camera Junction Box",
    category: "Accessories",
    subfilter: "For Cameras",
    image: "/images/camera.jpg",
    shortDescription:
      "Tamper-resistant junction box for UniFi Bullet, Dome, and Turret cameras that enhances mounting durability, aesthetics, and ease of maintenance.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Camera-JB-B",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Supports flat surface, pole and pendant mounting",
      "Includes side and rear 3/4' conduit entrances"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀140.4 x 59.7 mm (⌀5.5 x 2.4')" },
          { label: "Pole Mount Diameter", value: "1.5–2' (38–50 mm)" },
          { label: "Weight", value: "Junction box: 470 g (16.6 oz) Mount Holder: 66 g (2.3 oz) Deco ring: 17g (0.6 oz) Pole mount: 62 g (2.2 oz)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Mounting Material", value: "G3/4''" },
          { label: "Compatibility", value: "UVC-AI-Bullet UVC-AI-PRO UVC-AI-DSLR UVC-AI-Dome UVC-AI-Turret UVC-G6-Bullet UVC-G6-Turret UVC-G6-Pro-Turret UVC-G6-Dome UVC-G6-Pro-Dome UVC-G6-180 UVC-G5-Dome UVC-G5-Dome-Ultra UVC-G5-Turret-Ultra UVC-G5-Pro UVC-G5-Bullet UVC-G4-Pro UVC-G4-Bullet UVC-G4-Dome UVC-G3-Pro UVC-G3-Bullet" }
        ]
      },
    ],
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },
  // Produk Keenam dari Accessories, SF For Cameras
  {
    id: "UACC-AI-360-JB",
    name: "AI 360 Junction Box",
    category: "Accessories",
    subfilter: "For Cameras",
    image: "/images/camera.jpg",
    shortDescription:
      "Tamper-resistant junction box for the AI 360 that enhances mounting durability and ease of maintenance.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-AI-360-JB",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Supports flat surface, pole and pendant mounting",
      "Includes side and rear 3/4' conduit entrances"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀173.2 x 76 mm (⌀6.8 x 3')" },
          { label: "Weight", value: "720 g (1.6 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Mounting Material", value: "Aluminum alloy" },
          { label: "Weatherproofing", value: "IPX6" },
          { label: "Resistance", value: "IK08" },
          { label: "Threaded Outlets", value: "3/4''" },
          { label: "Compatibility", value: "UVC-AI-360 UVC-G6-Pro-360" }
        ]
      },
    ],
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  // Produk Ketujuh dari Accessories, SF For Cameras
  {
    id: "UACC-Camera-AM-B",
    name: "Camera Arm Mount",
    category: "Accessories",
    subfilter: "For Cameras",
    image: "/images/camera.jpg",
    shortDescription:
      "Arm mount accessory that attaches the UniFi Turret cameras to a wall, corner, or pole.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Camera-AM-B",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Supports 3/4” conduit",
      "Weatherproof (outdoor exposed)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "115 x 252 x 90 mm (4.5 x 9.9 x 3.5')" },
          { label: "Pole Mount Diameter", value: "1.5–2' (38–50 mm)" },
          { label: "Weight", value: "670 g (1.5 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Mounting Material", value: "Aluminum alloy" },
          { label: "Weatherproofing", value: "IP66" },
          { label: "Compatibility", value: "UVC-AI-Dome UVC-AI-Turret UVC-G6-Turret UVC-G6-Pro-Turret UVC-G6-Dome UVC-G6-Pro-Dome UVC-G6-180 UVC-G6-Pro-360 UVC-G5-Turret-Ultra" }
        ]
      },
    ],
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  // Produk Kedelapan dari Accessories, SF For Cameras
  {
    id: "UACC-G4-Dome-Arm Mount",
    name: "Dome Camera Arm Mount",
    category: "Accessories",
    subfilter: "For Cameras",
    image: "/images/camera.jpg",
    shortDescription:
      "Arm mount accessory that attaches the G4 or G5 Dome camera to a wall.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-G4-Dome-Arm Mount",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Allows to mount a Dome camera to the wall instead of the ceiling",
      "Able to create focused camera sightlines",
      "Wall mountable"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "123.8 x 114 x 31.5 mm (4.87 x 4.49 x 1.24')" },
          { label: "Pole Mount Diameter", value: "1.5–2' (38–50 mm)" },
          { label: "Weight", value: "73 g (2.6 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
        ]
      },
    ],
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  //Produk Kesembilan dari Accessories, SF For Cameras
  {
    id: "UACC-Bullet-AB-W",
    name: "Bullet Camera Angled Base",
    category: "Accessories",
    subfilter: "For Cameras",
    image: "/images/camera.jpg",
    shortDescription:
      "Bullet camera mounting accessory that enhances tilt angle by 22° to achieve an unrestricted viewing angle.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Bullet-AB-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Ideal for mounting under eaves",
      "Supports G5 Pro Enhancer and AI DSLR Outdoor Case"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀62 x 55 mm (⌀2.4 x 2.2')" },
          { label: "Pole Mount Diameter", value: "1.5–2' (38–50 mm)" },
          { label: "Weight", value: "65 g (2.3 oz)" },
          { label: "Available Colors", value: "Black White" },
          { label: "Weatherproofing", value: "IPX5" },
          { label: "Compatibility", value: "UACC-Bullet-AB-W: UVC-G4-Pro, UVC-G5-Pro, UVC-AI-Pro-W UACC-Bullet-AB-B: UVC-AI-Bullet, UVC-AI-Pro, UVC-AI-DSLR" }
        ]
      },
    ],
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  //Produk Kesepuluh dari Accessories, SF For Cameras
  {
    id: "UACC-AI-Pro-Enhancer-B/W",
    name: "AI Enhancer",
    category: "Accessories",
    subfilter: "For Cameras",
    image: "/images/camera.jpg",
    shortDescription:
      "Long-range IR LED, floodlight, and radar detection accessory for the AI Pro.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-AI-Pro-Enhancer",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Radar Recommended Mounting Height 2-5 m (6.6-16.4 ft)",
      "Enclosure Material Alumunium Alloy, Polycarbonate"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "130 x 155 x 126 mm (5.1 x 6.1 x 5')" },
          { label: "Weight", value: "490 g (1.1 lb)" },
          { label: "Enclosure Material", value: "Alumunium Alloy, Polycarbonate" },
          { label: "Mount Material", value: "Aluminum alloy" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Radar Recommended Mounting Height", value: "2-5 m (6.6-16.4 ft)" },
          { label: "Radar Recommended Mounting Tilt", value: "0-30°" },
          { label: "Radar Detection Range", value: "Person: 0.-20 m (1.6-65.6 ft) Vehicle: 2-35 m (6.6-115 ft)" },
          { label: "Radar Field of Detection", value: "H: 110°" },
          { label: "Radar Distance Accuracy", value: "0.5 m (1.6 ft)" },
          { label: "IR distance", value: "40 m (131 ft)" },
          { label: "Lights", value: "5700K, 600 lm" },
          { label: "Speaker", value: "✓" },
          { label: "Power Method", value: "Camera AI Pro" },
          { label: "Power Supply", value: "5V DC, 3A" },
          { label: "Max. Power Consumption", value: "15W" },
          { label: "Ambient Operating Temperature", value: "-30 to 50°C (-22 to 122°F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" }
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements Web Application", value: "UniFi Protect" },
          { label: "Application Requirements Mobile App", value: "UniFi Protect iOS™ and Android™" }
        ]
      },
    ],
  },

  // Produk Kesebalas dari Accessories, SF For Cameras
   {
    id: "UACC-Pro-Bullet-Enhancer-B-B/W",
    name: "Pro Bullet Enhancer",
    category: "Accessories",
    subfilter: "For Cameras",
    image: "/images/camera.jpg",
    shortDescription:
      "Long-range IR LED, floodlight, and radar detection accessory for the G6 Pro Bullet and AI Pro.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Pro-Bullet-Enhancer-B",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Radar Recommended Mounting Height 2-5 m (6.6-16.4 ft)",
      "Enclosure Material Aluminum alloy"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "130 x 155 x 126 mm (5.1 x 6.1 x 5')" },
          { label: "Weight", value: "490 g (1.1 lb)" },
          { label: "Enclosure Material", value: "Alumunium Alloy, Polycarbonate" },
          { label: "Mount Material", value: "Aluminum alloy" },
          { label: "Weatherproofing", value: "IPX5" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Radar Recommended Mounting Height", value: "2-5 m (6.6-16.4 ft)" },
          { label: "Radar Recommended Mounting Tilt", value: "0-30°" },
          { label: "Radar Detection Range", value: "Person: 0.5-20 m (1.6-65.6 ft) Vehicle: 2-35 m (6.6-15 ft)" },
          { label: "Radar Field of Detection", value: "H: 110°" },
          { label: "Radar Distance Accuracy", value: "0.5 m (1.6 ft)" },
          { label: "IR distance", value: "UVC-G6-Pro-Bullet: 60 m (197 ft) UVC_AI-Pro: 40 m (131 ft)" },
          { label: "Lights", value: "5700K, 600 lm" },
          { label: "Speaker", value: "✓" },
          { label: "Power Method", value: "Camera G6 Pro Bullet, AI Pro" },
          { label: "Power Supply", value: "5V DC, 3A" },
          { label: "Max. Power Consumption", value: "15W" },
          { label: "Ambient Operating Temperature", value: "-30 to 50°C (-22 to 122°F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" }
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements Web Application", value: "UniFi Protect" },
          { label: "Application Requirements Mobile App", value: "UniFi Protect iOS™ and Android™" }
        ]
      },
    ],
  },

  // Produk Kedua Belas dari Accessories, SF For Cameras
   {
    id: "UACC-G5-Enhancer",
    name: "G5 Pro Enhancer",
    category: "Accessories",
    subfilter: "For Cameras",
    image: "/images/camera.jpg",
    shortDescription:
      "Long-range IR LED and floodlight accessory for the G5 Pro.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-G5-Enhancer",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "IR distance 40 m (131 ft)",
      "Enclosure Material Polycarbonate"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "⌀118.5 x 103.3 mm (⌀4.7 x 4.1')" },
          { label: "Weight", value: "210 g (7.4 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Aluminum alloy" },
          { label: "Weatherproofing", value: "IPX5" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "IR distance", value: "40 m (131 ft)" },
          { label: "Lights", value: "5700K, 600 lm" },
          { label: "Speaker", value: "✓" },
          { label: "Power Method", value: "Camera G5 Pro" },
          { label: "Power Supply", value: "5V DC, 3A" },
          { label: "Max. Power Consumption", value: "4.5W" },
          { label: "Ambient Operating Temperature", value: "-20 to 50°C (-4 to 122°F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" }
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements Web Application", value: "UniFi Protect" },
          { label: "Application Requirements Mobile App", value: "UniFi Protect iOS™ and Android™" }
        ]
      },
    ],
  },

  // Produk Ketiga Belas dari Accessories, SF For Cameras
  {
    id: "UVC-G4-IRExtender",
    name: "G4 Bullet IR Enhancer",
    category: "Accessories",
    subfilter: "For Cameras",
    image: "/images/camera.jpg",
    shortDescription:
      "Long-range IR LED accessory for the G4 Bullet.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G4-IRExtender",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Blends seamlessly into a variety of backgrounds",
      "Sold as a 3-pack"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "⌀ 80 x 26 mm (⌀ 3.15 x 1.02')" },
          { label: "Weight", value: "75 g (2.7 oz)" },
          { label: "Enclosure Material", value: "UV-stability plastic, aluminum alloy" },
          { label: "Weatherproofing", value: "IPX4" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "IR distance", value: "25 m (82 ft)" },
          { label: "Power Method", value: "Accessory connector" },
          { label: "Power Supply", value: "UniFi Protect G4 Bullet camera" },
          { label: "Max. Power Consumption", value: "4.5W" },
          { label: "Compatibillity", value: "UVC-G4-Bullet" },
          { label: "LEDs", value: "(6) Built-in high-intensity infrared" },
          { label: "Ambient Operating Temperature", value: "-20 to 40°C (-4 to 104°F)" },
          { label: "Ambient Operating Humidity", value: "20 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" }
        ]
      },
    ],
  },

  //Produk Keempat Belas dari Accessories, SF For Cameras
   {
    id: "UACC-G5-PTZ-PM-B-B/W",
    name: "G6/G5 PTZ Pendant Mount",
    category: "Accessories",
    subfilter: "For Cameras",
    image: "/images/camera.jpg",
    shortDescription:
      "Pendant mount accessory for G6/G5 PTZ.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-G5-PTZ-PM-B-B/W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Includes 3/4' conduit entrance",
      "Weatherproof (outdoor exposed)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀61 x 43.4 mm (⌀2.4 x 1.7')" },
          { label: "Weight", value: "32 g (1.1 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mounting Material", value: "Polycarbonate" },
          { label: "Threaded Outlets", value: "G3/4'" },
          { label: "Compatibiliity", value: "UVC-G5-PTZ UVC-G6-PTZ" }
        ]
      },
    ],
       inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  // Produk Kelima Belas dari Accessories SF For Cameras
  {
    id: "UACC-G5-PTZ-ICM-SB-B-B/W",
    name: "G5 PTZ In-Ceiling Mount",
    category: "Accessories",
    subfilter: "For Cameras",
    image: "/images/camera.jpg",
    shortDescription:
      "In-ceiling mount accessory or smoked bubble cover for G5 PTZ.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-G5-PTZ-ICM-SB-B-B/W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Weatherproof (outdoor exposed)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀109.5 x 94.7 mm (⌀4.3 x 3.7')" },
          { label: "Weight", value: "144 g (5.1 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mounting Material", value: "Polycarbonate" },
          { label: "Compatibiliity", value: "UVC-G5-PTZ" }
        ]
      },
    ],
       inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  // Produk Keenam Belas dari Accessories, SF For Cameras
   {
    id: "UACC-G6-PTZ-ICM-B-B/W",
    name: "G6 PTZ In-Ceiling Mount",
    category: "Accessories",
    subfilter: "For Cameras",
    image: "/images/camera.jpg",
    shortDescription:
      "In-ceiling mount accessory for G6 PTZ.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-G6-PTZ-ICM-B-B/W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Weatherproof (outdoor exposed)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀151 x 140.6 mm (⌀5.9 x 5.5')" },
          { label: "Weight", value: "259 g (9.1 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mounting Material", value: "Polycarbonate" },
          { label: "Compatibiliity", value: "UVC-G6-PTZ" }
        ]
      },
    ],
       inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  // Produk Pertama dari Accessories, SF For Door Access
  {
    id: "UA-Card-B-10-B/W",
    name: "Access Card",
    category: "Accessories",
    subfilter: "For Door Access",
    image: "/images/camera.jpg",
    shortDescription:
      "A pack of highly-secure NFC cards used for access control within UniFi.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-Card-B-10-B/W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Multi-layer encryption to avoid malicious duplication",
      "Assignable to users and visitors"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "85.6 x 53.98 x 0.84 mm (3.37 x 2.13 x 0.03')" },
          { label: "Weight", value: "5 g (0.18 oz)" },
          { label: "Format", value: "ISO 7810 ID-1" },
          { label: "NFC Technology", value: "MIFARE DESFire EV3 UniFi Access Proprietary Security Protocol" },
          { label: "NFC Frequency", value: "13.56 MHz" }
        ]
      },
      {
        title: "Hardware",
        items:[
        { label: "NDAA Compliant", value: "✓"},
        { label: "Certifications", value: "Anatel"}
        ]
      }
    ],
  },

  // Produk Kedua dari Accessories, SF For Door Access
  {
    id: "UA-Card-B-100-B/W",
    name: "Access Card",
    category: "Accessories",
    subfilter: "For Door Access",
    image: "/images/camera.jpg",
    shortDescription:
      "A pack of highly-secure NFC cards used for access control within UniFi.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-Card-B-100-B/W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Multi-layer encryption to avoid malicious duplication",
      "Assignable to users and visitors"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "85.6 x 53.98 x 0.84 mm (3.37 x 2.13 x 0.03')" },
          { label: "Weight", value: "5 g (0.18 oz)" },
          { label: "Format", value: "ISO 7810 ID-1" },
          { label: "NFC Technology", value: "MIFARE DESFire EV3 UniFi Access Proprietary Security Protocol" },
          { label: "NFC Frequency", value: "13.56 MHz" }
        ]
      },
      {
        title: "Hardware",
        items:[
        { label: "NDAA Compliant", value: "✓"},
        { label: "Certifications", value: "Anatel"}
        ]
      }
    ],
  },

  // Produk Ketiga dari Accessories, SF For Door Access
    {
    id: "UACC-Reader-Pro-AM-B-B/W",
    name: "Reader Pro Angle Mount",
    category: "Accessories",
    subfilter: "For Door Access",
    image: "/images/camera.jpg",
    shortDescription:
      "Angled mounting accessory for UniFi Professional Access Readers.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Reader-Pro-AM-B-B/W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "20° angle mount"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "160 x 40.4 x 31.1 mm (6.3 x 1.6 x 1.2')" },
          { label: "Weight", value: "43 g (1.5 oz)" },
          { label: "Enclosure Material", value: "ISO 7810 ID-1" },
          { label: "Mounting", value: "Wall Compatible with UA-G2-Pro gang box mount" }
        ]
      },
    ],
  },

  // Produk Keempat dari Accessories, SF For Door Access
  {
    id: "UA-Button",
    name: "Access Button",
    category: "Accessories",
    subfilter: "For Door Access",
    image: "/images/camera.jpg",
    shortDescription:
      "Push-to-exit button designed for UniFi Access Hubs.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-Button",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Includes black and white faceplates"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "137 x 88 x 38.1 mm (5.4 x 3.5 x 1.5')" },
          { label: "Weight", value: "180 g (6.3 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate, SGCC steel" },
          { label: "Available Colors", value: "Black, White" },
          { label: "Indoor and Outdoor Use", value: "Indoor Only" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Mechanical Life", value: "1,000,000 clicks" },
          { label: "Power Method", value: "UniFi Access Hubs UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Contact Type", value: "(1) Normal open" },
          { label: "Contact Rating", value: "30V DC, 2A" },
          { label: "Ul 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 (at or af) specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade Assignment: 1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-Button, V01" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Storage Temperature", value: "-40 to 70° C (-40 to 158° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, UL 294, CAN/ULC-60839-11-1" },
        ]
      }
    ],
       inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },
// Produk Kelima dari Accessories, SF For Door Access
   {
    id: "UACC-Intercom-Sunshield",
    name: "Intercom Sunshield",
    category: "Accessories",
    subfilter: "For Door Access",
    image: "/images/camera.jpg",
    shortDescription:
      "UniFi Access Intercom sunshield accessory.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Intercom-Sunshield",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Sun-proof and UV-resistant"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "362.1 x 118.1 x 59.1 mm (14.3 x 4.6 x 2.3')" },
          { label: "Weight", value: "560 g (1.2 lb)" },
          { label: "Enclosure Material", value: "Powder-coated galvanized steel" },
          { label: "Ambient Operating Temperature", value: "-30 to 60° C (-22 to 140° F)" },
          { label: "Ambient Storage Temperature", value: "-40 to 70° C (-40 to 158° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" }
        ]
      },
    ],
  },

  // Produk Keenam dari Accessories, SF For Door Access
   {
    id: "UACC-Intercom-Viewer-TS",
    name: "Intercom Viewer Table Stand",
    category: "Accessories",
    subfilter: "For Door Access",
    image: "/images/camera.jpg",
    shortDescription:
      "Metal table stand for Intercom Viewer.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Intercom-Viewer-TS",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Aluminum alloy, rubber, polycarbonate"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "123.6 x 78.8 x 72 mm (4.9 x 3.1 x 2.8')" },
          { label: "Weight", value: "186 g (6.6 oz)" },
          { label: "Enclosure Material", value: "Aluminum alloy, rubber, polycarbonate" },
        ]
      },
    ],
  },

  // Produk Ketujuh dari Accessories, SF For Door Access
   {
    id: "UACC-Junction-Utility",
    name: "Junction Utility",
    category: "Accessories",
    subfilter: "For Door Access",
    image: "/images/camera.jpg",
    shortDescription:
      "An indoor/outdoor enclosure designed for UniFi Access Hubs, switches, and accessories.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Junction-Utility",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Galvanized steel (SGCC)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Enclosure: 400 x 350 x 152 mm (15.7 x 13.8 x 6') Inner mounting plate: 270 x 355 mm (10.6 x 14')" },
          { label: "Weight", value: "7 kg (15.4 lb)" },
          { label: "Enclosure Material", value: "Galvanized steel (SGCC)" },
          { label: "Weatherproofing", value: "IP55" },
          { label: "Certifications", value: "UL 50E NEMA Type 3R Outdoor Enclosure certified" },
        ]
      },
    ],
        inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  // Produk Kedelapan dari Accessories, SF For Door Access
   {
    id: "UA-Lock-Magnetic-270kg",
    name: "Magnetic Lock",
    category: "Accessories",
    subfilter: "For Door Access",
    image: "/images/camera.jpg",
    shortDescription:
      "Fail-safe magnetic lock for inswing and outswing doors that connects to a UniFi Access Hub.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-Lock-Magnetic-270kg",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Holds up to 270 kg or 540 kg (600-1,200 lb)",
      "Can be installed on a wide variety of door types*",
      "*— Access Lock Magnetic 270kg: All types including full glass*",
      "— Access Lock Magnetic 540kg: All types excluding full glass"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "UA-Lock-Magnetic-270kg Lock body: 250 x 42.5 x 26 mm (9.8 x 1.7 x 1' ) Install plate: 250 x 25x 5 mm (9.8 x 1 x 0.2' ) Armature: 185.5 x 38.5 x 11 mm (7.3 x 1.5 x 0.4') UA-Lock-Magnetic-540kg Lock body: 266 x 67.5 x 40 mm (10.5 x 2.7 x 1.6') Install plate: 266 x 40 x 6 mm (10.5 x 1.6 x 0.2') Armature: 185 x 61 x 16 mm (7.3 x 2.4 x 0.6')" },
          { label: "Weight", value: "UA-Lock-Magnetic-270kg Lock body: 1 kg (2.2 lb) Install plate: 70 g (0.15 lb) Armature: 600 g (1.3 lb)  UA-Lock-Magnetic-540kg Lock body: 2.9 kg (6.4 lb) Install plate: 145 g (0.3 lb) Armature: 1.4 kg (3.1 lb)" },
          { label: "Enclosure Material", value: "Device/brackets: aluminum Armature: steel" },

          { label: "Lock Features Lock Type", value: "Fail Safe" },
          { label: "Lock Features Support Door Type", value: "UA-Lock-Magnetic-270kg: Single door  (Wooden/metal/glass)  UA-Lock-Magnetic-540kg: Single door  (Wooden/metal)" },
          { label: "Lock Features DPS", value: "Embedded" },
          { label: "Lock Features Holding Force", value: "UA-Lock-Magnetic-270kg: 270 kg (600 lb) UA-Lock-Magnetic-540kg: 540 kg (1,200 lb)" },
          { label: "Lock Features Current Power", value: "500mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black) (1) DPS/+ (white) (1) DPS/- (yellow)" },
          { label: "Lock Features Mounting", value: "UA-Lock-Magnetic-270kg L bracket: for outward opening door thickness < 42 mm (< 1.7')  Z bracket: for inward opening door, used with L bracket U bracket: for glass door thickness ≤ 17 mm (≤ 0.7') and door gap ≤ 5 mm (≤ 0.2')   UA-Lock-Magnetic-540kg L bracket: for outward opening door thickness < 42 mm (< 1.7')  Z bracket: for inward opening door, used with L bracket" },
          { label: "Lock Features LED Indicator", value: "Green: unlocked Red: locked" },
          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" }
        ]
      },
    ],
    addons: [
      {
        id: 1,
        name: "",
        image: "/images/dcs-box.png",
        price: 299,
        description: "",
        specs: [
          "",
          "",
          ""
        ],
        detailedSpecs: [
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" }
        ],
        productLink: "/products/mounting-kit"
      },
      {
        id: 2,
        name: "",
        image: "/images/dcs-box.png",
        price: 299,
        description: "",
        specs: [
          "",
          "",
          ""
        ],
        detailedSpecs: [
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" }
        ],
        productLink: "/products/power-cable"
      },
    ]
  },

  // Produk Kesembilan dari Accessories, SF For Door Access
  {
    id: "UA-Lock-Magnetic-540kg",
    name: "Magnetic Lock",
    category: "Accessories",
    subfilter: "For Door Access",
    image: "/images/camera.jpg",
    shortDescription:
      "Fail-safe magnetic lock for inswing and outswing doors that connects to a UniFi Access Hub.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-Lock-Magnetic-540kg",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Holds up to 270 kg or 540 kg (600-1,200 lb)",
      "Can be installed on a wide variety of door types*",
      "*— Access Lock Magnetic 270kg: All types including full glass*",
      "— Access Lock Magnetic 540kg: All types excluding full glass"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "UA-Lock-Magnetic-270kg Lock body: 250 x 42.5 x 26 mm(9.8 x 1.7 x 1 ) Install plate: 250 x 25x 5 mm (9.8 x 1 x 0.2' ) Armature: 185.5 x 38.5 x 11 mm (7.3 x 1.5 x 0.4') UA-Lock-Magnetic-540kg Lock body: 266 x 67.5 x 40 mm (10.5 x 2.7 x 1.6') Install plate: 266 x 40 x 6 mm (10.5 x 1.6 x 0.2') Armature: 185 x 61 x 16 mm (7.3 x 2.4 x 0.6')" },
          { label: "Weight", value: "UA-Lock-Magnetic-270kg Lock body: 1 kg (2.2 lb) Install plate: 70 g (0.15 lb) Armature: 600 g (1.3 lb) UA-Lock-Magnetic-540kg Lock body: 2.9 kg (6.4 lb) Install plate: 145 g (0.3 lb) Armature: 1.4 kg (3.1 lb)" },
          { label: "Enclosure Material", value: "Device/brackets: aluminum Armature: steel" },

          { label: "Lock Features Lock Type", value: "Fail Safe" },
          { label: "Lock Features Support Door Type", value: "UA-Lock-Magnetic-270kg: Single door  (Wooden/metal/glass)  UA-Lock-Magnetic-540kg: Single door  (Wooden/metal)" },
          { label: "Lock Features DPS", value: "Embedded" },
          { label: "Lock Features Holding Force", value: "UA-Lock-Magnetic-270kg: 270 kg (600 lb) UA-Lock-Magnetic-540kg: 540 kg (1,200 lb)" },
          { label: "Lock Features Current Power", value: "500mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black) (1) DPS/+ (white) (1) DPS/- (yellow)" },
          { label: "Lock Features Mounting", value: "UA-Lock-Magnetic-270kg L bracket: for outward opening door thickness < 42 mm (< 1.7')  Z bracket: for inward opening door, used with L bracket U bracket: for glass door thickness ≤ 17 mm (≤ 0.7') and door gap ≤ 5 mm (≤ 0.2')   UA-Lock-Magnetic-540kg L bracket: for outward opening door thickness < 42 mm (< 1.7')  Z bracket: for inward opening door, used with L bracket" },
          { label: "Lock Features LED Indicator", value: "Green: unlocked Red: locked" },
          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" }
        ]
      },
    ],
    addons: [
      {
        id: 1,
        name: "",
        image: "/images/dcs-box.png",
        price: 299,
        description: "",
        specs: [
          "",
          "",
          ""
        ],
        detailedSpecs: [
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" }
        ],
        productLink: "/products/mounting-kit"
      },
      {
        id: 2,
        name: "",
        image: "/images/dcs-box.png",
        price: 299,
        description: "",
        specs: [
          "",
          "",
          ""
        ],
        detailedSpecs: [
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" }
        ],
        productLink: "/products/power-cable"
      },
    ]
  },

  // Produk Kesepuluh dari Accessories, SF For Door Access
  {
    id: "UACC-Lock-Strike-Secure-15mm",
    name: "Fail-Secure Strike Lock",
    category: "Accessories",
    subfilter: "For Door Access",
    image: "/images/camera.jpg",
    shortDescription:
      "Fail-secure electric strike lock that connects to a UniFi Access Hub.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Lock-Strike-Secure-15mm",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
      "Lock Features Support Door Type Single door (Wooden/metal)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Lock body: 80 x 40 x 35 mm (3.2 x 1.6 x 1.4') Short front plate: 124 x 32 x 3 mm (4.9 x 1.3 x 0.1') Long front plate: 202 x 36 x 3 mm (7.9 x 1.4 x 0.1')" },
          { label: "Weight", value: "Lock body: 185 g (6.5 oz) Short front plate: 50 g (1.8 oz) Long front plate: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail Secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "1,200 kg (2,645 lb)" },
          { label: "Lock Features Current Power", value: "400mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Door Status Contact Type ", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },
          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" }
        ]
      },
    ],
        inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
    addons: [
      {
        id: 1,
        name: "",
        image: "/images/dcs-box.png",
        price: 299,
        description: "",
        specs: [
          "",
          "",
          ""
        ],
        detailedSpecs: [
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" }
        ],
        productLink: "/products/mounting-kit"
      },
      {
        id: 2,
        name: "",
        image: "/images/dcs-box.png",
        price: 299,
        description: "",
        specs: [
          "",
          "",
          ""
        ],
        detailedSpecs: [
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" }
        ],
        productLink: "/products/power-cable"
      },
    ]
  },

  // Produk Kesebelas dari Accessories, SF For Door Access
  {
    id: "UACC-Lock-Strike-Secure-8mm",
    name: "Fail-Secure Strike Lock",
    category: "Accessories",
    subfilter: "For Door Access",
    image: "/images/camera.jpg",
    shortDescription:
      "Fail-secure electric strike lock with 8 mm lock slot depth support.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Lock-Strike-Secure-8mm",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
      "Lock Features Support Door Type Single door (Wooden/metal)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Lock body:112 x 21 x 28 mm (4.4 x 0.8 x 1.1') Short front plate:153 x 25 x 3 mm (6 x 0.9 x 0.1') Long front plate:250 x 25 x 3 mm (9.8 x 0.9 x 0.1')" },
          { label: "Weight", value: "Lock body: 197 g (6.9 oz) Short front plate: 62 g (2.2 oz) Long front plate: 97 g (3.4 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail Secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "227 kg (500 lb)" },
          { label: "Lock Features Current Power", value: "200mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Door Status Contact Type ", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },
          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" }
        ]
      },
    ],
        inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
    addons: [
      {
        id: 1,
        name: "",
        image: "/images/dcs-box.png",
        price: 299,
        description: "",
        specs: [
          "",
          "",
          ""
        ],
        detailedSpecs: [
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" }
        ],
        productLink: "/products/mounting-kit"
      },
      {
        id: 2,
        name: "",
        image: "/images/dcs-box.png",
        price: 299,
        description: "",
        specs: [
          "",
          "",
          ""
        ],
        detailedSpecs: [
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" }
        ],
        productLink: "/products/power-cable"
      },
    ]
  },

  // Produk Kedua Belas dari Accessories, SF For Door Access
   {
    id: "UACC-Lock-Strike-Safe-15mm",
    name: "Fail-Safe Strike Lock",
    category: "Accessories",
    subfilter: "For Door Access",
    image: "/images/camera.jpg",
    shortDescription:
      "Fail-safe electric strike lock that connects to a UniFi Access Hub.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Lock-Strike-Safe-15mm",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
      "Lock Features Support Door Type Single door (Wooden/metal)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Lock body: 80 x 40 x 35 mm (3.2 x 1.6 x 1.4') Short front plate: 124 x 32 x 3 mm (4.9 x 1.3 x 0.1') Long front plate: 202 x 36 x 3 mm (7.9 x 1.4 x 0.1')" },
          { label: "Weight", value: "Lock body: 185 g (6.5 oz) Short front plate: 50 g (1.8 oz) Long front plate: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail Secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "1,200 kg (2,645 lb)" },
          { label: "Lock Features Current Power", value: "400mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Door Status Contact Type ", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },
          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" }
        ]
      },
    ],
        inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
    addons: [
      {
        id: 1,
        name: "",
        image: "/images/dcs-box.png",
        price: 299,
        description: "",
        specs: [
          "",
          "",
          ""
        ],
        detailedSpecs: [
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" }
        ],
        productLink: "/products/mounting-kit"
      },
      {
        id: 2,
        name: "",
        image: "/images/dcs-box.png",
        price: 299,
        description: "",
        specs: [
          "",
          "",
          ""
        ],
        detailedSpecs: [
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" }
        ],
        productLink: "/products/power-cable"
      },
    ]
  },

  // Produk Ketiga Belas dari Accessories, SF For Door Access
  {
    id: "UACC-Lock-Strike-Safe-8mm",
    name: "Fail-Safe Strike Lock",
    category: "Accessories",
    subfilter: "For Door Access",
    image: "/images/camera.jpg",
    shortDescription:
      "Fail-safe electric strike lock with 8 mm lock slot depth support.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Lock-Strike-Safe-8mm",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
      "Lock Features Support Door Type Single door (Wooden/metal)" 
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Lock body:112 x 21 x 28 mm (4.4 x 0.8 x 1.1') Short front plate:153 x 25 x 3 mm (6 x 0.9 x 0.1') Long front plate:250 x 25 x 3 mm (9.8 x 0.9 x 0.1')" },
          { label: "Weight", value: "Lock body: 200 g (7.0 oz) Short front plate: 62 g (2.2 oz) Long front plate: 97 g (3.4 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail Secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "227 kg (500 lb)" },
          { label: "Lock Features Current Power", value: "200mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Door Status Contact Type ", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },
          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" }
        ]
      },
    ],
        inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
    addons: [
      {
        id: 1,
        name: "",
        image: "/images/dcs-box.png",
        price: 299,
        description: "",
        specs: [
          "",
          "",
          ""
        ],
        detailedSpecs: [
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" }
        ],
        productLink: "/products/mounting-kit"
      },
      {
        id: 2,
        name: "",
        image: "/images/dcs-box.png",
        price: 299,
        description: "",
        specs: [
          "",
          "",
          ""
        ],
        detailedSpecs: [
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" }
        ],
        productLink: "/products/power-cable"
      },
    ]
  },

  // Produk Keempat Belas dari Accessories, SF For Door Access
  {
    id: "UACC-Lock-Bolt-Secure",
    name: "Fail-Secure Bolt Lock",
    category: "Accessories",
    subfilter: "For Door Access",
    image: "/images/camera.jpg",
    shortDescription:
      "Fail-safe electric strike lock with 8 mm lock slot depth support.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-Lock-Bolt-Secure",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
      "Lock Features Support Door Type Single door (Wooden/metal)" 
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail Secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Support Door DPS", value: "Embedded" },
          { label: "Lock Features Current Power", value: "Standby: 12mA ±10% Dynamic: 600mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED", value: "Red: locked Green: unlocked & power indicator" },
          { label: "Door Status Contact Type ", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },
          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" }
        ]
      },
    ],
        inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
    addons: [
      {
        id: 1,
        name: "",
        image: "/images/dcs-box.png",
        price: 299,
        description: "",
        specs: [
          "",
          "",
          ""
        ],
        detailedSpecs: [
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" }
        ],
        productLink: "/products/mounting-kit"
      },
      {
        id: 2,
        name: "",
        image: "/images/dcs-box.png",
        price: 299,
        description: "",
        specs: [
          "",
          "",
          ""
        ],
        detailedSpecs: [
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" }
        ],
        productLink: "/products/power-cable"
      },
    ]
  },

  // Produk Kelima Belas dari Accessories, SF For Door Access
   {
    id: "UA-Rescue",
    name: "Access Rescue KeySwitch",
    category: "Accessories",
    subfilter: "For Door Access",
    image: "/images/camera.jpg",
    shortDescription:
      "Keyed emergency override for your Access Hub.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-Rescue",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Manual unlock port with two physical keys included",
      "Backup entry for malfunctioning fail-safe or secure* lock systems",
      "*Does not provide redundant power for fail-secure systems"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "⌀60 x 74 mm (⌀2.4 x 2.9')" },
          { label: "Weight", value: "94 g (3.3 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Key Switch", value: "Brass internal wave key, 28V DC, 4A" },
          { label: "Terminal Block", value: "COM/NO/NC 18-24 AWG" },
          { label: "Ambient Operating Temperature", value: "-30 to 65° C (-22 to 149° F)" },
          { label: "Ambient Storage Temperature", value: "-40 to 85° C (-40 to 185° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" }
        ]
      }
    ],
    addons: [
      {
        id: 1,
        name: "",
        image: "/images/dcs-box.png",
        price: 299,
        description: "",
        specs: [
          "",
          "",
          ""
        ],
        detailedSpecs: [
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" },
          { label: "", value: "" }
        ],
        productLink: "/products/mounting-kit"
      },
    ]
  },

  // Porduk Pertama dari Accessories, SF Other
   {
    id: "UACC-FM-16cm",
    name: "Floating Mount",
    category: "Accessories",
    subfilter: "Other",
    image: "/images/camera.jpg",
    shortDescription:
      "Keyed emergency override for your Access Hub.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-FM-16cm",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Polycarbonate, silicone rubber"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "109.7 x 109.7 x 8.3 mm (4.3 x 4.3 x 0.3')" },
          { label: "Weight", value: "107 g (3.8 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, silicone rubber" },
          { label: "Treatment", value: "Painting" },
          { label: "Mounting", value: "Tapping screw, anchor or magnet" },
          { label: "Compatibility", value: "UX7" }
        ]
      },
    ],
    
        inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

  //Produk Kedua dari accessories, SF Other
  {
    id: "UACC-UTS",
    name: "Universal Table Stand",
    category: "Accessories",
    subfilter: "Other",
    image: "/images/camera.jpg",
    shortDescription:
      "Weighted stand with adjustable clamp keeps non-rack UniFi devices upright on flat surfaces.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-UTS",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Polycarbonate"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "125.2 x 73.2 x 70.5 mm (4.9 x 2.9 x 2.8')" },
          { label: "Weight", value: "530 g (1.2 lb)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Treatment", value: "Painting" },
          { label: "Device-Clamping Support", value: "Max. width 42.5 mm (1.6')" },
          { label: "Compatibility", value: "Utility Switching (Except Lite 8/16 PoE, Enterprise 8 PoE, Pro 8 PoE) Compact Cloud Gateway (UCG & UX series) Advance Hosting (UXG & UCK-G2 series) Special Device (AI-Key, UMR series, UPL-Port)" }
        ]
      },
    ],
  },

  //Produk Keempat dari Accessories, SF Other
  {
    id: "UACC-CKG2-Plus Stand",
    name: "CloudKey+ Stand",
    category: "Accessories",
    subfilter: "Other",
    image: "/images/camera.jpg",
    shortDescription:
      "Sleek, metal stand for CloudKey+.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-CKG2-Plus Stand",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Aluminim Alloy"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "134.2 x 71.7 x 43.2 mm (5.3 x 2.8 x 1.7')" },
          { label: "Weight", value: "225 g (7.9 oz)" },
          { label: "Enclosure Material", value: "Aluminum alloy" },
        ]
      },
    ],
  },
// Produk Kelima dari Accessories, SF Other
   {
    id: "UACC-UMR-TS",
    name: "Mobile Router Table Stand",
    category: "Accessories",
    subfilter: "Other",
    image: "/images/camera.jpg",
    shortDescription:
      "Sleek, metal table stand for the Mobile Router.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-UMR-TS",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Aluminim "
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "127.5 x 89.4 x 68.8 mm (5 x 3.5 x 2.7')" },
          { label: "Weight", value: "148 g (5.2 oz)" },
          { label: "Enclosure Material", value: "Aluminum" },
        ]
      },
    ],
  },

  // Produk keenam dari Accessories, SF Other
  {
    id: "UACC-SSD-Tray",
    name: "M.2 SSD Tray",
    category: "Accessories",
    subfilter: "Other",
    image: "/images/camera.jpg",
    shortDescription:
      "Optional storage insert for Cloud Gateways and UNAS models that supports one 2230, 2242, 2260, 2280, or 22110 sized M.2 NVMe SSD. UCG-Max/Fiber and UNAS-Pro-8/4 products operate at PCIe Gen3x2 per NVMe. UNAS-4 operates at PCIe Gen2x1 per NVMe.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-SSD-Tray",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Aluminum alloy, polycarbonate, stainless steel "
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "123.4 x 31.1 x 11.2 mm  (4.9 x 1.2 x 0.4')" },
          { label: "Weight", value: "53 g (1.9 oz)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate, stainless steel" },
        ]
      },
    ],
  },

  // Produk Ketujuh dari Accessories, SF Other
  {
    id: "UACC-HDD-Tray",
    name: "3.5' HDD Tray",
    category: "Accessories",
    subfilter: "Other",
    image: "/images/camera.jpg",
    shortDescription:
      "A tray that supports both 3.5' and 2.5' drives, compatible with UDM-Pro, UDM-SE, UDM-Pro-Max, UNVR, UNVR-Pro, UNAS-Pro, and ENVR.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-HDD-Tray",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "SGCC, aluminum alloy"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "105.9 x 171.7 x 28 mm (4.2 x 6.8 x 1.1')" },
          { label: "Weight", value: "201 g (7.1 oz)" },
          { label: "Enclosure Material", value: "SGCC, aluminum alloy" },
        ]
      },
    ],
       inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
  },

   {
    id: "UACC-ENVR-Bezel",
    name: "Enterprise NVR Bezel",
    category: "Accessories",
    subfilter: "Other",
    image: "/images/camera.jpg",
    shortDescription:
      "Faceplate that integrates with Enterprise Network Video Recorder to provide a 4.7' touch display and LED illumination.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-ENVR-Bezel",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Fiber.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Disc overview and management",
      "View livestreams directly from the rack",
      "4.7' touchscreen",
      "Note. Support ENVR firmware version 4.1.10 and later.",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "441.7 x 132 x 51.9 mm (17.4 x 5.2 x 2')" },
          { label: "Weight", value: "1.1 kg (2.3 lb)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Power Method", value: "Magnetic Type-C" },
          { label: "Supported Voltage Range", value: "5V" },
          { label: "Max. Power Consumption", value: "3.78W" },
          { label: "ESD/EMP Protection", value: "Air: ± 12kV, contact: ± 8kV" },
          { label: "LCM Display", value: "(1) 4.7' touchscreen" },
          { label: "LEDs", value: "Boot sequence wave pattern User configurable status Locate function" },
          { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "Certifications", value: "CE, IC, FCC" }
        ]
      }
    ],
  },

]; // paling trakhir
