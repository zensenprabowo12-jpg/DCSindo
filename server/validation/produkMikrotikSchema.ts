import { z } from "zod";

/** Field teks dari multipart (semua string); harga dikosongkan = null */
export const produkMikrotikBodySchema = z
  .object({
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
      nama_produk: data.nama_produk,
      deskripsi: data.deskripsi,
      spesifikasi: data.spesifikasi,
      harga,
    };
  });

export type ParsedProdukMikrotikBody = z.output<typeof produkMikrotikBodySchema>;

export function formatZodIssues(err: z.ZodError): string {
  return err.issues.map((i) => i.message).join("; ");
}

export const idParamSchema = z.coerce.number().int().positive("ID tidak valid");
