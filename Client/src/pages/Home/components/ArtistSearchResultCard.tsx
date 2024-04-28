import type { Artist } from "../types";

interface ArtistSearchResultCardProps {
  artist: Artist;
  idx: number;
}

const ArtistSearchResultCard = (props: ArtistSearchResultCardProps) => {
  const { artist, idx } = props;
  return (
    <li
      className="flex flex-col gap-3 p-3 rounded-lg hover:bg-secondaryLightGrey"
      key={idx}
    >
      {artist.artistUrl ? (
        <img
          src={artist.artistUrl}
          alt=""
          className="aspect-square w-full rounded-full"
        />
      ) : (
        <div className="aspect-square w-full rounded-full bg-[blue]" />
      )}
      <h5 className="text-h5">{artist.name}</h5>
      <p className="text-h6 text-txtGrey">Artist</p>
    </li>
  );
};

export default ArtistSearchResultCard;
