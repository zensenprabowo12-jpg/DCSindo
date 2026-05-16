export type MikrotikCategoryCard = {
  title: string;
  imageSrc: string;
  href?: string;
};

export const MIKROTIK_CATEGORY_CARDS_TOP: MikrotikCategoryCard[] = [
  {
    title: "Ethernet Routers",
    imageSrc: "/images/placeholder-product.png",
    href: "/mikrotik/categories/ethernet%20routers",
  },
  {
    title: "Switches",
    imageSrc: "/images/placeholder-product.png",
    href: "/mikrotik/categories/switches",
  },
  {
    title: "Wireless Systems",
    imageSrc: "/images/placeholder-product.png",
    href: "/mikrotik/categories/wireless%20system",
  },
  {
    title: "Wireless Home & Office",
    imageSrc: "/images/placeholder-product.png",
    href: "/mikrotik/categories/wireless%20home%20%26%20office",
  },
];

export const MIKROTIK_CATEGORY_CARDS_BOTTOM: MikrotikCategoryCard[] = [
  {
    title: "LTE / 5G",
    imageSrc: "/images/placeholder-product.png",
    href: "/mikrotik/categories/lte%20%2F%205g",
  },
  {
    title: "IoT Products",
    imageSrc: "/images/placeholder-product.png",
    href: "/mikrotik/categories/iot%20products",
  },
  {
    title: "60GHz",
    imageSrc: "/images/placeholder-product.png",
    href: "/mikrotik/categories/60ghz",
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
  title: "Judul video YouTube terbaru",
  shortDescription:
    "Deskripsi singkat video (dummy). Kamu bisa ganti judul, deskripsi, dan videoId di file ini.",
  // Ambil dari link YouTube: https://www.youtube.com/watch?v=VIDEO_ID
  videoId: "9HaU8NjH7bI",
  detailTitle: "Penjelasan detail produk pada video",
  detailBody:
    "Tulis penjelasan detail mengenai product yang sedang dijelaskan dalam video ini. (Dummy text — silakan ganti sesuai kebutuhan.)",
};