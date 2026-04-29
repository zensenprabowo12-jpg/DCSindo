import { Link } from "wouter";
import { cn } from "@/lib/utils";
import type { MikrotikDcsProduct } from "@mikrotik/types";

function splitBullets(xs: string[]) {
  const mid = Math.ceil(xs.length / 2);
  return [xs.slice(0, mid), xs.slice(mid)] as const;
}

export function ProductCard({ product }: { product: MikrotikDcsProduct }) {
  const bullets = (product.bullet_points ?? [])
    .map((x) => (x ?? "").trim())
    .filter(Boolean);
  const [b1, b2] = splitBullets(bullets);

  return (
    <Link href={`/mikrotik/shop/${product.id}`}>
      <a
        className={cn(
          "group block rounded-2xl overflow-hidden h-full",
          "bg-card border border-border",
          "hover:-translate-y-1 hover:shadow-2xl transition-all duration-300",
        )}
      >
        <div className="h-full flex flex-col">
          {/* Header / Image (fixed ratio) */}
          <div className="aspect-[4/3] bg-secondary/20 flex items-center justify-center p-6 shrink-0">
            <img
              src={product.main_image || "/images/placeholder-product.png"}
              alt={product.nama_produk}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              draggable={false}
            />
          </div>

          {/* Content */}
          <div className="p-5 flex-1 flex flex-col">
            <p className="text-[10px] text-muted-foreground font-mono">
              SKU: {product.sku || "-"}
            </p>
            <h2 className="mt-1 font-black text-sm uppercase tracking-tight line-clamp-2">
              {product.nama_produk}
            </h2>
            <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
              {product.deskripsi}
            </p>

            {/* Bullets: tinggi area konsisten, overflow scroll bila banyak */}
            <div className="mt-4 flex-1">
              {bullets.length > 0 ? (
                <div
                  className={cn(
                    "grid grid-cols-2 gap-x-6 text-[11px] text-muted-foreground",
                    "max-h-28 overflow-y-auto pr-1",
                  )}
                >
                  <ul className="space-y-1">
                    {b1.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span className="leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-1">
                    {b2.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span className="leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="h-28" />
              )}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

