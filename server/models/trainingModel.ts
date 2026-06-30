import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { mysqlPool } from "../config/mysqlPool";
import { computeStatus, type TrainingBrand, type TrainingFormat, type TrainingStatus } from "../training/categories";
import { listGallery, type TrainingGalleryRow } from "./trainingGalleryModel";

// ─── TYPES ────────────────────────────────────────────────────

export type TrainingSessionRow = {
  id: number;
  title: string;
  description: string | null;
  brand: TrainingBrand;
  format: TrainingFormat;
  location: string | null;
  start_datetime: Date;
  end_datetime: Date;
  duration_hours: number | null;
  capacity: number | null;
  price: number | null;
  is_free: boolean;
  has_certificate: boolean;
  has_hands_on_lab: boolean;
  instructor_name: string | null;
  instructor_contact: string | null;
  thumbnail: string | null;
  qr_image: string | null;
  custom_link_url: string | null;
  custom_link_label: string | null;
  status: TrainingStatus;
  created_at: Date;
  updated_at: Date;
  /** Ringkasan dokumentasi (hanya diisi oleh listTrainingSessions). */
  doc_cover?: string | null;
  doc_count?: number;
};

export type TrainingSyllabusRow = {
  id: number;
  training_id: number;
  item: string;
  sort_order: number;
};

export type TrainingSessionWithSyllabus = TrainingSessionRow & {
  syllabus: TrainingSyllabusRow[];
  gallery: TrainingGalleryRow[];
};

export type CreateTrainingInput = Omit<TrainingSessionRow, "id" | "status" | "created_at" | "updated_at"> & {
  syllabus: { item: string; sort_order: number }[];
};

export type UpdateTrainingInput = Partial<CreateTrainingInput>;

// ─── HELPERS ──────────────────────────────────────────────────

function mapRow(r: RowDataPacket): TrainingSessionRow {
  return {
    id: r.id,
    title: r.title,
    description: r.description ?? null,
    brand: r.brand as TrainingBrand,
    format: r.format as TrainingFormat,
    location: r.location ?? null,
    start_datetime: new Date(r.start_datetime),
    end_datetime: new Date(r.end_datetime),
    duration_hours: r.duration_hours != null ? Number(r.duration_hours) : null,
    capacity: r.capacity ?? null,
    price: r.price != null ? Number(r.price) : null,
    is_free: Boolean(r.is_free),
    has_certificate: Boolean(r.has_certificate),
    has_hands_on_lab: Boolean(r.has_hands_on_lab),
    instructor_name: r.instructor_name ?? null,
    instructor_contact: r.instructor_contact ?? null,
    thumbnail: r.thumbnail ?? null,
    qr_image: r.qr_image ?? null,
    custom_link_url: r.custom_link_url ?? null,
    custom_link_label: r.custom_link_label ?? null,
    status: computeStatus(new Date(r.start_datetime), new Date(r.end_datetime)),
    created_at: r.created_at,
    updated_at: r.updated_at,
    doc_cover: r.doc_cover ?? null,
    doc_count: r.doc_count != null ? Number(r.doc_count) : 0,
  };
}

// ─── LIST ─────────────────────────────────────────────────────

