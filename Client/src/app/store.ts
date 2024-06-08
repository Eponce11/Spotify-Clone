import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { apiSlice } from "../api/apiSlice";
import authReducer from "./features/authSlice";
import spotifyAuthReducer from "./features/spotifyAuthSlice";
import spotifyPlaybackReducer from "./features/spotifyPlaybackSlice";

const reducers = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  spotifyAuth: spotifyAuthReducer,
  spotifyPlayback: spotifyPlaybackReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
