import { useEffect } from "react";
import { AUTH_URL } from "../constants";
import { useSpotifyLoginMutation } from "../../../api/spotifyApiSlice";

const code = new URLSearchParams(window.location.search).get("code");

const SpotifyLogin = () => {
  const [spotifyLogin] = useSpotifyLoginMutation();

  useEffect(() => {
    const fetchData = async () => {
      if (!code) return;
      const response = await spotifyLogin({ code }).unwrap();
      console.log(response);
      console.log("Hello")
    };
    fetchData();
  }, [code]);

  return (
    <section>
      {code ? <></> : <a href={AUTH_URL}>Spotify Login</a>}
    </section>
  );
};

export default SpotifyLogin;
