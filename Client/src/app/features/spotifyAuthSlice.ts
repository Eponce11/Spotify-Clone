import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface SpotifyAuthState {
  accessToken: string | null;
  refreshToken: string | null;
  expiresIn: number | null;
}

interface SpotifyRefreshCredentials {
  accessToken: string;
  expiresIn: number;
}

const initialState: SpotifyAuthState = {
  accessToken: null,
  refreshToken: null,
  expiresIn: null,
};

const spotifyAuthSlice = createSlice({
  name: "spotifyAuth",
  initialState,
  reducers: {
    setSpotifyAuthCredentials: (
      state: SpotifyAuthState,
      action: PayloadAction<SpotifyAuthState>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.expiresIn = action.payload.expiresIn;
    },
    setSpotifyRefreshCredentials: (
      state: SpotifyAuthState,
      action: PayloadAction<SpotifyRefreshCredentials>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.expiresIn = action.payload.expiresIn;
    },
  },
});

export const { setSpotifyAuthCredentials, setSpotifyRefreshCredentials } =
  spotifyAuthSlice.actions;

export const selectSpotifyAuthAccessToken = (state: RootState) =>
  state.spotifyAuth.accessToken;
export const selectSpotifyAuthRefreshToken = (state: RootState) =>
  state.spotifyAuth.refreshToken;
export const selectSpotifyAuthExpiresIn = (state: RootState) =>
  state.spotifyAuth.expiresIn;

export default spotifyAuthSlice.reducer;
