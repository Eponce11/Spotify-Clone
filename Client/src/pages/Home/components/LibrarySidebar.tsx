import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LibraryCreateMenu } from "./";
import { useGetPlaylistsQuery } from "../../../api/playlistApiSlice";
import { useAppSelector } from "../../../app/hooks";
import { selectAuthId } from "../../../app/features/authSlice";
import type { Position } from "../types"

const LibrarySidebar = () => {

  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isCreatePlaylistMenuOpen, setIsCreatePlaylistMenuOpen] =
    useState<boolean>(false);
  const authId = useAppSelector(selectAuthId);
  const navigate = useNavigate();

  const { currentData, isFetching } = useGetPlaylistsQuery(authId ? authId : 0);

  const openMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsCreatePlaylistMenuOpen(true);
    console.log({ x: e.pageY, y: e.pageX })
    setPosition({ x: e.pageY, y: e.pageX });
  };

  return (
    <aside className="h-full w-[72px] flex flex-col gap-2">
      <ul className="w-full px-3 py-2 bg-darkGrey rounded-md flex flex-col items-center">
        <li className="w-12 h-12 flex items-center justify-center">
          <div className="w-6 h-6 bg-[red] cursor-pointer" />
        </li>
        <li className="w-12 h-12 flex items-center justify-center">
          <div className="w-6 h-6 bg-[red] cursor-pointer" />
        </li>
      </ul>

      <ul
        className="w-full h-full bg-darkGrey rounded-md flex flex-col items-center"
        onContextMenu={openMenu}
      >
        <li className="w-12 h-12 flex items-center justify-center cursor-pointer">
          <div className="w-6 h-6 bg-[red]" />
        </li>

        {!isFetching &&
          currentData.map((playlist: any, idx: number) => {
            return (
              <li
                key={idx}
                className="w-16 h-16 flex items-center justify-center cursor-pointer hover:bg-hoverDarkGrey rounded-sm"
                onClick={() => navigate(`own/${playlist.id}`)}
              >
                <div className="w-12 h-12 bg-[red] rounded-sm" />
              </li>
            );
          })}
      </ul>

      {isCreatePlaylistMenuOpen && (
        <LibraryCreateMenu style={{ top: position.x, left: position.y }} />
      )}
    </aside>
  );
};

export default LibrarySidebar;
