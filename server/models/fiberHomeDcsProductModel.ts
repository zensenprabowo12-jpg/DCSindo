import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { mysqlPool } from "../config/mysqlPool";

// ─── TYPES ───────────────────────────────────────────────────
export type FiberHomeProductRow = {
  id: number;
  sku: string;
  name: string;
  category: string;
  description: string;
  image_path: string;
  datasheet_path: string | null;
  sort_order: number;
  created_at: Date;
  updated_at: Date;
};

export type FiberHomeGalleryRow = { id: number; image_path: string; sort_order: number };
export type FiberHomeSpecRow = {
  id: number;
  label: string;
  value: string;
  spec_group: string;
  sort_order: number;
};
export type FiberHomeFeatureRow = { id: number; feature: string; sort_order: number };
export type FiberHomeApplicationRow = {
  id: number;
  title: string;
  description: string;
  sort_order: number;
};

export type FiberHomeProductWithRelations = FiberHomeProductRow & {
  gallery: FiberHomeGalleryRow[];
  technical_specs: FiberHomeSpecRow[];
  features: FiberHomeFeatureRow[];
  applications: FiberHomeApplicationRow[];
};

export type FiberHomeSpecInput = { label: string; value: string; spec_group?: string };

const DEFAULT_SPEC_GROUP = "Umum";
export type FiberHomeApplicationInput = { title: string; description: string };

export type FiberHomeProductInput = {
  sku: string;
  name: string;
  category: string;
  description: string;
  image_path: string;
};

const PRODUCT_COLUMNS = `id, sku, name, category, description, image_path,
                         datasheet_path, sort_order, created_at, updated_at`;

function mapProduct(r: RowDataPacket): FiberHomeProductRow {
  return {
    id: Number(r.id),
    sku: String(r.sku),
    name: String(r.name),
    category: String(r.category ?? ""),
    description: String(r.description ?? ""),
    image_path: String(r.image_path ?? ""),
    datasheet_path: r.datasheet_path ? String(r.datasheet_path) : null,
    sort_order: Number(r.sort_order ?? 0),
    created_at: r.created_at,
    updated_at: r.updated_at,
  };
}

function mapSpec(r: RowDataPacket): FiberHomeSpecRow {
  return {
    id: Number(r.id),
    label: String(r.label),
    value: String(r.value),
    spec_group: String(r.spec_group || DEFAULT_SPEC_GROUP),
    sort_order: Number(r.sort_order ?? 0),
  };
}

function mapFeature(r: RowDataPacket): FiberHomeFeatureRow {
  return { id: Number(r.id), feature: String(r.feature), sort_order: Number(r.sort_order ?? 0) };
}

function mapApplication(r: RowDataPacket): FiberHomeApplicationRow {
  return {
    id: Number(r.id),
    title: String(r.title),
    description: String(r.description ?? ""),
    sort_order: Number(r.sort_order ?? 0),
  };
}

// ─── LIST ─────────────────────────────────────────────────────
/** Semua produk + relasinya. 1 query per tabel, digabung di JS (bukan N+1). */
export async function getAllProducts(): Promise<FiberHomeProductWithRelations[]> {
  const [pRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT ${PRODUCT_COLUMNS} FROM fiberhome_products
     ORDER BY sort_order ASC, id ASC`,
  );
  if (!pRows.length) return [];

  const [gRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, product_id, image_path, sort_order FROM fiberhome_gallery
     ORDER BY sort_order ASC, id ASC`,
  );
  const [sRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, product_id, label, value, spec_group, sort_order FROM fiberhome_technical_specs
     ORDER BY sort_order ASC, id ASC`,
  );
  const [fRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, product_id, feature, sort_order FROM fiberhome_key_features
     ORDER BY sort_order ASC, id ASC`,
  );
  const [aRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, product_id, title, description, sort_order FROM fiberhome_applications
     ORDER BY sort_order ASC, id ASC`,
  );

  const ofProduct = (rows: RowDataPacket[], pid: unknown) =>
    rows.filter((r) => Number(r.product_id) === Number(pid));

  return pRows.map((p) => ({
    ...mapProduct(p),
    gallery: ofProduct(gRows, p.id)
      .map((g) => ({ id: Number(g.id), image_path: String(g.image_path), sort_order: Number(g.sort_order ?? 0) })),
    technical_specs: ofProduct(sRows, p.id).map(mapSpec),
    features: ofProduct(fRows, p.id).map(mapFeature),
    applications: ofProduct(aRows, p.id).map(mapApplication),
  }));
}

// ─── GET ONE ──────────────────────────────────────────────────
async function getProductByWhere(
  where: string,
  params: Record<string, string | number>,
): Promise<FiberHomeProductWithRelations | null> {
  const [pRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT ${PRODUCT_COLUMNS} FROM fiberhome_products WHERE ${where} LIMIT 1`,
    params,
  );
  if (!pRows.length) return null;
  const product = mapProduct(pRows[0]);

  const [gRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, image_path, sort_order FROM fiberhome_gallery
     WHERE product_id = :id ORDER BY sort_order ASC, id ASC`,
    { id: product.id },
  );
  const [sRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, label, value, spec_group, sort_order FROM fiberhome_technical_specs
     WHERE product_id = :id ORDER BY sort_order ASC, id ASC`,
    { id: product.id },
  );

  return {
    ...product,
    gallery: gRows.map((g) => ({ id: Number(g.id), image_path: String(g.image_path), sort_order: Number(g.sort_order ?? 0) })),
    technical_specs: sRows.map(mapSpec),
    features: await getFeatures(product.id),
    applications: await getApplications(product.id),
  };
}

