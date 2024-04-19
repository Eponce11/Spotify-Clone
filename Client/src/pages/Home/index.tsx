import { LibrarySidebar, CollectionView } from "./components";

const Home = () => {
  return (
    <div className="w-full h-full bg-black p-2 flex gap-2">
      <LibrarySidebar />
      <CollectionView />
    </div>
  );
};

export default Home;
