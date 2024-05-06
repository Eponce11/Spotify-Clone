import { spotifyApi } from "../constants";
import {
  Track,
  Album,
  Playlist,
  isInstanceOfAlbum,
  isInstanceOfPlaylist,
} from "../../pages/Home/types";
import { useAppDispatch } from "../../app/hooks";
import { setCurrentTrack } from "../../app/features/spotifyPlaybackSlice";

interface UsePlayTracksReturn {
  playTracks: (
    track: Track | Album | Playlist,
    position?: number
  ) => Promise<void>;
}

const usePlayTracks = (): UsePlayTracksReturn => {
  const dispatch = useAppDispatch();
  const playTracks = async (
    track: Track | Album | Playlist,
    position: number = 0
  ): Promise<void> => {
    const playConfig: any = {
      position_ms: 0,
      offset: {
        position: position,
      },
    };

    let setTrackConfig: any = {
      isPlaying: true,
      collectionTrackPosition: position,
    };

    if (track.type === "track") {
      playConfig.uris = [track.uri];
      setTrackConfig.currentTrack = track;
      setTrackConfig.currentAlbum = null;
      setTrackConfig.currentPlaylist = null;
    }

    if (track.type === "album") {
      playConfig.context_uri = track.uri;
      if (isInstanceOfAlbum(track) && track.tracks !== undefined) {
        setTrackConfig.currentTrack = track.tracks[position];
      }
      setTrackConfig.currentAlbum = track;
      setTrackConfig.currentPlaylist = null;
    }

    if (track.type === "playlist") {
      playConfig.context_uri = track.uri;
      if (isInstanceOfPlaylist(track) && track.tracks !== undefined) {
        setTrackConfig.currentTrack = track.tracks[position];
      }
      setTrackConfig.currentAlbum = null;
      setTrackConfig.currentPlaylist = track;
    }

    console.log(track);
    await spotifyApi.play(playConfig);

    dispatch(setCurrentTrack(setTrackConfig));
  };
  return { playTracks };
};

export default usePlayTracks;
