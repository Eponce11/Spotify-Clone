import React from "react";

interface MainViewContainerProps {
  children: React.ReactNode;
}

const MainViewContainer = (props: MainViewContainerProps) => {
  const { children } = props;
  return <div className="grow bg-darkGrey relative">{children}</div>;
};

export default MainViewContainer;
