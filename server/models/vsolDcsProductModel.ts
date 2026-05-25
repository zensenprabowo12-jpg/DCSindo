import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { mysqlPool } from "../config/mysqlPool";
import {
  isValidVsolDcsCategory,
  toCanonicalVsolDcsCategory,
  type VsolDcsCategory,
} from "../../client/src/vsol/categories";

// ─── TYPES ───────────────────────────────────────────────────
export type VsolDcsProductRow = {
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
  created_at: Date;
  updated_at: Date;
};

export type VsolDcsProductWithRelations = VsolDcsProductRow & {
  gallery: { id: number; image_path: string; sort_order: number }[];
  technical_specs: { id: number; item: string; sub_item: string | null; value: string; sort_order: number }[];
  ordering_info: { id: number; product_name: string; product_description: string; power_configuration: string; accessories: string; sort_order: number }[];
  in_the_box: { id: number; image_path: string; sort_order: number }[];
};

// ─── MAP HELPER ──────────────────────────────────────────────
function mapProduct(r: RowDataPacket): VsolDcsProductRow {
  let bullets: string[] = [];
  try {
    const raw = r.bullet_points;
    if (Array.isArray(raw)) bullets = raw.map(String);
    else if (typeof raw === "string") {
      const j = JSON.parse(raw) as unknown;
      if (Array.isArray(j)) bullets = j.map(String);
    }
  } catch { bullets = []; }
  return {
    id: r.id,
    nama_produk: r.nama_produk,
    sku: r.sku,
    category: r.category,
    subfilter: r.subfilter ?? null,
    deskripsi: r.deskripsi,
    bullet_points: bullets,
    main_image: r.main_image ?? "",
    is_new: Boolean(r.is_new),
    sort_order: r.sort_order ?? 0,
    created_at: r.created_at,
    updated_at: r.updated_at,
  };
}

// ─── LIST ─────────────────────────────────────────────────────
export async function listVsolDcsProducts(
  options: { category?: string | null; sort: "latest" | "oldest" | "custom" } = { sort: "latest" },
): Promise<VsolDcsProductRow[]> {
  const raw = options.category?.trim() || null;
  if (raw && !isValidVsolDcsCategory(raw)) return [];
  const canonical = raw ? toCanonicalVsolDcsCategory(raw) : null;
  const where = canonical ? "WHERE `category` = :category" : "";
  const orderBy = options.sort === "custom"
    ? "ORDER BY sort_order ASC, created_at DESC, id DESC"
    : options.sort === "oldest"
    ? "ORDER BY created_at ASC, id ASC"
    : "ORDER BY created_at DESC, id DESC";
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, nama_produk, sku, category, subfilter, deskripsi, bullet_points,
            main_image, is_new, sort_order, created_at, updated_at
     FROM vsol_dcs_products ${where} ${orderBy}`,
    canonical ? { category: canonical } : {},
  );
  return rows.map(mapProduct);
}

// ─── GET BY ID ────────────────────────────────────────────────
export async function getVsolDcsProductById(
  id: number,
): Promise<VsolDcsProductWithRelations | null> {
  const [pRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, nama_produk, sku, category, subfilter, deskripsi, bullet_points,
            main_image, is_new, sort_order, created_at, updated_at
     FROM vsol_dcs_products WHERE id = :id LIMIT 1`,
    { id },
  );
  if (!pRows.length) return null;
  const product = mapProduct(pRows[0]);

  const [gRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, image_path, sort_order FROM vsol_dcs_product_gallery
     WHERE product_id = :id ORDER BY sort_order ASC, id ASC`, { id },
  );
  const [tsRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, item, sub_item, value, sort_order
     FROM vsol_dcs_technical_specs
     WHERE product_id = :id ORDER BY sort_order ASC, id ASC`, { id },
  );
  const [oiRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, product_name, product_description, power_configuration, accessories, sort_order
     FROM vsol_dcs_ordering_info
     WHERE product_id = :id ORDER BY sort_order ASC, id ASC`, { id },
  );
  const [ibRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, image_path, sort_order FROM vsol_dcs_in_the_box
     WHERE product_id = :id ORDER BY sort_order ASC, id ASC`, { id },
  );

  return {
    ...product,
    gallery: gRows.map((g) => ({ id: g.id, image_path: g.image_path, sort_order: g.sort_order ?? 0 })),
    technical_specs: tsRows.map((r) => ({
      id: r.id,
      item: String(r.item ?? ""),
      sub_item: r.sub_item != null ? String(r.sub_item) : null,
      value: String(r.value ?? ""),
      sort_order: r.sort_order ?? 0,
    })),
    ordering_info: oiRows.map((r) => ({
      id: r.id,
      product_name: String(r.product_name ?? ""),
      product_description: String(r.product_description ?? ""),
      power_configuration: String(r.power_configuration ?? ""),
      accessories: String(r.accessories ?? ""),
      sort_order: r.sort_order ?? 0,
    })),
    in_the_box: ibRows.map((r) => ({ id: r.id, image_path: r.image_path, sort_order: r.sort_order ?? 0 })),
  };
}

