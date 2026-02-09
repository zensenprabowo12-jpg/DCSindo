import { Link, useLocation } from "wouter";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  MessageCircle,
  HelpCircle,
  Share2,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import SearchModal from "./search-modal";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentBrand, setCurrentBrand] = useState("Our Brands");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light");
  const isHome = location === "/" || location === "/home-ubiquiti";

  const brands = [
    { name: "Ubiquiti", path: "/home-ubiquiti" },
    { name: "Mikrotik", path: "/coming-soon" },
    { name: "ALGcom", path: "/coming-soon" },
    { name: "V-SOL", path: "/coming-soon" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col relative">
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
        (scrolled || !isHome) ? "bg-background/95 backdrop-blur-md border-border py-3 shadow-lg" : "bg-transparent py-6 text-white"
      )}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/">
            <a 
              className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity flex items-center gap-2"
              onClick={() => setCurrentBrand("Our Brands")}
            >
              <span className={cn("text-3xl font-black italic", (scrolled || !isHome) ? "text-primary" : "text-white")}>DCS</span>
            </a>
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-sm font-black uppercase tracking-widest">
            <Link href="/collections/all">
              <a className={cn("hover:text-primary transition-colors", (scrolled || !isHome) ? "text-foreground" : "text-white")}>All Products</a>
            </Link>
            
            <div className="relative group py-2">
              <button className={cn("flex items-center gap-2 hover:text-primary transition-colors", (scrolled || !isHome) ? "text-foreground" : "text-white")}>
                {currentBrand} <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-background border border-border rounded-2xl shadow-2xl min-w-[220px] overflow-hidden p-2 backdrop-blur-xl bg-opacity-95">
                  {brands.map((brand) => (
                    <Link key={brand.name} href={brand.path} onClick={() => setCurrentBrand(brand.name)}>
                      <a className="block px-6 py-4 hover:bg-primary/10 rounded-xl transition-all font-black text-foreground">
                        {brand.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/support">
              <a className={cn("hover:text-primary transition-colors", (scrolled || !isHome) ? "text-foreground" : "text-white")}>Support</a>
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className={cn("rounded-full", (scrolled || !isHome) ? "text-foreground" : "text-white")}>
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className={cn("rounded-full", (scrolled || !isHome) ? "text-foreground" : "text-white")}>
              <Search className="w-5 h-5" />
            </Button>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className={cn("rounded-full", (scrolled || !isHome) ? "text-foreground" : "text-white")}>
                <ShoppingCart className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] w-[24rem] mb-6 overflow-hidden origin-bottom-right flex flex-col h-[32rem]"
            >
              {/* Header - Fueler Style */}
              <div className="bg-primary p-6 text-white relative overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                    <span className="text-xl font-black italic">DCS</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-widest leading-tight">DCS Connect</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest">Active Support</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Area - Scrollable */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50 dark:bg-black/20">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-black text-primary">D</span>
                  </div>
                  <div className="bg-white dark:bg-[#1a1a1a] p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 dark:border-white/5 max-w-[80%]">
                    <p className="text-sm font-medium leading-relaxed">
                      Hi! How can we help you build your enterprise network today?
                    </p>
                  </div>
                </div>
              </div>

              {/* Input Area - Fueler Style */}
              <div className="p-6 bg-white dark:bg-[#111] border-t border-gray-100 dark:border-white/5 space-y-4">
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {["Ubiquiti", "Mikrotik", "ALGcom", "V-SOL"].map(b => (
                    <button key={b} className="py-2 bg-gray-50 dark:bg-white/5 rounded-xl text-[9px] font-black uppercase tracking-tighter hover:bg-primary hover:text-white transition-all">
                      {b}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <textarea 
                    placeholder="Type your message..." 
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl p-4 pr-14 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all min-h-[80px]"
                  />
                  <Button 
                    className="absolute bottom-3 right-3 w-10 h-10 rounded-xl p-0 shadow-lg shadow-primary/20"
                    size="icon"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
                <div className="flex justify-center gap-6 pt-2">
                  <button className="text-gray-400 hover:text-primary transition-colors"><HelpCircle className="w-5 h-5" /></button>
                  <button className="text-gray-400 hover:text-primary transition-colors"><Share2 className="w-5 h-5" /></button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            size="lg" 
            className="w-20 h-20 rounded-[2rem] shadow-2xl shadow-primary/40 p-0 transition-all duration-500 bg-primary hover:bg-primary/90"
            onClick={() => setIsChatOpen(!isChatOpen)}
          >
            <AnimatePresence mode="wait">
              {isChatOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X className="w-10 h-10" />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <MessageCircle className="w-10 h-10" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </div>

      <footer className="bg-[#0f1115] text-white py-24 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-black italic uppercase text-primary tracking-tighter">DCS</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Professional network solutions for enterprise and home. No subscriptions, just performance.</p>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-white/50">Ecosystem</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><Link href="/collections/all"><a className="text-gray-400 hover:text-white transition-colors">All Hardware</a></Link></li>
                <li><Link href="/collections/cloud-gateways"><a className="text-gray-400 hover:text-white transition-colors">Gateways</a></Link></li>
                <li><Link href="/collections/wifi"><a className="text-gray-400 hover:text-white transition-colors">Wireless</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-white/50">Services</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><Link href="/support"><a className="text-gray-400 hover:text-white transition-colors">Help Center</a></Link></li>
                <li><Link href="/support"><a className="text-gray-400 hover:text-white transition-colors">Technical Sales</a></Link></li>
              </ul>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-white/50">Newsletter</h4>
                <div className="flex gap-2 p-1 bg-white/5 rounded-full border border-white/10">
                  <input placeholder="Email" className="bg-transparent border-none px-4 flex-1 text-sm outline-none" />
                  <Button className="rounded-full h-10 px-6 font-black uppercase text-[10px] tracking-widest">Join</Button>
                </div>
              </div>
              <div className="flex gap-6">
                <a href="#" className="opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-6 h-6 invert" />
                </a>
                <a href="#" className="opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <img src="https://www.svgrepo.com/show/303161/gmail-icon-logo.svg" className="w-6 h-6 invert" />
                </a>
                <a href="#" className="opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <img src="https://images.tokopedia.net/img/ak_logo.png" className="w-6 h-6 invert object-contain" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:row justify-between text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
            <p>© 2026 DCS ENTERPRISE. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}