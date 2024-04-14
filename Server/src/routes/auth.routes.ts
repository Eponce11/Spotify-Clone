import { Application } from "express";
import { register } from "../controllers/auth.controller";
import { Context, MockContext } from "../config/context.config";

const baseAuthUrl: string = "/api/auth";

const authRoutes = (app: Application, database: Context | MockContext) => {
  app.post(`${baseAuthUrl}/register`, register(database));
}

export default authRoutes;