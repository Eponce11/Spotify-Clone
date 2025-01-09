import { spotifyApi } from "../constants";
import type { SearchResult } from "../../pages/Home/types";
import { useFilterResponse } from "./";

interface UseSpotifySearchReturn {
  spotifySearch: (
    search: string,
    searchTypes?: SearchType[]
  ) => Promise<SearchResult>;
}

type SearchType = "album" | "artist" | "playlist" | "track";

const useSpotifySearch = (): UseSpotifySearchReturn => {
  const { filterAlbum, filterTrack, filterArtist, filterPlaylist } =
    useFilterResponse();
  const spotifySearch = async (
    search: string,
    searchTypes: SearchType[] = ["album", "artist", "playlist", "track"]
  ): Promise<SearchResult> => {
    const res = await spotifyApi.search(search, [...searchTypes]);
    console.log(res.body);
    let searchResult: SearchResult = {};

    if (res.body.hasOwnProperty("tracks")) {
      const filteredTracks = filterTrack(res.body.tracks?.items);
      if (filteredTracks) searchResult.tracks = [...filteredTracks];
    }

    if (res.body.hasOwnProperty("albums")) {
      const filteredAlbums = filterAlbum(res.body.albums?.items);
      if (filteredAlbums) searchResult.albums = [...filteredAlbums];
    }

    if (res.body.hasOwnProperty("artists")) {
      const filteredArtists = filterArtist(res.body.artists?.items);
      if (filteredArtists) searchResult.artists = [...filteredArtists];
    }

    if (res.body.hasOwnProperty("playlists")) {
      const filteredPlaylists = filterPlaylist(res.body.playlists?.items);
      if (filteredPlaylists) searchResult.playlists = [...filteredPlaylists];
    }

    return searchResult;
  };
  return { spotifySearch };
};

export default useSpotifySearch;
