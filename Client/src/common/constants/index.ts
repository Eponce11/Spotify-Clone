import SpotifyWebApiType from "spotify-web-api-node";
import SpotifyWebApi from "spotify-web-api-node";

export const clientId: string = "d64b18692a0b431cacaf55d015b1d6ad";
export const spotifyApi: SpotifyWebApiType = new SpotifyWebApi({
  clientId: clientId,
});
