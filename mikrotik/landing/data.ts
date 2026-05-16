export type MikrotikLandingProduct = {
  key: "A" | "B" | "C";
  name: string;
  tagline: string;
  bullets: string[];
  description: string;
  imageSrc: string;
  productDetailHref: string;
  contactHref: string;
};

export const LANDING_PRODUCTS: MikrotikLandingProduct[] = [
  {
    key: "A",
    tagline: "Neque porro quisquam est qui dolorem ipsum quia",
    name: "Nama Produk (A)",
    bullets: [
      "Bullet Point 1 (edit di data.ts)",
      "Bullet Point 2 (edit di data.ts)",
      "Bullet Point 3 (edit di data.ts)",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (dummy text — mudah diganti)",
    imageSrc: "/images/advancedhosting/1.officialuniFihosting/1.p-utama-officialuniFihosting.png",
    productDetailHref: "/mikrotik/shop",
    contactHref: "/support/mikrotik",
  },
  {
    key: "B",
    tagline: "Neque porro quisquam est qui dolorem ipsum quia",
    name: "Nama Produk (B)",
    bullets: [
      "Bullet Point 1",
      "Bullet Point 2",
      "Bullet Point 3",
      "Bullet Point 4",
    ],
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. (dummy text)",
    imageSrc: "/images/placeholder-product.png",
    productDetailHref: "/mikrotik/shop",
    contactHref: "/support/mikrotik",
  },
  {
    key: "C",
    tagline: "Neque porro quisquam est qui dolorem ipsum quia",
    name: "Nama Produk (C)",
    bullets: ["Bullet Point 1", "Bullet Point 2", "Bullet Point 3"],
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. (dummy text)",
    imageSrc: "/images/placeholder-product.png",
    productDetailHref: "/mikrotik/shop",
    contactHref: "/support/mikrotik",
  },
];

export const LANDING_VIDEO = {
  title: "What is MikroTik?",
  description:
    "MikroTik showcases its European-manufactured network equipment, combining hardware with in-house developed RouterOS for enterprise features without gatekeeping. The company highlights its diverse product range, including hybrid switches/routers, IoT solutions, and cellular connectivity options designed to break boundaries and offer exceptional value.",
  // gampang diganti: cukup ubah videoId
  videoId: "9HaU8NjH7bI",
};

export const LANDING_CATEGORIES = [
  {
  title: "Ethernet Routers",
  href: "/mikrotik/categories/ethernet%20routers",
  videoType: "youtube",
  videoId: "N5e-DdFEQrI",
},
  {
    title: "Switches",
    href: "/mikrotik/categories/switches",
    video: "/videos/switches.mp4",
  },
  {
    title: "Wireless Systems",
    href: "/mikrotik/categories/wireless%20system",
    video: "/videos/wireless-systems.mp4",
  },
  {
    title: "Wireless Home & Office",
    href: "/mikrotik/categories/wireless%20home%20%26%20office",
    video: "/videos/wireless-home-office.mp4",
  },
];

