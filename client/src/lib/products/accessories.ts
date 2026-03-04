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
          { label: "Available Lengths", value: "0.1, 0.3, 1, 2, 3, 5, 8 m (0.3, 1, 3.3, 6.6, 9.9, 16.4, 26.3 ft)"},
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
          { label: "Available Lengths", value: "1, 2, 3, 5, 8 m(3.3, 6.6, 9.8, 16.4, 26.3 ft)"},
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
          { label: "Available Lengths", value: "End-to-end: 0.15, 0.3, 1, 2, 3, 5, 8, 12, 15 m(0.5, 1, 3.3, 6.6, 9.8, 16.4, 26.2, 39.8, 49.2 ft)"},
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
          { label: "Available Lengths", value: "End-to-end: 0.15, 0.3, 1, 2, 3, 5, 8, 12, 15 m (0.5, 1, 3.3, 6.6, 9.8, 16.4, 26.2, 39.8, 49.2 ft)"},
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
          { label: "Available Lengths", value: "End-to-end: 1, 2, 3, 5, 8, 12, 15 m (3.3, 6.6, 9.8, 16.4, 26.2, 39.8, 49.2 ft)"},
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
          { label: "Length", value: "305 m (1,000 ft)"},
          { label: "Type", value: "Category 6" },
          { label: "Flame Rating", value: "CMR" },
          { label: "Operating Environment", value: "Indoor" },
          { label: "Box Dimensions", value: "476 x 306 x 419 mm (18.7 x 12 x 16.5')" },
          { label: "Box Weight", value: "14.6 kg (32.2 lb)"},
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
          { label: "Length", value: "305 m (1,000 ft)"},
          { label: "Type", value: "Category 5e" },
          { label: "Flame Rating", value: "VW-1 (UL1581)" },
          { label: "Operating Environment", value: "Outdoor" },
          { label: "Box Dimensions", value: "358 x 341 x 352 mm (14.09 x 13.43 x 13.86')" },
          { label: "Box Weight", value: "14.2 kg (31.32 lb)"},
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
          { label: "Dimensions", value: "83.4 x 25 x 16.5 mm(3.3 x 1 x 0.6')"},
          { label: "Weight", value: "38 g (1.3 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy" },
          { label: "LAN Activity Indicator", value: "✓" },
          { label: "Networking Interface", value: "(1) 5 GbE RJ45 port (1) USB Type-C port" },
          { label: "Gigabit LAN Port", value: "✓"},
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
          { label: "Dimensions", value: "107 x 56 x 22 mm (4.2 x 2.2 x 0.9'"},
          { label: "Weight", value: "160 g (5.6 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy" },
          { label: "LAN Activity Indicator", value: "✓" },
          { label: "Networking Interface", value: "(1) 10 GbE RJ45 port (1) USB Type-C port" },
          { label: "Gigabit LAN Port", value: "✓"},
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
          { label: "Pack Options", value: "10-Pack"},
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
          { label: "Pack Options", value: "2-Pack"},
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
          { label: "Length", value: "Excluding waterproof cap: 0.15 m (5.9')Including waterproof cap: 0.185 m (7.3')"},
          { label: "Type", value: "Category 6A" },
          { label: "Flame Rating", value: "VW-1 (UL1581)" },
          { label: "Operating Environment", value: "Indoor/Outdoor" },
          { label: "Supported PoE Type", value: "Up to PoE+++" },
          { label: "Color", value: "White"},
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
        productLink: "/products/mounting-kit"
      },
      {
        id: 2,
        name: "Power Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "High-quality power cable with durable construction.",
        specs: [
          "2m Length",
          "High durability",
          "Standard fit"
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
        name: "SFP+ Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "High-speed 10Gbps SFP+ module for fiber connectivity.",
        specs: [
          "10Gbps support",
          "Multi-mode fiber",
          "Hot-swappable"
        ],
        detailedSpecs: [
          { label: "Data Rate", value: "10 Gbps" },
          { label: "Connector", value: "LC Duplex" },
          { label: "Wavelength", value: "850 nm" },
          { label: "Max Distance", value: "300 m" } 
        ],
        productLink: "/products/sfp-module-10g"
      }
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
      "Cable length: 0.15 to 30 m",
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
    id: "UACC-DAC-SFP28-3M",
    name: "25G Long-Range Direct Attach Cable",
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

]; // paling trakhir
