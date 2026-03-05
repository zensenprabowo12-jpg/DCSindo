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
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

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
    name: "UniFi etherlighting Patch Cable",
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
  {
    id: "UACC-OM-MM-1G-D-2",
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

  //Produk Ketiga Belas dari Accessories, SF SFP & Fiber
  {
    id: "UACC-OM-MM-1G-D-20",
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
    sku: "UACC-OM-MM-1G-D-20",

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
  {
    id: "UACC-OM-MM-10G-D-2",
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
    sku: "UACC-OM-MM-10G-D-2",

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

  //Produk Keenam Belas dari Accessories, SF SFP & Fiber
  {
    id: "UACC-OM-MM-10G-D-20",
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
    sku: "UACC-OM-MM-10G-D-20",

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
  {
    id: "UACC-OM-SM-1G-S-20",
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
    sku: "UACC-OM-SM-1G-S-20",

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
  {
    id: "UACC-OM-SM-10G-S-20",
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
    sku: "UACC-OM-SM-10G-S-20",

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
  {
    id: "UACC-OM-SM-10G-D-20",
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
    sku: "UACC-OM-SM-10G-D-20",

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
  {
    id: "UACC-OM-MM-10G-D-2",
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
    sku: "UACC-OM-MM-10G-D-2",

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

  //Produk Keempat dari Accessories, SF Liberation Day
  {
    id: "UACC-OM-MM-10G-D-20",
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
    sku: "UACC-OM-MM-10G-D-20",

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

  //Produk Kelima dari Accessories, SF Liberation Day
  {
    id: "UACC-OM-MM-1G-D-20",
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
    sku: "UACC-OM-MM-1G-D-20",

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
  {
    id: "UACC-OM-MM-1G-D-20",
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
    sku: "UACC-OM-MM-1G-D-20",

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
  {
    id: "UACC-OM-SM-10G-D-20",
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
    sku: "UACC-OM-SM-10G-D-20",

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
  {
    id: "UACC-OM-SM-1G-S-20",
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
    sku: "UACC-OM-SM-1G-S-20",

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

]; // paling trakhir
