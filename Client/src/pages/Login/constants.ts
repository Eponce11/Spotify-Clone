const clientId: string = "d64b18692a0b431cacaf55d015b1d6ad"
const redirectUri: string = "http://localhost:5173";

export const AUTH_URL =
  `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=streaming%20user-read-email%20user-read-private&user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

