import { LibrarySidebar, CollectionView } from "./components";
import { useSpotifyRefreshToken } from "../../common/hooks";

const Home = () => {
  useSpotifyRefreshToken();

  return (
    <div className="w-full h-full bg-black p-2 flex gap-2">
      <LibrarySidebar />
      <CollectionView />
    </div>
  );
};

export default Home;
