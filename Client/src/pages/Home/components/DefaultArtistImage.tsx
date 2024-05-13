import { FiUser } from "react-icons/fi";

const DefaultArtistImage = () => {
  return (
    <div className="aspect-square w-full rounded-full bg-lightGrey flex items-center justify-center">
      <FiUser size={"60%"}/>
    </div>
  );
};

export default DefaultArtistImage;
