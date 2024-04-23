import { useState, useEffect } from "react";
import { spotifyApi } from "../../../common/constants";
import { convertMillisToMinutes } from "../../../common/utils/convertMillisToMinutes";

interface SearchTopbarProps {
  setSearchResults: React.Dispatch<React.SetStateAction<any>>;
}

const SearchTopbar = (props: SearchTopbarProps) => {
  const { setSearchResults } = props;
  const [search, setSearch] = useState<string>("");

  useEffect((): any => {
    if (!search) return;

    let cancel: boolean = false;

    spotifyApi.searchTracks(search).then((res): void => {
      if (cancel) return;
      console.log(res.body.tracks?.items);
      const filteredTracks = res.body.tracks?.items.map((track) => {
        return {
          artist: track.artists[0].name,
          title: track.name,
          uri: track.uri,
          albumUrl: track.album.images[0].url,
          duration: convertMillisToMinutes(track.duration_ms),
        };
      });
      console.log(filteredTracks);
      if (filteredTracks === undefined) {
        setSearchResults([]);
      }
      setSearchResults(filteredTracks);
    });
    return () => (cancel = true);
  }, [search]);

  return (
    <nav className="w-full h-16 flex justify-between items-center px-6 rounded-t-md absolute">
      <div className="flex gap-2 items-center">
        <div className="h-8 w-8 bg-secondaryBlack rounded-full cursor-pointer" />
        <div className="h-8 w-8 bg-secondaryBlack rounded-full cursor-pointer" />
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          value={search}
          className="w-[350px] px-3 rounded-full bg-lightGrey text-white active:border-white text-h5 py-5"
          placeholder="What do you want to play?"
        />
      </div>
      <div className="h-8 aspect-square bg-secondaryBlack rounded-full cursor-pointer flex items-center justify-center hover:h-[33px]">
        <div className="h-6 aspect-square bg-lightGreen rounded-full flex items-center justify-center font-semibold hover:h-[25px] hover:font-bold">
          H
        </div>
      </div>
    </nav>
  );
};

export default SearchTopbar;
