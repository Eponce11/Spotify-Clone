import { RiPencilFill } from "react-icons/ri";
import { FiDelete } from "react-icons/fi";
import { IoRemoveCircleSharp } from "react-icons/io5";
import { useAppSelector } from "../../../app/hooks";
import { selectAuthId } from "../../../app/features/authSlice";
import { useRemoveSpotifyCollectionFromLibraryMutation } from "../../../api/playlistApiSlice";

interface CollectionEditMenuProps {
  style: { top: number; left: number };
  setIsEditCollectionMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMyPlaylist: boolean;
  collectionId: number;
}

const CollectionEditMenu = (props: CollectionEditMenuProps) => {
  const { style, setIsEditCollectionMenuOpen, isMyPlaylist, collectionId } =
    props;

  const authId = useAppSelector(selectAuthId);
  const [removeSpotifyCollectionFromLibrary] =
    useRemoveSpotifyCollectionFromLibraryMutation();

  let content;

  const handleRemoveCollectionFromLibrary = async (
    e: React.MouseEvent<HTMLElement>
  ) => {
    e.preventDefault();
    const res = await removeSpotifyCollectionFromLibrary({
      userId: authId,
      collectionId: collectionId,
    }).unwrap();
    console.log(res);
  };

  if (isMyPlaylist) {
    content = (
      <div>
        <div
          className="flex items-center pl-2 pr-4 py-2 hover:bg-hoverLightGrey rounded cursor-pointer"
          onClick={() => {}}
        >
          <RiPencilFill color="gray" />
          <span className="text-h5 text-white ml-2">Edit playlist</span>
        </div>
        <div
          className="flex items-center pl-2 pr-4 py-2 hover:bg-hoverLightGrey rounded cursor-pointer"
          onClick={() => {}}
        >
          <FiDelete color="gray" />
          <span className="text-h5 text-white ml-2">Delete playlist</span>
        </div>
      </div>
    );
  } else {
    content = (
      <div
        className="flex items-center pl-2 pr-4 py-2 hover:bg-hoverLightGrey rounded cursor-pointer"
        onClick={handleRemoveCollectionFromLibrary}
      >
        <IoRemoveCircleSharp color="gray" />
        <span className="text-h5 text-white ml-2">Remove playlist</span>
      </div>
    );
  }

  return (
    <div
      className="bg-lightGrey absolute z-10 p-1 rounded"
      style={style}
      onMouseLeave={() => setIsEditCollectionMenuOpen(false)}
    >
      {content}
    </div>
  );
};

export default CollectionEditMenu;
