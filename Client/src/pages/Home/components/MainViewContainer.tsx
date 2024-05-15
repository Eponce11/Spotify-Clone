import React from "react";

interface MainViewContainerProps {
  children: React.ReactNode;
}

const MainViewContainer = (props: MainViewContainerProps) => {
  const { children } = props;
  return <div className="grow bg-darkGrey relative min-w-[860px] overflow-hidden rounded-md">{children}</div>;
};

export default MainViewContainer;
