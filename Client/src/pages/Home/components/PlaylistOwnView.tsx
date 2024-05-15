import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { Playlist } from "../types";
import { useSpotifyGetManyTracks } from "../../../common/hooks";
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
  const { spotifyGetManyTracks } = useSpotifyGetManyTracks();
  const [getOnePlaylist] = useGetOnePlaylistMutation();

  useEffect(() => {
    if (!_playlistId) return;
    setIsLoading(true);
    const fetchData = async (): Promise<void> => {
      const res = await getOnePlaylist({ playlistId: _playlistId }).unwrap();
      console.log(res);
      if (res.songs.length === 0) {
        setCurrentData({
          description: res.description,
          id: res.id,
          name: res.name,
          playlistUrl: null,
          owner: "me",
          type: "playlist",
          tracks: [],
          totalTracks: 0,
        });
        setIsLoading(false);
        return;
      }
      const trackIds: string[] = [];
      res.songs.forEach((track: any) => {
        trackIds.push(track.spotifyId);
      });
      console.log(trackIds);
      const tracks = await spotifyGetManyTracks(trackIds);

      setCurrentData({
        description: res.description,
        id: res.id,
        name: res.name,
        playlistUrl: null,
        owner: "me",
        type: "playlist",
        tracks: tracks,
        totalTracks: tracks.length,
      });
      setIsLoading(false);
    };
    fetchData();
  }, [_playlistId]);

  return isLoading || !currentData ? (
    <MainViewContainer>
      <></>
    </MainViewContainer>
  ) : (
    <MainViewContainer>
      <CollectionTopbar />
      <MainViewContentWrapper isCollectionView={true}>
        <PlaylistHeader playlist={currentData} />
        <CollectionPlaybar data={currentData} />
        <PlaylistListHeader />
        <PlaylistPlaylist playlist={currentData} isMyPlaylist={true} />
      </MainViewContentWrapper>
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
