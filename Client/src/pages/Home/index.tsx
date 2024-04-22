import { Routes, Route } from "react-router-dom";
import { LibrarySidebar, CollectionView } from "./components";
import { useSpotifyRefreshToken } from "../../common/hooks";

const Home = () => {
  useSpotifyRefreshToken();

  return (
    <div className="w-full h-full bg-black p-2 flex gap-2">
      <LibrarySidebar />

      <Routes>
        <Route path="/search" element={<div />} />
        <Route path="/*" element={<CollectionView />} />
      </Routes>
    </div>
  );
};

export default Home;
