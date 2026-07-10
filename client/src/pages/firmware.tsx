import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout";
import { cn } from "@/lib/utils";
import { FIRMWARE_BRAND_SLUGS, FIRMWARE_BRAND_META } from "@/lib/firmwarePublic";

/**
 * Efek glow per brand (khusus halaman /firmware).
 * - `glow`  : warna layer blur di belakang kartu (animasi opacity → ringan/GPU).
 * - `shadow`: box-shadow berwarna brand saat hover (ikut transition kartu).
 */
const BRAND_FX: Record<string, { glow: string; shadow: string }> = {
  mikrotik: {
    glow: "bg-red-500/30",
    shadow:
      "hover:shadow-[0_0_0_1px_rgba(239,68,68,0.25),0_10px_30px_-5px_rgba(239,68,68,0.45),0_0_45px_-8px_rgba(239,68,68,0.5)]",
  },
  ubiquiti: {
    glow: "bg-blue-500/30",
    shadow:
      "hover:shadow-[0_0_0_1px_rgba(59,130,246,0.25),0_10px_30px_-5px_rgba(59,130,246,0.45),0_0_45px_-8px_rgba(59,130,246,0.5)]",
  },
  vsol: {
    glow: "bg-green-500/30",
    shadow:
      "hover:shadow-[0_0_0_1px_rgba(34,197,94,0.25),0_10px_30px_-5px_rgba(34,197,94,0.45),0_0_45px_-8px_rgba(34,197,94,0.5)]",
  },
};

export default function FirmwarePage() {
  return (
    <Layout>
      <section className="py-20 px-4 min-h-screen">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs font-black tracking-[0.35em] uppercase text-muted-foreground">
              Firmware Downloads
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-black dark:text-white">
              Pusat Unduhan Firmware Resmi
            </h1>
            <p className="text-muted-foreground font-medium mt-3 max-w-2xl mx-auto">
              Pilih brand untuk melihat firmware resmi yang tersedia — sebagian produk
              memerlukan firmware terlokalisasi sesuai regulasi di Indonesia.
            </p>
          </div>

          {/* Brand cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FIRMWARE_BRAND_SLUGS.map((slug) => {
              const meta = FIRMWARE_BRAND_META[slug];
              const fx = BRAND_FX[slug];
              return (
                <Link key={slug} href={`/firmware/${slug}`}>
                  <div className="group relative">
                    {/* Glow layer warna brand di belakang kartu — animasi opacity (ringan) */}
                    <div
                      aria-hidden
                      className={cn(
                        "pointer-events-none absolute -inset-1.5 -z-10 rounded-[1.75rem] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                        fx.glow,
                      )}
                    />

                    {/* Kartu — mekanisme hover DISAMAKAN dengan kartu brand home:
                        framer-motion whileHover y:-6 + transition-all duration-500 + shadow. */}
                    <motion.div
                      whileHover={{ y: -6 }}
                      className={cn(
                        "relative overflow-hidden rounded-3xl border border-border bg-background cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500",
                        meta.border,
                        fx.shadow,
                      )}
                    >
                      {/* Aksen garis atas warna brand (menguat saat hover) */}
                      <div
                        className={`h-1.5 w-full ${meta.dot} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
                      />

                      {/* Visual: logo/thumbnail brand (cover, tidak gepeng). Zoom seperti home. */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${meta.grad} pointer-events-none z-10`}
                        />
                        <img
                          src={meta.logo}
                          alt={meta.name}
                          decoding="async"
                          draggable={false}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Footer info */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className={`w-2.5 h-2.5 rounded-full ${meta.dot}`} />
                          <span className={`text-xs font-black uppercase tracking-widest ${meta.text}`}>
                            {slug}
                          </span>
                        </div>
                        <h2 className="text-xl font-black tracking-tight">{meta.name}</h2>
                        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                          {meta.tagline}
                        </p>
                        <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-foreground/80 group-hover:text-foreground transition-colors">
                          Lihat firmware
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </Link>
              );
            })}
          </div>

          <p className="mt-14 text-xs text-center text-muted-foreground">
            Butuh versi lain atau panduan teknis?{" "}
            <a href="/support" className="underline hover:text-foreground transition-colors">
              hubungi tim support kami
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
}
