import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { mysqlPool } from "../config/mysqlPool";

export type CatalogProductRow = {
  id: number;
  brand_id: number;
  nama_produk: string;
  deskripsi: string;
  spesifikasi: string;
  harga: string | null;
  gambar: string;
  created_at: Date;
};

export type CatalogProductWithBrandRow = CatalogProductRow & {
  nama_brand: string;
  brand_slug: string;
};

function mapProduct(r: RowDataPacket): CatalogProductWithBrandRow {
  return {
    id: r.id,
    brand_id: r.brand_id,
    nama_produk: r.nama_produk,
    deskripsi: r.deskripsi,
    spesifikasi: r.spesifikasi,
    harga: r.harga === null || r.harga === undefined ? null : String(r.harga),
    gambar: r.gambar ?? "",
    created_at: r.created_at,
    nama_brand: r.nama_brand,
    brand_slug: r.brand_slug,
  };
}

const selectWithJoin = `
  SELECT
    p.id,
    p.brand_id,
    p.nama_produk,
    p.deskripsi,
    p.spesifikasi,
    p.harga,
    p.gambar,
    p.created_at,
    b.nama_brand,
    b.slug AS brand_slug
  FROM products p
  INNER JOIN brands b ON b.id = p.brand_id
`;

/** Semua produk + nama brand (JOIN). Opsional filter slug brand (case-insensitive). */
export async function findAllCatalogProductsWithBrand(
  brandSlug?: string | null,
): Promise<CatalogProductWithBrandRow[]> {
  const slug = brandSlug?.trim() || null;
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    `${selectWithJoin}
     WHERE (:slug IS NULL OR LOWER(b.slug) = LOWER(:slug))
     ORDER BY p.created_at DESC, p.id DESC`,
    { slug },
  );
  return rows.map(mapProduct);
}

export async function findCatalogProductByIdWithBrand(
  id: number,
): Promise<CatalogProductWithBrandRow | null> {
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    `${selectWithJoin} WHERE p.id = :id LIMIT 1`,
    { id },
  );
  if (!rows.length) return null;
  return mapProduct(rows[0]);
}

export async function findCatalogProductById(
  id: number,
): Promise<CatalogProductRow | null> {
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, brand_id, nama_produk, deskripsi, spesifikasi, harga, gambar, created_at
     FROM products WHERE id = :id LIMIT 1`,
    { id },
  );
  if (!rows.length) return null;
  const r = rows[0];
  return {
    id: r.id,
    brand_id: r.brand_id,
    nama_produk: r.nama_produk,
    deskripsi: r.deskripsi,
    spesifikasi: r.spesifikasi,
    harga: r.harga === null ? null : String(r.harga),
    gambar: r.gambar ?? "",
    created_at: r.created_at,
  };
}

export type CatalogProductInput = {
  brand_id: number;
  nama_produk: string;
  deskripsi: string;
  spesifikasi: string;
  harga: number | null;
  gambar: string;
};

export async function insertCatalogProduct(input: CatalogProductInput): Promise<number> {
  const [result] = await mysqlPool.execute<ResultSetHeader>(
    `INSERT INTO products (brand_id, nama_produk, deskripsi, spesifikasi, harga, gambar)
     VALUES (:brand_id, :nama_produk, :deskripsi, :spesifikasi, :harga, :gambar)`,
    {
      brand_id: input.brand_id,
      nama_produk: input.nama_produk,
      deskripsi: input.deskripsi,
      spesifikasi: input.spesifikasi,
      harga: input.harga,
      gambar: input.gambar,
    },
  );
  return result.insertId;
}

export async function updateCatalogProduct(
  id: number,
  input: CatalogProductInput,
): Promise<boolean> {
  const [result] = await mysqlPool.execute<ResultSetHeader>(
    `UPDATE products SET
       brand_id = :brand_id,
       nama_produk = :nama_produk,
       deskripsi = :deskripsi,
       spesifikasi = :spesifikasi,
       harga = :harga,
       gambar = :gambar
     WHERE id = :id`,
    {
      id,
      brand_id: input.brand_id,
      nama_produk: input.nama_produk,
      deskripsi: input.deskripsi,
      spesifikasi: input.spesifikasi,
      harga: input.harga,
      gambar: input.gambar,
    },
  );
  return result.affectedRows > 0;
}

export async function deleteCatalogProduct(id: number): Promise<boolean> {
  const [result] = await mysqlPool.execute<ResultSetHeader>(
    "DELETE FROM products WHERE id = :id",
    { id },
  );
  return result.affectedRows > 0;
}
