import { FaList } from "react-icons/fa6";
import type { Album, Playlist } from "../types";
import { GreenPlayButton } from "./";

interface CollectionPlaybarProps {
  data: Album | Playlist;
}

const CollectionPlaybar = (props: CollectionPlaybarProps) => {
  const { data } = props;

  return (
    <section className="p-6 h-[100px] w-full flex items-center text-txtGrey justify-between">
      <GreenPlayButton track={data} className="visible"/>
      <div className="flex">
        <span className="text-h6 mr-3">List</span>
        <FaList />
      </div>
    </section>
  );
};

export default CollectionPlaybar;
