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

// WiFi Products
export const wifiProducts: Product[] = [

  //Produk Pertama dari WiFi, SF Enterprise
  {
    id: "E7",
    name: "E7",
    category: "WiFi",
    subfilter: "Enterprise",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Enterprise-grade indoor access point with 10-stream WiFi 7 performance, a 10 GbE uplink, and a redundant GbE port for high availability.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],


    // SKU produk
    sku: "E7",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max. Client Count 1000+",
      "Power Method PoE++",
      "MIMO 6 GHz 4 x 4 (DL/UL MU-MIMO)",
      "Supported Data Rates 802.11be (WiFi 7) 7.3 Mbps to 11.4 Gbps (MCS0 - MCS13 NSS1/2/3/4, EHT 20/40/80/160/240/320)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "250 x 250 x 43.5 mm (9.8 x 9.8 x 1.7')" },
          { label: "WiFi Standard", value: "WiFi 7" },
          { label: "Spatial Streams", value: "10" },
          { label: "Coverage Area", value: "185 m² (2,000 ft²)" },
          { label: "Max. Client Count", value: "1000+" },
          { label: "Uplink", value: "10 GbE 1 GbE" },
          { label: "Mounting", value: "Ceiling, Wall, VESA (Pro Mount Included)" },
          { label: "Power Method", value: "PoE++" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 6 GHz", value: "4 x 4 (DL/UL MU-MIMO)" },
          { label: "MIMO 5 GHz", value: "4 x 4 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 6 GHz", value: "11.5 Gbps (BW320)" },
          { label: "Max. Data Rate 5 GHz", value: "8.6 Gbps (BW240)" },
          { label: "Max. Data Rate 2.4 GHz", value: "688 Mbps (BW40)" },

          { label: "Antenna Gain 6 GHz", value: "24 dBm / 30 dBm" },
          { label: "Antenna Gain 5 GHz", value: "30 dBm" },
          { label: "Antenna Gain 2.4 GHz", value: "23 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11be (WiFi 7)", value: "7.3 Mbps to 11.4 Gbps (MCS0 - MCS13 NSS1/2/3/4, EHT 20/40/80/160/240/320)" },
          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 4.8 Gbps (MCS0 - MCS11 NSS1/2/3/4, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 3.4 Gbps (MCS0 - MCS9 NSS1/2/3/4, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 600 Mbps (MCS0 - MCS31, HT 20/40)" }
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Real-Time Spectral Analysis", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },
          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },
          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "43W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Networking Interface", value: "(1) 10 GbE RJ45 port (1) 1 GbE RJ45 port" },
          { label: "Weight", value: "1.8 kg (4 lb)" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "UV-stabilized polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Stainless steel (SUS304), galvanized steel (SGCC)" },
          { label: "LEDs System", value: "R/G/B" },
          { label: "Channel Bandwidth", value: "HT 20/40, VHT 20/40/80/160, HE 20/40/80/160, EHT 20/40/80/160/240/320 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 06372-24-08356" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHzU-NII-5 to U-NII-8: 5925 - 7125 MHz  Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz 5925 - 7125 MHz" },
          { label: "Ambient Operating Temperature", value: "-30 to 50° C (-22 to 122° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 9.2.87 and later" },
          { label: "Application Requirements Mobile App", value: "iOS™ version 10.24.1 and later Android™ version 10.25.2 and later" },
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
        name: "Pro HD 24 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Professional-grade, Layer 3 Etherlighting™ switch with (2) 10 GbE PoE++, (22) 2.5 GbE PoE++, and (4) 10G SFP+ ports.",
        specs: [
          "Etherlighting™ ports that illuminate to indicate port location, speed/link, and native VLAN/network*",
          "(22) 2.5 GbE, (2) 10 GbE PoE++ ports",
          "(4) 10G SFP+ ports",
          "DC power backup ready**",
          "600W total PoE availability",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 400 x 44 mm (17.4 x 15.7 x 1.7')" },
          { label: "Port Layout 2.5 GbE RJ45", value: "22 (All PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10 GbE RJ45", value: "2 (All PoE++) (10G/5G/2.5G/1G/100M)" },
          { label: "Port Layou 10G SFP+t", value: "4 (10G/1G)" },
          { label: "Switching Capacity", value: "230 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "115 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "60W (Excluding PoE Output) 660W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 9.0.114 and later" },
        ],
        productLink: "/products/mounting-kit-e7"
      },
      {
        id: 2,
        name: "UniFi Premium Patch Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Ultra-thin braided patch cable, designed and optimized for 10 GbE networking.",
        specs: [
          "Translucent booted RJ45 for optimal Etherlighting™ brightness",
          "— 3 mm outer diameter for 0.15-8 m lengths",
          "— 3.3 mm outer diameter for 12-15 m lengths",
          "Length: 0.15 to 15 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/power-cable-e7"
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
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "16 (8 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+", value: "2 (10G/1G" },
          { label: "Switching Capacity", value: "112 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "56 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "50W (Excluding PoE Output) 450W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 8.0.24 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "UniFi Etherlighting Patch Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Nano-thin patch cable with 10 GbE support, designed to showcase Etherlighting™ effects.",
        specs: [
          "Translucent booted RJ45 for optimal Etherlighting™ brightness",
          "— 2.5 mm outer diameter for 0.15-8 m lengths",
          "— 2.9 mm outer diameter for 12-15 m lengths",
          "Length: 0.15 to 15 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Kedua dari WiFi, SF Enterprise
  {
    id: "E7-Campus",
    name: "E7 Campus",
    category: "WiFi",
    subfilter: "Enterprise",
    image: "/images/wifi-ap.jpg",
    shortDescription:
      "Enterprise-grade indoor/outdoor access point with 10-stream tri-band WiFi 7 performance, PRISM™ active RF filtering technology, integrated directional antennas, a 10 GbE uplink, and a redundant GbE port for high availability..",
    specs: [
      { label: "Standard", value: "WiFi 6E" },
      { label: "Throughput", value: "10.2 Gbps Aggregate" },
      { label: "Client Capacity", value: "600+" },
      { label: "Uplink", value: "2.5 GbE" },
    ],

    // SKU produk
    sku: "E7-CAMPUS",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-E7-Campus.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max. Client Count 1000+",
      "Power Method PoE++",
      "MIMO 6 GHz 4 x 4 (DL/UL MU-MIMO)",
      "Supported Data Rates 802.11be (WiFi 7) 7.3 Mbps to 11.4 Gbps (MCS0 - MCS13 NSS1/2/3/4, EHT 20/40/80/160/240/320)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Device: 250 x 250 x 45.5 mm (9.8 x 9.8 x 1.8') Articulating mount: ⌀104 x 149.4 (⌀4.1 x 5.9')" },
          { label: "WiFi Standard", value: "WiFi 7" },
          { label: "Spatial Streams", value: "10" },
          { label: "Coverage Area", value: "465 m² (5,000 ft²)" },
          { label: "Max. Client Count", value: "1000+" },
          { label: "Uplink", value: "10 GbE 1 GbE" },
          { label: "Mounting", value: "Wall, Pole (Mounts Included) VESA (Optional)" },
          { label: "Weatherproofing", value: "IPX6 IP67 with Waterproof Door Kit (Included)" },
          { label: "Power Method", value: "PoE++" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 6 GHz", value: "4 x 4 (DL/UL MU-MIMO)" },
          { label: "MIMO 5 GHz", value: "4 x 4 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 6 GHz", value: "11.5 Gbps (BW320)" },
          { label: "Max. Data Rate 5 GHz", value: "8.6 Gbps (BW240)" },
          { label: "Max. Data Rate 2.4 GHz", value: "688 Mbps (BW40)" },

          { label: "Antenna Gain 6 GHz", value: "Directional internal: 12 dBi, 90° x 50°" },
          { label: "Antenna Gain 5 GHz", value: "Directional internal: 12 dBi, 100° x 55°" },
          { label: "Antenna Gain 2.4 GHz", value: "Directional internal: 9 dBi, 90° x 80°" },

          { label: "Max. TX Power 6 GHz", value: "30 dBm  (36 dBm EIRP)" },
          { label: "Max. TX Power 5 GHz", value: "30 dBm" },
          { label: "Max. TX Power 2.4 GHz GHz", value: "23 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11be (WiFi 7)", value: "7.3 Mbps to 11.4 Gbps (MCS0 - MCS13 NSS1/2/3/4, EHT 20/40/80/160/240/320)" },
          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 4.8 Gbps (MCS0 - MCS11 NSS1/2/3/4, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 3.4 Gbps (MCS0 - MCS9 NSS1/2/3/4, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 600 Mbps (MCS0 - MCS31, HT 20/40)" }
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Zero-Wait DFS", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Real-Time Spectral Analysis", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },
          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },
          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "44W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Networking Interface", value: "(1) 10 GbE RJ45 port (1) 1 GbE RJ45 port" },
          { label: "PRISM™ RF Filtering", value: "✓" },
          { label: "Weight", value: "Device: 2.2 kg (4.9 lb) With articulating mount: 3.1 kg (6.8 lb)" },
          { label: "Wind Loading", value: "164.75 N at 200 km/h (37 lbf at 125 mph)" },
          { label: "Pole Mount Diameter", value: "1–2.5' (25–63.5 mm)" },
          { label: "Antennas", value: "(1) Internal with directional patterns" },
          { label: "Antenna beamwidth 6 GHz", value: "90° x 50°" },
          { label: "Antenna beamwidth 5 GHz", value: "100° x 55°" },
          { label: "Antenna beamwidth 2.4 GHz", value: "90° x 80°" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "UV-stabilized polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Stainless steel, aluminum alloy" },
          { label: "LEDs System", value: "R/G/B" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz U-NII-5 and U-NII-7: 5925 - 6425 MHz, 6525 - 6875 MHz Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz 5925 - 7125 MHz" },
          { label: "Ambient Operating Temperature", value: "-30 to 60° C (-22 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 9.0.114 and later" },
          { label: "Application Requirements Mobile App", value: "iOS™ version 10.20.0 and later Android™ version 10.21.3 and later" },
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
        name: "Ethernet Surge Protection Outdoor-20kA",
        image: "/images/dcs-box.png",
        price: 299,
        description: "ESD protection for outdoor high-speed networks.",
        specs: [
          "Protects outdoor Ethernet devices, up to 20kA discharge current.",
          "(2) Passive, surge-protected RJ45 connections",
          "Quick and easy installation",
          "Compatible with 10 GbE networks"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/mounting-kit"
      },
      {
        id: 2,
        name: "Ethernet Surge Protection Outdoor-10kA",
        image: "/images/dcs-box.png",
        price: 299,
        description: "ESD protection for outdoor high-speed networks.",
        specs: [
          "Protects outdoor Ethernet devices",
          "(2) Passive, surge-protected RJ45 connections",
          "Quick and easy installation",
          "Compatible with 2.5 GbE networks"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/power-cable"
      },
      {
        id: 3,
        name: "UniFi Premium Patch Cable Outdoor-B/W",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Ultra-thin, rugged, shielded outdoor patch cable, designed and optimized to perform in the harshest environments for 10 GbE networking.",
        specs: [
          "Shielded RJ45",
          "Insulated, weatherproof jacket",
          "Internal foil shielding and drain wire for increased ESD damage protection",
          "— 3.5 mm outer diameter for 1-8 m lengths",
          "— 3.9 mm outer diameter for 12-15 m lengths",
          "Length: 1 to 15 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "10G PoE++ Adapter (60W)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "An adapter that can power UniFi PoE++ devices, reduce dependency on PoE switch power, and provide a Multi-Gigabit LAN connection.",
        specs: [
          "Delivers up to 60W of PoE++",
          "Surge, peak pulse, and overcurrent protection",
          "Contains RJ45 data input, AC cable with earth ground, and PoE++ output",
          "LED indicator for status monitoring"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 5,
        name: "PoE++ Adapter (60W)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "An adapter that can power UniFi PoE++ devices, reduce dependency on PoE switch power, and provide a Gigabit LAN connection.",
        specs: [
          "Delivers up to 60W of PoE++",
          "Surge, peak pulse, and overcurrent protection",
          "Contains RJ45 data input, AC cable with earth ground, and PoE++ output",
          "LED indicator for status monitoring"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Ketiga dari WiFi, SF Enterprise
  {
    id: "E7-Campus-Indoor",
    name: "E7 Campus Indoor",
    category: "WiFi",
    subfilter: "Enterprise",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Enterprise-grade access point with 10-stream WiFi 7 performance, expanded 6 GHz indoor spectrum capability, a 10 GbE uplink, and a redundant GbE port for high availability.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "E7-Campus-Indoor",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max. Client Count 1000+",
      "Power Method PoE++",
      "MIMO 6 GHz 4 x 4 (DL/UL MU-MIMO)",
      "Supported Data Rates 802.11be (WiFi 7) 7.3 Mbps to 11.4 Gbps (MCS0 - MCS13 NSS1/2/3/4, EHT 20/40/80/160/240/320)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Device: 250 x 250 x 45.5 mm (9.8 x 9.8 x 1.8') Articulating mount: ⌀104 x 149.4 (⌀4.1 x 5.9')" },
          { label: "WiFi Standard", value: "WiFi 7" },
          { label: "Spatial Streams", value: "10" },
          { label: "Coverage Area", value: "465 m² (5,000 ft²)" },
          { label: "Max. Client Count", value: "1000+" },
          { label: "Uplink", value: "10 GbE 1 GbE" },
          { label: "Mounting", value: "Wall, Pole (Mounts Included) VESA (Optional)" },
          { label: "Power Method", value: "PoE++" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 6 GHz", value: "4 x 4 (DL/UL MU-MIMO)" },
          { label: "MIMO 5 GHz", value: "4 x 4 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 6 GHz", value: "11.5 Gbps (BW320)" },
          { label: "Max. Data Rate 5 GHz", value: "8.6 Gbps (BW240)" },
          { label: "Max. Data Rate 2.4 GHz", value: "688 Mbps (BW40)" },

          { label: "Antenna Gain 6 GHz", value: "Directional internal: 12 dBi, 90° x 50°" },
          { label: "Antenna Gain 5 GHz", value: "Directional internal: 12 dBi, 100° x 55°" },
          { label: "Antenna Gain 2.4 GHz", value: "Directional internal: 9 dBi, 90° x 80°" },

          { label: "Max. TX Power 6 GHz", value: "30 dBm  (36 dBm EIRP)" },
          { label: "Max. TX Power 5 GHz", value: "30 dBm" },
          { label: "Max. TX Power 2.4 GHz GHz", value: "23 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11be (WiFi 7)", value: "7.3 Mbps to 11.4 Gbps (MCS0 - MCS13 NSS1/2/3/4, EHT 20/40/80/160/240/320)" },
          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 4.8 Gbps (MCS0 - MCS11 NSS1/2/3/4, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 3.4 Gbps (MCS0 - MCS9 NSS1/2/3/4, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 600 Mbps (MCS0 - MCS31, HT 20/40)" }
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Zero-Wait DFS", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Real-Time Spectral Analysis", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },
          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },
          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "44W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Networking Interface", value: "(1) 10 GbE RJ45 port (1) 1 GbE RJ45 port" },
          { label: "PRISM™ RF Filtering", value: "✓" },
          { label: "Weight", value: "Device: 2.2 kg (4.9 lb) With articulating mount: 3.1 kg (6.8 lb)" },
          { label: "Wind Loading", value: "164.75 N at 200 km/h (37 lbf at 125 mph)" },
          { label: "Pole Mount Diameter", value: "1–2.5' (25–63.5 mm)" },
          { label: "Antennas", value: "(1) Internal with directional patterns" },
          { label: "Antenna beamwidth 6 GHz", value: "90° x 50°" },
          { label: "Antenna beamwidth 5 GHz", value: "100° x 55°" },
          { label: "Antenna beamwidth 2.4 GHz", value: "90° x 80°" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "UV-stabilized polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Stainless steel, aluminum alloy" },
          { label: "LEDs System", value: "R/G/B" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz U-NII-5 and U-NII-7: 5925 - 6425 MHz, 6525 - 6875 MHz Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz 5925 - 7125 MHz" },
          { label: "Ambient Operating Temperature", value: "-40 to 60° C (-40 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 10.0.162 and later" },
          { label: "Application Requirements Mobile App", value: "iOS™ version 10.30.2 and later Android™ version 10.31.4 and later" },
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
        name: "Pro HD 24 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Professional-grade, Layer 3 Etherlighting™ switch with (2) 10 GbE PoE++, (22) 2.5 GbE PoE++, and (4) 10G SFP+ ports.",
        specs: [
          "Etherlighting™ ports that illuminate to indicate port location, speed/link, and native VLAN/network*",
          "(22) 2.5 GbE, (2) 10 GbE PoE++ ports",
          "(4) 10G SFP+ ports",
          "DC power backup ready**",
          "600W total PoE availability",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 400 x 44 mm (17.4 x 15.7 x 1.7')" },
          { label: "Port Layout 2.5 GbE RJ45", value: "22 (All PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10 GbE RJ45", value: "2 (All PoE++) (10G/5G/2.5G/1G/100M)" },
          { label: "Port Layou 10G SFP+t", value: "4 (10G/1G)" },
          { label: "Switching Capacity", value: "230 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "115 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "60W (Excluding PoE Output) 660W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 9.0.114 and later" },
        ],
        productLink: "/products/mounting-kit-e7"
      },
      {
        id: 2,
        name: "UniFi Premium Patch Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Ultra-thin braided patch cable, designed and optimized for 10 GbE networking.",
        specs: [
          "Translucent booted RJ45 for optimal Etherlighting™ brightness",
          "— 3 mm outer diameter for 0.15-8 m lengths",
          "— 3.3 mm outer diameter for 12-15 m lengths",
          "Length: 0.15 to 15 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/power-cable-e7"
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
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "16 (8 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+", value: "2 (10G/1G" },
          { label: "Switching Capacity", value: "112 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "56 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "50W (Excluding PoE Output) 450W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 8.0.24 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "UniFi Etherlighting Patch Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Nano-thin patch cable with 10 GbE support, designed to showcase Etherlighting™ effects.",
        specs: [
          "Translucent booted RJ45 for optimal Etherlighting™ brightness",
          "— 2.5 mm outer diameter for 0.15-8 m lengths",
          "— 2.9 mm outer diameter for 12-15 m lengths",
          "Length: 0.15 to 15 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Keempat dari WiFi, SF Enterprise
  {
    id: "E7-Audience",
    name: "E7 Audience",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Enterprise-grade, indoor/outdoor access point designed for high-density environments with 12-stream 5 GHz and 6 GHz WiFi 7 performance, a 10 GbE uplink, and a redundant GbE port for high availability.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],


    // SKU produk
    sku: "E7-Audience",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max. Client Count 1500+",
      "MIMO 6 GHz Low Band: 4 x 4 (DL/UL MU-MIMO) High Band: 4 x 4 (DL/UL MU-MIMO)",
      "Enclosure Material UV-stabilized polycarbonate, aluminum alloy",
      "Power Method PoE++"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Device: 474.1 x 265.5 x 42.2 mm (18.7 x 10.5 x 1.7') Bracket: 150.4 x 113.6 x 125 mm  (5.9 x 4.5 x 4.9')" },
          { label: "WiFi Standard", value: "WiFi 7" },
          { label: "Spatial Streams", value: "12" },
          { label: "Coverage Area", value: "465 m² (5,000 ft²)" },
          { label: "Max. Client Count", value: "1500+" },
          { label: "Uplink", value: "10 GbE 1 GbE" },
          { label: "Mounting", value: "Wall, Pole (Mounts Included) VESA (Optional)" },
          { label: "Weatherproofing", value: "IP68" },
          { label: "Power Method", value: "PoE++" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 6 GHz", value: "Low Band: 4 x 4 (DL/UL MU-MIMO) High Band: 4 x 4 (DL/UL MU-MIMO)" },
          { label: "MIMO 5 GHz", value: "4 x 4 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 6 GHz", value: "Low Band: 11.5 Gbps (BW320) High Band: 11.5 Gbps (BW320)" },
          { label: "Max. Data Rate 5 GHz", value: "8.6 Gbps (BW240)" },

          { label: "Antenna Gain 6 GHz", value: "Directional internal: 15 dBi, 50° x 50° Directional internal: 11 dBi, 90° x 90°" },
          { label: "Antenna Gain 5 GHz", value: "Directional internal: 15 dBi, 50° x 50° Directional internal: 11 dBi, 90° x 90°" },

          { label: "Max. TX Power 6 GHz", value: "Low Band: 30 dBm (36 dBm EIRP) High Band: 30 dBm (36 dBm EIRP)" },
          { label: "Max. TX Power 5 GHz", value: "30 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11be (WiFi 7)", value: "7.3 Mbps to 11.5 Gbps (MCS0 - MCS13 NSS1/2/3/4, EHT 20/40/80/160/240/320)" },
          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 4.8 Gbps (MCS0 - MCS11 NSS1/2/3/4, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 3.4 Gbps (MCS0 - MCS9 NSS1/2/3/4, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 600 Mbps (MCS0 - MCS31, HT 20/40)" }
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Zero-Wait DFS", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Real-Time Spectral Analysis", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },
          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },
          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "51W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Networking Interface", value: "(1) 10 GbE RJ45 port (1) 1 GbE RJ45 port" },
          { label: "PRISM™ RF Filtering", value: "✓" },
          { label: "Weight", value: "Device: 3.3 kg (7.3 lb) With mount: 4.3 kg (9.5 lb)" },
          { label: "Wind Loading", value: "164.75 N at 200 km/h (37 lbf at 125 mph)" },
          { label: "Pole Mount Diameter", value: "1–3' (25–76 mm)" },
          { label: "Antennas", value: "(1) Internal with directional patterns" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "UV-stabilized polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Aluminum alloy" },
          { label: "LEDs System", value: "R/G/B" },
          { label: "Chanel Bandwidth", value: "VHT 20/40/80/160, HE 20/40/80/160, EHT 20/40/80/160/240/320 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC" },
          { label: "Operating Frequency", value: "US/CA: U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz U-NII-5 and U-NII-7: 5925 - 6425 MHz, 6525 - 6875 MHz Worldwide: 5150 - 5850 MHz 5925 - 7125 MHz" },
          { label: "Ambient Operating Temperature", value: "-40 to 60° C (-40 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 9.2.87 and later" },
          { label: "Application Requirements Mobile App", value: "iOS™ version 10.24.1 and later Android™ version 10.25.2 and later" },
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
        name: "Pro HD 24 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Professional-grade, Layer 3 Etherlighting™ switch with (2) 10 GbE PoE++, (22) 2.5 GbE PoE++, and (4) 10G SFP+ ports.",
        specs: [
          "Etherlighting™ ports that illuminate to indicate port location, speed/link, and native VLAN/network*",
          "(22) 2.5 GbE, (2) 10 GbE PoE++ ports",
          "(4) 10G SFP+ ports",
          "DC power backup ready**",
          "600W total PoE availability",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 400 x 44 mm (17.4 x 15.7 x 1.7')" },
          { label: "Port Layout 2.5 GbE RJ45", value: "22 (All PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10 GbE RJ45", value: "2 (All PoE++) (10G/5G/2.5G/1G/100M)" },
          { label: "Port Layou 10G SFP+t", value: "4 (10G/1G)" },
          { label: "Switching Capacity", value: "230 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "115 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "60W (Excluding PoE Output) 660W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 9.0.114 and later" },
        ],
        productLink: "/products/mounting-kit-e7"
      },
      {
        id: 2,
        name: "UniFi Premium Patch Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Ultra-thin braided patch cable, designed and optimized for 10 GbE networking.",
        specs: [
          "Translucent booted RJ45 for optimal Etherlighting™ brightness",
          "— 3 mm outer diameter for 0.15-8 m lengths",
          "— 3.3 mm outer diameter for 12-15 m lengths",
          "Length: 0.15 to 15 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/power-cable-e7"
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
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "16 (8 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+", value: "2 (10G/1G" },
          { label: "Switching Capacity", value: "112 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "56 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "50W (Excluding PoE Output) 450W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 8.0.24 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "UniFi Etherlighting Patch Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Nano-thin patch cable with 10 GbE support, designed to showcase Etherlighting™ effects.",
        specs: [
          "Translucent booted RJ45 for optimal Etherlighting™ brightness",
          "— 2.5 mm outer diameter for 0.15-8 m lengths",
          "— 2.9 mm outer diameter for 12-15 m lengths",
          "Length: 0.15 to 15 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Kelima dari WiFi, SF Enterprise
  {
    id: "E7-Audience-Indoor",
    name: "E7 Audience Indoor",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Enterprise-grade access point designed for high-density environments with 12-stream WiFi 7 performance, expanded 6 GHz indoor spectrum capability, a 10 GbE uplink, and a redundant GbE port for high availability.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "E7-Audience-Indoor",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-U7-Pro-XGS.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max. Client Count 1500+",
      "MIMO 6 GHz Low Band: 4 x 4 (DL/UL MU-MIMO) High Band: 4 x 4 (DL/UL MU-MIMO)",
      "Enclosure Material UV-stabilized polycarbonate, aluminum alloy",
      "Power Method PoE++"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Device: 474.1 x 239.4 x 42.2 mm (18.7 x 9.4 x 1.7') Bracket: 150.4 x 113.6 x 125 mm (5.9 x 4.5 x 4.9')" },
          { label: "WiFi Standard", value: "WiFi 7" },
          { label: "Spatial Streams", value: "12" },
          { label: "Coverage Area", value: "465 m² (5,000 ft²)" },
          { label: "Max. Client Count", value: "1500+" },
          { label: "Uplink", value: "10 GbE 1 GbE" },
          { label: "Mounting", value: "Wall, Pole (Mounts Included) VESA (Optional)" },
          { label: "Power Method", value: "PoE++" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 6 GHz", value: "Low Band: 4 x 4 (DL/UL MU-MIMO) High Band: 4 x 4 (DL/UL MU-MIMO)" },
          { label: "MIMO 5 GHz", value: "4 x 4 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 6 GHz", value: "Low Band: 11.5 Gbps (BW320) High Band: 11.5 Gbps (BW320)" },
          { label: "Max. Data Rate 5 GHz", value: "8.6 Gbps (BW240)" },

          { label: "Antenna Gain 6 GHz", value: "Directional internal: 15 dBi, 50° x 50° Directional internal: 11 dBi, 90° x 90°" },
          { label: "Antenna Gain 5 GHz", value: "Directional internal: 15 dBi, 50° x 50° Directional internal: 11 dBi, 90° x 90°" },

          { label: "Max. TX Power 6 GHz", value: "Low Band: 30 dBm (36 dBm EIRP) High Band: 30 dBm (36 dBm EIRP)" },
          { label: "Max. TX Power 5 GHz", value: "30 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11be (WiFi 7)", value: "7.3 Mbps to 11.4 Gbps (MCS0 - MCS13 NSS1/2/3/4, EHT 20/40/80/160/240/320)" },
          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 4.8 Gbps (MCS0 - MCS11 NSS1/2/3/4, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 3.4 Gbps (MCS0 - MCS9 NSS1/2/3/4, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 600 Mbps (MCS0 - MCS31, HT 20/40)" }
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Zero-Wait DFS", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Real-Time Spectral Analysis", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },
          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },
          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "51W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Networking Interface", value: "(1) 10 GbE RJ45 port (1) 1 GbE RJ45 port" },
          { label: "PRISM™ RF Filtering", value: "✓" },
          { label: "Weight", value: "Device: 3.2 kg (7.1 lb) With mount: 4.2 kg (9.3 lb)" },
          { label: "Pole Mount Diameter", value: "1–3' (25–76 mm)" },
          { label: "Antennas", value: "(1) Internal with directional patterns" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "UV-stabilized polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Aluminum alloy" },
          { label: "LEDs System", value: "R/G/B" },
          { label: "Chanel Bandwidth", value: "VHT 20/40/80/160, HE 20/40/80/160, EHT 20/40/80/160/240/320 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC" },
          { label: "Ambient Operating Temperature", value: "-40 to 60° C (-40 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 10.0.162 and later" },
          { label: "Application Requirements Mobile App", value: "iOS™ version 10.30.2 and later Android™ version 10.31.4 and later" },
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
        name: "Pro HD 24 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Professional-grade, Layer 3 Etherlighting™ switch with (2) 10 GbE PoE++, (22) 2.5 GbE PoE++, and (4) 10G SFP+ ports.",
        specs: [
          "Etherlighting™ ports that illuminate to indicate port location, speed/link, and native VLAN/network*",
          "(22) 2.5 GbE, (2) 10 GbE PoE++ ports",
          "(4) 10G SFP+ ports",
          "DC power backup ready**",
          "600W total PoE availability",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 400 x 44 mm (17.4 x 15.7 x 1.7')" },
          { label: "Port Layout 2.5 GbE RJ45", value: "22 (All PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10 GbE RJ45", value: "2 (All PoE++) (10G/5G/2.5G/1G/100M)" },
          { label: "Port Layou 10G SFP+t", value: "4 (10G/1G)" },
          { label: "Switching Capacity", value: "230 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "115 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "60W (Excluding PoE Output) 660W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 9.0.114 and later" },
        ],
        productLink: "/products/mounting-kit-e7"
      },
      {
        id: 2,
        name: "UniFi Premium Patch Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Ultra-thin braided patch cable, designed and optimized for 10 GbE networking.",
        specs: [
          "Translucent booted RJ45 for optimal Etherlighting™ brightness",
          "— 3 mm outer diameter for 0.15-8 m lengths",
          "— 3.3 mm outer diameter for 12-15 m lengths",
          "Length: 0.15 to 15 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/power-cable-e7"
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
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "16 (8 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+", value: "2 (10G/1G" },
          { label: "Switching Capacity", value: "112 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "56 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "50W (Excluding PoE Output) 450W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 8.0.24 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "UniFi Etherlighting Patch Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Nano-thin patch cable with 10 GbE support, designed to showcase Etherlighting™ effects.",
        specs: [
          "Translucent booted RJ45 for optimal Etherlighting™ brightness",
          "— 2.5 mm outer diameter for 0.15-8 m lengths",
          "— 2.9 mm outer diameter for 12-15 m lengths",
          "Length: 0.15 to 15 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Pertama dari WiFi, SF Flagship
  {
    id: "U7-Pro-XGS-B",
    name: "U7 Pro XGS",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Ceiling-mounted 8-stream WiFi 7 AP with dedicated spectral scanning radio and 10/5/2.5/1 GbE support.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U7-Pro-XGS-B",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max. Client Count 500+",
      "MIMO 6 GHz 2 x 2 (DL/UL MU-MIMO)",
      "Enclosure Material UV-stabilized polycarbonate, aluminum alloy",
      "Power Method PoE++"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀215 x 32.5 mm (⌀8.5 x 1.3')" },
          { label: "WiFi Standard", value: "WiFi 7" },
          { label: "Spatial Streams", value: "8" },
          { label: "Coverage Area", value: "160 m² (1,750 ft²)" },
          { label: "Max. Client Count", value: "500+" },
          { label: "Uplink", value: "10 GbE" },
          { label: "Mounting", value: "Ceiling, Wall (Lite Mount Included)" },
          { label: "Weatherproofing", value: "IP68" },
          { label: "Power Method", value: "PoE++" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 6 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },
          { label: "MIMO 5 GHz", value: "4 x 4 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 6 GHz", value: "5.8 Gbps (BW320)" },
          { label: "Max. Data Rate 5 GHz", value: "8.6 Gbps (BW240)" },
          { label: "Max. Data Rate 2.4 GHz", value: "688 Mbps (BW40)" },

          { label: "Antenna Gain 6 GHz", value: "6 dBi" },
          { label: "Antenna Gain 5 GHz", value: "6 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "4 dBi" },

          { label: "Max. TX Power 6 GHz", value: "24 dBm" },
          { label: "Max. TX Power 5 GHz", value: "29 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "23 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11be (WiFi 7)", value: "6 GHz: 7.3 Mbps to 5.8 Gbps (MCS0 - MCS13 NSS1/2, EHT 20/40/80/160/320) 5 GHz: 7.3 Mbps to 8.6 Gbps (MCS0 - MCS13 NSS1/2/3/4, EHT 20/40/80/160/240)" },
          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 4.8 Gbps (MCS0 - MCS11 NSS1/2/3/4, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 3.4 Gbps (MCS0 - MCS9 NSS1/2/3/4, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 600 Mbps (MCS0 - MCS31, HT 20/40)" }
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Zero-Wait DFS", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Real-Time Spectral Analysis", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },

          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },

          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "29W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Networking Interface", value: "(1) 10 GbE RJ45 port (1) 1 GbE RJ45 port" },
          { label: "PRISM™ RF Filtering", value: "✓" },
          { label: "Weight", value: "800 g (1.8 lb)" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "UV-stabilized polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Stainless steel (SUS304), galvanized steel (SGCC)" },
          { label: "LEDs System", value: "White/Blue" },
          { label: "Chanel Bandwidth", value: "HT 20/40, VHT 20/40/80/160, HE 20/40/80/160, EHT 20/40/80/160/240/320 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 05123-25-08356" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz U-NII-5 to U-NII-8: 5925 - 7125 MHz Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz 5925 - 7125 MHz" },
          { label: "Ambient Operating Temperature", value: "-30 to 40° C (-22 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 9.0.114 and later (U7 Pro XGS - White) Version 9.1.120 and later (U7 Pro XGS - Black)" },
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

  // Produk Kedua dari WiFi, SF Flagship
  {
    id: "U7-Pro-Max",
    name: "U7 Pro Max",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Ceiling-mounted WiFi 7 AP with 8 spatial streams, 6 GHz support, and a dedicated spectral scanning engine for interference-free WiFi in demanding, large-scale environments.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U7-Pro-Max",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Ceiling-mounted WiFi 7 AP with 6 spatial streams",
      "6 GHz support for interference-free WiFi in demanding",
      "large-scale environments",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀206 x 46 mm (⌀8.1 x 1.8')" },
          { label: "WiFi Standard", value: "WiFi 7" },
          { label: "Spatial Streams", value: "8" },
          { label: "Coverage Area", value: "160 m² (1,750 ft²)" },
          { label: "Max. Client Count", value: "500+" },
          { label: "Uplink", value: "2.5 GbE" },
          { label: "Mounting", value: "Ceiling, Wall (Pro Mount Included)" },
          { label: "Power Method", value: "PoE+" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 6 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },
          { label: "MIMO 5 GHz", value: "4 x 4 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 6 GHz", value: "5.8 Gbps (BW320)" },
          { label: "Max. Data Rate 5 GHz", value: "8.6 Gbps (BW240)" },
          { label: "Max. Data Rate 2.4 GHz", value: "688 Mbps (BW40)" },

          { label: "Antenna Gain 6 GHz", value: "5.9 dBi" },
          { label: "Antenna Gain 5 GHz", value: "6 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "4 dBi" },

          { label: "Max. TX Power 6 GHz", value: "23 dBm" },
          { label: "Max. TX Power 5 GHz", value: "29 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "23 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11be (WiFi 7)", value: "6 GHz: 7.3 Mbps to 5.8 Gbps (MCS0 - MCS13 NSS1/2, EHT 20/40/80/160/320) 5 GHz: 7.3 Mbps to 8.6 Gbps (MCS0 - MCS13 NSS1/2/3/4, EHT 20/40/80/160/240)" },
          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 4.8 Gbps (MCS0 - MCS11 NSS1/2/3/4, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 3.4 Gbps (MCS0 - MCS9 NSS1/2/3/4, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 600 Mbps (MCS0 - MCS31, HT 20/40)" }
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Zero-Wait DFS", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Real-Time Spectral Analysis", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },

          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },

          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "25W" },
          { label: "Supported Voltage Range", value: "44.5–57V DC" },
          { label: "Networking Interface", value: "(1) 1/2.5 GbE RJ45 port" },
          { label: "Weight", value: "680 g (1.5 lb)" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum" },
          { label: "Mount Material", value: "Stainless steel (SUS304), galvanized steel (SGCC)" },
          { label: "LEDs System", value: "White/Blue" },
          { label: "Chanel Bandwidth", value: "HT 20/40, VHT 20/40/80/160, HE 20/40/80/160, EHT 20/40/80/160/240/320 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 05123-25-08356" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz U-NII-5 to U-NII-8: 5925 - 7125 MHz Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz 5925 - 7125 MHz" },
          { label: "Ambient Operating Temperature", value: "-30 to 40° C (-22 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 8.2.93 and later" },
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
        name: "Pro Max 16 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 16-port, Layer 3 Etherlighting™ switch with 2.5 GbE, PoE++ output, and versatile mounting options",
        specs: [
          "Etherlighting™ ports that illuminate to indicate port location, speed/link, and native VLAN/network*",
          "(4) 2.5 GbE PoE++ ports",
          "(12) GbE PoE+ ports",
          "(2) 10G SFP+ ports",
          "180W total PoE availability",
          "Versatile desktop, wall, and rack** mounting",
          "Silent, fanless cooling system",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness. **Requires add-on Rack Mount accessory.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "325.1 x 160 x 43.7 mm (12.8 x 6.3 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "12 (All PoE+) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "4 (All PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "230 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "42 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "25W (Excluding PoE Output) 210W (Including PoE Output)" },
          { label: "Power Method", value: "AC Adapter" },
          { label: "Application Requirements UniFi Network", value: "Version 8.1.127 and later" },
        ],
        productLink: "/products/mounting-kit-u7-pr0"
      },
      {
        id: 2,
        name: "Pro Max 48 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 48-port, Layer 3 Etherlighting™ switch with 2.5 GbE and PoE++ output.",
        specs: [
          "A 48-port, Layer 3 Etherlighting™ switch with 2.5 GbE and PoE++ output.",
          "(16) 2.5 GbE ports including (8) PoE+ and (8) PoE++",
          "32) GbE ports including (24) PoE+ and (8) PoE++",
          "(4) 10G SFP+ ports",
          "DC power backup ready",
          "720W total PoE availabilit",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness."
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442.4 x 400 x 44 mm (17.4 x 15.7 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "32 (24 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "16 (8 PoE+; 8 PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "4 (10G/1G)" },
          { label: "Switching Capacity", value: "224 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "112 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "100W (Excluding PoE Output) 820W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 8.0.24 and later" },
        ],
        productLink: "/products/power-cable-u7-pr0"
      },
      {
        id: 3,
        name: "Pro Max 24 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 24-port, Layer 3 Etherlighting™ switch capable of high-power PoE++ output.",
        specs: [
          "Etherlighting™ ports that illuminate to indicate port location, speed/link, and native VLAN/network*",
          "(8) 2.5 GbE PoE++ ports",
          "(16) GbE ports including (8) PoE+ and (8) PoE++",
          "(2) 10G SFP+ ports",
          "DC power backup ready",
          "400W total PoE availabilitly",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "16 (8 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "112 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "56 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "50W (Excluding PoE Output) 450W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 8.0.24 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "Enterprise 48 PoE (Vintage)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 48-port, Layer 3 switch with 2.5 GbE PoE+ output.",
        specs: [
          "(48) 2.5 GbE PoE+ ports",
          "720W total PoE availability",
          "DC power backup-ready",
          "Layer 3 switching",
          "DC power backup ready",
          "400W total PoE availabilitly",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
          { label: "Port Layout 2.5 GbE RJ45", value: "48 (All PoE+) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "4 (10G/1G)" },
          { label: "Switching Capacity", value: "160 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "160 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "150W (Excluding PoE Output) 870W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 6.2.26 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 5,
        name: "Enterprise 24 PoE (Vintage)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 24-port, Layer 3 switch with 2.5 GbE PoE+ output.",
        specs: [
          "(12) 2.5 GbE, (12) GbE; all PoE+ ports",
          "(2) 10G SFP+ ports",
          "400W total PoE availability",
          "(2) 10G SFP+ ports",
          "DC power backup-ready",
          "Layer 3 switching"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "12 (All PoE+) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "12 (All PoE+) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "124 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "62 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "60W (Excluding PoE Output) 460W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 5.14.12 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 6,
        name: "UniFi Etherlighting Patch Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Nano-thin patch cable with 10 GbE support, designed to showcase Etherlighting™ effects.",
        specs: [
          "Translucent booted RJ45 for optimal Etherlighting™ brightness",
          "— 2.5 mm outer diameter for 0.15-8 m lengths",
          "— 2.9 mm outer diameter for 12-15 m lengths",
          "Length: 0.15 to 15 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 7,
        name: "Enterprise 8 PoE (Vintage)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "An 8-port, Layer 3 switch with 2.5 GbE PoE+ output.",
        specs: [
          "(8) 2.5 GbE PoE+ ports",
          "(2) 10G SFP+ ports",
          "120W total PoE availability",
          "Note. These switches are not compatible with the PoE++ requirements of the new U7 and E7 Access Points. We recommend using Enterprise Campus switches for such deployments.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "200 x 248 x 44 mm (7.9 x 9.8 x 1.7')" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE+) (2.5G/1G/100M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "80 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "40 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "30W (Excluding PoE Output) 150W (Including PoE Output)" },
          { label: "Power Method", value: "Universal input, 100–240V AC, 50/60 Hz" },
          { label: "Application Requirements UniFi Network", value: "Version 6.3.51 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },

  // Produk Ketiga dari WiFi, SF Flagship
  {
    id: "U6-Enterprise",
    name: "U6 Enterprise",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Ceiling-mounted WiFi 6E AP with 10 spatial streams and 6 GHz support to provide seamless, multi-band coverage within high client density environments.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U6-Enterprise",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "ceiling-mount WiFi 7 AP with 5 spatial streams and extended signal range",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀220 x 48 mm (⌀8.7 x 1.9')" },
          { label: "WiFi Standard", value: "WiFi 6E" },
          { label: "Spatial Streams", value: "10" },
          { label: "Coverage Area", value: "140 m² (1,500 ft²)" },
          { label: "Max. Client Count", value: "600+" },
          { label: "Uplink", value: "2.5 GbE" },
          { label: "Mounting", value: "Ceiling, Wall (Pro Mount Included)" },
          { label: "Power Method", value: "PoE+" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 6 GHz", value: "4 x 4 (DL/UL MU-MIMO)" },
          { label: "MIMO 5 GHz", value: "4 x 4 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 6 GHz", value: "4.8 Gbps (BW160)" },
          { label: "Max. Data Rate 5 GHz", value: "4.8 Gbps (BW160)" },
          { label: "Max. Data Rate 2.4 GHz", value: "573.5 Mbps (BW40)" },

          { label: "Antenna Gain 6 GHz", value: "6 dBi" },
          { label: "Antenna Gain 5 GHz", value: "5.3 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "3.2 dBi" },

          { label: "Max. TX Power 6 GHz", value: "26 dBm" },
          { label: "Max. TX Power 5 GHz", value: "26 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "22 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11ax (WiFi 6/6E", value: "7.3 Mbps to 4.8 Gbps (MCS0 - MCS11 NSS1/2/3/4, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 3.4 Gbps (MCS0 - MCS9 NSS1/2/3/4, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 600 Mbps (MCS0 - MCS31, HT 20/40)" }
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },

          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },

          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "22W" },
          { label: "Supported Voltage Range", value: "44.5–57V DC" },
          { label: "Networking Interface", value: "(1) 1/2.5 GbE RJ45 port" },
          { label: "Weight", value: "Device: 960 g (2.1 lb) With mount: 1.1 kg (2.4 lb)" },
          { label: "Management", value: "Ethernet Bluetooth" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum" },
          { label: "Mount Material", value: "Stainless steel (SUS304)" },
          { label: "LEDs System", value: "White/Blue" },
          { label: "Chanel Bandwidth", value: "HT 20/40, VHT 20/40/80/160, HE 20/40/80/160, EHT 20/40/80/160/240/320 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 11933-22-08356" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz U-NII-5 to U-NII-8: 6100 - 7125 MHz Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz 5925 - 7125 MHz (Depends on the regulatory region)" },
          { label: "Ambient Operating Temperature", value: "-30 to 60° C (-22 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 6.0.45 and later" },
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
        name: "Pro Max 16 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 16-port, Layer 3 Etherlighting™ switch with 2.5 GbE, PoE++ output, and versatile mounting options",
        specs: [
          "Etherlighting™ ports that illuminate to indicate port location, speed/link, and native VLAN/network*",
          "(4) 2.5 GbE PoE++ ports",
          "(12) GbE PoE+ ports",
          "(2) 10G SFP+ ports",
          "180W total PoE availability",
          "Versatile desktop, wall, and rack** mounting",
          "Silent, fanless cooling system",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness. **Requires add-on Rack Mount accessory.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "325.1 x 160 x 43.7 mm (12.8 x 6.3 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "12 (All PoE+) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "4 (All PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "230 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "42 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "25W (Excluding PoE Output) 210W (Including PoE Output)" },
          { label: "Power Method", value: "AC Adapter" },
          { label: "Application Requirements UniFi Network", value: "Version 8.1.127 and later" },
        ],
        productLink: "/products/mounting-kit-u7-lr"
      },
      {
        id: 2,
        name: "Pro Max 48 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 48-port, Layer 3 Etherlighting™ switch with 2.5 GbE and PoE++ output.",
        specs: [
          "A 48-port, Layer 3 Etherlighting™ switch with 2.5 GbE and PoE++ output.",
          "(16) 2.5 GbE ports including (8) PoE+ and (8) PoE++",
          "32) GbE ports including (24) PoE+ and (8) PoE++",
          "(4) 10G SFP+ ports",
          "DC power backup ready",
          "720W total PoE availabilit",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness."
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442.4 x 400 x 44 mm (17.4 x 15.7 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "32 (24 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "16 (8 PoE+; 8 PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "4 (10G/1G)" },
          { label: "Switching Capacity", value: "224 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "112 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "100W (Excluding PoE Output) 820W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 8.0.24 and later" },
        ],
        productLink: "/products/power-cable-u7-lr"
      },
      {
        id: 3,
        name: "Pro Max 24 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 24-port, Layer 3 Etherlighting™ switch capable of high-power PoE++ output.",
        specs: [
          "Etherlighting™ ports that illuminate to indicate port location, speed/link, and native VLAN/network*",
          "(8) 2.5 GbE PoE++ ports",
          "(16) GbE ports including (8) PoE+ and (8) PoE++",
          "(2) 10G SFP+ ports",
          "DC power backup ready",
          "400W total PoE availabilitly",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "16 (8 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "112 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "56 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "50W (Excluding PoE Output) 450W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 8.0.24 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "Enterprise 48 PoE (Vintage)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 48-port, Layer 3 switch with 2.5 GbE PoE+ output.",
        specs: [
          "(48) 2.5 GbE PoE+ ports",
          "720W total PoE availability",
          "DC power backup-ready",
          "Layer 3 switching",
          "DC power backup ready",
          "400W total PoE availabilitly",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
          { label: "Port Layout 2.5 GbE RJ45", value: "48 (All PoE+) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "4 (10G/1G)" },
          { label: "Switching Capacity", value: "160 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "160 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "150W (Excluding PoE Output) 870W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 6.2.26 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 5,
        name: "Enterprise 24 PoE (Vintage)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 24-port, Layer 3 switch with 2.5 GbE PoE+ output.",
        specs: [
          "(12) 2.5 GbE, (12) GbE; all PoE+ ports",
          "(2) 10G SFP+ ports",
          "400W total PoE availability",
          "(2) 10G SFP+ ports",
          "DC power backup-ready",
          "Layer 3 switching"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "12 (All PoE+) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "12 (All PoE+) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "124 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "62 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "60W (Excluding PoE Output) 460W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 5.14.12 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 6,
        name: "UniFi Etherlighting Patch Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Nano-thin patch cable with 10 GbE support, designed to showcase Etherlighting™ effects.",
        specs: [
          "Translucent booted RJ45 for optimal Etherlighting™ brightness",
          "— 2.5 mm outer diameter for 0.15-8 m lengths",
          "— 2.9 mm outer diameter for 12-15 m lengths",
          "Length: 0.15 to 15 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 7,
        name: "Enterprise 8 PoE (Vintage)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "An 8-port, Layer 3 switch with 2.5 GbE PoE+ output.",
        specs: [
          "(8) 2.5 GbE PoE+ ports",
          "(2) 10G SFP+ ports",
          "120W total PoE availability",
          "Note. These switches are not compatible with the PoE++ requirements of the new U7 and E7 Access Points. We recommend using Enterprise Campus switches for such deployments.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "200 x 248 x 44 mm (7.9 x 9.8 x 1.7')" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE+) (2.5G/1G/100M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "80 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "40 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "30W (Excluding PoE Output) 150W (Including PoE Output)" },
          { label: "Power Method", value: "Universal input, 100–240V AC, 50/60 Hz" },
          { label: "Application Requirements UniFi Network", value: "Version 6.3.51 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },

  //Produk keempat dari WiFi, SF Flagship
  {
    id: "U7-Pro-XG-B",
    name: "U7 Pro XG",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Ceiling-mounted 6-stream WiFi 7 AP with 10/5/2.5/1 GbE support.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U7-Pro-XG-B",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Note. 6 GHz operation is supported in these countries.",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀206 x 32.5 mm (⌀8.1 x 1.3')" },
          { label: "WiFi Standard", value: "WiFi 7" },
          { label: "Spatial Streams", value: "6" },
          { label: "Coverage Area", value: "140 m² (1,500 ft²)" },
          { label: "Max. Client Count", value: "300+" },
          { label: "Uplink", value: "10 GbE" },
          { label: "Mounting", value: "Ceiling, Wall (Lite Mount Included)" },
          { label: "Power Method", value: "PoE+" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 6 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },
          { label: "MIMO 5 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 6 GHz", value: "5.8 Gbps (BW320)" },
          { label: "Max. Data Rate 5 GHz", value: "4.3 Gbps (BW240)" },
          { label: "Max. Data Rate 2.4 GHz", value: "688 Mbps (BW40)" },

          { label: "Antenna Gain 6 GHz", value: "6 dBi" },
          { label: "Antenna Gain 5 GHz", value: "5 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "4 dBi" },

          { label: "Max. TX Power 6 GHz", value: "24 dBm" },
          { label: "Max. TX Power 5 GHz", value: "26 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "23 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11be (WiFi 7)", value: "6 GHz: 7.3 Mbps to 5.8 Gbps (MCS0 - MCS13 NSS1/2, EHT 20/40/80/160/320) 5 GHz: 7.3 Mbps to 4.3 Gbps (MCS0 - MCS13 NSS1/2/3/4, EHT 20/40/80/160/240)" },
          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 2.4 Gbps (MCS0 - MCS11 NSS1/2, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 1.7 Gbps (MCS0 - MCS9 NSS1/2, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 300 Mbps (MCS0 - MCS15, HT 20/40)" }
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },

          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },

          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "22W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Networking Interface", value: "(1) 1/2.5 GbE RJ45 port" },
          { label: "Weight", value: "750 g (1.7 lb)" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "UV-stabilized polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Stainless steel (SUS304), galvanized steel (SGCC)" },
          { label: "LEDs System", value: "White/Blue" },
          { label: "Chanel Bandwidth", value: "Stainless steel (SUS304), galvanized steel (SGCC)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 06630-25-08356" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz U-NII-5 to U-NII-8: 5925 - 7125 MHz Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz 5925 - 7125 MHz" },
          { label: "Ambient Operating Temperature", value: "-30 to 40° C (-22 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 9.0.114 and later (U7 Pro XG - White) Version 9.1.120 and later (U7 Pro XG - Black)" },
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

  //Produk Keelima dari WiFi, SF Flagship
  {
    id: "U7-Pro",
    name: "U7 Pro",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Ceiling-mounted WiFi 7 AP with 6 spatial streams and 6 GHz support for interference-free WiFi in demanding, large-scale environments.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U7-Pro",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Note. 6 GHz operation is supported in these countries. Multi-Link Operation (MLO) capability is coming soon and will be provided via software update."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀206 x 46 mm (⌀8.1 x 1.8')" },
          { label: "WiFi Standard", value: "WiFi 7" },
          { label: "Spatial Streams", value: "6" },
          { label: "Coverage Area", value: "140 m² (1,500 ft²)" },
          { label: "Max. Client Count", value: "300+" },
          { label: "Uplink", value: "2.5 GbE" },
          { label: "Mounting", value: "Ceiling, Wall (Pro Mount Included)" },
          { label: "Power Method", value: "PoE+" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 6 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },
          { label: "MIMO 5 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 6 GHz", value: "5.8 Gbps (BW320)" },
          { label: "Max. Data Rate 5 GHz", value: "4.3 Gbps (BW240)" },
          { label: "Max. Data Rate 2.4 GHz", value: "688 Mbps (BW40)" },

          { label: "Antenna Gain 6 GHz", value: "5.8 dBi" },
          { label: "Antenna Gain 5 GHz", value: "6 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "4 dBi" },

          { label: "Max. TX Power 6 GHz", value: "23 dBm" },
          { label: "Max. TX Power 5 GHz", value: "26 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "23 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11be (WiFi 7)", value: "7.3 Mbps to 5.8 Gbps (MCS0 - MCS13 NSS1/2, EHT 20/40/80/160/240/320)" },
          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 2.4 Gbps (MCS0 - MCS11 NSS1/2, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 1.7 Gbps (MCS0 - MCS9 NSS1/2, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 300 Mbps (MCS0 - MCS15, HT 20/40)" }
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },

          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },

          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "21W" },
          { label: "Supported Voltage Range", value: "44.5–57V DC" },
          { label: "Networking Interface", value: "(1) 1/2.5 GbE RJ45 port" },
          { label: "Weight", value: "680 g (1.5 lb)" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "Polycarbonate, metal" },
          { label: "Mount Material", value: "Stainless steel (SUS304), galvanized steel (SGCC)" },
          { label: "LEDs System", value: "White/Blue" },
          { label: "Channel Bandwitdth", value: "HT 20/40, VHT 20/40/80/160, HE 20/40/80/160, EHT 20/40/80/160/240/320 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 06630-25-08356" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz U-NII-5 to U-NII-8: 5925 - 7125 MHz Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz 5925 - 7125 MHz" },
          { label: "Ambient Operating Temperature", value: "-30 to 40° C (-22 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 8.0.28 and later" },
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
        name: "Pro Max 16 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 16-port, Layer 3 Etherlighting™ switch with 2.5 GbE, PoE++ output, and versatile mounting options",
        specs: [
          "Etherlighting™ ports that illuminate to indicate port location, speed/link, and native VLAN/network*",
          "(4) 2.5 GbE PoE++ ports",
          "(12) GbE PoE+ ports",
          "(2) 10G SFP+ ports",
          "180W total PoE availability",
          "Versatile desktop, wall, and rack** mounting",
          "Silent, fanless cooling system",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness. **Requires add-on Rack Mount accessory.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "325.1 x 160 x 43.7 mm (12.8 x 6.3 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "12 (All PoE+) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "4 (All PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "230 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "42 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "25W (Excluding PoE Output) 210W (Including PoE Output)" },
          { label: "Power Method", value: "AC Adapter" },
          { label: "Application Requirements UniFi Network", value: "Version 8.1.127 and later" },
        ],
        productLink: "/products/mounting-kit-u7-lr"
      },
      {
        id: 2,
        name: "Pro Max 48 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 48-port, Layer 3 Etherlighting™ switch with 2.5 GbE and PoE++ output.",
        specs: [
          "A 48-port, Layer 3 Etherlighting™ switch with 2.5 GbE and PoE++ output.",
          "(16) 2.5 GbE ports including (8) PoE+ and (8) PoE++",
          "32) GbE ports including (24) PoE+ and (8) PoE++",
          "(4) 10G SFP+ ports",
          "DC power backup ready",
          "720W total PoE availabilit",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness."
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442.4 x 400 x 44 mm (17.4 x 15.7 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "32 (24 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "16 (8 PoE+; 8 PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "4 (10G/1G)" },
          { label: "Switching Capacity", value: "224 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "112 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "100W (Excluding PoE Output) 820W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 8.0.24 and later" },
        ],
        productLink: "/products/power-cable-u7-lr"
      },
      {
        id: 3,
        name: "Pro Max 24 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 24-port, Layer 3 Etherlighting™ switch capable of high-power PoE++ output.",
        specs: [
          "Etherlighting™ ports that illuminate to indicate port location, speed/link, and native VLAN/network*",
          "(8) 2.5 GbE PoE++ ports",
          "(16) GbE ports including (8) PoE+ and (8) PoE++",
          "(2) 10G SFP+ ports",
          "DC power backup ready",
          "400W total PoE availabilitly",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "16 (8 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "112 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "56 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "50W (Excluding PoE Output) 450W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 8.0.24 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "Enterprise 48 PoE (Vintage)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 48-port, Layer 3 switch with 2.5 GbE PoE+ output.",
        specs: [
          "(48) 2.5 GbE PoE+ ports",
          "720W total PoE availability",
          "DC power backup-ready",
          "Layer 3 switching",
          "DC power backup ready",
          "400W total PoE availabilitly",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
          { label: "Port Layout 2.5 GbE RJ45", value: "48 (All PoE+) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "4 (10G/1G)" },
          { label: "Switching Capacity", value: "160 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "160 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "150W (Excluding PoE Output) 870W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 6.2.26 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 5,
        name: "Enterprise 24 PoE (Vintage)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 24-port, Layer 3 switch with 2.5 GbE PoE+ output.",
        specs: [
          "(12) 2.5 GbE, (12) GbE; all PoE+ ports",
          "(2) 10G SFP+ ports",
          "400W total PoE availability",
          "(2) 10G SFP+ ports",
          "DC power backup-ready",
          "Layer 3 switching"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "12 (All PoE+) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "12 (All PoE+) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "124 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "62 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "60W (Excluding PoE Output) 460W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 5.14.12 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 6,
        name: "UniFi Etherlighting Patch Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Nano-thin patch cable with 10 GbE support, designed to showcase Etherlighting™ effects.",
        specs: [
          "Translucent booted RJ45 for optimal Etherlighting™ brightness",
          "— 2.5 mm outer diameter for 0.15-8 m lengths",
          "— 2.9 mm outer diameter for 12-15 m lengths",
          "Length: 0.15 to 15 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 7,
        name: "Enterprise 8 PoE (Vintage)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "An 8-port, Layer 3 switch with 2.5 GbE PoE+ output.",
        specs: [
          "(8) 2.5 GbE PoE+ ports",
          "(2) 10G SFP+ ports",
          "120W total PoE availability",
          "Note. These switches are not compatible with the PoE++ requirements of the new U7 and E7 Access Points. We recommend using Enterprise Campus switches for such deployments.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "200 x 248 x 44 mm (7.9 x 9.8 x 1.7')" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE+) (2.5G/1G/100M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "80 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "40 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "30W (Excluding PoE Output) 150W (Including PoE Output)" },
          { label: "Power Method", value: "Universal input, 100–240V AC, 50/60 Hz" },
          { label: "Application Requirements UniFi Network", value: "Version 6.3.51 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },

  // Produk Keenam dari WiFi, SF Flagship
  {
    id: "U7-Pro-5",
    name: "U7 Pro",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Ceiling-mounted WiFi 7 AP with 6 spatial streams and 6 GHz support for interference-free WiFi in demanding, large-scale environments.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U7-Pro-5",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Note. 6 GHz operation is supported in these countries. Multi-Link Operation (MLO) capability is coming soon and will be provided via software update."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀206 x 46 mm (⌀8.1 x 1.8')" },
          { label: "WiFi Standard", value: "WiFi 7" },
          { label: "Spatial Streams", value: "6" },
          { label: "Coverage Area", value: "140 m² (1,500 ft²)" },
          { label: "Max. Client Count", value: "300+" },
          { label: "Uplink", value: "2.5 GbE" },
          { label: "Mounting", value: "Ceiling, Wall (Pro Mount Included)" },
          { label: "Power Method", value: "PoE+" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 6 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },
          { label: "MIMO 5 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 6 GHz", value: "5.8 Gbps (BW320)" },
          { label: "Max. Data Rate 5 GHz", value: "4.3 Gbps (BW240)" },
          { label: "Max. Data Rate 2.4 GHz", value: "688 Mbps (BW40)" },

          { label: "Antenna Gain 6 GHz", value: "5.8 dBi" },
          { label: "Antenna Gain 5 GHz", value: "6 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "4 dBi" },

          { label: "Max. TX Power 6 GHz", value: "23 dBm" },
          { label: "Max. TX Power 5 GHz", value: "26 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "23 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11be (WiFi 7)", value: "7.3 Mbps to 5.8 Gbps (MCS0 - MCS13 NSS1/2, EHT 20/40/80/160/240/320)" },
          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 2.4 Gbps (MCS0 - MCS11 NSS1/2, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 1.7 Gbps (MCS0 - MCS9 NSS1/2, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 300 Mbps (MCS0 - MCS15, HT 20/40)" }
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },

          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },

          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "21W" },
          { label: "Supported Voltage Range", value: "44.5–57V DC" },
          { label: "Networking Interface", value: "(1) 1/2.5 GbE RJ45 port" },
          { label: "Weight", value: "680 g (1.5 lb)" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "Polycarbonate, metal" },
          { label: "Mount Material", value: "Stainless steel (SUS304), galvanized steel (SGCC)" },
          { label: "LEDs System", value: "White/Blue" },
          { label: "Channel Bandwitdth", value: "HT 20/40, VHT 20/40/80/160, HE 20/40/80/160, EHT 20/40/80/160/240/320 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 06630-25-08356" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz U-NII-5 to U-NII-8: 5925 - 7125 MHz Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz 5925 - 7125 MHz" },
          { label: "Ambient Operating Temperature", value: "-30 to 40° C (-22 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 8.0.28 and later" },
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
        name: "Pro Max 16 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 16-port, Layer 3 Etherlighting™ switch with 2.5 GbE, PoE++ output, and versatile mounting options",
        specs: [
          "Etherlighting™ ports that illuminate to indicate port location, speed/link, and native VLAN/network*",
          "(4) 2.5 GbE PoE++ ports",
          "(12) GbE PoE+ ports",
          "(2) 10G SFP+ ports",
          "180W total PoE availability",
          "Versatile desktop, wall, and rack** mounting",
          "Silent, fanless cooling system",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness. **Requires add-on Rack Mount accessory.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "325.1 x 160 x 43.7 mm (12.8 x 6.3 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "12 (All PoE+) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "4 (All PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "230 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "42 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "25W (Excluding PoE Output) 210W (Including PoE Output)" },
          { label: "Power Method", value: "AC Adapter" },
          { label: "Application Requirements UniFi Network", value: "Version 8.1.127 and later" },
        ],
        productLink: "/products/mounting-kit-u7-lr"
      },
      {
        id: 2,
        name: "Pro Max 48 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 48-port, Layer 3 Etherlighting™ switch with 2.5 GbE and PoE++ output.",
        specs: [
          "A 48-port, Layer 3 Etherlighting™ switch with 2.5 GbE and PoE++ output.",
          "(16) 2.5 GbE ports including (8) PoE+ and (8) PoE++",
          "32) GbE ports including (24) PoE+ and (8) PoE++",
          "(4) 10G SFP+ ports",
          "DC power backup ready",
          "720W total PoE availabilit",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness."
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442.4 x 400 x 44 mm (17.4 x 15.7 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "32 (24 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "16 (8 PoE+; 8 PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "4 (10G/1G)" },
          { label: "Switching Capacity", value: "224 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "112 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "100W (Excluding PoE Output) 820W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 8.0.24 and later" },
        ],
        productLink: "/products/power-cable-u7-lr"
      },
      {
        id: 3,
        name: "Pro Max 24 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 24-port, Layer 3 Etherlighting™ switch capable of high-power PoE++ output.",
        specs: [
          "Etherlighting™ ports that illuminate to indicate port location, speed/link, and native VLAN/network*",
          "(8) 2.5 GbE PoE++ ports",
          "(16) GbE ports including (8) PoE+ and (8) PoE++",
          "(2) 10G SFP+ ports",
          "DC power backup ready",
          "400W total PoE availabilitly",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "16 (8 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "112 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "56 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "50W (Excluding PoE Output) 450W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 8.0.24 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "Enterprise 48 PoE (Vintage)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 48-port, Layer 3 switch with 2.5 GbE PoE+ output.",
        specs: [
          "(48) 2.5 GbE PoE+ ports",
          "720W total PoE availability",
          "DC power backup-ready",
          "Layer 3 switching",
          "DC power backup ready",
          "400W total PoE availabilitly",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
          { label: "Port Layout 2.5 GbE RJ45", value: "48 (All PoE+) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "4 (10G/1G)" },
          { label: "Switching Capacity", value: "160 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "160 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "150W (Excluding PoE Output) 870W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 6.2.26 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 5,
        name: "Enterprise 24 PoE (Vintage)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 24-port, Layer 3 switch with 2.5 GbE PoE+ output.",
        specs: [
          "(12) 2.5 GbE, (12) GbE; all PoE+ ports",
          "(2) 10G SFP+ ports",
          "400W total PoE availability",
          "(2) 10G SFP+ ports",
          "DC power backup-ready",
          "Layer 3 switching"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "12 (All PoE+) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "12 (All PoE+) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "124 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "62 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "60W (Excluding PoE Output) 460W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 5.14.12 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 6,
        name: "UniFi Etherlighting Patch Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Nano-thin patch cable with 10 GbE support, designed to showcase Etherlighting™ effects.",
        specs: [
          "Translucent booted RJ45 for optimal Etherlighting™ brightness",
          "— 2.5 mm outer diameter for 0.15-8 m lengths",
          "— 2.9 mm outer diameter for 12-15 m lengths",
          "Length: 0.15 to 15 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 7,
        name: "Enterprise 8 PoE (Vintage)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "An 8-port, Layer 3 switch with 2.5 GbE PoE+ output.",
        specs: [
          "(8) 2.5 GbE PoE+ ports",
          "(2) 10G SFP+ ports",
          "120W total PoE availability",
          "Note. These switches are not compatible with the PoE++ requirements of the new U7 and E7 Access Points. We recommend using Enterprise Campus switches for such deployments.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "200 x 248 x 44 mm (7.9 x 9.8 x 1.7')" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE+) (2.5G/1G/100M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "80 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "40 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "30W (Excluding PoE Output) 150W (Including PoE Output)" },
          { label: "Power Method", value: "Universal input, 100–240V AC, 50/60 Hz" },
          { label: "Application Requirements UniFi Network", value: "Version 6.3.51 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },

  // Produk Ketujuh dari WiFi, SF Flagship
  {
    id: "U6-Pro",
    name: "U6 Pro",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Ceiling-mounted WiFi 6 AP with 6 spatial streams designed for large offices.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U6-Pro",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Polycarbonate, metal",
      "Max. Power Consumption 13W",
      "Power Method PoE"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀197 x 35 mm (⌀7.8 x 1.4')" },
          { label: "WiFi Standard", value: "WiFi 6" },
          { label: "Spatial Streams", value: "6" },
          { label: "Coverage Area", value: "140 m² (1,500 ft²)" },
          { label: "Max. Client Count", value: "250+" },
          { label: "Uplink", value: "GbE" },
          { label: "Mounting", value: "Ceiling, Wall (Pro Mount Included)" },
          { label: "Power Method", value: "PoE" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 5 GHz", value: "4 x 4 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 5 GHz", value: "4.8 Gbps (BW160)" },
          { label: "Max. Data Rate 2.4 GHz", value: "573.5 Mbps (BW40)" },

          { label: "Antenna Gain 5 GHz", value: "6 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "4 dBi" },

          { label: "Max. TX Power 5 GHz", value: "26 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "22 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 2.4 Gbps (MCS0 - MCS11 NSS1/2, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 1.7 Gbps (MCS0 - MCS9 NSS1/2, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 300 Mbps (MCS0 - MCS15, HT 20/40)" }
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },

          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },

          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "13W" },
          { label: "Supported Voltage Range", value: "44.5–57V DC" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Weight", value: "Device: 580 g (1.3 lb) With mount: 720 g (1.6 lb)" },
          { label: "Management", value: "Ethernet Bluetooth" },
          { label: "Enclosure Material", value: "Polycarbonate, metal" },
          { label: "Mount Material", value: "Stainless steel (SUS304)" },
          { label: "LEDs System", value: "White/Blue" },
          { label: "Channel Bandwitdth", value: "HT 20/40, VHT 20/40/80/160, HE 20/40/80/160, EHT 20/40/80/160/240/320 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC, Anatel: 00910-22-08356" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz" },
          { label: "Ambient Operating Temperature", value: "-30 to 60° C (-22 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 6.0.45 and later" },
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
        name: "UniFi Patch Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Ultra-thin patch cable with GbE support and flexible, bendable boots for enhanced installation versatility.",
        specs: [
          "Bendable booted RJ45",
          "3 mm outer diameter",
          "Cable length: 0.1 to 8m",
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
        productLink: "/products/mounting-kit-u6-plus"
      },
      {
        id: 2,
        name: "Long-Range Ethernet Repeater",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Long-range Gigabit Ethernet adapter that receives PoE/PoE+ and offers passthrough PoE output.",
        specs: [
          "Extend PoE connections up to 1 km",
          "(1) GbE RJ45 port for PoE/PoE+ input",
          "(1) GbE RJ45 port for passthrough PoE output",
          "10kA+ surge protection",
          "10kA+ surge protection",
          "Works reliably in extreme temperatures (-40 to 80° C)"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/power-cable-u6-plus"
      },
    ]
  },

  // Produk Kedelapan dari WiFi,SF Flagship 
  {
    id: "U7-LR",
    name: "U7 Long-Range",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Compact, ceiling-mount WiFi 7 AP with 5 spatial streams and extended signal range",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U7-LR",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Ceiling-mounted WiFi 5 AP with 6 spatial streams designed for large offices",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀175.7 x 43 mm (⌀6.9 x 1.7')" },
          { label: "WiFi Standard", value: "WiFi 7" },
          { label: "Spatial Streams", value: "5" },
          { label: "Coverage Area", value: "160 m² (1,750 ft²)140 m² (1,500 ft²)" },
          { label: "Max. Client Count", value: "300+" },
          { label: "Uplink", value: "2.5 GbE" },
          { label: "Mounting", value: "Ceiling, Wall (Pro Mount Included)" },
          { label: "Power Method", value: "PoE" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 5 GHz", value: "3 x 3 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 5 GHz", value: "4.3 Gbps (BW240)" },
          { label: "Max. Data Rate 2.4 GHz", value: "688 Mbps (BW40)" },

          { label: "Antenna Gain 5 GHz", value: "6 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "4 dBi" },

          { label: "Max. TX Power 5 GHz", value: "27 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "26 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11be (WiFi 7)", value: "7.3 Mbps to 5.8 Gbps (MCS0 - MCS13 NSS1/2, EHT 20/40/80/160/240/320)" },
          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 2.4 Gbps (MCS0 - MCS11 NSS1/2, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 1.7 Gbps (MCS0 - MCS9 NSS1/2, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 300 Mbps (MCS0 - MCS15, HT 20/40)" }
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },

          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },

          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "14W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Include PoE Adapter", value: "-" },
          { label: "Networking Interface", value: "(1) 1/2.5 GbE RJ45 port" },
          { label: "Weight", value: "448 g (15.8 oz)" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "Polycarbonate,  aluminum alloyl" },
          { label: "Mount Material", value: "Polycarbonate, galvanized steel (SGCC)" },
          { label: "LEDs System", value: "White/Blue" },
          { label: "Channel Bandwitdth", value: "HT 20/40, VHT 20/40/80/160, HE 20/40/80/160, EHT 20/40/80/160/240/320 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC, Anatel: 04071-25-08356" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz U-NII-5 to U-NII-8: 5925 - 7125 MHz Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz 5925 - 7125 MHz" },
          { label: "Ambient Operating Temperature", value: "-30 to 50° C (-22 to 122° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 9.1.120 and later" },
          { label: "Application Requirements Mobile App", value: "iOS™ version 10.20.2 and later Android™ version 10.21.7 and later" },
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

  // Produk Kesembilan dari WiFi, SF Flagship
  {
    id: "UAP-AC-PRO-5",
    name: "AC Pro",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Ceiling-mounted WiFi 5 AP with 6 spatial streams designed for large offices.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],


    // SKU produk
    sku: "UAP-AC-PRO-5",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Note. PoE power adapter included with single unit purchases."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀196.7 x 35 mm (⌀7.7 x 1.4')" },
          { label: "WiFi Standard", value: "WiFi 5" },
          { label: "Spatial Streams", value: "6" },
          { label: "Coverage Area", value: "160 m² (1,750 ft²)140 m² (1,500 ft²)" },
          { label: "Max. Client Count", value: "250+" },
          { label: "Uplink", value: "GbE" },
          { label: "Mounting", value: "Ceiling, Wall (Pro Mount Included)" },
          { label: "Power Method", value: "PoE" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 5 GHz", value: "3 x 3 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "3 x 3 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 5 GHz", value: "1.3 Gbps (BW80)" },
          { label: "Max. Data Rate 2.4 GHz", value: "450 Mbps (BW40)" },

          { label: "Antenna Gain 5 GHz", value: "3 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "3 dBi" },

          { label: "Max. TX Power 5 GHz", value: "22 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "22 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 1.3 Gbps (MCS0 - MCS9 NSS1/2/3, VHT 20/40/80)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 450 Mbps (MCS0 - MCS23, HT 20/40)" },
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },

          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },

          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "9W" },
          { label: "Include PoE Adapter", value: "✓" },
          { label: "Supported Voltage Range", value: "44–57V DC" },
          { label: "Networking Interface", value: "(2) GbE RJ45 ports" },
          { label: "Weight", value: "Device: 350 g (12.4 oz) With mount: 450 g (15.9 oz)" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "LEDs System", value: "Status" },
          { label: "Channel Bandwitdth", value: "HT 20/40, VHT 20/40/80 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 01943-16-08356" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz Worldwide:2400 - 2483.5 MHz 5150 - 5850 MHz" },
          { label: "Ambient Operating Temperature", value: "-10 to 70° C (14 to 158° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
    ],

    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "UniFi Patch Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Ultra-thin patch cable with GbE support and flexible, bendable boots for enhanced installation versatility.",
        specs: [
          "Bendable booted RJ45",
          "3 mm outer diameter",
          "Cable length: 0.1 to 8m",
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
        productLink: "/products/mounting-kit-u7-pro-xg-wall"
      },
    ]
  },

  // Produk Kesepuluh dari WiFi, SF Flagship
  {
    id: "UAP-AC-PRO",
    name: "AC Pro",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Ceiling-mounted WiFi 5 AP with 6 spatial streams designed for large offices.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],


    // SKU produk
    sku: "UAP-AC-PRO",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Note. PoE power adapter included with single unit purchases."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀196.7 x 35 mm (⌀7.7 x 1.4')" },
          { label: "WiFi Standard", value: "WiFi 5" },
          { label: "Spatial Streams", value: "6" },
          { label: "Coverage Area", value: "160 m² (1,750 ft²)140 m² (1,500 ft²)" },
          { label: "Max. Client Count", value: "250+" },
          { label: "Uplink", value: "GbE" },
          { label: "Mounting", value: "Ceiling, Wall (Pro Mount Included)" },
          { label: "Power Method", value: "PoE" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 5 GHz", value: "3 x 3 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "3 x 3 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 5 GHz", value: "1.3 Gbps (BW80)" },
          { label: "Max. Data Rate 2.4 GHz", value: "450 Mbps (BW40)" },

          { label: "Antenna Gain 5 GHz", value: "3 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "3 dBi" },

          { label: "Max. TX Power 5 GHz", value: "22 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "22 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 1.3 Gbps (MCS0 - MCS9 NSS1/2/3, VHT 20/40/80)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 450 Mbps (MCS0 - MCS23, HT 20/40)" },
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },

          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },

          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "9W" },
          { label: "Include PoE Adapter", value: "✓" },
          { label: "Supported Voltage Range", value: "44–57V DC" },
          { label: "Networking Interface", value: "(2) GbE RJ45 ports" },
          { label: "Weight", value: "Device: 350 g (12.4 oz) With mount: 450 g (15.9 oz)" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "LEDs System", value: "Status" },
          { label: "Channel Bandwitdth", value: "HT 20/40, VHT 20/40/80 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 01943-16-08356" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz Worldwide:2400 - 2483.5 MHz 5150 - 5850 MHz" },
          { label: "Ambient Operating Temperature", value: "-10 to 70° C (14 to 158° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
    ],

    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "UniFi Patch Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Ultra-thin patch cable with GbE support and flexible, bendable boots for enhanced installation versatility.",
        specs: [
          "Bendable booted RJ45",
          "3 mm outer diameter",
          "Cable length: 0.1 to 8m",
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
        productLink: "/products/mounting-kit-u7-pro-xg-wall"
      },
    ]
  },

  //Produk Kesebelas dari WiFi, SF Flagship
  {
    id: "U6+",
    name: "U6+",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Compact, ceiling-mounted WiFi 6 AP with 4 spatial streams that improves upon the U6 Lite with higher performance and dual-band WiFi 6 support. Ideal for small and medium-sized businesses.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U6+",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Mount Material ABS, SGCC steel",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀160 x 33 mm (⌀6.3 x 1.3')" },
          { label: "WiFi Standard", value: "WiFi 6" },
          { label: "Spatial Streams", value: "4" },
          { label: "Coverage Area", value: "140 m² (1,500 ft²)" },
          { label: "Max. Client Count", value: "300+" },
          { label: "Uplink", value: "GbE" },
          { label: "Mounting", value: "Ceiling, Wall (Pro Mount Included)" },
          { label: "Power Method", value: "PoE" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 5 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 5 GHz", value: "2.4 Gbps (BW160)" },
          { label: "Max. Data Rate 2.4 GHz", value: "573.5 Mbps (BW40)" },

          { label: "Antenna Gain 5 GHz", value: "5.4 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "3 dBi" },

          { label: "Max. TX Power 5 GHz", value: "23 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "23 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 2.4 Gbps (MCS0 - MCS11 NSS1/2, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 1.7 Gbps (MCS0 - MCS9 NSS1/2, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 450 Mbps (MCS0 - MCS23, HT 20/40)" },
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },

          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },

          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "9W" },
          { label: "Include PoE Adapter", value: "✓" },
          { label: "Supported Voltage Range", value: "44–57V DC" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Weight", value: "Device: 338 g (11.9 oz) With mount: 413 g (14.6 oz)" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum" },
          { label: "Mount Material", value: "ABS, SGCC steel" },
          { label: "LEDs System", value: "White/Blue" },
          { label: "Channel Bandwitdth", value: "HT 20/40, VHT 20/40/80 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC, Anatel: 10539-23-08356" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz" },
          { label: "Ambient Operating Temperature", value: "-30 to 60° C (-22 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 7.3.76 and later" },
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
        name: "UniFi Patch Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Ultra-thin patch cable with GbE support and flexible, bendable boots for enhanced installation versatility.",
        specs: [
          "Bendable booted RJ45",
          "3 mm outer diameter",
          "Cable length: 0.1 to 8m",
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
        productLink: "/products/mounting-kit-u7-iw"
      },
      {
        id: 2,
        name: "Compact Flagship AP Recessed Ceiling Mount",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Recessed ceiling mount for U6 Lite, U6+, AC Lite and nanoHD.",
        specs: [
          "Low-profile mounting option to sit discreetly within your ceiling",
          "Sold as a 3-pack"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "⌀210 x 20.6 mm (⌀8.3 x 0.8')" },
          { label: "Weight", value: "310 g (10.9 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, SGCC" }
        ],
        productLink: "/products/power-cable-u7-iw"
      },
      {
        id: 3,
        name: "Compact Flagship AP Retrofit Mount",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Retrofit mount for U6 Lite, U6+, and nanoHD.",
        specs: [
          "Allows installation over existing UniFi AP mounting brackets",
          "Sold as a 3-pack"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "⌀187.8 x 16.7 mm (⌀7.4 x 0.7')" },
          { label: "Weight", value: "105 g (3.7 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" }
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Kedua Belas dari WiFi, SF Flagship
  {
    id: "U7-Lite",
    name: "U7 Lite",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Compact, ceiling-mounted WiFi 7 AP with 4 spatial streams and 2.5 GbE uplink.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U7-Lite",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Mount Material UV-stabilized polycarbonate, galvanized steel (SGCC)",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀171.5 x 33 mm  (⌀6.8 x 1.3')" },
          { label: "WiFi Standard", value: "WiFi 7" },
          { label: "Spatial Streams", value: "4" },
          { label: "Coverage Area", value: "115 m² (1,250 ft²)" },
          { label: "Max. Client Count", value: "200+" },
          { label: "Uplink", value: "2.5 GbE" },
          { label: "Mounting", value: "Ceiling, Wall (Pro Mount Included)" },
          { label: "Power Method", value: "PoE" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 5 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 5 GHz", value: "4.3 Gbps (BW240)" },
          { label: "Max. Data Rate 2.4 GHz", value: "688 Mbps (BW40)" },

          { label: "Antenna Gain 5 GHz", value: "5 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "4 dBi" },

          { label: "Max. TX Power 5 GHz", value: "24 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "23 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11be (WiFi 7)", value: "7.3 Mbps to 4.3 Gbps (MCS0 - MCS13 NSS1/2, EHT 20/40/80/160/240)" },
          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 2.4 Gbps (MCS0 - MCS11 NSS1/2, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 1.7 Gbps (MCS0 - MCS9 NSS1/2, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 450 Mbps (MCS0 - MCS23, HT 20/40)" },
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },

          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },

          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "13W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Networking Interface", value: "(1) 2.5 GbE RJ45 port" },
          { label: "Weight", value: "313 g (11 oz)" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "UV-stabilized polycarbonate" },
          { label: "Mount Material", value: "UV-stabilized polycarbonate, galvanized steel (SGCC)" },
          { label: "LEDs System", value: "White/Blue" },
          { label: "Channel Bandwitdth", value: "HT 20/40, VHT 20/40/80/160, HE 20/40/80/160, EHT 20/40/80/160/240 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC, Anatel: 02143-25-08356" },
          { label: "Ambient Operating Temperature", value: "-30 to 60° C (-22 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 9.0.114 and later" },
          { label: "Application Requirements Mobile App", value: "OS™ version 10.20.2 and later Android™ version 10.21.7 and later" },
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

  // Produk Pertama dari WiFi, SF Wall
  {
    id: "U6-Enterprise-IW",
    name: "U6 Enterprise In-Wall",
    category: "WiFi",
    subfilter: "Wall",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Wall-mounted WiFi 6 AP with 6 spatial streams and a built-in 4‑port switch ideal for single-room coverage in hospitality environments.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U6-Enterprise-IW",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Polycarbonate, aluminum",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "159.7 x 156.7 x 33.8 mm  (6.3 x 6.2 x 1.3')" },
          { label: "WiFi Standard", value: "WiFi 6E" },
          { label: "Spatial Streams", value: "10" },
          { label: "Coverage Area", value: "115 m² (1,250 ft²)" },
          { label: "Max. Client Count", value: "600+" },
          { label: "Uplink", value: "2.5 GbE" },
          { label: "Mounting", value: "Wall (Mount Included)" },
          { label: "Power Method", value: "PoE+ PoE++ (Required for PoE output)" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 6 GHz", value: "4 x 4 (DL/UL MU-MIMO)" },
          { label: "MIMO 5 GHz", value: "4 x 4 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 6 GHz", value: "4.8 Gbps (BW160)" },
          { label: "Max. Data Rate 5 GHz", value: "4.8 Gbps (BW160)" },
          { label: "Max. Data Rate 2.4 GHz", value: "573.5 Mbps (BW40)" },

          { label: "Antenna Gain 5 GHz", value: "5.8 dBi" },
          { label: "Antenna Gain 5 GHz", value: "5.8 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "4 dBi" },

          { label: "Max. TX Power 6 GHz", value: "26 dBm" },
          { label: "Max. TX Power 5 GHz", value: "26 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "22 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11ax (WiFi 6/6E)", value: "7.3 Mbps to 4.8 Gbps (MCS0 - MCS11 NSS1/2/3/4, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 3.4 Gbps (MCS0 - MCS9 NSS1/2/3/4, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 600 Mbps (MCS0 - MCS31 , HT 20/40)" },
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },

          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },

          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "21W (Excluding PoE output)" },
          { label: "Supported Voltage Range", value: "44–57V DC" },
          { label: "Networking Interface", value: "(1) Data in: 1/2.5 GbE RJ45 port (4) Data out: GbE RJ45 ports" },
          { label: "Weight", value: "884 g (1.9 lb)" },
          { label: "Management", value: "Ethernet Bluetooth" },
          { label: "Built-In Switch", value: "(4) GbE ports with (1) PoE output" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum" },
          { label: "Mount Material", value: "Aluminum" },
          { label: "LEDs System", value: "White/Blue" },
          { label: "Channel Bandwitdth", value: "HT 20/40, VHT 20/40/80/160, HE 20/40/80/160, EHT 20/40/80/160/240 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 04643-24-08356" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz U-NII-5 to U-NII-8: 6100 - 7125 MHz Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz 5925 - 7125 MHz" },
          { label: "Ambient Operating Temperature", value: "-30 to 60° C (-22 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 6.0.45 and later" },
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
        name: "Pro Max 16 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 16-port, Layer 3 Etherlighting™ switch with 2.5 GbE, PoE++ output, and versatile mounting options",
        specs: [
          "Etherlighting™ ports that illuminate to indicate port location, speed/link, and native VLAN/network*",
          "(4) 2.5 GbE PoE++ ports",
          "(12) GbE PoE+ ports",
          "(2) 10G SFP+ ports",
          "180W total PoE availability",
          "Versatile desktop, wall, and rack** mounting",
          "Silent, fanless cooling system",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness. **Requires add-on Rack Mount accessory.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "325.1 x 160 x 43.7 mm (12.8 x 6.3 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "12 (All PoE+) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "4 (All PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "230 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "42 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "25W (Excluding PoE Output) 210W (Including PoE Output)" },
          { label: "Power Method", value: "AC Adapter" },
          { label: "Application Requirements UniFi Network", value: "Version 8.1.127 and later" },
        ],
        productLink: "/products/mounting-kit-u7-pr0"
      },
      {
        id: 2,
        name: "Pro Max 48 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 48-port, Layer 3 Etherlighting™ switch with 2.5 GbE and PoE++ output.",
        specs: [
          "A 48-port, Layer 3 Etherlighting™ switch with 2.5 GbE and PoE++ output.",
          "(16) 2.5 GbE ports including (8) PoE+ and (8) PoE++",
          "32) GbE ports including (24) PoE+ and (8) PoE++",
          "(4) 10G SFP+ ports",
          "DC power backup ready",
          "720W total PoE availabilit",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness."
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442.4 x 400 x 44 mm (17.4 x 15.7 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "32 (24 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "16 (8 PoE+; 8 PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "4 (10G/1G)" },
          { label: "Switching Capacity", value: "224 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "112 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "100W (Excluding PoE Output) 820W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 8.0.24 and later" },
        ],
        productLink: "/products/power-cable-u7-pr0"
      },
      {
        id: 3,
        name: "Pro Max 24 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 24-port, Layer 3 Etherlighting™ switch capable of high-power PoE++ output.",
        specs: [
          "Etherlighting™ ports that illuminate to indicate port location, speed/link, and native VLAN/network*",
          "(8) 2.5 GbE PoE++ ports",
          "(16) GbE ports including (8) PoE+ and (8) PoE++",
          "(2) 10G SFP+ ports",
          "DC power backup ready",
          "400W total PoE availabilitly",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "16 (8 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "112 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "56 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "50W (Excluding PoE Output) 450W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 8.0.24 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "U6 Extender",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Easy-to-deploy WiFi 6 coverage extender that fits a standard wall outlet.",
        specs: [
          "WiFi 6",
          "6 spatial streams",
          "115 m² (1,250 ft²) coverage",
          "250+ connected devices",
          "Powered with standard AC wall outlet",
          "Wireless uplink to UniFi WiFi",
          "Note. Cannot be set up standalone and requires UniFi WiFi managed by a UniFi Console or self-hosted UniFi Network Server.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "US: 169.7 x 112.2 x 32.2 mm (6.7 x 4.4 x 1.'') EU: 169.7 x 112.2 x 77.6 mm  (6.7 x 4.4 x 3.1')" },
          { label: "WiFi Standard", value: "WiFi 6" },
          { label: "Spatial Streams", value: "6" },
          { label: "Coverage Area", value: "115 m² (1,250 ft²)" },
          { label: "MIMO 5 GHz", value: "4 x 4 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "Max. Power Consumption", value: "11W  " },
          { label: "Supported Voltage Range", value: "110—240V AC" },
          { label: "Enclosure Material", value: "Polycarbonate" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 5,
        name: "UniFi Etherlighting Patch Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Nano-thin patch cable with 10 GbE support, designed to showcase Etherlighting™ effects.",
        specs: [
          "Translucent booted RJ45 for optimal Etherlighting™ brightness",
          "— 2.5 mm outer diameter for 0.15-8 m lengths",
          "— 2.9 mm outer diameter for 12-15 m lengths",
          "Length: 0.15 to 15 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 6,
        name: "Enterprise 8 PoE (Vintage)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "An 8-port, Layer 3 switch with 2.5 GbE PoE+ output.",
        specs: [
          "(8) 2.5 GbE PoE+ ports",
          "(2) 10G SFP+ ports",
          "120W total PoE availability",
          "Note. These switches are not compatible with the PoE++ requirements of the new U7 and E7 Access Points. We recommend using Enterprise Campus switches for such deployments.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "200 x 248 x 44 mm (7.9 x 9.8 x 1.7')" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE+) (2.5G/1G/100M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "80 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "40 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "30W (Excluding PoE Output) 150W (Including PoE Output)" },
          { label: "Power Method", value: "Universal input, 100–240V AC, 50/60 Hz" },
          { label: "Application Requirements UniFi Network", value: "Version 6.3.51 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },

  // Produk Kedua dari WiFi, SF Wall
  {
    id: "U7-Pro-XG-Wall",
    name: "U7 Pro XG Wall",
    category: "WiFi",
    subfilter: "Wall",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Easy-to-deploy WiFi 6 coverage extender that fits a standard wall outlet.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U7-Pro-XG-Wall",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Easy-to-deploy WiFi 6 coverage extender that fits a standard wall outlet",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "155 x 108 x 33.5 mm (6.1 x 4.3 x 1.3'')" },
          { label: "WiFi Standard", value: "WiFi 7" },
          { label: "Spatial Streams", value: "6" },
          { label: "Coverage Area", value: "140 m² (1,500 ft²)" },
          { label: "Max. Client Count", value: "300+" },
          { label: "Uplink", value: "10 GbE" },
          { label: "Mounting", value: "Wall" },
          { label: "Power Method", value: "PoE+" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 6 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },
          { label: "MIMO 5 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 6 GHz", value: "5.8 Gbps (BW320)" },
          { label: "Max. Data Rate 5 GHz", value: "4.3 Gbps (BW240)" },
          { label: "Max. Data Rate 2.4 GHz", value: "688 Mbps (BW40) " },

          { label: "Antenna Gain 6 GHz", value: "6 dBi" },
          { label: "Antenna Gain 5 GHz", value: "6 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "4 dBi" },

          { label: "Max. TX Power 6 GHz", value: "24   dBm" },
          { label: "Max. TX Power 5 GHz", value: "26 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "23 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11be (WiFi 7)", value: "6 GHz: 7.3 Mbps to 5.8 Gbps (MCS0 - MCS13 NSS1/2, EHT 20/40/80/160/320) 5 GHz: 7.3 Mbps to 4.3 Gbps (MCS0 - MCS13 NSS1/2, EHT 20/40/80/160/240)" },
          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 2.4 Gbps (MCS0 - MCS11 NSS1/2, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 1.7 Gbps (MCS0 - MCS9 NSS1/2, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 600 Mbps (MCS0 - MCS31 , HT 20/40)" },
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },

          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },

          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "22" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Networking Interface", value: "(1) 10 GbE RJ45 port" },
          { label: "Weight", value: "505 g (1.1 lb)" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Aluminum alloy" },
          { label: "LEDs System", value: "White/Blue" },
          { label: "Channel Bandwitdth", value: " HT 20/40, VHT 20/40/80/160, HE 20/40/80/160, EHT 20/40/80/160/240/320 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz U-NII-5 to U-NII-8: 6100 - 7125 MHz Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz 5925 - 7125 MHz" },
          { label: "Ambient Operating Temperature", value: "-30 to 40° C (-22 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 7.3.76 and later" },
          { label: "Application Requirements Mobile Appk", value: "iOS™ version 10.29.3 and later Android™ version 10.31.1 and later" },
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
        name: "Ethernet Surge Protection",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Bidirectional protection for up to 10 GbE, PoE++, and 20kA surge",
        specs: [
          "Wall/DIN rail mount",
          "Multiple grounding points"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/mounting-kit-u6-extender"
      },
      {
        id: 2,
        name: "Ethernet Surge Protection",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Bidirectional protection for up to 10 GbE, PoE++, and 20kA surge discharge for indoor installation.",
        specs: [
          "Wall/DIN rail mount",
          "Multiple grounding points"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/power-cable-u6-extender"
      },
      {
        id: 3,
        name: "2.5G PoE+ Adapter (30W)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "An adapter that can power UniFi PoE+ devices, reduce dependency on PoE switch power, and provide a Multi-Gigabit LAN connection.",
        specs: [
          "Delivers up to 30W of PoE+",
          "Surge, peak pulse, and overcurrent protection",
          "Contains RJ45 data input, AC cable with earth ground, and PoE+ output",
          "LED indicator for status monitoring"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "UniFi Premium Patch Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Ultra-thin braided patch cable, designed and optimized for 10 GbE networking..",
        specs: [
          "Translucent booted RJ45 for optimal Etherlighting™ brightness",
          "— 3 mm outer diameter for 0.15-8 m lengths",
          "— 3.3 mm outer diameter for 12-15 m lengths",
          "Length: 0.15 to 15 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 5,
        name: "PoE+ Adapter (30W)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "An adapter that can power UniFi PoE+ devices, reduce dependency on PoE switch power, and provide a Gigabit LAN connection.An adapter that can power UniFi PoE+ devices, reduce dependency on PoE switch power, and provide a Multi-Gigabit LAN connection.",
        specs: [
          "Delivers up to 30W of PoE+",
          "Surge, peak pulse, and overcurrent protection",
          "Contains RJ45 data input, AC cable with earth ground, and PoE+ output",
          "LED indicator for status monitoring"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 6,
        name: "UniFi Etherlighting Patch Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Nano-thin patch cable with 10 GbE support, designed to showcase Etherlighting™ effects.",
        specs: [
          "Translucent booted RJ45 for optimal Etherlighting™ brightness",
          "— 2.5 mm outer diameter for 0.15-8 m lengths",
          "— 2.9 mm outer diameter for 12-15 m lengths",
          "Length: 0.15 to 15 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Ketiga dari WiFi, SF Wall
  {
    id: "U7-Pro-Wall",
    name: "U7 Pro Wall",
    category: "WiFi",
    subfilter: "Wall",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Wall-mounted WiFi 7 AP with 6 spatial streams and 6 GHz support tailored for home builders with seamless installation options.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],


    // SKU produk
    sku: "U7-Pro-Wall",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Note. 6 GHz operation is supported in these countries."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "150 x 103 x 36 mm (5.9 x 4.1 x 1.4')" },
          { label: "WiFi Standard", value: "WiFi 7" },
          { label: "Spatial Streams", value: "6" },
          { label: "Coverage Area", value: "140 m² (1,500 ft²)" },
          { label: "Max. Client Count", value: "300+" },
          { label: "Uplink", value: "2.5 GbE" },
          { label: "Mounting", value: "Wall (Mount Included)" },
          { label: "Power Method", value: "PoE+" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 6 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },
          { label: "MIMO 5 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 6 GHz", value: "5.8 Gbps (BW320)" },
          { label: "Max. Data Rate 5 GHz", value: "4.3 Gbps (BW240)" },
          { label: "Max. Data Rate 2.4 GHz", value: "688 Mbps (BW40) " },

          { label: "Antenna Gain 6 GHz", value: "6 dBi" },
          { label: "Antenna Gain 5 GHz", value: "5 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "4 dBi" },

          { label: "Max. TX Power 6 GHz", value: "23 dBm" },
          { label: "Max. TX Power 5 GHz", value: "26 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "22 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11be (WiFi 7)", value: "7.3 Mbps to 5.8 Gbps (MCS0 - MCS13 NSS1/2, EHT 20/40/80/160/240/320)" },
          { label: "Supported Data Rates 802.11ax (WiFi 6/6E)", value: "7.3 Mbps to 2.4 Gbps (MCS0 - MCS11 NSS1/2, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 1.7 Gbps (MCS0 - MCS9 NSS1/2, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 600 Mbps (MCS0 - MCS31 , HT 20/40)" },
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },

          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },

          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "22" },
          { label: "Supported Voltage Range", value: "44–57V DC" },
          { label: "Networking Interface", value: "(1) 1/2.5 GbE RJ45 port" },
          { label: "Weight", value: "580 g (1.3 lb)" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum" },
          { label: "Mount Material", value: "Aluminum" },
          { label: "LEDs System", value: "White/Blue" },
          { label: "Channel Bandwitdth", value: " HT 20/40, VHT 20/40/80/160, HE 20/40/80/160, EHT 20/40/80/160/240/320 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 10022-24-08356" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz U-NII-5 to U-NII-8: 5925 - 7125 MHz Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz 5925 - 7125 MHz" },
          { label: "Ambient Operating Temperature", value: "-30 to 60° C (-22 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 8.1.113 and later" },
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
        name: "Pro Max 16 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 16-port, Layer 3 Etherlighting™ switch with 2.5 GbE, PoE++ output, and versatile mounting options",
        specs: [
          "Etherlighting™ ports that illuminate to indicate port location, speed/link, and native VLAN/network*",
          "(4) 2.5 GbE PoE++ ports",
          "(12) GbE PoE+ ports",
          "(2) 10G SFP+ ports",
          "180W total PoE availability",
          "Versatile desktop, wall, and rack** mounting",
          "Silent, fanless cooling system",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness. **Requires add-on Rack Mount accessory.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "325.1 x 160 x 43.7 mm (12.8 x 6.3 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "12 (All PoE+) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "4 (All PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "230 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "42 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "25W (Excluding PoE Output) 210W (Including PoE Output)" },
          { label: "Power Method", value: "AC Adapter" },
          { label: "Application Requirements UniFi Network", value: "Version 8.1.127 and later" },
        ],
        productLink: "/products/mounting-kit-u7-pr0"
      },
      {
        id: 2,
        name: "Pro Max 48 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 48-port, Layer 3 Etherlighting™ switch with 2.5 GbE and PoE++ output.",
        specs: [
          "A 48-port, Layer 3 Etherlighting™ switch with 2.5 GbE and PoE++ output.",
          "(16) 2.5 GbE ports including (8) PoE+ and (8) PoE++",
          "32) GbE ports including (24) PoE+ and (8) PoE++",
          "(4) 10G SFP+ ports",
          "DC power backup ready",
          "720W total PoE availabilit",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness."
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442.4 x 400 x 44 mm (17.4 x 15.7 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "32 (24 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "16 (8 PoE+; 8 PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "4 (10G/1G)" },
          { label: "Switching Capacity", value: "224 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "112 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "100W (Excluding PoE Output) 820W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 8.0.24 and later" },
        ],
        productLink: "/products/power-cable-u7-pr0"
      },
      {
        id: 3,
        name: "Pro Max 24 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 24-port, Layer 3 Etherlighting™ switch capable of high-power PoE++ output.",
        specs: [
          "Etherlighting™ ports that illuminate to indicate port location, speed/link, and native VLAN/network*",
          "(8) 2.5 GbE PoE++ ports",
          "(16) GbE ports including (8) PoE+ and (8) PoE++",
          "(2) 10G SFP+ ports",
          "DC power backup ready",
          "400W total PoE availabilitly",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "16 (8 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE++) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "112 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "56 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "50W (Excluding PoE Output) 450W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 8.0.24 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "Enterprise 48 PoE (Vintage)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 48-port, Layer 3 switch with 2.5 GbE PoE+ output.",
        specs: [
          "(48) 2.5 GbE PoE+ ports",
          "720W total PoE availability",
          "DC power backup-ready",
          "Layer 3 switching",
          "DC power backup ready",
          "400W total PoE availabilitly",
          "*Pair with UniFi Etherlighting Patch Cables for optimal brightness.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
          { label: "Port Layout 2.5 GbE RJ45", value: "48 (All PoE+) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "4 (10G/1G)" },
          { label: "Switching Capacity", value: "160 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "160 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "150W (Excluding PoE Output) 870W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 6.2.26 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 5,
        name: "Enterprise 24 PoE (Vintage)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 24-port, Layer 3 switch with 2.5 GbE PoE+ output.",
        specs: [
          "(12) 2.5 GbE, (12) GbE; all PoE+ ports",
          "(2) 10G SFP+ ports",
          "400W total PoE availability",
          "(2) 10G SFP+ ports",
          "DC power backup-ready",
          "Layer 3 switching"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "12 (All PoE+) (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "12 (All PoE+) (2.5G/1G/100M/10M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "124 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "62 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "60W (Excluding PoE Output) 460W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 5.14.12 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 6,
        name: "UniFi Etherlighting Patch Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Nano-thin patch cable with 10 GbE support, designed to showcase Etherlighting™ effects.",
        specs: [
          "Translucent booted RJ45 for optimal Etherlighting™ brightness",
          "— 2.5 mm outer diameter for 0.15-8 m lengths",
          "— 2.9 mm outer diameter for 12-15 m lengths",
          "Length: 0.15 to 15 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 7,
        name: "Enterprise 8 PoE (Vintage)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "An 8-port, Layer 3 switch with 2.5 GbE PoE+ output.",
        specs: [
          "(8) 2.5 GbE PoE+ ports",
          "(2) 10G SFP+ ports",
          "120W total PoE availability",
          "Note. These switches are not compatible with the PoE++ requirements of the new U7 and E7 Access Points. We recommend using Enterprise Campus switches for such deployments.",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "200 x 248 x 44 mm (7.9 x 9.8 x 1.7')" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE+) (2.5G/1G/100M)" },
          { label: "Port Layou 10G SFP+t", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "80 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "40 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "30W (Excluding PoE Output) 150W (Including PoE Output)" },
          { label: "Power Method", value: "Universal input, 100–240V AC, 50/60 Hz" },
          { label: "Application Requirements UniFi Network", value: "Version 6.3.51 and later" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },

  // Produk Keempat dari WiFi, SF Wall
  {
    id: "U6-IW",
    name: "U6 In-Wall",
    category: "WiFi",
    subfilter: "Wall",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Wall-mounted WiFi 6 AP with 6 spatial streams and a built-in 4‑port switch ideal for single-room coverage in hospitality environments.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U6-IW",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-U7-Outdoor.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Note. PoE+ input required for single-port PoE output."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "139.7 x 96 x 31.2 mm (5.5 x 3.8 x 1.3')150 x 103 x 36 mm (5.9 x 4.1 x 1.4')" },
          { label: "WiFi Standard", value: "WiFi 6" },
          { label: "Spatial Streams", value: "6" },
          { label: "Coverage Area", value: "115 m² (1,250 ft²)" },
          { label: "Max. Client Count", value: "250+" },
          { label: "Uplink", value: "GbE" },
          { label: "Mounting", value: "Wall (Mount Included)" },
          { label: "Power Method", value: "PoE PoE+ (Required for PoE output)" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 5 GHz", value: "4 x 4 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 5 GHz", value: "4.8 Gbps (BW160)" },
          { label: "Max. Data Rate 2.4 GHz", value: "573.5 Mbps (BW40)" },

          { label: "Antenna Gain 5 GHz", value: "5.9 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "5 dBi" },

          { label: "Max. TX Power 5 GHz", value: "26 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "22 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 4.8 Gbps (MCS0 - MCS11 NSS1/2/3/4, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 3.4 Gbps (MCS0 - MCS9 NSS1/2/3/4, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 600 Mbps (MCS0 - MCS31 , HT 20/40)" },
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },

          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },

          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "13W (Excluding PoE output)" },
          { label: "Networking Interface", value: "(1) Data-in: GbE RJ45 port (4) Data-out: GbE RJ45 ports" },
          { label: "Weight", value: "460 g (1 lb)" },
          { label: "Ball-In Switch", value: "(4) GbE ports with (1) PoE output" },
          { label: "Management", value: "Ethernet Bluetooth" },
          { label: "Enclosure Material", value: "Plastic, aluminum" },
          { label: "Mount Material", value: "Aluminum" },
          { label: "LEDs System", value: "White/Blue" },
          { label: "Channel Bandwitdth", value: "HT 20/40, VHT 20/40/80/160, HE 20/40/80/160 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 10022-24-08356" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz" },
          { label: "Ambient Operating Temperature", value: "-30 to 60° C (-22 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 6.0.45 and later" },
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
        name: "U6 Extender",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Customized encasing for U6 Extender and BeaconHD.",
        specs: [
          "Blends seamlessly into a variety of backgrounds",
          "Sold as a 3-pack"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "172 x 113.6 x 32.7 mm (6.8 x 4.5 x 1.3')" },
          { label: "Weight", value: "35 g (1.2 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Available Colors", value: "Black Concrete Wood" }
        ],
        productLink: "/products/mounting-kit"
      },
      {
        id: 2,
        name: "UniFi Patch Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Ultra-thin patch cable with GbE support and flexible, bendable boots for enhanced installation versatility.",
        specs: [
          "Bendable booted RJ45",
          "3 mm outer diameter",
          "Cable length: 0.1 to 8m",
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
        productLink: "/products/power-cable"
      },
    ]
  },

  // Produk Kelima dari WiFi, SF Wall
  {
    id: "U7-IW",
    name: "U7 In-Wall",
    category: "WiFi",
    subfilter: "Wall",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Wall-mounted WiFi 7 AP with 4 spatial streams and an integrated 2.5 GbE PoE switch designed for hospitality environments.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U7-IW",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Note. PoE+ input required for single-port PoE output."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
     {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "137 x 98.7 x 30.2 mm  (5.4 x 3.9 x 1.2')" },
          { label: "WiFi Standard", value: "WiFi 7" },
          { label: "Spatial Streams", value: "4" },
          { label: "Coverage Area", value: "115 m² (1,250 ft²)" },
          { label: "Max. Client Count", value: "200+" },
          { label: "Uplink", value: "2.5 GbE" },
          { label: "Mounting", value: "Wall (Mount Included)" },
          { label: "Power Method", value: "PoE PoE+ (Required for PoE output)" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 5 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 5 GHz", value: "4.3 Gbps (BW240)" },
          { label: "Max. Data Rate 2.4 GHz", value: "688 Mbps (BW40)" },

          { label: "Antenna Gain 5 GHz", value: "8 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "4 dBi" },

          { label: "Max. TX Power 5 GHz", value: "24 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "23 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11be (WiFi 7)", value: "7.3 Mbps to 4.3 Gbps (MCS0 - MCS13 NSS1/2, EHT 20/40/80/160/240)" },
          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 2.4 Gbps (MCS0 - MCS11 NSS1/2, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 1.7 Gbps (MCS0 - MCS9 NSS1/2, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 600 Mbps (MCS0 - MCS31 , HT 20/40)" },
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },

          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },

          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "13W (Excluding PoE output)" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Networking Interface", value: "(3) 2.5 GbE RJ45 ports" },
          { label: "Weight", value: "400 g (14.1 oz)" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Aluminum Alloy" },
          { label: "LEDs System", value: "White/Blue" },
          { label: "Channel Bandwitdth", value: "HT 20/40, VHT 20/40/80/160, HE 20/40/80/160, EHT 20/40/80/160/240 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 10022-24-08356" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz" },
          { label: "Ambient Operating Temperature", value: "-30 to 60° C (-22 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 9.0.114 and later" },
          { label: "Application Requirements Mobile App", value: "iOS™ version 10.20.2 and later Android™ version 10.21.7 and later" },
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

  // Produk Keenam dari WiFi, SF Wall
  {
    id: "U6-Extender",
    name: "U6 Extender",
    category: "WiFi",
    subfilter: "Wall",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Easy-to-deploy WiFi 6 coverage extender that fits a standard wall outlet.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U6-Extender",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Note. Cannot be set up standalone and requires UniFi WiFi managed by a UniFi Console or self-hosted UniFi Network Server."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
    {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "US: 169.7 x 112.2 x 32.2 mm (6.7 x 4.4 x 1.3') EU: 169.7 x 112.2 x 77.6 mm (6.7 x 4.4 x 3.1')" },
          { label: "WiFi Standard", value: "WiFi 6" },
          { label: "Spatial Streams", value: "6" },
          { label: "Coverage Area", value: "115 m² (1,250 ft²)" },
          { label: "Max. Client Count", value: "250+" },
          { label: "Uplink", value: "2.5 GbE" },
          { label: "Mounting", value: "Wall (Wall Power Socket Included)" },
          { label: "Power Method", value: "Universal AC input, 100–240V AC, 0.3A Max., 50/60 Hz" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 5 GHz", value: "4 x 4 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 5 GHz", value: "4.8 Gbps (BW160)" },
          { label: "Max. Data Rate 2.4 GHz", value: "573.5 Mbps (BW40)" },

          { label: "Antenna Gain 5 GHz", value: "6 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "5 dBi" },

          { label: "Max. TX Power 5 GHz", value: "26 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "22 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 4.8 Gbps (MCS0 - MCS11 NSS1/2/3/4, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 3.4 Gbps (MCS0 - MCS9 NSS1/2/3/4, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 600 Mbps (MCS0 - MCS31 , HT 20/40)" },
        ]
      },
      {
        title: "Features",
        items: [
          { label: "Wireless Meshing", value: "✓" },
          { label: "Band Steering", value: "✓" },
          { label: "802.11v BSS Transition Management", value: "✓" },
          { label: "802.11r Fast Roaming", value: "✓" },
          { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
          { label: "Advanced Radio Management", value: "✓" },
          { label: "Passpoint (Hotspot 2.0)", value: "✓" },

          { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
          { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
          { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
          { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
          { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
          { label: "Private Pre-Shared Key (PPSK)", value: "✓" },

          { label: "WiFi Speed Limiting", value: "✓" },
          { label: "Client Device Isolation", value: "✓" },
          { label: "WiFi Schedules", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "11W" },
          { label: "Supported Voltage Range", value: "110—240V AC" },
          { label: "Weight", value: "US: 290 g (10.2 oz) EU: 340 g (12 oz)" },
          { label: "Management", value: "Bluetooth" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Aluminum Alloy" },
          { label: "LEDs System", value: "White/Blue" },
          { label: "Channel Bandwitdth", value: "HT 20/40, VHT 20/40/80/160, HE 20/40/80/160 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz" },
          { label: "Ambient Operating Temperature", value: "-10 to 50° C (14 to 122° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 6.0.45 and later" },
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




  {
    id: "AC Mesh",
    name: "UAP-AC-M",
    category: "WiFi",
    subfilter: "Outdoor",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Compact, indoor/outdoor WiFi 5 AP with 4 spatial streams and optional external antenna support for directional coverage.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "AC-MESH",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "indoor/outdoor WiFi 5 AP with 4 spatial streams and optional external antenna support for directional coverage",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "UAP-AC-M" },
          { label: "Model", value: "AC-MESH" },
          { label: "Category", value: "UniFi Product" },
          { label: "Throughput", value: "3.5 Gbps IPS" },
          { label: "PoE", value: "2x PoE+, 6x PoE" },
          { label: "WAN", value: "2.5 GbE RJ45" },
          { label: "Storage", value: "128GB SSD Integrated" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Form Factor", value: "Standard" },
          { label: "Power Supply", value: "AC/DC" }
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management", value: "UniFi Network" },
          { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
        productLink: "/products/mounting-kit-ac mesh"
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
        productLink: "/products/power-cable-ac mesh"
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
  {
    id: "UK-Ultra",
    name: "Swiss Army Knife",
    category: "WiFi",
    subfilter: "Outdoor",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Incredibly compact, indoor/outdoor AP with versatile mounting options and long-range external antenna support.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "UK-ULTRA",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Incredibly compact",
      "indoor/outdoor AP with versatile mounting options and long-range external antenna support",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Swiss Army Knife" },
          { label: "Model", value: "UK-ULTRA" },
          { label: "Category", value: "UniFi Product" },
          { label: "Throughput", value: "3.5 Gbps IPS" },
          { label: "PoE", value: "2x PoE+, 6x PoE" },
          { label: "WAN", value: "2.5 GbE RJ45" },
          { label: "Storage", value: "128GB SSD Integrated" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Form Factor", value: "Standard" },
          { label: "Power Supply", value: "AC/DC" }
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management", value: "UniFi Network" },
          { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
        productLink: "/products/mounting-kit-uk-ultra"
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
        productLink: "/products/power-cable-uk-ultra"
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
  {
    id: "Product Collection",
    name: "E7 Audience",
    category: "WiFi",
    subfilter: "Mega Capacity",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Enterprise-grade, indoor/outdoor access point designed for high-density environments with 12-stream 5 GHz and 6 GHz WiFi 7 performance, a 10 GbE uplink, and a redundant GbE port for high availability.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],


    // SKU produk
    sku: "PRODUCT-COLLECTION",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enterprise-grade",
      "indoor/outdoor access point designed for high-density environments with 12-stream 5 GHz and 6 GHz WiFi 7 performance",
      "a 10 GbE uplink",
      "and a redundant GbE port for high availability"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "E7 Audience" },
          { label: "Model", value: "PRODUCT-COLLECTION" },
          { label: "Category", value: "WiFi" },
          { label: "Throughput", value: "3.5 Gbps IPS" },
          { label: "PoE", value: "2x PoE+, 6x PoE" },
          { label: "WAN", value: "2.5 GbE RJ45" },
          { label: "Storage", value: "128GB SSD Integrated" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Form Factor", value: "Standard" },
          { label: "Power Supply", value: "AC/DC" }
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management", value: "UniFi Network" },
          { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
        productLink: "/products/mounting-kit-product collection"
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
        productLink: "/products/power-cable-product collection"
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
  {
    id: "UWB-XG",
    name: "WiFI BaseStation XG",
    category: "WiFi",
    subfilter: "Mega Capacity",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Tri-radio WiFi 5 AP with 12 spatial streams and a selectable beamforming antenna, designed for high-density applications at large venue.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "UWB-XG",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-WiFI-BaseStation-XG.png",
      "/images/banners/dcs-overview-1.png",
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
        title: "Overview",
        items: [
          { label: "Product Name", value: "WiFI BaseStation XG" },
          { label: "Model", value: "UWB-XG" },
          { label: "Category", value: "UniFi Product" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Form Factor", value: "Standard" },
          { label: "Power Supply", value: "AC/DC" }
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management", value: "UniFi Network" },
          { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  {
    id: "UDB-Pro-Sector",
    name: "Device Bridge Pro Sector",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "5 GHz point-to-multipoint access point that wirelessly bridges 50+ Device Bridge Pro clients at 5+ km distances.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],


    // SKU produk
    sku: "UDB-PRO-SECTOR",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "5 GHz point-to-multipoint access point that wirelessly bridges 50+ Device Bridge Pro clients at 5+ km distances",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Device Bridge Pro Sector" },
          { label: "Model", value: "UDB-PRO-SECTOR" },
          { label: "Category", value: "WiFi" },
          { label: "Throughput", value: "3.5 Gbps IPS" },
          { label: "PoE", value: "2x PoE+, 6x PoE" },
          { label: "WAN", value: "2.5 GbE RJ45" },
          { label: "Storage", value: "128GB SSD Integrated" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Form Factor", value: "Standard" },
          { label: "Power Supply", value: "AC/DC" }
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management", value: "UniFi Network" },
          { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
        productLink: "/products/mounting-kit-udb-pro-sector"
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
        productLink: "/products/power-cable-udb-pro-sector"
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
  {
    id: "UDB-Pro",
    name: "Device Bridge Pro ",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "5 GHz wireless bridge with PoE output that connects at 5+ km distance or seamlessly uplinks to UniFI WiFI.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "UDB-PRO",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Device-Bridge-Pro-.png",
      "/images/banners/dcs-overview-1.png",
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
        title: "Overview",
        items: [
          { label: "Product Name", value: "Device Bridge Pro " },
          { label: "Model", value: "UDB-PRO" },
          { label: "Category", value: "UniFi Product" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Form Factor", value: "Standard" },
          { label: "Power Supply", value: "AC/DC" }
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management", value: "UniFi Network" },
          { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  {
    id: "UDB",
    name: "Device Bridge",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Plug-and-play, wireless bridging PoE adapter with integrated UniFI WiFI Auto-Link.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "UDB",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Plug-and-play",
      "wireless bridging PoE adapter with integrated UniFI WiFI Auto-Link",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Device Bridge" },
          { label: "Model", value: "UDB" },
          { label: "Category", value: "UniFi Product" },
          { label: "Throughput", value: "3.5 Gbps IPS" },
          { label: "PoE", value: "2x PoE+, 6x PoE" },
          { label: "WAN", value: "2.5 GbE RJ45" },
          { label: "Storage", value: "128GB SSD Integrated" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Form Factor", value: "Standard" },
          { label: "Power Supply", value: "AC/DC" }
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management", value: "UniFi Network" },
          { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
        productLink: "/products/mounting-kit-udb"
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
        productLink: "/products/power-cable-udb"
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
  {
    id: "UBB",
    name: "Building Bridge",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "60 GHz wireless point-to-point bridge with a 5 GHz backup radio.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "UBB",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "60 GHz wireless point-to-point bridge with a 5 GHz backup radio",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Building Bridge" },
          { label: "Model", value: "UBB" },
          { label: "Category", value: "UniFi Product" },
          { label: "Throughput", value: "3.5 Gbps IPS" },
          { label: "PoE", value: "2x PoE+, 6x PoE" },
          { label: "WAN", value: "2.5 GbE RJ45" },
          { label: "Storage", value: "128GB SSD Integrated" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Form Factor", value: "Standard" },
          { label: "Power Supply", value: "AC/DC" }
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management", value: "UniFi Network" },
          { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
        productLink: "/products/mounting-kit-ubb"
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
        productLink: "/products/power-cable-ubb"
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
  {
    id: "UDB-Switch(35W)",
    name: "Device Bridge Switch",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Compact PoE+ switch* with (1) 10 GbE port, (7) 2.5 GbE ports, and 6 GHz-ready WiFi 7 bridging integration for seamless, high-capacity wireless uplink to UniFi WiFi..",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "UDB-SWITCH-35W-",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Compact PoE+ switch* with (1) 10 GbE port",
      "5 GbE ports",
      "and 6 GHz-ready WiFi 7 bridging integration for seamless",
      "high-capacity wireless uplink to UniFi WiFi"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Device Bridge Switch" },
          { label: "Model", value: "UDB-SWITCH-35W-" },
          { label: "Category", value: "UniFi Product" },
          { label: "Throughput", value: "3.5 Gbps IPS" },
          { label: "PoE", value: "2x PoE+, 6x PoE" },
          { label: "WAN", value: "2.5 GbE RJ45" },
          { label: "Storage", value: "128GB SSD Integrated" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Form Factor", value: "Standard" },
          { label: "Power Supply", value: "AC/DC" }
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management", value: "UniFi Network" },
          { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
        productLink: "/products/mounting-kit-udb-switch(35w)"
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
        productLink: "/products/power-cable-udb-switch(35w)"
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
  {
    id: "UBB-XG",
    name: "Device Bridge XG",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "60 GHz wireless point-to-point bridge with a 10G SFP+ uplink for maximum performance and a 5 GHz backup radio.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "UBB-XG",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "60 GHz wireless point-to-point bridge with a 10G SFP+ uplink for maximum performance and a 5 GHz backup radio",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Device Bridge XG" },
          { label: "Model", value: "UBB-XG" },
          { label: "Category", value: "UniFi Product" },
          { label: "Throughput", value: "3.5 Gbps IPS" },
          { label: "PoE", value: "2x PoE+, 6x PoE" },
          { label: "WAN", value: "2.5 GbE RJ45" },
          { label: "Storage", value: "128GB SSD Integrated" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Form Factor", value: "Standard" },
          { label: "Power Supply", value: "AC/DC" }
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management", value: "UniFi Network" },
          { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
        productLink: "/products/mounting-kit-ubb-xg"
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
        productLink: "/products/power-cable-ubb-xg"
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
  {
    id: "UDB-IoT",
    name: "Device Bridge IoT",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Ultra-compact wireless bridge for IoT devices with integrated UniFi WiFi Auto-Link, versatile mounting options, and powered by USB Type-C or 4-pin DC socket.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "UDB-IOT",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Ultra-compact wireless bridge for IoT devices with integrated UniFi WiFi Auto-Link",
      "versatile mounting options",
      "and powered by USB Type-C or 4-pin DC socket",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Device Bridge IoT" },
          { label: "Model", value: "UDB-IOT" },
          { label: "Category", value: "UniFi Product" },
          { label: "Throughput", value: "3.5 Gbps IPS" },
          { label: "PoE", value: "2x PoE+, 6x PoE" },
          { label: "WAN", value: "2.5 GbE RJ45" },
          { label: "Storage", value: "128GB SSD Integrated" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Form Factor", value: "Standard" },
          { label: "Power Supply", value: "AC/DC" }
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management", value: "UniFi Network" },
          { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
        productLink: "/products/mounting-kit-udb-iot"
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
        productLink: "/products/power-cable-udb-iot"
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
  {
    id: "UTR",
    name: "UniFI Travel Router",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "An ultra-slim travel router that instantly extends your UniFi Network wherever you are, bringing secure, familiar connectivity to remote locations..",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],


    // SKU produk
    sku: "UTR",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-5G-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "An ultra-slim travel router that instantly extends your UniFi Network wherever you are",
      "bringing secure",
      "familiar connectivity to remote locations",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "UniFI Travel Router" },
          { label: "Model", value: "UTR" },
          { label: "Category", value: "WiFi" },
          { label: "Throughput", value: "3.5 Gbps IPS" },
          { label: "PoE", value: "2x PoE+, 6x PoE" },
          { label: "WAN", value: "2.5 GbE RJ45" },
          { label: "Storage", value: "128GB SSD Integrated" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Form Factor", value: "Standard" },
          { label: "Power Supply", value: "AC/DC" }
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management", value: "UniFi Network" },
          { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
        productLink: "/products/mounting-kit-utr"
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
        productLink: "/products/power-cable-utr"
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
  }
];
