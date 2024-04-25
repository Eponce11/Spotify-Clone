import { useState } from "react";
import {
  MainViewContainer,
  SearchTopResults,
  SearchTopbar,
  SearchResultsRow,
} from "./";
import type { SearchResult } from "../types";

const SearchView = () => {
  const [searchResults, setSearchResults] = useState<SearchResult>({});

  return (
    <MainViewContainer>
      <SearchTopbar setSearchResults={setSearchResults} />
      {!searchResults.tracks || searchResults.tracks.length === 0 ? (
        <></>
      ) : (
        <SearchTopResults tracks={searchResults.tracks} />
      )}
      <SearchResultsRow rowType="ARTISTS" />
    </MainViewContainer>
  );
};

export default SearchView;
