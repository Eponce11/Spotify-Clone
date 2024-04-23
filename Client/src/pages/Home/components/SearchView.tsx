import { useState } from "react";
import {
  MainViewContainer,
  SearchTopResults,
  SearchTopbar,
  SearchResultsRow,
} from "./";

const SearchView = () => {
  const [searchResults, setSearchResults] = useState<any>([]);

  return (
    <MainViewContainer>
      <SearchTopbar setSearchResults={setSearchResults} />
      { searchResults.length === 0 ? <></> : <SearchTopResults searchResults={searchResults} />}
      <SearchResultsRow rowType="ARTISTS" />
    </MainViewContainer>
  );
};

export default SearchView;
