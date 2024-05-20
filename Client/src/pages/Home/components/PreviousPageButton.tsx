import { useNavigate } from "react-router-dom";
const PreviousPageButton = () => {
  const navigate = useNavigate();

  const handleGoBackPage = (e: any) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div
      className="h-8 w-8 bg-secondaryBlack rounded-full cursor-pointer"
      onClick={handleGoBackPage}
    />
  );
};

export default PreviousPageButton;
