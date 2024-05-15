import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LibraryCreateMenu,
  DefaultCollectionImage,
  CollectionEditMenu,
} from "./";
import { useGetLibraryPlaylistsMutation } from "../../../api/playlistApiSlice";
import { useAppSelector } from "../../../app/hooks";
import { selectAuthId } from "../../../app/features/authSlice";
import type { Album, Position } from "../types";
import { useSpotifySearchById } from "../../../common/hooks";
import { IoLibrarySharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

const LibrarySidebar = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [currentData, setCurrentData] = useState<any[]>([]);
  const [isCreatePlaylistMenuOpen, setIsCreatePlaylistMenuOpen] =
    useState<boolean>(false);
  const [isEditCollectionMenuOpen, setIsEditCollectionMenuOpen] =
    useState<boolean>(false);
  const authId = useAppSelector(selectAuthId);
  const navigate = useNavigate();
  const { spotifySearchById } = useSpotifySearchById();
  const [getLibraryPlaylists] = useGetLibraryPlaylistsMutation();
  const [isMyPlaylist, setIsMyPlaylist] = useState<boolean>(false);
  const [currentCollectionId, setCurrentCollectionId] = useState<number>(0);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const res = await getLibraryPlaylists({ userId: authId }).unwrap();
      console.log(res);
      const libraryCollection = await Promise.all(
        await res.map(async (collection: any): Promise<Album | void> => {
          if (!collection.hasOwnProperty("spotifyId")) return collection;
          const response = await spotifySearchById(
            collection.spotifyId,
            collection.type
          );
          response.prismaId = collection.id;
          return response;
        })
      );
      console.log(libraryCollection);
      setCurrentData(libraryCollection);
    };
    fetchData();
  }, []);

  const openCreateMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsCreatePlaylistMenuOpen(true);
    setPosition({ x: e.pageY, y: e.pageX });
  };

  const openEditMenu = (
    e: React.MouseEvent<HTMLElement>,
    myPlaylist: boolean,
    collectionId: number
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMyPlaylist(myPlaylist);
    setIsEditCollectionMenuOpen(true);
    setCurrentCollectionId(collectionId);
    setPosition({ x: e.pageY, y: e.pageX });
  };

  return (
    <aside className="h-full w-[72px] flex flex-col gap-2">
      <ul className="w-full px-3 py-2 bg-darkGrey rounded-md flex flex-col items-center">
        <li className="w-12 h-12 flex items-center justify-center">
          <IoHomeSharp color="grey" size={"24px"} />
        </li>
        <li
          className="w-12 h-12 flex items-center justify-center cursor-pointer"
          onClick={() => navigate("/home/search")}
        >
          <FaSearch color="grey" size={"24px"} />
        </li>
      </ul>

      <ul
        className="w-full h-full bg-darkGrey rounded-md flex flex-col items-center"
        onContextMenu={openCreateMenu}
      >
        <li className="w-12 h-12 flex items-center justify-center cursor-pointer">
          <IoLibrarySharp color="grey" size={"24px"} />
        </li>

        {currentData.map((playlist: any, idx: number) => {
          return (
            <li
              key={idx}
              className="w-16 h-16 flex items-center justify-center cursor-pointer hover:bg-hoverDarkGrey rounded-sm"
              onClick={() => {
                if (!playlist.type) navigate(`own/${playlist.id}`);
                if (playlist.type === "album") navigate(`album/${playlist.id}`);
                if (playlist.type === "playlist")
                  navigate(`playlist/${playlist.id}`);
              }}
              onContextMenu={(e: React.MouseEvent<HTMLElement>) => {
                if (!playlist.type) {
                  openEditMenu(e, playlist.type === undefined, playlist.id);
                } else {
                  openEditMenu(e, playlist.type === undefined, playlist.prismaId);
                }
              }}
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
      {isEditCollectionMenuOpen && (
        <CollectionEditMenu
          style={{ top: position.x, left: position.y }}
          setIsEditCollectionMenuOpen={setIsEditCollectionMenuOpen}
          isMyPlaylist={isMyPlaylist}
          collectionId={currentCollectionId}
        />
      )}

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
