import { IoRemoveCircleSharp } from "react-icons/io5";
import { useRemoveSongOwnPlaylistMutation } from "../../../api/playlistApiSlice";

interface RemoveSongMenuProps {
  style: { top: number; left: number };
  setIsRemoveSongMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  prismaId: string;
  playlistId: string;
  fetchData?: () => Promise<void>;
}

const RemoveSongMenu = (props: RemoveSongMenuProps) => {
  const { style, setIsRemoveSongMenuOpen, prismaId, playlistId, fetchData } =
    props;
  const [removeSongOwnPlaylist] = useRemoveSongOwnPlaylistMutation();
  const handleRemoveSongFromPlaylist = async (
    e: React.MouseEvent<HTMLElement>
  ) => {
    e.preventDefault();
    console.log(prismaId);
    const res = await removeSongOwnPlaylist({
      playlistId: playlistId,
      prismaId: prismaId,
    });
    if (fetchData !== undefined) {
      fetchData();
    }
    console.log(res);
  };

  return (
    <div
      className="bg-lightGrey absolute z-10 p-1 rounded"
      style={style}
      onMouseLeave={() => setIsRemoveSongMenuOpen(false)}
    >
      <div
        className="flex items-center pl-2 pr-4 py-2 hover:bg-hoverLightGrey rounded cursor-pointer"
        onClick={handleRemoveSongFromPlaylist}
      >
        <IoRemoveCircleSharp color="gray" />
        <span className="text-h5 text-white ml-2">Remove from playlist</span>
      </div>
    </div>
  );
};

export default RemoveSongMenu;
