import { z } from "zod";

/** Multipart — field harga tidak dipakai (katalog tanpa e-commerce). */
export const catalogProductBodySchema = z.object({
  brand_id: z.coerce.number().int().positive("Brand wajib dipilih"),
  nama_produk: z
    .string()
    .trim()
    .min(1, "Nama produk wajib diisi")
    .max(255, "Nama produk maksimal 255 karakter"),
  deskripsi: z.string().trim().min(1, "Deskripsi wajib diisi"),
  spesifikasi: z.string().trim().min(1, "Spesifikasi wajib diisi"),
});

export type ParsedCatalogProductBody = z.infer<typeof catalogProductBodySchema>;

export function formatZodIssues(err: z.ZodError): string {
  return err.issues.map((i) => i.message).join("; ");
}

export const idParamSchema = z.coerce.number().int().positive("ID tidak valid");
