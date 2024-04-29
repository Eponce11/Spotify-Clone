type ItemType = "artist" | "album" | "playlist" | "track";
export interface SearchTrack {
  artist: string;
  title: string;
  albumUrl: string;
  uri: string;
  duration: string;
  isExplicit: boolean;
  type: ItemType;
}

export interface SearchArtist {
  artistUrl: string | null;
  name: string;
  type: ItemType;
}

export interface SearchAlbum {
  type: ItemType;
  artist: string;
  albumUrl: string;
  name: string;
  uri: string;
  releaseDate: string;
  id: string;
}

export interface SearchPlaylist {
  description: string;
  id: string;
  playlistUrl: string;
  name: string;
  owner: string;
  type: ItemType;
}
export interface SearchResult {
  tracks?: SearchTrack[];
  artists?: SearchArtist[];
  albums?: SearchAlbum[];
  playlists?: SearchPlaylist[];
}
