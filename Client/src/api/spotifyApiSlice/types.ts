export interface SpotifyLoginCredentials {
  code: string;
}

export interface SpotifyLoginResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface SpotifyRefreshCredentials {
  refreshToken: string;
}

export interface SpotifyRefreshResponse {
  accessToken: string;
  expiresIn: number;
}
