import { spotifyApi } from "../constants";

interface UsePlayTracksReturn {
  playTracks: (tracks: string[]) => void;
}

const usePlayTracks = (): UsePlayTracksReturn => {
  const playTracks = (tracks: string[]): void => {
    spotifyApi.play({ uris: tracks });
  };
  return { playTracks };
};

export default usePlayTracks;
