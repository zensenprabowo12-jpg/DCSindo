export type MikrotikSpecificationItem = {
  label: string;
  value: string;
};

export type MikrotikSpecificationSection = {
  title: string;
  items: MikrotikSpecificationItem[];
};

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
  technical_items?: { id: number; title: string; content: string; sort_order: number }[];
  // Optional extras (bisa ditambah dari DB nantinya)
  video_url?: string | null;
  video_title?: string | null;
  video_description?: string | null;
  specifications?: MikrotikSpecificationSection[] | null;
};

export type ApiOk<T> = { ok: true; data: T };
export type ApiErr = { ok: false; message: string };
