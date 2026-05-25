export interface ApiOk<T> {
  ok: true;
  data: T;
}

export interface ApiErr {
  ok: false;
  message: string;
}

export interface VsolDcsProduct {
  id: number;
  nama_produk: string;
  sku: string;
  category: string;
  subfilter: string | null;
  deskripsi: string;
  bullet_points: string[];
  main_image: string;
  is_new: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface VsolGalleryImage {
  id: number;
  image_path: string;
  sort_order: number;
}

export interface VsolTechnicalSpec {
  id: number;
  item: string;
  sub_item: string | null;
  value: string;
  sort_order: number;
}

export interface VsolOrderingInfo {
  id: number;
  product_name: string;
  product_description: string;
  power_configuration: string;
  accessories: string;
  sort_order: number;
}

export interface VsolInTheBox {
  id: number;
  image_path: string;
  sort_order: number;
}

export interface VsolDcsProductDetail extends VsolDcsProduct {
  gallery: VsolGalleryImage[];
  technical_specs: VsolTechnicalSpec[];
  ordering_info: VsolOrderingInfo[];
  in_the_box: VsolInTheBox[];
}
