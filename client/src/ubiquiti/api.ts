import type { ApiErr, ApiOk, UbiquitiDcsProduct, UbiquitiDcsProductDetail } from "./types";

const BASE = "/api/ubiquiti-dcs";

async function j<T>(res: Response): Promise<T> {
  const contentType = res.headers.get("content-type") ?? "";
  const text = await res.text();
  const looksLikeHtml = /^\s*<!doctype html/i.test(text) || contentType.includes("text/html");
  if (looksLikeHtml) {
    throw new Error(
      "API membalas HTML (bukan JSON). Pastikan kamu menjalankan `npm run dev` (Express+Vite), bukan `npm run dev:client`.",
    );
  }
  if (!text) return {} as T;
  return JSON.parse(text) as T;
}

async function safe<T>(fn: () => Promise<T>): Promise<T | ApiErr> {
  try {
    return await fn();
  } catch (e) {
    const message = e instanceof Error ? e.message : "Request gagal";
    return { ok: false, message } as ApiErr;
  }
}

type ListParams = { category?: string; sort?: "latest" | "oldest" | "custom" };

export async function apiUbiquitiPublicProducts(
  p: ListParams = {},
): Promise<ApiOk<UbiquitiDcsProduct[]> | ApiErr> {
  return safe(async () => {
    const q = new URLSearchParams();
    if (p.category) q.set("category", p.category);
    if (p.sort) q.set("sort", p.sort);
    const res = await fetch(`${BASE}/public/products?${q.toString()}`);
    return j(res);
  }) as Promise<ApiOk<UbiquitiDcsProduct[]> | ApiErr>;
}

export async function apiUbiquitiPublicProduct(
  id: number,
): Promise<ApiOk<UbiquitiDcsProductDetail> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/public/products/${id}`);
    return j(res);
  }) as Promise<ApiOk<UbiquitiDcsProductDetail> | ApiErr>;
}

export async function apiUbiquitiAdminProducts(
  p: ListParams = {},
): Promise<ApiOk<UbiquitiDcsProduct[]> | ApiErr> {
  return safe(async () => {
    const q = new URLSearchParams();
    if (p.category) q.set("category", p.category);
    if (p.sort) q.set("sort", p.sort);
    const res = await fetch(`${BASE}/admin/products?${q.toString()}`, {
      credentials: "include",
    });
    return j(res);
  }) as Promise<ApiOk<UbiquitiDcsProduct[]> | ApiErr>;
}

export async function apiUbiquitiAdminProduct(
  id: number,
): Promise<ApiOk<UbiquitiDcsProductDetail> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/admin/products/${id}`, { credentials: "include" });
    return j(res);
  }) as Promise<ApiOk<UbiquitiDcsProductDetail> | ApiErr>;
}

export async function apiUbiquitiCreateProduct(
  form: FormData,
): Promise<ApiOk<{ id: number }> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/admin/products`, {
      method: "POST",
      body: form,
      credentials: "include",
    });
    return j(res);
  }) as Promise<ApiOk<{ id: number }> | ApiErr>;
}

export async function apiUbiquitiUpdateProduct(
  id: number,
  form: FormData,
): Promise<ApiOk<{ id: number }> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/admin/products/${id}`, {
      method: "PUT",
      body: form,
      credentials: "include",
    });
    return j(res);
  }) as Promise<ApiOk<{ id: number }> | ApiErr>;
}

export async function apiUbiquitiDeleteProduct(
  id: number,
): Promise<ApiOk<unknown> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/admin/products/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    return j(res);
  }) as Promise<ApiOk<unknown> | ApiErr>;
}

export async function apiUbiquitiReorderProducts(
  category: string,
  orderedIds: number[],
): Promise<ApiOk<unknown> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/admin/products/reorder`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ category, orderedIds }),
    });
    return j(res);
  }) as Promise<ApiOk<unknown> | ApiErr>;
}

/**
 * Cek sesi. Menunjuk ke modul auth netral `/api/auth/me`, bukan lagi
 * `${BASE}/auth/me` per-brand (prasyarat L-01: rute lama menyusul dihapus).
 *
 * Bentuk balasan KEDUA endpoint berbeda dan itu disengaja dinormalkan di sini:
 * yang standar membalas `{ ok, authed, user }` (authed di level atas), yang
 * lama `{ ok, data: { authed } }`. Tanpa pemetaan ini `data` jadi undefined
 * dan pemanggil akan membaca "belum login" padahal sesi valid.
 */
export async function apiUbiquitiMe(): Promise<ApiOk<{ authed: boolean }> | ApiErr> {
  return safe(async () => {
    const res = await fetch("/api/auth/me", { credentials: "include" });
    const raw = await j<{ ok: boolean; authed?: boolean; message?: string }>(res);
    if (!raw.ok) {
      return { ok: false, message: raw.message ?? "Request gagal" } as ApiErr;
    }
    return { ok: true, data: { authed: Boolean(raw.authed) } } as ApiOk<{ authed: boolean }>;
  }) as Promise<ApiOk<{ authed: boolean }> | ApiErr>;
}
