import { apiSlice } from "../apiSlice";
import type {
  SpotifyLoginCredentials,
  SpotifyLoginResponse,
  SpotifyRefreshCredentials,
  SpotifyRefreshResponse,
} from "./types";

export const spotifyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    spotifyLogin: builder.mutation<
      SpotifyLoginResponse,
      SpotifyLoginCredentials
    >({
      query: (data: SpotifyLoginCredentials) => ({
        url: "/spotify/login",
        method: "POST",
        body: { ...data },
      }),
    }),
    spotifyRefreshToken: builder.mutation<
      SpotifyRefreshResponse,
      SpotifyRefreshCredentials
    >({
      query: (data: SpotifyRefreshCredentials) => ({
        url: "/spotify/refresh",
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const { useSpotifyLoginMutation, useSpotifyRefreshTokenMutation } = spotifyApiSlice;
