import { Link, useLocation } from "wouter";
import {
  Search,
  Menu,
  Sun,
  Moon,
  X
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SearchModal from "./search-modal";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light");

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "Ubiquiti", path: "/home-ubiquiti" },
    { name: "Mikrotik", path: "/home-Mikrotik" },
    { name: "ALGcom", path: "/home-ALGcom" },
    { name: "V-SOL", path: "/home-V-SOL" },
    { name: "Contact Us", path: "/support" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col relative pt-16 md:pt-20">
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* Hamburger Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[49] bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: -10, x: "-50%" }}
              transition={{ duration: 0.25 }}
              className="fixed top-24 left-1/2 z-[51] w-[90%] max-w-[600px] bg-background/80 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-6 overflow-hidden"
            >
               <div className="flex flex-col gap-2">
                 {menuItems.map((item) => (
                   <Link key={item.path} href={item.path}>
                     <a 
                       className="block px-4 py-3 rounded-lg text-foreground hover:bg-accent transition-all font-medium"
                       onClick={() => setIsMenuOpen(false)}
                     >
                       {item.name}
                     </a>
                   </Link>
                 ))}
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/70 backdrop-blur-md border-b border-border py-2" 
          : "bg-transparent py-4"
      )}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative">
          
          {/* Left: Hamburger Menu */}
          <div className="flex-1 flex justify-start">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:bg-accent h-8 w-8"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Center: Logo */}
          <div className="flex-1 flex justify-center">
             <Link href="/">
              <a className="hover:opacity-80 transition-opacity">
                <img
                  src={theme === "dark" ? "/DCS-Logo-putih.png" : "/DCS-Logo-hitam.png"}
                  alt="DCS Logo"
                  className="h-6 md:h-7 w-auto"
                />
              </a>
            </Link>
          </div>

          {/* Right: Theme Toggle & Search */}
          <div className="flex-1 flex justify-end gap-1">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-foreground hover:bg-accent rounded-full h-8 w-8">
              {theme === "light" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className="text-foreground hover:bg-accent rounded-full h-8 w-8">
              <Search className="w-4 h-4" />
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

            {/* Footer Ecosystem Section */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-white/50">Ecosystem</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><Link href="/home-ubiquiti"><a className="text-gray-400 hover:text-white transition-colors">Ubiquiti</a></Link></li>
                <li><Link href="/home-Mikrotik"><a className="text-gray-400 hover:text-white transition-colors">Mikrotik</a></Link></li>
                <li><Link href="/home-ALGcom"><a className="text-gray-400 hover:text-white transition-colors">ALGcom</a></Link></li>
                <li><Link href="/home-V-SOL"><a className="text-gray-400 hover:text-white transition-colors">V-SOL</a></Link></li>
                
              </ul>
            </div>

            {/* Footer Services Section */}
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
