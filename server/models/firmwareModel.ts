import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { mysqlPool } from "../config/mysqlPool";

/** Brand resmi untuk firmware (sesuai ENUM di DB). */
export const FIRMWARE_BRANDS = ["mikrotik", "ubiquiti", "vsol"] as const;
export type FirmwareBrand = (typeof FIRMWARE_BRANDS)[number];

export function isValidFirmwareBrand(b: string): b is FirmwareBrand {
  return (FIRMWARE_BRANDS as readonly string[]).includes(b);
}

export type FirmwareSourceType = "upload" | "external";

export type FirmwareFileRow = {
  id: number;
  brand: FirmwareBrand;
  category: string;
  product_name: string;
  model_sku: string | null;
  version: string | null;
  release_date: string | null; // 'YYYY-MM-DD'
  source_type: FirmwareSourceType;
  file_path: string | null;
  external_url: string | null;
  file_size: number | null;
  checksum: string | null;
  notes: string | null;
  sort_order: number;
  created_at: Date;
  updated_at: Date;
};

function toDateStr(v: unknown): string | null {
  if (v == null) return null;
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  const s = String(v).trim();
  return s ? s.slice(0, 10) : null;
}

function mapRow(r: RowDataPacket): FirmwareFileRow {
  return {
    id: r.id,
    brand: r.brand,
    category: r.category ?? "",
    product_name: r.product_name,
    model_sku: r.model_sku ?? null,
    version: r.version ?? null,
    release_date: toDateStr(r.release_date),
    source_type: r.source_type === "external" ? "external" : "upload",
    file_path: r.file_path ?? null,
    external_url: r.external_url ?? null,
    file_size: r.file_size == null ? null : Number(r.file_size),
    checksum: r.checksum ?? null,
    notes: r.notes ?? null,
    sort_order: r.sort_order ?? 0,
    created_at: r.created_at,
    updated_at: r.updated_at,
  };
}

const SELECT_COLUMNS = `id, brand, category, product_name, model_sku, version, release_date,
  source_type, file_path, external_url, file_size, checksum, notes, sort_order,
  created_at, updated_at`;

export async function listFirmwareFiles(
  options: {
    brand?: string | null;
    category?: string | null;
    sort?: "latest" | "oldest" | "custom";
  } = {},
): Promise<FirmwareFileRow[]> {
  const brand = options.brand?.trim() || null;
  const category = options.category?.trim() || null;
  const sort = options.sort ?? "custom";
  if (brand && !isValidFirmwareBrand(brand)) return [];

  const conds: string[] = [];
  const params: Record<string, string> = {};
  if (brand) {
    conds.push("brand = :brand");
    params.brand = brand;
  }
  if (category) {
    conds.push("category = :category");
    params.category = category;
  }
  const where = conds.length ? `WHERE ${conds.join(" AND ")}` : "";
  const orderBy =
    sort === "custom"
      ? "ORDER BY sort_order ASC, created_at DESC, id DESC"
      : sort === "oldest"
        ? "ORDER BY created_at ASC, id ASC"
        : "ORDER BY created_at DESC, id DESC";

  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT ${SELECT_COLUMNS} FROM firmware_files ${where} ${orderBy}`,
    params,
  );
  return rows.map(mapRow);
}

export async function getFirmwareFileById(id: number): Promise<FirmwareFileRow | null> {
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT ${SELECT_COLUMNS} FROM firmware_files WHERE id = :id LIMIT 1`,
    { id },
  );
  if (!rows.length) return null;
  return mapRow(rows[0]);
}

export type FirmwareFileInput = {
  brand: FirmwareBrand;
  category: string;
  product_name: string;
  model_sku?: string | null;
  version?: string | null;
  release_date?: string | null;
  source_type: FirmwareSourceType;
  file_path?: string | null;
  external_url?: string | null;
  file_size?: number | null;
  checksum?: string | null;
  notes?: string | null;
};

export async function createFirmwareFile(data: FirmwareFileInput): Promise<number> {
  const [ordRows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT COALESCE(MAX(sort_order), -1) AS max_ord
     FROM firmware_files
     WHERE brand = :brand AND category = :category`,
    { brand: data.brand, category: data.category },
  );
  const nextOrder = Number(ordRows?.[0]?.max_ord ?? -1) + 1;

  const [res] = await mysqlPool.query<ResultSetHeader>(
    `INSERT INTO firmware_files
       (brand, category, product_name, model_sku, version, release_date,
        source_type, file_path, external_url, file_size, checksum, notes, sort_order)
     VALUES
       (:brand, :category, :product_name, :model_sku, :version, :release_date,
        :source_type, :file_path, :external_url, :file_size, :checksum, :notes, :sort_order)`,
    {
      brand: data.brand,
      category: data.category,
      product_name: data.product_name,
      model_sku: data.model_sku ?? null,
      version: data.version ?? null,
      release_date: data.release_date ?? null,
      source_type: data.source_type,
      file_path: data.file_path ?? null,
      external_url: data.external_url ?? null,
      file_size: data.file_size ?? null,
      checksum: data.checksum ?? null,
      notes: data.notes ?? null,
      sort_order: nextOrder,
    },
  );
  return (res as ResultSetHeader).insertId;
}

export async function updateFirmwareFile(id: number, data: FirmwareFileInput): Promise<void> {
  await mysqlPool.query(
    `UPDATE firmware_files SET
       brand = :brand,
       category = :category,
       product_name = :product_name,
       model_sku = :model_sku,
       version = :version,
       release_date = :release_date,
       source_type = :source_type,
       file_path = :file_path,
       external_url = :external_url,
       file_size = :file_size,
       checksum = :checksum,
       notes = :notes
     WHERE id = :id`,
    {
      brand: data.brand,
      category: data.category,
      product_name: data.product_name,
      model_sku: data.model_sku ?? null,
      version: data.version ?? null,
      release_date: data.release_date ?? null,
      source_type: data.source_type,
      file_path: data.file_path ?? null,
      external_url: data.external_url ?? null,
      file_size: data.file_size ?? null,
      checksum: data.checksum ?? null,
      notes: data.notes ?? null,
      id,
    },
  );
}

export async function deleteFirmwareFileById(id: number): Promise<boolean> {
  const [r] = await mysqlPool.query<ResultSetHeader>(
    `DELETE FROM firmware_files WHERE id = :id`,
    { id },
  );
  return (r as ResultSetHeader).affectedRows > 0;
}

export async function reorderFirmwareFiles(
  brand: FirmwareBrand,
  category: string,
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
      `SELECT id FROM firmware_files
       WHERE brand = ? AND category = ? AND id IN (?)`,
      [brand, category, ids],
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
    params.push(brand, category, ...filtered);

    await connection.query(
      `UPDATE firmware_files
       SET sort_order = CASE id ${caseSql} ELSE sort_order END
       WHERE brand = ? AND category = ? AND id IN (${filtered.map(() => "?").join(",")})`,
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
