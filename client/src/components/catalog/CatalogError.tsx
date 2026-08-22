import { cn } from "@/lib/utils";

/**
 * L-06: banner error seragam untuk semua katalog publik.
 *
 * Pesan mentah dari server TIDAK lagi ditampilkan di sini. Alasannya dua:
 * pesan itu berbahasa Indonesia (mis. "Request gagal") sehingga merusak
 * konsistensi bahasa yang justru jadi inti L-06, dan isinya teknis — tidak
 * berguna bagi pengunjung katalog. Detail aslinya tetap ada di Network tab
 * dan di log server.
 *
 * Varian warna yang dipakai adalah versi sadar light/dark milik MikroTik /
 * V-SOL / FiberHome. Versi lama Ubiquiti (`text-red-400` di atas
 * `bg-red-500/10`) nyaris tak terbaca di mode terang.
 */
export default function CatalogError({ className }: { className?: string }) {
  return (
    <div
      role="alert"
      className={cn(
        "mb-6 rounded-xl border border-red-200 bg-red-50 text-red-800",
        "dark:bg-red-950/30 dark:text-red-200 dark:border-red-900",
        "px-4 py-3 text-sm",
        className,
      )}
    >
      Failed to load products. Please try again.
    </div>
  );
}
