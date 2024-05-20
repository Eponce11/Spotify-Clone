import { spotifyApi } from "../constants";

interface UseToggleMuteReturn {
  toggleMute: (isMuted: boolean, volume?: number) => void;
}

const useToggleMute = (): UseToggleMuteReturn => {
  const toggleMute = (isMuted: boolean, volume: number = 0): void => {
    if (isMuted) {
      spotifyApi.setVolume(volume);
    } else {
      spotifyApi.setVolume(volume);
    }
  };
  return { toggleMute };
};

export default useToggleMute;
