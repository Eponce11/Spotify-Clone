import { useAppSelector } from "../../../app/hooks";
import { selectSpotifyPlaybackIsPlaying } from "../../../app/features/spotifyPlaybackSlice";
import { useTogglePlayback } from "../../../common/hooks";

const BottomPlaybar = () => {
  const isPlaying = useAppSelector(selectSpotifyPlaybackIsPlaying);
  const { togglePlayback } = useTogglePlayback();

  return (
    <footer className="text-white h-[72px] bg-[red] py-2 px-3">
      <div onClick={togglePlayback}>{isPlaying ? "Pause" : "Resume"}</div>
    </footer>
  );
};

export default BottomPlaybar;
