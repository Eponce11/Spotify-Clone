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
import { useGetOnePlaylistMutation } from "../../../api/playlistApiSlice";

const PlaylistOwnView = () => {
  const { _playlistId } = useParams();
  const [currentData, setCurrentData] = useState<Playlist | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { spotifySearchById } = useSpotifySearchById();
  const [getOnePlaylist] = useGetOnePlaylistMutation();

  useEffect(() => {
    if (!_playlistId) return;
    setIsLoading(true);
    const fetchData = async (): Promise<void> => {

      const res = await getOnePlaylist({ playlistId: _playlistId }).unwrap();
      console.log(res);


      /*
      const res = await spotifySearchById(_playlistId, "playlist");
      setCurrentData(res);
      setIsLoading(false);
      */
    };
    fetchData();
  }, [_playlistId]);

  return isLoading || !currentData ? (
    <MainViewContainer>
      <></>
    </MainViewContainer>
  ) : (
    <MainViewContainer>
      <></>
    </MainViewContainer>
  );
};

export default PlaylistOwnView;

/*<MainViewContainer>
<CollectionTopbar />
<MainViewContentWrapper isCollectionView={true}>
  <PlaylistHeader playlist={currentData} />
  <CollectionPlaybar data={currentData} />
  <PlaylistListHeader />
  <PlaylistPlaylist playlist={currentData} />
</MainViewContentWrapper>
</MainViewContainer>*/