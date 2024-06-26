import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface AuthState {
  id: number | null;
  username: string | null;
  token: string | null;
}

const initialState: AuthState = {
  id: 1,
  username: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state: AuthState, action: PayloadAction<AuthState>) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
    logout: (state: AuthState, action: PayloadAction<void>) => {
      state.id = null;
      state.username = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export const selectAuthId = (state: RootState) => state.auth.id;
export const selectAuthUsername = (state: RootState) => state.auth.username;
export const selectAuthToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
