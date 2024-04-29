import { spotifyApi } from "../constants";

interface UsePlayNextTrackReturn {
  playNextTrack: () => void;
}

const usePlayNextTrack = (): UsePlayNextTrackReturn => {
  const playNextTrack = (): void => {
    spotifyApi.skipToNext();
  };
  return { playNextTrack };
};

export default usePlayNextTrack;
