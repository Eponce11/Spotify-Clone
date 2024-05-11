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
    getOnePlaylist: builder.mutation<any, any>({
      query: (data: any) => ({
        url: `/playlist/getOne`,
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const { useCreatePlaylistMutation, useGetPlaylistsQuery, useGetOnePlaylistMutation } =
  playlistApiSlice;
