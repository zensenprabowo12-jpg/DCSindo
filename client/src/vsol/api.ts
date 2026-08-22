import type { ApiErr, ApiOk, VsolDcsProduct, VsolDcsProductDetail } from "./types";

const BASE = "/api/vsol-dcs";

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

type ListParams = { category?: string; sort?: "latest" | "oldest" | "custom" };

export async function apiVsolPublicProducts(
  p: ListParams = {},
): Promise<ApiOk<VsolDcsProduct[]> | ApiErr> {
  return safe(async () => {
    const q = new URLSearchParams();
    if (p.category) q.set("category", p.category);
    if (p.sort) q.set("sort", p.sort);
    const res = await fetch(`${BASE}/public/products?${q.toString()}`);
    return j(res);
  }) as Promise<ApiOk<VsolDcsProduct[]> | ApiErr>;
}

export async function apiVsolPublicProduct(
  id: number,
): Promise<ApiOk<VsolDcsProductDetail> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/public/products/${id}`);
    return j(res);
  }) as Promise<ApiOk<VsolDcsProductDetail> | ApiErr>;
}

export async function apiVsolAdminProducts(
  p: ListParams = {},
): Promise<ApiOk<VsolDcsProduct[]> | ApiErr> {
  return safe(async () => {
    const q = new URLSearchParams();
    if (p.category) q.set("category", p.category);
    if (p.sort) q.set("sort", p.sort);
    const res = await fetch(`${BASE}/admin/products?${q.toString()}`, {
      credentials: "include",
    });
    return j(res);
  }) as Promise<ApiOk<VsolDcsProduct[]> | ApiErr>;
}

export async function apiVsolAdminProduct(
  id: number,
): Promise<ApiOk<VsolDcsProductDetail> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/admin/products/${id}`, { credentials: "include" });
    return j(res);
  }) as Promise<ApiOk<VsolDcsProductDetail> | ApiErr>;
}

export async function apiVsolCreateProduct(
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

export async function apiVsolUpdateProduct(
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

export async function apiVsolDeleteProduct(
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

export async function apiVsolReorderProducts(
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
