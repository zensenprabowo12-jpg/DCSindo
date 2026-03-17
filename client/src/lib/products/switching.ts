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
          { label: "Product Name", value: "Pro Max 16" },
          { label: "Model", value: "USW-PRO-MAX-16" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
      { name: "Device", image: "/images/switching/22.uswpromax16/p-itb-uswpromax16.jpg", },
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
        productLink: "/products/mounting-kit-usw-pro-max-16"
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
        productLink: "/products/power-cable-usw-pro-max-16"
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
          { label: "Product Name", value: "Pro 48 PoE" },
          { label: "Model", value: "USW-PRO-48-POE-600W-" },
          { label: "Category", value: "Switching" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
      { name: "Device", image: "/images/switching/23.uswpro48poe/p-itb-uswpro48poe.jpg", },
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
        productLink: "/products/mounting-kit-usw-pro-48-poe(600w)"
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
        productLink: "/products/power-cable-usw-pro-48-poe(600w)"
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
          { label: "Product Name", value: "Pro 24 PoE" },
          { label: "Model", value: "USW-PRO-24-POE(400W)" },
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
      { name: "Device", image: "/images/switching/24.uswpro24poe/p-itb-uswpro24poe.jpg", },
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
          { label: "Product Name", value: "Pro 48" },
          { label: "Model", value: "USW-PRO-48" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
      { name: "Device", image: "/images/switching/25.uswpro48/p-itb-uswpro48.jpg", },
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
        productLink: "/products/mounting-kit-usw-pro-48"
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
        productLink: "/products/power-cable-usw-pro-48"
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
          { label: "Product Name", value: "Pro 24" },
          { label: "Model", value: "USW-PRO-24" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
      { name: "Device", image: "/images/switching/26.uswpro24/p-itb-uswpro24.jpg", },
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
        productLink: "/products/mounting-kit-usw-pro-24"
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
        productLink: "/products/power-cable-usw-pro-24"
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
          { label: "Product Name", value: "Enterprise 48 PoE (Vintage)" },
          { label: "Model", value: "USW-ENTERPRISE-48-POE-720W-" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
      { name: "Device", image: "/images/switching/27.uswe48poe/p-itb-uswe48poe.jpg", },
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
        productLink: "/products/mounting-kit-usw-enterprise-48-poe(720w)"
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
        productLink: "/products/power-cable-usw-enterprise-48-poe(720w)"
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
          { label: "Product Name", value: "Enterprise 24 PoE (Vintage)" },
          { label: "Model", value: "USW-ENTERPRISE-24-POE-400W-" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
      { name: "Device", image: "/images/switching/28.uswe24poe/p-itb-uswe24poe.jpg", },
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
        productLink: "/products/mounting-kit-usw-enterprise-24-poe(400w)"
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
        productLink: "/products/power-cable-usw-enterprise-24-poe(400w)"
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
          { label: "Product Name", value: "UPS PoE Switch" },
          { label: "Model", value: "USW-MISSION-CRITICAL--120W-" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
      { name: "Device", image: "/images/switching/29.uswmissioncritical/p-itb-uswmc.jpg", },
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
        productLink: "/products/mounting-kit-usw-mission-critical-(120w)"
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
        productLink: "/products/power-cable-usw-mission-critical-(120w)"
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
          { label: "Product Name", value: "Standard 48 PoE" },
          { label: "Model", value: "USW-48-POE-195W-" },
          { label: "Category", value: "Switching" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
      { name: "Device", image: "/images/switching/30.uswstd48poe/p-itb-uswstd48poe.jpg", },
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
        productLink: "/products/mounting-kit-usw-48-poe(195w)"
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
        productLink: "/products/power-cable-usw-48-poe(195w)"
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
          { label: "Product Name", value: "Standard 24 PoE" },
          { label: "Model", value: "USW-24-POE(95W)" },
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
      { name: "Device", image: "/images/switching/31.uswstd24poe/p-itb-uswstd24poe.jpg", },
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
          { label: "Product Name", value: "Standard 16 PoE" },
          { label: "Model", value: "USW-16-POE-42W-" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
      { name: "Device", image: "/images/switching/32.uswstd16poe/p-itb-uswstd16poe.jpg" },
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
        productLink: "/products/mounting-kit-usw-16-poe(42w)"
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
        productLink: "/products/power-cable-usw-16-poe(42w)"
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
          { label: "Product Name", value: "Standard 48" },
          { label: "Model", value: "USW-48" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
      { name: "Device", image:"/images/switching/33.uswstd48/p-itb-uswstd48.jpg", },

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
        productLink: "/products/mounting-kit-usw-48"
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
        productLink: "/products/power-cable-usw-48"
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
          { label: "Product Name", value: "Standard 24" },
          { label: "Model", value: "USW-24" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
      { name: "Device", image: "/images/switching/34.uswstd24/p-itb-uswstd24.jpg", },
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
        productLink: "/products/mounting-kit-usw-24"
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
        productLink: "/products/power-cable-usw-24"
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
    id: "USW-WAN",
    name: "WAN Switch",
    category: "Switching",
    subfilter: "WAN",
    image: "/images/switch.jpg",
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
          { label: "Product Name", value: "WAN Switch" },
          { label: "Model", value: "USW-WAN" },
          { label: "Category", value: "Switching" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
        productLink: "/products/mounting-kit-usw-wan"
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
        productLink: "/products/power-cable-usw-wan"
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
    id: "USW-WAN-RJ45",
    name: "WAN Switch RJ45",
    category: "Switching",
    subfilter: "WAN",
    image: "/images/switch.jpg",
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
      "/images/products/Product-WAN-Switch-RJ45.png",
      "/images/banners/dcs-overview-1.png",
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
          { label: "Product Name", value: "WAN Switch RJ45" },
          { label: "Model", value: "USW-WAN-RJ45" },
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
    id: "USW-Lite-16-PoE(45W)",
    name: "Lite 16 PoE",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switch.jpg",
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
          { label: "Product Name", value: "Lite 16 PoE" },
          { label: "Model", value: "USW-LITE-16-POE-45W-" },
          { label: "Category", value: "Switching" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
        productLink: "/products/mounting-kit-usw-lite-16-poe(45w)"
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
        productLink: "/products/power-cable-usw-lite-16-poe(45w)"
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
    id: "USW-Lite-8-PoE(52W)",
    name: "Lite 8 PoE",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switch.jpg",
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
      "/images/products/Product-Lite-8-PoE.png",
      "/images/banners/dcs-overview-1.png",
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
          { label: "Product Name", value: "Lite 8 PoE" },
          { label: "Model", value: "USW-LITE-8-POE(52W)" },
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
    id: "USW-Pro-XG-8-PoE(155W)",
    name: "Pro XG 8 PoE",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switch.jpg",
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
          { label: "Product Name", value: "Pro XG 8 PoE" },
          { label: "Model", value: "USW-PRO-XG-8-POE-155W-" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
        productLink: "/products/mounting-kit-usw-pro-xg-8-poe(155w)"
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
        productLink: "/products/power-cable-usw-pro-xg-8-poe(155w)"
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
    id: "USW-Enterprise-8-PoE(120W)",
    name: "Enterprise 8 PoE (vintage)",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switch.jpg",
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
          { label: "Product Name", value: "Enterprise 8 PoE (vintage)" },
          { label: "Model", value: "USW-ENTERPRISE-8-POE-120W-" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
        productLink: "/products/mounting-kit-usw-enterprise-8-poe(120w)"
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
        productLink: "/products/power-cable-usw-enterprise-8-poe(120w)"
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
    id: "USW-Pro-8-PoE(120W)",
    name: "Pro 8 PoE",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switch.jpg",
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
          { label: "Product Name", value: "Pro 8 PoE" },
          { label: "Model", value: "USW-PRO-8-POE-120W-" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
        productLink: "/products/mounting-kit-usw-pro-8-poe(120w)"
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
        productLink: "/products/power-cable-usw-pro-8-poe(120w)"
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
    id: "USW-Ultra-210W(202W)",
    name: "Ultra 210W",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switch.jpg",
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
          { label: "Product Name", value: "Ultra 210W" },
          { label: "Model", value: "USW-ULTRA-210W-202W-" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
        productLink: "/products/mounting-kit-usw-ultra-210w(202w)"
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
        productLink: "/products/power-cable-usw-ultra-210w(202w)"
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
    id: "USW-Ultra-60W(52W)",
    name: "Ultra 60W",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switch.jpg",
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
          { label: "Product Name", value: "Ultra 60W" },
          { label: "Model", value: "USW-ULTRA-60W-52W-" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
        productLink: "/products/mounting-kit-usw-ultra-60w(52w)"
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
        productLink: "/products/power-cable-usw-ultra-60w(52w)"
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
    id: "USW-Ultra(42W)",
    name: "Ultra",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switch.jpg",
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
          { label: "Product Name", value: "Ultra" },
          { label: "Model", value: "USW-ULTRA-42W-" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
        productLink: "/products/mounting-kit-usw-ultra(42w)"
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
        productLink: "/products/power-cable-usw-ultra(42w)"
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
    id: "USW-Flex-2.5G-8-PoE(196W)",
    name: "Flex 2.5G PoE",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switch.jpg",
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
          { label: "Product Name", value: "Flex 2.5G PoE" },
          { label: "Model", value: "USW-FLEX-2-5G-8-POE-196W-" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
        productLink: "/products/mounting-kit-usw-flex-2.5g-8-poe(196w)"
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
        productLink: "/products/power-cable-usw-flex-2.5g-8-poe(196w)"
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
    id: "USW-Flex-2.5G-8",
    name: "Flex 2.5G",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switch.jpg",
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
          { label: "Product Name", value: "Flex 2.5G" },
          { label: "Model", value: "USW-FLEX-2-5G-8" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
        productLink: "/products/mounting-kit-usw-flex-2.5g-8"
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
        productLink: "/products/power-cable-usw-flex-2.5g-8"
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
    id: "USW-Flex-2.5G-5",
    name: "Flex Mini 2.5G",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switch.jpg",
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
          { label: "Product Name", value: "Flex Mini 2.5G" },
          { label: "Model", value: "USW-FLEX-2-5G-5" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
        productLink: "/products/mounting-kit-usw-flex-2.5g-5"
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
        productLink: "/products/power-cable-usw-flex-2.5g-5"
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
    id: "USW-Flex-Mini",
    name: "Flex Mini",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switch.jpg",
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
          { label: "Product Name", value: "Flex Mini" },
          { label: "Model", value: "USW-FLEX-MINI" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
        productLink: "/products/mounting-kit-usw-flex-mini"
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
        productLink: "/products/power-cable-usw-flex-mini"
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
    id: "USW-Flex(46W)",
    name: "Flex",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switch.jpg",
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
          { label: "Product Name", value: "Flex" },
          { label: "Model", value: "USW-FLEX-46W-" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
        productLink: "/products/mounting-kit-usw-flex(46w)"
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
        productLink: "/products/power-cable-usw-flex(46w)"
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
    id: "USW-Flex-Utility",
    name: "Flex Utility",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switch.jpg",
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
          { label: "Product Name", value: "Flex Utility" },
          { label: "Model", value: "USW-FLEX-UTILITY" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
        productLink: "/products/mounting-kit-usw-flex-utility"
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
        productLink: "/products/power-cable-usw-flex-utility"
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
    id: "UACC-Flex-Utility-Pro",
    name: "Flex Utility Pro",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switch.jpg",
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
          { label: "Product Name", value: "Flex Utility Pro" },
          { label: "Model", value: "UACC-FLEX-UTILITY-PRO" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
        productLink: "/products/mounting-kit-uacc-flex-utility-pro"
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
        productLink: "/products/power-cable-uacc-flex-utility-pro"
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
    id: "USW-Flex-XG",
    name: "Flex 10 GbE",
    category: "Switching",
    subfilter: "Utility",
    image: "/images/switch.jpg",
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
          { label: "Product Name", value: "Flex 10 GbE" },
          { label: "Model", value: "USW-FLEX-XG" },
          { label: "Category", value: "UniFi Product" },
          { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
          { label: "PoE Budget", value: "400W" },
          { label: "Uplink", value: "2x 10G SFP+" },
          { label: "Layer", value: "Layer 3 Switching" }
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
        productLink: "/products/mounting-kit-usw-flex-xg"
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
        productLink: "/products/power-cable-usw-flex-xg"
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
