import { spotifyApi } from "../constants";

interface UseSpotifySearchByIdReturn {
  spotifySearchById: (id: string) => Promise<void>;
}

const useSpotifySearchById = (): UseSpotifySearchByIdReturn => {
  const spotifySearchById = async (id: string): Promise<void> => {
    const res = await spotifyApi.getAlbum(id);
    console.log(res);
  }
  return { spotifySearchById };
}

export default useSpotifySearchById