type TechSpecInput = { item: string; sub_item: string | null; value: string; sort_order: number };
type OrderingInfoInput = { product_name: string; product_description: string; power_configuration: string; accessories: string; sort_order: number };

type CreateVsolData = {
  nama_produk: string;
  sku: string;
  category: VsolDcsCategory;
  subfilter?: string | null;
  deskripsi: string;
  bullet_points: string[];
  main_image: string;
  is_new: boolean;
  galleryPaths: string[];
  technicalSpecs: TechSpecInput[];
  orderingInfo: OrderingInfoInput[];
  inTheBoxPaths: string[];
};

export async function createVsolDcsProduct(data: CreateVsolData): Promise<number> {
  const connection = await mysqlPool.getConnection();
  try {
    await connection.beginTransaction();
    const [ordRows] = await connection.query<RowDataPacket[]>(
      `SELECT COALESCE(MAX(sort_order), -1) AS max_ord FROM vsol_dcs_products WHERE category = :cat`,
      { cat: data.category },
    );
    const nextOrder = Number(ordRows?.[0]?.max_ord ?? -1) + 1;
    const bulletJson = JSON.stringify(data.bullet_points.slice(0, 9));
    const [res] = await connection.query<ResultSetHeader>(
      `INSERT INTO vsol_dcs_products
       (nama_produk, sku, category, subfilter, deskripsi, bullet_points, main_image, is_new, sort_order)
       VALUES (:nama, :sku, :cat, :sub, :des, :bullets, :main, :isnew, :ord)`,
      {
        nama: data.nama_produk.trim(), sku: data.sku.trim(), cat: data.category,
        sub: data.subfilter?.trim() || null, des: data.deskripsi.trim(),
        bullets: bulletJson, main: data.main_image, isnew: data.is_new ? 1 : 0, ord: nextOrder,
      },
    );
    const id = (res as ResultSetHeader).insertId;

    for (let i = 0; i < data.galleryPaths.length; i++)
      await connection.query(
        `INSERT INTO vsol_dcs_product_gallery (product_id, image_path, sort_order) VALUES (:pid, :path, :ord)`,
        { pid: id, path: data.galleryPaths[i], ord: i },
      );

    for (const spec of data.technicalSpecs)
      await connection.query(
        `INSERT INTO vsol_dcs_technical_specs (product_id, item, sub_item, value, sort_order) VALUES (:pid, :item, :sub, :val, :ord)`,
        { pid: id, item: spec.item, sub: spec.sub_item || null, val: spec.value, ord: spec.sort_order },
      );

    for (const row of data.orderingInfo)
      await connection.query(
        `INSERT INTO vsol_dcs_ordering_info (product_id, product_name, product_description, power_configuration, accessories, sort_order) VALUES (:pid, :pn, :pd, :pc, :acc, :ord)`,
        { pid: id, pn: row.product_name, pd: row.product_description, pc: row.power_configuration, acc: row.accessories, ord: row.sort_order },
      );

    for (let i = 0; i < data.inTheBoxPaths.length; i++)
      await connection.query(
        `INSERT INTO vsol_dcs_in_the_box (product_id, image_path, sort_order) VALUES (:pid, :path, :ord)`,
        { pid: id, path: data.inTheBoxPaths[i], ord: i },
      );

    await connection.commit();
    return id;
  } catch (e) { await connection.rollback(); throw e; }
  finally { connection.release(); }
}

type UpdateVsolData = Omit<CreateVsolData, "galleryPaths" | "inTheBoxPaths"> & {
  galleryPaths: { keepExisting: string[]; newUploads: string[] };
  inTheBoxPaths: { keepExisting: string[]; newUploads: string[] };
};

