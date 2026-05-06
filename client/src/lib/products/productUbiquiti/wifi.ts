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
const wifiRaw: Product[] = [

  //Produk Pertama dari WiFi, SF Enterprise
  {
    id: "E7",
    name: "E7",
    category: "WiFi",
    subfilter: "Enterprise",
    image: "/images/WiFi/1.e7/1.p-utama-e7.jpg",
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
      "/images/WiFi/1.e7/1.p-utama-e7.jpg",
      "/images/WiFi/1.e7/2.p-dimensi-e7.jpg",
      "/images/WiFi/1.e7/3.p-spec-e7.jpg",
      "/images/WiFi/1.e7/4.p-deployment-e7.jpg",
      "/images/WiFi/1.e7/p-itb-e7.jpg",
      "/images/WiFi/1.e7/p-mkt0-e7.jpg",
      "/images/WiFi/1.e7/p-mkt1-e7.jpg",
      "/images/WiFi/1.e7/p-mkt2-e7.jpg",
      "/images/WiFi/1.e7/p-mkt3-e7.jpg",
      "/images/WiFi/1.e7/p-mkt4-e7.jpg",
      "/images/WiFi/1.e7/p-mkt5-e7.jpg",
      "/images/WiFi/1.e7/p-ov1-e7.png",
      "/images/WiFi/1.e7/p-ov2-e7.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/1.e7/p-ov1-e7.png",
      "/images/WiFi/1.e7/p-ov2-e7.png",
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
      {
        name: "Device", image: "/images/WiFi/1.e7/p-itb-e7.jpg",
      },
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
    image: "/images/WiFi/2.e7-campus/1.p-utama-e7-campus.jpg",
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
      "/images/WiFi/2.e7-campus/1.p-utama-e7-campus.jpg",
      "/images/WiFi/2.e7-campus/2.p-dimensi-e7-campus.jpg",
      "/images/WiFi/2.e7-campus/3.p-spec-e7-campus.jpg",
      "/images/WiFi/2.e7-campus/4.p-deployment-e7-campus.jpg",
      "/images/WiFi/2.e7-campus/p-itb-e7-campus.jpg",
      "/images/WiFi/2.e7-campus/p-mkt0-e7-campus.jpg",
      "/images/WiFi/2.e7-campus/p-mkt1-e7-campus.jpg",
      "/images/WiFi/2.e7-campus/p-mkt2-e7-campus.jpg",
      "/images/WiFi/2.e7-campus/p-mkt3-e7-campus.jpg",
      "/images/WiFi/2.e7-campus/p-mkt4-e7-campus.jpg",
      "/images/WiFi/2.e7-campus/p-mkt5-e7-campus.jpg",
      "/images/WiFi/2.e7-campus/p-mkt6-e7-campus.jpg",
      "/images/WiFi/2.e7-campus/p-ov1-e7-campus.png",
      "/images/WiFi/2.e7-campus/p-ov2-e7-campus.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/2.e7-campus/p-ov1-e7-campus.png",
      "/images/WiFi/2.e7-campus/p-ov2-e7-campus.png",
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
      { name: "Device", image: "/images/WiFi/2.e7-campus/p-itb-e7-campus.jpg", },
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

  // // Produk Ketiga dari WiFi, SF Enterprise
  // {
  //   id: "E7-Campus-Indoor",
  //   name: "E7 Campus Indoor",
  //   category: "WiFi",
  //   subfilter: "Enterprise",
  //   image: "/images/products/Product-UDR-5G-Max.png",
  //   shortDescription:
  //     "Enterprise-grade access point with 10-stream WiFi 7 performance, expanded 6 GHz indoor spectrum capability, a 10 GbE uplink, and a redundant GbE port for high availability.",
  //   specs: [
  //     { label: "Throughput", value: "3.5 Gbps IPS" },
  //     { label: "PoE", value: "2x PoE+, 6x PoE" },
  //     { label: "WAN", value: "2.5 GbE RJ45" },
  //     { label: "Storage", value: "128GB SSD Integrated" },
  //   ],

  //   // SKU produk
  //   sku: "E7-Campus-Indoor",

  //   // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
  //   images: [
  //     "/images/products/Product-UDR-5G-Max.png",
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
  //     "Max. Client Count 1000+",
  //     "Power Method PoE++",
  //     "MIMO 6 GHz 4 x 4 (DL/UL MU-MIMO)",
  //     "Supported Data Rates 802.11be (WiFi 7) 7.3 Mbps to 11.4 Gbps (MCS0 - MCS13 NSS1/2/3/4, EHT 20/40/80/160/240/320)"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Dimensions", value: "Device: 250 x 250 x 45.5 mm (9.8 x 9.8 x 1.8') Articulating mount: ⌀104 x 149.4 (⌀4.1 x 5.9')" },
  //         { label: "WiFi Standard", value: "WiFi 7" },
  //         { label: "Spatial Streams", value: "10" },
  //         { label: "Coverage Area", value: "465 m² (5,000 ft²)" },
  //         { label: "Max. Client Count", value: "1000+" },
  //         { label: "Uplink", value: "10 GbE 1 GbE" },
  //         { label: "Mounting", value: "Wall, Pole (Mounts Included) VESA (Optional)" },
  //         { label: "Power Method", value: "PoE++" }
  //       ]
  //     },
  //     {
  //       title: "Performance",
  //       items: [
  //         { label: "MIMO 6 GHz", value: "4 x 4 (DL/UL MU-MIMO)" },
  //         { label: "MIMO 5 GHz", value: "4 x 4 (DL/UL MU-MIMO)" },
  //         { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

  //         { label: "Max. Data Rate 6 GHz", value: "11.5 Gbps (BW320)" },
  //         { label: "Max. Data Rate 5 GHz", value: "8.6 Gbps (BW240)" },
  //         { label: "Max. Data Rate 2.4 GHz", value: "688 Mbps (BW40)" },

  //         { label: "Antenna Gain 6 GHz", value: "Directional internal: 12 dBi, 90° x 50°" },
  //         { label: "Antenna Gain 5 GHz", value: "Directional internal: 12 dBi, 100° x 55°" },
  //         { label: "Antenna Gain 2.4 GHz", value: "Directional internal: 9 dBi, 90° x 80°" },

  //         { label: "Max. TX Power 6 GHz", value: "30 dBm  (36 dBm EIRP)" },
  //         { label: "Max. TX Power 5 GHz", value: "30 dBm" },
  //         { label: "Max. TX Power 2.4 GHz GHz", value: "23 dBm" },

  //         { label: "Max. BSSIDs", value: "8 per Radio" },

  //         { label: "Supported Data Rates 802.11be (WiFi 7)", value: "7.3 Mbps to 11.4 Gbps (MCS0 - MCS13 NSS1/2/3/4, EHT 20/40/80/160/240/320)" },
  //         { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 4.8 Gbps (MCS0 - MCS11 NSS1/2/3/4, HE 20/40/80/160)" },
  //         { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 3.4 Gbps (MCS0 - MCS9 NSS1/2/3/4, VHT 20/40/80/160)" },
  //         { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 600 Mbps (MCS0 - MCS31, HT 20/40)" }
  //       ]
  //     },
  //     {
  //       title: "Features",
  //       items: [
  //         { label: "Wireless Meshing", value: "✓" },
  //         { label: "Band Steering", value: "✓" },
  //         { label: "802.11v BSS Transition Management", value: "✓" },
  //         { label: "802.11r Fast Roaming", value: "✓" },
  //         { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
  //         { label: "Zero-Wait DFS", value: "✓" },
  //         { label: "Advanced Radio Management", value: "✓" },
  //         { label: "Real-Time Spectral Analysis", value: "✓" },
  //         { label: "Passpoint (Hotspot 2.0)", value: "✓" },
  //         { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
  //         { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
  //         { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
  //         { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
  //         { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
  //         { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
  //         { label: "Private Pre-Shared Key (PPSK)", value: "✓" },
  //         { label: "WiFi Speed Limiting", value: "✓" },
  //         { label: "Client Device Isolation", value: "✓" },
  //         { label: "WiFi Schedules", value: "✓" },
  //         { label: "RADIUS over TLS (RadSec)", value: "✓" },
  //         { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Max. Power Consumption", value: "44W" },
  //         { label: "Supported Voltage Range", value: "42.5–57V DC" },
  //         { label: "Networking Interface", value: "(1) 10 GbE RJ45 port (1) 1 GbE RJ45 port" },
  //         { label: "PRISM™ RF Filtering", value: "✓" },
  //         { label: "Weight", value: "Device: 2.2 kg (4.9 lb) With articulating mount: 3.1 kg (6.8 lb)" },
  //         { label: "Wind Loading", value: "164.75 N at 200 km/h (37 lbf at 125 mph)" },
  //         { label: "Pole Mount Diameter", value: "1–2.5' (25–63.5 mm)" },
  //         { label: "Antennas", value: "(1) Internal with directional patterns" },
  //         { label: "Antenna beamwidth 6 GHz", value: "90° x 50°" },
  //         { label: "Antenna beamwidth 5 GHz", value: "100° x 55°" },
  //         { label: "Antenna beamwidth 2.4 GHz", value: "90° x 80°" },
  //         { label: "Management", value: "Ethernet" },
  //         { label: "Enclosure Material", value: "UV-stabilized polycarbonate, aluminum alloy" },
  //         { label: "Mount Material", value: "Stainless steel, aluminum alloy" },
  //         { label: "LEDs System", value: "R/G/B" },
  //         { label: "NDAA Compliant", value: "✓" },
  //         { label: "Certifications", value: "FCC, IC" },
  //         { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz U-NII-5 and U-NII-7: 5925 - 6425 MHz, 6525 - 6875 MHz Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz 5925 - 7125 MHz" },
  //         { label: "Ambient Operating Temperature", value: "-40 to 60° C (-40 to 140° F)" },
  //         { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
  //       ]
  //     },
  //     {
  //       title: " Software",
  //       items: [
  //         { label: "Application Requirements UniFi Network", value: "Version 10.0.162 and later" },
  //         { label: "Application Requirements Mobile App", value: "iOS™ version 10.30.2 and later Android™ version 10.31.4 and later" },
  //       ]
  //     }
  //   ],

  //   // Item yang ada dalam box produk (gambar bisa diganti)
  //   inTheBox: [
  //     { name: "Device", image: "/images/dcs-box.png" },
  //     { name: "Mounting Kit", image: "/images/dcs-box.png" },
  //     { name: "Power Cable", image: "/images/dcs-box.png" },
  //     { name: "Quick Start", image: "/images/dcs-box.png" }
  //   ],

  //   // Addon/aksesori yang tersedia untuk produk ini
  //   addons: [
  //     {
  //       id: 1,
  //       name: "Pro HD 24 PoE",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Professional-grade, Layer 3 Etherlighting™ switch with (2) 10 GbE PoE++, (22) 2.5 GbE PoE++, and (4) 10G SFP+ ports.",
  //       specs: [
  //         "Etherlighting™ ports that illuminate to indicate port location, speed/link, and native VLAN/network*",
  //         "(22) 2.5 GbE, (2) 10 GbE PoE++ ports",
  //         "(4) 10G SFP+ ports",
  //         "DC power backup ready**",
  //         "600W total PoE availability",
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442 x 400 x 44 mm (17.4 x 15.7 x 1.7')" },
  //         { label: "Port Layout 2.5 GbE RJ45", value: "22 (All PoE++) (2.5G/1G/100M/10M)" },
  //         { label: "Port Layout 10 GbE RJ45", value: "2 (All PoE++) (10G/5G/2.5G/1G/100M)" },
  //         { label: "Port Layou 10G SFP+t", value: "4 (10G/1G)" },
  //         { label: "Switching Capacity", value: "230 Gbps" },
  //         { label: "Total Non-Blocking Throughput", value: "115 Gbps" },
  //         { label: "DHCP Server (Local Networks)", value: "✓" },
  //         { label: "DHCP Relay", value: "✓" },
  //         { label: "LACP Port Aggregation", value: "✓" },
  //         { label: "STP & RSTP", value: "✓" },
  //         { label: "Max. Power Consumption", value: "60W (Excluding PoE Output) 660W (Including PoE Output)" },
  //         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
  //         { label: "Application Requirements UniFi Network", value: "Version 9.0.114 and later" },
  //       ],
  //       productLink: "/products/mounting-kit-e7"
  //     },
  //     {
  //       id: 2,
  //       name: "UniFi Premium Patch Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Ultra-thin braided patch cable, designed and optimized for 10 GbE networking.",
  //       specs: [
  //         "Translucent booted RJ45 for optimal Etherlighting™ brightness",
  //         "— 3 mm outer diameter for 0.15-8 m lengths",
  //         "— 3.3 mm outer diameter for 12-15 m lengths",
  //         "Length: 0.15 to 15 m"
  //       ],
  //       detailedSpecs: [
  //         { label: "Available Lengths", value: "End-to-end: 0.15, 0.3, 1, 2, 3, 5, 8, 12, 15 m (0.5, 1, 3.3, 6.6, 9.8, 16.4, 26.2, 39.8, 49.2 ft)" },
  //         { label: "Available Colors", value: "White" },
  //         { label: "Pack Options", value: "Single Unit 24-Pack (0.15 m)" },
  //         { label: "Supported Data Rate", value: "10G" },
  //         { label: "Supported PoE type", value: "Up to PoE+++" },
  //         { label: "Connector", value: "(2) Translucent booted RJ45" },
  //         { label: "Operating Environment", value: "Indoor" },
  //         { label: "Cable Jacket Diameter", value: "0.15-8 m: 3 mm (0.11') 12-15 m: 2.9 mm (0.11')" },
  //         { label: "Cable Jacket Material", value: "Thermoplastic elastomer (TPE)" },
  //         { label: "Cable Shielding Type", value: "UTP" },
  //         { label: "Cable Conductor Type", value: "Stranded copper" },
  //         { label: "Cable Conductor Wire Gage", value: "1-8 m (3-26 ft): 34 AWG 12-15 m (39-49 ft): 32 AWG" },
  //         { label: "Cable Bend Radius", value: "1-8 m: Min. 21 mm (0.83'')12-15 m: Min. 24 mm (0.94'')" },
  //         { label: "UV Resistance", value: "ASTM G 151/154" },
  //         { label: "Flame Rating", value: "VW-1 (UL1581)" },
  //         { label: "Standars", value: "TIA/EIA-568-B.2 ISO/IEC 11801" },
  //         { label: "Installion Temperature", value: "-20 to 60°C (-4 to 140°F)" },
  //         { label: "Ambient Storage Temperature", value: "-20 to 75°C (-4 to 167°F)" },
  //         { label: "Ambient Operating Temperature", value: "-20 to 60°C (-4 to 140°F)" },
  //       ],
  //       productLink: "/products/power-cable-e7"
  //     },
  //     {
  //       id: 3,
  //       name: "SFP+ Module",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-speed 10Gbps SFP+ module for fiber connectivity.",
  //       specs: [
  //         "10Gbps support",
  //         "Multi-mode fiber",
  //         "Hot-swappable"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
  //         { label: "Port Layout 1 GbE RJ45", value: "16 (8 PoE+; 8 PoE++) (1G/100M/10M)" },
  //         { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE++) (2.5G/1G/100M/10M)" },
  //         { label: "Port Layou 10G SFP+", value: "2 (10G/1G" },
  //         { label: "Switching Capacity", value: "112 Gbps" },
  //         { label: "Total Non-Blocking Throughput", value: "56 Gbps" },
  //         { label: "DHCP Server (Local Networks)", value: "✓" },
  //         { label: "DHCP Relay", value: "✓" },
  //         { label: "LACP Port Aggregation", value: "✓" },
  //         { label: "STP & RSTP", value: "✓" },
  //         { label: "Max. Power Consumption", value: "50W (Excluding PoE Output) 450W (Including PoE Output)" },
  //         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
  //         { label: "Application Requirements UniFi Network", value: "Version 8.0.24 and later" },
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     },
  //     {
  //       id: 4,
  //       name: "UniFi Etherlighting Patch Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Nano-thin patch cable with 10 GbE support, designed to showcase Etherlighting™ effects.",
  //       specs: [
  //         "Translucent booted RJ45 for optimal Etherlighting™ brightness",
  //         "— 2.5 mm outer diameter for 0.15-8 m lengths",
  //         "— 2.9 mm outer diameter for 12-15 m lengths",
  //         "Length: 0.15 to 15 m"
  //       ],
  //       detailedSpecs: [
  //         { label: "Available Lengths", value: "End-to-end: 0.15, 0.3, 1, 2, 3, 5, 8, 12, 15 m(0.5, 1, 3.3, 6.6, 9.8, 16.4, 26.2, 39.8, 49.2 ft)" },
  //         { label: "Available Colors", value: "White" },
  //         { label: "Pack Options", value: "Single Unit 24-pack (0.15 m)" },
  //         { label: "Supported Data Rate", value: "10G" },
  //         { label: "Supported PoE type", value: "Up to PoE+++" },
  //         { label: "Connector", value: "(2) Translucent booted RJ45" },
  //         { label: "Operating Environment", value: "Indoor" },
  //         { label: "Cable Jacket Diameter", value: "0.15-8 m: 2.5 mm (0.1')12-15 m: 2.9 mm (0.11')" },
  //         { label: "Cable Jacket Material", value: "Thermoplastic elastomer (TPE)" },
  //         { label: "Cable Shielding Type", value: "UTP" },
  //         { label: "Cable Conductor Type", value: "Stranded copper" },
  //         { label: "Cable Conductor Wire Gage", value: "1-8 m (3-26 ft): 34 AWG12-15 m (39-49 ft): 32 AWG" },
  //         { label: "Cable Bend Radius", value: "Min. 24 mm  (0.94'')" },
  //         { label: "Flame Rating", value: "FT-2(UL1581)" },
  //         { label: "Standars", value: "TIA/EIA-568-B.2 ISO/IEC 11801" },
  //         { label: "Installion Temperature", value: "0 to 60°C (32 to 140°F)" },
  //         { label: "Ambient Storage Temperature", value: "-20 to 80°C (-4 to 176°F)" },
  //         { label: "Ambient Operating Temperature", value: "-10 to 75°C (14 to 167°F)" },
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },

  // Produk Keempat dari WiFi, SF Enterprise
  {
    id: "E7-Audience",
    name: "E7 Audience",
    category: "WiFi",
    subfilter: "Enterprise",
    image: "/images/WiFi/3.e7-audience/1.p-utama-e7-audience.jpg",
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
      "/images/WiFi/3.e7-audience/1.p-utama-e7-audience.jpg",
      "/images/WiFi/3.e7-audience/2.p-dimensi-e7-audience.jpg",
      "/images/WiFi/3.e7-audience/3.p-spec-e7-audience.jpg",
      "/images/WiFi/3.e7-audience/4.p-deployment-e7-audience.jpg",
      "/images/WiFi/3.e7-audience/p-itb-e7-audience.jpg",
      "/images/WiFi/3.e7-audience/p-mkt0-e7-audience.jpg",
      "/images/WiFi/3.e7-audience/p-mkt1-e7-audience.jpg",
      "/images/WiFi/3.e7-audience/p-mkt2-e7-audience.jpg",
      "/images/WiFi/3.e7-audience/p-mkt3-e7-audience.jpg",
      "/images/WiFi/3.e7-audience/p-mkt4-e7-audience.jpg",
      "/images/WiFi/3.e7-audience/p-mkt5-e7-audience.jpg",
      "/images/WiFi/3.e7-audience/p-mkt6-e7-audience.jpg",
      "/images/WiFi/3.e7-audience/p-ov1-e7-audience.png",
      "/images/WiFi/3.e7-audience/p-ov2-e7-audience.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/3.e7-audience/p-ov1-e7-audience.png",
      "/images/WiFi/3.e7-audience/p-ov2-e7-audience.png",
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
      { name: "Device", image: "/images/WiFi/3.e7-audience/p-itb-e7-audience.jpg", },
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

  // // Produk Kelima dari WiFi, SF Enterprise
  // {
  //   id: "E7-Audience-Indoor",
  //   name: "E7 Audience Indoor",
  //   category: "WiFi",
  //   subfilter: "Flagship",
  //   image: "/images/products/Product-UDR-5G-Max.png",
  //   shortDescription:
  //     "Enterprise-grade access point designed for high-density environments with 12-stream WiFi 7 performance, expanded 6 GHz indoor spectrum capability, a 10 GbE uplink, and a redundant GbE port for high availability.",
  //   specs: [
  //     { label: "Throughput", value: "3.5 Gbps IPS" },
  //     { label: "PoE", value: "2x PoE+, 6x PoE" },
  //     { label: "WAN", value: "2.5 GbE RJ45" },
  //     { label: "Storage", value: "128GB SSD Integrated" },
  //   ],

  //   // SKU produk
  //   sku: "E7-Audience-Indoor",

  //   // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
  //   images: [
  //     "/images/products/Product-U7-Pro-XGS.png",
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
  //     "Max. Client Count 1500+",
  //     "MIMO 6 GHz Low Band: 4 x 4 (DL/UL MU-MIMO) High Band: 4 x 4 (DL/UL MU-MIMO)",
  //     "Enclosure Material UV-stabilized polycarbonate, aluminum alloy",
  //     "Power Method PoE++"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Dimensions", value: "Device: 474.1 x 239.4 x 42.2 mm (18.7 x 9.4 x 1.7') Bracket: 150.4 x 113.6 x 125 mm (5.9 x 4.5 x 4.9')" },
  //         { label: "WiFi Standard", value: "WiFi 7" },
  //         { label: "Spatial Streams", value: "12" },
  //         { label: "Coverage Area", value: "465 m² (5,000 ft²)" },
  //         { label: "Max. Client Count", value: "1500+" },
  //         { label: "Uplink", value: "10 GbE 1 GbE" },
  //         { label: "Mounting", value: "Wall, Pole (Mounts Included) VESA (Optional)" },
  //         { label: "Power Method", value: "PoE++" }
  //       ]
  //     },
  //     {
  //       title: "Performance",
  //       items: [
  //         { label: "MIMO 6 GHz", value: "Low Band: 4 x 4 (DL/UL MU-MIMO) High Band: 4 x 4 (DL/UL MU-MIMO)" },
  //         { label: "MIMO 5 GHz", value: "4 x 4 (DL/UL MU-MIMO)" },

  //         { label: "Max. Data Rate 6 GHz", value: "Low Band: 11.5 Gbps (BW320) High Band: 11.5 Gbps (BW320)" },
  //         { label: "Max. Data Rate 5 GHz", value: "8.6 Gbps (BW240)" },

  //         { label: "Antenna Gain 6 GHz", value: "Directional internal: 15 dBi, 50° x 50° Directional internal: 11 dBi, 90° x 90°" },
  //         { label: "Antenna Gain 5 GHz", value: "Directional internal: 15 dBi, 50° x 50° Directional internal: 11 dBi, 90° x 90°" },

  //         { label: "Max. TX Power 6 GHz", value: "Low Band: 30 dBm (36 dBm EIRP) High Band: 30 dBm (36 dBm EIRP)" },
  //         { label: "Max. TX Power 5 GHz", value: "30 dBm" },

  //         { label: "Max. BSSIDs", value: "8 per Radio" },

  //         { label: "Supported Data Rates 802.11be (WiFi 7)", value: "7.3 Mbps to 11.4 Gbps (MCS0 - MCS13 NSS1/2/3/4, EHT 20/40/80/160/240/320)" },
  //         { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 4.8 Gbps (MCS0 - MCS11 NSS1/2/3/4, HE 20/40/80/160)" },
  //         { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 3.4 Gbps (MCS0 - MCS9 NSS1/2/3/4, VHT 20/40/80/160)" },
  //         { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 600 Mbps (MCS0 - MCS31, HT 20/40)" }
  //       ]
  //     },
  //     {
  //       title: "Features",
  //       items: [
  //         { label: "Wireless Meshing", value: "✓" },
  //         { label: "Band Steering", value: "✓" },
  //         { label: "802.11v BSS Transition Management", value: "✓" },
  //         { label: "802.11r Fast Roaming", value: "✓" },
  //         { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
  //         { label: "Zero-Wait DFS", value: "✓" },
  //         { label: "Advanced Radio Management", value: "✓" },
  //         { label: "Real-Time Spectral Analysis", value: "✓" },
  //         { label: "Passpoint (Hotspot 2.0)", value: "✓" },
  //         { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
  //         { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
  //         { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
  //         { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
  //         { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
  //         { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
  //         { label: "Private Pre-Shared Key (PPSK)", value: "✓" },
  //         { label: "WiFi Speed Limiting", value: "✓" },
  //         { label: "Client Device Isolation", value: "✓" },
  //         { label: "WiFi Schedules", value: "✓" },
  //         { label: "RADIUS over TLS (RadSec)", value: "✓" },
  //         { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Max. Power Consumption", value: "51W" },
  //         { label: "Supported Voltage Range", value: "42.5–57V DC" },
  //         { label: "Networking Interface", value: "(1) 10 GbE RJ45 port (1) 1 GbE RJ45 port" },
  //         { label: "PRISM™ RF Filtering", value: "✓" },
  //         { label: "Weight", value: "Device: 3.2 kg (7.1 lb) With mount: 4.2 kg (9.3 lb)" },
  //         { label: "Pole Mount Diameter", value: "1–3' (25–76 mm)" },
  //         { label: "Antennas", value: "(1) Internal with directional patterns" },
  //         { label: "Management", value: "Ethernet" },
  //         { label: "Enclosure Material", value: "UV-stabilized polycarbonate, aluminum alloy" },
  //         { label: "Mount Material", value: "Aluminum alloy" },
  //         { label: "LEDs System", value: "R/G/B" },
  //         { label: "Chanel Bandwidth", value: "VHT 20/40/80/160, HE 20/40/80/160, EHT 20/40/80/160/240/320 (MHz)" },
  //         { label: "NDAA Compliant", value: "✓" },
  //         { label: "Certifications", value: "FCC, IC" },
  //         { label: "Ambient Operating Temperature", value: "-40 to 60° C (-40 to 140° F)" },
  //         { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
  //       ]
  //     },
  //     {
  //       title: " Software",
  //       items: [
  //         { label: "Application Requirements UniFi Network", value: "Version 10.0.162 and later" },
  //         { label: "Application Requirements Mobile App", value: "iOS™ version 10.30.2 and later Android™ version 10.31.4 and later" },
  //       ]
  //     }
  //   ],

  //   // Item yang ada dalam box produk (gambar bisa diganti)
  //   inTheBox: [
  //     { name: "Device", image: "/images/dcs-box.png" },
  //     { name: "Mounting Kit", image: "/images/dcs-box.png" },
  //     { name: "Power Cable", image: "/images/dcs-box.png" },
  //     { name: "Quick Start", image: "/images/dcs-box.png" }
  //   ],

  //   // Addon/aksesori yang tersedia untuk produk ini
  //   addons: [
  //     {
  //       id: 1,
  //       name: "Pro HD 24 PoE",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Professional-grade, Layer 3 Etherlighting™ switch with (2) 10 GbE PoE++, (22) 2.5 GbE PoE++, and (4) 10G SFP+ ports.",
  //       specs: [
  //         "Etherlighting™ ports that illuminate to indicate port location, speed/link, and native VLAN/network*",
  //         "(22) 2.5 GbE, (2) 10 GbE PoE++ ports",
  //         "(4) 10G SFP+ ports",
  //         "DC power backup ready**",
  //         "600W total PoE availability",
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442 x 400 x 44 mm (17.4 x 15.7 x 1.7')" },
  //         { label: "Port Layout 2.5 GbE RJ45", value: "22 (All PoE++) (2.5G/1G/100M/10M)" },
  //         { label: "Port Layout 10 GbE RJ45", value: "2 (All PoE++) (10G/5G/2.5G/1G/100M)" },
  //         { label: "Port Layou 10G SFP+t", value: "4 (10G/1G)" },
  //         { label: "Switching Capacity", value: "230 Gbps" },
  //         { label: "Total Non-Blocking Throughput", value: "115 Gbps" },
  //         { label: "DHCP Server (Local Networks)", value: "✓" },
  //         { label: "DHCP Relay", value: "✓" },
  //         { label: "LACP Port Aggregation", value: "✓" },
  //         { label: "STP & RSTP", value: "✓" },
  //         { label: "Max. Power Consumption", value: "60W (Excluding PoE Output) 660W (Including PoE Output)" },
  //         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
  //         { label: "Application Requirements UniFi Network", value: "Version 9.0.114 and later" },
  //       ],
  //       productLink: "/products/mounting-kit-e7"
  //     },
  //     {
  //       id: 2,
  //       name: "UniFi Premium Patch Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Ultra-thin braided patch cable, designed and optimized for 10 GbE networking.",
  //       specs: [
  //         "Translucent booted RJ45 for optimal Etherlighting™ brightness",
  //         "— 3 mm outer diameter for 0.15-8 m lengths",
  //         "— 3.3 mm outer diameter for 12-15 m lengths",
  //         "Length: 0.15 to 15 m"
  //       ],
  //       detailedSpecs: [
  //         { label: "Available Lengths", value: "End-to-end: 0.15, 0.3, 1, 2, 3, 5, 8, 12, 15 m (0.5, 1, 3.3, 6.6, 9.8, 16.4, 26.2, 39.8, 49.2 ft)" },
  //         { label: "Available Colors", value: "White" },
  //         { label: "Pack Options", value: "Single Unit 24-Pack (0.15 m)" },
  //         { label: "Supported Data Rate", value: "10G" },
  //         { label: "Supported PoE type", value: "Up to PoE+++" },
  //         { label: "Connector", value: "(2) Translucent booted RJ45" },
  //         { label: "Operating Environment", value: "Indoor" },
  //         { label: "Cable Jacket Diameter", value: "0.15-8 m: 3 mm (0.11') 12-15 m: 2.9 mm (0.11')" },
  //         { label: "Cable Jacket Material", value: "Thermoplastic elastomer (TPE)" },
  //         { label: "Cable Shielding Type", value: "UTP" },
  //         { label: "Cable Conductor Type", value: "Stranded copper" },
  //         { label: "Cable Conductor Wire Gage", value: "1-8 m (3-26 ft): 34 AWG 12-15 m (39-49 ft): 32 AWG" },
  //         { label: "Cable Bend Radius", value: "1-8 m: Min. 21 mm (0.83'')12-15 m: Min. 24 mm (0.94'')" },
  //         { label: "UV Resistance", value: "ASTM G 151/154" },
  //         { label: "Flame Rating", value: "VW-1 (UL1581)" },
  //         { label: "Standars", value: "TIA/EIA-568-B.2 ISO/IEC 11801" },
  //         { label: "Installion Temperature", value: "-20 to 60°C (-4 to 140°F)" },
  //         { label: "Ambient Storage Temperature", value: "-20 to 75°C (-4 to 167°F)" },
  //         { label: "Ambient Operating Temperature", value: "-20 to 60°C (-4 to 140°F)" },
  //       ],
  //       productLink: "/products/power-cable-e7"
  //     },
  //     {
  //       id: 3,
  //       name: "SFP+ Module",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-speed 10Gbps SFP+ module for fiber connectivity.",
  //       specs: [
  //         "10Gbps support",
  //         "Multi-mode fiber",
  //         "Hot-swappable"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
  //         { label: "Port Layout 1 GbE RJ45", value: "16 (8 PoE+; 8 PoE++) (1G/100M/10M)" },
  //         { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE++) (2.5G/1G/100M/10M)" },
  //         { label: "Port Layou 10G SFP+", value: "2 (10G/1G" },
  //         { label: "Switching Capacity", value: "112 Gbps" },
  //         { label: "Total Non-Blocking Throughput", value: "56 Gbps" },
  //         { label: "DHCP Server (Local Networks)", value: "✓" },
  //         { label: "DHCP Relay", value: "✓" },
  //         { label: "LACP Port Aggregation", value: "✓" },
  //         { label: "STP & RSTP", value: "✓" },
  //         { label: "Max. Power Consumption", value: "50W (Excluding PoE Output) 450W (Including PoE Output)" },
  //         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
  //         { label: "Application Requirements UniFi Network", value: "Version 8.0.24 and later" },
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     },
  //     {
  //       id: 4,
  //       name: "UniFi Etherlighting Patch Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Nano-thin patch cable with 10 GbE support, designed to showcase Etherlighting™ effects.",
  //       specs: [
  //         "Translucent booted RJ45 for optimal Etherlighting™ brightness",
  //         "— 2.5 mm outer diameter for 0.15-8 m lengths",
  //         "— 2.9 mm outer diameter for 12-15 m lengths",
  //         "Length: 0.15 to 15 m"
  //       ],
  //       detailedSpecs: [
  //         { label: "Available Lengths", value: "End-to-end: 0.15, 0.3, 1, 2, 3, 5, 8, 12, 15 m(0.5, 1, 3.3, 6.6, 9.8, 16.4, 26.2, 39.8, 49.2 ft)" },
  //         { label: "Available Colors", value: "White" },
  //         { label: "Pack Options", value: "Single Unit 24-pack (0.15 m)" },
  //         { label: "Supported Data Rate", value: "10G" },
  //         { label: "Supported PoE type", value: "Up to PoE+++" },
  //         { label: "Connector", value: "(2) Translucent booted RJ45" },
  //         { label: "Operating Environment", value: "Indoor" },
  //         { label: "Cable Jacket Diameter", value: "0.15-8 m: 2.5 mm (0.1')12-15 m: 2.9 mm (0.11')" },
  //         { label: "Cable Jacket Material", value: "Thermoplastic elastomer (TPE)" },
  //         { label: "Cable Shielding Type", value: "UTP" },
  //         { label: "Cable Conductor Type", value: "Stranded copper" },
  //         { label: "Cable Conductor Wire Gage", value: "1-8 m (3-26 ft): 34 AWG12-15 m (39-49 ft): 32 AWG" },
  //         { label: "Cable Bend Radius", value: "Min. 24 mm  (0.94'')" },
  //         { label: "Flame Rating", value: "FT-2(UL1581)" },
  //         { label: "Standars", value: "TIA/EIA-568-B.2 ISO/IEC 11801" },
  //         { label: "Installion Temperature", value: "0 to 60°C (32 to 140°F)" },
  //         { label: "Ambient Storage Temperature", value: "-20 to 80°C (-4 to 176°F)" },
  //         { label: "Ambient Operating Temperature", value: "-10 to 75°C (14 to 167°F)" },
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },

  // Produk Pertama dari WiFi, SF Flagship
  {
    id: "U7-Pro-XGS-B",
    name: "U7 Pro XGS",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/WiFi/4.u7-pro-xgs-b/1.p-utama-u7-pro-xgs-b.jpg",
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
      "/images/WiFi/4.u7-pro-xgs-b/1.p-utama-u7-pro-xgs-b.jpg",
      "/images/WiFi/4.u7-pro-xgs-b/2.p-dimensi-u7-pro-xgs-b.jpg",
      "/images/WiFi/4.u7-pro-xgs-b/3.p-dimensi-u7-pro-xgs-b.jpg",
      "/images/WiFi/4.u7-pro-xgs-b/4.p-spec-u7-pro-xgs-b.jpg",
      "/images/WiFi/4.u7-pro-xgs-b/5.p-spec-u7-pro-xgs-b.jpg",
      "/images/WiFi/4.u7-pro-xgs-b/6.p-spec-u7-pro-xgs-b.jpg",
      "/images/WiFi/4.u7-pro-xgs-b/p-itb-u7-pro-xgs-b.jpg",
      "/images/WiFi/4.u7-pro-xgs-b/p-mkt0-u7-pro-xgs-b.jpg",
      "/images/WiFi/4.u7-pro-xgs-b/p-mkt1-u7-pro-xgs-b.jpg",
      "/images/WiFi/4.u7-pro-xgs-b/p-mkt2-u7-pro-xgs-b.jpg",
      "/images/WiFi/4.u7-pro-xgs-b/p-mkt3-u7-pro-xgs-b.jpg",
      "/images/WiFi/4.u7-pro-xgs-b/p-mkt4-u7-pro-xgs-b.jpg",
      "/images/WiFi/4.u7-pro-xgs-b/p-ov1-u7-pro-xgs-b.png",
      "/images/WiFi/4.u7-pro-xgs-b/p-ov2-u7-pro-xgs-b.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/4.u7-pro-xgs-b/p-ov1-u7-pro-xgs-b.png",
      "/images/WiFi/4.u7-pro-xgs-b/p-ov2-u7-pro-xgs-b.png",
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
      { name: "Device", image: "/images/WiFi/4.u7-pro-xgs-b/p-itb-u7-pro-xgs-b.jpg", },
    ],
  },

  // Produk Kedua dari WiFi, SF Flagship
  {
    id: "U7-Pro-XG-B",
    name: "U7 Pro XG",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/WiFi/5.u7-pro-xg/1.p-utama-u7-pro-xg.jpg",
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
      "/images/WiFi/5.u7-pro-xg/1.p-utama-u7-pro-xg.jpg",
      "/images/WiFi/5.u7-pro-xg/2.p-dimensi-u7-pro-xg.jpg",
      "/images/WiFi/5.u7-pro-xg/3.p-dimensi-u7-pro-xg.jpg",
      "/images/WiFi/5.u7-pro-xg/4.p-spec-u7-pro-xg.jpg",
      "/images/WiFi/5.u7-pro-xg/5.p-deployment-u7-pro-xg.jpg",
      "/images/WiFi/5.u7-pro-xg/p-itb-u7-pro-xg.jpg",
      "/images/WiFi/5.u7-pro-xg/p-mkt0-u7-pro-xg.jpg",
      "/images/WiFi/5.u7-pro-xg/p-mkt1-u7-pro-xg.jpg",
      "/images/WiFi/5.u7-pro-xg/p-mkt2-u7-pro-xg.jpg",
      "/images/WiFi/5.u7-pro-xg/p-mkt3-u7-pro-xg.jpg",
      "/images/WiFi/5.u7-pro-xg/p-mkt4-u7-pro-xg.jpg",
      "/images/WiFi/5.u7-pro-xg/p-ov1-u7-pro-xg.png",
      "/images/WiFi/5.u7-pro-xg/p-ov2-u7-pro-xg.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/5.u7-pro-xg/p-ov1-u7-pro-xg.png",
      "/images/WiFi/5.u7-pro-xg/p-ov2-u7-pro-xg.png",
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
      { name: "Device", image: "/images/WiFi/5.u7-pro-xg/p-itb-u7-pro-xg.jpg" },
    ],
  },


  // Produk Ketiga dari WiFi, SF Flagship
  {
    id: "U7-Pro-Max",
    name: "U7 Pro Max",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/WiFi/6.u7-pro-max/1.p-utama-u7-pro-max.jpg",
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
      "/images/WiFi/6.u7-pro-max/1.p-utama-u7-pro-max.jpg",
      "/images/WiFi/6.u7-pro-max/2.p-dimensi-u7-pro-max.jpg",
      "/images/WiFi/6.u7-pro-max/3.p-dimensi-u7-pro-max.jpg",
      "/images/WiFi/6.u7-pro-max/4.p-spec-u7-pro-max.jpg",
      "/images/WiFi/6.u7-pro-max/5.p-deployment-u7-pro-max.jpg",
      "/images/WiFi/6.u7-pro-max/p-itb-u7-pro-max.jpg",
      "/images/WiFi/6.u7-pro-max/p-mkt0-u7-pro-max.jpg",
      "/images/WiFi/6.u7-pro-max/p-mkt1-u7-pro-max.jpg",
      "/images/WiFi/6.u7-pro-max/p-mkt2-u7-pro-max.jpg",
      "/images/WiFi/6.u7-pro-max/p-mkt3-u7-pro-max.jpg",
      "/images/WiFi/6.u7-pro-max/p-mkt4-u7-pro-max.jpg",
      "/images/WiFi/6.u7-pro-max/p-ov1-u7-pro-max.png",
      "/images/WiFi/6.u7-pro-max/p-ov2-u7-pro-max.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/6.u7-pro-max/p-ov1-u7-pro-max.png",
      "/images/WiFi/6.u7-pro-max/p-ov2-u7-pro-max.png",
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
      { name: "Mounting Kit", image: "/images/WiFi/6.u7-pro-max/p-itb-u7-pro-max.jpg", },
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

  //Produk keempat dari WiFi, SF Flagship
  {
    id: "U7-Pro",
    name: "U7 Pro",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/WiFi/7.u7-pro/1.p-utama-u7-pro.jpg",
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
      "/images/WiFi/7.u7-pro/1.p-utama-u7-pro.jpg",
      "/images/WiFi/7.u7-pro/2.p-dimensi-u7-pro.jpg",
      "/images/WiFi/7.u7-pro/3.p-dimensi-u7-pro.jpg",
      "/images/WiFi/7.u7-pro/4.p-spec-u7-pro.jpg",
      "/images/WiFi/7.u7-pro/5.p-deployment-u7-pro.jpg",
      "/images/WiFi/7.u7-pro/p-itb-u7-pro.jpg",
      "/images/WiFi/7.u7-pro/p-mkt0-u7-pro.jpg",
      "/images/WiFi/7.u7-pro/p-mkt1-u7-pro.jpg",
      "/images/WiFi/7.u7-pro/p-mkt2-u7-pro.jpg",
      "/images/WiFi/7.u7-pro/p-mkt3-u7-pro.jpg",
      "/images/WiFi/7.u7-pro/p-ov1-u7-pro.png",
      "/images/WiFi/7.u7-pro/p-ov2-u7-pro.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/7.u7-pro/p-ov1-u7-pro.png",
      "/images/WiFi/7.u7-pro/p-ov2-u7-pro.png",
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
      { name: "Device", image: "/images/WiFi/7.u7-pro/p-itb-u7-pro.jpg" },
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

  //Produk Keelima dari WiFi, SF Flagship
  {
    id: "U7-LR",
    name: "U7 Long-Range",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/WiFi/8.u7-lr/1.p-utama-u7-lr.jpg",
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
      "/images/WiFi/8.u7-lr/1.p-utama-u7-lr.jpg",
      "/images/WiFi/8.u7-lr/2.p-dimensi-u7-lr.jpg",
      "/images/WiFi/8.u7-lr/3.p-dimensi-u7-lr.jpg",
      "/images/WiFi/8.u7-lr/4.p-spec-u7-lr.jpg",
      "/images/WiFi/8.u7-lr/5.p-deployment-u7-lr.jpg",
      "/images/WiFi/8.u7-lr/p-itb-u7-lr.jpg",
      "/images/WiFi/8.u7-lr/p-mkt0-u7-lr.jpg",
      "/images/WiFi/8.u7-lr/p-mkt1-u7-lr.jpg",
      "/images/WiFi/8.u7-lr/p-mkt2-u7-lr.jpg",
      "/images/WiFi/8.u7-lr/p-mkt3-u7-lr.jpg",
      "/images/WiFi/8.u7-lr/p-mkt4-u7-lr.jpg",
      "/images/WiFi/8.u7-lr/p-ov1-u7-lr.png",
      "/images/WiFi/8.u7-lr/p-ov2-u7-lr.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/8.u7-lr/p-ov1-u7-lr.png",
      "/images/WiFi/8.u7-lr/p-ov2-u7-lr.png",
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
      { name: "Device", image: "/images/WiFi/8.u7-lr/p-itb-u7-lr.jpg", },
    ],
  },

  // Produk Keenam dari WiFi, SF Flagship
  {
    id: "U7-Lite",
    name: "U7 Lite",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/WiFi/9.u7-lite/1.p-utama-u7-lite.jpg",
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
      "/images/WiFi/9.u7-lite/1.p-utama-u7-lite.jpg",
      "/images/WiFi/9.u7-lite/2.p-dimensi-u7-lite.jpg",
      "/images/WiFi/9.u7-lite/3.p-dimensi-u7-lite.jpg",
      "/images/WiFi/9.u7-lite/4.p-spec-u7-lite.jpg",
      "/images/WiFi/9.u7-lite/5.p-deployment-u7-lite.jpg",
      "/images/WiFi/9.u7-lite/p-itb-u7-lite.jpg",
      "/images/WiFi/9.u7-lite/p-mkt0-u7-lite.jpg",
      "/images/WiFi/9.u7-lite/p-mkt1-u7-lite.jpg",
      "/images/WiFi/9.u7-lite/p-mkt2-u7-lite.jpg",
      "/images/WiFi/9.u7-lite/p-mkt3-u7-lite.jpg",
      "/images/WiFi/9.u7-lite/p-mkt4-u7-lite.jpg",
      "/images/WiFi/9.u7-lite/p-mkt5-u7-lite.jpg",
      "/images/WiFi/9.u7-lite/p-ov1-u7-lite.png",
      "/images/WiFi/9.u7-lite/p-ov2-u7-lite.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/9.u7-lite/p-ov1-u7-lite.png",
      "/images/WiFi/9.u7-lite/p-ov2-u7-lite.png",
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
      { name: "Device", image: "/images/WiFi/9.u7-lite/p-itb-u7-lite.jpg" },
    ],
  },

  // Produk Ketujuh dari WiFi, SF Flagship
  {
    id: "U6-Enterprise",
    name: "U6 Enterprise",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/WiFi/10.u6-enterprise/1.p-utama-u6-enterprise.jpg",
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
      "/images/WiFi/10.u6-enterprise/1.p-utama-u6-enterprise.jpg",
      "/images/WiFi/10.u6-enterprise/2.p-dimensi-u6-enterprise.jpg",
      "/images/WiFi/10.u6-enterprise/3.p-dimensi-u6-enterprise.jpg",
      "/images/WiFi/10.u6-enterprise/4.p-spec-u6-enterprise.jpg",
      "/images/WiFi/10.u6-enterprise/5.p-deployment-u6-enterprise.jpg",
      "/images/WiFi/10.u6-enterprise/p-itb-u6-enterprise.jpg",
      "/images/WiFi/10.u6-enterprise/p-mkt0-u6-enterprise.jpg",
      "/images/WiFi/10.u6-enterprise/p-mkt1-u6-enterprise.jpg",
      "/images/WiFi/10.u6-enterprise/p-mkt2-u6-enterprise.jpg",
      "/images/WiFi/10.u6-enterprise/p-mkt3-u6-enterprise.jpg",
      "/images/WiFi/10.u6-enterprise/p-ov1-u6-enterprise.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/10.u6-enterprise/p-ov2-u6-enterprise.jpg",
      "/images/WiFi/10.u6-enterprise/p-ov1-u6-enterprise.png",
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
      { name: "Device", image: "/images/WiFi/10.u6-enterprise/p-itb-u6-enterprise.jpg" },
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


  // Produk Kedelapan dari WiFi,SF Flagship 
  {
    id: "U6-Pro",
    name: "U6 Pro",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/WiFi/11.u6-pro/1.p-utama-u6-pro.jpg",
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
      "/images/WiFi/11.u6-pro/1.p-utama-u6-pro.jpg",
      "/images/WiFi/11.u6-pro/2.p-dimensi-u6-pro.jpg",
      "/images/WiFi/11.u6-pro/3.p-dimensi-u6-pro.jpg",
      "/images/WiFi/11.u6-pro/4.p-spec-u6-pro.jpg",
      "/images/WiFi/11.u6-pro/5.p-deployment-u6-pro.jpg",
      "/images/WiFi/11.u6-pro/p-itb-u6-pro.jpg",
      "/images/WiFi/11.u6-pro/p-mkt0-u6-pro.jpg",
      "/images/WiFi/11.u6-pro/p-mkt1-u6-pro.jpg",
      "/images/WiFi/11.u6-pro/p-mkt2-u6-pro.jpg",
      "/images/WiFi/11.u6-pro/p-mkt3-u6-pro.jpg",
      "/images/WiFi/11.u6-pro/p-ov1-u6-pro.png",
      "/images/WiFi/11.u6-pro/p-ov2-u6-pro.jpg",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/11.u6-pro/p-ov2-u6-pro.jpg",
      "/images/WiFi/11.u6-pro/p-ov1-u6-pro.png",
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
      { name: "Device", image: "/images/WiFi/11.u6-pro/p-itb-u6-pro.jpg" },
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

  // Produk Kesembilan dari WiFi, SF Flagship
  {
    id: "U6+",
    name: "U6+",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/WiFi/12.u6+/1.p-utama-u6-plus.jpg",
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
      "/images/WiFi/12.u6+/1.p-utama-u6-plus.jpg",
      "/images/WiFi/12.u6+/2.p-dimensi-u6-plus.jpg",
      "/images/WiFi/12.u6+/3.p-dimensi-u6-plus.jpg",
      "/images/WiFi/12.u6+/4.p-spec-u6-plus.jpg",
      "/images/WiFi/12.u6+/5.p-deployment-u6-plus.jpg",
      "/images/WiFi/12.u6+/p-itb-u6-plus.jpg",
      "/images/WiFi/12.u6+/p-mkt0-u6-plus.jpg",
      "/images/WiFi/12.u6+/p-mkt1-u6-plus.jpg",
      "/images/WiFi/12.u6+/p-mkt2-u6-plus.jpg",
      "/images/WiFi/12.u6+/p-mkt3-u6-plus.jpg",
      "/images/WiFi/12.u6+/p-mkt4-u6-plus.jpg",
      "/images/WiFi/12.u6+/p-ov1-u6-plus.png",
      "/images/WiFi/12.u6+/p-ov2-u6-plus.jpg",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/12.u6+/p-ov2-u6-plus.jpg",
      "/images/WiFi/12.u6+/p-ov1-u6-plus.png",
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
      { name: "Device", image: "/images/WiFi/12.u6+/p-itb-u6-plus.jpg" },
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

  // Produk Kesepuluh dari WiFi, SF Flagship
  {
    id: "UAP-AC-PRO",
    name: "AC Pro",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/WiFi/13.uap-ac-pro/1.p-utama-uap-ac-pro.jpg",
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
      "/images/WiFi/13.uap-ac-pro/1.p-utama-uap-ac-pro.jpg",
      "/images/WiFi/13.uap-ac-pro/2.p-dimensi-uap-ac-pro.jpg",
      "/images/WiFi/13.uap-ac-pro/3.p-dimensi-uap-ac-pro.jpg",
      "/images/WiFi/13.uap-ac-pro/4.p-spec-uap-ac-pro.jpg",
      "/images/WiFi/13.uap-ac-pro/5.p-deployment-uap-ac-pro.jpg",
      "/images/WiFi/13.uap-ac-pro/p-mkt0-uap-ac-pro.jpg",
      "/images/WiFi/13.uap-ac-pro/p-mkt1-uap-ac-pro.jpg",
      "/images/WiFi/13.uap-ac-pro/p-mkt2-uap-ac-pro.jpg",
      "/images/WiFi/13.uap-ac-pro/p-mkt3-uap-ac-pro.jpg",
      "/images/WiFi/13.uap-ac-pro/p-ov1-uap-ac-pro.png",
      "/images/WiFi/13.uap-ac-pro/p-ov2-uap-ac-pro.jpg",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/13.uap-ac-pro/p-ov2-uap-ac-pro.jpg",
      "/images/WiFi/13.uap-ac-pro/p-ov1-uap-ac-pro.png",
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

  // Produk Pertama dari WiFi, SF Wall
  {
    id: "U7-Pro-XG-Wall",
    name: "U7 Pro XG Wall",
    category: "WiFi",
    subfilter: "Wall",
    image: "/images/WiFi/14.u7-pro-xg-wall/1.p-utama-u7-pro-xg-wall.jpg",
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
      "/images/WiFi/14.u7-pro-xg-wall/1.p-utama-u7-pro-xg-wall.jpg",
      "/images/WiFi/14.u7-pro-xg-wall/2.p-dimensi-u7-pro-xg-wall.jpg",
      "/images/WiFi/14.u7-pro-xg-wall/3.p-spec-u7-pro-xg-wall.jpg",
      "/images/WiFi/14.u7-pro-xg-wall/4.p-deployment-u7-pro-xg-wall.jpg",
      "/images/WiFi/14.u7-pro-xg-wall/p-itb-u7-pro-xg-wall.jpg",
      "/images/WiFi/14.u7-pro-xg-wall/p-mkt0-u7-pro-xg-wall.jpg",
      "/images/WiFi/14.u7-pro-xg-wall/p-mkt1-u7-pro-xg-wall.jpg",
      "/images/WiFi/14.u7-pro-xg-wall/p-mkt2-u7-pro-xg-wall.jpg",
      "/images/WiFi/14.u7-pro-xg-wall/p-mkt3-u7-pro-xg-wall.jpg",
      "/images/WiFi/14.u7-pro-xg-wall/p-mkt4-u7-pro-xg-wall.jpg",
      "/images/WiFi/14.u7-pro-xg-wall/p-ov1-u7-pro-xg-wall.png",
      "/images/WiFi/14.u7-pro-xg-wall/p-ov2-u7-pro-xg-wall.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/14.u7-pro-xg-wall/p-ov1-u7-pro-xg-wall.png",
      "/images/WiFi/14.u7-pro-xg-wall/p-ov2-u7-pro-xg-wall.png",
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
      { name: "Device", image: "/images/WiFi/14.u7-pro-xg-wall/p-itb-u7-pro-xg-wall.jpg" },
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


  // Produk Kedua dari WiFi, SF Wall
  {
    id: "U7-Pro-Wall",
    name: "U7 Pro Wall",
    category: "WiFi",
    subfilter: "Wall",
    image: "/images/WiFi/15.u7-pro-wall/1.p-utama-u7-pro-wall.jpg",
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
      "/images/WiFi/15.u7-pro-wall/1.p-utama-u7-pro-wall.jpg",
      "/images/WiFi/15.u7-pro-wall/2.p-dimensi-u7-pro-wall.jpg",
      "/images/WiFi/15.u7-pro-wall/3.p-spec-u7-pro-wall.jpg",
      "/images/WiFi/15.u7-pro-wall/4.p-deployment-u7-pro-wall.jpg",
      "/images/WiFi/15.u7-pro-wall/p-itb-u7-pro-wall.jpg",
      "/images/WiFi/15.u7-pro-wall/p-mkt0-u7-pro-wall.jpg",
      "/images/WiFi/15.u7-pro-wall/p-mkt1-u7-pro-wall.jpg",
      "/images/WiFi/15.u7-pro-wall/p-mkt2-u7-pro-wall.jpg",
      "/images/WiFi/15.u7-pro-wall/p-mkt3-u7-pro-wall.jpg",
      "/images/WiFi/15.u7-pro-wall/p-mkt4-u7-pro-wall.jpg",
      "/images/WiFi/15.u7-pro-wall/p-ov1-u7-pro-wall.png",
      "/images/WiFi/15.u7-pro-wall/p-ov2-u7-pro-wall.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/15.u7-pro-wall/p-ov1-u7-pro-wall.png",
      "/images/WiFi/15.u7-pro-wall/p-ov2-u7-pro-wall.png",
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
      { name: "Device", image: "/images/WiFi/15.u7-pro-wall/p-itb-u7-pro-wall.jpg" },
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


  // Produk Ketiga dari WiFi, SF Wall
  {
    id: "U7-IW",
    name: "U7 In-Wall",
    category: "WiFi",
    subfilter: "Wall",
    image: "/images/WiFi/16.u7-iw/1.p-utama-u7-iw.jpg",
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
      "/images/WiFi/16.u7-iw/1.p-utama-u7-iw.jpg",
      "/images/WiFi/16.u7-iw/2.p-dimensi-u7-iw.jpg",
      "/images/WiFi/16.u7-iw/3.p-spec-u7-iw.jpg",
      "/images/WiFi/16.u7-iw/4.p-deployment-u7-iw.jpg",
      "/images/WiFi/16.u7-iw/p-itb-u7-iw.jpg",
      "/images/WiFi/16.u7-iw/p-mkt0-u7-iw.jpg",
      "/images/WiFi/16.u7-iw/p-mkt1-u7-iw.jpg",
      "/images/WiFi/16.u7-iw/p-mkt2-u7-iw.jpg",
      "/images/WiFi/16.u7-iw/p-mkt3-u7-iw.jpg",
      "/images/WiFi/16.u7-iw/p-mkt4-u7-iw.jpg",
      "/images/WiFi/16.u7-iw/p-ov1-u7-iw.png",
      "/images/WiFi/16.u7-iw/p-ov2-u7-iw.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/16.u7-iw/p-ov1-u7-iw.png",
      "/images/WiFi/16.u7-iw/p-ov2-u7-iw.png",
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
      { name: "Device", image: "/images/WiFi/16.u7-iw/p-itb-u7-iw.jpg" },
    ],
  },


  // Produk Keempat dari WiFi, SF Wall
  {
    id: "U6-Enterprise-IW",
    name: "U6 Enterprise In-Wall",
    category: "WiFi",
    subfilter: "Wall",
    image: "/images/WiFi/17.u6-enterprise-iw/1.p-utama-u6-enterprise-iw.jpg",
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
      "/images/WiFi/17.u6-enterprise-iw/1.p-utama-u6-enterprise-iw.jpg",
      "/images/WiFi/17.u6-enterprise-iw/2.p-dimensi-u6-enterprise-iw.jpg",
      "/images/WiFi/17.u6-enterprise-iw/3.p-spec-u6-enterprise-iw.jpg",
      "/images/WiFi/17.u6-enterprise-iw/4.p-deployment-u6-enterprise-iw.jpg",
      "/images/WiFi/17.u6-enterprise-iw/p-itb-u6-enterprise-iw.jpg",
      "/images/WiFi/17.u6-enterprise-iw/p-mkt0-u6-enterprise-iw.jpg",
      "/images/WiFi/17.u6-enterprise-iw/p-mkt1-u6-enterprise-iw.jpg",
      "/images/WiFi/17.u6-enterprise-iw/p-mkt2-u6-enterprise-iw.jpg",
      "/images/WiFi/17.u6-enterprise-iw/p-mkt3-u6-enterprise-iw.jpg",
      "/images/WiFi/17.u6-enterprise-iw/p-ov1-u6-enterprise-iw.png",
      "/images/WiFi/17.u6-enterprise-iw/p-ov2-u6-enterprise-iw.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/17.u6-enterprise-iw/p-ov1-u6-enterprise-iw.png",
      "/images/WiFi/17.u6-enterprise-iw/p-ov2-u6-enterprise-iw.png",
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
      { name: "Device", image: "/images/WiFi/17.u6-enterprise-iw/p-itb-u6-enterprise-iw.jpg" },
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

  // Produk Kelima dari WiFi, SF Wall
  {
    id: "U6-IW",
    name: "U6 In-Wall",
    category: "WiFi",
    subfilter: "Wall",
    image: "/images/WiFi/18.u6-iw/1.p-utama-u6-iw.jpg",
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
      "/images/WiFi/18.u6-iw/1.p-utama-u6-iw.jpg",
      "/images/WiFi/18.u6-iw/2.p-dimensi-u6-iw.jpg",
      "/images/WiFi/18.u6-iw/3.p-spec-u6-iw.jpg",
      "/images/WiFi/18.u6-iw/4.p-deployment-u6-iw.jpg",
      "/images/WiFi/18.u6-iw/p-itb-u6-iw.jpg",
      "/images/WiFi/18.u6-iw/p-mkt0-u6-iw.jpg",
      "/images/WiFi/18.u6-iw/p-mkt1-u6-iw.jpg",
      "/images/WiFi/18.u6-iw/p-mkt2-u6-iw.jpg",
      "/images/WiFi/18.u6-iw/p-mkt3-u6-iw.jpg",
      "/images/WiFi/18.u6-iw/p-mkt4-u6-iw.jpg",
      "/images/WiFi/18.u6-iw/p-ov1-u6-iw.png",
      "/images/WiFi/18.u6-iw/p-ov2-u6-iw.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/18.u6-iw/p-ov1-u6-iw.png",
      "/images/WiFi/18.u6-iw/p-ov2-u6-iw.png",
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
      { name: "Device", image: "/images/WiFi/18.u6-iw/p-itb-u6-iw.jpg" },
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

  // Produk Pertama dari WiFi, SF Outdoor
  {
    id: "U7-Pro-Outdoor",
    name: "U7 Pro Outdoor",
    category: "WiFi",
    subfilter: "Outdoor",
    image: "/images/WiFi/19.u7prooutdoor/1.p-utama-u7-pro-outdoor.jpg",
    shortDescription:
      "All-weather IP67 WiFi 7 AP with 6 spatial streams, extended-range AFC 6 GHz support, integrated directional super antenna, and articulation mounting bracket.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U7-Pro-Outdoor",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/WiFi/19.u7prooutdoor/1.p-utama-u7-pro-outdoor.jpg",
      "/images/WiFi/19.u7prooutdoor/2.p-spec-u7-pro-outdoor.jpg",
      "/images/WiFi/19.u7prooutdoor/3.p-spec-u7-pro-outdoor.jpg",
      "/images/WiFi/19.u7prooutdoor/4.p-deployment-u7-pro-outdoor.jpg",
      "/images/WiFi/19.u7prooutdoor/5.p-itb-u7-pro-outdoor.jpg",
      "/images/WiFi/19.u7prooutdoor/6.p-itb-u7-pro-outdoor.jpg",
      "/images/WiFi/19.u7prooutdoor/7.p-mkt0-u7-pro-outdoor.jpg",
      "/images/WiFi/19.u7prooutdoor/8.p-mkt1-u7-pro-outdoor.jpg",
      "/images/WiFi/19.u7prooutdoor/9.p-mkt2-u7-pro-outdoor.jpg",
      "/images/WiFi/19.u7prooutdoor/10.p-mkt3-u7-pro-outdoor.jpg",
      "/images/WiFi/19.u7prooutdoor/11.p-mkt4-u7-pro-outdoor.jpg",
      "/images/WiFi/19.u7prooutdoor/12.p-mkt5-u7-pro-outdoor.png",
      "/images/WiFi/19.u7prooutdoor/13.p-mkt6-u7-pro-outdoor.png",
      "/images/WiFi/19.u7prooutdoor/14.p-mkt7-u7-pro-outdoor.png",
      "/images/WiFi/19.u7prooutdoor/15.p-mkt8-u7-pro-outdoor.png",
      "/images/WiFi/19.u7prooutdoor/16.p-mkt9-u7-pro-outdoor.png",
      "/images/WiFi/19.u7prooutdoor/17.p-mkt11-u7-pro-outdoor.png",
      "/images/WiFi/19.u7prooutdoor/18.p-mk12-u7-pro-outdoor.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/19.u7prooutdoor/16.p-mkt9-u7-pro-outdoor.png",
      "/images/WiFi/19.u7prooutdoor/18.p-mk12-u7-pro-outdoor.png",
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "All-weather IP67 WiFi 7 AP with 6 spatial streams, extended-range AFC 6 GHz support, integrated directional super antenna, and articulation mounting bracket."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Without mount: 170 x 208 x 66.5 mm (6.7 x 8.2 x 2.6') With mount: 170 x 208 x 121.8 mm  (6.7 x 8.2 x 4.8')" },
          { label: "WiFi Standard", value: "WiFi 7" },
          { label: "Spatial Streams", value: "6" },
          { label: "Coverage Area", value: "465 m² (5,000 ft²)" },
          { label: "Max. Client Count", value: "300+" },
          { label: "Uplink", value: "2.5 GbE" },
          { label: "Mounting", value: "Wall, Pole (Mounts Included)" },
          { label: "Weatherproofing", value: "IPX6 IP67 (With cable-gland door kit)" },
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

          { label: "Antenna Gain 6 GHz", value: "Directional internal: 10 dBi, 90° x 45°" },
          { label: "Antenna Gain 5 GHz", value: "Directional internal: 11 dBi, 90° x 45° External omni: 8 dBi, 360° x 15°" },
          { label: "Antenna Gain 2.4 GHz", value: "Directional internal: 8 dBi, 90° x 90° External omni: 6 dBi, 360° x 15°" },

          { label: "Max. TX Power 6 GHz", value: "26 dBm" },
          { label: "Max. TX Power 5 GHz", value: "26 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "23 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11ax (WiFi 7)", value: "7.3 Mbps to 5.8 Gbps (MCS0 - MCS13 NSS1/2, EHT 20/40/80/160/240/320)" },
          { label: "Supported Data Rates 802.11ax (WiFi 6/6E)", value: "7.3 Mbps to 2.4 Gbps (MCS0 - MCS11 NSS1/2, HE 20/40/80/160)" },
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
          { label: "Max. Power Consumption", value: "21W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Networking Interface", value: "(1) 1/2.5 GbE RJ45 port" },
          { label: "Weight", value: "Device: 1.2 kg (2.6 lb) With mount: 1.33 kg (2.9 lb)" },
          { label: "Wind Loading", value: "74.6 N at 200 km/h (16.8 lbf at 125 mph)" },
          { label: "Pole Mount Diameter", value: "1–2.5' (25–63.5 mm)" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "UV-stabilized polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "UV-stabilized polycarbonate" },
          { label: "LEDs System", value: "(1) Power: White/Blue (4) Mesh signal: Blue" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC" },
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
      { name: "Device", image: "/images/WiFi/19.u7prooutdoor/5.p-itb-u7-pro-outdoor.jpg",
 },
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
        id: 3,
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
    ]
  },

  // Produk Kedua dari WiFi, SF Outdoor
  {
    id: "U7-Outdoor",
    name: "U7 Outdoor",
    category: "WiFi",
    subfilter: "Outdoor",
    image: "/images/WiFi/20.u7outdoor/1.p-utama-u7-outdoor.jpg",
    shortDescription:
      "All-weather WiFi 7 AP with 4 spatial streams, an integrated directional super antenna, and versatile mounting options.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U7-Outdoor",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/WiFi/20.u7outdoor/1.p-utama-u7-outdoor.jpg",
      "/images/WiFi/20.u7outdoor/2.p-spec-u7-outdoor.jpg",
      "/images/WiFi/20.u7outdoor/3.p-spec-u7-outdoor.jpg",
      "/images/WiFi/20.u7outdoor/4.p-spec-u7-outdoor.jpg",
      "/images/WiFi/20.u7outdoor/5.p-deployment-u7-outdoor.jpg",
      "/images/WiFi/20.u7outdoor/6.p-itb-u7-outdoor.jpg",
      "/images/WiFi/20.u7outdoor/7.p-mkt0-u7-outdoor.jpg",
      "/images/WiFi/20.u7outdoor/8.p-mkt1-u7-outdoor.jpg",
      "/images/WiFi/20.u7outdoor/9.p-mkt2-u7-outdoor.jpg",
      "/images/WiFi/20.u7outdoor/10.p-mkt3-u7-outdoor.jpg",
      "/images/WiFi/20.u7outdoor/11.p-mkt4-u7-outdoor.jpg",
      "/images/WiFi/20.u7outdoor/12.p-mkt5-u7-outdoor.jpg",
      "/images/WiFi/20.u7outdoor/13.p-mkt6-u7-outdoor.jpg",
      "/images/WiFi/20.u7outdoor/14.p-mkt7-u7-outdoor.jpg",
      "/images/WiFi/20.u7outdoor/15.p-mkt8-u7-outdoor.jpg",
      "/images/WiFi/20.u7outdoor/16.p-mkt9-u7-outdoor.jpg",
      "/images/WiFi/20.u7outdoor/17.p-mkt11-u7-outdoor.jpg",
      "/images/WiFi/20.u7outdoor/18.p-mkt12-u7-outdoor.jpg",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/20.u7outdoor/15.p-mkt8-u7-outdoor.jpg",
      "/images/WiFi/20.u7outdoor/16.p-mkt9-u7-outdoor.jpg",
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material UV-stabilized polycarbonate, aluminum alloy"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "170 x 208 x 54.5 mm (6.7 x 8.2 x 2.1')" },
          { label: "WiFi Standard", value: "WiFi 7" },
          { label: "Spatial Streams", value: "4" },
          { label: "Coverage Area", value: "465 m² (5,000 ft²)" },
          { label: "Max. Client Count", value: "250+" },
          { label: "Uplink", value: "2.5 GbE" },
          { label: "Mounting", value: "Wall, Pole (Mounts Included)" },
          { label: "Weatherproofing", value: "IPX6" },
          { label: "Power Method", value: "PoE+" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 5 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 5 GHz", value: "4.3 Gbps (BW240)" },
          { label: "Max. Data Rate 2.4 GHz", value: "688 Mbps (BW40)" },

          { label: "Antenna Gain 5 GHz", value: "Directional internal: 12.5 dBi, 45° x 45° External omni: 4 dBi, 360° x 30°" },
          { label: "Antenna Gain 2.4 GHz", value: "Directional internal: 8 dBi, 90° x 90° External omni: 3 dBi, 360° x 30°" },

          { label: "Max. TX Power 5 GHz", value: "26 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "23 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11ax (WiFi 7)", value: "7.3 Mbps to 4.3 Gbps (MCS0 - MCS13 NSS1/2, EHT 20/40/80/160/240)" },
          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 2.4 Gbps (MCS0 - MCS11 NSS1/2, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 1.7 Gbps (MCS0 - MCS9 NSS1/2, VHT 20/40/80/160)6.5 Mbps to 3.4 Gbps (MCS0 - MCS9 NSS1/2/3/4, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 300 Mbps (MCS0 - MCS15, HT 20/40)" },
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
          { label: "Max. Power Consumption", value: "19W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Networking Interface", value: "(1) 1/2.5 GbE RJ45 port" },
          { label: "Weight", value: "1.2 kg (2.6 lb)" },
          { label: "Wind Loading", value: "74.6 N at 200 km/h (16.8 lbf at 125 mph)" },
          { label: "Pole Mount Diameter", value: "1–2.36' (25–60 mm)" },
          { label: "Antennas", value: "(1) Directional internal antenna (2) External omni antennas (2) RP-SMA connectors for external antenna" },
          { label: "Antenna beamwidth 5 GHz", value: "45°" },
          { label: "Antenna beamwidth 2.4 GHz", value: "90°" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "UV-stabilized polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Polycarbonate, SGCC steel" },
          { label: "LEDs System", value: "(1) Power: White/Blue (1) System: White/Blue (4) Mesh Signal: Blue" },
          { label: "Channel BandWidth", value: "HT 20/40, VHT 20/40/80/160, HE 20/40/80/160, EHT 20/40/80/160/240 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 08999-24-08356" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz" },
          { label: "Ambient Operating Temperature", value: "-30 to 60° C (-22 to 140° F)" },
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
      { name: "Device", image: "/images/WiFi/20.u7outdoor/6.p-itb-u7-outdoor.jpg",
 }, 
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
      {
        id: 8,
        name: "UniFi Patch Cable Outdoor",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Rugged, outdoor patch cable designed to function in the harshest environments.",
        specs: [
          "Shielded RJ45",
          "Insulated, weatherpoof jacket",
          "Internal foil shielding and drain wire for increased ESD damage protection",
          "Cable Lenghth: 1 to 8 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },

  // Produk Ketiga dari WiFi, SF Outdoor
  {
    id: "U6-Mesh-Pro",
    name: "U6 Mesh Pro",
    category: "WiFi",
    subfilter: "Outdoor",
    image: "/images/WiFi/21.u6meshpro/1.p-utama-u6-mesh-pro.jpg",
    shortDescription:
      "Indoor/outdoor WiFi 6 AP with 4 spatial streams, an integrated super antenna, and a gigabit passthrough port.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],


    // SKU produk
    sku: "U6-Mesh-Pro",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/WiFi/21.u6meshpro/1.p-utama-u6-mesh-pro.jpg",
      "/images/WiFi/21.u6meshpro/2.p-spec-u6-mesh-pro.jpg",
      "/images/WiFi/21.u6meshpro/3.p-spec-u6-mesh-pro.jpg",
      "/images/WiFi/21.u6meshpro/4.p-itb-u6-mesh-pro.jpg",
      "/images/WiFi/21.u6meshpro/5.p-mkt0-u6-mesh-pro.jpg",
      "/images/WiFi/21.u6meshpro/6.p-mkt1-u6-mesh-pro.jpg",
      "/images/WiFi/21.u6meshpro/7.p-mkt2-u6-mesh-pro.jpg",
      "/images/WiFi/21.u6meshpro/8.p-mkt3-u6-mesh-pro.jpg",
      "/images/WiFi/21.u6meshpro/9.p-mkt4-u6-mesh-pro.jpg",
      "/images/WiFi/21.u6meshpro/10.p-mkt5-u6-mesh-pro.jpg",
      "/images/WiFi/21.u6meshpro/11.p-mkt6-u6-mesh-pro.jpg",
      "/images/WiFi/21.u6meshpro/12.p-mkt7-u6-mesh-pro.jpg",
      "/images/WiFi/21.u6meshpro/13.p-mkt8-u6-mesh-pro.jpg",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/21.u6meshpro/8.p-mkt3-u6-mesh-pro.jpg",
      "/images/WiFi/21.u6meshpro/10.p-mkt5-u6-mesh-pro.jpg",
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material UV-stabilized polycarbonate"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "343.2 x 181.2 x 60.2 mm (13.5 x 7.1 x 2.4')" },
          { label: "WiFi Standard", value: "WiFi 6" },
          { label: "Spatial Streams", value: "4" },
          { label: "Coverage Area", value: "185 m² (2,000 ft²)" },
          { label: "Max. Client Count", value: "250+" },
          { label: "Uplink", value: "GbE" },
          { label: "Mounting", value: "Wall, Pole (Mounts Included)" },
          { label: "Weatherproofing", value: "IPX6" },
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

          { label: "Antenna Gain 5 GHz", value: "8 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "8 dBi" },

          { label: "Max. TX Power 5 GHz", value: "27 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "22 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 2.4 Gbps (MCS0 - MCS11 NSS1/2, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 1.7 Gbps (MCS0 - MCS9 NSS1/2, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 300 Mbps (MCS0 - MCS15, HT 20/40)" },
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
          { label: "Includes PoE Adapter", value: "✓" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Networking Interface", value: "(2) GbE RJ45 ports" },
          { label: "Weight", value: "819 g (1.8 lb)" },
          { label: "Pole Mount Diameter", value: "1–2.5' (25–63.5 mm)" },
          { label: "Management", value: "Ethernet WiFi" },
          { label: "Enclosure Material", value: "UV-stabilized polycarbonate" },
          { label: "Mount Material", value: "Aluminum alloy, steel" },
          { label: "LEDs System", value: "White/Blue" },
          { label: "Channel BandWidth", value: "HT 20/40, VHT 20/40/80/160, HE 20/40/80/160 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 08999-24-08356" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz" },
          { label: "Ambient Operating Temperature", value: "-30 to 60° C (-22 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 8.1.127 and later" },
        ]
      }
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image:"/images/WiFi/21.u6meshpro/4.p-itb-u6-mesh-pro.jpg", }, 
    ],

    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "UniFi Patch Cable Outdoor",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Rugged, outdoor patch cable designed to function in the harshest environments.",
        specs: [
          "Shielded RJ45",
          "Insulated, weatherpoof jacket",
          "Internal foil shielding and drain wire for increased ESD damage protection",
          "Cable Lenghth: 1 to 8 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
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
      {
        id: 3,
        name: "Optical Data Transport",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Connects remote PoE devices and provides data and power using fiber and DC cabling.",
        specs: [
          "Reliable long-distance Gigabit PoE runs",
          "Dependable 24V/50V passive PoE transport",
          "Enhanced ESD protection and EMI reduction",
          "Works reliably in extreme temperatures (-40 to 60° C)"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "96.4 x 93.5 x 32.4 mm ( 7.7 x 3.7 x 1.3')" },
          { label: "Enclosure Material", value: "Polycarbonat" },
          { label: "Weight", value: "288 g (10.2 oz)" },
          { label: "Weatherproofing", value: "IPX5" },
          { label: "Surge Protection", value: "Built-in high-current gas discharge tube for DC terminal block and PoE port" },
          { label: "Networking Interface", value: "1) 1 Gbps SFP port (1) DC terminal block (1) DC RJ45 port DC injection (1) GbE PoE port (10/100 MbE not supported)" },
          { label: "Input DC Voltage", value: "16–57V" },
          { label: "DC Output", value: "Terminal block, 24V DC/50V DC, 2-wire" },
          { label: "Power Method", value: "DC Terminal Block, 2-Wire, 24V DC/50 VDC DC in RJ45 Port, 2-pair (4, 5+; 7, 8-) (24V DC input), or 4-pair (24V DC/50V DC input) passthrough PoE RJ45 port, 2-pair (4, 5+; 7, 8-) (24V DC input), or 4-pair (24V DC/50V DC input) PoE passthrough" },
          { label: "Power Consumption", value: "1.5W (Typical)" },
          { label: "ESD Protection", value: "± 24kV Contact / Air for Ethernet" },
          { label: "Ambient Operating Temperature ", value: "-40 to 60° C (-40 to 140° F)" },
          { label: "Ambient Operating Humadity", value: "10 to 95% noncondensing" },
          { label: "NDA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Keempat dari WiFi, SF Outdoor
  {
    id: "U6-Mesh",
    name: "U6 Mesh",
    category: "WiFi",
    subfilter: "Outdoor",
    image: "/images/WiFi/22.u6mesh/1.p-utama-u6-mesh.jpg",
    shortDescription:
      "Sleek, indoor/outdoor WiFi 6 AP with 6 spatial streams designed for mesh applications.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U6-Mesh",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/WiFi/22.u6mesh/1.p-utama-u6-mesh.jpg",
      "/images/WiFi/22.u6mesh/2.p-spec-u6-mesh.jpg",
      "/images/WiFi/22.u6mesh/3.p-deployment-u6-mesh.jpg",
      "/images/WiFi/22.u6mesh/4.p-itb-u6-mesh.jpg",
      "/images/WiFi/22.u6mesh/5.p-mkt0-u6-mesh.jpg",
      "/images/WiFi/22.u6mesh/6.p-mkt1-u6-mesh.jpg",
      "/images/WiFi/22.u6mesh/7.p-mkt2-u6-mesh.jpg",
      "/images/WiFi/22.u6mesh/8.p-mkt3-u6-mesh.jpg",
      "/images/WiFi/22.u6mesh/9.p-mkt4-u6-mesh.jpg",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/22.u6mesh/9.p-mkt4-u6-mesh.jpg",
      "/images/WiFi/22.u6mesh/4.p-itb-u6-mesh.jpg",
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Note. Weatherproof when installed LED side up with the included pole/wall mount accessory."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀48.5 x 159.5 mm (⌀1.9 x 6.3')" },
          { label: "WiFi Standard", value: "WiFi 6" },
          { label: "Spatial Streams", value: "6" },
          { label: "Coverage Area", value: "140 m² (1,500 ft²)" },
          { label: "Max. Client Count", value: "250+" },
          { label: "Uplink", value: "GbE" },
          { label: "Mounting", value: "Wall, Pole (Mounts Included)" },
          { label: "Weatherproofing", value: "IPX5" },
          { label: "Power Method", value: "PoE" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 5 GHz", value: "4 x 4 (DL/UL MU-MIMO" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 5 GHz", value: "4.8 Gbps (BW160)" },
          { label: "Max. Data Rate 2.4 GHz", value: "573.5 Mbps (BW40)" },

          { label: "Antenna Gain 5 GHz", value: "5 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "3 dBi" },

          { label: "Max. TX Power 5 GHz", value: "26 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "22 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 4.8 Gbps (MCS0 - MCS11 NSS1/2/3/4, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 3.4 Gbps (MCS0 - MCS9 NSS1/2/3/4, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 300 Mbps (MCS0 - MCS15, HT 20/40)" },
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
          { label: "Includes PoE Adapter", value: "✓" },
          { label: "Supported Voltage Range", value: "44–57V DC" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Weight", value: "400 g (14.1 oz)" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "LEDs System", value: "White/Blue" },
          { label: "Channel BandWidth", value: "HT 20/40, VHT 20/40/80/160, HE 20/40/80/160 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC, Anatel: 02111-22-08356" },
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
      { name: "Device", image: "/images/WiFi/22.u6mesh/4.p-itb-u6-mesh.jpg",
 }, 
    ],

    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Optical Data Transport",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Connects remote PoE devices and provides data and power using fiber and DC cabling.",
        specs: [
          "Reliable long-distance Gigabit PoE runs",
          "Dependable 24V/50V passive PoE transport",
          "Enhanced ESD protection and EMI reduction",
          "Works reliably in extreme temperatures (-40 to 60° C)"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "96.4 x 93.5 x 32.4 mm ( 7.7 x 3.7 x 1.3')" },
          { label: "Enclosure Material", value: "Polycarbonat" },
          { label: "Weight", value: "288 g (10.2 oz)" },
          { label: "Weatherproofing", value: "IPX5" },
          { label: "Surge Protection", value: "Built-in high-current gas discharge tube for DC terminal block and PoE port" },
          { label: "Networking Interface", value: "1) 1 Gbps SFP port (1) DC terminal block (1) DC RJ45 port DC injection (1) GbE PoE port (10/100 MbE not supported)" },
          { label: "Input DC Voltage", value: "16–57V" },
          { label: "DC Output", value: "Terminal block, 24V DC/50V DC, 2-wire" },
          { label: "Power Method", value: "DC Terminal Block, 2-Wire, 24V DC/50 VDC DC in RJ45 Port, 2-pair (4, 5+; 7, 8-) (24V DC input), or 4-pair (24V DC/50V DC input) passthrough PoE RJ45 port, 2-pair (4, 5+; 7, 8-) (24V DC input), or 4-pair (24V DC/50V DC input) PoE passthrough" },
          { label: "Power Consumption", value: "1.5W (Typical)" },
          { label: "ESD Protection", value: "± 24kV Contact / Air for Ethernet" },
          { label: "Ambient Operating Temperature ", value: "-40 to 60° C (-40 to 140° F)" },
          { label: "Ambient Operating Humadity", value: "10 to 95% noncondensing" },
          { label: "NDA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 2,
        name: "UniFi Patch Cable Outdoor",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Rugged, outdoor patch cable designed to function in the harshest environments.",
        specs: [
          "Shielded RJ45",
          "Insulated, weatherpoof jacket",
          "Internal foil shielding and drain wire for increased ESD damage protection",
          "Cable Lenghth: 1 to 8 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 3,
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

  // Produk Kelima dari WiFi, SF Outdoor
  {
    id: "UAP-AC-M",
    name: "AC Mesh",
    category: "WiFi",
    subfilter: "Outdoor",
    image: "/images/WiFi/23.acmesh/1.p-utama-ac-mesh.jpg",
    shortDescription:
      "Compact, indoor/outdoor WiFi 5 AP with 4 spatial streams and optional external antenna support for directional coverage.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],


    // SKU produk
    sku: "UAP-AC-M",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/WiFi/23.acmesh/1.p-utama-ac-mesh.jpg",
      "/images/WiFi/23.acmesh/2.p-spec-ac-mesh.jpg",
      "/images/WiFi/23.acmesh/3.p-deployment-ac-mesh.jpg",
      "/images/WiFi/23.acmesh/4.p-itb-ac-mesh.jpg",
      "/images/WiFi/23.acmesh/5.p-mkt0-ac-mesh.jpg",
      "/images/WiFi/23.acmesh/6.p-mkt1-ac-mesh.jpg",
      "/images/WiFi/23.acmesh/7.p-mkt2-ac-mesh.jpg",
      "/images/WiFi/23.acmesh/8.p-mkt3-ac-mesh.jpg",
      "/images/WiFi/23.acmesh/9.p-mkt4-ac-mesh.jpg",
      "/images/WiFi/23.acmesh/10.p-mk5-ac-mesh.jpg",
      "/images/WiFi/23.acmesh/11.p-mk6-ac-mesh.jpg",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/23.acmesh/6.p-mkt1-ac-mesh.jpg",
      "/images/WiFi/23.acmesh/4.p-itb-ac-mesh.jpg",
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Note. PoE power adapter included with single unit purchase. UMA-D external antenna accessory offers directional coverage."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "353 x 46 x 34.4 mm (13.9 x 1.8 x 1.4')" },
          { label: "WiFi Standard", value: "WiFi 5" },
          { label: "Spatial Streams", value: "4" },
          { label: "Coverage Area", value: "140 m² (1,500 ft²)" },
          { label: "Max. Client Count", value: "200+" },
          { label: "Uplink", value: "GbE" },
          { label: "Mounting", value: "Wall, Pole (Mounts Included)" },
          { label: "Weatherproofing", value: "IPX4" },
          { label: "Power Method", value: "PoE" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 5 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 5 GHz", value: "867 Mbps (BW80)" },
          { label: "Max. Data Rate 2.4 GHz", value: "300 Mbps (BW40)" },

          { label: "Antenna Gain 5 GHz", value: "4 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "3 dBi" },

          { label: "Max. TX Power 5 GHz", value: "20 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "20 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 867 Mbps (MCS0 - MCS9 NSS1/2, VHT 20/40/80)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 300 Mbps (MCS0 - MCS15, HT 20/40)" },
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
          { label: "Max. Power Consumption", value: "8.5W" },
          { label: "Includes PoE Adapter", value: "✓" },
          { label: "Supported Voltage Range", value: "44–57V DC" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Weight", value: "152 g (5.4 oz)" },
          { label: "Pole Mount Diameter", value: "1–3' (25–76 mm)" },
          { label: "Management", value: "Ethernet Bluetooth" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Channel BandWidth", value: "HT 20/40, VHT 20/40/80 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, UKCA, Anatel: 01769-18-08356" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz" },
          { label: "Ambient Operating Temperature", value: "-30 to 70° C (-22 to 158° F)" },
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
      { name: "Device", image: "/images/WiFi/23.acmesh/4.p-itb-ac-mesh.jpg",
 }, 
    ],

    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "UniFi Patch Cable Outdoor",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Rugged, outdoor patch cable designed to function in the harshest environments.",
        specs: [
          "Shielded RJ45",
          "Insulated, weatherpoof jacket",
          "Internal foil shielding and drain wire for increased ESD damage protection",
          "Cable Lenghth: 1 to 8 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
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
      }
    ]
  },

  // Produk Keenam dari WiFi, SF Outdoor
  {
    id: "UK-Ultra",
    name: "Swiss Army Knife",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/WiFi/24.swissarmyknife/1.p-utama-swiss-army-knife.jpg",
    shortDescription:
      "Incredibly compact, indoor/outdoor AP with versatile mounting options and long-range external antenna support.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "UK-Ultra",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/WiFi/24.swissarmyknife/1.p-utama-swiss-army-knife.jpg",
      "/images/WiFi/24.swissarmyknife/2.p-spec-swiss-army-knife.jpg",
      "/images/WiFi/24.swissarmyknife/3.p-spec-swiss-army-knife.jpg",
      "/images/WiFi/24.swissarmyknife/4.p-deployment-swiss-army-knife.jpg",
      "/images/WiFi/24.swissarmyknife/5.p-itb-swiss-army-knife.jpg",
      "/images/WiFi/24.swissarmyknife/6.p-mkt0-swiss-army-knife.jpg",
      "/images/WiFi/24.swissarmyknife/7.p-mkt1-swiss-army-knife.jpg",
      "/images/WiFi/24.swissarmyknife/8.p-mkt2-swiss-army-knife.jpg",
      "/images/WiFi/24.swissarmyknife/9.p-mkt3-swiss-army-knife.jpg",
      "/images/WiFi/24.swissarmyknife/10.p-mk4-swiss-army-knife.jpg",
      "/images/WiFi/24.swissarmyknife/11.p-mkt5-swiss-army-knife.jpg",
      "/images/WiFi/24.swissarmyknife/12.p-mkt6-swiss-army-knife.jpg",
      "/images/WiFi/24.swissarmyknife/13.p-mkt7-swiss-army-knife.jpg",
      "/images/WiFi/24.swissarmyknife/14.p-mkt8-swiss-army-knife.jpg",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/24.swissarmyknife/7.p-mkt1-swiss-army-knife.jpg",
      "/images/WiFi/24.swissarmyknife/5.p-itb-swiss-army-knife.jpg",
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material UV-stabilized polycarbonate",
      "Mount Material Polycarbonate, SGCC steel, plastic",
      "Power Method PoE"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "137 x 84 x 34 mm (5.4 x 3.3 x 1.3')" },
          { label: "WiFi Standard", value: "WiFi 5" },
          { label: "Spatial Streams", value: "4" },
          { label: "Coverage Area", value: "115 m² (1,250 ft²)" },
          { label: "Max. Client Count", value: "200+" },
          { label: "Uplink", value: "GbE" },
          { label: "Mounting", value: "Ceiling, Wall, Pole, Table (With Accessory) (Mounts Included) Desktop Stand (Optional)" },
          { label: "Weatherproofing", value: "IPX6" },
          { label: "Power Method", value: "PoE" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 5 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },
          { label: "MIMO 2.4 GHz", value: "2 x 2 (DL/UL MU-MIMO)" },

          { label: "Max. Data Rate 5 GHz", value: "866.7 Mbps (BW80)" },
          { label: "Max. Data Rate 2.4 GHz", value: "300 Mbps (BW40)" },

          { label: "Antenna Gain 5 GHz", value: "6.1 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "4.7 dBi" },

          { label: "Max. TX Power 5 GHz", value: "20 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "20 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 867 Mbps (MCS0 - MCS9 NSS1/2, VHT 20/40/80)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 300 Mbps (MCS0 - MCS15, HT 20/40)" },
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
          { label: "Max. Power Consumption", value: "8W" },
          { label: "Supported Voltage Range", value: "44–57V DC" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Weight", value: "173 g (6.1 oz)" },
          { label: "WiFi Loading", value: "33.2 N at 200 km/h (7.5 lbf at 125 mph)" },
          { label: "Pole Mount Diameter", value: "1~2' (25–50 mm)" },
          { label: "Antennas", value: "(1) Internal antenna (2) RP-SMA connectors" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "UV-stabilized polycarbonate" },
          { label: "LEDs System", value: "(1) Power: White/Blue (4) Mesh Signal: Blue" },
          { label: "Channel BandWidth", value: "HT 20/40, VHT 20/40/80, HE 20/40/80 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 06237-24-08356" },
          { label: "Operating Frequency", value: "US/CA: 2400 - 2472 MHz U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz Worldwide: 2400 - 2483.5 MHz 5150 - 5850 MHz" },
          { label: "Ambient Operating Temperature", value: "-40 to 60° C (-40 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 7.5.187 and later" },
        ]
      }
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/WiFi/24.swissarmyknife/5.p-itb-swiss-army-knife.jpg",
 }, 
    ],

    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "UniFi Patch Cable Outdoor",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Rugged, outdoor patch cable designed to function in the harshest environments.",
        specs: [
          "Shielded RJ45",
          "Insulated, weatherpoof jacket",
          "Internal foil shielding and drain wire for increased ESD damage protection",
          "Cable Lenghth: 1 to 8 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
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
      }
    ]
  },

  // Produk Ketujuh dari WiFi, SF Outdoor
  {
    id: "U7-Mesh",
    name: "U7 Mesh",
    category: "WiFi",
    subfilter: "Outdoor",
    image: "/images/WiFi/25.u7mesh/1.p-utama-u7-mesh.jpg",
    shortDescription:
      "Compact indoor/outdoor WiFi 7 AP with integrated long-range antenna system.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U7-Mesh",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/WiFi/25.u7mesh/1.p-utama-u7-mesh.jpg",
      "/images/WiFi/25.u7mesh/2.p-spec-u7-mesh.jpg",
      "/images/WiFi/25.u7mesh/3.p-deployment-u7-mesh.jpg",
      "/images/WiFi/25.u7mesh/4.p-itb-u7-mesh.jpg",
      "/images/WiFi/25.u7mesh/5.p-mkt0-u7-mesh.jpg",
      "/images/WiFi/25.u7mesh/6.p-mkt1-u7-mesh.jpg",
      "/images/WiFi/25.u7mesh/7.p-mkt2-u7-mesh.jpg",
      "/images/WiFi/25.u7mesh/8.p-mkt3-u7-mesh.jpg",
      "/images/WiFi/25.u7mesh/9.p-mkt4-u7-mesh.jpg",
      "/images/WiFi/25.u7mesh/10.p-mkt5-u7-mesh.jpg",
      "/images/WiFi/25.u7mesh/11.p-mkt6-u7-mesh.jpg",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/25.u7mesh/6.p-mkt1-u7-mesh.jpg",
      "/images/WiFi/25.u7mesh/4.p-itb-u7-mesh.jpg",
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material UV-stabilized polycarbonate",
      "Power Method PoE",
      "Weatherproofing IPX6 (Installed with the outdoor mount)",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀48.5 x 159.5 mm (⌀1.9 x 6.3')" },
          { label: "WiFi Standard", value: "WiFi 7" },
          { label: "Spatial Streams", value: "4" },
          { label: "Coverage Area", value: "140 m² (1,500 ft²)" },
          { label: "Max. Client Count", value: "200+" },
          { label: "Uplink", value: "2.5 GbE" },
          { label: "Mounting", value: "Wall, Pole, Table stand (Mounts included)" },
          { label: "Weatherproofing", value: "IPX6 (Installed with the outdoor mount)" },
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

          { label: "Antenna Gain 5 GHz", value: "Omnidirectional: 6 dBi Directional: 10 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "3 dBi" },

          { label: "Max. TX Power 5 GHz", value: "24 dBm" },
          { label: "Max. TX Power 2.4 GHz", value: "23 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11be (WiFi 7)", value: "7.3 Mbps to 4.3 Gbps (MCS0 - MCS13 NSS1/2, EHT 20/40/80/160/240)" },
          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 2.4 Gbps (MCS0 - MCS11 NSS1/2, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 1.7 Gbps (MCS0 - MCS9 NSS1/2, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 300 Mbps (MCS0 - MCS15, HT 20/40)" },
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
          { label: "Include PoE Adapter", value: "✓" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Networking Interface", value: "(1) 2.5 GbE RJ45 port" },
          { label: "Weight", value: "313 g (11 oz)" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "UV-stabilized polycarbonate" },
          { label: "Mount Material", value: "UV-stabilized polycarbonate" },
          { label: "LEDs System", value: "W/B" },
          { label: "Channel BandWidth", value: "HT 20/40, VHT 20/40/80/160, HE 20/40/80/160, EHT 20/40/80/160/240 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
          { label: "Ambient Operating Temperature", value: "-30 to 60° C (-22 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 10.1.85 and later" },
          { label: "Application Requirements Mobile App", value: "UniFi iOS™: Version 10.32.1 and later Android™: Version 10.35.1 and later" },
        ]
      }
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/WiFi/25.u7mesh/4.p-itb-u7-mesh.jpg",}, 
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
    ]
  },

  // Produk Pertama dari WiFi, SF Mega Capacity
  {
    id: "E7-Audience",
    name: "E7 Audience",
    category: "WiFi",
    subfilter: "Mega Capacity",
    image: "/images/WiFi/26.e7audience/1.p-utama-e7audienceus.jpg",
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
      "/images/WiFi/26.e7audience/1.p-utama-e7audienceus.jpg",
      "/images/WiFi/26.e7audience/2.p-dimensi-e7audienceus.jpg",
      "/images/WiFi/26.e7audience/3.p-spec-e7audienceus.jpg",
      "/images/WiFi/26.e7audience/4.p-development-e7audienceus.jpg",
      "/images/WiFi/26.e7audience/p-itb-e7audienceus.jpg",
      "/images/WiFi/26.e7audience/p-mkt0-e7audienceus.jpg",
      "/images/WiFi/26.e7audience/p-mkt1-e7audienceus.jpg",
      "/images/WiFi/26.e7audience/p-mkt3-e7audienceus.jpg",
      "/images/WiFi/26.e7audience/p-mkt4-e7audienceus.jpg",
      "/images/WiFi/26.e7audience/p-mkt5-e7audienceus.jpg",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/26.e7audience/p-mkt1-e7audienceus.jpg",
      "/images/WiFi/26.e7audience/p-itb-e7audienceus.jpg",
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material UV-stabilized polycarbonate, aluminum alloy",
      "Power Method PoE++",
      "Weatherproofing IP68",
      "Note. 6 GHz operation is supported in these countries. Long-range 6 GHz performance with AFC available in FCC/IC region only."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Device: 474.1 x 265.5 x 42.2 mm (18.7 x 10.5 x 1.7') Bracket: 150.4 x 113.6 x 125 mm (5.9 x 4.5 x 4.9')" },
          { label: "WiFi Standard", value: "WiFi 7" },
          { label: "Spatial Streams", value: "12" },
          { label: "Coverage Area", value: "465 m² (5,000 ft²)" },
          { label: "Max. Client Count", value: "1500+" },
          { label: "Uplink", value: "10 GbE 1 GbE" },
          { label: "Mounting", value: "Wall, Pole (Mounts Included) VESA (Optional)" },
          { label: "Weatherproofing", value: "IP6" },
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
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 300 Mbps (MCS0 - MCS15, HT 20/40)" },
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
          { label: "Networking Interface", value: "(1) 10 GbE RJ45 port (1) GbE RJ45 port" },
          { label: "PRISM™ RF Filtering", value: "✓" },
          { label: "Weight", value: "Device: 3.3 kg (7.3 lb) With mount: 4.3 kg (9.5 lb)" },
          { label: "Wind Loading", value: "164.75 N at 200 km/h (37 lbf at 125 mph)" },
          { label: "Pole Mount Diameter", value: "1–3' (25–76 mm)" },
          { label: "Antennas", value: "(1) Internal with directional patterns" },
          { label: "Management", value: "Ethernet" },
          { label: "Enclosure Material", value: "UV-stabilized polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Aluminum alloy" },
          { label: "LEDs System", value: "R/G/B" },
          { label: "Channel BandWidth", value: "VHT 20/40/80/160, HE 20/40/80/160, EHT 20/40/80/160/240/320 (MHz)" },
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
      { name: "Device", image: "/images/WiFi/26.e7audience/p-itb-e7audienceus.jpg",
 }, 
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
      },
      {
        id: 5,
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
    ]
  },

  // // Produk Kedua dari WiFi, SF Mega Capacity
  // {
  //   id: "E7-Audience-Indoor",
  //   name: "E7 Audience Indoor",
  //   category: "WiFi",
  //   subfilter: "Mega Capacity",
  //   image: "/images/products/Product-UDR-5G-Max.png",
  //   shortDescription:
  //     "Enterprise-grade access point designed for high-density environments with 12-stream WiFi 7 performance, expanded 6 GHz indoor spectrum capability, a 10 GbE uplink, and a redundant GbE port for high availability.",
  //   specs: [
  //     { label: "Throughput", value: "3.5 Gbps IPS" },
  //     { label: "PoE", value: "2x PoE+, 6x PoE" },
  //     { label: "WAN", value: "2.5 GbE RJ45" },
  //     { label: "Storage", value: "128GB SSD Integrated" },
  //   ],

  //   // SKU produk
  //   sku: "E7-Audience-Indoor",

  //   // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
  //   images: [
  //     "/images/products/Product-UDR-5G-Max.png",
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
  //     "Enclosure Material UV-stabilized polycarbonate, aluminum alloy",
  //     "Power Method PoE++",
  //     "Weatherproofing IP68",
  //     "Note. 6 GHz operation is supported in these countries. Long-range 6 GHz performance with AFC available in FCC/IC region only."
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Dimensions", value: "Device: 474.1 x 239.4 x 42.2 mm (18.7 x 9.4 x 1.7') Bracket: 150.4 x 113.6 x 125 mm  (5.9 x 4.5 x 4.9')" },
  //         { label: "WiFi Standard", value: "WiFi 7" },
  //         { label: "Spatial Streams", value: "12" },
  //         { label: "Coverage Area", value: "465 m² (5,000 ft²)" },
  //         { label: "Max. Client Count", value: "1500+" },
  //         { label: "Uplink", value: "10 GbE 1 GbE" },
  //         { label: "Mounting", value: "Wall, Pole (Mounts Included) VESA (Optional)" },
  //         { label: "Weatherproofing", value: "IP6" },
  //         { label: "Power Method", value: "PoE++" }
  //       ]
  //     },
  //     {
  //       title: "Performance",
  //       items: [
  //         { label: "MIMO 6 GHz", value: "Low Band: 4 x 4 (DL/UL MU-MIMO) High Band: 4 x 4 (DL/UL MU-MIMO)" },
  //         { label: "MIMO 5 GHz", value: "4 x 4 (DL/UL MU-MIMO)" },

  //         { label: "Max. Data Rate 6 GHz", value: "Low Band: 11.5 Gbps (BW320) High Band: 11.5 Gbps (BW320)" },
  //         { label: "Max. Data Rate 5 GHz", value: "8.6 Gbps (BW240)" },

  //         { label: "Antenna Gain 6 GHz", value: "Directional internal: 15 dBi, 50° x 50° Directional internal: 11 dBi, 90° x 90°" },
  //         { label: "Antenna Gain 5 GHz", value: "Directional internal: 15 dBi, 50° x 50° Directional internal: 11 dBi, 90° x 90°" },

  //         { label: "Max. TX Power 6 GHz", value: "Low Band: 30 dBm (36 dBm EIRP) High Band: 30 dBm (36 dBm EIRP)" },
  //         { label: "Max. TX Power 5 GHz", value: "30 dBm" },

  //         { label: "Max. BSSIDs", value: "8 per Radio" },

  //         { label: "Supported Data Rates 802.11be (WiFi 7)", value: "7.3 Mbps to 11.5 Gbps (MCS0 - MCS13 NSS1/2/3/4, EHT 20/40/80/160/240/320)" },
  //         { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 4.8 Gbps (MCS0 - MCS11 NSS1/2/3/4, HE 20/40/80/160)" },
  //         { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 3.4 Gbps (MCS0 - MCS9 NSS1/2/3/4, VHT 20/40/80/160)" },
  //         { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 300 Mbps (MCS0 - MCS15, HT 20/40)" },
  //       ]
  //     },
  //     {
  //       title: "Features",
  //       items: [
  //         { label: "Wireless Meshing", value: "✓" },
  //         { label: "Band Steering", value: "✓" },
  //         { label: "802.11v BSS Transition Management", value: "✓" },
  //         { label: "802.11r Fast Roaming", value: "✓" },
  //         { label: "802.11k Radio Resource Management (RRM)", value: "✓" },
  //         { label: "Zero-Wait DFS", value: "✓" },
  //         { label: "Advanced Radio Management", value: "✓" },
  //         { label: "Real-Time Spectral Analysis", value: "✓" },
  //         { label: "Passpoint (Hotspot 2.0)", value: "✓" },

  //         { label: "Captive Hotspot Portal Custom Branding Landing Page", value: "✓" },
  //         { label: "Captive Hotspot Portal Voucher Authentication", value: "✓" },
  //         { label: "Captive Hotspot Portal Payment-Based Authentication", value: "✓" },
  //         { label: "Captive Hotspot Portal External Portal Server Support", value: "✓" },
  //         { label: "Captive Hotspot Portal Password Authentication", value: "✓" },
  //         { label: "Captive Hotspot Portal Guest Network Isolation", value: "✓" },
  //         { label: "Private Pre-Shared Key (PPSK)", value: "✓" },

  //         { label: "WiFi Speed Limiting", value: "✓" },
  //         { label: "Client Device Isolation", value: "✓" },
  //         { label: "WiFi Schedules", value: "✓" },
  //         { label: "RADIUS over TLS (RadSec)", value: "✓" },
  //         { label: "Dynamic RADIUS-assigned VLAN", value: "✓" },
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Max. Power Consumption", value: "51W" },
  //         { label: "Supported Voltage Range", value: "42.5–57V DC" },
  //         { label: "Networking Interface", value: "(1) 10 GbE RJ45 port (1) GbE RJ45 port" },
  //         { label: "PRISM™ RF Filtering", value: "✓" },
  //         { label: "Weight", value: "Device: 3.2 kg (7.1 lb) With mount: 4.2 kg (9.3 lb)" },
  //         { label: "Pole Mount Diameter", value: "1–3' (25–76 mm)" },
  //         { label: "Antennas", value: "(1) Internal with directional patterns" },
  //         { label: "Management", value: "Ethernet" },
  //         { label: "Enclosure Material", value: "UV-stabilized polycarbonate, aluminum alloy" },
  //         { label: "Mount Material", value: "Aluminum alloy" },
  //         { label: "LEDs System", value: "R/G/B" },
  //         { label: "Channel BandWidth", value: "VHT 20/40/80/160, HE 20/40/80/160, EHT 20/40/80/160/240/320 (MHz)" },
  //         { label: "NDAA Compliant", value: "✓" },
  //         { label: "Certifications", value: "FCC, IC" },
  //         { label: "Ambient Operating Temperature", value: "-40 to 60° C (-40 to 140° F)" },
  //         { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
  //       ]
  //     },
  //     {
  //       title: " Software",
  //       items: [
  //         { label: "Application Requirements UniFi Network", value: "Version 10.0.162 and later" },
  //         { label: "Application Requirements Mobile App", value: "iOS™ version 10.30.2 and later Android™ version 10.31.4 and later" },
  //       ]
  //     }
  //   ],

  //   // Item yang ada dalam box produk (gambar bisa diganti)
  //   inTheBox: [
  //     { name: "Device", image: "/images/dcs-box.png" },
  //     { name: "Mounting Kit", image: "/images/dcs-box.png" },
  //     { name: "Power Cable", image: "/images/dcs-box.png" },
  //     { name: "Quick Start", image: "/images/dcs-box.png" }
  //   ],

  //   // Addon/aksesori yang tersedia untuk produk ini
  //   addons: [
  //     {
  //       id: 1,
  //       name: "Ethernet Surge Protection Outdoor-20kA",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "ESD protection for outdoor high-speed networks.",
  //       specs: [
  //         "Protects outdoor Ethernet devices, up to 20kA discharge current.",
  //         "(2) Passive, surge-protected RJ45 connections",
  //         "Quick and easy installation",
  //         "Compatible with 10 GbE networks"
  //       ],
  //       detailedSpecs: [
  //         { label: "Networking Interface", value: "(2) RJ45 female connectors" },
  //         { label: "DC Spark-Over Voltage", value: "90V @ 100V/s" },
  //         { label: "Max. Impulse Spark-Over Voltage", value: "700V @ 1kV/µs" },
  //         { label: "Discharge Current", value: "10kA+" },
  //         { label: "Insulation", value: "Max. Resistance: 1G ohm @ 50V" },
  //         { label: "Max. Capacitance", value: "1.0 pF @ 1 MHz" },
  //         { label: "Data Line Protection", value: "Up to 2.5 Gbps" },
  //         { label: "PoE Support", value: "✓" },
  //         { label: "ESD/EMP Protection", value: "Absorbing transient current with response to surge voltage from 100V/s to 1kV/µs" },
  //         { label: "Ambient Operating Temperature", value: "-30 to 65° C (-22 to 149° F)" },
  //         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
  //         { label: "Shock and Vibration Certification", value: "ETSI300-019-1.4 Standard" }
  //       ],
  //       productLink: "/products/mounting-kit"
  //     },
  //     {
  //       id: 2,
  //       name: "Ethernet Surge Protection Outdoor-10kA",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "ESD protection for outdoor high-speed networks.",
  //       specs: [
  //         "Protects outdoor Ethernet devices",
  //         "(2) Passive, surge-protected RJ45 connections",
  //         "Quick and easy installation",
  //         "Compatible with 2.5 GbE networks"
  //       ],
  //       detailedSpecs: [
  //         { label: "Networking Interface", value: "(2) RJ45 female connectors" },
  //         { label: "DC Spark-Over Voltage", value: "90V @ 100V/s" },
  //         { label: "Max. Impulse Spark-Over Voltage", value: "700V @ 1kV/µs" },
  //         { label: "Discharge Current", value: "10kA+" },
  //         { label: "Insulation", value: "Max. Resistance: 1G ohm @ 50V" },
  //         { label: "Max. Capacitance", value: "1.0 pF @ 1 MHz" },
  //         { label: "Data Line Protection", value: "Up to 2.5 Gbps" },
  //         { label: "PoE Support", value: "✓" },
  //         { label: "ESD/EMP Protection", value: "Absorbing transient current with response to surge voltage from 100V/s to 1kV/µs" },
  //         { label: "Ambient Operating Temperature", value: "-30 to 65° C (-22 to 149° F)" },
  //         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
  //         { label: "Shock and Vibration Certification", value: "ETSI300-019-1.4 Standard" }
  //       ],
  //       productLink: "/products/power-cable"
  //     },
  //     {
  //       id: 3,
  //       name: "UniFi Premium Patch Cable Outdoor-B/W",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Ultra-thin, rugged, shielded outdoor patch cable, designed and optimized to perform in the harshest environments for 10 GbE networking.",
  //       specs: [
  //         "Shielded RJ45",
  //         "Insulated, weatherproof jacket",
  //         "Internal foil shielding and drain wire for increased ESD damage protection",
  //         "— 3.5 mm outer diameter for 1-8 m lengths",
  //         "— 3.9 mm outer diameter for 12-15 m lengths",
  //         "Length: 1 to 15 m"
  //       ],
  //       detailedSpecs: [
  //         { label: "Available Lengths", value: "End-to-end: 0.15, 0.3, 1, 2, 3, 5, 8, 12, 15 m (0.5, 1, 3.3, 6.6, 9.8, 16.4, 26.2, 39.8, 49.2 ft)" },
  //         { label: "Available Colors", value: "White" },
  //         { label: "Pack Options", value: "Single Unit 24-Pack (0.15 m)" },
  //         { label: "Supported Data Rate", value: "10G" },
  //         { label: "Supported PoE type", value: "Up to PoE+++" },
  //         { label: "Connector", value: "(2) Translucent booted RJ45" },
  //         { label: "Operating Environment", value: "Indoor" },
  //         { label: "Cable Jacket Diameter", value: "0.15-8 m: 3 mm (0.11') 12-15 m: 2.9 mm (0.11')" },
  //         { label: "Cable Jacket Material", value: "Thermoplastic elastomer (TPE)" },
  //         { label: "Cable Shielding Type", value: "UTP" },
  //         { label: "Cable Conductor Type", value: "Stranded copper" },
  //         { label: "Cable Conductor Wire Gage", value: "1-8 m (3-26 ft): 34 AWG 12-15 m (39-49 ft): 32 AWG" },
  //         { label: "Cable Bend Radius", value: "1-8 m: Min. 21 mm (0.83'')12-15 m: Min. 24 mm (0.94'')" },
  //         { label: "UV Resistance", value: "ASTM G 151/154" },
  //         { label: "Flame Rating", value: "VW-1 (UL1581)" },
  //         { label: "Standars", value: "TIA/EIA-568-B.2 ISO/IEC 11801" },
  //         { label: "Installion Temperature", value: "-20 to 60°C (-4 to 140°F)" },
  //         { label: "Ambient Storage Temperature", value: "-20 to 75°C (-4 to 167°F)" },
  //         { label: "Ambient Operating Temperature", value: "-20 to 60°C (-4 to 140°F)" },
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     },
  //     {
  //       id: 4,
  //       name: "PoE++ Adapter (60W)",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "An adapter that can power UniFi PoE++ devices, reduce dependency on PoE switch power, and provide a Gigabit LAN connection.",
  //       specs: [
  //         "Delivers up to 60W of PoE++",
  //         "Surge, peak pulse, and overcurrent protection",
  //         "Contains RJ45 data input, AC cable with earth ground, and PoE++ output",
  //         "LED indicator for status monitoring"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "106 x 63 x 34 mm (4.2 x 2.5 x 1.3')" },
  //         { label: "Weight", value: "210 g (7.4 oz)" },
  //         { label: "Output Voltage", value: "48V DC @ 0.65A" },
  //         { label: "Rated Voltage", value: "100-240V AC at 50/60Hz" },
  //         { label: "LAN Activity Indicator", value: "—" },
  //         { label: "Gigabit LAN Port", value: "✓" },
  //         { label: "Remote Reset Capability", value: "—" },
  //         { label: "Reset Button", value: "_" },
  //         { label: "2-pair Powering", value: "Pins 1, 2, 4, 5 (+) and 3, 6, 7, 8 (-)" },
  //         { label: "AC Connector", value: "IEC-320 C6" },
  //         { label: "Clamping Protection", value: "11V Data, 60V Power" },
  //         { label: "Data In / PoE", value: "RJ45 Shielded Socket" },
  //         { label: "Input Current", value: "1.3A @ 120V AC" },
  //         { label: "Inrush Current", value: "<100A peak @ 120V AC <200A peak @ 230V AC" },
  //         { label: "Efficiency", value: "85+%" },
  //         { label: "Switching Frequency", value: "65 kHz Max" },
  //         { label: "Output Ripple", value: "1% Max." },
  //         { label: "Line Regulation", value: "≤ 1%" },
  //         { label: "Load Regulation", value: "≤ 3%" },
  //         { label: "Max. PoE+ Wattage per Port by PSE", value: "60W" },
  //         { label: "Max. Surge Discharge", value: "1500A (8/20 μs) power" },
  //         { label: "Peak Pulse Current", value: "36A (10/1000 μs) data" },
  //         { label: "Power Method", value: "Universal AC input, 100–240V AC, 50/60 Hz" },
  //         { label: "Power Supply", value: "AC/DC" },
  //         { label: "Response Time", value: "<1 ns" },
  //         { label: "Shunt Capacitance", value: "<5 pF data" },
  //         { label: "Surge Protection", value: "Difference and common mode" },
  //         { label: "Ambient Storage Temperature", value: "-30 to 70°C (-22 to 158° F)" },
  //         { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
  //         { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing" },
  //         { label: "NDAA Compliant", value: "✓" },
  //         { label: "Certifications", value: "CE, FCC, IC, UL, UKCA, KC, CCC, RoHS" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     },
  //     {
  //       id: 5,
  //       name: "10G PoE++ Adapter (60W)",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "An adapter that can power UniFi PoE++ devices, reduce dependency on PoE switch power, and provide a Multi-Gigabit LAN connection.",
  //       specs: [
  //         "Delivers up to 60W of PoE++",
  //         "Surge, peak pulse, and overcurrent protection",
  //         "Contains RJ45 data input, AC cable with earth ground, and PoE++ output",
  //         "LED indicator for status monitoring"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "106 x 63 x 34 mm (4.2 x 2.5 x 1.3')" },
  //         { label: "Weight", value: "210 g (7.4 oz)" },
  //         { label: "Output Voltage", value: "54V DC at 1.12A" },
  //         { label: "Rated Voltage", value: "100-240V AC at 50/60Hz" },
  //         { label: "LAN Activity Indicator", value: "—" },
  //         { label: "Gigabit LAN Port", value: "✓" },
  //         { label: "Remote Reset Capability", value: "—" },
  //         { label: "Reset Button", value: "_" },
  //         { label: "2-pair Powering", value: "Pins 1, 2, 4, 5 (+) and 3, 6, 7, 8 (-)" },
  //         { label: "Clamping Protection", value: "11V Data, 60V Power" },
  //         { label: "Data In / PoE", value: "RJ45 Shielded Socket" },
  //         { label: "Input Current", value: "1.5A Max." },
  //         { label: "Inrush Current", value: "<150A peak at 230V AC" },
  //         { label: "Efficiency", value: ">88%" },
  //         { label: "Switching Frequency", value: "65 kHz" },
  //         { label: "Output Ripple", value: "1% Max." },
  //         { label: "Line Regulation", value: "≤ 2%" },
  //         { label: "Load Regulation", value: "≤ 5%" },
  //         { label: "Max. PoE+ Wattage per Port by PSE", value: "60W" },
  //         { label: "Max. Surge Discharge", value: "1500A (8/20 μs) power" },
  //         { label: "Peak Pulse Current", value: "36A (10/1000 μs) data" },
  //         { label: "Response Time", value: "<1 ns" },
  //         { label: "Shunt Capacitance", value: "<5 pF data" },
  //         { label: "Surge Protection", value: "Difference and common mode" },
  //         { label: "Ambient Storage Temperature", value: "-30 to 70°C (-22 to 158° F)" },
  //         { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
  //         { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing" },
  //         { label: "NDAA Compliant", value: "✓" },
  //         { label: "Certifications", value: "CE, FCC, IC, UL, UKCA, KC, CCC, RoHS" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     },
  //   ]
  // },

  // Produk Ketiga dari WiFi, SF Mega Capacity
  {
    id: "UWB-XG",
    name: "WiFi BaseStation XG",
    category: "WiFi",
    subfilter: "Mega Capacity",
    image: "/images/WiFi/27.uwbxg/1.p-utama-uwbxg.jpg",
    shortDescription:
      "Tri-radio WiFi 5 AP with 12 spatial streams and a selectable beamforming antenna, designed for high-density applications at large venues.",
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
      "/images/WiFi/27.uwbxg/1.p-utama-uwbxg.jpg",
      "/images/WiFi/27.uwbxg/2.p-dimensi-uwbxg.jpg",
      "/images/WiFi/27.uwbxg/3.p-spec-uwbxg.jpg",
      "/images/WiFi/27.uwbxg/4.p-development-uwbxg.jpg",
      "/images/WiFi/27.uwbxg/p-itb-uwbxg.jpg",
      "/images/WiFi/27.uwbxg/p-mkt0-uwbxg.jpg",
      "/images/WiFi/27.uwbxg/p-mkt1-uwbxg.jpg",
      "/images/WiFi/27.uwbxg/p-mkt2-uwbxg.jpg",
      "/images/WiFi/27.uwbxg/p-mkt3-uwbxg.jpg",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/27.uwbxg/p-mkt1-uwbxg.jpg",
      "/images/WiFi/27.uwbxg/p-itb-uwbxg.jpg",
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Polycarbonate, aluminum alloy",
      "Power Method PoE++",
      "Weatherproofing IP6",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "471.1 x 257.5 x 94.3 mm (18.6 x 10.1 x 3.7')" },
          { label: "WiFi Standard", value: "WiFi 5" },
          { label: "Spatial Streams", value: "12" },
          { label: "Coverage Area", value: "465 m² (5,000 ft²)" },
          { label: "Max. Client Count", value: "1500+" },
          { label: "Uplink", value: "10 GbE" },
          { label: "Mounting", value: "Wall, Pole (Mounts Included) VESA (Optional)" },
          { label: "Weatherproofing", value: "IP67" },
          { label: "Power Method", value: "PoE++" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 5 GHz", value: "Low Band: 4 x 4 (DL MU-MIMO) Vertical Band: 4 x 4 (DL MU-MIMO) High Band: 4 x 4 (DL MU-MIMO)" },

          { label: "Max. Data Rate 5 GHz", value: "Low Band: 1.7 Gbps (BW80) Vertical Band: 1.7 Gbps (BW80) High Band: 1.7 Gbps (BW80)" },

          { label: "Antenna Gain 5 GHz", value: "Directional internal: 15 dBi, 50° x 50° Directional internal: 10 dBi, 90° x 90°" },

          { label: "Max. TX Power 5 GHz", value: "25 dBm" },

          { label: "Max. BSSIDs", value: "8 per Radio" },

          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 1.7 Gbps (MCS0 - MCS9 NSS1/2/3/4, VHT 20/40/80)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 300 Mbps (MCS0 - MCS15, HT 20/40)" },
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
          { label: "Max. Power Consumption", value: "31W" },
          { label: "Includes PoE Adapter", value: "✓" },
          { label: "Supported Voltage Range", value: "44–57V DC" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port (1) 1/10 GbE ICM Ethernet port" },
          { label: "Weight", value: "3.2 kg (7.1 lb)" },
          { label: "Pole Mount Diameter", value: "1–3' (25–76 mm)" },
          { label: "Antennas", value: "(1) Integrated dual-mode antenna array" },
          { label: "Management", value: "Ethernet Bluetooth" },
          { label: "Mount Material", value: "Aluminum alloy" },
          { label: "LEDs System", value: "R/G/B" },
          { label: "Channel BandWidth", value: "HT 20/40, VHT 20/40/80, HE 20/40/80 (MHz)" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 08960-24-08356" },
          { label: "Operating Frequency", value: "US/CA: U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5670 MHz U-NII-3: 5725 - 5850 MHz Worldwide: 5150 - 5250 MHz 5250 - 5350 MHz 5470 - 5670 MHz" },
          { label: "Ambient Operating Temperature", value: "-40 to 70° C (-40 to 158° F)" },
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
      { name: "Device", image: "/images/WiFi/27.uwbxg/p-itb-uwbxg.jpg",
 }, 
    ],

    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "UniFi Patch Cable Outdoor",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Rugged, outdoor patch cable designed to function in the harshest environments.",
        specs: [
          "Shielded RJ45",
          "Insulated, weatherpoof jacket",
          "Internal foil shielding and drain wire for increased ESD damage protection",
          "Cable Lenghth: 1 to 8 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
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
        name: "Pro 48 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 48-port, Layer 3 switch capable of high-power PoE++ output.",
        specs: [
          "(40) GbE PoE+, (8) GbE PoE++ ports",
          "(4) 10G SFP+ ports",
          "600W total PoE availability",
          "(DC power backup-ready",
          "Layer 3 switching",
          "Near-silent cooling"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442.4 x 400 x 44 mm (17.4 x 15.7 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "48 (40 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "4 (10G/1G)" },
          { label: "Switching Capacity", value: "176 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "88 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "60W (Excluding PoE Output) 660W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 5.10.5 and later<" },
        ],
        productLink: "/products/power-cable-u7-pr0"
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
      },
      {
        id: 5,
        name: "Pro 24 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 24-port, Layer 3 switch capable of high-power PoE++ output.",
        specs: [
          "(16) GbE PoE+, (8) GbE PoE++ ports",
          "(2) 10G SFP+ ports",
          "400W total PoE availability",
          "(DC power backup-ready",
          "Layer 3 switching",
          "Near-silent cooling"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 285 x 44 mm  (17.4 x 11.2 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "24 (16 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "88 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "44 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "50W (Excluding PoE Output) 450W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 5.10.5 and later" },
        ],
        productLink: "/products/power-cable-u7-pr0"
      },

    ]
  },

  // Produk Pertama dari WiFi, SF Bridging
  {
    id: "UBB-XG-Single",
    name: "Building Bridge XG",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/WiFi/28.ubbxg/1.p-utama-ubbxg.jpg",
    shortDescription:
      "60 GHz wireless point-to-point bridge with a 10G SFP+ uplink for maximum performance and a 5 GHz backup radio.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "UBB-XG-Single",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/WiFi/28.ubbxg/1.p-utama-ubbxg.jpg",
      "/images/WiFi/28.ubbxg/2.p-dimensi-ubbxg.jpg",
      "/images/WiFi/28.ubbxg/3.p-spec-ubbxg.jpg",
      "/images/WiFi/28.ubbxg/4.p-development-ubbxg.jpg",
      "/images/WiFi/28.ubbxg/p-itb-ubbxg.jpg",
      "/images/WiFi/28.ubbxg/p-mkt0-ubbxg.jpg",
      "/images/WiFi/28.ubbxg/p-mkt1-ubbxg.jpg",
      "/images/WiFi/28.ubbxg/p-mkt2-ubbxg.jpg",
      "/images/WiFi/28.ubbxg/p-mkt3-ubbxg.jpg",
      "/images/WiFi/28.ubbxg/p-mkt4-ubbxg.jpg",
      "/images/WiFi/28.ubbxg/p-mkt5-ubbxg.jpg",
      "/images/WiFi/28.ubbxg/p-mkt6-ubbxg.jpg",

    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/28.ubbxg/p-mkt1-ubbxg.jpg",
      "/images/WiFi/28.ubbxg/p-itb-ubbxg.jpg",
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Aluminum alloy, UV-resistant polycarbonate",
      "Weatherproofing IPX6",
      "Power Method PoE++ Passive PoE",
      "Note: 2-pack Building Bridge XG is paired out of the box; includes (2) PoE power adapters. Single unit ideal for replacement/spare; includes (1) PoE power adapter. Managed via UniFi Console, Official UniFi Hosting, or a Self-Hosted UniFi Network Server."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀191.8 x 59 mm (⌀7.6 x 2.3')" },
          { label: "WiFi Standard", value: "WiFi 5" },
          { label: "Spatial Streams", value: "2" },
          { label: "Coverage Area", value: "500 m (1,640 ft)" },
          { label: "Mounting Locations", value: "Wall, Pole" },
          { label: "Weatherproofing", value: "IPX6" },
          { label: "Power Method", value: "PoE++ Passive PoE" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 5 GHz", value: "2 x 2 (DL MU-MIMO)" },

          { label: "Max. Data Rate 60 GHz", value: "6 Gbps" },
          { label: "Max. Data Rate 5 GHz", value: "866.6 Mbps (BW80)" },

          { label: "Antenna Gain 60 GHz", value: "21" },
          { label: "Antenna Gain 5 GHz", value: "14" },
          { label: "Antenna Gain 2.4 GHz", value: "2 dBi (BLE)" },


          { label: "Max. TX Power 60 GHz", value: "16 dBm" },
          { label: "Max. TX Power 5 GHz", value: "23 dBm" },

          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 867 Mbps (MCS0 - MCS9 NSS1/2, VHT 20/40/80)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "29W" },
          { label: "Includes PoE Adapter", value: "✓" },
          { label: "Supported Voltage Range", value: "48V DC ± 10%" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port (1) 1/10G SFP+ port" },
          { label: "Weight", value: "Device: 1.7 kg (3.8 lb) With mount: 2.9 kg (6.3 lb)" },
          { label: "Operating Modes", value: "PtP" },
          { label: "Wind Loading", value: "56 N at 200 km/h (12.6 lbf at 125 mph)" },
          { label: "Pole Mount Diameter", value: "1–2.5' (25–63.5 mm)" },
          { label: "Antennas", value: "(1) Integrated dual-mode antenna array" },
          { label: "Management", value: "Ethernet Bluetooth" },
          { label: "Channel BandWidth", value: "Main radio (60 GHz): 1,080/2,160 MHz Backup radio (5 GHz): HT 20/40 MHz, VHT 20/40/80 MHz" },
          { label: "Enclosure Material", value: "Aluminum alloy, UV-resistant polycarbonate" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "LEDs System", value: "R/G/B" },
          { label: "Operating Frequency", value: "Main radio (60 GHz): 57 - 66 GHz Backup radio (5 GHz): US/CA U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz Worldwide 5150 - 5850 MHz" },
          { label: "Bluetooth (MHz)", value: "Worldwide: 2400 - 2483.5 MHz" },
          { label: "Ambient Operating Temperature", value: "-40 to 55° C (-40 to 131° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Terragraph" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/WiFi/28.ubbxg/p-itb-ubbxg.jpg", }, 
    ],

    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
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
        id: 2,
        name: "Pro 24 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 24-port, Layer 3 switch capable of high-power PoE++ output.",
        specs: [
          "(16) GbE PoE+, (8) GbE PoE++ ports",
          "(2) 10G SFP+ ports",
          "400W total PoE availability",
          "(DC power backup-ready",
          "Layer 3 switching",
          "Near-silent cooling"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 285 x 44 mm  (17.4 x 11.2 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "24 (16 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "2 (10G/1G)" },
          { label: "Switching Capacity", value: "88 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "44 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "50W (Excluding PoE Output) 450W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 5.10.5 and later" },
        ],
        productLink: "/products/power-cable-u7-pr0"
      },
      {
        id: 3,
        name: "Pro 48 PoE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A 48-port, Layer 3 switch capable of high-power PoE++ output.",
        specs: [
          "(40) GbE PoE+, (8) GbE PoE++ ports",
          "(4) 10G SFP+ ports",
          "600W total PoE availability",
          "(DC power backup-ready",
          "Layer 3 switching",
          "Near-silent cooling"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442.4 x 400 x 44 mm (17.4 x 15.7 x 1.7')" },
          { label: "Port Layout 1 GbE RJ45", value: "48 (40 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "4 (10G/1G)" },
          { label: "Switching Capacity", value: "176 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "88 Gbps" },
          { label: "DHCP Server (Local Networks)", value: "✓" },
          { label: "DHCP Relay", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Max. Power Consumption", value: "60W (Excluding PoE Output) 660W (Including PoE Output)" },
          { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input" },
          { label: "Application Requirements UniFi Network", value: "Version 5.10.5 and later<" },
        ],
        productLink: "/products/power-cable-u7-pr0"
      },
      {
        id: 4,
        name: "UniFi Patch Cable Outdoor",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Rugged, outdoor patch cable designed to function in the harshest environments.",
        specs: [
          "Shielded RJ45",
          "Insulated, weatherpoof jacket",
          "Internal foil shielding and drain wire for increased ESD damage protection",
          "Cable Lenghth: 1 to 8 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 5,
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
        id: 6,
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
    ]
  },

  // Produk Kedua dari WiFi, SF Bridging
  {
    id: "UBB-Single",
    name: "Building Bridge",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/WiFi/29.ubbsingle/1.p-utama-ubb.jpg",
    shortDescription:
      "60 GHz wireless point-to-point bridge with a 5 GHz backup radio.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],


    // SKU produk
    sku: "UBB-Single",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/WiFi/29.ubbsingle/1.p-utama-ubb.jpg",
      "/images/WiFi/29.ubbsingle/2.p-dimensi-ubb.jpg",
      "/images/WiFi/29.ubbsingle/3.p-spec-ubb.jpg",
      "/images/WiFi/29.ubbsingle/4.p-development-ubb.jpg",
      "/images/WiFi/29.ubbsingle/p-itb-ubb.jpg",
      "/images/WiFi/29.ubbsingle/p-mkt0-ubb.jpg",
      "/images/WiFi/29.ubbsingle/p-mkt1-ubb.jpg",
      "/images/WiFi/29.ubbsingle/p-mkt2-ubb.jpg",
      "/images/WiFi/29.ubbsingle/p-mkt3-ubb.jpg",
      "/images/WiFi/29.ubbsingle/p-mkt4-ubb.jpg",
      "/images/WiFi/29.ubbsingle/p-mkt5-ubb.jpg",
      "/images/WiFi/29.ubbsingle/p-mkt6-ubb.jpg",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/29.ubbsingle/p-mkt2-ubb.jpg",
      "/images/WiFi/29.ubbsingle/p-itb-ubb.jpg",
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material UV-resistant polycarbonate",
      "Weatherproofing IPX6",
      "Power Method PoE",
      "Note: 2-pack Building Bridge is paired out of the box; includes (2) PoE power adapters.Single unit ideal for replacement/spare; includes (1) PoE power adapter. Managed via UniFi Console, Official UniFi Hosting, or a Self-Hosted UniFi Network Server."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀140 x 90 mm (⌀5.5 x 3.5')" },
          { label: "WiFi Standard", value: "WiFi 5" },
          { label: "Spatial Streams", value: "2" },
          { label: "Coverage Area", value: "500 m (1,640 ft)" },
          { label: "Mounting Locations", value: "Wall, Pole" },
          { label: "Weatherproofing", value: "IPX6" },
          { label: "Power Method", value: "PoE" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 5 GHz", value: "2 x 2 (DL MU-MIMO)" },

          { label: "Max. Data Rate 60 GHz", value: "1.7 Gbps" },
          { label: "Max. Data Rate 5 GHz", value: "866.6 Mbps (BW80)" },

          { label: "Antenna Gain 60 GHz", value: "17.2 dBi" },
          { label: "Antenna Gain 5 GHz", value: "10 dBi" },
          { label: "Antenna Gain 2.4 GHz", value: "2 dBi (BLE)" },


          { label: "Max. TX Power 60 GHz", value: "19 dBm" },
          { label: "Max. TX Power 5 GHz", value: "25 dBm" },

          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 867 Mbps (MCS0 - MCS9 NSS1/2, VHT 20/40/80)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 300 Mbps (MCS0 - MCS15, HT 20/40)" },
          { label: "Supported Data Rates 802.11g", value: "6, 9, 12, 18, 24, 36, 48, 54 Mbps" },
          { label: "Supported Data Rates 802.11b", value: "1, 2, 5.5, 11 Mbps" },
          { label: "Supported Data Rates 802.11a", value: "6, 9, 12, 18, 24, 36, 48, 54 Mbps" },
          { label: "Wireless Security", value: "WPA2 AES" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "11W" },
          { label: "Includes PoE Adapter", value: "✓" },
          { label: "Supported Voltage Range", value: "44–57V DC" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Weight", value: "376 g (13.3 oz)" },
          { label: "Operating Modes", value: "PtP" },
          { label: "Wind Loading", value: "56 N at 200 km/h (12.6 lbf at 125 mph)" },
          { label: "Management", value: "Ethernet Bluetooth" },
          { label: "Channel BandWidth", value: "Main radio (60 GHz): 1,080/2,160 MHz Backup radio (5 GHz): HT 20/40 MHz, VHT 20/40/80 MHz" },
          { label: "Enclosure Material", value: "UV-resistant polycarbonate" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "LEDs System", value: "R/G/B" },
          { label: "Operating Frequency", value: "Main radio (60 GHz): 57 - 66 GHz Backup radio (5 GHz): US/CA U-NII-1: 5150 - 5250 MHz U-NII-2A: 5250 - 5350 MHz U-NII-2C: 5470 - 5725 MHz U-NII-3: 5725 - 5850 MHz  Worldwide 5150 - 5850 MHz" },
          { label: "Bluetooth (MHz)", value: "Worldwide: 2400 - 2483.5 MHz" },
          { label: "Ambient Operating Temperature", value: "-40 to 70° C (-40 to 158° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/WiFi/29.ubbsingle/p-itb-ubb.jpg", }, 
    ],

    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "UniFi Patch Cable Outdoor",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Rugged, outdoor patch cable designed to function in the harshest environments.",
        specs: [
          "Shielded RJ45",
          "Insulated, weatherpoof jacket",
          "Internal foil shielding and drain wire for increased ESD damage protection",
          "Cable Lenghth: 1 to 8 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
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

  //Produk Ketiga dari WiFi, SF Bridging
  {
    id: "UDB-Pro",
    name: "Device Bridge Pro",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/WiFi/30.udbpro/1.p-utama-udbpro.jpg",
    shortDescription:
      "5 GHz wireless bridge with PoE output that connects at 5+ km distances or seamlessly uplinks to UniFi WiFi.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],


    // SKU produk
    sku: "UDB-Pro",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/WiFi/30.udbpro/1.p-utama-udbpro.jpg",
      "/images/WiFi/30.udbpro/2.p-dimensi-udbpro.jpg",
      "/images/WiFi/30.udbpro/3.p-spec-udbpro.jpg",
      "/images/WiFi/30.udbpro/4.p-development-udbpro.jpg",
      "/images/WiFi/30.udbpro/p-itb-udbpro.jpg",
      "/images/WiFi/30.udbpro/p-mkt0-udbpro.jpg",
      "/images/WiFi/30.udbpro/p-mkt1-udbpro.jpg",
      "/images/WiFi/30.udbpro/p-mkt2-udbpro.jpg",
      "/images/WiFi/30.udbpro/p-mkt3-udbpro.jpg",
      "/images/WiFi/30.udbpro/p-mkt4-udbpro.jpg",
      "/images/WiFi/30.udbpro/p-mkt5-udbpro.jpg",
      "/images/WiFi/30.udbpro/p-mkt6-udbpro.jpg",
      "/images/WiFi/30.udbpro/p-mkt7-udbpro.jpg",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/30.udbpro/p-mkt1-udbpro.jpg",
      "/images/WiFi/30.udbpro/p-mkt6-udbpro.jpg",
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material UV-resistant polycarbonate",
      "Weatherproofing IPX6",
      "Power Method PoE PoE+ (Required for PoE output)",
      "Note. Cannot be set up standalone and must be managed by a UniFi Console, Official UniFi Hosting, or a Self-Hosted UniFi Network Server. For the longest range, uplink to another UDB Pro or UDB Pro Sector is recommended. PoE adapter included. PoE+ input required for PoE passthrough."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀189.5 x 64.3 mm (⌀7.4 x 2.5')" },
          { label: "WiFi Standard", value: "WiFi 5" },
          { label: "Spatial Streams", value: "2" },
          { label: "Coverage Area", value: "5 km (3.1 mi)" },
          { label: "Mounting Locations", value: "Wall, Pole" },
          { label: "Mounting", value: "Pole (Included)" },
          { label: "Weatherproofing", value: "IPX6" },
          { label: "Power Method", value: "PoE PoE+ (Required for PoE output)" },
          { label: "Power Suppply", value: "48V, 0.32A PoE adapter (Included)" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 5 GHz", value: "2 x 2" },
          { label: "Max. Data Rate 5 GHz", value: "867 Mbps (BW80)" },
          { label: "Antenna Gain 5 GHz", value: "19 dBi" },
          { label: "Max. TX Power 5 GHz", value: "25 dBm" },
          { label: "Max. TX Max. Conducted TX Power", value: "25 dBm (Combined)" },

          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 867 Mbps (MCS0 - MCS9 NSS1/2, VHT 20/40/80)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 300 Mbps (MCS0 - MCS15, HT 20/40)" },
          { label: "Supported Data Rates 802.11g", value: "6, 9, 12, 18, 24, 36, 48, 54 Mbps" },
          { label: "Supported Data Rates 802.11a", value: "6, 9, 12, 18, 24, 36, 48, 54 Mbps" },
          { label: "Wireless Security", value: "WPA2 AES" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "9W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Networking Interface", value: "(2) GbE RJ45 ports" },
          { label: "Antennas", value: "Internal" },
          { label: "Management", value: "(1) PoE in (PoE output not used) (1) Passive PoE output" },
          { label: "Channel BandWidth", value: "20/40/80 (MHz)" },
          { label: "Wind Loading", value: "69 N at 200 km/h (15.5 lbf at 125 mph)" },
          { label: "Weight", value: "Device: 431 g (0.95 lb) With mount: 515 g (1.1 lb)" },
          { label: "Enclosure Material", value: "UV-resistant polycarbonate" },
          { label: "Mount Material", value: "UV-stabilized polycarbonate, stainless steel" },
          { label: "Pole Mount Diameter", value: "0.8–2.1' (20–53.1 mm)" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "LEDs System", value: "Power, (2) Ethernet status - main port/PoE out port, (4) signal strength" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
          { label: "Operating Frequency", value: "US/CA: U-NII-1 5150 - 5250 MHz U-NII-2A 5250 - 5350 MHz U-NII-2C 5470 - 5725 MHz U-NII-3 5725 - 5850 MHz Worldwide: 5150 - 5875 MHz" },
          { label: "Ambient Operating Temperature", value: "-40 to 60° C (-40 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image:"/images/WiFi/30.udbpro/p-itb-udbpro.jpg", }, 
    ],

    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "UniFi Patch Cable Outdoor",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Rugged, outdoor patch cable designed to function in the harshest environments.",
        specs: [
          "Shielded RJ45",
          "Insulated, weatherpoof jacket",
          "Internal foil shielding and drain wire for increased ESD damage protection",
          "Cable Lenghth: 1 to 8 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },

  // Produk Keempat dari WiFi, SF Bridging
  {
    id: "UDB-Pro-Sector",
    name: "Device Bridge Pro Sector",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/WiFi/31.udbprosector/1.p-utama-udbprosector.jpg",
    shortDescription:
      "5 GHz point-to-multipoint access point that wirelessly bridges 50+ Device Bridge Pro clients at 5+ km distances.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],


    // SKU produk
    sku: "UDB-Pro-Sector",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/WiFi/31.udbprosector/1.p-utama-udbprosector.jpg",
      "/images/WiFi/31.udbprosector/2.p-dimensi-udbprosector.jpg",
      "/images/WiFi/31.udbprosector/3.p-spec-udbprosector.jpg",
      "/images/WiFi/31.udbprosector/4.p-development-udbprosector.jpg",
      "/images/WiFi/31.udbprosector/p-itb-udbprosector.jpg",
      "/images/WiFi/31.udbprosector/p-mkt0-udbprosector.jpg",
      "/images/WiFi/31.udbprosector/p-mkt1-udbprosector.jpg",
      "/images/WiFi/31.udbprosector/p-mkt2-udbprosector.jpg",
      "/images/WiFi/31.udbprosector/p-mkt3-udbprosector.jpg",
      "/images/WiFi/31.udbprosector/p-mkt4-udbprosector.jpg",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/31.udbprosector/p-mkt4-udbprosector.jpg",
      "/images/WiFi/31.udbprosector/p-itb-udbprosector.jpg",
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material UV-stabilized polycarbonate",
      "Weatherproofing IPX6",
      "Power Method PoE",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "360.9 x 129.6 x 71.4 mm (14.2 x 5.1 x 2.8')" },
          { label: "WiFi Standard", value: "WiFi 5" },
          { label: "Spatial Streams", value: "2" },
          { label: "Coverage Area", value: "5 km (3.1 mi)" },
          { label: "Mounting Locations", value: "Pole" },
          { label: "Weatherproofing", value: "IPX6" },
          { label: "Power Method", value: "PoE" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 5 GHz", value: "2 x 2" },
          { label: "Max. Data Rate 5 GHz", value: "400 Mbps (BW40)" },
          { label: "Antenna Gain 5 GHz", value: "17 dBi" },
          { label: "Max. TX Power 5 GHz", value: "25 dBm" },
          { label: "Max. TX Max. Conducted TX Power", value: "25 dBm (Combined)" },

          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 400 Mbps (MCS0 - MCS9 NSS1/2, VHT 20/40)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 300 Mbps (MCS0 - MCS15, HT 20/40)" },
          { label: "Supported Data Rates 802.11a", value: "6, 9, 12, 18, 24, 36, 48, 54 Mbps" },
          { label: "Wireless Security", value: "WPA2 AES" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "6W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Antennas", value: "Internal" },
          { label: "Management", value: "Ethernet WiFi" },
          { label: "Channel BandWidth", value: "20/40 MHz" },
          { label: "Wind Loading", value: "128.2N at 200 km/h" },
          { label: "Weight", value: "Device: 782 g (1.7 lb) With mount: 835 g (1.8 lb)" },
          { label: "Enclosure Material", value: "UV-stabilized polycarbonate" },
          { label: "Mount Material", value: "UV-stabilized polycarbonate, stainless steel" },
          { label: "Pole Mount Diameter", value: "0.9—2.4' (24—60 mm)" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "LEDs System", value: "Power, Ethernet" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 05978-25-08356" },
          { label: "Operating Frequency", value: "US/CA: U-NII-1 5150 - 5250 MHz U-NII-2A 5250 - 5350 MHz U-NII-2C 5470 - 5725 MHz U-NII-3 5725 - 5850 MHz Worldwide: 5150 - 5875 MHz" },
          { label: "Ambient Operating Temperature", value: "-40 to 60° C (-40 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/WiFi/31.udbprosector/p-itb-udbprosector.jpg", }, 
    ],
  },

  // Produk Kelima dari WiFi, SF Bridging
  {
    id: "UDB",
    name: "Device Bridge",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/WiFi/32.udb/1.p-utama-udb.jpg",
    shortDescription:
      "Plug-and-play, wireless bridging PoE adapter with integrated UniFi WiFi Auto-Link.",
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
      "/images/WiFi/32.udb/1.p-utama-udb.jpg",
      "/images/WiFi/32.udb/2.p-dimensi-udb.jpg",
      "/images/WiFi/32.udb/3.p-development-udb.jpg",
      "/images/WiFi/32.udb/p-itb-udb.jpg",
      "/images/WiFi/32.udb/p-mkt0-udb.jpg",
      "/images/WiFi/32.udb/p-mkt1-udb.jpg",
      "/images/WiFi/32.udb/p-mkt2-udb.jpg",
      "/images/WiFi/32.udb/p-mkt3-udb.jpg",
      "/images/WiFi/32.udb/p-mkt4-udb.jpg",
      "/images/WiFi/32.udb/p-mkt5-udb.jpg",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/32.udb/p-mkt1-udb.jpg",
      "/images/WiFi/32.udb/p-mkt3-udb.jpg",
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Polycarbonate",
      "Mounting Wall (Included)Weatherproofing IPX6",
      "Power Method 100–240V AC, 0.45A Max., 50/60 Hz",
      "Note. UniFi Consoles and APs must have the latest software updates installed."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "130 x 55 x 34 mm (5.1 x 2.2 x 1.3')" },
          { label: "WiFi Standard", value: "WiFi 5" },
          { label: "Spatial Streams", value: "2" },
          { label: "Mounting Locations", value: "Wall, table" },
          { label: "Mounting", value: "Wall (Included)" },
          { label: "Power Method", value: "100–240V AC, 0.45A Max., 50/60 Hz" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 5 GHz", value: "2 x 2" },
          { label: "Max. Data Rate 5 GHz", value: "866.7 Mbps (BW80)" },
          { label: "Antenna Gain 5 GHz", value: "Internal: 5 dBi External omni: 4 dBi, 360° x 30°" },
          { label: "Max. TX Power 5 GHz", value: "21 dBm" },
          { label: "Max. TX Max. Conducted TX Power", value: "25 dBm (Combined)" },

          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 866.7 Mbps (MCS0 - MCS9 NSS1/2, VHT 20/40/80)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 300 Mbps (MCS0 - MCS15, HT 20/40)" },
          { label: "Supported Data Rates 802.11a", value: "6, 9, 12, 18, 24, 36, 48, 54 Mbps" },
          { label: "Wireless Security", value: "WPA2 AES" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "25W (AC input) 10W (Excluding PoE output)" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Antennas", value: "100–240V AC" },
          { label: "Management", value: "WiFi" },
          { label: "Channel BandWidth", value: "20/40/80 (MHz)" },
          { label: "Weight", value: "200 g (7.1 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "LEDs System", value: "(4) Blue: signal (1) White/blue: indicator" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 03885-25-08356" },
          { label: "Operating Frequency", value: "US/CA: U-NII-1 5150 - 5250 MHz U-NII-2A 5250 - 5350 MHz U-NII-2C 5470 - 5725 MHz U-NII-3 5725 - 5850 MHz Worldwide: 5150 - 5875 MHz" },
          { label: "Ambient Operating Temperature", value: "-10 to 40° C (14 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/WiFi/32.udb/p-itb-udb.jpg", }, 
    ],
  },

  // Produk Keenam dari WiFi, SF Bridging
  {
    id: "UDB-Switch (35W)",
    name: "Device Bridge Switch",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/WiFi/33.udbswitch/1.p-utama-udbswitch.jpg",
    shortDescription:
      "Compact PoE+ switch* with (1) 10 GbE port, (7) 2.5 GbE ports, and 6 GHz-ready WiFi 7 bridging integration for seamless, high-capacity wireless uplink to UniFi WiFi.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],


    // SKU produk
    sku: "UDB-Switch (35W)",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/WiFi/33.udbswitch/1.p-utama-udbswitch",
      "/images/WiFi/33.udbswitch/2.p-dimensi-udbswitch.jpg",
      "/images/WiFi/33.udbswitch/3.p-development-udbswitch.jpg",
      "/images/WiFi/33.udbswitch/p-itb-udbswitch.jpg",
      "/images/WiFi/33.udbswitch/p-mkt0-udbswitch.jpg",
      "/images/WiFi/33.udbswitch/p-mkt1-udbswitch.jpg",
      "/images/WiFi/33.udbswitch/p-mkt2-udbswitch.jpg",
      "/images/WiFi/33.udbswitch/p-mkt3-udbswitch.jpg",
      "/images/WiFi/33.udbswitch/p-mkt4-udbswitch.jpg",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
            "/images/WiFi/33.udbswitch/p-mkt2-udbswitch.jpg",
            "/images/WiFi/33.udbswitch/p-mkt4-udbswitch.jpg",
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Polycarbonate",
      "Mounting Location Desktop, wall",
      "Power Method DC jack (54V DC/1.1A)",
      "Note. *The Device Bridge Switch provides 35W of PoE power with the included 60W adapter, or up to 185W with the optional 210W adapter."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "212.9 x 113 x 32.5 mm (8.4 x 4.4 x 1.3')" },
          { label: "WiFi Standard", value: "WiFi 7" },
          { label: "Spatial Streams", value: "4" },
          { label: "Mounting Locations", value: "Desktop, wall" },
          { label: "Power Method", value: "DC jack (54V DC/1.1A)" },
          { label: "Power Supply", value: "54V DC/1.1A (Adapter included)" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 6 GHz", value: "2 x 2" },
          { label: "MIMO 5 GHz", value: "2 x 2" },

          { label: "Max. Data Rate 6 GHz", value: "5.8 Gbps (BW320)" },
          { label: "Max. Data Rate 5 GHz", value: "4.3 Gbps (BW240)" },

          { label: "Antenna Gain 6 GHz", value: "8 dBi" },
          { label: "Antenna Gain 5 GHz", value: "8 dBi" },

          { label: "Max. TX Power 6 GHz", value: "23 dBm" },
          { label: "Max. TX Power 5 GHz", value: "26 dBm" },
          { label: "Max. TX Max. Conducted TX Power", value: "26 dBm (Combined)" },
          { label: "Supported Data Rates 802.11be (WiFi 7)", value: "6 GHz: 7.3 Mbps to 5.8 Gbps (MCS0 - MCS13 NSS1/2, EHT 20/40/80/160/320) 5 GHz: 7.3 Mbps to 4.3 Gbps (MCS0 - MCS13 NSS1/2, EHT 20/40/80/160/240)" },
          { label: "Supported Data Rates 802.11ax (WiFi 6)", value: "7.3 Mbps to 2.4 Gbps (MCS0 - MCS11 NSS1/2, HE 20/40/80/160)" },
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "6.5 Mbps to 1.7 Gbps (MCS0 - MCS9 NSS1/2, VHT 20/40/80/160)" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 300 Mbps (MCS0 - MCS15, HT 20/40)" },
          { label: "Supported Data Rates 802.11a", value: "6, 9, 12, 18, 24, 36, 48, 54 Mbps" },
          { label: "Wireless Security", value: "WPA3 SAE (Always On)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "25W (Excluding PoE output)" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Networking Interface", value: "(1) 10 GbE RJ45 port (7) 2.5 GbE RJ45 ports" },
          { label: "PoE Interface", value: "(8) PoE+ ports" },
          { label: "Max. PoE Wattage per Port", value: "30W" },
          { label: "Total PoE Availability", value: "60W AC adapter input: 35W 210W AC adapter input: 185W" },
          { label: "Antennas", value: "(1) Internal" },
          { label: "Management", value: "Ethernet WiFi" },
          { label: "Channel BandWidth", value: "20/40/80/160/240/320 MHz" },
          { label: "Weight", value: "Device: 548 g (1.21 lb) With mount: 563 g (1.24 lb)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "LCM Display", value: "0.96' status display" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
          { label: "Operating Frequency", value: "Worldwide: 5150—5875 MHz 5945—7125 MHz" },
          { label: "Ambient Operating Temperature", value: "-30 to 40° C (-22 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Applicatiions Requirements UniFi Network", value: "Version 10.0.156 or later." },
        ]
      }
    ],
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/WiFi/33.udbswitch/p-itb-udbswitch.jpg", }, 
    ],
    addons: [
      {
        id: 1,
        name: "Floating Mount",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Sleek magnetic wall mount for UniFi compact switches.",
        specs: [
          "Enclosure Material Polycarbonate, silicone rubber",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "125.6 x 40.4 x 10.4 mm (4.9 x 1.6 x 0.4')" },
          { label: "Weight", value: "56.1 g (2 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, silicone rubber" },
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
        name: "DIN Rail Mount",
        image: "/images/dcs-box.png",
        price: 299,
        description: "DIN rail mount for UniFi compact switches.",
        specs: [
          "Enclosure Material Polycarbonate"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "125.7 x 40.5 x 20.6 mm (4.4 x 1.4 x 0.7')" },
          { label: "Weight", value: "36.8 g (1.3 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
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
    ],
  },

  //Produk Ketujuh dari WiFi, SF Bridging
  {
    id: "UDB-IoT",
    name: "Device Bridge IoT",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/WiFi/34.udbiot/1.p-utama-udbiot.jpg",
    shortDescription:
      "Ultra-compact wireless bridge for IoT devices with integrated UniFi WiFi Auto-Link, versatile mounting options, and powered by USB Type-C or 4-pin DC socket.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],


    // SKU produk
    sku: "UDB-IoT",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/WiFi/34.udbiot/1.p-utama-udbiot.jpg",
      "/images/WiFi/34.udbiot/2.p-dimensi-udbiot.jpg",
      "/images/WiFi/34.udbiot/3.p-spec-udbiot.jpg",
      "/images/WiFi/34.udbiot/4.p-development-udbiot.jpg",
      "/images/WiFi/34.udbiot/p-itb-udbiot.jpg",
      "/images/WiFi/34.udbiot/p-mkt0-udbiot.jpg",
      "/images/WiFi/34.udbiot/p-mkt1-udbiot.jpg",
      "/images/WiFi/34.udbiot/p-mkt2-udbiot.jpg",
      "/images/WiFi/34.udbiot/p-mkt3-udbiot.jpg",
      "/images/WiFi/34.udbiot/p-mkt4-udbiot.jpg",
      "/images/WiFi/34.udbiot/p-mkt5-udbiot.jpg",
      "/images/WiFi/34.udbiot/p-mkt6-udbiot.jpg",
      "/images/WiFi/34.udbiot/p-mkt7-udbiot.jpg",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/34.udbiot/p-mkt0-udbiot.jpg",
      "/images/WiFi/34.udbiot/p-mkt4-udbiot.jpg",
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Polycarbonate",
      "Mounting Included mount",
      "Power Method USB Type-C (5V DC, 1A) 4-pin DC (9–30V DC)",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Device: 63 x 44.5 x 25.5 mm (2.5 x 1.8 x 1') With external antenna: 89 x 44.5 x 25.5 mm (3.5 x 1.8 x 1')" },
          { label: "WiFi Standard", value: "WiFi 4" },
          { label: "Spatial Streams", value: "2" },
          { label: "Mounting Locations", value: "Wall, DIN rail" },
          { label: "Mounting", value: "Included mount" },
          { label: "Power Method", value: "USB Type-C (5V DC, 1A) 4-pin DC (9–30V DC)" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "MIMO 2.4 GHz", value: "2 x 2" },
          { label: "Max. Data Rate 2.4 GHz", value: "300 Mbps (BW40)" },
          { label: "Antenna Gain 2.4 GHz", value: "Internal: 4dBi External omni: 3dBi" },
          { label: "Max. TX Power 2.4 GHz", value: "20 dBm" },
          { label: "Max. TX Max. Conducted TX Power", value: "20 dBm (Combined)" },

          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 300 Mbps (MCS0 - MCS15, HT 20/40)" },
          { label: "Wireless Security", value: "WPA2 AES (Always On)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "2.3W" },
          { label: "Supported Voltage Range", value: "USB-C: 5V DC Socket: 9–30V DC" },
          { label: "Networking Interface", value: "(1) 10/100M RJ45 port" },
          { label: "Antennas", value: "(1) Internal antenna (1) RP-SMA connector for external omni-antenna" },
          { label: "Management", value: "WiFi" },
          { label: "Channel BandWidth", value: "20/40 MHz" },
          { label: "Weight", value: "Device: 45 g (1.6 oz) With external antenna: 53 g (1.9 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "LEDs System", value: "(4) Blue: signal (1) White/blue: indicator" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
          { label: "Ambient Operating Temperature", value: "-10 to 50° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
        ]
      },
    ],
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image:"/images/WiFi/34.udbiot/p-itb-udbiot.jpg", }, 
    ],
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
    ],
  },

  // Produk Pertama dari WiFi, SF Special Devices
  {
    id: "UTR",
    name: "UniFi Travel Router",
    category: "WiFi",
    subfilter: "Special Devices",
    image: "/images/WiFi/19.utr/1.p-utama-utr.png",
    shortDescription:
      "An ultra-slim travel router that instantly extends your UniFi Network wherever you are, bringing secure, familiar connectivity to remote locations.",
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
      "/images/WiFi/19.utr/1.p-utama-utr.png",
      "/images/WiFi/19.utr/2.p-dimensi-utr.png",
      "/images/WiFi/19.utr/3.p-spec-utr.png",
      "/images/WiFi/19.utr/4.p-development-utr.png",
      "/images/WiFi/19.utr/p-itb-utr.png",
      "/images/WiFi/19.utr/p-mkt0-utr.png",
      "/images/WiFi/19.utr/p-mkt2-utr.png",
      "/images/WiFi/19.utr/p-mkt3-utr.png",
      "/images/WiFi/19.utr/p-mkt4-utr.png",
      "/images/WiFi/19.utr/p-mkt5-utr.png",
      "/images/WiFi/19.utr/p-mkt6-utr.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/WiFi/19.utr/p-mkt0-utr.png",
      "/images/WiFi/19.utr/p-itb-utr.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "WiFi Standards WiFi 5",
      "Enclosure Material Polycarbonate",
      "Power Method USB-C",
      "No UniFi Account required. Works in stand-alone device mode. WireGuard VPN supported."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "95.95 x 65 x 12.5 mm (3.8 x 2.6 x 0.5')" },
          { label: "WiFi Standard", value: "WiFi 5" },
          { label: "Uplink", value: "(2) GbE RJ45 ports WiFi" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "89 g (3.1 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
        ]
      },
      {
        title: "Networking",
        items: [
          { label: "Supported Data Rates 802.11ac (WiFi 5)", value: "✓" },
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 300 Mbps (MCS0 - MCS15, HT 20/40)" },
          { label: "Supported Data Rates 802.11g", value: "6, 9, 12, 18, 24, 36, 48, 54 Mbps" },
          { label: "Supported Data Rates 802.11b", value: "1, 2, 5.5, 11 Mbps" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Management", value: "Ethernet Bluetooth" },
          { label: "Antennas Type", value: "(2) Embedded WiFi antennas" },
          { label: "Max TX Power", value: "2.4G: 13 dBm 5G: 15 dBm" },
          { label: "WiFi MMO", value: "2 x 2" },
          { label: "Max. Power Consumption", value: "5W" },
          { label: "Power Method", value: "USB -C" },
          { label: "Power Supply", value: "USB-C, 5V/2A (Adapter not included)" },
          { label: "Display", value: "1.14' status display" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-10 to 40 °C (-40 to 104 °F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/WiFi/19.utr/p-itb-utr.png" },
    ],

    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
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
        id: 2,
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
];
// ✅ 5. EXPORT DI PALING BAWAH
export const wifiProducts = wifiRaw;