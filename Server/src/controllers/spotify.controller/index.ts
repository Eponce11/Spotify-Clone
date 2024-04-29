import { Request, Response } from "express";
import SpotifyWebApi from "spotify-web-api-node";

export const spotifyLogin = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { code } = req.body;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:5173",
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  });
  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      res.sendStatus(400);
    });
};

export const spotifyRefreshToken = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { refreshToken } = req.body;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:5173",
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    refreshToken: refreshToken,
  });
  spotifyApi
    .refreshAccessToken()
    .then((data: any) => {
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(400);
    });
};
