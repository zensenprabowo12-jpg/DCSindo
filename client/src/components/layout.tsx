import { Link, useLocation } from "wouter";
import {
  Search,
  Menu,
  Sun,
  Moon,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const brandRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const brands = [
    { name: "Ubiquiti", path: "/home-ubiquiti" },
    { name: "Mikrotik", path: "/home-mikrotik" },
    { name: "ALGcom", path: "/home-algcom" },
    { name: "V-SOL", path: "/home-vsol" },
  ];

  const supportBrands = [
    { name: "Ubiquiti", path: "/support/ubiquiti" },
    { name: "Mikrotik", path: "/support/mikrotik" },
    { name: "ALGcom", path: "/support/algcom" },
    { name: "V-SOL", path: "/support/vsol" },
  ];

  const Dropdown = ({ items, close }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="absolute top-12 left-1/2 -translate-x-1/2 w-60 
      bg-background border border-border rounded-2xl shadow-xl p-4"
    >
      {items.map((item: any) => (
        <Link key={item.path} href={item.path}>
          <a
            onClick={close}
            className="block px-4 py-2 rounded-xl hover:bg-primary/10 transition"
          >
            {item.name}
          </a>
        </Link>
      ))}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">

      <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/">
            <a>
              <img
                src={theme === "dark" ? "/DCS-Logo-putih.png" : "/DCS-Logo-hitam.png"}
                className="h-10 md:h-14"
              />
            </a>
          </Link>

          {/* MENU */}
          <div className="hidden md:flex items-center gap-10 relative">

            <Link href="/"><a className="hover:text-primary">Home</a></Link>

            <div className="relative" ref={brandRef}>
              <button onClick={() => setIsBrandOpen(!isBrandOpen)}>
                Our Brands
              </button>
              <AnimatePresence>
                {isBrandOpen && (
                  <Dropdown items={brands} close={() => setIsBrandOpen(false)} />
                )}
              </AnimatePresence>
            </div>

            {/* SUPPORT */}
            <div className="relative" ref={supportRef}>
              <button onClick={() => setIsSupportOpen(!isSupportOpen)}>
                Support
              </button>
              <AnimatePresence>
                {isSupportOpen && (
                  <Dropdown items={supportBrands} close={() => setIsSupportOpen(false)} />
                )}
              </AnimatePresence>
            </div>

            <Link href="/support"><a className="hover:text-primary">Contact Us</a></Link>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5"/>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              {theme === "light" ? <Sun className="w-5 h-5"/> : <Moon className="w-5 h-5"/>}
            </Button>
          </div>

        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}