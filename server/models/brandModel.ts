import type { RowDataPacket } from "mysql2";
import { mysqlPool } from "../config/mysqlPool";

export type BrandRow = {
  id: number;
  nama_brand: string;
  slug: string;
  created_at: Date;
};

function mapBrand(r: RowDataPacket): BrandRow {
  return {
    id: r.id,
    nama_brand: r.nama_brand,
    slug: r.slug,
    created_at: r.created_at,
  };
}

export async function findAllBrands(): Promise<BrandRow[]> {
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    "SELECT id, nama_brand, slug, created_at FROM brands ORDER BY nama_brand ASC",
  );
  return rows.map(mapBrand);
}

export async function findBrandBySlug(slug: string): Promise<BrandRow | null> {
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    "SELECT id, nama_brand, slug, created_at FROM brands WHERE LOWER(slug) = LOWER(:slug) LIMIT 1",
    { slug: slug.trim() },
  );
  if (!rows.length) return null;
  return mapBrand(rows[0]);
}

export async function findBrandById(id: number): Promise<BrandRow | null> {
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    "SELECT id, nama_brand, slug, created_at FROM brands WHERE id = :id LIMIT 1",
    { id },
  );
  if (!rows.length) return null;
  return mapBrand(rows[0]);
}

export async function brandIdExists(id: number): Promise<boolean> {
  const b = await findBrandById(id);
  return b !== null;
}
