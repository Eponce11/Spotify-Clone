import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Track, Album, Playlist } from "../../pages/Home/types";

export interface SpotifyPlaybackState {
  isPlaying: boolean;
  currentTrack: Track | null;
  currentAlbum: Album | null;
  currentPlaylist: Playlist | null;
  collectionTrackPosition: number | null;
}

const initialState: SpotifyPlaybackState = {
  isPlaying: false,
  currentTrack: null,
  currentAlbum: null,
  currentPlaylist: null,
  collectionTrackPosition: null,
};

const spotifyPlaybackSlice = createSlice({
  name: "spotifyPlayback",
  initialState,
  reducers: {
    setIsPlaying: (
      state: SpotifyPlaybackState,
      action: PayloadAction<boolean>
    ) => {
      state.isPlaying = action.payload;
    },
    setCurrentTrack: (
      state: SpotifyPlaybackState,
      action: PayloadAction<SpotifyPlaybackState>
    ) => {
      state.isPlaying = action.payload.isPlaying;
      state.currentTrack = action.payload.currentTrack;
      state.currentAlbum = action.payload.currentAlbum;
      state.currentPlaylist = action.payload.currentPlaylist;
      state.collectionTrackPosition = action.payload.collectionTrackPosition;
    },
  },
});

export const { setIsPlaying, setCurrentTrack } = spotifyPlaybackSlice.actions;

export const selectSpotifyPlaybackIsPlaying = (state: RootState) =>
  state.spotifyPlayback.isPlaying;
export const selectSpotifyPlaybackCurrentTrack = (state: RootState) =>
  state.spotifyPlayback.currentTrack;
export const selectSpotifyPlaybackCurrentAlbum = (state: RootState) =>
  state.spotifyPlayback.currentAlbum;
export const selectSpotifyPlaybackCurrentPlaylist = (state: RootState) =>
  state.spotifyPlayback.currentPlaylist;
export const selectSpotifyPlaybackCollectionTrackPosition = (
  state: RootState
) => state.spotifyPlayback.collectionTrackPosition;

export default spotifyPlaybackSlice.reducer;
