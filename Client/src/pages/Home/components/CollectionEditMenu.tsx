import { RiPencilFill } from "react-icons/ri";
import { FiDelete } from "react-icons/fi";
import { IoRemoveCircleSharp } from "react-icons/io5";
import { useAppSelector } from "../../../app/hooks";
import { selectAuthId } from "../../../app/features/authSlice";
import {
  useRemoveSpotifyCollectionFromLibraryMutation,
  useDeleteOwnPlaylistMutation,
} from "../../../api/playlistApiSlice";
import { useNavigate } from "react-router-dom";

interface CollectionEditMenuProps {
  style: { top: number; left: number };
  setIsEditCollectionMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMyPlaylist: boolean;
  collection: any;
  setIsEditPlaylistOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CollectionEditMenu = (props: CollectionEditMenuProps) => {
  const {
    style,
    setIsEditCollectionMenuOpen,
    isMyPlaylist,
    collection,
    setIsEditPlaylistOpen,
  } = props;

  const authId = useAppSelector(selectAuthId);
  const [removeSpotifyCollectionFromLibrary] =
    useRemoveSpotifyCollectionFromLibraryMutation();
  const [deleteOwnPlaylist] = useDeleteOwnPlaylistMutation();
  const navigate = useNavigate();

  let content;

  const handleRemoveCollectionFromLibrary = async (
    e: React.MouseEvent<HTMLElement>
  ) => {
    e.preventDefault();
    const res = await removeSpotifyCollectionFromLibrary({
      userId: authId,
      collectionId: collection.prismaId,
    }).unwrap();
    console.log(res);
  };

  const handleDeleteOwnPlaylist = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const res = await deleteOwnPlaylist({ playlistId: collection.id }).unwrap();
    console.log(res);
    navigate("/home/search")
  };

  if (isMyPlaylist) {
    content = (
      <div>
        <div
          className="flex items-center pl-2 pr-4 py-2 hover:bg-hoverLightGrey rounded cursor-pointer"
          onClick={() => setIsEditPlaylistOpen(true)}
        >
          <RiPencilFill color="gray" />
          <span className="text-h5 text-white ml-2">Edit playlist</span>
        </div>
        <div
          className="flex items-center pl-2 pr-4 py-2 hover:bg-hoverLightGrey rounded cursor-pointer"
          onClick={handleDeleteOwnPlaylist}
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
