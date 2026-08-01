import { pruneOld } from "../models/visitorLogModel";

/** Retensi log pengunjung. */
const RETENTION_MONTHS = 3;
/** Jam lokal server saat prune harian dijalankan. */
const RUN_AT_HOUR = 3;

const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Jalankan `fn` tiap hari pada jam lokal `hour`.
 *
 * setInterval polos tidak bisa menyatakan "jam 3 pagi" — ia akan menyala 24 jam
 * setelah proses start dan bergeser tiap restart. Jadi: setTimeout ke jam target
 * berikutnya dulu, baru menetap ke interval 24 jam.
 *
 * Catatan: "jam 3" mengikuti timezone proses Node (server ini Asia/Jakarta, tanpa
 * DST). Bila suatu saat dijalankan dalam container ber-TZ=UTC, jam 3 berubah jadi
 * pukul 10 WIB — set TZ di environment bila itu terjadi.
 *
 * Helper ini sengaja lokal di file ini. Kalau nanti ada job kedua, angkat ke
 * modul sendiri.
 */
function scheduleDailyAt(hour: number, fn: () => void): void {
  const next = new Date();
  next.setHours(hour, 0, 0, 0);
  if (next.getTime() <= Date.now()) next.setTime(next.getTime() + DAY_MS);

  const firstDelay = next.getTime() - Date.now();
  // unref(): timer tidak boleh menahan event loop tetap hidup saat pm2 reload/stop.
  setTimeout(() => {
    fn();
    setInterval(fn, DAY_MS).unref();
  }, firstDelay).unref();
}

async function runPrune(reason: string): Promise<void> {
  try {
    const deleted = await pruneOld(RETENTION_MONTHS);
    if (deleted > 0) {
      console.log(`[visitorLog] prune (${reason}): ${deleted} baris >${RETENTION_MONTHS} bulan dihapus.`);
    }
  } catch (e) {
    console.error(`[visitorLog] prune (${reason}) gagal:`, (e as Error).message);
  }
}

/**
 * Pasang job retensi visitor_log.
 *
 * Dijalankan sekali saat startup lalu tiap hari pukul 03:00. Yang saat startup
 * penting: bila server kebetulan selalu direstart sebelum jam 3, jadwal harian
 * tidak pernah menyala dan retensi diam-diam tidak pernah terjadi. DELETE-nya
 * idempotent (`visited_at < NOW() - INTERVAL 3 MONTH`), jadi hari yang terlewat
 * otomatis tersusul pada eksekusi berikutnya.
 */
export function startVisitorLogPruneJob(): void {
  void runPrune("startup");
  scheduleDailyAt(RUN_AT_HOUR, () => void runPrune("harian"));
  console.log(`[visitorLog] job retensi aktif — tiap hari pukul ${RUN_AT_HOUR}:00, simpan ${RETENTION_MONTHS} bulan.`);
}
