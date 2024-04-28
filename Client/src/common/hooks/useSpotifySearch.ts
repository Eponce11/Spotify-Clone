import { spotifyApi } from "../constants";
import { convertMillisToMinutes, getArtistNames } from "../utils";

import type {
  Track,
  Artist,
  Album,
  SearchResult,
} from "../../pages/Home/types";

interface UseSpotifySearchReturn {
  spotifySearch: (
    search: string,
    searchTypes?: SearchType[]
  ) => Promise<SearchResult>;
}

type SearchType = "album" | "artist" | "playlist" | "track";

const useSpotifySearch = (): UseSpotifySearchReturn => {
  const spotifySearch = async (
    search: string,
    searchTypes: SearchType[] = ["album", "artist", "playlist", "track"]
  ): Promise<SearchResult> => {
    const res = await spotifyApi.search(search, [...searchTypes]);
    console.log(res);
    let searchResult: SearchResult = {};

    if (res.body.hasOwnProperty("tracks")) {
      const filteredTracks = res.body.tracks?.items.map((track): Track => {
        const artistNames = getArtistNames(track.artists);
        return {
          artist: artistNames,
          title: track.name,
          uri: track.uri,
          albumUrl: track.album.images[0].url,
          duration: convertMillisToMinutes(track.duration_ms),
          isExplicit: track.explicit,
          type: track.type,
        };
      });
      if (filteredTracks) searchResult.tracks = [...filteredTracks];
    }

    if (res.body.hasOwnProperty("albums")) {
      const filteredAlbums = res.body.albums?.items.map((album): Album => {
        const artistNames = getArtistNames(album.artists);
        return {
          type: album.type,
          artist: artistNames,
          albumUrl: album.images[0].url,
          name: album.name,
          uri: album.uri,
          releaseDate: album.release_date.split("-")[0],
        };
      });
      if (filteredAlbums) searchResult.albums = [...filteredAlbums];
    }

    if (res.body.hasOwnProperty("artists")) {
      const filteredArtists = res.body.artists?.items.map((artist): Artist => {
        return {
          artistUrl: artist.images.length > 0 ? artist.images[0].url : null,
          name: artist.name,
          type: artist.type,
        };
      });
      if (filteredArtists) searchResult.artists = [...filteredArtists];
    }

    return searchResult;
  };
  return { spotifySearch };
};

export default useSpotifySearch;
