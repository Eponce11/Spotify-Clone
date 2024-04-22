export interface SpotifyLoginCredentials {
  code: string
}

export interface SpotifyLoginResponse {
  spotifyAccessToken: string,
  spotifyRefreshToken: string,
  expiresIn: number
}