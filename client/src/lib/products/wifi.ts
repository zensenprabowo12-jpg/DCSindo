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
export const wifiProducts: Product[] = [
{
    id: "E7",
    name: "E7",
    category: "WiFi",
    subfilter: "Enterprise",
    image: "/images/products/Product-UDR-5G-Max.png",
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
      "Enterprise-grade indoor access point with 10-stream WiFi 7 performance",
      "a 10 GbE uplink",
      "and a redundant GbE port for high availability",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "E7" },
          { label: "Model", value: "E7" },
          { label: "Category", value: "WiFi" },
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
        productLink: "/products/mounting-kit-e7"
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
    id: "E7-Campus",
    name: "E7 Campus",
    category: "WiFi",
    subfilter: "Enterprise",
    image: "/images/wifi-ap.jpg",
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
      "/images/products/Product-E7-Campus.png",
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
          { label: "Product Name", value: "E7 Campus" },
          { label: "Model", value: "E7-CAMPUS" },
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
    id: "E7-Audience",
    name: "E7 Audience",
    category: "WiFi",
    subfilter: "Enterprise",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Enterprise-grade, indoor/outdoor access point designed for high-density environments with 12-stream 5 GHz and 6 GHz WiFi 7 performance, a 10 GbE uplink, and a redundant GbE port for high availability.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "E7-AUDIENCE",
    
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
      "Enterprise-grade",
      "indoor/outdoor access point designed for high-density environments with 12-stream 5 GHz and 6 GHz WiFi 7 performance",
      "a 10 GbE uplink",
      "and a redundant GbE port for high availability"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "E7 Audience" },
          { label: "Model", value: "E7-AUDIENCE" },
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
        productLink: "/products/mounting-kit-e7-audience"
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
        productLink: "/products/power-cable-e7-audience"
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
    id: "U7-Pro-XGS",
    name: "U7 Pro XGS",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Ceiling-mounted 8-stream WiFi 7 AP with dedicated spectral scanning radio and 10/5/2.5/1 GbE support.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    
    // SKU produk
    sku: "U7-PRO-XGS",
    
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
      "Ceiling-mounted 8-stream WiFi 7 AP with dedicated spectral scanning radio and 10/5/2",
      "5/1 GbE support",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "U7 Pro XGS" },
          { label: "Model", value: "U7-PRO-XGS" },
          { label: "Category", value: "WiFi" },
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
        productLink: "/products/mounting-kit-u7-pro-xgs"
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
        productLink: "/products/power-cable-u7-pro-xgs"
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
    id: "U7-Pro-XG",
    name: "U7 Pro XGS",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Ceiling-mounted 6-stream WiFi 7 AP with 10/5/2.5/1 GbE support.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
    
    // SKU produk
    sku: "U7-PRO-XG",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-U7-Pro-XGS.png",
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
          { label: "Product Name", value: "U7 Pro XGS" },
          { label: "Model", value: "U7-PRO-XG" },
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
    id: "U7-Pro-Max",
    name: "U7 Pro Max",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Ceiling-mounted WiFi 7 AP with 8 spatial streams, 6 GHz support, and a dedicated spectral scanning engine for interference-free WiFi in demanding, large-scale environments.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U7-PRO-MAX",
    
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
      "Ceiling-mounted WiFi 7 AP with 8 spatial streams",
      "6 GHz support",
      "and a dedicated spectral scanning engine for interference-free WiFi in demanding",
      "large-scale environments"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "U7 Pro Max" },
          { label: "Model", value: "U7-PRO-MAX" },
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
        productLink: "/products/mounting-kit-u7-pro-max"
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
        productLink: "/products/power-cable-u7-pro-max"
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
    id: "U7-Pr0",
    name: "U7 Pro",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Ceiling-mounted WiFi 7 AP with 6 spatial streams, 6 GHz support for interference-free WiFi in demanding, large-scale environments.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U7-PR0",
    
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
          { label: "Product Name", value: "U7 Pro" },
          { label: "Model", value: "U7-PR0" },
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
        productLink: "/products/mounting-kit-u7-pr0"
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
        productLink: "/products/power-cable-u7-pr0"
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
    id: "U7-LR",
    name: "U7 Long Range",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Compact, ceiling-mount WiFi 7 AP with 5 spatial streams and extended signal range.",
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
          { label: "Product Name", value: "U7 Long Range" },
          { label: "Model", value: "U7-LR" },
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
        productLink: "/products/mounting-kit-u7-lr"
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
        productLink: "/products/power-cable-u7-lr"
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
    id: "U7-Lite",
    name: "U7 Lite",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Compact, ceiling-mount WiFi 7 AP with 4 spatial streams and 2.5 GbE uplink.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U7-LITE",
    
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
      "ceiling-mount WiFi 7 AP with 4 spatial streams and 2",
      "5 GbE uplink",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "U7 Lite" },
          { label: "Model", value: "U7-LITE" },
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
        productLink: "/products/mounting-kit-u7-lite"
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
        productLink: "/products/power-cable-u7-lite"
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
    id: "U6-Enterprise",
    name: "U6 Enterprise",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Ceiling-mounted WiFI 6E AP with 10 spatial streams and 6 GHz support to provide seamless, multi-band coverage within high client density environments.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U6-ENTERPRISE",
    
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
      "Ceiling-mounted WiFI 6E AP with 10 spatial streams and 6 GHz support to provide seamless",
      "multi-band coverage within high client density environments",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "U6 Enterprise" },
          { label: "Model", value: "U6-ENTERPRISE" },
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
        productLink: "/products/mounting-kit-u6-enterprise"
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
        productLink: "/products/power-cable-u6-enterprise"
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
    id: "U6-Pro",
    name: "U6 Pro",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Ceiling-mounted WiFi 6 AP with 6 spatial streams designed for large offices.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U6-PRO",
    
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
      "Ceiling-mounted WiFi 6 AP with 6 spatial streams designed for large offices",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "U6 Pro" },
          { label: "Model", value: "U6-PRO" },
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
        productLink: "/products/mounting-kit-u6-pro"
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
        productLink: "/products/power-cable-u6-pro"
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
    id: "U6-PLUS",
    name: "U6+",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Compact, ceiling-mounted WiFi 6 AP with 4 spatial streams that improves upon the U6 Lite with higher performance and dual-band WiFi 6 support. Ideal for small and medium-sized businesses.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U6-PLUS",
    
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
      "ceiling-mounted WiFi 6 AP with 4 spatial streams that improves upon the U6 Lite with higher performance and dual-band WiFi 6 support",
      "Ideal for small and medium-sized businesses",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "U6+" },
          { label: "Model", value: "U6-PLUS" },
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
        productLink: "/products/mounting-kit-u6-plus"
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
        productLink: "/products/power-cable-u6-plus"
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
    id: "UAP-AC-PRO",
    name: "AC Pro",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/products/Product-UDR-5G-Max.png",
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
          { label: "Product Name", value: "AC Pro" },
          { label: "Model", value: "UAP-AC-PRO" },
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
        productLink: "/products/mounting-kit-uap-ac-pro"
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
        productLink: "/products/power-cable-uap-ac-pro"
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
    id: "U7-Pro-XG-Wall",
    name: "U7 Pro XG Wall",
    category: "WiFi",
    subfilter: "Wall",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Wall-mounted 6 GHz-ready WiFi 7 AP with 1/2.5/10 GbE support.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    
    // SKU produk
    sku: "U7-PRO-XG-WALL",
    
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
      "Wall-mounted 6 GHz-ready WiFi 7 AP with 1/2",
      "5/10 GbE support",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "U7 Pro XG Wall" },
          { label: "Model", value: "U7-PRO-XG-WALL" },
          { label: "Category", value: "WiFi" },
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
        productLink: "/products/mounting-kit-u7-pro-xg-wall"
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
        productLink: "/products/power-cable-u7-pro-xg-wall"
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
    id: "U7-Pro-Wall",
    name: "U7 Pro Wall",
    category: "WiFi",
    subfilter: "Wall",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Wall-mounted WiFi 7 AP with 6 spatial streams and 6 GHz support tailored for home builders with seamless installation options.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
    
    // SKU produk
    sku: "U7-PRO-WALL",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-U7-Pro-Wall.png",
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
          { label: "Product Name", value: "U7 Pro Wall" },
          { label: "Model", value: "U7-PRO-WALL" },
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
    id: "U7-IW",
    name: "U7 In-Wall",
    category: "WiFi",
    subfilter: "Wall",
    image: "/images/products/Product-UDR-5G-Max.png",
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
      "Wall-mounted WiFi 7 AP with 4 spatial streams and an integrated 2",
      "5 GbE PoE switch designed for hospitality environments",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "U7 In-Wall" },
          { label: "Model", value: "U7-IW" },
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
        productLink: "/products/mounting-kit-u7-iw"
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
        productLink: "/products/power-cable-u7-iw"
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
    id: "U6-Enterprise-IW",
    name: "U6 Enterprise In-Wall",
    category: "WiFi",
    subfilter: "Wall",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Wall-mounted WiFi 6E AP with 10 spatial streams, 6 GHz support, and a built-in 4-port switch. Designed for high-density office networks.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U6-ENTERPRISE-IW",
    
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
      "Wall-mounted WiFi 6E AP with 10 spatial streams",
      "6 GHz support",
      "and a built-in 4-port switch",
      "Designed for high-density office networks"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "U6 Enterprise In-Wall" },
          { label: "Model", value: "U6-ENTERPRISE-IW" },
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
        productLink: "/products/mounting-kit-u6-enterprise-iw"
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
        productLink: "/products/power-cable-u6-enterprise-iw"
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
    id: "U6-IW",
    name: "U6 In-Wall",
    category: "WiFi",
    subfilter: "Wall",
    image: "/images/products/Product-UDR-5G-Max.png",
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
      "Wall-mounted WiFi 6 AP with 6 spatial streams and a built-in 4‑port switch ideal for single-room coverage in hospitality environments",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "U6 In-Wall" },
          { label: "Model", value: "U6-IW" },
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
        productLink: "/products/mounting-kit-u6-iw"
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
        productLink: "/products/power-cable-u6-iw"
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
    sku: "U6-EXTENDER",
    
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
          { label: "Product Name", value: "U6 Extender" },
          { label: "Model", value: "U6-EXTENDER" },
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
        productLink: "/products/mounting-kit-u6-extender"
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
        productLink: "/products/power-cable-u6-extender"
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
    id: "U7-Pro-Outdoor",
    name: "U7 Pro Outdoor",
    category: "WiFi",
    subfilter: "Outdoor",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "All-weather IP67 WiFi 7 AP with 6 spatial streams, extended-range AFC 6 GHz support, integrated directional super antenna, and articulation mounting bracket.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    
    // SKU produk
    sku: "U7-PRO-OUTDOOR",
    
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
      "All-weather IP67 WiFi 7 AP with 6 spatial streams",
      "extended-range AFC 6 GHz support",
      "integrated directional super antenna",
      "and articulation mounting bracket"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "U7 Pro Outdoor" },
          { label: "Model", value: "U7-PRO-OUTDOOR" },
          { label: "Category", value: "WiFi" },
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
        productLink: "/products/mounting-kit-u7-pro-outdoor"
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
        productLink: "/products/power-cable-u7-pro-outdoor"
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
    id: "U7-Outdoor",
    name: "U7 Outdoor",
    category: "WiFi",
    subfilter: "Outdoor",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "All-weather IP67 WiFi 7 AP with 4 spatial streams, an integrated directional super antenna, and versatile mounting options",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
    
    // SKU produk
    sku: "U7-OUTDOOR",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-U7-Outdoor.png",
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
          { label: "Product Name", value: "U7 Outdoor" },
          { label: "Model", value: "U7-OUTDOOR" },
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
    id: "U6-Mesh",
    name: "U6 Mesh",
    category: "WiFi",
    subfilter: "Outdoor",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Sleek, indoor/outdoor WiFi 6 AP with 6 spatial streams designed for mesh applications",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U6-MESH",
    
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
      "indoor/outdoor WiFi 6 AP with 6 spatial streams designed for mesh applications",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "U6 Mesh" },
          { label: "Model", value: "U6-MESH" },
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
        productLink: "/products/mounting-kit-u6-mesh"
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
        productLink: "/products/power-cable-u6-mesh"
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
    id: "U6-Mesh-Pro",
    name: "U6 Mesh Pro",
    category: "WiFi",
    subfilter: "Outdoor",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Sleek, indoor/outdoor WiFi 6 AP with 4 spatial streams , an integrated super antenna, and a gigabit passthrough port.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "U6-MESH-PRO",
    
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
      "indoor/outdoor WiFi 6 AP with 4 spatial streams",
      "an integrated super antenna",
      "and a gigabit passthrough port",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "U6 Mesh Pro" },
          { label: "Model", value: "U6-MESH-PRO" },
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
        productLink: "/products/mounting-kit-u6-mesh-pro"
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
        productLink: "/products/power-cable-u6-mesh-pro"
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
    id: "AC Mesh",
    name: "UAP-AC-M",
    category: "WiFi",
    subfilter: "Outdoor",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Compact, indoor/outdoor WiFi 5 AP with 4 spatial streams and optional external antenna support for directional coverage.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "AC-MESH",
    
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
      "indoor/outdoor WiFi 5 AP with 4 spatial streams and optional external antenna support for directional coverage",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "UAP-AC-M" },
          { label: "Model", value: "AC-MESH" },
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
        productLink: "/products/mounting-kit-ac mesh"
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
        productLink: "/products/power-cable-ac mesh"
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
    id: "UK-Ultra",
    name: "Swiss Army Knife",
    category: "WiFi",
    subfilter: "Outdoor",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Incredibly compact, indoor/outdoor AP with versatile mounting options and long-range external antenna support.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "UK-ULTRA",
    
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
      "Incredibly compact",
      "indoor/outdoor AP with versatile mounting options and long-range external antenna support",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Swiss Army Knife" },
          { label: "Model", value: "UK-ULTRA" },
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
        productLink: "/products/mounting-kit-uk-ultra"
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
        productLink: "/products/power-cable-uk-ultra"
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
    id: "Product Collection",
    name: "E7 Audience",
    category: "WiFi",
    subfilter: "Mega Capacity",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Enterprise-grade, indoor/outdoor access point designed for high-density environments with 12-stream 5 GHz and 6 GHz WiFi 7 performance, a 10 GbE uplink, and a redundant GbE port for high availability.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    
    // SKU produk
    sku: "PRODUCT-COLLECTION",
    
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
      "Enterprise-grade",
      "indoor/outdoor access point designed for high-density environments with 12-stream 5 GHz and 6 GHz WiFi 7 performance",
      "a 10 GbE uplink",
      "and a redundant GbE port for high availability"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "E7 Audience" },
          { label: "Model", value: "PRODUCT-COLLECTION" },
          { label: "Category", value: "WiFi" },
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
        productLink: "/products/mounting-kit-product collection"
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
        productLink: "/products/power-cable-product collection"
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
    id: "UWB-XG",
    name: "WiFI BaseStation XG",
    category: "WiFi",
    subfilter: "Mega Capacity",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Tri-radio WiFi 5 AP with 12 spatial streams and a selectable beamforming antenna, designed for high-density applications at large venue.",
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
      "/images/products/Product-WiFI-BaseStation-XG.png",
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
          { label: "Product Name", value: "WiFI BaseStation XG" },
          { label: "Model", value: "UWB-XG" },
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
    id: "UDB-Pro-Sector",
    name: "Device Bridge Pro Sector",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "5 GHz point-to-multipoint access point that wirelessly bridges 50+ Device Bridge Pro clients at 5+ km distances.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    
    // SKU produk
    sku: "UDB-PRO-SECTOR",
    
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
      "5 GHz point-to-multipoint access point that wirelessly bridges 50+ Device Bridge Pro clients at 5+ km distances",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Device Bridge Pro Sector" },
          { label: "Model", value: "UDB-PRO-SECTOR" },
          { label: "Category", value: "WiFi" },
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
        productLink: "/products/mounting-kit-udb-pro-sector"
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
        productLink: "/products/power-cable-udb-pro-sector"
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
    id: "UDB-Pro",
    name: "Device Bridge Pro ",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "5 GHz wireless bridge with PoE output that connects at 5+ km distance or seamlessly uplinks to UniFI WiFI.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
    
    // SKU produk
    sku: "UDB-PRO",
    
    // Array gambar untuk gallery produk (gambar pertama adalah gambar utama)
    images: [
      "/images/products/Product-Device-Bridge-Pro-.png",
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
          { label: "Product Name", value: "Device Bridge Pro " },
          { label: "Model", value: "UDB-PRO" },
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
    id: "UDB",
    name: "Device Bridge",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Plug-and-play, wireless bridging PoE adapter with integrated UniFI WiFI Auto-Link.",
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
      "Plug-and-play",
      "wireless bridging PoE adapter with integrated UniFI WiFI Auto-Link",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Device Bridge" },
          { label: "Model", value: "UDB" },
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
        productLink: "/products/mounting-kit-udb"
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
        productLink: "/products/power-cable-udb"
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
    id: "UBB",
    name: "Building Bridge",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "60 GHz wireless point-to-point bridge with a 5 GHz backup radio.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "UBB",
    
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
      "60 GHz wireless point-to-point bridge with a 5 GHz backup radio",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Building Bridge" },
          { label: "Model", value: "UBB" },
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
        productLink: "/products/mounting-kit-ubb"
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
        productLink: "/products/power-cable-ubb"
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
    id: "UDB-Switch(35W)",
    name: "Device Bridge Switch",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Compact PoE+ switch* with (1) 10 GbE port, (7) 2.5 GbE ports, and 6 GHz-ready WiFi 7 bridging integration for seamless, high-capacity wireless uplink to UniFi WiFi..",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "UDB-SWITCH-35W-",
    
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
      "Compact PoE+ switch* with (1) 10 GbE port",
      "5 GbE ports",
      "and 6 GHz-ready WiFi 7 bridging integration for seamless",
      "high-capacity wireless uplink to UniFi WiFi"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Device Bridge Switch" },
          { label: "Model", value: "UDB-SWITCH-35W-" },
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
        productLink: "/products/mounting-kit-udb-switch(35w)"
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
        productLink: "/products/power-cable-udb-switch(35w)"
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
    id: "UBB-XG",
    name: "Device Bridge XG",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "60 GHz wireless point-to-point bridge with a 10G SFP+ uplink for maximum performance and a 5 GHz backup radio.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "UBB-XG",
    
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
      "60 GHz wireless point-to-point bridge with a 10G SFP+ uplink for maximum performance and a 5 GHz backup radio",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Device Bridge XG" },
          { label: "Model", value: "UBB-XG" },
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
        productLink: "/products/mounting-kit-ubb-xg"
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
        productLink: "/products/power-cable-ubb-xg"
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
    id: "UDB-IoT",
    name: "Device Bridge IoT",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "Ultra-compact wireless bridge for IoT devices with integrated UniFi WiFi Auto-Link, versatile mounting options, and powered by USB Type-C or 4-pin DC socket.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],

    // SKU produk
    sku: "UDB-IOT",
    
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
      "Ultra-compact wireless bridge for IoT devices with integrated UniFi WiFi Auto-Link",
      "versatile mounting options",
      "and powered by USB Type-C or 4-pin DC socket",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Device Bridge IoT" },
          { label: "Model", value: "UDB-IOT" },
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
        productLink: "/products/mounting-kit-udb-iot"
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
        productLink: "/products/power-cable-udb-iot"
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
    id: "UTR",
    name: "UniFI Travel Router",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/products/Product-UDR-5G-Max.png",
    shortDescription:
      "An ultra-slim travel router that instantly extends your UniFi Network wherever you are, bringing secure, familiar connectivity to remote locations..",
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
      "An ultra-slim travel router that instantly extends your UniFi Network wherever you are",
      "bringing secure",
      "familiar connectivity to remote locations",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "UniFI Travel Router" },
          { label: "Model", value: "UTR" },
          { label: "Category", value: "WiFi" },
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
        productLink: "/products/mounting-kit-utr"
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
        productLink: "/products/power-cable-utr"
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
