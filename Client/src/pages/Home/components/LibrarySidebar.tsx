const LibrarySidebar = () => {
  const playlists = new Array(5).fill(0);

  return (
    <aside className="h-full w-[72px] flex flex-col gap-2">
      <ul className="w-full px-3 py-2 bg-darkGrey rounded-md flex flex-col items-center">
        <li className="w-12 h-12 flex items-center justify-center">
          <div className="w-6 h-6 bg-[red] cursor-pointer" />
        </li>
        <li className="w-12 h-12 flex items-center justify-center">
          <div className="w-6 h-6 bg-[red] cursor-pointer" />
        </li>
      </ul>

      <ul className="w-full h-full bg-darkGrey rounded-md flex flex-col items-center">
        <li className="w-12 h-12 flex items-center justify-center cursor-pointer">
          <div className="w-6 h-6 bg-[red]" />
        </li>
        {playlists.map((playlist: any, idx: number) => {
          return (
            <li
              key={idx}
              className="w-16 h-16 flex items-center justify-center cursor-pointer hover:bg-hoverDarkGrey rounded-sm"
            >
              <div className="w-12 h-12 bg-[red] rounded-sm" />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default LibrarySidebar;
