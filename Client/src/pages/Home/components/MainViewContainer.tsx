import React from "react";

interface MainViewContainerProps {
  children: React.ReactNode;
}

const MainViewContainer = (props: MainViewContainerProps) => {
  const { children } = props;
  return <div className="grow shrink basis-0 bg-darkGrey relative overflow-y-auto">{children}</div>;
};

export default MainViewContainer;
