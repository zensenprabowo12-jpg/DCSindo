export const UBIQUITI_DCS_CATEGORIES = [
  "Cloud Gateways",
  "Switching",
  "WiFi",
  "Camera Security",
  "Door Access",
  "Integration",
  "Advanced Hosting",
  "Accessories",
] as const;

export type UbiquitiDcsCategory = typeof UBIQUITI_DCS_CATEGORIES[number];

const canonicalMap = new Map<string, UbiquitiDcsCategory>(
  UBIQUITI_DCS_CATEGORIES.map((c) => [c.toLowerCase(), c])
);

export function isValidUbiquitiDcsCategory(raw: string): boolean {
  return canonicalMap.has(raw.trim().toLowerCase());
}

export function toCanonicalUbiquitiDcsCategory(raw: string): UbiquitiDcsCategory | null {
  return canonicalMap.get(raw.trim().toLowerCase()) ?? null;
}
