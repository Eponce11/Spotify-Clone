import { spotifyApi } from "../constants";
import type { Track } from "../../pages/Home/types";
import { setCurrentTrack } from "../../app/features/spotifyPlaybackSlice";
import { useAppDispatch } from "../../app/hooks";

interface UsePlayTracksReturn {
  playTracks: (track: Track) => void;
}

const usePlayTracks = (): UsePlayTracksReturn => {
  const dispatch = useAppDispatch();
  const playTracks = (track: Track): void => {
    dispatch(setCurrentTrack(track));
    spotifyApi.play({ uris: [track.uri] });
  };
  return { playTracks };
};

export default usePlayTracks;
