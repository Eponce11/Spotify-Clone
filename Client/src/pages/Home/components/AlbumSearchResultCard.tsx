import { useNavigate } from "react-router-dom";
import type { Album } from "../types";
import { GreenPlayButton } from "./";

interface AlbumSearchResultCardProps {
  album: Album;
}

const AlbumSearchResultCard = (props: AlbumSearchResultCardProps) => {
  const { album } = props;

  const navigate = useNavigate();

  return (
    <li
      className="flex flex-col gap-3 p-3 rounded-lg group hover:bg-secondaryLightGrey cursor-pointer"
      key={album.id}
      onClick={() => navigate(`/home/album/${album.id}`)}
    >
      {album.albumUrl ? (
        <div className="relative">
          <img
            src={album.albumUrl}
            alt="album url"
            className="aspect-square w-full rounded-md"
          />
          <GreenPlayButton
            className="absolute right-3 bottom-3 group-hover:visible"
            track={album}
          />
        </div>
      ) : (
        <div className="aspect-square w-full rounded-md bg-[blue]" />
      )}
      <h5 className="text-h5 text-nowrap overflow-hidden text-ellipsis">
        {album.name}
      </h5>
      <p className="text-h6 text-txtGrey text-nowrap overflow-hidden text-ellipsis">
        {album.releaseDate} - {album.artist}
      </p>
    </li>
  );
};

export default AlbumSearchResultCard;
