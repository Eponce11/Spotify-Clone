import React from "react";
import { usePlayTracks } from "../../../common/hooks";
import type { Track, Album } from "../types";
import { FaPlay } from "react-icons/fa";

interface GreenPlayButtonProps {
  track: Track | Album;
  className?: string;
}

const GreenPlayButton = (props: GreenPlayButtonProps) => {
  const { track, className } = props;
  const { playTracks } = usePlayTracks();

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    playTracks(track);
  };

  return (
    <div
      className={`h-14 aspect-square rounded-full bg-lightGreen ${className} flex items-center justify-center z-10`}
      onClick={handleOnClick}
    >
      <FaPlay color="black" />
    </div>
  );
};

export default GreenPlayButton;
