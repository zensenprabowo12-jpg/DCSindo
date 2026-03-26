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
          { label: "NDAA Compliant", value: "✓" },
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
          { label: "NDAA Compliant", value: "✓" },
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
          { label: "NDAA Compliant", value: "✓" },
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
          { label: "NDAA Compliant", value: "✓" },
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
          { label: "NDAA Compliant", value: "✓" },
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

  // Produk Pertama dari Integrations, SF Power Tech
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
      "Weatherproofing IP20",
      "Enclosure Material Galvanized steel",
      "Rack mount (2U)",
      "Note. For Graceful Shutdown functionality, UniFi OS version 4.4.3 or higher is required."
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
          { label: "Weatherproofing", value: "IP20" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Management", value: "Ethernet" },
          { label: "Networking Interface", value: "(1) 100/10 MbE port for network connection (2) GbE ports for surge in/out" },
          { label: "Power", value: "(1) OVC II AC in: NEMA 5‑15P, 1.8 m (5.9 ft) non-removable power cord (4) Battery backup/surge protection: NEMA 5‑15R (4) Surge protection: NEMA 5‑15R" },
          { label: "Capacity", value: "1,440VA/1,000W" },
          { label: "Type", value: "Line interactive" },
          { label: "Input Volatge Range", value: "89–145V AC" },
          { label: "Power Method", value: "(1) TN system, 120V AC, 12A Max., 50/60 Hz" },
          { label: "Nominal Input Voltage", value: "120V AC" },
          { label: "Output Volatge", value: "120V AC" },
          { label: "Frequency Range", value: "AC mode: 50/60 Hz ±5 Hz (Auto sensing) Battery mode: 60 Hz ±1 Hz" },
          { label: "AC Voltage Regulation", value: "±10% (Battery mode)" },
          { label: "Transfer Time", value: "6 ms typical; 10 ms max. (Battery mode)" },
          { label: "Wave Form", value: "Simulated sine wave (Battery mode)" },
          { label: "Battery Type", value: "(2) Lead Acid 12V, 9Ah" },
          { label: "Runtime", value: "Full load: 2.3 min Half load: 8 min" },
          { label: "Battery Charging Time", value: "6-8 hours recovery to 90% capacity" },
          { label: "Overload at On-Line Mode", value: "110% 5 min go to fault 120% go to fault immediately" },
          { label: "Overload at Battery Mode", value: "110% shutdown in 5 sec 120% shutdown immediately" },
          { label: "Short Circuit Protection at On-Line Mode", value: "Breaker, 250V AC, 15A" },
          { label: "Output Short-Circuit Current", value: "Ipeak 348.0A Irms 115.1A" },
          { label: "Buttons", value: "(1) Power (1) Factory reset" },
          { label: "LEDs Status", value: "Off: device not turned on Flashing white: initializing / factory default Steady white: waiting for adoption  Steady blue: device adoption and working Flashing blue: battery mode Alternating white/blue: firmware upgrading Rapid flashing blue: locate Steady red: warning Flashing red: low battery" },
          { label: "Operating Attitude", value: "3,000 m (1.9 mi)" },
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

  // Produk kedua dari Integrations, SF Power Tech
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
      "Note. For Graceful Shutdown functionality, UniFi OS version 4.4.3 or higher is required."
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
          { label: "Weatherproofing", value: "IP20" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Management", value: "Ethernet" },
          { label: "Networking Interface", value: "(1) 100/10 MbE port for network connection (2) GbE ports for surge in/out" },
          { label: "Power", value: "(1) OVC II AC in: NEMA 5‑15P, 1.8 m (5.9 ft) non-removable power cord (5) Battery backup/surge protection: NEMA 5‑15R (5) Surge protection: NEMA 5‑15R" },
          { label: "Capacity", value: "1,000VA/600W" },
          { label: "Type", value: "Line interactive" },
          { label: "Input Volatge Range", value: "89–145V AC" },
          { label: "Power Method", value: "(1) TN system, 120V AC, 12A Max., 50/60 Hz" },
          { label: "Nominal Input Voltage", value: "120V AC" },
          { label: "Output Volatge", value: "120V AC" },
          { label: "Frequency Range", value: "AC mode: 50/60 Hz ±5 Hz (Auto sensing) Battery mode: 60 Hz ±1 Hz" },
          { label: "AC Voltage Regulation", value: "±10% (Battery mode)" },
          { label: "Transfer Time", value: "6 ms typical; 10 ms max. (Battery mode)" },
          { label: "Wave Form", value: "Simulated sine wave (Battery mode)" },
          { label: "Battery Type", value: "(1) Lead Acid 12V, 9Ah" },
          { label: "Runtime", value: "Full load: 2 min Half load: 7 min" },
          { label: "Battery Charging Time", value: "6-8 hours recovery to 90% capacity" },
          { label: "Overload at On-Line Mode", value: "110% 5 min go to fault 120% go to fault immediately" },
          { label: "Overload at Battery Mode", value: "110% shutdown in 5 sec 120% shutdown immediately" },
          { label: "Short Circuit Protection at On-Line Mode", value: "Breaker, 250V AC, 15A" },
          { label: "Output Short-Circuit Current", value: "Ipeak 334.8A  Irms 68.2A" },
          { label: "Buttons", value: "(1) Power (1) Factory reset" },
          { label: "LEDs Status", value: " Off: device not turned on Flashing white: initializing / factory default Steady white: waiting for adoption Steady blue: device adoption and working Flashing blue: battery mode Alternating white/blue: firmware upgrading Rapid flashing blue: locate Steady red: warning Flashing red: low battery" },
          { label: "LEDs Battery Indicator", value: "All off: 0% (1) Steady blue: battery 1–19% (2) Steady blue: battery 20–39% (3) Steady blue: battery 40–59% (4) Steady blue: battery 60–79% (5) Steady blue: battery 80–100%" },
          { label: "Operating Attitude", value: "3,000 m (1.9 mi)" },
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

  // Produk Ketiga dari Integrations, SF Power Tech
  {
    id: "USW-Mission-Critical (120W)",
    name: "UPS PoE Switch ",
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
          { label: "Dimensions", value: "442 x 480 x 44 mm (17.4 x 18.9 x 1.7')" },
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
    ]
  },

  // Produk Keempat dari Integrations, SF Power Tech
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

  // Produk Kelima dari Integrations, SF Power Tech
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

  // Produk Keenam dari Integrations, SF Power Tech
  {
    id: "USP-PDU-HD",
    name: "Power Distribution Hi-Density",
    category: "Integrations",
    subfilter: "Power Tech",
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

  // Produk Pertama dari Integrations, SF LTE/5G
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
          { label: "Dimensions", value: "180 x 109 x 33.8 mm (7.1 x 4.3 x 1.3')" },
          { label: "Networking Interface", value: "(1) 2.5 GbE RJ45 port 5G NR and LTE radio" },
          { label: "SIM", value: "(1) Nano SIM (1) Nano-SIM or eSIM" },
          { label: "Coverage Area", value: "465 m² (5,000 ft²)" },
          { label: "PoE Interface", value: "(1) PoE input" },
          { label: "Mounting", value: "Desktop stand, wall, window mount (Included)" },
          { label: "Tamper Resistance", value: "IK04" }
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "Device: 410 g (14.5 oz) Stand: 215 g (7.6 oz) Wall mount: 7.6 g (0.3 oz) Window mount: 20 g (0.7 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Polycarbonate, silicone rubber" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Management", value: "Ethernet" },
          { label: "5G NR Category", value: "5G NR" },
          { label: "5G NR Frequency Bands", value: "n1, n2, n3, n5, n7, n8, n12, n13, n14, n18, n20, n25, n26, n28, n29, n30, n38, n40, n41, n48, n66, n71, n75, n76, n77, n78, n79" },
          { label: "5G NR Max. TX Power", value: "HPUE power class 2: 26 dBm" },
          { label: "4G LTE Frequency Bands", value: "B1, B2, B3, B4, B5, B7, B8, B12, B13, B14, B17, B18, B19, B20, B25, B26, B28, B29, B30, B32, B34, B38, B39, B40, B41, B42, B43, B46, B48, B66, B71" },
          { label: "4G LTE Max. TX Power", value: "HPUE power class 2: 25 dBm" },
          { label: "3G UMTS Frequency Bands", value: "B1, B2, B4, B5, B8, B19" },
          { label: "Peak Data Speed 5G NSA", value: "Downlink 3.4 Gbps  Uplink 560 Mbps" },
          { label: "Peak Data Speed 5G SA", value: "Downlink 1.8 Gbps Uplink 650 Mbps" },
          { label: "Peak Data Speed 4G LTE", value: "Downlink 1.6 Gbps Uplink 210 Mbps" },
          { label: "Antennas Type", value: "(4) Embedded cellular antennas" },
          { label: "Max. Power Consumption", value: "14.5W" },
          { label: "Power Method", value: "PoE" },
          { label: "Display", value: "1.3' touchscreen" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "0 to 40 °C (32 to 104 °F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE, PTCRB, GCF, AT&T, T-Mobile, Verizon" },
        ]
      },
      {
        title: " Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 10.0.162 and later" },
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
        name: "PoE Adapter (15W)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "An adapter that can power UniFi PoE devices, reduce dependency on PoE switch power, and provide a Gigabit LAN connection.",
        specs: [
          "Delivers up to 15W of PoE",
          "Surge, peak pulse, and overcurrent protection",
          "Contains RJ45 data input, AC cable with earth ground, and PoE output",
          "LED indicator for status monitoring"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/mounting-kit-u5g-max"
      },
      {
        id: 2,
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

  // Produk Kedua dari Integrations, SF LTE/5G
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
      "Buttons (1) Factory reset",
      "Power Method PoE",
      "Management Ethernet",
      "***Remote SIM coming in a future update"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Device: 220 x 165 x 66.9 mm (8.7 x 6.5 x 2.6') With mount: 220 x 165 x 122 mm (8.7 x 6.5 x 4.8')" },
          { label: "Networking Interface", value: "(1) 2.5 GbE RJ45 port 5G NR and LTE radio" },
          { label: "SIM", value: "(1) Nano SIM (1) Nano-SIM or eSIM" },
          { label: "PoE Interface", value: "(1) PoE input" },
          { label: "Mounting", value: "Pole mount, wall mount (Included)" },
          { label: "Weatherproofing", value: "IPX6 IP67 (With cable-gland door kit)" }
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "Device: 1.2 kg (2.6 lb) Mount: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Aluminum-alloy, UV-stabilized polycarbonate" },
          { label: "Mount Material", value: "UV-stabilized polycarbonate" },
          { label: "Pole Mount Diameter", value: "1–2.5' (25–63.5 mm) on pipe outer diameter" },
          { label: "Wind Loading", value: "91N at 200 km/h (20.45 lbf at 125 mph)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Management", value: "Ethernet" },
          { label: "5G NR Category", value: "5G NR" },
          { label: "5G NR Frequency Bands", value: "n1, n2, n3, n5, n7, n8, n12, n13, n14, n18, n20, n25, n26, n28, n29, n30, n38, n40, n41, n48, n66, n71, n75, n76, n77, n78, n79" },
          { label: "5G NR Max. TX Power", value: "HPUE power class 2: 26 dBm" },
          { label: "4G LTE Frequency Bands", value: "B1, B2, B3, B4, B5, B7, B8, B12, B13, B14, B17, B18, B19, B20, B25, B26, B28, B29, B30, B32, B34, B38, B39, B40, B41, B42, B43, B46, B48, B66, B71" },
          { label: "4G LTE Max. TX Power", value: "HPUE power class 2: 25 dBm" },
          { label: "3G UMTS Frequency Bands", value: "B1, B2, B4, B5, B8, B19" },
          { label: "Peak Data Speed 5G NSA", value: "Downlink 3.4 Gbps  Uplink 560 Mbps" },
          { label: "Peak Data Speed 5G SA", value: "Downlink 1.8 Gbps Uplink 650 Mbps" },
          { label: "Peak Data Speed 4G LTE", value: "Downlink 1.6 Gbps Uplink 210 Mbps" },
          { label: "Antennas Type", value: "(6) Embedded cellular antennas, including (2) high-gain for downlink: peak 9 dBi, 85°x85°" },
          { label: "Max. Power Consumption", value: "14.5W" },
          { label: "Power Method", value: "PoE" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "LEDs", value: "✓" },
          { label: "Ambient Operating Temperature", value: "-40 to 65 °C (-40 to 149 °F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE, PTCRB, GCF, AT&T, T-Mobile, Verizon" },
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
        name: "PoE Adapter (15W)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "An adapter that can power UniFi PoE devices, reduce dependency on PoE switch power, and provide a Gigabit LAN connection.",
        specs: [
          "Delivers up to 15W of PoE",
          "Surge, peak pulse, and overcurrent protection",
          "Contains RJ45 data input, AC cable with earth ground, and PoE output",
          "LED indicator for status monitoring"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/mounting-kit-u5g-max"
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
    ]
  },

  // Produk Ketiga dari Integrations, SF LTE/5G
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
          { label: "Dimensions", value: "Without antennas and outdoor cover: 114.5 x 93.6 x 32 mm (4.5 x 3.7 x 1.3') With antennas: 213 x 93.6 x 32 mm (83 x 3.7 x 1.3') With antennas and outdoor cover: 217 x 94 x 32 mm (8.5 x 3.7 x 1.3')" },
          { label: "Networking Interface", value: "(2) GbE RJ45 ports, LTE Cat 4 radio, WiFi 4" },
          { label: "SIM", value: "Nano SIM" },
          { label: "LTE Bands", value: "B2, B4, B5, B12, B13, B14, B25, B26, B66, B71" },
          { label: "PoE Interface", value: "(1) PoE input (1) PoE output (Max. 10W, requires PoE+ switch)" },
          { label: "Mounting", value: "DIN rail, Wall, Pole (Mounts Included)" },
          { label: "Weatherproofing", value: "IP66" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "Device: 360 g (12.7 oz) Device with outdoor cover: 395 g (13.9 oz) DIN rail/wall mounts: 25 g (0.9 oz)" },
          { label: "Enclosure", value: "Polycarbonate, aluminum" },
          { label: "Mount Material", value: "Wall, Pole, DIN Rail Mount: Polycarbonate" },
          { label: "Pole Mount Diameter", value: "1–2' (25–50 mm) on pipe outer diameter" },
          { label: "Wind Loading", value: "38.8 N at 200 km/h (8.7 lbf at 125 mph)" },
        ]
      },
      {
        title: "Features",
        items: [
          { label: "WAN Priority & Fallback", value: "✓" },
          { label: "WAN Cellular", value: "✓" },
          { label: "WAN WiFi", value: "✓" },
          { label: "WAN Ethernet", value: "✓" },

          { label: "LTE Passthrough mode", value: "✓" },
          { label: "Ethernet Bridge Mode", value: "✓" },

          { label: "VPN Client OpenVPN", value: "✓" },
          { label: "VPN Client WireGuard", value: "✓" },

          { label: "Site-to-Site VPN IPsec", value: "✓" },
          { label: "Site-to-Site VPN WireGuard", value: "✓" },

          { label: "WiFi Standard", value: "WiFi 4" },
          { label: "Port Forwarding", value: "✓" },
          { label: "Firewall", value: "✓" },
        ]
      },
      {
        title: "Networking",
        items: [
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 300 Mbps (MCS0 - MCS7, HT 20/40)" },
          { label: "Supported Data Rates 802.11g", value: "6, 9, 12, 18, 24, 36, 48, 54 Mbps" },
          { label: "Supported Data Rates 802.11b", value: "1, 2, 5.5, 11 Mbps" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Management", value: "Ethernet WiFi" },
          { label: "LTE Throughput Speed", value: "Download 150 Mbps / Upload 50 Mbps" },
          { label: "GPS", value: "✓" },
          { label: "Antennas Ports", value: "(1) Mobile 1: SMA female (1Tx/1Rx) (1) Mobile 2: SMA female (1Rx) (1) GPS: SMA female (2) WiFi: RP-SMA female" },
          { label: "Antennas Type", value: "(2) External LTE antenna (2) External WiFi (1) External GPS" },
          { label: "Max. TX Power", value: "22 dBm" },
          { label: "WiFi MMO", value: "2 x 2" },
          { label: "Max. Power Consumption", value: "12.5W" },
          { label: "Power Method", value: "PoE+ (48–54V DC) USB Type-C (5V DC) 4-pin ATX DC (9–30V DC)" },
          { label: "Power Supply", value: "USB Type-C, 5V DC, 3A (Adapter included)" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-40 to 70° C (-40 to 158° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, PTCRB, GCF, AT&T, T-Mobile, Verizon, Wi-Fi Alliance®" },
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

  // Produk Keempat dari Integrations, SF LTE/5G
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
      "Max. TX Power 17 dBm",
      "SIM Nano SIM",
      "Power adapter and cable not included; please use a 10W USB-C or ATX power supply."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "Without antennas: 84 x 82 x 26 mm (3.3 x 3.2 x 1') With antennas: 193.5 x 82 x 26 mm (7.6 x 3.2 x 1')" },
          { label: "Networking Interface", value: "(2) FE RJ45 ports, LTE Cat 4 radio, WiFi 4" },
          { label: "SIM", value: "Nano SIM" },
          { label: "LTE Bands", value: "B2, B4, B5, B12, B13, B14, B25, B26, B66, B71" },
          { label: "Mounting", value: "DIN rail, Wall, Pole (Mounts Included)" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "Device: 200 g (7.1 oz) DIN rail/wall mounts: 20 g (0.7 oz)" },
          { label: "Enclosure", value: "Polycarbonate" },
          { label: "Mount Material", value: "Wall Mount: Polycarbonate DIN Rail Mount: Steel" },
        ]
      },
      {
        title: "Features",
        items: [
          { label: "WAN Priority & Fallback", value: "✓" },
          { label: "WAN Cellular", value: "✓" },
          { label: "WAN WiFi", value: "✓" },
          { label: "WAN Ethernet", value: "✓" },

          { label: "LTE Passthrough mode", value: "✓" },
          { label: "Ethernet Bridge Mode", value: "✓" },

          { label: "VPN Client OpenVPN", value: "✓" },
          { label: "VPN Client WireGuard", value: "✓" },

          { label: "Site-to-Site VPN IPsec", value: "✓" },
          { label: "Site-to-Site VPN WireGuard", value: "✓" },

          { label: "WiFi Standard", value: "WiFi 4" },
          { label: "Port Forwarding", value: "✓" },
          { label: "Firewall", value: "✓" },
          { label: "Static Routes", value: "✓" },
        ]
      },
      {
        title: "Networking",
        items: [
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 150 Mbps (MCS0 - MCS7, HT 20/40)" },
          { label: "Supported Data Rates 802.11g", value: "6, 9, 12, 18, 24, 36, 48, 54 Mbps" },
          { label: "Supported Data Rates 802.11b", value: "1, 2, 5.5, 11 Mbps" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Management", value: "Ethernet WiFi" },
          { label: "LTE Throughput Speed", value: "Download 150 Mbps / Upload 50 Mbps" },
          { label: "Antennas Ports", value: "(1) Mobile 1: SMA female (1Rx) (1) Mobile 2: SMA female (1Tx/1Rx) (1) WiFi: RP-SMA female" },
          { label: "Antennas Type", value: "(2) External LTE antenna (1) External WiFi" },
          { label: "Max. TX Power", value: "17 dBm" },
          { label: "WiFi MMO", value: "1 x 1" },
          { label: "Max. Power Consumption", value: "5.7W" },
          { label: "Power Method", value: "USB Type-C (5V DC/2A) 4-pin ATX DC (9—30V DC)" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-30 to 70° C (-22 to 158° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, PTCRB, GCF, AT&T, T-Mobile, Verizon, Wi-Fi Alliance®" },
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

  // Produk Kelima dari Integrations, SF LTE/5G
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
      "Max. TX Power 19 dBm",
      "WiFi Standard WiFi 4",
      "SIM Pre-installed AT&T nano SIM",
      "Note. Works with the AT&T network in the United States. LTE data plan options with the pre-installed AT&T SIM are $15/month for 1 GB, $30/month for 5 GB, or $70/month for 20 GB of data, plus $15 for each additional GB. Bring your own AT&T SIM with device version 1.5.0 and later; update out-of-the-box using the pre-installed SIM's free trial or with wired WAN."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "190 x 89.8 x 28.8 mm (7.4 x 3.5 x 1.1')" },
          { label: "Networking Interface", value: "(2) GbE RJ45 ports, LTE Cat 4 radio, WiFi 4" },
          { label: "SIM", value: "Pre-installed AT&T nano SIM" },
          { label: "LTE Bands", value: "B2, B4, B5, B12, B14, B66" },
          { label: "PoE Interface", value: "(1) PoE input (1) PoE output (Max. 10W, requires PoE+ switch)" },
          { label: "Mounting", value: "DIN rail, Wall, Pole (Mounts Included)" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "Without mount: 257 g (9.1 oz) With mount: 303 g (10.7 oz)" },
          { label: "Enclosure", value: "Polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Polycarbonate" },
        ]
      },
      {
        title: "Features",
        items: [
          { label: "WAN Priority & Fallback", value: "✓" },
          { label: "WAN Cellular", value: "✓" },
          { label: "WAN Ethernet", value: "✓" },

          { label: "LTE Passthrough mode", value: "✓" },
          { label: "Ethernet Bridge Mode", value: "✓" },

          { label: "VPN Client OpenVPN", value: "✓" },
          { label: "VPN Client WireGuard", value: "✓" },

          { label: "Site-to-Site VPN IPsec", value: "✓" },
          { label: "Site-to-Site VPN WireGuard", value: "✓" },

          { label: "WiFi Standard", value: "WiFi 4" },
          { label: "Port Forwarding", value: "✓" },
          { label: "Firewall", value: "✓" },
          { label: "Static Routes", value: "✓" },
        ]
      },
      {
        title: "Networking",
        items: [
          { label: "Supported Data Rates 802.11n", value: "6.5 Mbps to 150 Mbps (MCS0 - MCS7, HT 20/40)" },
          { label: "Supported Data Rates 802.11g", value: "6, 9, 12, 18, 24, 36, 48, 54 Mbps" },
          { label: "Supported Data Rates 802.11b", value: "1, 2, 5.5, 11 Mbps" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Management", value: "Ethernet WiFi" },
          { label: "LTE Throughput Speed", value: "Download 150 Mbps / Upload 50 Mbps" },
          { label: "GPS", value: "✓" },
          { label: "Antennas Ports", value: "(1) External LTE antenna (TS9 male)" },
          { label: "Antennas Type", value: "(1) External LTE antenna (TS9 male) (1) Internal WiFi (1) Internal GPS" },
          { label: "Max. TX Power", value: "19 dBm" },
          { label: "WiFi MMO", value: "1 x 1" },
          { label: "Max. Power Consumption", value: "9W" },
          { label: "Power Method", value: "PoE+ (48-54V DC) USB Type-C (5V DC, 3A) 4-pin ATX DC (9V DC, 1A)" },
          { label: "Power Suplly", value: "USB Type-C, 5V DC, 3A (Adapter included)" },
          { label: "Display", value: "1.3' touchscreen" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-20 to 45° C (-4 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, PTCRB, AT&T" },
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

  // Produk Keenam dari Integrations, SF LTE/5G
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
      "MIMO	2 x 2 LTE Category 4",
      "Operator	AT&T network* US only.",
      "Enclosure material	Polycarbonate",
      "SIM nano-SIM* *Data-only."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "66 x 202 x 32 mm (2.6 x 8 x 1.3')" },
          { label: "Weight", value: "Without stand: 223 g (7.9 oz) With stand: 336 g (11.9 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "	Stand: aluminium Wall mount: polycarbonate" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Processor", value: "74 Kc MIPS processor at 775 MHz" },
          { label: "Memory", value: "	128 MB DDR2" },
          { label: "Networking Interface", value: "(1) PoE in (PoE output not used) (1) PoE passthrough output (Requires a PoE+ switch)" },
          { label: "Management Interface", value: "Ethernet" },
          { label: "PoE Interface", value: "(1) PoE in (PoE output not used) (1) PoE passthrough output (Requires a PoE+ switch)" },
          { label: "SIM", value: "	nano-SIM* *Data-only." },
          { label: "LTE Bands", value: "B2, B4, B5, B12, B14, B66" },
          { label: "Operator", value: "	AT&T network* US only." },
          { label: "Power Suplly", value: "	UniFi PoE switch 48V, 0.5A PoE adapter" },
          { label: "Supported voltage range", value: "44—57V DC" },
          { label: "Max. Power Consumption", value: "Excluding PoE passthrough output: 8.5W" },
          { label: "Max. PoE passthrough wattage per port", value: "15.4W* *Requires a PoE+ switch" },
          { label: "MIMO", value: "2 x 2 LTE Category 4" },
          { label: "Throughput speeds*", value: "	Download 150 Mbps / Upload 50 Mbps * Speed and coverage depend on location and network performance." },
          { label: "Antenna", value: "	(2) Internal LTE antennas (1) Female RP-SMA connector for an external antenna (optional)* *The maximum antenna gain must not exceed 6 dBi to comply with regulation." },
          { label: "External antenna port*", value: "	Female RP-SMA connector *Please use male RP-SMA antennas to match the U LTE Backup Pro." },
          { label: "LCM Display", value: "	1.54' screen" },
          { label: "Button", value: "Factory reset" },
          { label: "Mounting", value: "Wall mount or foot stand (Included)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (-14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "Certifications", value: "FCC, IC" },
          { label: "NDAA Compliant", value: "Yes" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management application", value: "UniFi Network: Version 6.5.55 and later" },
        ]
      }
    ],
  },

  // Produk Ketujuh dari Integrations, SF LTE/5G
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
        title: "Mechanical",
        items: [
          { label: "Dimensions", value: "66 x 202.12 x 32.2 mm (2.6 x 8 x 1.3')" },
          { label: "Weight", value: "	Without mount: 200 g (7.1 oz) With mount: 316 g (11.2 oz)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Networking Interface", value: "	(2) GbE RJ45 ports LTE category 4 radio" },
          { label: "Management Interface", value: "	Ethernet Bluetooth" },
          { label: "SIM", value: "nano-SIM" },
          { label: "LTE Bands", value: "	B2, B4, B5, B12" },
          { label: "MIMO", value: "	2 x 2 LTE Category 4" },
          { label: "Operating Frequency", value: "2400 ‐ 2483.5 MHz" },
          { label: "Power Method", value: "	PoE+ (Pairs 1, 2+; 3, 6‐; Pairs 4, 5+; 7, 8‐)" },
          { label: "Max. Power Consumption", value: "	8.5W" },
          { label: "Power Suplly", value: "UniFi PoE Switch" },
          { label: "Supported voltage range", value: "44–57V DC" },
          { label: "external Antenna", value: "(1) LTE antenna with RP-SMA female connector" },
          { label: "LCM Display", value: "1.54' screen" },
          { label: "Mounting", value: "Wall mount or foot stand (Included)" },
          { label: "Ambient Operating Temperature", value: "‐10 to 50° C (14 to 122° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, PTCRB, AT&T" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management application", value: "UniFi Network: Version 7.2.85 and later" },
        ]
      }
    ],
  },

  // Produk Pertama dari Integrations, SF Managed VolP
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
      "Processor Octa-core ARM® Cortex®-A53",
      "Power Method USB type-C PoE+",
      "Enclosure Material Polycarbonate, aluminum alloy (base)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "256.5 x 139.5 x 185.3 mm (10.1 x 5.5 x 7.3')" },
          { label: "UniFi Application Suite Talk", value: "✓" },
          { label: "UniFi Application Suite Relay", value: "✓" },
          { label: "Mounting", value: "Desktop" },
          { label: "Integrated Camera", value: "✓" },
          { label: "Touch Screen Technology", value: "Multi-Touch" },
          { label: "Bluetooth", value: "✓" },
          { label: "Available Colors", value: "Black" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "1.5 kg (3.3 lb)" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy (base)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Connectivity", value: "(2) GbE RJ45 ports 802.11 a/b/g/n/ac WiFi Bluetooth® 4.2 (General use) Bluetooth® 5.2 (Ubiquiti G3 Wireless Handset only) NFC support" },
          { label: "Power Method", value: "USB type-C PoE+" },
          { label: "Max. Power Consumption", value: "11W" },
          { label: "Processor", value: "Octa-core ARM® Cortex®-A53" },
          { label: "Memory", value: "Storage: 32 GB RAM: 2 GB" },
          { label: "Camera", value: "2592 x 1944, 5MP (Embedded privacy shutter)" },
          { label: "Display Screen Surface Treatments", value: "Anti-Glare Coating" },
          { label: "Display Screen Surface Size", value: "178 mm (7') diagonal" },
          { label: "Display Screen Surface Resolution", value: "1280 x 800 HD" },
          { label: "Audio Hands-Free Microphone", value: "Dual omnidirectional MEMS microphone" },
          { label: "Audio Hands-Free Hands-Free Speaker", value: "Dual 3W speaker" },
          { label: "Audio Hands-Free Handset Microphone", value: "Omnidirectional electret condenser microphone" },
          { label: "Audio Hands-Free Handset Dynamic Receiver", value: "Standard wideband-capable audio" },
          { label: "Buttons", value: "(1) Mute Button" },
          { label: "Headseat Support", value: "3.5 mm (0.14') audio jack" },
          { label: "LED", value: "R/G/B/W" },
          { label: "NFC Frequency", value: "13.56 MH" },
          { label: "NFC Read Range", value: "< 10 mm" },
          { label: "NFC Technology", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ]
      },
    ],

    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
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
    ]
  },

  // Produk Kedua dari Integrations, SF Managed VolP
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
      "Power Method PoE",
      "Enclosure Material Polycarbonate, aluminum alloy (base)",
      "Weight 1 kg (2.2 lb)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "165.4 x 139.5 x 185.3 mm (6.5 x 5.5 x 7.3')" },
          { label: "UniFi Application Suite Talk", value: "✓" },
          { label: "UniFi Application Suite Relay", value: "✓" },
          { label: "Mounting", value: "Desktop" },
          { label: "Integrated Camera", value: "✓" },
          { label: "Touch Screen Technology", value: "Multi-Touch" },
          { label: "Bluetooth", value: "✓" },
          { label: "Available Colors", value: "Black" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "1 kg (2.2 lb)" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy (base)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Connectivity", value: "(2) GbE RJ45 ports 802.11 a/b/g/n/ac WiFi Bluetooth® 4.2 (General use) Bluetooth® 5.2 (Ubiquiti G3 Wireless Handset only)" },
          { label: "Power Method", value: "PoE" },
          { label: "Max. Power Consumption", value: "10W" },
          { label: "Processor", value: "Octa-core ARM® Cortex®-A53" },
          { label: "Memory", value: "Storage: 32 GB RAM: 2 GB" },
          { label: "Camera", value: "2592 x 1944, 5MP (Embedded privacy shutter)" },
          { label: "Display Screen Surface Treatments", value: "Anti-Glare Coating" },
          { label: "Display Screen Surface Size", value: "127 mm (5') diagonal" },
          { label: "Display Screen Surface Resolution", value: "720 x 1280 HD" },
          { label: "Audio Hands-Free Microphone", value: "Dual omnidirectional MEMS microphone" },
          { label: "Audio Hands-Free Hands-Free Speaker", value: "Single 2W speaker" },
          { label: "Audio Hands-Free Handset Microphone", value: "Omnidirectional electret condenser microphone" },
          { label: "Audio Hands-Free Handset Dynamic Receiver", value: "Standard wideband-capable audio" },
          { label: "Buttons", value: "(1) Mute Button" },
          { label: "Headseat Support", value: "3.5 mm (0.14') audio jack" },
          { label: "LED", value: "R/G/B/W" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE, Anatel: 06740-25-08356" },
        ]
      },
    ],
  },

  // Produk Ketiga dari Integrations, SF Managed VolP
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
      "Mounting Wall",
      "Enclosure Material Polycarbonate, aluminum alloy (base)",
      "Resolution 1280 x 800 HD"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "254.4 x 202.5 x 70.1 mm (10 x 8 x 2.8”)" },
          { label: "UniFi Application Suite Talk", value: "✓" },
          { label: "UniFi Application Suite Relay", value: "✓" },
          { label: "Mounting", value: "Wall" },
          { label: "Integrated Camera", value: "✓" },
          { label: "Touch Screen Technology", value: "Multi-Touch" },
          { label: "Bluetooth", value: "✓" },
          { label: "Available Colors", value: "Black" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: " 1.1 kg (2.5 lb)" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy (base)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Connectivity", value: "(2) GbE RJ45 ports 802.11 a/b/g/n/ac WiFi Bluetooth® 4.2 (General use) Bluetooth® 5.2 (Ubiquiti G3 Wireless Handset only) NFC support" },
          { label: "Power Method", value: "USB type-C PoE" },
          { label: "Max. Power Consumption", value: "11W" },
          { label: "Processor", value: "Octa-core ARM® Cortex®-A53" },
          { label: "Memory", value: "Storage: 32 GB RAM: 2 GB" },
          { label: "Camera", value: "2592 x 1944, 5MP (Embedded privacy shutter)" },
          { label: "Display Screen Surface Treatments", value: "Anti-Glare Coating" },
          { label: "Display Screen Surface Size", value: "178 mm (7') diagonal" },
          { label: "Display Screen Surface Resolution", value: "1280 x 800 HD" },
          { label: "Audio Hands-Free Microphone", value: "Dual omnidirectional MEMS microphone" },
          { label: "Audio Hands-Free Hands-Free Speaker", value: "Dual 3W speaker" },
          { label: "Audio Hands-Free Handset Microphone", value: "Omnidirectional electret condenser microphone" },
          { label: "Audio Hands-Free Handset Dynamic Receiver", value: "Standard wideband-capable audio" },
          { label: "Buttons", value: "(1) Mute Button" },
          { label: "Headseat Support", value: "3.5 mm (0.14') audio jack" },
          { label: "LED", value: "R/G/B/W" },
          { label: "NFC Frequency", value: "13.56 MH" },
          { label: "NFC Read Range", value: "< 10 mm" },
          { label: "NFC Technology", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
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

  // Produk Keempat dari Integrations, SF Managed VolP
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
      "Memory Storage: 32 GB RAM: 2 GB",
      "Resolution 1280 x 800 HD",
      "Power Method USB type-C PoE+"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "255 x 135 x 183 mm (10 x 5.3 x 7.2')" },
          { label: "UniFi Application Suite Talk", value: "✓" },
          { label: "Mounting", value: "Desktop" },
          { label: "Integrated Camera", value: "✓" },
          { label: "Touch Screen Technology", value: "Multi-Touch" },
          { label: "Bluetooth", value: "✓" },
          { label: "Available Colors", value: "Black/White" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "1.5 kg (3.4 lb)" },
          { label: "Enclosure Material", value: "Plastic, aluminum (base)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Connectivity", value: "(2) GbE RJ45 ports 802.11 a/b/g/n/ac WiFi Bluetooth® 4.2" },
          { label: "Power Method", value: "USB type-C PoE+" },
          { label: "Max. Power Consumption", value: "15W" },
          { label: "Processor", value: "Octa-core ARM® Cortex®-A53" },
          { label: "Memory", value: "Storage: 32 GB RAM: 2 GB" },
          { label: "Camera", value: "2592 x 1944, 5MP (Embedded privacy shutter)" },
          { label: "Display Screen Surface Treatments", value: "Fingerprint-Resistant Coating" },
          { label: "Display Screen Surface Size", value: "178 mm (7') diagonal" },
          { label: "Display Screen Surface Resolution", value: "1280 x 800 HD" },
          { label: "Audio Hands-Free Microphone", value: "Dual omnidirectional MEMS microphone" },
          { label: "Audio Hands-Free Hands-Free Speaker", value: "Dual 3W speaker" },
          { label: "Audio Hands-Free Handset Microphone", value: "Omnidirectional electret condenser microphone" },
          { label: "Audio Hands-Free Handset Dynamic Receiver", value: "Standard wideband-capable audio" },
          { label: "Buttons", value: "(1) Mute Button" },
          { label: "Headseat Support", value: "3.5 mm (0.14') audio jack" },
          { label: "LED", value: "White LED (Black version) Blue LED (White version)" },
          { label: "NFC Frequency", value: "13.56 MH" },
          { label: "NFC Read Range", value: "< 10 mm" },
          { label: "NFC Technology", value: "NFC Tag 1, 2, 3, 4, 5 MIFARE Classic MIFARE Plus MIFARE Ultralight MIFARE DESFire" },
          { label: "NFC Standards", value: "ISO 14443A, 14443B, 15693" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE, Anatel" },
        ]
      },
    ],
  },

  // Produk Kelima dari Integrations, SF Managed VolP
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
      "Enclosure Material Plastic, aluminum (base)",
      "Resolution 720 x 1280 HD",
      "Weight 1.1 kg (2.4 lb)",
      "Note. Official UniFi Talk SIP service is available in the US, UK, and Canada. Third-party SIP provider integration is available for international regions. Ubiquiti approved SIP providers."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "166 x 140 x 183 mm (6.5 x 5.5 x 7.2')" },
          { label: "UniFi Application Suite Talk", value: "✓" },
          { label: "Mounting", value: "Desktop" },
          { label: "Integrated Camera", value: "✓" },
          { label: "Touch Screen Technology", value: "Multi-Touch" },
          { label: "Bluetooth", value: "✓" },
          { label: "Available Colors", value: "Black/White" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "1.1 kg (2.4 lb)" },
          { label: "Enclosure Material", value: "Plastic, aluminum (base)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Connectivity", value: "(2) GbE RJ45 ports 802.11 a/b/g/n/ac WiFi Bluetooth® 4.2" },
          { label: "Power Method", value: "PoE" },
          { label: "Max. Power Consumption", value: "8W" },
          { label: "Processor", value: "Octa-core ARM® Cortex®-A53" },
          { label: "Memory", value: "Storage: 32 GB RAM: 2 GB" },
          { label: "Camera", value: "2592 x 1944, 5MP (Embedded privacy shutter)" },
          { label: "Display Screen Surface Treatments", value: "Fingerprint-Resistant Coating" },
          { label: "Display Screen Surface Size", value: "127 mm (5') diagonal" },
          { label: "Display Screen Surface Resolution", value: "720 x 1280 HD" },
          { label: "Audio Hands-Free Microphone", value: "Dual omnidirectional MEMS microphone" },
          { label: "Audio Hands-Free Hands-Free Speaker", value: "Single 2W speaker" },
          { label: "Audio Hands-Free Handset Microphone", value: "Omnidirectional electret condenser microphone" },
          { label: "Audio Hands-Free Handset Dynamic Receiver", value: "Standard wideband-capable audio" },
          { label: "Buttons", value: "(1) Mute Button" },
          { label: "Headseat Support", value: "3.5 mm (0.14') audio jack" },
          { label: "LED", value: "White LED (Black version) Blue LED (White version)" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ]
      },
    ],
  },

  // Produk Keenam dari Integrations, SF Managed VolP
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
      "Power Method 1000mAh Li-ion battery",
      "Weight 180 g (6.3 oz)",
      "Enclosure Material ABS"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "186 x 53.8 x 54.7 mm (7.3 x 2.1 x 2.2')" },
          { label: "UniFi Application Suite Talk", value: "✓" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "180 g (6.3 oz)" },
          { label: "Enclosure Material", value: "ABS" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Connectivity", value: "Bluetooth® 5.2 LE audio" },
          { label: "Power Method", value: "1000mAh Li-ion battery" },
          { label: "Power Input Method", value: "2 pogo pins for charging" },
          { label: "Display Screen Surface Size", value: "24 mm (0.96') diagonal" },
          { label: "Audio Headseat Microphone", value: "Omnidirectional electret condenser microphone" },
          { label: "Audio Handset Dynamic Receiver", value: "Standard wideband-capable audio" },
          { label: "Buttons", value: "(1) Pickup/End Call Button (1) Mute Button (2) Volume Buttons" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "Certifications", value: "FCC, IC, CE, Anatel: 04578-25-08356" },
          { label: "NDAA Compliant", value: "✓" },
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

  // Produk Ketujuh dari Integrations, SF Managed VolP
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
      "Weight 300 g (10.6 oz)",
      "Enclosure Material Polycarbonate",
      "Resolution 192 x 64 dots"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "131.5 x 110.7 x 28.2 mm (5.2 x 4.4 x 1.1')" },
          { label: "UniFi Application Suite Talk", value: "✓" },
          { label: "Mounting", value: "Flat/Angle Mount" },
          { label: "Telephone Features", value: "Voicemail, DND, caller ID, Call Transfer, Call Waiting, 3-Way Conference" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "300 g (10.6 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Connectivity", value: "(1) 100 MbE RJ45 port/PoE (1) 3.5 mm (0.14') headset port (2) RJ11 FXS ports (1) USB-C (power input) 802.11a/b/g/n/ac WiFi 2.4G b/g/n, BW 20 WiFi 5G a/n/ac, BW 20/40/80" },
          { label: "Power Method", value: "USB-C 5V DC, 1A PoE 48V DC, 0.35A" },
          { label: "Power Supply", value: "5V DC, 1A power adapter, 1.5 m cord (Included)PoE (pair B 4, 5+; 7, 8-)" },
          { label: "Memory", value: "RAM: 128 Mb Storage: 256 Mb" },
          { label: "Display Screen Surface Size", value: "86 mm (3.4') diagonal" },
          { label: "Display Screen Surface Resolution", value: "192 x 64 dots" },
          { label: "Buttons", value: "(3) Device Control Keys" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "Certifications", value: "FCC, IC, CE" },
          { label: "NDAA Compliant", value: "✓" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Supported phone lines", value: "2" },
          { label: "Voice Codec", value: "G.711 u/a" },
          { label: "Fax over IP", value: "Fax Pass-Through using G.711" },
          { label: "Management Application UniFi Talk", value: "Version 1.12.0 and later" },
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
