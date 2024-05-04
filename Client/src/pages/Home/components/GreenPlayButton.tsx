import { usePlayTracks } from "../../../common/hooks";
import type { Track } from "../types";
import { FaPlay } from "react-icons/fa";

interface GreenPlayButtonProps {
  track: Track;
  className?: string;
}

const GreenPlayButton = (props: GreenPlayButtonProps) => {
  const { track, className } = props;
  const { playTracks } = usePlayTracks();
  return (
    <div
      className={`h-14 aspect-square rounded-full bg-lightGreen ${className} flex items-center justify-center`}
      onClick={() => playTracks(track)}
    >
      <FaPlay color="black" />
    </div>
  );
};

export default GreenPlayButton;
