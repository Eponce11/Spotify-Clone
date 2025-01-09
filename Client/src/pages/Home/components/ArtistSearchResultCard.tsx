import { DefaultArtistImage } from "./";
import type { Artist } from "../types";

interface ArtistSearchResultCardProps {
  artist: Artist;
  idx: number;
}

const ArtistSearchResultCard = (props: ArtistSearchResultCardProps) => {
  const { artist, idx } = props;
  return (
    <li
      className="flex flex-col gap-3 p-3 rounded-lg hover:bg-secondaryLightGrey cursor-pointer"
      key={idx}
    >
      {artist.artistUrl ? (
        <img
          src={artist.artistUrl}
          alt="artist img"
          className="aspect-square w-full rounded-full object-cover"
        />
      ) : (
        <DefaultArtistImage />
      )}
      <h5 className="text-h5 text-nowrap overflow-hidden text-ellipsis">
        {artist.name}
      </h5>
      <p className="text-h6 text-txtGrey text-nowrap overflow-hidden text-ellipsis">
        Artist
      </p>
    </li>
  );
};

export default ArtistSearchResultCard;
