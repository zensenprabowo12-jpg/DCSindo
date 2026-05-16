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
| Tinggal ganti path gambar sesuai kebutuhan
| Simpan gambar di public/images/category-bg/
|--------------------------------------------------------------------------
*/

const CATEGORY_BACKGROUNDS: Record<string, string> = {
  "Ethernet Routers": "/images/category-bg/ethernet-routers.jpg",
  "Switches": "/images/category-bg/switches.jpg",
  "Wireless Systems": "/images/category-bg/wireless-systems.jpg",
  "Wireless Home & Office": "/images/category-bg/wireless-home-office.jpg",
  "LTE / 5G": "/images/category-bg/lte-5g.jpg",
  "IoT Products": "/images/category-bg/iot-products.jpg",
  "60GHz": "/images/category-bg/60ghz.jpg",
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
        {/* Section 1: Categories */}
        <section className="bg-secondary/20">
          <div className="container mx-auto px-4 py-14 md:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                Our Product
              </h1>

              <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                Setiap category sekarang sudah support background sendiri-sendiri.
              </p>
            </div>

            {/* Row 1 */}
            <div className="mt-10 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {MIKROTIK_CATEGORY_CARDS_TOP.map((c) => {
                const backgroundImage =
                  CATEGORY_BACKGROUNDS[c.title] ||
                  "/images/category-bg/default.jpg";

                const CardInner = (
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-2xl border border-border",
                      "hover:-translate-y-1 hover:shadow-2xl transition-all duration-300",
                      "min-h-[280px] flex flex-col justify-end",
                    )}
                  >
                    {/* BACKGROUND IMAGE */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${backgroundImage})`,
                      }}
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-black/45" />

                    {/* CONTENT */}
                    <div className="relative z-10 p-5 text-white">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/10 backdrop-blur border border-white/20">
                        <img
                          src={c.imageSrc}
                          alt={c.title}
                          className="w-full h-full object-contain p-2"
                          draggable={false}
                          loading="lazy"
                        />
                      </div>

                      <p className="mt-4 text-sm md:text-base font-bold tracking-tight">
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

            {/* Row 2 */}
            <div className="mt-5 md:mt-6 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 items-stretch">
              {MIKROTIK_CATEGORY_CARDS_BOTTOM.slice(0, 3).map((c) => {
                const backgroundImage =
                  CATEGORY_BACKGROUNDS[c.title] ||
                  "/images/category-bg/default.jpg";

                const CardInner = (
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-2xl border border-border",
                      "hover:-translate-y-1 hover:shadow-2xl transition-all duration-300",
                      "min-h-[280px] flex flex-col justify-end",
                    )}
                  >
                    {/* BACKGROUND IMAGE */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${backgroundImage})`,
                      }}
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/45" />

                    {/* CONTENT */}
                    <div className="relative z-10 p-5 text-white">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/10 backdrop-blur border border-white/20">
                        <img
                          src={c.imageSrc}
                          alt={c.title}
                          className="w-full h-full object-contain p-2"
                          draggable={false}
                          loading="lazy"
                        />
                      </div>

                      <p className="mt-4 text-sm md:text-base font-bold tracking-tight">
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

              {/* MORE */}
              <div
                className={cn(
                  "rounded-2xl bg-background border border-border",
                  "p-6 md:p-7",
                  "flex flex-col items-center justify-center text-center",
                )}
              >
                <p className="text-sm font-black tracking-[0.28em] uppercase">
                  More
                </p>

                <div className="mt-6 text-xs md:text-sm text-muted-foreground leading-6 space-y-1">
                  {MIKROTIK_MORE_CATEGORIES.map((x) => (
                    <a
                      key={x.label}
                      href={x.href}
                      className="block hover:text-primary transition-colors"
                    >
                      {x.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Latest YouTube */}
        <section className="bg-background">
          <div className="container mx-auto px-4 py-14 md:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl md:text-2xl font-black tracking-tight">
                {MIKROTIK_LATEST_VIDEO.title}
              </h2>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                {MIKROTIK_LATEST_VIDEO.shortDescription}
              </p>
            </div>

            <div className="mt-10 max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border bg-secondary/20">
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

            <div className="mt-10 max-w-3xl mx-auto text-center">
              <h3 className="text-lg md:text-xl font-black tracking-tight">
                {MIKROTIK_LATEST_VIDEO.detailTitle}
              </h3>

              <p className="mt-4 text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {MIKROTIK_LATEST_VIDEO.detailBody}
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}