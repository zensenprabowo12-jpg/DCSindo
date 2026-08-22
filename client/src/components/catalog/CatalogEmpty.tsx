import { cn } from "@/lib/utils";

/**
 * L-06: empty state seragam untuk semua katalog publik.
 *
 * Teksnya sengaja tetap sama di keempat katalog — termasuk saat filter kategori
 * aktif. Sebelumnya Ubiquiti menyisipkan nama kategori ke dalam kalimat, tapi
 * chip/dropdown kategori di layar sudah menunjukkan filter mana yang menyala.
 */
export default function CatalogEmpty({ className }: { className?: string }) {
  return (
    <p className={cn("text-muted-foreground text-sm py-12 text-center", className)}>
      No products to display.
    </p>
  );
}
