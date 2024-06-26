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
    fetchData();
  }, [_playlistId]);

  const fetchData = async (): Promise<void> => {
    setIsLoading(true);
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
    const tracks: any = [];
    const trackIds: string[] = [];
    res.songs.forEach((track: any) => {
      trackIds.push(track.spotifyId);
      tracks.push({ prismaId: track.id, id: track.spotifyId });
    });
    console.log(trackIds);
    const filteredTracks = await spotifyGetManyTracks(trackIds);

    const completeTracks = tracks.map((track: any) => {
      const foundTrack = filteredTracks.find((ele: any) => track.id === ele.id);
      return {
        ...track,
        ...foundTrack,
      };
    });

    console.log(completeTracks);

    setCurrentData({
      description: res.description,
      id: res.id,
      name: res.name,
      playlistUrl: null,
      owner: "me",
      type: "playlist",
      tracks: completeTracks,
      totalTracks: tracks.length,
    });
    setIsLoading(false);
  };

  return isLoading || !currentData ? (
    <MainViewContainer>
      <></>
    </MainViewContainer>
  ) : (
    <MainViewContainer>
      <CollectionTopbar />
      <MainViewContentWrapper isCollectionView={true}>
        <PlaylistHeader playlist={currentData} />
        <CollectionPlaybar data={currentData} isMyPlaylist={true} />
        <PlaylistListHeader />
        <PlaylistPlaylist
          playlist={currentData}
          isMyPlaylist={true}
          fetchData={fetchData}
        />
      </MainViewContentWrapper>
    </MainViewContainer>
  );
};

export default PlaylistOwnView;
