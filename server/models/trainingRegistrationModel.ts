import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { mysqlPool } from "../config/mysqlPool";

export const REGISTRATION_STATUSES = ["registered", "confirmed", "attended", "cancelled"] as const;
export type RegistrationStatus = (typeof REGISTRATION_STATUSES)[number];

export function isValidRegistrationStatus(v: unknown): v is RegistrationStatus {
  return typeof v === "string" && (REGISTRATION_STATUSES as readonly string[]).includes(v);
}

export type TrainingRegistrationRow = {
  id: number;
  training_id: number;
  full_name: string;
  email: string;
  phone: string;
  company: string | null;
  status: string;
  created_at: Date;
};

export type RegistrationWithTraining = TrainingRegistrationRow & {
  training_title: string | null;
  training_brand: string | null;
};

let tableEnsured = false;

/**
 * Auto-create tabel training_registrations (pola sama users/admin_activity_log).
 * `training_id INT` (signed) menyamai pola `training_gallery` agar FK ke
 * training_sessions(id) cocok tipenya.
 */
async function ensureTable(): Promise<void> {
  if (tableEnsured) return;
  await mysqlPool.query(`
    CREATE TABLE IF NOT EXISTS training_registrations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      training_id INT NOT NULL,
      full_name VARCHAR(190) NOT NULL,
      email VARCHAR(190) NOT NULL,
      phone VARCHAR(40) NOT NULL,
      company VARCHAR(190) NULL,
      status VARCHAR(20) NOT NULL DEFAULT 'registered',
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_treg_training (training_id),
      INDEX idx_treg_created (created_at),
      CONSTRAINT fk_treg_training FOREIGN KEY (training_id)
        REFERENCES training_sessions (id) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);
  tableEnsured = true;
}

export type CreateRegistrationInput = {
  training_id: number;
  full_name: string;
  email: string;
  phone: string;
  company?: string | null;
};

export async function createRegistration(input: CreateRegistrationInput): Promise<number> {
  await ensureTable();
  const [result] = await mysqlPool.query<ResultSetHeader>(
    `INSERT INTO training_registrations
       (training_id, full_name, email, phone, company)
     VALUES (:training_id, :full_name, :email, :phone, :company)`,
    {
      training_id: input.training_id,
      full_name: input.full_name.slice(0, 190),
      email: input.email.slice(0, 190),
      phone: input.phone.slice(0, 40),
      company: input.company?.trim() ? input.company.trim().slice(0, 190) : null,
    },
  );
  return result.insertId;
}

/** Jumlah pendaftar aktif (tidak menghitung yang cancelled) untuk cek kuota. */
export async function countByTraining(training_id: number): Promise<number> {
  await ensureTable();
  const [rows] = await mysqlPool.query<RowDataPacket[]>(
    `SELECT COUNT(*) AS cnt
       FROM training_registrations
      WHERE training_id = :training_id AND status <> 'cancelled'`,
    { training_id },
  );
  return Number(rows[0]?.cnt ?? 0);
}

export async function listRegistrations(opts: { training_id?: number } = {}): Promise<RegistrationWithTraining[]> {
  await ensureTable();
  const where = opts.training_id ? "WHERE r.training_id = :training_id" : "";
  const [rows] = await mysqlPool.query<(RegistrationWithTraining & RowDataPacket)[]>(
    `SELECT r.id, r.training_id, r.full_name, r.email, r.phone, r.company, r.status, r.created_at,
            t.title AS training_title, t.brand AS training_brand
       FROM training_registrations r
       LEFT JOIN training_sessions t ON t.id = r.training_id
       ${where}
      ORDER BY r.created_at DESC, r.id DESC`,
    opts.training_id ? { training_id: opts.training_id } : {},
  );
  return rows;
}

export async function updateStatus(id: number, status: RegistrationStatus): Promise<boolean> {
  await ensureTable();
  const [result] = await mysqlPool.query<ResultSetHeader>(
    "UPDATE training_registrations SET status = :status WHERE id = :id",
    { id, status },
  );
  return result.affectedRows > 0;
}

export async function deleteRegistration(id: number): Promise<boolean> {
  await ensureTable();
  const [result] = await mysqlPool.query<ResultSetHeader>(
    "DELETE FROM training_registrations WHERE id = :id",
    { id },
  );
  return result.affectedRows > 0;
}
