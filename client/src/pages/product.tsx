import Layout from "@/components/layout";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useRoute } from "wouter";
import { ShoppingCart, Check, Shield, ChevronLeft, ChevronRight, Maximize2, X, Package, Settings, Info, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

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
        image: "/images/placeholder-product.png",
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
  const [activeTab, setActiveTab] = useState("overview");

  if (!product) return null;

  const images = [product.image, "/images/dcs-overview-1.png", "/images/dcs-overview-2.png"];

  const nextImg = () => setCurrentImg((prev) => (prev + 1) % images.length);
  const prevImg = () => setCurrentImg((prev) => (prev - 1 + images.length) % images.length);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-32">
        <div className="flex flex-col lg:flex-row gap-20 mb-40">
          <div className="flex-1 flex gap-8">
            <div className="hidden md:flex flex-col gap-4">
              {images.map((img, i) => (
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
            </div>
            <div className="flex-1 relative group rounded-3xl overflow-hidden border border-border bg-card shadow-2xl">
              <div 
                className="aspect-square p-12 flex items-center justify-center cursor-zoom-in"
                onClick={() => setIsZoomOpen(true)}
              >
                <motion.img 
                  key={currentImg}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={images[currentImg]} 
                  className="w-full h-full object-contain max-h-[600px]"
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

          <div className="flex-1 space-y-12">
            <div className="space-y-4">
              <Link href="/" className="inline-block text-primary font-black text-xs tracking-[0.3em] uppercase mb-4 hover:underline">
                Dinamika Cipta Solusi
              </Link>
              
              {/* Added Metadata Fields */}
              <div className="grid grid-cols-2 gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">
                 <div><span className="text-foreground">SKU-{Math.floor(Math.random() * 10000)}</span></div>
                 <div><span className="text-foreground capitalize">{product?.category || "Networking"}</span></div>
              </div>

              <h1 className="text-6xl font-black tracking-tighter italic uppercase leading-tight">{product.name}</h1>
              <p className="text-2xl text-muted-foreground font-medium leading-relaxed italic">{product.shortDescription || "Experience the pinnacle of networking performance."}</p>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">Experience the pinnacle of networking performance.</p>
            </div>
            
            <div className="flex gap-6">
              <Button size="lg" className="flex-1 rounded-full h-14 text-lg font-black uppercase tracking-widest shadow-xl shadow-primary/20 group hover:scale-[1.02] transition-all">
                Add to Cart
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-8 text-xs font-black uppercase tracking-widest text-muted-foreground">
              <div className="flex items-center gap-4"><div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" /> In Stock</div>
              <div className="flex items-center gap-4"><Shield className="w-6 h-6 text-primary" /> 2 Year Warranty</div>
            </div>
          </div>
        </div>

        {/* Brand Inspired Horizontal Tabs */}
        <div className="space-y-16">
          <div className="flex border-b border-border gap-12 sticky top-24 bg-background/80 backdrop-blur-xl z-40 py-2">
            {["overview", "technical", "box"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "text-sm font-black uppercase tracking-widest py-4 transition-all relative",
                  activeTab === tab ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab === "box" ? "In The Box" : tab}
                {activeTab === tab && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full" />}
              </button>
            ))}
          </div>

          <div className="py-12">
            {activeTab === "overview" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <img src="/images/dcs-overview-1.png" className="rounded-3xl shadow-2xl w-full aspect-video object-cover" />
                <img src="/images/dcs-overview-2.png" className="rounded-3xl shadow-2xl w-full aspect-video object-cover" />
              </motion.div>
            )}
            {activeTab === "technical" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-3 gap-20">
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
              </motion.div>
            )}
            {activeTab === "box" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto space-y-12 text-center">
                <img src="/images/dcs-box.png" className="rounded-[4rem] shadow-2xl w-full bg-secondary/20 p-20" />
                <div className="grid grid-cols-4 gap-12 text-[10px] font-black uppercase tracking-[0.2em]">
                  {["Device", "Mounting Kit", "Power Cable", "Quick Start"].map(item => <div key={item}>{item}</div>)}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

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