import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEmailValidationMutation } from "../../../api/authApiSlice";

interface EmailCardProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const EmailCard = (props: EmailCardProps) => {
  const { setStep } = props;

  const [email, setEmail] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [emailValidation] = useEmailValidationMutation();
  const navigate = useNavigate();

  const handleSubmitEmail = async (
    e: React.MouseEvent<HTMLElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const res = await emailValidation({ email: email }).unwrap();
      console.log(res);
      setStep((prev: number) => prev + 1);
    } catch (err: any) {
      console.log(err);
      setIsError(true);
    }
  };

  return (
    <section className="bg-[#0f0f0f] text-white p-24 w-[600px] flex flex-col items-center rounded-lg relative">
      <h3 className="text-h3 mb-12">Sign up to Start Listening</h3>
      <div className="h-[1px] w-full bg-lightGrey mb-12" />
      {isError && (
        <span className="text-[red] text-h5 absolute top-52">
          Invalid Email
        </span>
      )}
      <div className="flex flex-col">
        <label className="text-h5 mb-2">Email Address</label>
        <input
          type="text"
          className="w-[300px] h-12 rounded-sm bg-transparent border px-2 text-h6"
          placeholder="name@domain.com"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
      </div>
      <button
        className="w-[300px] bg-lightGreen text-black text-h5 mt-10 py-4 rounded-full"
        onClick={handleSubmitEmail}
      >
        <strong>Next</strong>
      </button>
      <div className="h-[1px] w-full bg-lightGrey my-12" />
      <p className="text-txtGrey text-h5">
        Already have an account?{" "}
        <span
          className="text-white underline cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Log in here.
        </span>
      </p>
    </section>
  );
};

export default EmailCard;
