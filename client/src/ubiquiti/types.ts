export interface ApiOk<T> {
  ok: true;
  data: T;
}

export interface ApiErr {
  ok: false;
  message: string;
}

export interface UbiquitiDcsProduct {
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

export interface UbiquitiGalleryImage {
  id: number;
  image_path: string;
  sort_order: number;
}

export interface UbiquitiOverviewImage {
  id: number;
  image_path: string;
  sort_order: number;
}

export interface UbiquitiOverviewVideo {
  id: number;
  video_path: string;
  sort_order: number;
}

export interface UbiquitiTechnicalSpec {
  id: number;
  section_title: string;
  label: string;
  value: string;
  is_check: boolean;
  sort_order: number;
}

export interface UbiquitiInTheBox {
  id: number;
  image_path: string;
  sort_order: number;
}

export interface UbiquitiAddon {
  id: number;
  addon_product_id: number;
  addon_product: UbiquitiDcsProduct;
  sort_order: number;
}

export interface UbiquitiDcsProductDetail extends UbiquitiDcsProduct {
  gallery: UbiquitiGalleryImage[];
  overview_images: UbiquitiOverviewImage[];
  overview_videos: UbiquitiOverviewVideo[];
  technical_specs: UbiquitiTechnicalSpec[];
  in_the_box: UbiquitiInTheBox[];
  addons: UbiquitiAddon[];
}
