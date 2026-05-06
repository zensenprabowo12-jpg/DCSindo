import { Link, useLocation } from "wouter";
import {
  Search,
  Menu,
  Sun,
  Moon,
  X,
  MapPin,
  Mail,
  Instagram,
  Facebook,
  Shield,
  ChevronLeft,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SearchModal from "./search-modal";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const showGlobalBackNav = location !== "/";
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

  const brands: {
    name: string;
    path: string;
    support: string;
    external?: boolean;
  }[] = [
      { name: "Ubiquiti", path: "/home-ubiquiti", support: "/support/ubiquiti" },
      { name: "Mikrotik", path: "/mikrotik", support: "/support/mikrotik" },
      { name: "V-SOL", path: "/home-vsol", support: "/support/vsol" },
    ];

  function isBrandPathActive(path: string, loc: string): boolean {
    if (loc === path) return true;
    if (path === "/mikrotik" && loc.startsWith("/mikrotik/")) return true;
    return false;
  }

  const activeBrand =
    brands.find((b) => isBrandPathActive(b.path, location))?.name || "Our Brands";

  const isHomeActive = location === "/";
  const isBrandNavActive = brands.some((b) => isBrandPathActive(b.path, location));

  const supportRouteMatch = brands.find((b) => location === b.support);
  const isSupportSubActive = !!supportRouteMatch;
  const supportNavLabel = supportRouteMatch
    ? `Support ${supportRouteMatch.name}`
    : "Support";

  /* Hub kontak utama — sama dengan route `/support` */
  const isContactActive = location === "/support";

  // Back button positioning (edit these to fine-tune)
  const BACK_BUTTON_WRAPPER_CLASS =
    "mr-2 -ml-1"; // geser horizontal relatif ke menu (desktop)
  const BACK_BUTTON_BUTTON_CLASS =
    "h-9 w-9 rounded-full bg-white/10 text-foreground shadow-sm shadow-black/10 backdrop-blur-xl hover:bg-white/15 border border-white/15";

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
          <div className="flex items-center gap-2">
            {/* Mobile back button (icon only) */}
            {showGlobalBackNav && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => window.history.back()}
                className={cn("md:hidden", BACK_BUTTON_BUTTON_CLASS)}
                aria-label="Kembali ke halaman sebelumnya"
                title="Kembali"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </Button>
            )}

            <Link href="/">
              <a className="inline-flex rounded-md p-1 transition-colors hover:bg-primary/10">
                <img
                  src={
                    theme === "dark"
                      ? "/images/1.logo/logodcsputih.png"
                      : "/images/1.logo/logodcshitam.png"
                  }
                  className="h-5 md:h-8 w-auto transition-all"
                  alt="Logo DCS"
                />
              </a>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 relative font-manrope font-bold">

            {/* Back button (icon only) — placed left of Home */}
            {showGlobalBackNav && (
              <div className={cn("flex items-center", BACK_BUTTON_WRAPPER_CLASS)}>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => window.history.back()}
                  className={cn(BACK_BUTTON_BUTTON_CLASS)}
                  aria-label="Kembali ke halaman sebelumnya"
                  title="Kembali"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden />
                </Button>
              </div>
            )}

            {/* HOME */}
            <Link href="/">
              <a className="relative inline-flex items-center rounded-md px-3 py-1.5 transition-colors hover:bg-primary/10 hover:text-primary">
                Home
                {isHomeActive && (
                  <motion.div
                    layoutId="navActivePill"
                    className="absolute inset-0 -z-10 rounded-lg bg-primary/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </Link>

            {/* OUR BRANDS */}
            <div className="relative" ref={brandRef}>
              <button
                type="button"
                onClick={() => setIsBrandOpen(!isBrandOpen)}
                className="relative flex items-center gap-2 rounded-md px-3 py-1.5 transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {activeBrand}
                {isBrandNavActive && (
                  <motion.div
                    layoutId="navActivePill"
                    className="absolute inset-0 -z-10 rounded-lg bg-primary/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {isBrandOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-14 left-1/2 w-60 -translate-x-1/2 rounded-2xl border border-border bg-background p-4 shadow-xl"
                  >
                    {brands.map((brand) =>
                      brand.external ? (
                        <a
                          key={brand.path}
                          href={brand.path}
                          className="block px-4 py-2 rounded-xl hover:bg-primary/10 transition"
                        >
                          {brand.name}
                        </a>
                      ) : (
                        <Link key={brand.path} href={brand.path}>
                          <a className="block px-4 py-2 rounded-xl hover:bg-primary/10 transition">
                            {brand.name}
                          </a>
                        </Link>
                      ),
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SUPPORT */}
            <div className="relative" ref={supportRef}>
              <button
                type="button"
                onClick={() => setIsSupportOpen(!isSupportOpen)}
                className="relative flex max-w-[11rem] items-center justify-center truncate rounded-md px-3 py-1.5 transition-colors hover:bg-primary/10 hover:text-primary sm:max-w-none"
                title={supportNavLabel}
              >
                <span className="whitespace-nowrap">{supportNavLabel}</span>
                {isSupportSubActive && (
                  <motion.div
                    layoutId="navActivePill"
                    className="absolute inset-0 -z-10 rounded-lg bg-primary/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {isSupportOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-14 left-1/2 w-60 -translate-x-1/2 rounded-2xl border border-border bg-background p-4 shadow-xl"
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
              <a className="relative inline-flex items-center rounded-md px-3 py-1.5 transition-colors hover:bg-primary/10 hover:text-primary">
                Contact Us
                {isContactActive && (
                  <motion.div
                    layoutId="navActivePill"
                    className="absolute inset-0 -z-10 rounded-lg bg-primary/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">
            <Link href="/mikrotik-dcs/admin/login" title="Admin katalog">
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                aria-label="Admin katalog"
              >
                <Shield className="w-5 h-5" />
              </a>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:bg-primary/10 hover:text-foreground"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:bg-primary/10 hover:text-foreground"
              onClick={toggleTheme}
            >
              {theme === "light"
                ? <Sun className="w-5 h-5" />
                : <Moon className="w-5 h-5" />}
            </Button>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                onClick={() => setIsMobileOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </div>

          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-md">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-6">
                Building the Future of Connectivity.
              </h2>
              <p className="text-muted-foreground/80 text-lg">
                Your trusted partner for enterprise networking solutions and infrastructure.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/vGyYVsLHyPvKSqqz6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary/80 transition-colors text-lg"
                >
                  Jl. Gunung Sahari Raya No.34,<br />
                  Kota Jakarta Pusat 10720, INDONESIA
                </a>
              </div>

              <div className="flex gap-4 items-center">
                <Mail className="w-6 h-6 flex-shrink-0" />
                <a
                  href="mailto:info@dcsindo.com"
                  className="hover:text-primary/80 transition-colors text-lg"
                >
                  info@dcsindo.com
                </a>
              </div>

              <div className="flex gap-6 pt-2">
                <a href="https://www.instagram.com/dcsindo/" className="hover:text-primary/80 transition-colors"><Instagram className="w-6 h-6" /></a>
                <a href="https://www.facebook.com/dinamikaciptasolusi/" className="hover:text-primary/80 transition-colors"><Facebook className="w-6 h-6" /></a>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/10 w-full mb-12" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-8">
              {brands.map((brand) =>
                brand.external ? (
                  <a
                    key={brand.path}
                    href={brand.path}
                    className="text-sm font-black uppercase tracking-widest hover:text-primary transition-colors"
                  >
                    {brand.name}
                  </a>
                ) : (
                  <Link key={brand.path} href={brand.path}>
                    <a className="text-sm font-black uppercase tracking-widest hover:text-primary transition-colors">
                      {brand.name}
                    </a>
                  </Link>
                ),
              )}
            </div>

            <div className="text-sm text-muted-foreground/60">
              &copy; {new Date().getFullYear()} Dinamika Cipta Solusi. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}