/**
 * Titik masuk konfigurasi MySQL (alias).
 * Implementasi: `mysqlPool.ts` — pool mysql2 **hanya lewat UNIX socket** (`DB_SOCKET`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`).
 */
export { mysqlPool, verifyMysqlOnStartup } from "./mysqlPool";
