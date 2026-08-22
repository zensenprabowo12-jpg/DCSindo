import { cn } from "@/lib/utils";

/**
 * Grid default katalog: 3 kolom, sama dengan MikroTik / V-SOL / FiberHome.
 * Ubiquiti memakai 4 kolom, jadi ia mengoper `className` sendiri — twMerge yang
 * menyelesaikan bentroknya, sehingga skeleton selalu sebaris dengan grid produk
 * yang menggantikannya. Skeleton yang tata letaknya beda dari hasil akhir malah
 * bikin halaman terlihat "melompat" saat data datang.
 */
export const CATALOG_GRID = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8";

/**
 * L-06: satu skeleton untuk semua katalog publik.
 *
 * Tiga batang di badan kartu mengikuti struktur ProductCard yang sebenarnya
 * (judul → kategori → deskripsi), supaya bentuk placeholder-nya menjanjikan
 * hal yang sama dengan yang akhirnya muncul.
 */
export default function CatalogSkeleton({
  count = 8,
  className,
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div role="status" aria-label="Loading products" className={cn(CATALOG_GRID, className)}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl border border-border bg-card overflow-hidden animate-pulse"
        >
          <div className="aspect-square bg-secondary/30" />
          <div className="p-5 space-y-2">
            <div className="h-4 bg-secondary/40 rounded w-3/4" />
            <div className="h-3 bg-secondary/30 rounded w-1/2" />
            <div className="h-3 bg-secondary/30 rounded w-full !mt-4" />
          </div>
        </div>
      ))}
    </div>
  );
}
