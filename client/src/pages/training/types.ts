export type TrainingBrand = "MikroTik" | "Ubiquiti" | "V-SOL" | "General";
export type TrainingFormat = "Online" | "Offline" | "Hybrid";
export type TrainingStatus = "Upcoming" | "Ongoing" | "Completed";

export type TrainingSession = {
  id: number;
  title: string;
  description: string | null;
  brand: TrainingBrand;
  format: TrainingFormat;
  location: string | null;
  start_datetime: string;
  end_datetime: string;
  duration_hours: number | null;
  capacity: number | null;
  price: number | null;
  is_free: boolean;
  has_certificate: boolean;
  has_hands_on_lab: boolean;
  instructor_name: string | null;
  instructor_contact: string | null;
  thumbnail: string | null;
  qr_image: string | null;
  custom_link_url: string | null;
  custom_link_label: string | null;
  status: TrainingStatus;
  created_at: string;
  updated_at: string;
  /** Ringkasan dokumentasi (foto pertama + jumlah) — diisi di daftar training. */
  doc_cover?: string | null;
  doc_count?: number;
};

export type TrainingGalleryItem = {
  id: number;
  image_path: string;
  caption: string | null;
};

export type TrainingSessionDetail = TrainingSession & {
  syllabus: { id: number; item: string; sort_order: number }[];
  gallery: TrainingGalleryItem[];
};

// Brand accent colors
export const BRAND_COLOR: Record<TrainingBrand, string> = {
  MikroTik: "#FF6B35",
  Ubiquiti: "#0082FF",
  "V-SOL":  "#22c55e",
  General:  "#6366f1",
};

export const BRAND_BG: Record<TrainingBrand, string> = {
  MikroTik: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  Ubiquiti: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  "V-SOL":  "bg-green-500/10 text-green-400 border-green-500/30",
  General:  "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
};

export const STATUS_BG: Record<TrainingStatus, string> = {
  Upcoming:  "bg-sky-500/10 text-sky-400 border-sky-500/30",
  Ongoing:   "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  Completed: "bg-zinc-500/10 text-zinc-400 border-zinc-500/30",
};

export async function apiFetchTrainingSessions(opts: {
  brand?: string;
  status?: string;
  format?: string;
  hands_on?: boolean;
} = {}): Promise<TrainingSession[]> {
  const q = new URLSearchParams();
  if (opts.brand) q.set("brand", opts.brand);
  if (opts.status) q.set("status", opts.status);
  if (opts.format) q.set("format", opts.format);
  if (opts.hands_on) q.set("hands_on", "1");
  const res = await fetch(`/api/training/sessions?${q.toString()}`);
  const json = await res.json() as { ok: boolean; data?: TrainingSession[] };
  return json.ok && json.data ? json.data : [];
}

export async function apiFetchTrainingSession(id: number): Promise<TrainingSessionDetail | null> {
  const res = await fetch(`/api/training/sessions/${id}`);
  const json = await res.json() as { ok: boolean; data?: TrainingSessionDetail };
  return json.ok && json.data ? json.data : null;
}

export type TrainingAvailability = {
  capacity: number | null;
  registered: number;
  remaining: number | null;
  status: TrainingStatus;
  open: boolean;
};

export async function apiTrainingAvailability(id: number): Promise<TrainingAvailability | null> {
  try {
    const res = await fetch(`/api/training/${id}/availability`);
    const json = (await res.json()) as { ok: boolean; data?: TrainingAvailability };
    return json.ok && json.data ? json.data : null;
  } catch {
    return null;
  }
}

export type RegisterInput = {
  full_name: string;
  email: string;
  phone: string;
  company?: string;
};

export async function apiRegisterTraining(
  id: number,
  input: RegisterInput,
): Promise<{ ok: boolean; message?: string }> {
  try {
    const res = await fetch(`/api/training/${id}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    return (await res.json()) as { ok: boolean; message?: string };
  } catch {
    return { ok: false, message: "Koneksi ke server gagal" };
  }
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric", month: "long", year: "numeric",
  });
}

export function formatDatetime(iso: string): string {
  return new Date(iso).toLocaleString("id-ID", {
    day: "numeric", month: "long", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}
