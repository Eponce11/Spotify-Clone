import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface SpotifyPlaybackState {
  isPlaying: boolean;
}

const initialState: SpotifyPlaybackState = {
  isPlaying: false,
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
  },
});

export const { setIsPlaying } = spotifyPlaybackSlice.actions;

export const selectSpotifyPlaybackIsPlaying = (state: RootState) =>
  state.spotifyPlayback.isPlaying;

export default spotifyPlaybackSlice.reducer;
