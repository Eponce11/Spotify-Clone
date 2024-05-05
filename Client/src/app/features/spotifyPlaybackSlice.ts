import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Track, Album } from "../../pages/Home/types";

export interface SpotifyPlaybackState {
  isPlaying: boolean;
  currentTrack: Track | null;
  currentAlbum: Album | null;
  collectionTrackPosition: number | null;
}

const initialState: SpotifyPlaybackState = {
  isPlaying: false,
  currentTrack: null,
  currentAlbum: null,
  collectionTrackPosition: null
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
      state.collectionTrackPosition = action.payload.collectionTrackPosition;
    },
  },
});

export const { setIsPlaying, setCurrentTrack } = spotifyPlaybackSlice.actions;

export const selectSpotifyPlaybackIsPlaying = (state: RootState) =>
  state.spotifyPlayback.isPlaying;
export const selectSpotifyPlaybackCurrentTrack = (state: RootState) =>
  state.spotifyPlayback.currentTrack;

export default spotifyPlaybackSlice.reducer;
