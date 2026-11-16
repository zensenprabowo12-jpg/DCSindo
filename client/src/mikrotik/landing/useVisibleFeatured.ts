import { useEffect, useState } from "react";
import type { MikrotikLandingProduct } from "./data";

/** ID produk dari `productDetailHref` ("/mikrotik/shop/8" → 8). */
function productIdOf(p: MikrotikLandingProduct): number | null {
  const m = /^\/mikrotik\/shop\/(\d+)$/.exec(p.productDetailHref);
  return m ? Number(m[1]) : null;
}

/**
 * "Featured Products" di /mikrotik ditulis tangan di `data.ts`, jadi tidak
 * otomatis ikut filter `is_published` dari server. Hook ini mengecek tiap
 * produk lewat endpoint detail PUBLIK dan membuang yang membalas 404
 * (disembunyikan admin atau sudah dihapus).
 *
 * - Sebelum cek selesai: semua tampil seperti sebelumnya (section ini ada di
 *   bawah hero, jadi cek ±3 request kecil biasanya selesai sebelum terlihat).
 * - Gagal jaringan / 5xx: produk TETAP tampil (fail-open) — hanya 404 yang
 *   menyembunyikan, supaya gangguan API tidak mengosongkan landing page.
 */
export function useVisibleFeatured(products: MikrotikLandingProduct[]): MikrotikLandingProduct[] {
  const [hiddenIds, setHiddenIds] = useState<Set<number>>(() => new Set());

  useEffect(() => {
    let active = true;
    const ids = products.map(productIdOf).filter((id): id is number => id !== null);
    void Promise.all(
      ids.map(async (id) => {
        try {
          const res = await fetch(`/api/mikrotik-dcs/public/products/${id}`);
          return res.status === 404 ? id : null;
        } catch {
          return null;
        }
      }),
    ).then((results) => {
      if (!active) return;
      setHiddenIds(new Set(results.filter((id): id is number => id !== null)));
    });
    return () => {
      active = false;
    };
  }, [products]);

  return products.filter((p) => {
    const id = productIdOf(p);
    return id === null || !hiddenIds.has(id);
  });
}
