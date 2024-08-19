import { useState, useEffect } from "react";
import { containsAnyLetters, containsAnyNumbers } from "../../../common/utils";
import { IoIosArrowBack } from "react-icons/io";
interface PasswordCardProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const PasswordCard = (props: PasswordCardProps) => {
  const { setStep, password, setPassword } = props;

  const [hasLetter, setHasLetter] = useState<boolean>(false);
  const [hasNumber, setHasNumber] = useState<boolean>(false);
  const [hasTenChars, setHasTenChars] = useState<boolean>(false);

  useEffect(() => {
    setPassword("");
  }, [])

  const handlePassword = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    if (hasLetter && hasNumber && hasTenChars) {
      setStep((prev: number) => prev + 1);
    }
  };

  const handleChangePassword = (e: any): void => {
    e.preventDefault();
    setPassword(e.target.value);
    if (e.target.value.length >= 10) {
      setHasTenChars(true);
    } else {
      setHasTenChars(false);
    }
    if (containsAnyLetters(e.target.value)) {
      setHasLetter(true);
    } else {
      setHasLetter(false);
    }
    if (containsAnyNumbers(e.target.value)) {
      setHasNumber(true);
    } else {
      setHasNumber(false);
    }
  };

  return (
    <section className="bg-[#0f0f0f] text-white p-24 w-[600px] flex flex-col items-center rounded-lg relative">
      <div className="w-[300px] mb-10 relative">
        <div
          className="h-10 w-10 absolute left-[-50px] cursor-pointer"
          onClick={() => setStep((prev: number) => prev - 1)}
        >
          <IoIosArrowBack size={"100%"} color="grey" />
        </div>
        <h5 className="text-h5 text-txtGrey mb-1">Step 1 of 2</h5>
        <h4 className="text-h4">Create a password</h4>
      </div>
      <div className="flex flex-col">
        <label className="text-h5 mb-2">Password</label>
        <input
          type="text"
          className="w-[300px] h-12 rounded-sm bg-transparent border px-2 text-h6"
          placeholder="Password"
          value={password}
          onChange={handleChangePassword}
        />
      </div>

      <div className="flex flex-col items-start w-[300px] mt-5 gap-2">
        <p className="text-h5">Your password must contain at least</p>
        <div className="flex items-center gap-2">
          {hasLetter ? (
            <div className="w-3 h-3 rounded-full border bg-lightGreen" />
          ) : (
            <div className="w-3 h-3 rounded-full border" />
          )}
          <span className="text-h6">1 Letter</span>
        </div>
        <div className="flex items-center gap-2">
          {hasNumber ? (
            <div className="w-3 h-3 rounded-full border bg-lightGreen" />
          ) : (
            <div className="w-3 h-3 rounded-full border" />
          )}
          <span className="text-h6">1 Number</span>
        </div>
        <div className="flex items-center gap-2">
          {hasTenChars ? (
            <div className="w-3 h-3 rounded-full border bg-lightGreen" />
          ) : (
            <div className="w-3 h-3 rounded-full border" />
          )}
          <span className="text-h6">10 Characters</span>
        </div>
      </div>
      <button
        className="w-[300px] bg-lightGreen text-black text-h5 mt-8 py-4 rounded-full"
        onClick={handlePassword}
      >
        <strong>Next</strong>
      </button>
    </section>
  );
};

export default PasswordCard;
