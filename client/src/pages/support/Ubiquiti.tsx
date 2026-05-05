import {
  ArrowRight,
  FileText,
  CheckCircle,
  Shield,
  AlertTriangle,
  Sparkles,
  GripVertical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import Layout from "@/components/layout";
import { useLocation } from "wouter";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Ubiquiti() {
  const [, setLocation] = useLocation();
  const [isGPTVisible, setIsGPTVisible] = useState(false);
  const gptDragControls = useDragControls();
  const gptDragConstraintsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isGPTVisible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsGPTVisible(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isGPTVisible]);

  const gptUrl = useMemo(
    () =>
      "https://gpt.distributor.ui-apps.com/?distributor=PTDINAMIKACIPTASOLUSI",
    []
  );

  const trendingArticles = [
    "UniFi - How to set up a Dream Machine",
    "Troubleshooting UniFi Access Point adoption",
    "Configuring VLANs on UniFi Switches",
    "UniFi Protect - Camera placement guide",
    "Updating firmware via SSH",
    "Restoring a backup to a new Console",
  ];

  const categories = [
    "UniFi Consoles",
    "UniFi Network",
    "UniFi Gateway & Routing",
    "UniFi Protect",
    "UniFi Door Access",
    "UniFi Drive",
    "People & Role Management",
    "Talk",
    "Connect",
    "Mobility",
    "Play",
    "Other 1",
    "Other 2",
  ];

  const openUniFiGptPopup = () => setIsGPTVisible(true);

  const heroVideoId = "VvbjjCL_icQ";
  const heroVideoEmbedSrc = useMemo(
    () =>
      `https://www.youtube-nocookie.com/embed/${heroVideoId}?autoplay=1&mute=1&loop=1&playlist=${heroVideoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1`,
    [heroVideoId]
  );

  return (
    <Layout>
      {/* HERO */}
      {/* -mt-16: video full-bleed ke tepi viewport; pt: clearance header (h-16) + jarak konten */}
      <section className="relative -mt-16 flex min-h-dvh flex-col items-center justify-start overflow-hidden bg-zinc-950 px-4 pb-40 pt-28 text-white md:pb-48 md:pt-32">
        {/* Background: https://www.youtube.com/watch?v=VvbjjCL_icQ */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {/* inset negatif + scale: crop letterboxing YouTube & celah 1px saat refresh */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -inset-[5%] min-h-[110%] min-w-[110%]">
              <iframe
                title="Latar video hero Ubiquiti Support"
                src={heroVideoEmbedSrc}
                className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full origin-center -translate-x-1/2 -translate-y-1/2 scale-[1.22] border-0 motion-reduce:scale-100 sm:scale-[1.14]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={false}
              />
            </div>
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_18%,rgba(59,130,246,0.14),transparent_55%)]"
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-400" aria-hidden />
            Support Center
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            Ubiquiti Support Center
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="mt-3 max-w-xl text-pretty text-base text-white/75 md:text-lg"
          >
            Dokumentasi resmi, panduan produk, dan asisten UniFi untuk instalasi
            dan jaringan profesional Anda.
          </motion.p>

          {/* NOTICE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="mt-7 w-full max-w-2xl md:mt-8"
          >
            <div className="rounded-2xl border border-white/15 bg-white/[0.08] p-6 text-center shadow-2xl backdrop-blur-xl md:p-8">
              <div className="flex flex-col items-center gap-4">
                <div className="min-w-0 flex-1">
                  <h2 className="inline-flex items-center gap-2 text-lg font-bold text-white md:text-xl">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-300">
                      <AlertTriangle className="h-4.5 w-4.5" aria-hidden />
                    </span>
                    Peringatan
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/80 md:text-base">
                    Website ini berisi produk dan solusi networking profesional.
                    <br />
                    Pastikan kepatuhan firmware dan regulasi setempat sebelum
                    deployment.
                  </p>
                  <div className="flex justify-center">
                    <Button
                      onClick={() => setLocation("/firmware")}
                      className="mt-5 rounded-full px-7 font-bold text-white"
                      style={{ backgroundColor: '#0559C9' }}
                    >
                      Info Selengkapnya
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* UNI-FI GPT */}
          <div className="mt-6 w-full max-w-2xl md:mt-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.5 }}
              className="grid gap-5 rounded-2xl border border-white/12 bg-white/[0.06] p-6 text-left shadow-xl backdrop-blur-md md:grid-cols-[1fr_auto] md:items-center md:gap-8 md:p-7"
            >
              <div>
                <div className="text-[11px] font-semibold tracking-[0.22em] text-white/60">
                  UNIFI ASSISTANT
                </div>
                <div className="mt-2 text-2xl font-bold leading-tight tracking-tight md:text-2xl">
                  Cari solusi UniFi anda dengan UniFi GPT
                </div>
                <p className="mt-2 text-sm text-white/70 md:text-base">
                  Tanyakan kebutuhan instalasi, fitur, atau rekomendasi produk. UniFi GPT, siap membantu anda menemukan solusi yang sesuai.
                </p>
              </div>

              <div className="flex md:justify-end">
                <Button
                  type="button"
                  onClick={openUniFiGptPopup}
                  className="mx-auto h-12 rounded-full px-6 text-white shadow-lg md:mx-0"
                  style={{ backgroundColor: '#0559C9' }}
                >
                  <img
                    src="/images/1.logo/logo_unifigpt.png"
                    className="h-7 w-auto"
                    alt="UniFi"
                  />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-28 bg-gradient-to-t from-background via-background/40 to-transparent"
          aria-hidden
        />
      </section >

      {/* TRENDING */}
      < section className="py-20 px-4" >
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center">
            Trending Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {trendingArticles.map((item, i) => (
              <a
                key={i}
                href="https://help.ui.com/hc/en-us"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition group"
              >
                <FileText className="w-6 h-6 mb-3 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {item}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section >

      {/* CATEGORY */}
      < section className="py-20 px-4 bg-secondary/30" >
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center">
            Browse Guides by Product Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {categories.map((cat, i) => (
              <a
                key={i}
                href="#"
                className="p-6 rounded-2xl bg-card border border-border text-center hover:shadow-md transition group hover:border-primary/50"
              >
                <Shield className="w-8 h-8 mx-auto mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <h3 className="font-bold group-hover:text-primary transition-colors">
                  {cat}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section >

      {/* RMA */}
      < section className="py-24 text-center px-4" >
        <CheckCircle className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4">
          RMA & Device Replacement
        </h2>
        <p className="text-muted-foreground mb-8">
          Start your automated RMA process here.
        </p>

        <a
          href="https://rma.ui.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="rounded-full px-8">
            Start RMA Request
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </a>
      </section >

      {
        typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isGPTVisible && (
              <motion.div
                key="unifi-gpt-overlay"
                role="presentation"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-none fixed inset-0 z-[100]"
              >
                <div
                  className="absolute inset-0 bg-black/55 backdrop-blur-[3px] pointer-events-auto"
                  onClick={() => setIsGPTVisible(false)}
                />
                <div
                  ref={gptDragConstraintsRef}
                  className="pointer-events-none absolute inset-0"
                  aria-hidden
                />
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="unifi-gpt-title"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  drag
                  dragControls={gptDragControls}
                  dragListener={false}
                  dragMomentum={false}
                  dragElastic={0.06}
                  dragConstraints={gptDragConstraintsRef}
                  className="pointer-events-auto absolute z-10 flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-zinc-950 shadow-[0_20px_80px_rgba(0,0,0,0.65)] ring-1 ring-white/5"
                  style={{
                    width: "min(480px, calc(100vw - 2rem))",
                    height: "min(640px, calc(100vh - 2rem))",
                    top: "max(4.5rem, calc((100vh - min(640px, calc(100vh - 2rem))) / 2))",
                    left: "max(1rem, calc(50vw - min(240px, calc(50vw - 1rem))))",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    className="relative flex shrink-0 cursor-grab select-none items-center gap-2 border-b border-white/10 bg-gradient-to-b from-zinc-900/90 to-zinc-900/70 px-3 py-2.5 active:cursor-grabbing"
                    onPointerDown={(e) => gptDragControls.start(e)}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/1.logo/logo_unifigpt.png"
                        className="h-6 w-auto"
                        alt="UniFi"
                      />
                      <GripVertical
                        className="h-5 w-5 shrink-0 text-white/35"
                        aria-hidden
                      />
                    </div>
                    <div
                      id="unifi-gpt-title"
                      className="min-w-0 flex-1"
                    >
                      <div className="truncate text-sm font-semibold text-white">
                        UniFi Assistant
                      </div>
                      <div className="truncate text-[11px] text-white/55">
                        Drag untuk memindahkan • Esc untuk menutup
                      </div>
                    </div>
                    <span className="sr-only">
                      Seret bilah judul untuk memindahkan jendela
                    </span>
                    <button
                      type="button"
                      onPointerDown={(e) => e.stopPropagation()}
                      onClick={() => setIsGPTVisible(false)}
                      className="shrink-0 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/90 transition hover:bg-white/15"
                    >
                      Tutup
                    </button>
                  </div>
                  <div className="min-h-0 flex-1 bg-black/80">
                    <iframe
                      title="UniFi GPT"
                      src={gptUrl}
                      className="h-full w-full border-0"
                      allow="clipboard-read; clipboard-write"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )
      }
    </Layout >
  );
}