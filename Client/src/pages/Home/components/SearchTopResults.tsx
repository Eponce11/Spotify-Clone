import { useState } from "react";
import type { Track, Position } from "../types";
import { AddSongMenu, ExplicitLabel, GreenPlayButton } from "./";
import { usePlayTracks, useTogglePlayback } from "../../../common/hooks";
import { FaPlay, FaPause } from "react-icons/fa";
import { useAppSelector } from "../../../app/hooks";
import {
  selectSpotifyPlaybackCurrentTrack,
  selectSpotifyPlaybackIsPlaying,
} from "../../../app/features/spotifyPlaybackSlice";
interface SearchTopResultsProps {
  tracks: Track[];
}

const SearchTopResults = (props: SearchTopResultsProps) => {
  const { tracks } = props;
  const { playTracks } = usePlayTracks();
  const { togglePlayback } = useTogglePlayback();
  const topTracks = tracks.slice(0, 4);
  const currentTrack = useAppSelector(selectSpotifyPlaybackCurrentTrack);
  const isPlaying = useAppSelector(selectSpotifyPlaybackIsPlaying);

  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isAddSongMenuOpen, setIsAddSongMenuOpen] = useState<boolean>(false);

  const openMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsAddSongMenuOpen(true);
    console.log({ x: e.pageY, y: e.pageX })
    setPosition({ x: e.pageY, y: e.pageX });
  };

  return (
    <section className="w-full px-6 mt-4 mb-12 text-white flex gap-3">
      <div className="relative group">
        <h4 className="text-h4 mb-4">Top Result</h4>
        <div className="w-[400px] bg-secondaryLightGrey rounded-lg p-5 flex flex-col gap-4 hover:bg-hoverLightGrey">
          <img
            src={topTracks[0].albumUrl}
            className="h-[92px] w-[92px] rounded-md"
            alt="album img"
          />
          <h2 className="text-h3 text-nowrap overflow-hidden text-ellipsis">
            {topTracks[0].title}
          </h2>
          <div className="flex items-center">
            {topTracks[0].isExplicit && <ExplicitLabel />}
            <p className="text-h5 text-nowrap overflow-hidden text-ellipsis">
              <span className="text-txtGrey">Song - </span>
              {topTracks[0].artist}
            </p>
            <GreenPlayButton
              track={topTracks[0]}
              className="absolute right-4 bottom-5 group-hover:visible cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="grow">
        <h4 className="text-h4 mb-4 ml-2">Songs</h4>
        <ul className="w-full">
          {topTracks.map((track: Track, idx: number) => {
            const isPlayingThisTrack = track.uri === currentTrack?.uri;
            return (
              <>
                <li
                  className="flex text-txtGrey px-3 py-2 items-center justify-between hover:bg-hoverLightGrey rounded-md relative group"
                  key={idx}
                  onContextMenu={openMenu}
                >
                  <div className="flex items-center">
                    <img
                      src={track.albumUrl}
                      alt="track img"
                      className="h-10 w-10 rounded mr-3 "
                    />
                    <div className="flex flex-col justify-center overflow-hidden">
                      <h5
                        className={`text-h5 mb-1 ${
                          isPlayingThisTrack ? "text-lightGreen" : "text-white"
                        } text-nowrap overflow-hidden text-ellipsis`}
                      >
                        {track.title}
                      </h5>
                      <div className="flex items-center">
                        {track.isExplicit && <ExplicitLabel />}
                        <span className="text-h6 text-nowrap overflow-hidden text-ellipsis">
                          {track.artist}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-h5">{track.duration}</p>
                  <div
                    className="absolute h-10 w-10 rounded bg-[rgba(0,0,0,0.5)] flex justify-center items-center invisible group-hover:visible cursor-pointer"
                    onClick={() => {
                      if (isPlayingThisTrack) {
                        togglePlayback();
                      } else {
                        playTracks(track);
                      }
                    }}
                  >
                    <div className="opacity-100">
                      {isPlayingThisTrack && isPlaying ? (
                        <FaPause size="12px" />
                      ) : (
                        <FaPlay size="12px" />
                      )}
                    </div>
                  </div>
                </li>
                {isAddSongMenuOpen && <AddSongMenu style={{ top: position.x -75, left: position.y - 90 }} spotifyId={track.id}/>}
              </>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SearchTopResults;
