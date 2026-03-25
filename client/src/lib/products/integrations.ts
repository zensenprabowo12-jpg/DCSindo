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

// Integrations Products
export const integrationsProducts: Product[] = [

  // Produk Pertama dari Integrations, SF Network Storage
  {
    id: "UNAS-Pro-8",
    name: "UNAS Pro 8",
    category: "Integrations",
    subfilter: "Network Storage",
    image: "/images/camera.jpg",
    shortDescription:
      "2U rack-mount NAS with (8) 2.5/3.5' HDD bays and (2) M.2 NVMe SSD cache slots, delivering faster access, lower latency, and high-availability 10 Gbps networking for large-scale file storage and sharing.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],


    // SKU produk
    sku: "UNAS-PRO-8",

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
      "2U rack-mount NAS with (8) 2",
      "5' HDD bays and (2) M",
      "2 NVMe SSD cache slots",
      "delivering faster access"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 480 x 87.4 mm (17.4 × 18.9 × 3.4')" },
          { label: "Storage Capacity", value: "(8) 3.5' drive bays (2) M.2 NVMe bays" },
          { label: "Network Interface", value: "(2) 10G SFP+ (10G Only) (1) 10 GbE RJ45 (10G/5G/2.5G/1G/100M)" },
          { label: "Power Redundancy", value: "✓" },
          { label: "Form Factor", value: "Rack mount (2U)" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Hard Drive Capacity", value: "(8) 2.5/3.5' HDD / SSD support (2) M.2 NVMe SSD support" },
          { label: "Networking Interface", value: "(1) 10/100 MbE RJ45 port" },
          { label: "Max. Power Budget for Drives", value: "225W" },
          { label: "Max. Power Consumption", value: "250W" },
          { label: "Power Method", value: "(2) AC input, Hot-swappable power modules" },
          { label: "Power Supply", value: "(2) Hot-swappable AC/DC 550W power modules" },
          { label: "Processor", value: "Quad-Core ARM® Cortex®-A57 at 2.0 GHz" },
          { label: "ESD/EMP Protection", value: "Air: ± 15kV, contact: ± 8kV" },
          { label: "Memory", value: "16 GB" },
          { label: "Management", value: "Ethernet" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "RF Interface", value: "Bluetooth 4.1" },
          { label: "Weight", value: "11.5 kg (25.35 lb)" },
          { label: "Enclosure Material", value: "SGCC steel" },
          { label: "Mount Material", value: "SGCC steel" },
          { label: "Supported Rack Depth", value: "The rails support 600 mm (23.6') four-post racks with square holes (9.5 x 9.5 mm) Posts depths ranging from 600–1066 mm (23.6–42')" },
          { label: "LEDs Ethernet", value: "✓" },
          { label: "LEDs SFP+", value: "✓" },
          { label: "LEDs HDD", value: "✓" },
          { label: "LEDs System", value: "✓" },
          { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, CE, IC, SRRC" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Supported File Protocols NFS", value: "✓" },
          { label: "Supported File Protocols SMB", value: "✓" },
          { label: "Supported features on unifi.ui.com RAID Type", value: "RAID 5 RAID 6 RAID 10" },
          { label: "Supported features on unifi.ui.com RAID Group", value: "Multiple" },
          { label: "Supported features on unifi.ui.com RAID Hot Spare Support", value: "✓" },
          { label: "Supported features on unifi.ui.com RAID Personal Drive & Shared Drive", value: "✓" },
          { label: "Supported features on unifi.ui.com RAID SSD Cache", value: "✓" },
          { label: "Supported features on unifi.ui.com Max. NVMe SSD Capacity Supported", value: "4 TiB" },
          { label: "Supported features on unifi.ui.com File Encryption", value: "✓" },
          { label: "Supported features on unifi.ui.com Backup to CIFS/SMB Server", value: "✓" },
          { label: "Supported features on unifi.ui.com Backup to Cloud Services (Google Drive, OneDrive, Dropbox, Amazon S3, Backblaze B2, Wasabi)", value: "✓" },
          { label: "Supported features on unifi.ui.com File Snaphots", value: "✓" },
          { label: "Supported features on unifi.ui.com Share Links", value: "✓" },
          { label: "Supported features on unifi.ui.com Time Machine Backup", value: "✓" },
          { label: "Supported features on unifi.ui.com Client App Support", value: "✓" },
          { label: "Supported features on unifi.ui.com User Group", value: "✓" }
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
        name: "Enterprise 3.5' HDD, 16 TB",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Enterprise-grade 3.5' SATA hard drive ideal for storage-intensive UniFi camera security and NAS systems.",
        specs: [
          "Workload rating: 550 TB/year",
          "Mean time between failure (MTBF): 2.5 million hours"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/mounting-kit-envr"
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

  // Produk Kedua dari Integrations, SF Netwrok Storage
  {
    id: "UNAS-Pro-4",
    name: "UNAS Pro 4",
    category: "Integrations",
    subfilter: "Network Storage",
    image: "/images/camera.jpg",
    shortDescription:
      "1U rack-mount NAS with (4) 2.5/3.5' HDD bays and (2) M.2 NVMe SSD cache slots, delivering faster access, lower latency, and high-availability 10 Gbps networking for large-scale file storage and sharing.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],


    // SKU produk
    sku: "UNAS-PRO-4",


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
      "Professional UNAS Pro 4",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],


    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 400 x 43.7 mm (17.4 × 15.7 × 1.7')" },
          { label: "Storage Capacity", value: "(4) 3.5' drive bays (2) M.2 NVMe bays" },
          { label: "Network Interface", value: "(2) 10G SFP+ (10G only) (1) GbE RJ45 (1G/100M/10M)" },
          { label: "Power Redundancy", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U)" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Hard Drive Capacity", value: "(4) 2.5/3.5' HDD / SSD support (2) M.2 NVMe SSD support" },
          { label: "Max. Power Budget for Drives", value: "125W" },
          { label: "Max. Power Consumption", value: "150W" },
          { label: "Power Method", value: "(1) Universal AC input, 100–240V AC, 3A Max., 50/60 Hz (1) USP-RPS DC input, 11.5V DC, 13.91A" },
          { label: "Power Supply", value: "AC/DC, internal, 150W" },
          { label: "Processor", value: "Quad-Core ARM® Cortex®-A57 at 2.0 GHz" },
          { label: "Memory", value: "8 GB" },
          { label: "Management", value: "Ethernet" },
          { label: "RF Interface", value: "Bluetooth 4.1" },
          { label: "Weight", value: "6.7 kg (14.8 lb)" },
          { label: "Enclosure Material", value: "SGCC steel" },
          { label: "Mount Material", value: "SGCC steel" },
          { label: "Supported Rack Depth", value: "The rails support 600 mm (23.6') four-post racks with square holes (9.5 x 9.5 mm)  Posts depths ranging from 600–1066 mm (23.6–42')" },
          { label: "LEDs Ethernet", value: "✓" },
          { label: "LEDs SFP+", value: "✓" },
          { label: "LEDs HDD", value: "✓" },
          { label: "LEDs RPS", value: "✓" },
          { label: "LEDs System", value: "✓" },
          { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, CE, IC" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Supported File Protocols NFS", value: "✓" },
          { label: "Supported File Protocols SMB", value: "✓" },
          { label: "Supported features on unifi.ui.com RAID Type", value: "RAID 5 RAID 6 RAID 10" },
          { label: "Supported features on unifi.ui.com RAID Group", value: "Single" },
          { label: "Supported features on unifi.ui.com RAID Personal Drive & Shared Drive", value: "✓" },
          { label: "Supported features on unifi.ui.com RAID SSD Cache", value: "✓" },
          { label: "Supported features on unifi.ui.com Max. NVMe SSD Capacity Supported", value: "4 TiB" },
          { label: "Supported features on unifi.ui.com File Encryption", value: "✓" },
          { label: "Supported features on unifi.ui.com Backup to CIFS/SMB Server", value: "✓" },
          { label: "Supported features on unifi.ui.com Backup to Cloud Services (Google Drive, OneDrive, Dropbox, Amazon S3, Backblaze B2, Wasabi)", value: "✓" },
          { label: "Supported features on unifi.ui.com File Snaphots", value: "✓" },
          { label: "Supported features on unifi.ui.com Share Links", value: "✓" },
          { label: "Supported features on unifi.ui.com Time Machine Backup", value: "✓" },
          { label: "Supported features on unifi.ui.com Client App Support", value: "✓" },
          { label: "Supported features on unifi.ui.com User Group", value: "✓" }
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


    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Redundant Power",
        image: "/images/dcs-box.png",
        price: 299,
        description: "950W redundant power supply for rack-mounted UniFi devices.",
        specs: [
          "950W DC power availability",
          "(6) DC SmartPower ports",
          "1.3' LCM touchscreen"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442.4 x 325.6 x 43.7 mm (17.4 x 12.8 x 1.7')" },
          { label: "Weight", value: "Without mount brackets : 5.5 kg (12.1 lb) With mount brackets: 5.6 kg (12.3 lb)" },
          { label: "Enclosure Material", value: "SGCC steel" },
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
        ],
        productLink: "/products/mounting-kit"
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
        name: "Enterprise 3.5' HDD, 16 TB",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Enterprise-grade 3.5' SATA hard drive ideal for storage-intensive UniFi camera security and NAS systems.",
        specs: [
          "Workload rating: 550 TB/year",
          "Mean time between failure (MTBF): 2.5 million hours"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/mounting-kit-envr"
      },
    ]
  },

  // Produk Ketiga dari Integrations, SF Network Storage
  {
    id: "UNAS-Pro",
    name: "UNAS Pro",
    category: "Integrations",
    subfilter: "Network Storage",
    image: "/images/camera.jpg",
    shortDescription:
      "2U rack-mount NAS with (7) 2.5/3.5' drive bays and 10 Gbps performance designed for large-scale file storage and sharing.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UNAS-PRO",

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
      "2U rack-mount NAS with (7) 2",
      "5' drive bays and 10 Gbps performance designed for large-scale file storage and sharing",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 325 x 87.4 mm (17.4 x 12.8 x 3.4')" },
          { label: "Storage Capacity", value: "(7) 3.5' drive bays" },
          { label: "Network Interface", value: "(1) 10G SFP+ (10G/1G) (1) GbE RJ45 (1G/100M/10M)" },
          { label: "Power Redundancy", value: "✓" },
          { label: "Form Factor", value: "Rack mount (2U)" }
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
          { label: "Processor", value: "Quad-Core ARM® Cortex®-A57 at 1.7 GHz" },
          { label: "Memory", value: "8 GB" },
          { label: "Management", value: "Ethernet" },
          { label: "RF Interface", value: "Bluetooth 4.1" },
          { label: "Weight", value: "Without mounting brackets: 9.2 kg (20.3 lb) With mounting brackets: 9.5 kg (20.8 lb)" },
          { label: "Enclosure Material", value: "SGCC steel" },
          { label: "Mount Material", value: "SGCC steel" },
          { label: "Supported Rack Depth", value: "482.6 mm (19') four-post racks Posts depths ranging from 650 to 1,000 mm (25.6–39.4”)" },
          { label: "LEDs Ethernet", value: "✓" },
          { label: "LEDs SFP+", value: "✓" },
          { label: "LEDs HDD", value: "✓" },
          { label: "LEDs RPS", value: "✓" },
          { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, CE, IC, Anatel: 01886-25-08356" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements UniFi Drive", value: "Version 1.16.0 and later" },
          { label: "Supported File Protocols NFS", value: "✓" },
          { label: "Supported File Protocols SMB", value: "✓" },
          { label: "Supported features on unifi.ui.com RAID Type", value: "RAID 5 RAID 6 RAID 10" },
          { label: "Supported features on unifi.ui.com RAID Group", value: "Multiple" },
          { label: "Supported features on unifi.ui.com Hot Spare Support", value: "✓" },
          { label: "Supported features on unifi.ui.com RAID Personal Drive & Shared Drive", value: "✓" },
          { label: "Supported features on unifi.ui.com RAID SSD Cache", value: "✓" },
          { label: "Supported features on unifi.ui.com Max. NVMe SSD Capacity Supported", value: "4 TiB" },
          { label: "Supported features on unifi.ui.com File Encryption", value: "✓" },
          { label: "Supported features on unifi.ui.com Backup to Remote UNAS", value: "✓" },
          { label: "Supported features on unifi.ui.com Backup to CIFS/SMB Server", value: "✓" },
          { label: "Supported features on unifi.ui.com Backup to Cloud Services (Google Drive, OneDrive, Dropbox, Amazon S3, Backblaze B2, Wasabi)", value: "✓" },
          { label: "Supported features on unifi.ui.com Snaphots", value: "✓" },
          { label: "Supported features on unifi.ui.com Share Links", value: "✓" },
          { label: "Supported features on unifi.ui.com Time Machine Backup", value: "✓" },
          { label: "Supported features on unifi.ui.com Client App Support", value: "✓" },
          { label: "Supported features on unifi.ui.com User Group", value: "✓" }
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


    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Redundant Power",
        image: "/images/dcs-box.png",
        price: 299,
        description: "950W redundant power supply for rack-mounted UniFi devices.",
        specs: [
          "950W DC power availability",
          "(6) DC SmartPower ports",
          "1.3' LCM touchscreen"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442.4 x 325.6 x 43.7 mm (17.4 x 12.8 x 1.7')" },
          { label: "Weight", value: "Without mount brackets : 5.5 kg (12.1 lb) With mount brackets: 5.6 kg (12.3 lb)" },
          { label: "Enclosure Material", value: "SGCC steel" },
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
        ],
        productLink: "/products/mounting-kit"
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
        name: "Enterprise 3.5' HDD, 16 TB",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Enterprise-grade 3.5' SATA hard drive ideal for storage-intensive UniFi camera security and NAS systems.",
        specs: [
          "Workload rating: 550 TB/year",
          "Mean time between failure (MTBF): 2.5 million hours"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/mounting-kit-envr"
      },
    ]
  },

  // Produk Keempat dari Integrations, SF Network Storage
  {
    id: "UNAS-2-B/W",
    name: "UNAS 2",
    category: "Integrations",
    subfilter: "Network Storage",
    image: "/images/camera.jpg",
    shortDescription:
      "UniFi Network Attached Storage with (2) 3.5' HDD bays, 2.5 GbE networking, USB-C connectivity, and an included PoE++ adapter, all in a compact footprint.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UNAS-2-B-W",

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
      "UniFi Network Attached Storage with (2) 3",
      "5' HDD bays",
      "5 GbE networking",
      "USB-C connectivity"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "135 x 129 x 223.7 mm (5.3 x 5.1 x 8.8')" },
          { label: "Storage Capacity", value: "(2) 3.5' drive bays" },
          { label: "Network Interface", value: "(1) 2.5 GbE RJ45 (2.5G/1G/100M/10M)" },
          { label: "Expansion Port", value: "(1) 5 Gbps USB-C" },
          { label: "Form Factor", value: "Dekstop" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Hard Drive Capacity", value: "(2) 3.5' HDD support" },
          { label: "USB Drive", value: "✓" },
          { label: "Max. Power Budget for Drives", value: "52W" },
          { label: "Max. Power Consumption", value: "60W" },
          { label: "Power Method", value: "PoE++" },
          { label: "Power Supply", value: "60W PoE++ adapter (Included)" },
          { label: "Processor", value: "Quad-Core ARM® Cortex®-A57 at 1.7 GHz" },
          { label: "Memory", value: "4 GB" },
          { label: "Management", value: "Ethernet" },
          { label: "RF Interface", value: "Bluetooth 4.1" },
          { label: "Display", value: "1.47' color LCM" },
          { label: "Weight", value: "1.3 kg (2.85 lb)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "LEDs System", value: "✓" },
          { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, CE, IC" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements UniFi Drive", value: "Version 1.16.0 and later" },
          { label: "Application Requirements Mobile App", value: "iOS™ version 10.28.0 and later Android™ version 10.28.3 and later" },
          { label: "Supported File Protocols NFS", value: "✓" },
          { label: "Supported File Protocols SMB", value: "✓" },
          { label: "Supported features on unifi.ui.com RAID Type", value: "RAID 1" },
          { label: "Supported features on unifi.ui.com RAID Group", value: "Single" },
          { label: "Supported features on unifi.ui.com RAID Personal Drive & Shared Drive", value: "✓" },
          { label: "Supported features on unifi.ui.com File Encryption", value: "✓" },
          { label: "Supported features on unifi.ui.com Backup to Remote UNAS", value: "✓" },
          { label: "Supported features on unifi.ui.com Backup to CIFS/SMB Server", value: "✓" },
          { label: "Supported features on unifi.ui.com Backup to Cloud Services (Google Drive, OneDrive, Dropbox, Amazon S3, Backblaze B2, Wasabi)", value: "✓" },
          { label: "Supported features on unifi.ui.com Snaphots", value: "✓" },
          { label: "Supported features on unifi.ui.com Share Links", value: "✓" },
          { label: "Supported features on unifi.ui.com Time Machine Backup", value: "✓" },
          { label: "Supported features on unifi.ui.com Client App Support", value: "✓" },
          { label: "Supported features on unifi.ui.com User Group", value: "✓" }
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


    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
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
        name: "Enterprise 3.5' HDD, 16 TB",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Enterprise-grade 3.5' SATA hard drive ideal for storage-intensive UniFi camera security and NAS systems.",
        specs: [
          "Workload rating: 550 TB/year",
          "Mean time between failure (MTBF): 2.5 million hours"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/mounting-kit-envr"
      },
    ]
  },

// Produk Kelima dari Integrations, SF Network Storage
  {
    id: "UNAS-4-B/W",
    name: "UNAS 4",
    category: "Integrations",
    subfilter: "Network Storage",
    image: "/images/camera.jpg",
    shortDescription:
      "UniFi Network Attached Storage with (4) 2.5/3.5' HDD bays, (2) M.2 NVMe SSD cache slots, 2.5 GbE networking, USB-C connectivity, and an included PoE+++ adapter, all in a compact footprint.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UNAS-4-B-W",

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
      "UniFi Network Attached Storage with (4) 2",
      "5' HDD bays",
      "2 NVMe SSD cache slots",
      "5 GbE networking"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "246 x 129 x 224.5 mm (9.7 x 5.1 x 8.8')" },
          { label: "Storage Capacity", value: "(4) 3.5' drive bays (2) M.2 NVMe bays" },
          { label: "Network Interface", value: "(1) 2.5 GbE RJ45 (2.5G/1G/100M/10M)" },
          { label: "Expansion Port", value: "(1) 5 Gbps USB-C" },
          { label: "Form Factor", value: "Desktop" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Hard Drive Capacity", value: "(4) 2.5' / 3.5' HDD support (2) M.2 NVMe SSD support" },
          { label: "USB Drive", value: "✓" },
          { label: "Max. Power Budget for Drives", value: "80W" },
          { label: "Max. Power Consumption", value: "90W" },
          { label: "Power Method", value: "PoE+++" },
          { label: "Power Supply", value: "90W PoE+++ adapter (Included)" },
          { label: "Processor", value: "Quad-Core ARM® Cortex®-A57 at 2.0 GHz" },
          { label: "Memory", value: "4 GB" },
          { label: "Management", value: "Ethernet" },
          { label: "RF Interface", value: "Bluetooth 4.1" },
          { label: "Display", value: "1.47' color LCM" },
          { label: "Weight", value: "2.6 kg (5.7 lb)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "LEDs System", value: "✓" },
          { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, CE, IC" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements UniFi Drive", value: "Version 3.4.5 and later" },
          { label: "Application Requirements Mobile App", value: "iOS™ version 10.32.1 and later Android™ version 10.35.1 and later" },
          { label: "Supported File Protocols NFS", value: "✓" },
          { label: "Supported File Protocols SMB", value: "✓" },
          { label: "Supported features on unifi.ui.com RAID Type", value: "RAID 5 RAID 6 RAID 10" },
          { label: "Supported features on unifi.ui.com RAID Group", value: "Single" },
          { label: "Supported features on unifi.ui.com RAID Personal Drive & Shared Drive", value: "✓" },
          { label: "Supported features on unifi.ui.com RAID SSD Cache", value: "✓" },
          { label: "Supported features on unifi.ui.com Max. NVMe SSD Capacity Supported", value: "2 TiB" },
          { label: "Supported features on unifi.ui.com File Encryption", value: "✓" },
          { label: "Supported features on unifi.ui.com Backup to Remote UNAS", value: "✓" },
          { label: "Supported features on unifi.ui.com Backup to CIFS/SMB Server", value: "✓" },
          { label: "Supported features on unifi.ui.com Backup to Cloud Services (Google Drive, OneDrive, Dropbox, Amazon S3, Backblaze B2, Wasabi)", value: "✓" },
          { label: "Supported features on unifi.ui.com File Snaphots", value: "✓" },
          { label: "Supported features on unifi.ui.com Share Links", value: "✓" },
          { label: "Supported features on unifi.ui.com Time Machine Backup", value: "✓" },
          { label: "Supported features on unifi.ui.com Client App Support", value: "✓" },
          { label: "Supported features on unifi.ui.com User Group", value: "✓" }
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


    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "10G PoE+++ Adapter (90W)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "An adapter that can power UniFi PoE+++ devices, reduce dependency on PoE switch power, and provide a Multi-Gigabit LAN connection.950W redundant power supply for rack-mounted UniFi devices.",
        specs: [
          "Delivers up to 90W of PoE+++",
          "Surge, peak pulse, and overcurrent protection",
          "Contains RJ45 data input, AC cable with earth ground, and PoE+++ output",
          "LED indicator for status monitoring",
          "Supports wall mount, DIN rail and floating mount*"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/mounting-kit"
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
        name: "Enterprise 3.5' HDD, 16 TB",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Enterprise-grade 3.5' SATA hard drive ideal for storage-intensive UniFi camera security and NAS systems.",
        specs: [
          "Workload rating: 550 TB/year",
          "Mean time between failure (MTBF): 2.5 million hours"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/mounting-kit-envr"
      },
    ]
  },


  {
    id: "UPS-2U",
    name: "UniFi UPS 2U",
    category: "Integrations",
    subfilter: "Power Tech",
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
      "UniFi managed 1",
      "44kVA rackmount uninterruptible power supply with 4 backup outlets",
      "4 surge outlets",
      "and a field replaceable battery"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "UniFi UPS 2U" },
          { label: "Model", value: "UPS-2U" },
          { label: "Category", value: "Integrations" },
          { label: "Resolution", value: "4K (8MP)" },
          { label: "Night Vision", value: "25m (82ft) IR" },
          { label: "Zoom", value: "3x Optical" },
          { label: "Audio", value: "Two-way Audio" }
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
        productLink: "/products/mounting-kit-ups-2u"
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
        productLink: "/products/power-cable-ups-2u"
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
    id: "UPS-Tower",
    name: "UniFi UPS Tower",
    category: "Integrations",
    subfilter: "Power Tech",
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
    sku: "UPS-TOWER",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UniFi-UPS-Tower.png",
      "/images/banners/dcs-overview-1.png",
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
          { label: "Product Name", value: "UniFi UPS Tower" },
          { label: "Model", value: "UPS-TOWER" },
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
    id: "USW-Mission-Critical(120W)",
    name: "UPS PoE Switch",
    category: "Integrations",
    subfilter: "Power Tech",
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
    sku: "USW-MISSION-CRITICAL-120W-",

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
      "A switch with an integrated 368Wh lithium-ion battery capable of providing uninterruptible PoE to 8 devices",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "UPS PoE Switch" },
          { label: "Model", value: "USW-MISSION-CRITICAL-120W-" },
          { label: "Category", value: "UniFi Product" },
          { label: "Resolution", value: "4K (8MP)" },
          { label: "Night Vision", value: "25m (82ft) IR" },
          { label: "Zoom", value: "3x Optical" },
          { label: "Audio", value: "Two-way Audio" }
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
        productLink: "/products/mounting-kit-usw-mission-critical(120w)"
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
        productLink: "/products/power-cable-usw-mission-critical(120w)"
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
    id: "USP-RPS",
    name: "Redundant Power",
    category: "Integrations",
    subfilter: "Power Tech",
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
    sku: "USP-RPS",

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
      "950W redundant power supply for rack-mounted UniFi devices",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Redundant Power" },
          { label: "Model", value: "USP-RPS" },
          { label: "Category", value: "UniFi Product" },
          { label: "Resolution", value: "4K (8MP)" },
          { label: "Night Vision", value: "25m (82ft) IR" },
          { label: "Zoom", value: "3x Optical" },
          { label: "Audio", value: "Two-way Audio" }
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
        productLink: "/products/mounting-kit-usp-rps"
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
        productLink: "/products/power-cable-usp-rps"
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
    id: "USP-PDU-Pro",
    name: "Power Distribution Pro",
    category: "Integrations",
    subfilter: "Power Tech",
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
    sku: "USP-PDU-PRO",

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
      "Designed to supply power to an entire rack-mounted UniFi system and remotely manage each connection",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Power Distribution Pro" },
          { label: "Model", value: "USP-PDU-PRO" },
          { label: "Category", value: "UniFi Product" },
          { label: "Resolution", value: "4K (8MP)" },
          { label: "Night Vision", value: "25m (82ft) IR" },
          { label: "Zoom", value: "3x Optical" },
          { label: "Audio", value: "Two-way Audio" }
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
        productLink: "/products/mounting-kit-usp-pdu-pro"
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
        productLink: "/products/power-cable-usp-pdu-pro"
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
    id: "USP-PDU-HD",
    name: "Power Distribution Hi-Density",
    category: "Integrations",
    subfilter: "Power Tech",
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
    sku: "USP-PDU-HD",

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
      "Designed to supply power to an entire rack-mounted UniFi system and remotely manage each connection",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Power Distribution Hi-Density" },
          { label: "Model", value: "USP-PDU-HD" },
          { label: "Category", value: "UniFi Product" },
          { label: "Resolution", value: "4K (8MP)" },
          { label: "Night Vision", value: "25m (82ft) IR" },
          { label: "Zoom", value: "3x Optical" },
          { label: "Audio", value: "Two-way Audio" }
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
        productLink: "/products/mounting-kit-usp-pdu-hd"
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
        productLink: "/products/power-cable-usp-pdu-hd"
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
    id: "U5G-Max",
    name: "UniFi 5G Max",
    category: "Integrations",
    subfilter: "LTE/5G",
    image: "/images/camera.jpg",
    shortDescription:
      "A high-performance 5G (3.4 Gbps) modem for any UniFi deployment. Instantly adopt through any UniFi PoE port, it delivers automatic setup, dual SIM/eSIM, and seamless failover. Certified with AT&T, T-Mobile*, and Verizon**.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],


    // SKU produk
    sku: "U5G-MAX",

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
      "A high-performance 5G (3",
      "4 Gbps) modem for any UniFi deployment",
      "Instantly adopt through any UniFi PoE port",
      "it delivers automatic setup"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "UniFi 5G Max" },
          { label: "Model", value: "U5G-MAX" },
          { label: "Category", value: "Integrations" },
          { label: "Resolution", value: "4K (8MP)" },
          { label: "Night Vision", value: "25m (82ft) IR" },
          { label: "Zoom", value: "3x Optical" },
          { label: "Audio", value: "Two-way Audio" }
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
        productLink: "/products/mounting-kit-u5g-max"
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
        productLink: "/products/power-cable-u5g-max"
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
    id: "U5G-Max-Outdoor",
    name: "UniFi 5G Max Outdoor",
    category: "Integrations",
    subfilter: "LTE/5G",
    image: "/images/camera.jpg",
    shortDescription:
      "A full-performance 5G (3.4 Gbps) modem for UniFi consoles and Cloud Gateways, certified with AT&T, T-Mobile*, and Verizon**, designed for outdoor use with directional antennas, remote SIM***, and dual SIM for seamless failover.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "U5G-MAX-OUTDOOR",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UniFi-5G-Max-Outdoor.png",
      "/images/banners/dcs-overview-1.png",
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
          { label: "Product Name", value: "UniFi 5G Max Outdoor" },
          { label: "Model", value: "U5G-MAX-OUTDOOR" },
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
    id: "UMR-Industrial",
    name: "Mobile Router Industrial",
    category: "Integrations",
    subfilter: "LTE/5G",
    image: "/images/camera.jpg",
    shortDescription:
      "Compact, ruggedized, and carrier unlocked LTE Cat 4 mobile WiFi router designed for indoor/outdoor IoT applications.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UMR-INDUSTRIAL",

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
      "and carrier unlocked LTE Cat 4 mobile WiFi router designed for indoor/outdoor IoT applications",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Mobile Router Industrial" },
          { label: "Model", value: "UMR-INDUSTRIAL" },
          { label: "Category", value: "UniFi Product" },
          { label: "Resolution", value: "4K (8MP)" },
          { label: "Night Vision", value: "25m (82ft) IR" },
          { label: "Zoom", value: "3x Optical" },
          { label: "Audio", value: "Two-way Audio" }
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
        productLink: "/products/mounting-kit-umr-industrial"
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
        productLink: "/products/power-cable-umr-industrial"
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
    id: "UMR-Ultra",
    name: "Mobile Router Ultra",
    category: "Integrations",
    subfilter: "LTE/5G",
    image: "/images/camera.jpg",
    shortDescription:
      "Ultra-compact managed LTE mobile router for IoT applications with integrated LTE, wired WAN, WiFi, automatic failover, and DC power input support.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UMR-ULTRA",

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
      "Ultra-compact managed LTE mobile router for IoT applications with integrated LTE",
      "automatic failover",
      "and DC power input support",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Mobile Router Ultra" },
          { label: "Model", value: "UMR-ULTRA" },
          { label: "Category", value: "UniFi Product" },
          { label: "Resolution", value: "4K (8MP)" },
          { label: "Night Vision", value: "25m (82ft) IR" },
          { label: "Zoom", value: "3x Optical" },
          { label: "Audio", value: "Two-way Audio" }
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
        productLink: "/products/mounting-kit-umr-ultra"
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
        productLink: "/products/power-cable-umr-ultra"
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
    id: "UMR",
    name: "Mobile Router",
    category: "Integrations",
    subfilter: "LTE/5G",
    image: "/images/camera.jpg",
    shortDescription:
      "Managed mobile WiFi router that brings plug-and-play connectivity to any environment. Use the pre-installed AT&T nano-SIM with three data plan options for LTE data, or bring your own AT&T nano-SIM.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UMR",

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
      "Managed mobile WiFi router that brings plug-and-play connectivity to any environment",
      "Use the pre-installed AT&T nano-SIM with three data plan options for LTE data",
      "or bring your own AT&T nano-SIM",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Mobile Router" },
          { label: "Model", value: "UMR" },
          { label: "Category", value: "UniFi Product" },
          { label: "Resolution", value: "4K (8MP)" },
          { label: "Night Vision", value: "25m (82ft) IR" },
          { label: "Zoom", value: "3x Optical" },
          { label: "Audio", value: "Two-way Audio" }
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
        productLink: "/products/mounting-kit-umr"
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
        productLink: "/products/power-cable-umr"
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
    id: "U-LTE",
    name: "LTE Backup",
    category: "Integrations",
    subfilter: "LTE/5G",
    image: "/images/camera.jpg",
    shortDescription:
      "Seamless internet failover for UniFi gateways. Includes an AT&T SIM and data plan for plug-and-play deployment.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "U-LTE",

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
      "Seamless internet failover for UniFi gateways",
      "Includes an AT&T SIM and data plan for plug-and-play deployment",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "LTE Backup" },
          { label: "Model", value: "U-LTE" },
          { label: "Category", value: "UniFi Product" },
          { label: "Resolution", value: "4K (8MP)" },
          { label: "Night Vision", value: "25m (82ft) IR" },
          { label: "Zoom", value: "3x Optical" },
          { label: "Audio", value: "Two-way Audio" }
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
        productLink: "/products/mounting-kit-u-lte"
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
        productLink: "/products/power-cable-u-lte"
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
    id: "U-LTE-Backup Pro",
    name: "LTE Backup Pro",
    category: "Integrations",
    subfilter: "LTE/5G",
    image: "/images/camera.jpg",
    shortDescription:
      "Seamless internet failover for UniFi gateways. Bring your own AT&T nano-SIM for LTE data.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "U-LTE-BACKUP-PRO",

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
      "Seamless internet failover for UniFi gateways",
      "Bring your own AT&T nano-SIM for LTE data",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "LTE Backup Pro" },
          { label: "Model", value: "U-LTE-BACKUP-PRO" },
          { label: "Category", value: "UniFi Product" },
          { label: "Resolution", value: "4K (8MP)" },
          { label: "Night Vision", value: "25m (82ft) IR" },
          { label: "Zoom", value: "3x Optical" },
          { label: "Audio", value: "Two-way Audio" }
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
        productLink: "/products/mounting-kit-u-lte-backup pro"
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
        productLink: "/products/power-cable-u-lte-backup pro"
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
    id: "UTP-G3-Touch-Enterprise",
    name: "G3 Touch Enterprise",
    category: "Integrations",
    subfilter: "Managed VoIP",
    image: "/images/camera.jpg",
    shortDescription:
      "Next-generation premium desktop smartphone for UniFi Talk, featuring a 7' touch display and seamless integration with UniFi applications.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UTP-G3-TOUCH-ENTERPRISE",

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
      "Next-generation premium desktop smartphone for UniFi Talk",
      "featuring a 7' touch display and seamless integration with UniFi applications",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "G3 Touch Enterprise" },
          { label: "Model", value: "UTP-G3-TOUCH-ENTERPRISE" },
          { label: "Category", value: "UniFi Product" },
          { label: "Resolution", value: "4K (8MP)" },
          { label: "Night Vision", value: "25m (82ft) IR" },
          { label: "Zoom", value: "3x Optical" },
          { label: "Audio", value: "Two-way Audio" }
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
        productLink: "/products/mounting-kit-utp-g3-touch-enterprise"
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
        productLink: "/products/power-cable-utp-g3-touch-enterprise"
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
    id: "UTP-G3-Touch-Pro",
    name: "G3 Touch Pro",
    category: "Integrations",
    subfilter: "Managed VoIP",
    image: "/images/camera.jpg",
    shortDescription:
      "Next-generation desktop smartphone for UniFi Talk, featuring a 5' touch display and seamless integration with UniFi applications.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UTP-G3-TOUCH-PRO",

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
      "Next-generation desktop smartphone for UniFi Talk",
      "featuring a 5' touch display and seamless integration with UniFi applications",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "G3 Touch Pro" },
          { label: "Model", value: "UTP-G3-TOUCH-PRO" },
          { label: "Category", value: "UniFi Product" },
          { label: "Resolution", value: "4K (8MP)" },
          { label: "Night Vision", value: "25m (82ft) IR" },
          { label: "Zoom", value: "3x Optical" },
          { label: "Audio", value: "Two-way Audio" }
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
        productLink: "/products/mounting-kit-utp-g3-touch-pro"
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
        productLink: "/products/power-cable-utp-g3-touch-pro"
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
    id: "UTP-G3-Touch-Wall",
    name: "G3 Touch Wall",
    category: "Integrations",
    subfilter: "Managed VoIP",
    image: "/images/camera.jpg",
    shortDescription:
      "Next-generation wall-mountable smartphone for UniFi Talk, featuring a 7' touch display and seamless integration with UniFi applications.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UTP-G3-TOUCH-WALL",

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
      "Next-generation wall-mountable smartphone for UniFi Talk",
      "featuring a 7' touch display and seamless integration with UniFi applications",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "G3 Touch Wall" },
          { label: "Model", value: "UTP-G3-TOUCH-WALL" },
          { label: "Category", value: "UniFi Product" },
          { label: "Resolution", value: "4K (8MP)" },
          { label: "Night Vision", value: "25m (82ft) IR" },
          { label: "Zoom", value: "3x Optical" },
          { label: "Audio", value: "Two-way Audio" }
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
        productLink: "/products/mounting-kit-utp-g3-touch-wall"
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
        productLink: "/products/power-cable-utp-g3-touch-wall"
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
    id: "UTP-TouchMax-B/W",
    name: "G2 Touch Max",
    category: "Integrations",
    subfilter: "",
    image: "/images/camera.jpg",
    shortDescription:
      "Premium desktop smartphone that delivers the ultimate user experience.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UTP-TOUCHMAX-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-G2-Touch-Max.png",
      "/images/banners/dcs-overview-1.png",
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
          { label: "Product Name", value: "G2 Touch Max" },
          { label: "Model", value: "UTP-TOUCHMAX-B/W" },
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
    id: "UTP-Touch-B/W",
    name: "G2 Touch",
    category: "Integrations",
    subfilter: "Managed VoIP",
    image: "/images/camera.jpg",
    shortDescription:
      "Versatile desktop smartphone that eliminates the learning curve.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UTP-TOUCH-B-W",

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
      "Versatile desktop smartphone that eliminates the learning curve",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "G2 Touch" },
          { label: "Model", value: "UTP-TOUCH-B-W" },
          { label: "Category", value: "UniFi Product" },
          { label: "Resolution", value: "4K (8MP)" },
          { label: "Night Vision", value: "25m (82ft) IR" },
          { label: "Zoom", value: "3x Optical" },
          { label: "Audio", value: "Two-way Audio" }
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
        productLink: "/products/mounting-kit-utp-touch-b/w"
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
        productLink: "/products/power-cable-utp-touch-b/w"
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
    id: "UT-G3-Handset",
    name: "G3 Wireless Handset",
    category: "Integrations",
    subfilter: "Managed VoIP",
    image: "/images/camera.jpg",
    shortDescription:
      "Wireless handset which supports clear, high-quality audio for G3 Touch Phones.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UT-G3-HANDSET",

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
      "Wireless handset which supports clear",
      "high-quality audio for G3 Touch Phones",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "G3 Wireless Handset" },
          { label: "Model", value: "UT-G3-HANDSET" },
          { label: "Category", value: "UniFi Product" },
          { label: "Resolution", value: "4K (8MP)" },
          { label: "Night Vision", value: "25m (82ft) IR" },
          { label: "Zoom", value: "3x Optical" },
          { label: "Audio", value: "Two-way Audio" }
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
        productLink: "/products/mounting-kit-ut-g3-handset"
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
        productLink: "/products/power-cable-ut-g3-handset"
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
    id: "UT-ATA",
    name: "Analog Telephone Adapter",
    category: "Integrations",
    subfilter: "Managed VoIP",
    image: "/images/camera.jpg",
    shortDescription:
      "Easy-to-deploy adapter for managing analog telephones and fax machines with UniFi Talk.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UT-ATA",

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
      "Easy-to-deploy adapter for managing analog telephones and fax machines with UniFi Talk",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Analog Telephone Adapter" },
          { label: "Model", value: "UT-ATA" },
          { label: "Category", value: "UniFi Product" },
          { label: "Resolution", value: "4K (8MP)" },
          { label: "Night Vision", value: "25m (82ft) IR" },
          { label: "Zoom", value: "3x Optical" },
          { label: "Audio", value: "Two-way Audio" }
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
        productLink: "/products/mounting-kit-ut-ata"
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
        productLink: "/products/power-cable-ut-ata"
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
    id: "UC-EV-Station-Pro",
    name: "EV Station Pro",
    category: "Integrations",
    subfilter: "Premium IoT",
    image: "/images/camera.jpg",
    shortDescription:
      "Weatherproof, 11 kW Level 2 electric vehicle charging station with an ultra-bright 10.1' touch display, flexible access control, and payment terminal accessory support.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],


    // SKU produk
    sku: "UC-EV-STATION-PRO",

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
      "Weatherproof",
      "11 kW Level 2 electric vehicle charging station with an ultra-bright 10",
      "1' touch display",
      "flexible access control"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "EV Station Pro" },
          { label: "Model", value: "UC-EV-STATION-PRO" },
          { label: "Category", value: "Integrations" },
          { label: "Resolution", value: "4K (8MP)" },
          { label: "Night Vision", value: "25m (82ft) IR" },
          { label: "Zoom", value: "3x Optical" },
          { label: "Audio", value: "Two-way Audio" }
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
        productLink: "/products/mounting-kit-uc-ev-station-pro"
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
        productLink: "/products/power-cable-uc-ev-station-pro"
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
    id: "UC-EV-Station-Lite",
    name: "EV Station Lite",
    category: "Integrations",
    subfilter: "Premium IoT",
    image: "/images/camera.jpg",
    shortDescription:
      "Weatherproof, 11 kW Level 2 electric vehicle charging station with flexible access control designed for scalable deployment.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UC-EV-STATION-LITE",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-EV-Station-Lite.png",
      "/images/banners/dcs-overview-1.png",
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
          { label: "Product Name", value: "EV Station Lite" },
          { label: "Model", value: "UC-EV-STATION-LITE" },
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
    id: "UPL-Amp-B/W",
    name: "PowerAmp",
    category: "Integrations",
    subfilter: "Premium IoT",
    image: "/images/camera.jpg",
    shortDescription:
      "Premium speaker amplifier designed for high-fidelity multi-zone audio streaming and immersive spatial sound experiences.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UPL-AMP-B-W",

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
      "Premium speaker amplifier designed for high-fidelity multi-zone audio streaming and immersive spatial sound experiences",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "PowerAmp" },
          { label: "Model", value: "UPL-AMP-B-W" },
          { label: "Category", value: "UniFi Product" },
          { label: "Resolution", value: "4K (8MP)" },
          { label: "Night Vision", value: "25m (82ft) IR" },
          { label: "Zoom", value: "3x Optical" },
          { label: "Audio", value: "Two-way Audio" }
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
        productLink: "/products/mounting-kit-upl-amp-b/w"
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
        productLink: "/products/power-cable-upl-amp-b/w"
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
    id: "UPL-Port-B/W",
    name: "PoE Audio Port",
    category: "Integrations",
    subfilter: "Premium IoT",
    image: "/images/camera.jpg",
    shortDescription:
      "A digital audio streamer with an ultra-compact, versatile design and an intuitive control system, supporting multiple music streaming services and scalable multi-zone installations .",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UPL-PORT-B-W",

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
      "A digital audio streamer with an ultra-compact",
      "versatile design and an intuitive control system",
      "supporting multiple music streaming services and scalable multi-zone installations",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "PoE Audio Port" },
          { label: "Model", value: "UPL-PORT-B-W" },
          { label: "Category", value: "UniFi Product" },
          { label: "Resolution", value: "4K (8MP)" },
          { label: "Night Vision", value: "25m (82ft) IR" },
          { label: "Zoom", value: "3x Optical" },
          { label: "Audio", value: "Two-way Audio" }
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
        productLink: "/products/mounting-kit-upl-port-b/w"
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
        productLink: "/products/power-cable-upl-port-b/w"
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
    id: "UC-Cast-Pro",
    name: "Display Cast Pro",
    category: "Integrations",
    subfilter: "Premium IoT",
    image: "/images/camera.jpg",
    shortDescription:
      "Managed digital signage player for HMI display with media content playback, web mode, and USB-C peripheral support.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UC-CAST-PRO",

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
      "Managed digital signage player for HMI display with media content playback",
      "and USB-C peripheral support",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Display Cast Pro" },
          { label: "Model", value: "UC-CAST-PRO" },
          { label: "Category", value: "UniFi Product" },
          { label: "Resolution", value: "4K (8MP)" },
          { label: "Night Vision", value: "25m (82ft) IR" },
          { label: "Zoom", value: "3x Optical" },
          { label: "Audio", value: "Two-way Audio" }
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
        productLink: "/products/mounting-kit-uc-cast-pro"
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
        productLink: "/products/power-cable-uc-cast-pro"
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
    id: "UC-Cast-Lite",
    name: "Display Cast Lite",
    category: "Integrations",
    subfilter: "Premium IoT",
    image: "/images/camera.jpg",
    shortDescription:
      "Digital signage player designed for media playback on HDMI displays.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UC-CAST-LITE",

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
      "Digital signage player designed for media playback on HDMI displays",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Display Cast Lite" },
          { label: "Model", value: "UC-CAST-LITE" },
          { label: "Category", value: "UniFi Product" },
          { label: "Resolution", value: "4K (8MP)" },
          { label: "Night Vision", value: "25m (82ft) IR" },
          { label: "Zoom", value: "3x Optical" },
          { label: "Audio", value: "Two-way Audio" }
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
        productLink: "/products/mounting-kit-uc-cast-lite"
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
        productLink: "/products/power-cable-uc-cast-lite"
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
