import { spotifyApi } from "../constants";

interface UseAdjustVolumeReturn {
  adjustVolume: (volume: number) => void;
}

const useAdjustVolume = (): UseAdjustVolumeReturn => {
  const adjustVolume = (volume: number): void => {
    spotifyApi.setVolume(volume);
  };
  return { adjustVolume };
};

export default useAdjustVolume;
