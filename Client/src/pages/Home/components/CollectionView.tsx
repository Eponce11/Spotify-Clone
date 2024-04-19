import {
  MainViewContainer,
  CollectionHeader,
  CollectionTopbar,
  CollectionPlaybar,
  CollectionListHeader,
  CollectionPlaylist
} from "./";

const CollectionView = () => {
  return (
    <MainViewContainer>
      <CollectionTopbar />
      <CollectionHeader />
      <CollectionPlaybar />
      <CollectionListHeader />
      <CollectionPlaylist />
    </MainViewContainer>
  );
};

export default CollectionView;
