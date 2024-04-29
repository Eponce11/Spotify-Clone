import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSpotifySearchById } from "../../../common/hooks";
import {
  MainViewContainer,
  CollectionHeader,
  CollectionTopbar,
  CollectionPlaybar,
  CollectionListHeader,
  CollectionPlaylist,
} from "./";

const CollectionView = () => {
  const { _collectionId } = useParams();
  const [currentData, setCurrentData] = useState();
  const { spotifySearchById } = useSpotifySearchById();
  useEffect(() => {
    if (!_collectionId) return;
    spotifySearchById(_collectionId);
  }, []);

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
