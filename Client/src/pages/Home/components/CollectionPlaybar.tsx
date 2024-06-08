import { FaList } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import type { Album, Playlist } from "../types";
import { GreenPlayButton } from "./";
import { useAddSpotifyCollectionToLibraryMutation } from "../../../api/playlistApiSlice";
import { useAppSelector } from "../../../app/hooks";
import { selectAuthId } from "../../../app/features/authSlice";

interface CollectionPlaybarProps {
  data: Album | Playlist;
  isMyPlaylist: boolean;
}

const CollectionPlaybar = (props: CollectionPlaybarProps) => {
  const { data, isMyPlaylist } = props;
  const authId = useAppSelector(selectAuthId);
  const [addSpotifyCollectionToLibrary] =
    useAddSpotifyCollectionToLibraryMutation();

  const handleAddCollectionToLibrary = async (
    e: React.MouseEvent<HTMLElement>
  ): Promise<void> => {
    e.preventDefault();
    const res = await addSpotifyCollectionToLibrary({
      userId: authId,
      spotifyId: data.id,
      type: data.type,
    }).unwrap();
    console.log(res);
  };

  return (
    <section className="p-6 h-[100px] w-full flex items-center text-txtGrey justify-between">
      <div className="flex items-center">
        <GreenPlayButton
          track={data}
          className="visible mr-3"
          isCollectionView={true}
        />
        {isMyPlaylist ? (
          <></>
        ) : (
          <span className="h-7 w-7 cursor-pointer" onClick={handleAddCollectionToLibrary}>
            <IoAdd size={"100%"}/>
          </span>
        )}
      </div>
      <div className="flex">
        <span className="text-h6 mr-3">List</span>
        <FaList />
      </div>
    </section>
  );
};

export default CollectionPlaybar;
