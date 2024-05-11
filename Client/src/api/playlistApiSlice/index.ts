import { apiSlice } from "../apiSlice";
import { PlaylistCreateData, PlaylistCreateResponse } from "./types";

export const playlistApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPlaylist: builder.mutation<
      PlaylistCreateResponse,
      PlaylistCreateData
    >({
      query: (data: PlaylistCreateData) => ({
        url: "/playlist/create",
        method: "POST",
        body: { ...data },
      }),
    }),
    getPlaylists: builder.query<any, number>({
      query: (id: number) => ({
        url: `/playlist/getAll/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCreatePlaylistMutation, useGetPlaylistsQuery } = playlistApiSlice;
