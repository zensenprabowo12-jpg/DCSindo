import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { mysqlPool } from "../config/mysqlPool";
import {
  isValidMikrotikDcsCategory,
  toCanonicalMikrotikDcsCategory,
  type MikrotikDcsCategory,
} from "../mikrotikDcs/categories";

export type MikrotikDcsProductRow = {
  id: number;
  nama_produk: string;
  sku: string;
  category: string;
  deskripsi: string;
  bullet_points: string[]; // parsed from JSON
  main_image: string;
  created_at: Date;
  updated_at: Date;
};

export type MikrotikDcsProductWithGallery = MikrotikDcsProductRow & {
  gallery: { id: number; image_path: string; sort_order: number }[];
};

function mapProduct(r: RowDataPacket): MikrotikDcsProductRow {
  let bullets: string[] = [];
  try {
    const raw = r.bullet_points;
    if (Array.isArray(raw)) bullets = raw.map(String);
    else if (typeof raw === "string") {
      const j = JSON.parse(raw) as unknown;
      if (Array.isArray(j)) bullets = j.map(String);
    }
  } catch {
    bullets = [];
  }
  return {
    id: r.id,
    nama_produk: r.nama_produk,
    sku: r.sku,
    category: r.category,
    deskripsi: r.deskripsi,
    bullet_points: bullets,
    main_image: r.main_image ?? "",
    created_at: r.created_at,
    updated_at: r.updated_at,
  };
}

export async function listMikrotikDcsProducts(
  options: {
    category?: string | null;
    sort: "latest" | "oldest";
  } = { sort: "latest" },
): Promise<MikrotikDcsProductRow[]> {
  const raw = options.category?.trim() || null;
  const order = options.sort === "oldest" ? "ASC" : "DESC";
  if (raw && !isValidMikrotikDcsCategory(raw)) {
    return [];
  }
  const canonical = raw ? toCanonicalMikrotikDcsCategory(raw) : null;
  const where = canonical
    ? "WHERE `category` = :category"
    : "";
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, nama_produk, sku, category, deskripsi, bullet_points, main_image, created_at, updated_at
     FROM mikrotik_dcs_products
     ${where}
     ORDER BY created_at ${order}, id ${order}`,
    canonical ? { category: canonical } : {},
  );
  return rows.map(mapProduct);
}

export async function getMikrotikDcsProductById(
  id: number,
): Promise<MikrotikDcsProductWithGallery | null> {
  const [pRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, nama_produk, sku, category, deskripsi, bullet_points, main_image, created_at, updated_at
     FROM mikrotik_dcs_products WHERE id = :id LIMIT 1`,
    { id },
  );
  if (!pRows.length) return null;
  const product = mapProduct(pRows[0]);

  const [gRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, image_path, sort_order
     FROM mikrotik_dcs_product_gallery_images
     WHERE product_id = :id
     ORDER BY sort_order ASC, id ASC`,
    { id },
  );
  return {
    ...product,
    gallery: gRows.map((g) => ({
      id: g.id,
      image_path: g.image_path,
      sort_order: g.sort_order ?? 0,
    })),
  };
}

export async function createMikrotikDcsProduct(data: {
  nama_produk: string;
  sku: string;
  category: MikrotikDcsCategory;
  deskripsi: string;
  bullet_points: string[];
  main_image: string;
  galleryPaths: string[];
}): Promise<number> {
  const connection = await mysqlPool.getConnection();
  try {
    await connection.beginTransaction();
    const bulletJson = JSON.stringify(data.bullet_points.slice(0, 9));
    const [res] = await connection.query<ResultSetHeader>(
      `INSERT INTO mikrotik_dcs_products
       (nama_produk, sku, category, deskripsi, bullet_points, main_image)
       VALUES (:nama, :sku, :cat, :des, :bullets, :main)`,
      {
        nama: data.nama_produk.trim(),
        sku: data.sku.trim(),
        cat: data.category,
        des: data.deskripsi.trim(),
        bullets: bulletJson,
        main: data.main_image,
      },
    );
    const id = (res as ResultSetHeader).insertId;
    for (let i = 0; i < data.galleryPaths.length; i++) {
      await connection.query(
        `INSERT INTO mikrotik_dcs_product_gallery_images (product_id, image_path, sort_order) VALUES (:pid, :path, :ord)`,
        { pid: id, path: data.galleryPaths[i], ord: i },
      );
    }
    await connection.commit();
    return id;
  } catch (e) {
    await connection.rollback();
    throw e;
  } finally {
    connection.release();
  }
}

export async function updateMikrotikDcsProduct(
  id: number,
  data: {
    nama_produk: string;
    sku: string;
    category: MikrotikDcsCategory;
    deskripsi: string;
    bullet_points: string[];
    main_image: string;
    galleryPaths: { keepExisting: string[]; newUploads: string[] };
  },
): Promise<void> {
  const connection = await mysqlPool.getConnection();
  try {
    await connection.beginTransaction();
    const bulletJson = JSON.stringify(data.bullet_points.slice(0, 9));
    await connection.query(
      `UPDATE mikrotik_dcs_products SET
         nama_produk = :nama,
         sku = :sku,
         category = :cat,
         deskripsi = :des,
         bullet_points = :bullets,
         main_image = :main
       WHERE id = :id`,
      {
        nama: data.nama_produk.trim(),
        sku: data.sku.trim(),
        cat: data.category,
        des: data.deskripsi.trim(),
        bullets: bulletJson,
        main: data.main_image,
        id,
      },
    );

    await connection.query(
      `DELETE FROM mikrotik_dcs_product_gallery_images WHERE product_id = :id`,
      { id },
    );
    const ordered = [...data.galleryPaths.keepExisting, ...data.galleryPaths.newUploads];
    for (let i = 0; i < ordered.length; i++) {
      await connection.query(
        `INSERT INTO mikrotik_dcs_product_gallery_images (product_id, image_path, sort_order) VALUES (:pid, :path, :ord)`,
        { pid: id, path: ordered[i], ord: i },
      );
    }
    await connection.commit();
  } catch (e) {
    await connection.rollback();
    throw e;
  } finally {
    connection.release();
  }
}

export async function deleteMikrotikDcsProductById(id: number): Promise<boolean> {
  const [r] = await mysqlPool.query<ResultSetHeader>(
    `DELETE FROM mikrotik_dcs_products WHERE id = :id`,
    { id },
  );
  return (r as ResultSetHeader).affectedRows > 0;
}
