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

// Switching Products
export const switchingProducts: Product[] = [


  {
    id: "ECS-Aggregation",
    name: "Enterprise Campus Aggregation",
    category: "Switching",
    subfilter: "Aggregation",
    image: "/images/switching/1.ecs-aggregation/1.p-utama-ecs-aggregation.png",
    shortDescription:
      "1.8 Tbps high-density 100G/25G Layer 3 Etherlighting™ aggregation switch with MC-LAG support for high availability system design.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    
    // SKU produk
    sku: "ECS-Aggregation",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/1.ecs-aggregation/1.p-utama-ecs-aggregation.png",
      "/images/switching/1.ecs-aggregation/2.p-spec-ecs-aggregation.png",
      "/images/switching/1.ecs-aggregation/3.p-dimensi-ecs-aggregation.png",
      "/images/switching/1.ecs-aggregation/4.p-dimensi-ecs-aggregation.png",
      "/images/switching/1.ecs-aggregation/5.p-deployment-ecs-aggregation.png",
      "/images/switching/1.ecs-aggregation/p-itb-ecs-aggregation.png",
      "/images/switching/1.ecs-aggregation/p-mkt0-ecs-aggregation.png",
      "/images/switching/1.ecs-aggregation/p-mkt1-ecs-aggregation.png",
      "/images/switching/1.ecs-aggregation/p-mkt2-ecs-aggregation.png",
      "/images/switching/1.ecs-aggregation/p-mkt3-ecs-aggregation.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/1.ecs-aggregation/p-mkt1-ecs-aggregation.png",
      "/images/switching/1.ecs-aggregation/p-itb-ecs-aggregation.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "8 Tbps high-density 100G/25G Layer 3 Etherlighting™ aggregation switch with MC-LAG support for high availability system design",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 43.7 x 496 mm (17.4 x 1.7 x 19.5\")" },
          { label: "Port Layout 25G SFP28", value: "48 (25G/10G)" },
          { label: "Port Layout 100G QSFP28", value: "6 (100G/40G)" },
          { label: "Redundancy", value: "Multi-Chassis Link Aggregation (MC-LAG), (2) Hot-Swappable PSUs, (5) Hot-Swappable Fans" },
          { label: "Layer 3", value: "✓", isCheck: true },
          { label: "Form Factor", value: "Rack Mount (1U, Full-Depth)" },
          { label: "Layer", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "3.6 Tbps" },
          { label: "Total Non-Blocking Throughput", value: "1.8 Tbps" },
          { label: "Forwarding Rate", value: "2.4 Bpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table size", value: "128.000" },
          { label: "L3 Table Size ARP Entries", value: "96.000" },
          { label: "L3 Table Size IPv4 Routes", value: "288.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "Packet Buffer Size", value: "24 MB" },
          { label: "Access Lists IPv4", value: "512" },
          { label: "Access Lists MAC", value: "512" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
         { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
         { label: "DHCP Relay", value: "✓", isCheck: true },
         { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
         { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "MC-LAG", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },
        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "Max. Power Consumption", value: "340W"},
         { label: "Power Method", value: "(2) Universal input, 100–240V AC, 50/60 Hz"},
         { label: "Power Input Method", value: "(2) AC input, Hot-swappable power modules"},
         { label: "Power Supply", value: "(2) Hot-swappable AC/DC 550W power modules"},
         { label: "Supported Voltage Range", value: "100–240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "1160 BTU/h"},
         { label: "Weight", value: "With/Without Mounting Brackets: 10.5 kg / 9.9 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "482.6 mm (19\") four-post racks Posts depths ranging from 650 to 1,000 mm (25.6–39.4\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 12kV, contact: ± 8kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing"},
         { label: "Etherlighting™ SFP28", value: "✓", isCheck: true },
         { label: "Etherlighting™ QSFP28", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 01327-25-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 8.5.6 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/1.ecs-aggregation/p-itb-ecs-aggregation.png" },
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
          "Duplex LC UPC connector"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "QSFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "TX Wavelength", value: "1295 / 1300 / 1304 / 1309 nm" },
          { label: "RX Wavelength", value: "1295 / 1300 / 1304 / 1309 nm" },
          { label: "Supported Data Rate", value: "100 Gbps" },
          { label: "Supported Cable Distance", value: "10 km (6.2 mi)" },
          { label: "Max. Power Consumption", value: "4 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING", value: "CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014. Do not look into the ends of the fiber optic cable or SFP module while converters are powered" },
        ],
        productLink: "/products/mounting-kit-ecs-aggregation"
      },
      {
        id: 2,
        name: "100G PSM4 Single-Mode Optical Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "QSFP28 transceiver that supports 100G connections up to 2 km using single-mode fiber with an MPO-12 APC connector.",
        specs: [
          "Max data rate: 100 Gbps",
          "Compatible with QSFP28 and QSFP+ interfaces",
          "MPO-12 Type B APC connector"
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
          { label: "WARNING", value: "CLASS 1 LASER PRODUCT, IEC/EN 60825" },
          
        ],
        productLink: "/products/power-cable-ecs-aggregation"
      },
      
    ]
    },
{
    id: "USW-Pro-XG-Aggregation",
    name: "Pro XG Aggregation",
    category: "Switching",
    subfilter: "Aggregation",
    image: "/images/switching/2.uswproxgagg/1.p-utama-uswproxgagg.jpg",
    shortDescription:
      "Professional-grade 32-port, Layer 3 Etherlighting™ switch for high-capacity 25G SFP28 connections.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
    
    // SKU produk
    sku: "USW-Pro-XG-Aggregation",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/2.uswproxgagg/1.p-utama-uswproxgagg.jpg",
      "/images/switching/2.uswproxgagg/2.p-dimensi-uswproxgagg.jpg",
      "/images/switching/2.uswproxgagg/3.p-spec-uswproxgagg.jpg",
      "/images/switching/2.uswproxgagg/4.p-development-uswproxgagg.jpg",
      "/images/switching/2.uswproxgagg/p-itb-uswproxgagg.jpg",
      "/images/switching/2.uswproxgagg/p-mkt0-uswproxgagg.jpg",
      "/images/switching/2.uswproxgagg/p-mkt1-uswproxgagg.jpg",
      "/images/switching/2.uswproxgagg/p-mkt2-uswproxgagg.jpg",
      "/images/switching/2.uswproxgagg/p-mkt3-uswproxgagg.jpg",
      "/images/switching/2.uswproxgagg/p-mkt4-uswproxgagg.jpg",
      "/images/switching/2.uswproxgagg/p-ov1-uswproxgagg.png",
      "/images/switching/2.uswproxgagg/p-ov2-uswproxgagg.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/2.uswproxgagg/p-ov1-uswproxgagg.png",
      "/images/switching/2.uswproxgagg/p-ov2-uswproxgagg.png"
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
          { label: "Dimensions", value: "442.4 x 43.7 x 480 mm (17.4 x 1.7 x 18.9\")" },
          { label: "Port Layout 25G SFP28", value: "32 (25G/10G)" },
          { label: "Redundancy", value: "DC Power Backup" },
          { label: "Layer 3", value: "✓", isCheck: true },
          { label: "Form Factor", value: "Rack Mount (1U, Full-Depth)" },
          { label: "Layer", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "1.6 Tbps" },
          { label: "Total Non-Blocking Throughput", value: "800 Gbps" },
          { label: "Forwarding Rate", value: "1.2 Bpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table size", value: "32.000" },
          { label: "L3 Table Size ARP Entries", value: "128.000" },
          { label: "L3 Table Size IPv4 Routes", value: "256.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "512" },
          { label: "Packet Buffer Size", value: "8 MB" },
          { label: "Access Lists IPv4", value: "256" },
          { label: "Access Lists MAC", value: "256" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
         { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
         { label: "DHCP Relay", value: "✓", isCheck: true },
         { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
         { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1X Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },
         { label: "Virtual Network Override", value: "✓", isCheck: true },
        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "Max. Power Consumption", value: "200W"},
         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz"},
         { label: "Power Input Method", value: "AC Input"},
         { label: "Power Supply", value: "AC/DC, Internal, 200W"},
         { label: "Supported Voltage Range", value: "100–240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "457 BTU/h"},
         { label: "Weight", value: "With/Without Mounting Brackets: 7.2 kg / 7.1 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "482.6 mm (19\") four-post racks Posts depths ranging from 650 to 1,000 mm (25.6–39.4\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 12kV, contact: ± 8kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing"},
         { label: "Etherlighting™ SFP28", value: "✓", isCheck: true },
         { label: "Etherlighting™ QSFP28", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 05977-25-08356"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/2.uswproxgagg/p-itb-uswproxgagg.jpg", },
    ],

  },
{
    id: "USW-Pro-Aggregation",
    name: "Hi-Capacity Aggregation",
    category: "Switching",
    subfilter: "Aggregation",
    image: "/images/switching/3.uswproagg/1.p-utama-uswproagg.jpg",
    shortDescription:
      "A 32-port, Layer 3 switch made for high-capacity 10G SFP+ and 25G SFP28 connections.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-Pro-Aggregation",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/3.uswproagg/1.p-utama-uswproagg.jpg",
      "/images/switching/3.uswproagg/2.p-dimensi-uswproagg.jpg",
      "/images/switching/3.uswproagg/3.p-development-uswproagg.jpg",
      "/images/switching/3.uswproagg/p-itb-uswproagg.jpg",
      "/images/switching/3.uswproagg/p-mkt0-uswproagg.jpg",
      "/images/switching/3.uswproagg/p-mkt1-uswproagg.jpg",
      "/images/switching/3.uswproagg/p-mkt2-uswproagg.jpg",
      "/images/switching/3.uswproagg/p-mkt3-uswproagg.jpg",
      "/images/switching/3.uswproagg/p-mkt4-uswproagg.jpg",
      "/images/switching/3.uswproagg/p-ov1-uswproagg.png",
      "/images/switching/3.uswproagg/p-ov2-uswproagg.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/3.uswproagg/p-ov1-uswproagg.png",
      "/images/switching/3.uswproagg/p-ov2-uswproagg.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Layer 3 switch made for high-capacity 10G SFP+ and 25G SFP28 connections",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7\")" },
          { label: "Port Layout 10G SFP+", value: "28 (10G/1G)" },
          { label: "Port Layout 25G SFP28", value: "4 (25G/10G)" },
          { label: "Redundancy", value: "DC Power Backup" },
          { label: "Layer 3", value: "✓", isCheck: true },
          { label: "Form Factor", value: "Rack Mount (1U)" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "760 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "380 Gbps" },
          { label: "Forwarding Rate", value: "565 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table size", value: "32.000" },
          { label: "L3 Table Size ARP Entries", value: "16.000" },
          { label: "L3 Table Size IPv4 Routes", value: "16.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "Packet Buffer Size", value: "4 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
         { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
         { label: "DHCP Relay", value: "✓", isCheck: true },
         { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
         { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "QoS (DSCP)", value: "✓", isCheck: true },
         { label: "Pro AV Profiles", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1X Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },
         { label: "Virtual Network Override", value: "✓", isCheck: true },
        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "Max. Power Consumption", value: "100W"},
         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz, (1) USP RPS DC input"},
         { label: "Power Input Method", value: "AC Input"},
         { label: "Power Supply", value: "AC/DC, Internal, 100W"},
         { label: "Supported Voltage Range", value: "100–240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "342 BTU/h"},
         { label: "Weight", value: "With/Without Mounting Brackets: 4.7 kg / 4.6 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "400-1200 mm (15.7-47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 16kV, contact: ± 12kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 20756-22-08356"},
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "Application Requirements UniFi Network", value: "Version 6.1.25 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/3.uswproagg/p-itb-uswproagg.jpg", },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Toolless Mini Rack",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
        specs: [
          "6U-sized device rack",
          "Combine two Mini Racks into a 12U rack with a Stacking Kit",
          "Toolless assembly and device mounting",
          "Lockable casters"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "with handle and caster : 519 x 460 x 485 mm (20.43 x 18.11 x 19.09\")" },
          { label: "Weight", value: "10.3 kg" },
          { label: "Max. Weight Capacity (Single toolless mini rack) Static : 80 kg (176 lb)", value: "SGCC Steel" },
          { label: "Max. Weight Capacity (Double toolless mini rack) Static : 70 kg (154 lb)", value: "SGCC Steel" },
          { label: "Enclosure Material", value: "Frame/Bracket: SPCC steel, Handle: Stainless steel" },
          { label: "Color", value: "Silver" },
          { label: "Treatment", value: "Liquid Coating" },
          { label: "U Height", value: "6U" },
          { label: "Rack Type", value: "Open Frame" },
          { label: "Mounting", value: "Floor Stand" },
          { label: "Lockable Casters", value: "✓"},
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
     {
        id: 2,
        name: "Redundant Power",
        image: "/images/dcs-box.png",
        price: 299,
        description: "950W redundant power supply for rack-mounted UniFi devices.",
        specs: [
          "950W DC power availability",
          "(6) DC SmartPower ports",
          "1.3\" LCM touchscreen"
        ],
        detailedSpecs: [
          { label: "Management", value: "Ethernet" },
          { label: "Networking Interface", value: "(1) GbE RJ45 Port" },
          { label: "Power Method", value: "(1) Universal AC input, 100-240V AC)" },
          { label: "Power Supply", value: "54V DC output: AC/DC, internal, 645W, 12V DC output: AC/DC, internal, 350W" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Max. Power Consumption", value: "995W" },
          { label: "Power Output", value: "(6) RPS DC Ports)" },
          { label: "ESD/EMP Protection", value: "Air: 16kV, contact 12kV" },
          { label: "Display", value: "1.3\" touchscreen" },
          { label: "Buttons", value: "(1) Factory Reset)" },
          { label: "LEDs System", value: "Status" },
          { label: "LEDs ", value: "Activity" },
          { label: "Certifications ", value: "CE, FCC, IC" },
        
        
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 3,
        name: "SFP to RJ45 Adapter",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP to RJ45 transceiver that supports 1G connections up to 100 m.",
        specs: [
          "Supported data rates: 1000 / 100 / 10 Mbps",
          "Compatible with SFP interfaces",
          "Supports connections up to 100 m*",
          "*Ethernet cable is not included"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "RJ45" },
          { label: "Supported Media", value: "Copper" },
          { label: "Supported Data Rate", value: "10 / 100 / 1000 Mbps" },
          { label: "Supported Cable Distance", value: "100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "1.2 W" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "24-Port Blank Keystone Patch Panel",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Standalone insert that can be easily installed into an existing network equipment rack to create a clean, uniform aesthetic.",
        specs: [
          "1U 24-port blank patch panel with cable management bar",
          "Ideal for keystone module installation",
          "Uniform aesthetic with UniFi rack-mount equipment",

        ],
        detailedSpecs: [
          { label: "Dimensions (Standalone Insert)", value: "442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7 in)" },
          { label: "Dimensions (Management Bar)", value: "433.8 x 71.5 x 17 mm (17.1 x 2.8 x 0.7\")" },
          { label: "Weight (Standalone Insert)", value: "260 g (9.17 oz)" },
          { label: "Weight (Management Bar)", value: "390 g (13.8 oz)" },
          { label: "Materials Front Panel Housing", value: "Cold rolled carbon steel (SPCC)" },
          { label: "Materials Inner Module", value: "Polycarbonate" },
          { label: "Materials Management bar", value: "Cold rolled carbon steel (SPCC)" },
          { label: "Treatment", value: "Painting" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },
{
    id: "USW-Aggregation",
    name: "Aggregation",
    category: "Switching",
    subfilter: "Aggregation",
    image: "/images/switching/4.uswagg/1.p-utama-uswagg.jpg",
    shortDescription:
      "An 8-port, Layer 2 switch made for 10G SFP+ connections.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-Aggregation",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/4.uswagg/1.p-utama-uswagg.jpg",
      "/images/switching/4.uswagg/2.p-dimensi-uswagg.jpg",
      "/images/switching/4.uswagg/3.p-spec-uswagg.jpg",
      "/images/switching/4.uswagg/4.p-development-uswagg.jpg",
      "/images/switching/4.uswagg/p-itb-uswagg.jpg",
      "/images/switching/4.uswagg/p-mkt0-uswagg.jpg",
      "/images/switching/4.uswagg/p-mkt1-uswagg.jpg",
      "/images/switching/4.uswagg/p-mkt2-uswagg.jpg",
      "/images/switching/4.uswagg/p-mkt3-uswagg.jpg",
      "/images/switching/4.uswagg/p-ov1-uswagg.png",
      "/images/switching/4.uswagg/p-ov2-uswagg.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/4.uswagg/p-ov1-uswagg.png",
      "/images/switching/4.uswagg/p-ov2-uswagg.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Layer 2 switch made for 10G SFP+ connections",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442 x 120 x 43.7 mm (17.4 x 4.7 x 1.7\")" },
          { label: "port Layout 10G SFP+", value: "8 (10G/1G)" },
          { label: "Form Factor", value: "Rack Mount (1U)" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "160 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "80 Gbps" },
          { label: "Forwarding Rate", value: "119 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "16.000" },
          { label: "Packet Buffer Size", value: "1.5 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "QoS (DSCP)", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1X Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },
         { label: "Virtual Network Override", value: "✓", isCheck: true },
        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "Max. Power Consumption", value: "36W"},
         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz, (1) USP RPS DC input"},
         { label: "Power Input Method", value: "AC Input"},
         { label: "Power Supply", value: "AC/DC, Internal, 36W"},
         { label: "Supported Voltage Range", value: "100–240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "102 BTU/h"},
         { label: "Weight", value: "With/Without Mounting Brackets: 2.7 kg / 2.6 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "400-1200 mm (15.7-47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 16kV, contact: ± 12kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 04456-21-08356"},
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Req. UniFi Network", value: "Version 5.14.12 and later" },
        ]
      },
      
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/4.uswagg/p-itb-uswagg.jpg", },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Toolless Mini Rack",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
        specs: [
          "6U-sized device rack",
          "Combine two Mini Racks into a 12U rack with a Stacking Kit",
          "Toolless assembly and device mounting",
          "Lockable casters"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "with handle and caster : 519 x 460 x 485 mm (20.43 x 18.11 x 19.09\")" },
          { label: "Weight", value: "10.3 kg" },
          { label: "Max. Weight Capacity (Single toolless mini rack) Static : 80 kg (176 lb)", value: "SGCC Steel" },
          { label: "Max. Weight Capacity (Double toolless mini rack) Static : 70 kg (154 lb)", value: "SGCC Steel" },
          { label: "Enclosure Material", value: "Frame/Bracket: SPCC steel, Handle: Stainless steel" },
          { label: "Color", value: "Silver" },
          { label: "Treatment", value: "Liquid Coating" },
          { label: "U Height", value: "6U" },
          { label: "Rack Type", value: "Open Frame" },
          { label: "Mounting", value: "Floor Stand" },
          { label: "Lockable Casters", value: "✓"},
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
      {
        id: 2,
        name: "24-Port Blank Keystone Patch Panel",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Standalone insert that can be easily installed into an existing network equipment rack to create a clean, uniform aesthetic.",
        specs: [
          "1U 24-port blank patch panel with cable management bar",
          "Ideal for keystone module installation",
          "Uniform aesthetic with UniFi rack-mount equipment",

        ],
        detailedSpecs: [
          { label: "Dimensions (Standalone Insert)", value: "442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7 in)" },
          { label: "Dimensions (Management Bar)", value: "433.8 x 71.5 x 17 mm (17.1 x 2.8 x 0.7\")" },
          { label: "Weight (Standalone Insert)", value: "260 g (9.17 oz)" },
          { label: "Weight (Management Bar)", value: "390 g (13.8 oz)" },
          { label: "Materials Front Panel Housing", value: "Cold rolled carbon steel (SPCC)" },
          { label: "Materials Inner Module", value: "Polycarbonate" },
          { label: "Materials Management bar", value: "Cold rolled carbon steel (SPCC)" },
          { label: "Treatment", value: "Painting" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },
{
    id: "ECS-48-PoE(2150W)",
    name: "Enterprise Campus 48 PoE",
    category: "Switching",
    subfilter: "Enterprise",
    image: "/images/switching/5.ecs48poe/1.p-utama-ecs48poe.jpg",
    shortDescription:
      "Enterprise-grade 48-port, Layer 3 Etherlighting™ PoE+++ switch with high-capacity 10 GbE RJ45 and 25G SFP28 connections for high availability system design.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    
    // SKU produk
    sku: "ECS-48-PoE(2150W)",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/5.ecs48poe/1.p-utama-ecs48poe.jpg",
      "/images/switching/5.ecs48poe/2.p-dimensi-ecs48poe.jpg",
      "/images/switching/5.ecs48poe/3.p-spec-ecs48poe.jpg",
      "/images/switching/5.ecs48poe/p-itb-ecs48poe.jpg",
      "/images/switching/5.ecs48poe/p-mkt0-ecs48poe.jpg",
      "/images/switching/5.ecs48poe/p-mkt1-ecs48poe.jpg",
      "/images/switching/5.ecs48poe/p-mkt2-ecs48poe.jpg",
      "/images/switching/5.ecs48poe/p-mkt3-ecs48poe.jpg",
      "/images/switching/5.ecs48poe/p-mkt4-ecs48poe.jpg",
      "/images/switching/5.ecs48poe/p-mkt5-ecs48poe.jpg",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/5.ecs48poe/p-mkt0-ecs48poe.jpg",
      "/images/switching/5.ecs48poe/p-mkt2-ecs48poe.jpg",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enterprise-grade 48-port",
      "Layer 3 Etherlighting™ PoE+++ switch with high-capacity 10 GbE RJ45 and 25G SFP28 connections for high availability system design",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 43.7 x 496 mm (17.4 x 1.7 x 19.5\")" },
          { label: "Port Layout 2.5 GbE RJ45", value: "16 (All PoE+++) (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10 GbE RJ45", value: "32 (All PoE+++) (10G/5G/2.5G/1G/100M/10M)" },
          { label: "Port Layout 25G SFP28", value: "4 (25G/10G/1G)" },
          { label: "Max. PoE Output", value: "Up to PoE+++" },
          { label: "Total PoE Availability", value: "200-240V AC Shared Mode: 2,150W, 200-240V AC Redundant Mode: 950W" },
          { label: "Redundancy", value: "400W" },
          { label: "Layer 3", value: "✓", isCheck: true },
          { label: "Form Factor", value: "Rack Mount (1U, Full-Depth)" },
          { label: "Etherlighting™", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "920 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "460 Gbps" },
          { label: "Forwarding Rate", value: "684 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "128.000" },
          { label: "L3 Table Size ARP Entries", value: "128.000" },
          { label: "L3 Table Size IPv4 Routes", value: "256.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "512" },
          { label: "Packet Buffer Size", value: "8 MB" },
          { label: "Access Lists IPv4", value: "256" },
          { label: "Access Lists MAC", value: "256" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "QoS (DSCP)", value: "✓", isCheck: true },
         { label: "Pro AV Profiles", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1X Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },
         { label: "Virtual Network Override", value: "✓", isCheck: true },
        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports, PoE+++", value: "48"},
         { label: "Max. PoE Wattage per Port, PoE", value: "15.4W"},
         { label: "Max. PoE Wattage per Port, PoE+", value: "30W"},
         { label: "Max. PoE Wattage per Port, PoE++", value: "60W"},
         { label: "Max. PoE Wattage per Port, PoE+++", value: "90W"},
         { label: "Max. Power Consumption", value: "250W (Excluding PoE Output) 2,400W (Including PoE Output"},
         { label: "Power Method", value: "(2) Universal input, 100–240V AC, 50/60 Hz, (1) USP RPS DC input"},
         { label: "Power Input Method", value: "(2) AC input, Hot-swappable power modules"},
         { label: "Power Supply", value: "(2) Hot-swappable AC/DC 1,200W power modules"},
         { label: "Supported Voltage Range", value: "100–240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "785 BTU/h"},
         { label: "Weight", value: "With/Without Mounting Brackets: 9.56 kg / 9.46 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "482.6 mm (19\") four-post racks"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "Fan Method", value: "(4) hot-swappable fan modules"},
         { label: "ESD Protection", value: "Air: ± 30kV, contact: ± 19kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing"},
         { label: "Etherlighting™ Ethernet", value: "✓", isCheck: true },
         { label: "Etherlighting™ SFP28", value: "✓", isCheck: true },
         { label: "LEDs Ethernet", value: "✓", isCheck: true },
         { label: "LEDs System", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 04456-21-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Requirements", value: "Version 9.0.114 and later"},]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/5.ecs48poe/p-itb-ecs48poe.jpg", },
    ],
    },
{
    id: "ECS-24-PoE(1050W)",
    name: "Enterprise Campus 24 PoE",
    category: "Switching",
    subfilter: "Enterprise",
    image: "/images/switching/6.ecs24poe/1.p-utama-ecs24poe.jpg",
    shortDescription:
      "Enterprise-grade 24-port, Layer 3 Etherlighting™ PoE+++ switch with high-capacity 10 GbE RJ45 and 25G SFP28 connections for high availability system design.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
    
    // SKU produk
    sku: "ECS-24-PoE(1050W)",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/6.ecs24poe/1.p-utama-ecs24poe.jpg",
      "/images/switching/6.ecs24poe/2.p-dimensi-ecs24poe.jpg",
      "/images/switching/6.ecs24poe/3.p-spec-ecs24poe.jpg",
      "/images/switching/6.ecs24poe/p-itb-ecs24poe.jpg",
      "/images/switching/6.ecs24poe/p-mkt0-ecs24poe.jpg",
      "/images/switching/6.ecs24poe/p-mkt1-ecs24poe.jpg",
      "/images/switching/6.ecs24poe/p-mkt2-ecs24poe.jpg",
      "/images/switching/6.ecs24poe/p-mkt3-ecs24poe.jpg",
      "/images/switching/6.ecs24poe/p-mkt4-ecs24poe.jpg",
      "/images/switching/6.ecs24poe/p-mkt5-ecs24poe.jpg",
      "/images/switching/6.ecs24poe/p-mkt6-ecs24poe.jpg",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/6.ecs24poe/p-mkt0-ecs24poe.jpg",
      "/images/switching/6.ecs24poe/p-mkt6-ecs24poe.jpg",
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
          { label: "Dimensions", value: "442.4 x 43.7 x 496 mm (17.4 x 1.7 x 19.5\")" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE+++) (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10 GbE RJ45", value: "16 (All PoE+++) (10G/5G/2.5G/1G/100M/10M)" },
          { label: "Port Layout 25G SFP28", value: "2 (25G/10G/1G)" },
          { label: "Max. PoE Output", value: "Up to PoE+++" },
          { label: "Total PoE Availability", value: "200-240V AC Shared Mode: 2,250W with (2) 1,200W modules, 200-240V AC Redundant Mode: 1,050W with (2) 1,200W modules" },
          { label: "Redundancy", value: "(2) Hot-Swappable PSUs, (4) Hot-Swappable Fans" },
          { label: "Layer 3", value: "✓", isCheck: true },
          { label: "Form Factor", value: "Rack Mount (1U, Full-Depth)" },
          { label: "Etherlighting™", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "460 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "230 Gbps" },
          { label: "Forwarding Rate", value: "342 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "128.000" },
          { label: "L3 Table Size ARP Entries", value: "128.000" },
          { label: "L3 Table Size IPv4 Routes", value: "256.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "512" },
          { label: "Packet Buffer Size", value: "8 MB" },
          { label: "Access Lists IPv4", value: "256" },
          { label: "Access Lists MAC", value: "256" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "QoS (DSCP)", value: "✓", isCheck: true },
         { label: "Pro AV Profiles", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1X Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },
         { label: "Virtual Network Override", value: "✓", isCheck: true },
        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports, PoE+++", value: "24"},
         { label: "Max. PoE Wattage per Port, PoE", value: "15.4W"},
         { label: "Max. PoE Wattage per Port, PoE+", value: "30W"},
         { label: "Max. PoE Wattage per Port, PoE++", value: "60W"},
         { label: "Max. PoE Wattage per Port, PoE+++", value: "90W"},
         { label: "Max. Power Consumption", value: "150W (Excluding PoE Output) 2,400W (Including PoE Output"},
         { label: "Power Method", value: "(2) Universal input, 100–240V AC, 50/60 Hz, (1) USP RPS DC input"},
         { label: "Power Input Method", value: "(2) AC input, Hot-swappable power modules"},
         { label: "Power Supply", value: "(2) Hot-swappable AC/DC 1,200W power modules"},
         { label: "Supported Voltage Range", value: "100–240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "444 BTU/h"},
         { label: "Weight", value: "With/Without Mounting Brackets: 9.56 kg / 9.46 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "482.6 mm (19\") four-post racks"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "Fan Method", value: "(4) hot-swappable fan modules"},
         { label: "ESD Protection", value: "Air: ± 30kV, contact: ± 19kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing"},
         { label: "Etherlighting™ Ethernet", value: "✓", isCheck: true },
         { label: "Etherlighting™ SFP28", value: "✓", isCheck: true },
         { label: "LEDs Ethernet", value: "✓", isCheck: true },
         { label: "LEDs System", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 04456-21-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Requirements", value: "Version 9.0.114 and later"},]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/6.ecs24poe/p-itb-ecs24poe.jpg", },
    ],
  },
{
    id: "ECS-48S-PoE(2150W)",
    name: "Enterprise Campus 48S PoE",
    category: "Switching",
    subfilter: "Enterprise",
    image: "/images/switching/7.ecs48spoe/1.p-utama-ecs48spoe.jpg",
    shortDescription:
      "Enterprise-grade 48-port, Layer 3 Etherlighting™ PoE+++ switch with Stacking support and high-capacity 10 GbE RJ45 and 25G SFP28 connections for high availability system design.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "ECS-48S-PoE(2150W)",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/7.ecs48spoe/1.p-utama-ecs48spoe.jpg",
      "/images/switching/7.ecs48spoe/2.p-dimensi-ecs48spoe.jpg",
      "/images/switching/7.ecs48spoe/3.p-spec-ecs48spoe.jpg",
      "/images/switching/7.ecs48spoe/p-mkt0-ecs48spoe.jpg",
      "/images/switching/7.ecs48spoe/p-mkt1-ecs48spoe.jpg",
      "/images/switching/7.ecs48spoe/p-mkt2-ecs48spoe.jpg",
      "/images/switching/7.ecs48spoe/p-mkt3-ecs48spoe.jpg",
      "/images/switching/7.ecs48spoe/p-mkt4-ecs48spoe.jpg",
      "/images/switching/7.ecs48spoe/p-mkt5-ecs48spoe.jpg",
      "/images/switching/7.ecs48spoe/p-mkt6-ecs48spoe.jpg",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/7.ecs48spoe/p-mkt0-ecs48spoe.jpg",
      "/images/switching/7.ecs48spoe/p-mkt6-ecs48spoe.jpg",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enterprise-grade 48-port",
      "Layer 3 Etherlighting™ PoE+++ switch with Stacking support and high-capacity 10 GbE RJ45 and 25G SFP28 connections for high availability system design",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 43.7 x 496 mm (17.4 x 1.7 x 19.5\")" },
          { label: "Port Layout 25G SFP28", value: "48 (25G/10G)" },
          { label: "Port Layout 100G QSFP28", value: "6 (100G/40G)" },
          { label: "Redundancy", value: "(2) Hot-Swappable PSUs, (4) Hot-Swappable Fans" },
          { label: "Layer 3", value: "✓", isCheck: true },
          { label: "Form Factor", value: "Rack Mount (1U, Full-Depth)" },
          { label: "Etherlighting™", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "3.6 Tbps" },
          { label: "Total Non-Blocking Throughput", value: "1.8 Tbps" },
          { label: "Forwarding Rate", value: "2.4 Bpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "128.000" },
          { label: "L3 Table Size ARP Entries", value: "96.000" },
          { label: "L3 Table Size IPv4 Routes", value: "288.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "Packet Buffer Size", value: "24 MB" },
          { label: "Access Lists IPv4", value: "512" },
          { label: "Access Lists MAC", value: "512" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "MC-LAG", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "Max. Power Consumption", value: "340W"},
         { label: "Power Method", value: "(2) Universal input, 100–240V AC, 50/60 Hz, (1) USP RPS DC input"},
         { label: "Power Input Method", value: "(2) AC input, Hot-swappable power modules"},
         { label: "Power Supply", value: "(2) Hot-swappable AC/DC 1,200W power modules"},
         { label: "Supported Voltage Range", value: "100–240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "1160 BTU/h"},
         { label: "Weight", value: "With/Without Mounting Brackets: 10 kg / 9.9 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "482.6 mm (19\") four-post racks"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 30kV, contact: ± 19kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing"},
         { label: "Etherlighting™ SFP28", value: "✓", isCheck: true },
         { label: "Etherlighting™ QSFP28", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 01327-25-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Requirements", value: "Version 8.5.6 and later"},]
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
        name: "100G LR4 Single-Mode Optical Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "QSFP28 transceiver that supports 100G connections up to 10 km using single-mode fiber with a duplex LC UPC connector.",
        specs: [
          "Max data rate: 100 Gbps",
          "Compatible with QSFP28 and QSFP+ interfaces",
          "Duplex LC UPC connector"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "QSFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "TX Wavelength", value: "1295 / 1300 / 1304 / 1309 nm" },
          { label: "RX Wavelength", value: "1295 / 1300 / 1304 / 1309 nm" },
          { label: "Supported Data Rate", value: "100 Gbps" },
          { label: "Supported Cable Distance", value: "10 km (6.2 mi)" },
          { label: "Max. Power Consumption", value: "4 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING", value: "CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014. Do not look into the ends of the fiber optic cable or SFP module while converters are powered" },
        ],
        productLink: "/products/mounting-kit-ecs-aggregation"
      },
      {
        id: 2,
        name: "100G PSM4 Single-Mode Optical Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "QSFP28 transceiver that supports 100G connections up to 2 km using single-mode fiber with an MPO-12 APC connector.",
        specs: [
          "Max data rate: 100 Gbps",
          "Compatible with QSFP28 and QSFP+ interfaces",
          "MPO-12 Type B APC connector"
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
          { label: "WARNING", value: "CLASS 1 LASER PRODUCT, IEC/EN 60825" },
          
        ],
        productLink: "/products/power-cable-ecs-aggregation"
      },
    ]
  },
{
    id: "ECS-24S-PoE(1050W)",
    name: "Enterprise Campus 24S PoE",
    category: "Switching",
    subfilter: "Enterprise",
    image: "/images/switching/8.ecs24spoe/1.p-utama-ecs24spoe.jpg",
    shortDescription:
      "Enterprise-grade 24-port, Layer 3 Etherlighting™ PoE+++ switch with Stacking support and high-capacity 10 GbE RJ45 and 25G SFP28 connections for high availability system design.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "ECS-24S-PoE(1050W)",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/8.ecs24spoe/1.p-utama-ecs24spoe.jpg",
      "/images/switching/8.ecs24spoe/2.p-dimensi-ecs24spoe.jpg",
      "/images/switching/8.ecs24spoe/3.p-spec-ecs24spoe.jpg",
      "/images/switching/8.ecs24spoe/p-mkt0-ecs24spoe.jpg",
      "/images/switching/8.ecs24spoe/p-mkt1-ecs24spoe.jpg",
      "/images/switching/8.ecs24spoe/p-mkt2-ecs24spoe.jpg",
      "/images/switching/8.ecs24spoe/p-mkt3-ecs24spoe.jpg",
      "/images/switching/8.ecs24spoe/p-mkt4-ecs24spoe.jpg",
      "/images/switching/8.ecs24spoe/p-mkt5-ecs24spoe.jpg",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/8.ecs24spoe/p-mkt0-ecs24spoe.jpg",
      "/images/switching/8.ecs24spoe/p-mkt5-ecs24spoe.jpg",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Enterprise-grade 24-port",
      "Layer 3 Etherlighting™ PoE+++ switch with Stacking support and high-capacity 10 GbE RJ45 and 25G SFP28 connections for high availability system design",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Enterprise Campus 24S PoE" },
          { label: "Port Layout 1 GbE RJ45", value: "1 (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE+++), (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10 GbE RJ45", value: "16 (All PoE+++(10G/5G/2.5G/1G/100M/10M)" },
          { label: "Port Layout 25G SFP28", value: "4 (25G/10G/1G)" },
          { label: "Port Layout 100G QSFP28", value: "2 (100G)" },
          { label: "Port Layout Console", value: "1" },
          { label: "Max. PoE Output", value: "Up to PoE+++" },
          { label: "Total PoE Availability", value: "200-240V AC Shared Mode: 2,250W with (2) 1,200W modules, 200-240V AC Redundant Mode: 1,050W with (2) 1,200W modules" },
          { label: "Redundancy", value: "Switch Stacking, (2) Hot-Swappable PSUs, (4) Hot-Swappable Fans" },
          { label: "Layer 3", value: "✓", isCheck: true },
          { label: "Form Factor", value: "Rack Mount (1U, Full-Depth)" },
          { label: "Etherlighting™", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "460 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "230 Gbps" },
          { label: "Forwarding Rate", value: "342 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "128.000" },
          { label: "L3 Table Size ARP Entries", value: "128.000" },
          { label: "L3 Table Size IPv4 Routes", value: "256.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "512" },
          { label: "Packet Buffer Size", value: "8 MB" },
          { label: "Access Lists IPv4", value: "256" },
          { label: "Access Lists MAC", value: "256" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "QoS (DSCP)", value: "✓", isCheck: true },
         { label: "Pro AV Profiles", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1X Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE+++ Ports", value: "24"},
         { label: "Max. PoE Wattage per Port by PSE, PoE", value: "15.4"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "30W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE++", value: "60W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+++", value: "90W"},
         { label: "Max. Power Consumption", value: "150W (Excluding PoE Output), 2,400W (Including PoE Output"},
         { label: "Power Method", value: "(2) Universal input, 100–240V AC, 50/60 Hz, (1) USP RPS DC input"},
         { label: "Power Input Method", value: "(2) AC input, Hot-swappable power modules"},
         { label: "Power Supply", value: "(2) Hot-swappable AC/DC 600W power modules"},
         { label: "Supported Voltage Range", value: "100–240V AC"},
         { label: "Management", value: "Ethernet, OOB Management Port, Serial Console, AR"},
         { label: "Heat Dissipation", value: "512 BTU/h"},
         { label: "Weight", value: "With/Without Mounting Brackets: 9.3 kg / 9.2 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "482.6 mm (19\") four-post racks"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 12kV, contact: ± 12kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing"},
         { label: "Etherlighting™ SFP28", value: "✓", isCheck: true },
         { label: "Etherlighting™ QSFP28", value: "✓", isCheck: true },
         { label: "LEDs Ethernet", value: "✓", isCheck: true },
         { label: "LEDs SFP28", value: "✓", isCheck: true },
         { label: "LEDs System", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC"},
        ]
      },
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
          "Duplex LC UPC connector"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "QSFP" },
          { label: "Connector", value: "Duplex LC UPC" },
          { label: "Supported Media", value: "Single-Mode Fiber" },
          { label: "TX Wavelength", value: "1295 / 1300 / 1304 / 1309 nm" },
          { label: "RX Wavelength", value: "1295 / 1300 / 1304 / 1309 nm" },
          { label: "Supported Data Rate", value: "100 Gbps" },
          { label: "Supported Cable Distance", value: "10 km (6.2 mi)" },
          { label: "Max. Power Consumption", value: "4 W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
          { label: "WARNING", value: "CLASS 1 LASER PRODUCT, IEC/EN 60825-1:2014. Do not look into the ends of the fiber optic cable or SFP module while converters are powered" },
        ],
        productLink: "/products/mounting-kit-ecs-aggregation"
      },
      {
        id: 2,
        name: "25G Long-Range Direct Attach Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Long-range SFP28 direct attach cable with a 25 Gbps max data rate.",
        specs: [
          "Supported data rates: 25 / 10 / 1 Gbps",
          "Compatible with SFP28, SFP+, and SFP interfaces",
          "Cable length: 5 to 30 m"
        ],
        detailedSpecs: [
          { label: "Available Lengths", value: "5 / 10 / 20 / 30 m (16.4 / 32.8 / 65.6 / 98.4 ft)" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Supported Data Rate", value: "25 / 10Gbps" },
          { label: "Cable Features Wire", value: "OM3 FIBER" },
          { label: "Cable Features Wave Length", value: "850 NM" },
          { label: "Cable Features Connector Type", value: "SFP28 to SFP28" },
          { label: "Cable Features Jacket Color", value: "Aqua" },
          { label: "Cable Features Jacket Material", value: "PVC" },
          { label: "Cable Features Jacket Outer Diameter", value: "3.0 mm (0.12\")" },
          { label: "Cable Features Bend Radius", value: "Min. 30mm (1.18\")" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
        ],
        productLink: "/products/power-cable-ecs-24s-poe(1050w)"
      },
    ]
  },
{
    id: "ECS-Aggregation",
    name: "Enterprise Campus Aggregation",
    category: "Switching",
    subfilter: "Enterprise",
    image: "/images/switch.jpg",
    shortDescription:
      "1.8 Tbps high-density 100G/25G Layer 3 Etherlighting™ aggregation switch with MC-LAG support for high availability system design.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "ECS-Aggregation",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switch.jpg",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "8 Tbps high-density 100G/25G Layer 3 Etherlighting™ aggregation switch with MC-LAG support for high availability system design",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 43.7 x 496 mm (17.4 x 1.7 x 19.5\")" },
          { label: "Port Layout 25G SFP28", value: "48 (25G/10G)" },
          { label: "Port Layout 100G QSFP28", value: "6 (100G/40G)" },
          { label: "Redundancy", value: "Multi-Chassis Link Aggregation (MC-LAG), (2) Hot-Swappable PSUs, (5) Hot-Swappable Fans" },
          { label: "Layer 3", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U, Full-Depth)"},
          { label: "Etherlightning™", value: "✓" },
          { label: "Layer", value: "Layer 3 Switching" }
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "3.6 Tbps" },
          { label: "Total Non-Blocking Throughput", value: "1.8 Tbps" },
          { label: "Forwarding Rate", value: "2.4 Bpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "128.000" },
          { label: "L3 Table Size ARP Entries", value: "96.000" },
          { label: "L3 Table Size IPv4 Routes", value: "288.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "Packet Buffer Size", value: "24 MB" },
          { label: "Access Lists IPv4", value: "512" },
          { label: "Access Lists MAC", value: "512" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "MC-LAG", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "Max. Power Consumption", value: "340W"},
         { label: "Power Method", value: "(2) Universal input, 100–240V AC, 50/60 Hz, (1) USP RPS DC input"},
         { label: "Power Input Method", value: "(2) AC input, Hot-swappable power modules"},
         { label: "Power Supply", value: "(2) Hot-swappable AC/DC 550W power modules"},
         { label: "Supported Voltage Range", value: "100–240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "1160 BTU/h"},
         { label: "Weight", value: "With/Without Mounting Brackets: 10 kg / 9.9 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "482.6 mm (19\") four-post racks"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 12kV, contact: ± 8kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing"},
         { label: "Etherlighting™ SFP28", value: "✓", isCheck: true },
         { label: "Etherlighting™ QSFP28", value: "✓", isCheck: true },
         { label: "LEDs Ethernet", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Requirements UniFi Network", value: "Version 8.5.6 and later"},
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
        productLink: "/products/mounting-kit-ecs-aggregation"
      },
      {
        id: 2,
        name: "100G PSM4 Single-Mode Optical Module",
        image: "/images/dcs-box.png",
        price: 299,
        description: "QSFP28 transceiver that supports 100G connections up to 2 km using single-mode fiber with an MPO-12 APC connector.",
        specs: [
          "Max data rate: 100 Gbps",
          "Compatible with QSFP28 and QSFP+ interfaces",
          "MPO-12 Type B APC connector"
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
          { label: "WARNING", value: "CLASS 1 LASER PRODUCT, IEC/EN 60825" },
          
        ],
        productLink: "/products/power-cable-ecs-aggregation"
      },
    ]
  },
{
    id: "USW-Pro-Max-48-PoE(720W)",
    name: "Pro Max 48 PoE",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switching/10.uswpromax48poe/1.p-utama-uswpromax48poe.jpg",
    shortDescription:
      "A 48-port, Layer 3 Etherlighting™ switch with 2.5 GbE and PoE++ output.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    
    // SKU produk
    sku: "USW-Pro-Max-48-PoE(720W)",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/10.uswpromax48poe/1.p-utama-uswpromax48poe.jpg",
      "/images/switching/10.uswpromax48poe/2.p-dimensi-uswpromax48poe.jpg",
      "/images/switching/10.uswpromax48poe/3.p-spec-uswpromax48poe.jpg",
      "/images/switching/10.uswpromax48poe/4.p-development-uswpromax48poe.jpg",
      "/images/switching/10.uswpromax48poe/p-itb-uswpromax48poe.jpg",
      "/images/switching/10.uswpromax48poe/p-mkt0-uswpromax48poe.jpg",
      "/images/switching/10.uswpromax48poe/p-mkt1-uswpromax48poe.jpg",
      "/images/switching/10.uswpromax48poe/p-mkt2-uswpromax48poe.jpg",
      "/images/switching/10.uswpromax48poe/p-mkt3-uswpromax48poe.jpg",
      "/images/switching/10.uswpromax48poe/p-mkt4-uswpromax48poe.jpg",
      "/images/switching/10.uswpromax48poe/p-ov1-uswpromax48poe.png",
      "/images/switching/10.uswpromax48poe/p-ov2-uswpromax48poe.png",

    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/10.uswpromax48poe/p-ov1-uswpromax48poe.png",
      "/images/switching/10.uswpromax48poe/p-ov2-uswpromax48poe.png",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Layer 3 Etherlighting™ switch with 2",
      "5 GbE and PoE++ output",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 400 x 44 mm (17.4 x 15.7 x 1.7\")" },
          { label: "Port Layout 1 GbE RJ45 ", value: "48 (25G/10G)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "48 (25G/10G)" },
          { label: "Port Layout 10G SFP+", value: "48 (25G/10G)" },
          { label: "Max. PoE Output", value: "Up to PoE++" },
          { label: "Total PoE Availability", value: "720W" },
          { label: "Redundancy", value: "DC Power Backup" },
          { label: "Layer 3", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U, Full-Depth)"},
          { label: "Etherlightning™", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "224 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "1.12 Gbps" },
          { label: "Forwarding Rate", value: "167 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "32.000" },
          { label: "L3 Table Size ARP Entries", value: "12.000" },
          { label: "L3 Table Size IPv4 Routes", value: "12.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "Packet Buffer Size", value: "2 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "QoS (DSCP)", value: "✓", isCheck: true },
         { label: "Pro AV Profiles", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports PoE+", value: "32"},
         { label: "PoE Ports PoE++", value: "16"},
         { label: "Max. PoE Wattage per Port by PSE, PoE", value: "15.4W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "32W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE++", value: "64W"},
         { label: "Max. Power Consumption", value: "100W (Excluding PoE Output), 820W (Including PoE Output)"},
         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz, (1) USP RPS DC input"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, Internal, 870W"},
         { label: "Supported Voltage Range", value: "100–240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "341.2 BTU/h"},
         { label: "Weight", value: "With/Without Mounting Brackets: 6.3 kg / 6.2 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 16kV, contact: ± 12kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "Etherlighting™ SFP28", value: "✓", isCheck: true },
         { label: "Etherlighting™ QSFP28", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 06373-24-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 8.0.24 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/10.uswpromax48poe/p-itb-uswpromax48poe.jpg", },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Toolless Mini Rack",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
        specs: [
          "6U-sized device rack",
          "Combine two Mini Racks into a 12U rack with a Stacking Kit",
          "Toolless assembly and device mounting",
          "Lockable casters"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "with handle and caster : 519 x 460 x 485 mm (20.43 x 18.11 x 19.09\")" },
          { label: "Weight", value: "10.3 kg" },
          { label: "Max. Weight Capacity (Single toolless mini rack) Static : 80 kg (176 lb)", value: "SGCC Steel" },
          { label: "Max. Weight Capacity (Double toolless mini rack) Static : 70 kg (154 lb)", value: "SGCC Steel" },
          { label: "Enclosure Material", value: "Frame/Bracket: SPCC steel, Handle: Stainless steel" },
          { label: "Color", value: "Silver" },
          { label: "Treatment", value: "Liquid Coating" },
          { label: "U Height", value: "6U" },
          { label: "Rack Type", value: "Open Frame" },
          { label: "Mounting", value: "Floor Stand" },
          { label: "Lockable Casters", value: "✓"},
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
      {
        id: 2,
        name: "24-Port Blank Keystone Patch Panel",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Standalone insert that can be easily installed into an existing network equipment rack to create a clean, uniform aesthetic.",
        specs: [
          "1U 24-port blank patch panel with cable management bar",
          "Ideal for keystone module installation",
          "Uniform aesthetic with UniFi rack-mount equipment",

        ],
        detailedSpecs: [
          { label: "Dimensions (Standalone Insert)", value: "442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7 in)" },
          { label: "Dimensions (Management Bar)", value: "433.8 x 71.5 x 17 mm (17.1 x 2.8 x 0.7\")" },
          { label: "Weight (Standalone Insert)", value: "260 g (9.17 oz)" },
          { label: "Weight (Management Bar)", value: "390 g (13.8 oz)" },
          { label: "Materials Front Panel Housing", value: "Cold rolled carbon steel (SPCC)" },
          { label: "Materials Inner Module", value: "Polycarbonate" },
          { label: "Materials Management bar", value: "Cold rolled carbon steel (SPCC)" },
          { label: "Treatment", value: "Painting" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 3,
        name: "Redundant Power",
        image: "/images/dcs-box.png",
        price: 299,
        description: "950W redundant power supply for rack-mounted UniFi devices.",
        specs: [
          "950W DC power availability",
          "(6) DC SmartPower ports",
          "1.3\" LCM touchscreen"
        ],
        detailedSpecs: [
          { label: "Management", value: "Ethernet" },
          { label: "Networking Interface", value: "(1) GbE RJ45 Port" },
          { label: "Power Method", value: "(1) Universal AC input, 100-240V AC)" },
          { label: "Power Supply", value: "54V DC output: AC/DC, internal, 645W, 12V DC output: AC/DC, internal, 350W" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Max. Power Consumption", value: "995W" },
          { label: "Power Output", value: "(6) RPS DC Ports)" },
          { label: "ESD/EMP Protection", value: "Air: 16kV, contact 12kV" },
          { label: "Display", value: "1.3\" touchscreen" },
          { label: "Buttons", value: "(1) Factory Reset)" },
          { label: "LEDs System", value: "Status" },
          { label: "LEDs ", value: "Activity" },
          { label: "Certifications ", value: "CE, FCC, IC" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "SmartPower Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A cable used to deliver redundant power from an associated SmartPower device.",
        specs: [
          "Supported UniFi SmartPower connect",
          "Cable length 1.5 m",
        ],
        detailedSpecs: [
          { label: "Length", value: "1.5 m (4.9 ft)" },
          { label: "Insulation Thickness", value: "0.35 mm (0.01\")" },
          { label: "Insulation Diameter", value: "2 mm (0.08\")" },
          { label: "Insulation Material", value: "PVC" },
          { label: "Conductor Wire Gauge", value: "(18) 16 AWG, (6) 24 AWG" },
          { label: "Cable Jacket Material", value: "PVC" },
          { label: "Cable Jacket Outer Diameter", value: "9.5 x 23 mm (0.4 x 0.9\")" },
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
    },
{
    id: "USW-Pro-Max-24-PoE(400W)",
    name: "Pro Max 24 PoE",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switching/11.uswpromax24poe/1.p-utama-uswpromax24poe.jpg",
    shortDescription:
      "A 24-port, Layer 3 Etherlighting™ switch capable of high-power PoE++ output.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
    
    // SKU produk
    sku: "USW-Pro-Max-24-PoE(400W)",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/11.uswpromax24poe/1.p-utama-uswpromax24poe.jpg",
      "/images/switching/11.uswpromax24poe/2.p-dimensi-uswpromax24poe.jpg",
      "/images/switching/11.uswpromax24poe/3.p-spec-uswpromax24poe.jpg",
      "/images/switching/11.uswpromax24poe/4.p-development-uswpromax24poe.jpg",
      "/images/switching/11.uswpromax24poe/p-itb-uswpromax24poe.jpg",
      "/images/switching/11.uswpromax24poe/p-mkt0-uswpromax24poe.jpg",
      "/images/switching/11.uswpromax24poe/p-mkt1-uswpromax24poe.jpg",
      "/images/switching/11.uswpromax24poe/p-mkt2-uswpromax24poe.jpg",
      "/images/switching/11.uswpromax24poe/p-mkt3-uswpromax24poe.jpg",
      "/images/switching/11.uswpromax24poe/p-mkt4-uswpromax24poe.jpg",
      "/images/switching/11.uswpromax24poe/p-ov1-uswpromax24poe.png",
      "/images/switching/11.uswpromax24poe/p-ov2-uswpromax24poe.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/11.uswpromax24poe/p-ov1-uswpromax24poe.png",
      "/images/switching/11.uswpromax24poe/p-ov2-uswpromax24poe.png",
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
          { label: "Dimensions", value: "442.4 x 400 x 44 mm (17.4 x 15.7 x 1.7\")" },
          { label: "Port Layout 1 GbE RJ45 ", value: "16 (8 PoE+; 8 PoE++), (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE++), (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "2 (10G/1G)" },
          { label: "Max. PoE Output", value: "Up to PoE++" },
          { label: "Total PoE Availability", value: "400W" },
          { label: "Redundancy", value: "DC Power Backup" },
          { label: "Layer 3", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U)"},
          { label: "Etherlightning™", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "112 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "56 Gbps" },
          { label: "Forwarding Rate", value: "83 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "16.000" },
          { label: "L3 Table Size ARP Entries", value: "6.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "Packet Buffer Size", value: "1.5 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "QoS (DSCP)", value: "✓", isCheck: true },
         { label: "Pro AV Profiles", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports PoE+", value: "8W"},
         { label: "PoE Ports PoE++", value: "16W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE", value: "15.4W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "32W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE++", value: "64W"},
         { label: "Max. Power Consumption", value: "50W (Excluding PoE Output), 450W (Including PoE Output)"},
         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz, (1) USP RPS DC input"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, Internal, 550W"},
         { label: "Supported Voltage Range", value: "100–240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "119 BTU/h"},
         { label: "Weight", value: "With/Without Mounting Brackets: 5.2 kg / 5.1 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "Etherlighting™ Ethernet", value: "✓", isCheck: true },
         { label: "Etherlighting™ SFP+", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 06374-24-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 8.0.24 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/11.uswpromax24poe/p-itb-uswpromax24poe.jpg", },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Toolless Mini Rack",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
        specs: [
          "6U-sized device rack",
          "Combine two Mini Racks into a 12U rack with a Stacking Kit",
          "Toolless assembly and device mounting",
          "Lockable casters"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "with handle and caster : 519 x 460 x 485 mm (20.43 x 18.11 x 19.09\")" },
          { label: "Weight", value: "10.3 kg" },
          { label: "Max. Weight Capacity (Single toolless mini rack) Static : 80 kg (176 lb)", value: "SGCC Steel" },
          { label: "Max. Weight Capacity (Double toolless mini rack) Static : 70 kg (154 lb)", value: "SGCC Steel" },
          { label: "Enclosure Material", value: "Frame/Bracket: SPCC steel, Handle: Stainless steel" },
          { label: "Color", value: "Silver" },
          { label: "Treatment", value: "Liquid Coating" },
          { label: "U Height", value: "6U" },
          { label: "Rack Type", value: "Open Frame" },
          { label: "Mounting", value: "Floor Stand" },
          { label: "Lockable Casters", value: "✓"},
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
      {
        id: 2,
        name: "Redundant Power",
        image: "/images/dcs-box.png",
        price: 299,
        description: "950W redundant power supply for rack-mounted UniFi devices.",
        specs: [
          "950W DC power availability",
          "(6) DC SmartPower ports",
          "1.3\" LCM touchscreen"
        ],
        detailedSpecs: [
          { label: "Management", value: "Ethernet" },
          { label: "Networking Interface", value: "(1) GbE RJ45 Port" },
          { label: "Power Method", value: "(1) Universal AC input, 100-240V AC)" },
          { label: "Power Supply", value: "54V DC output: AC/DC, internal, 645W, 12V DC output: AC/DC, internal, 350W" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Max. Power Consumption", value: "995W" },
          { label: "Power Output", value: "(6) RPS DC Ports)" },
          { label: "ESD/EMP Protection", value: "Air: 16kV, contact 12kV" },
          { label: "Display", value: "1.3\" touchscreen" },
          { label: "Buttons", value: "(1) Factory Reset)" },
          { label: "LEDs System", value: "Status" },
          { label: "LEDs ", value: "Activity" },
          { label: "Certifications ", value: "CE, FCC, IC" },
        
        
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 3,
        name: "24-Port Blank Keystone Patch Panel",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Standalone insert that can be easily installed into an existing network equipment rack to create a clean, uniform aesthetic.",
        specs: [
          "1U 24-port blank patch panel with cable management bar",
          "Ideal for keystone module installation",
          "Uniform aesthetic with UniFi rack-mount equipment",

        ],
        detailedSpecs: [
          { label: "Dimensions (Standalone Insert)", value: "442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7 in)" },
          { label: "Dimensions (Management Bar)", value: "433.8 x 71.5 x 17 mm (17.1 x 2.8 x 0.7\")" },
          { label: "Weight (Standalone Insert)", value: "260 g (9.17 oz)" },
          { label: "Weight (Management Bar)", value: "390 g (13.8 oz)" },
          { label: "Materials Front Panel Housing", value: "Cold rolled carbon steel (SPCC)" },
          { label: "Materials Inner Module", value: "Polycarbonate" },
          { label: "Materials Management bar", value: "Cold rolled carbon steel (SPCC)" },
          { label: "Treatment", value: "Painting" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "SmartPower Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A cable used to deliver redundant power from an associated SmartPower device.",
        specs: [
          "Supported UniFi SmartPower connect",
          "Cable length 1.5 m",
        ],
        detailedSpecs: [
          { label: "Length", value: "1.5 m (4.9 ft)" },
          { label: "Insulation Thickness", value: "0.35 mm (0.01\")" },
          { label: "Insulation Diameter", value: "2 mm (0.08\")" },
          { label: "Insulation Material", value: "PVC" },
          { label: "Conductor Wire Gauge", value: "(18) 16 AWG, (6) 24 AWG" },
          { label: "Cable Jacket Material", value: "PVC" },
          { label: "Cable Jacket Outer Diameter", value: "9.5 x 23 mm (0.4 x 0.9\")" },
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },
{
    id: "USW-Pro-XG-48-PoE(1080)",
    name: "Pro XG 48 PoE",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switching/12.uswproxg48poe/1.p-utama-uswproxg48poe.jpg",
    shortDescription:
      "Professional-grade, 48-port Layer 3 Etherlighting™ PoE+++ switch with (32) 10 GbE, (16) 2.5 GbE PoE, and (4) 25G SFP28 ports.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-Pro-XG-48-PoE(1080)",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/12.uswproxg48poe/1.p-utama-uswproxg48poe.jpg",
      "/images/switching/12.uswproxg48poe/2.p-dimensi-uswproxg48poe.jpg",
      "/images/switching/12.uswproxg48poe/3.p-spec-uswproxg48poe.jpg",
      "/images/switching/12.uswproxg48poe/4.p-development-uswproxg48poe.jpg",
      "/images/switching/12.uswproxg48poe/p-itb-uswproxg48poe.jpg",
      "/images/switching/12.uswproxg48poe/p-mkt0-uswproxg48poe.jpg",
      "/images/switching/12.uswproxg48poe/p-mkt1-uswproxg48poe.jpg",
      "/images/switching/12.uswproxg48poe/p-mkt2-uswproxg48poe.jpg",
      "/images/switching/12.uswproxg48poe/p-mkt3-uswproxg48poe.jpg",
      "/images/switching/12.uswproxg48poe/p-mkt4-uswproxg48poe.jpg",
      "/images/switching/12.uswproxg48poe/p-mkt5-uswproxg48poe.jpg",
      "/images/switching/12.uswproxg48poe/p-ov1-uswproxg48poe.png",
      "/images/switching/12.uswproxg48poe/p-ov2-uswproxg48poe.png",

    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/12.uswproxg48poe/p-ov1-uswproxg48poe.png",
      "/images/switching/12.uswproxg48poe/p-ov2-uswproxg48poe.png",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Professional-grade",
      "48-port Layer 3 Etherlighting™ PoE+++ switch with (32) 10 GbE",
      "and (4) 25G SFP28 ports",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 400 x 44 mm (17.4 x 15.7 x 1.7\")" },
          { label: "Port Layout 2.5 GbE RJ45", value: "16 (All PoE++), (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10 GbE RJ45", value: "32 (All PoE+++), (10G/5G/2.5G/1G/100M/10M)" },
          { label: "Port Layout 25G SFP28", value: "4 (25G/10G/1G)" },
          { label: "Max. PoE Output", value: "Up to PoE++" },
          { label: "Total PoE Availability", value: "200-240V AC: 1080W" },
          { label: "Redundancy", value: "DC Power Backup" },
          { label: "Layer 3", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U)"},
          { label: "Etherlightning™", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "920 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "460 Gbps" },
          { label: "Forwarding Rate", value: "684 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "128.000" },
          { label: "L3 Table Size ARP Entries", value: "128.000" },
          { label: "L3 Table Size IPv4 Routes", value: "256.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "512" },
          { label: "Packet Buffer Size", value: "8 MB" },
          { label: "Access Lists IPv4", value: "256" },
          { label: "Access Lists MAC", value: "256" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "QoS (DSCP)", value: "✓", isCheck: true },
         { label: "Pro AV Profiles", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports PoE+++", value: "48"},
         { label: "Max. PoE Wattage per Port by PSE, PoE", value: "15.4W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "30W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE++", value: "60W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+++", value: "90W"},
         { label: "Max. Power Consumption", value: "200W (Excluding PoE Output), 200-240V: 1,280W, 100-120V AC: 1,172W (Including PoE Output) "},
         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz, (1) USP RPS DC input"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, Internal, 1350W"},
         { label: "Supported Voltage Range", value: "100–240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Weight", value: "With/Without Mounting Brackets: 8.8 kg / 8.7 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "482.6 mm (19\") four-post racks"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 30kV, contact: ± 20kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "Etherlighting™ Ethernet", value: "✓", isCheck: true },
         { label: "Etherlighting™ SFP+", value: "✓", isCheck: true },
         { label: "LEDs RPS", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 04322-25-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 9.1.120 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/12.uswproxg48poe/p-itb-uswproxg48poe.jpg", },
    ],
    
    
  },
{
    id: "USW-Pro-XG-24-PoE(720W)",
    name: "Pro XG 24 PoE",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switching/13.uswproxg24poe/1.p-utama-uswproxg24poe.jpg",
    shortDescription:
      "Professional-grade, 24-port Layer 3 Etherlighting™ PoE+++ switch with (16) 10 GbE, (8) 2.5 GbE, and (2) 25G SFP28 ports.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-Pro-XG-24-PoE(720W)",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/13.uswproxg24poe/1.p-utama-uswproxg24poe.jpg",
      "/images/switching/13.uswproxg24poe/2.p-dimensi-uswproxg24poe.jpg",
      "/images/switching/13.uswproxg24poe/3.p-spec-uswproxg24poe.jpg",
      "/images/switching/13.uswproxg24poe/4.p-development-uswproxg24poe.jpg",
      "/images/switching/13.uswproxg24poe/p-itb-uswproxg24poe.jpg",
      "/images/switching/13.uswproxg24poe/p-mkt0-uswproxg24poe.jpg",
      "/images/switching/13.uswproxg24poe/p-mkt1-uswproxg24poe.jpg",
      "/images/switching/13.uswproxg24poe/p-mkt2-uswproxg24poe.jpg",
      "/images/switching/13.uswproxg24poe/p-mkt3-uswproxg24poe.jpg",
      "/images/switching/13.uswproxg24poe/p-mkt4-uswproxg24poe.jpg",
      "/images/switching/13.uswproxg24poe/p-ov1-uswproxg24poe.png",
      "/images/switching/13.uswproxg24poe/p-ov2-uswproxg24poe.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
       "/images/switching/13.uswproxg24poe/p-ov1-uswproxg24poe.png",
      "/images/switching/13.uswproxg24poe/p-ov2-uswproxg24poe.png",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Professional-grade",
      "24-port Layer 3 Etherlighting™ PoE+++ switch with (16) 10 GbE",
      "and (2) 25G SFP28 ports",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 400 x 44 mm (17.4 x 15.7 x 1.7\")" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE++), (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10 GbE RJ45", value: "16 (All PoE+++), (10G/5G/2.5G/1G/100M/10M)" },
          { label: "Port Layout 25G SFP28", value: "2 (25G/10G/1G)" },
          { label: "Max. PoE Output", value: "Up to PoE++" },
          { label: "Total PoE Availability", value: "720W" },
          { label: "Redundancy", value: "DC Power Backup" },
          { label: "Layer 3", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U)"},
          { label: "Etherlightning™", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "460 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "230 Gbps" },
          { label: "Forwarding Rate", value: "342 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "128.000" },
          { label: "L3 Table Size ARP Entries", value: "128.000" },
          { label: "L3 Table Size IPv4 Routes", value: "256.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "512" },
          { label: "Packet Buffer Size", value: "8 MB" },
          { label: "Access Lists IPv4", value: "256" },
          { label: "Access Lists MAC", value: "256" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "QoS (DSCP)", value: "✓", isCheck: true },
         { label: "Pro AV Profiles", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports PoE+++", value: "24"},
         { label: "Max. PoE Wattage per Port by PSE, PoE", value: "15.4W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "30W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE++", value: "60W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+++", value: "90W"},
         { label: "Max. Power Consumption", value: "150W (Excluding PoE Output), 870W (Including PoE Output"},
         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz, (1) USP RPS DC input"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, Internal, 1350W"},
         { label: "Supported Voltage Range", value: "100–240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Weight", value: "With/Without Mounting Brackets: 8 kg / 7.9 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "482.6 mm (19\") four-post racks"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 30kV, contact: ± 20kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "Etherlighting™ Ethernet", value: "✓", isCheck: true },
         { label: "Etherlighting™ SFP+", value: "✓", isCheck: true },
         { label: "LEDs RPS", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 04322-25-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 9.1.120 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/13.uswproxg24poe/p-itb-uswproxg24poe.jpg", },
    ],
  },
{
    id: "USW-Pro-HD-24-PoE(600W)",
    name: "Pro HD 24 PoE",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switching/14.uswprohd24poe/1.p-utama-uswprohd24poe.jpg",
    shortDescription:
      "Professional-grade, Layer 3 Etherlighting™ switch with (2) 10 GbE PoE++, (22) 2.5 GbE PoE++, and (4) 10G SFP+ ports.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-PRO-HD-24-PoE(600W)",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/14.uswprohd24poe/1.p-utama-uswprohd24poe.jpg",
      "/images/switching/14.uswprohd24poe/2.p-dimensi-uswprohd24poe.jpg",
      "/images/switching/14.uswprohd24poe/3.p-spec-uswprohd24poe.jpg",
      "/images/switching/14.uswprohd24poe/4.p-development-uswprohd24poe.jpg",
      "/images/switching/14.uswprohd24poe/p-itb-uswprohd24poe.jpg",
      "/images/switching/14.uswprohd24poe/p-mkt0-uswprohd24poe.jpg",
      "/images/switching/14.uswprohd24poe/p-mkt1-uswprohd24poe.jpg",
      "/images/switching/14.uswprohd24poe/p-mkt2-uswprohd24poe.jpg",
      "/images/switching/14.uswprohd24poe/p-mkt3-uswprohd24poe.jpg",
      "/images/switching/14.uswprohd24poe/p-mkt4-uswprohd24poe.jpg",
      "/images/switching/14.uswprohd24poe/p-ov1-uswprohd24poe.png",
      "/images/switching/14.uswprohd24poe/p-ov2-uswprohd24poe.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/14.uswprohd24poe/p-ov1-uswprohd24poe.png",
      "/images/switching/14.uswprohd24poe/p-ov2-uswprohd24poe.png",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Professional-grade",
      "Layer 3 Etherlighting™ switch with (2) 10 GbE PoE++",
      "5 GbE PoE++",
      "and (4) 10G SFP+ ports"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 400 x 44 mm (17.4 x 15.7 x 1.7\")" },
          { label: "Port Layout 2.5 GbE RJ45", value: "22 (All PoE++), (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10 GbE RJ45", value: "2 (All PoE++), (10G/5G/2.5G/1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "4 (10G/1G)" },
          { label: "Max. PoE Output", value: "Up to PoE++" },
          { label: "Total PoE Availability", value: "600W" },
          { label: "Redundancy", value: "DC Power Backup" },
          { label: "Layer 3", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U)"},
          { label: "Etherlightning™", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "230 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "115 Gbps" },
          { label: "Forwarding Rate", value: "171 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "32.000" },
          { label: "L3 Table Size ARP Entries", value: "12.000" },
          { label: "L3 Table Size IPv4 Routes", value: "12.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "Packet Buffer Size", value: "2 MB" },
          { label: "Access Lists IPv4", value: "256" },
          { label: "Access Lists MAC", value: "256" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "QoS (DSCP)", value: "✓", isCheck: true },
         { label: "Pro AV Profiles", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports PoE++", value: "24"},
         { label: "Max. PoE Wattage per Port by PSE, PoE", value: "15.4W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "30W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE++", value: "64W"},
         { label: "Max. Power Consumption", value: "60W (Excluding PoE Output), 660W (Including PoE Output)"},
         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz, (1) USP RPS DC input"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, Internal, 660W"},
         { label: "Supported Voltage Range", value: "100–240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Weight", value: "With/Without Mounting Brackets: 6.3 kg / 6.2 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "600 - 1,200 mm (23.6- 47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 30kV, contact: ± 20kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "Etherlighting™ Ethernet", value: "✓", isCheck: true },
         { label: "Etherlighting™ SFP+", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 03853-25-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 9.0.114 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/14.uswprohd24poe/p-itb-uswprohd24poe.jpg", },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Toolless Mini Rack",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
        specs: [
          "6U-sized device rack",
          "Combine two Mini Racks into a 12U rack with a Stacking Kit",
          "Toolless assembly and device mounting",
          "Lockable casters"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "with handle and caster : 519 x 460 x 485 mm (20.43 x 18.11 x 19.09\")" },
          { label: "Weight", value: "10.3 kg" },
          { label: "Max. Weight Capacity (Single toolless mini rack) Static : 80 kg (176 lb)", value: "SGCC Steel" },
          { label: "Max. Weight Capacity (Double toolless mini rack) Static : 70 kg (154 lb)", value: "SGCC Steel" },
          { label: "Enclosure Material", value: "Frame/Bracket: SPCC steel, Handle: Stainless steel" },
          { label: "Color", value: "Silver" },
          { label: "Treatment", value: "Liquid Coating" },
          { label: "U Height", value: "6U" },
          { label: "Rack Type", value: "Open Frame" },
          { label: "Mounting", value: "Floor Stand" },
          { label: "Lockable Casters", value: "✓"},
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
     {
        id: 2,
        name: "Redundant Power",
        image: "/images/dcs-box.png",
        price: 299,
        description: "950W redundant power supply for rack-mounted UniFi devices.",
        specs: [
          "950W DC power availability",
          "(6) DC SmartPower ports",
          "1.3\" LCM touchscreen"
        ],
        detailedSpecs: [
          { label: "Management", value: "Ethernet" },
          { label: "Networking Interface", value: "(1) GbE RJ45 Port" },
          { label: "Power Method", value: "(1) Universal AC input, 100-240V AC)" },
          { label: "Power Supply", value: "54V DC output: AC/DC, internal, 645W, 12V DC output: AC/DC, internal, 350W" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Max. Power Consumption", value: "995W" },
          { label: "Power Output", value: "(6) RPS DC Ports)" },
          { label: "ESD/EMP Protection", value: "Air: 16kV, contact 12kV" },
          { label: "Display", value: "1.3\" touchscreen" },
          { label: "Buttons", value: "(1) Factory Reset)" },
          { label: "LEDs System", value: "Status" },
          { label: "LEDs ", value: "Activity" },
          { label: "Certifications ", value: "CE, FCC, IC" },
        
        
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 3,
        name: "SFP to RJ45 Adapter",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP to RJ45 transceiver that supports 1G connections up to 100 m.",
        specs: [
          "Supported data rates: 1000 / 100 / 10 Mbps",
          "Compatible with SFP interfaces",
          "Supports connections up to 100 m*",
          "*Ethernet cable is not included"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "RJ45" },
          { label: "Supported Media", value: "Copper" },
          { label: "Supported Data Rate", value: "10 / 100 / 1000 Mbps" },
          { label: "Supported Cable Distance", value: "100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "1.2 W" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "24-Port Blank Keystone Patch Panel",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Standalone insert that can be easily installed into an existing network equipment rack to create a clean, uniform aesthetic.",
        specs: [
          "1U 24-port blank patch panel with cable management bar",
          "Ideal for keystone module installation",
          "Uniform aesthetic with UniFi rack-mount equipment",

        ],
        detailedSpecs: [
          { label: "Dimensions (Standalone Insert)", value: "442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7 in)" },
          { label: "Dimensions (Management Bar)", value: "433.8 x 71.5 x 17 mm (17.1 x 2.8 x 0.7\")" },
          { label: "Weight (Standalone Insert)", value: "260 g (9.17 oz)" },
          { label: "Weight (Management Bar)", value: "390 g (13.8 oz)" },
          { label: "Materials Front Panel Housing", value: "Cold rolled carbon steel (SPCC)" },
          { label: "Materials Inner Module", value: "Polycarbonate" },
          { label: "Materials Management bar", value: "Cold rolled carbon steel (SPCC)" },
          { label: "Treatment", value: "Painting" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },
{
    id: "USW-Pro-XG-48",
    name: "Pro XG 48",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switching/15.uswproxg48/1.p-utama-uswproxg48.jpg",
    shortDescription:
      "Professional-grade, 48-port Layer 3 Etherlighting™ switch with (32) 10 GbE, (16) 2.5 GbE, and (4) 25G SFP28 ports.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-Pro-XG-48",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/15.uswproxg48/1.p-utama-uswproxg48.jpg",
      "/images/switching/15.uswproxg48/2.p-dimensi-uswproxg48.jpg",
      "/images/switching/15.uswproxg48/3.p-spec-uswproxg48.jpg",
      "/images/switching/15.uswproxg48/4.p-development-uswproxg48.jpg",
      "/images/switching/15.uswproxg48/p-mkt0-uswproxg48.jpg",
      "/images/switching/15.uswproxg48/p-mkt1-uswproxg48.jpg",
      "/images/switching/15.uswproxg48/p-mkt2-uswproxg48.jpg",
      "/images/switching/15.uswproxg48/p-mkt3-uswproxg48.jpg",
      "/images/switching/15.uswproxg48/p-mkt4-uswproxg48.jpg",
      "/images/switching/15.uswproxg48/p-mkt5-uswproxg48.jpg",
      "/images/switching/15.uswproxg48/p-ov1-uswproxg48.png",
      "/images/switching/15.uswproxg48/p-ov2-uswproxg48.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/15.uswproxg48/p-ov1-uswproxg48.png",
      "/images/switching/15.uswproxg48/p-ov2-uswproxg48.png",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Professional-grade",
      "48-port Layer 3 Etherlighting™ switch with (32) 10 GbE",
      "and (4) 25G SFP28 ports",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442 x 480 x 44 mm ((17.4 x 18.9 x 1.7\")" },
          { label: "Port Layout 2.5 GbE RJ45", value: "16 (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10 GbE RJ45", value: "32 (10G/5G/2.5G/1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "4 (10G/1G)" },
          { label: "Redundancy", value: "DC Power Backup" },
          { label: "Layer 3", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U)"},
          { label: "Etherlightning™", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "920 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "460 Gbps" },
          { label: "Forwarding Rate", value: "684 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "128.000" },
          { label: "L3 Table Size ARP Entries", value: "128.000" },
          { label: "L3 Table Size IPv4 Routes", value: "256.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "512" },
          { label: "Packet Buffer Size", value: "8 MB" },
          { label: "Access Lists IPv4", value: "256" },
          { label: "Access Lists MAC", value: "256" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "Max. Power Consumption", value: "250W"},
         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz, (1) USP RPS DC input"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, Internal, 660W"},
         { label: "Supported Voltage Range", value: "100–240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Weight", value: "With/Without Mounting Brackets: 7.6 kg / 7.5 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "482.6 mm (19\") four-post racks"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 30kV, contact: ± 14kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "LEDs RPS", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 06464-25-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 9.0.114 and later"},
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
    id: "USW-Pro-XG-24",
    name: "Pro XG 24",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switching/16.uswproxg24/1.p-utama-uswproxg24.jpg",
    shortDescription:
      "Professional-grade, 24-port Layer 3 Etherlighting™ switch with (16) 10 GbE, (8) 2.5 GbE, and (2) 25G SFP28 ports.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-Pro-XG-24",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/16.uswproxg24/1.p-utama-uswproxg24.jpg",
      "/images/switching/16.uswproxg24/2.p-dimensi-uswproxg24.jpg",
      "/images/switching/16.uswproxg24/3.p-spec-uswproxg24.jpg",
      "/images/switching/16.uswproxg24/4.p-development-uswproxg24.jpg",
      "/images/switching/16.uswproxg24/p-itb-uswproxg24.jpg",
      "/images/switching/16.uswproxg24/p-mkt0-uswproxg24.jpg",
      "/images/switching/16.uswproxg24/p-mkt1-uswproxg24.jpg",
      "/images/switching/16.uswproxg24/p-mkt2-uswproxg24.jpg",
      "/images/switching/16.uswproxg24/p-mkt3-uswproxg24.jpg",
      "/images/switching/16.uswproxg24/p-mkt4-uswproxg24.jpg",
      "/images/switching/16.uswproxg24/p-ov1-uswproxg24.png",
      "/images/switching/16.uswproxg24/p-ov2-uswproxg24.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/16.uswproxg24/p-ov1-uswproxg24.png",
      "/images/switching/16.uswproxg24/p-ov2-uswproxg24.png",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Professional-grade",
      "24-port Layer 3 Etherlighting™ switch with (16) 10 GbE",
      "and (2) 25G SFP28 ports",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442 x 480 x 44 mm ((17.4 x 18.9 x 1.7\")" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10 GbE RJ45", value: "16 (10G/5G/2.5G/1G/100M/10M)" },
          { label: "Port Layout 25G SFP28", value: "2 (10G/1G)" },
          { label: "Redundancy", value: "DC Power Backup" },
          { label: "Layer 3", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U)"},
          { label: "Etherlightning™", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "460 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "230 Gbps" },
          { label: "Forwarding Rate", value: "342 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "128.000" },
          { label: "L3 Table Size ARP Entries", value: "128.000" },
          { label: "L3 Table Size IPv4 Routes", value: "256.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "512" },
          { label: "Packet Buffer Size", value: "8 MB" },
          { label: "Access Lists IPv4", value: "256" },
          { label: "Access Lists MAC", value: "256" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "Max. Power Consumption", value: "150W"},
         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz, (1) USP RPS DC input"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, Internal, 200W"},
         { label: "Supported Voltage Range", value: "100–240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Weight", value: "With/Without Mounting Brackets: 7.6 kg / 7.5 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "482.6 mm (19\") four-post racks"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 30kV, contact: ± 20kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "Etherlighting™ Ethernet", value: "✓", isCheck: true },
         { label: "Etherlighting™ SFP28", value: "✓", isCheck: true },
         { label: "LEDs RPS", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 06464-25-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 9.0.114 and later"},
        ]
      },
    ],
    
  },
{
    id: "USW-Pro-XG-10-PoE(400W)",
    name: "Pro XG 10 PoE",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switching/17.uswproxg10poe/1.p-utama-uswproxg10poe.jpg",
    shortDescription:
      "1U, professional-grade 10-port, Layer 3 Etherlighting™ PoE+++ switch with (10) 10 GbE and (2) 10G SFP+ ports.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-Pro-XG-10-PoE(400W)",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/17.uswproxg10poe/1.p-utama-uswproxg10poe.jpg",
      "/images/switching/17.uswproxg10poe/2.p-dimensi-uswproxg10poe.jpg",
      "/images/switching/17.uswproxg10poe/3.p-spec-uswproxg10poe.jpg",
      "/images/switching/17.uswproxg10poe/4.p-development-uswproxg10poe.jpg",
      "/images/switching/17.uswproxg10poe/p-itb-uswproxg10poe.jpg",
      "/images/switching/17.uswproxg10poe/p-mkt0-uswproxg10poe.jpg",
      "/images/switching/17.uswproxg10poe/p-mkt1-uswproxg10poe.jpg",
      "/images/switching/17.uswproxg10poe/p-mkt2-uswproxg10poe.jpg",
      "/images/switching/17.uswproxg10poe/p-mkt3-uswproxg10poe.jpg",
      "/images/switching/17.uswproxg10poe/p-mkt4-uswproxg10poe.jpg",
      "/images/switching/17.uswproxg10poe/p-ov1-uswproxg10poe.png",
      "/images/switching/17.uswproxg10poe/p-ov2-uswproxg10poe.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/17.uswproxg10poe/p-ov1-uswproxg10poe.png",
      "/images/switching/17.uswproxg10poe/p-ov2-uswproxg10poe.png",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "professional-grade 10-port",
      "Layer 3 Etherlighting™ PoE+++ switch with (10) 10 GbE and (2) 10G SFP+ ports",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 285 x 44 mm ((17.4 x 11.2 x 1.7\")" },
          { label: "Port Layout 10 GbE RJ45", value: "16 (10G/5G/2.5G/1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "2 (10G/1G)" },
          { label: "Redundancy", value: "DC Power Backup" },
          { label: "Layer 3", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U)"},
          { label: "Etherlightning™", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "240 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "120 Gbps" },
          { label: "Forwarding Rate", value: "179 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "32.000" },
          { label: "L3 Table Size ARP Entries", value: "12.000" },
          { label: "L3 Table Size IPv4 Routes", value: "12.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "Packet Buffer Size", value: "2 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "QoS (DSCP)", value: "✓", isCheck: true },
         { label: "Pro AV Profiles", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports PoE+++", value: "10"},
         { label: "Max. PoE Wattage per Port by PSE, PoE", value: "15.4W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "30W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE++", value: "60W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+++", value: "90W"},
         { label: "Max. Power Consumption", value: "65W (Excluding PoE output), 520W (Including PoE output)"},
         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz, (1) USP RPS DC input"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, Internal, 550W"},
         { label: "Supported Voltage Range", value: "100–240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Weight", value: "With/Without Mounting Brackets: 4.7 kg / 4.6 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 30kV, contact: ± 30kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "Etherlighting™ Ethernet", value: "✓", isCheck: true },
         { label: "Etherlighting™ SFP28", value: "✓", isCheck: true },
         { label: "LEDs RPS", value: "✓", isCheck: true },
         { label: "LEDs System", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 05660-25-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 9.1.120 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/17.uswproxg10poe/p-itb-uswproxg10poe.jpg", },
    ],
    
    
  },
{
    id: "USW-Pro-Max-16-PoE(180W)",
    name: "Pro Max 16 PoE",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switching/18.uswpromax16poe/1.p-utama-uswpromax16poe.jpg",
    shortDescription:
      "A 16-port, Layer 3 Etherlighting™ switch with 2.5 GbE, PoE++ output, and versatile mounting options.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-Pro-Max-16-PoE(180W)",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/18.uswpromax16poe/1.p-utama-uswpromax16poe.jpg",
      "/images/switching/18.uswpromax16poe/2.p-dimensi-uswpromax16poe.jpg",
      "/images/switching/18.uswpromax16poe/3.p-spec-uswpromax16poe.jpg",
      "/images/switching/18.uswpromax16poe/4.p-development-uswpromax16poe.jpg",
      "/images/switching/18.uswpromax16poe/p-itb-uswpromax16poe.jpg",
      "/images/switching/18.uswpromax16poe/p-mkt0-uswpromax16poe.jpg",
      "/images/switching/18.uswpromax16poe/p-mkt1-uswpromax16poe.jpg",
      "/images/switching/18.uswpromax16poe/p-mkt2-uswpromax16poe.jpg",
      "/images/switching/18.uswpromax16poe/p-mkt3-uswpromax16poe.jpg",
      "/images/switching/18.uswpromax16poe/p-mkt4-uswpromax16poe.jpg",
      "/images/switching/18.uswpromax16poe/p-ov1-uswpromax16poe.png",
      "/images/switching/18.uswpromax16poe/p-ov2-uswpromax16poe.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/18.uswpromax16poe/p-ov1-uswpromax16poe.png",
      "/images/switching/18.uswpromax16poe/p-ov2-uswpromax16poe.png",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Layer 3 Etherlighting™ switch with 2",
      "PoE++ output",
      "and versatile mounting options",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 285 x 44 mm (17.4 x 11.2 x 1.7\")" },
          { label: "Port Layout 10 GbE RJ45", value: "16 (10G/5G/2.5G/1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "2 (10G/1G)" },
          { label: "Redundancy", value: "DC Power Backup" },
          { label: "Layer 3", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U)"},
          { label: "Etherlightning™", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "84 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "42 Gbps" },
          { label: "Forwarding Rate", value: "62 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "16.000" },
          { label: "L3 Table Size ARP Entries", value: "6.000" },
          { label: "L3 Table Size IPv4 Routes", value: "512" },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "Packet Buffer Size", value: "1.5 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "QoS (DSCP)", value: "✓", isCheck: true },
         { label: "Pro AV Profiles", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports PoE+", value: "12"},
         { label: "PoE Ports PoE++", value: "4"},
         { label: "Max. PoE Wattage per Port by PSE, PoE", value: "15.4W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "32W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE++", value: "64W"},
         { label: "Max. Power Consumption", value: "25W (Excluding PoE Output) 210W (Including PoE Output)"},
         { label: "Power Method", value: "AC Adapter"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, Internal, 210W"},
         { label: "Supported Voltage Range", value: "50–54V DC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "68 BTU/hr (Excluding PoE Output)"},
         { label: "Weight", value: "2.1 kg (4.6 lb)"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "Etherlighting™ Ethernet", value: "✓", isCheck: true },
         { label: "Etherlighting™ SFP28", value: "✓", isCheck: true },
         { label: "LEDs RPS", value: "✓", isCheck: true },
         { label: "LEDs System", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 08953-24-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 8.1.127 and later"},
        ]
      },
    ],
    
  },
{
    id: "USW-Pro-HD-24",
    name: "Pro HD 24",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switching/19.uswprohd24/1.p-utama-uswprohd24.jpg",
    shortDescription:
      "Proffesional-grade, Layer 3 Etherlighting™ switch with (2) 10 GbE, (22) 2.5 GbE, and (4) 10G SFP+ ports.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-Pro-HD-24",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/19.uswprohd24/1.p-utama-uswprohd24.jpg",
      "/images/switching/19.uswprohd24/2.p-dimensi-uswprohd24.jpg",
      "/images/switching/19.uswprohd24/3.p-spec-uswprohd24.jpg",
      "/images/switching/19.uswprohd24/4.p-development-uswprohd24.jpg",
      "/images/switching/19.uswprohd24/p-itb-uswprohd24.jpg",
      "/images/switching/19.uswprohd24/p-mkt0-uswprohd24.jpg",
      "/images/switching/19.uswprohd24/p-mkt1-uswprohd24.jpg",
      "/images/switching/19.uswprohd24/p-mkt2-uswprohd24.jpg",
      "/images/switching/19.uswprohd24/p-mkt3-uswprohd24.jpg",
      "/images/switching/19.uswprohd24/p-mkt4-uswprohd24.jpg",
      "/images/switching/19.uswprohd24/p-ov1-uswprohd24.png",
      "/images/switching/19.uswprohd24/p-ov2-uswprohd24.png",

    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/19.uswprohd24/p-ov1-uswprohd24.png",
      "/images/switching/19.uswprohd24/p-ov2-uswprohd24.png",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Proffesional-grade",
      "Layer 3 Etherlighting™ switch with (2) 10 GbE",
      "and (4) 10G SFP+ ports",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
       {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 285 x 44 mm (17.4 x 11.2 x 1.7\")" },
          { label: "Port Layout 2.5 GbE RJ45", value: "22 (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10 GbE RJ45", value: "2 (10G/5G/2.5G/1G/100M)" },
          { label: "Port Layout 10G SFP+", value: "4 (10G/1G)" },
          { label: "Redundancy", value: "DC Power Backup" },
          { label: "Layer 3", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U)"},
          { label: "Etherlightning™", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "230 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "115 Gbps" },
          { label: "Forwarding Rate", value: "171.12 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "32.000" },
          { label: "L3 Table Size ARP Entries", value: "12.000" },
          { label: "L3 Table Size IPv4 Routes", value: "12.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "Packet Buffer Size", value: "2 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "QoS (DSCP)", value: "✓", isCheck: true },
         { label: "Pro AV Profiles", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports PoE+", value: "12"},
         { label: "PoE Ports PoE++", value: "4"},
         { label: "Max. PoE Wattage per Port by PSE, PoE", value: "15.4W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "32W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE++", value: "64W"},
         { label: "Max. Power Consumption", value: "25W (Excluding PoE Output) 210W (Including PoE Output)"},
         { label: "Power Method", value: "AC Adapter"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, Internal, 210W"},
         { label: "Supported Voltage Range", value: "50–54V DC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "68 BTU/hr (Excluding PoE Output)"},
         { label: "Weight", value: "2.1 kg (4.6 lb)"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "Etherlighting™ Ethernet", value: "✓", isCheck: true },
         { label: "Etherlighting™ SFP28", value: "✓", isCheck: true },
         { label: "LEDs RPS", value: "✓", isCheck: true },
         { label: "LEDs System", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 08953-24-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 8.1.127 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/19.uswprohd24/p-itb-uswprohd24.jpg", },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Toolless Mini Rack",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
        specs: [
          "6U-sized device rack",
          "Combine two Mini Racks into a 12U rack with a Stacking Kit",
          "Toolless assembly and device mounting",
          "Lockable casters"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "with handle and caster : 519 x 460 x 485 mm (20.43 x 18.11 x 19.09\")" },
          { label: "Weight", value: "10.3 kg" },
          { label: "Max. Weight Capacity (Single toolless mini rack) Static : 80 kg (176 lb)", value: "SGCC Steel" },
          { label: "Max. Weight Capacity (Double toolless mini rack) Static : 70 kg (154 lb)", value: "SGCC Steel" },
          { label: "Enclosure Material", value: "Frame/Bracket: SPCC steel, Handle: Stainless steel" },
          { label: "Color", value: "Silver" },
          { label: "Treatment", value: "Liquid Coating" },
          { label: "U Height", value: "6U" },
          { label: "Rack Type", value: "Open Frame" },
          { label: "Mounting", value: "Floor Stand" },
          { label: "Lockable Casters", value: "✓"},
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
     {
        id: 2,
        name: "Redundant Power",
        image: "/images/dcs-box.png",
        price: 299,
        description: "950W redundant power supply for rack-mounted UniFi devices.",
        specs: [
          "950W DC power availability",
          "(6) DC SmartPower ports",
          "1.3\" LCM touchscreen"
        ],
        detailedSpecs: [
          { label: "Management", value: "Ethernet" },
          { label: "Networking Interface", value: "(1) GbE RJ45 Port" },
          { label: "Power Method", value: "(1) Universal AC input, 100-240V AC)" },
          { label: "Power Supply", value: "54V DC output: AC/DC, internal, 645W, 12V DC output: AC/DC, internal, 350W" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Max. Power Consumption", value: "995W" },
          { label: "Power Output", value: "(6) RPS DC Ports)" },
          { label: "ESD/EMP Protection", value: "Air: 16kV, contact 12kV" },
          { label: "Display", value: "1.3\" touchscreen" },
          { label: "Buttons", value: "(1) Factory Reset)" },
          { label: "LEDs System", value: "Status" },
          { label: "LEDs ", value: "Activity" },
          { label: "Certifications ", value: "CE, FCC, IC" },
        
        
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 3,
        name: "SFP to RJ45 Adapter",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP to RJ45 transceiver that supports 1G connections up to 100 m.",
        specs: [
          "Supported data rates: 1000 / 100 / 10 Mbps",
          "Compatible with SFP interfaces",
          "Supports connections up to 100 m*",
          "*Ethernet cable is not included"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "RJ45" },
          { label: "Supported Media", value: "Copper" },
          { label: "Supported Data Rate", value: "10 / 100 / 1000 Mbps" },
          { label: "Supported Cable Distance", value: "100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "1.2 W" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "24-Port Blank Keystone Patch Panel",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Standalone insert that can be easily installed into an existing network equipment rack to create a clean, uniform aesthetic.",
        specs: [
          "1U 24-port blank patch panel with cable management bar",
          "Ideal for keystone module installation",
          "Uniform aesthetic with UniFi rack-mount equipment",

        ],
        detailedSpecs: [
          { label: "Dimensions (Standalone Insert)", value: "442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7 in)" },
          { label: "Dimensions (Management Bar)", value: "433.8 x 71.5 x 17 mm (17.1 x 2.8 x 0.7\")" },
          { label: "Weight (Standalone Insert)", value: "260 g (9.17 oz)" },
          { label: "Weight (Management Bar)", value: "390 g (13.8 oz)" },
          { label: "Materials Front Panel Housing", value: "Cold rolled carbon steel (SPCC)" },
          { label: "Materials Inner Module", value: "Polycarbonate" },
          { label: "Materials Management bar", value: "Cold rolled carbon steel (SPCC)" },
          { label: "Treatment", value: "Painting" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },
{
    id: "USW-Pro-Max-48",
    name: "Pro Max 48",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switching/20.uswpromax48/1.p-utama-uswpromax48.jpg",
    shortDescription: "A 48-port, Layer 3 Etherlighting™ switch with 2.5 GbE.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-Pro-Max-48",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/20.uswpromax48/1.p-utama-uswpromax48.jpg",
      "/images/switching/20.uswpromax48/2.p-dimensi-uswpromax48.jpg",
      "/images/switching/20.uswpromax48/3.p-spec-uswpromax48.jpg",
      "/images/switching/20.uswpromax48/4.p-development-uswpromax48.jpg",
      "/images/switching/20.uswpromax48/p-itb-uswpromax48.jpg",
      "/images/switching/20.uswpromax48/p-mkt0-uswpromax48.jpg",
      "/images/switching/20.uswpromax48/p-mkt1-uswpromax48.jpg",
      "/images/switching/20.uswpromax48/p-mkt2-uswpromax48.jpg",
      "/images/switching/20.uswpromax48/p-mkt3-uswpromax48.jpg",
      "/images/switching/20.uswpromax48/p-mkt4-uswpromax48.jpg",
      "/images/switching/20.uswpromax48/p-ov1-uswpromax48.png",
      "/images/switching/20.uswpromax48/p-ov2-uswpromax48.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/20.uswpromax48/p-ov1-uswpromax48.png",
      "/images/switching/20.uswpromax48/p-ov2-uswpromax48.png",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Layer 3 Etherlighting™ switch with 2",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7\")" },
          { label: "Port Layout 1 GbE RJ45", value: "32 (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "16 (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "4 (10G/1G)" },
          { label: "Redundancy", value: "DC Power Backup" },
          { label: "Layer 3", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U)"},
          { label: "Etherlightning™", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "224 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "112 Gbps" },
          { label: "Forwarding Rate", value: "167 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "32.000" },
          { label: "L3 Table Size ARP Entries", value: "12.000" },
          { label: "L3 Table Size IPv4 Routes", value: "12.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "Packet Buffer Size", value: "2 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "QoS (DSCP)", value: "✓", isCheck: true },
         { label: "Pro AV Profiles", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "Max. Power Consumption", value: "100W"},
         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz, (1) USP RPS DC input"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, Internal, 100W"},
         { label: "Supported Voltage Range", value: "100–240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "341.2 BTU/hr (Excluding PoE Output)"},
         { label: "Weight", value: "With / Without mounting brackets : 4.9 kg / 4.8 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "Etherlighting™ Ethernet", value: "✓", isCheck: true },
         { label: "Etherlighting™ SFP28", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 06373-24-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 8.0.24 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/20.uswpromax48/p-itb-uswpromax48.jpg", },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Toolless Mini Rack",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
        specs: [
          "6U-sized device rack",
          "Combine two Mini Racks into a 12U rack with a Stacking Kit",
          "Toolless assembly and device mounting",
          "Lockable casters"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "with handle and caster : 519 x 460 x 485 mm (20.43 x 18.11 x 19.09\")" },
          { label: "Weight", value: "10.3 kg" },
          { label: "Max. Weight Capacity (Single toolless mini rack) Static : 80 kg (176 lb)", value: "SGCC Steel" },
          { label: "Max. Weight Capacity (Double toolless mini rack) Static : 70 kg (154 lb)", value: "SGCC Steel" },
          { label: "Enclosure Material", value: "Frame/Bracket: SPCC steel, Handle: Stainless steel" },
          { label: "Color", value: "Silver" },
          { label: "Treatment", value: "Liquid Coating" },
          { label: "U Height", value: "6U" },
          { label: "Rack Type", value: "Open Frame" },
          { label: "Mounting", value: "Floor Stand" },
          { label: "Lockable Casters", value: "✓"},
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
     {
        id: 2,
        name: "Redundant Power",
        image: "/images/dcs-box.png",
        price: 299,
        description: "950W redundant power supply for rack-mounted UniFi devices.",
        specs: [
          "950W DC power availability",
          "(6) DC SmartPower ports",
          "1.3\" LCM touchscreen"
        ],
        detailedSpecs: [
          { label: "Management", value: "Ethernet" },
          { label: "Networking Interface", value: "(1) GbE RJ45 Port" },
          { label: "Power Method", value: "(1) Universal AC input, 100-240V AC)" },
          { label: "Power Supply", value: "54V DC output: AC/DC, internal, 645W, 12V DC output: AC/DC, internal, 350W" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Max. Power Consumption", value: "995W" },
          { label: "Power Output", value: "(6) RPS DC Ports)" },
          { label: "ESD/EMP Protection", value: "Air: 16kV, contact 12kV" },
          { label: "Display", value: "1.3\" touchscreen" },
          { label: "Buttons", value: "(1) Factory Reset)" },
          { label: "LEDs System", value: "Status" },
          { label: "LEDs ", value: "Activity" },
          { label: "Certifications ", value: "CE, FCC, IC" },
        
        
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 3,
        name: "SFP to RJ45 Adapter",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP to RJ45 transceiver that supports 1G connections up to 100 m.",
        specs: [
          "Supported data rates: 1000 / 100 / 10 Mbps",
          "Compatible with SFP interfaces",
          "Supports connections up to 100 m*",
          "*Ethernet cable is not included"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "RJ45" },
          { label: "Supported Media", value: "Copper" },
          { label: "Supported Data Rate", value: "10 / 100 / 1000 Mbps" },
          { label: "Supported Cable Distance", value: "100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "1.2 W" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "24-Port Blank Keystone Patch Panel",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Standalone insert that can be easily installed into an existing network equipment rack to create a clean, uniform aesthetic.",
        specs: [
          "1U 24-port blank patch panel with cable management bar",
          "Ideal for keystone module installation",
          "Uniform aesthetic with UniFi rack-mount equipment",

        ],
        detailedSpecs: [
          { label: "Dimensions (Standalone Insert)", value: "442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7 in)" },
          { label: "Dimensions (Management Bar)", value: "433.8 x 71.5 x 17 mm (17.1 x 2.8 x 0.7\")" },
          { label: "Weight (Standalone Insert)", value: "260 g (9.17 oz)" },
          { label: "Weight (Management Bar)", value: "390 g (13.8 oz)" },
          { label: "Materials Front Panel Housing", value: "Cold rolled carbon steel (SPCC)" },
          { label: "Materials Inner Module", value: "Polycarbonate" },
          { label: "Materials Management bar", value: "Cold rolled carbon steel (SPCC)" },
          { label: "Treatment", value: "Painting" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },
{
    id: "USW-Pro-Max-24",
    name: "Pro Max 24",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switching/21.uswpromax24/1.p-utama-uswpromax24.jpg",
    shortDescription: "A 24-port, Layer 3 Etherlighting™ switch with 2.5 GbE.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-Pro-Max-24",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/21.uswpromax24/1.p-utama-uswpromax24.jpg",
      "/images/switching/21.uswpromax24/2.p-dimensi-uswpromax24.jpg",
      "/images/switching/21.uswpromax24/3.p-spec-uswpromax24.jpg",
      "/images/switching/21.uswpromax24/4.p-development-uswpromax24.jpg",
      "/images/switching/21.uswpromax24/p-itb-uswpromax24.jpg",
      "/images/switching/21.uswpromax24/p-mkt0-uswpromax24.jpg",
      "/images/switching/21.uswpromax24/p-mkt1-uswpromax24.jpg",
      "/images/switching/21.uswpromax24/p-mkt2-uswpromax24.jpg",
      "/images/switching/21.uswpromax24/p-mkt3-uswpromax24.jpg",
      "/images/switching/21.uswpromax24/p-mkt4-uswpromax24.jpg",
      "/images/switching/21.uswpromax24/p-ov1-uswpromax24.png",
      "/images/switching/21.uswpromax24/p-ov2-uswpromax24.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/21.uswpromax24/p-ov1-uswpromax24.png",
      "/images/switching/21.uswpromax24/p-ov2-uswpromax24.png",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Layer 3 Etherlighting™ switch with 2",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442 x 325 x 44 mm (17.4 x 12.8 x 1.7\")" },
          { label: "Port Layout 1 GbE RJ45", value: "16 (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "2 (10G/1G)" },
          { label: "Redundancy", value: "DC Power Backup" },
          { label: "Layer 3", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U)"},
          { label: "Etherlightning™", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "112 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "56 Gbps" },
          { label: "Forwarding Rate", value: "83 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "16.000" },
          { label: "L3 Table Size ARP Entries", value: "6.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "QoS (DSCP)", value: "✓", isCheck: true },
         { label: "Pro AV Profiles", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "Max. Power Consumption", value: "50W"},
         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz, (1) USP RPS DC input"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, Internal, 100W"},
         { label: "Supported Voltage Range", value: "100–240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "341.2 BTU/hr (Excluding PoE Output)"},
         { label: "Weight", value: "With / Without mounting brackets : 4.9 kg / 4.8 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 16kV, contact: ± 12kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "Etherlighting™ Ethernet", value: "✓", isCheck: true },
         { label: "Etherlighting™ SFP28", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 06373-24-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 8.0.24 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/21.uswpromax24/p-itb-uswpromax24.jpg", },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Toolless Mini Rack",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
        specs: [
          "6U-sized device rack",
          "Combine two Mini Racks into a 12U rack with a Stacking Kit",
          "Toolless assembly and device mounting",
          "Lockable casters"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "with handle and caster : 519 x 460 x 485 mm (20.43 x 18.11 x 19.09\")" },
          { label: "Weight", value: "10.3 kg" },
          { label: "Max. Weight Capacity (Single toolless mini rack) Static : 80 kg (176 lb)", value: "SGCC Steel" },
          { label: "Max. Weight Capacity (Double toolless mini rack) Static : 70 kg (154 lb)", value: "SGCC Steel" },
          { label: "Enclosure Material", value: "Frame/Bracket: SPCC steel, Handle: Stainless steel" },
          { label: "Color", value: "Silver" },
          { label: "Treatment", value: "Liquid Coating" },
          { label: "U Height", value: "6U" },
          { label: "Rack Type", value: "Open Frame" },
          { label: "Mounting", value: "Floor Stand" },
          { label: "Lockable Casters", value: "✓"},
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
     {
        id: 2,
        name: "Redundant Power",
        image: "/images/dcs-box.png",
        price: 299,
        description: "950W redundant power supply for rack-mounted UniFi devices.",
        specs: [
          "950W DC power availability",
          "(6) DC SmartPower ports",
          "1.3\" LCM touchscreen"
        ],
        detailedSpecs: [
          { label: "Management", value: "Ethernet" },
          { label: "Networking Interface", value: "(1) GbE RJ45 Port" },
          { label: "Power Method", value: "(1) Universal AC input, 100-240V AC)" },
          { label: "Power Supply", value: "54V DC output: AC/DC, internal, 645W, 12V DC output: AC/DC, internal, 350W" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Max. Power Consumption", value: "995W" },
          { label: "Power Output", value: "(6) RPS DC Ports)" },
          { label: "ESD/EMP Protection", value: "Air: 16kV, contact 12kV" },
          { label: "Display", value: "1.3\" touchscreen" },
          { label: "Buttons", value: "(1) Factory Reset)" },
          { label: "LEDs System", value: "Status" },
          { label: "LEDs ", value: "Activity" },
          { label: "Certifications ", value: "CE, FCC, IC" },
        
        
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 3,
        name: "SFP to RJ45 Adapter",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP to RJ45 transceiver that supports 1G connections up to 100 m.",
        specs: [
          "Supported data rates: 1000 / 100 / 10 Mbps",
          "Compatible with SFP interfaces",
          "Supports connections up to 100 m*",
          "*Ethernet cable is not included"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "RJ45" },
          { label: "Supported Media", value: "Copper" },
          { label: "Supported Data Rate", value: "10 / 100 / 1000 Mbps" },
          { label: "Supported Cable Distance", value: "100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "1.2 W" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "24-Port Blank Keystone Patch Panel",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Standalone insert that can be easily installed into an existing network equipment rack to create a clean, uniform aesthetic.",
        specs: [
          "1U 24-port blank patch panel with cable management bar",
          "Ideal for keystone module installation",
          "Uniform aesthetic with UniFi rack-mount equipment",

        ],
        detailedSpecs: [
          { label: "Dimensions (Standalone Insert)", value: "442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7 in)" },
          { label: "Dimensions (Management Bar)", value: "433.8 x 71.5 x 17 mm (17.1 x 2.8 x 0.7\")" },
          { label: "Weight (Standalone Insert)", value: "260 g (9.17 oz)" },
          { label: "Weight (Management Bar)", value: "390 g (13.8 oz)" },
          { label: "Materials Front Panel Housing", value: "Cold rolled carbon steel (SPCC)" },
          { label: "Materials Inner Module", value: "Polycarbonate" },
          { label: "Materials Management bar", value: "Cold rolled carbon steel (SPCC)" },
          { label: "Treatment", value: "Painting" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },
{
    id: "USW-Pro-Max-16",
    name: "Pro Max 16",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switching/22.uswpromax16/1.p-utama-uswpromax16.jpg",
    shortDescription:
      "A 16-port, Layer 3 Etherlighting™ switch 2.5 GbE and versatile mounting options.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-Pro-Max-16",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/22.uswpromax16/1.p-utama-uswpromax16.jpg",
      "/images/switching/22.uswpromax16/2.p-dimensi-uswpromax16.jpg",
      "/images/switching/22.uswpromax16/3.p-spec-uswpromax16.jpg",
      "/images/switching/22.uswpromax16/4.p-development-uswpromax16.jpg",
      "/images/switching/22.uswpromax16/p-itb-uswpromax16.jpg",
      "/images/switching/22.uswpromax16/p-mkt0-uswpromax16.jpg",
      "/images/switching/22.uswpromax16/p-mkt1-uswpromax16.jpg",
      "/images/switching/22.uswpromax16/p-mkt2-uswpromax16.jpg",
      "/images/switching/22.uswpromax16/p-mkt3-uswpromax16.jpg",
      "/images/switching/22.uswpromax16/p-mkt4-uswpromax16.jpg",
      "/images/switching/22.uswpromax16/p-ov1-uswpromax16.png",
      "/images/switching/22.uswpromax16/p-ov2-uswpromax16.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/22.uswpromax16/p-ov1-uswpromax16.png",
      "/images/switching/22.uswpromax16/p-ov2-uswpromax16.png",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Layer 3 Etherlighting™ switch 2",
      "5 GbE and versatile mounting options",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "325.1 x 160 x 43.7 mm, (12.8 x 6.3 x 1.7\")" },
          { label: "Port Layout 1 GbE RJ45", value: "12 (1G/100M/10M)" },
          { label: "Port Layout 2.5 GbE RJ45", value: "4 (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "2 (10G/1G)" },
          { label: "Redundancy", value: "DC Power Backup" },
          { label: "Layer 3", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U)"},
          { label: "Etherlightning™", value: "✓" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "84 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "42 Gbps" },
          { label: "Forwarding Rate", value: "62 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "16.000" },
          { label: "L3 Table Size ARP Entries", value: "6.000" },
          { label: "L3 Table Size IPv4 Routes", value: "512" },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "Packet Buffer Size", value: "1.5 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "QoS (DSCP)", value: "✓", isCheck: true },
         { label: "Pro AV Profiles", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "Max. Power Consumption", value: "25W"},
         { label: "Power Method", value: "AC/DC Adapter (included)"},
         { label: "Power Input Method", value: "USB Type-C, 5V DC, 5A"},
         { label: "Power Supply", value: "AC/DC, external, 25W"},
         { label: "Supported Voltage Range", value: "4.8—5.2V DC/USB"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "85.3 BTU/hr"},
         { label: "Weight", value: "1.95 kg (4.3 lb)"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 16kV, contact: ± 12kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "Etherlighting™ Ethernet", value: "✓", isCheck: true },
         { label: "Etherlighting™ SFP+", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 06373-24-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 8.1.127 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/22.uswpromax16/p-itb-uswpromax16.jpg", },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "AC Adapter 210W",
        image: "/images/dcs-box.png",
        price: 299,
        description: "An AC power adapter delivers 210W at 54V DC for a PoE switch",
        specs: [
          "Wall-mountable",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "190 x 86 x 26 mm (7.5 x 3.4 x 1\")" },
          { label: "Weight", value: "1.2 kg (2.6 lb)" },
          { label: "AC Connector", value: "C14 INLET (input)" },
          { label: "Output Plug", value: "DC plug: 5.5 x 2.1 x 11.5 mm (0.2 x 0.08 x 0.5\") DC cable: UL11353 16AWG 1.5 m (4.9 ft)" },
          { label: "Supported Voltage Range", value: "Input: 100–240V AC, Output: 54V DC" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
        ],
        productLink: "/products/mounting-kit-usw-pro-max-16"
      },
    ]
  },
{
    id: "USW-Pro-48-PoE(600W)",
    name: "Pro 48 PoE",
    category: "Switching",
    subfilter: "Professional",
    image: "/images/switching/23.uswpro48poe/1.p-utama-uswpro48poe.jpg",
    shortDescription:
      "A 48-port, Layer 3 switch capable of high-power PoE++ output",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    
    // SKU produk
    sku: "USW-Pro-48-PoE(600W)",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/23.uswpro48poe/1.p-utama-uswpro48poe.jpg",
      "/images/switching/23.uswpro48poe/2.p-dimensi-uswpro48poe.jpg",
      "/images/switching/23.uswpro48poe/3.p-spec-uswpro48poe.jpg",
      "/images/switching/23.uswpro48poe/4.p-development-uswpro48poe.jpg",
      "/images/switching/23.uswpro48poe/p-itb-uswpro48poe.jpg",
      "/images/switching/23.uswpro48poe/p-mkt0-uswpro48poe.jpg",
      "/images/switching/23.uswpro48poe/p-mkt1-uswpro48poe.jpg",
      "/images/switching/23.uswpro48poe/p-mkt2-uswpro48poe.jpg",
      "/images/switching/23.uswpro48poe/p-mkt3-uswpro48poe.jpg",
      "/images/switching/23.uswpro48poe/p-mkt4-uswpro48poe.jpg",
      "/images/switching/23.uswpro48poe/p-ov1-uswpro48poe.png",
      "/images/switching/23.uswpro48poe/p-ov2-uswpro48poe.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/23.uswpro48poe/p-ov1-uswpro48poe.png",
      "/images/switching/23.uswpro48poe/p-ov2-uswpro48poe.png",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Layer 3 switch capable of high-power PoE++ output",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442 x 400 x 44 mm (17.4 x 15.7 x 1.7\")" },
          { label: "Port Layout 1 GbE RJ45", value: "48 (40 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "4 (10G/1G)" },
          { label: "Max. PoE Output", value: "Up to PoE++" },
          { label: "Total PoE Availability", value: "600W" },
          { label: "Redundancy", value: "DC Power Backup" },
          { label: "Layer 3", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U)"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "176" },
          { label: "Total Non-Blocking Throughput", value: "88 Gbps" },
          { label: "Forwarding Rate", value: "131 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "16.000" },
          { label: "L3 Table Size ARP Entries", value: "4.000" },
          { label: "L3 Table Size IPv4 Routes", value: "1.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "Packet Buffer Size", value: "4 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "QoS (DSCP)", value: "✓", isCheck: true },
         { label: "Pro AV Profiles", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports, PoE+", value: "40"},
         { label: "PoE Ports, PoE++", value: "8"},
         { label: "Max. PoE Wattage per Port by PSE, PoE", value: "15.4W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "32W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE++", value: "64W"},
         { label: "Max. Power Consumption", value: "60W (Excluding PoE Output) 660W (Including PoE Output)"},
         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, internal, 660W"},
         { label: "Supported Voltage Range", value: "100-240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "204.7 BTU/hr (Excluding PoE Output)"},
         { label: "Weight", value: "With / Withouth Mounting Brackets: 6.3 kg / 6.2 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 16kV, contact: ± 12kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "Etherlighting™ Ethernet", value: "✓", isCheck: true },
         { label: "Etherlighting™ SFP+", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 13790-20-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 5.10.5 and later<"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/23.uswpro48poe/p-itb-uswpro48poe.jpg", },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Toolless Mini Rack",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
        specs: [
          "6U-sized device rack",
          "Combine two Mini Racks into a 12U rack with a Stacking Kit",
          "Toolless assembly and device mounting",
          "Lockable casters"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "with handle and caster : 519 x 460 x 485 mm (20.43 x 18.11 x 19.09\")" },
          { label: "Weight", value: "10.3 kg" },
          { label: "Max. Weight Capacity (Single toolless mini rack) Static : 80 kg (176 lb)", value: "SGCC Steel" },
          { label: "Max. Weight Capacity (Double toolless mini rack) Static : 70 kg (154 lb)", value: "SGCC Steel" },
          { label: "Enclosure Material", value: "Frame/Bracket: SPCC steel, Handle: Stainless steel" },
          { label: "Color", value: "Silver" },
          { label: "Treatment", value: "Liquid Coating" },
          { label: "U Height", value: "6U" },
          { label: "Rack Type", value: "Open Frame" },
          { label: "Mounting", value: "Floor Stand" },
          { label: "Lockable Casters", value: "✓"},
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
      {
        id: 2,
        name: "Redundant Power",
        image: "/images/dcs-box.png",
        price: 299,
        description: "950W redundant power supply for rack-mounted UniFi devices.",
        specs: [
          "950W DC power availability",
          "(6) DC SmartPower ports",
          "1.3\" LCM touchscreen"
        ],
        detailedSpecs: [
          { label: "Management", value: "Ethernet" },
          { label: "Networking Interface", value: "(1) GbE RJ45 Port" },
          { label: "Power Method", value: "(1) Universal AC input, 100-240V AC)" },
          { label: "Power Supply", value: "54V DC output: AC/DC, internal, 645W, 12V DC output: AC/DC, internal, 350W" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Max. Power Consumption", value: "995W" },
          { label: "Power Output", value: "(6) RPS DC Ports)" },
          { label: "ESD/EMP Protection", value: "Air: 16kV, contact 12kV" },
          { label: "Display", value: "1.3\" touchscreen" },
          { label: "Buttons", value: "(1) Factory Reset)" },
          { label: "LEDs System", value: "Status" },
          { label: "LEDs ", value: "Activity" },
          { label: "Certifications ", value: "CE, FCC, IC" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 3,
        name: "SmartPower Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A cable used to deliver redundant power from an associated SmartPower device.",
        specs: [
          "Supported UniFi SmartPower connect",
          "Cable length 1.5 m",
        ],
        detailedSpecs: [
          { label: "Length", value: "1.5 m (4.9 ft)" },
          { label: "Insulation Thickness", value: "0.35 mm (0.01\")" },
          { label: "Insulation Diameter", value: "2 mm (0.08\")" },
          { label: "Insulation Material", value: "PVC" },
          { label: "Conductor Wire Gauge", value: "(18) 16 AWG, (6) 24 AWG" },
          { label: "Cable Jacket Material", value: "PVC" },
          { label: "Cable Jacket Outer Diameter", value: "9.5 x 23 mm (0.4 x 0.9\")" },
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
    },
{
    id: "USW-Pro-24-PoE(400W)",
    name: "Pro 24 PoE",
    category: "Switching",
    subfilter: "Professional",
    image: "/images/switching/24.uswpro24poe/1.p-utama-uswpro24poe.jpg",
    shortDescription:
      "A 24-port, Layer 3 switch capable of high-power PoE++ output.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
    
    // SKU produk
    sku: "USW-Pro-24-PoE(400W)",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/24.uswpro24poe/1.p-utama-uswpro24poe.jpg",
      "/images/switching/24.uswpro24poe/2.p-dimensi-uswpro24poe.jpg",
      "/images/switching/24.uswpro24poe/3.p-spec-uswpro24poe.jpg",
      "/images/switching/24.uswpro24poe/4.p-development-uswpro24poe.jpg",
      "/images/switching/24.uswpro24poe/p-itb-uswpro24poe.jpg",
      "/images/switching/24.uswpro24poe/p-mkt0-uswpro24poe.jpg",
      "/images/switching/24.uswpro24poe/p-mkt1-uswpro24poe.jpg",
      "/images/switching/24.uswpro24poe/p-mkt2-uswpro24poe.jpg",
      "/images/switching/24.uswpro24poe/p-mkt3-uswpro24poe.jpg",
      "/images/switching/24.uswpro24poe/p-mkt4-uswpro24poe.jpg",
      "/images/switching/24.uswpro24poe/p-ov1-uswpro24poe.png",
      "/images/switching/24.uswpro24poe/p-ov2-uswpro24poe.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/24.uswpro24poe/p-ov1-uswpro24poe.png",
      "/images/switching/24.uswpro24poe/p-ov2-uswpro24poe.png",
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
          { label: "Dimensions", value: "442 x 285 x 44 mm (17.4 x 15.7 x 1.7\")" },
          { label: "Port Layout 1 GbE RJ45", value: "48 (40 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "4 (10G/1G)" },
          { label: "Max. PoE Output", value: "Up to PoE++" },
          { label: "Total PoE Availability", value: "400W" },
          { label: "Redundancy", value: "DC Power Backup" },
          { label: "Layer 3", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U)"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "88 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "44 Gbps" },
          { label: "Forwarding Rate", value: "65 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "16.000" },
          { label: "L3 Table Size ARP Entries", value: "768" },
          { label: "L3 Table Size IPv4 Routes", value: "64" },
          { label: "L3 Table Size IPv4 Static Routes", value: "2" },
          { label: "Packet Buffer Size", value: "2 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "QoS (DSCP)", value: "✓", isCheck: true },
         { label: "Pro AV Profiles", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports, PoE+", value: "16"},
         { label: "PoE Ports, PoE++", value: "8"},
         { label: "Max. PoE Wattage per Port by PSE, PoE", value: "15.4W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "30W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE++", value: "64W"},
         { label: "Max. Power Consumption", value: "50W (Excluding PoE Output) 450W (Including PoE Output)"},
         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, internal, 450W"},
         { label: "Supported Voltage Range", value: "100-240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "170.6 BTU/hr (Excluding PoE Output)"},
         { label: "Weight", value: "With / Withouth Mounting Brackets: 4.4 kg / 4.3 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 16kV, contact: ± 12kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "Etherlighting™ Ethernet", value: "✓", isCheck: true },
         { label: "Etherlighting™ SFP+", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 13790-20-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 5.10.5 and later<"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/23.uswpro48poe/p-itb-uswpro48poe.jpg", },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Toolless Mini Rack",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
        specs: [
          "6U-sized device rack",
          "Combine two Mini Racks into a 12U rack with a Stacking Kit",
          "Toolless assembly and device mounting",
          "Lockable casters"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "with handle and caster : 519 x 460 x 485 mm (20.43 x 18.11 x 19.09\")" },
          { label: "Weight", value: "10.3 kg" },
          { label: "Max. Weight Capacity (Single toolless mini rack) Static : 80 kg (176 lb)", value: "SGCC Steel" },
          { label: "Max. Weight Capacity (Double toolless mini rack) Static : 70 kg (154 lb)", value: "SGCC Steel" },
          { label: "Enclosure Material", value: "Frame/Bracket: SPCC steel, Handle: Stainless steel" },
          { label: "Color", value: "Silver" },
          { label: "Treatment", value: "Liquid Coating" },
          { label: "U Height", value: "6U" },
          { label: "Rack Type", value: "Open Frame" },
          { label: "Mounting", value: "Floor Stand" },
          { label: "Lockable Casters", value: "✓"},
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
      {
        id: 2,
        name: "Redundant Power",
        image: "/images/dcs-box.png",
        price: 299,
        description: "950W redundant power supply for rack-mounted UniFi devices.",
        specs: [
          "950W DC power availability",
          "(6) DC SmartPower ports",
          "1.3\" LCM touchscreen"
        ],
        detailedSpecs: [
          { label: "Management", value: "Ethernet" },
          { label: "Networking Interface", value: "(1) GbE RJ45 Port" },
          { label: "Power Method", value: "(1) Universal AC input, 100-240V AC)" },
          { label: "Power Supply", value: "54V DC output: AC/DC, internal, 645W, 12V DC output: AC/DC, internal, 350W" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Max. Power Consumption", value: "995W" },
          { label: "Power Output", value: "(6) RPS DC Ports)" },
          { label: "ESD/EMP Protection", value: "Air: 16kV, contact 12kV" },
          { label: "Display", value: "1.3\" touchscreen" },
          { label: "Buttons", value: "(1) Factory Reset)" },
          { label: "LEDs System", value: "Status" },
          { label: "LEDs ", value: "Activity" },
          { label: "Certifications ", value: "CE, FCC, IC" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 3,
        name: "SmartPower Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A cable used to deliver redundant power from an associated SmartPower device.",
        specs: [
          "Supported UniFi SmartPower connect",
          "Cable length 1.5 m",
        ],
        detailedSpecs: [
          { label: "Length", value: "1.5 m (4.9 ft)" },
          { label: "Insulation Thickness", value: "0.35 mm (0.01\")" },
          { label: "Insulation Diameter", value: "2 mm (0.08\")" },
          { label: "Insulation Material", value: "PVC" },
          { label: "Conductor Wire Gauge", value: "(18) 16 AWG, (6) 24 AWG" },
          { label: "Cable Jacket Material", value: "PVC" },
          { label: "Cable Jacket Outer Diameter", value: "9.5 x 23 mm (0.4 x 0.9\")" },
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },
{
    id: "USW-Pro-48",
    name: "Pro 48",
    category: "Switching",
    subfilter: "Professional",
    image: "/images/switching/25.uswpro48/1.p-utama-uswpro48.jpg",
    shortDescription:
      "A 48-port, Layer 3 switch supporting 10G SFP+ connections with fanless cooling.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-Pro-48",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/25.uswpro48/1.p-utama-uswpro48.jpg",
      "/images/switching/25.uswpro48/2.p-dimensi-uswpro48.jpg",
      "/images/switching/25.uswpro48/3.p-spec-uswpro48.jpg",
      "/images/switching/25.uswpro48/4.p-development-uswpro48.jpg",
      "/images/switching/25.uswpro48/p-itb-uswpro48.jpg",
      "/images/switching/25.uswpro48/p-mkt0-uswpro48.jpg",
      "/images/switching/25.uswpro48/p-mkt1-uswpro48.jpg",
      "/images/switching/25.uswpro48/p-mkt2-uswpro48.jpg",
      "/images/switching/25.uswpro48/p-mkt3-uswpro48.jpg",
      "/images/switching/25.uswpro48/p-mkt4-uswpro48.jpg",
      "/images/switching/25.uswpro48/p-ov1-uswpro48.png",
      "/images/switching/25.uswpro48/p-ov2-uswpro48.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/25.uswpro48/p-ov1-uswpro48.png",
      "/images/switching/25.uswpro48/p-ov2-uswpro48.png",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Layer 3 switch supporting 10G SFP+ connections with fanless cooling",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442 x 285 x 44 mm (17.4 x 15.7 x 1.7\")" },
          { label: "Port Layout 1 GbE RJ45", value: "48 (40 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "4 (10G/1G)" },
          { label: "Redundancy", value: "DC Power Backup" },
          { label: "Layer 3", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U)"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "176 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "88 Gbps" },
          { label: "Forwarding Rate", value: "131 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "16.000" },
          { label: "L3 Table Size ARP Entries", value: "4.000" },
          { label: "L3 Table Size IPv4 Routes", value: "1.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "Packet Buffer Size", value: "4 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "QoS (DSCP)", value: "✓", isCheck: true },
         { label: "Pro AV Profiles", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "Max. Power Consumption", value: "60W"},
         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, internal, 60W"},
         { label: "Supported Voltage Range", value: "100-240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "204.7 BTU/hr"},
         { label: "Weight", value: "With / Withouth Mounting Brackets: 4.1 kg / 4 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 16kV, contact: ± 12kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 00469-21-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 5.12.11 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/23.uswpro48poe/p-itb-uswpro48poe.jpg", },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Toolless Mini Rack",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
        specs: [
          "6U-sized device rack",
          "Combine two Mini Racks into a 12U rack with a Stacking Kit",
          "Toolless assembly and device mounting",
          "Lockable casters"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "with handle and caster : 519 x 460 x 485 mm (20.43 x 18.11 x 19.09\")" },
          { label: "Weight", value: "10.3 kg" },
          { label: "Max. Weight Capacity (Single toolless mini rack) Static : 80 kg (176 lb)", value: "SGCC Steel" },
          { label: "Max. Weight Capacity (Double toolless mini rack) Static : 70 kg (154 lb)", value: "SGCC Steel" },
          { label: "Enclosure Material", value: "Frame/Bracket: SPCC steel, Handle: Stainless steel" },
          { label: "Color", value: "Silver" },
          { label: "Treatment", value: "Liquid Coating" },
          { label: "U Height", value: "6U" },
          { label: "Rack Type", value: "Open Frame" },
          { label: "Mounting", value: "Floor Stand" },
          { label: "Lockable Casters", value: "✓"},
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
      {
        id: 2,
        name: "Redundant Power",
        image: "/images/dcs-box.png",
        price: 299,
        description: "950W redundant power supply for rack-mounted UniFi devices.",
        specs: [
          "950W DC power availability",
          "(6) DC SmartPower ports",
          "1.3\" LCM touchscreen"
        ],
        detailedSpecs: [
          { label: "Management", value: "Ethernet" },
          { label: "Networking Interface", value: "(1) GbE RJ45 Port" },
          { label: "Power Method", value: "(1) Universal AC input, 100-240V AC)" },
          { label: "Power Supply", value: "54V DC output: AC/DC, internal, 645W, 12V DC output: AC/DC, internal, 350W" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Max. Power Consumption", value: "995W" },
          { label: "Power Output", value: "(6) RPS DC Ports)" },
          { label: "ESD/EMP Protection", value: "Air: 16kV, contact 12kV" },
          { label: "Display", value: "1.3\" touchscreen" },
          { label: "Buttons", value: "(1) Factory Reset)" },
          { label: "LEDs System", value: "Status" },
          { label: "LEDs ", value: "Activity" },
          { label: "Certifications ", value: "CE, FCC, IC" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 3,
        name: "SmartPower Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A cable used to deliver redundant power from an associated SmartPower device.",
        specs: [
          "Supported UniFi SmartPower connect",
          "Cable length 1.5 m",
        ],
        detailedSpecs: [
          { label: "Length", value: "1.5 m (4.9 ft)" },
          { label: "Insulation Thickness", value: "0.35 mm (0.01\")" },
          { label: "Insulation Diameter", value: "2 mm (0.08\")" },
          { label: "Insulation Material", value: "PVC" },
          { label: "Conductor Wire Gauge", value: "(18) 16 AWG, (6) 24 AWG" },
          { label: "Cable Jacket Material", value: "PVC" },
          { label: "Cable Jacket Outer Diameter", value: "9.5 x 23 mm (0.4 x 0.9\")" },
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },
{
    id: "USW-Pro-24",
    name: "Pro 24",
    category: "Switching",
    subfilter: "Professional",
    image: "/images/switching/26.uswpro24/1.p-utama-uswpro24.jpg",
    shortDescription:
      "A 24-port, Layer 3 switch supporting 10G SFP+ connections with fanless cooling.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-Pro-24",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/26.uswpro24/1.p-utama-uswpro24.jpg",
      "/images/switching/26.uswpro24/2.p-dimensi-uswpro24.jpg",
      "/images/switching/26.uswpro24/3.p-spec-uswpro24.jpg",
      "/images/switching/26.uswpro24/4.p-development-uswpro24.jpg",
      "/images/switching/26.uswpro24/p-itb-uswpro24.jpg",
      "/images/switching/26.uswpro24/p-mkt0-uswpro24.jpg",
      "/images/switching/26.uswpro24/p-mkt1-uswpro24.jpg",
      "/images/switching/26.uswpro24/p-mkt2-uswpro24.jpg",
      "/images/switching/26.uswpro24/p-mkt3-uswpro24.jpg",
      "/images/switching/26.uswpro24/p-mkt4-uswpro24.jpg",
      "/images/switching/26.uswpro24/p-ov1-uswpro24.png",
      "/images/switching/26.uswpro24/p-ov2-uswpro24.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/26.uswpro24/p-ov1-uswpro24.png",
      "/images/switching/26.uswpro24/p-ov2-uswpro24.png",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Layer 3 switch supporting 10G SFP+ connections with fanless cooling",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442 x 285 x 44 mm (17.4 x 15.7 x 1.7\")" },
          { label: "Port Layout 1 GbE RJ45", value: "48 (40 PoE+; 8 PoE++) (1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "4 (10G/1G)" },
          { label: "Redundancy", value: "DC Power Backup" },
          { label: "Layer 3", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U)"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "176 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "88 Gbps" },
          { label: "Forwarding Rate", value: "131 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "16.000" },
          { label: "L3 Table Size ARP Entries", value: "4.000" },
          { label: "L3 Table Size IPv4 Routes", value: "1.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "Packet Buffer Size", value: "4 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "QoS (DSCP)", value: "✓", isCheck: true },
         { label: "Pro AV Profiles", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "Max. Power Consumption", value: "60W"},
         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, internal, 60W"},
         { label: "Supported Voltage Range", value: "100-240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "204.7 BTU/hr"},
         { label: "Weight", value: "With / Withouth Mounting Brackets: 4.1 kg / 4 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 16kV, contact: ± 12kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 00469-21-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 5.12.11 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/23.uswpro48poe/p-itb-uswpro48poe.jpg", },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Toolless Mini Rack",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
        specs: [
          "6U-sized device rack",
          "Combine two Mini Racks into a 12U rack with a Stacking Kit",
          "Toolless assembly and device mounting",
          "Lockable casters"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "with handle and caster : 519 x 460 x 485 mm (20.43 x 18.11 x 19.09\")" },
          { label: "Weight", value: "10.3 kg" },
          { label: "Max. Weight Capacity (Single toolless mini rack) Static : 80 kg (176 lb)", value: "SGCC Steel" },
          { label: "Max. Weight Capacity (Double toolless mini rack) Static : 70 kg (154 lb)", value: "SGCC Steel" },
          { label: "Enclosure Material", value: "Frame/Bracket: SPCC steel, Handle: Stainless steel" },
          { label: "Color", value: "Silver" },
          { label: "Treatment", value: "Liquid Coating" },
          { label: "U Height", value: "6U" },
          { label: "Rack Type", value: "Open Frame" },
          { label: "Mounting", value: "Floor Stand" },
          { label: "Lockable Casters", value: "✓"},
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
      {
        id: 2,
        name: "Redundant Power",
        image: "/images/dcs-box.png",
        price: 299,
        description: "950W redundant power supply for rack-mounted UniFi devices.",
        specs: [
          "950W DC power availability",
          "(6) DC SmartPower ports",
          "1.3\" LCM touchscreen"
        ],
        detailedSpecs: [
          { label: "Management", value: "Ethernet" },
          { label: "Networking Interface", value: "(1) GbE RJ45 Port" },
          { label: "Power Method", value: "(1) Universal AC input, 100-240V AC)" },
          { label: "Power Supply", value: "54V DC output: AC/DC, internal, 645W, 12V DC output: AC/DC, internal, 350W" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Max. Power Consumption", value: "995W" },
          { label: "Power Output", value: "(6) RPS DC Ports)" },
          { label: "ESD/EMP Protection", value: "Air: 16kV, contact 12kV" },
          { label: "Display", value: "1.3\" touchscreen" },
          { label: "Buttons", value: "(1) Factory Reset)" },
          { label: "LEDs System", value: "Status" },
          { label: "LEDs ", value: "Activity" },
          { label: "Certifications ", value: "CE, FCC, IC" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 3,
        name: "SmartPower Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A cable used to deliver redundant power from an associated SmartPower device.",
        specs: [
          "Supported UniFi SmartPower connect",
          "Cable length 1.5 m",
        ],
        detailedSpecs: [
          { label: "Length", value: "1.5 m (4.9 ft)" },
          { label: "Insulation Thickness", value: "0.35 mm (0.01\")" },
          { label: "Insulation Diameter", value: "2 mm (0.08\")" },
          { label: "Insulation Material", value: "PVC" },
          { label: "Conductor Wire Gauge", value: "(18) 16 AWG, (6) 24 AWG" },
          { label: "Cable Jacket Material", value: "PVC" },
          { label: "Cable Jacket Outer Diameter", value: "9.5 x 23 mm (0.4 x 0.9\")" },
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },
{
    id: "USW-Enterprise-48-PoE(720W)",
    name: "Enterprise 48 PoE (Vintage)",
    category: "Switching",
    subfilter: "Professional",
    image: "/images/switching/27.uswe48poe/1.p-utama-uswe48poe.jpg",
    shortDescription: "A 48-Port, Layer 3 switch with 2.5 GbE PoE+ output.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-Enterprise-48-PoE(720W)",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/27.uswe48poe/1.p-utama-uswe48poe.jpg",
      "/images/switching/27.uswe48poe/2.p-dimensi-uswe48poe.jpg",
      "/images/switching/27.uswe48poe/3.p-spec-uswe48poe.jpg",
      "/images/switching/27.uswe48poe/4.p-development-uswe48poe.jpg",
      "/images/switching/27.uswe48poe/p-itb-uswe48poe.jpg",
      "/images/switching/27.uswe48poe/p-mkt0-uswe48poe.jpg",
      "/images/switching/27.uswe48poe/p-mkt1-uswe48poe.jpg",
      "/images/switching/27.uswe48poe/p-mkt2-uswe48poe.jpg",
      "/images/switching/27.uswe48poe/p-mkt3-uswe48poe.jpg",
      "/images/switching/27.uswe48poe/p-mkt4-uswe48poe.jpg",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/27.uswe48poe/p-mkt0-uswe48poe.jpg",
      "/images/switching/27.uswe48poe/p-itb-uswe48poe.jpg",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Layer 3 switch with 2",
      "5 GbE PoE+ output",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442 x 285 x 44 mm (17.4 x 15.7 x 1.7\")" },
          { label: "Port Layout 2 GbE RJ45", value: "48 (All PoE+) (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "4 (10G/1G)" },
          { label: "Max. PoE Output", value: "Up to PoE++" },
          { label: "Total PoE Availability", value: "720W" },
          { label: "Redundancy", value: "DC Power Backup" },
          { label: "Layer 3", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U)"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "160 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "160 Gbps" },
          { label: "Forwarding Rate", value: "238 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "32.000" },
          { label: "L3 Table Size ARP Entries", value: "16.000" },
          { label: "L3 Table Size IPv4 Routes", value: "16.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "Packet Buffer Size", value: "4 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "QoS (DSCP)", value: "✓", isCheck: true },
         { label: "Pro AV Profiles", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports, PoE+", value: "48"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "32W"},
         { label: "Max. Power Consumption", value: "150W (Excluding PoE Output) 870W (Including PoE Output)"},
         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, internal, 870W"},
         { label: "Supported Voltage Range", value: "100-240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "511.8 BTU/hr (Excluding PoE Output)"},
         { label: "Weight", value: "With / Withouth Mounting Brackets: 6.3 kg / 6.2 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "600~1200 mm (23.6-47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 16kV, contact: ± 12kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 05485-22-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 6.2.26 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/23.uswpro48poe/p-itb-uswpro48poe.jpg", },
    ],

    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Toolless Mini Rack",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
        specs: [
          "6U-sized device rack",
          "Combine two Mini Racks into a 12U rack with a Stacking Kit",
          "Toolless assembly and device mounting",
          "Lockable casters"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "with handle and caster : 519 x 460 x 485 mm (20.43 x 18.11 x 19.09\")" },
          { label: "Weight", value: "10.3 kg" },
          { label: "Max. Weight Capacity (Single toolless mini rack) Static : 80 kg (176 lb)", value: "SGCC Steel" },
          { label: "Max. Weight Capacity (Double toolless mini rack) Static : 70 kg (154 lb)", value: "SGCC Steel" },
          { label: "Enclosure Material", value: "Frame/Bracket: SPCC steel, Handle: Stainless steel" },
          { label: "Color", value: "Silver" },
          { label: "Treatment", value: "Liquid Coating" },
          { label: "U Height", value: "6U" },
          { label: "Rack Type", value: "Open Frame" },
          { label: "Mounting", value: "Floor Stand" },
          { label: "Lockable Casters", value: "✓"},
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
      {
        id: 2,
        name: "Redundant Power",
        image: "/images/dcs-box.png",
        price: 299,
        description: "950W redundant power supply for rack-mounted UniFi devices.",
        specs: [
          "950W DC power availability",
          "(6) DC SmartPower ports",
          "1.3\" LCM touchscreen"
        ],
        detailedSpecs: [
          { label: "Management", value: "Ethernet" },
          { label: "Networking Interface", value: "(1) GbE RJ45 Port" },
          { label: "Power Method", value: "(1) Universal AC input, 100-240V AC)" },
          { label: "Power Supply", value: "54V DC output: AC/DC, internal, 645W, 12V DC output: AC/DC, internal, 350W" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Max. Power Consumption", value: "995W" },
          { label: "Power Output", value: "(6) RPS DC Ports)" },
          { label: "ESD/EMP Protection", value: "Air: 16kV, contact 12kV" },
          { label: "Display", value: "1.3\" touchscreen" },
          { label: "Buttons", value: "(1) Factory Reset)" },
          { label: "LEDs System", value: "Status" },
          { label: "LEDs ", value: "Activity" },
          { label: "Certifications ", value: "CE, FCC, IC" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 3,
        name: "SFP to RJ45 Adapter",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP to RJ45 transceiver that supports 1G connections up to 100 m.",
        specs: [
          "Supported data rates: 1000 / 100 / 10 Mbps",
          "Compatible with SFP interfaces",
          "Supports connections up to 100 m*",
          "*Ethernet cable is not included"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "RJ45" },
          { label: "Supported Media", value: "Copper" },
          { label: "Supported Data Rate", value: "10 / 100 / 1000 Mbps" },
          { label: "Supported Cable Distance", value: "100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "1.2 W" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "SmartPower Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A cable used to deliver redundant power from an associated SmartPower device.",
        specs: [
          "Supported UniFi SmartPower connect",
          "Cable length 1.5 m",
        ],
        detailedSpecs: [
          { label: "Length", value: "1.5 m (4.9 ft)" },
          { label: "Insulation Thickness", value: "0.35 mm (0.01\")" },
          { label: "Insulation Diameter", value: "2 mm (0.08\")" },
          { label: "Insulation Material", value: "PVC" },
          { label: "Conductor Wire Gauge", value: "(18) 16 AWG, (6) 24 AWG" },
          { label: "Cable Jacket Material", value: "PVC" },
          { label: "Cable Jacket Outer Diameter", value: "9.5 x 23 mm (0.4 x 0.9\")" },
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
   
  },
{
    id: "USW-Enterprise-24-PoE(400W)",
    name: "Enterprise 24 PoE (Vintage)",
    category: "Switching",
    subfilter: "Professional",
    image: "/images/switching/28.uswe24poe/1.p-utama-uswe24poe.jpg",
    shortDescription: "A 24-port, Layer 3 switch with 2.5 GbE PoE+ output.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-Enterprise-24-PoE(400W)",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/28.uswe24poe/1.p-utama-uswe24poe.jpg",
      "/images/switching/28.uswe24poe/2.p-dimensi-uswe24poe.jpg",
      "/images/switching/28.uswe24poe/3.p-spec-uswe24poe.jpg",
      "/images/switching/28.uswe24poe/4.p-development-uswe24poe.jpg",
      "/images/switching/28.uswe24poe/p-itb-uswe24poe.jpg",
      "/images/switching/28.uswe24poe/p-mkt0-uswe24poe.jpg",
      "/images/switching/28.uswe24poe/p-mkt1-uswe24poe.jpg",
      "/images/switching/28.uswe24poe/p-mkt2-uswe24poe.jpg",
      "/images/switching/28.uswe24poe/p-mkt3-uswe24poe.jpg",
      "/images/switching/28.uswe24poe/p-mkt4-uswe24poe.jpg",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/28.uswe24poe/p-mkt0-uswe24poe.jpg",
      "/images/switching/28.uswe24poe/p-itb-uswe24poe.jpg",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Layer 3 switch with 2",
      "5 GbE PoE+ output",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442 x 285 x 44 mm (17.4 x 15.7 x 1.7\")" },
          { label: "Port Layout 1 GbE RJ45", value: "12 (All PoE+) (1G/100M/10M)" },
          { label: "Port Layout 2 GbE RJ45", value: "12 (All PoE+) (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "2 (10G/1G)" },
          { label: "Max. PoE Output", value: "Up to PoE+" },
          { label: "Total PoE Availability", value: "400W" },
          { label: "Redundancy", value: "DC Power Backup" },
          { label: "Layer 3", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U)"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "124 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "62 Gbps" },
          { label: "Forwarding Rate", value: "92 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "16.000" },
          { label: "L3 Table Size ARP Entries", value: "4.000" },
          { label: "L3 Table Size IPv4 Routes", value: "1.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "Packet Buffer Size", value: "2 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
          { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
          { label: "DHCP Relay", value: "✓", isCheck: true },
          { label: "Inter-VLAN Routing (Local Networks)", value: "✓", isCheck: true },
          { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "QoS (DSCP)", value: "✓", isCheck: true },
         { label: "Pro AV Profiles", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports, PoE+", value: "24"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "32W"},
         { label: "Max. Power Consumption", value: "60W (Excluding PoE Output) 460W (Including PoE Output)"},
         { label: "Power Method", value: "(1) Universal input, 100–240V AC, 50/60 Hz (1) USP RPS DC input"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, internal, 550W"},
         { label: "Supported Voltage Range", value: "100-240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "204.7 BTU/hr (Excluding PoE Output)"},
         { label: "Weight", value: "With / Withouth Mounting Brackets: 5.2 kg / 5.1 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "400~1200 mm (23.6-47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 16kV, contact: ± 12kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 05485-22-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 5.14.12 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/23.uswpro48poe/p-itb-uswpro48poe.jpg", },
    ],

    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Toolless Mini Rack",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
        specs: [
          "6U-sized device rack",
          "Combine two Mini Racks into a 12U rack with a Stacking Kit",
          "Toolless assembly and device mounting",
          "Lockable casters"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "with handle and caster : 519 x 460 x 485 mm (20.43 x 18.11 x 19.09\")" },
          { label: "Weight", value: "10.3 kg" },
          { label: "Max. Weight Capacity (Single toolless mini rack) Static : 80 kg (176 lb)", value: "SGCC Steel" },
          { label: "Max. Weight Capacity (Double toolless mini rack) Static : 70 kg (154 lb)", value: "SGCC Steel" },
          { label: "Enclosure Material", value: "Frame/Bracket: SPCC steel, Handle: Stainless steel" },
          { label: "Color", value: "Silver" },
          { label: "Treatment", value: "Liquid Coating" },
          { label: "U Height", value: "6U" },
          { label: "Rack Type", value: "Open Frame" },
          { label: "Mounting", value: "Floor Stand" },
          { label: "Lockable Casters", value: "✓"},
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
      {
        id: 2,
        name: "Redundant Power",
        image: "/images/dcs-box.png",
        price: 299,
        description: "950W redundant power supply for rack-mounted UniFi devices.",
        specs: [
          "950W DC power availability",
          "(6) DC SmartPower ports",
          "1.3\" LCM touchscreen"
        ],
        detailedSpecs: [
          { label: "Management", value: "Ethernet" },
          { label: "Networking Interface", value: "(1) GbE RJ45 Port" },
          { label: "Power Method", value: "(1) Universal AC input, 100-240V AC)" },
          { label: "Power Supply", value: "54V DC output: AC/DC, internal, 645W, 12V DC output: AC/DC, internal, 350W" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Max. Power Consumption", value: "995W" },
          { label: "Power Output", value: "(6) RPS DC Ports)" },
          { label: "ESD/EMP Protection", value: "Air: 16kV, contact 12kV" },
          { label: "Display", value: "1.3\" touchscreen" },
          { label: "Buttons", value: "(1) Factory Reset)" },
          { label: "LEDs System", value: "Status" },
          { label: "LEDs ", value: "Activity" },
          { label: "Certifications ", value: "CE, FCC, IC" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 3,
        name: "SFP to RJ45 Adapter",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP to RJ45 transceiver that supports 1G connections up to 100 m.",
        specs: [
          "Supported data rates: 1000 / 100 / 10 Mbps",
          "Compatible with SFP interfaces",
          "Supports connections up to 100 m*",
          "*Ethernet cable is not included"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "RJ45" },
          { label: "Supported Media", value: "Copper" },
          { label: "Supported Data Rate", value: "10 / 100 / 1000 Mbps" },
          { label: "Supported Cable Distance", value: "100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "1.2 W" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "SmartPower Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "A cable used to deliver redundant power from an associated SmartPower device.",
        specs: [
          "Supported UniFi SmartPower connect",
          "Cable length 1.5 m",
        ],
        detailedSpecs: [
          { label: "Length", value: "1.5 m (4.9 ft)" },
          { label: "Insulation Thickness", value: "0.35 mm (0.01\")" },
          { label: "Insulation Diameter", value: "2 mm (0.08\")" },
          { label: "Insulation Material", value: "PVC" },
          { label: "Conductor Wire Gauge", value: "(18) 16 AWG, (6) 24 AWG" },
          { label: "Cable Jacket Material", value: "PVC" },
          { label: "Cable Jacket Outer Diameter", value: "9.5 x 23 mm (0.4 x 0.9\")" },
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },
{
    id: "USW-Mission-Critical-(120W)",
    name: "UPS PoE Switch",
    category: "Switching",
    subfilter: "Professional",
    image: "/images/switching/29.uswmissioncritical/1.p-utama-uswmc.jpg",
    shortDescription:
      "A switch with an integrated 368Wh lithium-ion battery capable of providing un interruptible PoE to 8 devices.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-MISSION-CRITICAL--120W-",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/29.uswmissioncritical/1.p-utama-uswmc.jpg",
      "/images/switching/29.uswmissioncritical/2.p-dimensi-uswmc.jpg",
      "/images/switching/29.uswmissioncritical/3.p-spec-uswmc.jpg",
      "/images/switching/29.uswmissioncritical/4.p-development-uswmc.jpg",
      "/images/switching/29.uswmissioncritical/p-itb-uswmc.jpg",
      "/images/switching/29.uswmissioncritical/p-mkt0-uswmc.jpg",
      "/images/switching/29.uswmissioncritical/p-mkt1-uswmc.jpg",
      "/images/switching/29.uswmissioncritical/p-mkt2-uswmc.jpg",
      "/images/switching/29.uswmissioncritical/p-mkt3-uswmc.jpg",
      "/images/switching/29.uswmissioncritical/p-mkt4-uswmc.jpg",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/29.uswmissioncritical/p-mkt0-uswmc.jpg",
      "/images/switching/29.uswmissioncritical/p-itb-uswmc.jpg",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "A switch with an integrated 368Wh lithium-ion battery capable of providing un interruptible PoE to 8 devices",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442 x 480 x 44 mm (17.4 x 18.9 x 1.7\")" },
          { label: "Port Layout 1 GbE RJ45", value: "9 (4 PoE+; 4 PoE++) (1G/100M/10M)" },
          { label: "Max. PoE Output", value: "Up to PoE++" },
          { label: "Total PoE Availability", value: "120W" },
          { label: "Redundancy", value: "Battery Power Backup" },
          { label: "Layer 3", value: "✓" },
          { label: "Form Factor", value: "Rack mount (1U)"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "18 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "9 Gbps" },
          { label: "Forwarding Rate", value: "13 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "8.000" },
          { label: "Packet Buffer Size", value: "0.5 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports, PoE+", value: "4"},
         { label: "PoE Ports, PoE++", value: "4"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "32W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE++", value: "64"},
         { label: "Max. Power Consumption", value: "50W (Excluding PoE Output) 240W (Including PoE Output)"},
         { label: "Power Method", value: "Universal input, 100–240V AC, 50/60 Hz, External battery input, 48V DC"},
         { label: "Power Input Method", value: "AC input, DC input(backup)"},
         { label: "Power Supply", value: "AC/DC, internal, 240W"},
         { label: "Supported Voltage Range", value: "100-240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "170.6 BTU/hr (Excluding PoE Output)"},
         { label: "Weight", value: "With / Withouth Mounting Brackets: 9.2 kg / 9 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "482.6 mm (19\") four-post racks"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air/contact: ± 24kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 06679-25-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 6.2.26 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/29.uswmissioncritical/p-itb-uswmc.jpg", },
    ],
  },
{
    id: "USW-48-PoE(195W)",
    name: "Standard 48 PoE",
    category: "Switching",
    subfilter: "Standard",
    image: "/images/switching/30.uswstd48poe/1.p-utama-uswstd48poe.jpg",
    shortDescription:
      "A 48-port, Layer 2 PoE switch with a silent, fanless cooling system.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    
    // SKU produk
    sku: "USW-48-POE-195W-",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/30.uswstd48poe/1.p-utama-uswstd48poe.jpg",
      "/images/switching/30.uswstd48poe/2.p-dimensi-uswstd48poe.jpg",
      "/images/switching/30.uswstd48poe/3.p-spec-uswstd48poe.jpg",
      "/images/switching/30.uswstd48poe/4.p-development-uswstd48poe.jpg",
      "/images/switching/30.uswstd48poe/p-itb-uswstd48poe.jpg",
      "/images/switching/30.uswstd48poe/p-mkt0-uswstd48poe.jpg",
      "/images/switching/30.uswstd48poe/p-mkt1-uswstd48poe.jpg",
      "/images/switching/30.uswstd48poe/p-mkt2-uswstd48poe.jpg",
      "/images/switching/30.uswstd48poe/p-mkt3-uswstd48poe.jpg",
      "/images/switching/30.uswstd48poe/p-mkt4-uswstd48poe.jpg",
      "/images/switching/30.uswstd48poe/p-ov1-uswstd48poe.png",
      "/images/switching/30.uswstd48poe/p-ov2-uswstd48poe.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/30.uswstd48poe/p-ov1-uswstd48poe.png",
      "/images/switching/30.uswstd48poe/p-ov2-uswstd48poe.png",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Layer 2 PoE switch with a silent",
      "fanless cooling system",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442 x 285 x 44 mm (17.4 x 11.2 x 1.7\")" },
          { label: "Port Layout 1 GbE RJ45", value: "48 (32 PoE+) (1G/100M/10M)" },
          { label: "Port Layout 1G SFP", value: "4 (1G)" },
          { label: "Max. PoE Output", value: "Up to PoE+" },
          { label: "Total PoE Availability", value: "195W" },
          { label: "Form Factor", value: "Rack mount (1U)"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "104 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "52 Gbps" },
          { label: "Forwarding Rate", value: "77 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "16.000" },
          { label: "Packet Buffer Size", value: "1.5 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports, PoE+", value: "32"},
         { label: "Max. PoE Wattage per Port by PSE, PoE", value: "15.4W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "32W"},
         { label: "Max. Power Consumption", value: "45W (Excluding PoE Output), 240W (Including PoE Output)"},
         { label: "Power Method", value: "Universal input, 100–240V AC, 50/60 "},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, internal, 240W"},
         { label: "Supported Voltage Range", value: "100-240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "153.5 BTU/hr (Excluding PoE Output)"},
         { label: "Weight", value: "With / Withouth Mounting Brackets: 4.6 kg / 4.5 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 16kV, contact: ± 12kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 00593-21-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 7.2.94 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/30.uswstd48poe/p-itb-uswstd48poe.jpg", },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Toolless Mini Rack",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
        specs: [
          "6U-sized device rack",
          "Combine two Mini Racks into a 12U rack with a Stacking Kit",
          "Toolless assembly and device mounting",
          "Lockable casters"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "with handle and caster : 519 x 460 x 485 mm (20.43 x 18.11 x 19.09\")" },
          { label: "Weight", value: "10.3 kg" },
          { label: "Max. Weight Capacity (Single toolless mini rack) Static : 80 kg (176 lb)", value: "SGCC Steel" },
          { label: "Max. Weight Capacity (Double toolless mini rack) Static : 70 kg (154 lb)", value: "SGCC Steel" },
          { label: "Enclosure Material", value: "Frame/Bracket: SPCC steel, Handle: Stainless steel" },
          { label: "Color", value: "Silver" },
          { label: "Treatment", value: "Liquid Coating" },
          { label: "U Height", value: "6U" },
          { label: "Rack Type", value: "Open Frame" },
          { label: "Mounting", value: "Floor Stand" },
          { label: "Lockable Casters", value: "✓"},
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
    ]
    },
{
    id: "USW-24-PoE(95W)",
    name: "Standard 24 PoE",
    category: "Switching",
    subfilter: "Standard",
    image: "/images/switching/31.uswstd24poe/1.p-utama-uswstd24poe.jpg",
    shortDescription:
      "A 24-port, Layer 2 PoE switch with a fanless cooling system.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
    
    // SKU produk
    sku: "USW-24-POE-95W-",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/31.uswstd24poe/1.p-utama-uswstd24poe.jpg",
      "/images/switching/31.uswstd24poe/2.p-dimensi-uswstd24poe.jpg",
      "/images/switching/31.uswstd24poe/3.p-spec-uswstd24poe.jpg",
      "/images/switching/31.uswstd24poe/4.p-development-uswstd24poe.jpg",
      "/images/switching/31.uswstd24poe/p-itb-uswstd24poe.jpg",
      "/images/switching/31.uswstd24poe/p-mkt0-uswstd24poe.jpg",
      "/images/switching/31.uswstd24poe/p-mkt1-uswstd24poe.jpg",
      "/images/switching/31.uswstd24poe/p-mkt2-uswstd24poe.jpg",
      "/images/switching/31.uswstd24poe/p-mkt3-uswstd24poe.jpg",
      "/images/switching/31.uswstd24poe/p-mkt4-uswstd24poe.jpg",
      "/images/switching/31.uswstd24poe/p-ov1-uswstd24poe.png",
      "/images/switching/31.uswstd24poe/p-ov2-uswstd24poe.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/31.uswstd24poe/p-ov1-uswstd24poe.png",
      "/images/switching/31.uswstd24poe/p-ov2-uswstd24poe.png"
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
          { label: "Dimensions", value: "442 x 200 x 44 mm (17.4 x 7.9 x 1.7\")" },
          { label: "Port Layout 1 GbE RJ45", value: "24 (16 PoE+) (1G/100M/10M)" },
          { label: "Port Layout 1G SFP", value: "2 (1G)" },
          { label: "Max. PoE Output", value: "Up to PoE+" },
          { label: "Total PoE Availability", value: "95W" },
          { label: "Form Factor", value: "Rack mount (1U)"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "52 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "26 Gbps" },
          { label: "Forwarding Rate", value: "39 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "8.000" },
          { label: "Packet Buffer Size", value: "0.5 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports, PoE+", value: "16"},
         { label: "Max. PoE Wattage per Port by PSE, PoE", value: "15.4W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "32W"},
         { label: "Max. Power Consumption", value: "25W (Excluding PoE output), 120W (Including PoE Output)"},
         { label: "Power Method", value: "Universal input, 100–240V AC, 50/60 Hz "},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, internal, 120W"},
         { label: "Supported Voltage Range", value: "100-240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "85.3 BTU/hr (Excluding PoE Output)"},
         { label: "Weight", value: "With / Withouth Mounting Brackets: 3.1 kg / 3 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 16kV, contact: ± 12kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 00593-21-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 7.2.94 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/30.uswstd48poe/p-itb-uswstd48poe.jpg", },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Toolless Mini Rack",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
        specs: [
          "6U-sized device rack",
          "Combine two Mini Racks into a 12U rack with a Stacking Kit",
          "Toolless assembly and device mounting",
          "Lockable casters"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "with handle and caster : 519 x 460 x 485 mm (20.43 x 18.11 x 19.09\")" },
          { label: "Weight", value: "10.3 kg" },
          { label: "Max. Weight Capacity (Single toolless mini rack) Static : 80 kg (176 lb)", value: "SGCC Steel" },
          { label: "Max. Weight Capacity (Double toolless mini rack) Static : 70 kg (154 lb)", value: "SGCC Steel" },
          { label: "Enclosure Material", value: "Frame/Bracket: SPCC steel, Handle: Stainless steel" },
          { label: "Color", value: "Silver" },
          { label: "Treatment", value: "Liquid Coating" },
          { label: "U Height", value: "6U" },
          { label: "Rack Type", value: "Open Frame" },
          { label: "Mounting", value: "Floor Stand" },
          { label: "Lockable Casters", value: "✓"},
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
    ]
  },
{
    id: "USW-16-PoE(42W)",
    name: "Standard 16 PoE",
    category: "Switching",
    subfilter: "Standard",
    image: "/images/switching/32.uswstd16poe/1.p-utama-uswstd16poe.jpg",
    shortDescription:
      "A 16-port, Layer 2 PoE switch with a silent, fanless cooling system.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-16-POE-42W-",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/32.uswstd16poe/1.p-utama-uswstd16poe.jpg",
      "/images/switching/32.uswstd16poe/2.p-dimensi-uswstd16poe.jpg",
      "/images/switching/32.uswstd16poe/3.p-spec-uswstd16poe.jpg",
      "/images/switching/32.uswstd16poe/4.p-development-uswstd16poe.jpg",
      "/images/switching/32.uswstd16poe/p-itb-uswstd16poe.jpg",
      "/images/switching/32.uswstd16poe/p-mkt0-uswstd16poe.jpg",
      "/images/switching/32.uswstd16poe/p-mkt1-uswstd16poe.jpg",
      "/images/switching/32.uswstd16poe/p-mkt2-uswstd16poe.jpg",
      "/images/switching/32.uswstd16poe/p-mkt3-uswstd16poe.jpg",
      "/images/switching/32.uswstd16poe/p-mkt4-uswstd16poe.jpg",
      "/images/switching/32.uswstd16poe/p-ov1-uswstd16poe.png",
      "/images/switching/32.uswstd16poe/p-ov2-uswstd16poe.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/32.uswstd16poe/p-ov1-uswstd16poe.png",
      "/images/switching/32.uswstd16poe/p-ov2-uswstd16poe.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Layer 2 PoE switch with a silent",
      "fanless cooling system",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
     {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442 x 200 x 44 mm (17.4 x 7.9 x 1.7\")" },
          { label: "Port Layout 1 GbE RJ45", value: "16 (16 PoE+) (1G/100M/10M)" },
          { label: "Port Layout 1G SFP", value: "2 (1G)" },
          { label: "Max. PoE Output", value: "Up to PoE+" },
          { label: "Total PoE Availability", value: "42W" },
          { label: "Form Factor", value: "Rack mount (1U)"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "36 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "18 Gbps" },
          { label: "Forwarding Rate", value: "27 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "8.000" },
          { label: "Packet Buffer Size", value: "0.5 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports, PoE+", value: "8"},
         { label: "Max. PoE Wattage per Port by PSE, PoE", value: "15.4W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "32W"},
         { label: "Max. Power Consumption", value: "18W (Excluding PoE output), 60W (Including PoE Output)"},
         { label: "Power Method", value: "Universal input, 100–240V AC, 50/60 Hz "},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, internal, 60W"},
         { label: "Supported Voltage Range", value: "100-240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "61.4 BTU/hr"},
         { label: "Weight", value: "With / Withouth Mounting Brackets: 2.9 kg / 2.8 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "ESD Protection", value: "Air: ± 16kV, contact: ± 12kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 00593-21-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 7.2.94 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/30.uswstd48poe/p-itb-uswstd48poe.jpg", },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Toolless Mini Rack",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
        specs: [
          "6U-sized device rack",
          "Combine two Mini Racks into a 12U rack with a Stacking Kit",
          "Toolless assembly and device mounting",
          "Lockable casters"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "with handle and caster : 519 x 460 x 485 mm (20.43 x 18.11 x 19.09\")" },
          { label: "Weight", value: "10.3 kg" },
          { label: "Max. Weight Capacity (Single toolless mini rack) Static : 80 kg (176 lb)", value: "SGCC Steel" },
          { label: "Max. Weight Capacity (Double toolless mini rack) Static : 70 kg (154 lb)", value: "SGCC Steel" },
          { label: "Enclosure Material", value: "Frame/Bracket: SPCC steel, Handle: Stainless steel" },
          { label: "Color", value: "Silver" },
          { label: "Treatment", value: "Liquid Coating" },
          { label: "U Height", value: "6U" },
          { label: "Rack Type", value: "Open Frame" },
          { label: "Mounting", value: "Floor Stand" },
          { label: "Lockable Casters", value: "✓"},
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
    ]
  },
{
    id: "USW-48",
    name: "Standard 48",
    category: "Switching",
    subfilter: "Standard",
    image: "/images/switching/33.uswstd48/1.p-utama-uswstd48.jpg",
    shortDescription:
      "A 48-port, Layer 2 switch with a silent, fanless cooling system.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-48",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/33.uswstd48/1.p-utama-uswstd48.jpg",
      "/images/switching/33.uswstd48/2.p-dimensi-uswstd48.jpg",
      "/images/switching/33.uswstd48/3.p-spec-uswstd48.jpg",
      "/images/switching/33.uswstd48/4.p-development-uswstd48.jpg",
      "/images/switching/33.uswstd48/p-itb-uswstd48.jpg",
      "/images/switching/33.uswstd48/p-mkt0-uswstd48.jpg",
      "/images/switching/33.uswstd48/p-mkt1-uswstd48.jpg",
      "/images/switching/33.uswstd48/p-mkt2-uswstd48.jpg",
      "/images/switching/33.uswstd48/p-mkt3-uswstd48.jpg",
      "/images/switching/33.uswstd48/p-mkt4-uswstd48.jpg",
      "/images/switching/33.uswstd48/p-ov1-uswstd48.png",
      "/images/switching/33.uswstd48/p-ov2-uswstd48.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/33.uswstd48/p-ov1-uswstd48.png",
      "/images/switching/33.uswstd48/p-ov2-uswstd48.png",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Layer 2 switch with a silent",
      "fanless cooling system",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442 x 285 x 44 mm (17.4 x 11.2 x 1.7\")" },
          { label: "Port Layout 1 GbE RJ45", value: "48 (1G/100M/10M)" },
          { label: "Port Layout 1G SFP", value: "4 (1G)" },
          { label: "Form Factor", value: "Rack mount (1U)"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "104 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "52 Gbps" },
          { label: "Forwarding Rate", value: "77 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "16.000" },
          { label: "Packet Buffer Size", value: "1.5 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "Max. Power Consumption", value: "40W"},
         { label: "Power Method", value: "Universal input, 100–240V AC, 50/60 Hz "},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, internal, 60W"},
         { label: "Supported Voltage Range", value: "100-240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "136.5 BTU/hr"},
         { label: "Weight", value: "With / Withouth Mounting Brackets: 4 kg / 3.9 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "Ambient Operating Temperature", value: "-15 to 40° C (5 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 17193-20-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 7.2.94 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/30.uswstd48poe/p-itb-uswstd48poe.jpg", },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Toolless Mini Rack",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
        specs: [
          "6U-sized device rack",
          "Combine two Mini Racks into a 12U rack with a Stacking Kit",
          "Toolless assembly and device mounting",
          "Lockable casters"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "with handle and caster : 519 x 460 x 485 mm (20.43 x 18.11 x 19.09\")" },
          { label: "Weight", value: "10.3 kg" },
          { label: "Max. Weight Capacity (Single toolless mini rack) Static : 80 kg (176 lb)", value: "SGCC Steel" },
          { label: "Max. Weight Capacity (Double toolless mini rack) Static : 70 kg (154 lb)", value: "SGCC Steel" },
          { label: "Enclosure Material", value: "Frame/Bracket: SPCC steel, Handle: Stainless steel" },
          { label: "Color", value: "Silver" },
          { label: "Treatment", value: "Liquid Coating" },
          { label: "U Height", value: "6U" },
          { label: "Rack Type", value: "Open Frame" },
          { label: "Mounting", value: "Floor Stand" },
          { label: "Lockable Casters", value: "✓"},
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
    ]
  },
{
    id: "USW-24",
    name: "Standard 24",
    category: "Switching",
    subfilter: "Standard",
    image: "/images/switching/34.uswstd24/1.p-utama-uswstd24.jpg",
    shortDescription:
      "A 24-port, Layer 2 switch with a silent, fanless cooling system.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-24",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/34.uswstd24/1.p-utama-uswstd24.jpg",
      "/images/switching/34.uswstd24/2.p-dimensi-uswstd24.jpg",
      "/images/switching/34.uswstd24/3.p-spec-uswstd24.jpg",
      "/images/switching/34.uswstd24/4.p-development-uswstd24.jpg",
      "/images/switching/34.uswstd24/p-itb-uswstd24.jpg",
      "/images/switching/34.uswstd24/p-mkt0-uswstd24.jpg",
      "/images/switching/34.uswstd24/p-mkt1-uswstd24.jpg",
      "/images/switching/34.uswstd24/p-mkt2-uswstd24.jpg",
      "/images/switching/34.uswstd24/p-mkt3-uswstd24.jpg",
      "/images/switching/34.uswstd24/p-mkt4-uswstd24.jpg",
      "/images/switching/34.uswstd24/p-ov1-uswstd24.png",
      "/images/switching/34.uswstd24/p-ov2-uswstd24.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/34.uswstd24/p-ov1-uswstd24.png",
      "/images/switching/34.uswstd24/p-ov2-uswstd24.png",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Layer 2 switch with a silent",
      "fanless cooling system",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442 x 200 x 44 mm (17.4 x 7.9 x 1.7\")" },
          { label: "Port Layout 1 GbE RJ45", value: "24 (1G/100M/10M)" },
          { label: "Port Layout 1G SFP", value: "2 (1G)" },
          { label: "Form Factor", value: "Rack mount (1U)"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "52 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "26 Gbps" },
          { label: "Forwarding Rate", value: "39 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "8.000" },
          { label: "Packet Buffer Size", value: "0.5 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "Max. Power Consumption", value: "25W"},
         { label: "Power Method", value: "Universal input, 100–240V AC, 50/60 Hz"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, internal, 36W"},
         { label: "Supported Voltage Range", value: "100-240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "85.3 BTU/hr"},
         { label: "Weight", value: "With / Withouth Mounting Brackets: 2.8 kg / 2.7 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 17193-20-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 7.2.94 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/30.uswstd48poe/p-itb-uswstd48poe.jpg", },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "Toolless Mini Rack",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Compact, stackable, and toolless design. Perfect for your rack-mount devices.",
        specs: [
          "6U-sized device rack",
          "Combine two Mini Racks into a 12U rack with a Stacking Kit",
          "Toolless assembly and device mounting",
          "Lockable casters"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "with handle and caster : 519 x 460 x 485 mm (20.43 x 18.11 x 19.09\")" },
          { label: "Weight", value: "10.3 kg" },
          { label: "Max. Weight Capacity (Single toolless mini rack) Static : 80 kg (176 lb)", value: "SGCC Steel" },
          { label: "Max. Weight Capacity (Double toolless mini rack) Static : 70 kg (154 lb)", value: "SGCC Steel" },
          { label: "Enclosure Material", value: "Frame/Bracket: SPCC steel, Handle: Stainless steel" },
          { label: "Color", value: "Silver" },
          { label: "Treatment", value: "Liquid Coating" },
          { label: "U Height", value: "6U" },
          { label: "Rack Type", value: "Open Frame" },
          { label: "Mounting", value: "Floor Stand" },
          { label: "Lockable Casters", value: "✓"},
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
    ]
  },
{
    id: "USW-WAN",
    name: "WAN Switch",
    category: "Switching",
    subfilter: "WAN",
    image:"/images/switching/35.uswwan/1.p-utama-uswwan.jpg",

    shortDescription:
      "10G SFP+ WAN Switch linking two Shadow Mode High Availability UniFi Gateways to a single ISP.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    
    // SKU produk
    sku: "USW-WAN",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/35.uswwan/1.p-utama-uswwan.jpg",
      "/images/switching/35.uswwan/2.p-dimensi-uswwan.jpg",
      "/images/switching/35.uswwan/3.p-spec-uswwan.jpg",
      "/images/switching/35.uswwan/4.p-development-uswwan.jpg",
      "/images/switching/35.uswwan/p-itb-uswwan.jpg",
      "/images/switching/35.uswwan/p-mkt0-uswwan.jpg",
      "/images/switching/35.uswwan/p-mkt1-uswwan.jpg",
      "/images/switching/35.uswwan/p-mkt2-uswwan.jpg",
      "/images/switching/35.uswwan/p-mkt3-uswwan.jpg",
      "/images/switching/35.uswwan/p-mkt4-uswwan.jpg",
      "/images/switching/35.uswwan/p-ov1-uswwan.png",
      "/images/switching/35.uswwan/p-ov2-uswwan.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/35.uswwan/p-ov1-uswwan.png",
      "/images/switching/35.uswwan/p-ov2-uswwan.png",
    
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "10G SFP+ WAN Switch linking two Shadow Mode High Availability UniFi Gateways to a single ISP",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 120 x 43.7 mm (17.4 x 4.72 x 1.7\")" },
          { label: "Port Layout 1 GbE TJ45", value: "1 (1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "3 (10G/1G)" },
          { label: "Redundancy", value: "(2) AC inputs)" },
          { label: "Form Factor", value: "Rack Mount (1U)" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "20 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "10 Gbps" },
          { label: "Forwarding Rate", value: "15 Mpps" }
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "Max. Power Consumption", value: "13W"},
         { label: "Power Method", value: "(2) Universal input, 100–240V AC, 50/60 Hz"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "(2) AC/DC, internal, 36W"},
         { label: "Supported Voltage Range", value: "100-240V AC"},
         { label: "Management", value: "Ethernet"},
         { label: "Heat Dissipation", value: "85.3 BTU/hr"},
         { label: "Weight", value: "With / Withouth Mounting Brackets: 2.3 kg / 2.2 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "ESD Protection", value: "Air: ± 16kV, contact: ± 22kV"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "LEDs Ethernet", value: "✓", isCheck: true },
         { label: "LEDs SFP+", value: "✓", isCheck: true },
         { label: "LEDs System", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 03715-25-08356"},
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 9.1.119 and later" },
        ]
      }
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image:"/images/switching/35.uswwan/p-itb-uswwan.jpg", },
    ],
  
    },
{
    id: "USW-WAN-RJ45",
    name: "WAN Switch RJ45",
    category: "Switching",
    subfilter: "WAN",
    image: "/images/switching/36.uswwanrj45/1.p-utama-uswwanrj45.jpg",
    shortDescription:
      "10 GbE WAN Switch linking two Shadow Mode High Availability UniFi Gateways to a single ISP.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
    
    // SKU produk
    sku: "USW-WAN-RJ45",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/36.uswwanrj45/1.p-utama-uswwanrj45.jpg",
      "/images/switching/36.uswwanrj45/2.p-dimensi-uswwanrj45.jpg",
      "/images/switching/36.uswwanrj45/3.p-spec-uswwanrj45.jpg",
      "/images/switching/36.uswwanrj45/4.p-development-uswwanrj45.jpg",
      "/images/switching/36.uswwanrj45/p-itb-uswwanrj45.jpg",
      "/images/switching/36.uswwanrj45/p-mkt0-uswwanrj45.jpg",
      "/images/switching/36.uswwanrj45/p-mkt1-uswwanrj45.jpg",
      "/images/switching/36.uswwanrj45/p-mkt2-uswwanrj45.jpg",
      "/images/switching/36.uswwanrj45/p-mkt3-uswwanrj45.jpg",
      "/images/switching/36.uswwanrj45/p-mkt4-uswwanrj45.jpg",
      "/images/switching/36.uswwanrj45/p-ov1-uswwanrj45.png",
      "/images/switching/36.uswwanrj45/p-ov2-uswwanrj45.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/36.uswwanrj45/p-ov1-uswwanrj45.png",
      "/images/switching/36.uswwanrj45/p-ov2-uswwanrj45.png",
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
          { label: "Dimensions", value: "442.4 x 120 x 43.7 mm (17.4 x 4.72 x 1.7\")" },
          { label: "Port Layout 1 GbE TJ45", value: "1 (1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "3 (10G/1G)" },
          { label: "Redundancy", value: "(2) AC inputs" },
          { label: "Form Factor", value: "Rack Mount (1U)" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "20 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "10 Gbps" },
          { label: "Forwarding Rate", value: "15 Mpps" }
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "Max. Power Consumption", value: "18W"},
         { label: "Power Method", value: "(2) Universal input, 100–240V AC, 50/60 Hz"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "(2) AC/DC, internal, 36W"},
         { label: "Supported Voltage Range", value: "100-240V AC"},
         { label: "Management", value: "Ethernet"},
         { label: "Heat Dissipation", value: "85.3 BTU/hr"},
         { label: "Weight", value: "With / Withouth Mounting Brackets: 2.4 kg / 2.3 kg"},
         { label: "Enclosure Material", value: "SGCC Steel"},
         { label: "Mount Material", value: "SGCC Steel"},
         { label: "ESD Protection", value: "Air: ± 16kV, contact: ± 10kV"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "LEDs Ethernet", value: "✓", isCheck: true },
         { label: "LEDs System", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 04273-25-08356"},
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 9.1.120 and later" },
        ]
      }
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image:"/images/switching/36.uswwanrj45/p-itb-uswwanrj45.jpg",
 },
    ],
    
   
  },
{
    id: "USW-Lite-16-PoE(45W)",
    name: "Lite 16 PoE",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switching/37.uswlite16poe/1.p-utama-uswlite16poe.jpg",
    shortDescription:
      "A wall-mounteable, 16-port, Layer 2 PoE switch with a fanless cooling system",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    
    // SKU produk
    sku: "USW-LITE-16-POE-45W-",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/1.p-utama-uswlite16poe.jpg",
      "/images/switching/2.p-dimensi-uswlite16poe.jpg",
      "/images/switching/3.p-spec-uswlite16poe.jpg",
      "/images/switching/4.p-development-uswlite16poe.jpg",
      "/images/switching/p-itb-uswlite16poe.jpg",
      "/images/switching/p-mkt0-uswlite16poe.jpg",
      "/images/switching/p-mkt1-uswlite16poe.jpg",
      "/images/switching/p-mkt2-uswlite16poe.jpg",
      "/images/switching/p-mkt3-uswlite16poe.jpg",
      "/images/switching/p-mkt4-uswlite16poe.jpg",
      "/images/switching/p-ov1-uswlite16poe.png",
      "/images/switching/p-ov2-uswlite16poe.png"

    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/p-ov1-uswlite16poe.png",
      "/images/switching/p-ov2-uswlite16poe.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "A wall-mounteable",
      "Layer 2 PoE switch with a fanless cooling system",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
     {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "192 x 185 x 44 mm (7.6 x 7.3 x 1.7\")" },
          { label: "Port Layout 1 GbE RJ45", value: "16 (8 PoE+) (1G/100M/10M)" },
          { label: "Max. PoE Output", value: "Up to PoE+" },
          { label: "Total Availability", value: "45W"},
          { label: "Form Factor", value: "Compact desktop, wall"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "32 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "16 Gbps" },
          { label: "Forwarding Rate", value: "24 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "8.000" },
          { label: "Packet Buffer Size", value: "0.5 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports PoE+", value: "8"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "32W"},
         { label: "Max. Power Consumption", value: "15W (Excluding PoE Output), 60W (Including PoE Output)"},
         { label: "Power Method", value: "Universal input, 100–240V AC, 50/60 Hz"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, internal, 60W"},
         { label: "Supported Voltage Range", value: "100-240V AC"},
         { label: "Management", value: "Ethernet"},
         { label: "Heat Dissipation", value: "51.2 (Excluding PoE Output)"},
         { label: "Weight", value: "1.2 kg (2.6 lb)"},
         { label: "Enclosure Material", value: "Polycarbonate"},
         { label: "Mount Material", value: "Polycarbonate"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "Ambient Operating Temperature", value: "-15 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 17193-20-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 7.2.94 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/p-itb-uswlite16poe.jpg",
 },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
       {
        id: 1,
        name: "SFP to RJ45 Adapter",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP to RJ45 transceiver that supports 1G connections up to 100 m.",
        specs: [
          "Supported data rates: 1000 / 100 / 10 Mbps",
          "Compatible with SFP interfaces",
          "Supports connections up to 100 m*",
          "*Ethernet cable is not included"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "RJ45" },
          { label: "Supported Media", value: "Copper" },
          { label: "Supported Data Rate", value: "10 / 100 / 1000 Mbps" },
          { label: "Supported Cable Distance", value: "100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "1.2 W" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
    },
{
    id: "USW-Lite-8-PoE(52W)",
    name: "Lite 8 PoE",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switching/38.uswlite8poe/1.p-utama-uswlite8poe.jpg",
    shortDescription:
    "An 8-port, Layer 2 PoE switch supporting silent fanless cooling.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
    
    // SKU produk
    sku: "USW-LITE-8-POE-52W-",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/38.uswlite8poe/1.p-utama-uswlite8poe.jpg",
      "/images/switching/38.uswlite8poe/2.p-dimensi-uswlite8poe.jpg",
      "/images/switching/38.uswlite8poe/3.p-spec-uswlite8poe.jpg",
      "/images/switching/38.uswlite8poe/4.p-development-uswlite8poe.jpg",
      "/images/switching/38.uswlite8poe/p-itb-uswlite8poe.jpg",
      "/images/switching/38.uswlite8poe/p-mkt0-uswlite8poe.jpg",
      "/images/switching/38.uswlite8poe/p-mkt1-uswlite8poe.jpg",
      "/images/switching/38.uswlite8poe/p-mkt2-uswlite8poe.jpg",
      "/images/switching/38.uswlite8poe/p-mkt3-uswlite8poe.jpg",
      "/images/switching/38.uswlite8poe/p-ov1-uswlite8poe.png",
      "/images/switching/38.uswlite8poe/p-ov2-uswlite8poe.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/38.uswlite8poe/p-ov1-uswlite8poe.png",
      "/images/switching/38.uswlite8poe/p-ov2-uswlite8poe.png"
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
          { label: "Dimensions", value: "99.6 x 163.7 x 31.7 mm (4 x 6.4 x 1.3\")" },
          { label: "Port Layout 1 GbE RJ45", value: "8 (4 PoE+) (1G/100M/10M)" },
          { label: "Max. PoE Output", value: "Up to PoE+" },
          { label: "Total Availability", value: "52W"},
          { label: "Form Factor", value: "Compact desktop, wall"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "16 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "8 Gbps" },
          { label: "Forwarding Rate", value: "12 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "8.000" },
          { label: "Packet Buffer Size", value: "0.5 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports PoE+", value: "4"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "30W"},
         { label: "Max. Power Consumption", value: "8W (Excluding PoE Output), 60W (Including PoE Output)"},
         { label: "Power Method", value: "AC/DC Adapter (included)"},
         { label: "Power Input Method", value: "DC input"},
         { label: "Power Supply", value: "AC/DC, internal, 60W"},
         { label: "Supported Voltage Range", value: "50-57V DC"},
         { label: "Management", value: "Ethernet"},
         { label: "Heat Dissipation", value: "27.3 BTU/hr (Excluding PoE Output)"},
         { label: "Weight", value: "1.2 kg (2.6 lb)"},
         { label: "Enclosure Material", value: "Polycarbonate"},
         { label: "Mount Material", value: "Polycarbonate"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "Ambient Operating Temperature", value: "-15 to 40° C (23 to 104° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 17193-20-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 7.2.94 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/38.uswlite8poe/p-itb-uswlite8poe.jpg" },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
       {
        id: 1,
        name: "SFP to RJ45 Adapter",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP to RJ45 transceiver that supports 1G connections up to 100 m.",
        specs: [
          "Supported data rates: 1000 / 100 / 10 Mbps",
          "Compatible with SFP interfaces",
          "Supports connections up to 100 m*",
          "*Ethernet cable is not included"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "RJ45" },
          { label: "Supported Media", value: "Copper" },
          { label: "Supported Data Rate", value: "10 / 100 / 1000 Mbps" },
          { label: "Supported Cable Distance", value: "100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "1.2 W" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },
{
    id: "USW-Pro-XG-8-PoE(155W)",
    name: "Pro XG 8 PoE",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switching/39.uswproxg8poe/1.p-utama-uswproxg8poe.jpg",
    shortDescription:
      "Compact desktop/wall-mountable, professional-grade 8-port, Layer 3 Etherlighting™ PoE++ switch with (8) 10 GbE and (2) 10G SFP+ ports.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-PRO-XG-8-POE-155W-",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/39.uswproxg8poe/1.p-utama-uswproxg8poe.jpg",
      "/images/switching/39.uswproxg8poe/2.p-dimensi-uswproxg8poe.jpg",
      "/images/switching/39.uswproxg8poe/3.p-spec-uswproxg8poe.jpg",
      "/images/switching/39.uswproxg8poe/4.p-development-uswproxg8poe.jpg",
      "/images/switching/39.uswproxg8poe/p-itb-uswproxg8poe.jpg",
      "/images/switching/39.uswproxg8poe/p-mkt0-uswproxg8poe.jpg",
      "/images/switching/39.uswproxg8poe/p-mkt1-uswproxg8poe.jpg",
      "/images/switching/39.uswproxg8poe/p-mkt2-uswproxg8poe.jpg",
      "/images/switching/39.uswproxg8poe/p-mkt3-uswproxg8poe.jpg",
      "/images/switching/39.uswproxg8poe/p-ov1-uswproxg8poe.png",
      "/images/switching/39.uswproxg8poe/p-ov2-uswproxg8poe.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/39.uswproxg8poe/p-ov1-uswproxg8poe.png",
      "/images/switching/39.uswproxg8poe/p-ov2-uswproxg8poe.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Compact desktop/wall-mountable",
      "professional-grade 8-port",
      "Layer 3 Etherlighting™ PoE++ switch with (8) 10 GbE and (2) 10G SFP+ ports",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "210.4 x 173.8 x 43.7 mm (8.28 x 6.84 x 1.7\")" },
          { label: "Port Layout 10 GbE RJ45", value: "8 (All PoE++) (10G/5G/2.5G/1G/100M)" },
          { label: "Port Layout 10 SFP+", value: "2 (10G/1G)"},
          { label: "Max. PoE Output", value: "Up to PoE++" },
          { label: "Total PoE Availability", value: "155W"},
          { label: "Layer 3", value: "✓"},
          { label: "Form Factor", value: "Compact desktop, wall"},
          { label: "Etherlighting™", value: "✓"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "200 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "100 Gbps" },
          { label: "Forwarding Rate", value: "149 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "Supported VLANs", value: "32.000" },
          { label: "L3 Table Size ARP Entries", value: "12.000" },
          { label: "L3 Table Size IPv4 Routes", value: "12.000" },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "MAC Address Table Size", value: "32.000" },
          { label: "L3 Table Size ARP Entries", value: "12.000 " },
          { label: "L3 Table Size IPv4 Routes", value: "12.000 " },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "Packet Buffer Size", value: "2 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports PoE++", value: "8"},
         { label: "Max. PoE Wattage per Port by PSE, PoE", value: "15.4W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "30W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE++", value: "60W"},
         { label: "Max. Power Consumption", value: "61W (Excluding PoE Output), 210W (Including PoE Output)"},
         { label: "Power Method", value: "AC/DC Adapter (included)"},
         { label: "Power Input Method", value: "DC input"},
         { label: "Power Supply", value: "AC/DC, internal, 210W"},
         { label: "Supported Voltage Range", value: "50-57V DC"},
         { label: "Management", value: "Ethernet"},
         { label: "Weight", value: "1.6 kg (3.5 lb)"},
         { label: "Enclosure Material", value: "SGCC steel"},
         { label: "Mount Material", value: "Polycarbonate"},
         { label: "ESD Protection", value: "Polycarbonate"},
         { label: "Supported Rack Depth", value: "Air: ± 30kV, contact: ± 30kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 45° C (23 to 113° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing"},
         { label: "Etherlighting™ Ethernet", value: "✓", isCheck: true },
         { label: "Etherlighting™ SFP+", value: "✓", isCheck: true },
         { label: "LEDs System", value: "✓", isCheck: true },
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 04322-25-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 9.0.114 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image:"/images/switching/39.uswproxg8poe/p-itb-uswproxg8poe.jpg" },
    ],
    
  },
{
    id: "USW-Enterprise-8-PoE(120W)",
    name: "Enterprise 8 PoE (vintage)",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switching/40.uswe8poe/1.p-utama-uswe8poe.jpg",
    shortDescription: "An 8-port, Layer 3 switch with 2.5 GbE PoE+ output.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-Enterprise-8-POE-120W-",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/40.uswe8poe/1.p-utama-uswe8poe.jpg",
      "/images/switching/40.uswe8poe/2.p-dimensi-uswe8poe.jpg",
      "/images/switching/40.uswe8poe/3.p-spec-uswe8poe.jpg",
      "/images/switching/40.uswe8poe/4.p-development-uswe8poe.jpg",
      "/images/switching/40.uswe8poe/p-itb-uswe8poe.jpg",
      "/images/switching/40.uswe8poe/p-mkt0-uswe8poe.jpg",
      "/images/switching/40.uswe8poe/p-mkt1-uswe8poe.jpg",
      "/images/switching/40.uswe8poe/p-mkt2-uswe8poe.jpg",
      "/images/switching/40.uswe8poe/p-mkt3-uswe8poe.jpg",
      "/images/switching/40.uswe8poe/p-mkt4-uswe8poe.jpg",
      "/images/switching/40.uswe8poe/p-ov1-uswe8poe.png",
      "/images/switching/40.uswe8poe/p-ov2-uswe8poe.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/40.uswe8poe/p-ov1-uswe8poe.png",
      "/images/switching/40.uswe8poe/p-ov2-uswe8poe.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Layer 3 switch with 2",
      "5 GbE PoE+ output",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "200 x 248 x 44 mm (7.9 x 9.8 x 1.7\")" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (All PoE++) (2.5G/1G/100M)" },
          { label: "Port Layout 10 SFP+", value: "2 (10G/1G)"},
          { label: "Max. PoE Output", value: "Up to PoE++" },
          { label: "Total PoE Availability", value: "120W"},
          { label: "Layer 3", value: "✓"},
          { label: "Form Factor", value: "Compact desktop, wall"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "80 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "40 Gbps" },
          { label: "Forwarding Rate", value: "60 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "Supported VLANs", value: "16.000" },
          { label: "L3 Table Size ARP Entries", value: "512" },
          { label: "L3 Table Size IPv4 Routes", value: "512" },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "MAC Address Table Size", value: "16.000" },
          { label: "L3 Table Size ARP Entries", value: "512 " },
          { label: "L3 Table Size IPv4 Routes", value: "512 " },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "Packet Buffer Size", value: "1.5 MB" },
          { label: "Access Lists IPv4", value: "12" },
          { label: "Access Lists MAC", value: "10" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
         { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
         { label: "Inter-VLAN Routing (Local Network)", value: "✓", isCheck: true },
         { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports PoE+", value: "8"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "32W"},
         { label: "Max. Power Consumption", value: "30W (Excluding PoE Output), 150W (Including PoE Output)"},
         { label: "Power Method", value: "Universal input, 100–240V AC, 50/60 Hz"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, internal, 150W"},
         { label: "Supported Voltage Range", value: "100-240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "102.4 BTU/hr (Excluding PoE Output)"},
         { label: "Weight", value: "2.4 kg (5.3 lb)"},
         { label: "Enclosure Material", value: ""},
         { label: "Enclosure Material", value: "Polycarbonate"},
         { label: "Mount Material", value: "Polycarbonate"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "Supported Rack Depth", value: "Air: ± 16kV, contact: ± 12kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 45° C (23 to 113° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 95% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 06645-23-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 6.3.51 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/switching/40.uswe8poe/p-itb-uswe8poe.jpg"},
    ],
  },
{
    id: "USW-Pro-8-PoE(120W)",
    name: "Pro 8 PoE",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switching/41.uswpro8poe/1.p-utama-uswpro8poe.jpg",
    shortDescription: "An 8-port, Layer 3 switch with PoE+ and PoE++ output.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-PRO-8-POE-120W-",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/41.uswpro8poe/1.p-utama-uswpro8poe.jpg",
      "/images/switching/41.uswpro8poe/2.p-dimensi-uswpro8poe.jpg",
      "/images/switching/41.uswpro8poe/3.p-spec-uswpro8poe.jpg",
      "/images/switching/41.uswpro8poe/4.p-development-uswpro8poe.jpg",
      "/images/switching/41.uswpro8poe/p-itb-uswpro8poe.jpg",
      "/images/switching/41.uswpro8poe/p-mkt0-uswpro8poe.jpg",
      "/images/switching/41.uswpro8poe/p-mkt1-uswpro8poe.jpg",
      "/images/switching/41.uswpro8poe/p-mkt2-uswpro8poe.jpg",
      "/images/switching/41.uswpro8poe/p-mkt3-uswpro8poe.jpg",
      "/images/switching/41.uswpro8poe/p-ov1-uswpro8poe.png",
      "/images/switching/41.uswpro8poe/p-ov2-uswpro8poe.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/41.uswpro8poe/p-ov1-uswpro8poe.png",
      "/images/switching/41.uswpro8poe/p-ov2-uswpro8poe.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Layer 3 switch with PoE+ and PoE++ output",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "200 x 248 x 44 mm (7.9 x 9.8 x 1.7\")" },
          { label: "Port Layout 1 GbE RJ45", value: "8 (6 PoE+; 2 PoE++), (1G/100M/10M)" },
          { label: "Port Layout 10 SFP+", value: "2 (10G/1G)"},
          { label: "Max. PoE Output", value: "Up to PoE++" },
          { label: "Total PoE Availability", value: "120W"},
          { label: "Layer 3", value: "✓"},
          { label: "Form Factor", value: "Compact desktop, wall"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "56 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "28 Gbps" },
          { label: "Forwarding Rate", value: "42 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "16.000" },
          { label: "L3 Table Size ARP Entries", value: "6.000" },
          { label: "L3 Table Size IPv4 Routes", value: "512" },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "Packet Buffer Size", value: "1.5 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 3 Features",
        items: [
         { label: "DHCP Server (Local Networks)", value: "✓", isCheck: true },
         { label: "DHCP Relay", value: "✓", isCheck: true },
         { label: "Inter-VLAN Routing (Local Network)", value: "✓", isCheck: true },
         { label: "Static Routing (Local Networks)", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1x Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
         { label: "Virtual Network Override", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports PoE+", value: "6"},
         { label: "PoE Ports PoE++", value: "2"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "15.4W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "32W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "64W"},
         { label: "Max. Power Consumption", value: "30W (Excluding PoE Output), 150W (Including PoE Output)"},
         { label: "Power Method", value: "Universal input, 100–240V AC, 50/60 Hz"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, internal, 150W"},
         { label: "Supported Voltage Range", value: "100-240V AC"},
         { label: "Management", value: "Ethernet, AR"},
         { label: "Heat Dissipation", value: "102.4 BTU/hr (Excluding PoE Output)"},
         { label: "Weight", value: "2.1 kg (4.6 lb)"},
         { label: "Enclosure Material", value: "Polycarbonate, metal"},
         { label: "Enclosure Material", value: "Polycarbonate"},
         { label: "Mount Material", value: "Polycarbonate"},
         { label: "Supported Rack Depth", value: "400~1200 mm (15.7-47.2\")"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "Ambient Operating Temperature", value: "-5 to 45° C (23 to 113° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 05214-24-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 7.5.176 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image:"/images/switching/41.uswpro8poe/p-itb-uswpro8poe.jpg",
 },
    ],
  },
{
    id: "USW-Ultra-210W(202W)",
    name: "Ultra 210W",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switching/42.uswultra210w/1.p-utama-uswultra120w.jpg",
    shortDescription:
      "A compact, Layer 2, 8-port GbE PoE switch with versatile mounting options.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-ULTRA-210W-202W-",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/42.uswultra210w/1.p-utama-uswultra120w.jpg",
      "/images/switching/42.uswultra210w/2.p-dimensi-uswultra120w.jpg",
      "/images/switching/42.uswultra210w/3.p-spec-uswultra120w.jpg",
      "/images/switching/42.uswultra210w/4.p-development-uswultra120w.jpg",
      "/images/switching/42.uswultra210w/p-itb-uswultra120w.jpg",
      "/images/switching/42.uswultra210w/p-mkt0-uswultra120w.jpg",
      "/images/switching/42.uswultra210w/p-mkt1-uswultra120w.jpg",
      "/images/switching/42.uswultra210w/p-mkt2-uswultra120w.jpg",
      "/images/switching/42.uswultra210w/p-mkt3-uswultra120w.jpg",
      "/images/switching/42.uswultra210w/p-ov1-uswultra120w.png",
      "/images/switching/42.uswultra210w/p-ov2-uswultra120w.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/42.uswultra210w/p-ov1-uswultra120w.png",
      "/images/switching/42.uswultra210w/p-ov2-uswultra120w.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "8-port GbE PoE switch with versatile mounting options",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "203 x 76 x 33 mm (8 x 3 x 1.3\")" },
          { label: "Port Layout 1 GbE RJ45", value: "8 (7 PoE+; 1 PoE++ input) (1G/100M/10M)" },
          { label: "Max. PoE Output", value: "Up to PoE+" },
          { label: "Total PoE Availability", value: "PoE++ input: 42W, PoE+ input: 16W, 60W PoE adapter input: 42W, 60W AC adapter input: 52W, 210W AC adapter input: 202W"},
          { label: "Form Factor", value: "Compact desktop, wall, magnetic"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "16 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "8 Gbps" },
          { label: "Forwarding Rate", value: "12 Mpps" },
          { label: "Supported VLANs", value: "256" },
          { label: "MAC Address Table Size", value: "4.000" },
          { label: "L3 Table Size ARP Entries", value: "6.000" },
          { label: "L3 Table Size IPv4 Routes", value: "512" },
          { label: "L3 Table Size IPv4 Static Routes", value: "256" },
          { label: "Packet Buffer Size", value: "1.5 MB" },
          { label: "Access Lists IPv4", value: "128" },
          { label: "Access Lists MAC", value: "128" },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports PoE+", value: "7"},
         { label: "PoE Ports PoE++", value: "1"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "30W"},
         { label: "Max. Power Consumption", value: "9W (Excluding PoE Output) with PoE input, 8W (Excluding PoE Output) with adapter input, 210W (Including PoE Output) with 210W AC"},
         { label: "Power Method", value: "(1) AC/DC adapter (Included) (1) PoE++"},
         { label: "Power Input Method", value: "AC input"},
         { label: "Power Supply", value: "AC/DC, internal, 210W"},
         { label: "Supported Voltage Range", value: "50-57V DC/PoE"},
         { label: "Management", value: "Ethernet"},
         { label: "Heat Dissipation", value: "15 BTU/hr (Excluding PoE Output)"},
         { label: "Weight (Device/Wall Mount/Adapter)", value: "320 g / 45 g / 770 g"},
         { label: "Enclosure Material", value: "Polycarbonate"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "Ambient Operating Temperature", value: "PoE++ input: -30 to 60° C (-22 to 140° F) 210W AC adapter input: -20 to 60° C (-4 to 140° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 06367-24-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 8.0.7 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image:"/images/switching/42.uswultra210w/p-itb-uswultra120w.jpg" },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "AC Adapter 210W",
        image: "/images/dcs-box.png",
        price: 299,
        description: "An AC power adapter delivers 210W at 54V DC for a PoE switch",
        specs: [
          "Wall-mountable",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "190 x 86 x 26 mm (7.5 x 3.4 x 1\")" },
          { label: "Weight", value: "1.2 kg (2.6 lb)" },
          { label: "AC Connector", value: "C14 INLET (input)" },
          { label: "Output Plug", value: "DC plug: 5.5 x 2.1 x 11.5 mm (0.2 x 0.08 x 0.5\") DC cable: UL11353 16AWG 1.5 m (4.9 ft)" },
          { label: "Supported Voltage Range", value: "Input: 100–240V AC, Output: 54V DC" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
        ],
        productLink: "/products/mounting-kit-usw-pro-max-16"
      },
    ]
  },
{
    id: "USW-Ultra-60W(52W)",
    name: "Ultra 60W",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switching/43.uswultra60w/1.p-utama-uswultra60w.jpg",
    shortDescription:
      "A compact, Layer 2, 8-port GbE PoE switch with versatile mounting options.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-ULTRA-60W-52W-",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/43.uswultra60w/1.p-utama-uswultra60w.jpg",
      "/images/switching/43.uswultra60w/2.p-dimensi-uswultra60w.jpg",
      "/images/switching/43.uswultra60w/3.p-spec-uswultra60w.jpg",
      "/images/switching/43.uswultra60w/4.p-development-uswultra60w.jpg",
      "/images/switching/43.uswultra60w/p-itb-uswultra60w.jpg",
      "/images/switching/43.uswultra60w/p-mkt0-uswultra60w.jpg",
      "/images/switching/43.uswultra60w/p-mkt1-uswultra60w.jpg",
      "/images/switching/43.uswultra60w/p-mkt2-uswultra60w.jpg",
      "/images/switching/43.uswultra60w/p-mkt3-uswultra60w.jpg",
      "/images/switching/43.uswultra60w/p-ov1-uswultra60w.png",
      "/images/switching/43.uswultra60w/p-ov2-uswultra60w.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/43.uswultra60w/p-ov1-uswultra60w.png",
      "/images/switching/43.uswultra60w/p-ov2-uswultra60w.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "8-port GbE PoE switch with versatile mounting options",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "203 x 76 x 33 mm (8 x 3 x 1.3\")" },
          { label: "Port Layout 1 GbE RJ45", value: "8 (7 PoE+; 1 PoE++ input) (1G/100M/10M)" },
          { label: "Max. PoE Output", value: "Up to PoE+" },
          { label: "Total PoE Availability", value: "PoE++ input: 42W, PoE+ input: 16W, 60W PoE adapter input: 42W, 60W AC adapter input: 52W, 210W AC adapter input: 202W"},
          { label: "Form Factor", value: "Compact desktop, wall, magnetic"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "16 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "8 Gbps" },
          { label: "Forwarding Rate", value: "12 Mpps" },
          { label: "Supported VLANs", value: "256" },
          { label: "MAC Address Table Size", value: "4.000" },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports PoE+", value: "7"},
         { label: "PoE Ports PoE++", value: "1"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "30W"},
         { label: "Max. Power Consumption", value: "9W (Excluding PoE Output) with PoE input, 8W (Excluding PoE Output) with adapter input, 210W (Including PoE Output) with 210W AC"},
         { label: "Power Method", value: "(1) AC/DC adapter (Included) (1) PoE++"},
         { label: "Power Input Method", value: "DC Input PoE"},
         { label: "Power Supply", value: "AC/DC, internal, 60W"},
         { label: "Supported Voltage Range", value: "50-57V DC/PoE"},
         { label: "Management", value: "Ethernet"},
         { label: "Heat Dissipation", value: "15 BTU/hr (Excluding PoE Output)"},
         { label: "Weight (Device/Wall Mount/Adapter)", value: "320 g / 45 g / 330 g"},
         { label: "Enclosure Material", value: "Polycarbonate"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "Ambient Operating Temperature", value: "PoE++ input: -30 to 60° C (-22 to 140° F) 60W AC adapter input: -20 to 60° C (-4 to 140° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 06367-24-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 8.0.7 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image:"/images/switching/43.uswultra60w/p-itb-uswultra60w.jpg",
 },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "AC Adapter 210W",
        image: "/images/dcs-box.png",
        price: 299,
        description: "An AC power adapter delivers 210W at 54V DC for a PoE switch",
        specs: [
          "Wall-mountable",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "190 x 86 x 26 mm (7.5 x 3.4 x 1\")" },
          { label: "Weight", value: "1.2 kg (2.6 lb)" },
          { label: "AC Connector", value: "C14 INLET (input)" },
          { label: "Output Plug", value: "DC plug: 5.5 x 2.1 x 11.5 mm (0.2 x 0.08 x 0.5\") DC cable: UL11353 16AWG 1.5 m (4.9 ft)" },
          { label: "Supported Voltage Range", value: "Input: 100–240V AC, Output: 54V DC" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing" },
        ],
        productLink: "/products/mounting-kit-usw-pro-max-16"
      },
    ]
  },
{
    id: "USW-Ultra(42W)",
    name: "Ultra",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switching/44.uswultra/1.p-utama-uswultra.jpg",
    shortDescription:
      "A compact, Layer 2, 8-port GbE PoE switch with versatile mounting options.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-ULTRA-42W-",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/44.uswultra/1.p-utama-uswultra.jpg",
      "/images/switching/44.uswultra/2.p-dimensi-uswultra.jpg",
      "/images/switching/44.uswultra/3.p-spec-uswultra.jpg",
      "/images/switching/44.uswultra/4.p-development-uswultra.jpg",
      "/images/switching/44.uswultra/p-itb-uswultra.jpg",
      "/images/switching/44.uswultra/p-mkt0-uswultra.jpg",
      "/images/switching/44.uswultra/p-mkt1-uswultra.jpg",
      "/images/switching/44.uswultra/p-mkt2-uswultra.jpg",
      "/images/switching/44.uswultra/p-mkt3-uswultra.jpg",
      "/images/switching/44.uswultra/p-ov1-uswultra.png",
      "/images/switching/44.uswultra/p-ov2-uswultra.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/44.uswultra/p-ov1-uswultra.png",
      "/images/switching/44.uswultra/p-ov2-uswultra.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "8-port GbE PoE switch with versatile mounting options",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "203 x 76 x 33 mm (8 x 3 x 1.3\")" },
          { label: "Port Layout 1 GbE RJ45", value: "8 (7 PoE+; 1 PoE++ input) (1G/100M/10M)" },
          { label: "Max. PoE Output", value: "Up to PoE+" },
          { label: "Total PoE Availability", value: "PoE++ input: 42W, PoE+ input: 16W, 60W PoE adapter input: 42W, 60W AC adapter input: 52W, 210W AC adapter input: 202W"},
          { label: "Form Factor", value: "Compact desktop, wall, magnetic"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "16 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "8 Gbps" },
          { label: "Forwarding Rate", value: "12 Mpps" },
          { label: "Supported VLANs", value: "256" },
          { label: "MAC Address Table Size", value: "4.000" },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports PoE+", value: "7"},
         { label: "PoE Ports PoE++", value: "1"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "30W"},
         { label: "Max. Power Consumption", value: "9W (Excluding PoE Output) with PoE input, 8W (Excluding PoE Output) with adapter input, 210W (Including PoE Output) with 210W AC"},
         { label: "Power Method", value: "(1) AC/DC adapter (Included) (1) PoE++"},
         { label: "Power Input Method", value: "DC Input PoE"},
         { label: "Power Supply", value: "AC/DC, internal, 60W"},
         { label: "Supported Voltage Range", value: "50-57V DC/PoE"},
         { label: "Management", value: "Ethernet"},
         { label: "Heat Dissipation", value: "15 BTU/hr (Excluding PoE Output)"},
         { label: "Weight (Device/Wall Mount)", value: "320 g / 45 g"},
         { label: "Enclosure Material", value: "Polycarbonate"},
         { label: "Mount Material", value: "Polycarbonate"},
         { label: "LCM Display", value: "1.3\" touchscreen"},
         { label: "Ambient Operating Temperature", value: "PoE++ input: -30 to 60° C (-22 to 140° F) 60W AC adapter input: -20 to 60° C (-4 to 140° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 06367-24-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 8.0.28 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image:"/images/switching/44.uswultra/p-itb-uswultra.jpg",
 },
    ],
    
  },
{
    id: "USW-Flex-2.5G-8-PoE(196W)",
    name: "Flex 2.5G PoE",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switching/45.uswflex2.5g8poe/1.p-utama-uswflex2.5g8poe.jpg",
    shortDescription:
      "Flexible, 8-port 2.5 GbE PoE++ switch with a 10 GbE RJ45/SFP+ combination uplink port that can be powered with PoE+++ or an AC power adapter.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-FLEX-2-5G-8-POE-196W-",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/45.uswflex2.5g8poe/1.p-utama-uswflex2.5g8poe.jpg",
      "/images/switching/45.uswflex2.5g8poe/2.p-dimensi-uswflex2.5g8poe.jpg",
      "/images/switching/45.uswflex2.5g8poe/3.p-spec-uswflex2.5g8poe.jpg",
      "/images/switching/45.uswflex2.5g8poe/4.p-development-uswflex2.5g8poe.jpg",
      "/images/switching/45.uswflex2.5g8poe/p-itb-uswflex2.5g8poe.jpg",
      "/images/switching/45.uswflex2.5g8poe/p-mkt0-uswflex2.5g8poe.jpg",
      "/images/switching/45.uswflex2.5g8poe/p-mkt1-uswflex2.5g8poe.jpg",
      "/images/switching/45.uswflex2.5g8poe/p-mkt2-uswflex2.5g8poe.jpg",
      "/images/switching/45.uswflex2.5g8poe/p-mkt3-uswflex2.5g8poe.jpg",
      "/images/switching/45.uswflex2.5g8poe/p-ov1-uswflex2.5g8poe.png",
      "/images/switching/45.uswflex2.5g8poe/p-ov2-uswflex2.5g8poe.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/45.uswflex2.5g8poe/p-ov1-uswflex2.5g8poe.png",
      "/images/switching/45.uswflex2.5g8poe/p-ov2-uswflex2.5g8poe.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "5 GbE PoE++ switch with a 10 GbE RJ45/SFP+ combination uplink port that can be powered with PoE+++ or an AC power adapter",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "212.9 x 99.4 x 33.5 mm (8.4 x 3.9 x 1.3\")" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (PoE+++) (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10 GbE RJ45", value: "1 (All PoE++) (10G/5G/2.5G/1G/100M)" },
          { label: "Port Layout 10GSFP+", value: "1 (10G/1G)" },
          { label: "Max. PoE Output", value: "Up to PoE+" },
          { label: "Total PoE Availability", value: "PoE+++ input: 76W, PoE++ input: 46W, PoE+ input: 16W, 210W AC adapter input: 196W"},
          { label: "Form Factor", value: "Compact desktop, wall, DIN, magnetic"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "60 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "30 Gbps" },
          { label: "Forwarding Rate", value: "45 Mpps" },
          { label: "Supported VLANs", value: "256" },
          { label: "MAC Address Table Size", value: "4.000" },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports PoE++", value: "8"},
         { label: "Max. PoE Wattage per Port by PSE, PoE", value: "15.4W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE+", value: "32W"},
         { label: "Max. PoE Wattage per Port by PSE, PoE++", value: "64W"},
         { label: "Max. Power Consumption", value: "14W (Excluding PoE output) with PoE input, 17W (Excluding PoE output) with AC adapter input, 210W (Including PoE Output)"},
         { label: "Power Method", value: "(1) AC/DC adapter (Excluded) (1) PoE+++"},
         { label: "Power Input Method", value: "DC Input PoE"},
         { label: "Power Supply", value: "AC/DC, internal, 60W"},
         { label: "Supported Voltage Range", value: "50-57V DC/PoE"},
         { label: "Management", value: "Ethernet"},
         { label: "Weight (Device/Wall Mount)", value: "567 g (20 oz)"},
         { label: "Enclosure Material", value: "Polycarbonate"},
         { label: "Mount Material", value: "Polycarbonate"},
         { label: "Ambient Operating Temperature", value: "-20 to 45° C (-4 to 113° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 9.0.114 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image:"/images/switching/45.uswflex2.5g8poe/p-itb-uswflex2.5g8poe.jpg",
 },
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "10G PoE+++ Adapter (90W)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "An adapter that can power UniFi PoE+++ devices, reduce dependency on PoE switch power, and provide a Multi-Gigabit LAN connection.",
        specs: [
          "Delivers up to 90W of PoE+++",
          "Surge, peak pulse, and overcurrent protection",
          "Contains RJ45 data input, AC cable with earth ground, and PoE+++ output",
          "LED indicator for status monitoring",
          "Supports wall mount, DIN rail and floating mount",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "164.5 x 71 x 42 mm (6.5 x 2.8 x 1.7\")" },
          { label: "Weight", value: "372 g (13.1 oz)" },
          { label: "Output Voltage", value: "54V DC @ 1.67A" },
          { label: "Rated Voltage", value: "100–240V AC at 50/60Hz" },
          { label: "Gigabit LAN Port", value: "✓" },
          { label: "Switching Frequency", value: "65 kHz" },
          { label: "Max. PoE+ Wattage per Port by PSE", value: "90W" },
          { label: "Max. Surge Discharge", value: "1500A (8/20 μs) power" },
          { label: "Peak Pulse Current", value: "36A (10/1000 μs) data" },
          { label: "Ambient Storage Temperature", value: "30 to 70°C (-22 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "mm" },
          { label: "Certifications", value: "CE, FCC, IC, UL, UKCA, KC, CCC, RoHS" },
        ],
        productLink: "/products/mounting-kit-usw-flex-2.5g-8-poe(196w)"
      },
    ]
  },
{
    id: "USW-Flex-2.5G-8",
    name: "Flex 2.5G",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switching/46.uswflex2.5g8/1.p-utama-uswflex2.5g8.jpg",
    shortDescription:
      "Flexible, 8-port 2.5 GbE switch with a 10 GbE RJ45/SFP+ combination uplink port that can be powered with a USB-C or PoE+ adapter.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-FLEX-2-5G-8",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/46.uswflex2.5g8/1.p-utama-uswflex2.5g8.jpg",
      "/images/switching/46.uswflex2.5g8/2.p-dimensi-uswflex2.5g8.jpg",
      "/images/switching/46.uswflex2.5g8/3.p-spec-uswflex2.5g8.jpg",
      "/images/switching/46.uswflex2.5g8/4.p-development-uswflex2.5g8.jpg",
      "/images/switching/46.uswflex2.5g8/p-itb-uswflex2.5g8.jpg",
      "/images/switching/46.uswflex2.5g8/p-mkt0-uswflex2.5g8.jpg",
      "/images/switching/46.uswflex2.5g8/p-mkt1-uswflex2.5g8.jpg",
      "/images/switching/46.uswflex2.5g8/p-mkt2-uswflex2.5g8.jpg",
      "/images/switching/46.uswflex2.5g8/p-mkt3-uswflex2.5g8.jpg",
      "/images/switching/46.uswflex2.5g8/p-ov1-uswflex2.5g8.png",
      "/images/switching/46.uswflex2.5g8/p-ov2-uswflex2.5g8.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/46.uswflex2.5g8/p-ov1-uswflex2.5g8.png",
      "/images/switching/46.uswflex2.5g8/p-ov2-uswflex2.5g8.png",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "5 GbE switch with a 10 GbE RJ45/SFP+ combination uplink port that can be powered with a USB-C or PoE+ adapter",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "212.9 x 76 x 33.5 mm (8.4 x 3 x 1.3\")" },
          { label: "Port Layout 2.5 GbE RJ45", value: "8 (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10 GbE RJ45", value: "1 (10G/5G/2.5G/1G/100M)" },
          { label: "Port Layout 10GSFP+", value: "1 (10G/1G)" },
          { label: "Form Factor", value: "Compact desktop, wall, DIN, magnetic"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "60 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "30 Gbps" },
          { label: "Forwarding Rate", value: "45 Mpps" },
          { label: "Supported VLANs", value: "256" },
          { label: "MAC Address Table Size", value: "4.000" },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "Max. Power Consumption", value: "14W (Excluding PoE output) with PoE input, 14W (Excluding PoE output) with AC adapter input, 210W (Including PoE Output)"},
         { label: "Power Method", value: "(1)USB Type-C, 5V DC, 3A, (1) PoE+"},
         { label: "Power Input Method", value: "USB Input PoE"},
         { label: "Power Supply", value: "AC/DC, External, 15W"},
         { label: "Supported Voltage Range", value: "4.8—5.2V DC/USB 44V—57V PoE"},
         { label: "Management", value: "Ethernet"},
         { label: "Weight (Device/Wall Mount)", value: "395 g (0.87 oz)"},
         { label: "Enclosure Material", value: "Polycarbonate"},
         { label: "Mount Material", value: "Polycarbonate"},
         { label: "Ambient Operating Temperature", value: "-20 to 45° C (-4 to 113° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 9.0.114 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image:"/images/switching/46.uswflex2.5g8/p-itb-uswflex2.5g8.jpg",
 },
    ],
  },
{
    id: "USW-Flex-2.5G-5",
    name: "Flex Mini 2.5G",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switching/47.uswflex2.5g5/1.p-utama-uswflex2.5g5.jpg",
    shortDescription:
      "Compact, 5-port 2.5G switch that can be powered with PoE or a USB-C adapter.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-FLEX-2-5G-5",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/47.uswflex2.5g5/1.p-utama-uswflex2.5g5.jpg",
      "/images/switching/47.uswflex2.5g5/2.p-spec-uswflex2.5g5.jpg",
      "/images/switching/47.uswflex2.5g5/3.p-development-uswflex2.5g5.jpg",
      "/images/switching/47.uswflex2.5g5/p-itb-uswflex2.5g5.jpg",
      "/images/switching/47.uswflex2.5g5/p-mkt0-uswflex2.5g5.jpg",
      "/images/switching/47.uswflex2.5g5/p-mkt1-uswflex2.5g5.jpg",
      "/images/switching/47.uswflex2.5g5/p-mkt2-uswflex2.5g5.jpg",
      "/images/switching/47.uswflex2.5g5/p-mkt3-uswflex2.5g5.jpg",
      "/images/switching/47.uswflex2.5g5/p-ov1-uswflex2.5g5.png",
      "/images/switching/47.uswflex2.5g5/p-ov2-uswflex2.5g5.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/47.uswflex2.5g5/p-ov1-uswflex2.5g5.png",
      "/images/switching/47.uswflex2.5g5/p-ov2-uswflex2.5g5.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "5G switch that can be powered with PoE or a USB-C adapter",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "117.1 x 90 x 21.2 mm (4.6 x 3.5 x 0.8\")" },
          { label: "Port Layout 2.5 GbE RJ45", value: "5 (2.5G/1G/100M/10M)" },
          { label: "Form Factor", value: "Compact desktop"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "25 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "12.5 Gbps" },
          { label: "Forwarding Rate", value: "19 Mpps" },
          { label: "Supported VLANs", value: "256" },
          { label: "MAC Address Table Size", value: "4.000" },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },        
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "Max. Power Consumption", value: "5W (AC/DC input) 6.4W (PoE input)"},
         { label: "Power Method", value: "(1)USB Type-C, 5V DC, 1A, (1) PoE"},
         { label: "Power Input Method", value: "USB Input PoE"},
         { label: "Power Supply", value: "AC/DC, External, 5W"},
         { label: "Supported Voltage Range", value: "4.8—5.2V DC/USB 44V—57V PoE"},
         { label: "Management", value: "Ethernet"},
         { label: "Weight", value: "206 g (7.3 oz)"},
         { label: "Enclosure Material", value: "Polycarbonate"},
         { label: "Ambient Operating Temperature", value: "-20 to 45° C (-4 to 113° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 8.6.9 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image:"/images/switching/47.uswflex2.5g5/p-itb-uswflex2.5g5.jpg"},
    ]
    
  },
{
    id: "USW-Flex-Mini",
    name: "Flex Mini",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switching/48.uswflexmini/1.p-utama-uswflexmini.jpg",
    shortDescription:
      "A compact, 5-port, Layer 2 switch that can be powered with PoE or a 5V USB-C adapter.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-FLEX-MINI",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/48.uswflexmini/1.p-utama-uswflexmini.jpg",
      "/images/switching/48.uswflexmini/2.p-dimensi-uswflexmini.jpg",
      "/images/switching/48.uswflexmini/3.p-spec-uswflexmini.jpg",
      "/images/switching/48.uswflexmini/4.p-development-uswflexmini.jpg",
      "/images/switching/48.uswflexmini/p-itb-uswflexmini.jpg",
      "/images/switching/48.uswflexmini/p-mkt0-uswflexmini.jpg",
      "/images/switching/48.uswflexmini/p-mkt1-uswflexmini.jpg",
      "/images/switching/48.uswflexmini/p-mkt2-uswflexmini.jpg",
      "/images/switching/48.uswflexmini/p-mkt3-uswflexmini.jpg",
      "/images/switching/48.uswflexmini/p-ov1-uswflexmini.png",
      "/images/switching/48.uswflexmini/p-ov2-uswflexmini.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/48.uswflexmini/p-ov1-uswflexmini.png",
      "/images/switching/48.uswflexmini/p-ov2-uswflexmini.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Layer 2 switch that can be powered with PoE or a 5V USB-C adapter",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "107 x 70 x 21 mm (4.2 x 2.8 x 0.8\")" },
          { label: "Port Layout 1 GbE RJ45", value: "5 (1G/100M/10M)" },
          { label: "Form Factor", value: "Compact desktop"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "10 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "5 Gbps" },
          { label: "Forwarding Rate", value: "7 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "2.000" },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "Max. Power Consumption", value: "2.5W"},
         { label: "Power Method", value: "(1) USB Type-C, 5V DC, 1A, (1) PoE"},
         { label: "Power Input Method", value: "USB Input PoE"},
         { label: "Power Supply", value: "AC/DC, External, 5W"},
         { label: "Supported Voltage Range", value: "4.8—5.2V DC/USB 44V—57V PoE"},
         { label: "Management", value: "Ethernet"},
         { label: "Heat Dissipation", value: "6.8 BTU/hr"},
         { label: "Weight", value: "150 g (5.3 oz)"},
         { label: "Enclosure Material", value: "Polycarbonate"},
         { label: "Mount Material", value: "Polycarbonate"},
         { label: "ESD Protection", value: "Air: ± 16kV, contact: ± 12kV"},
         { label: "Ambient Operating Temperature", value: "-5 to 45° C (23 to 113° F)"},
         { label: "Ambient Operating Humidity", value: "10 to 90% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 14501-20-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 5.12.5 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image:"/images/switching/48.uswflexmini/p-itb-uswflexmini.jpg"},
              ]
  },
{
    id: "USW-Flex(46W)",
    name: "Flex",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switching/49.uswflex/1.p-utama-uswflex.jpg",
    shortDescription:
      "Flexible 5-port, Layer 2 PoE switch for indoor and outdoor use, that can be powered with PoE++.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-FLEX-46W-",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/49.uswflex/1.p-utama-uswflex.jpg",
      "/images/switching/49.uswflex/2.p-dimensi-uswflex.jpg",
      "/images/switching/49.uswflex/3.p-spec-uswflex.jpg",
      "/images/switching/49.uswflex/4.p-development-uswflex.jpg",
      "/images/switching/49.uswflex/p-itb-uswflex.jpg",
      "/images/switching/49.uswflex/p-mkt0-uswflex.jpg",
      "/images/switching/49.uswflex/p-mkt1-uswflex.jpg",
      "/images/switching/49.uswflex/p-mkt2-uswflex.jpg",
      "/images/switching/49.uswflex/p-mkt3-uswflex.jpg",
      "/images/switching/49.uswflex/p-mkt4-uswflex.jpg",
      "/images/switching/49.uswflex/p-mkt5-uswflex.jpg",
      "/images/switching/49.uswflex/p-ov1-uswflex.png",
      "/images/switching/49.uswflex/p-ov2-uswflex.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/49.uswflex/p-ov1-uswflex.png",
      "/images/switching/49.uswflex/p-ov2-uswflex.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Flexible 5-port",
      "Layer 2 PoE switch for indoor and outdoor use",
      "that can be powered with PoE++",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "122.5 x 107.1 x 28 mm (4.8 x 4.2 x 1.1\")" },
          { label: "Port Layout 1 GbE RJ45", value: "5 (4 PoE+; 1 PoE++) (1G/100M/10M)" },
          { label: "Max. PoE Output ", value: "Up to PoE+"},
          { label: "Total PoE Availability", value: "PoE++/60W PoE adapter input: 46W, PoE+ input: 20W, PoE input: 8W"},
          { label: "Form Factor", value: "Compact desktop, Wall, Pole"},
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "10 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "5 Gbps" },
          { label: "Forwarding Rate", value: "7 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "2.000" },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "PoE Ports PoE+", value: "4"},
         { label: "PoE Ports PoE++", value: "1"},
         { label: "Max. PoE Wattage per Portsby PSE, PoE+", value: "25W"},
         { label: "Max. Power Consumption", value: "5W (Excluding PoE Output), 51W (Including PoE Output)"},
         { label: "Power Method", value: "PoE++"},
         { label: "Power Input Method", value: "PoE"},
         { label: "Supported Voltage Range", value: "50–57V PoE"},
         { label: "Management", value: "Ethernet"},
         { label: "Heat Dissipation", value: "17.1 BTU/hr (Excluding PoE Output)"},
         { label: "Outdoor Ready", value: "✓", isCheck: true },
         { label: "Weight", value: "230 g (8.1 oz)"},
         { label: "Enclosure Material", value: "Polycarbonate"},
         { label: "Mount Material", value: "Polycarbonate"},
         { label: "ESD Protection", value: "Air/contact: ± 16kV"},
         { label: "Ambient Operating Temperature", value: "46W PoE output: -40 to 55° C (-40 to 131° F), 25W PoE output: -40 to 65° C (-40 to 149° F)"},
         { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 14502-20-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 5.10.3 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image:"/images/switching/49.uswflex/p-itb-uswflex.jpg",
},
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "SFP to RJ45 Adapter",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP to RJ45 transceiver that supports 1G connections up to 100 m.",
        specs: [
          "Supported data rates: 1000 / 100 / 10 Mbps",
          "Compatible with SFP interfaces",
          "Supports connections up to 100 m*",
          "*Ethernet cable is not included"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "RJ45" },
          { label: "Supported Media", value: "Copper" },
          { label: "Supported Data Rate", value: "10 / 100 / 1000 Mbps" },
          { label: "Supported Cable Distance", value: "100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "1.2 W" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  },
{
    id: "USW-Flex-Utility",
    name: "Flex Utility",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switching/50.uswflexutility/1.p-utama-flexutility.jpg",
    shortDescription:
      "The Switch Flex Utility is an outdoor weatherproof enclosure designed for use with the Switch Flex.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-FLEX-UTILITY",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/50.uswflexutility/1.p-utama-flexutility.jpg",
      "/images/switching/50.uswflexutility/2.p-development-flexutility.jpg",
      "/images/switching/50.uswflexutility/p-itb-flexutility.jpg",
      "/images/switching/50.uswflexutility/p-mkt0-flexutility.jpg",
      "/images/switching/50.uswflexutility/p-mkt1-flexutility.jpg",
      "/images/switching/50.uswflexutility/p-mkt2-flexutility.jpg",
      "/images/switching/50.uswflexutility/p-mkt3-flexutility.jpg",
      "/images/switching/50.uswflexutility/p-mkt4-flexutility.jpg",
      "/images/switching/50.uswflexutility/p-mkt5-flexutility.jpg",
      "/images/switching/50.uswflexutility/p-mkt6-flexutility.jpg",
      "/images/switching/50.uswflexutility/p-ov1-flexutility.png",
      "/images/switching/50.uswflexutility/p-ov2-flexutility.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/50.uswflexutility/p-ov1-flexutility.png",
      "/images/switching/50.uswflexutility/p-ov2-flexutility.png",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "The Switch Flex Utility is an outdoor weatherproof enclosure designed for use with the Switch Flex",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
            {
        title: "Overview",
        items: [
          { label: "Dimensions Enclosure", value: "249 x 218 x 60 mm (9.8 x 8.6 x 2.4\")" },
          { label: "Dimensions Adapter", value: "118.5 x 63 x 34.7 mm (4.7 x 2.5 x 1.4\")" },
          { label: "Weight Enclosure / Adapter", value: "740 g (1.6 lb) / 206 g (7.3 oz)" },
          { label: "Output Voltage ", value: "54V, 1.11A" },
          { label: "Rated Voltage", value: "100–240V AC" },
          { label: "4 Pair Powering", value: "Pins 1, 2, 4, 5 (+) and 3, 6, 7, 8 (-)" },
          { label: "Input Current ", value: "1.5A Max" },
          { label: "Efficiency", value: "86+%" },
          { label: "Output Ripple ", value: "200mVpp" },
          { label: "Line Regulation", value: "≤1%" },
          { label: "Load Regulation", value: "≤3%" },
          { label: "Power Supply", value: "AC/DC" },
          { label: "Surge Protection ", value: "4kV difference and Common mode" },
          { label: "Ambient Storage Temperature", value: "-30 to 70° C (-22 to 158° F)" },
          { label: "Ambient Operating Temperature", value: "-20 to 60° C (-4 to 140° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 90%, noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image:"/images/switching/50.uswflexutility/p-itb-flexutility.jpg"},
    ],
   
  },
{
    id: "UACC-Flex-Utility-Pro",
    name: "Flex Utility Pro",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switching/51.uaccflexutilitypro/1.p-utama-uaccflexutilitypro.jpg",
    shortDescription:
      "A universal outdoor weatherproof enclosure. Protect your networking gear in any environment with this versatile, durable enclosure, designed for both wall and pole mounting. The enclosure features ample internal space to house a power adapter or PoE injector.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "UACC-FLEX-UTILITY-PRO",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/51.uaccflexutilitypro/1.p-utama-uaccflexutilitypro.jpg",
      "/images/switching/51.uaccflexutilitypro/2.p-dimensi-uaccflexutilitypro.jpg",
      "/images/switching/51.uaccflexutilitypro/3.p-spec-uaccflexutilitypro.jpg",
      "/images/switching/51.uaccflexutilitypro/4.p-development-uaccflexutilitypro.jpg",
      "/images/switching/51.uaccflexutilitypro/p-itb-uaccflexutilitypro.jpg",
      "/images/switching/51.uaccflexutilitypro/p-mkt0-uaccflexutilitypro.jpg",
      "/images/switching/51.uaccflexutilitypro/p-mkt1-uaccflexutilitypro.jpg",
      "/images/switching/51.uaccflexutilitypro/p-mkt2-uaccflexutilitypro.jpg",
      "/images/switching/51.uaccflexutilitypro/p-mkt3-uaccflexutilitypro.jpg",
      "/images/switching/51.uaccflexutilitypro/p-mkt4-uaccflexutilitypro.jpg",
      "/images/switching/51.uaccflexutilitypro/p-mkt5-uaccflexutilitypro.jpg",
      "/images/switching/51.uaccflexutilitypro/p-mkt6-uaccflexutilitypro.jpg",
      "/images/switching/51.uaccflexutilitypro/p-mkt7-uaccflexutilitypro.jpg",
      "/images/switching/51.uaccflexutilitypro/p-ov1-uaccflexutilitypro.png",
      "/images/switching/51.uaccflexutilitypro/p-ov2-uaccflexutilitypro.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/51.uaccflexutilitypro/p-ov1-uaccflexutilitypro.png",
      "/images/switching/51.uaccflexutilitypro/p-ov2-uaccflexutilitypro.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "A universal outdoor weatherproof enclosure",
      "Protect your networking gear in any environment with this versatile",
      "durable enclosure",
      "designed for both wall and pole mounting"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "350 x 220 x 89 mm (13.8 x 8.7 x 3.5\")" },
          { label: "Weight", value: "1.6 kg" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Weatherproofing", value: "IPX6" }
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image:"/images/switching/51.uaccflexutilitypro/p-itb-uaccflexutilitypro.jpg",
},
    ],
  },
{
    id: "USW-Flex-XG",
    name: "Flex 10 GbE",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switching/52.uswflexxg/1.p-utama-uswflexxg.jpg",
    shortDescription:
      "A Compact, 5-Port, Layer 2 Switch that supports 10 GbE speeds and can be powered with PoE or a 5V USB-C adapter.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,

    // SKU produk
    sku: "USW-FLEX-XG",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/switching/52.uswflexxg/1.p-utama-uswflexxg.jpg",
      "/images/switching/52.uswflexxg/2.p-dimensi-uswflexxg.jpg",
      "/images/switching/52.uswflexxg/3.p-spec-uswflexxg.jpg",
      "/images/switching/52.uswflexxg/4.p-development-uswflexxg.jpg",
      "/images/switching/52.uswflexxg/p-itb-uswflexxg.jpg",
      "/images/switching/52.uswflexxg/p-mkt0-uswflexxg.jpg",
      "/images/switching/52.uswflexxg/p-mkt1-uswflexxg.jpg",
      "/images/switching/52.uswflexxg/p-mkt2-uswflexxg.jpg",
      "/images/switching/52.uswflexxg/p-mkt3-uswflexxg.jpg",
      "/images/switching/52.uswflexxg/p-mkt4-uswflexxg.jpg",
      "/images/switching/52.uswflexxg/p-ov1-uswflexxg.png",
      "/images/switching/52.uswflexxg/p-ov2-uswflexxg.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/switching/52.uswflexxg/p-ov1-uswflexxg.png",
      "/images/switching/52.uswflexxg/p-ov2-uswflexxg.png",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Layer 2 Switch that supports 10 GbE speeds and can be powered with PoE or a 5V USB-C adapter",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "135 x 185 x 32 mm (5.3 x 7.3 x 1.3\")" },
          { label: "Port Layout 1 GbE RJ45", value: "1 (1G/100M/10M)" },
          { label: "Port Layout 10 GbE RJ45", value: "4" },
          { label: "Form Factor", value: "Compact desktop, wall" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Switching Capacity", value: "82 Gbps" },
          { label: "Total Non-Blocking Throughput", value: "41 Gbps" },
          { label: "Forwarding Rate", value: "61 Mpps" },
          { label: "Supported VLANs", value: "1.000" },
          { label: "MAC Address Table Size", value: "16.000" },
          { label: "Packet Buffer Size", value: "1.5 MB" },
          { label: "Access Lists IPv4", value: "12" },
          { label: "Access Lists MAC", value: "10" },
        ]
      },
      {
        title: "Layer 2 Features",
        items: [
         { label: "LACP Port Aggregation", value: "✓", isCheck: true },
         { label: "STP & RSTP", value: "✓", isCheck: true },
         { label: "Advanced IGMP Configuration (Querier, Fast Leave, Router Port)", value: "✓", isCheck: true },
         { label: "IGMP Snooping", value: "✓", isCheck: true },
         { label: "802.1X Control", value: "✓", isCheck: true },
         { label: "MAC-Based ACLs & Device Isolation", value: "✓", isCheck: true },
         { label: "DHCP Snooping & Guarding", value: "✓", isCheck: true },
         { label: "Egress Rate Limit", value: "✓", isCheck: true },
         { label: "Flow control", value: "✓", isCheck: true },
         { label: "Storm control", value: "✓", isCheck: true },
         { label: "Multicast & Broadcast Rate Limiting", value: "✓", isCheck: true },
         { label: "MAC Address Blocking", value: "✓", isCheck: true },
         { label: "IP-Based ACLs & Network Isolation", value: "✓", isCheck: true },
         { label: "MAC-Based Port Restriction", value: "✓", isCheck: true },
         { label: "Port Isolation", value: "✓", isCheck: true },
         { label: "Port Mirroring", value: "✓", isCheck: true },
         { label: "Jumbo Frames", value: "✓", isCheck: true },
         { label: "LLDP-MED", value: "✓", isCheck: true },
         { label: "Voice VLAN", value: "✓", isCheck: true },
         { label: "Loop Protection", value: "✓", isCheck: true },
         { label: "Virtual Network Override", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Hardware",
        items: [
         { label: "Max. Power Consumption", value: "25W"},
         { label: "Power Method", value: "(1) PoE+, (1) USB Type-C, 5V DC, 5A"},
         { label: "Power Input Method", value: "USB input PoE"},
         { label: "Power Supply", value: "AC/DC, external, 25W"},
         { label: "Supported Voltage Range", value: "4.8—5.2V DC/USB 44V—57V PoE"},
         { label: "Management", value: "Ethernet"},
         { label: "Heat Dissipation", value: "85.3 BTU/hr"},
         { label: "Weight", value: "1.2 kg (2.7 lb)"},
         { label: "Enclosure Material", value: "Polycarbonate"},
         { label: "ESD Protection", value: "Air/contact: ± 16kV"},
         { label: "Ambient Operating Temperature", value: "46W PoE output: -40 to 55° C (-40 to 131° F), 25W PoE output: -40 to 65° C (-40 to 149° F)"},
         { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing"},
         { label: "NDAA Compliant", value: "✓", isCheck: true },
         { label: "Certifications", value: "CE, FCC, IC, Anatel: 14502-20-08356"},
        ]
      },
      {
        title: "Software",
        items: [
         { label: "Application Req. UniFi Network", value: "Version 6.1.67 and later"},
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image:"/images/switching/52.uswflexxg/p-itb-uswflexxg.jpg",
},
    ],
    
    // Addon/aksesori yang tersedia untuk produk ini
    addons: [
      {
        id: 1,
        name: "SFP to RJ45 Adapter",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP to RJ45 transceiver that supports 1G connections up to 100 m.",
        specs: [
          "Supported data rates: 1000 / 100 / 10 Mbps",
          "Compatible with SFP interfaces",
          "Supports connections up to 100 m*",
          "*Ethernet cable is not included"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "RJ45" },
          { label: "Supported Media", value: "Copper" },
          { label: "Supported Data Rate", value: "10 / 100 / 1000 Mbps" },
          { label: "Supported Cable Distance", value: "100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "1.2 W" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
        ],
        productLink: "/products/sfp-module-10g"
      },
    ]
  }
];
