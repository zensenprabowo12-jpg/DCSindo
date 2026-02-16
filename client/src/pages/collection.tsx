import Layout from "@/components/layout";
import { Link, useRoute, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";

// 1. Data Definitions
const CATEGORIES = [
  { id: "cloud-gateways", name: "Cloud Gateways", image: "/images/icons/gateway.png" },
  { id: "switching", name: "Switching", image: "/images/icons/switch.png" },
  { id: "wifi", name: "WiFi", image: "/images/icons/wifi.png" },
  { id: "camera-security", name: "Camera Security", image: "/images/icons/camera.png" },
  { id: "door-access", name: "Door Access", image: "/images/icons/door.png" },
  { id: "integrations", name: "Integrations", image: "/images/icons/integration.png" },
  { id: "advanced-hosting", name: "Advanced Hosting", image: "/images/icons/hosting.png" },
  { id: "accessories", name: "Accessories", image: "/images/icons/accessory.png" },
];

const SUBFILTERS: Record<string, { name: string; count: number }[]> = {
  "cloud-gateways": [
    { name: "All", count: 13 },
    { name: "Enterprise Scale", count: 1 },
    { name: "Large Scale", count: 3 },
    { name: "Compact", count: 3 },
    { name: "WiFi Integrated", count: 6 },
  ],
  "switching": [
    { name: "All", count: 54 },
    { name: "Aggregation", count: 4 },
    { name: "Enterprise", count: 5 },
    { name: "Professional Max & XG", count: 13 },
    { name: "Professional", count: 6 },
    { name: "Standard", count: 5 },
    { name: "WAN", count: 2 },
    { name: "Utility", count: 20 },
  ],
  "wifi": [
    { name: "All", count: 42 },
    { name: "Enterprise", count: 5 },
    { name: "Flagship", count: 13 },
    { name: "Wall", count: 8 },
    { name: "Outdoor", count: 7 },
    { name: "Mega Capacity", count: 2 },
    { name: "Bridging", count: 7 },
    { name: "Special Devices", count: 1 },
  ],
  "camera-security": [
    { name: "All", count: 119 },
    { name: "NVRs and Edge Devices", count: 10 },
    { name: "Dome & Turret", count: 14 },
    { name: "Bullet", count: 9 },
    { name: "Compact", count: 15 },
    { name: "PTZ", count: 4 },
    { name: "Doorbells", count: 5 },
    { name: "SuperLink Sensors", count: 9 },
    { name: "Camera Accessories", count: 53 },
  ],
  "door-access": [
    { name: "All", count: 51 },
    { name: "Readers", count: 12 },
    { name: "Hubs", count: 6 },
    { name: "Kits", count: 7 },
    { name: "Intercoms", count: 3 },
    { name: "NVRs", count: 5 },
    { name: "Door Access Accessories", count: 21 },
  ],
  "integrations": [
    { name: "All", count: 32 },
    { name: "Network Storage", count: 5 },
    { name: "Power Tech", count: 6 },
    { name: "Managed VoIP", count: 7 },
    { name: "Premium IoT", count: 7 },
    { name: "LTE/5G", count: 7 },
  ],
  "advanced-hosting": [
    { name: "All", count: 9 },
  ],
  "accessories": [
    { name: "RJ45 & Copper", count: 17 },
    { name: "SFP & Fiber", count: 29 },
    { name: "SFP Liberation Day", count: 6 },
    { name: "Storage", count: 7 },
    { name: "Rack Mount", count: 38 },
    { name: "PoE & Power", count: 27 },
    { name: "For APs", count: 21 },
    { name: "For Cameras", count: 53 },
    { name: "For Door Access", count: 21 },
    { name: "Others", count: 27 },
  ],
};

export default function Collection() {
  const [match, params] = useRoute("/collections/:category");
  const [location, setLocation] = useLocation();

  const [activeCategory, setActiveCategory] = useState("cloud-gateways");
  const [activeSubfilter, setActiveSubfilter] = useState("All");

  useEffect(() => {
    if (params?.category && params.category !== "all") {
      const found = CATEGORIES.find(c => c.id === params.category);
      if (found) setActiveCategory(found.id);
    }
  }, [params?.category]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);

    if (catId === "accessories") {
      setActiveSubfilter("RJ45 & Copper");
    } else {
      setActiveSubfilter("All");
    }

    setLocation(`/collections/${catId}`);
  };

  const generateProducts = () => {
    const currentSubfilters = SUBFILTERS[activeCategory];
    if (!currentSubfilters) return [];

    let count = 0;

    if (activeCategory === "advanced-hosting") {
      count = 9;
    } else {
      const sub = currentSubfilters.find(s => s.name === activeSubfilter);
      count = sub ? sub.count : 0;
    }

    return Array.from({ length: count }).map((_, i) => ({
      id: `${activeCategory}-${activeSubfilter.toLowerCase().replace(/\s+/g, '-')}-${i + 1}`,
      name: activeCategory === "advanced-hosting"
        ? `Item (Advanced Hosting) ${i + 1}`
        : `Item (${CATEGORIES.find(c => c.id === activeCategory)?.name} / ${activeSubfilter}) ${i + 1}`,
      price: 299 + (i * 50),
      image: "/images/placeholder-product.png"
    }));
  };

  const products = generateProducts();

  return (
    <Layout>
      {/* HEADER */}
      <div className="bg-secondary/20 border-b border-border py-16 text-center">
        <div className="container mx-auto px-4 flex flex-col items-center">

          {/* ===== UniFi Logo (Light/Dark Switch) ===== */}
          <div className="mb-6 transition-all duration-500">
            {/* Light Mode Logo (Black) */}
            <img
              src="/public/UniFi-Dark.png"
              alt="UniFi-Light"
              className="h-23 w-auto block dark:hidden"
            />

            {/* Dark Mode Logo (White) */}
            <img
              src="/public/UniFi-Light.png"
              alt="UniFi Logo"
              className="h-23 w-auto hidden dark:block"
            />
          </div>

          <p className="md:text-base font-medium text-px6 tracking-widest bold text-[25px] text-center">
            Rethinking IT
          </p>

        </div>
      </div>
      {/* CONTENT */}
      <div className="container mx-auto px-4 py-8">

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-border/50 pb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={cn(
                "flex flex-col items-center gap-3 p-4 rounded-xl transition-all min-w-[100px] group",
                activeCategory === cat.id
                  ? "bg-secondary text-primary"
                  : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-full bg-background border-2 flex items-center justify-center transition-all shadow-sm",
                activeCategory === cat.id
                  ? "border-primary"
                  : "border-border group-hover:border-primary/50"
              )}>
                <div className={cn(
                  "w-6 h-6 rounded-full",
                  activeCategory === cat.id
                    ? "bg-primary"
                    : "bg-muted-foreground/30"
                )} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-center max-w-[100px] leading-tight">
                {cat.name}
              </span>
            </button>
          ))}
        </div>

        {/* Subfilters */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-5xl mx-auto">
          {SUBFILTERS[activeCategory]?.map((sub) => (
            <button
              key={sub.name}
              onClick={() => setActiveSubfilter(sub.name)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-bold transition-all border",
                activeSubfilter === sub.name
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                  : "bg-transparent text-muted-foreground border-transparent hover:bg-secondary hover:text-foreground"
              )}
            >
              {sub.name}
              <span className="opacity-60 text-[10px] ml-1">({sub.count})</span>
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <a className="group block bg-card border border-border transition-all duration-500 hover:shadow-2xl rounded-[2rem] overflow-hidden hover:-translate-y-2">
                <div className="aspect-square relative p-12 bg-secondary/10 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/5 dark:to-white/10 rounded-2xl flex items-center justify-center text-muted-foreground/20 font-black text-4xl uppercase">
                    DCS
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">
                    {CATEGORIES.find(c => c.id === activeCategory)?.name}
                  </div>
                  <h3 className="font-black text-lg uppercase italic group-hover:text-primary transition-colors leading-tight mb-4">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-muted-foreground text-xs font-bold tracking-widest uppercase">
                      ${product.price}
                    </p>
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Search className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            <p>No products found in this category.</p>
          </div>
        )}

      </div>
    </Layout>
  );
}