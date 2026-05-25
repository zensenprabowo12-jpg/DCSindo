export const VSOL_DCS_CATEGORIES = [
  "ONU / ONT",
  "OLT",
  "WiFi Router",
] as const;

export type VsolDcsCategory = typeof VSOL_DCS_CATEGORIES[number];

const canonicalMap = new Map<string, VsolDcsCategory>(
  VSOL_DCS_CATEGORIES.map((c) => [c.toLowerCase(), c])
);

export function isValidVsolDcsCategory(raw: string): boolean {
  return canonicalMap.has(raw.trim().toLowerCase());
}

export function toCanonicalVsolDcsCategory(raw: string): VsolDcsCategory | null {
  return canonicalMap.get(raw.trim().toLowerCase()) ?? null;
}
