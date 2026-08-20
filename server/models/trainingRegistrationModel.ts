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
      -- M-03: NULL saat dibatalkan. UNIQUE di MariaDB mengizinkan NULL
      -- berkali-kali, jadi peserta yang membatalkan BOLEH mendaftar ulang,
      -- sementara dua pendaftaran aktif dengan email sama tetap ditolak.
      -- MariaDB tidak punya partial index (WHERE pada indeks), jadi kolom
      -- generated inilah penggantinya.
      active_email VARCHAR(190)
        AS (CASE WHEN status <> 'cancelled' THEN email ELSE NULL END) STORED,
      INDEX idx_treg_training (training_id),
      INDEX idx_treg_created (created_at),
      UNIQUE KEY uq_treg_active_email (training_id, active_email),
      CONSTRAINT fk_treg_training FOREIGN KEY (training_id)
        REFERENCES training_sessions (id) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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

export type CreateRegistrationResult =
  | { ok: true; id: number }
  | { ok: false; reason: "not_found" | "full" };

/**
 * M-03: kuota diperiksa DAN baris disisipkan dalam SATU transaksi.
 *
 * Versi lama memanggil countByTraining() lalu INSERT sebagai dua statement
 * autocommit terpisah, dengan `await` di antaranya. Puluhan pendaftar
 * serentak bisa sama-sama membaca hitungan yang masih di bawah kuota lalu
 * semuanya menyisip — kuota 25 bisa terisi 30. REPEATABLE-READ tidak
 * menolong karena COUNT(*) biasa sama sekali tidak mengambil kunci.
 *
 * Yang dikunci adalah baris INDUK di training_sessions, bukan tabel peserta:
 * baris peserta yang hendak dibuat belum ada, jadi tidak ada yang bisa
 * dikunci di sana. FOR UPDATE pada induk membuat seluruh blok
 * cek-lalu-insert berjalan bergantian per sesi training.
 *
 * Duplikat TIDAK diperiksa di sini. Itu dijaga indeks UNIQUE
 * uq_treg_active_email di tingkat DB (lihat
 * database/migrate_training_registrations_m03.sql), yang melempar errno 1062
 * dan diterjemahkan controller jadi 400. Memeriksanya lewat SELECT lebih
 * dulu hanya akan mengulang lubang balapan yang sama.
 */
export async function createRegistrationAtomic(
  input: CreateRegistrationInput,
): Promise<CreateRegistrationResult> {
  await ensureTable();
  const connection = await mysqlPool.getConnection();
  try {
    await connection.beginTransaction();

    const [tRows] = await connection.query<RowDataPacket[]>(
      "SELECT capacity FROM training_sessions WHERE id = :id FOR UPDATE",
      { id: input.training_id },
    );
    if (!tRows.length) {
      await connection.rollback();
      return { ok: false, reason: "not_found" };
    }

    const rawCapacity = tRows[0].capacity;
    const capacity = rawCapacity == null ? null : Number(rawCapacity);
    if (capacity != null) {
      const [cRows] = await connection.query<RowDataPacket[]>(
        `SELECT COUNT(*) AS cnt
           FROM training_registrations
          WHERE training_id = :id AND status <> 'cancelled'`,
        { id: input.training_id },
      );
      if (Number(cRows[0]?.cnt ?? 0) >= capacity) {
        await connection.rollback();
        return { ok: false, reason: "full" };
      }
    }

    const [result] = await connection.query<ResultSetHeader>(
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

    await connection.commit();
    return { ok: true, id: result.insertId };
  } catch (e) {
    await connection.rollback();
    throw e;
  } finally {
    connection.release();
  }
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
