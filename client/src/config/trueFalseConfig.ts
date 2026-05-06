export type TrueFalseConfig = {
  /** Sembunyikan kategori Accessories (Ubiquiti). */
  disableUbiquitiAccessories: boolean;
  /** Redirect path Mikrotik ke Coming Soon. */
  disableMikrotikRoutes: boolean;
  /** Kalau false, addons produk dibuang saat penyusunan catalog (behavior lama SHOW_ADDONS = false). */
  showAddons: boolean;
};

export const DEFAULT_TRUE_FALSE_CONFIG: TrueFalseConfig = {
  disableUbiquitiAccessories: false,
  disableMikrotikRoutes: false,
  showAddons: false,
};

function normalize(parsed: unknown): TrueFalseConfig {
  if (!parsed || typeof parsed !== "object") {
    return { ...DEFAULT_TRUE_FALSE_CONFIG };
  }
  const o = parsed as Record<string, unknown>;
  return {
    disableUbiquitiAccessories: Boolean(o.disableUbiquitiAccessories),
    disableMikrotikRoutes: Boolean(o.disableMikrotikRoutes),
    showAddons: Boolean(o.showAddons),
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
