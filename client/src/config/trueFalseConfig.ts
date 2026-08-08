export type TrueFalseConfig = {
  /** Sembunyikan kategori Accessories (Ubiquiti). */
  disableUbiquitiAccessories: boolean;
  /** Redirect path Mikrotik ke Coming Soon. */
  disableMikrotikRoutes: boolean;
  /** Redirect path FiberHome ke Coming Soon. */
  disableFiberHomeRoutes: boolean;
  /** Kalau false, addons produk dibuang saat penyusunan catalog (behavior lama SHOW_ADDONS = false). */
  showAddons: boolean;
  /**
   * Titik hijau + teks “In Stock” di halaman detail produk Ubiquiti (`/products/:id`).
   * Default true — jika key tidak ada di JSON, tetap seperti sekarang (tampil).
   */
  showUbiquitiInStockBadge: boolean;
};

export const DEFAULT_TRUE_FALSE_CONFIG: TrueFalseConfig = {
  disableUbiquitiAccessories: false,
  disableMikrotikRoutes: false,
  disableFiberHomeRoutes: false,
  showAddons: false,
  showUbiquitiInStockBadge: true,
};

function normalize(parsed: unknown): TrueFalseConfig {
  if (!parsed || typeof parsed !== "object") {
    return { ...DEFAULT_TRUE_FALSE_CONFIG };
  }
  const o = parsed as Record<string, unknown>;
  const stock =
    typeof o.showUbiquitiInStockBadge === "boolean"
      ? o.showUbiquitiInStockBadge
      : DEFAULT_TRUE_FALSE_CONFIG.showUbiquitiInStockBadge;
  return {
    disableUbiquitiAccessories: Boolean(o.disableUbiquitiAccessories),
    disableMikrotikRoutes: Boolean(o.disableMikrotikRoutes),
    disableFiberHomeRoutes: Boolean(o.disableFiberHomeRoutes),
    showAddons: Boolean(o.showAddons),
    showUbiquitiInStockBadge: stock,
  };
}

/**
 * Baca `/truefalse.json` di folder public—bisa diedit langsung di server tanpa rebuild.
 */
export async function fetchTrueFalseConfig(): Promise<TrueFalseConfig> {
  const res = await fetch("/truefalse.json", { cache: "no-store" });
  if (!res.ok) {
    return { ...DEFAULT_TRUE_FALSE_CONFIG };
  }
  try {
    return normalize(await res.json());
  } catch {
    return { ...DEFAULT_TRUE_FALSE_CONFIG };
  }
}
