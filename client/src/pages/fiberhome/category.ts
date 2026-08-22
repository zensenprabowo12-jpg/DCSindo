import type { FiberHomeProduct } from "./types";

/**
 * Produk tanpa `category` dikumpulkan di sini. Label ini tampil ke pengunjung
 * (chip filter + judul grup), jadi ikut diinggriskan. Konsekuensinya slug URL
 * berubah: `?category=lainnya` menjadi `?category=other`.
 */
export const UNCATEGORIZED = "Other";

/** "Drop Cable" → "drop-cable". Dipakai di query param `?category=`. */
export function categorySlug(category: string): string {
  return category.trim().toLowerCase().replace(/\s+/g, "-");
}

/**
 * Kelompokkan produk per kategori. Urutan kategori = urutan kemunculan
 * pertama, jadi mengikuti `sort_order` produk dari server.
 */
export function groupByCategory(
  products: FiberHomeProduct[],
): Array<[string, FiberHomeProduct[]]> {
  const groups = new Map<string, FiberHomeProduct[]>();
  for (const p of products) {
    const key = p.category.trim() || UNCATEGORIZED;
    const bucket = groups.get(key);
    if (bucket) bucket.push(p);
    else groups.set(key, [p]);
  }
  return Array.from(groups);
}
