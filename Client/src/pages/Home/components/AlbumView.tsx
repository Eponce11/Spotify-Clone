import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSpotifySearchById } from "../../../common/hooks";
import {
  MainViewContainer,
  AlbumHeader,
  CollectionTopbar,
  CollectionPlaybar,
  AlbumListHeader,
  AlbumPlaylist,
  MainViewContentWrapper,
} from ".";

const CollectionView = () => {
  const { _collectionId } = useParams();
  const [currentData, setCurrentData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { spotifySearchById } = useSpotifySearchById();
  useEffect(() => {
    if (!_collectionId) return;
    setIsLoading(true);
    const fetchData = async (): Promise<void> => {
      const res = await spotifySearchById(_collectionId);
      setCurrentData(res);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <MainViewContainer>
      <></>
    </MainViewContainer>
  ) : (
    <MainViewContainer>
      <CollectionTopbar />
      <MainViewContentWrapper isCollectionView={true}>
        <AlbumHeader album={currentData} />
        <CollectionPlaybar data={currentData} />
        <AlbumListHeader />
        <AlbumPlaylist album={currentData} />
      </MainViewContentWrapper>
    </MainViewContainer>
  );
};

export default CollectionView;
