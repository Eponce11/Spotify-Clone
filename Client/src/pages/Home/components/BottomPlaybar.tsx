import { useState, useEffect } from "react";
import {
  useTogglePlayback,
  usePlayNextTrack,
  usePlayPreviousTrack,
  useAdjustVolume,
  useToggleMute,
} from "../../../common/hooks";
import { useAppSelector } from "../../../app/hooks";
import { FaPlay, FaPause } from "react-icons/fa";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";
import {
  selectSpotifyPlaybackCurrentTrack,
  selectSpotifyPlaybackCurrentAlbum,
  selectSpotifyPlaybackIsPlaying,
} from "../../../app/features/spotifyPlaybackSlice";

const BottomPlaybar = () => {
  const [volume, setVolume] = useState<number>(50);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const { togglePlayback } = useTogglePlayback();
  const { playNextTrack } = usePlayNextTrack();
  const { playPreviousTrack } = usePlayPreviousTrack();
  const { adjustVolume } = useAdjustVolume();
  const { toggleMute } = useToggleMute();
  const currentTrack = useAppSelector(selectSpotifyPlaybackCurrentTrack);
  const currentAlbum = useAppSelector(selectSpotifyPlaybackCurrentAlbum);
  const isPlaying = useAppSelector(selectSpotifyPlaybackIsPlaying);

  const albumUrl = currentTrack?.albumUrl
    ? currentTrack.albumUrl
    : currentAlbum?.albumUrl
    ? currentAlbum.albumUrl
    : undefined;

  useEffect(() => {
    setVolume(volume);
  }, []);

  return (
    <footer className="text-white h-[72px] py-3 px-2 flex items-center">
      <div className="flex items-center w-1/3">
        {albumUrl ? (
          <img
            src={albumUrl}
            alt="album img"
            className="h-14 w-14 rounded mr-3"
          />
        ) : (
          <></>
        )}
        <div className="flex flex-col gap-1 mt-1">
          <h5 className="text-h5">{currentTrack?.title}</h5>
          <p className="text-h6 text-txtGrey">{currentTrack?.artist}</p>
        </div>
      </div>



      <div className="h-full flex w-1/3 flex-col items-center">
        <div className="flex w-full justify-center">
          <div
            className="h-8 w-8 flex justify-center items-center"
            onClick={playPreviousTrack}
          >
            <GiPreviousButton size={"80%"} />
          </div>
          <div
            className="h-8 w-8 mx-8 flex items-center justify-center cursor-pointer bg-white rounded-full"
            onClick={togglePlayback}
          >
            {isPlaying ? (
              <FaPause size={"50%"} color="black" />
            ) : (
              <span className="w-full h-full flex items-center justify-center pl-[2px]">
                <FaPlay size={"50%"} color="black" />
              </span>
            )}
          </div>
          <div
            className="h-8 w-8 flex justify-center items-center"
            onClick={playNextTrack}
          >
            <GiNextButton size={"80%"} />
          </div>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          onMouseUp={(e: any) => {
            setVolume(e.target.value);
            adjustVolume(e.target.value);
          }}
          className="accent-slate-500 ml-1 max-w-[400px] mt-2 w-72"
        />
      </div>


      <div className="h-full w-1/3 flex items-center justify-end">
        <button
          onClick={() => {
            if (isMuted) {
              toggleMute(true, volume);
              setIsMuted(false);
            } else {
              toggleMute(false);
              setIsMuted(true);
            }
          }}
        >
          {isMuted ? (
            <HiMiniSpeakerXMark size={"20px"} />
          ) : (
            <HiMiniSpeakerWave size={"20px"} />
          )}
        </button>
        <input
          type="range"
          min={0}
          max={100}
          onMouseUp={(e: any) => {
            setVolume(e.target.value);
            adjustVolume(e.target.value);
          }}
          className="accent-slate-500 ml-1"
        />
      </div>
    </footer>
  );
};

export default BottomPlaybar;
