import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import {
  selectSpotifyAuthRefreshToken,
  selectSpotifyAuthExpiresIn,
  setSpotifyRefreshCredentials,
} from "../../app/features/spotifyAuthSlice";
import { spotifyApi } from "../constants";
import { useSpotifyRefreshTokenMutation } from "../../api/spotifyApiSlice";
import { useAppDispatch } from "../../app/hooks";

const useSpotifyRefreshToken = (): void => {
  const [spotifyRefreshToken] = useSpotifyRefreshTokenMutation();
  const refreshToken = useAppSelector(selectSpotifyAuthRefreshToken);
  const expiresIn = useAppSelector(selectSpotifyAuthExpiresIn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const fetchData = async () => {
      const interval = setInterval(async () => {
        const response = await spotifyRefreshToken({ refreshToken }).unwrap();
        dispatch(
          setSpotifyRefreshCredentials({
            accessToken: response.accessToken,
            expiresIn: response.expiresIn,
          })
        );
        spotifyApi.setAccessToken(response.accessToken);
      }, (expiresIn - 60) * 1000);
      return () => clearInterval(interval);
    };
    fetchData();
  }, [refreshToken, expiresIn]);
};

export default useSpotifyRefreshToken;
