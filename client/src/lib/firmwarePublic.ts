// Helper & tipe untuk halaman Firmware publik (web utama).
// Sumber data: GET /api/firmware/public/list (tanpa auth).

export type FirmwareBrandSlug = "mikrotik" | "ubiquiti" | "vsol";

export type PublicFirmware = {
  id: number;
  brand: FirmwareBrandSlug;
  category: string;
  product_name: string;
  model_sku: string | null;
  version: string | null;
  release_date: string | null; // 'YYYY-MM-DD'
  source_type: "upload" | "external";
  file_path: string | null;
  external_url: string | null;
  file_size: number | null;
  checksum: string | null;
  notes: string | null;
  sort_order: number;
};

export const FIRMWARE_BRAND_SLUGS: FirmwareBrandSlug[] = ["mikrotik", "ubiquiti", "vsol"];

export function isFirmwareBrand(s: string): s is FirmwareBrandSlug {
  return s === "mikrotik" || s === "ubiquiti" || s === "vsol";
}

/** Metadata tampilan publik per brand (warna aksen memakai token Tailwind langsung). */
export const FIRMWARE_BRAND_META: Record<
  FirmwareBrandSlug,
  {
    name: string;
    tagline: string;
    logo: string;
    dot: string;
    text: string;
    grad: string;
    border: string;
    btn: string;
  }
> = {
  mikrotik: {
    name: "MikroTik",
    tagline: "RouterOS, RouterBOARD, dan perangkat MikroTik",
    logo: "/images/1.logo/MikrotikThumbnail.png",
    dot: "bg-red-500",
    text: "text-red-500",
    grad: "from-red-500/15 to-transparent",
    border: "hover:border-red-500/50",
    btn: "bg-red-600 hover:bg-red-500",
  },
  ubiquiti: {
    name: "Ubiquiti",
    tagline: "UniFi, airMAX, airFiber",
    logo: "/images/1.logo/UbiquitiThumbnail.png",
    dot: "bg-blue-500",
    text: "text-blue-500",
    grad: "from-blue-500/15 to-transparent",
    border: "hover:border-blue-500/50",
    btn: "bg-blue-600 hover:bg-blue-500",
  },
  vsol: {
    name: "V-SOL",
    tagline: "OLT, ONU, dan perangkat GPON/EPON",
    logo: "/images/1.logo/VsolThumbnail.png",
    dot: "bg-green-500",
    text: "text-green-500",
    grad: "from-green-500/15 to-transparent",
    border: "hover:border-green-500/50",
    btn: "bg-green-600 hover:bg-green-500",
  },
};

export async function fetchPublicFirmware(brand: string): Promise<PublicFirmware[]> {
  try {
    const res = await fetch(`/api/firmware/public/list?brand=${encodeURIComponent(brand)}`);
    const json = (await res.json()) as { ok: boolean; data?: PublicFirmware[] };
    return json.ok && Array.isArray(json.data) ? json.data : [];
  } catch {
    return [];
  }
}

export function formatBytes(n: number | null): string {
  if (n == null) return "—";
  if (n < 1024) return `${n} B`;
  const kb = n / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  const mb = kb / 1024;
  if (mb < 1024) return `${mb.toFixed(1)} MB`;
  return `${(mb / 1024).toFixed(2)} GB`;
}

/** Label ekstensi file dari path/URL (mendukung ekstensi ganda seperti tar.gz). Null bila tak dikenal. */
export function fileExtLabel(item: PublicFirmware): string | null {
  const src = item.source_type === "upload" ? item.file_path : item.external_url;
  if (!src) return null;
  const clean = src.split(/[?#]/)[0].toLowerCase();
  const known = [".tar.gz", ".bin", ".img", ".zip", ".tar", ".gz", ".ubi", ".npk"];
  for (const ext of known) {
    if (clean.endsWith(ext)) return ext.replace(/^\./, "");
  }
  return null;
}

/** Kelompokkan firmware per kategori, mempertahankan urutan kemunculan (sudah sort dari server). */
export function groupByCategory(
  list: PublicFirmware[],
): { category: string; items: PublicFirmware[] }[] {
  const groups: { category: string; items: PublicFirmware[] }[] = [];
  const index = new Map<string, number>();
  for (const item of list) {
    const key = item.category?.trim() || "Lainnya";
    let i = index.get(key);
    if (i == null) {
      i = groups.length;
      index.set(key, i);
      groups.push({ category: key, items: [] });
    }
    groups[i].items.push(item);
  }
  return groups;
}
