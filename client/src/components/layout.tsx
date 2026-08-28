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
  ChevronLeft,
  ChevronUp,
} from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SearchModal from "./search-modal";
import { motion, AnimatePresence } from "framer-motion";
import { V_SOL_BRAND } from "@/brands/v-sol";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { buildWhatsAppUrl } from "@/lib/contact";

const WA_DEFAULT_MESSAGE = "Halo DCS, saya ingin bertanya tentang produk.";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const showGlobalBackNav = location !== "/";
  const [scrolled, setScrolled] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const brandRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);

  // href dasar dipilih sekali saat mount. Wajib di-memo: showBackTop/scrolled
  // berubah tiap scroll, jadi tanpa ini nomornya ikut berganti sepanjang scroll.
  const whatsappHref = useMemo(() => buildWhatsAppUrl(WA_DEFAULT_MESSAGE), []);

  // Random murni tiap klik: nomor dipilih ulang tepat sebelum navigasi default
  // berjalan, jadi href statis di atas hanya berlaku sebagai fallback (crawler,
  // klik tengah, "salin alamat tautan").
  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.href = buildWhatsAppUrl(WA_DEFAULT_MESSAGE);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowBackTop(window.scrollY > 400);
    };
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

  type BrandNavItem = {
    name: string;
    path: string;
    /** Belum semua brand punya halaman support — kalau kosong, tidak muncul di menu Support. */
    support?: string;
    external?: boolean;
  };

  const brands: BrandNavItem[] = [
      { name: "Ubiquiti", path: "/ubiquiti", support: "/support/ubiquiti" },
      { name: "Mikrotik", path: "/mikrotik", support: "/support/mikrotik" },
      { name: V_SOL_BRAND.name, path: V_SOL_BRAND.websiteUrl, support: "/support/vsol" },
      { name: "FiberHome", path: "/fiberhome" },
    ];

  const supportBrands = brands.filter(
    (b): b is BrandNavItem & { support: string } => Boolean(b.support),
  );

  function isBrandPathActive(path: string, loc: string): boolean {
    if (loc === path) return true;
    if (path === "/mikrotik" && loc.startsWith("/mikrotik/")) return true;
    if (path === "/vsol" && loc.startsWith("/vsol/")) return true;
    if (path === "/fiberhome" && loc.startsWith("/fiberhome/")) return true;
    return false;
  }

  const activeBrand =
    brands.find((b) => isBrandPathActive(b.path, location))?.name || "Our Brands";

  const isHomeActive = location === "/";
  const isBrandNavActive = brands.some((b) => isBrandPathActive(b.path, location));

  const supportRouteMatch = supportBrands.find((b) => location === b.support);
  const isSupportSubActive = !!supportRouteMatch;
  const supportNavLabel = supportRouteMatch
    ? `Support ${supportRouteMatch.name}`
    : "Support";

  const isTrainingActive = location === "/training" || location.startsWith("/training/");

  const isFirmwareActive =
    location === "/firmware" || location.startsWith("/firmware/");

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

            {/* FIRMWARE */}
            <Link href="/firmware">
              <a className="relative inline-flex items-center rounded-md px-3 py-1.5 transition-colors hover:bg-primary/10 hover:text-primary">
                Firmware
                {isFirmwareActive && (
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
                    {supportBrands.map((brand) => (
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
            {/* Search + theme — desktop only */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:inline-flex text-muted-foreground hover:bg-primary/10 hover:text-foreground"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="hidden md:inline-flex text-muted-foreground hover:bg-primary/10 hover:text-foreground"
              onClick={toggleTheme}
            >
              {theme === "light"
                ? <Sun className="w-5 h-5" />
                : <Moon className="w-5 h-5" />}
            </Button>

            {/* Hamburger — mobile only */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                onClick={() => setIsMobileOpen(true)}
                aria-label="Buka menu"
                aria-expanded={isMobileOpen}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </div>

          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isMobileOpen && (
          <div className="fixed inset-0 z-[60] md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="absolute top-0 right-0 h-full w-[82%] max-w-xs bg-background shadow-2xl flex flex-col"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-border">
                <img
                  src={
                    theme === "dark"
                      ? "/images/1.logo/logodcsputih.png"
                      : "/images/1.logo/logodcshitam.png"
                  }
                  className="h-6 w-auto"
                  alt="Logo DCS"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                  onClick={() => setIsMobileOpen(false)}
                  aria-label="Tutup menu"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Utility row: search + theme toggle */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-border">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="flex flex-1 items-center gap-3 rounded-xl border border-border px-4 py-2.5 text-sm text-muted-foreground hover:bg-primary/10 hover:text-foreground transition-colors"
                >
                  <Search className="w-5 h-5" />
                  Cari produk
                </button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-xl border border-border text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                  onClick={toggleTheme}
                  aria-label="Ganti tema"
                >
                  {theme === "light"
                    ? <Sun className="w-5 h-5" />
                    : <Moon className="w-5 h-5" />}
                </Button>
              </div>

              {/* Navigation links */}
              <nav className="flex-1 overflow-y-auto px-3 py-4 font-manrope font-bold">
                <Link href="/">
                  <a
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 transition-colors hover:bg-primary/10 hover:text-primary",
                      isHomeActive && "bg-primary/10 text-primary"
                    )}
                  >
                    Home
                  </a>
                </Link>

                {/* Brands group */}
                <div className="mt-3 px-4 pb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground/70">
                  Our Brands
                </div>
                {brands.map((brand) =>
                  brand.external ? (
                    <a
                      key={brand.path}
                      href={brand.path}
                      onClick={() => setIsMobileOpen(false)}
                      className="block rounded-xl px-4 py-3 transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {brand.name}
                    </a>
                  ) : (
                    <Link key={brand.path} href={brand.path}>
                      <a
                        onClick={() => setIsMobileOpen(false)}
                        className={cn(
                          "block rounded-xl px-4 py-3 transition-colors hover:bg-primary/10 hover:text-primary",
                          isBrandPathActive(brand.path, location) && "bg-primary/10 text-primary"
                        )}
                      >
                        {brand.name}
                      </a>
                    </Link>
                  ),
                )}

                <Link href="/training">
                  <a
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "mt-3 block rounded-xl px-4 py-3 transition-colors hover:bg-primary/10 hover:text-primary",
                      isTrainingActive && "bg-primary/10 text-primary"
                    )}
                  >
                    Training
                  </a>
                </Link>

                <Link href="/firmware">
                  <a
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "mt-3 block rounded-xl px-4 py-3 transition-colors hover:bg-primary/10 hover:text-primary",
                      isFirmwareActive && "bg-primary/10 text-primary"
                    )}
                  >
                    Firmware
                  </a>
                </Link>

                {/* Support group */}
                <div className="mt-3 px-4 pb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground/70">
                  Support
                </div>
                {supportBrands.map((brand) => (
                  <Link key={brand.support} href={brand.support}>
                    <a
                      onClick={() => setIsMobileOpen(false)}
                      className={cn(
                        "block rounded-xl px-4 py-3 transition-colors hover:bg-primary/10 hover:text-primary",
                        location === brand.support && "bg-primary/10 text-primary"
                      )}
                    >
                      {brand.name}
                    </a>
                  </Link>
                ))}

                <Link href="/support">
                  <a
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "mt-3 block rounded-xl px-4 py-3 transition-colors hover:bg-primary/10 hover:text-primary",
                      isContactActive && "bg-primary/10 text-primary"
                    )}
                  >
                    Contact Us
                  </a>
                </Link>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main className="flex-1">{children}</main>

      {/* ================= FLOATING BUTTONS ================= */}
      {/* Back to Top */}
      <AnimatePresence>
        {showBackTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-24 right-7 z-50 w-10 h-10 rounded-full bg-foreground/80 hover:bg-foreground text-background flex items-center justify-center shadow-md transition-colors"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappHref}
        onClick={handleWhatsAppClick}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] flex items-center justify-center shadow-lg shadow-green-500/30 transition-colors"
        aria-label="Chat via WhatsApp"
        title="Chat with us on WhatsApp"
      >
        {/* Pulse ring. inset-2 mengecilkan basisnya jadi 40px, sehingga pada
            animate-ping (scale 2) puncaknya berhenti di ~88px dari bawah — tetap
            di bawah tombol Back to Top yang mulai di 96px (bottom-24). Ditaruh
            sebelum ikon supaya tidak menimpa glyph putihnya. */}
        <span className="absolute inset-2 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
        {/* 32px di lingkaran 56px = 57% diameter. Bbox glyph simetris, jadi
            items-center/justify-center sudah center tepat. */}
        <WhatsAppIcon className="relative w-8 h-8 text-white" />
      </motion.a>

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

            {/* space-y-6: blok WA kini 1 baris (28px), bukan 60px, jadi jarak
                32px terasa renggang dan memutus ketiga baris kontak. */}
            <div className="space-y-6">
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
                {/* Slot 24px menyamakan gutter dengan MapPin/Mail. Glyph WA
                    mengisi penuh kanvas 24-nya, sedangkan lucide (stroke 2)
                    hanya membentang ~18-22 dari 24 — jadi kotak 20px membuat
                    ketiga ikon terbaca sama besar. */}
                <span className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon className="w-5 h-5" />
                </span>
                <a
                  href={whatsappHref}
                  onClick={handleWhatsAppClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary/80 transition-colors text-lg"
                >
                  Chat on WhatsApp
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