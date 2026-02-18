export interface Product {
  id: string;
  name: string;
  category: "Cloud Gateways" | "Switching" | "WiFi" | "Camera Security" | "Door Access" | "Others";
  price: number;
  image: string;
  images?: string[];
  shortDescription: string;
  specs: { label: string; value: string }[];
  isNew?: boolean;
}

export const products: Product[] = [
  // Cloud Gateways
  {
    id: "udm-pro-max",
    name: "Dream Machine Pro Max",
    category: "Cloud Gateways",
    price: 599,
    image: "/images/Enterprise-Fortress-Gateway.png", // Placeholder
    shortDescription: "Enterprise-grade cloud gateway with 10 Gbps IPS routing and NVR storage.",
    specs: [
      { label: "Throughput", value: "10 Gbps IPS" },
      { label: "Ports", value: "8x GbE RJ45, 1x 10G SFP+" },
      { label: "Storage", value: "2x 3.5\" HDD Bays" },
      { label: "Processor", value: "Quad-Core ARM Cortex-A57" }
    ],
    isNew: true
  },
  {
    id: "udm-pro-max",
    name: "lalala",
    category: "Cloud Gateways",
    price: 599,
    image: "/images/Enterprise-Fortress-Gateway.png", // Placeholder
    shortDescription: "lalalalala",
    specs: [
      { label: "Throughput", value: "10 Gbps IPS" },
      { label: "Ports", value: "8x GbE RJ45, 1x 10G SFP+" },
      { label: "Storage", value: "2x 3.5\" HDD Bays" },
      { label: "Processor", value: "Quad-Core ARM Cortex-A57" }
    ],
    isNew: true
  },
  {
    id: "udm-se",
    name: "Dream Machine Special Edition",
    category: "Cloud Gateways",
    price: 499,
    image: "/images/switch.jpg",
    shortDescription: "All-in-one enterprise security gateway and network appliance.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" }
    ]
  },
  // WiFi
  {
    id: "u7-pro",
    name: "UniFi U7 Pro",
    category: "WiFi",
    price: 189,
    image: "/images/wifi-ap.jpg",
    shortDescription: "Ceiling-mounted WiFi 7 Access Point with 6 GHz support.",
    specs: [
      { label: "Standard", value: "WiFi 7 (802.11be)" },
      { label: "Throughput", value: "5.7 Gbps Aggregate" },
      { label: "Antenna", value: "2x2 MIMO" },
      { label: "Coverage", value: "140 m² (1,500 ft²)" }
    ],
    isNew: true
  },
  {
    id: "u6-enterprise",
    name: "UniFi U6 Enterprise",
    category: "WiFi",
    price: 279,
    image: "/images/wifi-ap.jpg",
    shortDescription: "High-performance WiFi 6E access point for high-density environments.",
    specs: [
      { label: "Standard", value: "WiFi 6E" },
      { label: "Throughput", value: "10.2 Gbps Aggregate" },
      { label: "Client Capacity", value: "600+" },
      { label: "Uplink", value: "2.5 GbE" }
    ]
  },
  // Switching
  {
    id: "pro-max-24-poe",
    name: "Pro Max 24 PoE",
    category: "Switching",
    price: 799,
    image: "/images/switch.jpg",
    shortDescription: "Layer 3 Etherlighting™ switch with 2.5 GbE and PoE++ output.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" }
    ],
    isNew: true
  },
  {
    id: "enterprise-8-poe",
    name: "Enterprise 8 PoE",
    category: "Switching",
    price: 479,
    image: "/images/switch.jpg",
    shortDescription: "Managed Layer 3 switch with (8) 2.5GbE RJ45 ports with PoE+.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE RJ45" },
      { label: "PoE Budget", value: "120W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3" }
    ]
  },
  // Camera Security
  {
    id: "g5-pro",
    name: "G5 Professional",
    category: "Camera Security",
    price: 379,
    image: "/images/camera.jpg",
    shortDescription: "4K indoor/outdoor PoE camera with exceptional low-light performance.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" }
    ]
  },
  {
    id: "ai-theta",
    name: "AI Theta",
    category: "Camera Security",
    price: 299,
    image: "/images/camera.jpg",
    shortDescription: "Discreet panoramic camera system with AI analytics.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Form Factor", value: "In-wall / Ceiling" },
      { label: "AI", value: "People Detection" },
      { label: "View", value: "360° Panoramic" }
    ]
  },
  // Door Access
  {
    id: "g2-reader-pro",
    name: "Access Reader G2 Professional",
    category: "Door Access",
    price: 399,
    image: "/images/door-access.jpg",
    shortDescription: "Advanced NFC card reader and intercom with touchscreen.",
    specs: [
      { label: "Unlock", value: "NFC, PIN, Mobile" },
      { label: "Camera", value: "12MP with Night Vision" },
      { label: "Display", value: "Touchscreen" },
      { label: "Durability", value: "IP55 Weather Resistant" }
    ]
  }
];

export const CATEGORIES = [
  "Cloud Gateways",
  "Switching",
  "WiFi",
  "Camera Security",
  "Door Access",
  "Others"
] as const;
