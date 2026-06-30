import type { Express } from "express";
import express from "express";
import { apiAuthLogin, apiAuthLogout, apiAuthMe } from "../controllers/authController";
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
  app.post(`${base}/login`, express.json(), apiAuthLogin);
  app.post(`${base}/logout`, apiAuthLogout);
  app.get(`${base}/me`, apiAuthMe);

  // Manajemen user (admin only)
  app.get(`${base}/users`, apiUsersList);
  app.post(`${base}/users`, express.json(), apiUsersCreate);
  app.put(`${base}/users/:id`, express.json(), apiUsersUpdate);
  app.delete(`${base}/users/:id`, apiUsersDelete);
}
