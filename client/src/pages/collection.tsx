import Layout from "@/components/layout";
import { products, CATEGORIES } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Link, useRoute } from "wouter";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { ArrowRight } from "lucide-react";

export default function Collection() {
  const [match, params] = useRoute("/collections/:category");
  const categoryParam = params?.category || "all";
  
  // Helper to format category name from URL
  const formatCategory = (slug: string) => {
    if (slug === "all") return "All Products";
    return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };

  const pageTitle = formatCategory(categoryParam);

  // Filter Logic
  const filteredProducts = products.filter(product => {
    if (categoryParam === "all") return true;
    return product.category.toLowerCase().replace(/ /g, '-') === categoryParam;
  });

  return (
    <Layout>
      <div className="bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">{pageTitle}</h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Professional grade networking equipment for the modern enterprise.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 shrink-0 space-y-8">
          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <div className="space-y-2">
              <Link href="/collections/all">
                <a className={cn("block text-sm py-1 hover:text-primary transition-colors", categoryParam === "all" ? "text-primary font-bold" : "text-gray-500")}>
                  All Products
                </a>
              </Link>
              {CATEGORIES.map(cat => (
                <Link key={cat} href={`/collections/${cat.toLowerCase().replace(/ /g, '-')}`}>
                  <a className={cn("block text-sm py-1 hover:text-primary transition-colors", categoryParam === cat.toLowerCase().replace(/ /g, '-') ? "text-primary font-bold" : "text-gray-500")}>
                    {cat}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-bold mb-4">Availability</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="instock" />
                <label htmlFor="instock" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  In Stock
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="preorder" />
                <label htmlFor="preorder" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Pre-order
                </label>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-bold mb-4">Price Range</h3>
            <Slider defaultValue={[0, 1000]} max={2000} step={10} className="mb-4" />
            <div className="flex justify-between text-xs text-gray-500">
              <span>$0</span>
              <span>$2000+</span>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <a className="group block bg-white dark:bg-card border border-border transition-all duration-300 hover:shadow-2xl rounded-[var(--radius)] overflow-hidden">
                  {/* Image Container */}
                  <div className="aspect-square relative p-8 bg-gray-50/50 dark:bg-gray-900/50 flex items-center justify-center overflow-hidden">
                    {product.isNew && (
                      <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-full z-20">
                        New
                      </span>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm font-medium">${product.price}</span>
                      <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-all rounded-full px-4">
                        View
                      </Button>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-24 text-gray-500">
              <p>No products found in this category.</p>
              <Button variant="link" onClick={() => window.location.href='/collections/all'}>View all products</Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}