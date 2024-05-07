import React from "react";
import { usePlayTracks, useTogglePlayback } from "../../../common/hooks";
import type { Track, Album, Playlist } from "../types";
import { FaPlay, FaPause } from "react-icons/fa";
import { useAppSelector } from "../../../app/hooks";
import {
  selectSpotifyPlaybackCurrentAlbum,
  selectSpotifyPlaybackCurrentTrack,
  selectSpotifyPlaybackCurrentPlaylist,
  selectSpotifyPlaybackIsPlaying,
} from "../../../app/features/spotifyPlaybackSlice";
interface GreenPlayButtonProps {
  track: Track | Album | Playlist;
  className?: string;
}

const GreenPlayButton = (props: GreenPlayButtonProps) => {
  const { track, className } = props;
  const { playTracks } = usePlayTracks();
  const { togglePlayback } = useTogglePlayback();

  const currentTrack = useAppSelector(selectSpotifyPlaybackCurrentTrack);
  const currentAlbum = useAppSelector(selectSpotifyPlaybackCurrentAlbum);
  const currentPlaylist = useAppSelector(selectSpotifyPlaybackCurrentPlaylist);
  const isPlaying = useAppSelector(selectSpotifyPlaybackIsPlaying);
  const isPlayingThisTrack =
    currentTrack?.uri === track.uri ||
    currentAlbum?.uri === track.uri ||
    currentPlaylist?.uri === track.uri;

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (isPlayingThisTrack) {
      togglePlayback();
    } else {
      playTracks(track);
    }
  };

  return (
    <div
      className={`h-14 aspect-square rounded-full bg-lightGreen flex items-center justify-center z-10 cursor-pointer ${
        isPlayingThisTrack && isPlaying ? "visible" : "invisible"
      } ${className}`}
      onClick={handleOnClick}
    >
      {isPlayingThisTrack && isPlaying ? (
        <FaPause color="black" />
      ) : (
        <FaPlay color="black" height="100px" />
      )}
    </div>
  );
};

export default GreenPlayButton;
