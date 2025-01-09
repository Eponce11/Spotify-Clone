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
        albumUrl: track.hasOwnProperty("album")
          ? track.album.images[0].url
          : null,
        albumName: track.hasOwnProperty("album") ? track.album.name : null,
        duration: convertMillisToMinutes(track.duration_ms),
        isExplicit: track.explicit,
        type: track.type,
        id: track.id,
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

    const removedPlaylistNull = data.filter((playlist: any) => playlist !== null);

    const filteredPlaylists = removedPlaylistNull.map((playlist: any): Playlist => {
      const currentPlaylist: Playlist = {
        description: playlist.description,
        id: playlist.id,
        playlistUrl: playlist.images[0].url,
        name: playlist.name,
        owner: playlist.owner.display_name,
        type: playlist.type,
        uri: playlist.uri,
      };

      if (playlist.hasOwnProperty("tracks")) {
        currentPlaylist.totalTracks = playlist.tracks.total;
        const filteredTracks = playlist.tracks?.items?.map(
          (track: any): Track => {
            const filteredTrack = filterTrack([track.track]);
            filteredTrack[0].dateAdded = track.added_at;
            filteredTrack[0].albumName = track.track.album.name;
            return filteredTrack[0];
          }
        );

        currentPlaylist.tracks = filteredTracks;
      }

      return currentPlaylist;
    });
    return filteredPlaylists;
  };

  return { filterAlbum, filterTrack, filterArtist, filterPlaylist };
};

export default useFilterResponse;
