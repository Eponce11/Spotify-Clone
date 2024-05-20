import type { Playlist } from "../types";

interface PlaylistHeaderProps {
  playlist: Playlist;
}

const PlaylistHeader = (props: PlaylistHeaderProps) => {
  const { playlist } = props;
  return <section className="bg-[rgb(32,87,100)] w-full pb-5 flex pt-20 px-6 bg-gradient-to-b from-[#60f360] to-[#085a11]">
  <img src={playlist.playlistUrl ? playlist.playlistUrl : ""} alt="album img" className="w-[232px] aspect-square rounded-md"/>
  <div className="flex flex-col justify-end text-white ml-7">
    <p className="text-h6">Playlist</p>
    <h1 className="text-h1">{playlist.name}</h1>
    <p className="text-h6">{playlist.description}</p>
    <p className="text-h6">
      <strong>{playlist.owner}</strong>
    </p>
  </div>
</section>
};

export default PlaylistHeader;

//<strong>{playlist.artist}</strong> - {playlist.releaseDate} - {playlist.totalTracks} songs