export async function updateVsolDcsProduct(id: number, data: UpdateVsolData): Promise<void> {
  const connection = await mysqlPool.getConnection();
  try {
    await connection.beginTransaction();
    const bulletJson = JSON.stringify(data.bullet_points.slice(0, 9));
    await connection.query(
      `UPDATE vsol_dcs_products SET
         nama_produk = :nama, sku = :sku, category = :cat, subfilter = :sub,
         deskripsi = :des, bullet_points = :bullets, main_image = :main, is_new = :isnew
       WHERE id = :id`,
      {
        nama: data.nama_produk.trim(), sku: data.sku.trim(), cat: data.category,
        sub: data.subfilter?.trim() || null, des: data.deskripsi.trim(),
        bullets: bulletJson, main: data.main_image, isnew: data.is_new ? 1 : 0, id,
      },
    );

    await connection.query(`DELETE FROM vsol_dcs_product_gallery WHERE product_id = :id`, { id });
    const orderedGallery = [...data.galleryPaths.keepExisting, ...data.galleryPaths.newUploads];
    for (let i = 0; i < orderedGallery.length; i++)
      await connection.query(
        `INSERT INTO vsol_dcs_product_gallery (product_id, image_path, sort_order) VALUES (:pid, :path, :ord)`,
        { pid: id, path: orderedGallery[i], ord: i },
      );

    await connection.query(`DELETE FROM vsol_dcs_technical_specs WHERE product_id = :id`, { id });
    for (const spec of data.technicalSpecs)
      await connection.query(
        `INSERT INTO vsol_dcs_technical_specs (product_id, item, sub_item, value, sort_order) VALUES (:pid, :item, :sub, :val, :ord)`,
        { pid: id, item: spec.item, sub: spec.sub_item || null, val: spec.value, ord: spec.sort_order },
      );

    await connection.query(`DELETE FROM vsol_dcs_ordering_info WHERE product_id = :id`, { id });
    for (const row of data.orderingInfo)
      await connection.query(
        `INSERT INTO vsol_dcs_ordering_info (product_id, product_name, product_description, power_configuration, accessories, sort_order) VALUES (:pid, :pn, :pd, :pc, :acc, :ord)`,
        { pid: id, pn: row.product_name, pd: row.product_description, pc: row.power_configuration, acc: row.accessories, ord: row.sort_order },
      );

    await connection.query(`DELETE FROM vsol_dcs_in_the_box WHERE product_id = :id`, { id });
    const orderedItb = [...data.inTheBoxPaths.keepExisting, ...data.inTheBoxPaths.newUploads];
    for (let i = 0; i < orderedItb.length; i++)
      await connection.query(
        `INSERT INTO vsol_dcs_in_the_box (product_id, image_path, sort_order) VALUES (:pid, :path, :ord)`,
        { pid: id, path: orderedItb[i], ord: i },
      );

    await connection.commit();
  } catch (e) { await connection.rollback(); throw e; }
  finally { connection.release(); }
}

export async function deleteVsolDcsProductById(id: number): Promise<boolean> {
  const [r] = await mysqlPool.query<ResultSetHeader>(
    `DELETE FROM vsol_dcs_products WHERE id = :id`, { id },
  );
  return (r as ResultSetHeader).affectedRows > 0;
}

export async function reorderVsolDcsProducts(
  category: VsolDcsCategory,
  orderedIds: number[],
): Promise<void> {
  const connection = await mysqlPool.getConnection();
  try {
    await connection.beginTransaction();
    const ids = orderedIds.filter((n) => Number.isFinite(n) && n > 0);
    if (!ids.length) { await connection.commit(); return; }
    const [rows] = await connection.query<RowDataPacket[]>(
      `SELECT id FROM vsol_dcs_products WHERE category = :cat AND id IN (:ids)`,
      { cat: category, ids },
    );
    const allowed = new Set(rows.map((r) => Number(r.id)));
    const filtered = ids.filter((id) => allowed.has(id));
    if (!filtered.length) { await connection.commit(); return; }
    const caseSql = filtered.map(() => "WHEN ? THEN ?").join(" ");
    const params: unknown[] = [];
    filtered.forEach((id, idx) => { params.push(id, idx); });
    params.push(category, ...filtered);
    await connection.query(
      `UPDATE vsol_dcs_products SET sort_order = CASE id ${caseSql} ELSE sort_order END
       WHERE category = ? AND id IN (${filtered.map(() => "?").join(",")})`,
      params,
    );
    await connection.commit();
  } catch (e) { await connection.rollback(); throw e; }
  finally { connection.release(); }
}
