import Layout from "@/components/layout";
import { cn } from "@/lib/utils";
import {
  MIKROTIK_CATEGORY_CARDS_BOTTOM,
  MIKROTIK_CATEGORY_CARDS_TOP,
  MIKROTIK_LATEST_VIDEO,
  MIKROTIK_MORE_CATEGORIES,
} from "./CategoryProductPageData";

export default function MikrotikCategoryProductPage() {
  return (
    <Layout>
      <div className="bg-background">
        {/* SECTION CATEGORY */}
        <section className="relative overflow-hidden bg-black">
          {/* BACKGROUND */}
          <div className="absolute inset-0">
            <img
              src="/images/batik/batik-mikrotik1.png"
              alt="Background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/85" />

          {/* CONTENT */}
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
            {/* TITLE */}
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                Our Product Categories
              </h1>

              <p className="mt-5 text-sm md:text-base text-white/70 leading-relaxed">
                Explore MikroTik networking solutions for enterprise,
                wireless, routing, switching, and infrastructure deployment.
              </p>
            </div>

            {/* ROW 1 */}
            <div className="mt-14 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
              {MIKROTIK_CATEGORY_CARDS_TOP.map((c) => {
                const CardInner = (
                  <div
                    className={cn(
                      "group relative flex flex-col h-full overflow-hidden rounded-3xl",
                      "border border-white/10 bg-zinc-900/50 backdrop-blur-sm",
                      "hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl hover:border-white/25",
                      "transition-all duration-500 will-change-transform",
                    )}
                  >
                    {/* IMAGE */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden">
                      <img
                        src={c.imageSrc}
                        alt={c.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        draggable={false}
                        loading="lazy"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-col flex-1 p-6">
                      <p className="text-xl md:text-2xl font-black tracking-tight text-white leading-tight">
                        {c.title}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF6B35]">
                        Lihat produk
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                );

                return c.href ? (
                  <a key={c.title} href={c.href} className="block">
                    {CardInner}
                  </a>
                ) : (
                  <div key={c.title}>{CardInner}</div>
                );
              })}
            </div>

            {/* ROW 2 */}
            <div className="mt-7 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 items-stretch">
              {MIKROTIK_CATEGORY_CARDS_BOTTOM.slice(0, 3).map((c) => {
                const CardInner = (
                  <div
                    className={cn(
                      "group relative flex flex-col h-full overflow-hidden rounded-3xl",
                      "border border-white/10 bg-zinc-900/50 backdrop-blur-sm",
                      "hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl hover:border-white/25",
                      "transition-all duration-500 will-change-transform",
                    )}
                  >
                    {/* IMAGE */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden">
                      <img
                        src={c.imageSrc}
                        alt={c.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        draggable={false}
                        loading="lazy"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-col flex-1 p-6">
                      <p className="text-xl md:text-2xl font-black tracking-tight text-white leading-tight">
                        {c.title}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF6B35]">
                        Lihat produk
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                );

                return c.href ? (
                  <a key={c.title} href={c.href} className="block">
                    {CardInner}
                  </a>
                ) : (
                  <div key={c.title}>{CardInner}</div>
                );
              })}

              {/* MORE CARD */}
              <div
                className={cn(
                  "rounded-3xl",
                  "bg-white/10 backdrop-blur-xl",
                  "border border-white/10",
                  "p-8",
                  "flex flex-col items-center justify-center text-center",
                )}
              >
                <p className="text-sm font-black tracking-[0.35em] uppercase text-white">
                  More
                </p>

                <div className="mt-6 space-y-3">
                  {MIKROTIK_MORE_CATEGORIES.map((x) => (
                    <a
                      key={x.label}
                      href={x.href}
                      className="block text-sm md:text-base text-white/75 hover:text-white transition-colors"
                    >
                      {x.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION YOUTUBE */}
        <section className="bg-background">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                {MIKROTIK_LATEST_VIDEO.title}
              </h2>
            </div>

            <div className="mt-10 max-w-5xl mx-auto rounded-3xl overflow-hidden border border-border shadow-2xl">
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${MIKROTIK_LATEST_VIDEO.videoId}?rel=0`}
                  title="MikroTik Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="mt-12 max-w-3xl mx-auto text-center">
              <h3 className="text-xl md:text-2xl font-black tracking-tight">
                {MIKROTIK_LATEST_VIDEO.detailTitle}
              </h3>

              <p className="mt-5 text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {MIKROTIK_LATEST_VIDEO.detailBody}
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}