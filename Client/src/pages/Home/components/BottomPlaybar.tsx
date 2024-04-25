import { useTogglePlayback, usePlayNextTrack } from "../../../common/hooks";
import usePlayPreviousTrack from "../../../common/hooks/usePlayPreviousTrack";

const BottomPlaybar = () => {
  const { togglePlayback } = useTogglePlayback();
  const { playNextTrack } = usePlayNextTrack();
  const { playPreviousTrack } = usePlayPreviousTrack();

  return (
    <footer className="text-white h-[72px] bg-[red] py-2 px-3 flex">
      <div className="flex items-center w-1/3">
        <div className="h-14 w-14 bg-[blue] rounded mr-3" />
        <div className="flex flex-col gap-1">
          <h5 className="text-h5">Title Name</h5>
          <p className="text-h6">Artists</p>
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
