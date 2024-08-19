import React from "react";

interface MainViewContentWrapperProps {
  children: React.ReactNode;
  isCollectionView: boolean;
}

const MainViewContentWrapper = (props: MainViewContentWrapperProps) => {
  const { children, isCollectionView } = props;
  return (
    <div className={`${isCollectionView ? 'top-0' : 'top-16'} absolute overflow-y-auto bottom-0 w-full scrollbar`}>{children}</div>
  );
};

export default MainViewContentWrapper;
