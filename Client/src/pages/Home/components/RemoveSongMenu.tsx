import { IoRemoveCircleSharp } from "react-icons/io5";

interface RemoveSongMenuProps {
  style: { top: number; left: number };
  setIsRemoveSongMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  spotifyId: string;
}

const RemoveSongMenu = (props: RemoveSongMenuProps) => {
  const { style, setIsRemoveSongMenuOpen, spotifyId } = props;
  return (
    <div
      className="bg-lightGrey absolute z-10 p-1 rounded"
      style={style}
      onMouseLeave={() => setIsRemoveSongMenuOpen(false)}
    >
      <div
        className="flex items-center pl-2 pr-4 py-2 hover:bg-hoverLightGrey rounded cursor-pointer"
      >
        <IoRemoveCircleSharp color="gray" />
        <span className="text-h5 text-white ml-2">Remove from playlist</span>
      </div>
    </div>
  );
};

export default RemoveSongMenu;
