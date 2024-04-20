import { Application } from "express";

const getSpotifyToken = async (): Promise<any> => {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(clientId + ":" + clientSecret).toString("base64"),
    },
  });

  return await response.json();
};

export const refreshSpotifyToken = async (app: Application): Promise<void> => {
  const response = await getSpotifyToken(); // runs once on call then interval function after
  app.locals.spotifyToken = response.access_token
  setInterval(async () => { // runs every 45 min
    const response = await getSpotifyToken();
    app.locals.spotifyToken = response.access_token
  }, 1000 * 60 * 45)
}