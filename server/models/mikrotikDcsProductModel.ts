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
  sort_order?: number;
  deskripsi: string;
  bullet_points: string[]; // parsed from JSON
  main_image: string;
  video_url?: string | null;
  video_title?: string | null;
  video_description?: string | null;
  specifications?: { title: string; items: { label: string; value: string }[] }[] | null;
  created_at: Date;
  updated_at: Date;
};

export type MikrotikDcsProductWithGallery = MikrotikDcsProductRow & {
  gallery: { id: number; image_path: string; sort_order: number }[];
  technical_items: { id: number; title: string; content: string; sort_order: number }[];
};

function parseSpecificationsColumn(
  raw: unknown,
): { title: string; items: { label: string; value: string }[] }[] | null {
  if (raw == null) return null;
  let j: unknown;
  if (typeof raw === "string") {
    const s = raw.trim();
    if (!s) return null;
    try {
      j = JSON.parse(s) as unknown;
    } catch {
      return null;
    }
  } else if (Buffer.isBuffer(raw)) {
    try {
      j = JSON.parse(raw.toString("utf8")) as unknown;
    } catch {
      return null;
    }
  } else {
    j = raw;
  }
  if (Array.isArray(j)) {
    return j
      .map((section) => {
        if (!section || typeof section !== "object") return null;
        const s = section as Record<string, unknown>;
        const sectionTitle = String(s.title ?? "").trim();
        const rawItems = Array.isArray(s.items) ? s.items : [];
        const items = rawItems
          .map((entry) => {
            if (!entry || typeof entry !== "object") return null;
            const e = entry as Record<string, unknown>;
            const label = String(e.label ?? "").trim();
            const value = String(e.value ?? "").trim();
            if (!label || !value) return null;
            return { label, value };
          })
          .filter((item): item is { label: string; value: string } => Boolean(item));
        if (!sectionTitle || !items.length) return null;
        return { title: sectionTitle, items };
      })
      .filter(
        (
          section,
        ): section is { title: string; items: { label: string; value: string }[] } =>
          Boolean(section),
      );
  }
  if (j && typeof j === "object") {
    const legacyItems = Object.entries(j as Record<string, unknown>)
      .map(([k, v]) => ({
        label: String(k).trim(),
        value: v == null ? "" : String(v).trim(),
      }))
      .filter((entry) => entry.label && entry.value);
    return legacyItems.length ? [{ title: "SPECIFICATIONS", items: legacyItems }] : null;
  }
  return null;
}

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
  let specs: { title: string; items: { label: string; value: string }[] }[] | null = null;
  try {
    specs = parseSpecificationsColumn(r.specifications);
  } catch {
    specs = null;
  }
  return {
    id: r.id,
    nama_produk: r.nama_produk,
    sku: r.sku,
    category: r.category,
    sort_order: r.sort_order ?? 0,
    deskripsi: r.deskripsi,
    bullet_points: bullets,
    main_image: r.main_image ?? "",
    video_url: r.video_url ?? null,
    video_title: r.video_title ?? null,
    video_description: r.video_description ?? null,
    specifications: specs,
    created_at: r.created_at,
    updated_at: r.updated_at,
  };
}

