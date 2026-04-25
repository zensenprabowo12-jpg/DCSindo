export type MikrotikDcsProduct = {
  id: number;
  nama_produk: string;
  sku: string;
  category: string;
  deskripsi: string;
  bullet_points: string[];
  main_image: string;
  created_at: string;
  updated_at: string;
};

export type MikrotikDcsProductDetail = MikrotikDcsProduct & {
  gallery: { id: number; image_path: string; sort_order: number }[];
  // Optional extras (bisa ditambah dari DB nantinya)
  video_url?: string | null;
  video_title?: string | null;
  video_description?: string | null;
  specifications?: Record<string, string> | null;
};

export type ApiOk<T> = { ok: true; data: T };
export type ApiErr = { ok: false; message: string };
