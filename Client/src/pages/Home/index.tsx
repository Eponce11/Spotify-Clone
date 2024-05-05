import { Routes, Route } from "react-router-dom";
import {
  LibrarySidebar,
  AlbumView,
  SearchView,
  BottomPlaybar,
} from "./components";
import { useSpotifyRefreshToken } from "../../common/hooks";

const Home = () => {
  useSpotifyRefreshToken();

  return (
    <div className="w-full h-full bg-black p-2 flex flex-col">
      <div className="flex grow gap-2">
      <LibrarySidebar />
        <Routes>
          <Route path="/search" element={<SearchView />} />
          <Route path="/album/:_collectionId" element={<AlbumView />} />
          <Route path="/playlist/:_collectionId" element={<AlbumView />} />
        </Routes>
      </div>
      <BottomPlaybar />
    </div>
  );
};

export default Home;
