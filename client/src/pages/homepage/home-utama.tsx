import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, X, ShieldCheck, Zap, Headphones, Star, Building2, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { V_SOL_BRAND } from "@/brands/v-sol";

// Notice tampil sekali per page load. Variabel module-scope ini hidup selama
// bundle JS-nya hidup: reload / tab baru mengosongkannya (notice muncul lagi),
// sedangkan pindah route SPA tidak (notice tetap tertutup). Sengaja TIDAK
// memakai sessionStorage — isinya bertahan melewati refresh, jadi notice
// justru tidak akan pernah muncul lagi di tab yang sama.
let noticeShownThisPageLoad = false;

export default function HomeUtama() {
  const [showPopup, setShowPopup] = useState(() => !noticeShownThisPageLoad);
  const brandSectionRef = useRef<HTMLDivElement | null>(null);
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);

  // Ditandai di effect, bukan di initializer useState, agar initializer tetap
  // murni (StrictMode memanggilnya dua kali).
  useEffect(() => {
    noticeShownThisPageLoad = true;
  }, []);

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
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>

              <h2 className="text-xl font-black tracking-tight mb-1 text-center">⚠️ IMPORTANT NOTICE</h2>
              <p className="text-xs text-muted-foreground mb-4 text-center">
                Please read before continuing
              </p>

              <div className="text-muted-foreground text-sm leading-relaxed mb-6 space-y-3 text-center">
                <p>
                  In accordance with Indonesian regulations, all networking devices must use
                  the latest firmware version that complies with applicable local standards.
                </p>
                <p>
                  We strongly advise you to update your firmware immediately to ensure device
                  security, stability, and regulatory compliance. By continuing, you acknowledge
                  that you have read and understood this notice.
                </p>
                <div className="flex flex-wrap gap-2 pt-1 justify-center">
                  <Button variant="secondary" size="sm" asChild className="rounded-full">
                    <Link href="/support/ubiquiti">Ubiquiti Support</Link>
                  </Button>
                  <Button variant="secondary" size="sm" asChild className="rounded-full">
                    <Link href="/support/mikrotik">MikroTik Support</Link>
                  </Button>
                  <Button variant="secondary" size="sm" asChild className="rounded-full">
                    <Link href="/support/vsol">V-SOL Support</Link>
                  </Button>
                </div>
              </div>

              <Button
                onClick={handleClose}
                className="w-full rounded-full font-semibold"
              >
                OK, I Understand
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-28 md:py-20 bg-white dark:bg-black transition-colors duration-500">

        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/30 dark:from-black/70 dark:to-black/60 z-10 transition-colors duration-500" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-full min-h-[100vh] min-w-[177.77vh]">
            <iframe
              src="https://www.youtube.com/embed/9HaU8NjH7bI?autoplay=1&mute=1&rel=0&playsinline=1"
              className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-80 dark:opacity-60 transition-opacity duration-500"
              allow="autoplay; encrypted-media"
              title="DCS Master Hero Video"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-7"
          >
            <h1 className="drop-shadow-[0_4px_20px_rgba(0,0,0,0.65)]">
              <span className="sr-only">DINAMIKA CIPTA SOLUSI</span>
              <img
                src="/images/2.homepage/Web-Head-Title-White.png"
                alt="Dinamika Cipta Solusi"
                className="mx-auto h-10 md:h-14 lg:h-16 w-auto mb-15"
                loading="eager"
                decoding="async"
              />
            </h1>

            <p
              className="font-manrope font-extrabold uppercase tracking-[0.35em] mb-2 text-white"
              style={{ fontSize: "20px", lineHeight: "1.6" }}
            >
              Building the Future of Connectivity
            </p>

            <p
              className="font-manrope font-light text-white/90 tracking-[0.08em] max-w-10xl mx-auto leading-[1.5] mb-10"
              style={{ fontSize: "22px" }}
            >
              Professional networking solutions for your business — from WiFi and Switching to Security and Access Control.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-6">
              <Button
                onClick={() => {
                  brandSectionRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
                size="lg"
                className="font-manrope font-semibold uppercase mb-2 bg-white hover:bg-white/90 text-black transition"
                style={{ fontSize: "18px", lineHeight: "1.6" }}
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
                className="rounded-full px-10 h-14 text-base font-bold uppercase border-white text-white hover:bg-white hover:text-black transition"
              >
                Learn More
              </Button>
            </div>

            <div className="pt-8">
              <div className="mx-auto max-w-8xl grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  {
                    icon: Zap,
                    title: "Performance",
                    desc: "Stable hardware and software for 24/7 operation.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Secure",
                    desc: "Best practices for a more secure and controlled network.",
                  },
                  {
                    icon: Headphones,
                    title: "Support",
                    desc: "Expert guidance to accelerate your implementation.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 text-center"
                  >
                    <div className="flex justify-center">
                      <item.icon className="w-7 h-7 text-white/90" />
                    </div>
                    <p
                      className="mt-2 font-manrope font-extrabold text-white"
                      style={{ fontSize: "22px" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="mt-1 font-manrope font-light leading-relaxed text-white/80"
                      style={{ fontSize: "16px" }}
                    >
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
              Our Products
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-black dark:text-white">
              Explore the Ecosystem
            </h2>
            <p className="text-muted-foreground font-medium mt-3 max-w-2xl mx-auto">
              Choose a brand to browse our curated catalog and find the right solution for your network infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ubiquiti",
                image: "/images/1.logo/UbiquitiThumbnail.png",
                path: "/ubiquiti",
                bg: "bg-blue-50/50 dark:bg-blue-900/10",
                desc: "Enterprise WiFi, Switching, Security, and Access in one ecosystem.",
              },
              {
                name: "MikroTik",
                image: "/images/1.logo/MikrotikThumbnail.png",
                path: "/mikrotik",
                bg: "bg-slate-50/50 dark:bg-slate-900/10",
                desc: "Flexible and powerful routing, switching, and wireless platforms.",
              },
              {
                name: "V-SOL",
                image: "/images/1.logo/VsolThumbnail.png",
                path: V_SOL_BRAND.websiteUrl,
                external: true,
                bg: "bg-zinc-50/50 dark:bg-zinc-900/10",
                desc: "FTTx access network solutions for large-scale deployment.",
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

              return brand.external ? (
                <a key={i} href={brand.path} target="_blank" rel="noreferrer" className="block">
                  {card}
                </a>
              ) : (
                <Link key={i} href={brand.path}>{card}</Link>
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
                We deliver scalable, future-ready networking solutions to support business growth,
                operational efficiency, and optimal connectivity.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="rounded-full px-8">
                  <Link href="/support">Talk to an Expert</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8">
                  <Link href="/ubiquiti/shop">Browse Products</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-background p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Curated Catalog", desc: "Curated enterprise solutions for modern business needs." },
                  { title: "Fast Delivery", desc: "Fast procurement with an efficient and transparent process." },
                  { title: "Implementation Ready", desc: "Technical support for seamless implementation." },
                  { title: "Long-term Partnership", desc: "Long-term partnership with ongoing support." },
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

      {/* ================= STATS / SOCIAL PROOF ================= */}
      <section className="py-16 bg-white dark:bg-black border-t border-border transition-colors duration-500">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "20+", label: "Years of Experience" },
              { value: "5,000+", label: "Products Distributed" },
              { value: "1,000+", label: "Enterprise Clients" },
              { value: "3", label: "Authorized Brands" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-3xl md:text-4xl font-black tracking-tight text-black dark:text-white">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 bg-secondary/20 dark:bg-white/5 border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-black tracking-[0.35em] uppercase text-muted-foreground">
              What Clients Say
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight">
              Trusted by Professionals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "DCS provides top-quality MikroTik and Ubiquiti equipment. Their technical support team is exceptional — they helped us deploy a city-wide network with zero issues.",
                name: "Ahmad Fauzi",
                role: "IT Manager, ISP Jawa Barat",
              },
              {
                quote: "We've been partnering with DCS for 5 years. Their product knowledge and after-sales service make them our go-to networking supplier for all our enterprise deployments.",
                name: "Budi Santoso",
                role: "Network Engineer, Jakarta Hotel Group",
              },
              {
                quote: "The V-SOL OLT deployment was seamless thanks to DCS's guidance. From procurement to configuration, they supported us every step of the way.",
                name: "Rina Kusuma",
                role: "Technical Director, Regional ISP Surabaya",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-background p-6 flex flex-col gap-4"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPANY PROFILE CTA ================= */}
      <section className="py-20 bg-white dark:bg-black border-t border-border transition-colors duration-500">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="rounded-3xl border border-border bg-secondary/20 dark:bg-white/5 p-10 md:p-14">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
              <FileText className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl font-black tracking-tight mb-3">
              Download Our Company Profile
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Learn more about our products, services, and company background. Download or print our official company profile.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-10 font-bold">
                <Link href="/company-profile">
                  <FileText className="w-4 h-4 mr-2" />
                  View Company Profile
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-10 font-bold">
                <Link href="/support">Talk to Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
