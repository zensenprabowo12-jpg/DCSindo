/** Kategori resmi (slug-friendly, konsisten di DB + filter UI) */
export const MIKROTIK_DCS_CATEGORIES = [
  "ethernet routers",
  "switches",
  "wireless system",
  "wireless home & office",
  "lte / 5g",
  "iot products",
  "60 ghz products",
  "routerboards",
  "enclosures",
  "interfaces",
  "accessories",
  "antennas",
  "sfp/qsfp",
] as const;

export type MikrotikDcsCategory = (typeof MIKROTIK_DCS_CATEGORIES)[number];

function catKey(s: string): string {
  return s.trim().toLowerCase();
}

export function isValidMikrotikDcsCategory(c: string): c is MikrotikDcsCategory {
  const k = catKey(c);
  return (MIKROTIK_DCS_CATEGORIES as readonly string[]).some(
    (x) => catKey(x) === k,
  );
}

/** Simpan kategori persis sesuai daftar (konsisten di filter) */
export function toCanonicalMikrotikDcsCategory(
  c: string,
): MikrotikDcsCategory | null {
  const k = catKey(c);
  const f = (MIKROTIK_DCS_CATEGORIES as readonly string[]).find(
    (x) => catKey(x) === k,
  );
  if (!f) return null;
  return f as MikrotikDcsCategory;
}
