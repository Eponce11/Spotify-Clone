import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { DefaultCollectionImage } from "./";

interface PlaylistEditProps {
  setIsEditPlaylistOpen: React.Dispatch<React.SetStateAction<boolean>>;
  playlist: any;
}

const PlaylistEdit = (props: PlaylistEditProps) => {
  const { setIsEditPlaylistOpen, playlist } = props;
  const [name, setName] = useState<string>(playlist.name);
  const [description, setDescription] = useState<string>(playlist.description);

  return (
    <div className="bg-[black] w-screen h-screen fixed top-0 left-0 z-10 flex items-center justify-center bg-opacity-70">
      <div className="bg-lightGrey shadow-xl border border-[#242628] relative rounded-md p-5">
        <div
          className="h-7 w-7 absolute right-4 top-4 cursor-pointer"
          onClick={() => setIsEditPlaylistOpen(false)}
        >
          <IoClose color="grey" size={"100%"} />
        </div>
        <h4 className="text-h4 text-white mb-5">Edit details</h4>
        <div className="flex">
          <DefaultCollectionImage className="h-40 w-40 mr-4" />
          <div className="flex flex-col">
            <input
              type="text"
              className="bg-fourthLightGrey w-64 h-8 mb-4 rounded-sm px-2 text-h6 text-white outline-none"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <textarea
              className="grow rounded-sm bg-fourthLightGrey resize-none px-2 text-h6 text-white pt-2 outline-none"
              placeholder="Add an optional description"
              value={description}
              onChange={(e: any) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end mt-3">
          <button className="bg-white px-8 py-3 rounded-full text-h5">
            <strong>Save</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistEdit;
