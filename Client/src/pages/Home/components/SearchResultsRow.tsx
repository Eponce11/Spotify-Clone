import type { SearchAlbum, SearchArtist, SearchPlaylist } from "../types";
import {
  AlbumSearchResultCard,
  ArtistSearchResultCard,
  PlaylistSearchResultCard,
} from "./";

type RowType = "ALBUMS" | "ARTISTS" | "PLAYLISTS";
interface SearchResultsRowProps {
  rowType: RowType;
  data: SearchAlbum[] | SearchArtist[] | SearchPlaylist[];
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
      content = topData.map((album: any) => {
        return <AlbumSearchResultCard album={album} />;
      });
      break;
    case "PLAYLISTS":
      sectionTitle = "Playlists";
      content = topData.map((playlist: any, idx: number) => {
        return <PlaylistSearchResultCard playlist={playlist} idx={idx} />;
      });
      break;
  }

  return (
    <section className="w-full px-6 text-white mb-12">
      <h4 className="text-h4 mb-3 ml-3">{sectionTitle}</h4>
      <ul className="w-full grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] grid-rows-[repeat(1,_1fr)] auto-rows-[0] overflow-hidden">
        {content}
      </ul>
    </section>
  );
};

export default SearchResultsRow;
