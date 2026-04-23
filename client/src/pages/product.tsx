import Layout from "@/components/layout";
import { products, type Product, type TechSpecSection, type InTheBoxItem, type ProductAddon, type TechSpecItem } from "@/lib/products/productUbiquiti";
import { Button } from "@/components/ui/button";
import { useRoute } from "wouter";
import { ShoppingCart, Check, Shield, ChevronLeft, ChevronRight, Maximize2, X, Package, Settings, Info, ArrowRight, Instagram, Facebook, Mail } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { ColorSelector } from "@/components/ColorSelector";
import { getProductColors, type ProductColor } from "@/lib/productColors";

// ===== HELPER FUNCTIONS UNTUK GENERATE DEFAULT VALUES =====

// Generate default bullet points berdasarkan kategori
function getDefaultBulletPoints(product: Product): string[] {
  const categoryDefaults: Record<string, string[]> = {
    "Cloud Gateways": [
      `High-performance ${product.name} solution`,
      "Enterprise-grade security and reliability",
      "Advanced routing and firewall capabilities",
      "Scalable network management"
    ],
    "Switching": [
      `Professional ${product.name} switch`,
      "High-speed connectivity and PoE support",
      "Layer 2/3 switching capabilities",
      "Rack-mountable design"
    ],
    "WiFi": [
      `Advanced ${product.name} access point`,
      "High-speed wireless connectivity",
      "Multi-band support with seamless roaming",
      "Enterprise-grade security"
    ],
    "Camera Security": [
      `Professional ${product.name} camera`,
      "High-resolution video recording",
      "AI-powered detection and analytics",
      "Weather-resistant design"
    ],
    "Door Access": [
      `Secure ${product.name} solution`,
      "Advanced access control features",
      "Multi-factor authentication support",
      "Integration with UniFi ecosystem"
    ],
    "Integrations": [
      `Seamless ${product.name} integration`,
      "Compatible with UniFi ecosystem",
      "Easy setup and configuration",
      "Reliable performance"
    ],
    "Advanced Hosting": [
      `Enterprise ${product.name} hosting`,
      "High-performance storage solution",
      "Redundant and scalable architecture",
      "24/7 reliability"
    ],
    "Accessories": [
      `Essential ${product.name} accessory`,
      "High-quality construction",
      "Easy installation",
      "Compatible with UniFi products"
    ]
  };

  return categoryDefaults[product.category] || [
    `Professional ${product.name}`,
    "Enterprise-grade quality",
    "Easy to deploy and manage",
    "Reliable performance"
  ];
}

// Generate default technical specs berdasarkan kategori
function getDefaultTechnicalSpecs(product: Product): TechSpecSection[] {
  const sku = product.sku || product.id.toUpperCase();

  const categorySpecs: Record<string, TechSpecSection[]> = {
    "Cloud Gateways": [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: product.name },
          { label: "Model", value: sku },
          { label: "Category", value: product.category },
          { label: "Form Factor", value: "Rack Mount / Desktop" }
        ]
      },
      {
        title: "Networking",
        items: [
          { label: "Routing", value: "Advanced Layer 3" },
          { label: "Firewall", value: "Stateful Firewall" },
          { label: "VPN Support", value: "IPsec, OpenVPN, WireGuard" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Processor", value: "Multi-Core ARM/x86" },
          { label: "Memory", value: "DDR4 RAM" },
          { label: "Storage", value: "SSD/HDD" }
        ]
      }
    ],
    "Switching": [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: product.name },
          { label: "Model", value: sku },
          { label: "Switching Capacity", value: "High-Speed" },
          { label: "PoE Support", value: "✓", isCheck: true }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Form Factor", value: "Rack Mount" },
          { label: "Cooling", value: "Fanless / Active" },
          { label: "Power", value: "AC Input" }
        ]
      }
    ],
    "WiFi": [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: product.name },
          { label: "Model", value: sku },
          { label: "WiFi Standard", value: "802.11ax/be" },
          { label: "Bands", value: "2.4 GHz, 5 GHz, 6 GHz" }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Mounting", value: "Ceiling / Wall" },
          { label: "Power", value: "PoE / PoE+" },
          { label: "Antennas", value: "Internal" }
        ]
      }
    ],
    "Camera Security": [
      {
        title: "Overview",
        items: [
          { label: "Product Name", value: product.name },
          { label: "Model", value: sku },
          { label: "Resolution", value: "4K / 1080p" },
          { label: "AI Detection", value: "✓", isCheck: true }
        ]
      },
      {
        title: "Hardware",
        items: [
          { label: "Sensor", value: "CMOS" },
          { label: "Night Vision", value: "IR LEDs" },
          { label: "Weather Rating", value: "IP67" }
        ]
      }
    ]
  };

  return categorySpecs[product.category] || [
    {
      title: "Overview",
      items: [
        { label: "Product Name", value: product.name },
        { label: "Model", value: sku },
        { label: "Category", value: product.category }
      ]
    },
    {
      title: "Hardware",
      items: [
        { label: "Form Factor", value: "Standard" },
        { label: "Power", value: "AC/DC" }
      ]
    }
  ];
}

