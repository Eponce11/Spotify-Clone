import { useState } from "react";
import type { Playlist, Track } from "../types";
import { FaPlay, FaPause } from "react-icons/fa";
import { ExplicitLabel } from ".";
import { usePlayTracks, useTogglePlayback } from "../../../common/hooks";
import { useAppSelector } from "../../../app/hooks";
import {
  selectSpotifyPlaybackCurrentTrack,
  selectSpotifyPlaybackIsPlaying,
} from "../../../app/features/spotifyPlaybackSlice";
interface PlaylistPlaylistProps {
  playlist: Playlist;
}

const PlaylistPlaylist = (props: PlaylistPlaylistProps) => {
  const { playlist } = props;
  const { playTracks } = usePlayTracks();
  const { togglePlayback } = useTogglePlayback();
  const currentTrack = useAppSelector(selectSpotifyPlaybackCurrentTrack);
  const isPlaying = useAppSelector(selectSpotifyPlaybackIsPlaying);

  return (
    <ul className="w-full px-6 text-txtGrey text-h5 mb-5">
      {playlist.tracks?.map((track: Track, idx: number) => {
        const [isHover, setIsHover] = useState(false);
        return (
          <li
            className="flex items-center py-2 hover:bg-hoverLightGrey rounded-md"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            key={track.uri}
          >
            {track.uri === currentTrack?.uri && isPlaying ? (
              <div
                className="w-[50px] px-4 cursor-pointer"
                onClick={() => togglePlayback()}
              >
                <FaPause />
              </div>
            ) : (
              <div
                className="w-[50px] px-4 cursor-pointer ml-1"
                onClick={() => {
                  if (track.uri === currentTrack?.uri) {
                    togglePlayback();
                  } else {
                    playTracks(playlist, idx);
                  }
                }}
              >
                {isHover ? <FaPlay /> : idx + 1}
              </div>
            )}

            <div className="flex grow items-center">
              <div className="w-2/5 flex items-center">
                <img
                  src={track.albumUrl}
                  alt="track img"
                  className="h-10 aspect-square rounded-sm"
                />
                <div className="flex flex-col gap-1 justify-center ml-3 py-1">
                  <span
                    className={`text-h5 ${
                      track.uri === currentTrack?.uri
                        ? "text-lightGreen"
                        : "text-white"
                    }`}
                  >
                    {track.title}
                  </span>
                  <div className="flex">
                    {track.isExplicit && <ExplicitLabel />}
                    <span className="text-h6">{track.artist}</span>
                  </div>
                </div>
              </div>
              <div className="w-1/3 text-h6">{track.albumName}</div>
              <div className="w-1/3 text-h6">2 Weeks Ago</div>
            </div>

            <div className="w-16 pr-8 text-right">{track.duration}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default PlaylistPlaylist;