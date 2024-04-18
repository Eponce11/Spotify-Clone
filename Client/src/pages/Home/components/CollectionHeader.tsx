
const CollectionHeader = () => {
  return (
    <section className="bg-[red] w-full pb-5 flex pt-20 px-6">
      <div className="w-[232px] aspect-square bg-[green] rounded-md" />
      <div className="flex flex-col justify-end text-white ml-7">
        <p className="text-h6">Playlist</p>
        <h1 className="text-h1">Liked Songs</h1>
        <p className="text-h6"><strong>Owner</strong> - 100 songs</p>
      </div>
    </section>
  )
}

export default CollectionHeader