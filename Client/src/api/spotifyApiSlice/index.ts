import { apiSlice } from "../apiSlice";
import type { SpotifyLoginCredentials, SpotifyLoginResponse } from "./types";

export const spotifyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    spotifyLogin: builder.mutation<SpotifyLoginResponse, SpotifyLoginCredentials>({
      query: (data: SpotifyLoginCredentials) => ({
        url: "/spotify/login",
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const { useSpotifyLoginMutation } = spotifyApiSlice;
