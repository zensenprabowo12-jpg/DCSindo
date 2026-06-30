declare module "express-mysql-session" {
  import type { Store } from "express-session";

  interface MySQLStoreOptions {
    host?: string;
    port?: number;
    user?: string;
    password?: string;
    database?: string;
    socketPath?: string;
    createDatabaseTable?: boolean;
    checkExpirationInterval?: number;
    expiration?: number;
    [key: string]: unknown;
  }

  type MySQLStoreClass = new (options: MySQLStoreOptions, connection?: unknown) => Store;

  function expressMySQLSession(session: unknown): MySQLStoreClass;
  export default expressMySQLSession;
}
