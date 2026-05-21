export type MikrotikCategoryCard = {
  title: string;
  imageSrc: string;
  href?: string;
};

export const MIKROTIK_CATEGORY_CARDS_TOP: MikrotikCategoryCard[] = [
  {
    title: "Ethernet Routers",
    imageSrc: "/images/mikrotik/ethernet-router.png",
    href: "/mikrotik/categories/ethernet%20routers",
  },
  {
    title: "Switches",
    imageSrc: "/images/mikrotik/switching.png",
    href: "/mikrotik/categories/switches",
  },
  {
    title: "Wireless Systems",
    imageSrc: "/images/mikrotik/wireless-system.png",
    href: "/mikrotik/categories/wireless%20system",
  },
  {
    title: "Wireless Home & Office",
    imageSrc: "/images/mikrotik/wireless-home-and-office.png",
    href: "/mikrotik/categories/wireless%20home%20%26%20office",
  },
];

export const MIKROTIK_CATEGORY_CARDS_BOTTOM: MikrotikCategoryCard[] = [
  {
    title: "LTE / 5G",
    imageSrc: "/images/mikrotik/lte-5g.png",
    href: "/mikrotik/categories/lte%20%2F%205g",
  },
  {
    title: "IoT Products",
    imageSrc: "/images/mikrotik/iot.png",
    href: "/mikrotik/categories/iot%20products",
  },
  {
    title: "60GHz",
    imageSrc: "/images/mikrotik/60-ghz.png",
    href: "/mikrotik/categories/60%20ghz%20products",
  },
];

export type MikrotikMoreCategoryLink = { label: string; href: string };

export const MIKROTIK_MORE_CATEGORIES: MikrotikMoreCategoryLink[] = [
  { label: "Routerboards", href: "/mikrotik/categories/routerboards" },
  { label: "Enclosures", href: "/mikrotik/categories/enclosures" },
  { label: "Interfaces", href: "/mikrotik/categories/interfaces" },
  { label: "Accessories", href: "/mikrotik/categories/accessories" },
  { label: "Antennas", href: "/mikrotik/categories/antennas" },
  { label: "SFP/QSFP", href: "/mikrotik/categories/sfp%2Fqsfp" },
];

export const MIKROTIK_LATEST_VIDEO = {
  title: "Video YouTube MikroTik terbaru",
  // shortDescription:
  //   "Deskripsi singkat video (dummy). Kamu bisa ganti judul, deskripsi, dan videoId di file ini.",
  videoId: "bgaTjTeUlho",
  detailTitle: "Build electronics projects with MikroTik!",
  detailBody:
    "Sometimes you don't have to buy a single-board computer or a single-board MCU... You might be able to take reading from sensors and control relays straight from RouterOS!",
};