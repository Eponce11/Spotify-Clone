import { spotifyApi } from "../constants";

export const playTracks = (tracks: string[]) => {
  spotifyApi.play({ uris: tracks });
};
