import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_URL } from "../../pages/Login/constants";
import { spotifyApi } from "../constants";
import { useSpotifyLoginMutation } from "../../api/spotifyApiSlice";
import { useAppDispatch } from "../../app/hooks";
import { setSpotifyAuthCredentials } from "../../app/features/spotifyAuthSlice";

const code = new URLSearchParams(window.location.search).get("code");

const SpotifyLoginCard = () => {
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
      spotifyApi.setAccessToken(response.accessToken);
      navigate("/home/search");
    };
    fetchData();
  }, [code]);

  return (
    <section className="bg-[#0f0f0f] text-white p-24 w-[600px] flex flex-col items-center rounded-lg">
      <a
        href={AUTH_URL}
        className="w-[300px] bg-lightGreen text-black text-h5 py-4 rounded-full text-center"
      >
        <strong>Spotify Login</strong>
      </a>
    </section>
  );
};

export default SpotifyLoginCard;
