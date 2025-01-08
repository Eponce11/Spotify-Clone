import type { Playlist } from "../types";
import { GreenPlayButton } from "./";
import { useNavigate } from "react-router-dom";

interface PlaylistSearchResultCardProps {
  playlist: Playlist;
}

const PlaylistSearchResultCard = (props: PlaylistSearchResultCardProps) => {
  const { playlist } = props;

  const navigate = useNavigate();
  
  return (
    <li
      className="flex flex-col gap-3 p-3 rounded-lg group hover:bg-secondaryLightGrey cursor-pointer"
      key={playlist.id}
      onClick={() => navigate(`/home/playlist/${playlist.id}`)}
    >
      {playlist.playlistUrl ? (
        <div className="relative">
          <img
            src={playlist.playlistUrl}
            alt="playlist img"
            className="aspect-square w-full rounded-md"
          />
          <GreenPlayButton
            className="absolute right-3 bottom-3 group-hover:visible"
            track={playlist}
          />
        </div>
      ) : (
        <div className="aspect-square w-full rounded-md bg-[blue]" />
      )}
      <h5 className="text-h5 text-nowrap overflow-hidden text-ellipsis">
        {playlist.name}
      </h5>
      <p className="text-h6 text-txtGrey text-nowrap overflow-hidden text-ellipsis">
        By {playlist.owner}
      </p>
    </li>
  );
};

export default PlaylistSearchResultCard;
