const CollectionPlaylist = () => {
  const songs = new Array(4).fill(0);

  return (
    <ul className="w-full px-6 h-[100px] text-txtGrey text-h5">
      {songs.map((song: any, idx: number) => {
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
    </ul>
  );
};

export default CollectionPlaylist;