export async function listMikrotikDcsProducts(
  options: {
    category?: string | null;
    sort: "latest" | "oldest" | "custom";
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
  const orderBy =
    options.sort === "custom"
      ? "ORDER BY sort_order ASC, created_at DESC, id DESC"
      : `ORDER BY created_at ${order}, id ${order}`;
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, nama_produk, sku, category, sort_order, deskripsi, bullet_points, main_image,
            video_url, video_title, video_description, specifications,
            created_at, updated_at
     FROM mikrotik_dcs_products
     ${where}
     ${orderBy}`,
    canonical ? { category: canonical } : {},
  );
  return rows.map(mapProduct);
}

export async function getMikrotikDcsProductById(
  id: number,
): Promise<MikrotikDcsProductWithGallery | null> {
  const [pRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, nama_produk, sku, category, sort_order, deskripsi, bullet_points, main_image,
            video_url, video_title, video_description, specifications,
            created_at, updated_at
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
  const [tRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, title, content, sort_order
     FROM mikrotik_dcs_product_technical_items
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
    technical_items: tRows.map((t) => ({
      id: t.id,
      title: String(t.title ?? ""),
      content: String(t.content ?? ""),
      sort_order: t.sort_order ?? 0,
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
  video_url?: string | null;
  video_title?: string | null;
  video_description?: string | null;
  specifications?: { title: string; items: { label: string; value: string }[] }[] | null;
  galleryPaths: string[];
  technicalItems?: { title: string; content: string; sort_order: number }[];
}): Promise<number> {
  const connection = await mysqlPool.getConnection();
  try {
    await connection.beginTransaction();
    const [ordRows] = await connection.query<RowDataPacket[]>(
      `SELECT COALESCE(MAX(sort_order), -1) AS max_ord
       FROM mikrotik_dcs_products
       WHERE category = :cat`,
      { cat: data.category },
    );
    const nextOrder = Number(ordRows?.[0]?.max_ord ?? -1) + 1;
    const bulletJson = JSON.stringify(data.bullet_points.slice(0, 9));
    const specsJson = data.specifications ? JSON.stringify(data.specifications) : null;
    const [res] = await connection.query<ResultSetHeader>(
      `INSERT INTO mikrotik_dcs_products
       (nama_produk, sku, category, sort_order, deskripsi, bullet_points, main_image,
        video_url, video_title, video_description, specifications)
       VALUES (:nama, :sku, :cat, :ord, :des, :bullets, :main,
               :vurl, :vtitle, :vdesc, :specs)`,
      {
        nama: data.nama_produk.trim(),
        sku: data.sku.trim(),
        cat: data.category,
        ord: nextOrder,
        des: data.deskripsi.trim(),
        bullets: bulletJson,
        main: data.main_image,
        vurl: data.video_url ?? null,
        vtitle: data.video_title ?? null,
        vdesc: data.video_description ?? null,
        specs: specsJson,
      },
    );
    const id = (res as ResultSetHeader).insertId;
    for (let i = 0; i < data.galleryPaths.length; i++) {
      await connection.query(
        `INSERT INTO mikrotik_dcs_product_gallery_images (product_id, image_path, sort_order) VALUES (:pid, :path, :ord)`,
        { pid: id, path: data.galleryPaths[i], ord: i },
      );
    }
    const technicalItems = (data.technicalItems ?? [])
      .map((x) => ({
        title: String(x.title ?? "").trim(),
        content: String(x.content ?? "").trim(),
        sort_order: Number.isFinite(x.sort_order) ? x.sort_order : 0,
      }))
      .filter((x) => x.title && x.content);
    for (let i = 0; i < technicalItems.length; i++) {
      await connection.query(
        `INSERT INTO mikrotik_dcs_product_technical_items (product_id, title, content, sort_order)
         VALUES (:pid, :title, :content, :ord)`,
        {
          pid: id,
          title: technicalItems[i].title,
          content: technicalItems[i].content,
          ord: i,
        },
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

export async function reorderMikrotikDcsProducts(
  category: MikrotikDcsCategory,
  orderedIds: number[],
): Promise<void> {
  const connection = await mysqlPool.getConnection();
  try {
    await connection.beginTransaction();

    const ids = orderedIds.filter((n) => Number.isFinite(n) && n > 0);
    if (!ids.length) {
      await connection.commit();
      return;
    }

    const [rows] = await connection.query<RowDataPacket[]>(
      `SELECT id FROM mikrotik_dcs_products
       WHERE category = :cat AND id IN (:ids)`,
      { cat: category, ids },
    );
    const allowed = new Set(rows.map((r) => Number(r.id)));
    const filtered = ids.filter((id) => allowed.has(id));
    if (!filtered.length) {
      await connection.commit();
      return;
    }

    const caseSql = filtered.map(() => "WHEN ? THEN ?").join(" ");
    const params: unknown[] = [];
    filtered.forEach((id, idx) => {
      params.push(id, idx);
    });
    params.push(category, ...filtered);

    await connection.query(
      `UPDATE mikrotik_dcs_products
       SET sort_order = CASE id ${caseSql} ELSE sort_order END
       WHERE category = ? AND id IN (${filtered.map(() => "?").join(",")})`,
      params,
    );

    await connection.commit();
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
    video_url?: string | null;
    video_title?: string | null;
    video_description?: string | null;
    specifications?: { title: string; items: { label: string; value: string }[] }[] | null;
    galleryPaths: { keepExisting: string[]; newUploads: string[] };
    technicalItems?: { title: string; content: string; sort_order: number }[];
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
         main_image = :main,
         video_url = :vurl,
         video_title = :vtitle,
         video_description = :vdesc,
         specifications = :specs
       WHERE id = :id`,
      {
        nama: data.nama_produk.trim(),
        sku: data.sku.trim(),
        cat: data.category,
        des: data.deskripsi.trim(),
        bullets: bulletJson,
        main: data.main_image,
        vurl: data.video_url ?? null,
        vtitle: data.video_title ?? null,
        vdesc: data.video_description ?? null,
        specs: data.specifications ? JSON.stringify(data.specifications) : null,
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
    await connection.query(
      `DELETE FROM mikrotik_dcs_product_technical_items WHERE product_id = :id`,
      { id },
    );
    const technicalItems = (data.technicalItems ?? [])
      .map((x) => ({
        title: String(x.title ?? "").trim(),
        content: String(x.content ?? "").trim(),
        sort_order: Number.isFinite(x.sort_order) ? x.sort_order : 0,
      }))
      .filter((x) => x.title && x.content);
    for (let i = 0; i < technicalItems.length; i++) {
      await connection.query(
        `INSERT INTO mikrotik_dcs_product_technical_items (product_id, title, content, sort_order)
         VALUES (:pid, :title, :content, :ord)`,
        {
          pid: id,
          title: technicalItems[i].title,
          content: technicalItems[i].content,
          ord: i,
        },
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
