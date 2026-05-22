import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { mysqlPool } from "../config/mysqlPool";
import {
  isValidUbiquitiDcsCategory,
  toCanonicalUbiquitiDcsCategory,
  type UbiquitiDcsCategory,
} from "../../client/src/ubiquiti/categories";

// ─── TYPES ───────────────────────────────────────────────────
export type UbiquitiDcsProductRow = {
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

export type UbiquitiDcsProductWithRelations = UbiquitiDcsProductRow & {
  gallery: { id: number; image_path: string; sort_order: number }[];
  overview_images: { id: number; image_path: string; sort_order: number }[];
  overview_videos: { id: number; video_path: string; sort_order: number }[];
  technical_specs: { id: number; section_title: string; label: string; value: string; is_check: boolean; sort_order: number }[];
  in_the_box: { id: number; image_path: string; sort_order: number }[];
  addons: { id: number; addon_product_id: number; addon_product: UbiquitiDcsProductRow; sort_order: number }[];
};

// ─── MAP HELPER ──────────────────────────────────────────────
function mapProduct(r: RowDataPacket): UbiquitiDcsProductRow {
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
export async function listUbiquitiDcsProducts(
  options: { category?: string | null; sort: "latest" | "oldest" | "custom" } = { sort: "latest" },
): Promise<UbiquitiDcsProductRow[]> {
  const raw = options.category?.trim() || null;
  if (raw && !isValidUbiquitiDcsCategory(raw)) return [];
  const canonical = raw ? toCanonicalUbiquitiDcsCategory(raw) : null;
  const where = canonical ? "WHERE `category` = :category" : "";
  const orderBy = options.sort === "custom"
    ? "ORDER BY sort_order ASC, created_at DESC, id DESC"
    : options.sort === "oldest"
    ? "ORDER BY created_at ASC, id ASC"
    : "ORDER BY created_at DESC, id DESC";
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, nama_produk, sku, category, subfilter, deskripsi, bullet_points,
            main_image, is_new, sort_order, created_at, updated_at
     FROM ubiquiti_dcs_products ${where} ${orderBy}`,
    canonical ? { category: canonical } : {},
  );
  return rows.map(mapProduct);
}

// ─── GET BY ID ────────────────────────────────────────────────
export async function getUbiquitiDcsProductById(
  id: number,
): Promise<UbiquitiDcsProductWithRelations | null> {
  const [pRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, nama_produk, sku, category, subfilter, deskripsi, bullet_points,
            main_image, is_new, sort_order, created_at, updated_at
     FROM ubiquiti_dcs_products WHERE id = :id LIMIT 1`,
    { id },
  );
  if (!pRows.length) return null;
  const product = mapProduct(pRows[0]);

  const [gRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, image_path, sort_order FROM ubiquiti_dcs_product_gallery
     WHERE product_id = :id ORDER BY sort_order ASC, id ASC`, { id },
  );
  const [oiRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, image_path, sort_order FROM ubiquiti_dcs_overview_images
     WHERE product_id = :id ORDER BY sort_order ASC, id ASC`, { id },
  );
  const [ovRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, video_path, sort_order FROM ubiquiti_dcs_overview_videos
     WHERE product_id = :id ORDER BY sort_order ASC, id ASC`, { id },
  );
  const [tsRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, section_title, label, value, is_check, sort_order
     FROM ubiquiti_dcs_technical_specs
     WHERE product_id = :id ORDER BY sort_order ASC, id ASC`, { id },
  );
  const [ibRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, image_path, sort_order FROM ubiquiti_dcs_in_the_box
     WHERE product_id = :id ORDER BY sort_order ASC, id ASC`, { id },
  );
  const [adRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT a.id, a.addon_product_id, a.sort_order,
            p.id as p_id, p.nama_produk, p.sku, p.category, p.subfilter,
            p.deskripsi, p.bullet_points, p.main_image, p.is_new, p.sort_order as p_sort,
            p.created_at, p.updated_at
     FROM ubiquiti_dcs_addons a
     LEFT JOIN ubiquiti_dcs_products p ON p.id = a.addon_product_id
     WHERE a.product_id = :id ORDER BY a.sort_order ASC, a.id ASC`, { id },
  );

  return {
    ...product,
    gallery: gRows.map((g) => ({ id: g.id, image_path: g.image_path, sort_order: g.sort_order ?? 0 })),
    overview_images: oiRows.map((r) => ({ id: r.id, image_path: r.image_path, sort_order: r.sort_order ?? 0 })),
    overview_videos: ovRows.map((r) => ({ id: r.id, video_path: r.video_path, sort_order: r.sort_order ?? 0 })),
    technical_specs: tsRows.map((r) => ({
      id: r.id,
      section_title: String(r.section_title ?? ""),
      label: String(r.label ?? ""),
      value: String(r.value ?? ""),
      is_check: Boolean(r.is_check),
      sort_order: r.sort_order ?? 0,
    })),
    in_the_box: ibRows.map((r) => ({ id: r.id, image_path: r.image_path, sort_order: r.sort_order ?? 0 })),
    addons: adRows.map((r) => ({
      id: r.id,
      addon_product_id: r.addon_product_id,
      sort_order: r.sort_order ?? 0,
      addon_product: {
        id: r.p_id,
        nama_produk: r.nama_produk,
        sku: r.sku,
        category: r.category,
        subfilter: r.subfilter ?? null,
        deskripsi: r.deskripsi,
        bullet_points: (() => { try { const j = JSON.parse(r.bullet_points); return Array.isArray(j) ? j.map(String) : []; } catch { return []; } })(),
        main_image: r.main_image ?? "",
        is_new: Boolean(r.is_new),
        sort_order: r.p_sort ?? 0,
        created_at: r.created_at,
        updated_at: r.updated_at,
      },
    })),
  };
}
type CreateUbiquitiData = {
  nama_produk: string;
  sku: string;
  category: UbiquitiDcsCategory;
  subfilter?: string | null;
  deskripsi: string;
  bullet_points: string[];
  main_image: string;
  is_new: boolean;
  galleryPaths: string[];
  overviewImagePaths: string[];
  overviewVideoPaths: string[];
  technicalSpecs: { section_title: string; label: string; value: string; is_check: boolean; sort_order: number }[];
  inTheBoxPaths: string[];
  addonIds: number[];
};

export async function createUbiquitiDcsProduct(data: CreateUbiquitiData): Promise<number> {
  const connection = await mysqlPool.getConnection();
  try {
    await connection.beginTransaction();
    const [ordRows] = await connection.query<RowDataPacket[]>(
      `SELECT COALESCE(MAX(sort_order), -1) AS max_ord FROM ubiquiti_dcs_products WHERE category = :cat`,
      { cat: data.category },
    );
    const nextOrder = Number(ordRows?.[0]?.max_ord ?? -1) + 1;
    const bulletJson = JSON.stringify(data.bullet_points.slice(0, 9));
    const [res] = await connection.query<ResultSetHeader>(
      `INSERT INTO ubiquiti_dcs_products
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
      await connection.query(`INSERT INTO ubiquiti_dcs_product_gallery (product_id, image_path, sort_order) VALUES (:pid, :path, :ord)`, { pid: id, path: data.galleryPaths[i], ord: i });

    for (let i = 0; i < data.overviewImagePaths.length; i++)
      await connection.query(`INSERT INTO ubiquiti_dcs_overview_images (product_id, image_path, sort_order) VALUES (:pid, :path, :ord)`, { pid: id, path: data.overviewImagePaths[i], ord: i });

    for (let i = 0; i < data.overviewVideoPaths.length; i++)
      await connection.query(`INSERT INTO ubiquiti_dcs_overview_videos (product_id, video_path, sort_order) VALUES (:pid, :path, :ord)`, { pid: id, path: data.overviewVideoPaths[i], ord: i });

    for (const spec of data.technicalSpecs)
      await connection.query(
        `INSERT INTO ubiquiti_dcs_technical_specs (product_id, section_title, label, value, is_check, sort_order) VALUES (:pid, :st, :lbl, :val, :chk, :ord)`,
        { pid: id, st: spec.section_title, lbl: spec.label, val: spec.value, chk: spec.is_check ? 1 : 0, ord: spec.sort_order },
      );

    for (let i = 0; i < data.inTheBoxPaths.length; i++)
      await connection.query(`INSERT INTO ubiquiti_dcs_in_the_box (product_id, image_path, sort_order) VALUES (:pid, :path, :ord)`, { pid: id, path: data.inTheBoxPaths[i], ord: i });

    for (let i = 0; i < data.addonIds.length; i++)
      await connection.query(`INSERT INTO ubiquiti_dcs_addons (product_id, addon_product_id, sort_order) VALUES (:pid, :aid, :ord)`, { pid: id, aid: data.addonIds[i], ord: i });

    await connection.commit();
    return id;
  } catch (e) { await connection.rollback(); throw e; }
  finally { connection.release(); }
}

type UpdateUbiquitiData = Omit<CreateUbiquitiData, "galleryPaths" | "overviewImagePaths" | "overviewVideoPaths" | "inTheBoxPaths"> & {
  galleryPaths: { keepExisting: string[]; newUploads: string[] };
  overviewImagePaths: { keepExisting: string[]; newUploads: string[] };
  overviewVideoPaths: { keepExisting: string[]; newUploads: string[] };
  inTheBoxPaths: { keepExisting: string[]; newUploads: string[] };
};

export async function updateUbiquitiDcsProduct(id: number, data: UpdateUbiquitiData): Promise<void> {
  const connection = await mysqlPool.getConnection();
  try {
    await connection.beginTransaction();
    const bulletJson = JSON.stringify(data.bullet_points.slice(0, 9));
    await connection.query(
      `UPDATE ubiquiti_dcs_products SET
         nama_produk = :nama, sku = :sku, category = :cat, subfilter = :sub,
         deskripsi = :des, bullet_points = :bullets, main_image = :main, is_new = :isnew
       WHERE id = :id`,
      {
        nama: data.nama_produk.trim(), sku: data.sku.trim(), cat: data.category,
        sub: data.subfilter?.trim() || null, des: data.deskripsi.trim(),
        bullets: bulletJson, main: data.main_image, isnew: data.is_new ? 1 : 0, id,
      },
    );

    // Gallery
    await connection.query(`DELETE FROM ubiquiti_dcs_product_gallery WHERE product_id = :id`, { id });
    const orderedGallery = [...data.galleryPaths.keepExisting, ...data.galleryPaths.newUploads];
    for (let i = 0; i < orderedGallery.length; i++)
      await connection.query(`INSERT INTO ubiquiti_dcs_product_gallery (product_id, image_path, sort_order) VALUES (:pid, :path, :ord)`, { pid: id, path: orderedGallery[i], ord: i });

    // Overview images
    await connection.query(`DELETE FROM ubiquiti_dcs_overview_images WHERE product_id = :id`, { id });
    const orderedOvImg = [...data.overviewImagePaths.keepExisting, ...data.overviewImagePaths.newUploads];
    for (let i = 0; i < orderedOvImg.length; i++)
      await connection.query(`INSERT INTO ubiquiti_dcs_overview_images (product_id, image_path, sort_order) VALUES (:pid, :path, :ord)`, { pid: id, path: orderedOvImg[i], ord: i });

    // Overview videos
    await connection.query(`DELETE FROM ubiquiti_dcs_overview_videos WHERE product_id = :id`, { id });
    const orderedOvVid = [...data.overviewVideoPaths.keepExisting, ...data.overviewVideoPaths.newUploads];
    for (let i = 0; i < orderedOvVid.length; i++)
      await connection.query(`INSERT INTO ubiquiti_dcs_overview_videos (product_id, video_path, sort_order) VALUES (:pid, :path, :ord)`, { pid: id, path: orderedOvVid[i], ord: i });

    // Technical specs
    await connection.query(`DELETE FROM ubiquiti_dcs_technical_specs WHERE product_id = :id`, { id });
    for (const spec of data.technicalSpecs)
      await connection.query(
        `INSERT INTO ubiquiti_dcs_technical_specs (product_id, section_title, label, value, is_check, sort_order) VALUES (:pid, :st, :lbl, :val, :chk, :ord)`,
        { pid: id, st: spec.section_title, lbl: spec.label, val: spec.value, chk: spec.is_check ? 1 : 0, ord: spec.sort_order },
      );

    // In the box
    await connection.query(`DELETE FROM ubiquiti_dcs_in_the_box WHERE product_id = :id`, { id });
    const orderedItb = [...data.inTheBoxPaths.keepExisting, ...data.inTheBoxPaths.newUploads];
    for (let i = 0; i < orderedItb.length; i++)
      await connection.query(`INSERT INTO ubiquiti_dcs_in_the_box (product_id, image_path, sort_order) VALUES (:pid, :path, :ord)`, { pid: id, path: orderedItb[i], ord: i });

    // Addons
    await connection.query(`DELETE FROM ubiquiti_dcs_addons WHERE product_id = :id`, { id });
    for (let i = 0; i < data.addonIds.length; i++)
      await connection.query(`INSERT INTO ubiquiti_dcs_addons (product_id, addon_product_id, sort_order) VALUES (:pid, :aid, :ord)`, { pid: id, aid: data.addonIds[i], ord: i });

    await connection.commit();
  } catch (e) { await connection.rollback(); throw e; }
  finally { connection.release(); }
}

export async function deleteUbiquitiDcsProductById(id: number): Promise<boolean> {
  const [r] = await mysqlPool.query<ResultSetHeader>(
    `DELETE FROM ubiquiti_dcs_products WHERE id = :id`, { id },
  );
  return (r as ResultSetHeader).affectedRows > 0;
}

export async function reorderUbiquitiDcsProducts(
  category: UbiquitiDcsCategory,
  orderedIds: number[],
): Promise<void> {
  const connection = await mysqlPool.getConnection();
  try {
    await connection.beginTransaction();
    const ids = orderedIds.filter((n) => Number.isFinite(n) && n > 0);
    if (!ids.length) { await connection.commit(); return; }
    const [rows] = await connection.query<RowDataPacket[]>(
      `SELECT id FROM ubiquiti_dcs_products WHERE category = :cat AND id IN (:ids)`,
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
      `UPDATE ubiquiti_dcs_products SET sort_order = CASE id ${caseSql} ELSE sort_order END
       WHERE category = ? AND id IN (${filtered.map(() => "?").join(",")})`,
      params,
    );
    await connection.commit();
  } catch (e) { await connection.rollback(); throw e; }
  finally { connection.release(); }
}
