import { spotifyApi } from "../constants";
import type { Track, Artist, Album, Playlist } from "../../pages/Home/types";
import { useFilterResponse } from "./";
interface UseSpotifySearchByIdReturn {
  spotifySearchById: (id: string, type: ItemType) => Promise<any>;
}

type SpotifySearchByIdReturn = Album | Track | Playlist | Artist | undefined;
type ItemType = "album" | "playlist";

const useSpotifySearchById = (): UseSpotifySearchByIdReturn => {
  const { filterAlbum, filterPlaylist } = useFilterResponse();
  const spotifySearchById = async (
    id: string,
    type: ItemType
  ): Promise<SpotifySearchByIdReturn> => {
    if (type === "album") {
      const res = await spotifyApi.getAlbum(id);
      const filteredAlbum = filterAlbum([res.body]);
      console.log(filteredAlbum);
      return filteredAlbum[0];
    }

    if (type === "playlist") {
      const res = await spotifyApi.getPlaylist(id);
      console.log(res);
      const filteredPlaylist = filterPlaylist([res.body]);
      console.log(filteredPlaylist);
      return filteredPlaylist[0];
    }
  };
  return { spotifySearchById };
};

export default useSpotifySearchById;
