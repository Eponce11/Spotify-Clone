import { spotifyApi } from "../constants";
import { useAppDispatch } from "../../app/hooks";
import { setIsPlaying } from "../../app/features/spotifyPlaybackSlice";

interface UseTogglePlaybackReturn {
  togglePlayback: () => Promise<void>;
}

const useTogglePlayback = (): UseTogglePlaybackReturn => {
  const dispatch = useAppDispatch();
  const togglePlayback = async (): Promise<void> => {
    const res = await spotifyApi.getMyCurrentPlaybackState();
    const isPlaying: boolean = res.body.is_playing;
    if (isPlaying) {
      spotifyApi.pause();
      dispatch(setIsPlaying(false));
    } else {
      spotifyApi.play();
      dispatch(setIsPlaying(true));
    }
  };
  return { togglePlayback };
};

export default useTogglePlayback;
