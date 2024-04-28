import type { Album, Artist } from "../types";
import { AlbumSearchResultCard, ArtistSearchResultCard } from "./";
import {} from "../../../common/utils/getArtistNames";

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
        <ArtistSearchResultCard artist={artist} idx={idx} />
      ));
      break;
    case "ALBUMS":
      sectionTitle = "Albums";
      content = topData.map((album: any, idx: number) => {
        return <AlbumSearchResultCard album={album} idx={idx} />;
      });
      break;
    case "PLAYLISTS":
      sectionTitle = "Playlists";
      break;
  }

  return (
    <section className="w-full px-6 text-white mt-12">
      <h4 className="text-h4 mb-3 ml-3">{sectionTitle}</h4>
      <ul className="w-full grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] grid-rows-[repeat(1,_1fr)] auto-rows-[0] overflow-hidden">
        {content}
      </ul>
    </section>
  );
};

export default SearchResultsRow;
