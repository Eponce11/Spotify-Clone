import { Application } from "express";
import {
  createPlaylist,
  getUserPlaylists,
  getPlaylist,
  addSongToPlaylist,
  addSpotifyPlaylistOrAlbumToLibrary,
  getUserAndSpotifyPlaylist,
  removeSpotifyPlaylistFromLibrary,
  deleteOwnPlaylist,
  editOwnPlaylist,
  removeSongFromOwnPlaylist,
} from "../controllers/playlist.controller";
import { Context, MockContext } from "../config/context.config";

const basePlaylistUrl: string = "/api/playlist";

const playlistRoutes = (app: Application, database: Context | MockContext) => {
  app.post(`${basePlaylistUrl}/create`, createPlaylist(database));
  app.get(`${basePlaylistUrl}/getAll/:_userId`, getUserPlaylists(database));
  app.get(
    `${basePlaylistUrl}/getAll/ownAndSpotify/:_userId`,
    getUserAndSpotifyPlaylist(database)
  );
  app.post(`${basePlaylistUrl}/getOne`, getPlaylist(database));
  app.post(`${basePlaylistUrl}/addSong`, addSongToPlaylist(database));
  app.post(
    `${basePlaylistUrl}/addPlaylist/library`,
    addSpotifyPlaylistOrAlbumToLibrary(database)
  );
  app.post(
    `${basePlaylistUrl}/removePlaylist/library`,
    removeSpotifyPlaylistFromLibrary(database)
  );
  app.post(`${basePlaylistUrl}/delete`, deleteOwnPlaylist(database));
  app.put(`${basePlaylistUrl}/edit`, editOwnPlaylist(database));
  app.put(`${basePlaylistUrl}/removeSong`, removeSongFromOwnPlaylist(database));
};

export default playlistRoutes;
