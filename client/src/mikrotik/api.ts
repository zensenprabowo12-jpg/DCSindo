import type { ApiErr, ApiOk, MikrotikDcsProduct, MikrotikDcsProductDetail } from "./types";

const BASE = "/api/mikrotik-dcs";

async function j<T>(res: Response): Promise<T> {
  const contentType = res.headers.get("content-type") ?? "";
  const text = await res.text();

  // Kalau backend Express tidak jalan dan yang aktif hanya Vite,
  // path `/api/...` biasanya dibalas HTML index.html (DOCTYPE).
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

export async function apiPublicProducts(
  p: ListParams = {},
): Promise<ApiOk<MikrotikDcsProduct[]> | ApiErr> {
  return safe(async () => {
    const q = new URLSearchParams();
    if (p.category) q.set("category", p.category);
    if (p.sort) q.set("sort", p.sort);
    const res = await fetch(`${BASE}/public/products?${q.toString()}`);
    return j(res);
  }) as Promise<ApiOk<MikrotikDcsProduct[]> | ApiErr>;
}

export async function apiPublicProduct(
  id: number,
): Promise<ApiOk<MikrotikDcsProductDetail> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/public/products/${id}`);
    return j(res);
  }) as Promise<ApiOk<MikrotikDcsProductDetail> | ApiErr>;
}

export async function apiAdminProducts(
  p: ListParams = {},
): Promise<ApiOk<MikrotikDcsProduct[]> | ApiErr> {
  return safe(async () => {
    const q = new URLSearchParams();
    if (p.category) q.set("category", p.category);
    if (p.sort) q.set("sort", p.sort);
    const res = await fetch(`${BASE}/admin/products?${q.toString()}`, {
      credentials: "include",
    });
    return j(res);
  }) as Promise<ApiOk<MikrotikDcsProduct[]> | ApiErr>;
}

export async function apiAdminProduct(
  id: number,
): Promise<ApiOk<MikrotikDcsProductDetail> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/admin/products/${id}`, { credentials: "include" });
    return j(res);
  }) as Promise<ApiOk<MikrotikDcsProductDetail> | ApiErr>;
}

export async function apiCreateProduct(
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

export async function apiUpdateProduct(
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

export async function apiDeleteProduct(
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

export async function apiReorderProducts(
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
