import { MainViewContainer, SearchTopResults, SearchTopbar, SearchResultsRow } from "./";

const SearchView = () => {
  return (
    <MainViewContainer>
      <SearchTopbar />
      <SearchTopResults />
      <SearchResultsRow rowType="ARTISTS" />
    </MainViewContainer>
  );
};

export default SearchView;
