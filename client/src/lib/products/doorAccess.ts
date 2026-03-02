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
      "An intelligent door entry system with native UniFi Protect and UniFi Access integration with a 12MP camera",
      "two-way audio",
      "and a 3' touch display",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "G6 Pro Entry" },
          { label: "Model", value: "UVC-G6-PRO-ENTRY" },
          { label: "Category", value: "Door Access" },
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
        productLink: "/products/mounting-kit-uvc-g6-pro-entry"
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
        productLink: "/products/power-cable-uvc-g6-pro-entry"
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
          { label: "Product Name", value: "G6 Entry" },
          { label: "Model", value: "UVC-G6-ENTRY" },
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
      "Third-generation",
      "indoor/outdoor NFC reader and intercom with Touch Pass support",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "G3 Reader Pro" },
          { label: "Model", value: "UA-G3-PRO-B-W" },
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
        productLink: "/products/mounting-kit-ua-g3-pro-b/w"
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
        productLink: "/products/power-cable-ua-g3-pro-b/w"
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
          { label: "Product Name", value: "G2 Reader Pro" },
          { label: "Model", value: "UA-G2-PRO-B-W" },
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
        productLink: "/products/mounting-kit-ua-g2-pro-b/w"
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
        productLink: "/products/power-cable-ua-g2-pro-b/w"
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
      "Third-generation NFC card reader with a keypad and Touch Pass support",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Reader Flex" },
          { label: "Model", value: "UA-G3-FLEX-B-W" },
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
        productLink: "/products/mounting-kit-ua-g3-flex-b/w"
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
        productLink: "/products/power-cable-ua-g3-flex-b/w"
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
      "Compact third-generation access with Tpuch Pass support",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "G3 Reader" },
          { label: "Model", value: "UA-G3-B-W" },
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
        productLink: "/products/mounting-kit-ua-g3-b/w"
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
        productLink: "/products/power-cable-ua-g3-b/w"
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
          { label: "Product Name", value: "G2 Reader" },
          { label: "Model", value: "UA-G2-B-W" },
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
        productLink: "/products/mounting-kit-ua-g2-b/w"
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
        productLink: "/products/power-cable-ua-g2-b/w"
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
      "Indoor/outdoor OSDP reader with NFC Card and Touch Pass support",
      "compatible with the UniFi Retrofit Hub using existing cabling",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Retrofit Reader" },
          { label: "Model", value: "UA-RETROFIT-READER-B-W" },
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
        productLink: "/products/mounting-kit-ua-retrofit-reader-b/w"
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
        productLink: "/products/power-cable-ua-retrofit-reader-b/w"
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
      "Indoor/outdoor intercom terminal for managing residential and commercial building entry requests with Touch Pass support",
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
    name: "G2 Intercom",
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
          { label: "Product Name", value: "G2 Intercom" },
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
      "An access reader with a built-in hub for complete",
      "single-door entry control from one device",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Access Ultra" },
          { label: "Model", value: "UA-ULTRA" },
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
        productLink: "/products/mounting-kit-ua-ultra"
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
        productLink: "/products/power-cable-ua-ultra"
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
      "Indoor/outdoor intercom terminal for managing residential and commercial building entry requests with Touch Pass support",
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
    name: "G2 Intercom",
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
          { label: "Product Name", value: "G2 Intercom" },
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
    id: "UA-G2-Intercom",
    name: "G2 Intercom",
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
          { label: "Product Name", value: "G2 Intercom" },
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
      "An intelligent door entry system with native UniFi Protect and UniFi Access integration with a 12MP camera",
      "two-way audio",
      "and a 3' touch display",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "G6 Pro Entry" },
          { label: "Model", value: "UVC-G6-PRO-ENTRY" },
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
        productLink: "/products/mounting-kit-uvc-g6-pro-entry"
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
        productLink: "/products/power-cable-uvc-g6-pro-entry"
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
      "An intelligent door entry system with native UniFi Protect and UniFi Access integration",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "G6 Entry" },
          { label: "Model", value: "UVC-G6-ENTRY" },
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
        productLink: "/products/mounting-kit-uvc-g6-entry"
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
        productLink: "/products/power-cable-uvc-g6-entry"
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
          { label: "Product Name", value: "Enterprise Access Hub" },
          { label: "Model", value: "EAH-8" },
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
        productLink: "/products/mounting-kit-eah-8"
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
        productLink: "/products/power-cable-eah-8"
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
      "DC-powered hub that supports Wiegand and OSDP readers and provides entry and exit control for up to two doors",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Enterprise Access Hub" },
          { label: "Model", value: "UA-RETROFIT-HUB-2" },
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
        productLink: "/products/mounting-kit-ua-retrofit-hub-2"
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
        productLink: "/products/power-cable-ua-retrofit-hub-2"
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
      "A single-door mechanism that provides complete entry and exit control via connected Access Readers",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Door Hub" },
          { label: "Model", value: "UA-HUB-DOOR" },
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
        productLink: "/products/mounting-kit-ua-hub-door"
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
        productLink: "/products/power-cable-ua-hub-door"
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
      "Compact Access Control Hub for a single door",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Door Hub Mini" },
          { label: "Model", value: "UA-HUB-DOOR-MINI" },
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
        productLink: "/products/mounting-kit-ua-hub-door-mini"
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
        productLink: "/products/power-cable-ua-hub-door-mini"
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
      "An advanced Gate Hub enabling seamless gate access control via connected Access readers or Intercom",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Gate Hub" },
          { label: "Model", value: "UA-HUB-GATE" },
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
        productLink: "/products/mounting-kit-ua-hub-gate"
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
        productLink: "/products/power-cable-ua-hub-gate"
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
    id: "UA-Ultra",
    name: "Access Ultra",
    category: "Door Access",
    subfilter: "Hubs",
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
      "An access reader with a built-in hub for complete",
      "single-door entry control from one device",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Access Ultra" },
          { label: "Model", value: "UA-ULTRA" },
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
        productLink: "/products/mounting-kit-ua-ultra"
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
        productLink: "/products/power-cable-ua-ultra"
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
      "Starter kit that provides complete entry and exit control fo a single door with two readers and Touch Pass support",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "G3 Starter Kit Pro" },
          { label: "Model", value: "UA-G3-SK-PRO" },
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
        productLink: "/products/mounting-kit-ua-g3-sk-pro"
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
        productLink: "/products/power-cable-ua-g3-sk-pro"
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
      "Starter kit that provides complete entry and exit control for a single door with two readers",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "G2 Starter Kit Pro" },
          { label: "Model", value: "UA-G2-SK-PRO" },
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
        productLink: "/products/mounting-kit-ua-g2-sk-pro"
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
        productLink: "/products/power-cable-ua-g2-sk-pro"
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
      "all-in-one kit for UniFi Access",
      "designed to manage a single door with one reader",
      "Supports seamless setup and Touch Pass for modern",
      "secure access control"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "G3 Starter Kit" },
          { label: "Model", value: "UA-G3-SK" },
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
        productLink: "/products/mounting-kit-ua-g3-sk"
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
        productLink: "/products/power-cable-ua-g3-sk"
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
      "all-in-one kit for UniFi Access",
      "designed to manage a single door with one reader",
      "Supports seamless setup for modern",
      "secure access control"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "G2 Starter Kit" },
          { label: "Model", value: "UA-G2-SK" },
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
        productLink: "/products/mounting-kit-ua-g2-sk"
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
        productLink: "/products/power-cable-ua-g2-sk"
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
      "and PoE++ over twisted pair extender for access control at a single gate with Touch Pass support"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "G3 Gate Starter Kit" },
          { label: "Model", value: "UA-G3-SK-GATE" },
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
        productLink: "/products/mounting-kit-ua-g3-sk-gate"
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
        productLink: "/products/power-cable-ua-g3-sk-gate"
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
      "Control a vehicle gate using the connected Intercom and authorize gate access with License Plate Unlock when paired with a compatible Protect AI camera",
      "Enterprise-grade quality",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Gate Starter Kit" },
          { label: "Model", value: "UA-G2-SK-GATE" },
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
        productLink: "/products/mounting-kit-ua-g2-sk-gate"
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
        productLink: "/products/power-cable-ua-g2-sk-gate"
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
      "Connects to in-elevator readers with PoE to authorize floor selection",
      "Supports up to 18 floors with digital inputs for elevator car status and emergency",
      "Easy to deploy and manage",
      "Reliable performance"
    ],
    
    // Spesifikasi teknis dengan section yang bisa di-expand/collapse
    technicalSpecs: [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: "Elevator Starter Kit" },
          { label: "Model", value: "UA-SK-ELEVATOR" },
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
        productLink: "/products/mounting-kit-ua-sk-elevator"
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
        productLink: "/products/power-cable-ua-sk-elevator"
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
