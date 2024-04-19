const CollectionListHeader = () => {
  return (
    <ul className="w-full flex text-txtGrey text-h5 mb-4">
      <li className="ml-6 border-b w-[50px] border-blue-50 px-4 pb-1">
        <div className="bg-[blue] w-3 h-[22px]" />
      </li>
      <li className="border-b flex grow">
        <div className="w-2/5">Title</div>
        <div className="w-1/3">Album</div>
        <div className="w-1/3">Date added</div>
      </li>

      <li className="border-b border-blue-50 flex justify-end w-16 mr-6 pr-8">
        <div className="bg-[blue] w-3 h-[22px]" />
      </li>
    </ul>
  );
};

export default CollectionListHeader;
