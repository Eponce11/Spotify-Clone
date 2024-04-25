import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Track } from "../../pages/Home/types";

interface SpotifyPlaybackState {
  isPlaying: boolean;
  currentTrack: Track | null;
}

const initialState: SpotifyPlaybackState = {
  isPlaying: false,
  currentTrack: null,
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
      action: PayloadAction<Track>
    ) => {
      state.isPlaying = true;
      state.currentTrack = action.payload;
    },
  },
});

export const { setIsPlaying, setCurrentTrack } = spotifyPlaybackSlice.actions;

export const selectSpotifyPlaybackIsPlaying = (state: RootState) =>
  state.spotifyPlayback.isPlaying;
export const selectSpotifyPlaybackCurrentTrack = (state: RootState) =>
  state.spotifyPlayback.currentTrack;

export default spotifyPlaybackSlice.reducer;
