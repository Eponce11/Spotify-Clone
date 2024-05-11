import { Routes, Route } from "react-router-dom";
import {
  LibrarySidebar,
  AlbumView,
  SearchView,
  PlaylistView,
  PlaylistOwnView,
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
          <Route path="/album/:_albumId" element={<AlbumView />} />
          <Route path="/playlist/:_playlistId" element={<PlaylistView />} />
          <Route path="/own/:_playlistId" element={<PlaylistOwnView />} />
        </Routes>
      </div>
      <BottomPlaybar />
    </div>
  );
};

export default Home;
