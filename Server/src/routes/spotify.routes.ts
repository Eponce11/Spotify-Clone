import { Application } from "express";
import {
  spotifyLogin,
  spotifyRefreshToken,
} from "../controllers/spotify.controller";

const baseSpotifyUrl: string = "/api/spotify";

const spotifyRoutes = (app: Application) => {
  app.post(`${baseSpotifyUrl}/login`, spotifyLogin);
  app.post(`${baseSpotifyUrl}/refresh`, spotifyRefreshToken);
};

export default spotifyRoutes;