export function getProductById(id: number): Promise<FiberHomeProductWithRelations | null> {
  return getProductByWhere("id = :id", { id });
}

export function getProductBySku(sku: string): Promise<FiberHomeProductWithRelations | null> {
  return getProductByWhere("sku = :sku", { sku: sku.trim() });
}

// ─── CREATE ───────────────────────────────────────────────────
export async function createProduct(
  data: FiberHomeProductInput & { specs?: FiberHomeSpecInput[] },
): Promise<number> {
  const connection = await mysqlPool.getConnection();
  try {
    await connection.beginTransaction();
    const [ordRows] = await connection.query<RowDataPacket[]>(
      `SELECT COALESCE(MAX(sort_order), -1) AS max_ord FROM fiberhome_products`,
    );
    const nextOrder = Number(ordRows?.[0]?.max_ord ?? -1) + 1;

    const [res] = await connection.query<ResultSetHeader>(
      `INSERT INTO fiberhome_products (sku, name, category, description, image_path, sort_order)
       VALUES (:sku, :name, :cat, :desc, :img, :ord)`,
      {
        sku: data.sku.trim(),
        name: data.name.trim(),
        cat: data.category.trim(),
        desc: data.description.trim(),
        img: data.image_path,
        ord: nextOrder,
      },
    );
    const id = res.insertId;

    const specs = data.specs ?? [];
    for (let i = 0; i < specs.length; i++)
      await connection.query(
        `INSERT INTO fiberhome_technical_specs (product_id, label, value, spec_group, sort_order)
         VALUES (:pid, :label, :value, :grp, :ord)`,
        {
          pid: id,
          label: specs[i].label,
          value: specs[i].value,
          grp: specs[i].spec_group || DEFAULT_SPEC_GROUP,
          ord: i,
        },
      );

    await connection.commit();
    return id;
  } catch (e) {
    await connection.rollback();
    throw e;
  } finally {
    connection.release();
  }
}

// ─── UPDATE ───────────────────────────────────────────────────
export async function updateProduct(id: number, data: FiberHomeProductInput): Promise<void> {
  await mysqlPool.query(
    `UPDATE fiberhome_products
     SET sku = :sku, name = :name, category = :cat, description = :desc, image_path = :img
     WHERE id = :id`,
    {
      id,
      sku: data.sku.trim(),
      name: data.name.trim(),
      cat: data.category.trim(),
      desc: data.description.trim(),
      img: data.image_path,
    },
  );
}

export async function setDatasheetPath(id: number, datasheetPath: string): Promise<void> {
  await mysqlPool.query(
    `UPDATE fiberhome_products SET datasheet_path = :p WHERE id = :id`,
    { id, p: datasheetPath },
  );
}

export async function deleteProduct(id: number): Promise<boolean> {
  const [r] = await mysqlPool.query<ResultSetHeader>(
    `DELETE FROM fiberhome_products WHERE id = :id`,
    { id },
  );
  return r.affectedRows > 0;
}

