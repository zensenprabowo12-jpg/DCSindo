import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Zap, Shield, Cpu } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Inspired by thefuturestore.co */}
      <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white uppercase italic leading-none">
              DCS <span className="text-primary">ENTERPRISE</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-400 font-medium max-w-3xl mx-auto uppercase tracking-widest">
              The Next Generation of Networking Infrastructure
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-10">
              <Link href="/home-ubiquiti">
                <Button size="lg" className="bg-white text-black hover:bg-primary hover:text-white text-xl px-12 py-8 rounded-full font-black uppercase transition-all hover:scale-105 shadow-2xl shadow-white/10">
                  Enter Ecosystem
                </Button>
              </Link>
              <Link href="/collections/all">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-xl px-12 py-8 rounded-full font-black uppercase transition-all hover:scale-105">
                  Browse Catalog
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/60 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Brand Grid Section - Strategic Entry Points */}
      <section className="py-32 bg-background border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Ubiquiti", desc: "Leading the WiFi 7 Revolution", icon: <Zap />, path: "/home-ubiquiti", color: "from-blue-600/20" },
              { name: "MikroTik", desc: "Routing Excellence", icon: <Cpu />, path: "/coming-soon", color: "from-red-600/20" },
              { name: "ALGcom", desc: "High Performance Antennas", icon: <Globe />, path: "/coming-soon", color: "from-green-600/20" },
              { name: "V-SOL", desc: "Next-Gen FTTx Solutions", icon: <Shield />, path: "/coming-soon", color: "from-orange-600/20" }
            ].map((brand, i) => (
              <Link key={i} href={brand.path}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`group relative p-10 bg-card border border-white/5 rounded-3xl overflow-hidden cursor-pointer h-full` }
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500` } />
                  <div className="relative z-10 space-y-4">
                    <div className="w-12 h-12 text-primary group-hover:scale-110 transition-transform">
                      {brand.icon}
                    </div>
                    <h3 className="text-3xl font-black uppercase italic tracking-tighter">{brand.name}</h3>
                    <p className="text-muted-foreground">{brand.desc}</p>
                    <div className="pt-4 flex items-center text-sm font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      View Collection <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section - Dark Minimalist */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
                Performance <br /> Without <span className="text-primary">Limits</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-xl">
                We provide the building blocks for modern connectivity. From enterprise core switches to global wireless backhaul.
              </p>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <div className="text-4xl font-black text-white">99.9%</div>
                  <div className="text-sm text-gray-500 uppercase font-bold tracking-widest mt-2">Uptime Guaranteed</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white">24/7</div>
                  <div className="text-sm text-gray-500 uppercase font-bold tracking-widest mt-2">Expert Support</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop" 
                alt="Technology" 
                className="relative z-10 rounded-3xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
