import type { Express } from "express";
import express from "express";
import { apiAuthLogin, apiAuthLogout, apiAuthMe } from "../controllers/authController";
import { loginIpRateLimit, loginUsernameRateLimit } from "../middleware/loginRateLimit";
import {
  apiUsersCreate,
  apiUsersDelete,
  apiUsersList,
  apiUsersUpdate,
} from "../controllers/usersController";

/**
 * Modul auth netral (tidak lagi numpang di /api/mikrotik-dcs).
 * Base path: /api/auth
 */
export function registerAuthRoutes(app: Express): void {
  const base = "/api/auth";
  // H-02: perIp dulu, lalu perUsername (butuh body sudah terurai).
  app.post(
    `${base}/login`,
    loginIpRateLimit,
    express.json(),
    loginUsernameRateLimit,
    apiAuthLogin,
  );
  app.post(`${base}/logout`, apiAuthLogout);
  app.get(`${base}/me`, apiAuthMe);

  // Manajemen user (admin only)
  app.get(`${base}/users`, apiUsersList);
  app.post(`${base}/users`, express.json(), apiUsersCreate);
  app.put(`${base}/users/:id`, express.json(), apiUsersUpdate);
  app.delete(`${base}/users/:id`, apiUsersDelete);
}