export async function listTrainingSessions(opts: {
  brand?: string;
  status?: string;
  format?: string;
  has_hands_on_lab?: boolean;
} = {}): Promise<TrainingSessionRow[]> {
  const conditions: string[] = [];
  const params: Record<string, string | number | boolean | null> = {};

  if (opts.brand && opts.brand !== "all") {
    conditions.push("`brand` = :brand");
    params.brand = opts.brand;
  }

  if (opts.format && opts.format !== "all") {
    conditions.push("`format` = :format");
    params.format = opts.format;
  }

  if (opts.has_hands_on_lab === true) {
    conditions.push("`has_hands_on_lab` = 1");
  }

  const where = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";
  // Sertakan ringkasan dokumentasi (foto pertama + jumlah) dari training_gallery.
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT ts.*,
            (SELECT g.image_path FROM training_gallery g
              WHERE g.training_id = ts.id ORDER BY g.sort_order ASC, g.id ASC LIMIT 1) AS doc_cover,
            (SELECT COUNT(*) FROM training_gallery g WHERE g.training_id = ts.id) AS doc_count
       FROM training_sessions ts
       ${where}
      ORDER BY ts.start_datetime ASC, ts.id ASC`,
    params,
  );

  let result = rows.map(mapRow);

  // Filter by status after computing it (status is derived, not stored)
  if (opts.status && opts.status !== "all") {
    result = result.filter((r) => r.status.toLowerCase() === opts.status!.toLowerCase());
  }

  return result;
}

// ─── GET BY ID ────────────────────────────────────────────────

export async function getTrainingSessionById(id: number): Promise<TrainingSessionWithSyllabus | null> {
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    "SELECT * FROM training_sessions WHERE id = :id LIMIT 1",
    { id },
  );
  if (!rows.length) return null;

  const session = mapRow(rows[0]);

  const [sylRows] = await mysqlPool.query<RowDataPacket[]>(
    "SELECT * FROM training_syllabus WHERE training_id = :id ORDER BY sort_order ASC, id ASC",
    { id },
  );
  const syllabus: TrainingSyllabusRow[] = sylRows.map((s) => ({
    id: s.id,
    training_id: s.training_id,
    item: s.item,
    sort_order: s.sort_order,
  }));

  const gallery = await listGallery(id);

  return { ...session, syllabus, gallery };
}

// ─── CREATE ───────────────────────────────────────────────────

export async function createTrainingSession(input: CreateTrainingInput): Promise<number> {
  const conn = await mysqlPool.getConnection();
  try {
    await conn.beginTransaction();

    const [result] = await conn.query<ResultSetHeader>(
      `INSERT INTO training_sessions
        (title, description, brand, format, location, start_datetime, end_datetime,
         duration_hours, capacity, price, is_free, has_certificate, has_hands_on_lab,
         instructor_name, instructor_contact, thumbnail, qr_image, custom_link_url, custom_link_label)
       VALUES
        (:title, :description, :brand, :format, :location, :start_datetime, :end_datetime,
         :duration_hours, :capacity, :price, :is_free, :has_certificate, :has_hands_on_lab,
         :instructor_name, :instructor_contact, :thumbnail, :qr_image, :custom_link_url, :custom_link_label)`,
      {
        title: input.title,
        description: input.description ?? null,
        brand: input.brand,
        format: input.format,
        location: input.location ?? null,
        start_datetime: input.start_datetime,
        end_datetime: input.end_datetime,
        duration_hours: input.duration_hours ?? null,
        capacity: input.capacity ?? null,
        price: input.price ?? null,
        is_free: input.is_free ? 1 : 0,
        has_certificate: input.has_certificate ? 1 : 0,
        has_hands_on_lab: input.has_hands_on_lab ? 1 : 0,
        instructor_name: input.instructor_name ?? null,
        instructor_contact: input.instructor_contact ?? null,
        thumbnail: input.thumbnail ?? null,
        qr_image: input.qr_image ?? null,
        custom_link_url: input.custom_link_url ?? null,
        custom_link_label: input.custom_link_label ?? null,
      },
    );

    const newId = result.insertId;

    if (input.syllabus?.length) {
      for (const s of input.syllabus) {
        await conn.query(
          "INSERT INTO training_syllabus (training_id, item, sort_order) VALUES (:tid, :item, :sort)",
          { tid: newId, item: s.item, sort: s.sort_order },
        );
      }
    }

    await conn.commit();
    return newId;
  } catch (e) {
    await conn.rollback();
    throw e;
  } finally {
    conn.release();
  }
}

// ─── UPDATE ───────────────────────────────────────────────────

export async function updateTrainingSession(id: number, input: UpdateTrainingInput): Promise<boolean> {
  const conn = await mysqlPool.getConnection();
  try {
    await conn.beginTransaction();

    const setClauses: string[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const params: Record<string, any> = { id };

    const fields: (keyof Omit<UpdateTrainingInput, "syllabus">)[] = [
      "title", "description", "brand", "format", "location",
      "start_datetime", "end_datetime", "duration_hours", "capacity",
      "price", "is_free", "has_certificate", "has_hands_on_lab",
      "instructor_name", "instructor_contact", "thumbnail",
      "qr_image", "custom_link_url", "custom_link_label",
    ];

    for (const f of fields) {
      if (f in input) {
        setClauses.push(`\`${f}\` = :${f}`);
        const val = input[f];
        if (f === "is_free" || f === "has_certificate" || f === "has_hands_on_lab") {
          params[f] = val ? 1 : 0;
        } else {
          params[f] = val ?? null;
        }
      }
    }

    if (setClauses.length) {
      await conn.query(
        `UPDATE training_sessions SET ${setClauses.join(", ")} WHERE id = :id`,
        params,
      );
    }

    if (input.syllabus !== undefined) {
      await conn.query("DELETE FROM training_syllabus WHERE training_id = :id", { id });
      for (const s of input.syllabus) {
        await conn.query(
          "INSERT INTO training_syllabus (training_id, item, sort_order) VALUES (:tid, :item, :sort)",
          { tid: id, item: s.item, sort: s.sort_order },
        );
      }
    }

    await conn.commit();
    return true;
  } catch (e) {
    await conn.rollback();
    throw e;
  } finally {
    conn.release();
  }
}

// ─── DELETE ───────────────────────────────────────────────────

export async function deleteTrainingSession(id: number): Promise<boolean> {
  const [result] = await mysqlPool.query<ResultSetHeader>(
    "DELETE FROM training_sessions WHERE id = :id",
    { id },
  );
  return result.affectedRows > 0;
}
