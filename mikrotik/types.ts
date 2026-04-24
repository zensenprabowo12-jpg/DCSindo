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
};

export type ApiOk<T> = { ok: true; data: T };
export type ApiErr = { ok: false; message: string };
