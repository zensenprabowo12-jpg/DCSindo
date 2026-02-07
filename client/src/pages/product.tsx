import Layout from "@/components/layout";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useRoute } from "wouter";
import { ShoppingCart, Check, Shield } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProductDetail() {
  const [match, params] = useRoute("/products/:id");
  const product = products.find(p => p.id === params?.id);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Images */}
          <div className="flex-1">
            <div className="aspect-square bg-gray-50 dark:bg-card border border-border p-12 flex items-center justify-center sticky top-24 rounded-[var(--radius)]">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain max-h-[600px] hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex-1 max-w-xl">
            <div className="mb-2 text-primary font-black text-xs tracking-[0.2em] uppercase">{product.category}</div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 italic uppercase leading-tight">{product.name}</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-medium">
              {product.shortDescription}
            </p>
            
            <div className="text-4xl font-black mb-10 text-primary">${product.price}</div>

            <div className="flex gap-4 mb-12">
              <Button size="lg" className="flex-1 rounded-full h-16 text-lg font-black uppercase tracking-widest shadow-xl shadow-primary/20">
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="w-16 h-16 rounded-full p-0 flex items-center justify-center border-2 hover:bg-primary/5">
                <ShoppingCart className="w-6 h-6" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-sm text-muted-foreground font-bold">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>In Stock, Ready to Ship</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                <span>2 Year Warranty Included</span>
              </div>
            </div>

            <Tabs defaultValue="specs">
              <TabsList className="w-full justify-start rounded-none bg-transparent border-b border-border h-auto p-0 mb-8">
                <TabsTrigger 
                  value="specs" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-8 py-4 text-sm font-black uppercase tracking-widest"
                >
                  Technical Specifications
                </TabsTrigger>
                <TabsTrigger 
                  value="faq" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-8 py-4 text-sm font-black uppercase tracking-widest"
                >
                  FAQ
                </TabsTrigger>
              </TabsList>
              <TabsContent value="specs" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <dl className="space-y-4">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between py-4 border-b border-border last:border-0 group">
                      <dt className="font-black text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">{spec.label}</dt>
                      <dd className="text-foreground font-bold">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </TabsContent>
              <TabsContent value="faq" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="text-muted-foreground font-medium">No questions yet for this product.</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
}