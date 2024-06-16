import { Application } from "express";
import {
  register,
  login,
  handleRefreshToken,
  registerEmailValidation,
} from "../controllers/auth.controller";
import { Context, MockContext } from "../config/context.config";

const baseAuthUrl: string = "/api/auth";

const authRoutes = (app: Application, database: Context | MockContext) => {
  app.post(`${baseAuthUrl}/register`, register(database));
  app.post(`${baseAuthUrl}/login`, login(database));
  app.get(`${baseAuthUrl}/refreshToken`, handleRefreshToken(database));
  app.post(`${baseAuthUrl}/emailValidation`, registerEmailValidation(database));
};

export default authRoutes;
