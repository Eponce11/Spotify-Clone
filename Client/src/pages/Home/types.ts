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
  artistUrl: string;
  name: string;
  type: ItemType;
}

export interface Album {
  type: ItemType;
  artists: any[];
  albumUrl: string;
  name: string;
  uri: string;
}
export interface SearchResult {
  tracks?: Track[];
  artists?: any[];
  albums?: any[];
}
