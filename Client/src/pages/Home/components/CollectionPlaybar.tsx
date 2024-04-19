
const CollectionPlaybar = () => {
  return (
    <section className="p-6 h-[100px] w-full flex items-center text-txtGrey justify-between">
      <div className="h-14 aspect-square rounded-full bg-lightGreen" />
      <div className="flex">
        <span className="text-h6 mr-3">List</span>
        <div className="bg-[red] h-4 aspect-square" />
      </div>
    </section>
  )
}

export default CollectionPlaybar