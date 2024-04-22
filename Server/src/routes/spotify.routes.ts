import { Application } from "express";
import { spotifyLogin } from "../controllers/spotify.controller";

const baseSpotifyUrl: string = "/api/spotify";

const spotifyRoutes = (app: Application) => {
  app.post(`${baseSpotifyUrl}/login`, spotifyLogin);
};

export default spotifyRoutes;
