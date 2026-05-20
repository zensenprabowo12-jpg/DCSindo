import Layout from "@/components/layout";
import { cn } from "@/lib/utils";
import {
  MIKROTIK_CATEGORY_CARDS_BOTTOM,
  MIKROTIK_CATEGORY_CARDS_TOP,
  MIKROTIK_LATEST_VIDEO,
  MIKROTIK_MORE_CATEGORIES,
} from "./CategoryProductPageData";

/*
|--------------------------------------------------------------------------
| BACKGROUND PER CATEGORY
|--------------------------------------------------------------------------
*/

const CATEGORY_BACKGROUNDS: Record<string, string> = {
  "Ethernet Routers": "/images/batik/batik-mikrotik1.png",
  "Switches": "/images/batik/batik-mikrotik2.png",
  "Wireless Systems": "/images/batik/batik-mikrotik3.png",
  "Wireless Home & Office": "/images/batik/batik-mikrotik4.png",
  "LTE / 5G": "/images/batik/batik-mikrotik5.png",
  "IoT Products": "/images/batik/batik-mikrotik6.png",
  "60GHz": "/images/batik/batik-mikrotik7.png",
  "Routerboards": "/images/category-bg/routerboards.jpg",
  "Enclosures": "/images/category-bg/enclosures.jpg",
  "Interfaces": "/images/category-bg/interfaces.jpg",
  "Accessories": "/images/category-bg/accessories.jpg",
  "Antennas": "/images/category-bg/antennas.jpg",
  "SFP/QSFP": "/images/category-bg/sfp-qsfp.jpg",
};

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
              className="w-full h-full object-cover opacity-10"
            />
          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

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
                const backgroundImage =
                  CATEGORY_BACKGROUNDS[c.title] ||
                  "/images/category-bg/default.jpg";

                const CardInner = (
                  <div
                    className={cn(
                      "group relative overflow-hidden rounded-3xl",
                      "border border-white/10",
                      "min-h-[380px]",
                      "hover:-translate-y-2 hover:shadow-2xl",
                      "transition-all duration-500",
                    )}
                  >
                    {/* BG IMAGE */}
                    <div
                      className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700"
                      style={{
                        backgroundImage: `url(${backgroundImage})`,
                      }}
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/45 transition-colors duration-500" />

                    {/* CONTENT */}
                    <div className="relative z-10 flex flex-col justify-end h-full p-7">
                      {/* ICON */}
                      <div
                        className={cn(
                          "w-28 h-28",
                          "rounded-2xl overflow-hidden",
                          "bg-white/15 backdrop-blur-md",
                          "border border-white/20",
                          "shadow-2xl",
                        )}
                      >
                        <img
                          src={c.imageSrc}
                          alt={c.title}
                          className={cn(
                            "w-full h-full",
                            "object-cover",
                            "group-hover:scale-110",
                            "transition-transform duration-500",
                          )}
                          draggable={false}
                          loading="lazy"
                        />
                      </div>

                      {/* TITLE */}
                      <p
                        className={cn(
                          "mt-6",
                          "text-2xl md:text-3xl",
                          "font-black tracking-tight",
                          "text-white",
                          "drop-shadow-2xl",
                          "leading-tight",
                        )}
                      >
                        {c.title}
                      </p>
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
                const backgroundImage =
                  CATEGORY_BACKGROUNDS[c.title] ||
                  "/images/category-bg/default.jpg";

                const CardInner = (
                  <div
                    className={cn(
                      "group relative overflow-hidden rounded-3xl",
                      "border border-white/10",
                      "min-h-[380px]",
                      "hover:-translate-y-2 hover:shadow-2xl",
                      "transition-all duration-500",
                    )}
                  >
                    {/* BG IMAGE */}
                    <div
                      className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700"
                      style={{
                        backgroundImage: `url(${backgroundImage})`,
                      }}
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors duration-500" />

                    {/* CONTENT */}
                    <div className="relative z-10 flex flex-col justify-end h-full p-7">
                      {/* ICON */}
                      <div
                        className={cn(
                          "w-28 h-28",
                          "rounded-2xl overflow-hidden",
                          "bg-white/15 backdrop-blur-md",
                          "border border-white/20",
                          "shadow-2xl",
                        )}
                      >
                        <img
                          src={c.imageSrc}
                          alt={c.title}
                          className={cn(
                            "w-full h-full",
                            "object-cover",
                            "group-hover:scale-110",
                            "transition-transform duration-500",
                          )}
                          draggable={false}
                          loading="lazy"
                        />
                      </div>

                      {/* TITLE */}
                      <p
                        className={cn(
                          "mt-6",
                          "text-2xl md:text-3xl",
                          "font-black tracking-tight",
                          "text-white",
                          "drop-shadow-2xl",
                          "leading-tight",
                        )}
                      >
                        {c.title}
                      </p>
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