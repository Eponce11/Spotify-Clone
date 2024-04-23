type RowType = "ALBUMS" | "ARTISTS" | "PLAYLISTS";
interface SearchResultsRowProps {
  rowType: RowType;
}

const SearchResultsRow = (props: SearchResultsRowProps) => {
  const { rowType } = props;

  let sectionTitle;
  switch (rowType) {
    case "ARTISTS":
      sectionTitle = "Artists";
      break;
    case "ALBUMS":
      sectionTitle = "Albums";
      break;
    case "PLAYLISTS":
      sectionTitle = "Playlists";
      break;
  }

  return (
    <section className="w-full px-6 text-white mt-12">
      <h4 className="text-h4 mb-4">{sectionTitle}</h4>
      <ul className="w-full flex">
        <li className="flex flex-col gap-3 p-3 bg-[green] rounded-lg">
          <div className="h-[186px] w-[186px] rounded-full bg-[blue]" />
          <h5 className="text-h5">Artist Name</h5>
          <p className="text-h6 text-txtGrey">Artist</p>
        </li>
      </ul>
    </section>
  );
};

export default SearchResultsRow;
