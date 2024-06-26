type ItemType = "artist" | "album" | "playlist" | "track";
export interface Track {
  artist: string;
  title: string;
  albumUrl: string;
  uri: string;
  duration: string;
  isExplicit: boolean;
  type: ItemType;
  dateAdded?: string;
  albumName?: string | null;
  id: string;
  prismaId?: string;
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

export const isInstanceOfAlbum = (object: any): object is Album => {
  return object.type === "album";
};

export interface Playlist {
  description: string | null;
  id: string;
  playlistUrl: string | null;
  name: string;
  owner: string | undefined;
  type: ItemType;
  uri?: string;
  tracks?: Track[];
  totalTracks?: number;
  prismaId?: number;
}

export const isInstanceOfPlaylist = (object: any): object is Playlist => {
  return object.type === "playlist";
};

export interface SearchResult {
  tracks?: Track[];
  artists?: Artist[];
  albums?: Album[];
  playlists?: Playlist[];
}

export interface Position {
  x: number;
  y: number;
}
