import "express-session";

declare module "express-session" {
  interface SessionData {
    /** Setelah login sukses ke panel admin MikroTik DCS */
    mikrotikDcsAdmin?: boolean;
  }
}
