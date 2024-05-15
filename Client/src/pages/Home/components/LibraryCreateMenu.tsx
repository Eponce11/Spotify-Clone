import { LuMusic } from "react-icons/lu";
import { useAppSelector } from "../../../app/hooks";
import { selectAuthId } from "../../../app/features/authSlice";
import { useCreatePlaylistMutation } from "../../../api/playlistApiSlice";

interface LibraryCreateMenuProps {
  style: { top: number; left: number };
  setIsCreatePlaylistMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LibraryCreateMenu = (props: LibraryCreateMenuProps) => {
  const { style, setIsCreatePlaylistMenuOpen } = props;
  const authId = useAppSelector(selectAuthId);
  const [createPlaylist] = useCreatePlaylistMutation();

  const handleCreatePlaylist = async (
    e: React.MouseEvent<HTMLElement>
  ): Promise<void> => {
    e.preventDefault();
    if (!authId) return;
    const res = await createPlaylist({ userId: authId }).unwrap();
    console.log(res);
  };

  return (
    <div
      className="bg-lightGrey absolute z-10 p-1 rounded"
      style={style}
      onMouseLeave={() => setIsCreatePlaylistMenuOpen(false)}
    >
      <div
        className="flex items-center pl-2 pr-4 py-2 hover:bg-hoverLightGrey rounded cursor-pointer"
        onClick={handleCreatePlaylist}
      >
        <LuMusic color="gray" />
        <span className="text-h5 text-white ml-2">Create playlist</span>
      </div>
    </div>
  );
};

export default LibraryCreateMenu;
