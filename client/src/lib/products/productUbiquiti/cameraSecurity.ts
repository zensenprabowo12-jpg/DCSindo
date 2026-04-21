import { Item } from "@radix-ui/react-accordion";
import { title } from "process";

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

// Camera Security Products
export const cameraSecurityProducts: Product[] = [
  // Produk Pertama dari Camera Security, SF NVRs and Edge Devices
  {
    id: "ENVR-Core",
    name: "Enterprise NVR Core",
    category: "Camera Security",
    subfilter: "NVRs and Edge Devices",
    image: "/images/camerasecurity/1.envr-core/1.p-utama-envr-core.png",
    shortDescription:
      "3U UniFi Protect NVR with 16-bay support for 2.5'/3.5' HDDs/SSDs, up to (300) 4K or (500) Full HD cameras, hot-swappable power supplies and optional 16-bay storage expansion units.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],


    // SKU produk
    sku: "ENVR-Core",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/1.envr-core/1.p-utama-envr-core.png",
      "/images/camerasecurity/1.envr-core/2.p-spec-envr-core.png",
      "/images/camerasecurity/1.envr-core/3.p-dimensi-envr-core.png",
      "/images/camerasecurity/1.envr-core/4.p-deployment-envr-core.png",
      "/images/camerasecurity/1.envr-core/p-itb-envr-core.png",
      "/images/camerasecurity/1.envr-core/p-mkt0-envr-core.png",
      "/images/camerasecurity/1.envr-core/p-mkt1-envr-core.png",
      "/images/camerasecurity/1.envr-core/p-mkt2-envr-core.png",
      "/images/camerasecurity/1.envr-core/p-mkt3-envr-core.png",
      "/images/camerasecurity/1.envr-core/p-mkt4-envr-core.png",
      "/images/camerasecurity/1.envr-core/p-mkt5-envr-core.png",
      "/images/camerasecurity/1.envr-core/p-mkt6-envr-core.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/1.envr-core/p-mkt0-envr-core.png",
      "/images/camerasecurity/1.envr-core/p-itb-envr-core.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Power Supply Hot-swappable 550W CRPS",
      "Enclosure Material SGCC steel",
      "Power Method (2) AC input, 100–240V, 7A Max., 50/60Hz (Redundant, hot-swappable)",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "481.4 x 550 x 132 mm (19 x 21.7 x 5.2')" },
          { label: "Managed Cameras", value: "(500) HD (400) 2K (300) 4K" },
          { label: "Managed Access Hub", value: "300+" },
          { label: "Storage Capacity", value: "(16) 3.5' drive bays" },
          { label: "Data Protection", value: "✓" },
          { label: "Vantage Point", value: "✓" },
          { label: "Networking Interface", value: "(2) 25G SFP28 ports (25G/10G/1G) (1) GbE MGMT RJ45 port (1G/100M)" },
          { label: "Expansion Port", value: "(2) SFF-8644 ports (24G)" },
          { label: "Power Redundancy", value: "✓" },
          { label: "Form Factor", value: "Rack Mount (3U)" },
          { label: "Door Access Support", value: "✓" },
          { label: "Management Applications", value: "UniFi Protect UniFi Access" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Hard Drive Capacity", value: "(16) 2.5/3.5' HDD / SSD support (2) Expansion ports, support up to 48 total HDD/SSD" },
          { label: "Max. Power Budget for Drives", value: "313W" },
          { label: "Max. Power Consumption", value: "237W" },
          { label: "Power Method", value: "(2) AC input, 100–240V, 7A Max., 50/60Hz (Redundant, hot-swappable)" },
          { label: "Power Supply", value: "Hot-Swappable 550W CRPS" },
          { label: "Processor", value: "128-core Arm® v8.2 at 2.6 GHz" },
          { label: "Memory", value: "64 Gb" },
          { label: "Management", value: "Ethernet Bluetooth" },
          { label: "Weight", value: "Without rails: 20.5 kg (45.2 lb) With rails: 23.4 kg (51.6 lb)" },
          { label: "Enclosure Material", value: "SGCC steel" },
          { label: "Mount Material", value: "Aluminum" },
          { label: "Slide Rails", value: "The rails support 482.6 mm (19') four-post racks with square holes (9.5 x 9.5 mm) and posts depths ranging from 600–1066 mm (23.6–42')" },
          { label: "Faceplate", value: "Support UACC-3U-Bezel-Lite (Included)')" },
          { label: "LEDs SFP28", value: "✓" },
          { label: "LEDs HDD", value: "✓" },
          { label: "LEDs System", value: "✓" },
          { label: "LEDs Expansion Port", value: "✓" },
          { label: "LEDs CRPS", value: "✓" },
          { label: "Ambient Operating Temperature", value: "10 to 35° C (50 to 95° F)" },
          { label: "Ambient Operating Humidity", value: "20 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements Mobile App", value: "Application Requirements Mobile App" },
        ]
      }
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/1.envr-core/p-itb-envr-core.png" },
    ],
    addons: [
      {
        id: 1,
        name: "Hot-Swappable Power Module (550W)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Replacement hot-swappable power module for CloudKey Enterprise, Enterprise Aggregation, Enterprise NVR and UNAS Pro 8.",
        specs: [
          "550W (12V) AC-to-DC power supply",
          "Included power cable",
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/mounting-kit-uvc-g6-pro-entry"
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
    ]
  },

  // Produk Kedua dari Camera Security, SF NVRs and Edge Devices
  {
    id: "ENVR",
    name: "Enterprise NVR",
    category: "Camera Security",
    subfilter: "NVRs and Edge Devices",
    image: "/images/camerasecurity/2.envr/1.p-utama-envr.png",
    shortDescription:
      "3U NVR with (16) 2.5/3.5” drive bays, supporting up to (70) 4K cameras or (210) Full HD cameras.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],


    // SKU produk
    sku: "ENVR",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/2.envr/1.p-utama-envr.png",
      "/images/camerasecurity/2.envr/2.p-spec-envr.png",
      "/images/camerasecurity/2.envr/3.p-dimensi-envr.png",
      "/images/camerasecurity/2.envr/p-itb-envr.png",
      "/images/camerasecurity/2.envr/p-mkt0-envr.png",
      "/images/camerasecurity/2.envr/p-mkt1-envr.png",
      "/images/camerasecurity/2.envr/p-mkt2-envr.png",
      "/images/camerasecurity/2.envr/p-mkt3-envr.png",
      "/images/camerasecurity/2.envr/p-mkt4-envr.png",
      "/images/camerasecurity/2.envr/p-mkt5-envr.png",
      "/images/camerasecurity/2.envr/p-mkt6-envr.png",
      "/images/camerasecurity/2.envr/p-mkt7-envr.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/2.envr/p-mkt0-envr.png",
      "/images/camerasecurity/2.envr/p-itb-envr.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Power Supply Hot-swappable 550W CRPS",
      "Enclosure Material SGCC steel",
      "Power Method (2) AC input, 100–240V, 7A Max., 50/60Hz (Redundant, hot-swappable)",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "481.4 x 480 x 132 mm (19 x 18.9 x 5.2')" },
          { label: "Managed Cameras", value: "(210) HD (140) 2K (70) 4K" },
          { label: "Managed Access Hub", value: "300" },
          { label: "Storage Capacity", value: "(16) 3.5' drive bays" },
          { label: "Data Protection", value: "✓" },
          { label: "Vantage Point", value: "✓" },
          { label: "Networking Interface", value: "(2) 10G SFP+ ports (1) 10 GbE RJ45 port" },
          { label: "Power Redundancy", value: "✓" },
          { label: "Form Factor", value: "Rack Mount (3U)" },
          { label: "Door Access Support", value: "✓" },
          { label: "Management Applications", value: "UniFi Protect UniFi Access" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Hard Drive Capacity", value: "(16) 2.5/3.5' HDD / SSD support" },
          { label: "Max. Power Budget for Drives", value: "310W" },
          { label: "Max. Power Consumption", value: "410W" },
          { label: "Power Method", value: "(16) 2.5/3.5' HDD / SSD support" },
          { label: "Power Supply", value: "Hot-Swappable 550W CRPS" },
          { label: "Processor", value: "8-core ARM® at 2.5 GHz" },
          { label: "Memory", value: "32 Gb" },
          { label: "Management", value: "Ethernet" },
          { label: "Display", value: "Bazel (Optional)" },
          { label: "Weight", value: "Without rails: 16.6 kg (36.6 lb) With rails: 19.5 kg (43.0 lb)" },
          { label: "Enclosure Material", value: "SGCC steel" },
          { label: "Mount Material", value: "Aluminum" },
          { label: "Slide Rails", value: "482.6 mm (19') four-post racks Posts depths ranging from 650 to 1,000 mm (25.6–39.4”)" },
          { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/2.envr/p-itb-envr.png" },
    ],
  },

  // Produk Ketiga dari Camera Security, SF NVRs and Edge Devices
  {
    id: "UNVR-Pro",
    name: "Network Video Recorder Pro",
    category: "Camera Security",
    subfilter: "NVRs and Edge Devices",
    image: "/images/camerasecurity/3.unvr-pro/1.p-utama-unvr-pro.png",
    shortDescription:
      "A 2U-sized video recorder with (7) 2.5/3.5' HDD bays that can provide up to 60 days of storage for (24) 4K cameras or (70) Full HD cameras.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],


    // SKU produk
    sku: "UNVR-Pro",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/3.unvr-pro/1.p-utama-unvr-pro.png",
      "/images/camerasecurity/3.unvr-pro/2.p-spec-unvr-pro.png",
      "/images/camerasecurity/3.unvr-pro/3.p-dimensi-unvr-pro.png",
      "/images/camerasecurity/3.unvr-pro/4.p-deployment-unvr-pro.png",
      "/images/camerasecurity/3.unvr-pro/p-itb-unvr-pro.png",
      "/images/camerasecurity/3.unvr-pro/p-mkt0-unvr-pro.png",
      "/images/camerasecurity/3.unvr-pro/p-mkt1-unvr-pro.png",
      "/images/camerasecurity/3.unvr-pro/p-mkt2-unvr-pro.png",
      "/images/camerasecurity/3.unvr-pro/p-mkt3-unvr-pro.png",
      "/images/camerasecurity/3.unvr-pro/p-mkt4-unvr-pro.png",
      "/images/camerasecurity/3.unvr-pro/p-mkt5-unvr-pro.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/3.unvr-pro/p-mkt5-unvr-pro.png",
      "/images/camerasecurity/3.unvr-pro/p-itb-unvr-pro.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Power Method (1) Universal AC input, 100–240V AC, 3A Max., 50/60 Hz (1) USP-RPS DC input, 11.5V DC, 13.91A",
      "Enclosure Material SGCC steel",
      "Power Supply AC/DC, internal, 200W",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442 x 325 x 87 mm (17.4 x 12.8 x 3.4')" },
          { label: "Managed Cameras", value: "(70) HD (35) 2K (24) 4K" },
          { label: "Managed Access Hub", value: "150" },
          { label: "Storage Capacity", value: "(7) 3.5' drive bays" },
          { label: "Data Protection", value: "✓" },
          { label: "Vantage Point", value: "✓" },
          { label: "Networking Interface", value: "(1) 10G SFP+ port (1) GbE RJ45 port " },
          { label: "Power Redundancy", value: "✓" },
          { label: "Form Factor", value: "Rack Mount (2U)" },
          { label: "Door Access Support", value: "✓" },
          { label: "Management Applications", value: "UniFi Protect UniFi Access" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Hard Drive Capacity", value: "(7) 2.5/3.5' HDD / SSD support" },
          { label: "Max. Power Budget for Drives", value: "135W" },
          { label: "Max. Power Consumption", value: "160W" },
          { label: "Power Method", value: "(1) Universal AC input, 100–240V AC, 3A Max., 50/60 Hz (1) USP-RPS DC input, 11.5V DC, 13.91A" },
          { label: "Power Supply", value: "AC/DC, internal, 200W" },
          { label: "Processor", value: "Quad ARM® Cortex®-A57 cores at 1.7GHz" },
          { label: "Memory", value: "8 Gb" },
          { label: "Management", value: "Ethernet" },
          { label: "Display", value: "1.3' touchscreen" },
          { label: "Weight", value: "Without mounting brackets: 9.2 kg (20.3 lb) With mounting brackets: 9.5 kg (20.8 lb)" },
          { label: "Enclosure Material", value: "SGCC steel" },
          { label: "Mount Material", value: "SGCC steel" },
          { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 06697-21-08356" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/3.unvr-pro/p-itb-unvr-pro.png" },
    ],
  },

  // Produk  Keempat dari Camera Security, SF NVRs and Edge Devices
  {
    id: "UNVR",
    name: "Network Video Recorder",
    category: "Camera Security",
    subfilter: "NVRs and Edge Devices",
    image: "/images/camerasecurity/4.unvr/1.p-utama-unvr.png",
    shortDescription:
      "A video recorder with (4) 2.5/3.5' HDD bays that can support up to 30 days of storage for (18) 4K cameras or (60) Full HD cameras.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],


    // SKU produk
    sku: "UNVR",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/4.unvr/1.p-utama-unvr.png",
      "/images/camerasecurity/4.unvr/2.p-spec-unvr.png",
      "/images/camerasecurity/4.unvr/3.p-dimensi-unvr.png",
      "/images/camerasecurity/4.unvr/4.p-deployment-unvr.png",
      "/images/camerasecurity/4.unvr/p-itb-unvr.png",
      "/images/camerasecurity/4.unvr/p-mkt0-unvr.png",
      "/images/camerasecurity/4.unvr/p-mkt1-unvr.png",
      "/images/camerasecurity/4.unvr/p-mkt2-unvr.png",
      "/images/camerasecurity/4.unvr/p-mkt3-unvr.png",
      "/images/camerasecurity/4.unvr/p-mkt4-unvr.png",
      "/images/camerasecurity/4.unvr/p-mkt5-unvr.png",
      "/images/camerasecurity/4.unvr/p-mkt6-unvr.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/4.unvr/p-mkt4-unvr.png",
      "/images/camerasecurity/4.unvr/p-itb-unvr.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Power Method (1) Universal AC input, 100–240V AC, 2A Max., 50/60 Hz (1) USP-RPS DC input, 11.5V DC, 10.43A",
      "Enclosure Material SGCC steel",
      "Power Supply AC/DC, internal, 120W",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7')" },
          { label: "Managed Cameras", value: "(60) HD (30) 2K (18) 4K" },
          { label: "Managed Access Hub", value: "150" },
          { label: "Storage Capacity", value: "(7) 3.5' drive bays" },
          { label: "Data Protection", value: "✓" },
          { label: "Vantage Point", value: "✓" },
          { label: "Networking Interface", value: "(1) 10G SFP+ port (1) GbE RJ45 port " },
          { label: "Power Redundancy", value: "✓" },
          { label: "Form Factor", value: "Rack Mount (1U)" },
          { label: "Door Access Support", value: "✓" },
          { label: "Management Applications", value: "UniFi Protect UniFi Access" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Hard Drive Capacity", value: "(7) 2.5/3.5' HDD / SSD support" },
          { label: "Max. Power Budget for Drives", value: "75W" },
          { label: "Max. Power Consumption", value: "100W" },
          { label: "Power Method", value: "(1) Universal AC input, 100–240V AC, 2A Max., 50/60 Hz (1) USP-RPS DC input, 11.5V DC, 10.43A " },
          { label: "Power Supply", value: "AC/DC, internal, 120W" },
          { label: "Processor", value: "Quad ARM® Cortex®-A57 cores at 1.7GHz" },
          { label: "Memory", value: "4 Gb" },
          { label: "Management", value: "Ethernet" },
          { label: "Display", value: "1.3' touchscreen" },
          { label: "Weight", value: "Without mounting brackets: 5.1 kg (11.3 lb) With mounting brackets: 5.2 kg (11.5 lb)" },
          { label: "Enclosure Material", value: "SGCC steel" },
          { label: "Mount Material", value: "SGCC steel" },
          { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC, Anatel: 01924-21-08356" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/4.unvr/p-itb-unvr.png" },
    ],
  },

  // Produk Kelima dari CameraSecurity, SF NVRs and Edge Devices
  {
    id: "UNVR-Instant",
    name: "Network Video Recorder Instant",
    category: "Camera Security",
    subfilter: "NVRs and Edge Devices",
    image: "/images/camerasecurity/5.unvr-instant/1.p-utama-unvr-instant.png",
    shortDescription:
      "Compact UniFi Protect NVR with 3.5' HDD support, featuring an integrated 6-port PoE switch, integrated HDMI View Port, and a capacity for (6) 4K cameras or (15) Full HD cameras.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UNVR-INSTANT",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/5.unvr-instant/1.p-utama-unvr-instant.png",
      "/images/camerasecurity/5.unvr-instant/2.p-spec-unvr-instant.png",
      "/images/camerasecurity/5.unvr-instant/3.p-dimensi-unvr-instant.png",
      "/images/camerasecurity/5.unvr-instant/4.p-deployment-unvr-instant.png",
      "/images/camerasecurity/5.unvr-instant/p-itb-unvr-instant.png",
      "/images/camerasecurity/5.unvr-instant/p-mkt0-unvr-instant.png",
      "/images/camerasecurity/5.unvr-instant/p-mkt1-unvr-instant.png",
      "/images/camerasecurity/5.unvr-instant/p-mkt2-unvr-instant.png",
      "/images/camerasecurity/5.unvr-instant/p-mkt3-unvr-instant.png",
      "/images/camerasecurity/5.unvr-instant/p-mkt4-unvr-instant.png",
      "/images/camerasecurity/5.unvr-instant/p-mkt5-unvr-instant.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/5.unvr-instant/p-mkt5-unvr-instant.png",
      "/images/camerasecurity/5.unvr-instant/p-itb-unvr-instant.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Compact UniFi Protect NVR with 3",
      "Enclosure Material Polycarbonate",
      "Power Method Universal AC input, 100-240VAC, 1.5A Max, 50/60 Hz",
      "Storage Capacity (1) 3.5' drive bay"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "220 x 220 x 47 mm (8.7 x 8.7 x 1.9')" },
          { label: "Managed Cameras", value: "(15) HD (8) 2K (6) 4K" },
          { label: "Managed Access Hub", value: "50" },
          { label: "Storage Capacity", value: "(1) 3.5' drive bay" },
          { label: "Data Protection", value: "✓" },
          { label: "Vantage Point", value: "✓" },
          { label: "Networking Interface", value: "(1) GbE RJ45 uplink port (6) GbE PoE RJ45 downlink ports (1) HDMI port (Viewport)" },
          { label: "Form Factor", value: "Compact Desktop" },
          { label: "Mounting", value: "Wall, Din rail mount (Included)" },
          { label: "Door Access Support", value: "✓" },
          { label: "Management Applications", value: "UniFi Protect UniFi Access" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Hard Drive Capacity", value: "(1) 3.5' HDD support" },
          { label: "Max. Power Budget for Drives", value: "11W" },
          { label: "Max. Power Consumption", value: "9W" },
          { label: "Power Method", value: "Universal AC input, 100-240VAC, 1.5A Max, 50/60 Hz" },
          { label: "Power Supply", value: "AC/DC, Internal, 60W" },
          { label: "PoE Budget", value: "40W" },
          { label: "Max. PoE Wattage per Port by PSE PoE", value: "15.4W" },
          { label: "Voltage Range PoE Mode", value: "44-57V" },
          { label: "Processor", value: "Quad-core ARM® Cortex®-A55 at 1.7 GHz" },
          { label: "Memory", value: "4 Gb" },
          { label: "Management", value: "Ethernet Bluetooth" },
          { label: "Display", value: "1.14' screen" },
          { label: "Weight", value: "1.04 kg (2.3 lb)" },
          { label: "", value: "SGCC steel" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "LEDs Ethernet", value: "✓" },
          { label: "LEDs PoE", value: "✓" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE, Electrical Safety, SRRC, Anatel: 06781-25-08356" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/5.unvr-instant/p-itb-unvr-instant.png" },
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
    ]
  },

  //Produk Keenam dari Camera Security, SF NVRs and Edge Devices
  {
    id: "UNVR-Instant-Kit",
    name: "Network Video Recorder Instant Kit",
    category: "Camera Security",
    subfilter: "NVRs and Edge Devices",
    image: "/images/camerasecurity/6.unvr-instant-kit/1.p-utama-unvr-instant-kit.png",
    shortDescription:
      "Compact UniFi Protect NVR Kit, includes (1) UniFi Protect NVR Instant with (4) G5 Turret Ultra cameras and (1) 1TB HDD, delivering an all-in-one solution for fast and effortless setup.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UNVR-INSTANT-KIT",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/6.unvr-instant-kit/1.p-utama-unvr-instant-kit.png",
      "/images/camerasecurity/6.unvr-instant-kit/2.p-spec-unvr-instant-kit1.png",
      "/images/camerasecurity/6.unvr-instant-kit/3.p-dimensi-unvr-instant-kit1.png",
      "/images/camerasecurity/6.unvr-instant-kit/4.p-dimensi-unvr-instant-kit2.png",
      "/images/camerasecurity/6.unvr-instant-kit/5.p-spec-unvr-instant-kit2.png",
      "/images/camerasecurity/6.unvr-instant-kit/6.p-spec-unvr-instant-kit2.png",
      "/images/camerasecurity/6.unvr-instant-kit/p-itb-unvr-instant-kit.png",
      "/images/camerasecurity/6.unvr-instant-kit/p-mkt0-unvr-instant-kit.png",
      "/images/camerasecurity/6.unvr-instant-kit/p-mkt1-unvr-instant-kit1.png",
      "/images/camerasecurity/6.unvr-instant-kit/p-mkt2-unvr-instant-kit1.png",
      "/images/camerasecurity/6.unvr-instant-kit/p-mkt3-unvr-instant-kit1.png",
      "/images/camerasecurity/6.unvr-instant-kit/p-mkt4-unvr-instant-kit1.png",
      "/images/camerasecurity/6.unvr-instant-kit/p-mkt5-unvr-instant-kit1.png",
      "/images/camerasecurity/6.unvr-instant-kit/p-mkt6-unvr-instant-kit1.png",
      "/images/camerasecurity/6.unvr-instant-kit/p-mkt7-unvr-instant-kit1.png",
      "/images/camerasecurity/6.unvr-instant-kit/p-mkt8-unvr-instant-kit1.png",
      "/images/camerasecurity/6.unvr-instant-kit/p-mkt9-unvr-instant-kit2.png",
      "/images/camerasecurity/6.unvr-instant-kit/p-mkt10-unvr-instant-kit2.png",
      "/images/camerasecurity/6.unvr-instant-kit/p-mkt11-unvr-instant-kit2.png",
      "/images/camerasecurity/6.unvr-instant-kit/p-mkt12-unvr-instant-kit2.png",
      "/images/camerasecurity/6.unvr-instant-kit/p-mkt13-unvr-instant-kit2.png",
      "/images/camerasecurity/6.unvr-instant-kit/p-mkt14-unvr-instant-kit2.png",
      "/images/camerasecurity/6.unvr-instant-kit/p-mkt15-unvr-instant-kit2.png",
      "/images/camerasecurity/6.unvr-instant-kit/p-mkt16-unvr-instant-kit3.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/6.unvr-instant-kit/p-mkt6-unvr-instant-kit1.png",
      "/images/camerasecurity/6.unvr-instant-kit/p-itb-unvr-instant-kit.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Storage Capacity (1) 3.5' drive bay",
      "Networking Interface (1) GbE RJ45 uplink port (6) GbE PoE RJ45 downlink ports (1) HDMI port (Viewport)",
      "Rotation Speed 5400 RPM"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Network Video Recorder Instant",
        items: [
          { label: "Dimensions", value: "220 x 220 x 47 mm (8.7 x 8.7 x 1.9')" },
          { label: "UniFi Application Suite Protect", value: "✓" },
          { label: "UniFi Application Suite Access", value: "✓" },
          { label: "Managed Cameras", value: "(15) HD (8) 2K (6) 4K" },
          { label: "Managed Access Hub", value: "50" },
          { label: "Storage Capacity", value: "(1) 3.5' drive bay" },
          { label: "Data Protection", value: "✓" },
          { label: "Vantage Point", value: "✓" },
          { label: "Networking Interface", value: "(1) GbE RJ45 uplink port (6) GbE PoE RJ45 downlink ports (1) HDMI port (Viewport)" },
          { label: "Form Factor", value: "Compact Desktop" },
          { label: "Mounting", value: "Wall, Din rail mount (Included)" },
          { label: "Door Access Support", value: "✓" },
          { label: "Management Applications", value: "UniFi Protect UniFi Access" },
          { label: "Hard Drive Capacity", value: "(1) 3.5' HDD support" },
          { label: "Max. Power Budget for Drives", value: "11W" },
          { label: "Max. Power Consumption", value: "9W" },
          { label: "Power Method", value: "Universal AC input, 100-240VAC, 1.5A Max, 50/60 Hz" },
          { label: "Power Supply", value: "AC/DC, Internal, 60W" },
          { label: "PoE Budget", value: "40W" },
          { label: "Max. PoE Wattage per Port by PSE PoE", value: "15.4W" },
          { label: "Voltage Range PoE Mode", value: "44-57V" },
          { label: "Processor", value: "Quad-core ARM® Cortex®-A55 at 1.7 GHz" },
          { label: "Memory", value: "4 Gb" },
          { label: "Management", value: "Ethernet Bluetooth" },
          { label: "Display", value: "1.14' screen" },
          { label: "Weight", value: "1.04 kg (2.3 lb)" },
          { label: "", value: "SGCC steel" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "LEDs Ethernet", value: "✓" },
          { label: "LEDs PoE", value: "✓" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE, Electrical Safety, SRRC, Anatel: 06781-25-08356" },
        ]
      },
      {
        title: "G5 Turret Ultra",
        items: [
          { label: "Dimensions", value: "⌀90 x 71.2 mm (⌀3.5 x 2.8')" },
          { label: "IR Night Vision", value: "30 m (98 ft)" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "2K" },
          { label: "Field of View", value: "H: 102.4°, V: 54.9°, D: 120.6°" },
          { label: "Audio", value: "H: 102.4°, V: 54.9°, D: 120.6°" },
          { label: "Weatherproofing", value: "IP66" },
          { label: "Tamper Resistance", value: "IK04" },
          { label: "Mounting", value: "Wall, ceiling mount (Included) Junction box, arm mount (Optional)" },
          { label: "Networking Interface", value: "10/100 MbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "4MP 2688 x 1512 (16:9)" },
          { label: "Optics Sensor", value: "1/2.4' CMOS" },
          { label: "Optics Lens", value: "Fixed Focal Length" },
          { label: "Optics Night Mode", value: "Built-in IR LED illumination and IR cut filter" },
          { label: "Max. Power Consumption", value: "4W" },
          { label: "Supported Voltage Range", value: "37—57V DC" },
          { label: "Power Method", value: "PoE" },
          { label: "Processor", value: "Dual-core Arm® Cortex®-A7 based chip" },
          { label: "Weight", value: "330 g (11.6 oz)" },
          { label: "Enclosure Material", value: "Aluminum alloy, UV-stabilized polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Cable Cable Connector Type", value: "RJ45" },
          { label: "Cable Cable Diameter", value: "5 mm (0.2')" },
          { label: "Cable Cable Length", value: "30 cm (1 ft)" },
          { label: "Cable Jacket Material", value: "Polycarbonate" },
          { label: "Cable Jacket Enclosure Dimensions", value: "⌀20 x 70.6 mm (0.8 x 2.8')" },
          { label: "Cable Jacket Enclosure Material", value: "Thermoplastic elastomer, polycarbonate, silicone rubber" },
          { label: "Ambient Operating Temperature", value: "-30 to 50° C (-22 to 122° F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
      {
        title: "HDD",
        items: [
          { label: "Dimensions", value: "147 x 101.6 x 26.1 mm (5.75 x 4 x 1')" },
          { label: "Hard Disk Form Factor", value: "30 m (98 ft)" },
          { label: "Weight", value: "✓" },
          { label: "Storage Capacity", value: "2K" },
          { label: "Power Method", value: "PoE" },
          { label: "Management Interface", value: "SATA 6 Gb/s" },
          { label: "Rotation Speed", value: "5400 RPM" },
          { label: "Workload Rating", value: "180 TB/year" },
          { label: "mean Time Between Fallure", value: "1,000,000 h" },
          { label: "Ambient Operating Temperature", value: "0 to 65° C (32 to 149° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, CE, TUV, RCM, KC, BSMI" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/6.unvr-instant-kit/p-itb-unvr-instant-kit.png" },
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
    ]
  },

  // Produk Ketujuh dari Camera Security, SF NVRs and Edge Devices
  {
    id: "AI-Key",
    name: "AI Key",
    category: "Camera Security",
    subfilter: "NVRs and Edge Devices",
    image: "/images/camerasecurity/7.ai-key/1.p-utama-ai-key.png",
    shortDescription:
      "Edge AI appliance that enhances any UniFi Protect deployment with proactive, AI-driven threat detection and alerting, capable of analyzing up to 1,800 smart detection events per hour.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "AI-KEY",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/7.ai-key/1.p-utama-ai-key.png",
      "/images/camerasecurity/7.ai-key/2.p-spec-ai-key.png",
      "/images/camerasecurity/7.ai-key/3.p-dimensi-ai-key.png",
      "/images/camerasecurity/7.ai-key/4.p-deployment-ai-key.png",
      "/images/camerasecurity/7.ai-key/p-itb-ai-key.png",
      "/images/camerasecurity/7.ai-key/p-mkt0-ai-key.png",
      "/images/camerasecurity/7.ai-key/p-mkt1-ai-key.png",
      "/images/camerasecurity/7.ai-key/p-mkt2-ai-key.png",
      "/images/camerasecurity/7.ai-key/p-mkt3-ai-key.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/7.ai-key/p-itb-ai-key.png",
      "/images/camerasecurity/7.ai-key/4.p-deployment-ai-key.png",
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Compute Capacity 1,800 smart detections / hour",
      "Power Method PoE++",
      "Enclosure Material Aluminium alloy"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "134.2 x 131.2 x 33.7 mm (5.3 x 5.2 x 1.3')" },
          { label: "Weight", value: "635 g (1.4 lb)" },
          { label: "Enclosure Material", value: "Aluminium alloy" },
          { label: "Compare Capacity", value: "1,800 smart detections / hour" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Max. Power Consumption", value: "45W" },
          { label: "Power Method", value: "PoE++" },
          { label: "Supported Volatage Range", value: "50–57V" },
          { label: "Processor", value: "Arm® Cortex®-A78AE v8.2" },
          { label: "System Memory", value: "16 GB LPDDR5" },
          { label: "On Board Storage", value: "256 GB SSD" },
          { label: "LCM Display", value: "(1) 1.3' touchscreen" },
          { label: "Management", value: "Ethernet" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "ESD/EMP Protection", value: "Air: ± 12kV, contact: ± 8kV" },
          { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/7.ai-key/p-itb-ai-key.png" },
    ],
  },

  // Produk Kedelapan dari Camera Security, SF NVRs and Edge Devices 
  {
    id: "UP-AI-Port",
    name: "AI Port",
    category: "Camera Security",
    subfilter: "NVRs and Edge Devices",
    image: "/images/camerasecurity/8.up-ai-port/1.p-utama-up-ai-port.png",
    shortDescription:
      "AI appliance that enhances any UniFI or third-party camera with AI detection, classification, and recognition capabilites.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UP-AI-PORT",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/8.up-ai-port/1.p-utama-up-ai-port.png",
      "/images/camerasecurity/8.up-ai-port/2.p-dimensi-up-ai-port.png",
      "/images/camerasecurity/8.up-ai-port/3.p-deployment-up-ai-port.png",
      "/images/camerasecurity/8.up-ai-port/p-itb-up-ai-port.png",
      "/images/camerasecurity/8.up-ai-port/p-mkt1-up-ai-port.png",
      "/images/camerasecurity/8.up-ai-port/p-mkt2-up-ai-port.png",
      "/images/camerasecurity/8.up-ai-port/p-mkt3-up-ai-port.png",
      "/images/camerasecurity/8.up-ai-port/p-mkt4-up-ai-port.png",
      "/images/camerasecurity/8.up-ai-port/p-mkt5-up-ai-port.png",
      "/images/camerasecurity/8.up-ai-port/p-mkt6-up-ai-port.png",
      "/images/camerasecurity/8.up-ai-port/p-mkt7-up-ai-port.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/8.up-ai-port/p-mkt5-up-ai-port.png",
      "/images/camerasecurity/8.up-ai-port/p-itb-up-ai-port.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Polycarbonate",
      "Resolution Max. camera resolution: Width: 3840 pixels Height: 2160 pixels",
      "Networking Interface (1) GbE RJ45 port"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Without mount: 150 x 64 x 38.4 mm (5.9 x 2.5 x 1.5') With mount: 152.7 x 69 x 47.8 mm (6 x 2.7 x 1.9')" },
          { label: "Resolution", value: "Max. camera resolution: Width: 3840 pixels Height: 2160 pixels" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Power Method", value: "PoE PoE+ input required for PoE output (12.95W) PoE++ input required for PoE+ output (25.5W)" },
          { label: "Pole Mount Diameter", value: ">45 mm (1.8') on pipe outer diameter" },
          { label: "Weight", value: "Without mount: 258.3 g (9.1 oz) With mount: 294 g (10.4 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-20 to 40° C (-4 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "20 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements Web Application", value: "UniFi Protect: Version 5.1 and later" },
          { label: "Application Requirements Mobile App", value: "UniFi Protect iOS™ and Android™" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/8.up-ai-port/p-itb-up-ai-port.png" },
    ],
  },

  // Produk Kesembilan dari Camera Security, SF NVRs and Edge Devices
  {
    id: "UP-Viewport",
    name: "Protect Viewport",
    category: "Camera Security",
    subfilter: "NVRs and Edge Devices",
    image: "/images/camerasecurity/9.up-viewport/1.p-utama-up-viewport.png",
    shortDescription:
      "Easy-to-use hub for viewing Protect camera feeds on an HDMI display.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UP-VIEWPORT",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/9.up-viewport/1.p-utama-up-viewport.png",
      "/images/camerasecurity/9.up-viewport/2.p-dimensi-up-viewport.png",
      "/images/camerasecurity/9.up-viewport/3.p-deployment-up-viewport.png",
      "/images/camerasecurity/9.up-viewport/p-itb-up-viewport.png",
      "/images/camerasecurity/9.up-viewport/p-mkt0-up-viewport.png",
      "/images/camerasecurity/9.up-viewport/p-mkt1-up-viewport.png",
      "/images/camerasecurity/9.up-viewport/p-mkt2-up-viewport.png",
      "/images/camerasecurity/9.up-viewport/p-mkt3-up-viewport.png",
      "/images/camerasecurity/9.up-viewport/p-mkt4-up-viewport.png",
      "/images/camerasecurity/9.up-viewport/p-mkt5-up-viewport.png",
      "/images/camerasecurity/9.up-viewport/p-mkt6-up-viewport.png",

    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/9.up-viewport/p-mkt3-up-viewport.png",
      "/images/camerasecurity/9.up-viewport/p-itb-up-viewport.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Power Method PoE",
      "Enclosure Material Polycarbonate",
      "Mount Material Polycarbonate"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "157 x 52 x 37 mm (6.2 x 2.1 x 1.5')" },
          { label: "Weight", value: "Without mount: 230 g (8.1 oz) With TV mount: 252 g (8.9 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Power Method", value: "PoE" },
          { label: "Max. Power Consumption", value: "9.5W" },
          { label: "ESD/EMP Protection", value: "Air: ± 8kV, contact: ± 4kV" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "20 to 80% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE, Anatel: 06681-25-08356" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements Web Application", value: "UniFi Protect" },
          { label: "Application Requirements Mobile App", value: "UniFi Protect iOS™ and Android™" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/9.up-viewport/p-itb-up-viewport.png" },
    ],
  },

 // Produk Kesepuluh dari Camera Security, SF NVRs and Edge Devices
  {
    id: "UCK-G2-SSD",
    name: "CloudKey+",
    category: "Camera Security",
    subfilter: "NVRs and Edge Devices",
    image: "/images/camerasecurity/10.uck-g2-ssd/1.p-utama-uck-g2-ssd.png",
    shortDescription:
      "Compact UniFi Console that connects directly to the Site Manager at unifi.ui.com for powerful, multi-application site management.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UCK-G2-SSD",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/10.uck-g2-ssd/1.p-utama-uck-g2-ssd.png",
      "/images/camerasecurity/10.uck-g2-ssd/2.p-spec-uck-g2-ssd.png",
      "/images/camerasecurity/10.uck-g2-ssd/3.p-dimensi-uck-g2-ssd.png",
      "/images/camerasecurity/10.uck-g2-ssd/4.p-deployment-uck-g2-ssd.png",
      "/images/camerasecurity/10.uck-g2-ssd/p-mkt0-uck-g2-ssd.png",
      "/images/camerasecurity/10.uck-g2-ssd/p-mkt1-uck-g2-ssd.png",
      "/images/camerasecurity/10.uck-g2-ssd/p-mkt2-uck-g2-ssd.png",
      "/images/camerasecurity/10.uck-g2-ssd/p-mkt3-uck-g2-ssd.png",
      "/images/camerasecurity/10.uck-g2-ssd/p-mkt4-uck-g2-ssd.png",
      "/images/camerasecurity/10.uck-g2-ssd/p-mkt5-uck-g2-ssd.png",
      "/images/camerasecurity/10.uck-g2-ssd/p-mkt6-uck-g2-ssd.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/10.uck-g2-ssd/p-mkt1-uck-g2-ssd.png",
      "/images/camerasecurity/10.uck-g2-ssd/p-mkt4-uck-g2-ssd.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Compact UniFi Console that connects directly to the Site Manager at unifi",
      "com for powerful",
      "multi-application site management",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "131.2 x 27.1 x 134.2 mm (5.2 x 1.1 x 5.3')" },
          { label: "UniFi Application Suite", value: "✓" },
          { label: "UniFi Application Suite", value: "✓" },
          { label: "UniFi Application Suite", value: "✓" },
          { label: "UniFi Application Suite", value: "✓" },
          { label: "UniFi Application Suite", value: "✓" },
          { label: "Managed Cameras", value: "(24) HD (14) 2K (8) 4K" },
          { label: "Managed Access Hubs", value: "80" },
          { label: "Networking Interface", value: "(1) GbE RJ45" },
          { label: "Form Factor", value: "Compact Desktop" },
          { label: "Door Access Support", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Hard Drive Capacity", value: "1 TB 2.5' SATA SSD  (User-upgradeable)" },
          { label: "Max. Power Consumption", value: "9.6W" },
          { label: "Power Method", value: "PoE USB-C power with Quick charge 2.0/3.0 power adapter, 9V DC, 2A (Optional)" },
          { label: "Processor", value: "Octa-core Arm® Cortex®-A53 based chip" },
          { label: "Memory", value: "32 GB eMMC 3 GB RAM" },
          { label: "Management", value: "Ethernet Bluetooth" },
          { label: "Display", value: "1.42' gray-scale OLED" },
          { label: "Weight", value: "560 g (1.2 lb)" },
          { label: "Enclosure Material", value: "Anodized Aluminum" },
          { label: "Ambient Operating Temperature", value: "0 to 35° C (32 to 95° F)" },
          { label: "Ambient Operating Humidity", value: "20 to 80% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 05196-25-08356, SRRC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/10.uck-g2-ssd/p-mkt1-uck-g2-ssd.png" },
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
        name: "2.5' SSD, 1 TB",
        image: "/images/dcs-box.png",
        price: 299,
        description: "2.5' SATA solid-state drive designed for local storage of CloudKey+.",
        specs: [
          "Management Interface SATA 3, 6 Gb/s"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/power-cable-uck-g2-ssd"
      },
      {
        id: 3,
        name: "CloudKey Rack Mount",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Mount your CloudKey or CloudKey+ into a 19' rack.",
        specs: [
          "Mounts into a 19' rack",
          "Front-panel ethernet port for a clean installation"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "CloudKey+ Stand",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Sleek, metal stand for CloudKey+.",
        specs: [
          "Enclosure Material Aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "134.2 x 71.7 x 43.2 mm (5.3 x 2.8 x 1.7')" },
          { label: "Weight", value: "225 g (7.9 oz)" },
          { label: "Enclosure Material", value: "Aluminum alloy" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Pertama dari Camera Security, SF Dome & Turret
  {
    id: "UVC-G6-Pro-Turret",
    name: "G6 Pro Turret",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camerasecurity/11.uvc-g6-pro-turret-w/1.p-utama-uvc-g6-pro-turret.png",
    shortDescription:
      "All-weather tamper-resistant 4K PoE+ camera with a Multi-TOPS AI engine, 2.36x optizal zoom, and a large 1/1.2' CMOS sensor for exceptional low-light clarity and long-range IR night vision.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G6-PRO-TURRET",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/11.uvc-g6-pro-turret-w/1.p-utama-uvc-g6-pro-turret.png",
      "/images/camerasecurity/11.uvc-g6-pro-turret-w/2.p-dimensi-uvc-g6-pro-turret-b.png",
      "/images/camerasecurity/11.uvc-g6-pro-turret-w/3.p-spec-uvc-g6-pro-turret-b.png",
      "/images/camerasecurity/11.uvc-g6-pro-turret-w/4.p-spec-uvc-g6-pro-turret-b.png",
      "/images/camerasecurity/11.uvc-g6-pro-turret-w/5.p-dimensi-uvc-g6-pro-turret-w.png",
      "/images/camerasecurity/11.uvc-g6-pro-turret-w/6.p-spec-uvc-g6-pro-turret-w.png",
      "/images/camerasecurity/11.uvc-g6-pro-turret-w/7.p-spec-uvc-g6-pro-turret-w.png",
      "/images/camerasecurity/11.uvc-g6-pro-turret-w/8.p-deployment-uvc-g6-pro-turret-w.png",
      "/images/camerasecurity/11.uvc-g6-pro-turret-w/p-itb-uvc-g6-pro-turret.png",
      "/images/camerasecurity/11.uvc-g6-pro-turret-w/p-mkt0-uvc-g6-pro-turret.png",
      "/images/camerasecurity/11.uvc-g6-pro-turret-w/p-mkt1-uvc-g6-pro-turret.png",
      "/images/camerasecurity/11.uvc-g6-pro-turret-w/p-mkt2-uvc-g6-pro-turret.png",
      "/images/camerasecurity/11.uvc-g6-pro-turret-w/p-mkt3-uvc-g6-pro-turret-b.png",
      "/images/camerasecurity/11.uvc-g6-pro-turret-w/p-mkt4-uvc-g6-pro-turret-b.png",
      "/images/camerasecurity/11.uvc-g6-pro-turret-w/p-mkt5-uvc-g6-pro-turret-b.png",
      "/images/camerasecurity/11.uvc-g6-pro-turret-w/p-mkt6-uvc-g6-pro-turret-b.png",
      "/images/camerasecurity/11.uvc-g6-pro-turret-w/p-mkt7-uvc-g6-pro-turret-b.png",
      "/images/camerasecurity/11.uvc-g6-pro-turret-w/p-mkt8-uvc-g6-pro-turret-b.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/11.uvc-g6-pro-turret-w/p-mkt0-uvc-g6-pro-turret.png",
      "/images/camerasecurity/11.uvc-g6-pro-turret-w/p-itb-uvc-g6-pro-turret.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Networking Interface GbE RJ45 port",
      "Max. Power Consumption 15W",
      "Power Method PoE+"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀117.2 × 116.5 mm  (⌀4.61 × 4.59')" },
          { label: "IR Night Vision", value: "40 m (131 ft)" },
          { label: "Zoom Mode", value: "2.36x Optical" },
          { label: "Face Recognition", value: "✓" },
          { label: "License Plate Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "4K" },
          { label: "Networking Interface", value: "GbE RJ45 port" },
          { label: "Field of View", value: "Wide: H: 113.8°, V: 61.9°, D: 134° Tele: H: 45.5°, V: 25.8°, D: 52°" },
          { label: "Audio", value: "Two-way audio" },
          { label: "Weatherproofing", value: "IP66" },
          { label: "Tamper Resistance", value: "IK04" },
          { label: "Mounting", value: "Ceiling, Wall mount (Included) Arm, Pendant mount, Junction box (Optional)" },
          { label: "UniFi Application Suite Protect", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "GbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
          { label: "Optics Sensor", value: "1/1.2' 8MP" },
          { label: "Optics Lens", value: "F 5.85-13.8 mm; ƒ/1.5-ƒ/2.9" },
          { label: "Optics Night Mode", value: "Built-in adaptive IR LED illumination and IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "15W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Power Method", value: "PoE+" },
          { label: "Processor", value: "Quad core Arm® Cortex®-A53 based chip" },
          { label: "Weight", value: "1.2 kg (2.6 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Expansion Slot", value: "MicroSD card" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Cable Cable Connector Type", value: "RJ45" },
          { label: "Cable Cable Diameter", value: "4.5 mm (0.2'')" },
          { label: "Cable Cable Length", value: "30 cm (1 ft)" },
          { label: "Cable Jacket Enclosure Dimensions", value: "⌀20 x 70.55 mm (⌀0.8 x 2.8')" },
          { label: "Cable Jacket Material", value: "Thermoplastic elastomer, polycarbonate, silicone Rubber" },
          { label: "Ambient Operating Temperature", value: "-30 to 50° C (-22 to 122° F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/11.uvc-g6-pro-turret-w/p-itb-uvc-g6-pro-turret.png" },
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
        id: 3,
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
        id: 4,
        name: "Ethernet Surge Protection",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Bidirectional protection for up to 10 GbE, PoE++, and 20kA surge discharge for indoor installation.",
        specs: [
          "Wall/DIN rail mount",
          "Multiple grounding points"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "89 x 25.5 x 37.4 mm (3.5 x 1 x 1.5')" },
          { label: "Weight", value: "74 g (2.6 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, SGCC steel" },
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
        productLink: "/products/mounting-kit"
      },
    ]
  },

  //Produk Kedua dari Camera Security, SF Dome & Turret
  {
    id: "UVC-G6-Pro-Dome",
    name: "G6 Pro Dome",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camerasecurity/12.uvc-g6-pro-dome-b/1.p-utama-uvc-g6-pro-dome.png",
    shortDescription:
      "All-weather vandal-proof 4K PoE+ camera with a Multi-TOPS AI engine, 2.36x optical zoom, and a large 1/1.2' CMOS sensor for exceptional low-light clarity and long-range IR night vision.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G6-PRO-DOME",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/12.uvc-g6-pro-dome-b/1.p-utama-uvc-g6-pro-dome.png",
      "/images/camerasecurity/12.uvc-g6-pro-dome-b/2.p-dimensi-uvc-g6-pro-dome-b.png",
      "/images/camerasecurity/12.uvc-g6-pro-dome-b/3.p-spec-uvc-g6-pro-dome-b.png",
      "/images/camerasecurity/12.uvc-g6-pro-dome-b/4.p-dimensi-uvc-g6-pro-dome-w.png",
      "/images/camerasecurity/12.uvc-g6-pro-dome-b/5.p-spec-uvc-g6-pro-dome-w.png",
      "/images/camerasecurity/12.uvc-g6-pro-dome-b/6.p-deployment-uvc-g6-pro-dome.png",
      "/images/camerasecurity/12.uvc-g6-pro-dome-b/p-itb-uvc-g6-pro-dome.png",
      "/images/camerasecurity/12.uvc-g6-pro-dome-b/p-mkt0-uvc-g6-pro-dome.png",
      "/images/camerasecurity/12.uvc-g6-pro-dome-b/p-mkt1-uvc-g6-pro-dome-b.png",
      "/images/camerasecurity/12.uvc-g6-pro-dome-b/p-mkt2-uvc-g6-pro-dome-b.png",
      "/images/camerasecurity/12.uvc-g6-pro-dome-b/p-mkt3-uvc-g6-pro-dome-b.png",
      "/images/camerasecurity/12.uvc-g6-pro-dome-b/p-mkt4-uvc-g6-pro-dome-b.png",
      "/images/camerasecurity/12.uvc-g6-pro-dome-b/p-mkt5-uvc-g6-pro-dome-b.png",
      "/images/camerasecurity/12.uvc-g6-pro-dome-b/p-mkt6-uvc-g6-pro-dome-b.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/12.uvc-g6-pro-dome-b/p-mkt0-uvc-g6-pro-dome.png",
      "/images/camerasecurity/12.uvc-g6-pro-dome-b/p-itb-uvc-g6-pro-dome.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "All-weather vandal-proof 4K PoE+ camera with a Multi-TOPS AI engine",
      "36x optical zoom",
      "and a large 1/1",
      "2' CMOS sensor for exceptional low-light clarity and long-range IR night vision"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀163.8 × 108.8 mm (⌀6.45 × 4.28')" },
          { label: "IR Night Vision", value: "40 m (131 ft)" },
          { label: "Zoom Mode", value: "2.36x Optical" },
          { label: "Face Recognition", value: "✓" },
          { label: "License Plate Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "4K" },
          { label: "Field of View", value: "Wide: H: 113.8°, V: 61.9°, D: 134° Tele: H: 45.5°, V: 25.8°, D: 52°" },
          { label: "Audio", value: "Microphone" },
          { label: "Weatherproofing", value: "IP66" },
          { label: "Tamper Resistance", value: "IK10" },
          { label: "Mounting", value: "Ceiling, Wall mount (Included) Gang Box Mounting Plate, Camera Dual Mount, Flush Mount, Weather Shield (Optional)" },
          { label: "UniFi Application Suite Protect", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "GbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
          { label: "Optics Sensor", value: "1/1.2' 8MP" },
          { label: "Optics Lens", value: "F 5.85-13.8 mm; ƒ/1.5-ƒ/2.9" },
          { label: "Optics Night Mode", value: "Built-in adaptive IR LED illumination and IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "15W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Power Method", value: "PoE+" },
          { label: "Processor", value: "Quad core Arm® Cortex®-A53 based chip" },
          { label: "Weight", value: "1.2 kg (2.6 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Mount Material", value: "Stainless steel" },
          { label: "Expansion Slot", value: "MicroSD card" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-20 to 50º C (-4 to 122º F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/12.uvc-g6-pro-dome-b/p-itb-uvc-g6-pro-dome.png" },
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
        id: 3,
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
        id: 4,
        name: "High Capacity microSD Card",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A microSD card designed for ultra endurance, optimized for UniFi devices, providing local storage and edge recording capabilities.",
        specs: [
          "Compact form factor, microSDXC™",
          "Note. Verified and optimized for UniFi device compatibility, may include microSDs from multiple brands."
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/mounting-kit"
      },
    ]
  },

  // Produk Ketiga dari Camera Security, SF Dome & Turret
  {
    id: "UVC-G6-Turret",
    name: "G6 Turret",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camerasecurity/13.uvc-g6-turret-b/1.p-utama-uvc-g6-w.png",
    shortDescription:
      "All-weather, tamper-resistant 4K PoE camera with a 1/1.8' 8MP image sensor, Multi-TOPS AI Engine, and 3-axis manual adjustment for flexible installation.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G6-TURRET",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/13.uvc-g6-turret-b/1.p-utama-uvc-g6-w.png",
      "/images/camerasecurity/13.uvc-g6-turret-b/2.p-dimensi-uvc-g6-w.png",
      "/images/camerasecurity/13.uvc-g6-turret-b/3.p-spec-uvc-g6-w.png",
      "/images/camerasecurity/13.uvc-g6-turret-b/4.p-spec-uvc-g6-w.png",
      "/images/camerasecurity/13.uvc-g6-turret-b/5.p-dimensi-uvc-g6-b.png",
      "/images/camerasecurity/13.uvc-g6-turret-b/6.p-spec-uvc-g6-b.png",
      "/images/camerasecurity/13.uvc-g6-turret-b/7.p-spec-uvc-g6-b.png",
      "/images/camerasecurity/13.uvc-g6-turret-b/8.p-deployment-uvc-g6.png",
      "/images/camerasecurity/13.uvc-g6-turret-b/p-mkt2-uvc-g6-w.png",
      "/images/camerasecurity/13.uvc-g6-turret-b/p-mkt3-uvc-g6-w.png",
      "/images/camerasecurity/13.uvc-g6-turret-b/p-mkt4-uvc-g6-w.png",
      "/images/camerasecurity/13.uvc-g6-turret-b/p-mkt5-uvc-g6-w.png",
      "/images/camerasecurity/13.uvc-g6-turret-b/p-mkt6-uvc-g6-w.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/13.uvc-g6-turret-b/p-mkt2-uvc-g6-w.png",
      "/images/camerasecurity/13.uvc-g6-turret-b/8.p-deployment-uvc-g6.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "IR Night Vision 30 m (98 ft)",
      "Weatherproofing IP66",
      "Tamper Resistance IK04"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀100 x 95 mm  (⌀3.9 x 3.7')" },
          { label: "IR Night Vision", value: "30 m (98 ft)" },
          { label: "Face Recognition", value: "✓" },
          { label: "License Plate Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "4K" },
          { label: "Field of View", value: "H: 109.9°, V: 56.7°, D: 134.1°" },
          { label: "Audio", value: "Microphone" },
          { label: "Weatherproofing", value: "IP66" },
          { label: "Tamper Resistance", value: "IK04" },
          { label: "Mounting", value: "Ceiling, Wall mount (Included) Gang Box Mounting Plate, Camera Dual Mount, Flush Mount, Weather Shield (Optional)" },
          { label: "UniFi Application Suite Protect", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "10/100 MbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
          { label: "Optics Sensor", value: "1/1.8' 8MP" },
          { label: "Optics Lens", value: "Fixed focal length" },
          { label: "Optics Night Mode", value: "Built-in adaptive IR LED illumination and IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "12.5W" },
          { label: "Supported Voltage Range", value: "37–57V DC" },
          { label: "Power Method", value: "PoE" },
          { label: "Processor", value: "Quad core Arm® Cortex®-A53 based chip" },
          { label: "Weight", value: "550 g (1.2 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Expansion Slot", value: "MicroSD card" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Cable Cable Connector Type", value: "(1) Factory reset" },
          { label: "Cable Cable Diameter", value: "(1) Factory reset" },
          { label: "Cable Cable Length", value: "(1) Factory reset" },
          { label: "Cable Jacket Material", value: "(1) Factory reset" },
          { label: "Cable Jacket Enclosure Dimensions", value: "(1) Factory reset" },
          { label: "Cable Jacket Enclosure Material", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "- 30 to 50º C (-22 to 122º F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/13.uvc-g6-turret-b/p-mkt2-uvc-g6-w.png" },
    ],

    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "High Capacity microSD Card",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A microSD card designed for ultra endurance, optimized for UniFi devices, providing local storage and edge recording capabilities.",
        specs: [
          "Compact form factor, microSDXC™",
          "Note. Verified and optimized for UniFi device compatibility, may include microSDs from multiple brands.Easy installation"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/mounting-kit-uvc-g6-turret"
      },
    ]
  },

  // Produk Keempat dari Camera Security, SF Dome & Turret
  {
    id: "UVC-G6-Dome",
    name: "G6 Dome",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camerasecurity/14.uvc-g6-dome-b/1.p-utama-uvc-g6-dome-b.png",
    shortDescription:
      "All-weather, vandal-proof 4K PoE camera with a 1/1.8' 8MP image sensor, Multi-TOPS AI Engine, and long-range IR night vision ideal for discreet installations in high-traffic areas.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G6-DOME",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/14.uvc-g6-dome-b/1.p-utama-uvc-g6-dome-b.png",
      "/images/camerasecurity/14.uvc-g6-dome-b/2.p-dimensi-uvc-g6-dome-b.png",
      "/images/camerasecurity/14.uvc-g6-dome-b/3.p-spec-uvc-g6-dome-b.png",
      "/images/camerasecurity/14.uvc-g6-dome-b/4.p-dimensi-uvc-g6-dome-w.png",
      "/images/camerasecurity/14.uvc-g6-dome-b/5.p-spec-uvc-g6-dome-w.png",
      "/images/camerasecurity/14.uvc-g6-dome-b/6.p-deployment-uvc-g6-dome.png",
      "/images/camerasecurity/14.uvc-g6-dome-b/p-itb-uvc-g6-dome.png",
      "/images/camerasecurity/14.uvc-g6-dome-b/p-mkt0-uvc-g6-dome.png",
      "/images/camerasecurity/14.uvc-g6-dome-b/p-mkt1-uvc-g6-dome-b.png",
      "/images/camerasecurity/14.uvc-g6-dome-b/p-mkt2-uvc-g6-dome-b.png",
      "/images/camerasecurity/14.uvc-g6-dome-b/p-mkt3-uvc-g6-dome-b.png",
      "/images/camerasecurity/14.uvc-g6-dome-b/p-mkt4-uvc-g6-dome-b.png",
      "/images/camerasecurity/14.uvc-g6-dome-b/p-mkt5-uvc-g6-dome-b.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/14.uvc-g6-dome-b/p-mkt0-uvc-g6-dome.png",
      "/images/camerasecurity/14.uvc-g6-dome-b/p-itb-uvc-g6-dome.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Weatherproofing IP66",
      "Networking Interface 10/100 MbE RJ45 port",
      "Power Method PoE"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀144.7x 96.3 mm (⌀5.7 x 3.8')" },
          { label: "IR Night Vision", value: "30 m (98 ft)" },
          { label: "Face Recognition", value: "✓" },
          { label: "License Plate Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "4K" },
          { label: "Networking Interface", value: "10/100 MbE RJ45 port" },
          { label: "Field of View", value: "H: 109.9°, V: 56.7°, D: 134.1°" },
          { label: "Audio", value: "Microphone" },
          { label: "Weatherproofing", value: "IP66" },
          { label: "Tamper Resistance", value: "IK10" },
          { label: "Mounting", value: "Ceiling, Wall mount (Included) Gang Box Mounting Plate, Camera Dual Mount, Flush Mount, Weather Shield (Optional)" },
          { label: "UniFi Application Suite Protect", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "10/100 MbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
          { label: "Optics Sensor", value: "1/1.8' 8MP" },
          { label: "Optics Lens", value: "Fixed focal length" },
          { label: "Optics Night Mode", value: "Built-in adaptive IR LED illumination and IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "9.25W" },
          { label: "Supported Voltage Range", value: "37—57V DC" },
          { label: "Power Method", value: "PoE" },
          { label: "Processor", value: "Quad-core Arm® Cortex®-A53 based chip" },
          { label: "Weight", value: "820 g (1.8 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-20 to 50º C (-4 to 122º F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/14.uvc-g6-dome-b/p-itb-uvc-g6-dome.png" },
    ],
  },

  // Produk Kelima dari Camera Security, SF Dome & Turret
  {
    id: "UVC-G6-Pro-360",
    name: "G6 Pro 360",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camerasecurity/15.uvc-g6-pro-360-b/1.p-utama-uvc-g6-pro-360-b.png",
    shortDescription:
      "All-weather, vandal-resistant 12MP PoE camera with panoramic 360° coverage, digital pan-tilt-zoom functionality, and smart IR functionality.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G6-PRO-360-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/15.uvc-g6-pro-360-b/1.p-utama-uvc-g6-pro-360-b.png",
      "/images/camerasecurity/15.uvc-g6-pro-360-b/2.p-dimensi-uvc-g6-pro-360-b.png",
      "/images/camerasecurity/15.uvc-g6-pro-360-b/3.p-spec-uvc-g6-pro-360-b.png",
      "/images/camerasecurity/15.uvc-g6-pro-360-b/6.p-deployment-uvc-g6-pro-360.png",
      "/images/camerasecurity/15.uvc-g6-pro-360-b/p-itb-uvc-g6-pro-360.png",
      "/images/camerasecurity/15.uvc-g6-pro-360-b/p-mkt0-uvc-g6-pro-360.png",
      "/images/camerasecurity/15.uvc-g6-pro-360-b/p-mkt1-uvc-g6-pro-360-b.png",
      "/images/camerasecurity/15.uvc-g6-pro-360-b/p-mkt2-uvc-g6-pro-360-b.png",
      "/images/camerasecurity/15.uvc-g6-pro-360-b/p-mkt3-uvc-g6-pro-360-b.png",
      "/images/camerasecurity/15.uvc-g6-pro-360-b/p-mkt4-uvc-g6-pro-360-b.png",
      "/images/camerasecurity/15.uvc-g6-pro-360-b/p-mkt5-uvc-g6-pro-360-b.png",
      "/images/camerasecurity/15.uvc-g6-pro-360-b/p-mkt6-uvc-g6-pro-360-b.png",
      "/images/camerasecurity/15.uvc-g6-pro-360-b/p-mkt9-uvc-g6-pro-360-b.png",
      "/images/camerasecurity/15.uvc-g6-pro-360-b/p-mkt11-uvc-g6-pro-360-b.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/15.uvc-g6-pro-360-b/p-mkt0-uvc-g6-pro-360.png",
      "/images/camerasecurity/15.uvc-g6-pro-360-b/p-itb-uvc-g6-pro-360.png",
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Aluminum alloy, polycarbonate",
      "Mount Material Polycarbonate",
      "Expansion Slot MicroSD card"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀147 x 65.5 (⌀5.8 x 2.6')" },
          { label: "IR Night Vision", value: "15m (50 ft) Smart IR (4x controllable zones)" },
          { label: "Face Recognition", value: "—" },
          { label: "License Plate Recognition", value: "—" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "12MP" },
          { label: "Field of View", value: "H: 180°, V: 180°, D: 180°" },
          { label: "Audio", value: "Two-Way Audio" },
          { label: "Weatherproofing", value: "IP66" },
          { label: "Tamper Resistance", value: "IK10" },
          { label: "Mounting", value: "Surface Mount (Included) AI 360 Junction Box, Camera Dual Mount, Arm Mount (Optional)" },
          { label: "UniFi Application Suite Protect", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "10/100 MbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "24 FPS" },
          { label: "Video Resolution", value: "12MP 3504 x 3504 (1:1)" },
          { label: "Optics Sensor", value: "1/1.6' 12MP" },
          { label: "Optics Lens", value: "Fisheye lens" },
          { label: "Optics Night Mode", value: "Built-in adaptive IR LED illumination and IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "7.14W" },
          { label: "Supported Voltage Range", value: "37—57V DC" },
          { label: "Power Method", value: "PoE+" },
          { label: "Processor", value: "Quad-core Arm® Cortex®-A53 based chip" },
          { label: "Weight", value: "610 g (1.3 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Expansion Slot", value: "MicroSD card" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-30 to 50º C (-22 to 122º F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/15.uvc-g6-pro-360-b/p-itb-uvc-g6-pro-360.png" },
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
        name: "Ethernet Surge Protection",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Bidirectional protection for up to 10 GbE, PoE++, and 20kA surge discharge for indoor installation.",
        specs: [
          "Wall/DIN rail mount",
          "Multiple grounding points"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "89 x 25.5 x 37.4 mm (3.5 x 1 x 1.5')" },
          { label: "Weight", value: "74 g (2.6 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, SGCC steel" },
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
        productLink: "/products/mounting-kit"
      },
    ]
  },

  //Produk Keenam dari Camera Security, SF Dome & Turret
  {
    id: "UVC-G6-180",
    name: "G6 180",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camerasecurity/16.uvc-g6-180-b/1.p-utama-uvc-g6-180-b.png",
    shortDescription:
      "Indoor/outdoor dual sensor 16MP 20 FPS PoE+ camera, with a Multi-TOPS AI Engine and panoramic 180° coverage.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G6-180-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/16.uvc-g6-180-b/1.p-utama-uvc-g6-180-b.png",
      "/images/camerasecurity/16.uvc-g6-180-b/2.p-spec-uvc-g6-180-b.png",
      "/images/camerasecurity/16.uvc-g6-180-b/3.p-dimensi-uvc-g6-180-b.png",
      "/images/camerasecurity/16.uvc-g6-180-b/265.png",
      "/images/camerasecurity/16.uvc-g6-180-b/p-deployment-uvc-g6-180.png",
      "/images/camerasecurity/16.uvc-g6-180-b/p-itb-uvc-g6-180.png",
      "/images/camerasecurity/16.uvc-g6-180-b/p-mkt0-uvc-g6-180.png",
      "/images/camerasecurity/16.uvc-g6-180-b/p-mkt1-uvc-g6-180-b.png",
      "/images/camerasecurity/16.uvc-g6-180-b/p-mkt2-uvc-g6-180-b.png",
      "/images/camerasecurity/16.uvc-g6-180-b/p-mkt5-uvc-g6-180-b.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/16.uvc-g6-180-b/p-mkt0-uvc-g6-180.png",
      "/images/camerasecurity/16.uvc-g6-180-b/p-itb-uvc-g6-180.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Power Method PoE+",
      "Weatherproofing IP66",
      "Enclosure Material Aluminum alloy, polycarbonate"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "136 x 64 x 92 mm (5.6 x 2.5 x 3.6')" },
          { label: "IR Night Vision", value: "20 m (65 ft)" },
          { label: "Face Recognition", value: "✓" },
          { label: "License Plate Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "Dual 4K" },
          { label: "Field of View", value: "H: 180°, V: 56.7°" },
          { label: "Audio", value: "Two-Way Audio" },
          { label: "Weatherproofing", value: "IP66" },
          { label: "Tamper Resistance", value: "IK04" },
          { label: "Mounting", value: "Ceiling, Pole, Wedge Mount, Pan Adapter (Included) Camera Junction Box, Arm mount, Dual Mount, Gang Box Mounting Plate (Optional)" },
          { label: "UniFi Application Suite Protect", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "10/100 MbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "20 FPS" },
          { label: "Video Resolution", value: "16MP 7680 x 2160 (3.5:1)" },
          { label: "Optics Sensor", value: "Dual 1/1.8' 8MP" },
          { label: "Optics Lens", value: "(2) Fixed focal length" },
          { label: "Optics Night Mode", value: "Built-in adaptive IR LED illumination and IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "15W" },
          { label: "Supported Voltage Range", value: "37—57V DC" },
          { label: "Power Method", value: "PoE+" },
          { label: "Processor", value: "Quad-core Arm® Cortex®-A53 based chip" },
          { label: "Weight", value: "839 g (1.8 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate, stainless steel" },
          { label: "Expansion Slot", value: "MicroSD card" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-20 to 50º C (-4 to 122º F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/16.uvc-g6-180-b/p-itb-uvc-g6-180.png" },
    ],
  },

  // Produk Ketujuh dari Camera Security, SF Dome & Turret
  {
    id: "UVC-AI-MS-4-B",
    name: "AI Multi Sensor 4",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camerasecurity/17.uvc-ai-ms-4-b/1.p-utama-uvc-ai-ms-4.png",
    shortDescription:
      "All-weather PoE++ 32MP multi-sensor camera featuring a Multi-TOPS AI engine, 2.33× optical zoom, 360° IR coverage, and four independently adjustable lenses for seamless wide-area and close-up monitoring.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-AI-MS-4-B",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/17.uvc-ai-ms-4-b/1.p-utama-uvc-ai-ms-4.png",
      "/images/camerasecurity/17.uvc-ai-ms-4-b/2.p-dimensi-uvc-ai-ms-4-b.png",
      "/images/camerasecurity/17.uvc-ai-ms-4-b/3.p-spec-uvc-ai-ms-4-b.png",
      "/images/camerasecurity/17.uvc-ai-ms-4-b/6.p-deployment-uvc-ai-ms-4-w.png",
      "/images/camerasecurity/17.uvc-ai-ms-4-b/241.png",
      "/images/camerasecurity/17.uvc-ai-ms-4-b/p-itb-uvc-ai-ms-4.png",
      "/images/camerasecurity/17.uvc-ai-ms-4-b/p-mkt0-uvc-ai-ms-4.png",
      "/images/camerasecurity/17.uvc-ai-ms-4-b/p-mkt1-uvc-ai-ms-4-b.png",
      "/images/camerasecurity/17.uvc-ai-ms-4-b/p-mkt2-uvc-ai-ms-4-b.png",
      "/images/camerasecurity/17.uvc-ai-ms-4-b/p-mkt4-uvc-ai-ms-4-b.png",
      "/images/camerasecurity/17.uvc-ai-ms-4-b/p-mkt5-uvc-ai-ms-4-b.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/17.uvc-ai-ms-4-b/p-mkt0-uvc-ai-ms-4.png",
      "/images/camerasecurity/17.uvc-ai-ms-4-b/p-itb-uvc-ai-ms-4.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Weatherproofing IP66",
      "IR Night Vision 30 m (98 ft)",
      "Power Method PoE"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀255 x 105 mm (⌀10.04 x 4.13')" },
          { label: "IR Night Vision", value: "20 m (65 ft)" },
          { label: "Zoom Mode", value: "2.33x Optical" },
          { label: "Face Recognition", value: "✓" },
          { label: "License Plate Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "32MP" },
          { label: "Field of View", value: "Wide:  H: 108.8°, V: 57.6° , D: 130.8° Tele: H: 42.8°, V: 24.1° , D: 49.1°" },
          { label: "Weatherproofing", value: "IP66" },
          { label: "Tamper Resistance", value: "IK10" },
          { label: "Mounting", value: "Ceiling mount (Included) Pole, Corner, Arm, Pendant mount (Optional)" },
          { label: "UniFi Application Suite Protect", value: "Protect" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "GbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "(4) 8MP 3840 x 2160 (16:9)" },
          { label: "Optics Sensor", value: "1/2.8' 8MP" },
          { label: "Optics Lens", value: "(4) F 3.18-7.42 mm; ƒ/1.8-ƒ/2.8" },
          { label: "Optics Night Mode", value: "Built-in (16) IR LEDs with adaptive control" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "34.6W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Power Method", value: "PoE++" },
          { label: "Processor", value: "Dual core Arm® Cortex®-A76 based chip" },
          { label: "Weight", value: "2.4 kg (5.3 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Mount Material", value: "Powder-coated aluminum alloy" },
          { label: "Expansion Slot", value: "(2) MicroSD card (1) M.2. 2280 SATA SSD" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-20 to 50º C (-4 to 122º F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/17.uvc-ai-ms-4-b/p-itb-uvc-ai-ms-4.png" },
    ],
  },

  // Produk kedelapan dari Camera Security, SF Dome & Turret
  {
    id: "UVC-G5-Turret-Ultra",
    name: "G5 Turret Ultra",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camerasecurity/18.uvc-g5-turret-ultra-b/1.p-utama-uvc-g5-turret-ultra.png",
    shortDescription:
      "Ultra-compact, tamper-resistant, and weatherproof 2K HD PoE camera with long-range night vision.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G5-TURRET-ULTRA",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/18.uvc-g5-turret-ultra-b/1.p-utama-uvc-g5-turret-ultra.png",
      "/images/camerasecurity/18.uvc-g5-turret-ultra-b/2.p-dimensi-uvc-g5-turret-ultra-w.png",
      "/images/camerasecurity/18.uvc-g5-turret-ultra-b/3.p-spec-uvc-g5-turret-ultra-w.png",
      "/images/camerasecurity/18.uvc-g5-turret-ultra-b/7.p-deployment-uvc-g5-turret-ultra.png",
      "/images/camerasecurity/18.uvc-g5-turret-ultra-b/p-itb-uvc-g5-turret-ultra.png",
      "/images/camerasecurity/18.uvc-g5-turret-ultra-b/p-mkt0-uvc-g5-turret-ultra.png",
      "/images/camerasecurity/18.uvc-g5-turret-ultra-b/p-mkt1-uvc-g5-turret-ultra-w.png",
      "/images/camerasecurity/18.uvc-g5-turret-ultra-b/p-mkt2-uvc-g5-turret-ultra-w.png",
      "/images/camerasecurity/18.uvc-g5-turret-ultra-b/p-mkt3-uvc-g5-turret-ultra-w.png",
      "/images/camerasecurity/18.uvc-g5-turret-ultra-b/p-mkt4-uvc-g5-turret-ultra-w.png",
      "/images/camerasecurity/18.uvc-g5-turret-ultra-b/p-mkt7-uvc-g5-turret-ultra-w.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/18.uvc-g5-turret-ultra-b/p-mkt0-uvc-g5-turret-ultra.png",
      "/images/camerasecurity/18.uvc-g5-turret-ultra-b/p-itb-uvc-g5-turret-ultra.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Weatherproofing IP66",
      "IR Night Vision 30 m (98 ft)",
      "Power Method PoE"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀90 x 71.2 mm (⌀3.5 x 2.8')" },
          { label: "IR Night Vision", value: "30 m (98 ft)" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "2K" },
          { label: "Field of View", value: "H: 102.4°, V: 54.9°, D: 120.6°" },
          { label: "Audio", value: "Microphone" },
          { label: "Weatherproofing", value: "IP66" },
          { label: "Tamper Resistance", value: "IK04" },
          { label: "Mounting", value: "Wall, ceiling mount (Included) Junction box, arm mount (Optional)" },
          { label: "UniFi Application Suite Protect", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "10/100 MbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "4MP 2688 x 1512 (16:9)" },
          { label: "Optics Sensor", value: "1/2.4' CMOS" },
          { label: "Optics Lens", value: "(2) Fixed focal length" },
          { label: "Optics Night Mode", value: "Built-in adaptive IR LED illumination and IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "4W" },
          { label: "Supported Voltage Range", value: "37—57V DC" },
          { label: "Power Method", value: "PoE" },
          { label: "Processor", value: "Quad-core Arm® Cortex®-A53 based chip" },
          { label: "Weight", value: "330 g (11.6 oz)" },
          { label: "Enclosure Material", value: "Aluminum alloy, UV-stabilized polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Cable Cable Connector Type", value: "RJ45" },
          { label: "Cable Cable Diameter", value: "5 mm (0.2')" },
          { label: "Cable Cable Length", value: "30 cm (1 ft)" },
          { label: "Cable Jacket Material", value: "Polycarbonate" },
          { label: "Cable Jacket Enclosure Dimensions", value: "⌀20 x 70.6 mm (0.8 x 2.8')" },
          { label: "Cable Jacket Enclosure Material", value: "Thermoplastic elastomer, polycarbonate, silicone rubber" },
          { label: "Ambient Operating Temperature", value: "-30 to 50° C (-22 to 122° F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/18.uvc-g5-turret-ultra-b/p-itb-uvc-g5-turret-ultra.png" },
    ],
  },

  // Produk Kesembilan dari Camera Security, SF Dome & Turret
  {
    id: "UVC-AI-Turret",
    name: "AI Turret",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camerasecurity/19.uvc-ai-turret-b/1.p-utama-uvc-ai-turret.png",
    shortDescription:
      "All-weather, vandal-proof 4K PoE+ turret camera with enhanced AI capabilities and IR and visible LEDs for night vision.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-AI-TURRET-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/19.uvc-ai-turret-b/1.p-utama-uvc-ai-turret.png",
      "/images/camerasecurity/19.uvc-ai-turret-b/2.p-dimensi-uvc-ai-turret-w.png",
      "/images/camerasecurity/19.uvc-ai-turret-b/3.p-spec-uvc-ai-turret-w.png",
      "/images/camerasecurity/19.uvc-ai-turret-b/8.p-deployment-uvc-ai-turret-b.png",
      "/images/camerasecurity/19.uvc-ai-turret-b/270.png",
      "/images/camerasecurity/19.uvc-ai-turret-b/p-itb-uvc-ai-turret.png",
      "/images/camerasecurity/19.uvc-ai-turret-b/p-mkt0-uvc-ai-turret.png",
      "/images/camerasecurity/19.uvc-ai-turret-b/p-mkt1-uvc-ai-turret-w.png",
      "/images/camerasecurity/19.uvc-ai-turret-b/p-mkt2-uvc-ai-turret-w.png",
      "/images/camerasecurity/19.uvc-ai-turret-b/p-mkt3-uvc-ai-turret-w.png",
      "/images/camerasecurity/19.uvc-ai-turret-b/p-mkt4-uvc-ai-turret-w.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/19.uvc-ai-turret-b/p-mkt0-uvc-ai-turret.png",
      "/images/camerasecurity/19.uvc-ai-turret-b/p-itb-uvc-ai-turret.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Processor Quad-core Arm® Cortex®-A53 based chip",
      "Enclosure Material Aluminum alloy, polycarbonate",
      "Power Method PoE+"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀118 x 111 mm (⌀4.6 x 4.4')" },
          { label: "IR Night Vision", value: "40 m (131 ft)" },
          { label: "Face Recognition", value: "✓" },
          { label: "License Plate Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "2K" },
          { label: "Field of View", value: "H: 109.9°, V: 56.7°, D: 134.1°" },
          { label: "Audio", value: "Two-way audio" },
          { label: "Weatherproofing", value: "IP66" },
          { label: "Tamper Resistance", value: "IK08" },
          { label: "Mounting", value: "Ceiling, arm, wall, pendant mount, junction box" },
          { label: "UniFi Application Suite Protect", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "GbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
          { label: "Optics Sensor", value: "1/1.8' 8MP" },
          { label: "Optics Lens", value: "Fixed focal length" },
          { label: "Optics Night Mode", value: "Built-in adaptive IR LED illumination and IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "20W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Power Method", value: "PoE+" },
          { label: "Processor", value: "Quad-core Arm® Cortex®-A53 based chip" },
          { label: "Weight", value: "990 g (2.2 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, UV-stabilized polycarbonate" },
          { label: "Expansion Slot", value: "MicroSD Card" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Cable Cable Connector Type", value: "RJ45" },
          { label: "Cable Cable Diameter", value: "4.5 mm (0.2')" },
          { label: "Cable Cable Length", value: "30 cm (1 ft)" },
          { label: "Cable Jacket Material", value: "Thermoplastic elastomer" },
          { label: "Cable Jacket Enclosure Dimensions", value: "⌀20 x 70.6 mm (0.8 x 2.8')" },
          { label: "Cable Jacket Enclosure Material", value: "Thermoplastic elastomer, polycarbonate, silicone rubber" },
          { label: "Ambient Operating Temperature", value: "-30 to 50° C (-22 to 122° F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/19.uvc-ai-turret-b/p-itb-uvc-ai-turret.png" },
    ],
  },

  // Produk Kesepuluh dari Camera Security, SF Dome & Turret
  {
    id: "UVC-AI-Dome",
    name: "AI Dome",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camerasecurity/20.uvc-ai-dome-b/1.p-utama-uvc-ai-dome.png",
    shortDescription:
      "All-weather, vandal-proof 4K PoE dome camera with enhanced AI capabilities and long-range IR night vision.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-AI-DOME-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/20.uvc-ai-dome-b/1.p-utama-uvc-ai-dome.png",
      "/images/camerasecurity/20.uvc-ai-dome-b/2.p-dimensi-uvc-ai-dome-w.png",
      "/images/camerasecurity/20.uvc-ai-dome-b/3.p-spec-uvc-ai-dome-w.png",
      "/images/camerasecurity/20.uvc-ai-dome-b/6.p-deployment-uvc-ai-dome.png",
      "/images/camerasecurity/20.uvc-ai-dome-b/p-itb-uvc-ai-dome.png",
      "/images/camerasecurity/20.uvc-ai-dome-b/p-mkt0-uvc-ai-dome.png",
      "/images/camerasecurity/20.uvc-ai-dome-b/p-mkt1-uvc-ai-dome-w.png",
      "/images/camerasecurity/20.uvc-ai-dome-b/p-mkt2-uvc-ai-dome-w.png",
      "/images/camerasecurity/20.uvc-ai-dome-b/p-mkt3-uvc-ai-dome-w.png",
      "/images/camerasecurity/20.uvc-ai-dome-b/p-mkt4-uvc-ai-dome-w.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/20.uvc-ai-dome-b/p-mkt0-uvc-ai-dome.png",
      "/images/camerasecurity/20.uvc-ai-dome-b/p-itb-uvc-ai-dome.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max. Power Consumption 10W",
      "Enclosure Material Aluminum alloy, polycarbonate",
      "Expansion Slot MicroSD Card"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀118 x 90.8 mm (⌀4.6 x 5.5')" },
          { label: "IR Night Vision", value: "40 m (131 ft)" },
          { label: "Face Recognition", value: "✓" },
          { label: "License Plate Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "4K" },
          { label: "Field of View", value: "H: 109.9°, V: 56.7°, D: 134.1°" },
          { label: "Audio", value: "Microphone" },
          { label: "Weatherproofing", value: "IP66" },
          { label: "Tamper Resistance", value: "IK10" },
          { label: "Mounting", value: "Arm, ceiling , pendant, wall mount, junction box" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "GbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
          { label: "Optics Sensor", value: "1/1.8' 8MP" },
          { label: "Optics Lens", value: "Fixed focal length" },
          { label: "Optics Night Mode", value: "Built-in adaptive IR LED illumination and IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "10W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Power Method", value: "PoE" },
          { label: "Processor", value: "Quad-core Arm® Cortex®-A53 based chip" },
          { label: "Weight", value: "700 g (1.5 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Mount Material", value: "Surface mount: polycarbonate" },
          { label: "Expansion Slot", value: "MicroSD Card" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Cable Cable Connector Type", value: "RJ45" },
          { label: "Cable Cable Diameter", value: "4.5 mm (0.2')" },
          { label: "Cable Cable Length", value: "30 cm (1 ft)" },
          { label: "Cable Jacket Material", value: "Thermoplastic elastomer" },
          { label: "Cable Jacket Enclosure Dimensions", value: "⌀20 x 70.6 mm (0.8 x 2.8')" },
          { label: "Cable Jacket Enclosure Material", value: "Thermoplastic elastomer, polycarbonate, silicone rubber" },
          { label: "Ambient Operating Temperature", value: "-30 to 50° C (-22 to 122° F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/20.uvc-ai-dome-b/p-itb-uvc-ai-dome.png" },
    ],
  },

  // Produk Kesebelas dari Camera Security, SF Dome & Turret
  {
    id: "UVC-AI-360",
    name: "AI 360",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camerasecurity/21.uvc-ai-360/1.p-utama-uvc-ai-360.png",
    shortDescription:
      "Indoor/outdoor 2K PoE camera with pan-tilt-zoom functionality that offers full 360° surveillance.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-AI-360-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/21.uvc-ai-360/1.p-utama-uvc-ai-360.png",
      "/images/camerasecurity/21.uvc-ai-360/2.p-spec-uvc-ai-360-b.png",
      "/images/camerasecurity/21.uvc-ai-360/3.p-dimensi-uvc-ai-360-b.png",
      "/images/camerasecurity/21.uvc-ai-360/6.p-deployment-uvc-ai-360.png",
      "/images/camerasecurity/21.uvc-ai-360/p-itb-uvc-ai-360.png",
      "/images/camerasecurity/21.uvc-ai-360/p-mkt0-uvc-ai-360.png",
      "/images/camerasecurity/21.uvc-ai-360/p-mkt1-uvc-ai-360-b.png",
      "/images/camerasecurity/21.uvc-ai-360/p-mkt2-uvc-ai-360-b.png",
      "/images/camerasecurity/21.uvc-ai-360/p-mkt3-uvc-ai-360-b.png",
      "/images/camerasecurity/21.uvc-ai-360/p-mkt4-uvc-ai-360-b.png",
      "/images/camerasecurity/21.uvc-ai-360/p-mkt7-uvc-ai-360-b.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/21.uvc-ai-360/p-mkt0-uvc-ai-360.png",
      "/images/camerasecurity/21.uvc-ai-360/p-itb-uvc-ai-360.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Aluminum alloy, polycarbonate, hard-coated dome",
      "Power Method PoE",
      "Resolution 2K"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀147 x 49 mm (⌀5.8 x 1.9')" },
          { label: "IR Night Vision", value: "9 m (30 ft)" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "2K" },
          { label: "Field of View", value: "360°" },
          { label: "Audio", value: "Two-way audio" },
          { label: "Weatherproofing", value: "IPX4 (While Covered)" },
          { label: "Tamper Resistance", value: "IK08" },
          { label: "Mounting", value: "Surface mount (Included) Junction box (Optional)" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "GbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "4MP 1920 x 1920 (1:1)" },
          { label: "Optics Sensor", value: "5MP CMOS" },
          { label: "Optics Lens", value: "Fisheye lens" },
          { label: "Optics Night Mode", value: "Built-in adaptive IR LED illumination and IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "8.64W" },
          { label: "Supported Voltage Range", value: "37—57V DC" },
          { label: "Power Method", value: "PoE" },
          { label: "Processor", value: "Quad-core Arm® Cortex®-A53 based chip" },
          { label: "Weight", value: "Without mount: 655 g (1.4 lb) With outdoor accessory: 685 g (1.5 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate, hard-coated dome" },
          { label: "Mount Material", value: "Polycarbonate, stainless steel" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-20 to 40° C (-4 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/21.uvc-ai-360/p-itb-uvc-ai-360.png" },
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

  // Produk Keduabelas dari Camera Security, SF Dome & Turret
  {
    id: "UVC-G5-Dome",
    name: "G5 Dome",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camerasecurity/22.uvc-g5-dome/1.p-utama-uvc-g5-dome.png",
    shortDescription:
      "Next-gen 2K HD PoE ceiling camera with enhanced dynamic range and low-light performance.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G5-DOME",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/22.uvc-g5-dome/1.p-utama-uvc-g5-dome.png",
      "/images/camerasecurity/22.uvc-g5-dome/2.p-spec-uvc-g5-dome.png",
      "/images/camerasecurity/22.uvc-g5-dome/3.p-dimensi-uvc-g5-dome.png",
      "/images/camerasecurity/22.uvc-g5-dome/4.p-deployment-uvc-g5-dome.png",
      "/images/camerasecurity/22.uvc-g5-dome/p-itb-uvc-g5-dome.png",
      "/images/camerasecurity/22.uvc-g5-dome/p-mkt0-uvc-g5-dome.png",
      "/images/camerasecurity/22.uvc-g5-dome/p-mkt1-uvc-g5-dome.png",
      "/images/camerasecurity/22.uvc-g5-dome/p-mkt2-uvc-g5-dome.png",
      "/images/camerasecurity/22.uvc-g5-dome/p-mkt3-uvc-g5-dome.png",
      "/images/camerasecurity/22.uvc-g5-dome/p-mkt4-uvc-g5-dome.png",
      "/images/camerasecurity/22.uvc-g5-dome/p-mkt5-uvc-g5-dome.png",
      "/images/camerasecurity/22.uvc-g5-dome/p-mkt6-uvc-g5-dome.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/22.uvc-g5-dome/p-mkt0-uvc-g5-dome.png",
      "/images/camerasecurity/22.uvc-g5-dome/p-itb-uvc-g5-dome.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max. Power Consumption 5W",
      "Enclosure Material Aluminum alloy, polycarbonate, hard-coated dome",
      "Power Method PoE"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀109.2 x 64.5 mm (⌀4.3 x 2.5')" },
          { label: "IR Night Vision", value: "9 m (30 ft)" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "2K" },
          { label: "Field of View", value: "H: 102.4°, V: 54.9°, D: 120.6°" },
          { label: "Audio", value: "Two-way audio" },
          { label: "Weatherproofing", value: "IPX4 (While Covered)" },
          { label: "Tamper Resistance", value: "IK08" },
          { label: "Mounting", value: "Wall, ceiling mount (Included) Junction box, arm mount (Optional)" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "10/100 MbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "4MP 2688 x 1512 (16:9)" },
          { label: "Optics Sensor", value: "5MP CMOS" },
          { label: "Optics Lens", value: "Fixed focal length" },
          { label: "Optics Night Mode", value: "Built-in adaptive IR LED illumination and IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "5W" },
          { label: "Supported Voltage Range", value: "37—57V DC" },
          { label: "Power Method", value: "PoE" },
          { label: "Processor", value: "Dual-core Arm® Cortex®-A7 based chip" },
          { label: "Weight", value: "Without mount: 370 g (13.1 oz) With mount: 390 g (13.8 oz)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate, hard-coated dome" },
          { label: "Mount Material", value: "Polycarbonate, stainless steel" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-20 to 40° C (-4 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/22.uvc-g5-dome/p-itb-uvc-g5-dome.png" },
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

  // Produk Ketiga Belas dari Camera Security, SF Dome & Turret
  {
    id: "UVC-G5-Dome-Ultra",
    name: "G5 Dome Ultra",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camerasecurity/23.uvc-g5-dome-ultra-b/1.p-utama-uvc-g5-dome-ultra.png",
    shortDescription:
      "Ultra-compact and tamper-resistant 2K HD PoE camera with night vision designed for low-profile indoor security.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G5-DOME-ULTRA-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/23.uvc-g5-dome-ultra-b/1.p-utama-uvc-g5-dome-ultra.png",
      "/images/camerasecurity/23.uvc-g5-dome-ultra-b/2.p-dimensi-uvc-g5-dome-ultra-w.png",
      "/images/camerasecurity/23.uvc-g5-dome-ultra-b/3.p-spec-uvc-g5-dome-ultra-w.png",
      "/images/camerasecurity/23.uvc-g5-dome-ultra-b/4.p-dimensi-uvc-g5-dome-ultra-b.png",
      "/images/camerasecurity/23.uvc-g5-dome-ultra-b/5.p-spec-uvc-g5-dome-ultra-b.png",
      "/images/camerasecurity/23.uvc-g5-dome-ultra-b/6.p-deployment-uvc-g5-dome-ultra.png",
      "/images/camerasecurity/23.uvc-g5-dome-ultra-b/p-itb-uvc-g5-dome-ultra.png",
      "/images/camerasecurity/23.uvc-g5-dome-ultra-b/p-mkt0-uvc-g5-dome-ultra.png",
      "/images/camerasecurity/23.uvc-g5-dome-ultra-b/p-mkt1-uvc-g5-dome-ultra-w.png",
      "/images/camerasecurity/23.uvc-g5-dome-ultra-b/p-mkt2-uvc-g5-dome-ultra-w.png",
      "/images/camerasecurity/23.uvc-g5-dome-ultra-b/p-mkt3-uvc-g5-dome-ultra-w.png",
      "/images/camerasecurity/23.uvc-g5-dome-ultra-b/p-mkt4-uvc-g5-dome-ultra-w.png",
      "/images/camerasecurity/23.uvc-g5-dome-ultra-b/p-mkt7-uvc-g5-dome-ultra-w.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/23.uvc-g5-dome-ultra-b/p-mkt0-uvc-g5-dome-ultra.png",
      "/images/camerasecurity/23.uvc-g5-dome-ultra-b/p-itb-uvc-g5-dome-ultra.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Tamper Resistance IK06",
      "Max. Power Consumption 4.2W",
      "Power Method PoE"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀63.6 x 68.2 mm (⌀2.5 x 2.7')" },
          { label: "IR Night Vision", value: "20 m (65 ft)" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "2K" },
          { label: "Field of View", value: "H: 102.4°, V: 54.9°, D: 120.6°" },
          { label: "Tamper Resistance", value: "IK06" },
          { label: "Mounting", value: "Surface mount (Included) Junction box, Ultra Flush mount (Optional)" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "10/100 MbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "4MP 2688 x 1512 (16:9)" },
          { label: "Optics Sensor", value: "1/2.4' CMOS" },
          { label: "Optics Lens", value: "Fixed focal length" },
          { label: "Optics Night Mode", value: "Built-in adaptive IR LED illumination and IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "4.2W" },
          { label: "Supported Voltage Range", value: "37—57V DC" },
          { label: "Power Method", value: "PoE" },
          { label: "Processor", value: "Dual-core Arm® Cortex®-A7 based chip" },
          { label: "Weight", value: "175 g (6.2 oz)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate, hard-coated dome" },
          { label: "Mount Material", value: "Stainless steel" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-20 to 40° C (-4 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/23.uvc-g5-dome-ultra-b/p-itb-uvc-g5-dome-ultra.png" },
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

  // Produk Keempat Belas dari Camera Security, SF Dome & Turret
  {
    id: "UVC-G6-Edge-Turret",
    name: "G6 Edge Turret",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camerasecurity/24.uvc-g6-edge-turret/1.p-utama-uvc-g6-edge-turret.png",
    shortDescription:
      "All-weather, tamper-resistant 4K PoE+ camera that supports standalone operation (no NVR required), integrated AI-powered search, 2.36x optical zoom, and a large 1/1.2' CMOS sensor for exceptional low-light clarity and long-range IR night vision.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G6-Edge-Turret",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/24.uvc-g6-edge-turret/1.p-utama-uvc-g6-edge-turret.png",
      "/images/camerasecurity/24.uvc-g6-edge-turret/2.p-dimensi-uvc-g6-edge-turret.png",
      "/images/camerasecurity/24.uvc-g6-edge-turret/3.p-spec-uvc-g6-edge-turret.png",
      "/images/camerasecurity/24.uvc-g6-edge-turret/4.p-spec-uvc-g6-edge-turret.png",
      "/images/camerasecurity/24.uvc-g6-edge-turret/5.p-deployment-uvc-g6-edge-turret.png",
      "/images/camerasecurity/24.uvc-g6-edge-turret/p-itb-uvc-g6-edge-turret.png",
      "/images/camerasecurity/24.uvc-g6-edge-turret/p-mkt0-uvc-g6-edge-turret.png",
      "/images/camerasecurity/24.uvc-g6-edge-turret/p-mkt1-uvc-g6-edge-turret.png",
      "/images/camerasecurity/24.uvc-g6-edge-turret/p-mkt2-uvc-g6-edge-turret.png",
      "/images/camerasecurity/24.uvc-g6-edge-turret/p-mkt3-uvc-g6-edge-turret.png",
      "/images/camerasecurity/24.uvc-g6-edge-turret/p-mkt7-uvc-g6-edge-turret.png",
      "/images/camerasecurity/24.uvc-g6-edge-turret/p-mkt8-uvc-g6-edge-turret.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/24.uvc-g6-edge-turret/p-mkt0-uvc-g6-edge-turret.png",
      "/images/camerasecurity/24.uvc-g6-edge-turret/p-itb-uvc-g6-edge-turret.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Power Method : PoE+",
      "Network Interface : GbE RJ45 port Bluetooth",
      "UniFi Application Suite : Protect"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀117.2 × 116.5 mm (⌀4.6 × 4.6')" },
          { label: "IR Night Vision", value: "40 m (131 ft)" },
          { label: "Zoom Mode", value: "2.36x Optical" },
          { label: "Face Recognition", value: "✓" },
          { label: "License Plate Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "4K" },
          { label: "Field of View", value: "Wide: H: 113.8°, V: 61.9°, D: 134° Tele: H: 45.5°, V: 25.8°, D: 52°" },
          { label: "Audio", value: "Two-way audio" },
          { label: "Weatherproofing", value: "IP66" },
          { label: "Tamper Resistance", value: "IK04" },
          { label: "Mounting", value: "Ceiling, Wall mount (Included) Arm, Pendant mount, Junction box (Optional)" },
          { label: "UniFi Application Suite", value: "Protect" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "GbE RJ45 port Bluetooth" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
          { label: "Optics Sensor", value: "1/1.2' 8MP" },
          { label: "Optics Lens", value: "F 5.85-13.8 mm; ƒ/1.5-ƒ/2.9" },
          { label: "Optics Night Mode", value: "Built-in adaptive IR LED illumination and IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "25W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Power Method", value: "PoE+" },
          { label: "Processor", value: "Dual-core Arm® Cortex®-A76 based chip" },
          { label: "Weight", value: "1.2 kg (2.6 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Expansion Slot", value: "MicroSD card" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Cable Cable Connector Type", value: "RJ45" },
          { label: "Cable Cable Connector Type", value: "4.5 mm (0.2'')" },
          { label: "Cable Cable Length", value: "30 cm (1 ft)" },
          { label: "Cable Jacket Enclosure Dimensions", value: "⌀20 x 70.55 mm (⌀0.8 x 2.8')" },
          { label: "Cable Jacket Enclosure Material", value: "Thermoplastic elastomer, polycarbonate, silicone rubber" },
          { label: "Ambient Operating Temperature", value: "-30 to 50º C (-22 to 122º F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/24.uvc-g6-edge-turret/p-itb-uvc-g6-edge-turret.png" },
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
        id: 3,
        name: "Ethernet Surge Protection",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Bidirectional protection for up to 10 GbE, PoE++, and 20kA surge discharge for indoor installation.",
        specs: [
          "Wall/DIN rail mount",
          "Multiple grounding points"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "89 x 25.5 x 37.4 mm (3.5 x 1 x 1.5')" },
          { label: "Weight", value: "74 g (2.6 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, SGCC steel" },
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
        productLink: "/products/mounting-kit"
      },
    ]
  },
  // Produk Kelima Belas dari Camera Security, SF Dome & Turret
  {
    id: "UVC-G6-Edge-Dome",
    name: "G6 Edge Dome",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camerasecurity/25.uvc-g6-edge-dome/1.p-utama-uvc-g6-edge-dome.png",
    shortDescription:
      "All-weather, vandal-proof 4K PoE+ camera that supports standalone operation (no NVR required), integrated AI-powered search, 2.36x optical zoom, and a large 1/1.2' CMOS sensor for exceptional low-light clarity and long-range IR night vision.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G6-Edge-Dome",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/25.uvc-g6-edge-dome/1.p-utama-uvc-g6-edge-dome.png",
      "/images/camerasecurity/25.uvc-g6-edge-dome/2.p-dimensi-uvc-g6-edge-dome.png",
      "/images/camerasecurity/25.uvc-g6-edge-dome/3.p-spec-uvc-g6-edge-dome.png",
      "/images/camerasecurity/25.uvc-g6-edge-dome/4.p-deployment-uvc-g6-edge-dome.png",
      "/images/camerasecurity/25.uvc-g6-edge-dome/p-itb-uvc-g6-edge-dome.png",
      "/images/camerasecurity/25.uvc-g6-edge-dome/p-mkt0-uvc-g6-edge-dome.png",
      "/images/camerasecurity/25.uvc-g6-edge-dome/p-mkt1-uvc-g6-edge-dome.png",
      "/images/camerasecurity/25.uvc-g6-edge-dome/p-mkt2-uvc-g6-edge-dome.png",
      "/images/camerasecurity/25.uvc-g6-edge-dome/p-mkt3-uvc-g6-edge-dome.png",
      "/images/camerasecurity/25.uvc-g6-edge-dome/p-mkt4-uvc-g6-edge-dome.png",
      "/images/camerasecurity/25.uvc-g6-edge-dome/p-mkt5-uvc-g6-edge-dome.png",
      "/images/camerasecurity/25.uvc-g6-edge-dome/p-mkt6-uvc-g6-edge-dome.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/25.uvc-g6-edge-dome/p-mkt0-uvc-g6-edge-dome.png",
      "/images/camerasecurity/25.uvc-g6-edge-dome/p-itb-uvc-g6-edge-dome.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material : Aluminum alloy, polycarbonate",
      "Power Method : PoE+",
      "Max. Power Consumption : 25W"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀117.2 × 116.5 mm (⌀4.6 × 4.6')" },
          { label: "IR Night Vision", value: "40 m (131 ft)" },
          { label: "Zoom Mode", value: "2.36x Optical" },
          { label: "Face Recognition", value: "✓" },
          { label: "License Plate Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "4K" },
          { label: "Field of View", value: "Wide: H: 113.8°, V: 61.9°, D: 134° Tele: H: 45.5°, V: 25.8°, D: 52°" },
          { label: "Audio", value: "Two-way audio" },
          { label: "Weatherproofing", value: "IP66" },
          { label: "Tamper Resistance", value: "IK04" },
          { label: "Mounting", value: "Ceiling, Wall mount (Included) Arm, Pendant mount, Junction box (Optional)" },
          { label: "UniFi Application Suite", value: "Protect" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "GbE RJ45 port Bluetooth" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
          { label: "Optics Sensor", value: "1/1.2' 8MP" },
          { label: "Optics Lens", value: "F 5.85-13.8 mm; ƒ/1.5-ƒ/2.9" },
          { label: "Optics Night Mode", value: "Built-in adaptive IR LED illumination and IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "25W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Power Method", value: "PoE+" },
          { label: "Processor", value: "Dual-core Arm® Cortex®-A76 based chip" },
          { label: "Weight", value: "1.2 kg (2.6 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Expansion Slot", value: "MicroSD card" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Cable Cable Connector Type", value: "RJ45" },
          { label: "Cable Cable Connector Type", value: "4.5 mm (0.2'')" },
          { label: "Cable Cable Length", value: "30 cm (1 ft)" },
          { label: "Cable Jacket Enclosure Dimensions", value: "⌀20 x 70.55 mm (⌀0.8 x 2.8')" },
          { label: "Cable Jacket Enclosure Material", value: "Thermoplastic elastomer, polycarbonate, silicone rubber" },
          { label: "Ambient Operating Temperature", value: "-30 to 50º C (-22 to 122º F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/25.uvc-g6-edge-dome/p-itb-uvc-g6-edge-dome.png" },
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
        id: 3,
        name: "Ethernet Surge Protection",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Bidirectional protection for up to 10 GbE, PoE++, and 20kA surge discharge for indoor installation.",
        specs: [
          "Wall/DIN rail mount",
          "Multiple grounding points"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "89 x 25.5 x 37.4 mm (3.5 x 1 x 1.5')" },
          { label: "Weight", value: "74 g (2.6 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, SGCC steel" },
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
        productLink: "/products/mounting-kit"
      },
    ]
  },

  // Produk Pertama dari Camera Security, SF Bullet
  {
    id: "UVC-G6-Pro-Bullet",
    name: "G6 Pro Bullet",
    category: "Camera Security",
    subfilter: "Bullet",
    image: "/images/camerasecurity/26.uvc-g6-pro-bullet/1.p-utama-uvc-g6-pro-bullet.png",
    shortDescription:
      "All-weather 4K PoE+ camera with a Multi-TOPS AI engine, 2.36x optical zoom, and a large 1/1.2' CMOS sensor for exceptional low-light clarity and long-range IR night vision.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G6-PRO-BULLET-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/26.uvc-g6-pro-bullet/1.p-utama-uvc-g6-pro-bullet.png",
      "/images/camerasecurity/26.uvc-g6-pro-bullet/2.p-dimensi-uvc-g6-pro-bullet.png",
      "/images/camerasecurity/26.uvc-g6-pro-bullet/4.p-deployment-uvc-g6-pro-bullet.png",
      "/images/camerasecurity/26.uvc-g6-pro-bullet/p-itb-uvc-g6-pro-bullet.png",
      "/images/camerasecurity/26.uvc-g6-pro-bullet/p-mkt0-uvc-g6-pro-bullet.png",
      "/images/camerasecurity/26.uvc-g6-pro-bullet/p-mkt1-uvc-g6-pro-bullet-b.png",
      "/images/camerasecurity/26.uvc-g6-pro-bullet/p-mkt2-uvc-g6-pro-bullet-b.png",
      "/images/camerasecurity/26.uvc-g6-pro-bullet/p-mkt5-uvc-g6-pro-bullet-b.png",
      "/images/camerasecurity/26.uvc-g6-pro-bullet/p-mkt6-uvc-g6-pro-bullet-b.png",
      "/images/camerasecurity/26.uvc-g6-pro-bullet/p-mkt7-uvc-g6-pro-bullet-b.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/26.uvc-g6-pro-bullet/p-mkt0-uvc-g6-pro-bullet.png",
      "/images/camerasecurity/26.uvc-g6-pro-bullet/p-itb-uvc-g6-pro-bullet.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "All-weather 4K PoE+ camera with a Multi-TOPS AI engine",
      "36x optical zoom",
      "and a large 1/1",
      "2' CMOS sensor for exceptional low-light clarity and long-range IR night vision"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Without mount: ⌀85.8 x 106.2 mm (⌀3.4 x 4.2') With wall mount: ⌀85.8 x 210 mm (⌀3.4 x 8.3')" },
          { label: "IR Night Vision", value: "40 m (131 ft) Up to 60 m (197 ft) with Vision Enhancer" },
          { label: "Zoom Mode", value: "2.36x Optical" },
          { label: "Face Recognition", value: "✓" },
          { label: "License Plate Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "4K" },
          { label: "Field of View", value: "Wide: H: 113.8°, V: 61.9°, D: 134° Tele: H: 45.5°, V: 25.8°, D: 52°" },
          { label: "Audio", value: "Two-way audio" },
          { label: "Weatherproofing", value: "IP66" },
          { label: "Tamper Resistance", value: "IK04" },
          { label: "Mounting", value: "Wall, Ceiling, Pole mount (Included) Junction Box, Angled Base (Optional)" },
          { label: "UniFi Application Suite Protect", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "GbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
          { label: "Optics Sensor", value: "1/1.2' 8MP" },
          { label: "Optics Lens", value: "F 5.9-13.8 mm; ƒ/1.5-ƒ/2.9" },
          { label: "Optics Night Mode", value: "Built-in adaptive IR LED illumination and IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "15W" },
          { label: "Supported Voltage Range", value: "37–57V DC" },
          { label: "Power Method", value: "PoE+" },
          { label: "Processor", value: "Quad core Arm® Cortex®-A53 based chip" },
          { label: "Pole Mount Diameter", value: "1.5–2' (38–50 mm)" },
          { label: "Weight", value: "Without mount: 755 g (1.7 lb) With mount: 980 g (2.2 lb)" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Wall mount: aluminum alloy, polycarbonate Pole mount: aluminum alloy" },
          { label: "Expansion Slot", value: "MicroSD card" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-20 to 50º C (-4 to 122º F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/26.uvc-g6-pro-bullet/p-itb-uvc-g6-pro-bullet.png" },
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
        name: "Ethernet Surge Protection",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Bidirectional protection for up to 10 GbE, PoE++, and 20kA surge discharge for indoor installation.",
        specs: [
          "Wall/DIN rail mount",
          "Multiple grounding points"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "89 x 25.5 x 37.4 mm (3.5 x 1 x 1.5')" },
          { label: "Weight", value: "74 g (2.6 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, SGCC steel" },
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
        productLink: "/products/mounting-kit"
      },
      {
        id: 3,
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
        id: 4,
        name: "High Capacity microSD Card",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A microSD card designed for ultra endurance, optimized for UniFi devices, providing local storage and edge recording capabilities.",
        specs: [
          "Compact form factor, microSDXC™",
          "Note. Verified and optimized for UniFi device compatibility, may include microSDs from multiple brands."
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/mounting-kit"
      },
    ]
  },

  // Produk Kedua dari Camera Security, SF Bullet
  {
    id: "UVC-G6-Bullet",
    name: "G6 Bullet",
    category: "Camera Security",
    subfilter: "Bullet",
    image: "/images/camerasecurity/27.uvc-g6-bullet/1.p-utama-uvc-g6-bullet.png",
    shortDescription:
      "All-weather 4K PoE camera with a 1/1.8' 8MP image sensor, Multi-TOPS AI Engine, and long-range IR night vision.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G6-BULLET-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/27.uvc-g6-bullet/1.p-utama-uvc-g6-bullet.png",
      "/images/camerasecurity/27.uvc-g6-bullet/2.p-dimensi-uvc-g6-bullet.png",
      "/images/camerasecurity/27.uvc-g6-bullet/4.p-deployment-uvc-g6-bullet.png",
      "/images/camerasecurity/27.uvc-g6-bullet/p-itb-uvc-g6-bullet.png",
      "/images/camerasecurity/27.uvc-g6-bullet/p-mkt0-uvc-g6-bullet.png",
      "/images/camerasecurity/27.uvc-g6-bullet/p-mkt1-uvc-g6-bullet-w.png",
      "/images/camerasecurity/27.uvc-g6-bullet/p-mkt2-uvc-g6-bullet-w.png",
      "/images/camerasecurity/27.uvc-g6-bullet/p-mkt3-uvc-g6-bullet-w.png",
      "/images/camerasecurity/27.uvc-g6-bullet/p-mkt4-uvc-g6-bullet-w.png",
      "/images/camerasecurity/27.uvc-g6-bullet/p-mkt5-uvc-g6-bullet-w.png",
      "/images/camerasecurity/27.uvc-g6-bullet/p-mkt6-uvc-g6-bullet-w.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/27.uvc-g6-bullet/p-mkt0-uvc-g6-bullet.png",
      "/images/camerasecurity/27.uvc-g6-bullet/p-itb-uvc-g6-bullet.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Weatherproofing IP66",
      "Enclosure Material Polycarbonate, aluminum alloy",
      "Mount Material Wall mount: aluminum alloy, polycarbonate Pole mount: aluminum alloy"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Without mount: ⌀82 x 88.8 mm (⌀3.2 x 3.5') With mount: ⌀82 x 153 mm (⌀3.2 x 6')" },
          { label: "IR Night Vision", value: "30 m (98 ft)" },
          { label: "Face Recognition", value: "✓" },
          { label: "License Plate Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "4K" },
          { label: "Field of View", value: "H: 109.9°, V: 56.7°, D: 134.1°" },
          { label: "Audio", value: "Microphone" },
          { label: "Weatherproofing", value: "IP66" },
          { label: "Tamper Resistance", value: "IK04" },
          { label: "Mounting", value: "Wall, Ceiling, Pole mount (Included) Junction Box, Angled Base (Optional)" },
          { label: "UniFi Application Suite Protect", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "10/100 MbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
          { label: "Optics Sensor", value: "1/1.8” 8MP" },
          { label: "Optics Lens", value: "Fixed focal length" },
          { label: "Optics Night Mode", value: "Built-in adaptive IR LED illumination and IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "9.9W" },
          { label: "Supported Voltage Range", value: "37–57V DC" },
          { label: "Power Method", value: "PoE" },
          { label: "Processor", value: "Quad core Arm® Cortex®-A53 based chip" },
          { label: "Pole Mount Diameter", value: "1.5–2' (38–50 mm)" },
          { label: "Weight", value: "Without mount: 587 g (1.3 lb) With mount: 737 g (1.6 lb)" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Wall mount: aluminum alloy, polycarbonate Pole mount: aluminum alloy" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-20 to 50º C (-4 to 122º F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/27.uvc-g6-bullet/p-itb-uvc-g6-bullet.png" },
    ],
  },

  // Produk ketiga dari Camera Security, SF Bullet
  {
    id: "UVC-AI-LPR",
    name: "AI LPR",
    category: "Camera Security",
    subfilter: "Bullet",
    image: "/images/camerasecurity/28.uvc-ai-lpr/1.p-spec-uvc-ai-lpr.png",
    shortDescription:
      "Specialized 4K camera with 3x optical zoom and long-range IR night vision optimized for recognizing license plates on vehicles moving up to 90 km/h.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-AI-LPR-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/28.uvc-ai-lpr/1.p-spec-uvc-ai-lpr.png",
      "/images/camerasecurity/28.uvc-ai-lpr/3.p-dimensi-uvc-ai-lpr.png",
      "/images/camerasecurity/28.uvc-ai-lpr/4.p-deployment-uvc-ai-lpr.png",
      "/images/camerasecurity/28.uvc-ai-lpr/382.png",
      "/images/camerasecurity/28.uvc-ai-lpr/p-itb-uvc-ai-lpr.png",
      "/images/camerasecurity/28.uvc-ai-lpr/p-mkt0-uvc-ai-lpr.png",
      "/images/camerasecurity/28.uvc-ai-lpr/p-mkt1-uvc-ai-lpr.png",
      "/images/camerasecurity/28.uvc-ai-lpr/p-mkt3-uvc-ai-lpr.png",
      "/images/camerasecurity/28.uvc-ai-lpr/p-mkt4-uvc-ai-lpr.png",
      "/images/camerasecurity/28.uvc-ai-lpr/p-mkt5-uvc-ai-lpr.png",
      "/images/camerasecurity/28.uvc-ai-lpr/p-mkt6-uvc-ai-lpr.png",
      "/images/camerasecurity/28.uvc-ai-lpr/p-mkt7-uvc-ai-lpr.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/28.uvc-ai-lpr/p-mkt0-uvc-ai-lpr.png",
      "/images/camerasecurity/28.uvc-ai-lpr/p-itb-uvc-ai-lpr.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Specialized 4K camera with 3x optical zoom and long-range IR night vision optimized for recognizing license plates on vehicles moving up to 90 km/h",
      "Weatherproofing IP66",
      "Max. Power Consumption 25.5W",
      "Enclosure Material Aluminum alloy, polycarbonate"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "130 x 151.4 x 302.9 mm (5.1 x 6 x 11.9')" },
          { label: "IR Night Vision", value: "15 m (50 ft)" },
          { label: "Zoom Mode", value: "3x Optical" },
          { label: "License Plate Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "4K" },
          { label: "Field of View", value: "Wide: H 109.9°, V 60°, D 127.7° Tele: H 35°, V 19.8°, D 40°" },
          { label: "Audio", value: "Microphone" },
          { label: "Weatherproofing", value: "IP66" },
          { label: "Tamper Resistance", value: "IK04" },
          { label: "Mounting", value: "Wall, Ceiling, Pole mount (Included) Junction Box, Angled Base (Optional)" },
          { label: "UniFi Application Suite Protect", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "GbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
          { label: "Optics Sensor", value: "1/1.8” 8MP" },
          { label: "Optics Lens", value: "F 4.1–12.3 mm; ƒ/1.53–ƒ/3.3" },
          { label: "Optics IR Capture Distance", value: "15 m (50 ft)" },
          { label: "Optics LPR Night Mode", value: "LPR optimization filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "25.5W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Power Method", value: "PoE+" },
          { label: "Processor", value: "Quad core Arm® Cortex®-A53 based chip" },
          { label: "Pole Mount Diameter", value: "1.5–2' (38–50 mm)" },
          { label: "Weight", value: "1.5 kg (3.3 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Mount Material", value: "Aluminum Alloy" },
          { label: "Expansion Slot", value: "Micro SD memory card" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Cable Cable Connector Type", value: "(1) Factory reset" },
          { label: "Cable Cable Diameter", value: "(1) Factory reset" },
          { label: "Cable Cable Length", value: "(1) Factory reset" },
          { label: "Cable Jacket Material", value: "(1) Factory reset" },
          { label: "Cable Jacket Enclosure Dimensions", value: "(1) Factory reset" },
          { label: "Cable Jacket Enclosure Material", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-20 to 50º C (-4 to 122º F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/28.uvc-ai-lpr/p-itb-uvc-ai-lpr.png" },
    ],
  },

  // Produk Keempat dari Camera Security, SF Bullet
  {
    id: "UVC-AI-DSLR",
    name: "AI DSLR",
    category: "Camera Security",
    subfilter: "Bullet",
    image: "/images/camerasecurity/29.uvc-ai-dslr/1.p-utama-uvc-ai-dslr.png",
    shortDescription:
      "Indoor/outdoor 4K PoE camera with exceptional image quality and impressive low-light performance.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-AI-DSLR-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/29.uvc-ai-dslr/1.p-utama-uvc-ai-dslr.png",
      "/images/camerasecurity/29.uvc-ai-dslr/2.p-spec-uvc-ai-dslr.png",
      "/images/camerasecurity/29.uvc-ai-dslr/3.p-dimensi-uvc-ai-dslr.png",
      "/images/camerasecurity/29.uvc-ai-dslr/4.p-spec-uvc-ai-dslr.png",
      "/images/camerasecurity/29.uvc-ai-dslr/5.p-dimensi-uvc-ai-dslr.png",
      "/images/camerasecurity/29.uvc-ai-dslr/6.p-deployment-uvc-ai-dslr.png",
      "/images/camerasecurity/29.uvc-ai-dslr/p-itb-uvc-ai-dslr.png",
      "/images/camerasecurity/29.uvc-ai-dslr/p-mkt1-uvc-ai-dslr.png",
      "/images/camerasecurity/29.uvc-ai-dslr/p-mkt3-uvc-ai-dslr.png",
      "/images/camerasecurity/29.uvc-ai-dslr/p-mkt4-uvc-ai-dslr.png",
      "/images/camerasecurity/29.uvc-ai-dslr/p-mkt5-uvc-ai-dslr.png",
      "/images/camerasecurity/29.uvc-ai-dslr/p-mkt6-uvc-ai-dslr.png",
      "/images/camerasecurity/29.uvc-ai-dslr/p-mkt7-uvc-ai-dslr.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/29.uvc-ai-dslr/p-mkt1-uvc-ai-dslr.png",
      "/images/camerasecurity/29.uvc-ai-dslr/p-itb-uvc-ai-dslr.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Indoor/outdoor 4K PoE camera with exceptional image quality and impressive low-light performance",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Without mount: ⌀80 x 89 mm (⌀3.1 x 3.5') With mount: ⌀80 x 153 mm (⌀3.1 x 6') M. Zuiko Digital ED 17 mm PRO: ⌀68.2 x 87 mm (⌀2.7 x 3.4') M. Zuiko Digital ED 45 mm PRO: ⌀70 x 84.9 mm (⌀2.8 x 3.3') Outdoor case: ⌀91.6 x 196.3 mm (⌀3.6 x 7.7')" },
          { label: "License Plate Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "4K" },
          { label: "Field of View", value: "M. Zuiko Digital ED 17 mm PRO: H: 52°, V: 39°, D: 65° M. Zuiko Digital ED 45 mm PRO: H: 21.6°, V: 16.2°, D: 27°" },
          { label: "Audio", value: "Two-Way Audio" },
          { label: "Weatherproofing", value: "IPX5 (With the outdoor case)" },
          { label: "Mounting", value: "Wall, pole mount (Included) Tripot mount (Optional)" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "GbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
          { label: "Optics Sensor", value: "4/3' 10MP CMOS" },
          { label: "Optics Lens", value: "M. Zuiko Digital ED 17 mm ƒ/1.2 PRO M. Zuiko Digital ED 45 mm ƒ/1.2 PRO" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "17.77W (With lens working)" },
          { label: "Supported Voltage Range", value: "37—57V DC" },
          { label: "Power Method", value: "PoE+" },
          { label: "Processor", value: "Quad core Arm® Cortex®-A53 based chip" },
          { label: "Pole Mount Diameter", value: "1.5–2' (38–50 mm)" },
          { label: "Weight", value: "Without mount: 660 g (1.5 lb) With mount: 820 g (1.8 lb) M. Zuiko Digital ED 17 mm PRO: 390 g (0.9 lb) M. Zuiko Digital ED 45 mm PRO: 410 g (0.9 lb) Outdoor case: 510 g (1.1 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Mount Material", value: "Wall mount: aluminum alloy Pole mount: aluminum alloy" },
          { label: "Button", value: "(1) Factory reset (1) Lens release rey" },
          { label: "Ambient Operating Temperature", value: "-20 to 40° C (-4 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/29.uvc-ai-dslr/p-itb-uvc-ai-dslr.png" },
    ],
  },

  // // Produk Kelima dari Camera Security, SF Bullet
  // {
  //   id: "UVC-AI-DSLR-LD-B/W",
  //   name: "AI DSLR",
  //   category: "Camera Security",
  //   subfilter: "Bullet",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "Indoor/outdoor 4K PoE camera with exceptional image quality and impressive low-light performance.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UVC-AI-DSLR-LD-B/W",

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
  //     "Indoor/outdoor 4K PoE camera with exceptional image quality and impressive low-light performance",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Dimensions", value: "Without mount: ⌀80 x 89 mm (⌀3.1 x 3.5') With mount: ⌀80 x 153 mm (⌀3.1 x 6') M. Zuiko Digital ED 17 mm PRO: ⌀68.2 x 87 mm (⌀2.7 x 3.4') M. Zuiko Digital ED 45 mm PRO: ⌀70 x 84.9 mm (⌀2.8 x 3.3') Outdoor case: ⌀91.6 x 196.3 mm (⌀3.6 x 7.7')" },
  //         { label: "Face Recognition", value: "✓" },
  //         { label: "License Plate Recognition", value: "✓" },
  //         { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
  //         { label: "Resolution", value: "4K" },
  //         { label: "Field of View", value: "M. Zuiko Digital ED 17 mm PRO: H: 52°, V: 39°, D: 65° M. Zuiko Digital ED 45 mm PRO: H: 21.6°, V: 16.2°, D: 27°" },
  //         { label: "Audio", value: "Two-Way Audio" },
  //         { label: "Weatherproofing", value: "IPX5 (With the outdoor case)" },
  //         { label: "Mounting", value: "Wall, pole mount (Included) Tripot mount (Optional)" },
  //       ]
  //     },
  //     {
  //       title: "Performance",
  //       items: [
  //         { label: "Network Interface", value: "GbE RJ45 port" },
  //         { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
  //         { label: "Video Max. Frame Rate", value: "30 FPS" },
  //         { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
  //         { label: "Optics Sensor", value: "4/3' 10MP CMOS" },
  //         { label: "Optics Lens", value: "M. Zuiko Digital ED 17 mm ƒ/1.2 PRO M. Zuiko Digital ED 45 mm ƒ/1.2 PRO" },
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Max. Power Consumption", value: "17.77W (With lens working)" },
  //         { label: "Supported Voltage Range", value: "37—57V DC" },
  //         { label: "Power Method", value: "PoE+" },
  //         { label: "Processor", value: "Quad core Arm® Cortex®-A53 based chip" },
  //         { label: "Pole Mount Diameter", value: "1.5–2' (38–50 mm)" },
  //         { label: "Weight", value: "Without mount: 660 g (1.5 lb) With mount: 820 g (1.8 lb) M. Zuiko Digital ED 17 mm PRO: 390 g (0.9 lb) M. Zuiko Digital ED 45 mm PRO: 410 g (0.9 lb) Outdoor case: 510 g (1.1 lb)" },
  //         { label: "Enclosure Material", value: "Aluminum alloy" },
  //         { label: "Mount Material", value: "Wall mount: aluminum alloy Pole mount: aluminum alloy" },
  //         { label: "Button", value: "(1) Factory reset (1) Lens release rey" },
  //         { label: "Ambient Operating Temperature", value: "-20 to 40° C (-4 to 104° F)" },
  //         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
  //         { label: "NDAA Compliant", value: "✓" },
  //         { label: "Certifications", value: "CE, FCC, IC" },
  //       ]
  //     },
  //   ],

  //   // Item yang ada dalam box produk (gambar bisa diganti)
  //   inTheBox: [
  //     { name: "Device", image: "/images/dcs-box.png" },
  //     { name: "Mounting Kit", image: "/images/dcs-box.png" },
  //     { name: "Power Cable", image: "/images/dcs-box.png" },
  //     { name: "Quick Start", image: "/images/dcs-box.png" }
  //   ],
  // },

  // Produk Keenam dari Camera Security, SF Bullet
  {
    id: "UVC-AI-Pro",
    name: "AI Pro",
    category: "Camera Security",
    subfilter: "Bullet",
    image: "/images/camerasecurity/30.uvc-ai-pro/1.p-utama-uvc-ai-pro.png",
    shortDescription:
      "Indoor/outdoor 4K PoE camera with 3x optical zoom, long-range IR night vision, and enhanced AI detection capabilities.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-AI-PRO-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/30.uvc-ai-pro/1.p-utama-uvc-ai-pro.png",
      "/images/camerasecurity/30.uvc-ai-pro/2.p-spec-uvc-ai-pro.png",
      "/images/camerasecurity/30.uvc-ai-pro/4.p-deployment-uvc-ai-pro.png",
      "/images/camerasecurity/30.uvc-ai-pro/p-itb-uvc-ai-pro.png",
      "/images/camerasecurity/30.uvc-ai-pro/p-mkt1-uvc-ai-pro-b.png",
      "/images/camerasecurity/30.uvc-ai-pro/p-mkt2-uvc-ai-pro-b.png",
      "/images/camerasecurity/30.uvc-ai-pro/p-mkt3-uvc-ai-pro-b.png",
      "/images/camerasecurity/30.uvc-ai-pro/p-mkt4-uvc-ai-pro-b.png",
      "/images/camerasecurity/30.uvc-ai-pro/p-mkt5-uvc-ai-pro-b.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/30.uvc-ai-pro/p-mkt1-uvc-ai-pro-b.png",
      "/images/camerasecurity/30.uvc-ai-pro/p-itb-uvc-ai-pro.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Power Method Device: PoE Device with Enhancer: PoE+",
      "Pole Mount Diameter 1.5–2' (38–50 mm)",
      "Enclosure Material Aluminum alloy, polycarbonate"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Without mount: ⌀86 x 112.6 mm (⌀3.4 x 4.4') With mount: ⌀86 x 175.3 mm (⌀3.4 x 6.9')" },
          { label: "IR Night Vision", value: "25 m (82 ft) Up to 40 m (131 ft) with Vision Enhancer" },
          { label: "Zoom Mode", value: "3x Optical" },
          { label: "Face Recognition", value: "✓" },
          { label: "License Plate Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "4K" },
          { label: "Field of View", value: "Wide: H: 109.9°, V: 59.9°, D: 127.7° Zoom: H: 34.9°, V: 19.7°, D: 40°" },
          { label: "Audio", value: "Two-Way Audio" },
          { label: "Weatherproofing", value: "IP65" },
          { label: "Tamper Resistance", value: "IK04" },
          { label: "Mounting", value: "Wall, ceiling, pole mount (Included) Junction box, angled base (Optional)" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "GbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
          { label: "Optics Sensor", value: "1/1.8' 8MP" },
          { label: "Optics Lens", value: "F 4.1–12.3 mm; ƒ/1.53–ƒ/3.3" },
          { label: "Night Mode", value: "Built-in IR LED illumination and an IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "Device: 11W Device with Enhancer: 22W" },
          { label: "Supported Voltage Range", value: "37—57V DC" },
          { label: "Power Method", value: "Device: PoE Device with Enhancer: PoE+" },
          { label: "Processor", value: "Quad core Arm® Cortex®-A53 based chip" },
          { label: "Pole Mount Diameter", value: "1.5–2' (38–50 mm)" },
          { label: "Weight", value: "Without mount: 675 g (1.5 lb) With mount: 820 g (1.8 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Mount Material", value: "Aluminum alloy" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-20 to 40° C (-4 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/30.uvc-ai-pro/p-itb-uvc-ai-pro.png" },
    ],

    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Long-Range IR LED & Floodlight",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Go To Product Page Long-Range IR LED & Floodlight UACC-Pro-Bullet-Enhancer-B $179.00 Color: Black Black White Long-range IR LED, floodlight, and radar detection accessory for the G6 Pro Bullet and AI Pro.",
        specs: [
          "Enclosure Material Aluminum alloy, polycarbonate",
          "Mount Material Aluminum alloy",
          "Power Method Camera G6 Pro Bullet, AI Pro"
        ],
        detailedSpecs: [
          { label: "Radar Recommended Mounting Height", value: "2–5 m (6.6–16.4 ft)" },
          { label: "Radar Recommended Mounting Tilt", value: "0–30°" },
          { label: "Radar Detection Range", value: "Person: 0.5–20 m (1.6–65.6 ft) Vehicle: 2–35 m (6.6–115 ft)" },
          { label: "Radar Field of Detection", value: "H: 110°" },
          { label: "Radar Distance Accuracy", value: "0.5 m (1.6 ft)" },
          { label: "IR distance", value: "UVC-G6-Pro-Bullet: 60 m (197 ft) UVC_AI-Pro: 40 m (131 ft)" },
          { label: "Lights", value: "5700K, 600 lm" },
          { label: "Speaker", value: "✓" },
          { label: "Power Method", value: "Camera G6 Pro Bullet, AI Pro" },
          { label: "Power Supply", value: "5V DC, 3A" },
          { label: "Max. Power Consumption", value: "15W" },
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/mounting-kit-uvc-ai-pro-b/w"
      },
    ]
  },

  // Produk Ketujuh dari Camera Security, SF Bullet
  {
    id: "UVC-G5-Pro",
    name: "G5 Pro",
    category: "Camera Security",
    subfilter: "Bullet",
    image: "/images/camerasecurity/31.uvc-g5-pro/1.p-utama-uvc-g5-pro.png",
    shortDescription:
      "Next-gen indoor/outdoor 4K PoE camera with exceptional image performance, long-range IR night vision, and 3x optical zoom.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G5-PRO",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/31.uvc-g5-pro/1.p-utama-uvc-g5-pro.png",
      "/images/camerasecurity/31.uvc-g5-pro/2.p-spec-uvc-g5-pro.png",
      "/images/camerasecurity/31.uvc-g5-pro/3.p-deployment-uvc-g5-pro.png",
      "/images/camerasecurity/31.uvc-g5-pro/p-itb-uvc-g5-pro.png",
      "/images/camerasecurity/31.uvc-g5-pro/p-mkt0-uvc-g5-pro.png",
      "/images/camerasecurity/31.uvc-g5-pro/p-mkt1-uvc-g5-pro.png",
      "/images/camerasecurity/31.uvc-g5-pro/p-mkt2-uvc-g5-pro.png",
      "/images/camerasecurity/31.uvc-g5-pro/p-mkt3-uvc-g5-pro.png",
      "/images/camerasecurity/31.uvc-g5-pro/p-mkt4-uvc-g5-pro.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/31.uvc-g5-pro/p-mkt0-uvc-g5-pro.png",
      "/images/camerasecurity/31.uvc-g5-pro/p-itb-uvc-g5-pro.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material UV stabilized polycarbonate, aluminum alloy",
      "Power Method PoE",
      "Resolution 4K"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀86 x 154.3 mm (⌀3.4 x 6.1')" },
          { label: "IR Night Vision", value: "25 m (82 ft) up to 40 m (131 ft) (With Vision Enhancer)" },
          { label: "Zoom Mode", value: "3x Optical" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "4K" },
          { label: "Field of View", value: "Wide: H 109.9°, V 60°, D 127.7° Zoom: H 35°, V 19.8°, D 40°" },
          { label: "Audio", value: "Microphone" },
          { label: "Weatherproofing", value: "IP65" },
          { label: "Tamper Resistance", value: "IK04" },
          { label: "Mounting", value: "Wall, ceiling, pole mount (Included) Junction box, angled base (Optional)" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "10/100 MbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
          { label: "Optics Sensor", value: "1/2' 8MP" },
          { label: "Optics Lens", value: "F 4.1–12.3 mm; ƒ/1.53–ƒ/3.3" },
          { label: "Night Mode", value: "Built-in IR LED illumination and an IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "Device: 10W Device with Enhancer: 12.95W" },
          { label: "Supported Voltage Range", value: "37—57V DC" },
          { label: "Power Method", value: "PoE" },
          { label: "Processor", value: "Dual-core Arm® Cortex®-A53 based chip" },
          { label: "Pole Mount Diameter", value: "1.5–2' (38–50 mm)" },
          { label: "Weight", value: "650 g (1.4 lb)" },
          { label: "Enclosure Material", value: "UV stabilized polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Aluminum alloy" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-20 to 50° C (-4 to 122° F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/31.uvc-g5-pro/p-itb-uvc-g5-pro.png" },
    ],
  },

  //Produk Kedelapan dari Camera Security, SF Bullet
  {
    id: "UVC-G5-Bullet",
    name: "G5 Bullet",
    category: "Camera Security",
    subfilter: "Bullet",
    image: "/images/camerasecurity/36.uvc-g5-bullet/1.p-utama-uvc-g5-bullet.png",
    shortDescription: "Next-gen indoor/outdoor 2K HD PoE Camera.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G5-BULLET",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/36.uvc-g5-bullet/1.p-utama-uvc-g5-bullet.png",
      "/images/camerasecurity/36.uvc-g5-bullet/2.p-spec-uvc-g5-bullet.png",
      "/images/camerasecurity/36.uvc-g5-bullet/3.p-deployment-uvc-g5-bullet.png",
      "/images/camerasecurity/36.uvc-g5-bullet/p-itb-uvc-g5-bullet.png",
      "/images/camerasecurity/36.uvc-g5-bullet/p-mkt0-uvc-g5-bullet.png",
      "/images/camerasecurity/36.uvc-g5-bullet/p-mkt1-uvc-g5-bullet.png",
      "/images/camerasecurity/36.uvc-g5-bullet/p-mkt3-uvc-g5-bullet.png",
      "/images/camerasecurity/36.uvc-g5-bullet/p-mkt4-uvc-g5-bullet.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/36.uvc-g5-bullet/p-mkt0-uvc-g5-bullet.png",
      "/images/camerasecurity/36.uvc-g5-bullet/p-itb-uvc-g5-bullet.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Weatherproofing IP55",
      "Power Method PoE",
      "Enclosure MaterialPolycarbonate, aluminum alloy"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Without mount: ⌀75.5 x 74.4 mm (⌀3 x 2.9') With mount: ⌀75.5 x 150 mm (⌀3 x 5.9')" },
          { label: "IR Night Vision", value: "9 m (30 ft)" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "2K" },
          { label: "Field of View", value: "H: 84.4°, V: 45.4°, D: 99.8°" },
          { label: "Audio", value: "Microphone" },
          { label: "Weatherproofing", value: "IP55" },
          { label: "Tamper Resistance", value: "IK04" },
          { label: "Mounting", value: "Wall, ceiling, pole mount (Included) Junction box, angled base (Optional)" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "10/100 MbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "4MP 2688 x 1512 (16:9)" },
          { label: "Optics Sensor", value: "5MP CMOS" },
          { label: "Optics Lens", value: "Fixed focal length" },
          { label: "Night Mode", value: "Built-in IR LED illumination and an IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "4W" },
          { label: "Supported Voltage Range", value: "37—57V DC" },
          { label: "Power Method", value: "PoE" },
          { label: "Processor", value: "Dual-core Arm® Cortex®-A53 based chip" },
          { label: "Pole Mount Diameter", value: "3/4' (19 mm)" },
          { label: "Weight", value: "Without mount: 225 g (8 oz) With mount: 315 g (11.1 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Wall mount: aluminum alloy, polycarbonate Pole mount: aluminum alloy" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-20 to 40° C (-4 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/36.uvc-g5-bullet/p-itb-uvc-g5-bullet.png" },
    ],
  },
  
  //Produk Kesembilan dari Camera Security, SF Bullet
  {
    id: "UVC-G6-Edge-Bullet",
    name: "G6 Edge Bullet",
    category: "Camera Security",
    subfilter: "Bullet",
    image: "/images/camerasecurity/37.uvc-g6-edge-bullet/1.p-utama-g6-edge-bullet.png",
    shortDescription: "All-weather, 4K PoE+ camera that supports standalone operation (no NVR required), integrated AI-powered search, 2.36x optical zoom, and a large 1/1.2' CMOS sensor for exceptional low-light clarity and long-range IR night vision.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G5-BULLET",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/37.uvc-g6-edge-bullet/1.p-utama-g6-edge-bullet.png",
      "/images/camerasecurity/37.uvc-g6-edge-bullet/2.p-spec-uvc-g6-edge-bullet.png",
      "/images/camerasecurity/37.uvc-g6-edge-bullet/3.p-deployment-uvc-g6-edge-bullet.png",
      "/images/camerasecurity/37.uvc-g6-edge-bullet/p-itb-uvc-g6-edge-bullet.png",
      "/images/camerasecurity/37.uvc-g6-edge-bullet/p-mkt0-uvc-g6-edge-bullet.png",
      "/images/camerasecurity/37.uvc-g6-edge-bullet/p-mkt1-uvc-g6-edge-bullet.png",
      "/images/camerasecurity/37.uvc-g6-edge-bullet/p-mkt2-uvc-g6-edge-bullet.png",
      "/images/camerasecurity/37.uvc-g6-edge-bullet/p-mkt3-uvc-g6-edge-bullet.png",
      "/images/camerasecurity/37.uvc-g6-edge-bullet/p-mkt4-uvc-g6-edge-bullet.png",
      "/images/camerasecurity/37.uvc-g6-edge-bullet/p-mkt5-uvc-g6-edge-bullet.png",
      "/images/camerasecurity/37.uvc-g6-edge-bullet/p-mkt6-uvc-g6-edge-bullet.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/37.uvc-g6-edge-bullet/p-mkt0-uvc-g6-edge-bullet.png",
      "/images/camerasecurity/37.uvc-g6-edge-bullet/p-itb-uvc-g6-edge-bullet.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "IR Night Vision : 60 m (196 ft)",
      "Zoom Mode : 2.36x Optical",
      "Weatherproofing : IP66"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Without mount: ⌀107 x 113 mm (⌀4.2 x 4.4') With wall mount: ⌀107 x 212 mm (⌀4.2 x 8.3')" },
          { label: "IR Night Vision", value: "60 m (196 ft)" },
          { label: "Zoom Mode", value: "2.36x Optical" },
          { label: "Face Recognition", value: "✓" },
          { label: "License Plate Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "4K" },
          { label: "Field of View", value: "Wide: H: 113.8°, V: 61.9°, D: 134° Tele: H: 45.5°, V: 25.8°, D: 52°" },
          { label: "Audio", value: "Two-way audio" },
          { label: "Weatherproofing", value: "IP66" },
          { label: "Tamper Resistance", value: "IK04" },
          { label: "Mounting", value: "Wall, Ceiling, Pole mount (Included) Junction Box, Angled Base (Optional)" },
          { label: "UniFi Application Suite", value: "Protect" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "GbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
          { label: "Optics Sensor", value: "1/1.2' 8MP" },
          { label: "Optics Lens", value: "F 5.9-13.8 mm; ƒ/1.5-ƒ/2.9" },
          { label: "Night Mode", value: "Built-in adaptive IR LED illumination and IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "25W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Power Method", value: "PoE+" },
          { label: "Processor", value: "Dual-core Arm® Cortex®-A76 based chip" },
          { label: "Pole Mount Diameter", value: "1.5–2' (38–50 mm)" },
          { label: "Weight", value: "Without mount: 780 g (1.7 lb) With mount: 1.03 kg (2.3 lb)" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Wall mount: aluminum alloy, polycarbonate Pole mount: aluminum alloy" },
          { label: "Expansion Slot", value: "MicroSD card" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-20 to 50º C (-4 to 122º F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/37.uvc-g6-edge-bullet/p-itb-uvc-g6-edge-bullet.png" },
    ],
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
    ],
  },

  // Produk Pertama dari Camera Security, SF Compact
  {
    id: "UVC-G6-INS-W",
    name: "G6 Instant",
    category: "Camera Security",
    subfilter: "Compact",
    image: "/images/camerasecurity/38.uvc-g6-ins/1.p-utama-uvc-g6-ins.png",
    shortDescription:
      "Plug-and-play, 4K WiFi-connected camera with a 1/1.8' 8MP image sensor, Multi-TOPS AI Engine, and two-way audio.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G6-INS-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/38.uvc-g6-ins/1.p-utama-uvc-g6-ins.png",
      "/images/camerasecurity/38.uvc-g6-ins/2.p-spec-uvc-g6-ins.png",
      "/images/camerasecurity/38.uvc-g6-ins/3.p-dimensi-uvc-g6-ins.png",
      "/images/camerasecurity/38.uvc-g6-ins/4.p-deployment-uvc-g6-ins.png",
      "/images/camerasecurity/38.uvc-g6-ins/p-itb-uvc-g6-ins.png",
      "/images/camerasecurity/38.uvc-g6-ins/p-mkt1-uvc-g6-ins.png",
      "/images/camerasecurity/38.uvc-g6-ins/p-mkt2-uvc-g6-ins.png",
      "/images/camerasecurity/38.uvc-g6-ins/p-mkt3-uvc-g6-ins.png",
      "/images/camerasecurity/38.uvc-g6-ins/p-mkt4-uvc-g6-ins.png",
      "/images/camerasecurity/38.uvc-g6-ins/p-mkt5-uvc-g6-ins.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/38.uvc-g6-ins/p-mkt5-uvc-g6-ins.png",
      "/images/camerasecurity/38.uvc-g6-ins/p-itb-uvc-g6-ins.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Polycarbonate",
      "Weatherproofing IPX5",
      "Tamper Resistance IK04"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "81.7 x 50.1 x 57.2 mm  (3.2 x 2 x 2.3')" },
          { label: "IR Night Vision", value: "6 m (20 ft)" },
          { label: "Face Recognition", value: "✓" },
          { label: "License Plate Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "4K" },
          { label: "Field of View", value: "H: 109.9°, V: 56.7°, D: 134.1°" },
          { label: "Audio", value: "Two-way audio" },
          { label: "Weatherproofing", value: "IP55" },
          { label: "Tamper Resistance", value: "IK04" },
          { label: "Mounting", value: "Wall mount accessory (Included)" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "802.11 a/b/g/n/ac WiFi Bluetooth" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
          { label: "Optics Sensor", value: "1/1.8” 8MP" },
          { label: "Optics Lens", value: "Fixed focal length" },
          { label: "Night Mode", value: "Built-in IR LED illumination and an IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "7W" },
          { label: "Supported Voltage Range", value: "5V DC, 2A" },
          { label: "Power Method", value: "5V, 2A USB power adapter (Included) PoE to USB-C adapter (Not included)" },
          { label: "Processor", value: "Quad-core Arm® Cortex®-A53 based chip" },
          { label: "Weight", value: "180 g (6.3 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Expansion Slot", value: "MicroSD card" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Cable Cable Connector Type", value: "USB Type-C to USB Type-C" },
          { label: "Cable Cable Diameter", value: "3 mm (0.1')" },
          { label: "Cable Cable Length", value: "2 m (6.6 ft)" },
          { label: "Cable Jacket Material", value: "Thermoplastic elastomer" },
          { label: "Ambient Operating Temperature", value: "-20 to 40° C (-4 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/38.uvc-g6-ins/p-itb-uvc-g6-ins.png" },
    ],
  },

  // Produk Kedua dari Camera Security, SF Compact
  {
    id: "UVC-AI-Theta-Pro",
    name: "Camera AI Theta Pro",
    category: "Camera Security",
    subfilter: "Compact",
    image: "/images/camerasecurity/39.uvc-ai-theta-pro/1.p-utama-uvc-ai-theta-pro.png",
    shortDescription:
      "A complete ceiling 360° AI Theta system designed to discreetly provide a panoramic view of large, busy spaces.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-AI-Theta-Pro",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/39.uvc-ai-theta-pro/1.p-utama-uvc-ai-theta-pro.png",
      "/images/camerasecurity/39.uvc-ai-theta-pro/2.p-spec-uvc-ai-theta-pro.png",
      "/images/camerasecurity/39.uvc-ai-theta-pro/3.p-dimensi-uvc-ai-theta-pro.png",
      "/images/camerasecurity/39.uvc-ai-theta-pro/4.p-deployment-uvc-ai-theta-pro.png",
      "/images/camerasecurity/39.uvc-ai-theta-pro/p-itb-uvc-ai-theta-pro.png",
      "/images/camerasecurity/39.uvc-ai-theta-pro/p-mkt0-uvc-ai-theta-pro.png",
      "/images/camerasecurity/39.uvc-ai-theta-pro/p-mkt1-uvc-ai-theta-pro.png",
      "/images/camerasecurity/39.uvc-ai-theta-pro/p-mkt2-uvc-ai-theta-pro.png",
      "/images/camerasecurity/39.uvc-ai-theta-pro/p-mkt4-uvc-ai-theta-pro.png",
      "/images/camerasecurity/39.uvc-ai-theta-pro/p-mkt5-uvc-ai-theta-pro.png",
      "/images/camerasecurity/39.uvc-ai-theta-pro/p-mkt7-uvc-ai-theta-pro.png",
      "/images/camerasecurity/39.uvc-ai-theta-pro/p-mkt11-uvc-ai-theta-pro.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/39.uvc-ai-theta-pro/p-mkt0-uvc-ai-theta-pro.png",
      "/images/camerasecurity/39.uvc-ai-theta-pro/p-itb-uvc-ai-theta-pro.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max. Power Consumption 12.5W",
      "Power Method PoE",
      "Resolution 4k",
      "Note. License plate recognition supported with Long-Distance and Wide-Angle lenses."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "UVC-AI-Theta-Hub: 140 x 70 x 38 mm (5.5 x 2.8 x 1.5”) UVC-AI-Theta-ProLens360: ⌀36.6 x 58.9 mm (⌀1.4 x 2.3”) UVC-AI-Theta-ProLens360 Flush mount: ⌀54.6 x 60.4 mm (⌀2.2 x 2.4”)" },
          { label: "Face Recognition", value: "✓" },
          { label: "License Plate Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "4K" },
          { label: "Field of View", value: "H: 180°, V: 180°, D: 180°" },
          { label: "Audio", value: "Two-way audio with optional AI Theta Audio" },
          { label: "Mounting", value: "Wall, ceiling, flush mount (Included) Angle mount (Optional)" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "GbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "24 FPS" },
          { label: "Video Resolution", value: "4MP 2160 x 2160 (1:1)" },
          { label: "Optics Sensor", value: "8MP 1/1.8' CMOS" },
          { label: "Optics Lens", value: "Fixed focal length" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "12.5W" },
          { label: "Supported Voltage Range", value: "37—57V DC" },
          { label: "Power Method", value: "PoE" },
          { label: "Processor", value: "Quad-core Arm® Cortex®-A53 based chip" },
          { label: "Weight", value: "UVC-AI-Theta-Hub: 330 g (11.6 oz) UVC-AI-Theta-Hub mount: 35 g (1.2 oz) UVC-AI-Theta-ProLens360: 58 g (2 oz) UVC-AI-Theta-ProLens360 Flush mount: 24 g (0.8 oz)" },
          { label: "Enclosure Material", value: "UVC-AI-Theta-Hub: aluminum alloy UVC-AI-Theta-ProLens360: aluminum alloy, polycarbonate" },
          { label: "Mount Material", value: "UVC-AI-Theta-Hub: aluminum alloy UVC-AI-Theta-ProLens360 Flush mount: polycarbonate" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-20 to 40° C (-4 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/39.uvc-ai-theta-pro/p-itb-uvc-ai-theta-pro.png" },
    ],

    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "AI Theta Audio",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Two-way audio module that connects to an AI Theta Hub.",
        specs: [
          "Built-in microphone and speaker for two-way audio",
          "Connects to an AI Theta Hub with the included cable",
          "Includes flush mount for flat ceiling or wall mounting",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "⌀61.5 x 39 mm (⌀2.4 x 1.5')" },
        ],
        productLink: "/products/mounting-kit-uvc-ai-theta-pro-w"
      },
    ]
  },

  // // Produk Ketiga dari Camera Security, SF Compact
  // {
  //   id: "UVC-AI-Theta-Hub",
  //   name: "AI Theta Hub",
  //   category: "Camera Security",
  //   subfilter: "Compact",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "Remote processing hub for any AI Theta deployment, compatible with any AI Theta Lens and AI Theta Audio.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UVC-AI-Theta-Hub",

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
  //     "Max. Power Consumption 12.5W",
  //     "Power Method PoE",
  //     "Resolution 4k",
  //     "Note. License plate recognition supported with Long-Distance and Wide-Angle lenses."
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Dimensions", value: "140 x 70 x 38 mm (5.5 x 2.8 x 1.5”)" },
  //         { label: "Mounting", value: "Wall, ceiling mount (Included)" },
  //       ]
  //     },
  //     {
  //       title: "Performance",
  //       items: [
  //         { label: "Network Interface", value: "GbE RJ45 port Theta audio port Theta lens port" },
  //         { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Processor", value: "Quad-core Arm® Cortex®-A53 based chip" },
  //         { label: "Enclosure Material", value: "Aluminum alloy" },
  //         { label: "Mounting Material", value: "Aluminum alloy" },
  //         { label: "Weight", value: "UVC-AI-Theta-Hub: 330 g (11.6 oz) UVC-AI-Theta-Hub Mount: 35 g (1.2 oz)" },
  //         { label: "Power Method", value: "PoE" },
  //         { label: "Supprorted Voltage Range", value: "37—57V DC" },
  //         { label: "Max. Power Consumption", value: "12.5W" },
  //         { label: "Power Output", value: "5V DC, 1A per port" },
  //         { label: "LCM Display", value: "0.96' display" },
  //         { label: "Button", value: "(1) Factory reset" },
  //         { label: "Ambient Operating Temperature", value: "-20 to 40° C (-4 to 104° F)" },
  //         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
  //         { label: "NDAA Compliant", value: "✓" },
  //         { label: "Certifications", value: "FCC, IC, CE" },
  //       ]
  //     },
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
  //       name: "Flush Mount",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Enhanced flush mount for AI Theta Pro Lenses.",
  //       specs: [
  //         "Supports flush mounting without access to the rear of a ceiling or wall",
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "⌀73.6 x 73.7 mm (⌀2.9 x 2.9')" },
  //         { label: "Weight", value: "100 g (3.5)" },
  //         { label: "Enclosure Material", value: "Polycarbonate, zinc alloy" }
  //       ],
  //       productLink: "/products/mounting-kit-uvc-ai-theta-pro-w"
  //     },
  //     {
  //       id: 2,
  //       name: "Angle Mount",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Angled ceiling mount for AI Theta Pro Lenses.",
  //       specs: [
  //         "Supports surface mounting with angle adjustment",
  //         "Compatible with AI Theta Pro Lenses",
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "64.7 x 42.4 x 100.1 mm (2.5 x 1.7 x 3.9')" },
  //         { label: "Weight", value: "Mount: 113 g (4 oz) Mount plate: 7 g (0.25 oz)" },
  //         { label: "Material", value: "Aluminum alloy" },
  //         { label: "Enclosure Material", value: "Aluminum alloy" },
  //         { label: "Mounting Material", value: "Aluminum alloy, stainless steel" }
  //       ],
  //       productLink: "/products/mounting-kit-uvc-ai-theta-pro-w"
  //     },
  //     {
  //       id: 3,
  //       name: "AI Theta Audio",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Two-way audio module that connects to an AI Theta Hub.",
  //       specs: [
  //         "Built-in microphone and speaker for two-way audio",
  //         "Connects to an AI Theta Hub with the included cable",
  //         "Includes flush mount for flat ceiling or wall mounting",
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "⌀61.5 x 39 mm (⌀2.4 x 1.5')" },
  //       ],
  //       productLink: "/products/mounting-kit-uvc-ai-theta-pro-w"
  //     },
  //   ]
  // },

  // // Produk Keempat dari Camera Security, SF Compact
  // {
  //   id: "UVC-AI-Theta",
  //   name: "AI Theta",
  //   category: "Camera Security",
  //   subfilter: "Compact",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "A complete AI Theta system that discreetly secures any space while maintaining a warm and inviting atmosphere.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UVC-AI-Theta",

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
  //     "Max. Power Consumption 12.5W",
  //     "Power Method PoE",
  //     "Resolution 4k",
  //     "Note. License plate recognition supported with Long-Distance and Wide-Angle lenses."
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Dimensions", value: "UVC-AI-Theta-Hub: 140 x 70 x 38 mm (5.5 x 2.8 x 1.5”) UVC-AI-Theta-Lens/360: ⌀22.8. x 43.5 mm  (⌀0.9 x 1.7”)" },
  //         { label: "Face Recognition", value: "✓" },
  //         { label: "License Plate Recognition", value: "✓" },
  //         { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
  //         { label: "Resolution", value: "4K" },
  //         { label: "Field of View", value: "H: 97.5°, V: 79.4°, D: 118.2°" },
  //         { label: "Audio", value: "Two-way audio with optional AI Theta Audio" },
  //         { label: "Mounting", value: "Wall, ceiling, flush mount (Included) Angle mount (Optional)" },
  //       ]
  //     },
  //     {
  //       title: "Performance",
  //       items: [
  //         { label: "Network Interface", value: "GbE RJ45 port" },
  //         { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
  //         { label: "Video Max. Frame Rate", value: "UVC-AI-Theta-Lens: 24 FPS UVC-AI-Theta-Lens-360: 20 FPS" },
  //         { label: "Resolution", value: "UVC-AI-Theta-Lens: 8MP 3264 x 2448 (4:3) UVC-AI-Theta-Lens-360: 6MP 2560 x 2560 (1:1)" },
  //         { label: "Optics Sensor", value: "UVC-AI-Theta-Lens: 8MP CMOS UVC-AI-Theta-Lens-360: 12MP CMOS" },
  //         { label: "Optics Lens", value: "Fixed focal length" },
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Max. Power Consumption", value: "12.5W" },
  //         { label: "Supprorted Voltage Range", value: "37—57V DC" },
  //         { label: "Power Method", value: "PoE" },
  //         { label: "Processor", value: "Quad-core Arm® Cortex®-A53 based chip" },
  //         { label: "Weight", value: "UVC-AI-Theta-Hub: 330 g (11.6 oz) UVC-AI-Theta-Hub mount: 35 g (1.2 oz) UVC-AI-Theta-Lens/360: 15 g (0.5 oz) UVC-AI-Theta-Lens/360 Flush mount: 12 g (0.4 oz)" },
  //         { label: "Enclosure Material", value: " UVC-AI-Theta-Hub: aluminum alloy UVC-AI-Theta-Lens/360: aluminum alloy, polycarbonate UVC-AI-Theta-Lens/360 Flush mount: polycarbonate" },
  //         { label: "Mount Material", value: "UVC-AI-Theta-Hub: aluminum alloy UVC-AI-Theta-Lens/360: aluminum alloy, polycarbonate UVC-AI-Theta-Lens/360 Flush mount: polycarbonate" },
  //         { label: "Button", value: "(1) Factory reset" },
  //         { label: "Ambient Operating Temperature", value: "-20 to 40° C (-4 to 104° F)" },
  //         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
  //         { label: "NDAA Compliant", value: "✓" },
  //         { label: "Certifications", value: "CE, FCC, IC" },
  //       ]
  //     },
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
  //       name: "Angle Mount",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Angled ceiling mount for AI Theta Pro Lenses.",
  //       specs: [
  //         "Supports surface mounting with angle adjustment",
  //         "Compatible with AI Theta Pro Lenses",
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "64.7 x 42.4 x 100.1 mm (2.5 x 1.7 x 3.9')" },
  //         { label: "Weight", value: "Mount: 113 g (4 oz) Mount plate: 7 g (0.25 oz)" },
  //         { label: "Material", value: "Aluminum alloy" },
  //         { label: "Enclosure Material", value: "Aluminum alloy" },
  //         { label: "Mounting Material", value: "Aluminum alloy, stainless steel" }
  //       ],
  //       productLink: "/products/mounting-kit-uvc-ai-theta-pro-w"
  //     },
  //     {
  //       id: 2,
  //       name: "AI Theta Audio",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Two-way audio module that connects to an AI Theta Hub.",
  //       specs: [
  //         "Built-in microphone and speaker for two-way audio",
  //         "Connects to an AI Theta Hub with the included cable",
  //         "Includes flush mount for flat ceiling or wall mounting",
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "⌀61.5 x 39 mm (⌀2.4 x 1.5')" },
  //       ],
  //       productLink: "/products/mounting-kit-uvc-ai-theta-pro-w"
  //     },
  //   ]
  // },

  // Produk Kelima dari Camera Security, SF Compact
  {
    id: "UVC-G5-Flex",
    name: "G5 Flex",
    category: "Camera Security",
    subfilter: "Compact",
    image: "/images/camerasecurity/40.uvc-g5-flex/1.p-utama-uvc-g5-flex.png",
    shortDescription:
      "Compact, easy-to-deploy 2K HD PoE camera that can be staged indoors or outside.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G5-FLEX",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/40.uvc-g5-flex/1.p-utama-uvc-g5-flex.png",
      "/images/camerasecurity/40.uvc-g5-flex/2.p-dimensi-uvc-g5-flex.png",
      "/images/camerasecurity/40.uvc-g5-flex/3.p-spec-uvc-g5-flex.png",
      "/images/camerasecurity/40.uvc-g5-flex/4.p-deployment-uvc-g5-flex.png",
      "/images/camerasecurity/40.uvc-g5-flex/p-itb-uvc-g5-flex.png",
      "/images/camerasecurity/40.uvc-g5-flex/p-mkt0-uvc-g5-flex.png",
      "/images/camerasecurity/40.uvc-g5-flex/p-mkt1-uvc-g5-flex.png",
      "/images/camerasecurity/40.uvc-g5-flex/p-mkt2-uvc-g5-flex.png",
      "/images/camerasecurity/40.uvc-g5-flex/p-mkt3-uvc-g5-flex.png",
      "/images/camerasecurity/40.uvc-g5-flex/p-mkt4-uvc-g5-flex.png",
      "/images/camerasecurity/40.uvc-g5-flex/p-mkt5-uvc-g5-flex.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/40.uvc-g5-flex/p-mkt5-uvc-g5-flex.png",
      "/images/camerasecurity/40.uvc-g5-flex/p-itb-uvc-g5-flex.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Max. Power Consumption 4W",
      "Enclosure Material Polycarbonate",
      "Power Method PoE"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀48 x 107.5 mm (⌀1.9 x 4.2')" },
          { label: "IR Night Vision", value: "6 m (20 ft)" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "2K" },
          { label: "Field of View", value: "H: 102.4°, V: 54.9°, D: 120.6°" },
          { label: "Audio", value: "Microphone" },
          { label: "Weatherproofing", value: "IPX4 (While Covered)" },
          { label: "Temper Resistance", value: "IK04" },
          { label: "Mounting", value: "Desktop, Wall, pole mount, hard-ceiling (Included) In-ceiling mount, pendant, Pro mount (Optional)" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "10/100 MbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "4MP 2688 x 1512 (16:9)" },
          { label: "Optics Sensor", value: "5MP CMOS" },
          { label: "Optics Lens", value: "Fixed focal length" },
          { label: "Night Mode", value: "Built-in IR LED illumination and IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "4W" },
          { label: "Supprorted Voltage Range", value: "37—57V DC" },
          { label: "Power Method", value: "PoE" },
          { label: "Processor", value: "Dual-core Arm® Cortex®-A7 based chip" },
          { label: "Pole Mount Diameter", value: "1–1.5' (25–38 mm)" },
          { label: "Weight", value: "170 g (6 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-20 to 40° C (-4 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/40.uvc-g5-flex/p-itb-uvc-g5-flex.png" },
    ],
  },

  // Produk Keenam dari Camera Security, SF Compact
  {
    id: "UVC-G4-INS",
    name: "G4 Instant",
    category: "Camera Security",
    subfilter: "Compact",
    image: "/images/camerasecurity/41.uvc-g4-ins/1.p-utama-uvc-g4-ins-7.png",
    shortDescription:
      "Compact, wide-angle, WiFi-connected camera with two-way audio.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G4-INS",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/41.uvc-g4-ins/1.p-utama-uvc-g4-ins-7.png",
      "/images/camerasecurity/41.uvc-g4-ins/2.p-spec-uvc-g4-ins-7.png",
      "/images/camerasecurity/41.uvc-g4-ins/3.p-dimensi-uvc-g4-ins-7.png",
      "/images/camerasecurity/41.uvc-g4-ins/4.p-deployment-uvc-g4-ins-7.png",
      "/images/camerasecurity/41.uvc-g4-ins/p-itb-uvc-g4-ins-7.png",
      "/images/camerasecurity/41.uvc-g4-ins/p-mkt0-uvc-g4-ins-7.png",
      "/images/camerasecurity/41.uvc-g4-ins/p-mkt1-uvc-g4-ins-7.png",
      "/images/camerasecurity/41.uvc-g4-ins/p-mkt2-uvc-g4-ins-7.png",
      "/images/camerasecurity/41.uvc-g4-ins/p-mkt3-uvc-g4-ins-7.png",
      "/images/camerasecurity/41.uvc-g4-ins/p-mkt4-uvc-g4-ins-7.png",
      "/images/camerasecurity/41.uvc-g4-ins/p-mkt5-uvc-g4-ins-7.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/41.uvc-g4-ins/p-mkt4-uvc-g4-ins-7.png",
      "/images/camerasecurity/41.uvc-g4-ins/p-itb-uvc-g4-ins-7.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Weatherproofing IPX5",
      "Resolution 2K",
      "Power Method 5V, 2A USB power adapter (Included) Instant PoE to USB adapter (Optional)",
      "Note. Third-party WiFi configuration available during setup with the UniFi Protect mobile app. EU version comes with EU power plug only."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "81.6 x 50 x 47.2 mm (3.2 x 2 x 1.9')" },
          { label: "IR Night Vision", value: "6 m (20 ft)" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "2K" },
          { label: "Field of View", value: "H: 102.4°, V: 54.9°, D: 120.6°" },
          { label: "Audio", value: "Two-way audio" },
          { label: "Weatherproofing", value: "IPX5" },
          { label: "Temper Resistance", value: "IK04" },
          { label: "Mounting", value: "Wall mount accessory (Included)" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "802.11 a/b/g/n/ac WiFi Bluetooth" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "4MP 2688 x 1512 (16:9)" },
          { label: "Optics Sensor", value: "5MP CMOS" },
          { label: "Optics Lens", value: "Fixed focal length EFL 2.8 mm, ƒ/1.6" },
          { label: "Night Mode", value: "Built-in IR LED illumination and IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "6W" },
          { label: "Supprorted Voltage Range", value: "5V DC, 2A" },
          { label: "Power Method", value: "5V, 2A USB power adapter (Included) Instant PoE to USB adapter (Optional)" },
          { label: "Processor", value: "Dual-core Arm® Cortex®-A7 based chip" },
          { label: "Weight", value: "Without mount: 125 g (4.4 oz) With mount: 163 g (5.8 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Cable Cable Connector Type", value: "USB Type-C to USB Type-C" },
          { label: "Cable Diameter", value: "3 mm (0.1')" },
          { label: "Cable Length", value: "2 m (6.6 ft)" },
          { label: "Cable Jacket Material", value: "Thermoplastic elastomer" },
          { label: "Ambient Operating Temperature", value: "-20 to 40° C (-4 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 10585-22-08356" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/41.uvc-g4-ins/p-itb-uvc-g4-ins-7.png" },
    ],
  },

  //Produk Ketujuh dari Camera Security, SF Compact
  {
    id: "UVC-AI-Theta-Audio",
    name: "AI Theta Audio",
    category: "Camera Security",
    subfilter: "Compact",
    image: "/images/camerasecurity/42.uvc-ai-theta-audio/1.p-utama-uvc-ai-theta-audio-2.png",
    shortDescription: "Two-way audio module that connects to an AI Theta Hub.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-AI-THETA-AUDIO",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/42.uvc-ai-theta-audio/1.p-utama-uvc-ai-theta-audio-2.png",
      "/images/camerasecurity/42.uvc-ai-theta-audio/2.p-spec-uvc-ai-theta-audio-2.png",
      "/images/camerasecurity/42.uvc-ai-theta-audio/3.p-deployment-uvc-ai-theta-audio-2.png",
      "/images/camerasecurity/42.uvc-ai-theta-audio/p-mkt0-uvc-ai-theta-audio-2.png",
      "/images/camerasecurity/42.uvc-ai-theta-audio/p-mkt1-uvc-ai-theta-audio-2.png",
      "/images/camerasecurity/42.uvc-ai-theta-audio/p-mkt2-uvc-ai-theta-audio-2.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/42.uvc-ai-theta-audio/p-mkt2-uvc-ai-theta-audio-2.png",
      "/images/camerasecurity/42.uvc-ai-theta-audio/3.p-deployment-uvc-ai-theta-audio-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Built-in microphone and speaker for two-way audio",
      "Connects to an AI Theta Hub with the included cable",
      "Includes flush mount for flat ceiling or wall mounting",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "81.7 x 50.1 x 57.2 mm  (3.2 x 2 x 2.3')" },
          { label: "IR Night Vision", value: "6 m (20 ft)" },
          { label: "Face Recognition", value: "✓" },
          { label: "License Plate Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "4K" },
          { label: "Field of View", value: "H: 109.9°, V: 56.7°, D: 134.1°" },
          { label: "Audio", value: "Two-way audio" },
          { label: "Weatherproofing", value: "IP55" },
          { label: "Tamper Resistance", value: "IK04" },
          { label: "Mounting", value: "Wall mount accessory (Included)" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "802.11 a/b/g/n/ac WiFi Bluetooth" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
          { label: "Optics Sensor", value: "1/1.8” 8MP" },
          { label: "Optics Lens", value: "Fixed focal length" },
          { label: "Night Mode", value: "Built-in IR LED illumination and an IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "7W" },
          { label: "Supported Voltage Range", value: "5V DC, 2A" },
          { label: "Power Method", value: "5V, 2A USB power adapter (Included) PoE to USB-C adapter (Not included)" },
          { label: "Processor", value: "Quad-core Arm® Cortex®-A53 based chip" },
          { label: "Weight", value: "180 g (6.3 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Expansion Slot", value: "MicroSD card" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Cable Cable Connector Type", value: "USB Type-C to USB Type-C" },
          { label: "Cable Cable Diameter", value: "3 mm (0.1')" },
          { label: "Cable Cable Length", value: "2 m (6.6 ft)" },
          { label: "Cable Jacket Material", value: "Thermoplastic elastomer" },
          { label: "Ambient Operating Temperature", value: "-20 to 40° C (-4 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC" },
        ]
      },
    ],
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/42.uvc-ai-theta-audio/p-mkt0-uvc-ai-theta-audio-2.png" },
    ],
  },

  // Produk Kedelapan dari Camera Security, SF Compact
  // {
  //   id: "UVC-AI-Theta-Lens-LD",
  //   name: "AI Theta Long-Distance Lens",
  //   category: "Camera Security",
  //   subfilter: "Compact",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "Long-distance lens that connects to an AI Theta Hub.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UVC-AI-Theta-Lens-LD",

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
  //     "Power Method Theta proprietary",
  //     "Enclosure Material Aluminum alloy, polycarbonate",
  //     "Resolution 4K"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Dimensions", value: "⌀22.8. x 43.5 mm (⌀0.9 x 1.7”)" },
  //         { label: "Field of View", value: "H: 36.2°, V: 27.7°, D: 44.4°" },
  //         { label: "Resolution", value: "4K" },
  //         { label: "Mounting", value: "Wall, ceiling mount (Included) Angle mount (Optional)" },
  //         { label: "Operating Environment", value: "Indoor Only" },
  //       ]
  //     },
  //     {
  //       title: "Performance",
  //       items: [
  //         { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
  //         { label: "Video Max. Frame Rate", value: "24 FPS" },
  //         { label: "Video Resolution", value: "8MP 3264 x 2448 (4:3)" },
  //         { label: "Optics Sensor", value: "8MP CMOS" },
  //         { label: "Optics Lens", value: "Fixed focal length" },
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
  //         { label: "Mount Material", value: "Polycarbonate" },
  //         { label: "Weight", value: "15 g (0.5 oz)" },
  //         { label: "Power Method", value: "Theta proprietary" },
  //         { label: "Power Supply", value: "5V DC, 0.5A" },
  //         { label: "Max. Power Consumption", value: "2.5W" },
  //         { label: "Ambient Operating Temperature", value: "-20 to 40° C (-4 to 104° F)" },
  //         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
  //         { label: "Certifications", value: "FCC, IC, CE" },
  //       ]
  //     },
  //   ],
  // },

  // Produk Kesembilan dari Camera Security, SF Compact
  {
    id: "UVC-AI-Theta-ProLens50",
    name: "AI Theta Pro Long-Distance Lens",
    category: "Camera Security",
    subfilter: "Compact",
    image: "/images/camerasecurity/43.uvc-ai-theta-prolens50/1.p-utama-uvc-ai-theta-prolens50.png",
    shortDescription:
      "Long-distance lens with enhanced low-light performance and dynamic range that connects to an AI Theta Hub.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-AI-Theta-ProLens50",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/43.uvc-ai-theta-prolens50/1.p-utama-uvc-ai-theta-prolens50.png",
      "/images/camerasecurity/43.uvc-ai-theta-prolens50/2.p-spec-uvc-ai-theta-prolens50.png",
      "/images/camerasecurity/43.uvc-ai-theta-prolens50/3.p-deployment-uvc-ai-theta-prolens50.png",
      "/images/camerasecurity/43.uvc-ai-theta-prolens50/p-mkt0-uvc-ai-theta-prolens50.png",
      "/images/camerasecurity/43.uvc-ai-theta-prolens50/p-mkt2-uvc-ai-theta-prolens50.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/43.uvc-ai-theta-prolens50/p-mkt0-uvc-ai-theta-prolens50.png",
      "/images/camerasecurity/43.uvc-ai-theta-prolens50/3.p-deployment-uvc-ai-theta-prolens50.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Power Method Theta proprietary",
      "Enclosure Material Aluminum alloy, polycarbonate",
      "Resolution 4K"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "⌀36.6 x 58.9 mm (⌀1.4 x 2.3)" },
          { label: "Field of View", value: "H: 53°, V: 31°, D: 60°" },
          { label: "Resolution", value: "4K" },
          { label: "Mounting", value: "Wall, ceiling mount (Included) Angle mount (Optional)" },
          { label: "Operating Environment", value: "Indoor Only" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "24 FPS" },
          { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
          { label: "Optics Sensor", value: "8MP 1/1.8'" },
          { label: "Optics Lens", value: "Fixed focal length" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Weight", value: "60 g (2.1 oz)" },
          { label: "Power Method", value: "Theta proprietary" },
          { label: "Power Supply", value: "5V DC, 0.5A" },
          { label: "Max. Power Consumption", value: "2.5W" },
          { label: "Ambient Operating Temperature", value: "-20 to 40° C (-4 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ]
      },
    ],
     // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/43.uvc-ai-theta-prolens50/p-mkt2-uvc-ai-theta-prolens50.png" },
    ],
  },

  // Produk Kesepuluh dari Camera Security, SF Compact
  // {
  //   id: "UVC-AI-Theta-ProLens110",
  //   name: "AI Theta Pro Wide-Angle Lens",
  //   category: "Camera Security",
  //   subfilter: "Compact",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "Wide-angle lens with enhanced low-light performance and dynamic range that connects to an AI Theta Hub.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UVC-AI-Theta-ProLens110",

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
  //     "Power Method Theta proprietary",
  //     "Enclosure Material Aluminum alloy, polycarbonate",
  //     "Resolution 4K"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Dimensions", value: "⌀36.6 x 58.9 mm (⌀1.4 x 2.3)" },
  //         { label: "Field of View", value: "H: 110.4°, V: 62.1°, D: 126.6°" },
  //         { label: "Resolution", value: "4K" },
  //         { label: "Mounting", value: "Wall, ceiling mount (Included) Angle mount (Optional)" },
  //         { label: "Operating Environment", value: "Indoor Only" },
  //       ]
  //     },
  //     {
  //       title: "Performance",
  //       items: [
  //         { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
  //         { label: "Video Max. Frame Rate", value: "24 FPS" },
  //         { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
  //         { label: "Optics Sensor", value: "8MP 1/1.8'" },
  //         { label: "Optics Lens", value: "Fixed focal length" },
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
  //         { label: "Mount Material", value: "Polycarbonate" },
  //         { label: "Weight", value: "50 g (1.8 oz)" },
  //         { label: "Power Method", value: "Theta proprietary" },
  //         { label: "Power Supply", value: "5V DC, 0.5A" },
  //         { label: "Max. Power Consumption", value: "2.5W" },
  //         { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
  //         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
  //         { label: "Certifications", value: "FCC, IC, CE" },
  //       ]
  //     },
  //   ],
  // },

  // Produk Kesebelas dari Camera Security, SF Compact
  // {
  //   id: "UVC-AI-Theta-Lens",
  //   name: "AI Theta Lens",
  //   category: "Camera Security",
  //   subfilter: "Compact",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "Wide-angle lens that connects to an AI Theta Hub.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UVC-AI-Theta-Lens",

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
  //     "Power Method Theta proprietary",
  //     "Enclosure Material Aluminum alloy, polycarbonate",
  //     "Resolution 4K"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Dimensions", value: "⌀22.8. x 43.5 mm (⌀0.9 x 1.7”)" },
  //         { label: "Field of View", value: "H: 97.5°, V: 79.4°, D: 118.2°" },
  //         { label: "Resolution", value: "4K" },
  //         { label: "Mounting", value: "Wall, ceiling mount (Included) Angle mount (Optional)" },
  //         { label: "Operating Environment", value: "Indoor Only" },
  //       ]
  //     },
  //     {
  //       title: "Performance",
  //       items: [
  //         { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
  //         { label: "Video Max. Frame Rate", value: "24 FPS" },
  //         { label: "Video Resolution", value: "8MP 3264 x 2448 (4:3)" },
  //         { label: "Optics Sensor", value: "8MP CMOS" },
  //         { label: "Optics Lens", value: "Fixed focal length" },
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
  //         { label: "Mount Material", value: "Polycarbonate" },
  //         { label: "Weight", value: "15 g (0.5 oz)" },
  //         { label: "Power Method", value: "Theta proprietary" },
  //         { label: "Power Supply", value: "5V DC, 0.5A" },
  //         { label: "Max. Power Consumption", value: "2.5W" },
  //         { label: "Ambient Operating Temperature", value: "-20 to 40° C (-4 to 104° F)" },
  //         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
  //         { label: "Certifications", value: "FCC, IC, CE" },
  //       ]
  //     },
  //   ],
  // },

  //Produk Keduabelas dari Camera Security, SF Compact
  // {
  //   id: "UVC-AI-Theta-ProLens360",
  //   name: "AI Theta Pro 360 Lens",
  //   category: "Camera Security",
  //   subfilter: "Compact",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "Ultra-wide 360° view lens with enhanced low-light performance and dynamic range that connects to an AI Theta Hub.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UVC-AI-Theta-ProLens360",

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
  //     "Power Method Theta proprietary",
  //     "Enclosure Material Aluminum alloy, polycarbonate",
  //     "Resolution 4K"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Dimensions", value: "⌀36.6 x 58.9 mm (⌀1.4 x 2.3)" },
  //         { label: "Field of View", value: "H: 180°, V: 180°, D: 180°" },
  //         { label: "Resolution", value: "4K" },
  //         { label: "Mounting", value: "Wall, ceiling mount (Included) Angle mount (Optional)" },
  //         { label: "Operating Environment", value: "Indoor Only" },
  //       ]
  //     },
  //     {
  //       title: "Performance",
  //       items: [
  //         { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
  //         { label: "Video Max. Frame Rate", value: "24 FPS" },
  //         { label: "Video Resolution", value: "4MP 2160 x 2160 (1:1)" },
  //         { label: "Optics Sensor", value: "8MP 1/1.8'" },
  //         { label: "Optics Lens", value: "Fixed focal length" },
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
  //         { label: "Mount Material", value: "Polycarbonate" },
  //         { label: "Weight", value: "50 g (1.8 oz)" },
  //         { label: "Power Method", value: "Theta proprietary" },
  //         { label: "Power Supply", value: "5V DC, 0.5A" },
  //         { label: "Max. Power Consumption", value: "2.5W" },
  //         { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
  //         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
  //         { label: "Certifications", value: "FCC, IC, CE" },
  //       ]
  //     },
  //   ],
  // },

  // Produk KetigaBelas dari Camera Security, SF Compact
  // {
  //   id: "UVC-AI-Theta-Lens-360",
  //   name: "AI Theta 360 Lens",
  //   category: "Camera Security",
  //   subfilter: "Compact",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "Ultra-wide 360° view lens that connects to an AI Theta Hub.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UVC-AI-Theta-Lens-360",

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
  //     "Power Method Theta proprietary",
  //     "Enclosure Material Aluminum alloy, polycarbonate",
  //     "Resolution 4K"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Dimensions", value: "⌀22.8. x 43.5 mm (⌀0.9 x 1.7”)" },
  //         { label: "Field of View", value: "H: 180°, V: 180°, D: 180°" },
  //         { label: "Resolution", value: "4K" },
  //         { label: "Mounting", value: "Wall, ceiling mount (Included) Angle mount (Optional)" },
  //         { label: "Operating Environment", value: "Indoor Only" },
  //       ]
  //     },
  //     {
  //       title: "Performance",
  //       items: [
  //         { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
  //         { label: "Video Max. Frame Rate", value: "20 FPS" },
  //         { label: "Video Resolution", value: "4MP 2560 x 2560 (1:1)" },
  //         { label: "Optics Sensor", value: "12MP CMOS" },
  //         { label: "Optics Lens", value: "Fixed focal length" },
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
  //         { label: "Mount Material", value: "Polycarbonate" },
  //         { label: "Weight", value: "15 g (0.5 oz)" },
  //         { label: "Power Method", value: "Theta proprietary" },
  //         { label: "Power Supply", value: "5V DC, 0.5A" },
  //         { label: "Max. Power Consumption", value: "2.5W" },
  //         { label: "Ambient Operating Temperature", value: "-20 to 40° C (-4 to 104° F)" },
  //         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
  //         { label: "Certifications", value: "FCC, IC, CE" },
  //       ]
  //     },
  //   ],
  // },

  //Produk Pertama dari Camera Security, SF PTZ
  {
    id: "UVC-G6-PTZ",
    name: "G6 PTZ",
    category: "Camera Security",
    subfilter: "PTZ",
    image: "/images/camerasecurity/44.uvc-g6-ptz/1.p-utama-uvcg6ptz.png",
    shortDescription:
      "All-weather, 4K dual-lens camera with 10x hybrid zoom, 1/1.8' 8MP image sensor, Multi-TOPS AI Engine, and ultra-low latency pan-tilt-zoom control for motion tracking.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G6-PTZ-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/44.uvc-g6-ptz/1.p-utama-uvcg6ptz.png",
      "/images/camerasecurity/44.uvc-g6-ptz/2.p-dimensi-uvcg6ptz.png",
      "/images/camerasecurity/44.uvc-g6-ptz/3.p-spec-uvcg6ptz.png",
      "/images/camerasecurity/44.uvc-g6-ptz/4.p-development-uvcg6ptz.png",
      "/images/camerasecurity/44.uvc-g6-ptz/p-itb-uvcg6ptz.png",
      "/images/camerasecurity/44.uvc-g6-ptz/p-mkt0-uvcg6ptz.png",
      "/images/camerasecurity/44.uvc-g6-ptz/p-mkt1-uvcg6ptz.png",
      "/images/camerasecurity/44.uvc-g6-ptz/p-mkt2-uvcg6ptz.png",
      "/images/camerasecurity/44.uvc-g6-ptz/p-mkt3-uvcg6ptz.png",
      "/images/camerasecurity/44.uvc-g6-ptz/p-mkt4-uvcg6ptz.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/44.uvc-g6-ptz/p-mkt0-uvcg6ptz.png",
      "/images/camerasecurity/44.uvc-g6-ptz/p-itb-uvcg6ptz.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Aluminum alloy, polycarbonate",
      "Weatherproofing IP66",
      "Zoom Mode 10x Hybrid",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Without mount: ⌀107.2 x 104.5 x 203.2 mm (⌀4.2 x 4.1 x 8') With mount: ⌀107.2 x 111 x 230.2 mm (⌀4.2 x 4.8 x 9.1')" },
          { label: "IR Night Vision", value: "30 m (98 ft)" },
          { label: "Zoom Mode", value: "10x Hybrid" },
          { label: "Face Recognition", value: "✓" },
          { label: "License Plate Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "4K" },
          { label: "Field of View", value: "Wide:  H: 109.9°, V: 56.7°, D: 134.1° Tele: H: 26.6°, V: 15.1° , D: 30.4°" },
          { label: "Pan-Tilt Range", value: "Pan: 350° Tilt: 100°" },
          { label: "Audio", value: "Two-way audio" },
          { label: "Weatherproofing", value: "IP66" },
          { label: "Tamper Resistance", value: "IK04" },
          { label: "Mounting", value: "Wall, Surface, Ceiling, Pole mount (Included) Corner, In-Ceiling, Pendant mount, Conduit adapter (Optional)" },
          { label: "UniFi Application Suite Protect", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "10/100 MbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
          { label: "Optics Sensor", value: "Wide: 1/1.8' 8MP Tele: 1/1.8' 8MP" },
          { label: "Optics Lens", value: "Wide: F 4.46 mm; ƒ/1.65 Tele: F 16.3 mm; ƒ/2.4" },
          { label: "Night Mode", value: "Built-in IR LED illumination and an IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "24.5W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Power Method", value: "PoE+" },
          { label: "Processor", value: "Quad-core Arm® Cortex®-A53 based chip" },
          { label: "Pole Mount Diameter", value: "1.5–2' (38–50 mm)" },
          { label: "Weight", value: "Without arm mount: 1 kg (2.2 lb) With arm mount: 1.1 kg (2.4 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Mount Material", value: "Arm mount: polycarbonate Pole mount: aluminum alloy" },
          { label: "Expansion Slot", value: "MicroSD card" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-30 to 50° C (-22 to 122° F)" },
          { label: "Ambient Operating Humidity", value: "20 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/44.uvc-g6-ptz/p-itb-uvcg6ptz.png" },
    ],
  },

  //Produk Kedua dari Camera Security, SF PTZ
  {
    id: "UVC-AI-PTZ",
    name: "AI PTZ Industrial",
    category: "Camera Security",
    subfilter: "PTZ",
    image: "/images/camerasecurity/45.uvc-ai-ptz/1.p-utama-uvcaiptz.png",
    shortDescription:
      "Industrial-grade 4K PoE++ PTZ camera with enhanced AI capabilities, 22x optical zoom, and long-range adaptive IR LED night vision.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-AI-PTZ-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/45.uvc-ai-ptz/1.p-utama-uvcaiptz.png",
      "/images/camerasecurity/45.uvc-ai-ptz/2.p-dimensi-uvcaiptz.png",
      "/images/camerasecurity/45.uvc-ai-ptz/3.p-spec-uvcaiptz.png",
      "/images/camerasecurity/45.uvc-ai-ptz/4.p-development-uvcaiptz.png",
      "/images/camerasecurity/45.uvc-ai-ptz/p-itb-uvcaiptz.png",
      "/images/camerasecurity/45.uvc-ai-ptz/p-mkt0-uvcaiptz.png",
      "/images/camerasecurity/45.uvc-ai-ptz/p-mkt1-uvcaiptz.png",
      "/images/camerasecurity/45.uvc-ai-ptz/p-mkt2-uvcaiptz.png",
      "/images/camerasecurity/45.uvc-ai-ptz/p-mkt3-uvcaiptz.png",
      "/images/camerasecurity/45.uvc-ai-ptz/p-mkt4-uvcaiptz.png",
      "/images/camerasecurity/45.uvc-ai-ptz/p-mkt5-uvcaiptz.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/45.uvc-ai-ptz/p-mkt0-uvcaiptz.png",
      "/images/camerasecurity/45.uvc-ai-ptz/p-itb-uvcaiptz.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Expansion Slot MicroSD card",
      "22x optical zoom",
      "Enclosure Material Aluminum alloy, polycarbonate",
      "Zoom Mode 22x Optical"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "207 x 223.7 x 341.3 mm (8.2 x 8.8 x 13.4')" },
          { label: "IR Night Vision", value: "100 m (328 ft)" },
          { label: "Zoom Mode", value: "22x Optical" },
          { label: "Face Recognition", value: "✓" },
          { label: "License Plate Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "4K" },
          { label: "Field of View", value: "Wide:  H: 59.8°, V: 44.4° , D: 70° Tele: H: 3°, V: 2.24° , D: 3.76°" },
          { label: "Pan-Tilt Range", value: "Pan: 360° (Endless) Tilt: 120°" },
          { label: "Weatherproofing", value: "IP66" },
          { label: "Mounting", value: "Wall, Pole mount, Desk stand (Included)" },
          { label: "UniFi Application Suite Protect", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "GbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
          { label: "Optics Sensor", value: "1/1.8' 8MP" },
          { label: "Optics Lens", value: "F 6.36-138.5 mm; ƒ/1.5-ƒ/3.4" },
          { label: "Night Mode", value: "Built-in IR LED illumination and an IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "51W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Power Method", value: "PoE++" },
          { label: "Processor", value: "Quad-core Arm® Cortex®-A53 based chip" },
          { label: "Weight", value: "Without mount: 3.8 kg (8.4 lb) Wall mount (Pedant): 3 kg (6.6 lb) Table stand: 150 g (5.3 oz) Pole mount: 320 g (11.3 oz)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Mount Material", value: "Powder-coated aluminum alloy" },
          { label: "Expansion Slot", value: "MicroSD card" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-40 to 50º C (-40 to 122º F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/45.uvc-ai-ptz/p-itb-uvcaiptz.png" },
    ],
  },

  //Produk Ketiga dari Camera Security, SF PTZ
  {
    id: "UVC-AI-PTZ-Precision",
    name: "AI PTZ Precision",
    category: "Camera Security",
    subfilter: "PTZ",
    image: "/images/camerasecurity/46.uvc-ai-ptz-precision/1.p-utama-uvcaiptz.png",
    shortDescription:
      "Industrial-grade 4K PTZ camera with enhanced AI capabilities, 31× optical zoom, adaptive IR LED night vision, and LiDAR technology for faster autofocus.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-AI-PTZ-PRECISION-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/46.uvc-ai-ptz-precision/1.p-utama-uvcaiptz.png",
      "/images/camerasecurity/46.uvc-ai-ptz-precision/2.p-dimensi-uvcaiptz.png",
      "/images/camerasecurity/46.uvc-ai-ptz-precision/3.p-spec-uvcaiptz.png",
      "/images/camerasecurity/46.uvc-ai-ptz-precision/4.p-development-uvcaiptz.png",
      "/images/camerasecurity/46.uvc-ai-ptz-precision/p-itb-uvcaiptz.png",
      "/images/camerasecurity/46.uvc-ai-ptz-precision/p-mkt0-uvcaiptz.png",
      "/images/camerasecurity/46.uvc-ai-ptz-precision/p-mkt1-uvcaiptz.png",
      "/images/camerasecurity/46.uvc-ai-ptz-precision/p-mkt2-uvcaiptz.png",
      "/images/camerasecurity/46.uvc-ai-ptz-precision/p-mkt3-uvcaiptz.png",
      "/images/camerasecurity/46.uvc-ai-ptz-precision/p-mkt4-uvcaiptz.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/46.uvc-ai-ptz-precision/p-mkt0-uvcaiptz.png",
      "/images/camerasecurity/46.uvc-ai-ptz-precision/p-itb-uvcaiptz.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Power Method PoE++",
      "31 × optical zoom",
      "Networking InterfaceGbE RJ45 port",
      "Mounting Wall, Pole mount, Desk stand (Included)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Without mount: ⌀241 x 349 mm (⌀9.5 x 13.7') With mount: 372 x 241 x 299 mm (14.7 x 9.5 x 11.8')" },
          { label: "IR Night Vision", value: "100 m (328 ft)" },
          { label: "Zoom Mode", value: "31x Optical" },
          { label: "Lighting Zoom", value: "Coming Soon" },
          { label: "Face Recognition", value: "✓" },
          { label: "License Plate Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "4K" },
          { label: "Field of View", value: "Wide:  H: 59°, V: 34.1° , D: 67.1° Tele: H: 1.98°, V: 1.12° , D: 2.27°" },
          { label: "Pan-Tilt Range", value: "Pan: 360° (Endless) Tilt: 120°" },
          { label: "Weatherproofing", value: "IP66" },
          { label: "Mounting", value: "Wall, Pole mount, Desk stand (Included)" },
          { label: "UniFi Application Suite Protect", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "GbE RJ45 port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "8MP 3840 x 2160 (16:9)" },
          { label: "Optics Sensor", value: "1/1.8' 8MP" },
          { label: "Optics Lens", value: "F 6.91-214.64 mm; ƒ/1.36-ƒ/4.6" },
          { label: "Night Mode", value: "Built-in IR LED illumination and an IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "51W" },
          { label: "Supported Voltage Range", value: "42.5–57V DC" },
          { label: "Power Method", value: "PoE++" },
          { label: "Processor", value: "Quad-core Arm® Cortex®-A53 based chip" },
          { label: "Pole Mount Diameter", value: "2–4' (50–100 mm) 4.5–6' (115–150 mm)" },
          { label: "Weight", value: "Without mount: 5.5 kg (12.1 lb) Wall mount (Pendant):  2.6 kg (5.7 lb) Table stand: 200 g (7.1 oz) Pole mount: 300 g (10.6 oz)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Mount Material", value: "Powder-coated aluminum alloy" },
          { label: "Expansion Slot", value: "MicroSD card" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-40 to 50º C (-40 to 122º F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/46.uvc-ai-ptz-precision/p-itb-uvcaiptz.png" },
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
        name: "Ethernet Surge Protection",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Bidirectional protection for up to 10 GbE, PoE++, and 20kA surge discharge for indoor installation.",
        specs: [
          "Wall/DIN rail mount",
          "Multiple grounding points"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "89 x 25.5 x 37.4 mm (3.5 x 1 x 1.5')" },
          { label: "Weight", value: "74 g (2.6 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, SGCC steel" },
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
        productLink: "/products/mounting-kit"
      },
      {
        id: 3,
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
    ]
  },

  // Produk Keempat dari Camera Security, SF PTZ
  {
    id: "UVC-G5-PTZ",
    name: "G5 PTZ ",
    category: "Camera Security",
    subfilter: "PTZ",
    image: "/images/camerasecurity/47.uvc-g5-ptz/1.p-utama-uvcg5ptz.png",
    shortDescription:
      "Compact, all-weather camera with ultra-low latency pan-tilt-zoom control and versatile mounting options.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G5-PTZ-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/47.uvc-g5-ptz/1.p-utama-uvcg5ptz.png",
      "/images/camerasecurity/47.uvc-g5-ptz/2.p-dimensi-uvcg5ptz.png",
      "/images/camerasecurity/47.uvc-g5-ptz/3.p-spec-uvcg5ptz.png",
      "/images/camerasecurity/47.uvc-g5-ptz/4.p-spec-uvcg5ptz.png",
      "/images/camerasecurity/47.uvc-g5-ptz/5.p-development-uvcg5ptz.png",
      "/images/camerasecurity/47.uvc-g5-ptz/p-itb-uvcg5ptz.png",
      "/images/camerasecurity/47.uvc-g5-ptz/p-mkt0-uvcg5ptz.png",
      "/images/camerasecurity/47.uvc-g5-ptz/p-mkt1-uvcg5ptz.png",
      "/images/camerasecurity/47.uvc-g5-ptz/p-mkt2-uvcg5ptz.png",
      "/images/camerasecurity/47.uvc-g5-ptz/p-mkt3-uvcg5ptz.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/47.uvc-g5-ptz/p-mkt0-uvcg5ptz.png",
      "/images/camerasecurity/47.uvc-g5-ptz/p-itb-uvcg5ptz.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Mount Material Wall mount: polycarbonate Pole mount: aluminum alloy",
      "Enclosure Material Aluminum alloy, polycarbonate",
      "Pole Mount Diameter 1.5–2' (38–50 mm)",
      "Power Method PoE+"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Without mount: ⌀90 x 152.5 mm (⌀3.5 x 6') With mount: 90 x 94 x 179.5 mm (3.5 x 3.7 x 7')" },
          { label: "IR Night Vision", value: "20 m (65 ft)" },
          { label: "Zoom Mode", value: "2x Optical" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "2K" },
          { label: "Field of View", value: "Wide: H: 99.7°, V: 51.9°, D: 121° Tele: H: 45.5°, V: 25.4°, D: 52.4°" },
          { label: "Pan-Tilt Range", value: "Pan: 350° Tilt: 100°" },
          { label: "Audio", value: "Microphone" },
          { label: "Weatherproofing", value: "IP66" },
          { label: "Temper Resistance", value: "IK04" },
          { label: "Mounting", value: "Wall mount, pole mount (Included) Conduit adapter, surface, in-ceiling, pendant, corner mount (Optional)" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "10/100 MbE RJ45 port" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "4MP 2688 x 1512 (16:9)" },
          { label: "Optics Sensor", value: "5MP 1/2.7' CMOS" },
          { label: "Optics Lens", value: "F 3.42–6.85 mm; ƒ/1.85–ƒ/2.4" },
          { label: "Night Mode", value: "Built-in IR LED illumination and an IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "14W" },
          { label: "Supported Voltage Range", value: "37—57V DC" },
          { label: "Power Method", value: "PoE+" },
          { label: "Pole Mount Diameter", value: "1.5–2' (38–50 mm)" },
          { label: "Weight", value: "Without mount: 580 g (1.3 lb) With mount: 650 g (1.4 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Mount Material", value: "Wall mount: polycarbonate Pole mount: aluminum alloyPowder-coated aluminum alloy" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-30 to 45º C (-22 to 113º F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/47.uvc-g5-ptz/p-itb-uvcg5ptz.png" },
    ],
  },

//Produk Pertama dari Camera Security, SF DoorBells
  {
    id: "UVC-4-Doorbell-Pro-PoE-Kit",
    name: "G4 Doorbell Pro PoE Kit",
    category: "Camera Security",
    subfilter: "Doorbells",
    image: "/images/camerasecurity/48.uvc-g4-doorbell-pro-poe-kit/1.p-utama-uvcg4doorbellpropoekit.png",
    shortDescription:
      "Premium UniFi doorbell with integrated PoE and included PoE chime for plug-and-play installation.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-4-DOORBELL-PRO-POE-KIT-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/48.uvc-g4-doorbell-pro-poe-kit/1.p-utama-uvcg4doorbellpropoekit.png",
      "/images/camerasecurity/48.uvc-g4-doorbell-pro-poe-kit/2.p-dimensi-uvcg4doorbellpropoekit.png",
      "/images/camerasecurity/48.uvc-g4-doorbell-pro-poe-kit/3.p-spec-uvcg4doorbellpropoekit.png",
      "/images/camerasecurity/48.uvc-g4-doorbell-pro-poe-kit/4.p-spec-uvcg4doorbellpropoekit.png",
      "/images/camerasecurity/48.uvc-g4-doorbell-pro-poe-kit/5.p-development-uvcg4doorbellpropoekit.png",
      "/images/camerasecurity/48.uvc-g4-doorbell-pro-poe-kit/p-itb-uvcg4doorbellpropoekit.png",
      "/images/camerasecurity/48.uvc-g4-doorbell-pro-poe-kit/p-mkt0-uvcg4doorbellpropoekit.png",
      "/images/camerasecurity/48.uvc-g4-doorbell-pro-poe-kit/p-mkt1-uvcg4doorbellpropoekit.png",
      "/images/camerasecurity/48.uvc-g4-doorbell-pro-poe-kit/p-mkt2-uvcg4doorbellpropoekit.png",
      "/images/camerasecurity/48.uvc-g4-doorbell-pro-poe-kit/p-mkt3-uvcg4doorbellpropoekit.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/48.uvc-g4-doorbell-pro-poe-kit/p-mkt3-uvcg4doorbellpropoekit.png",
      "/images/camerasecurity/48.uvc-g4-doorbell-pro-poe-kit/p-itb-uvcg4doorbellpropoekit.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Mounting Wall, wedge (Included) Gang box, junction box (Optional)",
      "Enclosure Material Polycarbonate, aluminum alloy",
      "Power Method PoE",
      "Resolution FHD"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Device: 160.6 x 51.7 x 35.1 mm (6.3 x 2 x 1.4') Wall mount: 159.3 x 50.3 x 17.5 mm (6.3 x 1.9 x 0.7') Wedge: 161.1 x 52.1 x 25.7 mm (6.3 x 2.1 x 1') On-wall mount: 161.1 x 52.1 x 25.75 mm (6.3 x 2.1 x 1')" },
          { label: "IR Night Vision", value: "6 m (20 ft)" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "FHD" },
          { label: "Field of View", value: "Main camera: H: 138°, V: 114°, D: 155° (LDC On) Main camera: H: 160°, V: 117°, D: 160° (LDC Off) Package camera: H: 97.5°, V: 79.4°, D: 118.2°" },
          { label: "Audio", value: "Two-way audio" },
          { label: "Weatherproofing", value: "IPX4" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "Two-Way Intercom & Doorbell Access", value: "✓" },
          { label: "UniFi Application Suite Protect", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "GbE RJ45 port" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "Main camera: 2MP 1600 x 1200 (4:3) Package camera: 2MP 1600 x 1200 (4:3)" },
          { label: "Optics Sensor", value: "Main camera: 5MP CMOS Package camera: 8MP CMOS" },
          { label: "Optics Lens", value: "Fixed focal length" },
          { label: "Night Mode", value: "Built-in IR LED illumination and an IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "7W" },
          { label: "Supported Voltage Range", value: "37—57V DC" },
          { label: "Power Method", value: "PoE" },
          { label: "Processor", value: "Quad-core Arm® Cortex®-A53 based chip" },
          { label: "Weight", value: "Device: 264 g (9.3 oz) Wall mount: 56 g (2 oz) Wedge: 33 g (1.2 oz) On-wall mount: 53 g (1.9 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Flat wall mount: aluminum alloy 20° wedge mount: polycarbonate" },
          { label: "Button", value: "(1) Ring button (1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-30 to 40º C (-22 to 104º F)" },
          { label: "Ambient Operating Humidity", value: "0 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Mobile App", value: "UniFi Protect iOS™ and Android™" },
        ]
      },
      {
        title: "Chime",
        items: [
          { label: "Dimensions", value: "Device: ⌀62 x 54 mm (⌀2.5 x 2.1') In-wall mount: ⌀89 x 63.1 mm (⌀3.5 x 2.5') On-wall Mount: ⌀62 x 20.2 mm (⌀2.5 x 0.'')" },
          { label: "Weight", value: "Device: 158 g (5.6 oz) In-wall mount: 91 g (3.2 oz) On-wall mount: 28 g (1 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Polycarbonate, zinc alloy" },
          { label: "Networking Interface", value: "10/100 MbE port" },
          { label: "Power Method", value: "PoE" },
          { label: "Supported Voltage Range", value: "44–57V DC" },
          { label: "Max. Power Consumption", value: "3W" },
          { label: "LED", value: "R/G/B/W" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "Speaker", value: "Yes" },
          { label: "Buzzer", value: "Yes" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "Certifications", value: "CE, FCC, IC" },
          { label: "NDAA Compliant", value: "✓" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/48.uvc-g4-doorbell-pro-poe-kit/p-itb-uvcg4doorbellpropoekit.png" },
    ],
  },

  // Produk Kedua dari Camera Security, SF DoorBells
  {
    id: "UVC-4-Doorbell-Pro",
    name: "G4 Doorbell Pro",
    category: "Camera Security",
    subfilter: "Doorbells",
    image: "/images/camerasecurity/49.uvc-g4-doorbell-pro/1.p-utama-uvcg4doorbellpro.png",
    shortDescription:
      "Premium UniFi doorbell with an enhanced package detection camera and integrated display.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-4-DOORBELL-PRO-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/49.uvc-g4-doorbell-pro/1.p-utama-uvcg4doorbellpro.png",
      "/images/camerasecurity/49.uvc-g4-doorbell-pro/2.p-dimensi-uvcg4doorbellpro.png",
      "/images/camerasecurity/49.uvc-g4-doorbell-pro/3.p-spec-uvcg4doorbellpro.png",
      "/images/camerasecurity/49.uvc-g4-doorbell-pro/p-itb-uvcg4doorbellpro.png",
      "/images/camerasecurity/49.uvc-g4-doorbell-pro/p-mkt0-uvcg4doorbellpro.png",
      "/images/camerasecurity/49.uvc-g4-doorbell-pro/p-mkt1-uvcg4doorbellpro.png",
      "/images/camerasecurity/49.uvc-g4-doorbell-pro/p-mkt2-uvcg4doorbellpro.png",
      "/images/camerasecurity/49.uvc-g4-doorbell-pro/p-mkt3-uvcg4doorbellpro.png",
      "/images/camerasecurity/49.uvc-g4-doorbell-pro/p-mkt4-uvcg4doorbellpro.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/49.uvc-g4-doorbell-pro/p-mkt4-uvcg4doorbellpro.png",
      "/images/camerasecurity/49.uvc-g4-doorbell-pro/p-itb-uvcg4doorbellpro.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Networking Interface 802.11a/b/g/n/ac WiFi Bluetooth 5.0 GbE support (With UACC-Adapter-DBPOE)",
      "Power Method 16–24V AC, 1.25A Max., 50/60 Hz USB-C power cable, 5V DC, 2A",
      "Mount Material Flat wall mount: aluminum alloy 20° wedge mount: polycarbonate",
      "Enclosure Material Polycarbonate, aluminum alloy"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "160.6 x 51.7 x 28.7 mm (6.3 x 2 x 1.1')" },
          { label: "IR Night Vision", value: "6 m (20 ft)" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "FHD" },
          { label: "Field of View", value: "Main camera: H: 138°, V: 114°, D: 155° Package camera: H: 97.5°, V: 79.4°, D: 118.2°" },
          { label: "Audio", value: "Two-way audio" },
          { label: "Weatherproofing", value: "IPX4" },
          { label: "Mounting", value: "Flat wall, 20° wedge (Included)" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "Two-Way Intercom & Doorbell Access", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "802.11a/b/g/n/ac WiFi Bluetooth 5.0 GbE support (With UACC-Adapter-DBPOE)" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "Main camera: 2MP 1600 x 1200 (4:3) Package camera: 2MP 1600 x 1200 (4:3)" },
          { label: "Optics Sensor", value: "Main camera: 5MP CMOS Package camera: 8MP CMOS" },
          { label: "Optics Lens", value: "Fixed focal length" },
          { label: "Night Mode", value: "Built-in IR LED illumination and an IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "10W" },
          { label: "Power Method", value: "16–24V AC, 1.25A Max., 50/60 Hz USB-C power cable, 5V DC, 2A" },
          { label: "Processor", value: "Quad-core Arm® Cortex®-A53 based chip" },
          { label: "Weight", value: "Device: 253 g (8.9 oz) With flat wall mount: 286 g (10.1 oz) With 20° wedge mount: 325 g (11.5 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Flat wall mount: aluminum alloy 20° wedge mount: polycarbonate" },
          { label: "Button", value: "(1) Ring button (1) Factory reset" },
          { label: "Compatible Chimes", value: "Mechanical Broan-NuTone: LA126WH, LA11WH, LA39WH Heath Zenith: SL-2735 Craftmade: CTPW-RG Newhouse Hardware: CHM3D DigitalBroan-NuTone: LA600WH IQ AMERICA: DW-2850, DW-2840" },
          { label: "Ambient Operating Temperature", value: "-10 to 40° C (14 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
          { label: "Transformer Specifications Included in the box for EU version", value: "✓" },
          { label: "Transformer Specifications Input Rating  (5, 6)", value: "230V, 50/60Hz" },
          { label: "Transformer Specifications Input Rating  (1, 4)", value: "16V AC, 15VA" },
          { label: "Transformer Specifications Ambient Operating Temperature", value: "-5 to 35° C (23 to 95° F)" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/49.uvc-g4-doorbell-pro/p-itb-uvcg4doorbellpro.png" },
    ],

    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "PoE to USB-C Adapter",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Versatile adapter that provides power and connectivity to USB-C devices, including compatible Protect WiFi cameras.",
        specs: [
          "(1) GbE PoE input",
          "(1) USB-C output",
          "Provide GbE connectivity*** to USB-C device, such as notebook *G4 Doorbell Pro PoE to USB-C Cable sold separately. **G4/G6 Instant PoE to USB-C Cable sold separately. ***Speed depends on USB-C cable max data transfer rate.",
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/mounting-kit-uvc-4-doorbell-pro-b/w"
      },
      {
        id: 2,
        name: "7M USB-C Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Seven-meter USB cable that connects a G4 Doorbell Pro to a PoE source.",
        specs: [
          "Connects a G4 Doorbell Pro to a PoE source*",
          "GbE connectivity",
          "Cable length 7 m",
          "*PoE to USB-C Adapter sold separately."
        ],
        detailedSpecs: [
          { label: "Length", value: "7 m (22.96 ft)" },
          { label: "Flame Rating", value: "VW-1 (UL1581)" },
          { label: "Conductor Type", value: "Stranded copper" },
          { label: "Conductor Wire Gauge", value: "(2) 19 AWG + (3) 30 AWG" },
          { label: "Weight", value: "326 g (11.5 oz)WG" },
          { label: "Cable Jacket Diameter", value: "4.8 mm (0.19 in)" },
          { label: "Cable Jacket Enclosure Diameter", value: "Thermoplastic elastomer (TPE)" },
          { label: "Cable Jacket Color", value: "White" },
          { label: "Cable Shielding Type", value: "Shielded twisted pair (STP)" },
          { label: "Cable Bend Radius", value: "Min. 19.2 mm (0.76 in)" },
          { label: "Anti-Crosstalk Divider", value: "—" },
          { label: "Ambient Storage Temperature", value: "-40 to 85° C (-40 to 185° F)" },
          { label: "Ambient Operating Temperature", value: "-20 to 60° C (-4 to 140° F)" },
        ],
        productLink: "/products/power-cable-uvc-4-doorbell-pro-b/w"
      },
    ]
  },

  // Produk Ketiga dari Camera Security, SF DoorBells
  {
    id: "UVC-Doorbell",
    name: "Doorbell Lite",
    category: "Camera Security",
    subfilter: "Doorbells",
    image: "/images/camerasecurity/50.uvc-doorbell-b/1.p-utama-uvcdoorbelllite.png",
    shortDescription:
      "Compact PoE video doorbell with two-way audio and versatile mounting options.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-DOORBELL-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/50.uvc-doorbell-b/1.p-utama-uvcdoorbelllite.png",
      "/images/camerasecurity/50.uvc-doorbell-b/2.p-dimensi-uvcdoorbelllite.png",
      "/images/camerasecurity/50.uvc-doorbell-b/3.p-spec-uvcdoorbelllite.png",
      "/images/camerasecurity/50.uvc-doorbell-b/4.p-development-uvcdoorbelllite.png",
      "/images/camerasecurity/50.uvc-doorbell-b/p-itb-uvcdoorbelllite.png",
      "/images/camerasecurity/50.uvc-doorbell-b/p-mkt0-uvcdoorbelllite.png",
      "/images/camerasecurity/50.uvc-doorbell-b/p-mkt1-uvcdoorbelllite.png",
      "/images/camerasecurity/50.uvc-doorbell-b/p-mkt2-uvcdoorbelllite.png",
      "/images/camerasecurity/50.uvc-doorbell-b/p-mkt3-uvcdoorbelllite.png",
      "/images/camerasecurity/50.uvc-doorbell-b/p-mkt4-uvcdoorbelllite.png",
      "/images/camerasecurity/50.uvc-doorbell-b/p-mkt5-uvcdoorbelllite.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/50.uvc-doorbell-b/p-mkt0-uvcdoorbelllite.png",
      "/images/camerasecurity/50.uvc-doorbell-b/p-itb-uvcdoorbelllite.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Polycarbonate, metal",
      "IR Night Vision 5 m (16 ft)",
      "Resolution 5MP",
      "Weatherproofing IPX5"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "137 x 40 x 26.4 mm (5.4 x 1.6 x 1')" },
          { label: "IR Night Vision", value: "5 m (16 ft)" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "5MP" },
          { label: "Field of View", value: "H: 95.8°, V: 131.2°, D: 175.9°" },
          { label: "Audio", value: "Two-way audio" },
          { label: "Weatherproofing", value: "IPX5" },
          { label: "Mounting", value: "Wall, 20° wedge (Included) Gang box, junction box (Optional)" },
          { label: "Two-Way Intercom & Doorbell Access", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "10/100 MbE port" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay" },
          { label: "Video Max. Frame Rate", value: "24 FPS" },
          { label: "Video Resolution", value: "5MP 1920 x 2560 (3:4)" },
          { label: "Optics Sensor", value: "1/2.7' 5MP" },
          { label: "Optics Lens", value: "Fixed focal length" },
          { label: "Night Mode", value: "Built-in IR LED illumination and an IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "8W" },
          { label: "Supported Voltage Range", value: "37—57V DC" },
          { label: "Power Method", value: "PoE" },
          { label: "Processor", value: "Dual-core Arm® Cortex®-A7 based chip" },
          { label: "Weight", value: "Device: 253 g (8.9 oz) With flat wall mount: 286 g (10.1 oz) With 20° wedge mount: 325 g (11.5 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, metal" },
          { label: "Mount Material", value: "Formed sheet metal" },
          { label: "Button", value: "(1) Ring button (1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-30 to 50° C (-22 to 122° F)" },
          { label: "Ambient Operating Humidity", value: "20 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/50.uvc-doorbell-b/p-itb-uvcdoorbelllite.png" },
    ],

    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "PoE Over 2-Wire Retrofit Extender",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A pair of extenders that extends PoE over twisted-pair or coaxial cables, ideal for retrofit scenarios.",
        specs: [
          "Transmitter (1) PoE++ input",
          "Transmitter (1) 2-wire output",
          "Transmitter (1) 2-wire to BNC adapter",
          "Receiver (1) PoE/PoE+ output",
          "Receiver (1) 2-wire input",
          "Receiver (1) 2-wire to BNC adapter"
        ],
        detailedSpecs: [
          { label: "Networking Interface", value: "(1) 10/100 MbE(1) Homeplug AV" },
          { label: "Power Method", value: "PoE++" },
          { label: "PoE input", value: "(1) PoE++, 50V DC, 1.2A" },
          { label: "PoE Output", value: "	(1) PoE+, 48V DC, 0.6A" },
          { label: "Max. Power Consumptlon", value: "	3W (Without PoE output)" },
          { label: "ESD/EMP protection", value: "	Air: ±8kV, contact: ±4kV" },
          { label: "LED", value: "White" },
          { label: "Ambient Operating Temperature", value: "-10 to 40° C (14 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Certifications", value: "CE, FCC, IC, UL 62368-1, CSA C22.2 No. 62368-1" },
        ],
        productLink: "/products/mounting-kit-uvc-doorbell-b/w"
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
    ]
  },

  // Produk Keempat dari Camera Security, SF DoorBells
  {
    id: "UVC-Chime-PoE",
    name: "PoE Smart Chime",
    category: "Camera Security",
    subfilter: "Doorbells",
    image: "/images/camerasecurity/51.uacc-chime-poe/1.p-utama-uaccchimepoe.png",
    shortDescription:
      "PoE plug-and-play notification device, designed to pair with a UniFi doorbell or door access hub.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-CHIME-POE",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/51.uacc-chime-poe/1.p-utama-uaccchimepoe.png",
      "/images/camerasecurity/51.uacc-chime-poe/2.p-dimensi-uaccchimepoe.png",
      "/images/camerasecurity/51.uacc-chime-poe/p-itb-uaccchimepoe.png",
      "/images/camerasecurity/51.uacc-chime-poe/p-mkt0-uaccchimepoe.png",
      "/images/camerasecurity/51.uacc-chime-poe/p-mkt1-uaccchimepoe.png",
      "/images/camerasecurity/51.uacc-chime-poe/p-mkt2-uaccchimepoe.png",
      "/images/camerasecurity/51.uacc-chime-poe/p-mkt3-uaccchimepoe.png",
      "/images/camerasecurity/51.uacc-chime-poe/p-mkt4-uaccchimepoe.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/51.uacc-chime-poe/p-mkt4-uaccchimepoe.png",
      "/images/camerasecurity/51.uacc-chime-poe/p-itb-uaccchimepoe.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "ESD Protection Air: ± 8kV, contact: ± 4kV",
      "Power Method PoE",
      "Enclosure Material Polycarbonate, aluminum alloy",
      "Mount Material Polycarbonate, zinc alloy"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "Device: ⌀62 x 54 mm (⌀2.5 x 2.1') In-wall mount: ⌀89 x 63.1 mm (⌀3.5 x 2.5') On-wall Mount: ⌀62 x 20.2 mm (⌀2.5 x 0.8')" },
          { label: "Weight", value: "Device: 158 g (5.6 oz) In-wall mount: 91 g (3.2 oz) On-wall mount: 28 g (1 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Polycarbonate, zinc alloy" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Network Interface", value: "10/100 MbE port" },
          { label: "Speaker", value: "✓" },
          { label: "Buzzer", value: "✓" },
          { label: "power Method", value: "PoE" },
          { label: "Supported Voltage Range", value: "44–57V DC" },
          { label: "Max. Power Consumption", value: "3W" },
          { label: "ESD Protection", value: "Air: ± 8kV, contact: ± 4kV" },
          { label: "LEDs", value: "R/G/B/W" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements Web Application", value: "UniFi Protect UniFi Access" },
          { label: "Application Requirements Mobile App", value: "UniFi Protect iOS™ and Android™" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/51.uacc-chime-poe/p-itb-uaccchimepoe.png" },
    ],
  },

  // Produk Kelima dari Camera Security, SF DoorBells
  {
    id: "UVC-Chime",
    name: "WiFi Smart Chime",
    category: "Camera Security",
    subfilter: "Doorbells",
    image: "/images/camerasecurity/52.up-chime/1.p-utama-upchime.png",
    shortDescription: "Plug-in chime designed to pair with a UniFi doorbell.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-CHIME",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/52.up-chime/1.p-utama-upchime.png",
      "/images/camerasecurity/52.up-chime/2.p-dimensi-upchime.png",
      "/images/camerasecurity/52.up-chime/p-mkt0-upchime.png",
      "/images/camerasecurity/52.up-chime/p-mkt1-upchime.png",
      "/images/camerasecurity/52.up-chime/p-mkt2-upchime.png",
      "/images/camerasecurity/52.up-chime/p-mkt3-upchime.png",
      "/images/camerasecurity/52.up-chime/p-mkt4-upchime.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/52.up-chime/p-mkt4-upchime.png",
      "/images/camerasecurity/52.up-chime/p-mkt0-upchime.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Plug-in chime designed to pair with a UniFi doorbell",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Note. Third-party WiFi configuration available during setup with the UniFi Protect mobile app."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "⌀62 x 50.6 mm (⌀2.4 x 2') (Without prong)" },
          { label: "Weight", value: "127 g (4.5 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, fabric" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Network Interface", value: "WiFi 802.11 b/g/n" },
          { label: "Speaker", value: "✓" },
          { label: "Buzzer", value: "✓" },
          { label: "power Method", value: "AC" },
          { label: "Supported Voltage Range", value: "100-240V, 50/60 Hz" },
          { label: "Max. Power Consumption", value: "3.7W" },
          { label: "ESD Protection", value: "Air: ± 16kV, contact: ± 8kV" },
          { label: "LEDs", value: "(5) White" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements Web Application", value: "UniFi Protect: Version 2.0 and later" },
          { label: "Application Requirements Mobile App", value: "UniFi Protect iOS™: Version 1.6.2 and later UniFi Protect Android™: Version 1.6.0 and later" },
        ]
      },
    ],
     // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/52.up-chime/p-mkt3-upchime.png" },
    ],
  },

  // Produk Pertama dari Camera Security, SF SuperLink
  {
    id: "USL-Gateway",
    name: "SuperLink Gateway",
    category: "Camera Security",
    subfilter: "SuperLink Sensors",
    image: "/images/camerasecurity/53.usl-gateway/1.p-utama-uslgateway.png",
    shortDescription:
      "Proprietary super long-range, low-latency wireless gateway for UniFi Protect Sensors.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],


    // SKU produk
    sku: "USL-GATEWAY",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/53.usl-gateway/1.p-utama-uslgateway.png",
      "/images/camerasecurity/53.usl-gateway/2.p-dimensi-uslgateway.png",
      "/images/camerasecurity/53.usl-gateway/3.p-spec-uslgateway.png",
      "/images/camerasecurity/53.usl-gateway/4.p-spec-uslgateway.png",
      "/images/camerasecurity/53.usl-gateway/5.p-development-uslgateway.png",
      "/images/camerasecurity/53.usl-gateway/p-itb-uslgateway.png",
      "/images/camerasecurity/53.usl-gateway/p-mkt0-uslgateway.png",
      "/images/camerasecurity/53.usl-gateway/p-mkt1-uslgateway.png",
      "/images/camerasecurity/53.usl-gateway/p-mkt2-uslgateway.png",
      "/images/camerasecurity/53.usl-gateway/p-mkt3-uslgateway.png",
      "/images/camerasecurity/53.usl-gateway/p-mkt4-uslgateway.png",
      "/images/camerasecurity/53.usl-gateway/p-mkt5-uslgateway.png",
      "/images/camerasecurity/53.usl-gateway/p-mkt6-uslgateway.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/53.usl-gateway/p-mkt4-uslgateway.png",
      "/images/camerasecurity/53.usl-gateway/p-itb-uslgateway.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Buttons (1) Factory reset",
      "Enclosure Material Polycarbonate, aluminum alloy",
      "Mounting Wall and DIN rail mount",
      "Power Method PoE USB Type-C, 5V, 1A (Optional)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "With antenna: 159.3 x 81.9 x 26 mm (6.3 x 3.2 x 1') With DIN rail mount:  159.3 x 81.9 x 38.5 mm (6.3 x 3.2 x 1.5') With wall mount: 159.3 x 81.9 x 30.5 mm (6.3 x 3.2 x 1.2')" },
          { label: "Mounting", value: "Wall and DIN rail mount" },
          { label: "UniFi Application Suite", value: "Protect" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "(1) 10/100 MbE RJ45 port" },
          { label: "Connectivity", value: "Bluetooth® 5.2 SuperLink (Proprietary)" },
          { label: "Operating Frequency Bluetooth", value: "2400–2480 MHz" },
          { label: "Operating Frequency Superlink", value: "US: 915.6–927.6 MHz EU: 865.1–869.5 MHz" },
          { label: "Antenna Gain Bluetooth", value: "3 dBi" },
          { label: "Antenna Gain Superlink", value: "2 dBi" },
          { label: "Max. TX Power Bluetooth", value: "10 dBm" },
          { label: "Max. TX Power Superlink", value: "27 dBm" },
          { label: "Max. Range Bluetooth", value: "Up to 100 m (328 ft)" },
          { label: "Max. Range Superlink", value: "2 km (1.2 mi)" },
          { label: "Max. Client Count Bluetooth", value: "7" },
          { label: "Max. Client Count Superlink", value: "96" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "3.4W" },
          { label: "Power Method", value: "PoE USB Type-C, 5V, 1A (Optional)" },
          { label: "Weight", value: "179 g (6.3 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "LEDs", value: "(1) Status: B/W" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "Certifications", value: "CE, FCC, IC" },
          { label: "NDAA Compliant", value: "✓" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements Web Application", value: "UniFi Protect" },
          { label: "Application Requirements Mobile App", value: "UniFi Protect iOS™ and Android™" },
        ]
      }
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/53.usl-gateway/p-itb-uslgateway.png" },
    ],
  },

  // Produk Kedua dari Camera Security, SF SuperLink
  {
    id: "USL-Entry",
    name: "Entry Sensor",
    category: "Camera Security",
    subfilter: "SuperLink Sensors",
    image: "/images/camerasecurity/55.usl-entry/1.p-utama-uslentry.png",
    shortDescription:
      "SuperLink sensor with up to 6-year battery life for monitoring door and window open/closed status.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "USL-ENTRY",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/55.usl-entry/1.p-utama-uslentry.png",
      "/images/camerasecurity/55.usl-entry/2.p-dimensi-uslentry.png",
      "/images/camerasecurity/55.usl-entry/3.p-spec-uslentry.png",
      "/images/camerasecurity/55.usl-entry/4.p-development-uslentry.png",
      "/images/camerasecurity/55.usl-entry/p-itb-uslentry.png",
      "/images/camerasecurity/55.usl-entry/p-mkt0-uslentry.png",
      "/images/camerasecurity/55.usl-entry/p-mkt1-uslentry.png",
      "/images/camerasecurity/55.usl-entry/p-mkt2-uslentry.png",
      "/images/camerasecurity/55.usl-entry/p-mkt3-uslentry.png",
      "/images/camerasecurity/55.usl-entry/p-mkt4-uslentry.png",
      "/images/camerasecurity/55.usl-entry/p-mkt5-uslentry.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/55.usl-entry/p-mkt1-uslentry.png",
      "/images/camerasecurity/55.usl-entry/p-itb-uslentry.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Battery Life Up to 6 years",
      "LEDs (1) Status: R/B/W (1) Signal: B/R",
      "Enclosure Material Polycarbonate",
      "Power Method Lithium battery CR123A"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Device: 75.5 x 23.5x 22.5 mm (3 x 0.93 x 0.89') Magnet: 39 x 15.1 x 12.9 mm (1.5 x 0.6 x 0.5')" },
          { label: "Mounting", value: "Adhesive and screw mount" },
          { label: "UniFi Application Suite", value: "Protect" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "(1) 10/100 MbE RJ45 port" },
          { label: "Connectivity", value: "SuperLink (Proprietary)" },
          { label: "Operating Frequency US", value: "915.6–927.6 MHz" },
          { label: "Operating Frequency EU", value: "865.1–869.5 MHz" },
          { label: "Antenna Gain Superlink", value: "0 dBi" },
          { label: "Max. TX Power Superlink", value: "14 dBm" },
          { label: "Max. Range Superlink", value: "2 km (1.2 mi)" },
          { label: "Sensor Features Reed Switch", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "27.7mW" },
          { label: "Supported Volatge Range", value: "3V" },
          { label: "Power Method", value: "Lithium battery CR123A" },
          { label: "Battery Life", value: "Up to 6 years" },
          { label: "Weight", value: "Device: 41 g (1.4 oz) Magnet: 22 g (0.8 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Button", value: "(1) Factory reset (1) Function button (1) Tamper switch" },
          { label: "LEDs", value: "(1) Status: R/B/W (1) Signal: B/R" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "Certifications", value: "FCC, IC, CE" },
          { label: "NDAA Compliant", value: "✓" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements Web Application", value: "UniFi Protect" },
          { label: "Application Requirements Mobile App", value: "UniFi Protect iOS™ and Android™" },
        ]
      }
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/55.usl-entry/p-itb-uslentry.png" },
    ],
  },

  // Produk Ketiga dari Camera Security, SF SuperLink
  {
    id: "USL-Motion",
    name: "Motion Sensor",
    category: "Camera Security",
    subfilter: "SuperLink Sensors",
    image: "/images/camerasecurity/56.usl-motion/1.p-utama-uslmotion.png",
    shortDescription:
      "SuperLink motion sensor designed for versatile installation, delivering up to 6 years of battery life.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "USL-MOTION",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/56.usl-motion/1.p-utama-uslmotion.png",
      "/images/camerasecurity/56.usl-motion/2.p-dimensi-uslmotion.png",
      "/images/camerasecurity/56.usl-motion/3.p-spec-uslmotion.png",
      "/images/camerasecurity/56.usl-motion/4.p-development-uslmotion.png",
      "/images/camerasecurity/56.usl-motion/p-itb-uslmotion.png",
      "/images/camerasecurity/56.usl-motion/p-mkt0-uslmotion.png",
      "/images/camerasecurity/56.usl-motion/p-mkt1-uslmotion.png",
      "/images/camerasecurity/56.usl-motion/p-mkt2-uslmotion.png",
      "/images/camerasecurity/56.usl-motion/p-mkt3-uslmotion.png",
      "/images/camerasecurity/56.usl-motion/p-mkt4-uslmotion.png",
      "/images/camerasecurity/56.usl-motion/p-mkt5-uslmotion.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/56.usl-motion/p-mkt5-uslmotion.png",
      "/images/camerasecurity/56.usl-motion/p-itb-uslmotion.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Mounting Adhesive and screw mount",
      "Enclosure Material Polycarbonate, high-density polyethylene (HDPE)",
      "Battery Life Up to 6 years",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Device with wall mount: 93.5 x 22.5 x  24.7 mm (3.7 x 0.89 x 0.97') Device with corner mount: 93.5 x 22.5 x  27.9 mm (3.7 x 0.89 x 1.1')" },
          { label: "Mounting", value: "Adhesive and screw mount" },
          { label: "UniFi Application Suite", value: "Protect" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Connectivity", value: "SuperLink (Proprietary)" },
          { label: "Operating Frequency US", value: "915.6–927.6 MHz" },
          { label: "Operating Frequency EU", value: "865.1–869.5 MHz" },
          { label: "Antenna Gain Superlink", value: "1 dBi" },
          { label: "Max. TX Power Superlink", value: "14 dBm" },
          { label: "Max. Range Superlink", value: "2 km (1.2 mi)" },
          { label: "Sensor Features Horizontal PIR Sensor", value: "Detection range up to 1.5 m (4.9 ft)" },
          { label: "Sensor Features Vertical PIR Sensor", value: "Detection range up to 6 m (19.7 ft) with pet immunity" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "22.6mW" },
          { label: "Supported Volatge Range", value: "3V" },
          { label: "Power Method", value: "Lithium battery CR123A" },
          { label: "Battery Life", value: "Up to 6 years" },
          { label: "Weight", value: "45 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, high-density polyethylene (HDPE)" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Button", value: "(1) Factory reset (1) Function button (1) Tamper switch" },
          { label: "LEDs", value: "(1) Status: R/B/W (1) Signal: B/R" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "Certifications", value: "FCC, IC, CE" },
          { label: "NDAA Compliant", value: "✓" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements Web Application", value: "UniFi Protect" },
          { label: "Application Requirements Mobile App", value: "UniFi Protect iOS™ and Android™" },
        ]
      }
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/56.usl-motion/p-itb-uslmotion.png" },
    ],
  },

  // Produk Keempat dari Camera Secruity, SF SuperLink
   {
    id: "USL-GlassBreak",
    name: "Glass Break Sensor",
    category: "Camera Security",
    subfilter: "SuperLink Sensors",
    image: "/images/camerasecurity/57.glassbreak/1.p-utama-uslglassbreak.png",
    shortDescription:
      "Battery-powered SuperLink sensor featuring advanced glass break detection and motion sensing.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "USL-GlassBreak",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/57.glassbreak/1.p-utama-uslglassbreak.png",
      "/images/camerasecurity/57.glassbreak/2.p-dimensi-uslglassbreak.png",
      "/images/camerasecurity/57.glassbreak/3.p-spec-uslglassbreak.png",
      "/images/camerasecurity/57.glassbreak/4.p-development.png",
      "/images/camerasecurity/57.glassbreak/p-itb-uslglassbreak.avif",
      "/images/camerasecurity/57.glassbreak/p-mkt0-uslglassbreak.png",
      "/images/camerasecurity/57.glassbreak/p-mkt1-uslglassbreak.png",
      "/images/camerasecurity/57.glassbreak/p-mkt2-uslglassbreak.png",
      "/images/camerasecurity/57.glassbreak/p-mkt3-uslglassbreak.png",
      "/images/camerasecurity/57.glassbreak/p-mkt4-uslglassbreak.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/57.glassbreak/p-mkt4-uslglassbreak.png",
      "/images/camerasecurity/57.glassbreak/p-itb-uslglassbreak.avif"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Mounting : Adhesive and screw mount",
      "Sensor Features PIR Sensor : ✓",
      "Max. Power Consumption : 0.2W",
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Device with wall mount: 134.5 x 22.5 x 24.8 mm (5.3 x 0.9 x 1') Device with corner mount: 134.5 x 22.5 x 27.9 mm (5.3 x 0.9 x 1.1')" },
          { label: "Microphone", value: "✓" },
          { label: "Mountinf", value: "Adhesive and screw mount" },
          { label: "UniFi Application Suite", value: "Protect" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Connectivity", value: "SuperLink (Proprietary)" },
          { label: "Operating Frequency US", value: "915.6–927.6 MHz" },
          { label: "Operating Frequency EU", value: "865.1–869.5 MHz" },
          { label: "Antenna Gain Superlink", value: "1 dBi" },
          { label: "Max. TX Power Superlink", value: "14 dBm" },
          { label: "Max. Range Superlink", value: "2 km (1.2 mi)" },
          { label: "Sensor Features PIR Sensor", value: "✓" },
          { label: "Detected Glass Type", value: "Plate, tempered, obscured, laminated, coated, wired Size: 280 x 356 mm (11 x 14') to 1067 x 1626 mm (42 x 64') Thickness: 2.4 mm (3/32'), 4.8 mm (3/16'), 3.2 mm (1/8'), 6.4 mm (1/4')" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "0.2W" },
          { label: "Supported Volatge Range", value: "3V" },
          { label: "Power Method", value: "(2) Lithium battery CR123A" },
          { label: "Battery Life", value: "Up to 3 years" },
          { label: "Weight", value: "With mount and batteries: 70 g (2.5 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Button", value: "(1) Function button (1) Factory reset (1) Tamper switch" },
          { label: "LEDs", value: "(1) Status: R/B/W (1) Signal: B/R" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "Certifications", value: "FCC, IC, CE" },
          { label: "NDAA Compliant", value: "✓" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements Web Application", value: "UniFi Protect" },
          { label: "Application Requirements Mobile App", value: "UniFi Protect iOS™ and Android™" },
        ]
      }
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/57.glassbreak/p-itb-uslglassbreak.avif" },
    ],
  },

  // Produk Kelima dari Camera Secruity, SF SuperLink
  {
    id: "USL-Environmental",
    name: "Environmental Sensor",
    category: "Camera Security",
    subfilter: "SuperLink Sensors",
    image: "/images/camerasecurity/58.usl-environmental/1.p-utama-uslenvironmental.png",
    shortDescription:
      "Battery-powered SuperLink sensor that detects water leaks, temperature, humidity, and ambient light.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "USL-ENVIRONMENTAL",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/58.usl-environmental/1.p-utama-uslenvironmental.png",
      "/images/camerasecurity/58.usl-environmental/2.p-dimensi-uslenvironmental.png",
      "/images/camerasecurity/58.usl-environmental/3.p-spec-uslenvironmental.png",
      "/images/camerasecurity/58.usl-environmental/4.p-development-uslenvironmental.png",
      "/images/camerasecurity/58.usl-environmental/6.usl-environmental.png",
      "/images/camerasecurity/58.usl-environmental/p-itb-uslenvironmental.png",
      "/images/camerasecurity/58.usl-environmental/p-mkt0-uslenvironmental.png",
      "/images/camerasecurity/58.usl-environmental/p-mkt1-uslenvironmental.png",
      "/images/camerasecurity/58.usl-environmental/p-mkt2-uslenvironmental.png",
      "/images/camerasecurity/58.usl-environmental/p-mkt3-uslenvironmental.png",
      "/images/camerasecurity/58.usl-environmental/p-mkt4-uslenvironmental.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/58.usl-environmental/p-mkt0-uslenvironmental.png",
      "/images/camerasecurity/58.usl-environmental/p-itb-uslenvironmental.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Certifications FCC, IC, CE",
      "LEDs (1) Status: R/B/W (1) Signal: B/R",
      "Connectivity SuperLink (Proprietary)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Device: 53 x 49 x 23.5 mm (2.1 x 1.9 x 0.9') Mount: 41.3 x 36.6 x 3.1 mm (1.6 x 1.4 x 0.1')" },
          { label: "Weatherproofing", value: "IPX5" },
          { label: "Mounting", value: "Adhesive, magnet and screw mount" },
          { label: "UniFi Application Suite", value: "Protect" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Connectivity", value: "SuperLink (Proprietary)" },
          { label: "Operating Frequency US", value: "915.6–927.6 MHz" },
          { label: "Operating Frequency EU", value: "865.1–869.5 MHz" },
          { label: "Antenna Gain Superlink", value: "0 dBi" },
          { label: "Max. TX Power Superlink", value: "14 dBm" },
          { label: "Max. Range Superlink", value: "2 km (1.2 mi)" },
          { label: "Sensor Features Temperature Sensor", value: "✓" },
          { label: "Sensor Features Humidity Sensor", value: "✓" },
          { label: "Sensor Features Ambient Light Sensor", value: "✓" },
          { label: "Sensor Features Water Sensor", value: "✓" },
          { label: "Sensor Features Other", value: "3.5 mm AUX jack (TRS or TS) for water leak probe" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "34.9mW" },
          { label: "Supported Volatge Range", value: "3V" },
          { label: "Power Method", value: "Lithium battery CR123A" },
          { label: "Battery Life", value: "Up to 6 years" },
          { label: "Weight", value: "Device: 47.8 g (1.7 oz) With mount: 70 g (2.5 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Galvanized steel" },
          { label: "Button", value: "(1) Factory reset (1) Function button" },
          { label: "LEDs", value: "(1) Status: R/B/W (1) Signal: B/R" },
          { label: "Ambient Operating Temperature", value: "-20 to 40° C (-4 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "Certifications", value: "FCC, IC, CE" },
          { label: "NDAA Compliant", value: "✓" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements Web Application", value: "UniFi Protect" },
          { label: "Application Requirements Mobile App", value: "UniFi Protect iOS™ and Android™" },
        ]
      }
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/58.usl-environmental/6.usl-environmental.png" },
    ],
  },

  // Produk Keenam dari Camera Security, SF SuperLink
  {
    id: "USL-Siren",
    name: "Siren",
    category: "Camera Security",
    subfilter: "SuperLink Sensors",
    image: "/images/camerasecurity/59.usl-siren/1.p-utama-uslsiren.png",
    shortDescription:
      "All-weather SuperLink siren delivering 110 dB alarm and emergency LED lighting powered using battery or DC input.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "USL-SIREN",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/59.usl-siren/1.p-utama-uslsiren.png",
      "/images/camerasecurity/59.usl-siren/2.p-dimensi-uslsiren.png",
      "/images/camerasecurity/59.usl-siren/3.p-spec-uslsiren.png",
      "/images/camerasecurity/59.usl-siren/4.p-development-uslsiren.png",
      "/images/camerasecurity/59.usl-siren/p-itb-uslsiren.png",
      "/images/camerasecurity/59.usl-siren/p-mkt0-uslsiren.png",
      "/images/camerasecurity/59.usl-siren/p-mkt1-uslsiren.png",
      "/images/camerasecurity/59.usl-siren/p-mkt2-uslsiren.png",
      "/images/camerasecurity/59.usl-siren/p-mkt3-uslsiren.png",
      "/images/camerasecurity/59.usl-siren/p-mkt4-uslsiren.png",
      "/images/camerasecurity/59.usl-siren/p-mkt5-uslsiren.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/59.usl-siren/p-mkt4-uslsiren.png",
      "/images/camerasecurity/59.usl-siren/p-itb-uslsiren.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Input Terminals (1) Power input (1) Signal input",
      "Enclosure Material Aluminum alloy, polycarbonate",
      "Power Method (4) CR123A batteries 12–24V DC"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "139.9 x 139.9 x 35 mm (5.5 x 5.5 x 1.4')" },
          { label: "Mounting", value: "Wall, ceiling mounting plate (Included)" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "345 g (12.2 oz)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Weatherpropfing", value: "IP56" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Power Method", value: "(4) CR123A batteries 12–24V DC" },
          { label: "Max. Power Consumption", value: "5W" },
          { label: "Power Method", value: "Lithium battery CR123A" },
          { label: "input Terminals", value: "(1) Power input (1) Signal input" },
          { label: "Connectivity", value: "SuperLink (Proprietary)" },
          { label: "Buzzer", value: "✓" },
          { label: "Antenna Gain SuperLink", value: "2 dBi" },
          { label: "Max. TX Power SuperLink", value: "14 dBm" },
          { label: "Operating Frequency US", value: "915.6–927.6 MHz" },
          { label: "Operating Frequency EU", value: "865.1–869.5 MHz" },
          { label: "Max. Range SuperLink", value: "2 km (1.2 mi)" },
          { label: "LEDs System", value: "R/G/B/W" },
          { label: "LEDs Status", value: "R/G/B" },
          { label: "LEDs Light Ring", value: "R/G/B/W" },
          { label: "Buttons", value: "(1) Power (1) Factory reset (1) Tamper switch" },
          { label: "Ambient Operating Temperature", value: "-30 to 50° C (-22 to 122° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Certifications", value: "FCC, IC, CE" },
          { label: "NDAA Compliant", value: "✓" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements UniFi Protect Web", value: "✓" },
          { label: "Application Requirements UniFi Protect iOS™ and Android™", value: "✓" },
        ]
      }
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/59.usl-siren/p-itb-uslsiren.png" },
    ],
  },
 
  // Produk Ketujuh dari Camera Security, SF SuperLink
    {
    id: "USL-Siren-PoE",
    name: "Siren PoE",
    category: "Camera Security",
    subfilter: "SuperLink Sensors",
    image: "/images/camerasecurity/60.usl-siren-poe/1.p-utama-upsirenpoe.png",
    shortDescription:
      "All-weather siren delivering 110 dB alarm and emergency LED lighting powered using PoE input.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "USL-SIREN-POE",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/60.usl-siren-poe/1.p-utama-upsirenpoe.png",
      "/images/camerasecurity/60.usl-siren-poe/2.p-dimensi-upsirenpoe.png",
      "/images/camerasecurity/60.usl-siren-poe/3.p-spec-upsirenpoe.png",
      "/images/camerasecurity/60.usl-siren-poe/4.p-development-upsirenpoe.png",
      "/images/camerasecurity/60.usl-siren-poe/p-itb-upsirenpoe.png",
      "/images/camerasecurity/60.usl-siren-poe/p-mkt0-upsirenpoe.png",
      "/images/camerasecurity/60.usl-siren-poe/p-mkt1-upsirenpoe.png",
      "/images/camerasecurity/60.usl-siren-poe/p-mkt2-upsirenpoe.png",
      "/images/camerasecurity/60.usl-siren-poe/p-mkt3-upsirenpoe.png",
      "/images/camerasecurity/60.usl-siren-poe/p-mkt4-upsirenpoe.png",
      "/images/camerasecurity/60.usl-siren-poe/p-mkt5-upsirenpoe.png",
      
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/60.usl-siren-poe/p-mkt0-upsirenpoe.png",
      "/images/camerasecurity/60.usl-siren-poe/p-itb-upsirenpoe.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Power Method PoE",
      "Mounting Wall, ceiling mounting plate (Included)",
      "Enclosure Material Aluminum alloy, polycarbonate"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "139.9 x 139.9 x 35 mm (5.5 x 5.5 x 1.4')" },
          { label: "Mounting", value: "Wall, ceiling mounting plate (Included)" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "308 g (10.9 oz)" },
          { label: "Enclosure Material", value: "Aluminum alloy, polycarbonate" },
          { label: "Weatherpropfing", value: "IP56" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Power Method", value: "PoE" },
          { label: "Max. Power Consumption", value: "5W" },
          { label: "Buzzer", value: "✓" },
          { label: "networking Inteface", value: "(1) 10/100 MbE RJ45 port" },
          { label: "LEDs System", value: "R/G/B/W" },
          { label: "LEDs Light Ring", value: "R/G/B/W" },
          { label: "Buttons", value: "(1) Factory reset (1) Tamper switch" },
          { label: "Ambient Operating Temperature", value: "-30 to 50° C (-22 to 122° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Certifications", value: "FCC, IC, CE" },
          { label: "NDAA Compliant", value: "✓" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements UniFi Protect Web", value: "✓" },
          { label: "Application Requirements UniFi Protect iOS™ and Android™", value: "✓" },
        ]
      }
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/60.usl-siren-poe/p-itb-upsirenpoe.png" },
    ],

    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "UPS PoE Switch",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A switch with an integrated 368Wh lithium-ion battery capable of providing uninterruptible PoE to 8 devices.",
        specs: [
          "(4) GbE PoE+, (4) GbE PoE++ ports",
          "(1) GbE port",
          "(2) 110V AC outputs; 120W total PoE available",
          "Battery backup power system",
          "Internal battery 368Wh"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442 x 480 x 44 mm (17.4 x 18.9 x 1.7')" },
          { label: "Weight", value: "Without mount: 9 kg (19.9 lb) With mount: 9.2 kg (20.3 lb)" },
          { label: "Enclosure Material", value: "SGCC Steel" },
          { label: "Mount Material", value: "SGCC steel" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "STP & RSTP", value: "✓" },
          { label: "Advanced IGMP Configuration (Querier, Fast Leave, Router Port)", value: "✓" },
          { label: "Switching Capacity", value: "18 Gbps" },
          { label: "Total PoE Availability", value: "120 W" },
          { label: "Form Factor", value: "Rack mount (1U)" },
          { label: "Dimensions", value: "442 x 480 x 44 mm (17.4 x 18.9 x 1.7')" },
        ],
        productLink: "/products/mounting-kit-usl-siren-poe"
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
        productLink: "/products/mounting-kit-u6-plus"
      },
      {
        id: 3,
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

  // Produk Kedelapan dari Camera Security, SF SuperLink
  {
    id: "UP-Sense",
    name: "All-In-One Sensor",
    category: "Camera Security",
    subfilter: "SuperLink Sensors",
    image: "/images/camerasecurity/61.up-sense/1.p-utama-upsense.png",
    shortDescription:
      "A battery-powered smart sensor capable of detecting motion, lighting, and environmental changes.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UP-Sense",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/61.up-sense/1.p-utama-upsense.png",
      "/images/camerasecurity/61.up-sense/2.p-dimensi-upsense.png",
      "/images/camerasecurity/61.up-sense/p-itb-upsense.png",
      "/images/camerasecurity/61.up-sense/p-mkt0-upsense.png",
      "/images/camerasecurity/61.up-sense/p-mkt1-upsense.png",
      "/images/camerasecurity/61.up-sense/p-mkt2-upsense.png",
      "/images/camerasecurity/61.up-sense/p-mkt3-upsense.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/61.up-sense/p-mkt1-upsense.png",
      "/images/camerasecurity/61.up-sense/p-itb-upsense.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Note. Long-range BLE coverage is comparable to WiFi coverage.",
      "Enclosure Material : Polycarbonate",
      "Networking Interface : Bluetooth 5.0, BLE"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "⌀24 x 83.5 mm (⌀0.9 x 3.3')" },
          { label: "Weight", value: "50.2 g (1.8 oz" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Flat wall mount: polycarbonate, adhesive Corner mount: polycarbonate, adhesive" },
          { label: "Additional Gear", value: "Magnet (1) Water sensor adapter (Only available in the 3-pack.)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Networking Interface", value: "Bluetooth 5.0, BLE" },
          { label: "Sensor Features Motion Sensor", value: "✓" },
          { label: "Sensor Features Magnetic Entry Sensor for Door or Window Open/Close", value: "✓" },
          { label: "Sensor Features Accelerometer for Garage Door Open/Close", value: "✓" },
          { label: "Sensor Features Temperature Sensor", value: "✓" },
          { label: "Sensor Features Humidity Sensor", value: "✓" },
          { label: "Sensor Features Ambient Light Sensor", value: "✓" },
          { label: "Sensor Features Ambient Sound Sensor", value: "✓" },
          { label: "Sensor Features Water Sensor", value: "✓" },
          { label: "Sensor Features BLE Connectivity from SuperLink or a UniFi Access Point in an Indoor Setting", value: "Must be connected to an up-to-date Bluetooth-supported UniFi access point." },
          { label: "Antennas", value: "(1) 2.4GHz" },
          { label: "LEDs", value: "R/B/W" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "0 to 45° C (32 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE, Anatel: 08492-22-08356" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application RequirementsWeb Application", value: "UniFi Protect" },
          { label: "Application RequirementsWeb Mobile App", value: "UniFi Protect iOS™ and Android™" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/61.up-sense/p-itb-upsense.png" },
    ],
  },

// Produk Kesembilan dari Camera Security, SF SuperLink
  {
    id: "UACC-USL-ANT-HG",
    name: "SuperLink High-Gain Antenna",
    category: "Camera Security",
    subfilter: "SuperLink Sensors",
    image: "/images/camerasecurity/62.uacc-usl-ant-hg/1.p-utama-uaccuslanthg.png",
    shortDescription:
      "High-gain, omnidirectional antenna with an IP67-rated outdoor enclosure, built to extend SuperLink range in all weather conditions.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-USL-ANT-HG",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/62.uacc-usl-ant-hg/1.p-utama-uaccuslanthg.png",
      "/images/camerasecurity/62.uacc-usl-ant-hg/p-itb-uaccuslanthg.png",
      "/images/camerasecurity/62.uacc-usl-ant-hg/p-mkt0-uaccuslanthg.png",
      "/images/camerasecurity/62.uacc-usl-ant-hg/p-mkt1-uaccuslanthg.png",
      "/images/camerasecurity/62.uacc-usl-ant-hg/p-mkt2-uaccuslanthg.png",
      "/images/camerasecurity/62.uacc-usl-ant-hg/p-mkt3-uaccuslanthg.png",
      "/images/camerasecurity/62.uacc-usl-ant-hg/p-mkt4-uaccuslanthg.png",
      "/images/camerasecurity/62.uacc-usl-ant-hg/p-mkt5-uaccuslanthg.png",
      "/images/camerasecurity/62.uacc-usl-ant-hg/p-mkt6-uaccuslanthg.png",
      "/images/camerasecurity/62.uacc-usl-ant-hg/p-mkt7-uaccuslanthg.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/62.uacc-usl-ant-hg/p-mkt0-uaccuslanthg.png",
      "/images/camerasecurity/62.uacc-usl-ant-hg/p-itb-uaccuslanthg.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enclosure Material Polycarbonate, glass fiber",
      "Wind Loading 25.4 N at 200 km/h (5.7 lbf at 125 mph)",
      "Pole Mount Diameter 1–2.17' (25–55 mm)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Device: 468.9 x 31.8 x 44.1 mm (18.5 x 1.3 x 1.7') With cable: 1458.4 x 31.8 x 44.1 mm (57.4 x 1.3 x 1.7') Cable: ⌀5.2 x 1000 mm (⌀0.2 x 39.4')" },
          { label: "Weatherproofing", value: "IP67" },
          { label: "Mounting", value: "Pole mount" },
          { label: "Pole Mount Diameter", value: "1–2.17' (25–55 mm)" },
          { label: "Wind Loading", value: "25.4 N at 200 km/h (5.7 lbf at 125 mph)" },
          { label: "UniFi Application Suite", value: "Protect" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Operating Frequency US", value: "860–930 MHz" },
          { label: "Operating Frequency EU", value: "860–930 MHz" },
          { label: "Operating Frequency Bluetooth", value: "2400–2480 MHz" },
          { label: "Antenna Gain Bluetooth", value: "4 dBi" },
          { label: "Antenna Gain Superlink", value: "7 dBi" },
          { label: "Max. Range Bluetooth", value: "Up to 100 m (328 ft)" },
          { label: "Max. Range Superlink", value: "5 km (3.1 mi)" },
          { label: "Sensor Features PIR Sensor", value: "✓" },
          { label: "Detected Glass Type", value: "Plate, tempered, obscured, laminated, coated, wired Size: 280 x 356 mm (11 x 14') to 1067 x 1626 mm (42 x 64”) Thickness: 2.4 mm (3/32'), 4.8 mm (3/16'), 3.2 mm (1/8'), 6.4 mm (1/4')" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Weight", value: "Device: 275 g (9.7 oz) Cable: 65 g (2.3 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, glass fiber" },
          { label: "Mount Material", value: "Stainless steel" },
          { label: "Ambient Operating Temperature", value: "-40 to 60° C (-40 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "Certifications", value: "CE" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/62.uacc-usl-ant-hg/p-itb-uaccuslanthg.png" },
    ],
  },

  // Produk Kesepuluh dari Camera Security, SF SuperLink
  {
    id: "USL-Relay",
    name: "Relay",
    category: "Camera Security",
    subfilter: "SuperLink Sensors",
    image: "/images/camerasecurity/63.usl-relay/1.p-utama-uslrelay.png",
    shortDescription:
      "Compact SuperLink relay designed with I/O interfaces for seamless integration with third-party sensors and signaling devices.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "USL-Relay",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/63.usl-relay/1.p-utama-uslrelay.png",
      "/images/camerasecurity/63.usl-relay/2.p-dimensi-uslrelay.png",
      "/images/camerasecurity/63.usl-relay/3.p-spec-uslrelay.png",
      "/images/camerasecurity/63.usl-relay/4.p-development-uslrelay.png",
      "/images/camerasecurity/63.usl-relay/p-itb-uslrelay.png",
      "/images/camerasecurity/63.usl-relay/p-mkt0-uslrelay.png",
      "/images/camerasecurity/63.usl-relay/p-mkt1-uslrelay.png",
      "/images/camerasecurity/63.usl-relay/p-mkt2-uslrelay.png",
      "/images/camerasecurity/63.usl-relay/p-mkt3-uslrelay.png",
      "/images/camerasecurity/63.usl-relay/p-mkt4-uslrelay.png",
      "/images/camerasecurity/63.usl-relay/p-mkt5-uslrelay.png",
      "/images/camerasecurity/63.usl-relay/p-mkt6-uslrelay.png",
      "/images/camerasecurity/63.usl-relay/p-mkt7-uslrelay.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/63.usl-relay/p-mkt0-uslrelay.png",
      "/images/camerasecurity/63.usl-relay/p-itb-uslrelay.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Connectivity : SuperLink (Proprietary)",
      "Mounting : Adhesive, wall and DIN rail mount",
      "Enclosure Material : Polycarbonate"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "50 x 47.6 x 28 mm (2 × 1.9 × 1.1')" },
          { label: "Mounting", value: "Adhesive, wall and DIN rail mount" },
          { label: "UniFi Application Suite", value: "Protect" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Connectivity", value: "SuperLink (Proprietary)" },
          { label: "Operating Frequency US", value: "915.6–927.6 MHz" },
          { label: "Operating Frequency EU", value: "865.1–869.5 MHz" },
          { label: "Antenna Gain SuperLink", value: "1 dBi" },
          { label: "Max. TX Power SuperLink", value: "14 dBi" },
          { label: "Max. Range SuperLink", value: "2 km (1.2 mi)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Power Method", value: "12V DC / 24V DC / 48V DC" },
          { label: "Weight", value: "100 g (3.5 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Buttons", value: "(1) Factory reset(1) Test button" },
          { label: "Terminal Blocks Output", value: "O1/COM/O2 Dry contact only (12-48V DC, 12-240V AC) 10A/port, UL total max: 12A IEC total max: 16A" },
          { label: "Terminal Blocks Input", value: "I1/I2 Dry contact only Open/Short (GND) Integrated 5V TVS protection" },
          { label: "Terminal Blocks Power", value: "VDD/GND 12–48V DC, max. 48V Integrated over-temperature protection (OTP) at 85°C (185°F)" },
          { label: "LEDs", value: "(1) LoRa, Status: RGBW (2) Signal input, Relay output: W" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "Certifications", value: "CE, FCC, IC" },
          { label: "NDA Compliant", value: "✓" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application RequirementsWeb Application", value: "UniFi Protect" },
          { label: "Application RequirementsWeb Mobile App", value: "UniFi Protect iOS™ and Android™" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/63.usl-relay/p-itb-uslrelay.png" },
    ],
  },

  // Produk Kesebelas dari Camera Security, SF SuperLink
  {
    id: "UP-AlarmHub",
    name: "Alarm Hub Kit",
    category: "Camera Security",
    subfilter: "SuperLink Sensors",
    image: "/images/camerasecurity/64.up-alarmhub-kit/1.p-utama-upalarmhubkit.png",
    shortDescription:
      "32 input zone alarm control hub for hardwire intrusion sensors powered using PoE++ input and optional battery backup.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UP-AlarmHub",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/camerasecurity/64.up-alarmhub-kit/1.p-utama-upalarmhubkit.png",
      "/images/camerasecurity/64.up-alarmhub-kit/2.p-dimensi-upalarmhubkit.png",
      "/images/camerasecurity/64.up-alarmhub-kit/3.p-spec-upalarmhubkit.png",
      "/images/camerasecurity/64.up-alarmhub-kit/4.p-development-upalarmhubkit.png",
      "/images/camerasecurity/64.up-alarmhub-kit/p-itb-upalarmhubkit.png",
      "/images/camerasecurity/64.up-alarmhub-kit/p-mkt0-upalarmhubkit.png",
      "/images/camerasecurity/64.up-alarmhub-kit/p-mkt1-upalarmhubkit.png",
      "/images/camerasecurity/64.up-alarmhub-kit/p-mkt2-upalarmhubkit.png",
      "/images/camerasecurity/64.up-alarmhub-kit/p-mkt3-upalarmhubkit.png",
      "/images/camerasecurity/64.up-alarmhub-kit/p-mkt4-upalarmhubkit.png",
      "/images/camerasecurity/64.up-alarmhub-kit/p-mkt5-upalarmhubkit.png",
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/camerasecurity/64.up-alarmhub-kit/p-mkt0-upalarmhubkit.png",
      "/images/camerasecurity/64.up-alarmhub-kit/p-itb-upalarmhubkit.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Mount Material : SGCC steel",
      "Mounting : Wall",
      "Enclosure Material : SGCC steel housing with polycarbonate cover"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "379 x 355 x 105 mm (15 x 14 x 4.1')" },
          { label: "Input Terminals", value: "(32) Alarm sensor (1) Emergency" },
          { label: "Power Method", value: "PoE++/PoE+++ 12V SLA battery" },
          { label: "Power Method Availability", value: "PoE+++ input: 68W PoE++ input: 42W" },
          { label: "NDA Compliant", value: "✓" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "Device: 8.3 kg (18.3 lb) Mount: 624 g (1.4 lb)" },
          { label: "Enclosure Material", value: "SGCC steel housing with polycarbonate cover" },
          { label: "Mount Material", value: "SGCC steel" },
          { label: "Mounting", value: "Wall" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Digital Input", value: "(32) Inputs for alarm sensor (Compatible with EOL resistors: 1–5.6kΩ, 1kΩ included)  (1) Emergency" },
          { label: "Output Relay", value: "(2) Wet/Dry Wet: 12V DC, 1A Dry: 30V DC, 1A" },
          { label: "Aux Power Output", value: "For sensor: (3) 12V DC, 1A right side total, (3) 12V DC, 1A left side total" },
          { label: "Indoor and Outdoor Use", value: "Indoor only" },
          { label: "Ambient Operating Temperature", value: "-10 to 40° C (14 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "Networking Interface", value: "(1) 10/100 MbE RJ45 port" },
          { label: "PoE Interface", value: "(1) PoE++/PoE+++ input, 54V DC, 60W/90W (1) PoE+ output, 54V DC, 30W" },
          { label: "Max. Power Consumption", value: "90W" },
          { label: "Battery Charge", value: "SLA backup battery, 12V, 0.3A" },
          { label: "LEDs", value: "W/B" },
          { label: "Buttons", value: "(1) Factory reset (2) Dry/Wet switch" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application RequirementsWeb Application", value: "Version 7.0.88 and later" },
          { label: "Application RequirementsWeb Mobile App", value: "UniFi Protect iOS™ version 3.3.0 and later UniFi Protect Android™ version 3.2.0 and later" },
        ]
      },
    ],

    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/camerasecurity/64.up-alarmhub-kit/p-itb-upalarmhubkit.png" },
    ],
  },

  // Produk Pertama dari Camera Security, SF Camera Accessories
  {
    id: "UP-AI-Horn-Speaker-B",
    name: "AI Horn Speaker",
    category: "Camera Security",
    subfilter: "Camera Accessories",
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

  // Produk Kedua dari Camera Security,SF Camera Accessories 
  {
    id: "UP-FloodLight",
    name: "Floodlight",
    category: "Camera Security",
    subfilter: "Camera Accessories",
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

  // Produk Ketiga dari Camera Security, SF Camera Accessories 
  {
    id: "UACC-Adapter-PoE-USBC",
    name: "PoE to USB-C Adapter",
    category: "Camera Security",
    subfilter: "Camera Accessories",
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

  // Produk Keempat dari Camera Security, SF Camera Accessories 
  {
    id: "UACC-Camera-CJB-B",
    name: "Camera Compact Junction Box",
    category: "Camera Security",
    subfilter: "Camera Accessories",
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

  // Produk Kelima dari Camera Security, SF Camera Accessories
  {
    id: "UACC-Camera-JB-B",
    name: "Camera Junction Box",
    category: "Camera Security",
    subfilter: "Camera Accessories",
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

  // Produk Keenam dari Camera Security, SF Camera Accessories 
  {
    id: "UACC-AI-360-JB",
    name: "AI 360 Junction Box",
    category: "Camera Security",
    subfilter: "Camera Accessories",
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

  // Produk Ketujuh dari Camera Security, SF Camera Accessories
  {
    id: "UACC-G4-Dome-Arm Mount",
    name: "Dome Camera Arm Mount",
    category: "Camera Security",
    subfilter: "Camera Accessories",
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

  // Produk Kedelapan dari Camera Security, SF Camera Accessories
  {
    id: "UACC-Camera-AM-B",
    name: "Camera Arm Mount",
    category: "Camera Security",
    subfilter: "Camera Accessories",
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

  // Produk Kesembilan dari Camera Security, SF Camera Accessories 
  {
    id: "UACC-Bullet-AB-W",
    name: "Bullet Camera Angled Base",
    category: "Camera Security",
    subfilter: "Camera Accessories",
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

  // Produk Kesepuluh dari Camera Security, SF Camera Accessories
  {
    id: "UACC-AI-Pro-Enhancer-B/W",
    name: "AI Enhancer",
    category: "Camera Security",
    subfilter: "Camera Accessories",
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

  // {
  //   id: "UACC-G5-Enhancer",
  //   name: "G5 Pro Enhancer",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "Long-range IR LED and floodlight accessory for the G5 Pro.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-G5-ENHANCER",

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
  //     "Long-range IR LED and floodlight accessory for the G5 Pro",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "G5 Pro Enhancer" },
  //         { label: "Model", value: "UACC-G5-ENHANCER" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-g5-enhancer"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-g5-enhancer"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },

  // {
  //   id: "UVC-G4-IRExtender",
  //   name: "G4 Bullet IR Enhancer",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription: "Long-range IR LED accessory for the G4 Bullet.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UVC-G4-IREXTENDER",

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
  //     "Long-range IR LED accessory for the G4 Bullet",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "G4 Bullet IR Enhancer" },
  //         { label: "Model", value: "UVC-G4-IREXTENDER" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uvc-g4-irextender"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uvc-g4-irextender"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },

  // {
  //   id: "UACC-Camera-DM-B/W",
  //   name: "Camera Dual Mount",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "Tamper-resistant, back-to-back mount for two UniFi Bullet, Dome, or Turret cameras that supports flat surface installation and attachment to 1 1/2' NPS threaded conduit.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-CAMERA-DM-B-W",

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
  //     "Tamper-resistant",
  //     "back-to-back mount for two UniFi Bullet",
  //     "or Turret cameras that supports flat surface installation and attachment to 1 1/2' NPS threaded conduit",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "Camera Dual Mount" },
  //         { label: "Model", value: "UACC-CAMERA-DM-B-W" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-camera-dm-b/w"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-camera-dm-b/w"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-GB-Plate-B/W",
  //   name: "Gang Box Mounting Plate",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "A mounting plate designed to interface UniFi Protect cameras with multiple types of Gang Boxes and Junction Boxes.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-GB-PLATE-B-W",

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
  //     "A mounting plate designed to interface UniFi Protect cameras with multiple types of Gang Boxes and Junction Boxes",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "Gang Box Mounting Plate" },
  //         { label: "Model", value: "UACC-GB-PLATE-B-W" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-gb-plate-b/w"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-gb-plate-b/w"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-Dome-FM-B/W",
  //   name: "AI Dome Camera Flush Mount",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "Dome camera mounting accessory for recessed installation into a wall or ceiling.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-DOME-FM-B-W",

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
  //     "Dome camera mounting accessory for recessed installation into a wall or ceiling",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "AI Dome Camera Flush Mount" },
  //         { label: "Model", value: "UACC-DOME-FM-B-W" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-dome-fm-b/w"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-dome-fm-b/w"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-G6-Pro-360-FM-B/W",
  //   name: "G6 Pro 360 Flush Mount",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "G6 Pro 360 camera mounting accessory for recessed installation into a wall or ceiling.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-G6-PRO-360-FM-B-W",

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
  //     "G6 Pro 360 camera mounting accessory for recessed installation into a wall or ceiling",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "G6 Pro 360 Flush Mount" },
  //         { label: "Model", value: "UACC-G6-PRO-360-FM-B-W" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-g6-pro-360-fm-b/w"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-g6-pro-360-fm-b/w"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-G6-Dome-FM-B/W",
  //   name: "G6 Dome Camera Flush Mount",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "G6/G6 Pro Dome camera mounting accessory for recessed installation into a wall or ceiling.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-G6-DOME-FM-B-W",

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
  //     "G6/G6 Pro Dome camera mounting accessory for recessed installation into a wall or ceiling",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "G6 Dome Camera Flush Mount" },
  //         { label: "Model", value: "UACC-G6-DOME-FM-B-W" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-g6-dome-fm-b/w"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-g6-dome-fm-b/w"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-G6-Dome-FMS-B/W",
  //   name: "G6 Dome Camera Flush Mount",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "G6 Dome camera mounting accessory for recessed installation into a wall or ceiling.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-G6-DOME-FMS-B-W",

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
  //     "G6 Dome camera mounting accessory for recessed installation into a wall or ceiling",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "G6 Dome Camera Flush Mount" },
  //         { label: "Model", value: "UACC-G6-DOME-FMS-B-W" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-g6-dome-fms-b/w"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-g6-dome-fms-b/w"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-G5-Dome-Ultra-FM-B/W",
  //   name: "G6 Dome Camera Flush Mount",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "Dome camera mounting accessory for recessed installation into a wall or ceiling.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-G5-DOME-ULTRA-FM-B-W",

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
  //     "Dome camera mounting accessory for recessed installation into a wall or ceiling",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "G6 Dome Camera Flush Mount" },
  //         { label: "Model", value: "UACC-G5-DOME-ULTRA-FM-B-W" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-g5-dome-ultra-fm-b/w"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-g5-dome-ultra-fm-b/w"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-G5-Dome-Ultra-FM-SB-B/W",
  //   name: "G6 Dome Camera Flush Mount",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "Dome camera mounting accessory for recessed installation into a wall or ceiling with a smoked bubble for enhanced discretion.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-G5-DOME-ULTRA-FM-SB-B-W",

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
  //     "Dome camera mounting accessory for recessed installation into a wall or ceiling with a smoked bubble for enhanced discretion",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "G6 Dome Camera Flush Mount" },
  //         { label: "Model", value: "UACC-G5-DOME-ULTRA-FM-SB-B-W" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-g5-dome-ultra-fm-sb-b/w"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-g5-dome-ultra-fm-sb-b/w"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-G6-Dome-WS-B/W",
  //   name: "G6 Dome Camera Weather Shield",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "G6 Dome camera accessory for optimal image quality and protection from the elements when installed outdoors on a wall or pole.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-G6-DOME-WS-B-W",

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
  //     "G6 Dome camera accessory for optimal image quality and protection from the elements when installed outdoors on a wall or pole",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "G6 Dome Camera Weather Shield" },
  //         { label: "Model", value: "UACC-G6-DOME-WS-B-W" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-g6-dome-ws-b/w"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-g6-dome-ws-b/w"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-Dome-WS-B/W",
  //   name: "Dome Camera Weather Shield",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "Dome camera accessory for optimal image quality and protection from the elements when installed outdoors on a wall or pole.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-DOME-WS-B-W",

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
  //     "Dome camera accessory for optimal image quality and protection from the elements when installed outdoors on a wall or pole",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "Dome Camera Weather Shield" },
  //         { label: "Model", value: "UACC-DOME-WS-B-W" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-dome-ws-b/w"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-dome-ws-b/w"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-G6-180-FM-B/W",
  //   name: "G6 180 Camera Flush Mount",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "G6 180 camera mounting accessory for recessed ceiling installation.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-G6-180-FM-B-W",

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
  //     "G6 180 camera mounting accessory for recessed ceiling installation",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "G6 180 Camera Flush Mount" },
  //         { label: "Model", value: "UACC-G6-180-FM-B-W" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-g6-180-fm-b/w"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-g6-180-fm-b/w"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-G6-180-PM-B/W",
  //   name: "G6 180 Camera Pendant Mount",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "Pendant mount for suspending the G6 180 Camera from ceilings or overhead structures.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-G6-180-PM-B-W",

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
  //     "Pendant mount for suspending the G6 180 Camera from ceilings or overhead structures",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "G6 180 Camera Pendant Mount" },
  //         { label: "Model", value: "UACC-G6-180-PM-B-W" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-g6-180-pm-b/w"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-g6-180-pm-b/w"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-G5-PTZ-CM-B/W",
  //   name: "G6/G5 PTZ Corner Mount",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription: "Corner mount accessory for G6/G5 PTZ.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-G5-PTZ-CM-B-W",

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
  //     "Corner mount accessory for G6/G5 PTZ",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "G6/G5 PTZ Corner Mount" },
  //         { label: "Model", value: "UACC-G5-PTZ-CM-B-W" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-g5-ptz-cm-b/w"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-g5-ptz-cm-b/w"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-G5-PTZ-PM-B/W",
  //   name: "G6/G5 PTZ Pendant Mount",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription: "Pendant mount accessory for G6/G5 PTZ.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-G5-PTZ-PM-B-W",

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
  //     "Pendant mount accessory for G6/G5 PTZ",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "G6/G5 PTZ Pendant Mount" },
  //         { label: "Model", value: "UACC-G5-PTZ-PM-B-W" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-g5-ptz-pm-b/w"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-g5-ptz-pm-b/w"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-G5-PTZ-SM-B/W",
  //   name: "G6/G5 PTZ Surface Mount",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription: "Ceiling surface mount accessory for G5 PTZ.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-G5-PTZ-SM-B-W",

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
  //     "Ceiling surface mount accessory for G5 PTZ",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "G6/G5 PTZ Surface Mount" },
  //         { label: "Model", value: "UACC-G5-PTZ-SM-B-W" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-g5-ptz-sm-b/w"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-g5-ptz-sm-b/w"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-G5-PTZ-ICM-SB-B/W",
  //   name: "G5 PTZ In-Ceiling Mount",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "In-ceiling mount accessory or smoked bubble cover for G5 PTZ.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-G5-PTZ-ICM-SB-B-W",

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
  //     "In-ceiling mount accessory or smoked bubble cover for G5 PTZ",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "G5 PTZ In-Ceiling Mount" },
  //         { label: "Model", value: "UACC-G5-PTZ-ICM-SB-B-W" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-g5-ptz-icm-sb-b/w"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-g5-ptz-icm-sb-b/w"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-G6-PTZ-ICM-B/W",
  //   name: "G6 PTZ In-Ceiling Mount",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription: "In-ceiling mount accessory for G6 PTZ.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-G6-PTZ-ICM-B-W",

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
  //     "In-ceiling mount accessory for G6 PTZ",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "G6 PTZ In-Ceiling Mount" },
  //         { label: "Model", value: "UACC-G6-PTZ-ICM-B-W" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-g6-ptz-icm-b/w"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-g6-ptz-icm-b/w"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-G5-PTZ-CA-B/W",
  //   name: "G6/G5 PTZ Conduit Adapter",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "3/4' conduit adapter for wall-mounted G6/G5 PTZ installations.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-G5-PTZ-CA-B-W",

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
  //     "3/4' conduit adapter for wall-mounted G6/G5 PTZ installations",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "G6/G5 PTZ Conduit Adapter" },
  //         { label: "Model", value: "UACC-G5-PTZ-CA-B-W" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-g5-ptz-ca-b/w"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-g5-ptz-ca-b/w"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-Flex-Cam-PWM-B/W",
  //   name: "Flex Pro Mount",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "Versatile weatherproof wall or pole mount for G3 and G5 Flex cameras.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-FLEX-CAM-PWM-B-W",

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
  //     "Versatile weatherproof wall or pole mount for G3 and G5 Flex cameras",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "Flex Pro Mount" },
  //         { label: "Model", value: "UACC-FLEX-CAM-PWM-B-W" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-flex-cam-pwm-b/w"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-flex-cam-pwm-b/w"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-G4 Doorbell Pro PoE-Gang Box-White-B/W",
  //   name: "G4 Doorbell Pro PoE Gang Box Mount",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "Secure, flat or angled mounting plate for installing the G4 Doorbell Pro PoE over a standard single-gang box.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-G4-DOORBELL-PRO-POE-GANG-BOX-WHITE-B-W",

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
  //     "flat or angled mounting plate for installing the G4 Doorbell Pro PoE over a standard single-gang box",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "G4 Doorbell Pro PoE Gang Box Mount" },
  //         { label: "Model", value: "UACC-G4-DOORBELL-PRO-POE-GANG-BOX-WHITE-B-W" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-g4 doorbell pro poe-gang box-white-b/w"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-g4 doorbell pro poe-gang box-white-b/w"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-G4-DBP-Cable-USB-7M",
  //   name: "G4 Doorbell Pro PoE to USB-C Cable",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "Sever-meter USB cable that connects a G4 Doorbell Pro to a PoE source.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-G4-DBP-CABLE-USB-7M",

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
  //     "Sever-meter USB cable that connects a G4 Doorbell Pro to a PoE source",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "G4 Doorbell Pro PoE to USB-C Cable" },
  //         { label: "Model", value: "UACC-G4-DBP-CABLE-USB-7M" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-g4-dbp-cable-usb-7m"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-g4-dbp-cable-usb-7m"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { labeInstant Camera PoE to USB-C Cablel: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-G4-INS-Cable-USB-4.5M",
  //   name: "",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "Four-and-a-half-meter USB cable that connects a Camera G4/G6 Instant to a PoE source.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-G4-INS-CABLE-USB-4-5M",

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
  //     "Four-and-a-half-meter USB cable that connects a Camera G4/G6 Instant to a PoE source",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "Instant Camera PoE to USB-C Cable" },
  //         { label: "Model", value: "UACC-G4-INS-CABLE-USB-4-5M" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-g4-ins-cable-usb-4.5m"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-g4-ins-cable-usb-4.5m"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },



  // {
  //   id: "UACC-G4-INS-Cover-DG/G/LG",
  //   name: "G4 Instant Cover",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "Custom cover for the G4 Instant camera available in multiple colors.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-G4-INS-COVER-DG-G-LG",

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
  //     "Custom cover for the G4 Instant camera available in multiple colors",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "G4 Instant Cover" },
  //         { label: "Model", value: "UACC-G4-INS-COVER-DG-G-LG" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-g4-ins-cover-dg/g/lg"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-g4-ins-cover-dg/g/lg"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-AI-Theta-Audio-Cable-1M",
  //   name: "AI Theta Audio Cable",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription:
  //     "Replacement cable that connects AI Theta Audio to an AI Theta Hub, 1m (3.3 ft).",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-AI-THETA-AUDIO-CABLE-1M",

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
  //     "Replacement cable that connects AI Theta Audio to an AI Theta Hub",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "AI Theta Audio Cable" },
  //         { label: "Model", value: "UACC-AI-THETA-AUDIO-CABLE-1M" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-ai-theta-audio-cable-1m"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-ai-theta-audio-cable-1m"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // },


  // {
  //   id: "UACC-AI-Theta-Audio-Cable-Ext-10M",
  //   name: "AI Theta Audio Cable Extension Cable",
  //   category: "Camera Security",
  //   subfilter: "Camera Accessories",
  //   image: "/images/camera.jpg",
  //   shortDescription: "Ten-meter audio cable to extend AI Theta Lenses.",
  //   specs: [
  //     { label: "Resolution", value: "4K (8MP)" },
  //     { label: "Night Vision", value: "25m (82ft) IR" },
  //     { label: "Zoom", value: "3x Optical" },
  //     { label: "Audio", value: "Two-way Audio" },
  //   ],

  //   // SKU produk
  //   sku: "UACC-AI-THETA-AUDIO-CABLE-EXT-10M",

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
  //     "Ten-meter audio cable to extend AI Theta Lenses",
  //     "Enterprise-grade quality",
  //     "Easy to deploy and manage",
  //     "Reliable performance"
  //   ],

  //   // Spesifikasi teknis dengan section yang bisa di-expand/collapse
  //   technicalSpecs: [
  //     {
  //       title: "Overview",
  //       items: [
  //         { label: "Product Name", value: "AI Theta Audio Cable Extension Cable" },
  //         { label: "Model", value: "UACC-AI-THETA-AUDIO-CABLE-EXT-10M" },
  //         { label: "Category", value: "UniFi Product" },
  //         { label: "Resolution", value: "4K (8MP)" },
  //         { label: "Night Vision", value: "25m (82ft) IR" },
  //         { label: "Zoom", value: "3x Optical" },
  //         { label: "Audio", value: "Two-way Audio" }
  //       ]
  //     },
  //     {
  //       title: "Hardware",
  //       items: [
  //         { label: "Form Factor", value: "Standard" },
  //         { label: "Power Supply", value: "AC/DC" }
  //       ]
  //     },
  //     {
  //       title: "Software",
  //       items: [
  //         { label: "Management", value: "UniFi Network" },
  //         { label: "Minimum Software Requirements", value: "Web Browser: Google Chrome" }
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
  //       name: "Mounting Kit",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
  //       specs: [
  //         "Compatible with 19\" racks",
  //         "Steel construction",
  //         "Easy installation"
  //       ],
  //       detailedSpecs: [
  //         { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
  //         { label: "Weight", value: "1.2 kg" },
  //         { label: "Material", value: "SGCC Steel" },
  //         { label: "Mounting", value: "1U Rack Mount" }
  //       ],
  //       productLink: "/products/mounting-kit-uacc-ai-theta-audio-cable-ext-10m"
  //     },
  //     {
  //       id: 2,
  //       name: "Power Cable",
  //       image: "/images/dcs-box.png",
  //       price: 299,
  //       description: "High-quality power cable with durable construction.",
  //       specs: [
  //         "2m Length",
  //         "High durability",
  //         "Standard fit"
  //       ],
  //       detailedSpecs: [
  //         { label: "Length", value: "2.0 m" },
  //         { label: "Conductor", value: "Copper" },
  //         { label: "Rating", value: "10A / 250V" },
  //         { label: "Jacket", value: "PVC" }
  //       ],
  //       productLink: "/products/power-cable-uacc-ai-theta-audio-cable-ext-10m"
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
  //         { label: "Data Rate", value: "10 Gbps" },
  //         { label: "Connector", value: "LC Duplex" },
  //         { label: "Wavelength", value: "850 nm" },
  //         { label: "Max Distance", value: "300 m" }
  //       ],
  //       productLink: "/products/sfp-module-10g"
  //     }
  //   ]
  // }
];