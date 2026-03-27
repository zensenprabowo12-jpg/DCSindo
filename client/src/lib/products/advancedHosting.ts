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

// Advanced Hosting Products
export const advancedHostingProducts: Product[] = [

  // Produk Pertama dari AdvancedHosting, SF All
  {
    id: "Official UniFi Hosting",
    name: "Official UniFi Hosting",
    category: "Advanced Hosting",
    subfilter: "All",
    image: "/images/camera.jpg",
    shortDescription: "Scalably deploy and manage UniFi Network Devices.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "OFFICIAL-UNIFI-HOSTING",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Official-UniFi-Hosting.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Manage up to 1,000 UniFi Network devices",
      "Centralized management with Site Manager at unifi.ui.com",
      "Optionally pair with a UXG series gateway for full-stack UniFi networking",
    ],
  },

  // Produk Kedua dari Advanced Hosting SF All
  {
    id: "Gateway Enterprise",
    name: "UXG-Enterprise",
    category: "Advanced Hosting",
    subfilter: "All",
    image: "/images/camera.jpg",
    shortDescription:
      "25G independent gateway with multi-WAN load balancing, 12.5 Gbps IPS routing, and redundant hot-swap PSUs.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "GATEWAY-ENTERPRISE",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UXG-Enterprise.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Managed with a CloudKey, Official UniFi Hosting, or UniFi Network Server with UniFi Network 8.3.32 and later",
      "Shadow Mode High Availability with automatic failover provides uninterrupted connectivity (VRRP)",
      "12.5 Gbps routing with IDS/IPS",
      "License-free, real-time inspection of encrypted packets with NeXT AI Inspection* (SSL/TLS decryption)",
      "(2) 25G SFP28,** (2) 10G SFP+**, and (2) 2.5 GbE RJ45 ports (two interfaces remappable to WAN)",
      "(2) included hot-swap PSUs for power redundancy",
      "1.3' touchscreen"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 43.7 x 325 mm (17.4 x 1.7 x 12.8')" },
          { label: "Max. WAN Port Count", value: "5" },
          { label: "Port Layout 2.5 GbE RJ45", value: "2 (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "2 (10G/1G)" },
          { label: "Port Layout 25G SFP28", value: "2 (25G/10G/1G)" },
          { label: "IDS/IPS Throughput", value: "12.5 Gbps" },
          { label: "Capacity SSL/TLS Inspection Concurrent Sessions", value: "10,000" },
          { label: "Capacity Concurrent Sessions", value: "1 Million" },
          { label: "Capacity New Sessions / Second", value: "71,000" },
          { label: "Form Factor", value: "Rack mount (1U)" },
          { label: "Redudancy", value: "Shadow Mode (VRRP) Gateway Failover (2) Hot-Swappable PSUs" },
        ]
      },
      {
        title: "Security",
        items: [
          { label: "Stateful Firewall", value: "✓" },
          { label: "Application-Aware Layer 7 Firewall", value: "✓" },
          { label: "SSL Inspection & URL Filtering", value: "✓" },
          { label: "DPI & Traffic Identification", value: "✓" },
          { label: "Zone-Based Firewall Advanced Filtering (Regions, Domains, Apps)", value: "✓" },
          { label: "Content Filtering", value: "✓" },
          { label: "Intrusion Prevention (IPS/IDS)", value: "✓" },
          { label: "Ad Blocking", value: "✓" },
          { label: "IDS/IPS Signatures", value: "95,000+  with CyberSecure Enterprise" },
        ]
      },
      {
        title: "VPN & SD-WAN",
        items: [
          { label: "License-Free SD-WAN", value: "✓" },
          { label: "Site-to-Site VPN Site Magic", value: "✓" },
          { label: "Site-to-Site VPN IPsec", value: "✓" },
          { label: "Site-to-Site OpenVPN", value: "✓" },
          { label: "VPN Server Teleport Zero-Configuration VPN", value: "✓" },
          { label: "VPN Server WireGuard", value: "✓" },
          { label: "VPN Server OpenVPN", value: "✓" },
          { label: "VPN Server L2TP", value: "✓" },
          { label: "VPN Client OpenVPN", value: "✓" },
          { label: "VPN Client WireGuard", value: "✓" },
          { label: "VPN Server Single User Throughput Identity Endpoint One-Click VPN", value: "1.2 Gbps" },
          { label: "VPN Server Single User Throughput Teleport", value: "1.2 Gbps" },
          { label: "VPN Server Single User Throughput WireGuard", value: "1.2 Gbps" },
          { label: "VPN Server Single User Throughput OpenVPN", value: "210 Mbps" },
          { label: "VPN Server Single User Throughput L2TP", value: "280 Mbps" },
          { label: "Site-to-Site VPN Single Tunnel Throughput Site Magic", value: "1.1 Gbps" },
          { label: "Site-to-Site VPN Single Tunnel Throughput OpenVPN", value: "120 Mbps" },
          { label: "Site-to-Site VPN Single Tunnel Throughput IPsec", value: "580 Mbps" },
          { label: "VPN Client Single Tunnel Throughput WireGuard", value: "980 Mbps" },
          { label: "VPN Client Single Tunnel Throughput OpenVPN", value: "180 Mbps" },
        ]
      },
      {
        title: "Networking",
        items: [
          { label: "Multi-WAN Load Balancing", value: "✓" },
          { label: "Shadow Mode (VRRP) High Availability", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "Dynamic Routing OSPF", value: "✓" },
          { label: "Dynamic Routing BGP", value: "✓" },
          { label: "Multicast DNS (mDNS)", value: "✓" },
          { label: "Advanced NAT (SNAT / DNAT / Masquerade / NAT Pooling / 1-to-1 NAT)", value: "✓" },
          { label: "Integrated RADIUS Server", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Additional Internet Failover with UniFi LTE Backup", value: "✓" },
          { label: "Internet Quality and Outage Reporting", value: "✓" },
          { label: "Policy-based WAN and VPN Routing", value: "✓" },
          { label: "Customizable DHCP Server", value: "✓" },
          { label: "IPv6 ISP Support", value: "✓" },
          { label: "IGMP Proxy", value: "✓" },
          { label: "All Traffic Flows", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "82W" },
          { label: "Power Method", value: "Universal AC input, 100–240V AC, 7A Max., 50/60 Hz" },
          { label: "Power Suplly", value: "(2) Hot-swappable 150W CRPS" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Heat Dissipations", value: "280 BTU/hr" },
          { label: "Processor", value: "18-core ARM® v8.2 at 2 GHz" },
          { label: "System Memory", value: "16 GB" },
          { label: "Weight", value: "6.5 kg (14.3 lb)" },
          { label: "Enclosure Material", value: "Aluminium CNC, SGCC steel" },
          { label: "LCM Display", value: "1.3' touchscreen" },
          { label: "Management", value: "Ethernet Bluetooth" },
          { label: "LEDs Ethernet", value: "✓" },
          { label: "LEDs SFP+", value: "✓" },
          { label: "LEDs CRPS", value: "✓" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "ESP/EMP Protection", value: "Air: ± 8kV, contact: ± 4kV" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 8.3.32 and later" },
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
        name: "Hot-Swappable Power Module (150W)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Replacement hot-swappable power module for Enterprise Fortress Gateway and Gateway Enterprise.",
        specs: [
          "150W (12V) AC-to-DC power supply"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "185 x 73.5 x 40 mm (7.3 x 2.9 x 1.6')" },
          { label: "Weight", value: "733 g (1.6 lb)" },
          { label: "Enclosure Material", value: "SGCC steel" },
          { label: "Input Voltage Range", value: "100-240V AC" },
          { label: "Input Frequency", value: "50/60 Hz" },
          { label: "Output Voltage", value: "12V DC at 12.5A" },
          { label: "Input Current", value: "7A Max. at 120V AC 3.6A Max. at 230V AC" },
          { label: "Inrush Current", value: "<50A peak" },
          { label: "Efficiency", value: "_" },
          { label: "Total Output Power", value: "Full load >81%" },
          { label: "Clamping Protection", value: "150W" },
          { label: "Over Voltage Protection", value: "13.5V" },
          { label: "Over Current Protection", value: "18.5-22.5A" },
          { label: "Ambient Operating Temperature", value: "-5 to 50° C (23 to 122° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, UL, UKCA, KC, CCC, RoHS" }
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

  // Produk Ketiga dari Advanced Hosting, SF All
  {
    id: "UXG-Fiber(30W)",
    name: "Gateway Fiber",
    category: "Advanced Hosting",
    subfilter: "All",
    image: "/images/camera.jpg",
    shortDescription:
      "Desktop 10G independent gateway with integrated 4-port 2.5 GbE switch.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UXG-FIBER-30W-",

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
      "Managed with a CloudKey, Official UniFi Hosting, or UniFi Network Server",
      "5 Gbps routing with IDS/IPS",
      "(1) 10G SFP+ and (1) 10 GbE RJ45 WAN port",
      "(1) 10G SFP+ LAN port",
      "Integrated 4-port switch with (1) PoE+ port"
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "212.8 x 127.6 x 30 mm (8.4 x 5 x 1.2')" },
          { label: "Max. WAN Port Count", value: "6" },
          { label: "Default WAN Ports", value: "(1) 10G SFP+ (1) 10 GbE RJ45" },
          { label: "Port Layout 2.5 GbE RJ45", value: "4 (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "1 (10G/2.5G/1G)" },
          { label: "Port Layout 25G SFP28", value: "2 (10G/1G)" },
          { label: "IDS/IPS Throughput", value: "5 Gbps" },
          { label: "Form Factor", value: "Compact desktop" },
        ]
      },
      {
        title: "Security",
        items: [
          { label: "Stateful Firewall", value: "✓" },
          { label: "Application-Aware Layer 7 Firewall", value: "✓" },
          { label: "DPI & Traffic Identification", value: "✓" },
          { label: "Zone-Based Firewall Advanced Filtering (Regions, Domains, Apps)", value: "✓" },
          { label: "Content Filtering", value: "✓" },
          { label: "Intrusion Prevention (IPS/IDS)", value: "✓" },
          { label: "Ad Blocking", value: "✓" },
          { label: "IDS/IPS Signatures", value: "95,000+  with CyberSecure Enterprise" },
        ]
      },
      {
        title: "VPN & SD-WAN",
        items: [
          { label: "License-Free SD-WAN", value: "✓" },

          { label: "Site-to-Site VPN Site Magic", value: "✓" },
          { label: "Site-to-Site VPN IPsec", value: "✓" },
          { label: "Site-to-Site OpenVPN", value: "✓" },

          { label: "VPN Server Teleport Zero-Configuration VPN", value: "✓" },
          { label: "VPN Server WireGuard", value: "✓" },
          { label: "VPN Server OpenVPN", value: "✓" },
          { label: "VPN Server L2TP", value: "✓" },

          { label: "VPN Client OpenVPN", value: "✓" },
          { label: "VPN Client WireGuard", value: "✓" },
        ]
      },
      {
        title: "Networking",
        items: [
          { label: "Multi-WAN Load Balancing", value: "✓" },
          { label: "Dynamic Routing OSPF", value: "✓" },
          { label: "Advanced QoS", value: "✓" },
          { label: "Multicast DNS (mDNS)", value: "✓" },
          { label: "Advanced NAT (SNAT / DNAT / Masquerade / NAT Pooling / 1-to-1 NAT)", value: "✓" },
          { label: "Integrated RADIUS Server", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Additional Internet Failover with UniFi LTE Backup", value: "✓" },
          { label: "Internet Quality and Outage Reporting", value: "✓" },
          { label: "MAC Address Table Size", value: "4,000" },
          { label: "Virtual Network Override", value: "✓" },
          { label: "All Traffic Flows", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "PoE Budget", value: "30W" },
          { label: "Max. PoE Wattage per Port by PSE PoE+", value: "30W" },
          { label: "Voltage Range PoE Mode", value: "50–57V" },
          { label: "Max. Power Consumption", value: "25W (Excluding PoE output)" },
          { label: "Power Method", value: "DC jack (54V DC/1.1A)" },
          { label: "Power Suplly", value: "54V DC/1.1A (Adapter included)" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Heat Dissipations", value: "85 BTU/hr  (Excluding PoE output)" },
          { label: "Processor", value: "Quad-core ARM® Cortex®-A73 at 2.2 GHz" },
          { label: "System Memory", value: "2 GB" },
          { label: "Weight", value: "605 g (1.3 lb)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Management", value: "Ethernet Bluetooth" },
          { label: "LEDs Ethernet", value: "✓" },
          { label: "LEDs SFP+", value: "✓" },
          { label: "LEDs CRPS", value: "✓" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "ESP/EMP Protection", value: "Air: ± 8kV, contact: ± 4kV" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 04395-25-08356" },
        ]
      },
    ],
    inTheBox: [
      { name: "Device", image: "/images/dcs-box.png" },
      { name: "Mounting Kit", image: "/images/dcs-box.png" },
      { name: "Power Cable", image: "/images/dcs-box.png" },
      { name: "Quick Start", image: "/images/dcs-box.png" }
    ],
    // Item yang ada dalam box produk (gambar bisa diganti)
  },

  // Produk Keempat dari Advanced Hosting, SF All
  {
    id: "UXG-Lite",
    name: "Gateway Lite",
    category: "Advanced Hosting",
    subfilter: "All",
    image: "/images/camera.jpg",
    shortDescription:
      "Compact independent gateway with a full suite of advanced routing and security features.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UXG-LITE",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Lite.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Up to 10x routing performance increase over USG (tested with IPS/IDS, QoS, and Smart Queues)",
      "Managed by a CloudKey, Official UniFi Hosting, or UniFi Network Server with UniFi Network 8.0.7 and later",
      "(1) GbE WAN port",
      "(1) GbE LAN port",
      "USB-C powered (adapter included)",
      "Note. EU Store version includes EU power plug only."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "98 x 98 x 30 mm (3.9 x 3.9 x 1.2')" },
          { label: "Max. WAN Port Count", value: "1" },
          { label: "Default WAN Ports", value: "(1) GbE RJ45" },
          { label: "Port Layout 2.5 GbE RJ45", value: "2 (1G/100M/10M)" },
          { label: "IDS/IPS Throughput", value: "1 Gbps" },
          { label: "Form Factor", value: "Compact desktop" },
        ]
      },
      {
        title: "Security",
        items: [
          { label: "Stateful Firewall", value: "✓" },
          { label: "Application-Aware Layer 7 Firewall", value: "✓" },
          { label: "DPI & Traffic Identification", value: "✓" },
          { label: "Zone-Based Firewall Advanced Filtering (Regions, Domains, Apps)", value: "✓" },
          { label: "Content Filtering", value: "✓" },
          { label: "Intrusion Prevention (IPS/IDS)", value: "✓" },
          { label: "Ad Blocking", value: "✓" },
        ]
      },
      {
        title: "VPN & SD-WAN",
        items: [
          { label: "License-Free SD-WAN", value: "✓" },

          { label: "Site-to-Site VPN Site Magic", value: "✓" },
          { label: "Site-to-Site VPN IPsec", value: "✓" },
          { label: "Site-to-Site OpenVPN", value: "✓" },

          { label: "VPN Server Teleport Zero-Configuration VPN", value: "✓" },
          { label: "VPN Server WireGuard", value: "✓" },
          { label: "VPN Server OpenVPN", value: "✓" },
          { label: "VPN Server L2TP", value: "✓" },

          { label: "VPN Client OpenVPN", value: "✓" },
          { label: "VPN Client WireGuard", value: "✓" },
        ]
      },
      {
        title: "Networking",
        items: [
          { label: "Dynamic Routing OSPF", value: "✓" },
          { label: "Advanced QoS", value: "✓" },
          { label: "Multicast DNS (mDNS)", value: "✓" },
          { label: "Advanced NAT (SNAT / DNAT / Masquerade / NAT Pooling / 1-to-1 NAT)", value: "✓" },
          { label: "Integrated RADIUS Server", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Additional Internet Failover with UniFi LTE Backup", value: "✓" },
          { label: "Internet Quality and Outage Reporting", value: "✓" },
          { label: "Policy-based WAN and VPN Routing", value: "✓" },
          { label: "Customizable DHCP Server", value: "✓" },
          { label: "IPv6 ISP Support", value: "✓" },
          { label: "All Traffic Flows", value: "—" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "3.83W" },
          { label: "Power Method", value: "USB type C (5V DC/3A)" },
          { label: "Power Suplly", value: "USB type C (5V DC/3A) (Adapter included)" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Heat Dissipations", value: "13 BTU/hr" },
          { label: "Processor", value: "Dual-core ARM® Cortex®-A53 at 1 GHz" },
          { label: "System Memory", value: "1 GB" },
          { label: "Weight", value: "320 g (11.3 oz)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Management", value: "Ethernet Bluetooth" },
          { label: "LEDs Ethernet", value: "✓" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-10 to 40° C (14 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 01874-24-08356" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 8.3.32 and later" },
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

  // Produk Kelima dari Advanced Hosting, SF All
  {
    id: "UXG-Max",
    name: "Gateway Max",
    category: "Advanced Hosting",
    subfilter: "All",
    image: "/images/camera.jpg",
    shortDescription:
      "Compact, multi-WAN independent gateway with full 2.5G support for high-performance networking at small-to-mediaum-sites.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UXG-MAX",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Max.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Managed with a CloudKey, Official UniFi Hosting, or UniFi Network Server",
      "Up to 2.3 Gbps routing with IDS/IPS",
      "(1) 2.5 GbE WAN port",
      "(4) 2.5 GbE LAN ports, including (1) remappable to WAN",
      "Managed with UniFi Network 8.1.113 and later",
      "Note. EU Store version includes EU power plug only."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "141.8 x 127.6 x 30 mm (5.6 x 5 x 1.2')" },
          { label: "Max. WAN Port Count", value: "4" },
          { label: "Default WAN Ports", value: "(1) 2.5 GbE RJ45" },
          { label: "Port Layout 2.5 GbE RJ45", value: "5 (2.5G/1G/100M/10M)" },
          { label: "IDS/IPS Throughput", value: "2.3 Gbps" },
          { label: "Form Factor", value: "Compact desktop" },
        ]
      },
      {
        title: "Security",
        items: [
          { label: "Stateful Firewall", value: "✓" },
          { label: "Application-Aware Layer 7 Firewall", value: "✓" },
          { label: "DPI & Traffic Identification", value: "✓" },
          { label: "Zone-Based Firewall Advanced Filtering (Regions, Domains, Apps)", value: "✓" },
          { label: "Content Filtering", value: "✓" },
          { label: "Intrusion Prevention (IPS/IDS)", value: "✓" },
          { label: "Ad Blocking", value: "✓" },
          { label: "IDS/IPS Signatures", value: "55,000+ With CyberSecure" },
        ]
      },
      {
        title: "VPN & SD-WAN",
        items: [
          { label: "License-Free SD-WAN", value: "✓" },

          { label: "Site-to-Site VPN Site Magic", value: "✓" },
          { label: "Site-to-Site VPN IPsec", value: "✓" },
          { label: "Site-to-Site OpenVPN", value: "✓" },

          { label: "VPN Server Teleport Zero-Configuration VPN", value: "✓" },
          { label: "VPN Server WireGuard", value: "✓" },
          { label: "VPN Server OpenVPN", value: "✓" },
          { label: "VPN Server L2TP", value: "✓" },

          { label: "VPN Client OpenVPN", value: "✓" },
          { label: "VPN Client WireGuard", value: "✓" },
        ]
      },
      {
        title: "Networking",
        items: [
          { label: "Multi-WAN Load Balancing", value: "✓" },
          { label: "Dynamic Routing OSPF", value: "✓" },
          { label: "Advanced QoS", value: "✓" },
          { label: "Multicast DNS (mDNS)", value: "✓" },
          { label: "Advanced NAT (SNAT / DNAT / Masquerade / NAT Pooling / 1-to-1 NAT)", value: "✓" },
          { label: "Integrated RADIUS Server", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Additional Internet Failover with UniFi LTE Backup", value: "✓" },
          { label: "Internet Quality and Outage Reporting", value: "✓" },
          { label: "MAC Address Table Size", value: "2,000" },
          { label: "Policy-based WAN and VPN Routing", value: "✓" },
          { label: "Customizable DHCP Server", value: "✓" },
          { label: "All Traffic Flows", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "9.6W" },
          { label: "Power Method", value: "USB type C (5V DC/3A)" },
          { label: "Power Suplly", value: "USB type C (5V DC/3A) (Adapter included)" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Heat Dissipations", value: "33 BTU/hr" },
          { label: "Processor", value: "Quad-core ARM® Cortex®-A53 at 1.5 GHz" },
          { label: "System Memory", value: "2 GB" },
          { label: "Weight", value: "520 g (1.1 lb)" },
          { label: "Enclosure Material", value: "Polycarbonate" },
          { label: "Management", value: "Ethernet Bluetooth" },
          { label: "LEDs Ethernet", value: "✓" },
          { label: "LEDs System", value: "✓" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "Ambient Operating Temperature", value: "-10 to 40° C (14 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 04873-25-08356" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 8.1.113 and later" },
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

  // Produk Keenam dari Advanced Hosting, SF All
  {
    id: "UXG-Pro",
    name: "Gateway Pro",
    category: "Advanced Hosting",
    subfilter: "All",
    image: "/images/camera.jpg",
    shortDescription:
      "10G multi-WAN independent gateway with UniFi Power Backup support designed to protect large-scale networks.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "UXG-PRO",

    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Gateway-Pro.png",
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/banners/dcs-overview-1.png",
      "/images/banners/dcs-overview-2.png"
    ],

    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Managed by a CloudKey, Official UniFi Hosting, or UniFi Network Server",
      "3.5+ Gbps routing with IDS/IPS",
      "(1) 10G SFP+* and (1) GbE WAN port",
      "(1) 10G SFP+* and (1) GbE LAN port",
      "UniFi Power Backup ready",
      "*Pair with an official SFP+ Module or SFP+ to RJ45 Adapter for the best experience."
    ],

    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 43.7 x 285.6 mm (17.4 x 1.7 x 11.2')" },
          { label: "Max. WAN Port Count", value: "3" },
          { label: "Default WAN Ports", value: "(1) 10G SFP+ (1) GbE RJ45" },
          { label: "Port Layout 2.5 GbE RJ45", value: "2 (10G/1G)" },
          { label: "IDS/IPS Throughput", value: "3.5 Gbps" },
          { label: "Form Factor", value: "Rack mount (1U)" },
          { label: "Redudancy", value: "DC Power Backup" },
        ]
      },
      {
        title: "Security",
        items: [
          { label: "Stateful Firewall", value: "✓" },
          { label: "Application-Aware Layer 7 Firewall", value: "✓" },
          { label: "DPI & Traffic Identification", value: "✓" },
          { label: "Zone-Based Firewall Advanced Filtering (Regions, Domains, Apps)", value: "✓" },
          { label: "Content Filtering", value: "✓" },
          { label: "Intrusion Prevention (IPS/IDS)", value: "✓" },
          { label: "Ad Blocking", value: "✓" },
          { label: "IDS/IPS Signatures", value: "55,000+ With CyberSecure" },
        ]
      },
      {
        title: "VPN & SD-WAN",
        items: [
          { label: "License-Free SD-WAN", value: "✓" },

          { label: "Site-to-Site VPN Site Magic", value: "✓" },
          { label: "Site-to-Site VPN IPsec", value: "✓" },
          { label: "Site-to-Site OpenVPN", value: "✓" },

          { label: "VPN Server Teleport Zero-Configuration VPN", value: "✓" },
          { label: "VPN Server WireGuard", value: "✓" },
          { label: "VPN Server OpenVPN", value: "✓" },
          { label: "VPN Server L2TP", value: "✓" },

          { label: "VPN Client OpenVPN", value: "✓" },
          { label: "VPN Client WireGuard", value: "✓" },
        ]
      },
      {
        title: "Networking",
        items: [
          { label: "Multi-WAN Load Balancing", value: "✓" },
          { label: "Dynamic Routing OSPF", value: "✓" },
          { label: "Advanced QoS", value: "✓" },
          { label: "Multicast DNS (mDNS)", value: "✓" },
          { label: "Advanced NAT (SNAT / DNAT / Masquerade / NAT Pooling / 1-to-1 NAT)", value: "✓" },
          { label: "Integrated RADIUS Server", value: "✓" },
          { label: "RADIUS over TLS (RadSec)", value: "✓" },
          { label: "Additional Internet Failover with UniFi LTE Backup", value: "✓" },
          { label: "Internet Quality and Outage Reporting", value: "✓" },
          { label: "All Traffic Flows", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "30W" },
          { label: "Power Method", value: "US: (1) Universal AC input, 125V AC, 2.7A Max., 60 Hz (1) RPS DC input, 11.5V DC, 2.87A Worldwide: (1) Universal AC input, 200-240V AC, 1.7A Max., 50/60 Hz (1) RPS DC input, 11.5V DC, 2.87A" },
          { label: "Power Suplly", value: "AC/DC, internal, 50W" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Heat Dissipations", value: "102 BTU/hr" },
          { label: "Processor", value: "Quad-core ARM® Cortex®-A53 at 1.5 GHz" },
          { label: "System Memory", value: "2 GB" },
          { label: "Weight", value: "3.4 kg (7.5 lb)" },
          { label: "Enclosure Material", value: "Front panel: Aluminum CNC Top cover/base: SGCC steel" },
          { label: "LCM Display", value: "1.3' touchscreen" },
          { label: "Management", value: "Ethernet" },
          { label: "LEDs Ethernet", value: "✓" },
          { label: "LEDs SFP+", value: "✓" },
          { label: "LEDs RPS", value: "✓" },
          { label: "LEDs AC Outlet", value: "✓" },
          { label: "Button", value: "(1) Factory reset" },
          { label: "ESD/EMP Protection", value: "Air: ± 15kV, contact: ± 8kV" },
          { label: "Ambient Operating Temperature", value: "-10 to 40° C (14 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 19089-22-08356" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 8.3.32 and later" },
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
        name: "U-Rack-6U-TL",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Compact, stackable, and toolless 6U open-frame rack designed for UniFi rack-mount devices.*",
        specs: [
          "6U-sized device rack",
          "Combine two Mini Racks into a 12U rack with a Stacking Kit",
          "Toolless assembly and device mounting",
          "Lockable casters"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "With handle and caster: 519 x 460 x 485 mm (20.43 x 18.11 x 19.09') Without handle and caster: 519 x 460 x 351 mm (20.43 x 18.11 x 13.82')" },
          { label: "Weight", value: "10.3 kg (22.7 lb)" },
          { label: "Max. Weight Capacity", value: "Single Toolless Mini Rack Static: 80 kg (176 lb) Rolling: 45 kg (99 lb) Double Toolless Mini Racks with Stacking Kit Static: 70 kg (154 lb) Rolling: 35 kg (77 lb)" },
          { label: "Enclosure Material ", value: "Frame/Bracket: SPCC steel Handle: Stainless steel" },
          { label: "Color", value: "Silver" },
          { label: "Treatment", value: "Liquid Coating" },
          { label: "Pack Option", value: "(1) Flat pack box" },
          { label: "Rack Features U Height", value: "6U" },
          { label: "Rack Features Rack Type", value: "Open Frame" },
          { label: "Rack Features Mounting", value: "Floor Stand" },
          { label: "Rack Features Lockable Casters", value: "✓" },
          { label: "Incompatible Devices", value: "UniFi Switch (Gen1), US-24-250W US-24-500W US-48-500W US-48-750W USG USG-Pro-4 EdgeSwitch ES-24-250W ES-24-500W ES-48-500W ES-48-750W EdgeRouter ER-8 Others CKG2-RM ER-RMKIT UACC-Pro-Max-16-RM" },
          { label: "NDA Compliant", value: "✓" },
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
        name: "24-Port Blank Keystone Patch Panel",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Standalone insert that can be easily installed into an existing network equipment rack to create a clean, uniform aesthetic.",
        specs: [
          "1U 24-port blank patch panel with cable management bar",
          "Ideal for keystone module installation",
          "Uniform aesthetic with UniFi rack-mount equipment"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "Standalone insert: 442.4 x 63.5 x 43.7 mm (17.4 x 2.5 x 1.7') Management bar: 433.8 x 71.5 x 17 mm (17.1 x 2.8 x 0.7')" },
          { label: "Weight", value: "Standalone insert: 260 g (9.17 oz) Management bar: 390 g (13.8 oz)" },
          { label: "Material", value: "Front panel housing: Cold rolled carbon steel (SPCC) Inner module: Polycarbonate Management bar: Cold rolled carbon steel (SPCC" },
          { label: "Treatment", value: "Painting" }
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },

  // Produk Ketujuh dari Advanced Hosting, SF All
  {
    id: "UCK-G2-SSD",
    name: "CloudKey+",
    category: "Advanced Hosting",
    subfilter: "",
    image: "/images/camera.jpg",
    shortDescription:
      "Compact UniFi Consoles that connect directly to the Site Manager at https://unifi.ui.com/ for powerful site management.",
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
      "Includes full UniFi application suite for device management",
      "Pre-installed 1 TB SSD",
      "Connect and power using PoE",
      "Optional USB-C power with Quick Charge 2.0/3.0 compliant adapter only",
      "Bluetooth for instant setup"
    ],


    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "131.2 x 27.1 x 134.2 mm (5.2 x 1.1 x 5.3')" },
          { label: "UniFi Application Suite Network", value: "✓" },
          { label: "UniFi Application Suite Protect", value: "✓" },
          { label: "UniFi Application Suite Access", value: "✓" },
          { label: "UniFi Application Suite Talk", value: "✓" },
          { label: "UniFi Application Suite Connect", value: "✓" },
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
          { label: "Hard Drive Capacity", value: "1 TB 2.5' SATA SSD (User-upgradeable)" },
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
      },
      {
        id: 3,
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
        id: 4,
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
    ]
  },

  // Produk Kedelapan dari Advanced Hosting, SF All
  {
    id: "UCK-G2-PLUS",
    name: "CloudKey+",
    category: "Advanced Hosting",
    subfilter: "",
    image: "/images/camera.jpg",
    shortDescription:
      "Compact UniFi Consoles that connect directly to the Site Manager at https://unifi.ui.com/ for powerful site management.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],


    // SKU produk
    sku: "UCK-G2-PLUS",


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
      "Includes full UniFi application suite for device management",
      "Pre-installed 1 TB HDD",
      "Connect and power using PoE",
      "Optional USB-C power with Quick Charge 2.0/3.0 compliant adapter only",
      "Bluetooth for instant setup"
    ],


    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "131.2 x 27.1 x 134.2 mm (5.2 x 1.1 x 5.3')" },
          { label: "UniFi Application Suite Network", value: "✓" },
          { label: "UniFi Application Suite Protect", value: "✓" },
          { label: "UniFi Application Suite Access", value: "✓" },
          { label: "UniFi Application Suite Talk", value: "✓" },
          { label: "UniFi Application Suite Connect", value: "✓" },
          { label: "Managed Cameras", value: "(24) HD (14) 2K (8) 4K" },
          { label: "Managed Access Hubs", value: "50" },
          { label: "Storage Capacity", value: "(1) 2.5' drive bay with 1 TB pre‑installed" },
          { label: "Data Protection", value: "✓" },
          { label: "Vantage Point", value: "✓" },
          { label: "Networking Interface", value: "(1) GbE PoE" },
          { label: "Form Factor", value: "Compact Desktop" },
          { label: "Door Access Support", value: "✓" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Hard Drive Capacity", value: "1 TB 2.5' SATA HDD (User-upgradeable)" },
          { label: "Max. Power Consumption", value: "12.95W" },
          { label: "Power Method", value: "PoE USB-C power with Quick charge 2.0/3.0 power adapter, 9V DC, 2A (Optional)" },
          { label: "Processor", value: "Octa-core Arm® Cortex®-A53 based chip" },
          { label: "Memory", value: "32 GB eMMC 3 GB RAM" },
          { label: "Management", value: "Ethernet Bluetooth" },
          { label: "Display", value: "1.42' gray-scale OLED" },
          { label: "Weight", value: "582 g (1.3 lb)" },
          { label: "Enclosure Material", value: "Anodized Aluminum" },
          { label: "Ambient Operating Temperature", value: "0 to 35° C (32 to 95° F)" },
          { label: "Ambient Operating Humidity", value: "20 to 80% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 07458-19-08356, SRRC" },
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
        productLink: "/products/mounting-kit-u6-plus"
      },
      {
        id: 2,
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
      },
      {
        id: 3,
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
        id: 4,
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
    ]
  },

  // Produk Kesembilan dari Advanced Hosting, SF All
  {
    id: "CK-Enterprise",
    name: "CloudKey Enterprise",
    category: "Advanced Hosting",
    subfilter: "",
    image: "/images/camera.jpg",
    shortDescription:
      "A UniFi Console designed for managing massive-scale UniFi Networks.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],

    // SKU produk
    sku: "CK-ENTERPRISE",

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
          { label: "Dimensions", value: "787 x 43.7 x 481.4 mm (31 x 1.7 x 19')" },
          { label: "UniFi Application Suite Network", value: "✓" },
          { label: "Managed UniFi Devices", value: "1,000" },
          { label: "Simultaneous Users Connected", value: "10,000" },
          { label: "Port Layout 1 GbE RJ45", value: "2 (1G/100M/10M)" },
          { label: "Port Layout 10G SFP+", value: "1 (10G/1G)" },
          { label: "Form Factor", value: "Rack Mount (1U)" },
          { label: "Redudancy", value: "(2) Hot-Swappable PSUs" },
        ]
      },
      {
        title: "Networking",
        items: [
          { label: "All Traffic Flows", value: "—" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "190W" },
          { label: "Power Method", value: "Universal AC input, 100-240V AC, 7A Max., 50/60 Hz" },
          { label: "Power Supply", value: "(2) Hot-Swappable AC/DC 550W PSU" },
          { label: "Support Voltage Range", value: "Universal AC input, 100-240V AC, 7A Max., 50/60 Hz" },
          { label: "Heat Dissipation", value: "648 BTU/hr" },
          { label: "Processor", value: "16-core Intel® Xeon®-SP Gold 5218 at 2.3 GHz" },
          { label: "System", value: "(2) 16 GB" },
          { label: "On-Board Storage", value: "(1) 256 GB, M.2 2280 SATA" },
          { label: "Weight", value: "13.1 kg (28.9 lb)" },
          { label: "Enclosure Material", value: "Front panel: AluminiumChassis: SGCC steel" },
          { label: "Mount Material", value: "SGCC steel" },
          { label: "LCM Display", value: "1.3' touchscreen" },
          { label: "Management", value: "Ethernet Bluetooth" },
          { label: "LEDs Ethernet", value: "✓" },
          { label: "LEDs SFP+", value: "✓" },
          { label: "LEDs CRPS", value: "✓" },
          { label: "Button", value: "Factory Reset" },
          { label: "ESD/EMP Protection", value: "Air: ± 15kV, contact: ± 8kV" },
          { label: "Ambient Operating Temperature", value: "0 to 35° C (32 to 95° F)" },
          { label: "Ambient Operating Humidity", value: "8 to 90% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC" },
        ]
      },
      {
        title: "Networking",
        items: [
          { label: "Application Requirements UniFi Network", value: "Version 7.3.83 and later" },
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
        name: "10G Direct Attach Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP+ direct attach cable with a 10 Gbps max data rate.",
        specs: [
          "Supported data rates: 10 / 1 Gbps",
          "Compatible with SFP+ and SFP interfaces",
          "Cable length: 0.5 to 3 m"
        ],
        detailedSpecs: [
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
        ],
        productLink: "/products/power-cable"
      },
    ]
  }
];
