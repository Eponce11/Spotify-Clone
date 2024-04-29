import React from "react";

interface MainViewContentWrapperProps {
  children: React.ReactNode;
}

const MainViewContentWrapper = (props: MainViewContentWrapperProps) => {
  const { children } = props;
  return (
    <div className="top-16 absolute overflow-y-auto bottom-0 w-full">{children}</div>
  );
};

export default MainViewContentWrapper;
