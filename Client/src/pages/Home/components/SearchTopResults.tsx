const SearchTopResults = () => {
  const tracks = new Array(4).fill(0);

  return (
    <section className="w-full px-6 mt-20 text-white flex gap-3">
      <div>
        <h4 className="text-h4 mb-4">Top Result</h4>
        <div className="w-[400px] bg-secondaryLightGrey rounded-lg p-5 flex flex-col gap-4 hover:bg-hoverLightGrey">
          <div className="bg-[blue] h-[92px] w-[92px] rounded-md" />
          <h2 className="text-h3">Song Name</h2>
          <p className="text-h5">
            <span className="text-txtGrey">Song - </span>Artists Name
          </p>
        </div>
      </div>
      <div className="grow">
        <h4 className="text-h4 mb-4 ml-2">Songs</h4>
        <ul className="w-full">
          {tracks.map((track: any, idx: number) => {
            return (
              <li className="flex text-txtGrey px-3 py-2 items-center justify-between hover:bg-hoverLightGrey rounded-md">
                <div className="flex items-center">
                  <div className="h-10 aspect-square rounded bg-[blue] mr-3" />
                  <div className="flex flex-col justify-center">
                    <h5 className="text-h5 mb-1 text-white">Song Name</h5>
                    <span className="text-h6">Artist Name</span>
                  </div>
                </div>
                <p>3:13</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SearchTopResults;
