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
}

export const products: Product[] = [
  // Cloud Gateways
  // Cloud Gateways - Enterprise Scale
  {
    id: "efg",
    name: "Enterprise Fortress Gateway",
    category: "Cloud Gateways",
    subfilter: "Enterprise Scale",
    image: "/images/Product-Enterprise-Fortress-Gateway.png", // Placeholder
    shortDescription:
      "25G Cloud Gateway with 500+ UniFi device / 5,000+ client support, 12.5 Gbps IPS routing, and complete high availability.",
    specs: [
      { label: "Throughput", value: "10 Gbps IPS" },
      { label: "Ports", value: "8x GbE RJ45, 1x 10G SFP+" },
      { label: "Storage", value: '2x 3.5" HDD Bays' },
      { label: "Processor", value: "Quad-Core ARM Cortex-A57" },
    ],
    isNew: true,
  },

  // Cloud Gateways - Large Scale

  {
    id: "udm-pro-max",
    name: "Dream Machine Pro Max ",
    category: "Cloud Gateways",
    subfilter: "Large Scale",
    image: "/images/Product-Dream-Machine-Pro-Max.png", // Placeholder
    shortDescription:
      "10G CLoud Gateway with 200+ UniFi device / 2,000+ client support, 5 Gbps IPS routing, and redunant NVR storage.",
    specs: [
      { label: "Throughput", value: "10 Gbps IPS" },
      { label: "Ports", value: "8x GbE RJ45, 1x 10G SFP+" },
      { label: "Storage", value: '2x 3.5" HDD Bays' },
      { label: "Processor", value: "Quad-Core ARM Cortex-A57" },
    ],
    isNew: true,
  },
  {
    id: "udm-pro",
    name: "Dream Machine Pro",
    category: "Cloud Gateways",
    subfilter: "Large Scale",
    image: "/images/Product-Dream-Machine-Pro.png",
    shortDescription:
      "10G Cloud Gateway with 100+ UniFi device / 1,000+ client support and 3.5 Gbps IPS routing.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "udm-se",
    name: "Dream Machine Special Edition",
    category: "Cloud Gateways",
    subfilter: "Large Scale",
    image: "/images/Product-Dream-Machine-Special-Edition.png",
    shortDescription:
      "10G Cloud Gateway with 100+ UniFi device / 1,000+ client support, 3.5 Gbps IPS routing, and built-in PoE switching.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },

  // Cloud Gateways - Compact

  {
    id: "ucg-fiber",
    name: "Cloud Gateways Fiber",
    category: "Cloud Gateways",
    subfilter: "Compact",
    image: "/images/Product-UCG-Fiber.png",
    shortDescription:
      "Desktop 10G Cloud Gateway with integrated 4-port 2.5 GbE switch, selectable NVR storage, and full UniFi application support.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "ucg-max",
    name: "Cloud Gateways Max",
    category: "Cloud Gateways",
    subfilter: "Compact",
    image: "/images/Product-UCG-Max.png",
    shortDescription:
      "Compact 2.5G Cloud Gateway with 30+ UniFi device / 300+ client support, 2.3 Gbps IPS routing, and selectable NVR storage.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "ucg-ultra",
    name: "Cloud Gateways Ultra",
    category: "Cloud Gateways",
    subfilter: "Compact",
    image: "/images/Product-UCG-Ultra.png",
    shortDescription:
      "Compact CLoud Gateway with 30+ UniFi device / 300+ client support, 1 Gbps IPS routing, and multi-WAN load balancing",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },

  // Cloud Gateways - WiFi Integrated
  {
    id: "udr-7",
    name: "Dream Router 7",
    category: "Cloud Gateways",
    subfilter: "WiFi Integrated",
    image: "/images/Product-UDR-7.png",
    shortDescription:
      "Desktop 10G Cloud Gateway with integrated WiFi 7, PoE switch, microSD storage, and full UniFi application support",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "ux-7",
    name: "UniFi Express 7",
    category: "Cloud Gateways",
    subfilter: "WiFi Integrated",
    image: "/images/Product-UX-7.png",
    shortDescription:
      "Mesh-scalable, super-compact 10G Cloud Gateway with integrated WiFI 7.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "udr-5g-max",
    name: "Dream Router 5G Max",
    category: "Cloud Gateways",
    subfilter: "WiFi Integrated",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Desktop Cloud Gateway with full-performance 5G up to 3.4 Gbps, WiFi 7, 10G SFP+, 4-port 2.5 GbE switch with (1) PoE port, and SD card storage.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "UDW",
    name: "Dream Wall",
    category: "Cloud Gateways",
    subfilter: "WiFi Integrated",
    image: "/images/Product-UDW.png",
    shortDescription:
      "Wall-mounted 10G Cloud Gateway with integrated WiFi 6, high-power PoE switching, and full Unifi application support.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },

  // Switching - Aggregation
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
  },
  {
    id: "USW-Pro-XG-Aggregation",
    name: "Pro XG Aggregation",
    category: "Switching",
    subfilter: "Aggregation",
    image: "/images/switch.jpg",
    shortDescription:
      "Professional-grade 32-port, Layer 3 Etherlighting™ switch for high-capacity 25G SFP28 connections.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-Pro-Aggregation",
    name: "Hi-Capacity Aggregation",
    category: "Switching",
    subfilter: "Aggregation",
    image: "/images/switch.jpg",
    shortDescription:
      "A 32-port, Layer 3 switch made for high-capacity 10G SFP+ and 25G SFP28 connections.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-Aggregation",
    name: "Aggregation",
    category: "Switching",
    subfilter: "Aggregation",
    image: "/images/switch.jpg",
    shortDescription:
      "An 8-port, Layer 2 switch made for 10G SFP+ connections.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },

  // Switching - Enterprise
  {
    id: "ECS-48-PoE(2150W)",
    name: "Enterprise Campus 48 PoE",
    category: "Switching",
    subfilter: "Enterprise",
    image: "/images/switch.jpg",
    shortDescription:
      "Enterprise-grade 48-port, Layer 3 Etherlighting™ PoE+++ switch with high-capacity 10 GbE RJ45 and 25G SFP28 connections for high availability system design.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "ECS-24-PoE(1050W)",
    name: "Enterprise Campus 24 PoE",
    category: "Switching",
    subfilter: "Enterprise",
    image: "/images/switch.jpg",
    shortDescription:
      "Enterprise-grade 24-port, Layer 3 Etherlighting™ PoE+++ switch with high-capacity 10 GbE RJ45 and 25G SFP28 connections for high availability system design.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "ECS-48S-PoE(2150W)",
    name: "Enterprise Campus 48S PoE",
    category: "Switching",
    subfilter: "Enterprise",
    image: "/images/switch.jpg",
    shortDescription:
      "Enterprise-grade 48-port, Layer 3 Etherlighting™ PoE+++ switch with Stacking support and high-capacity 10 GbE RJ45 and 25G SFP28 connections for high availability system design.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "ECS-24S-PoE(1050W)",
    name: "Enterprise Campus 24S PoE",
    category: "Switching",
    subfilter: "Enterprise",
    image: "/images/switch.jpg",
    shortDescription:
      "Enterprise-grade 24-port, Layer 3 Etherlighting™ PoE+++ switch with Stacking support and high-capacity 10 GbE RJ45 and 25G SFP28 connections for high availability system design.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
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
  },

  // Switching - Professional Max & XG
  {
    id: "USW-Pro-Max-48-PoE(720W)",
    name: "Pro Max 48 PoE",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switch.jpg",
    shortDescription:
      "A 48-port, Layer 3 Etherlighting™ switch with 2.5 GbE and PoE++ output.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-Pro-Max-24-PoE(400W)",
    name: "Pro Max 24 PoE",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switch.jpg",
    shortDescription:
      "A 24-port, Layer 3 Etherlighting™ switch capable of high-power PoE++ output.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-Pro-XG-48-PoE(1080)",
    name: "Pro XG 48 PoE",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switch.jpg",
    shortDescription:
      "Professional-grade, 48-port Layer 3 Etherlighting™ PoE+++ switch with (32) 10 GbE, (16) 2.5 GbE PoE, and (4) 25G SFP28 ports.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-Pro-XG-24-PoE(720W)",
    name: "Pro XG 24 PoE",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switch.jpg",
    shortDescription:
      "Professional-grade, 24-port Layer 3 Etherlighting™ PoE+++ switch with (16) 10 GbE, (8) 2.5 GbE, and (2) 25G SFP28 ports.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-Pro-HD-24-PoE(600W)",
    name: "Pro HD 24 PoE",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switch.jpg",
    shortDescription:
      "Professional-grade, Layer 3 Etherlighting™ switch with (2) 10 GbE PoE++, (22) 2.5 GbE PoE++, and (4) 10G SFP+ ports.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-Pro-XG-48",
    name: "Pro XG 48",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switch.jpg",
    shortDescription:
      "Professional-grade, 48-port Layer 3 Etherlighting™ switch with (32) 10 GbE, (16) 2.5 GbE, and (4) 25G SFP28 ports.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-Pro-XG-24",
    name: "Pro XG 24",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switch.jpg",
    shortDescription:
      "Professional-grade, 24-port Layer 3 Etherlighting™ switch with (16) 10 GbE, (8) 2.5 GbE, and (2) 25G SFP28 ports.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-Pro-XG-10-PoE(400W)",
    name: "Pro XG 10 PoE",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switch.jpg",
    shortDescription:
      "1U, professional-grade 10-port, Layer 3 Etherlighting™ PoE+++ switch with (10) 10 GbE and (2) 10G SFP+ ports.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-Pro-Max-16-PoE(180W)",
    name: "Pro Max 16 PoE",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switch.jpg",
    shortDescription:
      "A 16-port, Layer 3 Etherlighting™ switch with 2.5 GbE, PoE++ output, and versatile mounting options.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-Pro-HD-24",
    name: "Pro HD 24",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switch.jpg",
    shortDescription:
      "Proffesional-grade, Layer 3 Etherlighting™ switch with (2) 10 GbE, (22) 2.5 GbE, and (4) 10G SFP+ ports.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-Pro-Max-48",
    name: "Pro Max 48",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switch.jpg",
    shortDescription: "A 48-port, Layer 3 Etherlighting™ switch with 2.5 GbE.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-Pro-Max-24",
    name: "Pro Max 24",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switch.jpg",
    shortDescription: "A 24-port, Layer 3 Etherlighting™ switch with 2.5 GbE.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-Pro-Max-16",
    name: "Pro Max 16",
    category: "Switching",
    subfilter: "Professional Max & XG",
    image: "/images/switch.jpg",
    shortDescription:
      "A 16-port, Layer 3 Etherlighting™ switch 2.5 GbE and versatile mounting options.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },

  // Switching - Professional
  {
    id: "USW-Pro-48-PoE(600W)",
    name: "Pro 48 PoE",
    category: "Switching",
    subfilter: "Professional",
    image: "/images/switch.jpg",
    shortDescription:
      "A 48-port, Layer 3 switch capable of high-power PoE++ output",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-Pro-24-PoE(400W)",
    name: "Pro 24 PoE",
    category: "Switching",
    subfilter: "Professional",
    image: "/images/switch.jpg",
    shortDescription:
      "A 24-port, Layer 3 switch capable of high-power PoE++ output.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-Pro-48",
    name: "Pro 48",
    category: "Switching",
    subfilter: "Professional",
    image: "/images/switch.jpg",
    shortDescription:
      "A 48-port, Layer 3 switch supporting 10G SFP+ connections with fanless cooling.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-Pro-24",
    name: "Pro 24",
    category: "Switching",
    subfilter: "Professional",
    image: "/images/switch.jpg",
    shortDescription:
      "A 24-port, Layer 3 switch supporting 10G SFP+ connections with fanless cooling.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-Enterprise-48-PoE(720W)",
    name: "Enterprise 48 PoE (Vintage)",
    category: "Switching",
    subfilter: "Professional",
    image: "/images/switch.jpg",
    shortDescription: "A 48-Port, Layer 3 switch with 2.5 GbE PoE+ output.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-Enterprise-24-PoE(400W)",
    name: "Enterprise 24 PoE (Vintage)",
    category: "Switching",
    subfilter: "Professional",
    image: "/images/switch.jpg",
    shortDescription: "A 24-port, Layer 3 switch with 2.5 GbE PoE+ output.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-Mission-Critical-(120W)",
    name: "UPS PoE Switch",
    category: "Switching",
    subfilter: "Professional",
    image: "/images/switch.jpg",
    shortDescription:
      "A switch with an integrated 368Wh lithium-ion battery capable of providing un interruptible PoE to 8 devices.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },

  // Switching - Standard
  {
    id: "USW-48-PoE(195W)",
    name: "Standard 48 PoE",
    category: "Switching",
    subfilter: "Standard",
    image: "/images/switch.jpg",
    shortDescription:
      "A 48-port, Layer 2 PoE switch with a silent, fanless cooling system.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-24-PoE(95W)",
    name: "Standard 24 PoE",
    category: "Switching",
    subfilter: "Standard",
    image: "/images/switch.jpg",
    shortDescription:
      "A 24-port, Layer 2 PoE switch with a fanless cooling system.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-16-PoE(42W)",
    name: "Standard 16 PoE",
    category: "Switching",
    subfilter: "Standard",
    image: "/images/switch.jpg",
    shortDescription:
      "A 16-port, Layer 2 PoE switch with a silent, fanless cooling system.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-48",
    name: "Standard 48",
    category: "Switching",
    subfilter: "Standard",
    image: "/images/switch.jpg",
    shortDescription:
      "A 48-port, Layer 2 switch with a silent, fanless cooling system.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },
  {
    id: "USW-24",
    name: "Standard 24",
    category: "Switching",
    subfilter: "Standard",
    image: "/images/switch.jpg",
    shortDescription:
      "A 24-port, Layer 2 switch with a silent, fanless cooling system.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" },
    ],
    isNew: true,
  },

  // Switching - WAN
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
  },
  // Switching - Utility
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
  },

  // WiFi
  // WiFi - Enterprise
  {
    id: "E7",
    name: "E7",
    category: "WiFi",
    subfilter: "Enterprise",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Enterprise-grade indoor access point with 10-stream WiFi 7 performance, a 10 GbE uplink, and a redundant GbE port for high availability.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
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
  },
  {
    id: "E7-Audience",
    name: "E7 Audience",
    category: "WiFi",
    subfilter: "Enterprise",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Enterprise-grade, indoor/outdoor access point designed for high-density environments with 12-stream 5 GHz and 6 GHz WiFi 7 performance, a 10 GbE uplink, and a redundant GbE port for high availability.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },

  // WiFi - Flagship
  {
    id: "U7-Pro-XGS",
    name: "U7 Pro XGS",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Ceiling-mounted 8-stream WiFi 7 AP with dedicated spectral scanning radio and 10/5/2.5/1 GbE support.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },

  {
    id: "U7-Pro-XG",
    name: "U7 Pro XGS",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Ceiling-mounted 6-stream WiFi 7 AP with 10/5/2.5/1 GbE support.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "U7-Pro-Max",
    name: "U7 Pro Max",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Ceiling-mounted WiFi 7 AP with 8 spatial streams, 6 GHz support, and a dedicated spectral scanning engine for interference-free WiFi in demanding, large-scale environments.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "U7-Pr0",
    name: "U7 Pro",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Ceiling-mounted WiFi 7 AP with 6 spatial streams, 6 GHz support for interference-free WiFi in demanding, large-scale environments.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "U7-LR",
    name: "U7 Long Range",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Compact, ceiling-mount WiFi 7 AP with 5 spatial streams and extended signal range.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "U7-Lite",
    name: "U7 Lite",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Compact, ceiling-mount WiFi 7 AP with 4 spatial streams and 2.5 GbE uplink.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "U6-Enterprise",
    name: "U6 Enterprise",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Ceiling-mounted WiFI 6E AP with 10 spatial streams and 6 GHz support to provide seamless, multi-band coverage within high client density environments.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "U6-Pro",
    name: "U6 Pro",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Ceiling-mounted WiFi 6 AP with 6 spatial streams designed for large offices.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "U6-PLUS",
    name: "U6+",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Compact, ceiling-mounted WiFi 6 AP with 4 spatial streams that improves upon the U6 Lite with higher performance and dual-band WiFi 6 support. Ideal for small and medium-sized businesses.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "UAP-AC-PRO",
    name: "AC Pro",
    category: "WiFi",
    subfilter: "Flagship",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Ceiling-mounted WiFi 5 AP with 6 spatial streams designed for large offices.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },

  // WiFi - Wall
  {
    id: "U7-Pro-XG-Wall",
    name: "U7 Pro XG Wall",
    category: "WiFi",
    subfilter: "Wall",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Wall-mounted 6 GHz-ready WiFi 7 AP with 1/2.5/10 GbE support.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "U7-Pro-Wall",
    name: "U7 Pro Wall",
    category: "WiFi",
    subfilter: "Wall",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Wall-mounted WiFi 7 AP with 6 spatial streams and 6 GHz support tailored for home builders with seamless installation options.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "U7-IW",
    name: "U7 In-Wall",
    category: "WiFi",
    subfilter: "Wall",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Wall-mounted WiFi 7 AP with 4 spatial streams and an integrated 2.5 GbE PoE switch designed for hospitality environments.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "U6-Enterprise-IW",
    name: "U6 Enterprise In-Wall",
    category: "WiFi",
    subfilter: "Wall",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Wall-mounted WiFi 6E AP with 10 spatial streams, 6 GHz support, and a built-in 4-port switch. Designed for high-density office networks.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "U6-IW",
    name: "U6 In-Wall",
    category: "WiFi",
    subfilter: "Wall",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Wall-mounted WiFi 6 AP with 6 spatial streams and a built-in 4‑port switch ideal for single-room coverage in hospitality environments.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "U6-Extender",
    name: "U6 Extender",
    category: "WiFi",
    subfilter: "Wall",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Easy-to-deploy WiFi 6 coverage extender that fits a standard wall outlet.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },

  // WiFi - Outdoor
  {
    id: "U7-Pro-Outdoor",
    name: "U7 Pro Outdoor",
    category: "WiFi",
    subfilter: "Outdoor",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "All-weather IP67 WiFi 7 AP with 6 spatial streams, extended-range AFC 6 GHz support, integrated directional super antenna, and articulation mounting bracket.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "U7-Outdoor",
    name: "U7 Outdoor",
    category: "WiFi",
    subfilter: "Outdoor",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "All-weather IP67 WiFi 7 AP with 4 spatial streams, an integrated directional super antenna, and versatile mounting options",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "U6-Mesh",
    name: "U6 Mesh",
    category: "WiFi",
    subfilter: "Outdoor",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Sleek, indoor/outdoor WiFi 6 AP with 6 spatial streams designed for mesh applications",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "U6-Mesh-Pro",
    name: "U6 Mesh Pro",
    category: "WiFi",
    subfilter: "Outdoor",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Sleek, indoor/outdoor WiFi 6 AP with 4 spatial streams , an integrated super antenna, and a gigabit passthrough port.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "AC Mesh",
    name: "UAP-AC-M",
    category: "WiFi",
    subfilter: "Outdoor",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Compact, indoor/outdoor WiFi 5 AP with 4 spatial streams and optional external antenna support for directional coverage.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "UK-Ultra",
    name: "Swiss Army Knife",
    category: "WiFi",
    subfilter: "Outdoor",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Incredibly compact, indoor/outdoor AP with versatile mounting options and long-range external antenna support.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },

  // WiFi - Mega Capacity
  {
    id: "Product Collection",
    name: "E7 Audience",
    category: "WiFi",
    subfilter: "Mega Capacity",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Enterprise-grade, indoor/outdoor access point designed for high-density environments with 12-stream 5 GHz and 6 GHz WiFi 7 performance, a 10 GbE uplink, and a redundant GbE port for high availability.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "UWB-XG",
    name: "WiFI BaseStation XG",
    category: "WiFi",
    subfilter: "Mega Capacity",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Tri-radio WiFi 5 AP with 12 spatial streams and a selectable beamforming antenna, designed for high-density applications at large venue.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },

  // WiFi - Bridging
  {
    id: "UDB-Pro-Sector",
    name: "Device Bridge Pro Sector",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "5 GHz point-to-multipoint access point that wirelessly bridges 50+ Device Bridge Pro clients at 5+ km distances.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "UDB-Pro",
    name: "Device Bridge Pro ",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "5 GHz wireless bridge with PoE output that connects at 5+ km distance or seamlessly uplinks to UniFI WiFI.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },

  {
    id: "UDB",
    name: "Device Bridge",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Plug-and-play, wireless bridging PoE adapter with integrated UniFI WiFI Auto-Link.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },

  {
    id: "UBB",
    name: "Building Bridge",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "60 GHz wireless point-to-point bridge with a 5 GHz backup radio.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },

  {
    id: "UDB-Switch(35W)",
    name: "Device Bridge Switch",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Compact PoE+ switch* with (1) 10 GbE port, (7) 2.5 GbE ports, and 6 GHz-ready WiFi 7 bridging integration for seamless, high-capacity wireless uplink to UniFi WiFi..",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },

  {
    id: "UBB-XG",
    name: "Device Bridge XG",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "60 GHz wireless point-to-point bridge with a 10G SFP+ uplink for maximum performance and a 5 GHz backup radio.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },
  {
    id: "UDB-IoT",
    name: "Device Bridge IoT",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "Ultra-compact wireless bridge for IoT devices with integrated UniFi WiFi Auto-Link, versatile mounting options, and powered by USB Type-C or 4-pin DC socket.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },

  // WiFi - Special Devices
  {
    id: "UTR",
    name: "UniFI Travel Router",
    category: "WiFi",
    subfilter: "Bridging",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription:
      "An ultra-slim travel router that instantly extends your UniFi Network wherever you are, bringing secure, familiar connectivity to remote locations..",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" },
    ],
  },

  // Camera Security
  // Camera Security - NVRs and Edge Devices

  {
    id: "ENVR",
    name: "Enterprise NVR",
    category: "Camera Security",
    subfilter: "NVRs and Edge Devices",
    image: "/images/camera.jpg",
    shortDescription:
      "3U NVR with (16) 2.5/3.5' drive bays, supporting up to (70) 4K cameras or (210) FUll HD cameras.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UNVR-Pro",
    name: "Network Video Recorder Pro",
    category: "Camera Security",
    subfilter: "NVRs and Edge Devices",
    image: "/images/camera.jpg",
    shortDescription:
      "A 2U-sized video recorder with (7) 2.5/3.5' HDD bays that can provide up to 60 days of storage for (24) 4K cameras or (70) Full HD cameras.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UNVR",
    name: "Network Video Recorder ",
    category: "Camera Security",
    subfilter: "NVRs and Edge Devices",
    image: "/images/camera.jpg",
    shortDescription:
      "A video recorder with (4) 2.5/3.5' HDD bays that can support up to 30 days of storage for (18) 4k cameras or (60) Full HD cameras.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UNVR-Instant",
    name: "Network Video Recorder Instant",
    category: "Camera Security",
    subfilter: "NVRs and Edge Devices",
    image: "/images/camera.jpg",
    shortDescription:
      "Compact UniFi Protect NVR with 3.5' HDD support, featuring an integrated 6-port PoE switch, integrated HDMI View Port, and a capacity for (6) 4K cameras or (15) Full HD cameras.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UNVR-Instant-Kit",
    name: "Network Video Recorder Instant Kit",
    category: "Camera Security",
    subfilter: "NVRs and Edge Devices",
    image: "/images/camera.jpg",
    shortDescription:
      "Compact UniFi Protect NVR Kit, includes (1) UniFi Protect NVR Instant with (4) G5 Turret Ultra cameras and (1) 1TB HDD, delivering an all-in-one solution for fast and effortless setup.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "AI-Key",
    name: "AI Key",
    category: "Camera Security",
    subfilter: "NVRs and Edge Devices",
    image: "/images/camera.jpg",
    shortDescription:
      "Edge AI appliance that enhances any UniFi Protect deployment with proactive, AI-driven threat detection and alerting, capable of analyzing up to 1,800 smart detection events per hour.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UP-AI-Port",
    name: "AI Port",
    category: "Camera Security",
    subfilter: "NVRs and Edge Devices",
    image: "/images/camera.jpg",
    shortDescription:
      "AI appliance that enhances any UniFI or third-party camera with AI detection, classification, and recognition capabilites.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UP-Viewport",
    name: "Protect Viewport",
    category: "Camera Security",
    subfilter: "NVRs and Edge Devices",
    image: "/images/camera.jpg",
    shortDescription:
      "Easy-to-use hub for viewing Protect camera feeds on an HDMI display.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UCK-G2-SSD",
    name: "CloudKey+",
    category: "Camera Security",
    subfilter: "NVRs and Edge Devices",
    image: "/images/camera.jpg",
    shortDescription:
      "Compact UniFi Console that connects directly to the Site Manager at unifi.ui.com for powerful, multi-application site management.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  // Camera Security - Dome & Turret

  {
    id: "UVC-G6-Pro-Turret",
    name: "G6 Pro Turret",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camera.jpg",
    shortDescription:
      "All-weather tamper-resistant 4K PoE+ camera with a Multi-TOPS AI engine, 2.36x optizal zoom, and a large 1/1.2' CMOS sensor for exceptional low-light clarity and long-range IR night vision.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UVC-G6-Pro-Dome",
    name: "G6 Pro DOme",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camera.jpg",
    shortDescription:
      "All-weather vandal-proof 4K PoE+ camera with a Multi-TOPS AI engine, 2.36x optical zoom, and a large 1/1.2' CMOS sensor for exceptional low-light clarity and long-range IR night vision.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UVC-G6-Turret",
    name: "G6 Turret",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camera.jpg",
    shortDescription:
      "All-weather, tamper-resistant 4K PoE camera with a 1/1.8' 8MP image sensor, Multi-TOPS AI Engine, and 3-axis manual adjustment for flexible installation.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UVC-G6-Dome",
    name: "G6 Dome",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camera.jpg",
    shortDescription:
      "All-weather, vandal-proof 4K PoE camera with a 1/1.8' 8MP image sensor, Multi-TOPS AI Engine, and long-range IR night vision ideal for discreet installations in high-traffic areas.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UVC-G6-Pro-360-B/W",
    name: "G6 Pro 360",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camera.jpg",
    shortDescription:
      "All-weather, vandal-resistant 12MP PoE camera with panoramic 360° coverage, digital pan-tilt-zoom functionality, and smart IR functionality.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UVC-G6-180-B/W",
    name: "G6 180",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camera.jpg",
    shortDescription:
      "Indoor/outdoor dual sensor 16MP 20 FPS PoE+ camera, with a Multi-TOPS AI Engine and panoramic 180° coverage.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UVC-G5-Turret-Ultra-B/W",
    name: "G5 Turret Ultra",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camera.jpg",
    shortDescription:
      "Ultra-compact, tamper-resistant, and weatherproof 2K HD PoE camera with long-range night vision.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UVC-AI-Turret-B/W",
    name: "AI Turret",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camera.jpg",
    shortDescription:
      "All-weather, vandal-proof 4K PoE+ turret camera with enhanced AI capabilities and IR and visible LEDs for night vision.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UVC-AI-Dome-B/W",
    name: "AI Dome",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camera.jpg",
    shortDescription:
      "All-weather, vandal-proof 4K PoE dome camera with enhanced AI capabilities and long-range IR night vision.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-AI-360-B/W",
    name: "AI 360",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camera.jpg",
    shortDescription:
      "Indoor/outdoor 2K PoE camera with pan-tilt-zoom functionality that offers full 360° surveillance.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-G5-Dome",
    name: "G5 Dome",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camera.jpg",
    shortDescription:
      "Next-gen 2K HD PoE ceiling camera with enhanced dynamic range and low-light performance.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-G5-Dome-Ultra-B/W",
    name: "G5 Dome Ultra",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camera.jpg",
    shortDescription:
      "Ultra-compact and tamper-resistant 2K HD PoE camera with night vision designed for low-profile indoor security.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-AI-MS-4-B/W",
    name: "AI Multi Sensor 4",
    category: "Camera Security",
    subfilter: "Dome & Turret",
    image: "/images/camera.jpg",
    shortDescription:
      "All-weather PoE++ 32MP multi-sensor camera featuring a Multi-TOPS AI engine, 2.33× optical zoom, 360° IR coverage, and four independently adjustable lenses for seamless wide-area and close-up monitoring.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  // Camera Security - Bullet

  {
    id: "UVC-G6-Pro-Bullet-B/W",
    name: "G6 Pro Bullet",
    category: "Camera Security",
    subfilter: "Bullet",
    image: "/images/camera.jpg",
    shortDescription:
      "All-weather 4K PoE+ camera with a Multi-TOPS AI engine, 2.36x optical zoom, and a large 1/1.2' CMOS sensor for exceptional low-light clarity and long-range IR night vision.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-G6-Bullet-B/W",
    name: "G6 Bullet",
    category: "Camera Security",
    subfilter: "Bullet",
    image: "/images/camera.jpg",
    shortDescription:
      "All-weather 4K PoE camera with a 1/1.8' 8MP image sensor, Multi-TOPS AI Engine, and long-range IR night vision.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-AI-LPR-B/W",
    name: "AI LPR",
    category: "Camera Security",
    subfilter: "Bullet",
    image: "/images/camera.jpg",
    shortDescription:
      "Specialized 4K camera with 3x optical zoom and long-range IR night vision optimized for recognizing license plates on vehicles moving up to 90 km/h.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-AI-DSLR-B/W",
    name: "AI DSLR",
    category: "Camera Security",
    subfilter: "Bullet",
    image: "/images/camera.jpg",
    shortDescription:
      "Indoor/outdoor 4K PoE camera with exceptional image quality and impressive low-light performance.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-AI-Pro-B/W",
    name: "AI Pro",
    category: "Camera Security",
    subfilter: "Bullet",
    image: "/images/camera.jpg",
    shortDescription:
      "Indoor/outdoor 4K PoE camera with 3x optical zoom, long-range IR night vision, and enhanced AI detection capabilities.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-G5-Pro",
    name: "G5 Pro",
    category: "Camera Security",
    subfilter: "Bullet",
    image: "/images/camera.jpg",
    shortDescription:
      "Next-gen indoor/outdoor 4K PoE camera with exceptional image performance, long-range IR night vision, and 3x optical zoom.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-G5-Bullet",
    name: "G5 Bullet",
    category: "Camera Security",
    subfilter: "Bullet",
    image: "/images/camera.jpg",
    shortDescription: "Next-gen indoor/outdoor 2K HD PoE Camera.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  // Camera Security - Compact

  {
    id: "UVC-G6-INS-W",
    name: "G6 Instant",
    category: "Camera Security",
    subfilter: "Compact",
    image: "/images/camera.jpg",
    shortDescription:
      "Plug-and-play, 4K WiFi-connected camera with a 1/1.8' 8MP image sensor, Multi-TOPS AI Engine, and two-way audio.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-AI-Theta-Pro-W",
    name: "Camera AI Theta Pro",
    category: "Camera Security",
    subfilter: "Compact",
    image: "/images/camera.jpg",
    shortDescription:
      "A complete ceiling 360° AI Theta system designed to discreetly provide a panoramic view of large, busy spaces.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-G5-Flex",
    name: "G5 Flex",
    category: "Camera Security",
    subfilter: "Compact",
    image: "/images/camera.jpg",
    shortDescription:
      "Compact, easy-to-deploy 2K HD PoE camera that can be staged indoors or outside.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-G4-INS",
    name: "G4 Instant",
    category: "Camera Security",
    subfilter: "Compact",
    image: "/images/camera.jpg",
    shortDescription:
      "Compact, wide-angle, WiFi-connected camera with two-way audio.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-AI-Theta-Audio",
    name: "AI Theta Audio",
    category: "Camera Security",
    subfilter: "Compact",
    image: "/images/camera.jpg",
    shortDescription: "Two-way audio module that connects to an AI Theta Hub.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-AI-Theta-ProLens50",
    name: "AI Theta Pro Long-Distance Lens",
    category: "Camera Security",
    subfilter: "Compact",
    image: "/images/camera.jpg",
    shortDescription:
      "Long-distance lens with enhanced low-light performance and dynamic range that connects to an AI Theta Hub.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  // Camera Security - PTZ

  {
    id: "UVC-G6-PTZ-B/W",
    name: "G6 PTZ",
    category: "Camera Security",
    subfilter: "PTZ",
    image: "/images/camera.jpg",
    shortDescription:
      "All-weather, 4K dual-lens camera with 10x hybrid zoom, 1/1.8' 8MP image sensor, Multi-TOPS AI Engine, and ultra-low latency pan-tilt-zoom control for motion tracking.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-AI-PTZ-B/W",
    name: "AI PTZ Industrial",
    category: "Camera Security",
    subfilter: "PTZ",
    image: "/images/camera.jpg",
    shortDescription:
      "Industrial-grade 4K PoE++ PTZ camera with enhanced AI capabilities, 22x optical zoom, and long-range adaptive IR LED night vision.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-AI-PTZ-Precision-B/W",
    name: "AI PTZ Precision",
    category: "Camera Security",
    subfilter: "PTZ",
    image: "/images/camera.jpg",
    shortDescription:
      "Industrial-grade 4K PTZ camera with enhanced AI capabilities, 31× optical zoom, adaptive IR LED night vision, and LiDAR technology for faster autofocus.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-G5-PTZ-B/W",
    name: "G5 PTZ ",
    category: "Camera Security",
    subfilter: "PTZ",
    image: "/images/camera.jpg",
    shortDescription:
      "Compact, all-weather camera with ultra-low latency pan-tilt-zoom control and versatile mounting options.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  // Camera Security - Doorbells

  {
    id: "UVC-4-Doorbell-Pro-PoE-Kit-B/W",
    name: "G4 Doorbell Pro PoE Kit",
    category: "Camera Security",
    subfilter: "Doorbells",
    image: "/images/camera.jpg",
    shortDescription:
      "Premium UniFi doorbell with integrated PoE and included PoE chime for plug-and-play installation.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-4-Doorbell-Pro-B/W",
    name: "G4 Doorbell Pro",
    category: "Camera Security",
    subfilter: "Doorbells",
    image: "/images/camera.jpg",
    shortDescription:
      "Premium UniFi doorbell with an enhanced package detection camera and integrated display.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-Doorbell-B/W",
    name: "Doorbell Lite",
    category: "Camera Security",
    subfilter: "Doorbells",
    image: "/images/camera.jpg",
    shortDescription:
      "Compact PoE video doorbell with two-way audio and versatile mounting options.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-Chime-PoE",
    name: "PoE Smart Chime",
    category: "Camera Security",
    subfilter: "Doorbells",
    image: "/images/camera.jpg",
    shortDescription:
      "PoE plug-and-play notification device, designed to pair with a UniFi doorbell or door access hub.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-Chime",
    name: "WiFi Smart Chime",
    category: "Camera Security",
    subfilter: "Doorbells",
    image: "/images/camera.jpg",
    shortDescription: "Plug-in chime designed to pair with a UniFi doorbell.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  // Camera Security - SuperLink Sensors
  {
    id: "USL-Gateway",
    name: "SuperLink Gateway",
    category: "Camera Security",
    subfilter: "SuperLink Sensors",
    image: "/images/camera.jpg",
    shortDescription:
      "Proprietary super long-range, low-latency wireless gateway for UniFi Protect Sensors.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "USL-Entry",
    name: "Entry Sensor",
    category: "Camera Security",
    subfilter: "SuperLink Sensors",
    image: "/images/camera.jpg",
    shortDescription:
      "SuperLink sensor with up to 6-year battery life for monitoring door and window open/closed status.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "USL-Motion",
    name: "Motion Sensor",
    category: "Camera Security",
    subfilter: "SuperLink Sensors",
    image: "/images/camera.jpg",
    shortDescription:
      "SuperLink motion sensor designed for versatile installation, delivering up to 6 years of battery life.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "USL-Siren",
    name: "Siren",
    category: "Camera Security",
    subfilter: "SuperLink Sensors",
    image: "/images/camera.jpg",
    shortDescription:
      "All-weather SuperLink siren delivering 110 dB alarm and emergency LED lighting powered using battery or DC input.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "USL-Siren-PoE",
    name: "Siren PoE",
    category: "Camera Security",
    subfilter: "SuperLink Sensors",
    image: "/images/camera.jpg",
    shortDescription:
      "All-weather siren delivering 110 dB alarm and emergency LED lighting powered using PoE input.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "USL-Environmental",
    name: "Environmental Sensor",
    category: "Camera Security",
    subfilter: "SuperLink Sensors",
    image: "/images/camera.jpg",
    shortDescription:
      "Battery-powered SuperLink sensor that detects water leaks, temperature, humidity, and ambient light.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UP-Sense",
    name: "All-In-One Sensor",
    category: "Camera Security",
    subfilter: "SuperLink Sensors",
    image: "/images/camera.jpg",
    shortDescription:
      "A battery-powered smart sensor capable of detecting motion, lighting, and environmental changes.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "USL-GlassBreak",
    name: "Glass Break Sensor",
    category: "Camera Security",
    subfilter: "SuperLink Sensors",
    image: "/images/camera.jpg",
    shortDescription:
      "Battery-powered SuperLink sensor featuring advanced glass break detection and motion sensing.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-USL-ANT-HG",
    name: "SuperLink High-Gain Antenna",
    category: "Camera Security",
    subfilter: "SuperLink Sensors",
    image: "/images/camera.jpg",
    shortDescription:
      "High-gain, omnidirectional antenna with an IP67-rated outdoor enclosure, built to extend SuperLink range in all weather conditions.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  // Camera Security - Accessories

  {
    id: "UP-AI-Horn-Speaker-B/W",
    name: "AI Horn Speaker",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "All-weather PoE 120 dB horn speaker with advanced AI alert functionality and versatile wall, corner, and pole mounting options.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UP-FloodLight",
    name: "Floodlight",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription: "Bright, motion-triggered light.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-Adapter-PoE-USBC",
    name: "PoE to USB-C Adapter",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Versatile adapter that provides power and connectivity to USB-C devices, including compatible Protect WiFi cameras.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-Camera-CJB-B/W",
    name: "Camera Compact Junction Box",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Tamper-resistant junction box for compact UniFi Dome and Turret cameras that enhances mounting durability, aesthetics, and ease of maintenance.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-Camera-CJB-B/W",
    name: "Camera Compact Junction Box",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Tamper-resistant junction box for compact UniFi Dome and Turret cameras that enhances mounting durability, aesthetics, and ease of maintenance.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-Camera-JB-B/W",
    name: "Camera Junction Box",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Tamper-resistant junction box for UniFi Bullet, Dome, and Turret cameras that enhances mounting durability, aesthetics, and ease of maintenance.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-AI-JB-B/W",
    name: "AI 360 Junction Box",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Tamper-resistant junction box for the AI 360 that enhances mounting durability and ease of maintenance.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-G4-Dome-Arm-Mount",
    name: "Dome Camera Arm Mount",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Arm mount accessory that attaches the G4 or G5 Dome camera to a wall.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-Camera-AM-B",
    name: "Camera Arm Mount",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Arm mount accessory that attaches the UniFi Turret cameras to a wall, corner, or pole.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-Bullet-AB-B",
    name: "Bullet Camera Angled Base",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Bullet camera mounting accessory that enhances tilt angle by 22° to achieve an unrestricted viewing angle.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-Pro-Bullet-Enhancer-B/W",
    name: "Pro Bullect Enhancer",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Long-range IR LED, floodlight, and radar detection accessory for the G6 Pro Bullet and AI Pro.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-AI-Pro-Enhancer-B/W",
    name: "AI Enhancer",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Long-range IR LED, floodlight, and radar detection accessory for the AI Pro.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-G5-Enhancer",
    name: "G5 Pro Enhancer",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Long-range IR LED and floodlight accessory for the G5 Pro.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UVC-G4-IRExtender",
    name: "G4 Bullet IR Enhancer",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription: "Long-range IR LED accessory for the G4 Bullet.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-Camera-DM-B/W",
    name: "Camera Dual Mount",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Tamper-resistant, back-to-back mount for two UniFi Bullet, Dome, or Turret cameras that supports flat surface installation and attachment to 1 1/2' NPS threaded conduit.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-GB-Plate-B/W",
    name: "Gang Box Mounting Plate",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "A mounting plate designed to interface UniFi Protect cameras with multiple types of Gang Boxes and Junction Boxes.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-Dome-FM-B/W",
    name: "AI Dome Camera Flush Mount",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Dome camera mounting accessory for recessed installation into a wall or ceiling.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-G6-Pro-360-FM-B/W",
    name: "G6 Pro 360 Flush Mount",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "G6 Pro 360 camera mounting accessory for recessed installation into a wall or ceiling.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-G6-Dome-FM-B/W",
    name: "G6 Dome Camera Flush Mount",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "G6/G6 Pro Dome camera mounting accessory for recessed installation into a wall or ceiling.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-G6-Dome-FMS-B/W",
    name: "G6 Dome Camera Flush Mount",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "G6 Dome camera mounting accessory for recessed installation into a wall or ceiling.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-G5-Dome-Ultra-FM-B/W",
    name: "G6 Dome Camera Flush Mount",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Dome camera mounting accessory for recessed installation into a wall or ceiling.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-G5-Dome-Ultra-FM-SB-B/W",
    name: "G6 Dome Camera Flush Mount",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Dome camera mounting accessory for recessed installation into a wall or ceiling with a smoked bubble for enhanced discretion.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-G6-Dome-WS-B/W",
    name: "G6 Dome Camera Weather Shield",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "G6 Dome camera accessory for optimal image quality and protection from the elements when installed outdoors on a wall or pole.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-Dome-WS-B/W",
    name: "Dome Camera Weather Shield",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Dome camera accessory for optimal image quality and protection from the elements when installed outdoors on a wall or pole.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-G6-180-FM-B/W",
    name: "G6 180 Camera Flush Mount",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "G6 180 camera mounting accessory for recessed ceiling installation.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-G6-180-PM-B/W",
    name: "G6 180 Camera Pendant Mount",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Pendant mount for suspending the G6 180 Camera from ceilings or overhead structures.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-G5-PTZ-CM-B/W",
    name: "G6/G5 PTZ Corner Mount",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription: "Corner mount accessory for G6/G5 PTZ.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-G5-PTZ-PM-B/W",
    name: "G6/G5 PTZ Pendant Mount",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription: "Pendant mount accessory for G6/G5 PTZ.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-G5-PTZ-SM-B/W",
    name: "G6/G5 PTZ Surface Mount",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription: "Ceiling surface mount accessory for G5 PTZ.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-G5-PTZ-ICM-SB-B/W",
    name: "G5 PTZ In-Ceiling Mount",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "In-ceiling mount accessory or smoked bubble cover for G5 PTZ.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-G6-PTZ-ICM-B/W",
    name: "G6 PTZ In-Ceiling Mount",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription: "In-ceiling mount accessory for G6 PTZ.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-G5-PTZ-CA-B/W",
    name: "G6/G5 PTZ Conduit Adapter",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "3/4' conduit adapter for wall-mounted G6/G5 PTZ installations.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-Flex-Cam-PWM-B/W",
    name: "Flex Pro Mount",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Versatile weatherproof wall or pole mount for G3 and G5 Flex cameras.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-G4 Doorbell Pro PoE-Gang Box-White-B/W",
    name: "G4 Doorbell Pro PoE Gang Box Mount",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Secure, flat or angled mounting plate for installing the G4 Doorbell Pro PoE over a standard single-gang box.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-G4-DBP-Cable-USB-7M",
    name: "G4 Doorbell Pro PoE to USB-C Cable",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Sever-meter USB cable that connects a G4 Doorbell Pro to a PoE source.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-G4-INS-Cable-USB-4.5M",
    name: "Instant Camera PoE to USB-C Cable",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Four-and-a-half-meter USB cable that connects a Camera G4/G6 Instant to a PoE source.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-G4-INS-Cover-DG/G/LG",
    name: "G4 Instant Cover",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Custom cover for the G4 Instant camera available in multiple colors.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-AI-Theta-Audio-Cable-1M",
    name: "AI Theta Audio Cable",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription:
      "Replacement cable that connects AI Theta Audio to an AI Theta Hub, 1m (3.3 ft).",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UACC-AI-Theta-Audio-Cable-Ext-10M",
    name: "AI Theta Audio Cable Extension Cable",
    category: "Camera Security",
    subfilter: "Camera Accessories",
    image: "/images/camera.jpg",
    shortDescription: "Ten-meter audio cable to extend AI Theta Lenses.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  // Door Access

  // Door Access - Readers(11)
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
  },

  // Door Access - Hubs(6)

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
  },

  // Door Access - Kits(7)

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
  },

  //Door Access - Intercoms (3)

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
  },

  // Door Access - NVRs (5)

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
  },

  // Door Access - Accessories (21)

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
  },

  // Integrations
  // Integrations - Network Storage
  {
    id: "UNAS-Pro-8",
    name: "UNAS Pro 8",
    category: "Integrations",
    subfilter: "Network Storage",
    image: "/images/camera.jpg",
    shortDescription:
      "2U rack-mount NAS with (8) 2.5/3.5' HDD bays and (2) M.2 NVMe SSD cache slots, delivering faster access, lower latency, and high-availability 10 Gbps networking for large-scale file storage and sharing.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UNAS-Pro-4",
    name: "UNAS Pro 4",
    category: "Integrations",
    subfilter: "Network Storage",
    image: "/images/camera.jpg",
    shortDescription:
      "1U rack-mount NAS with (4) 2.5/3.5' HDD bays and (2) M.2 NVMe SSD cache slots, delivering faster access, lower latency, and high-availability 10 Gbps networking for large-scale file storage and sharing.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UNAS-Pro",
    name: "UNAS Pro",
    category: "Integrations",
    subfilter: "Network Storage",
    image: "/images/camera.jpg",
    shortDescription:
      "2U rack-mount NAS with (7) 2.5/3.5' drive bays and 10 Gbps performance designed for large-scale file storage and sharing.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UNAS-2-B/W",
    name: "UNAS 2",
    category: "Integrations",
    subfilter: "Network Storage",
    image: "/images/camera.jpg",
    shortDescription:
      "UniFi Network Attached Storage with (2) 3.5' HDD bays, 2.5 GbE networking, USB-C connectivity, and an included PoE++ adapter, all in a compact footprint.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UNAS-4-B/W",
    name: "UNAS 4",
    category: "Integrations",
    subfilter: "Network Storage",
    image: "/images/camera.jpg",
    shortDescription:
      "UniFi Network Attached Storage with (4) 2.5/3.5' HDD bays, (2) M.2 NVMe SSD cache slots, 2.5 GbE networking, USB-C connectivity, and an included PoE+++ adapter, all in a compact footprint.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  // Integrations - Power Tech
  {
    id: "UPS-2U",
    name: "UniFi UPS 2U",
    category: "Integrations",
    subfilter: "Power Tech",
    image: "/images/camera.jpg",
    shortDescription:
      "UniFi managed 1.44kVA rackmount uninterruptible power supply with 4 backup outlets, 4 surge outlets, and a field replaceable battery, 216Wh, half load (500W) runtime of 8 minutes. Supports Graceful Shutdown for UNVR and UNAS, and includes NUT compatibility for third-party devices.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UPS-Tower",
    name: "UniFi UPS Tower",
    category: "Integrations",
    subfilter: "Power Tech",
    image: "/images/camera.jpg",
    shortDescription:
      "UniFi managed 1kVA uninterruptible power supply with 5 backup outlets 5 surge outlets and hot swappable battery, 108Wh, half load (300W) runtime of 7 minutes. Supports Graceful Shutdown for UNVR and UNAS, and includes NUT compatibility for third-party devices.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "USW-Mission-Critical(120W)",
    name: "UPS PoE Switch",
    category: "Integrations",
    subfilter: "Power Tech",
    image: "/images/camera.jpg",
    shortDescription:
      "A switch with an integrated 368Wh lithium-ion battery capable of providing uninterruptible PoE to 8 devices.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "USP-RPS",
    name: "Redundant Power",
    category: "Integrations",
    subfilter: "Power Tech",
    image: "/images/camera.jpg",
    shortDescription:
      "950W redundant power supply for rack-mounted UniFi devices.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "USP-PDU-Pro",
    name: "Power Distribution Pro",
    category: "Integrations",
    subfilter: "Power Tech",
    image: "/images/camera.jpg",
    shortDescription:
      "Designed to supply power to an entire rack-mounted UniFi system and remotely manage each connection.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "USP-PDU-HD",
    name: "Power Distribution Hi-Density",
    category: "Integrations",
    subfilter: "Power Tech",
    image: "/images/camera.jpg",
    shortDescription:
      "Designed to supply power to an entire rack-mounted UniFi system and remotely manage each connection.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  // Integrations - LTE/5G
  {
    id: "U5G-Max",
    name: "UniFi 5G Max",
    category: "Integrations",
    subfilter: "LTE/5G",
    image: "/images/camera.jpg",
    shortDescription:
      "A high-performance 5G (3.4 Gbps) modem for any UniFi deployment. Instantly adopt through any UniFi PoE port, it delivers automatic setup, dual SIM/eSIM, and seamless failover. Certified with AT&T, T-Mobile*, and Verizon**.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "U5G-Max-Outdoor",
    name: "UniFi 5G Max Outdoor",
    category: "Integrations",
    subfilter: "LTE/5G",
    image: "/images/camera.jpg",
    shortDescription:
      "A full-performance 5G (3.4 Gbps) modem for UniFi consoles and Cloud Gateways, certified with AT&T, T-Mobile*, and Verizon**, designed for outdoor use with directional antennas, remote SIM***, and dual SIM for seamless failover.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UMR-Industrial",
    name: "Mobile Router Industrial",
    category: "Integrations",
    subfilter: "LTE/5G",
    image: "/images/camera.jpg",
    shortDescription:
      "Compact, ruggedized, and carrier unlocked LTE Cat 4 mobile WiFi router designed for indoor/outdoor IoT applications.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UMR-Ultra",
    name: "Mobile Router Ultra",
    category: "Integrations",
    subfilter: "LTE/5G",
    image: "/images/camera.jpg",
    shortDescription:
      "Ultra-compact managed LTE mobile router for IoT applications with integrated LTE, wired WAN, WiFi, automatic failover, and DC power input support.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UMR",
    name: "Mobile Router",
    category: "Integrations",
    subfilter: "LTE/5G",
    image: "/images/camera.jpg",
    shortDescription:
      "Managed mobile WiFi router that brings plug-and-play connectivity to any environment. Use the pre-installed AT&T nano-SIM with three data plan options for LTE data, or bring your own AT&T nano-SIM.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "U-LTE",
    name: "LTE Backup",
    category: "Integrations",
    subfilter: "LTE/5G",
    image: "/images/camera.jpg",
    shortDescription:
      "Seamless internet failover for UniFi gateways. Includes an AT&T SIM and data plan for plug-and-play deployment.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "U-LTE-Backup Pro",
    name: "LTE Backup Pro",
    category: "Integrations",
    subfilter: "LTE/5G",
    image: "/images/camera.jpg",
    shortDescription:
      "Seamless internet failover for UniFi gateways. Bring your own AT&T nano-SIM for LTE data.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  // Integrations - Managed VoIP

  {
    id: "UTP-G3-Touch-Enterprise",
    name: "G3 Touch Enterprise",
    category: "Integrations",
    subfilter: "Managed VoIP",
    image: "/images/camera.jpg",
    shortDescription:
      "Next-generation premium desktop smartphone for UniFi Talk, featuring a 7' touch display and seamless integration with UniFi applications.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UTP-G3-Touch-Pro",
    name: "G3 Touch Pro",
    category: "Integrations",
    subfilter: "Managed VoIP",
    image: "/images/camera.jpg",
    shortDescription:
      "Next-generation desktop smartphone for UniFi Talk, featuring a 5' touch display and seamless integration with UniFi applications.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UTP-G3-Touch-Wall",
    name: "G3 Touch Wall",
    category: "Integrations",
    subfilter: "Managed VoIP",
    image: "/images/camera.jpg",
    shortDescription:
      "Next-generation wall-mountable smartphone for UniFi Talk, featuring a 7' touch display and seamless integration with UniFi applications.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UTP-TouchMax-B/W",
    name: "G2 Touch Max",
    category: "Integrations",
    subfilter: "",
    image: "/images/camera.jpg",
    shortDescription:
      "Premium desktop smartphone that delivers the ultimate user experience.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UTP-Touch-B/W",
    name: "G2 Touch",
    category: "Integrations",
    subfilter: "Managed VoIP",
    image: "/images/camera.jpg",
    shortDescription:
      "Versatile desktop smartphone that eliminates the learning curve.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UT-G3-Handset",
    name: "G3 Wireless Handset",
    category: "Integrations",
    subfilter: "Managed VoIP",
    image: "/images/camera.jpg",
    shortDescription:
      "Wireless handset which supports clear, high-quality audio for G3 Touch Phones.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UT-ATA",
    name: "Analog Telephone Adapter",
    category: "Integrations",
    subfilter: "Managed VoIP",
    image: "/images/camera.jpg",
    shortDescription:
      "Easy-to-deploy adapter for managing analog telephones and fax machines with UniFi Talk.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  // Integrations - Premium IoT
  {
    id: "UC-EV-Station-Pro",
    name: "EV Station Pro",
    category: "Integrations",
    subfilter: "Premium IoT",
    image: "/images/camera.jpg",
    shortDescription:
      "Weatherproof, 11 kW Level 2 electric vehicle charging station with an ultra-bright 10.1' touch display, flexible access control, and payment terminal accessory support.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UC-EV-Station-Lite",
    name: "EV Station Lite",
    category: "Integrations",
    subfilter: "Premium IoT",
    image: "/images/camera.jpg",
    shortDescription:
      "Weatherproof, 11 kW Level 2 electric vehicle charging station with flexible access control designed for scalable deployment.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UPL-Amp-B/W",
    name: "PowerAmp",
    category: "Integrations",
    subfilter: "Premium IoT",
    image: "/images/camera.jpg",
    shortDescription:
      "Premium speaker amplifier designed for high-fidelity multi-zone audio streaming and immersive spatial sound experiences.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UPL-Port-B/W",
    name: "PoE Audio Port",
    category: "Integrations",
    subfilter: "Premium IoT",
    image: "/images/camera.jpg",
    shortDescription:
      "A digital audio streamer with an ultra-compact, versatile design and an intuitive control system, supporting multiple music streaming services and scalable multi-zone installations .",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UC-Cast-Pro",
    name: "Display Cast Pro",
    category: "Integrations",
    subfilter: "Premium IoT",
    image: "/images/camera.jpg",
    shortDescription:
      "Managed digital signage player for HMI display with media content playback, web mode, and USB-C peripheral support.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UC-Cast-Lite",
    name: "Display Cast Lite",
    category: "Integrations",
    subfilter: "Premium IoT",
    image: "/images/camera.jpg",
    shortDescription:
      "Digital signage player designed for media playback on HDMI displays.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  // Advanced Hosting

  {
    id: "Official UniFi Hosting",
    name: "Official UniFi Hosting",
    category: "Advanced Hosting",
    subfilter: "",
    image: "/images/camera.jpg",
    shortDescription: "Scalably deploy and manage UniFi Network Devices.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "Gateway Enterprise",
    name: "UXG-Enterprise",
    category: "Advanced Hosting",
    subfilter: "",
    image: "/images/camera.jpg",
    shortDescription:
      "25G independent gateway with multi-WAN load balancing, 12.5 Gbps IPS routing, and redundant hot-swap PSUs.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "Gateway Enterprise",
    name: "UXG-Enterprise",
    category: "Advanced Hosting",
    subfilter: "",
    image: "/images/camera.jpg",
    shortDescription:
      "25G independent gateway with multi-WAN load balancing, 12.5 Gbps IPS routing, and redundant hot-swap PSUs.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UXG-Fiber(30W)",
    name: "Gateway Fiber",
    category: "Advanced Hosting",
    subfilter: "",
    image: "/images/camera.jpg",
    shortDescription:
      "Desktop 10G independent gateway with integrated 4-port 2.5 GbE switch.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UXG-Lite",
    name: "Gateway Lite",
    category: "Advanced Hosting",
    subfilter: "",
    image: "/images/camera.jpg",
    shortDescription:
      "Compact independent gateway with a full suite of advanced routing and security features.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },

  {
    id: "UXG-Max",
    name: "Gateway Max",
    category: "Advanced Hosting",
    subfilter: "",
    image: "/images/camera.jpg",
    shortDescription:
      "Compact, multi-WAN independent gateway with full 2.5G support for high-performance networking at small-to-mediaum-sites.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
  {
    id: "UXG-Pro",
    name: "Gateway Pro",
    category: "Advanced Hosting",
    subfilter: "",
    image: "/images/camera.jpg",
    shortDescription:
      "10G multi-WAN independent gateway with UniFi Power Backup support designed to protect large-scale networks.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" },
    ],
  },
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
  },
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
  },
  
];

export const CATEGORIES = [
  "Cloud Gateways",
  "Switching",
  "WiFi",
  "Camera Security",
  "Door Access",
  "Integrations",
  "Advanced Hosting",
  "Accessories",
] as const;
