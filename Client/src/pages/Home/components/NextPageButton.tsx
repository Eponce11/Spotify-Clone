import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const NextPageButton = () => {
  return (
    <div className="h-8 w-8 bg-secondaryBlack rounded-full cursor-pointer">
      <MdOutlineKeyboardArrowRight size={"100%"} color="grey" />
    </div>
  );
};

export default NextPageButton;
