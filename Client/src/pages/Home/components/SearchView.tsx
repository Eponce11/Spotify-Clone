import { useState } from "react";
import {
  MainViewContainer,
  MainViewContentWrapper,
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
      <MainViewContentWrapper isCollectionView={false}>
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
        {!searchResults.artists || searchResults.artists.length === 0 ? (
          <></>
        ) : (
          <SearchResultsRow rowType="ARTISTS" data={searchResults.artists} />
        )}
        {!searchResults.playlists || searchResults.playlists.length === 0 ? (
          <></>
        ) : (
          <SearchResultsRow rowType="PLAYLISTS" data={searchResults.playlists} />
        )}
      </MainViewContentWrapper>
    </MainViewContainer>
  );
};

export default SearchView;
