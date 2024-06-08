import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { Playlist } from "../types";
import { useSpotifySearchById } from "../../../common/hooks";
import {
  MainViewContainer,
  CollectionTopbar,
  MainViewContentWrapper,
  PlaylistHeader,
  CollectionPlaybar,
  PlaylistPlaylist,
  PlaylistListHeader,
} from ".";

const PlaylistView = () => {
  const { _playlistId } = useParams();
  const [currentData, setCurrentData] = useState<Playlist | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { spotifySearchById } = useSpotifySearchById();
  useEffect(() => {
    if (!_playlistId) return;
    setIsLoading(true);
    const fetchData = async (): Promise<void> => {
      const res = await spotifySearchById(_playlistId, "playlist");
      setCurrentData(res);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading || !currentData ? (
    <MainViewContainer>
      <></>
    </MainViewContainer>
  ) : (
    <MainViewContainer>
      <CollectionTopbar />
      <MainViewContentWrapper isCollectionView={true}>
        <PlaylistHeader playlist={currentData} />
        <CollectionPlaybar data={currentData} isMyPlaylist={false}/>
        <PlaylistListHeader />
        <PlaylistPlaylist playlist={currentData} isMyPlaylist={false} />
      </MainViewContentWrapper>
    </MainViewContainer>
  );
};

export default PlaylistView;
