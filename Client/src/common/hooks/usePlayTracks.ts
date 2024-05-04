import { spotifyApi } from "../constants";
import type { Track, Album } from "../../pages/Home/types";
import { setCurrentTrack } from "../../app/features/spotifyPlaybackSlice";
import { useAppDispatch } from "../../app/hooks";

interface UsePlayTracksReturn {
  playTracks: (
    track: Track | Album,
    position?: number
  ) => void;
}

const usePlayTracks = (): UsePlayTracksReturn => {
  const dispatch = useAppDispatch();
  const playTracks = (
    track: Track | Album,
    position: number = 0
  ): void => {
    // dispatch(setCurrentTrack(track));

    const playConfig: any = {
      position_ms: 0,
      offset: {
        position: position,
      },
    };

    if (track.type === "track") playConfig.uris = [track.uri];
    if (track.type === "album") playConfig.context_uri = track.uri;

    spotifyApi.play(playConfig);
  };
  return { playTracks };
};

export default usePlayTracks;

// uris: [track.uri],