// Generate default in the box items
function getDefaultInTheBox(product: Product): InTheBoxItem[] {
  return [
    { name: "Device", image: "/images/banners/dcs-box.png" },
    { name: "Mounting Kit", image: "/images/banners/dcs-box.png" },
    { name: "Power Cable", image: "/images/banners/dcs-box.png" },
    { name: "Quick Start", image: "/images/banners/dcs-box.png" }
  ];
}

// Generate default addons
function getDefaultAddons(product: Product): ProductAddon[] {
  return [
    {
      id: 1,
      name: "Mounting Kit",
      image: "/images/banners/dcs-box.png",
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
      image: "/images/banners/dcs-box.png",
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
    }
  ];
}

export default function ProductDetail() {
  const [match, params] = useRoute("/products/:id");

  // Try to find static product, or generate dynamic one
  let product = products.find(p => p.id === params?.id);

  if (!product && params?.id) {
    // Generate dummy product from ID
    const parts = params.id.split('-');
    const category = parts[0];
    const index = parts[parts.length - 1];

    product = {
      id: params.id,
      name: `Item (${category}) ${index}`,
      price: 299 + (parseInt(index) * 50),
      description: "Experience enterprise-grade performance with this cutting-edge solution.",
      shortDescription: "Experience the pinnacle of networking performance.",
      image: category === "cloud" || category === "Cloud Gateways" || category === "cloud-gateways"
        ? "/images/Enterprise-Fortress-Gateway.png"
        : "/images/placeholder-product.png",
      category: category,
      specs: [
        { label: "Throughput", value: "10 Gbps" },
        { label: "Ports", value: "24x 1GbE, 2x 10G SFP+" },
        { label: "Processor", value: "Quad-Core ARM" },
        { label: "Memory", value: "4 GB DDR4" }
      ]
    } as any;
  }

  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [selectedAddon, setSelectedAddon] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [isAddonSpecOpen, setIsAddonSpecOpen] = useState(false);
  const [showAllImages, setShowAllImages] = useState(false);
  const [expandedTechSection, setExpandedTechSection] = useState<string | null>("Overview");

  // Reset addon spec state when opening new addon
  const openAddon = (addon: any) => {
    setSelectedAddon(addon);
    setIsAddonSpecOpen(false);
  };

  const toggleTechSection = (title: string) => {
    setExpandedTechSection(expandedTechSection === title ? null : title);
  };

  if (!product) return null;

  // ===== GUNAKAN HELPER FUNCTIONS UNTUK GENERATE DEFAULT VALUES =====
  // Ambil addons dari data produk, atau gunakan default dari helper function
  const addOns = product.addons || [];

  // Ambil technical specs dari data produk, atau gunakan default dari helper function
  const technicalSpecs = product.technicalSpecs || [];

  // Ambil bullet points dari data produk, atau gunakan default dari helper function
  const bulletPoints = product.bulletPoints || [];

  // Ambil in the box items dari data produk, atau gunakan default dari helper function
  const inTheBoxItems = product.inTheBox || [];

  // Ambil overview images dari data produk, atau gunakan default
  const overviewImages = product.overviewImages || ["/images/banners/dcs-overview-1.png", "/images/banners/dcs-overview-2.png"];

  // Color selector state - after product check
  const colorVariant = getProductColors(product.id);
  const [selectedProductImage, setSelectedProductImage] = useState<string>(product.image);

  // Handle color change
  const handleColorChange = (color: ProductColor) => {
    setSelectedProductImage(color.image);
    setCurrentImg(0); // Reset to first image when color changes
  };

  // Use selected color image if available, otherwise use default product images
  const images = product.images || [selectedProductImage, "/images/banners/dcs-overview-1.png", "/images/banners/dcs-overview-2.png"];

  // Display only first 4 images in the list, or more if needed
  const displayImages = images.slice(0, 4);
  const remainingImagesCount = images.length - 4;

  const nextImg = () => setCurrentImg((prev) => (prev + 1) % images.length);
  const prevImg = () => setCurrentImg((prev) => (prev - 1 + images.length) % images.length);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-32">
        <div className="flex flex-col lg:flex-row gap-20 mb-40">
          <div className="flex-1 flex gap-8">
            <div className="hidden md:flex flex-col gap-4">
              {displayImages.map((img: string, i: number) => (
                <div
                  key={i}
                  className={cn(
                    "w-20 h-20 rounded-2xl border bg-secondary/30 p-2 cursor-pointer transition-all",
                    currentImg === i ? "border-primary ring-2 ring-primary/20 scale-105" : "border-border hover:border-primary/50"
                  )}
                  onClick={() => setCurrentImg(i)}
                >
                  <img src={img} className="w-full h-full object-contain" />
                </div>
              ))}

              {remainingImagesCount > 0 && (
                <button
                  onClick={() => setShowAllImages(true)}
                  className="w-20 h-20 rounded-2xl border border-border bg-secondary/50 flex flex-col items-center justify-center text-xs font-bold text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                >
                  <span className="text-lg mb-1">+{remainingImagesCount}</span>
                  <span>more</span>
                </button>
              )}
            </div>
            <div className="flex-1 relative group rounded-3xl overflow-hidden border border-border bg-card shadow-2xl flex flex-col">
              <div
                className="flex-1 p-10 flex items-center justify-center cursor-zoom-in min-h-[500px]"
                onClick={() => setIsZoomOpen(true)}
              >
                <motion.img
                  key={images[currentImg]}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={images[currentImg]}
                  className="w-full h-full max-h-[500px] rounded-2xl object-contain"
                />

                <div className="absolute inset-y-0 left-0 flex items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" className="rounded-full bg-background/80 backdrop-blur-md shadow-xl" onClick={(e) => { e.stopPropagation(); prevImg(); }}>
                    <ChevronLeft className="w-8 h-8" />
                  </Button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" className="rounded-full bg-background/80 backdrop-blur-md shadow-xl" onClick={(e) => { e.stopPropagation(); nextImg(); }}>
                    <ChevronRight className="w-8 h-8" />
                  </Button>
                </div>
                <Button variant="secondary" size="icon" className="absolute top-6 right-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {showAllImages && (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-8"
                onClick={() => setShowAllImages(false)}
              >
                <div className="bg-background rounded-3xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-black uppercase tracking-tighter">Product Gallery</h2>
                    <Button variant="ghost" size="icon" onClick={() => setShowAllImages(false)}>
                      <X className="w-6 h-6" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((img: string, i: number) => (
                      <div
                        key={i}
                        className="aspect-square rounded-2xl border border-border bg-secondary/10 p-4 hover:border-primary transition-colors cursor-pointer"
                        onClick={() => {
                          setCurrentImg(i);
                          setShowAllImages(false);
                        }}
                      >
                        <img src={img} className="w-full h-full object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex-1 space-y-12">
            <div className="space-y-4">
              <Link href="/" className="inline-block text-primary font-black text-xs tracking-[0.3em] uppercase mb-4 hover:underline">
                Dinamika Cipta Solusi
              </Link>

              {/* Metadata Fields - SKU dan Category dari data.ts */}
              <div className="grid grid-cols-2 gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">
                <div><span className="text-foreground">SKU-{product.sku || Math.floor(Math.random() * 10000)}</span></div>
                <div><span className="text-foreground capitalize">Category: {product?.category || "Networking"}</span></div>
              </div>

              <h1 className="text-6xl font-black tracking-tighter italic uppercase leading-tight underline decoration-primary decoration-4 underline-offset-8">{product.name}</h1>
              <p className="text-2xl text-muted-foreground font-medium leading-relaxed italic">{product.shortDescription || "Experience the pinnacle of networking performance."}</p>

              {/* Bullet Points dari data.ts atau auto-generated dari helper function */}
              <ul className="space-y-2 mt-4 text-sm text-muted-foreground font-medium leading-relaxed">
                {bulletPoints.map((point: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="block w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Color Selector - Tampil jika produk punya varian warna */}
              {colorVariant && (
                <ColorSelector
                  colors={colorVariant.colors}
                  defaultColor={colorVariant.defaultColor}
                  onColorChange={handleColorChange}
                  className="mt-6"
                />
              )}
            </div>

            <div className="flex gap-6">
              <Link href="/support">
                <Button size="lg" className="w-full rounded-full h-14 text-lg font-black uppercase tracking-widest shadow-xl shadow-primary/20 group hover:scale-[1.02] transition-all">
                  Contact Us
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-8 text-xs font-black uppercase tracking-widest text-muted-foreground">
              <div className="flex items-center gap-4"><div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" /> In Stock</div>
              <div className="flex items-center gap-4"><Shield className="w-6 h-6 text-primary" /> 1 Year Warranty</div>
            </div>

            <div className="pt-8 border-t border-border">
              <div className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-4">Share</div>
              <div className="flex gap-4">
                <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-5 h-5 filter dark:invert" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Inspired Horizontal Tabs */}
        <div className="space-y-16">
          <div className="flex justify-center border-b border-border gap-12 sticky top-24 bg-background/80 backdrop-blur-xl z-40 py-2 overflow-x-auto">
            {[
              "overview",
              "technical",
              inTheBoxItems?.length ? "box" : null,
              addOns?.length ? "addons" : null
            ].filter(Boolean).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as string)}
                className={cn(
                  "text-sm font-black uppercase tracking-widest py-4 transition-all relative whitespace-nowrap",
                  activeTab === tab ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab === "box" ? "In The Box" : tab === "addons" ? "Add Ons" : tab}
                {activeTab === tab && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full" />}
              </button>
            ))}
          </div>

          <div className="py-12">
            {activeTab === "overview" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Gambar overview dari data.ts atau auto-generated dari helper function */}
                {overviewImages.map((img: string, idx: number) => (
                  <img key={idx} src={img} className="rounded-3xl shadow-2xl w-full aspect-video object-cover" />
                ))}
              </motion.div>
            )}
            {activeTab === "technical" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
                {/* Technical Specs dari data.ts - Sekarang berlaku untuk semua kategori */}
                {technicalSpecs && technicalSpecs.length > 0 ? (
                  <div className="space-y-1">
                    {technicalSpecs.map((section: TechSpecSection) => (
                      <div key={section.title} className="border-b border-border">
                        <button
                          onClick={() => toggleTechSection(section.title)}
                          className="w-full flex items-center justify-between py-6 group hover:text-primary transition-colors"
                        >
                          <span className="text-lg font-bold uppercase tracking-wide">{section.title}</span>
                          <ChevronRight className={cn("w-5 h-5 transition-transform duration-300", expandedTechSection === section.title ? "rotate-90" : "")} />
                        </button>
                        <AnimatePresence>
                          {expandedTechSection === section.title && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-8 grid grid-cols-1 gap-y-6">
                                {section.items.map((item: TechSpecItem, idx: number) => (
                                  <div key={idx} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 border-b border-border/50 pb-4">
                                    <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                                    <div className="text-sm font-medium">
                                      {item.isCheck ? (
                                        <Check className="w-4 h-4 text-primary" />
                                      ) : (
                                        item.value
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Fallback jika tidak ada technical specs di data.ts
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                    <div className="space-y-8">
                      <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Hardware</h4>
                      <dl className="space-y-6">
                        {(product.specs || [
                          { label: "Throughput", value: "10 Gbps" },
                          { label: "Ports", value: "24x 1GbE, 2x 10G SFP+" }
                        ]).map((s: any, i: number) => (
                          <div key={i} className="flex justify-between border-b border-border pb-4 group">
                            <dt className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">{s.label}</dt>
                            <dd className="font-bold">{s.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                    <div className="space-y-8">
                      <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Capabilities</h4>
                      <ul className="space-y-4 font-bold text-sm">
                        {["10G SFP+ Support", "Enterprise Firewall", "AI Detection Engine", "Scalable Management"].map(t => (
                          <li key={t} className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> {t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
            {activeTab === "box" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto space-y-12">
                {/* In The Box items dari semua file produk atau auto-generated dari helper function - hanya gambar tanpa text */}
                <div className={cn(
                  "gap-12",
                  inTheBoxItems.length === 1
                    ? "flex justify-center"
                    : "grid grid-cols-2 md:grid-cols-3"
                )}>
                  {inTheBoxItems.map((item: InTheBoxItem, idx: number) => (
                    <div
                      key={idx}
                      className={cn(
                        "rounded-3xl shadow-2xl bg-secondary/20 flex items-center justify-center",
                        inTheBoxItems.length === 1
                          ? "p-16 max-w-3xl w-full"   // 🔥 BESAR kayak UniFi
                          : "p-8"
                      )}
                    >
                      <img
                        src={item.image}
                        className={cn(
                          "object-contain",
                          inTheBoxItems.length === 1
                            ? "w-full max-h-[500px]" // 🔥 gedein gambar
                            : "w-full h-full"
                        )}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            {activeTab === "addons" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Addons dengan preview lebih kecil */}
                {addOns.map((addon: ProductAddon) => (
                  <div
                    key={addon.id}
                    className="group relative rounded-2xl border border-border bg-card p-4 hover:border-primary/50 transition-all cursor-pointer"
                    onClick={() => openAddon(addon)}
                  >
                    {/* Preview image lebih kecil */}
                    <div className="aspect-square rounded-xl bg-secondary/20 mb-3 p-4 flex items-center justify-center">
                      <img src={addon.image} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                    </div>
                    <h3 className="text-sm font-bold mb-1">{addon.name}</h3>
                    <p className="text-xs text-muted-foreground">Click for details</p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedAddon && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedAddon(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background rounded-3xl p-8 max-w-5xl w-full shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Button variant="ghost" size="icon" className="absolute top-6 right-6 z-10" onClick={() => setSelectedAddon(null)}>
                <X className="w-6 h-6" />
              </Button>

              <div className="flex flex-col md:flex-row gap-12">
                <div className="w-full md:w-1/2 bg-secondary/20 rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
                  <img src={selectedAddon.image} className="w-full object-contain max-h-[300px]" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8">
                  <div>
                    <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-2">{selectedAddon.name}</h2>
                    {/* Harga dari data.ts */}
                    {selectedAddon.price && (
                      <p className="text-xl text-muted-foreground font-medium">${selectedAddon.price}.00</p>
                    )}
                  </div>

                  <div className="space-y-4">
                    {/* Deskripsi dari data.ts */}
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedAddon.description || "Compact, stackable, and toolless design. Perfect for your rack-mount devices."}
                    </p>
                    <ul className="space-y-3">
                      {selectedAddon.specs.map((spec: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-bold">
                          <Check className="w-5 h-5 text-green-500" /> {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Collapsible Tech Specs */}
                  <div className="border-t border-border pt-4">
                    <button
                      onClick={() => setIsAddonSpecOpen(!isAddonSpecOpen)}
                      className="flex items-center justify-between w-full py-2 hover:text-primary transition-colors"
                    >
                      <span className="text-sm font-black uppercase tracking-widest">Tech Specs</span>
                      <ChevronRight className={cn("w-4 h-4 transition-transform", isAddonSpecOpen ? "rotate-90" : "")} />
                    </button>

                    <AnimatePresence>
                      {isAddonSpecOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <dl className="space-y-3 pt-4 pb-2">
                            {selectedAddon.detailedSpecs?.map((spec: any, idx: number) => (
                              <div key={idx} className="flex justify-between text-sm">
                                <dt className="text-muted-foreground font-medium">{spec.label}</dt>
                                <dd className="font-bold">{spec.value}</dd>
                              </div>
                            ))}
                          </dl>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Tombol Contact Us dan More */}
                  <div className="pt-4 flex gap-4">
                    <Link href="/support" className="flex-1">
                      <Button size="lg" className="w-full rounded-full h-14 text-lg font-black uppercase tracking-widest shadow-xl shadow-primary/20 group hover:scale-[1.02] transition-all">
                        Contact Us!
                      </Button>
                    </Link>

                    {/* Tombol More - link ke halaman produk addon jika ada */}
                    {selectedAddon.productLink && (
                      <Link href={selectedAddon.productLink} className="flex-1">
                        <Button
                          size="lg"
                          variant="outline"
                          className="w-full rounded-full h-14 text-lg font-black uppercase tracking-widest group hover:scale-[1.02] transition-all"
                        >
                          More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isZoomOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-8 cursor-zoom-out"
            onClick={() => setIsZoomOpen(false)}
          >
            <img src={images[currentImg]} className="max-w-full max-h-full object-contain" />
            <Button variant="ghost" className="absolute top-8 right-8 text-white"><X className="w-10 h-10" /></Button>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}