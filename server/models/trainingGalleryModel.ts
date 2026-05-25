import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { mysqlPool } from "../config/mysqlPool";

export type TrainingGalleryRow = {
  id: number;
  training_id: number;
  image_path: string;
  caption: string | null;
  sort_order: number;
  created_at: Date;
};

export async function listGallery(trainingId: number): Promise<TrainingGalleryRow[]> {
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    "SELECT * FROM training_gallery WHERE training_id = :tid ORDER BY sort_order ASC, id ASC",
    { tid: trainingId },
  );
  return rows.map((r) => ({
    id: r.id,
    training_id: r.training_id,
    image_path: r.image_path,
    caption: r.caption ?? null,
    sort_order: r.sort_order,
    created_at: r.created_at,
  }));
}

export async function addGalleryImages(
  trainingId: number,
  files: { imagePath: string; caption?: string }[],
): Promise<number[]> {
  if (!files.length) return [];
  const ids: number[] = [];
  for (let i = 0; i < files.length; i++) {
    const [result] = await mysqlPool.query<ResultSetHeader>(
      "INSERT INTO training_gallery (training_id, image_path, caption, sort_order) VALUES (:tid, :img, :cap, :ord)",
      { tid: trainingId, img: files[i].imagePath, cap: files[i].caption ?? null, ord: i },
    );
    ids.push(result.insertId);
  }
  return ids;
}

export async function getGalleryImage(id: number): Promise<TrainingGalleryRow | null> {
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    "SELECT * FROM training_gallery WHERE id = :id LIMIT 1",
    { id },
  );
  if (!rows.length) return null;
  return {
    id: rows[0].id,
    training_id: rows[0].training_id,
    image_path: rows[0].image_path,
    caption: rows[0].caption ?? null,
    sort_order: rows[0].sort_order,
    created_at: rows[0].created_at,
  };
}

export async function deleteGalleryImage(id: number): Promise<boolean> {
  const [result] = await mysqlPool.query<ResultSetHeader>(
    "DELETE FROM training_gallery WHERE id = :id",
    { id },
  );
  return result.affectedRows > 0;
}
