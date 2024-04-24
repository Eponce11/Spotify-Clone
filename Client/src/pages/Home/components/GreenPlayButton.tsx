import { playTracks } from "../../../common/spotify";

interface GreenPlayButtonProps {
  uris: string[];
  className?: string;
}

const GreenPlayButton = (props: GreenPlayButtonProps) => {
  const { uris, className } = props;

  return (
    <div
      className={`h-14 aspect-square rounded-full bg-lightGreen ${className}`}
      onClick={() => playTracks(uris)}
    />
  );
};

export default GreenPlayButton;