// ─── SPECS ────────────────────────────────────────────────────
/** Replace semua specs milik produk. */
export async function upsertSpecs(productId: number, specs: FiberHomeSpecInput[]): Promise<void> {
  const connection = await mysqlPool.getConnection();
  try {
    await connection.beginTransaction();
    await connection.query(
      `DELETE FROM fiberhome_technical_specs WHERE product_id = :id`,
      { id: productId },
    );
    for (let i = 0; i < specs.length; i++)
      await connection.query(
        `INSERT INTO fiberhome_technical_specs (product_id, label, value, spec_group, sort_order)
         VALUES (:pid, :label, :value, :grp, :ord)`,
        {
          pid: productId,
          label: specs[i].label,
          value: specs[i].value,
          grp: specs[i].spec_group || DEFAULT_SPEC_GROUP,
          ord: i,
        },
      );
    await connection.commit();
  } catch (e) {
    await connection.rollback();
    throw e;
  } finally {
    connection.release();
  }
}

// ─── FEATURES & APPLICATIONS ──────────────────────────────────
export async function getFeatures(productId: number): Promise<FiberHomeFeatureRow[]> {
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, feature, sort_order FROM fiberhome_key_features
     WHERE product_id = :id ORDER BY sort_order ASC, id ASC`,
    { id: productId },
  );
  return rows.map(mapFeature);
}

export async function getApplications(productId: number): Promise<FiberHomeApplicationRow[]> {
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT id, title, description, sort_order FROM fiberhome_applications
     WHERE product_id = :id ORDER BY sort_order ASC, id ASC`,
    { id: productId },
  );
  return rows.map(mapApplication);
}

/** Replace semua baris child milik produk. `table` selalu konstanta internal. */
async function replaceChildRows(
  table: string,
  productId: number,
  rows: Array<Record<string, string>>,
): Promise<void> {
  const connection = await mysqlPool.getConnection();
  try {
    await connection.beginTransaction();
    await connection.query(`DELETE FROM ${table} WHERE product_id = :id`, { id: productId });
    for (let i = 0; i < rows.length; i++) {
      const cols = Object.keys(rows[i]);
      await connection.query(
        `INSERT INTO ${table} (product_id, ${cols.join(", ")}, sort_order)
         VALUES (:pid, ${cols.map((c) => `:${c}`).join(", ")}, :ord)`,
        { pid: productId, ...rows[i], ord: i },
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

export function upsertFeatures(productId: number, features: string[]): Promise<void> {
  return replaceChildRows(
    "fiberhome_key_features",
    productId,
    features.map((feature) => ({ feature })),
  );
}

export function upsertApplications(
  productId: number,
  applications: FiberHomeApplicationInput[],
): Promise<void> {
  return replaceChildRows(
    "fiberhome_applications",
    productId,
    applications.map((a) => ({ title: a.title, description: a.description })),
  );
}

// ─── GALLERY ──────────────────────────────────────────────────
export async function addGalleryImage(productId: number, imagePath: string): Promise<number> {
  const [ordRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT COALESCE(MAX(sort_order), -1) AS max_ord FROM fiberhome_gallery WHERE product_id = :id`,
    { id: productId },
  );
  const [res] = await mysqlPool.query<ResultSetHeader>(
    `INSERT INTO fiberhome_gallery (product_id, image_path, sort_order) VALUES (:pid, :path, :ord)`,
    { pid: productId, path: imagePath, ord: Number(ordRows?.[0]?.max_ord ?? -1) + 1 },
  );
  return res.insertId;
}

/** Mengembalikan image_path yang dihapus (untuk unlink file), atau null. */
export async function deleteGalleryImage(id: number): Promise<string | null> {
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT image_path FROM fiberhome_gallery WHERE id = :id LIMIT 1`,
    { id },
  );
  if (!rows.length) return null;
  await mysqlPool.query(`DELETE FROM fiberhome_gallery WHERE id = :id`, { id });
  return String(rows[0].image_path);
}

// ─── REORDER ──────────────────────────────────────────────────
export async function reorderProducts(orderedIds: number[]): Promise<void> {
  const ids = orderedIds.filter((n) => Number.isFinite(n) && n > 0);
  if (!ids.length) return;
  const caseSql = ids.map(() => "WHEN ? THEN ?").join(" ");
  const params: unknown[] = [];
  ids.forEach((id, idx) => { params.push(id, idx); });
  params.push(...ids);
  await mysqlPool.query(
    `UPDATE fiberhome_products SET sort_order = CASE id ${caseSql} ELSE sort_order END
     WHERE id IN (${ids.map(() => "?").join(",")})`,
    params,
  );
}
