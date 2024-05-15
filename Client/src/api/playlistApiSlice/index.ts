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
    getLibraryPlaylists: builder.mutation<any, any>({
      query: (data: any) => ({
        url: `/playlist/getAll/ownAndSpotify`,
        method: "POST",
        body: { ...data },
      }),
    }),
    getOnePlaylist: builder.mutation<any, any>({
      query: (data: any) => ({
        url: `/playlist/getOne`,
        method: "POST",
        body: { ...data },
      }),
    }),
    addSongToPlaylist: builder.mutation<any, any>({
      query: (data: any) => ({
        url: `/playlist/addSong`,
        method: "POST",
        body: { ...data },
      }),
    }),
    addSpotifyCollectionToLibrary: builder.mutation<any, any>({
      query: (data: any) => ({
        url: `/playlist/addPlaylist/library`,
        method: "POST",
        body: { ...data },
      }),
    }),
    removeSpotifyCollectionFromLibrary: builder.mutation<any, any>({
      query: (data: any) => ({
        url: `/playlist/removePlaylist/library`,
        method: "POST",
        body: { ...data },
      }),
    }),
    deleteOwnPlaylist: builder.mutation<any, any>({
      query: (data: any) => ({
        url: `/playlist/delete`,
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const {
  useCreatePlaylistMutation,
  useGetPlaylistsQuery,
  useGetOnePlaylistMutation,
  useAddSongToPlaylistMutation,
  useAddSpotifyCollectionToLibraryMutation,
  useGetLibraryPlaylistsMutation,
  useRemoveSpotifyCollectionFromLibraryMutation,
  useDeleteOwnPlaylistMutation,
} = playlistApiSlice;
