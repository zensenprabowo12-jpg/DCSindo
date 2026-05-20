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
    tagline: "More than just a router.",
    name: "L009UIGS-RM",
    bullets: [
      "Powerful dual-core ARM CPU",
      "SFP cage that supports both Gigabit and 2.5 Gigabit connectivity.",
      "Up to 4 times faster than RB2011 in most cases and setups",
    ],
    description:
      "Time to upgrade your RB2011 setups! L009 offers more features & better performance for the same low price! This product line is 2-4 times faster than RB2011, it has a modern dual-core ARM CPU with container support, an innovative enclosure that allows mounting up to four routers in a single 1U space, more RAM, PoE, and 2.5G SFP support.",
    imageSrc: "/images/mikrotik/3.l009uigs-rm.png",
    productDetailHref: "/mikrotik/shop/8",
    contactHref: "/support",
  },
  {
    key: "B",
    tagline: "Reach wire-speed on all ports with the mighty Marvell switch-chip",
    name: "CRS804 DDQ",
    bullets: [
      "4 GB of RAM",
      "4x 400G QSFP56-DD ports",
      "2x 1G/10G Ethernet ports",
      "2x hot-swap cooling fans",
    ],
    description:
      "A compact 1U 400G switch built for AI clusters, storage fabrics, and high-speed aggregation, featuring four 400G QSFP56-DD ports, dual 10 Gigabit Ethernet, and RouterOS v7. With hot-swap power supplies, robust cooling, and low power consumption, it delivers ultra-high bandwidth, wire-speed performance, and future-proof scalability at an accessible price point.",
    imageSrc: "/images/mikrotik/0.utama.png",
    productDetailHref: "/mikrotik/shop/25",
    contactHref: "/support",
  },
  {
    key: "C",
    tagline: "The new MikroTik flagship with the power of a whole fleet",
    name: "CCR2216-1G-12XS-2XQ",
    bullets: [
      "Powerful 16-core CPU", 
      "16 GB of RAM",
      "Two M.2 SATA slots for additional storage."
    ],
    description:
      "The new MikroTik flagship with the power of a whole fleet. Unleash the power of 100 Gigabit networking with L3 Hardware Offloading! This router can be a handy drop-in upgrade for existing CCR1072 setups.",
    imageSrc: "/images/mikrotik/1.ccr2216-1g-12xs-2xq.png",
    productDetailHref: "/mikrotik/shop/10",
    contactHref: "/support",
  },
];

export const LANDING_VIDEO = {
  title: "What is MikroTik?",
  description:
    "MikroTik showcases its European-manufactured network equipment, combining hardware with in-house developed RouterOS for enterprise features without gatekeeping. The company highlights its diverse product range, including hybrid switches/routers, IoT solutions, and cellular connectivity options designed to break boundaries and offer exceptional value.",
  // gampang diganti: cukup ubah videoId
  videoId: "piLybn0gx0w",
};

export const LANDING_CATEGORIES = [
  {
    title: "Ethernet Routers",
    href: "/mikrotik/categories/ethernet%20routers",
    videoType: "youtube",
    videoId: "N5e-DdFEQrI",
    imageSrc: "/images/mikrotik/ethernet-router.png",
  },
  {
    title: "Switches",
    href: "/mikrotik/categories/switches",
    video: "/videos/switches.mp4",
    imageSrc: "/images/mikrotik/switching.png",
  },
  {
    title: "Wireless Systems",
    href: "/mikrotik/categories/wireless%20system",
    video: "/videos/wireless-systems.mp4",
    imageSrc: "/images/mikrotik/wireless-system.png",
  },
  {
    title: "Wireless Home & Office",
    href: "/mikrotik/categories/wireless%20home%20%26%20office",
    video: "/videos/wireless-home-office.mp4",
    imageSrc: "/images/mikrotik/wireless-home-and-office.png",
  },
];


