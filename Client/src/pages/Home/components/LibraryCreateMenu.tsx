import { LuMusic } from "react-icons/lu";

interface LibraryCreateMenuProps {
  style: { top: number; left: number };
}

const LibraryCreateMenu = (props: LibraryCreateMenuProps) => {
  const { style } = props;

  return (
    <div className="bg-lightGrey absolute z-10 p-1 rounded" style={style}>
      <div className="flex items-center pl-2 pr-4 py-2 hover:bg-hoverLightGrey rounded cursor-pointer">
        <LuMusic color="gray" />
        <span className="text-h5 text-white ml-2">Create playlist</span>
      </div>
    </div>
  );
};

export default LibraryCreateMenu;
