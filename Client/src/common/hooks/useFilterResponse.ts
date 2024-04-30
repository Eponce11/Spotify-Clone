import type { Track, Artist, Album, Playlist } from "../../pages/Home/types";
import { convertMillisToMinutes, getArtistNames } from "../utils";

interface UseFilterResponseResponse {
  filterAlbum: (data: any) => Album[];
  filterTrack: (data: any) => Track[];
  filterArtist: (data: any) => Artist[];
  filterPlaylist: (data: any) => Playlist[];
}

const useFilterResponse = (): UseFilterResponseResponse => {
  const filterAlbum = (data: any): Album[] => {
    const filteredAlbums = data.map((album: any): Album => {
      const artistNames = getArtistNames(album.artists);
      const currentAlbum: Album = {
        type: album.type,
        artist: artistNames,
        albumUrl: album.images[0].url,
        name: album.name,
        uri: album.uri,
        releaseDate: album.release_date.split("-")[0],
        id: album.id,
      };

      if (album.hasOwnProperty("tracks")) {
        currentAlbum.tracks = filterTrack(album.tracks.items);
      }
      if (album.hasOwnProperty("total_tracks")) {
        currentAlbum.totalTracks = album.total_tracks;
      }
      return currentAlbum;
    });
    return filteredAlbums;
  };

  const filterTrack = (data: any): Track[] => {
    const filteredTracks = data.map((track: any): Track => {
      const artistNames = getArtistNames(track.artists);
      return {
        artist: artistNames,
        title: track.name,
        uri: track.uri,
        albumUrl: track.hasOwnProperty("album") ? track.album.images[0].url : null,
        duration: convertMillisToMinutes(track.duration_ms),
        isExplicit: track.explicit,
        type: track.type,
      };
    });
    return filteredTracks;
  };

  const filterArtist = (data: any): Artist[] => {
    const filteredArtists = data.map((artist: any): Artist => {
      return {
        artistUrl: artist.images.length > 0 ? artist.images[0].url : null,
        name: artist.name,
        type: artist.type,
      };
    });
    return filteredArtists;
  };

  const filterPlaylist = (data: any): Playlist[] => {
    const filteredPlaylists = data.map((playlist: any): Playlist => {
      return {
        description: playlist.description,
        id: playlist.id,
        playlistUrl: playlist.images[0].url,
        name: playlist.name,
        owner: playlist.owner.display_name,
        type: playlist.type,
      };
    });
    return filteredPlaylists;
  };

  return { filterAlbum, filterTrack, filterArtist, filterPlaylist };
};

export default useFilterResponse;
