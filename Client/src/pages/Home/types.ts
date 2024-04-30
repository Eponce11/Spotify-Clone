type ItemType = "artist" | "album" | "playlist" | "track";
export interface Track {
  artist: string;
  title: string;
  albumUrl: string;
  uri: string;
  duration: string;
  isExplicit: boolean;
  type: ItemType;
}

export interface Artist {
  artistUrl: string | null;
  name: string;
  type: ItemType;
}

export interface Album {
  type: ItemType;
  artist: string;
  albumUrl: string;
  name: string;
  uri: string;
  releaseDate: string;
  id: string;
  totalTracks?: number;
  tracks?: Track[];
}

export interface Playlist {
  description: string | null;
  id: string;
  playlistUrl: string;
  name: string;
  owner: string | undefined;
  type: ItemType;
}
export interface SearchResult {
  tracks?: Track[];
  artists?: Artist[];
  albums?: Album[];
  playlists?: Playlist[];
}
