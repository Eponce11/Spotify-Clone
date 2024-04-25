import { usePlayTracks } from "../../../common/hooks";
import type { Track } from "../types";

interface GreenPlayButtonProps {
  track: Track;
  className?: string;
}

const GreenPlayButton = (props: GreenPlayButtonProps) => {
  const { track, className } = props;
  const { playTracks } = usePlayTracks();
  return (
    <div
      className={`h-14 aspect-square rounded-full bg-lightGreen ${className}`}
      onClick={() => playTracks(track)}
    />
  );
};

export default GreenPlayButton;
