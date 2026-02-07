import { Link, useLocation } from "wouter";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import SearchModal from "./search-modal";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Apply theme
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const isHome = location === "/";

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* Navbar - Fixed & Transparent-to-Solid transition */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          scrolled || !isHome
            ? "bg-background/95 backdrop-blur-md border-border py-3 shadow-sm"
            : "bg-transparent py-5 text-white",
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity flex items-center gap-2">
              <span
                className={cn(
                  "text-3xl font-black",
                  scrolled || !isHome ? "text-primary" : "text-white",
                )}
              >
                DCS
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/collections/all">
              <a
                className={cn(
                  "text-sm font-medium hover:opacity-70 transition-opacity",
                  scrolled || !isHome ? "text-foreground" : "text-white",
                )}
              >
                All Products
              </a>
            </Link>
            
            <div className="relative group py-2">
              <button
                className={cn(
                  "text-sm font-medium hover:opacity-70 transition-opacity flex items-center gap-1",
                  scrolled || !isHome ? "text-foreground" : "text-white",
                )}
              >
                Our Brands
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              {/* Mega Dropdown / Pop-up slide down */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-[60]">
                <div className="bg-background border border-border rounded-[var(--radius)] shadow-2xl min-w-[200px] overflow-hidden p-2">
                  <div className="flex flex-col">
                    {["Ubiquiti", "Mikrotik", "ALGcom", "V-SOL"].map((brand) => (
                      <Link key={brand} href={`/collections/${brand.toLowerCase()}`}>
                        <a className="px-6 py-3 text-sm font-bold text-foreground hover:bg-secondary/50 rounded-lg transition-colors text-center">
                          {brand}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/support">
              <a
                className={cn(
                  "text-sm font-medium hover:opacity-70 transition-opacity",
                  scrolled || !isHome ? "text-foreground" : "text-white",
                )}
              >
                Support
              </a>
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={cn(
                "hover:bg-white/10 rounded-full",
                scrolled || !isHome
                  ? "text-foreground hover:bg-black/5"
                  : "text-white",
              )}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className={cn(
                "hover:bg-white/10 rounded-full",
                scrolled || !isHome
                  ? "text-foreground hover:bg-black/5"
                  : "text-white",
              )}
            >
              <Search className="w-5 h-5" />
            </Button>
            <Link href="/cart">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "hover:bg-white/10 rounded-full",
                  scrolled || !isHome
                    ? "text-foreground hover:bg-black/5"
                    : "text-white",
                )}
              >
                <ShoppingCart className="w-5 h-5" />
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "md:hidden hover:bg-white/10",
                    scrolled || !isHome
                      ? "text-foreground hover:bg-black/5"
                      : "text-white",
                  )}
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/collections/all">
                    <a className="text-lg font-medium hover:text-primary">
                      All Products
                    </a>
                  </Link>
                  <div className="flex flex-col gap-2">
                    <span className="text-lg font-medium text-muted-foreground uppercase tracking-widest text-xs">Our Brands</span>
                    <div className="grid grid-cols-2 gap-2 pl-4">
                      {["Ubiquiti", "Mikrotik", "ALGcom", "V-SOL"].map((brand) => (
                        <Link key={brand} href={`/collections/${brand.toLowerCase()}`}>
                          <a className="text-base font-medium hover:text-primary">
                            {brand}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link href="/support">
                    <a className="text-lg font-medium hover:text-primary">
                      Support
                    </a>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#0f1115] text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">DCS</h3>
              <p className="text-gray-400 text-sm">
                Professional network solutions for enterprise and home.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/collections/cloud-gateways">
                    <a className="hover:text-white">Cloud Gateways</a>
                  </Link>
                </li>
                <li>
                  <Link href="/collections/switching">
                    <a className="hover:text-white">Switching</a>
                  </Link>
                </li>
                <li>
                  <Link href="/collections/wifi">
                    <a className="hover:text-white">WiFi</a>
                  </Link>
                </li>
                <li>
                  <Link href="/collections/camera-security">
                    <a className="hover:text-white">Camera Security</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/support">
                    <a className="hover:text-white">Help Center</a>
                  </Link>
                </li>
                <li>
                  <Link href="/support">
                    <a className="hover:text-white">Contact Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/support">
                    <a className="hover:text-white">Warranty</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to receive updates on new products.
              </p>
              <div className="flex gap-2 mb-6">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-white/10 border-none text-white placeholder:text-gray-500 rounded-sm px-3 py-2 text-sm w-full focus:ring-1 focus:ring-white"
                />
                <Button variant="secondary" size="sm" className="rounded-sm">
                  Subscribe
                </Button>
              </div>
              <div className="flex gap-4 items-center">
                <a 
                  href="https://wa.me/your-number" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors"
                  title="WhatsApp"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-5 h-5" alt="WhatsApp" />
                </a>
                <a 
                  href="mailto:support@dcs.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors"
                  title="Email"
                >
                  <img src="https://www.svgrepo.com/show/303161/gmail-icon-logo.svg" className="w-5 h-5" alt="Email" />
                </a>
                <a 
                  href="https://www.tokopedia.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors"
                  title="Tokopedia"
                >
                  <img src="https://images.tokopedia.net/img/ak_logo.png" className="w-5 h-5 object-contain" alt="Tokopedia" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2024 DCS. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}