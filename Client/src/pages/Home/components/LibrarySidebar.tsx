import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LibraryCreateMenu, DefaultCollectionImage } from "./";
import { useGetLibraryPlaylistsMutation } from "../../../api/playlistApiSlice";
import { useAppSelector } from "../../../app/hooks";
import { selectAuthId } from "../../../app/features/authSlice";
import type { Album, Position } from "../types";
import { useSpotifySearchById } from "../../../common/hooks";

const LibrarySidebar = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [currentData, setCurrentData] = useState<any[]>([]);
  const [isCreatePlaylistMenuOpen, setIsCreatePlaylistMenuOpen] =
    useState<boolean>(false);
  const authId = useAppSelector(selectAuthId);
  const navigate = useNavigate();
  const { spotifySearchById } = useSpotifySearchById();
  const [getLibraryPlaylists] = useGetLibraryPlaylistsMutation();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const res = await getLibraryPlaylists({ userId: authId }).unwrap();
      console.log(res);
      const libraryCollection = await Promise.all(
        await res.map(async (collection: any): Promise<Album | void> => {
          if (!collection.hasOwnProperty("spotifyId")) return collection;
          return await spotifySearchById(collection.spotifyId, collection.type);
        })
      );
      console.log(libraryCollection);
      setCurrentData(libraryCollection);
    };
    fetchData();
  }, []);

  const openMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsCreatePlaylistMenuOpen(true);
    setPosition({ x: e.pageY, y: e.pageX });
  };

  return (
    <aside className="h-full w-[72px] flex flex-col gap-2">
      <ul className="w-full px-3 py-2 bg-darkGrey rounded-md flex flex-col items-center">
        <li className="w-12 h-12 flex items-center justify-center">
          <div className="w-6 h-6 bg-[red] cursor-pointer" />
        </li>
        <li className="w-12 h-12 flex items-center justify-center">
          <div
            className="w-6 h-6 bg-[red] cursor-pointer"
            onClick={() => navigate("/home/search")}
          />
        </li>
      </ul>

      <ul
        className="w-full h-full bg-darkGrey rounded-md flex flex-col items-center"
        onContextMenu={openMenu}
      >
        <li className="w-12 h-12 flex items-center justify-center cursor-pointer">
          <div className="w-6 h-6 bg-[red]" />
        </li>

        {currentData.map((playlist: any, idx: number) => {
          return (
            <li
              key={idx}
              className="w-16 h-16 flex items-center justify-center cursor-pointer hover:bg-hoverDarkGrey rounded-sm"
              onClick={() => navigate(`own/${playlist.id}`)}
            >
              {!playlist.uri ? (
                <DefaultCollectionImage />
              ) : playlist.type === "album" ? (
                <img
                  src={playlist.albumUrl}
                  alt="album img"
                  className="w-12 h-12 rounded-sm"
                />
              ) : (
                <img
                  src={playlist.playlistUrl}
                  alt="album img"
                  className="w-12 h-12 rounded-sm"
                />
              )}
            </li>
          );
        })}
      </ul>

      {isCreatePlaylistMenuOpen && (
        <LibraryCreateMenu
          style={{ top: position.x, left: position.y }}
          setIsCreatePlaylistMenuOpen={setIsCreatePlaylistMenuOpen}
        />
      )}
    </aside>
  );
};

export default LibrarySidebar;
