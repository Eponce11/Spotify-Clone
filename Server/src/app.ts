import express, { Application } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotnev from "dotenv";
import corsOptions from "./config/corsOptions.config";
import { Context, MockContext } from "./config/context.config";
import { refreshSpotifyToken } from "./functions/spotifyApi.functions";
import authRoutes from "./routes/auth.routes";
import likeRoutes from "./routes/like.routes";

export default (database: Context | MockContext): Application => {
  const app: Application = express();

  dotnev.config();
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors(corsOptions));

  refreshSpotifyToken(app);

  authRoutes(app, database);
  likeRoutes(app, database);

  return app;
};
