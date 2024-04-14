import express, { Application } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotnev from "dotenv";
import corsOptions from "./config/corsOptions.config";
import authRoutes from "./routes/auth.routes";
import { Context, MockContext } from "./config/context.config";

export default (database: Context | MockContext): Application => {
  const app: Application = express();

  dotnev.config();
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors(corsOptions));

  authRoutes(app, database);

  return app;
};
