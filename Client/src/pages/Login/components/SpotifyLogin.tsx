import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_URL } from "../constants";
import { useSpotifyLoginMutation } from "../../../api/spotifyApiSlice";
import { useAppDispatch } from "../../../app/hooks";
import { setSpotifyAuthCredentials } from "../../../app/features/spotifyAuthSlice";

const code = new URLSearchParams(window.location.search).get("code");

const SpotifyLogin = () => {
  const [spotifyLogin] = useSpotifyLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!code) return;
      const response = await spotifyLogin({ code }).unwrap();
      dispatch(
        setSpotifyAuthCredentials({
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
          expiresIn: response.expiresIn,
        })
      );
      navigate("/home/search");
    };
    fetchData();
  }, [code]);

  return (
    <section><a href={AUTH_URL}>Spotify Login</a></section>
  );
};

export default SpotifyLogin;
