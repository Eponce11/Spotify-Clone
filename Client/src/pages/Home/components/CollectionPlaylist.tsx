import type { Track } from "../types";
import { ExplicitLabel } from "./";
interface CollectionPlaylistProps {
  tracks: Track[];
}

const CollectionPlaylist = (props: CollectionPlaylistProps) => {
  const { tracks } = props;
  return (
    <ul className="w-full px-6 text-txtGrey text-h5 mb-5">
      {tracks.map((track: Track, idx: number) => {
        return (
          <li className="flex items-center py-2 hover:bg-hoverLightGrey rounded-md">
            <div className="w-[50px] px-4">{idx + 1}</div>

            <div className="flex grow items-center">
              <div className="flex flex-col gap-1 justify-center py-1">
                <span className="text-h5 text-white">{track.title}</span>
                <div className="flex">
                  {track.isExplicit && <ExplicitLabel />}
                  <span className="text-h6">{track.artist}</span>
                </div>
              </div>
            </div>

            <div className="w-16 pr-8 text-right">{track.duration}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default CollectionPlaylist;

/*
{tracks.map((track: Track, idx: number) => {
        return (
          <li className="flex items-center py-2 hover:bg-hoverLightGrey">
            <div className="w-[50px] px-4">{idx + 1}</div>

            <div className="flex grow items-center">
              <div className="w-2/5 flex items-center">
                <div className="bg-[blue] h-10 aspect-square rounded-sm" />
                <div className="flex flex-col gap-1 justify-center ml-3 py-1">
                  <span className="text-h5 text-white">Song Name</span>
                  <span className="text-h6">Artist Name</span>
                </div>
              </div>
              <div className="w-1/3 text-h6">Album Name</div>
              <div className="w-1/3 text-h6">2 Weeks Ago</div>
            </div>

            <li className="w-16 pr-8 text-right">3:00</li>
          </li>
        );
      })}
      */
