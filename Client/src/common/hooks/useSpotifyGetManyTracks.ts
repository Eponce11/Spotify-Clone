import { spotifyApi } from "../constants";
import { useFilterResponse } from "./";

interface UseSpotifyGetManyTracksReturn {
  spotifyGetManyTracks: (trackIds: string[]) => Promise<any>;
}

const useSpotifyGetManyTracks = (): UseSpotifyGetManyTracksReturn => {
  const { filterTrack } = useFilterResponse();
  const spotifyGetManyTracks = async (trackIds: string[]): Promise<any> => {
    const res = await spotifyApi.getTracks(trackIds);
    console.log(res)
    const filteredTracks = filterTrack(res.body.tracks);
    return filteredTracks;
  };

  return { spotifyGetManyTracks };
};

export default useSpotifyGetManyTracks;
