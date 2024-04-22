import { useState, useEffect } from "react";
import { spotifyApi } from "../../../common/constants";

const SearchTopbar = () => {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (!search) return;
    spotifyApi.searchTracks(search).then((res) => {
      console.log(res);
    });
  }, [search]);

  return (
    <nav>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        value={search}
      />
    </nav>
  );
};

export default SearchTopbar;
