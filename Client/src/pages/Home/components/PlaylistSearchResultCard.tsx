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
      className="flex flex-col gap-3 p-3 rounded-lg group hover:bg-secondaryLightGrey"
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
            className="absolute right-3 bottom-3 group-hover:visible invisible"
            track={{
              albumUrl:
                "https://i.scdn.co/image/ab67616d0000b273dc5b182a07d33d3720c869b2",
              artist: "Peso Pluma",
              duration: "3:24",
              isExplicit: true,
              title: "Rosa Pastel",
              type: "track",
              uri: "spotify:track:4LreWoO3cpgiIfrRwbOUSF",
            }}
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
