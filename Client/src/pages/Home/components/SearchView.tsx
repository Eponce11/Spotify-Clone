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
      


      {!searchResults.albums || searchResults.albums.length === 0 ? (
        <></>
      ) : (
        <SearchResultsRow rowType="ALBUMS" data={searchResults.albums} />
      )}
    </MainViewContainer>
  );
};

export default SearchView;

/*
{!searchResults.artists || searchResults.artists.length === 0 ? (
        <></>
      ) : (
        <SearchResultsRow rowType="ARTISTS" data={searchResults.artists} />
      )}
      */