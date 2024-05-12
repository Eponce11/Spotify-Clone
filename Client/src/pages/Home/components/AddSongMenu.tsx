import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useGetPlaylistsQuery } from "../../../api/playlistApiSlice";
import { useAppSelector } from "../../../app/hooks";
import { selectAuthId } from "../../../app/features/authSlice";
import { useAddSongToPlaylistMutation } from "../../../api/playlistApiSlice";
interface AddSongMenuProps {
  style: { top: number; left: number };
  spotifyId: string;
}

const AddSongMenu = (props: AddSongMenuProps) => {
  const { style, spotifyId } = props;

  const [isSelectPlaylistOpen, setIsSelectPlaylistOpen] =
    useState<boolean>(false);
  const authId = useAppSelector(selectAuthId);
  const [addSongToPlaylist] = useAddSongToPlaylistMutation();
  const { currentData, isFetching } = useGetPlaylistsQuery(authId ? authId : 0);

  const handleAddSong = async (playlistId: number): Promise<void> => {
    const res = await addSongToPlaylist({
      spotifyId: spotifyId,
      playlistId: playlistId,
    });
    console.log(res);
  };

  return (
    <div className="bg-lightGrey absolute z-10 p-1 rounded" style={style}>
      <div
        className="flex items-center pl-2 pr-4 py-2 hover:bg-hoverLightGrey rounded cursor-pointer"
        onMouseEnter={() => setIsSelectPlaylistOpen(true)}
        onMouseLeave={() => setIsSelectPlaylistOpen(false)}
      >
        <IoMdAdd color="gray" />
        <span className="text-h5 text-white ml-2">Add to playlist</span>
        {isSelectPlaylistOpen && !isFetching && (
          <div className=" bg-lightGrey w-48 absolute right-[-189px] top-0 z-10 p-1 rounded">
            {currentData.map((playlist: any, idx: number) => {
              return (
                <li
                  className="flex items-center pl-2 pr-4 py-2 hover:bg-hoverLightGrey rounded cursor-pointer text-h5 text-white"
                  key={idx}
                  onClick={() => handleAddSong(playlist.id)}
                >
                  {playlist.name}
                </li>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddSongMenu;
