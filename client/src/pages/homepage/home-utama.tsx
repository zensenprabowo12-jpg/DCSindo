import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HomeUtama() {

  // ✅ Popup selalu muncul tiap buka halaman
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <Layout>

      {/* ================= POPUP ================= */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl max-w-md w-full p-6 text-center relative"
            >
              {/* ❌ CLOSE BUTTON */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-black dark:hover:text-white"
              >
                <X size={20} />
              </button>

              {/* TITLE */}
              <h2 className="text-xl font-bold text-black dark:text-white mb-4">
                ⚠️ Peringatan
              </h2>

              {/* TEXT (EDIT BEBAS) */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                Website ini berisi produk dan solusi networking profesional.
                Pastikan Anda memahami penggunaan produk sebelum membeli. 
                Dengan melanjutkan, Anda menyetujui ketentuan yang berlaku.
                Silahkan ke halaman support kami sesuai brand yang digunakan. 
                <p>Terima kasih.</p>
                <Link href="/support/ubiquiti" className="text-blue-600 hover:underline">Support Ubiquiti | </Link> 
                <Link href="/support/mikrotik" className="text-blue-600 hover:underline">Support Mikrotik | </Link>
                <Link href="/support/Vsol" className="text-blue-600 hover:underline">Support Vsol</Link>
              </p>

              {/* BUTTON */}
              <Button
                onClick={handleClose}
                className="w-full bg-black text-white dark:bg-white dark:text-black hover:opacity-90 rounded-full"
              >
                OK, Saya Mengerti
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= HERO ================= */}
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
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-black dark:text-white uppercase leading-none">
              DCS
            </h1>

            <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 font-medium max-w-3xl mx-auto uppercase tracking-widest">
              The Next Generation of Networking Infrastructure
            </p>

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

      {/* ================= BRAND GRID ================= */}
      <section className="py-24 bg-white dark:bg-black transition-colors duration-500">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
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
                bg: "bg-blue-50/50 dark:bg-blue-900/10",
              },
              {
                name: "MikroTik",
                image: "/images/1.logo/mikrotikchatgpt.png",
                path: "/brand/mikrotik",
                bg: "bg-slate-50/50 dark:bg-slate-900/10",
                external: true,
              },
              {
                name: "V-SOL",
                image: "/images/1.logo/vsolchatgpt.png",
                path: "/coming-soon",
                bg: "bg-zinc-50/50 dark:bg-zinc-900/10",
              },
            ].map((brand, i) => {
              const card = (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={cn(
                    "relative aspect-[4/5] border border-gray-100 dark:border-white/5 overflow-hidden group cursor-pointer transition-all duration-500 shadow-sm hover:shadow-2xl rounded-3xl",
                    brand.bg,
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
              );

              if ("external" in brand && brand.external) {
                return (
                  <a key={i} href={brand.path} className="block">
                    {card}
                  </a>
                );
              }

              return (
                <Link key={i} href={brand.path}>
                  {card}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    </Layout>
  );
}