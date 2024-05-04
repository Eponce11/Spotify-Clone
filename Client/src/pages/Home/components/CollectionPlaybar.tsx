import { FaList } from "react-icons/fa6";

const CollectionPlaybar = () => {
  return (
    <section className="p-6 h-[100px] w-full flex items-center text-txtGrey justify-between">
      <div className="h-14 aspect-square rounded-full bg-lightGreen" />
      <div className="flex">
        <span className="text-h6 mr-3">List</span>
        <FaList />
      </div>
    </section>
  )
}

export default CollectionPlaybar