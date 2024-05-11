import { Application } from "express";
import { createPlaylist, getUserPlaylists } from "../controllers/playlist.controller";
import { Context, MockContext } from "../config/context.config";

const basePlaylistUrl: string = "/api/playlist";

const playlistRoutes = (app: Application, database: Context | MockContext) => {
  app.post(`${basePlaylistUrl}/create`, createPlaylist(database));
  app.get(`${basePlaylistUrl}/getAll/:_userId`, getUserPlaylists(database));
};

export default playlistRoutes;
