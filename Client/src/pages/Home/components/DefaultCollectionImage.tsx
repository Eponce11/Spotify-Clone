import { LuMusic } from "react-icons/lu";

interface DefaultCollectionImageProps {
  className: string;
}

const DefaultCollectionImage = (props: DefaultCollectionImageProps) => {
  const { className } = props;

  return (
    <div
      className={`${className} bg-secondaryLightGrey flex items-center justify-center rounded-sm`}
    >
      <LuMusic color="white" size={"50%"} />
    </div>
  );
};

export default DefaultCollectionImage;
