import type { Album, Artist } from "../types";
import GreenPlayButton from "./GreenPlayButton";

type RowType = "ALBUMS" | "ARTISTS" | "PLAYLISTS";
interface SearchResultsRowProps {
  rowType: RowType;
  data: Album[] | Artist[];
}

const SearchResultsRow = (props: SearchResultsRowProps) => {
  const { rowType, data } = props;

  const topData = data.slice(0, 10);

  let content;
  let sectionTitle;

  switch (rowType) {
    case "ARTISTS":
      sectionTitle = "Artists";
      content = topData.map((artist: any, idx: number) => (
        <li className="flex flex-col gap-3 p-3 bg-[green] rounded-lg ">
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
      ));
      break;
    case "ALBUMS":
      sectionTitle = "Albums";
      content = topData.map((album: any, idx: number) => {
        let artistNames = "";
        album.artists.forEach((artist: any, index: number) => {
          if (index !== album.artists.length - 1) {
            artistNames += `${artist.name}, `;
          } else {
            artistNames += `${artist.name}`;
          }
        });
        return (
          <li
            className="flex flex-col gap-3 p-3 bg-[green] rounded-lg group"
            key={idx}
          >
            {album.albumUrl ? (
              <div className="relative">
                <img
                  src={album.albumUrl}
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
            <h5 className="text-h5">{album.name}</h5>
            <p className="text-h6 text-txtGrey">Year - {artistNames}</p>
          </li>
        );
      });
      break;
    case "PLAYLISTS":
      sectionTitle = "Playlists";
      break;
  }

  return (
    <section className="w-full px-6 text-white mt-12">
      <h4 className="text-h4 mb-4">{sectionTitle}</h4>
      <ul className="w-full grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] grid-rows-[repeat(1,_1fr)] gap-x-3 auto-rows-[0] overflow-hidden">
        {content}
      </ul>
    </section>
  );
};

export default SearchResultsRow;
