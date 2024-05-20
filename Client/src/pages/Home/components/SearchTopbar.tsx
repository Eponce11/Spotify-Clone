import { useState, useEffect } from "react";
import { PreviousPageButton, NextPageButton } from "./";
import { FaSearch } from "react-icons/fa";
import { useSpotifySearch } from "../../../common/hooks";
import type { SearchResult } from "../types";

interface SearchTopbarProps {
  setSearchResults: React.Dispatch<React.SetStateAction<any>>;
}

const SearchTopbar = (props: SearchTopbarProps) => {
  const { setSearchResults } = props;
  const [search, setSearch] = useState<string>("");
  const { spotifySearch } = useSpotifySearch();

  useEffect((): any => {
    if (!search) return;
    const fetchData = setTimeout(async () => {
      spotifySearch(search).then((res: SearchResult) => {
        setSearchResults(res);
        console.log(res);
      });
    }, 300);
    return () => clearTimeout(fetchData);
  }, [search]);

  return (
    <nav className="w-full h-16 flex justify-between items-center px-6 rounded-t-md">
      <div className="flex gap-2 items-center">
        <PreviousPageButton />
        <NextPageButton />
        <div className="flex items-center bg-lightGrey text-white text-h5 rounded-full px-3 focus-within:outline outline outline-1">
          <FaSearch color="grey" size={"18px"} />
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            value={search}
            className="w-[350px] rounded-full bg-lightGrey text-white active:border-white text-h5 py-5 ml-2 outline-none"
            placeholder="What do you want to play?"
          />
        </div>
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
