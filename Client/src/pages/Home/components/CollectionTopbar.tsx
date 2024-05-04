

const CollectionTopbar = () => {
  return (
    <nav className={`w-full h-16 flex px-6 py-4 justify-between rounded-t-md z-10 absolute top-0 bg-[#112947]`}>
      <div className="flex gap-2">
        <div className="h-8 w-8 bg-secondaryBlack rounded-full cursor-pointer" />
        <div className="h-8 w-8 bg-secondaryBlack rounded-full cursor-pointer" />
      </div>
      <div className="h-8 aspect-square bg-secondaryBlack rounded-full cursor-pointer flex items-center justify-center hover:h-[33px]">
        <div className="h-6 aspect-square bg-lightGreen rounded-full flex items-center justify-center font-semibold hover:h-[25px] hover:font-bold">
          H
        </div>
      </div>
    </nav>
  );
};

export default CollectionTopbar;
