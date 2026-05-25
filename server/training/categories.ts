export const TRAINING_BRANDS = ["MikroTik", "Ubiquiti", "V-SOL", "General"] as const;
export type TrainingBrand = (typeof TRAINING_BRANDS)[number];

export const TRAINING_FORMATS = ["Online", "Offline", "Hybrid"] as const;
export type TrainingFormat = (typeof TRAINING_FORMATS)[number];

export const TRAINING_STATUSES = ["Upcoming", "Ongoing", "Completed"] as const;
export type TrainingStatus = (typeof TRAINING_STATUSES)[number];

export function computeStatus(start: Date, end: Date): TrainingStatus {
  const now = new Date();
  if (now < start) return "Upcoming";
  if (now > end) return "Completed";
  return "Ongoing";
}
