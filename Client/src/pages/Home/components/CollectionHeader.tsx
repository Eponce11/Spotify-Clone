import type { Album } from "../types";
interface CollectionHeaderProps {
  data: Album;
}
const CollectionHeader = (props: CollectionHeaderProps) => {
  const { data } = props;
  return (
    <section className="bg-[rgb(32,87,100)] w-full pb-5 flex pt-20 px-6 bg-gradient-to-b from-[#487797] to-[#0e6b91dc]">
      <img
        src={data.albumUrl}
        alt="album img"
        className="w-[232px] aspect-square rounded-md"
      />
      <div className="flex flex-col justify-end text-white ml-7">
        <p className="text-h6">
          {data.type === "album" ? "Album" : "Playlist"}
        </p>
        <h1 className="text-h1">{data.name}</h1>
        <p className="text-h6">
          <strong>{data.artist}</strong> - {data.releaseDate} -{" "}
          {data.totalTracks} songs
        </p>
      </div>
    </section>
  );
};

export default CollectionHeader;
