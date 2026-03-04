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
    subfilter: "RJ45 & Copper",
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

//Produk Kedua dari Accessories, SF Liberation Day
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

  //Produk Ketiga dari Accessories, SF Liberation Day
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

  //Produk Keempat dari Accessories, SF Liberation Day
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

  //Produk Kelima dari Accessories, SF Liberation Day
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

  //Produk Keenam dari Accessories, SF Liberation Day
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

  //Produk Ketujuh dari Accessories, SF Liberation Day
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

  //Produk Kedelapan dari Accessories, SF Liberation Day
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

  //Produk Kesembilan dari Accessories, SF Liberation Day
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

  //Produk Kesepuluh dari Accessories, SF Liberations Day
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

  //Produk Kesebelas dari Accessories, SF Liberation Day
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

  //Produk Kedua Belas dari Accessories, SF Liberations Day
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

  //Produk Ketiga Belas dari Accessories, SF Liberation day
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

  //Produk Keempat Belas dari Accessories, SF Liberation Day
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

  //Produk Kelima Belas dari Accessories, SF Liberation Day
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

  //Produk Keenam Belas dari Accessories, SF Liberation Day
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

  //Produk Kedua dari Accessories, SF 
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
    id: "UACC-SSD-2.5-1TB",
    name: "2.5' SSD, 1 TB",
    category: "Accessories",
    subfilter: "Rack Mount",
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
          { label: "Dimensions", value: "With handle and caster:519 x 460 x 485 mm (20.43 x 18.11 x 19.09') Without handle and caster: 519 x 460 x 351 mm (20.43 x 18.11 x 13.82')" },
          { label: "Weight", value: "10.3 kg (22.7 lb)" },
          { label: "Max. Weight Capacity", value: "Double Toolless Mini Racks with Stacking Kit Static: 70 kg (154 lb) Rolling: 35 kg (77 lb)" },
          { label: "Enclosure Material ", value: "Frame/Bracket: SPCC steel Handle: Stainless steel" },
          { label: "Color", value: "Silver" },
          { label: "Treatment", value: "Liquid Coating" },
          { label: "Pack Options", value: "(1) Flat pack box" },
          { label: "Rack Features U Height", value: "6U" },
          { label: "Rack Features Rack Type", value: "Open Frame" },
          { label: "Rack Features Mounting", value: "Floor Stand" },
          { label: "Rack Features Lockable Casters", value: "✓" },
          { label: "Incompatible Devices", value: "UniFi Switch (Gen1), US-24-250W US-24-500W US-48-500W US-48-750W USG USG-Pro-4 EdgeSwitch ES-24-250W ES-24-500W ES-48-500W ES-48-750W EdgeRouter ER-8 Others CKG2-RM ER-RMKIT UACC-Pro-Max-16-RM" },
          { label: "NDAA Compliant", value: "✓" }
        ]
      },
    ],
  },

  //Produk Kedua dari Accessories, SF Rack Mount
  {
    id: "UACC-Rack-Shelf-TL",
    name: "Toolless Mini Rack Shelf",
    category: "Accessories",
    subfilter: "Raack Mount",
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


]; // paling trakhir
