import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { MikrotikLandingProduct } from "../data";

export default function ProductShowcase({
  products,
}: {
  products: MikrotikLandingProduct[];
}) {
  const [activeKey, setActiveKey] = useState<MikrotikLandingProduct["key"]>("A");
  const active = useMemo(
    () => products.find((p) => p.key === activeKey) ?? products[0],
    [activeKey, products],
  );

  return (
    <div className="bg-background min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 md:py-20 w-full">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {active.tagline}
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight">
              {active.name}
            </h2>

            <ul className="mt-6 space-y-2 text-sm md:text-base">
              {active.bullets.map((b, i) => (
                <li key={`${active.key}-${i}`} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span className="text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              {active.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full px-8">
                <a href={active.productDetailHref}>Product Detail</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8">
                <a href={active.contactHref}>Contact Us</a>
              </Button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center">
            <div className="w-full rounded-3xl border border-border bg-secondary/20 p-8">
              <div className="aspect-[4/3] w-full rounded-2xl bg-muted/40 border border-border flex items-center justify-center overflow-hidden">
                <img
                  src={active.imageSrc}
                  alt={active.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="mt-6 flex items-center justify-center gap-2">
                {products.map((p) => (
                  <button
                    key={p.key}
                    type="button"
                    onClick={() => setActiveKey(p.key)}
                    className={cn(
                      "h-9 px-4 rounded-full text-sm border transition-colors",
                      p.key === activeKey
                        ? "bg-foreground text-background border-foreground"
                        : "bg-background border-border hover:bg-primary/10",
                    )}
                  >
                    Product {p.key}
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-4 text-xs text-muted-foreground text-center">
              Klik selector Product A/B/C untuk mengganti konten.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

