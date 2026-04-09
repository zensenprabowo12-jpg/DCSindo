import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HomeUtama() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-white dark:bg-black transition-colors duration-500">
        
        {/* VIDEO */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-white/30 dark:bg-black/60 z-10 transition-colors duration-500" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] min-w-[177.77vh] min-h-[56.25vw]">
            <iframe
              src="https://www.youtube.com/embed/9HaU8NjH7bI?autoplay=1&mute=1&rel=0&playsinline=1"
              className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-90 dark:opacity-70 transition-opacity duration-500"
              allow="autoplay; encrypted-media"
              title="DCS Master Hero Video"
            />
          </div>
        </div>
        

        {/* CONTENT */}
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* TITLE */}
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-black dark:text-white uppercase leading-none transition-colors duration-500">
              DCS
            </h1>

            {/* SUBTITLE */}
            <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 font-medium max-w-3xl mx-auto uppercase tracking-widest transition-colors duration-500">
              The Next Generation of Networking Infrastructure
            </p>

            {/* BUTTON */}
            <div className="flex flex-wrap justify-center gap-6 pt-10">
              <Link href="/home-ubiquiti">
                <Button
                  size="lg"
                  className="bg-black text-white dark:bg-white dark:text-black hover:bg-primary hover:text-white text-lg px-10 py-6 rounded-full font-semibold uppercase transition-all hover:scale-105 shadow-xl"
                >
                  Enter Ecosystem
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BRAND GRID */}
      <section className="py-24 bg-white dark:bg-black transition-colors duration-500">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white transition-colors duration-500">
              Get Started Here
            </h2>
            <p className="text-primary font-semibold uppercase tracking-widest mt-2">
              Shop the DCS Store
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: "Ubiquiti", 
                image: "/images/1.logo/Ubiquitichatgpt.png", 
                path: "/home-ubiquiti",
                bg: "bg-blue-50/50 dark:bg-blue-900/10"
              },
              { 
                name: "MikroTik", 
                image: "/images/1.logo/mikrotikchatgpt.png", 
                path: "/coming-soon",
                bg: "bg-slate-50/50 dark:bg-slate-900/10"
              },
              { 
                name: "ALGcom", 
                image: "/images/1.logo/algcomchatgpt.png", 
                path: "/coming-soon",
                bg: "bg-gray-50/50 dark:bg-gray-900/10"
              },
              { 
                name: "V-SOL", 
                image: "/images/1.logo/vsolchatgpt.png", 
                path: "/coming-soon",
                bg: "bg-zinc-50/50 dark:bg-zinc-900/10"
              }
            ].map((brand, i) => (
              <Link key={i} href={brand.path}>
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className={cn(
                    "relative aspect-[4/5] border border-gray-100 dark:border-white/5 overflow-hidden group cursor-pointer transition-all duration-500 shadow-sm hover:shadow-2xl rounded-3xl",
                    brand.bg
                  )}
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                    <img src={brand.image} alt={brand.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="absolute bottom-10 left-0 right-0 text-center z-20 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-white font-bold tracking-tight text-xl drop-shadow-lg">
                      {brand.name}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="py-32 bg-gray-50 dark:bg-[#080808] relative overflow-hidden transition-colors duration-500">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-black dark:text-white transition-colors duration-500">
                Performance <br />
                Without <span className="text-primary">Limits</span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed font-medium transition-colors duration-500">
                We provide the building blocks for modern connectivity.
                From enterprise core switches to global wireless backhaul.
              </p>

              <div className="grid grid-cols-2 gap-8 border-l-4 border-primary pl-6">
                <div>
                  <div className="text-3xl font-bold text-black dark:text-white">
                    99.9%
                  </div>
                  <div className="text-xs text-gray-400 uppercase font-semibold tracking-widest mt-1">
                    Uptime Guaranteed
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-black dark:text-white">
                    24/7
                  </div>
                  <div className="text-xs text-gray-400 uppercase font-semibold tracking-widest mt-1">
                    Expert Support
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative group px-4">
              <div className="absolute -inset-2 bg-primary/10 blur-[60px] rounded-full group-hover:bg-primary/20 transition-all duration-700" />
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" 
                alt="Infrastructure" 
                className="relative z-10 rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl transition-all duration-700 group-hover:scale-[1.01]"
              />
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}