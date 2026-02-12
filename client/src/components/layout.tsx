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
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
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
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col relative pt-16 md:pt-20">
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent py-6 text-white bg-[#000000]">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/">
              <a
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                onClick={() => setCurrentBrand("Our Brands")}
              >
                <img
                  src={
                    (scrolled || !isHome) 
                      ? (theme === "dark" ? "/DCS-Logo-putih.png" : "/DCS-Logo-hitam.png")
                      : "/DCS-Logo-putih.png"
                  }
                  alt="DCS Logo"
                  className={cn(
                    "h-10 w-auto transition-all duration-300", 
                    (scrolled || !isHome) && "scale-90"
                  )}
                />
              </a>
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-sm font-black tracking-widest">
            <Link href="/collections/all">
              <a className={cn("hover:text-primary transition-colors", (scrolled || !isHome) ? "text-foreground" : "text-white")}>All products</a>
            </Link>
            
            <div className="relative group py-2">
              <button className={cn("flex items-center gap-2 hover:text-primary transition-colors", (scrolled || !isHome) ? "text-foreground" : "text-white")}>
                {currentBrand} <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-background border border-border rounded-[12px] shadow-2xl min-w-[220px] overflow-hidden p-2 backdrop-blur-xl bg-opacity-95">
                  {brands.map((brand) => (
                    <Link key={brand.name} href={brand.path} onClick={() => setCurrentBrand(brand.name)}>
                      <a className="block px-6 py-4 hover:bg-primary/10 rounded-[8px] transition-all font-black text-foreground">
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
            {/* About Us Link */}
            <Link href="/support">
              <a className={cn("hover:text-primary transition-colors", (scrolled || !isHome) ? "text-foreground" : "text-white")}>Contact Us</a>
            </Link>
            
          </nav>
          
          

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className={cn("rounded-full hover:bg-white/10", (scrolled || !isHome) ? "text-foreground hover:bg-accent" : "text-white")}>
              {theme === "light" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className={cn("rounded-full hover:bg-white/10", (scrolled || !isHome) ? "text-foreground hover:bg-accent" : "text-white")}>
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-[#0f1115] text-white py-24 border-t border-white/5">
        <div className="container mx-auto px-4 md-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-auto">
            <div className="space-y-2 mb-auto">
              <img
                src="/DCS-Logo-putih.png"
                alt="DCS Logo"
                className="h-10 w-auto transition-all duration-300"
              />
              <p className="text-gray-400 text-sm leading-relaxed">Professional network solutions for enterprise and home.</p>
                <p className="text-gray-400 text-sm leading-relaxed"> No subscriptions, just performance.</p>
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