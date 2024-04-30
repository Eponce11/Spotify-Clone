import { spotifyApi } from "../constants";
import type { Track, Artist, Album, Playlist } from "../../pages/Home/types";
import { useFilterResponse } from "./";
interface UseSpotifySearchByIdReturn {
  spotifySearchById: (id: string) => Promise<any>;
}

type SpotifySearchByIdReturn = Album | Track | Playlist | Artist | undefined;

const useSpotifySearchById = (): UseSpotifySearchByIdReturn => {
  const { filterAlbum } = useFilterResponse();
  const spotifySearchById = async (id: string): Promise<SpotifySearchByIdReturn> => {
    const res = await spotifyApi.getAlbum(id);
    console.log(res);

    if (res.body.album_type === "album") {
      const filteredAlbum = filterAlbum([res.body]);
      console.log(filteredAlbum);
      return filteredAlbum[0];
    }
  };
  return { spotifySearchById };
};

export default useSpotifySearchById;
