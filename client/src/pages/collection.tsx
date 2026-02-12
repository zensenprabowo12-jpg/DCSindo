import Layout from "@/components/layout";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Link, useRoute } from "wouter";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Search } from "lucide-react";

export default function Collection() {
  const [match, params] = useRoute("/collections/:category");
  const categoryParam = params?.category || "all";
  
  const brands = ["Ubiquiti", "Mikrotik", "ALGcom", "V-SOL"];

  const filteredProducts = products.filter(product => {
    if (categoryParam === "all") return true;
    if (categoryParam === "ubiquiti") return true; // Ubiquiti shows all for now
    return false;
  });

  return (
    <Layout>
      <div className="bg-secondary/20 border-b border-border py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase mb-2">{categoryParam === 'all' ? 'All Products' : categoryParam}</h1>
          <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-widest italic">The Ecosystem of Power</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row gap-12 md:gap-20">
        <aside className="w-full md:w-72 shrink-0 space-y-12">
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-primary">Our Brands</h3>
            <div className="space-y-4">
              <Link href="/collections/all">
                <a className={cn("block text-sm font-black uppercase tracking-widest transition-all", categoryParam === "all" ? "text-primary pl-4 border-l-4 border-primary" : "text-muted-foreground hover:text-foreground hover:pl-2")}>
                  All Hardware
                </a>
              </Link>
              {brands.map(brand => (
                <Link key={brand} href={brand === "Ubiquiti" ? "/collections/ubiquiti" : "/coming-soon"}>
                  <a className={cn("block text-sm font-black uppercase tracking-widest transition-all", categoryParam === brand.toLowerCase() ? "text-primary pl-4 border-l-4 border-primary" : "text-muted-foreground hover:text-foreground hover:pl-2")}>
                    {brand}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <Separator className="opacity-50" />
        </aside>

        <div className="flex-1">
          {categoryParam === "all" || categoryParam === "ubiquiti" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProducts.map(product => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <a className="group block bg-card border border-border transition-all duration-500 hover:shadow-2xl rounded-[var(--radius)] overflow-hidden">
                    <div className="aspect-square relative p-10 bg-secondary/10 flex items-center justify-center overflow-hidden">
                      <img src={product.image} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="p-8">
                      <h3 className="font-black text-xl uppercase italic group-hover:text-primary transition-colors">{product.name}</h3>
                      <p className="text-muted-foreground text-sm font-bold mt-2 tracking-widest uppercase">${product.price}</p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          ) : (
             <div className="min-h-[40vh] flex flex-col items-center justify-center text-center p-12 bg-secondary/10 rounded-[4rem] border-4 border-dashed border-border">
                <Search className="w-20 h-20 text-muted-foreground/30 mb-8" />
                <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-4">Coming Soon</h2>
                <p className="text-muted-foreground font-medium uppercase tracking-widest text-sm">We are expanding our ecosystem with {categoryParam} solutions.</p>
             </div>
          )}
        </div>
      </div>
    </Layout>
  );
}