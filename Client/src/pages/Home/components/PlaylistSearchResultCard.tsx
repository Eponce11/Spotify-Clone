import type { SearchPlaylist } from "../types";
import { GreenPlayButton } from "./";

interface PlaylistSearchResultCardProps {
  playlist: SearchPlaylist;
  idx: number;
}

const PlaylistSearchResultCard = (props: PlaylistSearchResultCardProps) => {
  const { playlist, idx } = props;
  return (
    <li
      className="flex flex-col gap-3 p-3 rounded-lg group hover:bg-secondaryLightGrey"
      key={idx}
    >
      {playlist.playlistUrl ? (
        <div className="relative">
          <img
            src={playlist.playlistUrl}
            alt=""
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
