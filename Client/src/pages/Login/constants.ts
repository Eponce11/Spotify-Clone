import { clientId } from "../../common/constants";
const redirectUri: string = "http://localhost:5173";
// const scope: string = "scope=streaming%20user-read-email%20user-read-private&user-library-read%20user-library-modify&user-read-playback-state&user-modify-playback-state"
const scope: string = "scope=streaming%20user-read-playback-state%20user-modify-playback-state"

export const AUTH_URL =
  `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&${scope}`;

