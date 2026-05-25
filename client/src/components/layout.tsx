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
import { V_SOL_BRAND } from "@/brands/v-sol";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M19.11 17.27c-.28-.14-1.64-.8-1.9-.9s-.44-.14-.62.14-.72.9-.88 1.08-.32.21-.6.07a7.83 7.83 0 0 1-2.3-1.41 8.59 8.59 0 0 1-1.6-1.99c-.17-.28 0-.43.13-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46s.05-.35-.02-.5c-.07-.14-.62-1.5-.85-2.06-.22-.53-.44-.46-.62-.47h-.53c-.18 0-.46.07-.7.35s-.92.9-.92 2.19.95 2.54 1.08 2.72c.14.18 1.86 2.84 4.52 3.98.63.27 1.13.44 1.52.56.64.2 1.22.17 1.68.1.51-.08 1.64-.66 1.87-1.3.23-.64.23-1.18.16-1.3-.07-.12-.25-.2-.53-.35zM16.02 3C8.84 3 3 8.8 3 15.94c0 2.28.61 4.5 1.77 6.44L3 29l6.83-1.78a13.08 13.08 0 0 0 6.19 1.56C23.2 28.78 29 22.99 29 15.94 29 8.8 23.2 3 16.02 3zm0 23.52c-2.02 0-3.99-.55-5.7-1.6l-.4-.24-4.05 1.06 1.08-3.95-.26-.4a10.55 10.55 0 0 1-1.64-5.45c0-5.86 4.8-10.63 10.97-10.63 6.06 0 10.98 4.77 10.98 10.63 0 5.86-4.92 10.58-10.98 10.58z"
      />
    </svg>
  );
}

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
      { name: "Ubiquiti", path: "/ubiquiti", support: "/support/ubiquiti" },
      { name: "Mikrotik", path: "/mikrotik", support: "/support/mikrotik" },
      { name: V_SOL_BRAND.name, path: V_SOL_BRAND.websiteUrl, support: "/support/vsol" },
    ];

  function isBrandPathActive(path: string, loc: string): boolean {
    if (loc === path) return true;
    if (path === "/mikrotik" && loc.startsWith("/mikrotik/")) return true;
    if (path === "/vsol" && loc.startsWith("/vsol/")) return true;
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

  const isTrainingActive = location === "/training" || location.startsWith("/training/");

  /* Main contact hub — matches the `/support` route */
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
                  aria-label="Go back"
                  title="Go back"
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

            {/* TRAINING */}
            <Link href="/training">
              <a className="relative inline-flex items-center rounded-md px-3 py-1.5 transition-colors hover:bg-primary/10 hover:text-primary">
                Training
                {isTrainingActive && (
                  <motion.div
                    layoutId="navActivePill"
                    className="absolute inset-0 -z-10 rounded-lg bg-primary/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </Link>

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
            <Link href="/admin/login" title="Admin katalog">
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

              <div className="flex gap-4 items-start">
                <WhatsAppIcon className="w-6 h-6 mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="https://wa.me/6281530586666"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary/80 transition-colors text-lg"
                  >
                    +62 815-3058-666
                  </a>
                  <a
                    href="https://wa.me/6281287801925"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary/80 transition-colors text-lg"
                  >
                    +62 812-8780-1925
                  </a>
                </div>
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

            <div className="flex items-center gap-6">
              <Link href="/training">
                <a className="text-sm font-black uppercase tracking-widest hover:text-primary transition-colors">
                  Training
                </a>
              </Link>
              <Link href="/support">
                <a className="text-sm font-black uppercase tracking-widest hover:text-primary transition-colors">
                  Support
                </a>
              </Link>
              <Link href="/company-profile">
                <a className="text-sm font-black uppercase tracking-widest hover:text-primary transition-colors">
                  Company Profile
                </a>
              </Link>
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