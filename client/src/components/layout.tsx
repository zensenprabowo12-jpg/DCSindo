import { Link, useLocation } from "wouter";
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      {/* Navbar - Fixed & Transparent-to-Solid transition */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          (scrolled || !isHome) ? "bg-background/95 backdrop-blur-md border-border py-3 shadow-sm" : "bg-transparent py-5 text-white"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity flex items-center gap-2">
              <span className={cn("text-3xl font-black", (scrolled || !isHome) ? "text-primary" : "text-white")}>DCS</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/collections/all">
              <a className={cn("text-sm font-medium hover:opacity-70 transition-opacity", (scrolled || !isHome) ? "text-foreground" : "text-white")}>
                Store
              </a>
            </Link>
            <Link href="/collections/cloud-gateways">
              <a className={cn("text-sm font-medium hover:opacity-70 transition-opacity", (scrolled || !isHome) ? "text-foreground" : "text-white")}>
                Cloud Gateways
              </a>
            </Link>
            <Link href="/collections/wifi">
              <a className={cn("text-sm font-medium hover:opacity-70 transition-opacity", (scrolled || !isHome) ? "text-foreground" : "text-white")}>
                WiFi
              </a>
            </Link>
            <Link href="/support">
              <a className={cn("text-sm font-medium hover:opacity-70 transition-opacity", (scrolled || !isHome) ? "text-foreground" : "text-white")}>
                Support
              </a>
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className={cn("hover:bg-white/10", (scrolled || !isHome) ? "text-foreground hover:bg-black/5" : "text-white")}>
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className={cn("hover:bg-white/10", (scrolled || !isHome) ? "text-foreground hover:bg-black/5" : "text-white")}>
              <ShoppingCart className="w-5 h-5" />
            </Button>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn("md:hidden hover:bg-white/10", (scrolled || !isHome) ? "text-foreground hover:bg-black/5" : "text-white")}>
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/collections/all">
                    <a className="text-lg font-medium hover:text-primary">All Products</a>
                  </Link>
                  <Link href="/collections/cloud-gateways">
                    <a className="text-lg font-medium hover:text-primary">Cloud Gateways</a>
                  </Link>
                  <Link href="/collections/wifi">
                    <a className="text-lg font-medium hover:text-primary">WiFi</a>
                  </Link>
                   <Link href="/collections/camera-security">
                    <a className="text-lg font-medium hover:text-primary">Cameras</a>
                  </Link>
                  <Link href="/support">
                    <a className="text-lg font-medium hover:text-primary">Support</a>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0f1115] text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">DCS</h3>
              <p className="text-gray-400 text-sm">Professional network solutions for enterprise and home.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/collections/cloud-gateways"><a className="hover:text-white">Cloud Gateways</a></Link></li>
                <li><Link href="/collections/switching"><a className="hover:text-white">Switching</a></Link></li>
                <li><Link href="/collections/wifi"><a className="hover:text-white">WiFi</a></Link></li>
                <li><Link href="/collections/camera-security"><a className="hover:text-white">Camera Security</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/support"><a className="hover:text-white">Help Center</a></Link></li>
                <li><Link href="/support"><a className="hover:text-white">Contact Us</a></Link></li>
                <li><Link href="/support"><a className="hover:text-white">Warranty</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates on new products.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-white/10 border-none text-white placeholder:text-gray-500 rounded-sm px-3 py-2 text-sm w-full focus:ring-1 focus:ring-white"
                />
                <Button variant="secondary" size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2024 DCS. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}