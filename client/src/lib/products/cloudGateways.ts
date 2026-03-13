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
  overviewVideos?: string[]; // Video untuk tab Overview (opsional)
  technicalSpecs?: TechSpecSection[]; // Spesifikasi teknis dengan section yang bisa di-expand
  inTheBox?: InTheBoxItem[]; // Item yang ada dalam box produk
  addons?: ProductAddon[]; // Addon/aksesori yang tersedia untuk produk ini
  sku?: string; // SKU produk (opsional, akan di-generate random jika tidak ada)
  bulletPoints?: string[]; // Bullet points untuk deskripsi produk
}

// Cloud Gateways Products
export const cloudGatewaysProducts: Product[] = [
{
    id: "efg",
    name: "Enterprise Fortress Gateway",
    category: "Cloud Gateways",
    subfilter: "Enterprise Scale",
    image: "/images/cloudgateways/1.efg/1.p-utama-efg.png",
    shortDescription:
      "25G Cloud Gateway with 500+ UniFi device / 5,000+ client support, 12.5 Gbps IPS routing, and complete high availability.",
    specs: [
      { label: "Throughput", value: "10 Gbps IPS" },
      { label: "Ports", value: "8x GbE RJ45, 1x 10G SFP+" },
      { label: "Storage", value: '2x 3.5" HDD Bays' },
      { label: "Processor", value: "Quad-Core ARM Cortex-A57" },
    ],
    isNew: true,
    
    // SKU produk
    sku: "EFG",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama  )
    images: [
      "/images/cloudgateways/1.efg/1.p-utama-efg.png",
      "/images/cloudgateways/1.efg/2.p-dimensi-efg.jpg",
      "/images/cloudgateways/1.efg/3.p-spec-efg.png",
      "/images/cloudgateways/1.efg/4.p-development-efg.png",
      "/images/cloudgateways/1.efg/p-itb2-efg.png",
      "/images/cloudgateways/1.efg/p-mkt1-efg.jpg",
      "/images/cloudgateways/1.efg/p-mkt2-efg.jpg",
      "/images/cloudgateways/1.efg/p-mkt3-efg.jpg",
      "/images/cloudgateways/1.efg/p-mkt4-efg.jpg",
      "/images/cloudgateways/1.efg/p-mkt5-efg.png",
      "/images/cloudgateways/1.efg/p-ov1-efg.png",
      "/images/cloudgateways/1.efg/p-ov2-efg.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/cloudgateways/1.efg/p-ov1-efg.png",
      "/images/cloudgateways/1.efg/p-ov2-efg.png"
    ],

    // Video untuk tab Overview (opsional, bisa diisi dengan link YouTube atau path video lokal)
    overviewVideos: [
      "/video/VP-efg-1.mp4",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "25F cloud gateways with 500+ UniFi Device",
      "5000+ client support",
      "12.5gbps ips routing",
      "complete high availability", 
      "Note. Shadow Mode High Availability with automatic failover (VRRP) requires UniFi OS 4.0 and later. Must be paired with another EFG."
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 43.7 x 325 mm (17.4 x 1.7 x 12.8\")" },
          { label: "Network", value: "✓", isCheck: true },
          { label: "Managed UniFi Devices", value: "500+" },
          { label: "Simultaneous Users Connected", value: "5,000+" },
          { label: "Max. WAN Port Count", value: "5" },
          { label: "Default WAN Ports", value: "(1) 25G SFP28, (1) 2.5 GbE RJ45" },
          { label: "Port Layout", value: "2x 2.5 GbE RJ45, 2x 10G SFP+, 2x 25G SFP28", isList: true },
          { label: "IDS/IPS Throughput", value: "12.5 Gbps" },
          { label: "SSL/TLS Inspection Concurrent Sessions", value: "10,000" },
          { label: "Concurrent Sessions", value: "1 Million" },
          { label: "New Sessions / Second", value: "71,000" },
          { label: "Form Factor", value: "Rack mount (1U)" },
          { label: "Redundancy", value: "Shadow Mode (VRRP) Gateway Failover, (2) Hot-Swappable PSUs" }
        ]
      },
      {
        title: "Security",
        items: [
          { label: "Stateful Firewall", value: "✓", isCheck: true },
          { label: "Application-Aware Firewall", value: "✓", isCheck: true },
          { label: "SSL Inspection & URL Filtering", value: "✓", isCheck: true },
          { label: "DPI & Traffic Identification", value: "✓", isCheck: true },
          { label: "Zone-Based Firewall Advanced Filtering (Regions, Domains, Apps)", value: "✓", isCheck: true },
          { label: "Content Filtering", value: "✓", isCheck: true },
          { label: "Intrusion Prevention System (IPS/IDS)", value: "✓", isCheck: true },
          { label: "Ad Blocking", value: "✓", isCheck: true },
          { label: "IDS/IPS Signatures", value: "95.000) with CyberSecure Enterprise" },
          { label: "VLAN/Subnet-based Traffic Segmentation ", value: "✓", isCheck: true },
        ]
      },
      {
        title: "VPN & SD-WAN",
        items: [
          { label: "Site-to-Site VPN License-Free SD-WAN", value: "✓", isCheck: true },
          { label: "Site-to-Site VPN Site Magic", value: "✓ 1.1 Gbps"},
          { label: "Site-to-Site VPN IPsec", value: "✓ 580 Mbps"},
          { label: "Site-to-Site VPN OpenVPN", value: "✓ 120 Mbps" },
        
        { label: "VPN Server Identity Endpoint One-Click VPN", value: "✓ 1.2 Gbps" },
        { label: "VPN Server Teleport Zero-Configuration VPN", value: "✓ 1.2 Gbps" },
        { label: "VPN Server WireGuard", value: "✓ 1.2 Gbps"},
        { label: "VPN Server OpenVPN", value: "✓ 210 Mbps" },
        { label: "VPN Server L2TP", value: "✓ 280 Mbps " },

        { label: "VPN Client OpenVPN", value: "✓ 980 Mbps" },
        { label: "VPN Client WireGuard", value: "✓ 180 Mbps" }, 

        ]
      },
      {
        title: "Networking",
        items: [
          { label: "Multi-WAN Load Balancing", value: "✓", isCheck: true },
          { label: "Shadow Mode (VRRP) High Availability", value: "✓", isCheck: true },
          { label: "LACP Port Aggregation", value: "✓", isCheck: true },
          { label: "Dynamic Routing OSPF & BGP", value: "✓", isCheck: true },
          { label: "Advanced QoS", value: "✓", isCheck: true },
          { label: "Advanced NAT (SNAT / DNAT / Masquerade / NAT Pooling / 1-to-1 NAT)", value: "✓", isCheck: true },
          { label: "Integrated RADIUS Server", value: "✓", isCheck: true },
          { label: "RADIUS over TLS (RadSec)", value: "✓", isCheck: true },
          { label: "Additional Internet Failover with UniFi LTE Backup", value: "✓", isCheck: true },
          { label: "Internet Quality and Outage Reporting", value: "✓", isCheck: true },
          { label: "Policy-based WAN and VPN Routing", value: "✓", isCheck: true },
          { label: "Customizable DHCP Server", value: "✓", isCheck: true },
          { label: "IPv6 ISP Support", value: "✓", isCheck: true },
          { label: "IGMP Proxy", value: "✓", isCheck: true },
          { label: "All Traffic Flows", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Max. Power Consumption", value: "82W" },
          { label: "Power Method", value: "Universal AC input, 100–240V AC, 7A Max., 50/60 Hz" },
          { label: "Power Supply", value: "(2) Hot-swappable 150W CRPS" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Heat Dissipation", value: "280 BTU/hr" },
          { label: "Processor", value: "18-core ARM® v8.2 at 2 GHz" },
          { label: "Weight", value: "6.5 kg (14.3 lb)" },
          { label: "Enclosure Material", value: "Aluminium CNC, SGCC steel" },
          { label: "LCM Display", value: "'1.3' touchscreen" },
          { label: "Management", value: "Ethernet Bluetooth" },
          { label: "LEDs Ethernet & SFP+", value: "✓", isCheck: true },
          { label: "Button", value: "(1) Factory Reset)" },
          { label: "ESD/EMP Protection", value: "Air: ± 8kV, contact: ± 4kV" },
          { label: "Ambient Operating Temperature", value: "0 to 40° C (32 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓", isCheck: true },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 06375-24-08356, SRRC" },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Mobile App IOS", value: "UniFi iOS™:Version 10.16.2 and later" },
          { label: "Mobile App Android", value: "UniFi Android™: Version 10.17.2 and later" }
        ]
      }
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/cloudgateways/1.efg/p-itb1-efg.png" },
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
          "Toolless assembly and device mounting"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
          { label: "Weight", value: "1.2 kg" },
          { label: "Material", value: "SGCC Steel" },
          { label: "Mounting", value: "1U Rack Mount" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
      {
        id: 2,
        name: "UniFi WAN Switch",
        image: "/images/dcs-box.png",
        price: 299,
        description: "10G SFP+ WAN Switch linking two Shadow Mode High Availability UniFi Gateways to a single ISP.",
        specs: [
          "Combine with Shadow Mode High Availability to ensure uninterrupted connectivity",
          "(1) 10G SFP+ ISP uplink and (2) 10G SFP+ downlink ports",
          "(2) AC inputs for power redundancy",
          "(1) GbE port for management with UniFi Network"
        ],
        detailedSpecs: [
          { label: "Max. Power Consumption", value: "13W" },
          { label: "Power Method", value: "(2) Universal input, 100–240V AC, 50/60 Hz" },
          { label: "Power Input Method", value: "AC input" },
          { label: "Power Supply", value: "(2) AC/DC, internal, 36W" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Management", value: "Ethernet" },
          { label: "With / Without Mounting Brackets", value: "2.3 kg (5.1 lb) / 2.2 kg (4.85 lb)" },
          { label: "Mount & Enclosure Material", value: "SGCC Steel" },
          { label: "ESD Protection", value: "Air: ± 16kV, contact: ± 22kV" },
          { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)" },
          { label: "LED Ethernet, SFP+, System", value: "✓" },
          { label: "Certification", value: "CE, FCC, IC, Anatel: 03715-25-08356" },
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/power-cable-efg"
      },
      {
        id: 3,
        name: "SFP+ to RJ45 10GbE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP+ to RJ45 transceiver module that supports 10G connections up to 100 m.",
        specs: [
          "Supported data rates: 10 / 5 / 2.5 / 1 Gbps",
          "Compatible with SFP+ and SFP interfaces",
          "Supports connections up to 100 m*(*Ethernet cable is not included.)"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "RJ45" },
          { label: "Supported Media", value: "Copper" },
          { label: "Supported Data Rate", value: "1 / 2.5 / 5 / 10 Gbps" },
          { label: "Supported Cable Distance", value: "10 Gbps(Cat 6A): 100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "1.9W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
        
        
        
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "Hot-Swappable Power Module (150W)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Replacement hot-swappable power module for Enterprise Fortress Gateway and Gateway Enterprise.",
        specs: [
          "150W (12V) AC-to-DC power supply",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "185 x 73.5 x 40 mm (7.3 x 2.9 x 1.6 inches)" },
          { label: "Weights", value: "733 g (1.6 lb)" },
          { label: "Enclosure Material", value: "SGCC steel" },
          { label: "Input Voltage Range", value: "100–240V AC" },
          { label: "Input Frequency", value: "50/60 Hz" },
          { label: "Output Voltage", value: "12V DC at 12.5A" },
          { label: "Input Current", value: "7A Max. at 120V AC, 3.6A Max. at 230V AC" },
          { label: "Inrush Current", value: "<50A peak" },
          { label: "Efficiency", value: "Full load >81%" },
          { label: "Total Output Power", value: "150W" },
          { label: "Over Voltage Protection", value: "13.5V" },
          { label: "Over Current Protection", value: "18.5–22.5A" },
          { label: "Ambient Operating Temperature", value: "-5 to 50° C (23 to 122° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, UKCA, KC, CCC, RoHS" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },
{
    id: "udm-pro-max",
    name: "Dream Machine Pro Max ",
    category: "Cloud Gateways",
    subfilter: "Large Scale",
    image: "/images/cloudgateways/2.udmpmx/1.p-utama-udm-pmx.png",
    shortDescription:
      "10G CLoud Gateway with 200+ UniFi device / 2,000+ client support, 5 Gbps IPS routing, and redunant NVR storage.",
    specs: [
      { label: "Throughput", value: "10 Gbps IPS" },
      { label: "Ports", value: "8x GbE RJ45, 1x 10G SFP+" },
      { label: "Storage", value: '2x 3.5" HDD Bays' },
      { label: "Processor", value: "Quad-Core ARM Cortex-A57" },
    ],
    isNew: true,
    
    // ===== FIELD BARU - Contoh untuk Dream Machine Pro Max =====
    
    // SKU produk
    sku: "UDM-PRO-MAX",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/cloudgateways/2.udmpmx/1.p-utama-udm-pmx.png",
      "/images/cloudgateways/2.udmpmx/2.p-dimensi-udm-pmx.png",
      "/images/cloudgateways/2.udmpmx/3.p-spec-udm-pmx.png",
      "/images/cloudgateways/2.udmpmx/4.p-development-udm-pmx.png",
      "/images/cloudgateways/2.udmpmx/p-itb-udmpmx.png",
      "/images/cloudgateways/2.udmpmx/p-mkt0-udmpmx.jpg",
      "/images/cloudgateways/2.udmpmx/p-mkt1-udmpmx.jpg",
      "/images/cloudgateways/2.udmpmx/p-mkt2-udmpmx.jpg",
      "/images/cloudgateways/2.udmpmx/p-mkt3-udmpmx.jpg",
      "/images/cloudgateways/2.udmpmx/p-mkt4-udmpmx.jpg",
      "/images/cloudgateways/2.udmpmx/p-ov1-udmpmx.png",
      "/images/cloudgateways/2.udmpmx/p-ov2-udmpmx.png",
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/cloudgateways/2.udmpmx/p-ov1-udmpmx.png",
      "/images/cloudgateways/2.udmpmx/p-ov2-udmpmx.png",
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Ad Blocking",
      "Application-Aware Layer 7 Firewall",
      "System Memory 8Gb",
      "1.3\" touchscreen"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 43.7 x 285.6 mm (17.4 x 1.7 x 11.2\")" },
          { label: "UniFi App Network", value: "✓", isCheck: true },
          { label: "UniFi App Protect", value: "✓", isCheck: true },
          { label: "UniFi App Access", value: "✓", isCheck: true },
          { label: "UniFi App Talk", value: "✓", isCheck: true },
          { label: "UniFi App Connect", value: "✓", isCheck: true },
          { label: "Managed UniFi Devices", value: "200+" },
          { label: "Managed Access Hubs", value: "150+" },
          { label: "Simultaneous Users Connected", value: "2,000+" },
          { label: "Max. WAN Port Count", value: "8" },
          { label: "Default WAN Ports", value: "(1) 10G SFP+, (1) 2.5 GbE RJ45" },
          { label: "Port Layout", value: "8x GbE RJ45, 1x 10G SFP+, 1x 2.5 GbE RJ45" },
          { label: "IDS/IPS Throughput", value: "5 Gbps" },
          { label: "Concurrent Sessions", value: "500,000" },
          { label: "Form Factor", value: "Rack mount (1U)" },
          { label: "Redundancy", value: "Shadow Mode (VRRP) Gateway Failover DC Power Backup" }
        ]
      },
      {
        title: "Security",
        items: [
          { label: "Stateful Network", value: "✓", isCheck: true },
          { label: "Application-Aware Layer 7 Firewall", value: "✓", isCheck: true },
          { label: "DPI & Traffic Identification", value: "✓", isCheck: true },
          { label: "Zone-Based Firewall Advanced Filtering", value: "✓", isCheck: true },
          { label: "Content Filtering", value: "✓", isCheck: true },
          { label: "Intrusion Prevention (IPS/IDS)", value: "✓", isCheck: true },
          { label: "Ad Blocking", value: "✓", isCheck: true },
          { label: "IDS/IPS Signatures", value: "55.000+ With CyberSecure"},
          { label: "VLAN/Subnet-based Traffic Segmentation", value: "✓", isCheck: true },
        ]
      },
      {
        title: "VPN & SD-WAN",
        items: [
          { label: "UniFi ", value: "✓", isCheck: true },
          { label: "Site-to-Site VPN Site Magic", value: "✓",  },
          { label: "Site-to-Site VPN IPsec ", value: "✓", isCheck: true },
          { label: "Site-to-Site VPN OpenVPN", value: "✓", isCheck: true },
          { label: "VPN Server Identity Endpoint One-Click VPN ", value: "✓", isCheck: true },
          { label: "VPN Server Teleport Zero-Configuration VPN", value: "✓", isCheck: true },
          { label: "VPN Server WireGuard ", value: "✓", isCheck: true },
          { label: "VPN Server Open VPN ", value: "✓", isCheck: true },
          { label: "VPN Server L2TP", value: "✓", isCheck: true },
          { label: "VPN Client OpenVPN", value: "✓", isCheck: true },
          { label: "VPN Client WireGuard", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Networking", 
        items: [
          { label: "Interfaces", value: "(1) 10G SFP+ WAN, (1) 2.5GbE RJ45 WAN" },
          { label: "Switching", value: "(8) GbE RJ45 LAN" }
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Multi-WAN Load Balancing", value: "✓", isCheck: true },
          { label: "Shadow Mode (VRRP) High Availability", value: "✓", isCheck: true },
          { label: "LACP Port Aggregation", value: "✓", isCheck: true },
          { label: "Dynamic Routing OSPF", value: "✓", isCheck: true },
          { label: "DYnamic ROuting BGP", value: "✓", isCheck: true },
          { label: "Advanced QoS", value: "✓", isCheck: true },
          { label: "Multicast DNS (mDNS)", value: "✓", isCheck: true },
          { label: "Advanced NAT", value: "✓", isCheck: true },
          { label: "Integrated RADIUS Server", value: "✓", isCheck: true },
          { label: "RADIUS over TLS (RadSec)", value: "✓", isCheck: true },
          { label: "Additional Internet Failover with UniFi LTE", value: "✓", isCheck: true },
          { label: "Internet Quality and Outage Reporting", value: "✓", isCheck: true },
          { label: "MAC Address Table Size", value: "✓", isCheck: true },
          { label: "Policy-based WAN and VPN Routing", value: "✓", isCheck: true },
          { label: "Customizable DHCP Server", value: "✓", isCheck: true },
          { label: "IPv6 ISP Support", value: "✓", isCheck: true },
          { label: "IGMP Proxy", value: "✓", isCheck: true },
          { label: "Virtual Network Override", value: "✓", isCheck: true },
          { label: "All Traffic Flows", value: "✓", isCheck: true },

        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "NVR Storage", value: "(2) 3.5\" NVR HDD bays Built-in 128 GB SSD for Faster Experience" },
          { label: "Max. Power Consumption", value: "60W" },
          { label: "Power Method", value: "(1) Universal AC input, 100–240V AC, 2A Max., 50/60 Hz, (1) USP-RPS DC input, 11.5V DC, 8.7A" },
          { label: "Power Supply", value: "AC/DC, Internal, 100W" },
          { label: "Supported Voltage Range", value: "100-240V AC" },
          { label: "Heat Dissipation", value: "205 BTU/hr" },
          { label: "Processor", value: "Quad-core ARM® Cortex®-A57 at 2.0 GHz" },
          { label: "System Memory", value: "8 GB" },
          { label: "On-board Storage", value: "32 GB eMMC, 128 GB SSD (Integrated)" },
          { label: "Weight", value: "4.7 kg (19.4 lb)" },
          { label: "Enclosure Material", value: "Aluminium CNC, SGCC steel" },
          { label: "Mount Material", value: "SGCC steel" },
          { label: "LCM Display", value: "1.3\" touchscreen" },
          { label: "Management", value: "Ethernet, Bluetooth" },
          { label: "LEDs ( Ethernet, SFP+, RPS, PSU, HDD", value: "✓", isCheck: true },
          { label: "Button", value: "(1) Factory reset" },
          { label: "ESD/EMP Protection", value: "Air: ± 15kV, contact: ± 8kV" },
          { label: "Ambient Operating Temperature", value: "UniFi Network" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓", isCheck: true },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 06369-24-08356, SRRC" },
        
        ]
      }
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/cloudgateways/2.udmpmx/p-itb-udmpmx.png", },
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
          "Toolless assembly and device mounting"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
          { label: "Weight", value: "1.2 kg" },
          { label: "Material", value: "SGCC Steel" },
          { label: "Mounting", value: "1U Rack Mount" }
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
      {
        id: 2,
        name: "UniFi WAN Switch",
        image: "/images/dcs-box.png",
        price: 299,
        description: "10G SFP+ WAN Switch linking two Shadow Mode High Availability UniFi Gateways to a single ISP.",
        specs: [
          "Combine with Shadow Mode High Availability to ensure uninterrupted connectivity",
          "(1) 10G SFP+ ISP uplink and (2) 10G SFP+ downlink ports",
          "(2) AC inputs for power redundancy",
          "(1) GbE port for management with UniFi Network"
        ],
        detailedSpecs: [
          { label: "Max. Power Consumption", value: "13W" },
          { label: "Power Method", value: "(2) Universal input, 100–240V AC, 50/60 Hz" },
          { label: "Power Input Method", value: "AC input" },
          { label: "Power Supply", value: "(2) AC/DC, internal, 36W" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Management", value: "Ethernet" },
          { label: "With / Without Mounting Brackets", value: "2.3 kg (5.1 lb) / 2.2 kg (4.85 lb)" },
          { label: "Mount & Enclosure Material", value: "SGCC Steel" },
          { label: "ESD Protection", value: "Air: ± 16kV, contact: ± 22kV" },
          { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)" },
          { label: "LED Ethernet, SFP+, System", value: "✓" },
          { label: "Certification", value: "CE, FCC, IC, Anatel: 03715-25-08356" },
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/power-cable-efg"
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
      
    ]
  },
{
    id: "udm-pro",
    name: "Dream Machine Pro",
    category: "Cloud Gateways",
    subfilter: "Large Scale",
    image: "/images/cloudgateways/3.udmpro/1.p-utama-udmpro.png",
    shortDescription:
      "10G Cloud Gateway with 100+ UniFi device / 1,000+ client support and 3.5 Gbps IPS routing.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
    
    // ===== FIELD BARU =====
    sku: "UDM-PRO",
    images: [
      "/images/cloudgateways/3.udmpro/1.p-utama-udmpro.png",
      "/images/cloudgateways/3.udmpro/2.p-dimensi-udmpro.png",
      "/images/cloudgateways/3.udmpro/3.p-spec-udmpro.png",
      "/images/cloudgateways/3.udmpro/4.p-development-udmpro.png",
      "/images/cloudgateways/3.udmpro/p-itb-udmpro.png",
      "/images/cloudgateways/3.udmpro/p-mkt0-udmpro.jpg",
      "/images/cloudgateways/3.udmpro/p-mkt1-udmpro.jpg",
      "/images/cloudgateways/3.udmpro/p-mkt2-udmpro.jpg",
      "/images/cloudgateways/3.udmpro/p-mkt3-udmpro.jpg",
      "/images/cloudgateways/3.udmpro/p-mkt4-udmpro.jpg",
      "/images/cloudgateways/3.udmpro/p-ov1-udmpro.png",
      "/images/cloudgateways/3.udmpro/p-ov2-udmpro.png"
    ],
    overviewImages: [
      "/images/cloudgateways/3.udmpro/p-ov1-udmpro.png",
      "/images/cloudgateways/3.udmpro/p-ov2-udmpro.png"
    ],
    bulletPoints: [
      "Certifications : CE, FCC, IC, Anatel: 001136-20-08356, SRRC",
      "Power Supply : AC/DC, Internal, 50W",
      "Processor : Quad-core ARM® Cortex®-A57 at 1.7 GHz",
      "System Memory : 4 GB"
    ],
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 43.7 x 285.6 mm (17.4 x 1.7 x 11.2\")" },
          { label: "UniFi Application Suite Network", value: "✓" },
          { label: "UniFi Application Suite Protect", value: "✓" },
          { label: "UniFi Application Suite Access", value: "✓" },
          { label: "UniFi Application Suite Talk", value: "✓" },
          { label: "UniFi Application Suite Connect", value: "✓" },
          { label: "Managed UniFi Devices", value: "100+" },
          { label: "Manages Access Hubs", value: "150" },
          { label: "Simultaneous Users Connected", value: "1.000+" },
          { label: "Max. WAN Port Count", value: "8" },
          { label: "Default WAN Ports", value: "(1) 10G SFP+, (1) GbE RJ45" },
          { label: "IDS/IPS Throughput", value: "3.5 Gbps" },
          { label: "Form Factor", value: "Rack mount (1U)" },
          { label: "Redundancy", value: "Shadow Mode (VRRP) Gateway Failover DC Power Backup" },
          { label: "UniFi", value: "✓" },
          
        ]
      },
      {
        title: "Security",
        items: [
          { label: "Stateful Firewall", value: "✓" },
          { label: "Application-Aware Layer 7 Firewall", value: "✓" },
          { label: "DPI & Traffic Identification", value: "✓" },
          { label: "Zone-Based Firewall Advanced Filtering", value: "✓" },
          { label: "Content Filtering", value: "✓" },
          { label: "Intrusion Prevention (IPS/IDS)", value: "✓" },
          { label: "Ad Blocking", value: "✓" },
          { label: "IDS/IPS Signatures", value: "55.000+ with CyberSecure" },
          { label: "VLAN/Subnet-based Traffic Segmentation", value: "✓" },

        ]
      },
      {
        title: "VPN & SD-WAN",
        items: [
          { label: "License-Free SD-WAN", value: "✓" },
          { label: "Site-to-Site VPN Site Magic", value: "✓" },
          { label: "Site-to-Site VPN IPsec", value: "✓" },
          { label: "Site-to-Site VPN OpenVPN", value: "✓" },
          { label: "VPN Server Identity Endpoint One-Click VPN", value: "✓" },
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
          { label: "Shadow Mode (VRRP) High Availability", value: "✓" },
          { label: "LACP Port Aggregation", value: "✓" },
          { label: "Dynamic OSPF & BGP", value: "✓" },
          { label: "Advanced QoS", value: "✓" },
          { label: "Multicast DNS (mDNS)", value: "✓" },
          { label: "Advanced NAT", value: "✓" },
          { label: "Integrated RADIUS Server", value: "✓" },
          { label: "Rdaius over TLS (RadSec)", value: "✓" },
          { label: "Additional Internet Failover with UniFi LTE Backup", value: "✓" },
          { label: "Internet Quality and Outage reporting", value: "✓" },
          { label: "MAC Address Table Size", value: " 4.000"},
          { label: "Policy-based WAN and VPN Routing", value: "✓"},
          { label: "Customizable DHCP Server", value: "✓"},
          { label: "IPv6 ISP Support", value: "✓"},
          { label: "IGMP Proxy", value: "✓"},
          {label: "Virtual Network Override", value: "✓"},
          { label: "All Traffice Flows", value: "✓"}
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "NVR Storage", value: "(1) 3.5\" NVR HDD bay" },
          { label: "Max. Power Consumption", value: "33W" },
          { label: "Power Supply", value: "AC/DC, Internal, 50W" },
          { label: "Supported Voltage Range", value: "100-240V AC" },
          { label: "Heat Dissipation", value: "112 BTU/hr" },
          { label: "Processor", value: "Quad-core ARM® Cortex®-A57 at 1.7 GHz"},
          { label: "System Memory", value: "4 GB" },
          { label: "On-board Storage", value: "16 Gb" },
          { label: "Weight", value: "3.9 kg (8.6 lb)" },
          { label: "Enclosure Material", value: "Aluminium CNC, SGCC steel" },
          { label: "Mount Material", value: "SGCC steel" },
          { label: "LCM Display", value: "1.3\" touchscreen" },
          { label: "Management", value: "Ethernet, Bluetooth" },
          { label: "LEDs (Ethernet, SFP+, RPS, PSU, HDD)", value: "✓" },
          { label: "Buttons", value: "(1) Factory reset" },
          { label: "ESD/EMP Protection", value: "Air: ± 15kV, contact: ± 8kV" },
          { label: "Ambient Operating Temperature", value: "-10 to 40° C (14 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 001136-20-08356, SRRC" },
        ]
      },


    ],
    inTheBox: [
      { name: "Device", image: "/images/cloudgateways/3.udmpro/p-itb-udmpro.png", },
    ],
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
          "Toolless assembly and device mounting"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
          { label: "Weight", value: "1.2 kg" },
          { label: "Material", value: "SGCC Steel" },
          { label: "Mounting", value: "1U Rack Mount" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
      {
        id: 2,
        name: "UniFi WAN Switch",
        image: "/images/dcs-box.png",
        price: 299,
        description: "10G SFP+ WAN Switch linking two Shadow Mode High Availability UniFi Gateways to a single ISP.",
        specs: [
          "Combine with Shadow Mode High Availability to ensure uninterrupted connectivity",
          "(1) 10G SFP+ ISP uplink and (2) 10G SFP+ downlink ports",
          "(2) AC inputs for power redundancy",
          "(1) GbE port for management with UniFi Network"
        ],
        detailedSpecs: [
          { label: "Max. Power Consumption", value: "13W" },
          { label: "Power Method", value: "(2) Universal input, 100–240V AC, 50/60 Hz" },
          { label: "Power Input Method", value: "AC input" },
          { label: "Power Supply", value: "(2) AC/DC, internal, 36W" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Management", value: "Ethernet" },
          { label: "With / Without Mounting Brackets", value: "2.3 kg (5.1 lb) / 2.2 kg (4.85 lb)" },
          { label: "Mount & Enclosure Material", value: "SGCC Steel" },
          { label: "ESD Protection", value: "Air: ± 16kV, contact: ± 22kV" },
          { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)" },
          { label: "LED Ethernet, SFP+, System", value: "✓" },
          { label: "Certification", value: "CE, FCC, IC, Anatel: 03715-25-08356" },
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/power-cable-efg"
      },
      {
        id: 3,
        name: "SFP+ to RJ45 10GbE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP+ to RJ45 transceiver module that supports 10G connections up to 100 m.",
        specs: [
          "Supported data rates: 10 / 5 / 2.5 / 1 Gbps",
          "Compatible with SFP+ and SFP interfaces",
          "Supports connections up to 100 m*(*Ethernet cable is not included.)"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "RJ45" },
          { label: "Supported Media", value: "Copper" },
          { label: "Supported Data Rate", value: "1 / 2.5 / 5 / 10 Gbps" },
          { label: "Supported Cable Distance", value: "10 Gbps(Cat 6A): 100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "1.9W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
        
        
        
        ],
        productLink: "/products/sfp-module-10g"
      },
      {
        id: 4,
        name: "Hot-Swappable Power Module (150W)",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Replacement hot-swappable power module for Enterprise Fortress Gateway and Gateway Enterprise.",
        specs: [
          "150W (12V) AC-to-DC power supply",
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "185 x 73.5 x 40 mm (7.3 x 2.9 x 1.6 inches)" },
          { label: "Weights", value: "733 g (1.6 lb)" },
          { label: "Enclosure Material", value: "SGCC steel" },
          { label: "Input Voltage Range", value: "100–240V AC" },
          { label: "Input Frequency", value: "50/60 Hz" },
          { label: "Output Voltage", value: "12V DC at 12.5A" },
          { label: "Input Current", value: "7A Max. at 120V AC, 3.6A Max. at 230V AC" },
          { label: "Inrush Current", value: "<50A peak" },
          { label: "Efficiency", value: "Full load >81%" },
          { label: "Total Output Power", value: "150W" },
          { label: "Over Voltage Protection", value: "13.5V" },
          { label: "Over Current Protection", value: "18.5–22.5A" },
          { label: "Ambient Operating Temperature", value: "-5 to 50° C (23 to 122° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant", value: "✓" },
          { label: "Certifications", value: "CE, FCC, IC, UKCA, KC, CCC, RoHS" },
        ],
        productLink: "/products/sfp-module-10g"
      }
    ]
  },
{
    id: "udm-se",
    name: "Dream Machine Special Edition",
    category: "Cloud Gateways",
    subfilter: "Large Scale",
    image: "/images/cloudgateways/4.udms/1.p-utama-udms.png",
    shortDescription:
      "10G Cloud Gateway with 100+ UniFi device / 1,000+ client support, 3.5 Gbps IPS routing, and built-in PoE switching.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ], 
    // SKU produk
    sku: "EFG-200",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/cloudgateways/4.udms/1.p-utama-udms.png",
      "/images/cloudgateways/4.udms/2.p-dimensi-udms.png",
      "/images/cloudgateways/4.udms/3.p-spec-udms.png",
      "/images/cloudgateways/4.udms/4.p-development-udms.png",
      "/images/cloudgateways/4.udms/p-itb-udms.jpg",
      "/images/cloudgateways/4.udms/p-mkt0-udms.png",
      "/images/cloudgateways/4.udms/p-mkt1-udms.png",
      "/images/cloudgateways/4.udms/p-mkt2-udms.png",
      "/images/cloudgateways/4.udms/p-mkt3-udms.png",
      "/images/cloudgateways/4.udms/p-mkt4-udms.png",
      "/images/cloudgateways/4.udms/p-ov1-udms.png",
      "/images/cloudgateways/4.udms/p-ov2-udms.png"
      
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/cloudgateways/4.udms/p-ov1-udms.png",
      "/images/cloudgateways/4.udms/p-ov2-udms.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Power Supply : AC/DC, Internal, 240W",
      "Processor : Quad-core ARM® Cortex®-A57 at 1.7 GHz",
      "System Memory : 4 GB ",
      "Certifications : CE, FCC, IC, Anatel: 07309-22-08356, SRRC"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 43.7 x 285.6 mm (17.4 x 1.7 x 11.2\")" },
          { label: "UniFi Application Suite Network", value: "✓", isCheck: true },
          { label: "UniFi Application Suite Protect", value: "✓", isCheck: true },
          { label: "UniFi Application Suite Access", value: "✓", isCheck: true },
          { label: "UniFi Application Suite Talk", value: "✓", isCheck: true },
          { label: "UniFi Application Suite Connect", value: "✓", isCheck: true },
          { label: "Managed UniFi Devices", value: "100+" },
          { label: "Managed Camera", value: "(24) HD, (14) 2K, (8) 4K" },
          { label: "Managed Access Hubs", value: "150" },
          { label: "Simultaneous Users Connected ", value: "1.000+" },
          { label: "Max. WAN Port Count ", value: "8" },
          { label: "Default WAN Port Count ", value: "(1) 10G SFP+, (1) 2.5 GbE RJ45" },
          { label: "IDS/IPS Throughput ", value: "100+" },
          { label: "Form Factor ", value: "Rack mount (1U)" },
          { label: "Redundancy ", value: "Shadow Mode (VRRP) Gateway Failover, DC Power Backup" },
          { label: "Managed ", value: "100+" },
          { label: "Managed ", value: "100+" },
          { label: "Managed ", value: "100+" },
        ]
      },
      {
        title: "Security",
        items: [
          { label: "Stateful Firewall", value: "✓", isCheck: true },
          { label: "Application-Aware Layer 7 Firewall", value: "✓", isCheck: true },
          { label: "DPI & Traffic Identification", value: "✓", isCheck: true },
          { label: "Zone-Based Firewall Advanced Filtering", value: "✓", isCheck: true },
          { label: "Content Filtering", value: "✓", isCheck: true },
          { label: "Intrusion Prevention (IPS/IDS)", value: "✓", isCheck: true },
          { label: "Ad Blocking", value: "✓", isCheck: true },
          { label: "IDS/IPS Signatures", value: "55.000+ with CyberSecure" },
          { label: "VLAN/Subnet-based Traffic Segmentation", value: "✓", isCheck: true },
        ]
      },
      {
        title: "VPN & SD-WAN",
        items: [
          { label: "License-Free SD-WAN", value: "✓", isCheck: true },
          { label: "Site-to-Site VPN", value: "✓", isCheck: true },
          { label: "Site-to-Site IPsec", value: "✓", isCheck: true },
          { label: "Site-to-Site OpenVPN", value: "✓", isCheck: true },
          { label: "VPN Server Identity Endpoint One-Click VPN", value: "✓", isCheck: true },
          { label: "VPN Server Teleport Zero-Configuration VPN", value: "✓", isCheck: true },
          { label: "VPN Server WireGuard", value: "✓", isCheck: true },
          { label: "VPN Server OpenVPN", value: "✓", isCheck: true },
          { label: "VPN Server L2TP", value: "✓", isCheck: true },
          { label: "VPN Client OpenVPN", value: "✓", isCheck: true },
          { label: "VPN Client WireGuard", value: "✓", isCheck: true },
          
        ]
      },
      {
        title: "Networking",
        items: [
          { label: "Multi-WAN Load Balancing ", value: "✓", isCheck: true },
          { label: "Shadow Mode (VRRP) High Availability", value: "✓", isCheck: true },
          { label: "LACP Port Aggregation", value: "✓", isCheck: true },
          { label: "Dynamic Routing OSPF", value: "✓", isCheck: true },
          { label: "Dynamic Routing BGP", value: "✓", isCheck: true },
          { label: "Advanced QoS", value: "✓", isCheck: true },
          { label: "Multicast DNS (mDNS)", value: "✓", isCheck: true },
          { label: "Advanced NAT", value: "✓", isCheck: true },
          { label: "Integrated RADIUS Server", value: "✓", isCheck: true },
          { label: "RADIUS over TLS (RadSec)", value: "✓", isCheck: true },
          { label: "Additional Internet Failover with UniFi LTE Backup", value: "✓", isCheck: true },
          { label: "Internet Quality and Outage Reporting", value: "✓", isCheck: true },
          { label: "MAC Address Table Size", value: "4.000"},
          { label: "Policy-based WAN and VPN Routing", value: "✓", isCheck: true },
          { label: "Customizable DHCP Server", value: "✓", isCheck: true },
          { label: "IPv6 ISP Support", value: "✓", isCheck: true },
          { label: "IGMP Proxy", value: "✓", isCheck: true },
          { label: "Virtual Network Override", value: "✓", isCheck: true },
          { label: "All Traffic Flows", value: "✓", isCheck: true },
          
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "NVR Storage", value: "1) 3.5\" NVR HDD bay" },
          { label: "PoE Budget", value: "180W" },
          { label: "Max. PoE Wattage PoE", value: "15.4W" },
          { label: "Max. PoE Wattage PoE", value: "30W" },
          { label: "Voltage Range PoE Mode", value: "PoE: 44-57V, PoE+: 50-57V" },
          { label: "Max. Power Consumption", value: "50W (Excluding PoE Output" },
          { label: "Power Method", value: "(1) Universal AC input 100-240V AC, 50-60 HZ" },
          { label: "Power Supply", value: "AC/DC, internal, 240W" },
          { label: "Supported Voltage Range", value: "100-240V AC" },
          { label: "Heat Dissipation", value: "170 BTU/hr (Excluding PoE Output)" },
          { label: "Processor", value: "Quad-core ARM® Cortex®-A57 at 1.7 GHz" },
          { label: "System Memory", value: "4 GB" },
          { label: "On-board Storage", value: "16 GB eMMC, 128 GB SSD (Integrated)" },
          { label: "Weight", value: "5 kg (10..9 lb)" },
          { label: "Enclosure Material", value: "Aluminium CNC, SGCC steel" },
          { label: "Mount Material", value: "SGCC steel" },
          { label: "LCM Display", value: "1.3\" Touchscreen" },
          { label: "Management", value: "Ethernet, Bluetooth" },
          { label: "LEDs(Ethernet, SFP+, RPS, PSU, HDD)", value: "✓", isCheck: true },
          { label: "Button", value: "(1) Factory Reset" },
          { label: "ESD/EMP Protection", value: "Air: ± 15kV, contact: ± 8kV" },
          { label: "Ambient Operating Temperature", value: "-10 to 40° C (14 to 104° F)" },
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing" },
          { label: "NDAA Compliant",  value: "✓", isCheck: true },
          { label: "Certifications", value: "CE, FCC, IC, Anatel: 07309-22-08356, SRRC" },
        ]
      },
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/cloudgateways/4.udms/p-itb-udms.jpg", },
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
          "Toolless assembly and device mounting"
        ],
        detailedSpecs: [
          { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
          { label: "Weight", value: "1.2 kg" },
          { label: "Material", value: "SGCC Steel" },
          { label: "Mounting", value: "1U Rack Mount" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
      },
      {
        id: 2,
        name: "UniFi WAN Switch",
        image: "/images/dcs-box.png",
        price: 299,
        description: "10G SFP+ WAN Switch linking two Shadow Mode High Availability UniFi Gateways to a single ISP.",
        specs: [
          "Combine with Shadow Mode High Availability to ensure uninterrupted connectivity",
          "(1) 10G SFP+ ISP uplink and (2) 10G SFP+ downlink ports",
          "(2) AC inputs for power redundancy",
          "(1) GbE port for management with UniFi Network"
        ],
        detailedSpecs: [
          { label: "Max. Power Consumption", value: "13W" },
          { label: "Power Method", value: "(2) Universal input, 100–240V AC, 50/60 Hz" },
          { label: "Power Input Method", value: "AC input" },
          { label: "Power Supply", value: "(2) AC/DC, internal, 36W" },
          { label: "Supported Voltage Range", value: "100–240V AC" },
          { label: "Management", value: "Ethernet" },
          { label: "With / Without Mounting Brackets", value: "2.3 kg (5.1 lb) / 2.2 kg (4.85 lb)" },
          { label: "Mount & Enclosure Material", value: "SGCC Steel" },
          { label: "ESD Protection", value: "Air: ± 16kV, contact: ± 22kV" },
          { label: "Ambient Operating Temperature", value: "-5 to 40° C (23 to 104° F)" },
          { label: "LED Ethernet, SFP+, System", value: "✓" },
          { label: "Certification", value: "CE, FCC, IC, Anatel: 03715-25-08356" },
          { label: "NDAA Compliant", value: "✓" },
        ],
        productLink: "/products/power-cable-efg"
      },
      {
        id: 3,
        name: "SFP+ to RJ45 10GbE",
        image: "/images/dcs-box.png",
        price: 299,
        description: "SFP+ to RJ45 transceiver module that supports 10G connections up to 100 m.",
        specs: [
          "Supported data rates: 10 / 5 / 2.5 / 1 Gbps",
          "Compatible with SFP+ and SFP interfaces",
          "Supports connections up to 100 m*(*Ethernet cable is not included.)"
        ],
        detailedSpecs: [
          { label: "Form Factor", value: "SFP" },
          { label: "Connector", value: "RJ45" },
          { label: "Supported Media", value: "Copper" },
          { label: "Supported Data Rate", value: "1 / 2.5 / 5 / 10 Gbps" },
          { label: "Supported Cable Distance", value: "10 Gbps(Cat 6A): 100 m (328 ft)" },
          { label: "Max. Power Consumption", value: "1.9W" },
          { label: "Pack Options", value: "Single Unit" },
          { label: "Ambient Operating Temperature", value: "0 to 70° C (32 to 158° F)" },
        
        
        
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
    ]
  },
{
    id: "ucg-fiber",
    name: "Cloud Gateways Fiber",
    category: "Cloud Gateways",
    subfilter: "Compact",
    image: "/images/cloudgateways/5.ucgf/1.p-utama-ucgf.png",
    shortDescription:
      "Desktop 10G Cloud Gateway with integrated 4-port 2.5 GbE switch, selectable NVR storage, and full UniFi application support.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "UCG-FIBER",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/cloudgateways/5.ucgf/1.p-utama-ucgf.png",
      "/images/cloudgateways/5.ucgf/2.p-dimensi-ucgf.png",
      "/images/cloudgateways/5.ucgf/3.p-spec-ucgf.png",
      "/images/cloudgateways/5.ucgf/4.p-development-ucgf.png",
        
      "/images/cloudgateways/5.ucgf/p-mkt0-ucgf.jpg",
      "/images/cloudgateways/5.ucgf/p-mkt1-ucgf.jpg",
      "/images/cloudgateways/5.ucgf/p-mkt2-ucgf.jpg",
      "/images/cloudgateways/5.ucgf/p-mkt3-ucgf.jpg",
      "/images/cloudgateways/5.ucgf/p-mkt4-ucgf.jpg",
      "/images/cloudgateways/5.ucgf/p-ov1-ucgf.png",
      "/images/cloudgateways/5.ucgf/p-ov2-ucgf.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/cloudgateways/5.ucgf/p-ov1-ucgf.png",
      "/images/cloudgateways/5.ucgf/p-ov2-ucgf.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Desktop 10G Cloud Gateway with integrated 4-port 2",
      "5 GbE switch",
      "selectable NVR storage",
      "and full UniFi application support"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions",  value: "212.8 x 127.6 x 30mm (8.4 x 5 x 1.2\")"},
          { label: "UniFi Application Suite Network",  value: "✓", isCheck: true },
          { label: "Unifi Applicaiton Suite Protect",  value: "✓", isCheck: true },
          { label: "UniFi Application Suite Access",  value: "✓", isCheck: true },
          { label: "UniFi Application Suite Talk",  value: "✓", isCheck: true },
          { label: "UniFi Application Suite Connect",  value: "✓", isCheck: true },
          { label: "Managed UniFi Devices",  value: "50+"},
          { label: "Managed Camera",  value: "(15)HD, (72K, (5)4K" },
          { label: "Managed Access Hubs",  value: "150" },
          { label: "Simultaneous Users Connected",  value: "1.000+"},
          { label: "Max. WAN Port Count",  value: "8"},
          { label: "Default WAN Ports",  value: "(1) 10G SFP+, (1) 10 GbE RJ45"},
          { label: "Port Layout 2.5 GbE RJ45",  value: "4 (2.5G/1G/100M/10M)" },
          { label: "Port Layout 10 GbE RJ45",  value: "1(10G/2.5G/1G)"},
          { label: "Port Layout 10G SFP+",  value: "2(10G/1G)"},
          { label: "IDS/IPS Throughput",  value: "5 Gbps" },
          { label: "Form Factor",  value: "Compact Desktop" },

        ]
      },
      {
        title: "Security",
        items: [
          { label: "Stateful Firewall",  value: "✓", isCheck: true },
          { label: "Application-Aware Layer 7 Firewall",  value: "✓", isCheck: true },
          { label: "DPI & Traffic Identification",  value: "✓", isCheck: true },
          { label: "Zone-Based Firewall Advanced Filtering",  value: "✓", isCheck: true },
          { label: "Content Filtering",  value: "✓", isCheck: true },
          { label: "Intrusion Prevention (IPS/IDS)",  value: "✓", isCheck: true },
          { label: "Ad Blocking",  value: "✓", isCheck: true },
          { label: "IDS/IPS Signatures",  value: "55.000+ with CyberSecure"},
          { label: "VLAN/Subnet-based Traffic Segmentation",  value: "✓", isCheck: true },
        ]
      },
      {
        title: "VPN & SD-WAN",
        items: [
          { label: "License-Free SD-WAN",  value: "✓", isCheck: true },
          { label: "Site-to-Site Site Magic",  value: "✓", isCheck: true },
          { label: "Site-to-Site IPsec",  value: "✓", isCheck: true },
          { label: "Site-to-Site OpenVPN",  value: "✓", isCheck: true },
          { label: "VPN Server Identitiy Endpoint One-Click VPN",  value: "✓", isCheck: true },
          { label: "VPN Server Teleport Zero-Configuration VPN",  value: "✓", isCheck: true },
          { label: "VPN Server WireGuard",  value: "✓", isCheck: true },
          { label: "VPN Server Open VPN",  value: "✓", isCheck: true },
          { label: "VPN Server L2TP",  value: "✓", isCheck: true },
          { label: "VPN Client OpenVPN",  value: "✓", isCheck: true },
          { label: "VPN Client WireGuard",  value: "✓", isCheck: true },
        { label: "UniFi",  value: "✓", isCheck: true },
        ]
      },
      {
        title: "Networking",
        items: [
        { label: "Multi-WAN Load Balancing",  value: "✓", isCheck: true },
        { label: "Dynamic Routing OSPF",  value: "✓", isCheck: true },
        { label: "Advanced QoS",  value: "✓", isCheck: true },
        { label: "Multicast DNS (mDNS)",  value: "✓", isCheck: true },
        { label: "Advanced NAT",  value: "✓", isCheck: true },
        { label: "Integrated RADIUS Server",  value: "✓", isCheck: true },
        { label: "RADIUS over TLS (RadSec)",  value: "✓", isCheck: true },
        { label: "Additional Internet Failover with UniFi LTE Backup",  value: "✓", isCheck: true },
        { label: "Internet Quality and Outage Reporting",  value: "✓", isCheck: true },
        { label: "MAC Address Table Size",  value: "4.000"},
        { label: "Virtual Network Override",  value: "✓", isCheck: true },
        { label: "All Traffic Flows",  value: "✓", isCheck: true },
        ]
      },
      {
        title: "Hardware",
        items: [
        { label: "NVR Storage",  value: "Selectable NVMe SSD up to 2 TB"},
        { label: "PoE Budget",  value: "30W"},
        { label: "Voltage Range PoE Mode",  value: "50-70V"},
        { label: "Max. Power Consumption",  value: "29.4W (Excluding PoE output"},
        { label: "Power Supply",  value: "DC jack (54V DC/1.1A)"},
        { label: "Supported Voltage Range",  value: "100-240V AC"},
        { label: "Heat Dissipation",  value: "170 BTU/hr (Excluding PoE Output"},
        { label: "Processor",  value: "Quad-core ARM® Cortex®-A57 at 1.7 GHz"},
        { label: "System Memory",  value: "4 GB"},
        { label: "On-board Storage",  value: "16 GB eMMC, 128 GB SSD(Integrated)"},
        { label: "Weight",  value: "5 kg (10.9 lb)"},
        { label: "Enclosure Material",  value: "Aluminium CNC, SGCC steel"},
        { label: "Mount Material",  value: "SGCC steel"},
        { label: "LCM Display",  value: "1.3\" Touchscreen"},
        { label: "Management",  value: "Ethernet, Bluetooth"},
        { label: "LEDs(Ethernet, SFP+, RPS, PSU, HDD)",  value: "✓", isCheck: true},
        { label: "Button",  value: "(1) Factory Reset"},
        { label: "ESD/EMP Protection",  value: "Air: ± 15kV, contact: ± 8kV"},
        { label: "Ambient Operating Temperature",  value: "-10 to 40° C (14 to 104° F)"},
        { label: "Ambient Operating Humidity",  value: "5 to 95% noncondensing"},
        { label: "NDAA Compliant",  value: "✓", isCheck: true},
        { label: "Certifications",  value: "CE, FCC, IC, Anatel: 07309-22-08356, SRRC"},
        
        ]
      },


    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/cloudgateways/5.ucgf/p-itb-ucgf.jpg", },
    ],
  },
{
    id: "ucg-max",
    name: "Cloud Gateways Max",
    category: "Cloud Gateways",
    subfilter: "Compact",
    image: "/images/cloudgateways/6.ucgm/1.p-utama-ucgm.png",
    shortDescription:
      "Compact 2.5G Cloud Gateway with 30+ UniFi device / 300+ client support, 2.3 Gbps IPS routing, and selectable NVR storage.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "UCG-MAX",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/cloudgateways/6.ucgm/1.p-utama-ucgm.png",
      "/images/cloudgateways/6.ucgm/2.p-dimensi-ucgm.png",
      "/images/cloudgateways/6.ucgm/3.p-spec-ucgm.png",
      "/images/cloudgateways/6.ucgm/4.p-development-ucgm.png",
      "/images/cloudgateways/6.ucgm/p-itb-ucgm.png",
      "/images/cloudgateways/6.ucgm/p-mkt0-ucgm.jpg",
      "/images/cloudgateways/6.ucgm/p-mkt1-ucgm.jpg",
      "/images/cloudgateways/6.ucgm/p-mkt2-ucgm.jpg",
      "/images/cloudgateways/6.ucgm/p-mkt3-ucgm.jpg",
      "/images/cloudgateways/6.ucgm/p-ov1-ucgm.png",
      "/images/cloudgateways/6.ucgm/p-ov2-ucgm.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/cloudgateways/6.ucgm/p-ov1-ucgm.png",
      "/images/cloudgateways/6.ucgm/p-ov2-ucgm.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "5G Cloud Gateway with 30+ UniFi device / 300+ client support",
      "3 Gbps IPS routing",
      "and selectable NVR storage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions ",  value: "141.8 x 127.6 x 30mm"},
          { label: "UniFi Application Suite Network",  value: "✓", isCheck: true},
          { label: "UniFi Application Suite Protect",  value: "✓", isCheck: true},
          { label: "UniFi Application Suite Access",  value: "✓", isCheck: true},
          { label: "UniFi Application Suite Talk",  value: "✓", isCheck: true},
          { label: "UniFi Application Suite Connect",  value: "✓", isCheck: true},
          { label: "Managed UniFi Devices",  value: "30+"},
          { label: "Managed Cameras",  value: "(15)HD, (8)2K, (5)4K"},
          { label: "Managed Access Hubs",  value: "50"},
          { label: "Simultaneous Users Connected",  value: "300+"},
          { label: "Max. WAN Port Count",  value: "4"},
          { label: "Default WAN Ports",  value: "(1) 2.5 GbE RJ45"},
          { label: "Port Layout 2.5 GbE RJ45",  value: "5(2.5G/1G/100M/10M"},
          { label: "IDS/IPS Throughput",  value: "2.3 Gbps"},
          { label: "Form Factor",  value: "Compact Desktop"},
        ]
      },
      {
        title: "Security",
        items: [
          { label: "Stateful Firewall", value: "✓", isCheck: true },
          { label: "Application-Aware Layer 7 Firewall", value: "✓", isCheck: true},
          { label: "DPI & Traffic Identification", value: "✓", isCheck: true },
          { label: "Zone-Based Firewall Advanced Filtering", value: "✓", isCheck: true },
          { label: "Content Filtering", value: "✓", isCheck: true },
          { label: "Stateful Intrusion Prevention (IPS/IDS)", value: "✓", isCheck: true },
          { label: "Ad Blocking", value: "✓", isCheck: true },
          { label: "IDS/IPS Signatures", value: "55.000+ with CyberSecure" },
          { label: "VLAN/Subnet-based Traffic Segmentation", value: "✓", isCheck: true },
          
        ]
      },
      {
        title: "Software",
        items: [
          { label: "License-Free SD-WAN", value: "✓", isCheck: true },          
          { label: "Site-to-Site VPN Site Magice", value: "✓", isCheck: true },          
          { label: "Site-to-Site VPN IPsec", value: "✓", isCheck: true },          
          { label: "Site-to-Site VPN OpenVPN", value: "✓", isCheck: true },          
          { label: "VPN Server Identity Endpoint One-Click VPN", value: "✓", isCheck: true },          
          { label: "VPN Server Teleport Zero-Configuration VPN", value: "✓", isCheck: true },          
          { label: "VPN Server WireGuard", value: "✓", isCheck: true },          
          { label: "VPN Server OpenVPN", value: "✓", isCheck: true },          
          { label: "VPN Server L2TP", value: "✓", isCheck: true },          
          { label: "VPN Client OpenVPN", value: "✓", isCheck: true },          
          { label: "VPN Client WireGuard", value: "✓", isCheck: true },          
        ]
      },
      {
        title: "Networking",
        items: [
          { label: "Multi-WAN Load Balancing", value: "✓", isCheck: true },          
          { label: "Dynamic Routing OSPF", value: "✓", isCheck: true },          
          { label: "Advanced QoS", value: "✓", isCheck: true },          
          { label: "Multicast DNS (mDNS)", value: "✓", isCheck: true },          
          { label: "Advanced NAT", value: "✓", isCheck: true },          
          { label: "Integrated RADIUS Server", value: "✓", isCheck: true },          
          { label: "RADIUS over TLS (RadSec)", value: "✓", isCheck: true },          
          { label: "Additional Internet Failover with UniFi LTE", value: "✓", isCheck: true },          
          { label: "Internet Quality and Outage Reporting", value: "✓", isCheck: true },          
          { label: "MAC Address Table Size", value: "2.000" },          
          { label: "Policy-based WAN and VPN Routing", value: "✓", isCheck: true },          
          { label: "Customizable DHCP Server", value: "✓", isCheck: true },          
          { label: "IPv6 ISP Support", value: "✓", isCheck: true },          
          { label: "IGMP Proxy", value: "✓", isCheck: true },          
          { label: "Virtual Network Override", value: "✓", isCheck: true },          
          { label: "All Traffic Flows", value: "✓", isCheck: true },          
                  
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Multi-WAN Load Balancing", value: "✓", isCheck: true },          
          { label: "NVR Storage", value: "Selectable NVMe SSD up to 2TB"},          
          { label: "Max. Power Consumption", value: "16.1W"},         
          { label: "Power Method", value: "USB Type C (5V DC/5A)"},         
          { label: "Power Supply", value: "USB type C (5V DC/5A) (Adapter included)"},         
          { label: "Supported Voltage Range", value: "100-240V AC"},         
          { label: "Heat Dissipation", value: "55 BTU/hr"},         
          { label: "Processor", value: "Quad-core ARM® Cortex®-A53 at 1.5 GHz"},         
          { label: "System Memory", value: "Sel"},         
          { label: "Weight", value: "Sel"},         
          { label: "Enclosure Material", value: "Sel"},         
          { label: "LCM Display", value: "Sel"},         
          { label: "Management", value: "Sel"},         
          { label: "LEDs Ethernet", value: "✓", isCheck: true },          
          { label: "Button", value: "(1) Factory Reset"},         
          { label: "ESD/EMP Protection", value: "Air: ± 8kV, contact: ± 4kV"},         
          { label: "Ambient Operating Temperature", value: "-10 to 40° C (14 to 104° F)"},         
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing"},         
          { label: "NDAA Compliant", value: "✓", isCheck: true },          
          { label: "Certification", value: "CE, FCC, IC, Anatel, SRRC"},        
                
        ]
      },
      {
        title: "Software",
        items: [
          { label: "Multi-WAN Load Balancing", value: "✓", isCheck: true },          
          { label: "NVR Storage", value: "Selectable NVMe SSD up to 2TB"},          
          { label: "Max. Power Consumption", value: "16.1W"},         
          { label: "Power Method", value: "USB Type C (5V DC/5A)"},         
          { label: "Power Supply", value: "USB type C (5V DC/5A) (Adapter included)"},         
          { label: "Supported Voltage Range", value: "100-240V AC"},         
          { label: "Heat Dissipation", value: "55 BTU/hr"},         
          { label: "Processor", value: "Quad-core ARM® Cortex®-A53 at 1.5 GHz"},         
          { label: "System Memory", value: "Sel"},         
          { label: "Weight", value: "Sel"},         
          { label: "Enclosure Material", value: "Sel"},         
          { label: "LCM Display", value: "Sel"},         
          { label: "Management", value: "Sel"},         
          { label: "LEDs Ethernet", value: "✓", isCheck: true },          
          { label: "Button", value: "(1) Factory Reset"},         
          { label: "ESD/EMP Protection", value: "Air: ± 8kV, contact: ± 4kV"},         
          { label: "Ambient Operating Temperature", value: "-10 to 40° C (14 to 104° F)"},         
          { label: "Ambient Operating Humidity", value: "5 to 95% noncondensing"},         
          { label: "NDAA Compliant", value: "✓", isCheck: true },          
          { label: "Certification", value: "CE, FCC, IC, Anatel, SRRC"},        
                
        ]
      }
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/cloudgateways/6.ucgm/p-itb-ucgm.png", },
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
          "Cable length: 0.1 to 8 m"
        ],
        detailedSpecs: [
          { label: "Available Lengths", value: "0.1, 0.3, 1, 2, 3, 5, 8 m (0.3, 1, 3.3, 6.6, 9.9, 16.4, 26.3 ft)" },
          { label: "Pack Options", value: "Single Unit " },
          { label: "Supported Data Rate", value: "GbE" },
          { label: "Supported PoE Type", value: "Up to PoE+++" },
          { label: "Connector", value: "(2) bendable booted RJ45)" },
          { label: "Operating Environment", value: "Indoor" },
          { label: "Cable Jacket Diameter/Material", value: "3 mm (0.1) / Thermoplastic elastomer" },
          { label: "Cable Bend Radius", value: "Min. 24 mm (0.94\")" },
          { label: "Flame Rating", value: "FT-2(UL1581)" },
          { label: "Installation Temperature", value: "0 to 60°C (32 to 140°F)" },
          { label: "Ambient Storage Temperature", value: "-20 to 80°C (-4 to 176°F)" },
          { label: "Ambient Operating Temperature", value: "-10 to 75°C (14 to 167°F)" },
         
        ],
        productLink: "/products/mounting-kit-ucg-max"
      },
    ]
  },
{
    id: "ucg-ultra",
    name: "Cloud Gateways Ultra",
    category: "Cloud Gateways",
    subfilter: "Compact",
    image: "/images/cloudgateways/7.ucgu/1.p-utama-ucgu.png",
    shortDescription:
      "Compact CLoud Gateway with 30+ UniFi device / 300+ client support, 1 Gbps IPS routing, and multi-WAN load balancing",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "UCG-ULTRA",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/cloudgateways/7.ucgu/1.p-utama-ucgu.png",
      "/images/cloudgateways/7.ucgu/2.p-dimensi-ucgu.png",
      "/images/cloudgateways/7.ucgu/3.p-spec-ucgu.png",
      "/images/cloudgateways/7.ucgu/4.p-development-ucgu.png",
      "/images/cloudgateways/7.ucgu/p-itb-ucgu.png",
      "/images/cloudgateways/7.ucgu/p-mkt0-ucgu.png",
      "/images/cloudgateways/7.ucgu/p-mkt1-ucgu.png",
      "/images/cloudgateways/7.ucgu/p-mkt2-ucgu.png",
      "/images/cloudgateways/7.ucgu/p-mkt3-ucgu.png",
      "/images/cloudgateways/7.ucgu/p-mkt4-ucgu.png",
      "/images/cloudgateways/7.ucgu/p-ov1-ucgu.png",
      "/images/cloudgateways/7.ucgu/p-ov2-ucgu.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/cloudgateways/7.ucgu/p-ov1-ucgu.png",
      "/images/cloudgateways/7.ucgu/p-ov2-ucgu.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Compact CLoud Gateway with 30+ UniFi device / 300+ client support",
      "1 Gbps IPS routing",
      "and multi-WAN load balancing",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "141.8 x 127.6 x 30 mm" },
          { label: "UniFi Application Suite Network", value: "✓", isCheck: true },
          { label: "Managed UniFi Devices", value: "30+" },
          { label: "Simultaneous Users Connected", value: "300+" },
          { label: "Max. WAN Port Count", value: "4" },
          { label: "Default WAN Ports", value: "(1) 2.5 GbE RJ45)" },
          { label: "Port Layout 1GbE RJ45", value: "4(1G/100M/10M)" },
          { label: "Port Layout 2GbE RJ45", value: "1(2.5G/1G/100M/10M)" },
          { label: "IDS/IPS Throughput", value: "1Gbps" },
          { label: "Form Factor", value: "Compact Desktop" },
        ]
      },
      {
        title: "Security",
        items: [
          { label: "Stateful firewall", value: "✓", isCheck: true },
          { label: "Application-Aware Layer 7 Firewall", value: "✓", isCheck: true },
          { label: "DPI & Traffic Identification", value: "✓", isCheck: true },
          { label: "Zone-Based Firewall Advanced Filtering", value: "✓", isCheck: true },
          { label: "Content Filtering", value: "✓", isCheck: true },
          { label: "Intrusion Prevention (IPS/IDS)", value: "✓", isCheck: true },
          { label: "Ad Blocking", value: "✓", isCheck: true },
          { label: "IDS/IPS Signatures", value: "55.000+ with CyberSecure"},
          { label: "VLAN/Subnet-based Traffic Segmentation", value: "✓", isCheck: true },
        ]
      },
      {
        title: "Software",
        items: [
          { label: "License-Free SD-WAN", value: "✓", isCheck: true },
          { label: "Site-to-Site Site Magic", value: "✓", isCheck: true },
          { label: "Site-to-Site IPsec", value: "✓", isCheck: true },
          { label: "Site-to-Site OpenVPN", value: "✓", isCheck: true },
          { label: "VPN Server Identity Endpoint One-Click VPN", value: "✓", isCheck: true },
          { label: "VPN Server Teleport Zero-Configuration VPN", value: "✓", isCheck: true },
          { label: "VPN Server WireGuard", value: "✓", isCheck: true },
          { label: "VPN Server OpenVPN", value: "✓", isCheck: true },
          { label: "VPN Server L2TP", value: "✓", isCheck: true },
          { label: "VPN Client OpenVPN", value: "✓", isCheck: true },
          { label: "VPN Client WireGuard", value: "✓", isCheck: true },
          ]
      },
      {
        title: "Networking",
        items: [
          { label: "Multi-WAN Load Balancing", value: "✓", isCheck: true },
          { label: "Dynamic Routing OSpF", value: "✓", isCheck: true },
          { label: "Advanced QoS", value: "✓", isCheck: true },
          { label: "Multicast DNS (mDNS)", value: "✓", isCheck: true },
          { label: "Advanced NAT", value: "✓", isCheck: true },
          { label: "Integrated RADIUS Server", value: "✓", isCheck: true },
          { label: "RADIUS over TLS (RadSec)", value: "✓", isCheck: true },
          { label: "Additional Internet Failover with UniFi LTE Backup", value: "✓", isCheck: true },
          { label: "Internet Quality and Outage Reporting", value: "✓", isCheck: true },
          { label: "MAC Address Table Size", value: "2.000" },
          { label: "Policy-based WAN and VPN routing", value: "✓", isCheck: true },
          { label: "Customizable DHCP Server", value: "✓", isCheck: true },
          { label: "IPv6 ISP Support", value: "✓", isCheck: true },
          { label: "IGMP Proxy", value: "✓", isCheck: true },
          { label: "Virtual Network Override", value: "✓", isCheck: true },
          ]
      }
    ],
    
    // Item yang ada dalam box produk (gambar bisa diganti)
    inTheBox: [
      { name: "Device", image: "/images/cloudgateways/7.ucgu/p-itb-ucgu.png", },
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
        productLink: "/products/mounting-kit-ucg-ultra"
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
        productLink: "/products/power-cable-ucg-ultra"
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


 // *******Produk tambahan untuk kategori Cloud Gateways (contoh dengan subfilter WiFi Integrated)******
  {
    id: "ucg-i",
    name: "Cloud Gateway Industrial",
    category: "Cloud Gateways",
    subfilter: "WiFi Integrated",
    image: "/images/products/Product-UDR-7.png",
    shortDescription:
      "Desktop 10G Cloud Gateway with integrated WiFi 7, PoE switch, microSD storage, and full UniFi application support",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    
    // SKU produk
    sku: "UDR-7",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-UDR-7.png",
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
      "Desktop 10G Cloud Gateway with integrated WiFi 7",
      "microSD storage",
      "and full UniFi application support",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Dream Router 7" },
          { label: "Model", value: "UDR-7" },
          { label: "Category", value: "Cloud Gateways" },
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
        productLink: "/products/mounting-kit-udr-7"
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
        productLink: "/products/power-cable-udr-7"
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
    id: "udr-7",
    name: "Dream Router 7",
    category: "Cloud Gateways",
    subfilter: "WiFi Integrated",
    image: "/images/cloudgateways/9.udr7/1.p-utama-udr7.png",
    shortDescription:
      "Desktop 10G Cloud Gateway with integrated WiFi 7, PoE switch, microSD storage, and full UniFi application support",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    
    // SKU produk
    sku: "UDR-7",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/cloudgateways/9.udr7/1.p-utama-udr7.png",
      "/images/cloudgateways/9.udr7/2.p-spec-udr7.png",
      "/images/cloudgateways/9.udr7/3.p-development-udr7.png",
      "/images/cloudgateways/9.udr7/p-itb-udr7.png",
      "/images/cloudgateways/9.udr7/p-mkt0-udr7.png",
      "/images/cloudgateways/9.udr7/p-mkt1-udr7.png",
      "/images/cloudgateways/9.udr7/p-mkt2-udr7.png",
      "/images/cloudgateways/9.udr7/p-mkt3-udr7.png",
      "/images/cloudgateways/9.udr7/p-mkt4-udr7.png",
      "/images/cloudgateways/9.udr7/p-ov1-udr7.png",
      "/images/cloudgateways/9.udr7/p-ov2-udr7.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/cloudgateways/9.udr7/p-ov1-udr7.png",
      "/images/cloudgateways/9.udr7/p-ov2-udr7.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Desktop 10G Cloud Gateway with integrated WiFi 7",
      "microSD storage",
      "and full UniFi application support",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Dream Router 7" },
          { label: "Model", value: "UDR-7" },
          { label: "Category", value: "Cloud Gateways" },
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
      { name: "Device", image: "/images/cloudgateways/9.udr7/p-itb-udr7.png", },
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
        productLink: "/products/mounting-kit-udr-7"
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
        productLink: "/products/power-cable-udr-7"
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
    id: "ux-7",
    name: "UniFi Express 7",
    category: "Cloud Gateways",
    subfilter: "WiFi Integrated",
    image: "/images/cloudgateways/10.ux7/1.p-utama-ux7.png",
    shortDescription:
      "Mesh-scalable, super-compact 10G Cloud Gateway with integrated WiFI 7.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
    
    // SKU produk
    sku: "UX-7",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/cloudgateways/10.ux7/1.p-utama-ux7.png",
      "/images/cloudgateways/10.ux7/2.p-dimensi-ux7.png",
      "/images/cloudgateways/10.ux7/3.p-spec-ux7.png",
      "/images/cloudgateways/10.ux7/4.p-development-ux7.png",
      "/images/cloudgateways/10.ux7/p-itb-ux7.png",
      "/images/cloudgateways/10.ux7/p-mkt0-ux7.png",
      "/images/cloudgateways/10.ux7/p-mkt1-ux7.png",
      "/images/cloudgateways/10.ux7/p-mkt2-ux7.png",
      "/images/cloudgateways/10.ux7/p-mkt3-ux7.png",
      "/images/cloudgateways/10.ux7/p-mkt4-ux7.png",
      "/images/cloudgateways/10.ux7/p-ov1-ux7.png",
      "/images/cloudgateways/10.ux7/p-ov2-ux7.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/cloudgateways/10.ux7/p-ov1-ux7.png",
      "/images/cloudgateways/10.ux7/p-ov2-ux7.png"
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
          { label: "Product Name", value: "UniFi Express 7" },
          { label: "Model", value: "UX-7" },
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
      { name: "Device", image: "/images/cloudgateways/10.ux7/p-itb-ux7.png", },
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
    id: "udr-5g-max",
    name: "Dream Router 5G Max",
    category: "Cloud Gateways",
    subfilter: "WiFi Integrated",
    image: "/images/cloudgateways/11.udr5gm/1.p-utama-udr5gm.png",
    shortDescription:
      "Desktop Cloud Gateway with full-performance 5G up to 3.4 Gbps, WiFi 7, 10G SFP+, 4-port 2.5 GbE switch with (1) PoE port, and SD card storage.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "UDR-5G-MAX",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/cloudgateways/11.udr5gm/1.p-utama-udr5gm.png",
      "/images/cloudgateways/11.udr5gm/2.p-dimensi-udr5gm.png",
      "/images/cloudgateways/11.udr5gm/3.p-spec-udr5gm.png",
      "/images/cloudgateways/11.udr5gm/4.p-development-udr5gm.png",
      "/images/cloudgateways/11.udr5gm/p-itb-udr5gm.png",
      "/images/cloudgateways/11.udr5gm/p-mkt0-udr5gm.png",
      "/images/cloudgateways/11.udr5gm/p-mkt1-udr5gm.jpg",
      "/images/cloudgateways/11.udr5gm/p-mkt2-udr5gm.png",
      "/images/cloudgateways/11.udr5gm/p-mkt3-udr5gm.png",
      "/images/cloudgateways/11.udr5gm/p-mkt4-udr5gm.png",
      "/images/cloudgateways/11.udr5gm/p-mkt5-udr5gm.png",
      "/images/cloudgateways/11.udr5gm/p-ov1-udr5gm.png",
      "/images/cloudgateways/11.udr5gm/p-ov2-udr5gm.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/cloudgateways/11.udr5gm/p-ov1-udr5gm.png",
      "/images/cloudgateways/11.udr5gm/p-ov2-udr5gm.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Desktop Cloud Gateway with full-performance 5G up to 3",
      "5 GbE switch with (1) PoE port",
      "and SD card storage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Dream Router 5G Max" },
          { label: "Model", value: "UDR-5G-MAX" },
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
      { name: "Device", image: "/images/cloudgateways/11.udr5gm/p-itb-udr5gm.png", },
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
        productLink: "/products/mounting-kit-udr-5g-max"
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
        productLink: "/products/power-cable-udr-5g-max"
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
    id: "UDW",
    name: "Dream Wall",
    category: "Cloud Gateways",
    subfilter: "WiFi Integrated",
    image: "/images/cloudgateways/12.udw/1.p-utama-udw.png",
    shortDescription:
      "Wall-mounted 10G Cloud Gateway with integrated WiFi 6, high-power PoE switching, and full Unifi application support.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "UDW",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/cloudgateways/12.udw/1.p-utama-udw.png",
      "/images/cloudgateways/12.udw/2.p-dimensi-udw.png",
      "/images/cloudgateways/12.udw/3.p-spec-udw.png",
      "/images/cloudgateways/12.udw/4.p-development-udw.png",
      "/images/cloudgateways/12.udw/p-itb-udw.png",
      "/images/cloudgateways/12.udw/p-mkt0-udw.png",
      "/images/cloudgateways/12.udw/p-mkt1-udw.png",
      "/images/cloudgateways/12.udw/p-mkt2-udw.png",
      "/images/cloudgateways/12.udw/p-mkt3-udw.png",
      "/images/cloudgateways/12.udw/p-mkt4-udw.png",
      "/images/cloudgateways/12.udw/p-mkt5-udw.jpg",
      "/images/cloudgateways/12.udw/p-ov1-udw.png",
      "/images/cloudgateways/12.udw/p-ov2-udw.png"
    ],
    
    // Gambar untuk tab Overview (bisa diganti sesuai kebutuhan)
    overviewImages: [
      "/images/cloudgateways/12.udw/p-ov1-udw.png",
      "/images/cloudgateways/12.udw/p-ov2-udw.png"
    ],
    
    // Bullet points untuk deskripsi produk
    bulletPoints: [
      "Wall-mounted 10G Cloud Gateway with integrated WiFi 6",
      "high-power PoE switching",
      "and full Unifi application support",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Dream Wall" },
          { label: "Model", value: "UDW" },
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
      { name: "Device", image: "/images/cloudgateways/12.udw/p-itb-udw.png"},
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
        productLink: "/products/mounting-kit-udw"
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
        productLink: "/products/power-cable-udw"
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
