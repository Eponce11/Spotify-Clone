import { Application } from "express";
import { createPlaylist } from "../controllers/playlist.controller";
import { Context, MockContext } from "../config/context.config";

const baseLikeUrl: string = "/api/playlist";

const playlistRoutes = (app: Application, database: Context | MockContext) => {
  app.post(`${baseLikeUrl}/create`, createPlaylist(database));
};

export default playlistRoutes;
