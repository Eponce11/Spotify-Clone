import type { Track } from "../types";
import { ExplicitLabel, GreenPlayButton } from "./";
import { usePlayTracks } from "../../../common/hooks";
interface SearchTopResultsProps {
  tracks: Track[];
}

const SearchTopResults = (props: SearchTopResultsProps) => {
  const { tracks } = props;
  const { playTracks } = usePlayTracks();
  const topTracks = tracks.slice(0, 4);

  return (
    <section className="w-full px-6 mt-4 mb-12 text-white flex gap-3">
      <div className="relative group">
        <h4 className="text-h4 mb-4">Top Result</h4>
        <div className="w-[400px] bg-secondaryLightGrey rounded-lg p-5 flex flex-col gap-4 hover:bg-hoverLightGrey">
          <img
            src={topTracks[0].albumUrl}
            className="h-[92px] w-[92px] rounded-md"
            alt="album img"
          />
          <h2 className="text-h3 text-nowrap overflow-hidden text-ellipsis">
            {topTracks[0].title}
          </h2>
          <div className="flex items-center">
            {topTracks[0].isExplicit && <ExplicitLabel />}
            <p className="text-h5 text-nowrap overflow-hidden text-ellipsis">
              <span className="text-txtGrey">Song - </span>
              {topTracks[0].artist}
            </p>
            <GreenPlayButton
              track={topTracks[0]}
              className="absolute right-4 bottom-5 invisible group-hover:visible cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="grow">
        <h4 className="text-h4 mb-4 ml-2">Songs</h4>
        <ul className="w-full">
          {topTracks.map((track: Track, idx: number) => {
            return (
              <li
                className="flex text-txtGrey px-3 py-2 items-center justify-between hover:bg-hoverLightGrey rounded-md relative group"
                key={idx}
              >
                <div className="flex items-center">
                  <img
                    src={track.albumUrl}
                    alt="track img"
                    className="h-10 w-10 rounded mr-3 "
                  />
                  <div className="flex flex-col justify-center overflow-hidden">
                    <h5 className="text-h5 mb-1 text-white text-nowrap overflow-hidden text-ellipsis">
                      {track.title}
                    </h5>
                    <div className="flex items-center">
                      {track.isExplicit && <ExplicitLabel />}
                      <span className="text-h6 text-nowrap overflow-hidden text-ellipsis">
                        {track.artist}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-h5">{track.duration}</p>
                <div
                  className="absolute h-10 w-10 rounded bg-[rgba(0,0,0,0.5)] flex justify-center items-center invisible group-hover:visible cursor-pointer"
                  onClick={() => playTracks(track)}
                >
                  <span className="bg-[green] h-3 w-3 opacity-100" />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SearchTopResults;
