import type { Album } from "../types";
interface AlbumHeaderProps {
  album: Album;
}
const AlbumHeader = (props: AlbumHeaderProps) => {
  const { album } = props;
  return (
    <section className="bg-[rgb(32,87,100)] w-full pb-5 flex pt-20 px-6 bg-gradient-to-b from-[#60f360] to-[#085a11]">
      <img src={album.albumUrl} alt="album img" className="w-[232px] aspect-square rounded-md"/>
      <div className="flex flex-col justify-end text-white ml-7">
        <p className="text-h6">Album</p>
        <h1 className="text-h1">{album.name}</h1>
        <p className="text-h6">
          <strong>{album.artist}</strong> - {album.releaseDate} - {album.totalTracks} songs
        </p>
      </div>
    </section>
  );
};

export default AlbumHeader;
