import { Link, useLocation } from "wouter";
import {
  Search,
  Menu,
  Sun,
  Moon,
  X
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SearchModal from "./search-modal";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const brandRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    localStorage.setItem("theme", theme);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (brandRef.current && !brandRef.current.contains(e.target as Node)) {
        setIsBrandOpen(false);
      }
      if (supportRef.current && !supportRef.current.contains(e.target as Node)) {
        setIsSupportOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTheme = () =>
    setTheme(prev => (prev === "light" ? "dark" : "light"));

  const brands = [
    { name: "Ubiquiti", path: "/home-ubiquiti", support: "/support/ubiquiti" },
    { name: "Mikrotik", path: "/home-mikrotik", support: "/support/mikrotik" },
    { name: "ALGcom", path: "/home-algcom", support: "/support/algcom" },
    { name: "V-SOL", path: "/home-vsol", support: "/support/vsol" }
  ];

  const activeBrand =
    brands.find(b => location === b.path)?.name || "Our Brands";

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col relative pt-16">

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* ================= HEADER ================= */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background shadow-md border-b border-border"
            : "bg-background/60 backdrop-blur-xl"
        )}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/">
            <a>
              <img
                src={theme === "dark"
                  ? "/DCS-Logo-putih.png"
                  : "/DCS-Logo-hitam.png"}
                className="h-8 md:h-14 w-auto transition-all"
              />
            </a>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 relative">

            {/* HOME */}
            <Link href="/">
              <a className="relative px-3 py-1 font-medium hover:text-primary transition">
                Home
                {location === "/" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 -z-10 rounded-lg bg-primary/10"
                  />
                )}
              </a>
            </Link>

            {/* OUR BRANDS */}
            <div className="relative" ref={brandRef}>
              <button
                onClick={() => setIsBrandOpen(!isBrandOpen)}
                className="px-3 py-1 font-medium flex items-center gap-2 hover:text-primary transition"
              >
                {activeBrand}
              </button>

              <AnimatePresence>
                {isBrandOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-14 left-1/2 -translate-x-1/2 w-60 bg-background border border-border rounded-2xl shadow-xl p-4"
                  >
                    {brands.map((brand) => (
                      <Link key={brand.path} href={brand.path}>
                        <a className="block px-4 py-2 rounded-xl hover:bg-primary/10 transition">
                          {brand.name}
                        </a>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SUPPORT */}
            <div className="relative" ref={supportRef}>
              <button
                onClick={() => setIsSupportOpen(!isSupportOpen)}
                className="px-3 py-1 font-medium hover:text-primary transition"
              >
                Support
              </button>

              <AnimatePresence>
                {isSupportOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-14 left-1/2 -translate-x-1/2 w-60 bg-background border border-border rounded-2xl shadow-xl p-4"
                  >
                    {brands.map((brand) => (
                      <Link key={brand.support} href={brand.support}>
                        <a className="block px-4 py-2 rounded-xl hover:bg-primary/10 transition">
                          {brand.name}
                        </a>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CONTACT */}
            <Link href="/support">
              <a className="px-3 py-1 font-medium hover:text-primary transition">
                Contact Us
              </a>
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">

            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="w-5 h-5" />
            </Button>

            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "light"
                ? <Sun className="w-5 h-5" />
                : <Moon className="w-5 h-5" />}
            </Button>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileOpen(true)}>
                <Menu className="w-6 h-6" />
              </Button>
            </div>

          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>
    </div>
  );
}