export interface Product {
  id: string;
  name: string;
  category: "Cloud Gateways" | "Switching" | "WiFi" | "Camera Security" | "Door Access" | "Others";
  Category: string; // Display category
  subfilter: string; // The subfilter it belongs to (e.g. "Enterprise Scale")
  image: string;
  shortDescription: string;
  specs: { label: string; value: string }[];
  isNew?: boolean;
}

export const products: Product[] = [
  // Cloud Gateways
  {
    id: "Enterprise Fortress Gateway",
    name: "Enterprise Fortress Gateway",
    category: "Cloud Gateways",
    Category: "Cloud Gateways",
    subfilter: "Enterprise Scale",
    image: "/images/Product-Enterprise-Fortress-Gateway.png",
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
    name: "UniFi Dream Machine Pro Max",
    category: "Cloud Gateways",
    Category: "Cloud Gateways",
    subfilter: "Large Scale",
    image: "/images/Enterprise-Fortress-Gateway.png",
    shortDescription: "Dual-WAN cloud gateway with 10 Gbps IPS throughput and complete high availability.",
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
    Category: "Cloud Gateways",
    subfilter: "Large Scale",
    image: "/images/switch.jpg",
    shortDescription: "All-in-one enterprise security gateway and network appliance.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" }
    ]
  },
  {
    id: "udm-pro",
    name: "Dream Machine Pro",
    category: "Cloud Gateways",
    Category: "Cloud Gateways",
    subfilter: "Large Scale",
    image: "/images/switch.jpg",
    shortDescription: "Enterprise-grade security gateway with 8-port switch and dual-WAN support.",
    specs: []
  },
  {
    id: "ucg-ultra",
    name: "Cloud Gateway Ultra",
    category: "Cloud Gateways",
    Category: "Cloud Gateways",
    subfilter: "Compact",
    image: "/images/placeholder-product.png",
    shortDescription: "Powerful and compact UniFi Cloud Gateway.",
    specs: []
  },
  {
    id: "ucg-max",
    name: "Cloud Gateway Max",
    category: "Cloud Gateways",
    Category: "Cloud Gateways",
    subfilter: "Compact",
    image: "/images/placeholder-product.png",
    shortDescription: "Compact Cloud Gateway with high-performance networking.",
    specs: []
  },
  {
    id: "uxg-lite",
    name: "Next-Generation Gateway Lite",
    category: "Cloud Gateways",
    Category: "Cloud Gateways",
    subfilter: "Compact",
    image: "/images/placeholder-product.png",
    shortDescription: "Compact and powerful gateway.",
    specs: []
  },
  {
    id: "udr",
    name: "UniFi Dream Router",
    category: "Cloud Gateways",
    Category: "Cloud Gateways",
    subfilter: "WiFi Integrated",
    image: "/images/placeholder-product.png",
    shortDescription: "Complete UniFi solution with integrated WiFi 6.",
    specs: []
  },
  {
    id: "u-dw",
    name: "UniFi Dream Wall",
    category: "Cloud Gateways",
    Category: "Cloud Gateways",
    subfilter: "WiFi Integrated",
    image: "/images/placeholder-product.png",
    shortDescription: "Wall-mounted all-in-one networking solution.",
    specs: []
  },
  {
    id: "udm",
    name: "UniFi Dream Machine",
    category: "Cloud Gateways",
    Category: "Cloud Gateways",
    subfilter: "WiFi Integrated",
    image: "/images/placeholder-product.png",
    shortDescription: "The all-in-one device for home networking.",
    specs: []
  },
  {
    id: "ux",
    name: "UniFi Express",
    category: "Cloud Gateways",
    Category: "Cloud Gateways",
    subfilter: "WiFi Integrated",
    image: "/images/placeholder-product.png",
    shortDescription: "Powerfully compact UniFi Cloud Gateway.",
    specs: []
  }
];
