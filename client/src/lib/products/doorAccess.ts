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

// Door Access Products
export const doorAccessProducts: Product[] = [

  // Produk Pertama dari Door Access, SF Readers
  {
    id: "UVC-G6-Pro-Entry",
    name: "G6 Pro Entry",
    category: "Door Access",
    subfilter: "Readers",
    image: "/images/camera.jpg",
    shortDescription:
      "An intelligent door entry system with native UniFi Protect and UniFi Access integration with a 12MP camera, two-way audio, and a 3' touch display.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],


    // SKU produk
    sku: "UVC-G6-PRO-ENTRY",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Power Method PoE+",
      "Enclosure Material Aluminum",
      "Note. 10 free 1-year Touch Passes included. Learn more. To enable door access features such as NFC, Face ID, and Interface Designer configuration, an Access Hub is required, and both UniFi Protect and UniFi Access applications must be installed.",
      "Due to a constraint on a DDR memory configuration unique to G6 Pro Entry, launch is delayed while we re-qualify an alternate vendor. Availability is currently estimated for March."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
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
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "GbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.1 NFC" },
          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "Main camera: 12MP, 20 FPS or 8MP, 30 FPS Package camera: 3 FPS" },
          { label: "Video Resolution", value: "Main camera: 12MP, 3024 x 4096 (3:4) or 8MP, 2160 x 3840 (9:16) Package camera: 8MP, 3264 x 2448 (4:3)" },
          { label: "Optics Sensor", value: "Main camera: 12MP CMOS Package camera: 8MP CMOS" },
          { label: "Optics Lens", value: "Fixed focal length" },
          { label: "Optics Night Mode", value: "Built-in IR LED illumination and IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "18W" },
          { label: "Supported Voltage Range", value: "42—57V DC" },
          { label: "Power Method", value: "PoE+" },
          { label: "Processor", value: "Quad core Arm® Cortex®-A53 based chip" },
          { label: "Weight", value: "360 g (12.7 oz)" },
          { label: "Enclosure Material", value: "Aluminum" },
          { label: "Mount Material", value: "Wall mount: Stainless steel Gangbox mount plate: SGCC steel Gangbox mount cover: Polycarbonate Wedge mount: Aluminum" },

          { label: "Display Size", value: "75 mm (3') diagonal" },
          { label: "Display Screen Technology", value: "Capacitive multi-touch" },
          { label: "Display Luminance", value: "Max. 1000 nits (Typical)" },
          { label: "Display Screen Orientation ", value: "Potrait" },
          { label: "Display Resolution ", value: "480 x 854 px" },
          { label: "Button", value: "(1) Ring button (1) Factory reset (1) Tamper switch" },
          { label: "LEDs", value: "R/G/B/W/Amber" },
          { label: "Ambient Operating Temperature", value: "Device: -30 to 50° C (-22 to 122° F) Display: -25 to 50° C (-13 to 122° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
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

    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "WiFi Smart Chime",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Plug-in chime designed to pair with a UniFi doorbell.",
        specs: [
          "Plug-in chime designed to pair with a UniFi doorbell",
          "Enterprise-grade quality",
          "Easy to deploy and manage",
          "Note. Third-party WiFi configuration available during setup with the UniFi Protect mobile app."
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "⌀62 x 50.6 mm (⌀2.4 x 2') (Without prong)" },
          { label: "Weight", value: "127 g (4.5 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, fabric" },
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
        ],
        productLink: "/products/mounting-kit-uvc-g6-pro-entry"
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
    ]
  },

  // Produk Kedua dari DoorAccess, SF Readers
  {
    id: "UVC-G6-Entry",
    name: "G6 Entry",
    category: "Door Access",
    subfilter: "Readers",
    image: "/images/camera.jpg",
    shortDescription:
      "An intelligent door entry system with native UniFi Protect and UniFi Access integration.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UVC-G6-ENTRY",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-G6-Entry.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Weatherproofing IP55",
      "Tamper Resistance IK07",
      "Resolution Main camera: 5MP Package camera: 8MP",
      "Note. 10 free 1-year Touch Passes included. Learn more. To enable door access features such as NFC, Face ID, and Interface Designer configuration, an Access Hub is required, and both UniFi Protect and UniFi Access applications must be installed."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "176 x 45 x 29.6 mm (6.9 x 1.8 x 1.2')" },
          { label: "IR Night Vision", value: "5 m (16 ft)" },
          { label: "Face Recognition", value: "✓" },
          { label: "Smart Detections (People, Vehicles, Animals)", value: "✓" },
          { label: "Resolution", value: "Main camera: 5MP Package camera: 8MP" },
          { label: "Field of View", value: "Main camera: H: 100°, V: 135°, D: 180° Package camera: H: 66°, V: 51.7°, D: 78°" },
          { label: "Audio", value: "Two-way audio" },
          { label: "Weatherproofing", value: "IP55" },
          { label: "Tamper Resistance", value: "IK07" },
          { label: "Mounting", value: "Wall mount, Gangbox mount plate, 20° wedge mount (Included) Junction box (Optional)" },

          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "PIN Access", value: "✓" },
          { label: "Apple/Google Wallet", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Two-Way Intercom & Doorbell Access", value: "✓" },
          { label: "UniFi Application Suite Protect", value: "✓" },
          { label: "UniFi Application Suite Access", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Network Interface", value: "GbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.1 NFC" },

          { label: "Video Image Settings", value: "Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR" },
          { label: "Video Max. Frame Rate", value: "Main camera: 30 FPS Package camera: 3 FPS" },
          { label: "Video Resolution", value: "Main camera: 5MP, 1920 x 2560 (3:4) Package camera: 8MP 3264 x 2448 (4:3)" },

          { label: "Optics Sensor", value: "Main camera: 5MP CMOS Package camera: 8MP CMOS" },
          { label: "Optics Lens", value: "Fixed focal length" },
          { label: "Optics Night Mode", value: "Built-in IR LED illumination and IR cut filter" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "16W" },
          { label: "Supported Voltage Range", value: "42—57V DC" },
          { label: "Power Method", value: "PoE+" },
          { label: "Processor", value: "Quad core Arm® Cortex®-A53 based chip" },
          { label: "Weight", value: "275 g (9.7 oz)" },
          { label: "Enclosure Material", value: "Aluminum" },
          { label: "Mount Material", value: "Wall mount: Stainless steel Gangbox mount plate: SGCC steel Gangbox mount cover: Polycarbonate Wedge mount: Aluminum" },

          { label: "Button", value: "(1) Ring button (1) Factory reset (1) Tamper switch" },
          { label: "LEDs", value: "R/G/B/W" },
          { label: "Ambient Operating Temperature", value: "-30 to 50° C (-22 to 122° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
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

    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "WiFi Smart Chime",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Plug-in chime designed to pair with a UniFi doorbell.",
        specs: [
          "Plug-in chime designed to pair with a UniFi doorbell",
          "Enterprise-grade quality",
          "Easy to deploy and manage",
          "Note. Third-party WiFi configuration available during setup with the UniFi Protect mobile app."
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "⌀62 x 50.6 mm (⌀2.4 x 2') (Without prong)" },
          { label: "Weight", value: "127 g (4.5 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, fabric" },
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
        ],
        productLink: "/products/mounting-kit-uvc-g6-pro-entry"
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
    ]
  },

  // Produk Ketiga dari DoorAccess, SF Readers
  {
    id: "UA-G3-Pro-B/W",
    name: "G3 Reader Pro",
    category: "Door Access",
    subfilter: "Readers",
    image: "/images/camera.jpg",
    shortDescription:
      "Third-generation, indoor/outdoor NFC reader and intercom with Touch Pass support.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-G3-PRO-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Mount Material Aluminum alloy",
      "Enclosure Material Polycarbonate, glass",
      "Weatherproofing IP55",
      "Note. 10 free 1-year Touch Passes included"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "160 x 40.4 x 40.55 mm (6.3 x 1.59 x 1.6')" },
          { label: "Integrated Camera", value: "✓" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "PIN Access", value: "✓" },
          { label: "Apple/Google Wallet", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Face Unlock", value: "✓" },
          { label: "Two-Way Intercom & Doorbell Access", value: "✓" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weatherproofing", value: "IP55" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "136 g (4.8 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, glass" },
          { label: "Mount Material", value: "Aluminum alloy" },
          { label: "Mounting", value: "Wall, gang-box mount (Included) Angle mount, junction box (Optional)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Indoor and Outdoor Use", value: "Yes" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.2 NFC" },
          { label: "Power Method", value: "PoE UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "6W" },
          { label: "Supported Voltage Range", value: "48V DC" },
          { label: "ESD/EMP Protection", value: "Air: ± 15kV, contact: ± 8kV" },

          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Max. Frame Resolution", value: "2MP 1200 x 1600 (3:4)" },

          { label: "Optics Resolution", value: "12 MP (3072 × 4096)" },
          { label: "Optics Field of View", value: "H: 98.6°, V: 125.7°, D: 157.8°" },

          { label: "Sensors", value: "Proximity sensor" },

          { label: "Display Size", value: "120 mm (4.7') diagonal" },
          { label: "Display Screen Technology", value: "Capacitive touch" },
          { label: "Display Luminance", value: "480 nits (Typical)" },
          { label: "Display Screen Orientation", value: "Potrait" },
          { label: "Display Resolution", value: "1280 x 286 px" },
          { label: "Microphone", value: "✓" },
          { label: "Speaker", value: "✓" },
          { label: "LEDs", value: "R/G/B/W/Amber" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Read Range", value: "< 30 mm (1.18'')" },
          { label: "NFC Technology", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T ECP 2.0" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-G3-Pro-W/UA-G3-Pro-B, V01" },
          { label: "Ambient Operating Temperature", value: "Device: -30 to 45° C (-22 to 113° F) Display: -10 to 45° C (14 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management Application", value: "Access" },
          { label: "Software Information", value: "The software version can be checked at " },
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
        name: "Fail-Secure Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric strike lock with 8 mm lock slot depth support.",
        specs: [
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
          "Lock Type Fail secure",
          "Holding Force 227 kg (500 lb)"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body:112 x 21 x 28 mm (4.4 x 0.8 x 1.1') Short front plate:153 x 25 x 3 mm (6 x 0.9 x 0.1') Long front plate:250 x 25 x 3 mm (9.8 x 0.9 x 0.1')" },
          { label: "Weight", value: "Lock body: 197 g (6.9 oz) Short front plate: 62 g (2.2 oz) Long front plate: 97 g (3.4 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "227 kg (500 lb)" },
          { label: "Lock Features Current Power", value: "200mA ± 10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/mounting-kit-ua-g3-pro-b/w"
      },
      {
        id: 2,
        name: "Fail-Safe Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric strike lock that connects to a UniFi Access Hub.",
        specs: [
          "Door Status Contact Type Dry contact",
          "Lock Features Lock Type Fail safe",
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 80 x 40 x 35 mm (3.2 x 1.6 x 1.4') Short front plate: 124 x 32 x 3 mm (4.9 x 1.3 x 0.1') Long front plate: 202 x 36 x 3 mm (7.9 x 1.4 x 0.1')" },
          { label: "Weight", value: "Lock body: 185 g (6.5 oz) Short front plate: 50 g (1.8 oz) Long front plate: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "1,200 kg (2,645 lb)" },
          { label: "Lock Features Current Power", value: "400mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/power-cable-ua-g3-pro-b/w"
      },
      {
        id: 3,
        name: "Fail-Secure Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "en/metal) DPS" },
          { label: "Lock Features Current Power", value: "Standby: 12mA ±10% Dynamic: 600mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) Lock 12V/NC (blue) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Keempat dari DoorAccess, SF Readers
  {
    id: "UA-G2-Pro-B/W",
    name: "G2 Reader Pro",
    category: "Door Access",
    subfilter: "Readers",
    image: "/images/camera.jpg",
    shortDescription:
      "Second generation, indoor/outdoor NFC reader and intercom.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-G2-PRO-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Second generation",
      "indoor/outdoor NFC reader and intercom",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "160 x 40.4 x 40.55 mm (6.3 x 1.59 x 1.6')" },
          { label: "Integrated Camera", value: "✓" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "PIN Access", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Face Unlock", value: "✓" },
          { label: "Two-Way Intercom & Doorbell Access", value: "✓" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weatherproofing", value: "IP55" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "136 g (4.8 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, glass" },
          { label: "Mount Material", value: "Aluminum alloy" },
          { label: "Mounting", value: "Wall, gang-box mount (Included) Angle mount, junction box (Optional)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Indoor and Outdoor Use", value: "Yes" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.2 NFC" },
          { label: "Power Method", value: "PoE UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "6W" },
          { label: "Supported Voltage Range", value: "48V DC" },
          { label: "ESD/EMP Protection", value: "Air: ± 15kV, contact: ± 8kV" },

          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Max. Resolution", value: "2MP 1200 x 1600 (3:4)" },

          { label: "Optics Resolution", value: "12 MP (3072 × 4096)" },
          { label: "Optics Field of View", value: "H: 98.6°, V: 125.7°, D: 157.8°" },

          { label: "Sensors", value: "Proximity sensor" },

          { label: "Display Size", value: "120 mm (4.7') diagonal" },
          { label: "Display Screen Technology", value: "Capacitive touch" },
          { label: "Display Luminance", value: "480 nits (Typical)" },
          { label: "Display Screen Orientation", value: "Potrait" },
          { label: "Display Resolution", value: "1280 x 286 px" },
          { label: "Microphone", value: "✓" },
          { label: "Speaker", value: "✓" },
          { label: "LEDs", value: "R/G/B/W/Amber" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Read Range", value: "< 30 mm (1.18'')" },
          { label: "NFC Technology", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-G2-Pro/UA-G2-Pro-Black, V02" },
          { label: "Ambient Operating Temperature", value: "Device: -30 to 45° C (-22 to 113° F) Display: -10 to 45° C (14 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management Application", value: "Access" },
          { label: "Software Information", value: "The software version can be checked at " },
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
        name: "WiFi Smart Chime",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Plug-in chime designed to pair with a UniFi doorbell.",
        specs: [
          "Plug-in chime designed to pair with a UniFi doorbell",
          "Enterprise-grade quality",
          "Easy to deploy and manage",
          "Note. Third-party WiFi configuration available during setup with the UniFi Protect mobile app."
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "⌀62 x 50.6 mm (⌀2.4 x 2') (Without prong)" },
          { label: "Weight", value: "127 g (4.5 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, fabric" },
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
        ],
        productLink: "/products/mounting-kit-uvc-g6-pro-entry"
      },
      {
        id: 2,
        name: "Fail-Secure Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric strike lock with 8 mm lock slot depth support.",
        specs: [
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
          "Lock Type Fail secure",
          "Holding Force 227 kg (500 lb)"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body:112 x 21 x 28 mm (4.4 x 0.8 x 1.1') Short front plate:153 x 25 x 3 mm (6 x 0.9 x 0.1') Long front plate:250 x 25 x 3 mm (9.8 x 0.9 x 0.1')" },
          { label: "Weight", value: "Lock body: 197 g (6.9 oz) Short front plate: 62 g (2.2 oz) Long front plate: 97 g (3.4 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "227 kg (500 lb)" },
          { label: "Lock Features Current Power", value: "200mA ± 10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/mounting-kit-ua-g3-pro-b/w"
      },
      {
        id: 3,
        name: "Fail-Secure Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "en/metal) DPS" },
          { label: "Lock Features Current Power", value: "Standby: 12mA ±10% Dynamic: 600mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) Lock 12V/NC (blue) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "Fail-Safe Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric strike lock that connects to a UniFi Access Hub.",
        specs: [
          "Door Status Contact Type Dry contact",
          "Lock Features Lock Type Fail safe",
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 80 x 40 x 35 mm (3.2 x 1.6 x 1.4') Short front plate: 124 x 32 x 3 mm (4.9 x 1.3 x 0.1') Long front plate: 202 x 36 x 3 mm (7.9 x 1.4 x 0.1')" },
          { label: "Weight", value: "Lock body: 185 g (6.5 oz) Short front plate: 50 g (1.8 oz) Long front plate: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "1,200 kg (2,645 lb)" },
          { label: "Lock Features Current Power", value: "400mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/power-cable-ua-g3-pro-b/w"
      },
    ]
  },

  // Produk Kelima dari DoorAccess, SF Readers
  {
    id: "UA-G3-Flex-B/W",
    name: "Reader Flex",
    category: "Door Access",
    subfilter: "Readers",
    image: "/images/camera.jpg",
    shortDescription:
      "Third-generation NFC card reader with a keypad and Touch Pass support.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-G3-FLEX-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Indoor and Outdoor Use Yes",
      "Mounting Wall (Included) Gang-box, junction box (Optional)",
      "NDAA Compliant ✓",
      "Note. 10 free 1-year Touch Passes included."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "84 x 84 x 40.8 mm (3.3 x 3.3 x 1.6')" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "PIN Access", value: "✓" },
          { label: "Apple/Google Wallet", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Two-Way Intercom & Doorbell Access", value: "✓" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weatherproofing", value: "IP55" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "165 g (5.8 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, glass, aluminium alloy" },
          { label: "Mount Material", value: "Polycarbonate, aluminum alloy" },
          { label: "Mounting", value: "Wall (Included) Gang-box, junction box (Optional)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Indoor and Outdoor Use", value: "Yes" },
          { label: "Networking Interface", value: "(1) 10/100 MbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.1 NFC" },
          { label: "Power Method", value: "PoE UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "5W" },
          { label: "Supported Voltage Range", value: "44–57V DC" },
          { label: "ESD/EMP Protection", value: "Air: ± 15kV, contact: ± 8kV" },
          { label: "Sensors", value: "(12) Capacitive buttons" },
          { label: "Speaker", value: "✓" },
          { label: "LEDs", value: "R/G/B/W" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Read Range", value: "< 30 mm (1.18'')" },
          { label: "NFC Technology", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T ECP 2.0" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-G3-Flex V01" },
          { label: "Ambient Operating Temperature", value: "-30 to 60° C  (-22 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management Application", value: "Access" },
          { label: "Software Information", value: "The software version can be checked at" },
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
        name: "Fail-Secure Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric strike lock with 8 mm lock slot depth support.",
        specs: [
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
          "Lock Type Fail secure",
          "Holding Force 227 kg (500 lb)"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body:112 x 21 x 28 mm (4.4 x 0.8 x 1.1') Short front plate:153 x 25 x 3 mm (6 x 0.9 x 0.1') Long front plate:250 x 25 x 3 mm (9.8 x 0.9 x 0.1')" },
          { label: "Weight", value: "Lock body: 197 g (6.9 oz) Short front plate: 62 g (2.2 oz) Long front plate: 97 g (3.4 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "227 kg (500 lb)" },
          { label: "Lock Features Current Power", value: "200mA ± 10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/mounting-kit-ua-g3-pro-b/w"
      },
      {
        id: 2,
        name: "Fail-Safe Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric strike lock that connects to a UniFi Access Hub.",
        specs: [
          "Door Status Contact Type Dry contact",
          "Lock Features Lock Type Fail safe",
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 80 x 40 x 35 mm (3.2 x 1.6 x 1.4') Short front plate: 124 x 32 x 3 mm (4.9 x 1.3 x 0.1') Long front plate: 202 x 36 x 3 mm (7.9 x 1.4 x 0.1')" },
          { label: "Weight", value: "Lock body: 185 g (6.5 oz) Short front plate: 50 g (1.8 oz) Long front plate: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "1,200 kg (2,645 lb)" },
          { label: "Lock Features Current Power", value: "400mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/power-cable-ua-g3-pro-b/w"
      },
      {
        id: 3,
        name: "Fail-Secure Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "en/metal) DPS" },
          { label: "Lock Features Current Power", value: "Standby: 12mA ±10% Dynamic: 600mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) Lock 12V/NC (blue) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "Fail-Safe Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail Safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "Embedded" },
          { label: "Lock Features Current Power", value: "Standby: 110mA ±10% Dynamic: 1000mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "10.5–16V DC" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Keenam dari DoorAcces, SF Readers
  {
    id: "UA-G3-B/W",
    name: "G3 Reader",
    category: "Door Access",
    subfilter: "Readers",
    image: "/images/camera.jpg",
    shortDescription:
      "Compact third-generation access with Tpuch Pass support.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-G3-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Speaker ✓",
      "Enclosure Material Polycarbonate, glass",
      "Mount Material Aluminum alloy",
      "Note. 10 free 1-year Touch Passes included."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "93 x 40 x 36.5 mm (3.7 x 1.6 x 1.4')" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "Apple/Google Wallet", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Handwave Request to Exit", value: "✓" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weatherproofing", value: "IP55" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "82 g (2.9 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, glass" },
          { label: "Mount Material", value: "Aluminum alloy" },
          { label: "Mounting", value: "In-wall, gang box (Included) Junction box (Optional)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Indoor and Outdoor Use", value: "Yes" },
          { label: "Networking Interface", value: "(1) 10/100 MbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.1 NFC" },
          { label: "Power Method", value: "PoE UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "5W" },
          { label: "Supported Voltage Range", value: "48V DC" },
          { label: "ESD/EMP Protection", value: "Air: ± 15kV, contact: ± 8kV" },
          { label: "Sensors", value: "Proximity sensor" },
          { label: "Speaker", value: "✓" },
          { label: "LEDs", value: "R/G/B/W" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Read Range", value: "< 30 mm (1.18'')" },
          { label: "NFC Technology", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T ECP 2.0" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-G3, V01" },
          { label: "Ambient Operating Temperature", value: "-30 to 45° C  (-22 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management Application", value: "Access" },
          { label: "Software Information", value: "The software version can be checked at " },
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
        name: "Fail-Secure Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric strike lock with 8 mm lock slot depth support.",
        specs: [
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
          "Lock Type Fail secure",
          "Holding Force 227 kg (500 lb)"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body:112 x 21 x 28 mm (4.4 x 0.8 x 1.1') Short front plate:153 x 25 x 3 mm (6 x 0.9 x 0.1') Long front plate:250 x 25 x 3 mm (9.8 x 0.9 x 0.1')" },
          { label: "Weight", value: "Lock body: 197 g (6.9 oz) Short front plate: 62 g (2.2 oz) Long front plate: 97 g (3.4 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "227 kg (500 lb)" },
          { label: "Lock Features Current Power", value: "200mA ± 10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/mounting-kit-ua-g3-pro-b/w"
      },
      {
        id: 2,
        name: "Fail-Safe Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric strike lock that connects to a UniFi Access Hub.",
        specs: [
          "Door Status Contact Type Dry contact",
          "Lock Features Lock Type Fail safe",
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 80 x 40 x 35 mm (3.2 x 1.6 x 1.4') Short front plate: 124 x 32 x 3 mm (4.9 x 1.3 x 0.1') Long front plate: 202 x 36 x 3 mm (7.9 x 1.4 x 0.1')" },
          { label: "Weight", value: "Lock body: 185 g (6.5 oz) Short front plate: 50 g (1.8 oz) Long front plate: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "1,200 kg (2,645 lb)" },
          { label: "Lock Features Current Power", value: "400mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/power-cable-ua-g3-pro-b/w"
      },
      {
        id: 3,
        name: "Fail-Secure Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "en/metal) DPS" },
          { label: "Lock Features Current Power", value: "Standby: 12mA ±10% Dynamic: 600mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) Lock 12V/NC (blue) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "Fail-Safe Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail Safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "Embedded" },
          { label: "Lock Features Current Power", value: "Standby: 110mA ±10% Dynamic: 1000mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "10.5–16V DC" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Ketujuh dari DoorAccess, SF Readers
  {
    id: "UA-G2-B/W",
    name: "G2 Reader",
    category: "Door Access",
    subfilter: "Readers",
    image: "/images/camera.jpg",
    shortDescription: "Compact second-generation access reader.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-G2-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Compact second-generation access reader",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "93 x 40 x 36.5 mm (3.7 x 1.6 x 1.4')" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Handwave Request to Exit", value: "✓" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weatherproofing", value: "IP55" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "82 g (2.9 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, glass" },
          { label: "Mount Material", value: "Aluminum alloy" },
          { label: "Mounting", value: "In-wall, gang box (Included) Junction box (Optional)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Indoor and Outdoor Use", value: "Yes" },
          { label: "Networking Interface", value: "(1) 10/100 MbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.1 NFC" },
          { label: "Power Method", value: "PoE UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "5W" },
          { label: "Supported Voltage Range", value: "48V DC" },
          { label: "ESD/EMP Protection", value: "Air: ± 15kV, contact: ± 8kV" },
          { label: "Sensors", value: "Proximity sensor" },
          { label: "Speaker", value: "✓" },
          { label: "LEDs", value: "R/G/B/W" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Read Range", value: "< 30 mm (1.18'')" },
          { label: "NFC Technology", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-G2/UA-G2-Black, V02" },
          { label: "Ambient Operating Temperature", value: "-30 to 45° C  (-22 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management Application", value: "Access" },
          { label: "Software Information", value: "The software version can be checked at " },
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
        name: "Fail-Secure Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric strike lock with 8 mm lock slot depth support.",
        specs: [
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
          "Lock Type Fail secure",
          "Holding Force 227 kg (500 lb)"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body:112 x 21 x 28 mm (4.4 x 0.8 x 1.1') Short front plate:153 x 25 x 3 mm (6 x 0.9 x 0.1') Long front plate:250 x 25 x 3 mm (9.8 x 0.9 x 0.1')" },
          { label: "Weight", value: "Lock body: 197 g (6.9 oz) Short front plate: 62 g (2.2 oz) Long front plate: 97 g (3.4 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "227 kg (500 lb)" },
          { label: "Lock Features Current Power", value: "200mA ± 10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/mounting-kit-ua-g3-pro-b/w"
      },
      {
        id: 2,
        name: "Fail-Safe Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric strike lock that connects to a UniFi Access Hub.",
        specs: [
          "Door Status Contact Type Dry contact",
          "Lock Features Lock Type Fail safe",
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 80 x 40 x 35 mm (3.2 x 1.6 x 1.4') Short front plate: 124 x 32 x 3 mm (4.9 x 1.3 x 0.1') Long front plate: 202 x 36 x 3 mm (7.9 x 1.4 x 0.1')" },
          { label: "Weight", value: "Lock body: 185 g (6.5 oz) Short front plate: 50 g (1.8 oz) Long front plate: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "1,200 kg (2,645 lb)" },
          { label: "Lock Features Current Power", value: "400mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/power-cable-ua-g3-pro-b/w"
      },
      {
        id: 3,
        name: "Fail-Secure Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "en/metal) DPS" },
          { label: "Lock Features Current Power", value: "Standby: 12mA ±10% Dynamic: 600mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) Lock 12V/NC (blue) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "Fail-Safe Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail Safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "Embedded" },
          { label: "Lock Features Current Power", value: "Standby: 110mA ±10% Dynamic: 1000mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "10.5–16V DC" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Kedelapan dari DoorAccess, SF Readers
  {
    id: "UA-Retrofit-Reader-B/W",
    name: "Retrofit Reader",
    category: "Door Access",
    subfilter: "Readers",
    image: "/images/camera.jpg",
    shortDescription:
      "Indoor/outdoor OSDP reader with NFC Card and Touch Pass support, compatible with the UniFi Retrofit Hub using existing cabling.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-RETROFIT-READER-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Power Method DC 12V",
      "Speaker ✓",
      "Weatherproofing IP55",
      "Note. 10 free 1-year Touch Passes included."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "117 x 45 x 13.3 mm (4.6 x 1.8 x 0.5')" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "Apple/Google Wallet", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Weatherproofing", value: "IP55" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "82 g (2.9 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, glass" },
          { label: "Mount Material", value: "Stainless steel" },
          { label: "Mounting", value: "Wall, gang-box mount (Included) Junction box (Optional)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Indoor and Outdoor Use", value: "Yes" },
          { label: "Networking Interface", value: "(1) 10/100 MbE RJ45 port" },
          { label: "Connectivity", value: "RS-485 BLE 4.1 NFC" },
          { label: "Security", value: "OSDP v2" },
          { label: "Power Method", value: "DC 12V" },
          { label: "Max. Power Consumption", value: "2.5W" },
          { label: "Supported Voltage Range", value: "12V DC" },
          { label: "ESD/EMP Protection", value: "Air: ± 15kV, contact: ± 8kV" },
          { label: "Speaker", value: "✓" },
          { label: "LEDs", value: "R/G/B/W" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Read Range", value: "< 30 mm (1.18'')" },
          { label: "NFC Technology", value: "ISO 14443A, 14443B, 15693 NFC Tag 1,2,3,4,5 MIFARE Classic MIFARE Plus MIFARE Ultralight MIFARE DESFire" },
          { label: "Certifications", value: "CE, FCC, IC" },
          { label: "Ambient Operating Temperature", value: "-30 to 50° C(-22 to 122° F) " },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management Application", value: "Access" },
          { label: "Software Information", value: "The software version can be checked at " },
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
        name: "Pocket Keyfob, 10-Pack",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A pack of (10) highly-secure NFC keyfobs used for access control within UniFi.",
        specs: [
          "Multi-layer encryption to avoid malicious duplication",
          "Assignable to users and visitors",
          "Weather-resistant, IP54-rated casing"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "84 x 39 x 7.4 mm (3.3 x 1.5 x 0.29')" },
          { label: "Weight", value: "16 g (0.56 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, stainless steel, silicone rubber" },
          { label: "NFC Technology", value: "ISO/IEC 14443 Type A MIFARE DESFire EV3 4K UniFi Access Proprietary Security Protocol" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "Weatherproofing", value: "IP54" },
          { label: "Ambient Operating Temperature", value: "-10 to 45° C (14 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE" },
        ],
        productLink: "/products/mounting-kit-ua-retrofit-reader-b/w"
      },
      {
        id: 2,
        name: "Access Card",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A pack of highly-secure NFC cards used for access control within UniFi.",
        specs: [
          "Multi-layer encryption to avoid malicious duplication",
          "Assignable to users and visitors",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "85.6 x 53.98 x 0.84 mm (3.37 x 2.13 x 0.03')" },
          { label: "Weight", value: "5 g (0.18 oz)" },
          { label: "Format", value: "ISO 7810 ID-1" },
          { label: "NFC Technology", value: "MIFARE DESFire EV3 UniFi Access Proprietary Security Protocol" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "Anatel" },
        ],
        productLink: "/products/power-cable-ua-retrofit-reader-b/w"
      },
    ]
  },

  // Produk Kesembian dari DoorAccess, SF Readers
  {
    id: "UA-G3-Intercom",
    name: "G3 Intercom",
    category: "Door Access",
    subfilter: "Readers",
    image: "/images/camera.jpg",
    shortDescription:
      "Indoor/outdoor intercom terminal for managing residential and commercial building entry requests with Touch Pass support.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-G3-INTERCOM",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Enclosure Material Aluminum alloy, UV-stabilized polycarbonate, glass",
      "Mount Material Powder-coated stainless steel",
      "Weatherproofing IP65",
      "Note. 10 free 1-year Touch Passes included"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "324.8 x 113.7 x 28.3 mm (12.8 x 4.5 x 1.1')" },
          { label: "Integrated Camera", value: "✓" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "PIN Access", value: "✓" },
          { label: "Apple/Google Wallet", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Face Unlock", value: "✓" },
          { label: "Two-Way Intercom & Doorbell Access", value: "✓" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weatherproofing", value: "IP65" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "Device: 965 g (2.1 lb) Bracket: 445 g (1 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, UV-stabilized polycarbonate, glass" },
          { label: "Mount Material", value: "Powder-coated stainless steel" },
          { label: "Mounting", value: "Wall mount, adapter to the gooseneck pedestal (Included) Surface angle, flush mount, sunshield kit (Optional)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Indoor and Outdoor Use", value: "Yes" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.2 NFC" },
          { label: "Power Method", value: "PoE UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "13W" },
          { label: "Supported Voltage Range", value: "48V DC" },

          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Max. Frame Resolution", value: "2MP 1200 x 1600 (3:4)" },

          { label: "Optics Resolution", value: "8 MP (2448 × 3264)" },
          { label: "Optics Field of View", value: "H: 79.4°, V: 97.5°, D: 118.2°" },

          { label: "Sensors", value: "Proximity sensor ALS sensor" },

          { label: "Display Size", value: "177 mm (7') diagonal" },
          { label: "Display Screen Technology", value: "Capacitive-multi touch" },
          { label: "Display Luminance", value: "Max. 1000 nits (Typical)" },
          { label: "Display Screen Orientation", value: "Potrait" },
          { label: "Display Resolution", value: "1024 x 600 px" },

          { label: "Microphone", value: "✓" },
          { label: "Speaker", value: "✓" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Technology", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T ECP 2.0" },
          { label: "LEDs", value: "Amber" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-G3-Intercom, V01" },
          { label: "Ambient Operating Temperature", value: "Device: -30 to 60° C (-22 to 140° F) Display: -25 to 60° C (-13 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management Application", value: "Access" },
          { label: "Software Information", value: "The software version can be checked at" },
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
        name: "Fail-Secure Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric strike lock with 8 mm lock slot depth support.",
        specs: [
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
          "Lock Type Fail secure",
          "Holding Force 227 kg (500 lb)"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body:112 x 21 x 28 mm (4.4 x 0.8 x 1.1') Short front plate:153 x 25 x 3 mm (6 x 0.9 x 0.1') Long front plate:250 x 25 x 3 mm (9.8 x 0.9 x 0.1')" },
          { label: "Weight", value: "Lock body: 197 g (6.9 oz) Short front plate: 62 g (2.2 oz) Long front plate: 97 g (3.4 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "227 kg (500 lb)" },
          { label: "Lock Features Current Power", value: "200mA ± 10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/mounting-kit-ua-g3-pro-b/w"
      },
      {
        id: 2,
        name: "Fail-Safe Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric strike lock that connects to a UniFi Access Hub.",
        specs: [
          "Door Status Contact Type Dry contact",
          "Lock Features Lock Type Fail safe",
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 80 x 40 x 35 mm (3.2 x 1.6 x 1.4') Short front plate: 124 x 32 x 3 mm (4.9 x 1.3 x 0.1') Long front plate: 202 x 36 x 3 mm (7.9 x 1.4 x 0.1')" },
          { label: "Weight", value: "Lock body: 185 g (6.5 oz) Short front plate: 50 g (1.8 oz) Long front plate: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "1,200 kg (2,645 lb)" },
          { label: "Lock Features Current Power", value: "400mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/power-cable-ua-g3-pro-b/w"
      },
      {
        id: 3,
        name: "Fail-Secure Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "en/metal) DPS" },
          { label: "Lock Features Current Power", value: "Standby: 12mA ±10% Dynamic: 600mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) Lock 12V/NC (blue) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "Fail-Safe Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail Safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "Embedded" },
          { label: "Lock Features Current Power", value: "Standby: 110mA ±10% Dynamic: 1000mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "10.5–16V DC" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Kesepuluh dari DoorAccess, SF Readers
  {
    id: "UA-Intercom",
    name: "Intercom",
    category: "Door Access",
    subfilter: "Readers",
    image: "/images/camera.jpg",
    shortDescription:
      "Indoor/outdoor intercom terminal for managing residential and commercial building entry requests.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-Intercom",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Indoor/outdoor intercom terminal for managing residential and commercial building entry requests",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "324.8 x 113.7 x 28.3 mm (12.8 x 4.5 x 1.1')" },
          { label: "Integrated Camera", value: "✓" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "PIN Access", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Face Unlock", value: "✓" },
          { label: "Two-Way Intercom & Doorbell Access", value: "✓" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weatherproofing", value: "IP65" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "Device: 965 g (2.1 lb) Bracket: 445 g (1 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, UV-stabilized polycarbonate, glass" },
          { label: "Mount Material", value: "Powder-coated stainless steel" },
          { label: "Mounting", value: "Wall mount, adapter to the gooseneck pedestal (Included) Surface angle, flush mount, sunshield kit (Optional)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Indoor and Outdoor Use", value: "Yes" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.2 NFC" },
          { label: "Power Method", value: "PoE UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "13W" },
          { label: "Supported Voltage Range", value: "48V DC" },

          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Max. Frame Resolution", value: "2MP 1200 x 1600 (3:4)" },

          { label: "Optics Resolution", value: "8 MP (2448 × 3264)" },
          { label: "Optics Field of View", value: "H: 79.4°, V: 97.5°, D: 118.2°" },

          { label: "Sensors", value: "Proximity sensor ALS sensor" },

          { label: "Display Size", value: "177 mm (7') diagonal" },
          { label: "Display Screen Technology", value: "Capacitive-multi touch" },
          { label: "Display Luminance", value: "Max. 1000 nits (Typical)" },
          { label: "Display Screen Orientation", value: "Potrait" },
          { label: "Display Resolution", value: "1024 x 600 px" },

          { label: "Microphone", value: "✓" },
          { label: "Speaker", value: "✓" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Technology", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T" },
          { label: "LEDs", value: "Amber" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-Intercom, V01" },
          { label: "Ambient Operating Temperature", value: "Device: -30 to 60° C (-22 to 140° F) Display: -25 to 60° C (-13 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management Application", value: "Access" },
          { label: "Software Information", value: "The software version can be checked at" },
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
        name: "WiFi Smart Chime",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Plug-in chime designed to pair with a UniFi doorbell.",
        specs: [
          "Plug-in chime designed to pair with a UniFi doorbell",
          "Enterprise-grade quality",
          "Easy to deploy and manage",
          "Note. Third-party WiFi configuration available during setup with the UniFi Protect mobile app."
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "⌀62 x 50.6 mm (⌀2.4 x 2') (Without prong)" },
          { label: "Weight", value: "127 g (4.5 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, fabric" },
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
        ],
        productLink: "/products/mounting-kit-uvc-g6-pro-entry"
      },
      {
        id: 2,
        name: "Fail-Secure Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric strike lock with 8 mm lock slot depth support.",
        specs: [
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
          "Lock Type Fail secure",
          "Holding Force 227 kg (500 lb)"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body:112 x 21 x 28 mm (4.4 x 0.8 x 1.1') Short front plate:153 x 25 x 3 mm (6 x 0.9 x 0.1') Long front plate:250 x 25 x 3 mm (9.8 x 0.9 x 0.1')" },
          { label: "Weight", value: "Lock body: 197 g (6.9 oz) Short front plate: 62 g (2.2 oz) Long front plate: 97 g (3.4 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "227 kg (500 lb)" },
          { label: "Lock Features Current Power", value: "200mA ± 10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/mounting-kit-ua-g3-pro-b/w"
      },
      {
        id: 3,
        name: "Fail-Safe Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric strike lock that connects to a UniFi Access Hub.",
        specs: [
          "Door Status Contact Type Dry contact",
          "Lock Features Lock Type Fail safe",
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 80 x 40 x 35 mm (3.2 x 1.6 x 1.4') Short front plate: 124 x 32 x 3 mm (4.9 x 1.3 x 0.1') Long front plate: 202 x 36 x 3 mm (7.9 x 1.4 x 0.1')" },
          { label: "Weight", value: "Lock body: 185 g (6.5 oz) Short front plate: 50 g (1.8 oz) Long front plate: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "1,200 kg (2,645 lb)" },
          { label: "Lock Features Current Power", value: "400mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/power-cable-ua-g3-pro-b/w"
      },
      {
        id: 4,
        name: "Fail-Secure Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "en/metal) DPS" },
          { label: "Lock Features Current Power", value: "Standby: 12mA ±10% Dynamic: 600mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) Lock 12V/NC (blue) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },


  {
    id: "UA-Ultra",
    name: "Access Ultra",
    category: "Door Access",
    subfilter: "Readers",
    image: "/images/camera.jpg",
    shortDescription:
      "An access reader with a built-in hub for complete, single-door entry control from one device.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-ULTRA",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Max. Power Consumption 18W",
      "Weight140 g (4.9 oz)",
      "ConnectivityBLE 4.2 Ethernet",
      "Note. Not compatible with standalone Access Hubs."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "126 x 45 x 37.45 mm (4.9 x 1.8 x 4.5')" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Maximum User Count", value: "3,000" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Tamper Switch", value: "✓" },
          { label: "Weatherproofing", value: "IP65" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "140 g (4.9 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Stainless steel" },
          { label: "Mounting", value: "Wall mount, gang box mount (Included) Junction box (Optional)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Indoor and Outdoor Use", value: "Yes" },
          { label: "Networking Interface", value: "(1) 10/100 MbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.2 Ethernet" },
          { label: "Power Method", value: "PoE+ UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "18W" },
          { label: "Supported Voltage Range", value: "44–57V DC" },
          { label: "ESD/EMP Protection", value: "Air: ± 8kV, contact: ± 4kV" },
          { label: "Speaker", value: "✓" },
          { label: "LEDs", value: "R/G/B/W " },
          { label: "Button", value: "(1) Factory reset" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Read Range", value: "< 50 mm (1.95'')" },
          { label: "NFC Technology", value: "ISO 14443A, 14443B, 15693 NFC Tag 1,2,3,4,5 MIFARE Classic MIFARE Plus Mifare Ultralight MIFARE DESFire" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 06371-24-08356, SRRC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-Ultra, V01" },
          { label: "Ambient Operating Temperature", value: "-30 to 40° C (-22 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management Application", value: "Access" },
          { label: "Software Information", value: "The software version can be checked at" },
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
        name: "WiFi Smart Chime",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Plug-in chime designed to pair with a UniFi doorbell.",
        specs: [
          "Plug-in chime designed to pair with a UniFi doorbell",
          "Enterprise-grade quality",
          "Easy to deploy and manage",
          "Note. Third-party WiFi configuration available during setup with the UniFi Protect mobile app."
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "⌀62 x 50.6 mm (⌀2.4 x 2') (Without prong)" },
          { label: "Weight", value: "127 g (4.5 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, fabric" },
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
        ],
        productLink: "/products/mounting-kit-uvc-g6-pro-entry"
      },
      {
        id: 2,
        name: "Fail-Secure Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric strike lock with 8 mm lock slot depth support.",
        specs: [
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
          "Lock Type Fail secure",
          "Holding Force 227 kg (500 lb)"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body:112 x 21 x 28 mm (4.4 x 0.8 x 1.1') Short front plate:153 x 25 x 3 mm (6 x 0.9 x 0.1') Long front plate:250 x 25 x 3 mm (9.8 x 0.9 x 0.1')" },
          { label: "Weight", value: "Lock body: 197 g (6.9 oz) Short front plate: 62 g (2.2 oz) Long front plate: 97 g (3.4 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "227 kg (500 lb)" },
          { label: "Lock Features Current Power", value: "200mA ± 10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/mounting-kit-ua-g3-pro-b/w"
      },
      {
        id: 3,
        name: "Fail-Safe Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric strike lock that connects to a UniFi Access Hub.",
        specs: [
          "Door Status Contact Type Dry contact",
          "Lock Features Lock Type Fail safe",
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 80 x 40 x 35 mm (3.2 x 1.6 x 1.4') Short front plate: 124 x 32 x 3 mm (4.9 x 1.3 x 0.1') Long front plate: 202 x 36 x 3 mm (7.9 x 1.4 x 0.1')" },
          { label: "Weight", value: "Lock body: 185 g (6.5 oz) Short front plate: 50 g (1.8 oz) Long front plate: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "1,200 kg (2,645 lb)" },
          { label: "Lock Features Current Power", value: "400mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/power-cable-ua-g3-pro-b/w"
      },
      {
        id: 4,
        name: "Fail-Secure Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "en/metal) DPS" },
          { label: "Lock Features Current Power", value: "Standby: 12mA ±10% Dynamic: 600mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) Lock 12V/NC (blue) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Pertama dari DoorAccess, SF Hubs
  {
    id: "EAH-8",
    name: "Enterprise Access Hub",
    category: "Door Access",
    subfilter: "Hubs",
    image: "/images/camera.jpg",
    shortDescription:
      "Enterprise-grade access hub with entry and exit control up to eight doors and battery backup support.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "EAH-8",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Enterprise-grade access hub with entry and exit control up to eight doors and battery backup support",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "379 x 355 x 105 mm  (15 x 14 x 4.1')" },
          { label: "Supported Doors", value: "8" },
          { label: "Maximum User Count", value: "10,000" },
          { label: "input Terminal", value: "(8) Door exit request (8) Door position (1) Emergency" },
          { label: "Power Method", value: "Universal input, 100–240V AC, Max. 4.4A, 50/60 Hz 32–48V DC Lead Acid Battery, Max. 7.5A @32V" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "Device: 9.1 kg (20 lb) Mount: 624 g (1.4 lb)" },
          { label: "Enclosure Material", value: "SGCC steel housing with polycarbonate cover" },
          { label: "Mount Material", value: "SGCC Steel" },
          { label: "Mounting", value: "Wall" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Digital Input", value: "(8) Inputs for request-to-exit devices (8) Inputs for door position sensors (1) Emergency" },
          { label: "Dry Output Relay", value: "(8) Lock terminals (12V or Dry) (4) AUX terminals for advanced setup (Chime/Siren/Door opener)" },
          { label: "Power Output Relay", value: "Lock: 12V DC, 1A/ Dry Aux: Dry only" },
          { label: "Indoor and Outdoor Use", value: "Indoor only" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "Networking Interface", value: "(10) 10/100/1000 Base-T" },
          { label: "PoE Interface", value: "(8) PoE+ outputs, 50V DC, 30W per port(Max 60W aggregated)" },
          { label: "Power Supply", value: "AC/DC, internal" },
          { label: "Max. Power Consumption", value: "240W" },
          { label: "Max. PoE Wattage per Port", value: "30W" },
          { label: "LEDs", value: "W/B " },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Recommend Max. Cable Length UA-Lock-Electric (400mA)", value: "24 AWG length: 25 m (82 ft) 22 AWG length: 42 m (138 ft) 20 AWG length: 66 m (217 ft) 18 UACC-Cable-DoorLockRelay length: 100 m (328 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-540kg (500mA)", value: "24 AWG length: 20 m (66 ft)22 AWG length: 32 m (105 ft) 20 AWG length: 51 m (167 ft) 18 UACC-Cable-DoorLockRelay length: 80 m (262 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-270kg (800mA)", value: "24 AWG length: 12 m (29 ft) 22 AWG length: 20 m (98 ft) 20 AWG length: 30 m (167 ft) 18 UACC-Cable-DoorLockRelay length: 46 m (151 ft)" },
          { label: "Recommend Max. Cable Length Other locks (1A)", value: "24 AWG length: 9 m (30 ft) 22 AWG length: 15 m (49 ft) 20 AWG length: 24 m (79 ft) 18 UACC-Cable-DoorLockRelay length: 36 m (118 ft)" },
          { label: "PoE Cabling Requirements", value: "Cable 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "EAH-8, Ver 01" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management Application", value: "Access" },
          { label: "Software Information", value: "The software version can be checked at" },
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
        name: "WiFi Smart Chime",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Plug-in chime designed to pair with a UniFi doorbell.",
        specs: [
          "Plug-in chime designed to pair with a UniFi doorbell",
          "Enterprise-grade quality",
          "Easy to deploy and manage",
          "Note. Third-party WiFi configuration available during setup with the UniFi Protect mobile app."
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "⌀62 x 50.6 mm (⌀2.4 x 2') (Without prong)" },
          { label: "Weight", value: "127 g (4.5 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, fabric" },
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
        ],
        productLink: "/products/mounting-kit-uvc-g6-pro-entry"
      },
      {
        id: 2,
        name: "Fail-Secure Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric strike lock with 8 mm lock slot depth support.",
        specs: [
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
          "Lock Type Fail secure",
          "Holding Force 227 kg (500 lb)"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body:112 x 21 x 28 mm (4.4 x 0.8 x 1.1') Short front plate:153 x 25 x 3 mm (6 x 0.9 x 0.1') Long front plate:250 x 25 x 3 mm (9.8 x 0.9 x 0.1')" },
          { label: "Weight", value: "Lock body: 197 g (6.9 oz) Short front plate: 62 g (2.2 oz) Long front plate: 97 g (3.4 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "227 kg (500 lb)" },
          { label: "Lock Features Current Power", value: "200mA ± 10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/mounting-kit-ua-g3-pro-b/w"
      },
      {
        id: 3,
        name: "Fail-Safe Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric strike lock that connects to a UniFi Access Hub.",
        specs: [
          "Door Status Contact Type Dry contact",
          "Lock Features Lock Type Fail safe",
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 80 x 40 x 35 mm (3.2 x 1.6 x 1.4') Short front plate: 124 x 32 x 3 mm (4.9 x 1.3 x 0.1') Long front plate: 202 x 36 x 3 mm (7.9 x 1.4 x 0.1')" },
          { label: "Weight", value: "Lock body: 185 g (6.5 oz) Short front plate: 50 g (1.8 oz) Long front plate: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "1,200 kg (2,645 lb)" },
          { label: "Lock Features Current Power", value: "400mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/power-cable-ua-g3-pro-b/w"
      },
      {
        id: 4,
        name: "Fail-Secure Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "en/metal) DPS" },
          { label: "Lock Features Current Power", value: "Standby: 12mA ±10% Dynamic: 600mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) Lock 12V/NC (blue) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk kedua dari DoorAccess, SF Hubs
  {
    id: "UA-Retrofit-Hub-2",
    name: "Enterprise Access Hub",
    category: "Door Access",
    subfilter: "Hubs",
    image: "/images/camera.jpg",
    shortDescription:
      "DC-powered hub that supports Wiegand and OSDP readers and provides entry and exit control for up to two doors.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-RETROFIT-HUB-2",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Maximum User Count 10,000",
      "Supported Doors 2",
      "Power Method 12/24V DC"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "140 x 120 x 45 mm (5.5 x 4.7 x 1.8')" },
          { label: "Supported Doors", value: "2" },
          { label: "Maximum User Count", value: "10,000" },
          { label: "input Terminal", value: "(2) Third-party Wiegand Reader / UniFi Retrofit Reader (2) Door exit request (2) Door position (1) Emergency" },
          { label: "Power Method", value: "12/24V DC" },
          { label: "NDAA Compliant", value: "✓" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "420 g (14.8 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "SGCC Steel" },
          { label: "Mounting", value: "Din-rail (Included)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Digital Input", value: "(2) Third-party Wiegand Reader / UniFi Retrofit Reader (2) Door exit request (2) Door position (1) Emergency" },
          { label: "Dry Output Relay", value: "Lock: rated 30V DC, up to 1A Aux: rated 30V DC, up to 1A" },
          { label: "Power Output Relay", value: "12V Lock: 12V DC, up to 1A 24V Lock: 24V DC, up to 0.5A" },
          { label: "Indoor and Outdoor Use", value: "Indoor only" },
          { label: "Ambient Operating Temperature", value: "-10 to 40° C (14 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Networking Interface", value: "(2) 10/100 MbE RJ45 ports" },
          { label: "Power Supply", value: "DC 12/24V" },
          { label: "Max. Power Consumption", value: "50W" },
          { label: "LEDs", value: "W/B " },
          { label: "Button", value: "(1) Factory reset (2) 12V/Dry/24V switch" },
          { label: "Recommend Max. Cable Length UA-Retrofit-Reader (250mA)", value: "18 UACC-Cable-DoorLockRelay length: 152.4 m (500 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Electric (400mA)", value: "24 AWG length: 25 m (82 ft)22 AWG length: 42 m (138 ft) 20 AWG length: 66 m (217 ft) 18 UACC-Cable-DoorLockRelay length: 100 m (328 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-540kg (500mA)", value: "24 AWG length: 20 m (66 ft)22 AWG length: 32 m (105 ft) 20 AWG length: 51 m (167 ft) 18 UACC-Cable-DoorLockRelay length: 80 m (262 ft)" },
          { label: "Recommend Max. Cable UA-Lock-Magnetic-270kg (800mA)", value: "24 AWG length: 12 m (29 ft) 22 AWG length: 20 m (98 ft) 20 AWG length: 30 m (167 ft) 18 UACC-Cable-DoorLockRelay length: 46 m (151 ft)" },
          { label: "Recommend Max. Cable Other locks (1A)", value: "24 AWG length: 9 m (30 ft) 22 AWG length: 15 m (49 ft) 20 AWG length: 24 m (79 ft) 18 UACC-Cable-DoorLockRelay length: 36 m (118 ft)" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management Application", value: "Access" },
          { label: "Software Information", value: "The software version can be checked at" },
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
        name: "WiFi Smart Chime",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Plug-in chime designed to pair with a UniFi doorbell.",
        specs: [
          "Plug-in chime designed to pair with a UniFi doorbell",
          "Enterprise-grade quality",
          "Easy to deploy and manage",
          "Note. Third-party WiFi configuration available during setup with the UniFi Protect mobile app."
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "⌀62 x 50.6 mm (⌀2.4 x 2') (Without prong)" },
          { label: "Weight", value: "127 g (4.5 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, fabric" },
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
        ],
        productLink: "/products/mounting-kit-uvc-g6-pro-entry"
      },
      {
        id: 2,
        name: "Fail-Secure Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric strike lock with 8 mm lock slot depth support.",
        specs: [
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
          "Lock Type Fail secure",
          "Holding Force 227 kg (500 lb)"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body:112 x 21 x 28 mm (4.4 x 0.8 x 1.1') Short front plate:153 x 25 x 3 mm (6 x 0.9 x 0.1') Long front plate:250 x 25 x 3 mm (9.8 x 0.9 x 0.1')" },
          { label: "Weight", value: "Lock body: 197 g (6.9 oz) Short front plate: 62 g (2.2 oz) Long front plate: 97 g (3.4 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "227 kg (500 lb)" },
          { label: "Lock Features Current Power", value: "200mA ± 10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/mounting-kit-ua-g3-pro-b/w"
      },
      {
        id: 3,
        name: "Fail-Safe Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric strike lock that connects to a UniFi Access Hub.",
        specs: [
          "Door Status Contact Type Dry contact",
          "Lock Features Lock Type Fail safe",
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 80 x 40 x 35 mm (3.2 x 1.6 x 1.4') Short front plate: 124 x 32 x 3 mm (4.9 x 1.3 x 0.1') Long front plate: 202 x 36 x 3 mm (7.9 x 1.4 x 0.1')" },
          { label: "Weight", value: "Lock body: 185 g (6.5 oz) Short front plate: 50 g (1.8 oz) Long front plate: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "1,200 kg (2,645 lb)" },
          { label: "Lock Features Current Power", value: "400mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/power-cable-ua-g3-pro-b/w"
      },
      {
        id: 4,
        name: "Fail-Secure Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "en/metal) DPS" },
          { label: "Lock Features Current Power", value: "Standby: 12mA ±10% Dynamic: 600mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) Lock 12V/NC (blue) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Ketiga dari DoorAccess, SF Hubs
  {
    id: "UA-Hub-Door",
    name: "Door Hub",
    category: "Door Access",
    subfilter: "Hubs",
    image: "/images/camera.jpg",
    shortDescription:
      "A single-door mechanism that provides complete entry and exit control via connected Access Readers.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-HUB-DOOR",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Supported Doors 1",
      "Input Terminals (2) Door exit request (1) Door position (1) Emergency",
      "Maximum User Count 6,000"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "174.9 x 126 x 32.9 mm (6.9 x 5 x 1.3')" },
          { label: "Supported Doors", value: "1" },
          { label: "Maximum User Count", value: "6,000" },
          { label: "input Terminal", value: "(2) Door exit request (1) Door position (1) Emergency" },
          { label: "Power Method", value: "PoE++ UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level ILine security: Level I Endurance: Level I Standby power: Level I" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "363 g (12.8 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Mounting", value: "Din-rail (Included)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Digital Input", value: "Request to exit, request to enter, remote release, door position sensor" },
          { label: "Dry Output Relay", value: "Lock: 30V DC, 1A Aux: 30V DC, 1A" },
          { label: "Power Output Relay", value: "Lock: 12V DC, 1A Aux: 12V DC, 0.33A 12V DC, 0.33A" },
          { label: "Indoor and Outdoor Use", value: "Indoor only" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C  (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Networking Interface", value: "(5) 10/100/1000 Base-T" },
          { label: "PoE Interface", value: "(1) PoE++ input, 50V DC, 1A (4) PoE+ outputs, 50V DC, 30W per port (Max 45W aggregated)" },
          { label: "Max. Power Consumption", value: "30W (Without PoE output) 50W (With PoE output)" },
          { label: "LEDs", value: "W/B " },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Recommend Max. Cable Length UA-Lock-Electric(400mA)", value: "24 AWG length: 25 m (82 ft)22 AWG length: 42 m (138 ft) 20 AWG length: 66 m (217 ft) 18 UACC-Cable-DoorLockRelay length: 100 m (328 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-540kg (500mA)", value: "24 AWG length: 20 m (66 ft) 22 AWG length: 32 m (105 ft) 20 AWG length: 51 m (167 ft) 18 UACC-Cable-DoorLockRelay length: 80 m (262 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-270kg (800mA)", value: "24 AWG length: 12 m (29 ft) 22 AWG length: 20 m (98 ft) 20 AWG length: 30 m (167 ft) 18 UACC-Cable-DoorLockRelay length: 46 m (151 ft)" },
          { label: "Recommend Max. Cable Other locks (1A)", value: "24 AWG length: 9 m (30 ft) 22 AWG length: 15 m (49 ft) 20 AWG length: 24 m (79 ft) 18 UACC-Cable-DoorLockRelay length: 36 m (118 ft)" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 (at or af) specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: 1" },
          { label: "Certifications", value: "CE, FCC, IC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-Hub-Door002, V01" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management Application", value: "Access" },
          { label: "Software Information", value: "The software version can be checked at" },
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
        name: "WiFi Smart Chime",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Plug-in chime designed to pair with a UniFi doorbell.",
        specs: [
          "Plug-in chime designed to pair with a UniFi doorbell",
          "Enterprise-grade quality",
          "Easy to deploy and manage",
          "Note. Third-party WiFi configuration available during setup with the UniFi Protect mobile app."
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "⌀62 x 50.6 mm (⌀2.4 x 2') (Without prong)" },
          { label: "Weight", value: "127 g (4.5 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, fabric" },
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
        ],
        productLink: "/products/mounting-kit-uvc-g6-pro-entry"
      },
      {
        id: 2,
        name: "Fail-Secure Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric strike lock with 8 mm lock slot depth support.",
        specs: [
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
          "Lock Type Fail secure",
          "Holding Force 227 kg (500 lb)"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body:112 x 21 x 28 mm (4.4 x 0.8 x 1.1') Short front plate:153 x 25 x 3 mm (6 x 0.9 x 0.1') Long front plate:250 x 25 x 3 mm (9.8 x 0.9 x 0.1')" },
          { label: "Weight", value: "Lock body: 197 g (6.9 oz) Short front plate: 62 g (2.2 oz) Long front plate: 97 g (3.4 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "227 kg (500 lb)" },
          { label: "Lock Features Current Power", value: "200mA ± 10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/mounting-kit-ua-g3-pro-b/w"
      },
      {
        id: 3,
        name: "Fail-Safe Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric strike lock that connects to a UniFi Access Hub.",
        specs: [
          "Door Status Contact Type Dry contact",
          "Lock Features Lock Type Fail safe",
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 80 x 40 x 35 mm (3.2 x 1.6 x 1.4') Short front plate: 124 x 32 x 3 mm (4.9 x 1.3 x 0.1') Long front plate: 202 x 36 x 3 mm (7.9 x 1.4 x 0.1')" },
          { label: "Weight", value: "Lock body: 185 g (6.5 oz) Short front plate: 50 g (1.8 oz) Long front plate: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "1,200 kg (2,645 lb)" },
          { label: "Lock Features Current Power", value: "400mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/power-cable-ua-g3-pro-b/w"
      },
      {
        id: 4,
        name: "Fail-Secure Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "en/metal) DPS" },
          { label: "Lock Features Current Power", value: "Standby: 12mA ±10% Dynamic: 600mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) Lock 12V/NC (blue) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Keempat dari DoorAccess, SF Hubs
  {
    id: "UA-Hub-Door-Mini",
    name: "Door Hub Mini",
    category: "Door Access",
    subfilter: "Hubs",
    image: "/images/camera.jpg",
    shortDescription: "Compact Access Control Hub for a single door.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-HUB-DOOR-MINI",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Supported Doors 1",
      "Maximum User Count 3,000",
      "Power Method PoE++ UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "113 x 66 x 27.6 mm (4.4 x 2.6 x 1.1')" },
          { label: "Supported Doors", value: "1" },
          { label: "Maximum User Count", value: "3,000" },
          { label: "input Terminal", value: "(1) Door exit request (1) Door position" },
          { label: "Power Method", value: "PoE++ UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level ILine security: Level I Endurance: Level I Standby power: Level I" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "190 g (6.7 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, metal" },
          { label: "Mounting", value: "Din-rail (Included)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Dry Output Relay", value: "30V DC, 1A" },
          { label: "Wet Output Relay", value: "12V DC, 1A" },
          { label: "Indoor and Outdoor Use", value: "Indoor only" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C  (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Networking Interface", value: "(3) GbE RJ45 ports" },
          { label: "PoE Interface", value: "(1) PoE++ input, 50V DC, 1A (2) PoE+ outputs, 50V DC, 30W per port  (Max 45W aggregated)" },
          { label: "Max. Power Consumption", value: "19W (Without PoE output) 50W (With PoE output)" },
          { label: "LEDs", value: "W/B " },
          { label: "Button", value: "(1) Factory reset (1) Dry/Wet switch" },
          { label: "Recommend Max. Cable Length UA-Lock-Electric(400mA)", value: "24 AWG length: 25 m (82 ft) 22 AWG length: 42 m (138 ft) 20 AWG length: 66 m (217 ft) 18 UACC-Cable-DoorLockRelay length: 100 m (328 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-540kg (500mA)", value: "24 AWG length: 12 m (29 ft) 22 AWG length: 20 m (66 ft) 20 AWG length: 30 m (98 ft) 18 UACC-Cable-DoorLockRelay length: 46 m (262 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-270kg (800mA)", value: "24 AWG length: 12 m (29 ft) 22 AWG length: 20 m (98 ft) 20 AWG length: 30 m (167 ft) 18 UACC-Cable-DoorLockRelay length: 46 m (151 ft)" },
          { label: "Recommend Max. Cable Other locks (1A)", value: "24 AWG length: 9 m (30 ft) 22 AWG length: 15 m (49 ft) 20 AWG length: 24 m (79 ft) 18 UACC-Cable-DoorLockRelay length: 36 m (118 ft)" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits. " },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: 1" },
          { label: "Certifications", value: "CE, FCC, IC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-Hub-Door-Mini, V01" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management Application", value: "Access" },
          { label: "Software Information", value: "The software version can be checked at" },
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
        name: "WiFi Smart Chime",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Plug-in chime designed to pair with a UniFi doorbell.",
        specs: [
          "Plug-in chime designed to pair with a UniFi doorbell",
          "Enterprise-grade quality",
          "Easy to deploy and manage",
          "Note. Third-party WiFi configuration available during setup with the UniFi Protect mobile app."
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "⌀62 x 50.6 mm (⌀2.4 x 2') (Without prong)" },
          { label: "Weight", value: "127 g (4.5 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, fabric" },
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
        ],
        productLink: "/products/mounting-kit-uvc-g6-pro-entry"
      },
      {
        id: 2,
        name: "Fail-Secure Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric strike lock with 8 mm lock slot depth support.",
        specs: [
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
          "Lock Type Fail secure",
          "Holding Force 227 kg (500 lb)"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body:112 x 21 x 28 mm (4.4 x 0.8 x 1.1') Short front plate:153 x 25 x 3 mm (6 x 0.9 x 0.1') Long front plate:250 x 25 x 3 mm (9.8 x 0.9 x 0.1')" },
          { label: "Weight", value: "Lock body: 197 g (6.9 oz) Short front plate: 62 g (2.2 oz) Long front plate: 97 g (3.4 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "227 kg (500 lb)" },
          { label: "Lock Features Current Power", value: "200mA ± 10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/mounting-kit-ua-g3-pro-b/w"
      },
      {
        id: 3,
        name: "Fail-Safe Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric strike lock that connects to a UniFi Access Hub.",
        specs: [
          "Door Status Contact Type Dry contact",
          "Lock Features Lock Type Fail safe",
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 80 x 40 x 35 mm (3.2 x 1.6 x 1.4') Short front plate: 124 x 32 x 3 mm (4.9 x 1.3 x 0.1') Long front plate: 202 x 36 x 3 mm (7.9 x 1.4 x 0.1')" },
          { label: "Weight", value: "Lock body: 185 g (6.5 oz) Short front plate: 50 g (1.8 oz) Long front plate: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "1,200 kg (2,645 lb)" },
          { label: "Lock Features Current Power", value: "400mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/power-cable-ua-g3-pro-b/w"
      },
      {
        id: 4,
        name: "Fail-Secure Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "en/metal) DPS" },
          { label: "Lock Features Current Power", value: "Standby: 12mA ±10% Dynamic: 600mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) Lock 12V/NC (blue) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Kelima dari DoorAccess, SF Hubs
  {
    id: "UA-Hub-Gate",
    name: "Gate Hub",
    category: "Door Access",
    subfilter: "Hubs",
    image: "/images/camera.jpg",
    shortDescription:
      "An advanced Gate Hub enabling seamless gate access control via connected Access readers or Intercom.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-HUB-GATE",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Weight 460 g (1 lb)",
      "Supported Doors 1 gate, 1 side door",
      "Maximum User Count 6,000",
      "Note: Access integration for G6 Series coming soon"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "175 x 126 x 26 mm (6.9 x 5 x 1')" },
          { label: "Supported Doors", value: "1 gate, 1 side door" },
          { label: "Maximum User Count", value: "6,000" },
          { label: "input Terminal", value: "(1) Gate exit request (1) Gate position (1) Side door exit request (1) Side door position (1) Emergency" },
          { label: "Power Method", value: "PoE++ UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level ILine security: Level I Endurance: Level I Standby power: Level I" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "460 g (1 lb)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mounting", value: "Din-rail (Included)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Digital Input", value: "Gate exit request, gate position, side door exit request, side door position, emergency" },
          { label: "Dry Output Relay", value: "(2) Operator: rated 30V DC, up to 1A (1) Aux: rated 30V DC, up to 1A" },
          { label: "Powered Output Relay", value: "Side door lock: 12V DC, up to 1A" },
          { label: "Indoor and Outdoor Use", value: "Indoor only: device itself Outdoor: with waterproof junction box" },
          { label: "Ambient Operating Temperature", value: "-30 to 60° C  (-22 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Networking Interface", value: "(5) 10/100/1000 Base-T" },
          { label: "PoE Interface", value: "(1) PoE++ input, 50V DC, 1A (4) PoE+ outputs, 50V DC, 30W per port (Max 55W aggregated)" },
          { label: "Max. Power Consumption", value: "22W (Without PoE output) 60W (With PoE output)" },
          { label: "LEDs", value: "W/B " },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Recommend Max. Cable Length UA-Lock-Electric(400mA)", value: "24 AWG length: 25 m (82 ft) 22 AWG length: 42 m (138 ft) 20 AWG length: 66 m (217 ft) 18 UACC-Cable-DoorLockRelay length: 100 m (328 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-540kg (500mA)", value: "24 AWG length: 20 m (66 ft) 22 AWG length: 32 m (105 ft) 20 AWG length: 51 m (167 ft) 18 UACC-Cable-DoorLockRelay length: 80 m (262 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-270kg (800mA)", value: "24 AWG length: 12 m (29 ft) 22 AWG length: 20 m (66 ft) 20 AWG length: 30 m (98 ft) 18 UACC-Cable-DoorLockRelay length: 46 m (151 ft)" },
          { label: "Recommend Max. Cable Other locks (1A)", value: "24 AWG length: 9 m (30 ft) 22 AWG length: 15 m (49 ft) 20 AWG length: 24 m (79 ft) 18 UACC-Cable-DoorLockRelay length: 36 m (118 ft" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: 1" },
          { label: "Certifications", value: "CE, FCC, IC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-Hub-Gate, V01" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management Application", value: "Access" },
          { label: "Software Information", value: "The software version can be checked at" },
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
        name: "WiFi Smart Chime",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Plug-in chime designed to pair with a UniFi doorbell.",
        specs: [
          "Plug-in chime designed to pair with a UniFi doorbell",
          "Enterprise-grade quality",
          "Easy to deploy and manage",
          "Note. Third-party WiFi configuration available during setup with the UniFi Protect mobile app."
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "⌀62 x 50.6 mm (⌀2.4 x 2') (Without prong)" },
          { label: "Weight", value: "127 g (4.5 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, fabric" },
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
        ],
        productLink: "/products/mounting-kit-uvc-g6-pro-entry"
      },
      {
        id: 2,
        name: "Fail-Secure Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric strike lock with 8 mm lock slot depth support.",
        specs: [
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
          "Lock Type Fail secure",
          "Holding Force 227 kg (500 lb)"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body:112 x 21 x 28 mm (4.4 x 0.8 x 1.1') Short front plate:153 x 25 x 3 mm (6 x 0.9 x 0.1') Long front plate:250 x 25 x 3 mm (9.8 x 0.9 x 0.1')" },
          { label: "Weight", value: "Lock body: 197 g (6.9 oz) Short front plate: 62 g (2.2 oz) Long front plate: 97 g (3.4 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "227 kg (500 lb)" },
          { label: "Lock Features Current Power", value: "200mA ± 10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/mounting-kit-ua-g3-pro-b/w"
      },
      {
        id: 3,
        name: "Fail-Safe Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric strike lock that connects to a UniFi Access Hub.",
        specs: [
          "Door Status Contact Type Dry contact",
          "Lock Features Lock Type Fail safe",
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 80 x 40 x 35 mm (3.2 x 1.6 x 1.4') Short front plate: 124 x 32 x 3 mm (4.9 x 1.3 x 0.1') Long front plate: 202 x 36 x 3 mm (7.9 x 1.4 x 0.1')" },
          { label: "Weight", value: "Lock body: 185 g (6.5 oz) Short front plate: 50 g (1.8 oz) Long front plate: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "1,200 kg (2,645 lb)" },
          { label: "Lock Features Current Power", value: "400mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/power-cable-ua-g3-pro-b/w"
      },
      {
        id: 4,
        name: "Fail-Secure Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "en/metal) DPS" },
          { label: "Lock Features Current Power", value: "Standby: 12mA ±10% Dynamic: 600mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) Lock 12V/NC (blue) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  //Produk Keenam dari DoorAccess, SF Hubs
  {
    id: "UA-Ultra",
    name: "Access Ultra",
    category: "Door Access",
    subfilter: "Readers",
    image: "/images/camera.jpg",
    shortDescription:
      "An access reader with a built-in hub for complete, single-door entry control from one device.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-ULTRA",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Max. Power Consumption 18W",
      "Weight140 g (4.9 oz)",
      "ConnectivityBLE 4.2 Ethernet",
      "Note. Not compatible with standalone Access Hubs."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "126 x 45 x 37.45 mm (4.9 x 1.8 x 4.5')" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Maximum User Count", value: "3,000" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Tamper Switch", value: "✓" },
          { label: "Weatherproofing", value: "IP65" },
        ]
      },
      {
        title: "Mechanical",
        items: [
          { label: "Weight", value: "140 g (4.9 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, aluminum alloy" },
          { label: "Mount Material", value: "Stainless steel" },
          { label: "Mounting", value: "Wall mount, gang box mount (Included) Junction box (Optional)" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Indoor and Outdoor Use", value: "Yes" },
          { label: "Networking Interface", value: "(1) 10/100 MbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.2 Ethernet" },
          { label: "Power Method", value: "PoE+ UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "18W" },
          { label: "Supported Voltage Range", value: "44–57V DC" },
          { label: "ESD/EMP Protection", value: "Air: ± 8kV, contact: ± 4kV" },
          { label: "Speaker", value: "✓" },
          { label: "LEDs", value: "R/G/B/W " },
          { label: "Button", value: "(1) Factory reset" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Read Range", value: "< 50 mm (1.95'')" },
          { label: "NFC Technology", value: "ISO 14443A, 14443B, 15693 NFC Tag 1,2,3,4,5 MIFARE Classic MIFARE Plus Mifare Ultralight MIFARE DESFire" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 06371-24-08356, SRRC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-Ultra, V01" },
          { label: "Ambient Operating Temperature", value: "-30 to 40° C (-22 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Management Application", value: "Access" },
          { label: "Software Information", value: "The software version can be checked at" },
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
        name: "WiFi Smart Chime",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Plug-in chime designed to pair with a UniFi doorbell.",
        specs: [
          "Plug-in chime designed to pair with a UniFi doorbell",
          "Enterprise-grade quality",
          "Easy to deploy and manage",
          "Note. Third-party WiFi configuration available during setup with the UniFi Protect mobile app."
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "⌀62 x 50.6 mm (⌀2.4 x 2') (Without prong)" },
          { label: "Weight", value: "127 g (4.5 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, fabric" },
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
        ],
        productLink: "/products/mounting-kit-uvc-g6-pro-entry"
      },
      {
        id: 2,
        name: "Fail-Secure Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric strike lock with 8 mm lock slot depth support.",
        specs: [
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
          "Lock Type Fail secure",
          "Holding Force 227 kg (500 lb)"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body:112 x 21 x 28 mm (4.4 x 0.8 x 1.1') Short front plate:153 x 25 x 3 mm (6 x 0.9 x 0.1') Long front plate:250 x 25 x 3 mm (9.8 x 0.9 x 0.1')" },
          { label: "Weight", value: "Lock body: 197 g (6.9 oz) Short front plate: 62 g (2.2 oz) Long front plate: 97 g (3.4 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "227 kg (500 lb)" },
          { label: "Lock Features Current Power", value: "200mA ± 10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/mounting-kit-ua-g3-pro-b/w"
      },
      {
        id: 3,
        name: "Fail-Safe Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric strike lock that connects to a UniFi Access Hub.",
        specs: [
          "Door Status Contact Type Dry contact",
          "Lock Features Lock Type Fail safe",
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 80 x 40 x 35 mm (3.2 x 1.6 x 1.4') Short front plate: 124 x 32 x 3 mm (4.9 x 1.3 x 0.1') Long front plate: 202 x 36 x 3 mm (7.9 x 1.4 x 0.1')" },
          { label: "Weight", value: "Lock body: 185 g (6.5 oz) Short front plate: 50 g (1.8 oz) Long front plate: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "1,200 kg (2,645 lb)" },
          { label: "Lock Features Current Power", value: "400mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/power-cable-ua-g3-pro-b/w"
      },
      {
        id: 4,
        name: "Fail-Secure Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "en/metal) DPS" },
          { label: "Lock Features Current Power", value: "Standby: 12mA ±10% Dynamic: 600mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) Lock 12V/NC (blue) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },


  // Produk Pertama dari DoorAccess, SF Kits
  {
    id: "UA-G3-SK-Pro",
    name: "G3 Starter Kit Pro",
    category: "Door Access",
    subfilter: "Kits",
    image: "/images/camera.jpg",
    shortDescription:
      "Starter kit that provides complete entry and exit control fo a single door with two readers and Touch Pass support.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-G3-SK-PRO",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Maximum User Count 6,000",
      "Supported Doors 1",
      "Touch Pass 10 free 1-year Touch Passes included ",
      "Note. 10 free 1-year Touch Passes included."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "In the Box", value: "(1) Door Hub (1) G3 Reader Pro (1) G3 Reader (2) Pocket Keyfobs" },
          { label: "Touch Pass", value: "10 free 1-year Touch Passes included " },
        ]
      },
      {
        title: "Door Hub",
        items: [
          { label: "Dimensions", value: "174.9 x 126 x 32.9 mm (6.9 x 5 x 1.3')" },
          { label: "Supported Door", value: "1" },
          { label: "Maximum User Count", value: "6,000" },
          { label: "Input Terminal", value: "(2) Door exit request (1) Door position (1) Emergency" },
          { label: "Power Method", value: "PoE++ UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weight", value: "363 g (12.8 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Mounting", value: "DIN-rail (Included)" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "Networking Interface", value: "(5) 10/100/1000 Base-T" },
          { label: "PoE Interface", value: "(1) PoE++ input, 50V DC, 1A (4) PoE outputs, 50V DC, 30W per port (Max 45W aggregated)" },
          { label: "Max. Power Consumption", value: "30W (Without PoE output) 50W (With PoE output)" },
          { label: "Digital Input", value: "Request to exit, request to enter, remote release, door position sensor" },
          { label: "Dry Output Relay", value: "Lock: 30V DC, 1A Aux: 30V DC, 1A" },
          { label: "Powered Output Relay", value: "Lock: 12V DC, 1A Aux: 12V DC, 0.33A 12V DC, 0.33A" },
          { label: "LEDs", value: "B/W" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "Recommend Max. Cable Length UA-Lock-Electric (400mA)", value: "24 AWG length: 25 m (82 ft) 22 AWG length: 42 m (138 ft) 20 AWG length: 66 m (217 ft) 18 UACC-Cable-DoorLockRelay length: 100 m (328 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-540kg (500mA)", value: "24 AWG length: 20 m (66 ft) 22 AWG length: 32 m (105 ft) 20 AWG length: 51 m (167 ft) 18 UACC-Cable-DoorLockRelay length: 80 m (262 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-270kg (800mA)", value: "24 AWG length: 12 m (29 ft) 22 AWG length: 20 m (98 ft) 20 AWG length: 30 m (167 ft) 18 UACC-Cable-DoorLockRelay length: 46 m (151 ft)" },
          { label: "Recommend Max. Cable Length Other locks (1A)", value: "24 AWG length: 9 m (30 ft) 22 AWG length: 15 m (49 ft) 20 AWG length: 24 m (79 ft) 18 UACC-Cable-DoorLockRelay length: 36 m (118 ft)" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 (at or af) specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: 1" },
          { label: "Certifications", value: "CE, FCC, IC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-Hub-Door002, V01" },
          { label: "Software Information", value: "The software version can be checked at " },
        ]
      },
      {
        title: "G3 Reader Pro",
        items: [
          { label: "Dimensions", value: "160 x 40.4 x 40.55 mm (6.3 x 1.59 x 1.6')" },
          { label: "Integrated Camera", value: "✓" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "PIN Access", value: "✓" },
          { label: "Apple/Google Wallet", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Face Unlock", value: "✓" },
          { label: "Two-Way Intercom & Doorbell Access", value: "✓" },
          { label: "Weatherproofing", value: "IP55" },
          { label: "NDA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weight", value: "136 g (4.8 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, glass" },
          { label: "Mount Material", value: "Aluminum alloy" },
          { label: "Mounting", value: "Wall, gang-box mount (Included) Angle mount, junction box (Optional)" },
          { label: "Indoor and Outdoor Use", value: "✓" },
          { label: "Ambient Operating Temperature", value: "Device: -30 to 45° C (-22 to 113° F) Display: -10 to 45° C (14 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.2 NFC" },
          { label: "Power Method", value: "PoE UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "6W" },
          { label: "Supported Voltage Range", value: "48V DC" },
          { label: "ESD/EMP Protection", value: "Air: ±15kV, contact: ±8kV" },
          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Resolution", value: "2MP 1200 x 1600 (3:4)" },
          { label: "Optics Resolution", value: "12 MP (3072 × 4096)" },
          { label: "Optic Field of View", value: "H: 98.6°, V: 125.7°, D: 157.8°" },
          { label: "Sensor", value: "Proximity sensor" },
          { label: "Display Size", value: "Size120 mm (4.7') diagonal Screen Technology Capacitive touch" },
          { label: "Display Screen Technology", value: "Capacitive touch" },
          { label: "Display Screen Luminance", value: "480 nits (Typical)" },
          { label: "Display Luminance", value: "Portrait" },
          { label: "Display Screen Orientation", value: "Potrait" },
          { label: "Display Resolution", value: "1280 x 286 px" },
          { label: "Microphone", value: "✓" },
          { label: "Speaker", value: "✓" },
          { label: "LEDs", value: "R/G/B/W/Amber" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Read Range", value: "< 30 mm (1.18'')" },
          { label: "NFC Technology", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T ECP 2.0" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-G3-Pro-W/UA-G3-Pro-B, V01" },
          { label: "Software Information", value: "The software version can be checked at https://unifi.ui.com" },
        ]
      },
      {
        title: "G3 Reader",
        items: [
          { label: "Dimensions", value: "93 x 40 x 36.5 mm (3.7 x 1.6 x 1.4')" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "Apple/Google Wallet", value: "✓" },
          { label: "PIN Access", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Handwave Request to Exit", value: "✓" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weatherproofing", value: "IP55" },
          { label: "Weight", value: "82 g (2.9 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, glass" },
          { label: "Mount Material", value: "Aluminum alloy" },
          { label: "Mounting", value: "In-wall, gang box (Included) Junction box (Optional)" },
          { label: "Indoor and Outdoor Use", value: "✓" },
          { label: "Ambient Operating Temperature", value: "-30 to 45° C  (-22 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Networking Interface", value: "(1) 10/100 MbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.1 NFC" },
          { label: "Power Method", value: "PoE UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "5W" },
          { label: "Supported Voltage Range", value: "48V DC" },
          { label: "ESD/EMP Protection", value: "Air: ± 15kV, contact: ± 8kV" },
          { label: "Sensors", value: "Proximity sensor" },
          { label: "Speaker", value: "✓" },
          { label: "LEDs", value: "R/G/B/W" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Read Range", value: "< 30 mm (1.18'')" },
          { label: "NFC Technology", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T ECP 2.0" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-G3, V01" },
          { label: "Software Information", value: "The software version can be checked at " },
        ]
      },
      {
        title: "Pocket Keyfob",
        items: [
          { label: "Dimensions", value: "84 x 39 x 7.4 mm (3.3 x 1.5 x 0.29')" },
          { label: "Weight", value: "16 g (0.56 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, stainless steel, silicone rubber" },
          { label: "Weatherproofing", value: "IP54" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Ambient Operating Temperature", value: "-10 to 45° C (14 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Technology", value: "ISO/IEC 14443 Type A MIFARE DESFire EV3 4K UniFi Access Proprietary Security Protocol" },
          { label: "Certifications", value: "CE" },
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
        name: "Access Card",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A pack of highly-secure NFC cards used for access control within UniFi.",
        specs: [
          "Multi-layer encryption to avoid malicious duplication",
          "Assignable to users and visitors",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "85.6 x 53.98 x 0.84 mm (3.37 x 2.13 x 0.03')" },
          { label: "Weight", value: "5 g (0.18 oz)" },
          { label: "Format", value: "ISO 7810 ID-1" },
          { label: "NFC Technology", value: "MIFARE DESFire EV3 UniFi Access Proprietary Security Protocol" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "Anatel" },
        ],
        productLink: "/products/power-cable-ua-retrofit-reader-b/w"
      },
      {
        id: 2,
        name: "Fail-Secure Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric strike lock with 8 mm lock slot depth support.",
        specs: [
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
          "Lock Type Fail secure",
          "Holding Force 227 kg (500 lb)"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body:112 x 21 x 28 mm (4.4 x 0.8 x 1.1') Short front plate:153 x 25 x 3 mm (6 x 0.9 x 0.1') Long front plate:250 x 25 x 3 mm (9.8 x 0.9 x 0.1')" },
          { label: "Weight", value: "Lock body: 197 g (6.9 oz) Short front plate: 62 g (2.2 oz) Long front plate: 97 g (3.4 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "227 kg (500 lb)" },
          { label: "Lock Features Current Power", value: "200mA ± 10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/mounting-kit-ua-g3-pro-b/w"
      },
      {
        id: 3,
        name: "Fail-Safe Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric strike lock that connects to a UniFi Access Hub.",
        specs: [
          "Door Status Contact Type Dry contact",
          "Lock Features Lock Type Fail safe",
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 80 x 40 x 35 mm (3.2 x 1.6 x 1.4') Short front plate: 124 x 32 x 3 mm (4.9 x 1.3 x 0.1') Long front plate: 202 x 36 x 3 mm (7.9 x 1.4 x 0.1')" },
          { label: "Weight", value: "Lock body: 185 g (6.5 oz) Short front plate: 50 g (1.8 oz) Long front plate: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "1,200 kg (2,645 lb)" },
          { label: "Lock Features Current Power", value: "400mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/power-cable-ua-g3-pro-b/w"
      },
      {
        id: 4,
        name: "Fail-Secure Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "en/metal) DPS" },
          { label: "Lock Features Current Power", value: "Standby: 12mA ±10% Dynamic: 600mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) Lock 12V/NC (blue) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Kedua dari DoorAccess, SF Kits
  {
    id: "UA-G2-SK-Pro",
    name: "G2 Starter Kit Pro",
    category: "Door Access",
    subfilter: "Kits",
    image: "/images/camera.jpg",
    shortDescription:
      "Starter kit that provides complete entry and exit control for a single door with two readers.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-G2-SK-PRO",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Button (1) Factory reset",
      "Maximum User Count 6,000",
      "Supported Doors 1"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "In the Box", value: "(1) Door Hub (1) G2 Reader Pro (1) G2 Reader (2) Pocket Keyfobs" },
        ]
      },
      {
        title: "Door Hub",
        items: [
          { label: "Dimensions", value: "174.9 x 126 x 32.9 mm (6.9 x 5 x 1.3')" },
          { label: "Supported Door", value: "1" },
          { label: "Maximum User Count", value: "6,000" },
          { label: "Input Terminal", value: "(2) Door exit request (1) Door position (1) Emergency" },
          { label: "Power Method", value: "PoE++ UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "NDA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weight", value: "363 g (12.8 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Mounting", value: "DIN-rail (Included)" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "Networking Interface", value: "(5) 10/100/1000 Base-T" },
          { label: "PoE Interface", value: "(1) PoE++ input, 50V DC, 1A (4) PoE outputs, 50V DC, 30W per port (Max 45W aggregated)" },
          { label: "Max. Power Consumption", value: "30W (Without PoE output) 50W (With PoE output)" },
          { label: "Digital Input", value: "Request to exit, request to enter, remote release, door position sensor" },
          { label: "Dry Output Relay", value: "Lock: 30V DC, 1A Aux: 30V DC, 1A" },
          { label: "Powered Output Relay", value: "Lock: 12V DC, 1A Aux: 12V DC, 0.33A 12V DC, 0.33A" },
          { label: "LEDs", value: "B/W" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "Recommend Max. Cable Length UA-Lock-Electric (400mA)", value: "24 AWG length: 25 m (82 ft) 22 AWG length: 42 m (138 ft) 20 AWG length: 66 m (217 ft) 18 UACC-Cable-DoorLockRelay length: 100 m (328 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-540kg (500mA)", value: "24 AWG length: 20 m (66 ft) 22 AWG length: 32 m (105 ft) 20 AWG length: 51 m (167 ft) 18 UACC-Cable-DoorLockRelay length: 80 m (262 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-270kg (800mA)", value: "24 AWG length: 12 m (29 ft) 22 AWG length: 20 m (98 ft) 20 AWG length: 30 m (167 ft) 18 UACC-Cable-DoorLockRelay length: 46 m (151 ft)" },
          { label: "Recommend Max. Cable Length Other locks (1A)", value: "24 AWG length: 9 m (30 ft) 22 AWG length: 15 m (49 ft) 20 AWG length: 24 m (79 ft) 18 UACC-Cable-DoorLockRelay length: 36 m (118 ft)" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 (at or af) specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: 1" },
          { label: "Certifications", value: "CE, FCC, IC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-Hub-Door002, V01" },
          { label: "Software Information", value: "The software version can be checked at " },
        ]
      },
      {
        title: "G2 Reader Pro",
        items: [
          { label: "Dimensions", value: "160 x 40.4 x 40.55 mm (6.3 x 1.59 x 1.6')" },
          { label: "Integrated Camera", value: "✓" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "PIN Access", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Face Unlock", value: "✓" },
          { label: "Two-Way Intercom & Doorbell Access", value: "✓" },
          { label: "Weatherproofing", value: "IP55" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weight", value: "136 g (4.8 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, glass" },
          { label: "Mount Material", value: "Aluminum alloy" },
          { label: "Mounting", value: "Wall, gang-box mount (Included) Angle mount, junction box (Optional)" },
          { label: "Indoor and Outdoor Use", value: "✓" },
          { label: "Ambient Operating Temperature", value: "Device: -30 to 45° C (-22 to 113° F) Display: -10 to 45° C (14 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.2 NFC" },
          { label: "Power Method", value: "PoE UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "6W" },
          { label: "Supported Voltage Range", value: "48V DC" },
          { label: "ESD/EMP Protection", value: "Air: ± 15kV, contact: ± 8kV" },

          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Max. Resolution", value: "2MP 1200 x 1600 (3:4)" },

          { label: "Optics Resolution", value: "12 MP (3072 × 4096)" },
          { label: "Optics Field of View", value: "H: 98.6°, V: 125.7°, D: 157.8°" },

          { label: "Sensors", value: "Proximity sensor" },

          { label: "Display Luminance", value: "480 nits (Typical)" },
          { label: "Display Screen Orientation", value: "Potrait" },
          { label: "Display Resolution", value: "1280 x 286 px" },
          { label: "Display Screen Technology", value: "Capacitive touch" },
          { label: "Display Size", value: "120 mm (4.7') diagonal" },

          { label: "Microphone", value: "✓" },
          { label: "Speaker", value: "✓" },
          { label: "LEDs", value: "R/G/B/W/Amber" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Read Range", value: "< 30 mm (1.18'')" },
          { label: "NFC Technology", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-G2-Pro/UA-G2-Pro-Black, V02" },
          { label: "Software Information", value: "The software version can be checked at " },
        ]
      },
      {
        title: "G2 Reader",
        items: [
          { label: "Dimensions", value: "93 x 40 x 36.5 mm (3.7 x 1.6 x 1.4')" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Handwave Request to Exit", value: "✓" },
          { label: "Weatherproofing", value: "IP55" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weight", value: "82 g (2.9 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, glass" },
          { label: "Mount Material", value: "Aluminum alloy" },
          { label: "Mounting", value: "In-wall, gang box (Included) Junction box (Optional)" },
          { label: "Indoor and Outdoor Use", value: "✓" },
          { label: "Ambient Operating Temperature", value: "-30 to 45° C  (-22 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Networking Interface", value: "(1) 10/100 MbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.1 NFC" },
          { label: "Power Method", value: "PoE UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "5W" },
          { label: "Supported Voltage Range", value: "48V DC" },
          { label: "ESD/EMP Protection", value: "Air: ± 15kV, contact: ± 8kV" },
          { label: "Sensors", value: "Proximity sensor" },
          { label: "Speaker", value: "✓" },
          { label: "LEDs", value: "R/G/B/W" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Read Range", value: "< 30 mm (1.18'')" },
          { label: "NFC Technology", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-G2/UA-G2-Black, V02" },
          { label: "Software Information", value: "The software version can be checked at " },
        ]
      },
      {
        title: "Pocket Keyfob",
        items: [
          { label: "Dimensions", value: "84 x 39 x 7.4 mm (3.3 x 1.5 x 0.29')" },
          { label: "Weight", value: "16 g (0.56 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, stainless steel, silicone rubber" },
          { label: "Weatherproofing", value: "IP54" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Ambient Operating Temperature", value: "-10 to 45° C (14 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Technology", value: "ISO/IEC 14443 Type A MIFARE DESFire EV3 4K UniFi Access Proprietary Security Protocol" },
          { label: "Certifications", value: "CE" },
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
        name: "Access Card",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A pack of highly-secure NFC cards used for access control within UniFi.",
        specs: [
          "Multi-layer encryption to avoid malicious duplication",
          "Assignable to users and visitors",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "85.6 x 53.98 x 0.84 mm (3.37 x 2.13 x 0.03')" },
          { label: "Weight", value: "5 g (0.18 oz)" },
          { label: "Format", value: "ISO 7810 ID-1" },
          { label: "NFC Technology", value: "MIFARE DESFire EV3 UniFi Access Proprietary Security Protocol" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "Anatel" },
        ],
        productLink: "/products/power-cable-ua-retrofit-reader-b/w"
      },
      {
        id: 2,
        name: "Fail-Secure Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric strike lock with 8 mm lock slot depth support.",
        specs: [
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
          "Lock Type Fail secure",
          "Holding Force 227 kg (500 lb)"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body:112 x 21 x 28 mm (4.4 x 0.8 x 1.1') Short front plate:153 x 25 x 3 mm (6 x 0.9 x 0.1') Long front plate:250 x 25 x 3 mm (9.8 x 0.9 x 0.1')" },
          { label: "Weight", value: "Lock body: 197 g (6.9 oz) Short front plate: 62 g (2.2 oz) Long front plate: 97 g (3.4 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "227 kg (500 lb)" },
          { label: "Lock Features Current Power", value: "200mA ± 10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/mounting-kit-ua-g3-pro-b/w"
      },
      {
        id: 3,
        name: "Fail-Safe Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric strike lock that connects to a UniFi Access Hub.",
        specs: [
          "Door Status Contact Type Dry contact",
          "Lock Features Lock Type Fail safe",
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 80 x 40 x 35 mm (3.2 x 1.6 x 1.4') Short front plate: 124 x 32 x 3 mm (4.9 x 1.3 x 0.1') Long front plate: 202 x 36 x 3 mm (7.9 x 1.4 x 0.1')" },
          { label: "Weight", value: "Lock body: 185 g (6.5 oz) Short front plate: 50 g (1.8 oz) Long front plate: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "1,200 kg (2,645 lb)" },
          { label: "Lock Features Current Power", value: "400mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/power-cable-ua-g3-pro-b/w"
      },
      {
        id: 4,
        name: "Fail-Secure Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "en/metal) DPS" },
          { label: "Lock Features Current Power", value: "Standby: 12mA ±10% Dynamic: 600mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) Lock 12V/NC (blue) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Ketiga dari DoorAccess, SF Kits
  {
    id: "UA-G3-SK",
    name: "G3 Starter Kit",
    category: "Door Access",
    subfilter: "Kits",
    image: "/images/camera.jpg",
    shortDescription:
      "A simple, all-in-one kit for UniFi Access, designed to manage a single door with one reader. Supports seamless setup and Touch Pass for modern, secure access control.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-G3-SK",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Weight 190 g (6.7 oz)",
      "Touch Pass 10 free 1-year Touch Passes included ",
      "Supported Doors 1",
      "Note. 10 free 1-year Touch Passes included."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "In The Box", value: "In the Box(1) Door Hub Mini (1) G3 Reader (2) Pocket Keyfobs" },
          { label: "Touch", value: "10 free 1-year Touch Passes included " },
        ]
      },
      {
        title: "Door Hub Mini",
        items: [
          { label: "Dimensions", value: "113 x 66 x 27.6 mm (4.4 x 2.6 x 1.1')" },
          { label: "Supported Door", value: "1" },
          { label: "Maximum User Count", value: "3,000" },
          { label: "Input Terminal", value: "(1) Door Exit Request (1) Door Position" },
          { label: "Power Method", value: "PoE++ UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "NDA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weight", value: "190 g (6.7 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, metal" },
          { label: "Mounting", value: "DIN-rail (Included)" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Networking Interface", value: "(3) GbE RJ45 ports" },
          { label: "PoE Interface", value: "(1) PoE++ input, 50V DC, 1A (2) PoE outputs, 50V DC, 30W per port (Max 45W aggregated)" },
          { label: "Max. Power Consumption", value: "19W (Without PoE output) 50W (With PoE output)" },
          { label: "Digital Input", value: "Request to exit, door position sensor" },
          { label: "Dry Output Relay", value: "30V DC, 1A" },
          { label: "Powered Output Relay", value: "12V DC, 1A" },
          { label: "LEDs", value: "B/W" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "Recommend Max. Cable Length UA-Lock-Electric (400mA)", value: "24 AWG length: 25 m (82 ft) 22 AWG length: 42 m (138 ft) 20 AWG length: 66 m (217 ft) 18 UACC-Cable-DoorLockRelay length: 100 m (328 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-540kg (500mA)", value: "24 AWG length: 20 m (66 ft) 22 AWG length: 32 m (105 ft) 20 AWG length: 51 m (167 ft) 18 UACC-Cable-DoorLockRelay length: 80 m (262 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-270kg (800mA)", value: "24 AWG length: 12 m (29 ft) 22 AWG length: 20 m (98 ft) 20 AWG length: 30 m (167 ft) 18 UACC-Cable-DoorLockRelay length: 46 m (151 ft)" },
          { label: "Recommend Max. Cable Length Other locks (1A)", value: "24 AWG length: 9 m (30 ft) 22 AWG length: 15 m (49 ft) 20 AWG length: 24 m (79 ft) 18 UACC-Cable-DoorLockRelay length: 36 m (118 ft)" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site.The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: 1" },
          { label: "Certifications", value: "CE, FCC, IC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-Hub-Door-Mini, V01" },
          { label: "Software Information", value: "The software version can be checked at " },
        ]
      },
      {
        title: "G3 Reader Pro",
        items: [
          { label: "Optics Resolution", value: "12 MP (3072 × 4096)" },
          { label: "Optic Field of View", value: "H: 98.6°, V: 125.7°, D: 157.8°" },
        ]
      },
      {
        title: "G3 Reader",
        items: [
          { label: "Dimensions", value: "93 x 40 x 36.5 mm (3.7 x 1.6 x 1.4')" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "Apple/Google Wallet", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Handwave Request to Exit", value: "✓" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weatherproofing", value: "IP55" },
          { label: "Weight", value: "82 g (2.9 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, glass" },
          { label: "Mount Material", value: "Aluminum alloy" },
          { label: "Mounting", value: "In-wall, gang box (Included) Junction box (Optional)" },
          { label: "Indoor and Outdoor Use", value: "Yes" },
          { label: "Networking Interface", value: "(1) 10/100 MbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.1 NFC" },
          { label: "Power Method", value: "PoE UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "5W" },
          { label: "Supported Voltage Range", value: "48V DC" },
          { label: "ESD/EMP Protection", value: "Air: ± 15kV, contact: ± 8kV" },
          { label: "Sensors", value: "Proximity sensor" },
          { label: "Speaker", value: "✓" },
          { label: "LEDs", value: "R/G/B/W" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Read Range", value: "< 30 mm (1.18'')" },
          { label: "NFC Technology", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T ECP 2.0" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-G3, V01" },
          { label: "Ambient Operating Temperature", value: "-30 to 45° C  (-22 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Software Information", value: "The software version can be checked at " },

        ]
      },
      {
        title: "Pocket Keyfob",
        items: [
          { label: "Dimensions", value: "84 x 39 x 7.4 mm (3.3 x 1.5 x 0.29')" },
          { label: "Weight", value: "16 g (0.56 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, stainless steel, silicone rubber" },
          { label: "Weatherproofing", value: "IP54" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Ambient Operating Temperature", value: "-10 to 45° C (14 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Technology", value: "ISO/IEC 14443 Type A MIFARE DESFire EV3 4K UniFi Access Proprietary Security Protocol" },
          { label: "Certifications", value: "CE" },
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
        name: "Access Card",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A pack of highly-secure NFC cards used for access control within UniFi.",
        specs: [
          "Multi-layer encryption to avoid malicious duplication",
          "Assignable to users and visitors",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "85.6 x 53.98 x 0.84 mm (3.37 x 2.13 x 0.03')" },
          { label: "Weight", value: "5 g (0.18 oz)" },
          { label: "Format", value: "ISO 7810 ID-1" },
          { label: "NFC Technology", value: "MIFARE DESFire EV3 UniFi Access Proprietary Security Protocol" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "Anatel" },
        ],
        productLink: "/products/power-cable-ua-retrofit-reader-b/w"
      },
      {
        id: 2,
        name: "Fail-Secure Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric strike lock with 8 mm lock slot depth support.",
        specs: [
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
          "Lock Type Fail secure",
          "Holding Force 227 kg (500 lb)"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body:112 x 21 x 28 mm (4.4 x 0.8 x 1.1') Short front plate:153 x 25 x 3 mm (6 x 0.9 x 0.1') Long front plate:250 x 25 x 3 mm (9.8 x 0.9 x 0.1')" },
          { label: "Weight", value: "Lock body: 197 g (6.9 oz) Short front plate: 62 g (2.2 oz) Long front plate: 97 g (3.4 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "227 kg (500 lb)" },
          { label: "Lock Features Current Power", value: "200mA ± 10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/mounting-kit-ua-g3-pro-b/w"
      },
      {
        id: 3,
        name: "Fail-Safe Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric strike lock that connects to a UniFi Access Hub.",
        specs: [
          "Door Status Contact Type Dry contact",
          "Lock Features Lock Type Fail safe",
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 80 x 40 x 35 mm (3.2 x 1.6 x 1.4') Short front plate: 124 x 32 x 3 mm (4.9 x 1.3 x 0.1') Long front plate: 202 x 36 x 3 mm (7.9 x 1.4 x 0.1')" },
          { label: "Weight", value: "Lock body: 185 g (6.5 oz) Short front plate: 50 g (1.8 oz) Long front plate: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "1,200 kg (2,645 lb)" },
          { label: "Lock Features Current Power", value: "400mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/power-cable-ua-g3-pro-b/w"
      },
      {
        id: 4,
        name: "Fail-Secure Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "en/metal) DPS" },
          { label: "Lock Features Current Power", value: "Standby: 12mA ±10% Dynamic: 600mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) Lock 12V/NC (blue) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Keempat dari DoorAccess, SF Kits
  {
    id: "UA-G2-SK",
    name: "G2 Starter Kit",
    category: "Door Access",
    subfilter: "Kits",
    image: "/images/camera.jpg",
    shortDescription:
      "A simple, all-in-one kit for UniFi Access, designed to manage a single door with one reader. Supports seamless setup for modern, secure access control.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-G2-SK",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Weight 363 g (12.8 oz)designed to manage a single door with one reader",
      "Enclosure Material Polycarbonate",
      "Mounting DIN-rail (Included)"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "In The Box", value: "(1) Door Hub (1) G2 Reader (10) Access Cards" },
        ]
      },
      {
        title: "Door Hub",
        items: [
          { label: "Dimensions", value: "174.9 x 126 x 32.9 mm (6.9 x 5 x 1.3')" },
          { label: "Supported Door", value: "1" },
          { label: "Input Terminal", value: "(2) Door exit request (1) Door position (1) Emergency" },
          { label: "Power Method", value: "PoE++ UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "NDA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weight", value: "363 g (12.8 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Mounting", value: "DIN-rail (Included)" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "Networking Interface", value: "(5) 10/100/1000 Base-T" },
          { label: "PoE Interface", value: "(1) PoE++ input, 50V DC, 1A (4) PoE outputs, 50V DC, 30W per port (Max 45W aggregated)" },
          { label: "Max. Power Consumption", value: "30W (Without PoE output) 50W (With PoE output)" },
          { label: "Digital Input", value: "Request to exit, request to enter, remote release, door position sensor" },
          { label: "Dry Output Relay", value: "Lock: 30V DC, 1A Aux: 30V DC, 1A" },
          { label: "Powered Output Relay", value: "Lock: 12V DC, 1A Aux: 12V DC, 0.33A 12V DC, 0.33A" },
          { label: "LEDs", value: "B/W" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "Recommend Max. Cable Length UA-Lock-Electric (400mA)", value: "24 AWG length: 25 m (82 ft) 22 AWG length: 42 m (138 ft) 20 AWG length: 66 m (217 ft) 18 UACC-Cable-DoorLockRelay length: 100 m (328 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-540kg (500mA)", value: "24 AWG length: 20 m (66 ft) 22 AWG length: 32 m (105 ft) 20 AWG length: 51 m (167 ft) 18 UACC-Cable-DoorLockRelay length: 80 m (262 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-270kg (800mA)", value: "24 AWG length: 12 m (29 ft) 22 AWG length: 20 m (98 ft) 20 AWG length: 30 m (167 ft) 18 UACC-Cable-DoorLockRelay length: 46 m (151 ft)" },
          { label: "Recommend Max. Cable Length Other locks (1A)", value: "24 AWG length: 9 m (30 ft) 22 AWG length: 15 m (49 ft) 20 AWG length: 24 m (79 ft) 18 UACC-Cable-DoorLockRelay length: 36 m (118 ft)" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 (at or af) specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: 1" },
          { label: "Certifications", value: "CE, FCC, IC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-Hub-Door002, V01" },
          { label: "Software Information", value: "The software version can be checked at " },
        ]
      },
      {
        title: "G2 Reader Pro",
        items: [
          { label: "Dimensions", value: "160 x 40.4 x 40.55 mm (6.3 x 1.59 x 1.6')" },
          { label: "Integrated Camera", value: "✓" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "PIN Access", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Face Unlock", value: "✓" },
          { label: "Two-Way Intercom & Doorbell Access", value: "✓" },
          { label: "Weatherproofing", value: "IP55" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weight", value: "136 g (4.8 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, glass" },
          { label: "Mount Material", value: "Aluminum alloy" },
          { label: "Mounting", value: "Wall, gang-box mount (Included) Angle mount, junction box (Optional)" },
          { label: "Indoor and Outdoor Use", value: "✓" },
          { label: "Ambient Operating Temperature", value: "Device: -30 to 45° C (-22 to 113° F) Display: -10 to 45° C (14 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.2 NFC" },
          { label: "Power Method", value: "PoE UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "6W" },
          { label: "Supported Voltage Range", value: "48V DC" },
          { label: "ESD/EMP Protection", value: "Air: ± 15kV, contact: ± 8kV" },

          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Max. Resolution", value: "2MP 1200 x 1600 (3:4)" },

          { label: "Optics Resolution", value: "12 MP (3072 × 4096)" },
          { label: "Optics Field of View", value: "H: 98.6°, V: 125.7°, D: 157.8°" },

          { label: "Sensors", value: "Proximity sensor" },

          { label: "Display Luminance", value: "480 nits (Typical)" },
          { label: "Display Screen Orientation", value: "Potrait" },
          { label: "Display Resolution", value: "1280 x 286 px" },
          { label: "Display Screen Technology", value: "Capacitive touch" },
          { label: "Display Size", value: "120 mm (4.7') diagonal" },

          { label: "Microphone", value: "✓" },
          { label: "Speaker", value: "✓" },
          { label: "LEDs", value: "R/G/B/W/Amber" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Read Range", value: "< 30 mm (1.18'')" },
          { label: "NFC Technology", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-G2-Pro/UA-G2-Pro-Black, V02" },
          { label: "Software Information", value: "The software version can be checked at " },
        ]
      },
      {
        title: "G2 Reader",
        items: [
          { label: "Dimensions", value: "93 x 40 x 36.5 mm (3.7 x 1.6 x 1.4')" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Handwave Request to Exit", value: "✓" },
          { label: "Weatherproofing", value: "IP55" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weight", value: "82 g (2.9 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, glass" },
          { label: "Mount Material", value: "Aluminum alloy" },
          { label: "Mounting", value: "In-wall, gang box (Included) Junction box (Optional)" },
          { label: "Indoor and Outdoor Use", value: "✓" },
          { label: "Ambient Operating Temperature", value: "-30 to 45° C  (-22 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Networking Interface", value: "(1) 10/100 MbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.1 NFC" },
          { label: "Power Method", value: "PoE UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "5W" },
          { label: "Supported Voltage Range", value: "48V DC" },
          { label: "ESD/EMP Protection", value: "Air: ± 15kV, contact: ± 8kV" },
          { label: "Sensors", value: "Proximity sensor" },
          { label: "Speaker", value: "✓" },
          { label: "LEDs", value: "R/G/B/W" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Read Range", value: "< 30 mm (1.18'')" },
          { label: "NFC Technology", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-G2/UA-G2-Black, V02" },
          { label: "Software Information", value: "The software version can be checked at " },
        ]
      },
      {
        title: "Access Card",
        items: [
          { label: "Dimensions", value: "85.6 x 53.98 x 0.84 mm (3.37 x 2.13 x 0.03')" },
          { label: "Weight", value: "5 g (0.18 oz)" },
          { label: "Format", value: "ISO 7810 ID-1" },
          { label: "NFC Technology", value: "MIFARE DESFire EV3 UniFi Access Proprietary Security Protocol" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "Anatel" },
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
        name: "Access Card",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A pack of highly-secure NFC cards used for access control within UniFi.",
        specs: [
          "Multi-layer encryption to avoid malicious duplication",
          "Assignable to users and visitors",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "85.6 x 53.98 x 0.84 mm (3.37 x 2.13 x 0.03')" },
          { label: "Weight", value: "5 g (0.18 oz)" },
          { label: "Format", value: "ISO 7810 ID-1" },
          { label: "NFC Technology", value: "MIFARE DESFire EV3 UniFi Access Proprietary Security Protocol" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "Anatel" },
        ],
        productLink: "/products/power-cable-ua-retrofit-reader-b/w"
      },
      {
        id: 2,
        name: "Fail-Secure Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric strike lock with 8 mm lock slot depth support.",
        specs: [
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
          "Lock Type Fail secure",
          "Holding Force 227 kg (500 lb)"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body:112 x 21 x 28 mm (4.4 x 0.8 x 1.1') Short front plate:153 x 25 x 3 mm (6 x 0.9 x 0.1') Long front plate:250 x 25 x 3 mm (9.8 x 0.9 x 0.1')" },
          { label: "Weight", value: "Lock body: 197 g (6.9 oz) Short front plate: 62 g (2.2 oz) Long front plate: 97 g (3.4 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "227 kg (500 lb)" },
          { label: "Lock Features Current Power", value: "200mA ± 10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/mounting-kit-ua-g3-pro-b/w"
      },
      {
        id: 3,
        name: "Fail-Safe Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric strike lock that connects to a UniFi Access Hub.",
        specs: [
          "Door Status Contact Type Dry contact",
          "Lock Features Lock Type Fail safe",
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 80 x 40 x 35 mm (3.2 x 1.6 x 1.4') Short front plate: 124 x 32 x 3 mm (4.9 x 1.3 x 0.1') Long front plate: 202 x 36 x 3 mm (7.9 x 1.4 x 0.1')" },
          { label: "Weight", value: "Lock body: 185 g (6.5 oz) Short front plate: 50 g (1.8 oz) Long front plate: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "1,200 kg (2,645 lb)" },
          { label: "Lock Features Current Power", value: "400mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/power-cable-ua-g3-pro-b/w"
      },
      {
        id: 4,
        name: "Fail-Secure Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "en/metal) DPS" },
          { label: "Lock Features Current Power", value: "Standby: 12mA ±10% Dynamic: 600mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) Lock 12V/NC (blue) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Kelima dari DoorAccess, SF Kits
  {
    id: "UA-G3-SK-Gate",
    name: "G3 Gate Starter Kit",
    category: "Door Access",
    subfilter: "Kits",
    image: "/images/camera.jpg",
    shortDescription:
      "Starter kit with a Gate Hub, G3 Intercom, PoE++ adapter, and PoE++ over twisted pair extender for access control at a single gate with Touch Pass support.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-G3-SK-GATE",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Starter kit with a Gate Hub",
      "G3 Intercom",
      "PoE++ adapter",
      "Note. 10 free 1-year Touch Passes included"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "In The Box", value: "(1) Gate Hub (1) G3 Intercom (1) PoE++ adapter (2) 2-wire Retrofit Extenders" },
          { label: "Touch Pass", value: "10 free 1-year Touch Passes included " },
        ]
      },
      {
        title: "Gate Hub",
        items: [
          { label: "Dimensions", value: "175 x 126 x 26 mm (6.9 x 5 x 1')" },
          { label: "Supported Door", value: "1 gate, 1 side door" },
          { label: "Maximum User Count", value: "6,000" },
          { label: "Input Terminal", value: "(1) Gate exit request (1) Gate position (1) Side door exit (1) Side door position (1) Emergency" },
          { label: "Power Method", value: "PoE++ UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mount Material", value: "Polycarbonate" },
          { label: "Mounting", value: "DIN-rail (Included)" },
          { label: "Weight", value: "460 g (1 lb)" },
          { label: "indoor and Outdoor Use", value: "Indoor only: device itself Outdoor: with waterproof junction box" },
          { label: "NDA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Ambient Operating Temperature", value: "-30 to 60° C (-22 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Networking Interface", value: "(5) 10/100/1000 Base-T" },
          { label: "PoE Interface", value: "(1) PoE++ input, 50V DC, 1A (4) PoE outputs, 50V DC, 30W per port (Max 55W aggregated)" },
          { label: "Max. Power Consumption", value: "22W (Without PoE output) 60W (With PoE output)" },
          { label: "Digital Input", value: "Gate exit request, gate position, side door exit request, side door position, emergency" },
          { label: "Dry Output Relay", value: "(2) Operator: rated 30V DC, up to 1A (1) Aux: rated 30V DC, up to 1A" },
          { label: "Powered Output Relay", value: "Side door lock: 12V DC, up to 1A" },
          { label: "LEDs", value: "B/W" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "Recommend Max. Cable Length UA-Lock-Electric (400mA)", value: "24 AWG length: 25 m (82 ft) 22 AWG length: 42 m (138 ft) 20 AWG length: 66 m (217 ft) 18 UACC-Cable-DoorLockRelay length: 100 m (328 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-540kg (500mA)", value: "24 AWG length: 20 m (66 ft) 22 AWG length: 32 m (105 ft) 20 AWG length: 51 m (167 ft) 18 UACC-Cable-DoorLockRelay length: 80 m (262 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-270kg (800mA)", value: "24 AWG length: 12 m (29 ft) 22 AWG length: 20 m (98 ft) 20 AWG length: 30 m (167 ft) 18 UACC-Cable-DoorLockRelay length: 46 m (151 ft)" },
          { label: "Recommend Max. Cable Length Other locks (1A)", value: "24 AWG length: 9 m (30 ft) 22 AWG length: 15 m (49 ft) 20 AWG length: 24 m (79 ft) 18 UACC-Cable-DoorLockRelay length: 36 m (118 ft)" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site.The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: 1" },
          { label: "Certifications", value: "CE, FCC, IC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-Hub-Gate, V01" },
          { label: "Software Information", value: "The software version can be checked at " },
        ]
      },
      {
        title: "G3 Intercom",
        items: [
          { label: "Dimensions", value: "324.8 x 113.7 x 28.3 mm (12.8 x 4.5 x 1.1')" },
          { label: "Integrated Camera", value: "✓" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "PIN Access", value: "✓" },
          { label: "Apple/Google Wallet", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Face Unlock", value: "✓" },
          { label: "Two-Way Intercom & Doorbell Access", value: "✓" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weatherproofing", value: "IP65" },
          { label: "Weight", value: "Device: 965 g (2.1 lb) Bracket: 445 g (1 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, UV-stabilized polycarbonate, glass" },
          { label: "Mount Material", value: "Powder-coated stainless steel" },
          { label: "Mounting", value: "Wall mount, adapter to the gooseneck pedestal (Included) Surface angle, flush mount, sunshield kit (Optional)" },
          { label: "Indoor and Outdoor Use", value: "Yes" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.2 NFC" },
          { label: "Power Method", value: "PoE UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "13W" },
          { label: "Supported Voltage Range", value: "48V DC" },

          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Max. Frame Resolution", value: "2MP 1200 x 1600 (3:4)" },

          { label: "Optics Resolution", value: "8 MP (2448 × 3264)" },
          { label: "Optics Field of View", value: "H: 79.4°, V: 97.5°, D: 118.2°" },

          { label: "Sensors", value: "Proximity sensor ALS sensor" },

          { label: "Display Size", value: "177 mm (7') diagonal" },
          { label: "Display Screen Technology", value: "Capacitive-multi touch" },
          { label: "Display Luminance", value: "Max. 1000 nits (Typical)" },
          { label: "Display Screen Orientation", value: "Potrait" },
          { label: "Display Resolution", value: "1024 x 600 px" },

          { label: "Microphone", value: "✓" },
          { label: "Speaker", value: "✓" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Technology", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T ECP 2.0" },
          { label: "LEDs", value: "Amber" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-G3-Intercom, V01" },
          { label: "Ambient Operating Temperature", value: "Device: -30 to 60° C (-22 to 140° F) Display: -25 to 60° C (-13 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Management Application", value: "Access" },
          { label: "Software Information", value: "The software version can be checked at" },
        ]
      },
      {
        title: "Retrofit Extander",
        items: [
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
        ]
      },
      {
        title: "PoE++ Adapter",
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
        name: "Fail-Secure Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric strike lock with 8 mm lock slot depth support.",
        specs: [
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
          "Lock Type Fail secure",
          "Holding Force 227 kg (500 lb)"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body:112 x 21 x 28 mm (4.4 x 0.8 x 1.1') Short front plate:153 x 25 x 3 mm (6 x 0.9 x 0.1') Long front plate:250 x 25 x 3 mm (9.8 x 0.9 x 0.1')" },
          { label: "Weight", value: "Lock body: 197 g (6.9 oz) Short front plate: 62 g (2.2 oz) Long front plate: 97 g (3.4 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "227 kg (500 lb)" },
          { label: "Lock Features Current Power", value: "200mA ± 10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/mounting-kit-ua-g3-pro-b/w"
      },
      {
        id: 2,
        name: "Fail-Safe Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric strike lock that connects to a UniFi Access Hub.",
        specs: [
          "Door Status Contact Type Dry contact",
          "Lock Features Lock Type Fail safe",
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 80 x 40 x 35 mm (3.2 x 1.6 x 1.4') Short front plate: 124 x 32 x 3 mm (4.9 x 1.3 x 0.1') Long front plate: 202 x 36 x 3 mm (7.9 x 1.4 x 0.1')" },
          { label: "Weight", value: "Lock body: 185 g (6.5 oz) Short front plate: 50 g (1.8 oz) Long front plate: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "1,200 kg (2,645 lb)" },
          { label: "Lock Features Current Power", value: "400mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/power-cable-ua-g3-pro-b/w"
      },
      {
        id: 3,
        name: "Fail-Secure Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "en/metal) DPS" },
          { label: "Lock Features Current Power", value: "Standby: 12mA ±10% Dynamic: 600mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) Lock 12V/NC (blue) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "Fail-Safe Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail Safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "Embedded" },
          { label: "Lock Features Current Power", value: "Standby: 110mA ±10% Dynamic: 1000mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "10.5–16V DC" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  //Produk Keenam dari DoorAccess, SF Kits
  {
    id: "UA-G2-SK-Gate",
    name: "Gate Starter Kit",
    category: "Door Access",
    subfilter: "Kits",
    image: "/images/camera.jpg",
    shortDescription:
      "Control a vehicle gate using the connected Intercom and authorize gate access with License Plate Unlock when paired with a compatible Protect AI camera.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-G2-SK-GATE",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Button (1) Factory reset",
      "Supported Doors 1 gate, 1 side door",
      "Maximum User Count 6,000",
      "Note. License Plate Recognition is supported on Protect AI Series cameras, excluding 360 lenses. Access integration for G6 Series coming soon"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "In The Box", value: "(1) Gate Hub (1) Intercom (1) PoE++ adapter (2) 2-wire PoE extenders" },
        ]
      },
      {
        title: "Gate Hub",
        items: [
          { label: "Dimensions", value: "175 x 126 x 26 mm (6.9 x 5 x 1')" },
          { label: "Supported Door", value: "1 gate, 1 side door" },
          { label: "Maximum User Count", value: "6,000" },
          { label: "Input Terminal", value: "(1) Gate exit request (1) Gate position (1) Side door exit (1) Side door position (1) Emergency" },
          { label: "Power Method", value: "PoE++ UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mounting", value: "DIN-rail (Included)" },
          { label: "Weight", value: "460 g (1 lb)" },
          { label: "indoor and Outdoor Use", value: "Indoor only: device itself Outdoor: with waterproof junction box" },
          { label: "NDA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Ambient Operating Temperature", value: "-30 to 60° C (-22 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Networking Interface", value: "(5) 10/100/1000 Base-T" },
          { label: "PoE Interface", value: "(1) PoE++ input, 50V DC, 1A (4) PoE outputs, 50V DC, 30W per port (Max 55W aggregated)" },
          { label: "Max. Power Consumption", value: "22W (Without PoE output) 60W (With PoE output)" },
          { label: "Digital Input", value: "Gate exit request, gate position, side door exit request, side door position, emergency" },
          { label: "Dry Output Relay", value: "(2) Operator: rated 30V DC, up to 1A (1) Aux: rated 30V DC, up to 1A" },
          { label: "Powered Output Relay", value: "Side door lock: 12V DC, up to 1A" },
          { label: "LEDs", value: "B/W" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "Recommend Max. Cable Length UA-Lock-Electric (400mA)", value: "24 AWG length: 25 m (82 ft) 22 AWG length: 42 m (138 ft) 20 AWG length: 66 m (217 ft) 18 UACC-Cable-DoorLockRelay length: 100 m (328 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-540kg (500mA)", value: "24 AWG length: 20 m (66 ft) 22 AWG length: 32 m (105 ft) 20 AWG length: 51 m (167 ft) 18 UACC-Cable-DoorLockRelay length: 80 m (262 ft)" },
          { label: "Recommend Max. Cable Length UA-Lock-Magnetic-270kg (800mA)", value: "24 AWG length: 12 m (29 ft) 22 AWG length: 20 m (98 ft) 20 AWG length: 30 m (167 ft) 18 UACC-Cable-DoorLockRelay length: 46 m (151 ft)" },
          { label: "Recommend Max. Cable Length Other locks (1A)", value: "24 AWG length: 9 m (30 ft) 22 AWG length: 15 m (49 ft) 20 AWG length: 24 m (79 ft) 18 UACC-Cable-DoorLockRelay length: 36 m (118 ft)" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site.The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: 1" },
          { label: "Certifications", value: "CE, FCC, IC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-Hub-Gate, V01" },
          { label: "Software Information", value: "The software version can be checked at " },
        ]
      },
      {
        title: "Intercom",
        items: [
          { label: "Dimensions", value: "324.8 x 113.7 x 28.3 mm (12.8 x 4.5 x 1.1')" },
          { label: "Integrated Camera", value: "✓" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "PIN Access", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Face Unlock", value: "✓" },
          { label: "Two-Way Intercom & Doorbell Access", value: "✓" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weatherproofing", value: "IP65" },
          { label: "Weight", value: "Device: 965 g (2.1 lb) Bracket: 445 g (1 lb)" },
          { label: "Enclosure Material", value: "Aluminum alloy, UV-stabilized polycarbonate, glass" },
          { label: "Mount Material", value: "Powder-coated stainless steel" },
          { label: "Mounting", value: "Wall mount, adapter to the gooseneck pedestal (Included) Surface angle, flush mount, sunshield kit (Optional)" },
          { label: "Indoor and Outdoor Use", value: "Yes" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.2 NFC" },
          { label: "Power Method", value: "PoE UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "13W" },
          { label: "Supported Voltage Range", value: "48V DC" },

          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Max. Frame Resolution", value: "2MP 1200 x 1600 (3:4)" },

          { label: "Optics Resolution", value: "8 MP (2448 × 3264)" },
          { label: "Optics Field of View", value: "H: 79.4°, V: 97.5°, D: 118.2°" },

          { label: "Sensors", value: "Proximity sensor ALS sensor" },

          { label: "Display Size", value: "177 mm (7') diagonal" },
          { label: "Display Screen Technology", value: "Capacitive-multi touch" },
          { label: "Display Luminance", value: "Max. 1000 nits (Typical)" },
          { label: "Display Screen Orientation", value: "Potrait" },
          { label: "Display Resolution", value: "1024 x 600 px" },

          { label: "Microphone", value: "✓" },
          { label: "Speaker", value: "✓" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Technology", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T" },
          { label: "LEDs", value: "Amber" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-Intercom, V01" },
          { label: "Ambient Operating Temperature", value: "Device: -30 to 60° C (-22 to 140° F) Display: -25 to 60° C (-13 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Software Information", value: "The software version can be checked at" },
        ]
      },
      {
        title: "Wire PoE Extanders",
        items: [
          { label: "Model", value: "UACC-Extender-2Wire-PoE-Tx/Rx" },
          { label: "Dimensions", value: "40 x 105 x 25 mm (1.6 x 4.1 x 1)" },
          { label: "Weight", value: "PoE in: 77 g (2.7 oz) PoE out: 79 g (2.8 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Mounting Material", value: "Polycarbonate" },
          { label: "NDA Compliant", value: "✓" },
          { label: "Networking Interface", value: "(1) 10/100 MbE (1) Homeplug AV" },
          { label: "PoE interface", value: "PoE input: (1) PoE++, 50V DC, Max. 1.2A PoE output: (1) PoE+, 48V DC, 0.72A" },
          { label: "Management", value: "(1) 10/100 MbE" },
          { label: "Power Method", value: "PoE++" },
          { label: "Max. Power Consumption", value: "3W (Without PoE output)" },
          { label: "ESD/EMP Protection", value: "Air: ± 8kV, contact: ± 4kV" },
          { label: "LEDs", value: "White" },
          { label: "Ambient Operating Temperature", value: "PoE++" },
          { label: "Ambient Operating Humidity", value: "PoE++" },
          { label: "Certifications", value: "PoE++" },
        ]
      },
      {
        title: "PoE++ Adapter",
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
        name: "Fail-Secure Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric strike lock with 8 mm lock slot depth support.",
        specs: [
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel",
          "Lock Type Fail secure",
          "Holding Force 227 kg (500 lb)"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body:112 x 21 x 28 mm (4.4 x 0.8 x 1.1') Short front plate:153 x 25 x 3 mm (6 x 0.9 x 0.1') Long front plate:250 x 25 x 3 mm (9.8 x 0.9 x 0.1')" },
          { label: "Weight", value: "Lock body: 197 g (6.9 oz) Short front plate: 62 g (2.2 oz) Long front plate: 97 g (3.4 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "227 kg (500 lb)" },
          { label: "Lock Features Current Power", value: "200mA ± 10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/mounting-kit-ua-g3-pro-b/w"
      },
      {
        id: 2,
        name: "Fail-Safe Strike Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric strike lock that connects to a UniFi Access Hub.",
        specs: [
          "Door Status Contact Type Dry contact",
          "Lock Features Lock Type Fail safe",
          "Enclosure Material Lock body: zinc alloy Front plate/latches: stainless steel"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 80 x 40 x 35 mm (3.2 x 1.6 x 1.4') Short front plate: 124 x 32 x 3 mm (4.9 x 1.3 x 0.1') Long front plate: 202 x 36 x 3 mm (7.9 x 1.4 x 0.1')" },
          { label: "Weight", value: "Lock body: 185 g (6.5 oz) Short front plate: 50 g (1.8 oz) Long front plate: 130 g (4.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: zinc alloy Front plate/latches: stainless steel" },

          { label: "Lock Features Lock Type", value: "Fail safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features Holding Force", value: "1,200 kg (2,645 lb)" },
          { label: "Lock Features Current Power", value: "400mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.1A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/power-cable-ua-g3-pro-b/w"
      },
      {
        id: 3,
        name: "Fail-Secure Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-secure electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail secure" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "en/metal) DPS" },
          { label: "Lock Features Current Power", value: "Standby: 12mA ±10% Dynamic: 600mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "12V DC ±10%" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NO (red) (1) Lock 12V/COM (black) (1) Lock 12V/NC (blue) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "Fail-Safe Bolt Lock",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Fail-safe electric drop bolt lock.",
        specs: [
          "Lock Features Lock Type Fail secure",
          "Door Status Contact Type Dry contact",
          "Enclosure Material Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Lock body: 132 x 30 x 42 mm (5.2 x 1.2 x 1.7') Door frame plate: 82 x 32 x 3 mm (3.2 x 1.3 x 0.1') Door plate: plate: 204 x 33 x 3 mm (8 x 1.3 x 0.1')" },
          { label: "Weight", value: "Lock body: 350 g (12.3 oz) Door frame plate: 22 g (0.7 oz) Door plate: 46 g (1.6 oz)" },
          { label: "Enclosure Material", value: "Lock body: aluminum alloy Door frame plate/Door plate: aluminum alloy" },

          { label: "Lock Features Lock Type", value: "Fail Safe" },
          { label: "Lock Features Support Door Type", value: "Single door (Wooden/metal)" },
          { label: "Lock Features DPS", value: "Embedded" },
          { label: "Lock Features Current Power", value: "Standby: 110mA ±10% Dynamic: 1000mA ±10%" },
          { label: "Lock Features Support Voltage Range", value: "10.5–16V DC" },
          { label: "Lock Features Wiring", value: "(1) Lock 12V/NC (red) (1) Lock 12V/COM (black) (1) DPS/- (white) (1) DPS/+ (orange)" },
          { label: "Lock Features Mounting", value: "Door frame recess mount" },
          { label: "Lock Features LED Indicator", value: "Red: locked Green: unlocked & power indicator" },

          { label: "Door Status Contact Type", value: "Dry contact" },
          { label: "Door Status Contact Logic", value: "Door Open:  DPS/+ & DPS/- = Open Door Close:  DPS/+ & DPS/- = Short" },
          { label: "Door Status Contact Rating", value: "Max. 30V DC, 0.5A" },

          { label: "Ambient Storage Temperature", value: "-20 to 70° C (-4 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 60° C (14 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "FCC, IC, CE" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

// Produk Ketujuh dari DoorAccess, SF Kits
  {
    id: "UA-SK-Elevator",
    name: "Elevator Starter Kit",
    category: "Door Access",
    subfilter: "Kits",
    image: "/images/camera.jpg",
    shortDescription:
      "Connects to in-elevator readers with PoE to authorize floor selection. Supports up to 18 floors with digital inputs for elevator car status and emergency.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-SK-ELEVATOR",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Networking Interface (4) 10/100/1000 Base-T",
      "Weight 537 g (1.2 lb)",
      "Mounting Material Polycarbonate"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "In The Box", value: "(1) Elevator Hub (1) G2 Reader (2) 2-wire PoE extenders (10) Access Cards" },
        ]
      },
      {
        title: "Elevator Hub",
        items: [
          { label: "Dimensions", value: "129.3 x 244.7 x 33.6 mm (5.1 x 9.6 x 1.3')" },
          { label: "Maximum User Count", value: "6,000" },
          { label: "Power Method", value: "PoE++ UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Weight", value: "537 g (1.2 lb)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "NDA Compliant", value: "✓" },
          { label: "Mounting Material", value: "Polycarbonate" },
          { label: "Networking Interface", value: "(4) 10/100/1000 Base-T" },
          { label: "PoE Interface", value: "(1) PoE++ input, 50V DC, 1.2A (4) PoE+ outputs, 50V DC, 30W per port (Max 45W aggregated)" },
          { label: "Management", value: "(1) 10/100/1000 Base-T" },
          { label: "Max. Power Consumption", value: "7W (Without PoE output)" },
          { label: "Digital Input", value: "(1) Emergency (1) Car position (5-bit) (1) Car status: Up/Down/Stop/Full (1) Door status: Open/Close" },
          { label: "Output", value: "(18) Relays Rating 30V DC/2A" },
          { label: "ESD/EMP Protection", value: "Air: ± 8kV, contact: ± 4kV" },
          { label: "LEDs", value: "B/W" },
          { label: "Buttons", value: "(1) Factory reset Terminal blocks" },
          { label: "Ambient Operating temperature", value: "-10 to 40° C (14 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "Certifications", value: "CE, FCC, IC, UL 62368-1, CSA C22.2 No. 62368-1" },
          { label: "Software Informations", value: "The software version can be checked at " },
        ]
      },
      {
        title: "G2 Reader",
        items: [
          { label: "Dimensions", value: "93 x 40 x 36.5 mm (3.7 x 1.6 x 1.4')" },
          { label: "NFC Card & Keyfob Access", value: "✓" },
          { label: "Mobile Unlock", value: "✓" },
          { label: "Handwave Request to Exit", value: "✓" },
          { label: "Weatherproofing", value: "IP55" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "UL 294 Level", value: "Destructive attack: Level I Line security: Level I Endurance: Level I Standby power: Level I" },
          { label: "Weight", value: "82 g (2.9 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate, glass" },
          { label: "Mount Material", value: "Aluminum alloy" },
          { label: "Mounting", value: "In-wall, gang box (Included) Junction box (Optional)" },
          { label: "Indoor and Outdoor Use", value: "✓" },
          { label: "Ambient Operating Temperature", value: "-30 to 45° C  (-22 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
          { label: "Networking Interface", value: "(1) 10/100 MbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.1 NFC" },
          { label: "Power Method", value: "PoE UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "5W" },
          { label: "Supported Voltage Range", value: "48V DC" },
          { label: "ESD/EMP Protection", value: "Air: ± 15kV, contact: ± 8kV" },
          { label: "Sensors", value: "Proximity sensor" },
          { label: "Speaker", value: "✓" },
          { label: "LEDs", value: "R/G/B/W" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Read Range", value: "< 30 mm (1.18'')" },
          { label: "NFC Technology", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-G2/UA-G2-Black, V02" },
          { label: "Software Information", value: "The software version can be checked at " },
        ]
      },
      {
        title: "Access Card",
        items: [
          { label: "Dimensions", value: "85.6 x 53.98 x 0.84 mm (3.37 x 2.13 x 0.03')" },
          { label: "Weight", value: "5 g (0.18 oz)" },
          { label: "Format", value: "ISO 7810 ID-1" },
          { label: "NFC Technology", value: "MIFARE DESFire EV3 UniFi Access Proprietary Security Protocol" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "Anatel" },
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
        name: "G3 Reader Pro",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Third-generation, indoor/outdoor NFC reader and intercom with Touch Pass support.",
        specs: [
          "Unlock using the NFC card, PIN, UniFi Identity mobile app, face unlock and Touch Pass*",
          "Doorbell for unlock with video of visitor and two-way intercom",
          "Video works at ADA-compliant mounting height"
        ],
        detailedSpecs: [
          { label: "Indoor and Outdoor Use", value: "Yes" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.2 NFC" },
          { label: "Power Method", value: "PoE UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "6W" },
          { label: "Supported Voltage Range", value: "48V DC" },
          { label: "ESD/EMP Protection", value: "Air: ± 15kV, contact: ± 8kV" },

          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Max. Frame Resolution", value: "2MP 1200 x 1600 (3:4)" },

          { label: "Optics Resolution", value: "12 MP (3072 × 4096)" },
          { label: "Optics Field of View", value: "H: 98.6°, V: 125.7°, D: 157.8°" },

          { label: "Sensors", value: "Proximity sensor" },

          { label: "Display Size", value: "120 mm (4.7') diagonal" },
          { label: "Display Screen Technology", value: "Capacitive touch" },
          { label: "Display Luminance", value: "480 nits (Typical)" },
          { label: "Display Screen Orientation", value: "Potrait" },
          { label: "Display Resolution", value: "1280 x 286 px" },
          { label: "Microphone", value: "✓" },
          { label: "Speaker", value: "✓" },
          { label: "LEDs", value: "R/G/B/W/Amber" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Read Range", value: "< 30 mm (1.18'')" },
          { label: "NFC Technology", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T ECP 2.0" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-G3-Pro-W/UA-G3-Pro-B, V01" },
          { label: "Ambient Operating Temperature", value: "Device: -30 to 45° C (-22 to 113° F) Display: -10 to 45° C (14 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
        ],
        productLink: "/products/mounting-kit-ua-sk-elevator"
      },
      {
        id: 2,
        name: "G2 Reader Pro",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Second generation, indoor/outdoor NFC reader and intercom.",
        specs: [
          "Unlock using the NFC card, PIN, UniFi Identity mobile app and face unlock",
          "Doorbell for unlock with video of visitor and two-way intercom",
          "Video works as ADA-compliant mounting height"
        ],
        detailedSpecs: [
          { label: "Indoor and Outdoor Use", value: "Yes" },
          { label: "Networking Interface", value: "(1) GbE RJ45 port" },
          { label: "Connectivity", value: "BLE 4.2 NFC" },
          { label: "Power Method", value: "PoE UL 294 Power-limited Class 2 PSU UL 60950-1/62368-1 LPS/PS2 PSU" },
          { label: "Max. Power Consumption", value: "6W" },
          { label: "Supported Voltage Range", value: "48V DC" },
          { label: "ESD/EMP Protection", value: "Air: ± 15kV, contact: ± 8kV" },

          { label: "Video Max. Frame Rate", value: "30 FPS" },
          { label: "Video Max. Resolution", value: "2MP 1200 x 1600 (3:4)" },

          { label: "Optics Resolution", value: "12 MP (3072 × 4096)" },
          { label: "Optics Field of View", value: "H: 98.6°, V: 125.7°, D: 157.8°" },

          { label: "Sensors", value: "Proximity sensor" },

          { label: "Display Size", value: "120 mm (4.7') diagonal" },
          { label: "Display Screen Technology", value: "Capacitive touch" },
          { label: "Display Luminance", value: "480 nits (Typical)" },
          { label: "Display Screen Orientation", value: "Potrait" },
          { label: "Display Resolution", value: "1280 x 286 px" },
          { label: "Microphone", value: "✓" },
          { label: "Speaker", value: "✓" },
          { label: "LEDs", value: "R/G/B/W/Amber" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "NFC Frequency", value: "13.56 MHz" },
          { label: "NFC Read Range", value: "< 30 mm (1.18'')" },
          { label: "NFC Technology", value: "ISO/IEC 14443A / 14443B / 15693 / 18092 (Ecma 340) MIFARE Classic / MIFARE DESFIRE Sony FeliCa™ (ID only) NFC Forum tags T1T, T2T, T3T, T4T and T5T" },
          { label: "PoE Cabling Requirements", value: "Cat 5e cabling is the minimum performance category recommended. The performance category utilized should match the transmission speed required at the installation site. The minimal conductor gauge permitted to connect between the PSE or power injector and the PD shall be 26 AWG (0.13 mm² ) for patch cords; 24 AWG (0.21 mm² ) for horizontal or riser cable." },
          { label: "UL 294 Statement", value: "Compliance with IEEE 802.3 specifications was not verified as part of UL 294. The equipment is intended to comply with the section of the National Electrical Code, ANSI/NFPA 70, Article 725.121, Power Sources for Class 2 and Class 3 Circuits." },
          { label: "CAN/ULC-60839-11-1 Grade", value: "Grade assignment: I" },
          { label: "Certifications", value: "CE, FCC, IC, SRRC, UL 294, CAN/ULC-60839-11-1" },
          { label: "Document number, and issue date and/or revision level", value: "UA-G2-Pro/UA-G2-Pro-Black, V02" },
          { label: "Ambient Operating Temperature", value: "Device: -30 to 45° C (-22 to 113° F) Display: -10 to 45° C (14 to 113° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90% noncondensing" },
        ],
        productLink: "/products/power-cable-ua-sk-elevator"
      },
    ]
  },


  {
    id: "UA-G3-Intercom",
    name: "G3 Intercom",
    category: "Door Access",
    subfilter: "Intercoms",
    image: "/images/camera.jpg",
    shortDescription:
      "Indoor/outdoor intercom terminal for managing residential and commercial building entry request with Touch Pass support.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-G3-INTERCOM",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Indoor/outdoor intercom terminal for managing residential and commercial building entry request with Touch Pass support",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "G3 Intercom" },
          { label: "Model", value: "UA-G3-INTERCOM" },
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
        productLink: "/products/mounting-kit-ua-g3-intercom"
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
        productLink: "/products/power-cable-ua-g3-intercom"
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
    id: "UA-G2-Intercom",
    name: "Intercom",
    category: "Door Access",
    subfilter: "Intercoms",
    image: "/images/camera.jpg",
    shortDescription:
      "Indoor/outdoor intercom terminal for managing residential and commercial building entry request.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-G2-INTERCOM",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Indoor/outdoor intercom terminal for managing residential and commercial building entry request",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Intercom" },
          { label: "Model", value: "UA-G2-INTERCOM" },
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
        productLink: "/products/mounting-kit-ua-g2-intercom"
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
        productLink: "/products/power-cable-ua-g2-intercom"
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
    id: "UA-Intercom-Viewer",
    name: "Intercom Viewer",
    category: "Door Access",
    subfilter: "Intercoms",
    image: "/images/camera.jpg",
    shortDescription:
      "Indoor/outdoor intercom terminal for managing residential and commercial building entry request with Touch Pass support.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-INTERCOM-VIEWER",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Indoor/outdoor intercom terminal for managing residential and commercial building entry request with Touch Pass support",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Intercom Viewer" },
          { label: "Model", value: "UA-INTERCOM-VIEWER" },
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
        productLink: "/products/mounting-kit-ua-intercom-viewer"
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
        productLink: "/products/power-cable-ua-intercom-viewer"
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
    id: "ENVR",
    name: "Enterprise NVR",
    category: "Door Access",
    subfilter: "NVRs",
    image: "/images/camera.jpg",
    shortDescription:
      "3U NVR with (16) 2.5/3.5' drive bays, supporting up to (70) 4K cameras or (210) Full HD cameras.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "ENVR",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "3U NVR with (16) 2",
      "5' drive bays",
      "supporting up to (70) 4K cameras or (210) Full HD cameras",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Enterprise NVR" },
          { label: "Model", value: "ENVR" },
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
        productLink: "/products/mounting-kit-envr"
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
        productLink: "/products/power-cable-envr"
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
    id: "UNVR-pro",
    name: "Network Video Recorder Pro",
    category: "Door Access",
    subfilter: "NVRs",
    image: "/images/camera.jpg",
    shortDescription:
      "A 2U-sized video recorder with (7) 2.5/3.5 HDD bays that can provide up to 60 days of storage for (24) 4K cameras or (70) Full HD cameras.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UNVR-PRO",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "A 2U-sized video recorder with (7) 2",
      "5 HDD bays that can provide up to 60 days of storage for (24) 4K cameras or (70) Full HD cameras",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Network Video Recorder Pro" },
          { label: "Model", value: "UNVR-PRO" },
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
        productLink: "/products/mounting-kit-unvr-pro"
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
        productLink: "/products/power-cable-unvr-pro"
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
    id: "UNVR",
    name: "Network Video Recorder",
    category: "Door Access",
    subfilter: "NVRs",
    image: "/images/camera.jpg",
    shortDescription:
      "A video recorder with (4) 2.5/3.5' HDD bays that can support up to 30 days of storage for (18) 4K cameras or (60) Full HD cameras.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UNVR",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "A video recorder with (4) 2",
      "5' HDD bays that can support up to 30 days of storage for (18) 4K cameras or (60) Full HD cameras",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Network Video Recorder" },
          { label: "Model", value: "UNVR" },
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
        productLink: "/products/mounting-kit-unvr"
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
        productLink: "/products/power-cable-unvr"
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
    id: "UNVR-Instant",
    name: "Network Video Recorder Instant",
    category: "Door Access",
    subfilter: "NVRs",
    image: "/images/camera.jpg",
    shortDescription:
      "Compact UniFi Protect NVR with 3.5 HDD support, featuring an integrated 6-port PoE switch, integrated HDMI View Port, and a capacity for (6) 4K cameras or (15) Full HD cameras.",
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
      "Compact UniFi Protect NVR with 3",
      "5 HDD support",
      "featuring an integrated 6-port PoE switch",
      "integrated HDMI View Port"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Network Video Recorder Instant" },
          { label: "Model", value: "UNVR-INSTANT" },
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
        productLink: "/products/mounting-kit-unvr-instant"
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
        productLink: "/products/power-cable-unvr-instant"
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
    id: "UNVR-Instant-Kit",
    name: "Network Video Recorder Instant Kit",
    category: "Door Access",
    subfilter: "NVRs",
    image: "/images/camera.jpg",
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
      "Compact UniFi Protect NVR Kit",
      "includes (1) UniFi Protect NVR Instant with (4) G5 Turret Ultra cameras and (1) 1TB HDD",
      "delivering an all-in-one solution for fast and effortless setup",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Network Video Recorder Instant Kit" },
          { label: "Model", value: "UNVR-INSTANT-KIT" },
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
        productLink: "/products/mounting-kit-unvr-instant-kit"
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
        productLink: "/products/power-cable-unvr-instant-kit"
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
    id: "UA-Card-10-B/W",
    name: "Access Card",
    category: "Door Access",
    subfilter: "Door Access Accessories",
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
    sku: "UA-CARD-10-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "A pack of highly-secure NFC cards used for access control within UniFi",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Access Card" },
          { label: "Model", value: "UA-CARD-10-B-W" },
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
        productLink: "/products/mounting-kit-ua-card-10-b/w"
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
        productLink: "/products/power-cable-ua-card-10-b/w"
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
    id: "UACC-Retrofit-PoE-2Wire",
    name: "PoE Over 2-Wire Retrofit Extender",
    category: "Door Access",
    subfilter: "Door Access Accessories",
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
    sku: "UACC-RETROFIT-POE-2WIRE",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "A pair of extenders that extends PoE over twisted-pair or coaxial cables",
      "ideal for retrofit scenarios",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "PoE Over 2-Wire Retrofit Extender" },
          { label: "Model", value: "UACC-RETROFIT-POE-2WIRE" },
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
        productLink: "/products/mounting-kit-uacc-retrofit-poe-2wire"
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
        productLink: "/products/power-cable-uacc-retrofit-poe-2wire"
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
    id: "UACC-Reader-JB-B/W",
    name: "Reader Junction Box",
    category: "Door Access",
    subfilter: "Door Access Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Junction box for UniFi Access Readers and Intercom Viewers that support flat surface mounting and attachment to 3/4' conduit.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-READER-JB-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Junction box for UniFi Access Readers and Intercom Viewers that support flat surface mounting and attachment to 3/4' conduit",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Reader Junction Box" },
          { label: "Model", value: "UACC-READER-JB-B-W" },
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
        productLink: "/products/mounting-kit-uacc-reader-jb-b/w"
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
        productLink: "/products/power-cable-uacc-reader-jb-b/w"
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
    id: "UACC-Reader-Pro-JB-B/W",
    name: "Reader Pro Junction Box",
    category: "Door Access",
    subfilter: "Door Access Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Junction box for UniFi Professional Access Readers and Doorbells that supports flat surface mounting and attachment to 3/4' conduit.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-READER-PRO-JB-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Junction box for UniFi Professional Access Readers and Doorbells that supports flat surface mounting and attachment to 3/4' conduit",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Reader Pro Junction Box" },
          { label: "Model", value: "UACC-READER-PRO-JB-B-W" },
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
        productLink: "/products/mounting-kit-uacc-reader-pro-jb-b/w"
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
        productLink: "/products/power-cable-uacc-reader-pro-jb-b/w"
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
    id: "UACC-Reader-Pro-AM-B/W",
    name: "Reader Pro Angle Mount",
    category: "Door Access",
    subfilter: "Door Access Accessories",
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
    sku: "UACC-READER-PRO-AM-B-W",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Angled mounting accessory for UniFi Professional Access Readers",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Reader Pro Angle Mount" },
          { label: "Model", value: "UACC-READER-PRO-AM-B-W" },
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
        productLink: "/products/mounting-kit-uacc-reader-pro-am-b/w"
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
        productLink: "/products/power-cable-uacc-reader-pro-am-b/w"
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
    id: "UACC-Intercom-SAM",
    name: "Intercom Surface Angle Mount",
    category: "Door Access",
    subfilter: "Door Access Accessories",
    image: "/images/camera.jpg",
    shortDescription: "UniFI Access Intercom surface angle mount accessory.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-INTERCOM-SAM",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "UniFI Access Intercom surface angle mount accessory",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Intercom Surface Angle Mount" },
          { label: "Model", value: "UACC-INTERCOM-SAM" },
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
        productLink: "/products/mounting-kit-uacc-intercom-sam"
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
        productLink: "/products/power-cable-uacc-intercom-sam"
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
    id: "UACC-Intercom-FM",
    name: "Intercom Flush Mount",
    category: "Door Access",
    subfilter: "Door Access Accessories",
    image: "/images/camera.jpg",
    shortDescription: "UniFI Access Intercom flush mount accessory.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-INTERCOM-FM",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "UniFI Access Intercom flush mount accessory",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Intercom Flush Mount" },
          { label: "Model", value: "UACC-INTERCOM-FM" },
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
        productLink: "/products/mounting-kit-uacc-intercom-fm"
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
        productLink: "/products/power-cable-uacc-intercom-fm"
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
    id: "UACC-Intercom-Sunshield",
    name: "Intercom Sunshield",
    category: "Door Access",
    subfilter: "Door Access Accessories",
    image: "/images/camera.jpg",
    shortDescription: "UniFI Access Intercom sunshield accessory.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-INTERCOM-SUNSHIELD",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "UniFI Access Intercom sunshield accessory",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Intercom Sunshield" },
          { label: "Model", value: "UACC-INTERCOM-SUNSHIELD" },
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
        productLink: "/products/mounting-kit-uacc-intercom-sunshield"
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
        productLink: "/products/power-cable-uacc-intercom-sunshield"
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
    id: "UACC-Intercom-WM",
    name: "Intercom Wedge Mount",
    category: "Door Access",
    subfilter: "Door Access Accessories",
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
    sku: "UACC-INTERCOM-WM",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "A pack of highly-secure NFC cards used for access control within UniFi",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Intercom Wedge Mount" },
          { label: "Model", value: "UACC-INTERCOM-WM" },
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
        productLink: "/products/mounting-kit-uacc-intercom-wm"
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
        productLink: "/products/power-cable-uacc-intercom-wm"
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
    id: "UACC-Intercom-Viewer-TS",
    name: "Intercom Viewer Table Stand",
    category: "Door Access",
    subfilter: "Door Access Accessories",
    image: "/images/camera.jpg",
    shortDescription: "Metal table stand for Intercom Viewer.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-INTERCOM-VIEWER-TS",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Metal table stand for Intercom Viewer",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Intercom Viewer Table Stand" },
          { label: "Model", value: "UACC-INTERCOM-VIEWER-TS" },
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
        productLink: "/products/mounting-kit-uacc-intercom-viewer-ts"
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
        productLink: "/products/power-cable-uacc-intercom-viewer-ts"
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
    id: "UACC-Junction-Utility",
    name: "Junction Utility",
    category: "Door Access",
    subfilter: "Door Access Accessories",
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
    sku: "UACC-JUNCTION-UTILITY",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "An indoor/outdoor enclosure designed for UniFi Access Hubs",
      "and accessories",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Junction Utility" },
          { label: "Model", value: "UACC-JUNCTION-UTILITY" },
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
        productLink: "/products/mounting-kit-uacc-junction-utility"
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
        productLink: "/products/power-cable-uacc-junction-utility"
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
    id: "UACC-Retrofit-PSU-12V",
    name: "Retrofit PSU 12V",
    category: "Door Access",
    subfilter: "Door Access Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "12V power supply with optional SLA backup battery support, compatible with the UniFi Retrofit Hub.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-RETROFIT-PSU-12V",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "12V power supply with optional SLA backup battery support",
      "compatible with the UniFi Retrofit Hub",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Retrofit PSU 12V" },
          { label: "Model", value: "UACC-RETROFIT-PSU-12V" },
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
        productLink: "/products/mounting-kit-uacc-retrofit-psu-12v"
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
        productLink: "/products/power-cable-uacc-retrofit-psu-12v"
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
    id: "UA-Button",
    name: "Access Button",
    category: "Door Access",
    subfilter: "Door Access Accessories",
    image: "/images/camera.jpg",
    shortDescription: "Push-to-exit button designed for UniFi Access Hubs.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-BUTTON",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Push-to-exit button designed for UniFi Access Hubs",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Access Button" },
          { label: "Model", value: "UA-BUTTON" },
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
        productLink: "/products/mounting-kit-ua-button"
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
        productLink: "/products/power-cable-ua-button"
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
    id: "UACC-DoorCloser",
    name: "Door Closer",
    category: "Door Access",
    subfilter: "Door Access Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "A mechanical door closer that ensures controlled closure for safety and convenience.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-DOORCLOSER",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "A mechanical door closer that ensures controlled closure for safety and convenience",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Door Closer" },
          { label: "Model", value: "UACC-DOORCLOSER" },
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
        productLink: "/products/mounting-kit-uacc-doorcloser"
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
        productLink: "/products/power-cable-uacc-doorcloser"
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
    id: "UACC-PanicBar",
    name: "Panic Bar",
    category: "Door Access",
    subfilter: "Door Access Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "A single-latched bar installed on emergency exit doors, allowing quick and easy egress by pushing the bar to open the door during emergencies.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-PANICBAR",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "A single-latched bar installed on emergency exit doors",
      "allowing quick and easy egress by pushing the bar to open the door during emergencies",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Panic Bar" },
          { label: "Model", value: "UACC-PANICBAR" },
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
        productLink: "/products/mounting-kit-uacc-panicbar"
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
        productLink: "/products/power-cable-uacc-panicbar"
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
    id: "UA-Lock-Magnetic-270kg",
    name: "Magnetic Lock",
    category: "Door Access",
    subfilter: "Door Access Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Fail-safe magnetic lock for inswing and outswing doors that connects to a UniFI Access Hub.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-LOCK-MAGNETIC-270KG",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Fail-safe magnetic lock for inswing and outswing doors that connects to a UniFI Access Hub",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Magnetic Lock" },
          { label: "Model", value: "UA-LOCK-MAGNETIC-270KG" },
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
        productLink: "/products/mounting-kit-ua-lock-magnetic-270kg"
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
        productLink: "/products/power-cable-ua-lock-magnetic-270kg"
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
    id: "UACC-Lock-Strike-Secure-15mm",
    name: "Fail-Secure Strike Lock",
    category: "Door Access",
    subfilter: "Door Access Accessories",
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
    sku: "UACC-LOCK-STRIKE-SECURE-15MM",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Fail-secure electric strike lock that connects to a UniFi Access Hub",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Fail-Secure Strike Lock" },
          { label: "Model", value: "UACC-LOCK-STRIKE-SECURE-15MM" },
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
        productLink: "/products/mounting-kit-uacc-lock-strike-secure-15mm"
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
        productLink: "/products/power-cable-uacc-lock-strike-secure-15mm"
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
    id: "UACC-Lock-Strike-Safe-15mm",
    name: "Fail-Safe Strike Lock",
    category: "Door Access",
    subfilter: "Door Access Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Fail-Safe electric strike lock that connects to a UniFi Access Hub.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-LOCK-STRIKE-SAFE-15MM",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Fail-Safe electric strike lock that connects to a UniFi Access Hub",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Fail-Safe Strike Lock" },
          { label: "Model", value: "UACC-LOCK-STRIKE-SAFE-15MM" },
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
        productLink: "/products/mounting-kit-uacc-lock-strike-safe-15mm"
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
        productLink: "/products/power-cable-uacc-lock-strike-safe-15mm"
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
    id: "UACC-Cable-DoorLockRelay-1P",
    name: "Door Lock Relay Cable",
    category: "Door Access",
    subfilter: "Door Access Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "A 500-foot (152.4m) spool of one or two pair, low voltage cable.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-CABLE-DOORLOCKRELAY-1P",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "A 500-foot (152",
      "4m) spool of one or two pair",
      "low voltage cable",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Door Lock Relay Cable" },
          { label: "Model", value: "UACC-CABLE-DOORLOCKRELAY-1P" },
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
        productLink: "/products/mounting-kit-uacc-cable-doorlockrelay-1p"
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
        productLink: "/products/power-cable-uacc-cable-doorlockrelay-1p"
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
    id: "UACC-Cable-DoorLockRelay-2P",
    name: "Door Lock Relay Cable",
    category: "Door Access",
    subfilter: "Door Access Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "A 500-foot (152.4m) spool of one or two pair, low voltage cable.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UACC-CABLE-DOORLOCKRELAY-2P",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "A 500-foot (152",
      "4m) spool of one or two pair",
      "low voltage cable",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Door Lock Relay Cable" },
          { label: "Model", value: "UACC-CABLE-DOORLOCKRELAY-2P" },
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
        productLink: "/products/mounting-kit-uacc-cable-doorlockrelay-2p"
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
        productLink: "/products/power-cable-uacc-cable-doorlockrelay-2p"
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
    id: "UA-Pocket",
    name: "Pocket Keyfob, 10-Pack",
    category: "Door Access",
    subfilter: "Door Access Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "A pack of (10) highly-secure NFC keyfobs used for access control within UniFi.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-POCKET",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "A pack of (10) highly-secure NFC keyfobs used for access control within UniFi",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Pocket Keyfob, 10-Pack" },
          { label: "Model", value: "UA-POCKET" },
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
        productLink: "/products/mounting-kit-ua-pocket"
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
        productLink: "/products/power-cable-ua-pocket"
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
    id: "UA-Rescue",
    name: "Access Rescue KeySwitch",
    category: "Door Access",
    subfilter: "Door Access Accessories",
    image: "/images/camera.jpg",
    shortDescription: "Keyed emergency override for your Access Hub.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UA-RESCUE",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
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
      "Keyed emergency override for your Access Hub",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Access Rescue KeySwitch" },
          { label: "Model", value: "UA-RESCUE" },
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
        productLink: "/products/mounting-kit-ua-rescue"
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
        productLink: "/products/power-cable-ua-rescue"
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
