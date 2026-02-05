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
            <div className="aspect-square bg-gray-50 border border-gray-100 p-12 flex items-center justify-center sticky top-24">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain max-h-[600px]"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex-1 max-w-xl">
            <div className="mb-2 text-primary font-bold text-sm tracking-wider uppercase">{product.category}</div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">{product.name}</h1>
            <p className="text-xl text-gray-500 mb-8 leading-relaxed">
              {product.shortDescription}
            </p>
            
            <div className="text-3xl font-medium mb-8">${product.price}</div>

            <div className="flex gap-4 mb-12">
              <Button size="lg" className="flex-1 rounded-none h-14 text-lg font-bold">
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="w-14 h-14 rounded-none p-0 flex items-center justify-center">
                <ShoppingCart className="w-5 h-5" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>In Stock, Ready to Ship</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>2 Year Warranty Included</span>
              </div>
            </div>

            <Tabs defaultValue="specs">
              <TabsList className="w-full justify-start rounded-none bg-transparent border-b h-auto p-0 mb-8">
                <TabsTrigger 
                  value="specs" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                >
                  Technical Specifications
                </TabsTrigger>
                <TabsTrigger 
                  value="faq" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                >
                  FAQ
                </TabsTrigger>
              </TabsList>
              <TabsContent value="specs" className="animate-in fade-in slide-in-from-bottom-2">
                <dl className="space-y-4">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                      <dt className="font-medium text-gray-900">{spec.label}</dt>
                      <dd className="text-gray-500 text-right">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </TabsContent>
              <TabsContent value="faq">
                <p className="text-gray-500">No questions yet for this product.</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
}