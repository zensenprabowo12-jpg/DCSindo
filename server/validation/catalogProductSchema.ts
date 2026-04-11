import { z } from "zod";

/** Multipart / JSON string fields */
export const catalogProductBodySchema = z
  .object({
    brand_id: z.coerce.number().int().positive("Brand wajib dipilih"),
    nama_produk: z
      .string()
      .trim()
      .min(1, "Nama produk wajib diisi")
      .max(255, "Nama produk maksimal 255 karakter"),
    deskripsi: z.string().trim().min(1, "Deskripsi wajib diisi"),
    spesifikasi: z.string().trim().min(1, "Spesifikasi wajib diisi"),
    harga: z.string().optional(),
  })
  .transform((data) => {
    const hStr = (data.harga ?? "").trim();
    let harga: number | null = null;
    if (hStr !== "") {
      if (!/^-?\d+(\.\d{1,2})?$/.test(hStr)) {
        throw new z.ZodError([
          {
            code: "custom",
            message: "Harga harus angka (contoh: 1500000 atau 99.99)",
            path: ["harga"],
          },
        ]);
      }
      harga = Number(hStr);
    }
    return {
      brand_id: data.brand_id,
      nama_produk: data.nama_produk,
      deskripsi: data.deskripsi,
      spesifikasi: data.spesifikasi,
      harga,
    };
  });

export type ParsedCatalogProductBody = z.output<typeof catalogProductBodySchema>;

export function formatZodIssues(err: z.ZodError): string {
  return err.issues.map((i) => i.message).join("; ");
}

export const idParamSchema = z.coerce.number().int().positive("ID tidak valid");
