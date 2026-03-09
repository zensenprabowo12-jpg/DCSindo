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
      "/images/cloudgateways/1.efg/p-ov2-efg.png",
    ],

    // Video untuk tab Overview (opsional, bisa diisi dengan link YouTube atau path video lokal)
    overviewVideos: [
      "/videos/VP-efg-1.mp4",


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
          { label: "Firewall", value: "Enterprise-class Application-aware Firewall" },
          { label: "Threat Management", value: "Signature-based IPS/IDS" }
        ]
      },
      {
        title: "VPN & SD-WAN",
        items: [
          { label: "Site-to-Site VPN", value: "OpenVPN, IPsec" },
          { label: "Remote User VPN", value: "L2TP, OpenVPN, WireGuard" }
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
        title: "Hardware",
        items: [
          { label: "Processor", value: "Quad-Core ARM Cortex-A57 at 1.7 GHz" },
          { label: "Memory", value: "4 GB DDR4" }
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
      { name: "Device", image: "/images/cloudgateways/1.efg/p-itb1-efg.png" },
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
          { label: "Mounting", value: "1U Rack Mount" },
        ],
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
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
        productLink: "/products/power-cable-efg"
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
      "10G cloud gateway with 200+ UniFi Device",
      "2000+ client support",
      "5 Gbps IPS routing",
      "Redundant NVR storage"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Dimensions", value: "442.4 x 43.7 x 325 mm (17.4 x 1.7 x 12.8\")" },
          { label: "Network", value: "✓", isCheck: true },
          { label: "Managed UniFi Devices", value: "200+" },
          { label: "Simultaneous Users Connected", value: "2,000+" },
          { label: "Max. WAN Port Count", value: "3" },
          { label: "Default WAN Ports", value: "(1) 10G SFP+, (1) 2.5 GbE RJ45" },
          { label: "Port Layout", value: "8x GbE RJ45, 1x 10G SFP+, 1x 2.5 GbE RJ45" },
          { label: "IDS/IPS Throughput", value: "5 Gbps" },
          { label: "Concurrent Sessions", value: "500,000" },
          { label: "Form Factor", value: "Rack mount (1U)" },
          { label: "Storage", value: "2x 3.5\" HDD Bays for NVR" }
        ]
      },
      {
        title: "Security",
        items: [
          { label: "Firewall", value: "Enterprise-class Application-aware Firewall" },
          { label: "Threat Management", value: "Signature-based IPS/IDS" }
        ]
      },
      {
        title: "VPN & SD-WAN",
        items: [
          { label: "Site-to-Site VPN", value: "OpenVPN, IPsec" },
          { label: "Remote User VPN", value: "L2TP, OpenVPN, WireGuard" }
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
        title: "Hardware",
        items: [
          { label: "Processor", value: "Quad-Core ARM Cortex-A57 at 1.7 GHz" },
          { label: "Memory", value: "4 GB DDR4" },
          { label: "Storage", value: "2x 3.5\" HDD Bays" }
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
      { name: "Device", image: "/images/cloudgateways/2.udmpmx/p-itb-udmpmx.png", },
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
      "10G Cloud Gateway with 100+ UniFi device",
      "1,000+ client support",
      "3.5 Gbps IPS routing",
      "Professional networking solution"
    ],
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Dream Machine Pro" },
          { label: "Model", value: "UDM-PRO" },
          { label: "Managed UniFi Devices", value: "100+" },
          { label: "Simultaneous Users Connected", value: "1,000+" },
          { label: "IDS/IPS Throughput", value: "3.5 Gbps" },
          { label: "Form Factor", value: "Rack mount (1U)" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Throughput", value: "3.5 Gbps IPS" },
          { label: "PoE", value: "2x PoE+, 6x PoE" },
          { label: "WAN", value: "2.5 GbE RJ45" },
          { label: "Storage", value: "128GB SSD Integrated" }
        ]
      }
    ],
    inTheBox: [
      { name: "Device", image: "/images/cloudgateways/3.udmpro/p-itb-udmpro.png", },
    ],
    addons: [
      {
        id: 1,
        name: "Mounting Kit",
        image: "/images/dcs-box.png",
        price: 299,
        description: "Compact, stackable, and toolless design.",
        specs: ["Compatible with 19\" racks", "Steel construction", "Easy installation"],
        detailedSpecs: [
          { label: "Dimensions", value: "442.4 x 200 x 43.7 mm" },
          { label: "Weight", value: "1.2 kg" },
          { label: "Material", value: "SGCC Steel" }
        ],
        productLink: "/products/mounting-kit"
      },
      {
        id: 2,
        name: "Power Cable",
        image: "/images/dcs-box.png",
        price: 299,
        description: "High-quality power cable.",
        specs: ["2m Length", "High durability", "Standard fit"],
        detailedSpecs: [
          { label: "Length", value: "2.0 m" },
          { label: "Conductor", value: "Copper" }
        ],
        productLink: "/products/power-cable"
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
      "25F cloud gateways with 500+ UniFi Device",
      "5000+ client support",
      "12.5gbps ips routing",
      "complete high availability"
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
          { label: "Firewall", value: "Enterprise-class Application-aware Firewall" },
          { label: "Threat Management", value: "Signature-based IPS/IDS" }
        ]
      },
      {
        title: "VPN & SD-WAN",
        items: [
          { label: "Site-to-Site VPN", value: "OpenVPN, IPsec" },
          { label: "Remote User VPN", value: "L2TP, OpenVPN, WireGuard" }
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
        title: "Hardware",
        items: [
          { label: "Processor", value: "Quad-Core ARM Cortex-A57 at 1.7 GHz" },
          { label: "Memory", value: "4 GB DDR4" }
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
      { name: "Device", image: "/images/cloudgateways/4.udms/p-itb-udms.jpg", },
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
        productLink: "/products/mounting-kit-efg" // Link ke halaman produk addon
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
        productLink: "/products/power-cable-efg"
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
          { label: "Product Name", value: "Cloud Gateways Fiber" },
          { label: "Model", value: "UCG-FIBER" },
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
      { name: "Device", image: "/images/cloudgateways/5.ucgf/p-itb-ucgf.jpg", },
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
        productLink: "/products/mounting-kit-ucg-fiber"
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
        productLink: "/products/power-cable-ucg-fiber"
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
          { label: "Product Name", value: "Cloud Gateways Max" },
          { label: "Model", value: "UCG-MAX" },
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
      { name: "Device", image: "/images/cloudgateways/6.ucgm/p-itb-ucgm.png", },
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
        productLink: "/products/mounting-kit-ucg-max"
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
        productLink: "/products/power-cable-ucg-max"
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
          { label: "Product Name", value: "Cloud Gateways Ultra" },
          { label: "Model", value: "UCG-ULTRA" },
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
