export interface ApiOk<T> {
  ok: true;
  data: T;
}

export interface ApiErr {
  ok: false;
  message: string;
}

export interface FiberHomeGalleryImage {
  id: number;
  image_path: string;
  sort_order: number;
}

export interface FiberHomeSpec {
  id: number;
  label: string;
  value: string;
  /** Nama group untuk accordion di halaman detail. Default "Umum". */
  spec_group: string;
  sort_order: number;
}

export interface FiberHomeFeature {
  id: number;
  feature: string;
  sort_order: number;
}

export interface FiberHomeApplication {
  id: number;
  title: string;
  description: string;
  sort_order: number;
}

/** List & detail memakai bentuk yang sama — API selalu mengirim semua relasi. */
export interface FiberHomeProduct {
  id: number;
  sku: string;
  name: string;
  category: string;
  description: string;
  image_path: string;
  datasheet_path: string | null;
  sort_order: number;
  created_at: string;
  updated_at: string;
  gallery: FiberHomeGalleryImage[];
  technical_specs: FiberHomeSpec[];
  features: FiberHomeFeature[];
  applications: FiberHomeApplication[];
}

/** Baris spec di form admin (belum punya id dari DB). */
export interface FiberHomeSpecInput {
  label: string;
  value: string;
  spec_group: string;
}

/** Baris aplikasi di form admin (belum punya id dari DB). */
export interface FiberHomeApplicationInput {
  title: string;
  description: string;
}
