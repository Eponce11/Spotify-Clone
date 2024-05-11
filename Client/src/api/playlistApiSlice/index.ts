import { apiSlice } from "../apiSlice";

export const playlistApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPlaylist: builder.mutation<any, any>({
      query: (data: any) => ({
        url: "/playlist/create",
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const { useCreatePlaylistMutation } = playlistApiSlice;
