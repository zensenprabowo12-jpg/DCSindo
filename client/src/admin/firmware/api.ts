// API client + tipe untuk panel admin Firmware.
// Pola mengikuti api.ts brand DCS (fetch + credentials:"include").

export type FirmwareBrand = "mikrotik" | "ubiquiti" | "vsol";
export type FirmwareSourceType = "upload" | "external";

export type FirmwareFile = {
  id: number;
  brand: FirmwareBrand;
  category: string;
  product_name: string;
  model_sku: string | null;
  version: string | null;
  release_date: string | null; // 'YYYY-MM-DD'
  source_type: FirmwareSourceType;
  file_path: string | null;
  external_url: string | null;
  file_size: number | null;
  checksum: string | null;
  notes: string | null;
  sort_order: number;
  created_at: string;
  updated_at: string;
};

export type ApiOk<T> = { ok: true; data: T };
export type ApiErr = { ok: false; message: string };

export const FIRMWARE_BRANDS: FirmwareBrand[] = ["mikrotik", "ubiquiti", "vsol"];

export function isFirmwareBrand(b: string): b is FirmwareBrand {
  return b === "mikrotik" || b === "ubiquiti" || b === "vsol";
}

/** Metadata tampilan per brand (warna aksen selaras dashboard admin). */
export const FIRMWARE_BRAND_META: Record<
  FirmwareBrand,
  {
    name: string;
    dot: string;
    label: string;
    border: string;
    accent: string;
    ring: string;
    btn: string;
    link: string;
  }
> = {
  mikrotik: {
    name: "MikroTik",
    dot: "bg-red-500",
    label: "text-red-400",
    border: "border-zinc-800 hover:border-red-500/50",
    accent: "from-red-500/10 to-transparent",
    ring: "focus:ring-red-500",
    btn: "bg-red-700 hover:bg-red-600",
    link: "text-red-400 hover:text-red-300",
  },
  ubiquiti: {
    name: "Ubiquiti",
    dot: "bg-blue-500",
    label: "text-blue-400",
    border: "border-zinc-800 hover:border-blue-500/50",
    accent: "from-blue-500/10 to-transparent",
    ring: "focus:ring-blue-500",
    btn: "bg-blue-700 hover:bg-blue-600",
    link: "text-blue-400 hover:text-blue-300",
  },
  vsol: {
    name: "V-SOL",
    dot: "bg-green-500",
    label: "text-green-400",
    border: "border-zinc-800 hover:border-green-500/50",
    accent: "from-green-500/10 to-transparent",
    ring: "focus:ring-green-500",
    btn: "bg-green-700 hover:bg-green-600",
    link: "text-green-400 hover:text-green-300",
  },
};

const BASE = "/api/firmware";

async function j<T>(res: Response): Promise<T> {
  const contentType = res.headers.get("content-type") ?? "";
  const text = await res.text();
  const looksLikeHtml = /^\s*<!doctype html/i.test(text) || contentType.includes("text/html");
  if (looksLikeHtml) {
    throw new Error("API returned HTML instead of JSON. Make sure you run `npm run dev` (Express+Vite).");
  }
  if (!text) return {} as T;
  return JSON.parse(text) as T;
}

async function safe<T>(fn: () => Promise<T>): Promise<T | ApiErr> {
  try {
    return await fn();
  } catch (e) {
    const message = e instanceof Error ? e.message : "Request failed";
    return { ok: false, message } as ApiErr;
  }
}

type ListParams = { brand?: string; category?: string; sort?: "latest" | "oldest" | "custom" };

export async function apiFirmwarePublicList(
  p: ListParams = {},
): Promise<ApiOk<FirmwareFile[]> | ApiErr> {
  return safe(async () => {
    const q = new URLSearchParams();
    if (p.brand) q.set("brand", p.brand);
    if (p.category) q.set("category", p.category);
    if (p.sort) q.set("sort", p.sort);
    const res = await fetch(`${BASE}/public/list?${q.toString()}`);
    return j(res);
  }) as Promise<ApiOk<FirmwareFile[]> | ApiErr>;
}

export async function apiFirmwareAdminList(
  p: ListParams = {},
): Promise<ApiOk<FirmwareFile[]> | ApiErr> {
  return safe(async () => {
    const q = new URLSearchParams();
    if (p.brand) q.set("brand", p.brand);
    if (p.category) q.set("category", p.category);
    if (p.sort) q.set("sort", p.sort);
    const res = await fetch(`${BASE}/admin/list?${q.toString()}`, {
      credentials: "include",
    });
    return j(res);
  }) as Promise<ApiOk<FirmwareFile[]> | ApiErr>;
}

export async function apiFirmwareAdminGet(
  id: number,
): Promise<ApiOk<FirmwareFile> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/admin/${id}`, { credentials: "include" });
    return j(res);
  }) as Promise<ApiOk<FirmwareFile> | ApiErr>;
}

export async function apiFirmwareCreate(
  form: FormData,
): Promise<ApiOk<{ id: number }> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/admin`, {
      method: "POST",
      body: form,
      credentials: "include",
    });
    return j(res);
  }) as Promise<ApiOk<{ id: number }> | ApiErr>;
}

export async function apiFirmwareUpdate(
  id: number,
  form: FormData,
): Promise<ApiOk<{ id: number }> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/admin/${id}`, {
      method: "PUT",
      body: form,
      credentials: "include",
    });
    return j(res);
  }) as Promise<ApiOk<{ id: number }> | ApiErr>;
}

export async function apiFirmwareDelete(
  id: number,
): Promise<ApiOk<unknown> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/admin/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    return j(res);
  }) as Promise<ApiOk<unknown> | ApiErr>;
}

export async function apiFirmwareReorder(
  brand: string,
  category: string,
  orderedIds: number[],
): Promise<ApiOk<unknown> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/admin/reorder`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ brand, category, orderedIds }),
    });
    return j(res);
  }) as Promise<ApiOk<unknown> | ApiErr>;
}
