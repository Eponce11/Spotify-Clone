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
}
export interface SearchResult {
  tracks?: Track[];
  artists?: any[];
  albums?: any[];
}
