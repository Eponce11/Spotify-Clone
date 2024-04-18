
const CollectionHeader = () => {
  return (
    <section className="bg-[red] w-full pb-5 flex pt-20 px-6">
      <div className="h-[232px] aspect-square bg-[green]" />
      <div className="flex flex-col justify-end gap-3 text-white ml-7">
        <p className="">Playlist</p>
        <h1 className="text-8xl font-bold">Liked Songs</h1>
        <p>Owner - 100 songs</p>
      </div>
    </section>
  )
}

export default CollectionHeader