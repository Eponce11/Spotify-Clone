interface BodyWrapperProps {
  children: React.ReactNode;
}

const BodyWrapper = (props: BodyWrapperProps) => {
  const { children } = props;
  return <div className="grow flex justify-center items-start mt-8">{children}</div>;
};

export default BodyWrapper;
