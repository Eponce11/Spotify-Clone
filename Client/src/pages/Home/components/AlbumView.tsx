import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSpotifySearchById } from "../../../common/hooks";
import { Album } from "../types";
import {
  MainViewContainer,
  AlbumHeader,
  CollectionTopbar,
  CollectionPlaybar,
  AlbumListHeader,
  AlbumPlaylist,
  MainViewContentWrapper,
} from ".";

const AlbumView = () => {
  const { _albumId } = useParams();
  const [currentData, setCurrentData] = useState<Album | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { spotifySearchById } = useSpotifySearchById();
  useEffect(() => {
    if (!_albumId) return;
    setIsLoading(true);
    const fetchData = async (): Promise<void> => {
      const res = await spotifySearchById(_albumId, "album");
      setCurrentData(res);
      setIsLoading(false);
    };
    fetchData();
  }, [_albumId]);

  return isLoading || !currentData ? (
    <MainViewContainer>
      <></>
    </MainViewContainer>
  ) : (
    <MainViewContainer>
      <CollectionTopbar />
      <MainViewContentWrapper isCollectionView={true}>
        <AlbumHeader album={currentData} />
        <CollectionPlaybar data={currentData} isMyPlaylist={false}/>
        <AlbumListHeader />
        <AlbumPlaylist album={currentData} />
      </MainViewContentWrapper>
    </MainViewContainer>
  );
};

export default AlbumView;
