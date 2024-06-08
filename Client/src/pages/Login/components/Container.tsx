interface ContainerProps {
  children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  const { children } = props;
  return (
    <div className="h-full w-full bg-gradient-to-b from-[#222222] to-black flex flex-col">
      {children}
    </div>
  );
};

export default Container;
