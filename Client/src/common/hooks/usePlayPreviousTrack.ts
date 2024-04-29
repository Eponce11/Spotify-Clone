import { spotifyApi } from "../constants";

interface UsePlayPreviousTrackReturn {
  playPreviousTrack: () => void;
}

const usePlayPreviousTrack = (): UsePlayPreviousTrackReturn => {
  const playPreviousTrack = (): void => {
    spotifyApi.skipToPrevious();
  };
  return { playPreviousTrack };
};

export default usePlayPreviousTrack;
