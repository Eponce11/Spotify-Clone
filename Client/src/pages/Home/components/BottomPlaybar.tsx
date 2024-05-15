import {
  useTogglePlayback,
  usePlayNextTrack,
  usePlayPreviousTrack,
} from "../../../common/hooks";
import { useAppSelector } from "../../../app/hooks";
import {
  selectSpotifyPlaybackCurrentTrack,
  selectSpotifyPlaybackCurrentAlbum,
} from "../../../app/features/spotifyPlaybackSlice";

const BottomPlaybar = () => {
  const { togglePlayback } = useTogglePlayback();
  const { playNextTrack } = usePlayNextTrack();
  const { playPreviousTrack } = usePlayPreviousTrack();
  const currentTrack = useAppSelector(selectSpotifyPlaybackCurrentTrack);
  const currentAlbum = useAppSelector(selectSpotifyPlaybackCurrentAlbum);

  const albumUrl = currentTrack?.albumUrl
    ? currentTrack.albumUrl
    : currentAlbum?.albumUrl
    ? currentAlbum.albumUrl
    : undefined;

  return (
    <footer className="text-white h-[72px] py-3 px-2 flex items-center">
      <div className="flex items-center w-1/3">
        <img
          src={albumUrl}
          alt="album img"
          className="h-14 w-14 rounded mr-3"
        />
        <div className="flex flex-col gap-1 mt-1">
          <h5 className="text-h5">{currentTrack?.title}</h5>
          <p className="text-h6 text-txtGrey">{currentTrack?.artist}</p>
        </div>
      </div>
      <div className="h-full flex w-1/3 justify-center">
        <div
          className="h-8 w-8 flex justify-center items-center"
          onClick={playPreviousTrack}
        >
          <div className="h-4 w-4 bg-[white]" />
        </div>
        <div
          className="h-8 w-8 rounded-full bg-[white] mx-5"
          onClick={togglePlayback}
        />
        <div
          className="h-8 w-8 flex justify-center items-center"
          onClick={playNextTrack}
        >
          <div className="h-4 w-4 bg-[white]" />
        </div>
      </div>
      <div className="h-full w-1/3"></div>
    </footer>
  );
};

export default BottomPlaybar;
