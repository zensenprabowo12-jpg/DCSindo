import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { ArrowRight, X, ShieldCheck, Zap, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HomeUtama() {

  // ✅ Popup selalu muncul tiap buka halaman
  const [showPopup, setShowPopup] = useState(true);
  const brandSectionRef = useRef<HTMLDivElement | null>(null);
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);

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
              className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl max-w-md w-full p-6 text-left relative border border-border"
            >
              {/* ❌ CLOSE BUTTON */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>

              {/* TITLE */}
              <h2 className="text-xl font-black tracking-tight mb-1">Informasi</h2>
              <p className="text-xs text-muted-foreground mb-4">
                Mohon baca sebelum melanjutkan
              </p>

              {/* TEXT (EDIT BEBAS) */}
              <div className="text-muted-foreground text-sm leading-relaxed mb-6 space-y-3">
                <p>
                  Website ini berisi produk dan solusi networking profesional. Pastikan Anda
                  memahami kebutuhan implementasi sebelum memilih produk.
                </p>
                <p>
                  Dengan melanjutkan, Anda menyetujui ketentuan yang berlaku. Untuk bantuan,
                  gunakan halaman support sesuai brand.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Button variant="secondary" size="sm" asChild className="rounded-full">
                    <Link href="/support/ubiquiti">Support Ubiquiti</Link>
                  </Button>
                  <Button variant="secondary" size="sm" asChild className="rounded-full">
                    <Link href="/support/mikrotik">Support MikroTik</Link>
                  </Button>
                  <Button variant="secondary" size="sm" asChild className="rounded-full">
                    <Link href="/support/vsol">Support V-SOL</Link>
                  </Button>
                </div>
              </div>

              {/* BUTTON */}
              <Button
                onClick={handleClose}
                className="w-full rounded-full font-semibold"
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
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/70 dark:from-black/60 dark:via-black/40 dark:to-black/80 z-10 transition-colors duration-500" />
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
            className="space-y-7"
          >

            {/* text-muted-foreground */}
            <p className="text-xs md:text-sm font-black tracking-[0.35em] uppercase ">
              Building the Future of Connectivity.
            </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-[0.95] drop-shadow-[0_4px_20px_rgba(0,0,0,0.65)]">

  <span className="inline-block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
    Dinamika
  </span>{" "}

  <span className="inline-block bg-gradient-to-r from-blue-200 to-cyan-300 bg-clip-text text-transparent">
    Cipta
  </span>{" "}

  <span className="inline-block bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
    Solusi
  </span>

</h1>

            <p className="text-base md:text-xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
              Kumpulan solusi networking profesional untuk bisnis—mulai dari WiFi, Switching,
              Security, hingga Access Control. Terintegrasi, rapi, dan mudah dikelola.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-6">
              <Button
                onClick={() => {
                  brandSectionRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                size="lg"
                className="rounded-full px-10 h-14 text-base font-bold uppercase transition-all shadow-xl"
              >
                Enter Ecosystem
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => {
                  aboutSectionRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="outline"
                size="lg"
                className="rounded-full px-10 h-14 text-base font-bold uppercase"
              >
                Learn More
              </Button>
            </div>

            <div className="pt-8">
  <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-3">
    {[
      {
        icon: Zap,
        title: "Performance",
        desc: "Hardware and software yang stabil untuk 24/7 operation.",
      },
      {
        icon: ShieldCheck,
        title: "Secure",
        desc: "Best practice untuk jaringan yang lebih aman dan terkontrol.",
      },
      {
        icon: Headphones,
        title: "Support",
        desc: "Panduan & support untuk membantu implementasi lebih cepat.",
      },
    ].map((item) => (
      <div
        key={item.title}
        className="rounded-2xl border border-border bg-white/60 dark:bg-black/30 backdrop-blur-xl p-5 text-center"
      >
        <div className="flex justify-center">
          <item.icon className="w-5 h-5 text-primary" />
        </div>

        <p className="mt-2 font-black tracking-tight">
          {item.title}
        </p>

        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</div>
          </motion.div>
        </div>
      </section>

      {/* ================= BRAND GRID ================= */}
      <section
        ref={brandSectionRef}
        className="py-24 bg-white dark:bg-black transition-colors duration-500 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-64 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-primary/10 blur-[90px]" />
        </div>
        <div className="container mx-auto px-4 max-w-7xl">

          <div className="text-center mb-16">
            <p className="text-xs font-black tracking-[0.35em] uppercase text-muted-foreground">
              Our Product
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-black dark:text-white">
              Explore the Ecosystem
            </h2>
            <p className="text-muted-foreground font-medium mt-3 max-w-2xl mx-auto">
              Pilih Product yang kami sediakan untuk melihat katalog dan solusi yang sesuai dengan kebutuhan infrastruktur jaringan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ubiquiti",
                image: "/images/1.logo/UbiquitiThumbnail.png",
                path: "/home-ubiquiti",
                bg: "bg-blue-50/50 dark:bg-blue-900/10",
                desc: "Enterprise WiFi, Switching, Security, dan Access dalam satu ekosistem.",
              },
              {
                name: "MikroTik",
                image: "/images/1.logo/MikrotikThumbnail.png",
                path: "/mikrotik",
                bg: "bg-slate-50/50 dark:bg-slate-900/10",
                desc: "Router, switch, wireless, dan platform network yang fleksibel dan powerful.",
              },
              {
                name: "V-SOL",
                image: "/images/1.logo/vsolchatgpt.png",
                path: "/coming-soon",
                bg: "bg-zinc-50/50 dark:bg-zinc-900/10",
                desc: "Solusi access network (FTTx) untuk deployment skala besar.",
              },
            ].map((brand, i) => {
              const card = (
                <motion.div
                  whileHover={{ y: -6 }}
                  className={cn(
                    "relative aspect-[4/5] border border-border overflow-hidden group cursor-pointer transition-all duration-500 shadow-sm hover:shadow-2xl rounded-3xl",
                    brand.bg,
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 z-20 p-7 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-white font-black tracking-tight text-2xl drop-shadow-lg">
                      {brand.name}
                    </p>
                    <p className="mt-2 text-white/80 text-sm leading-relaxed line-clamp-2">
                      {brand.desc}
                    </p>
                    <div className="mt-4 inline-flex items-center text-white font-bold text-sm">
                      Explore
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              );

              return (
                <Link key={i} href={brand.path}>
                  {card}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= ABOUT / VALUE ================= */}
      <section
        ref={aboutSectionRef}
        className="py-24 bg-secondary/20 dark:bg-white/5 border-t border-border"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs font-black tracking-[0.35em] uppercase text-muted-foreground">
                Vision
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight">
                Building the Future of Connectivity
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Kami membantu memilih solusi yang tepat untuk kebutuhan jaringan—dari planning,
                deployment, hingga support. Fokus kami: rapi, scalable, dan mudah dikelola.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="rounded-full px-8">
                  <Link href="/support">Talk to an Expert</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8">
                  <Link href="/collections/wifi">Browse Products</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-background p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Curated Catalog", desc: "Produk dipilih untuk kebutuhan enterprise dan SMB." },
                  { title: "Fast Delivery", desc: "Proses pengadaan lebih cepat dan transparan." },
                  { title: "Implementation Ready", desc: "Dokumentasi dan support untuk deployment." },
                  { title: "Long-term Partnership", desc: "Bantu maintain dan berkembang seiring waktu." },
                ].map((x) => (
                  <div key={x.title} className="space-y-1">
                    <p className="font-black">{x.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{x.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout >
  );
}