import { FaHashtag } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";

const AlbumListHeader = () => {
  return (
    <ul className="w-full flex text-txtGrey text-h5 mb-4 sticky top-16 bg-darkGrey pt-3">
      <li className="ml-6 border-b w-[50px] border-blue-50 px-4 pb-2">
        <FaHashtag />
      </li>
      <li className="border-b flex grow">
        <div className="w-5/5">Title</div>
      </li>
      <li className="border-b border-blue-50 flex justify-end w-16 mr-6 pr-8">
        <FaRegClock />
      </li>
    </ul>
  );
};

export default AlbumListHeader;
