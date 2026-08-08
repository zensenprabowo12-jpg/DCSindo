import type { ApiErr, ApiOk, FiberHomeProduct } from "./types";

const BASE = "/api/fiberhome-dcs";

async function j<T>(res: Response): Promise<T> {
  const contentType = res.headers.get("content-type") ?? "";
  const text = await res.text();
  const looksLikeHtml = /^\s*<!doctype html/i.test(text) || contentType.includes("text/html");
  if (looksLikeHtml) {
    throw new Error("API returned HTML instead of JSON. Pastikan server Express jalan (`npm run dev`).");
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

// ─── PUBLIC ───────────────────────────────────────────────────
export async function apiFiberHomeProducts(): Promise<ApiOk<FiberHomeProduct[]> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/products`);
    return j(res);
  }) as Promise<ApiOk<FiberHomeProduct[]> | ApiErr>;
}

/** `idOrSku` boleh ID numerik maupun SKU. */
export async function apiFiberHomeProduct(
  idOrSku: string | number,
): Promise<ApiOk<FiberHomeProduct> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/products/${encodeURIComponent(String(idOrSku))}`);
    return j(res);
  }) as Promise<ApiOk<FiberHomeProduct> | ApiErr>;
}

// ─── ADMIN ────────────────────────────────────────────────────
export async function apiFiberHomeCreate(
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

export async function apiFiberHomeUpdate(
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

export async function apiFiberHomeDelete(id: number): Promise<ApiOk<unknown> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/admin/products/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    return j(res);
  }) as Promise<ApiOk<unknown> | ApiErr>;
}

export async function apiFiberHomeAddGallery(
  productId: number,
  file: File,
): Promise<ApiOk<{ id: number; image_path: string }> | ApiErr> {
  return safe(async () => {
    const form = new FormData();
    form.append("image", file);
    const res = await fetch(`${BASE}/admin/products/${productId}/gallery`, {
      method: "POST",
      body: form,
      credentials: "include",
    });
    return j(res);
  }) as Promise<ApiOk<{ id: number; image_path: string }> | ApiErr>;
}

export async function apiFiberHomeDeleteGallery(
  galleryId: number,
): Promise<ApiOk<unknown> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/admin/gallery/${galleryId}`, {
      method: "DELETE",
      credentials: "include",
    });
    return j(res);
  }) as Promise<ApiOk<unknown> | ApiErr>;
}

export async function apiFiberHomeUploadDatasheet(
  productId: number,
  file: File,
): Promise<ApiOk<{ datasheet_path: string }> | ApiErr> {
  return safe(async () => {
    const form = new FormData();
    form.append("datasheet", file);
    const res = await fetch(`${BASE}/admin/products/${productId}/datasheet`, {
      method: "POST",
      body: form,
      credentials: "include",
    });
    return j(res);
  }) as Promise<ApiOk<{ datasheet_path: string }> | ApiErr>;
}

export async function apiFiberHomeReorder(
  orderedIds: number[],
): Promise<ApiOk<unknown> | ApiErr> {
  return safe(async () => {
    const res = await fetch(`${BASE}/admin/products/reorder`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ orderedIds }),
    });
    return j(res);
  }) as Promise<ApiOk<unknown> | ApiErr>;
}
