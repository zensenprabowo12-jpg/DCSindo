import Layout from "@/components/layout";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useRoute } from "wouter";
import { ShoppingCart, Check, Shield, ChevronLeft, ChevronRight, Maximize2, X, Package, Settings, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";

export default function ProductDetail() {
  const [match, params] = useRoute("/products/:id");
  const product = products.find(p => p.id === params?.id);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 md:py-24">
        {/* Main Product Section */}
        <div className="flex flex-col lg:flex-row gap-16 mb-32">
          {/* Left: Images with Vertical Gallery Style */}
          <div className="flex-1 flex gap-6">
            <div className="hidden md:flex flex-col gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-20 h-20 rounded-[var(--radius)] border border-border bg-secondary/30 p-2 cursor-pointer hover:border-primary transition-colors">
                  <img src={product.image} alt="" className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
            <div className="flex-1 relative group">
              <div 
                className="aspect-square bg-gray-50 dark:bg-card border border-border p-12 flex items-center justify-center sticky top-24 rounded-[var(--radius)] cursor-zoom-in overflow-hidden"
                onClick={() => setIsZoomOpen(true)}
              >
                <motion.img 
                  layoutId="product-image"
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain max-h-[600px] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <Maximize2 className="w-5 h-5" />
                  </Button>
                </div>
                
                {/* Navigation Arrows on Hover */}
                <div className="absolute inset-y-0 left-0 flex items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none md:pointer-events-auto">
                   <Button variant="ghost" size="icon" className="rounded-full bg-background/50 backdrop-blur-md">
                      <ChevronLeft className="w-6 h-6" />
                   </Button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none md:pointer-events-auto">
                   <Button variant="ghost" size="icon" className="rounded-full bg-background/50 backdrop-blur-md">
                      <ChevronRight className="w-6 h-6" />
                   </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex-1 max-w-xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="text-primary font-black text-xs tracking-[0.2em] uppercase mb-1">{product.category}</div>
                <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest">SKU: DCS-{product.id.toUpperCase()}</div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 italic uppercase leading-tight">{product.name}</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-medium">
              Professional-grade hardware with license-free software. {product.shortDescription}
            </p>
            
            <div className="text-4xl font-black mb-10 text-primary">${product.price}</div>

            <div className="flex gap-4 mb-12">
              <Link href="/cart" className="flex-1">
                <Button size="lg" className="w-full rounded-full h-16 text-lg font-black uppercase tracking-widest shadow-xl shadow-primary/20">
                  Add to Cart
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-16 h-16 rounded-full p-0 flex items-center justify-center border-2 hover:bg-primary/5">
                <ShoppingCart className="w-6 h-6" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-sm text-muted-foreground font-bold">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>In Stock, Ready to Ship</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                <span>2 Year Warranty Included</span>
              </div>
            </div>
          </div>
        </div>

        {/* Collapsible Content Sections */}
        <div className="max-w-6xl mx-auto border-t border-border pt-16">
          <Accordion type="single" collapsible className="w-full space-y-8">
            {/* Overview Section */}
            <AccordionItem value="overview" className="border-none">
              <AccordionTrigger className="text-2xl font-black italic uppercase tracking-tighter hover:no-underline group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors">
                    <Info className="w-6 h-6" />
                  </div>
                  Overview
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="overflow-hidden rounded-[var(--radius)] shadow-2xl">
                    <img src="/images/dcs-overview-1.png" alt="Overview 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="overflow-hidden rounded-[var(--radius)] shadow-2xl">
                    <img src="/images/dcs-overview-2.png" alt="Overview 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Technical Section - Category Based */}
            <AccordionItem value="technical" className="border-none">
              <AccordionTrigger className="text-2xl font-black italic uppercase tracking-tighter hover:no-underline group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors">
                    <Settings className="w-6 h-6" />
                  </div>
                  Technical Specifications
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  <div className="space-y-6">
                    <h4 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Hardware</h4>
                    <dl className="space-y-4">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex justify-between py-3 border-b border-border group">
                          <dt className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">{spec.label}</dt>
                          <dd className="font-bold text-sm">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Software & Security</h4>
                    <ul className="space-y-4 text-sm font-medium">
                      <li className="flex gap-3"><Check className="w-4 h-4 text-green-500 shrink-0" /> Enterprise-grade Firewall</li>
                      <li className="flex gap-3"><Check className="w-4 h-4 text-green-500 shrink-0" /> Real-time IDS/IPS</li>
                      <li className="flex gap-3"><Check className="w-4 h-4 text-green-500 shrink-0" /> Advanced SD-WAN Capability</li>
                      <li className="flex gap-3"><Check className="w-4 h-4 text-green-500 shrink-0" /> License-free Management</li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Networking</h4>
                    <ul className="space-y-4 text-sm font-medium">
                      <li className="flex gap-3"><Check className="w-4 h-4 text-green-500 shrink-0" /> 10G SFP+ Support</li>
                      <li className="flex gap-3"><Check className="w-4 h-4 text-green-500 shrink-0" /> High-Density Client Support</li>
                      <li className="flex gap-3"><Check className="w-4 h-4 text-green-500 shrink-0" /> L3 Switching Capability</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* In the Box Section */}
            <AccordionItem value="box" className="border-none">
              <AccordionTrigger className="text-2xl font-black italic uppercase tracking-tighter hover:no-underline group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors">
                    <Package className="w-6 h-6" />
                  </div>
                  In the Box
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-12">
                <div className="max-w-4xl mx-auto">
                   <div className="overflow-hidden rounded-[var(--radius)] shadow-2xl mb-8 bg-secondary/10">
                    <img src="/images/dcs-box.png" alt="In the box contents" className="w-full h-full object-cover" />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="space-y-2">
                      <div className="font-black text-xs uppercase tracking-widest text-primary">Device</div>
                      <p className="text-sm font-bold">{product.name}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="font-black text-xs uppercase tracking-widest text-primary">Mounting</div>
                      <p className="text-sm font-bold">Installation Kit</p>
                    </div>
                    <div className="space-y-2">
                      <div className="font-black text-xs uppercase tracking-widest text-primary">Power</div>
                      <p className="text-sm font-bold">Regional Power Cable</p>
                    </div>
                    <div className="space-y-2">
                      <div className="font-black text-xs uppercase tracking-widest text-primary">Guide</div>
                      <p className="text-sm font-bold">Quick Start Guide</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Priority Support Banner */}
        <section className="mt-32 rounded-[var(--radius)] overflow-hidden relative h-[300px] group cursor-pointer">
          <img src="/images/support-banner.png" alt="Support" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center px-12 md:px-24">
            <div className="max-w-xl text-white space-y-4">
              <h3 className="text-4xl font-black italic uppercase tracking-tighter">Priority Phone Support</h3>
              <p className="text-lg text-white/80 font-medium">From World-Class DCS Professionals.</p>
              <Link href="/support">
                <Button size="lg" className="rounded-full px-10 h-14 bg-blue-600 hover:bg-blue-500 border-none font-black uppercase tracking-widest">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-8 cursor-zoom-out"
            onClick={() => setIsZoomOpen(false)}
          >
            <motion.div 
              layoutId="product-image"
              className="relative w-full h-full flex items-center justify-center"
            >
              <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
              <Button variant="ghost" size="icon" className="absolute top-0 right-0 text-white rounded-full hover:bg-white/10" onClick={() => setIsZoomOpen(false)}>
                <X className="w-8 h-8" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}