import { useState, useEffect } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useRegisterMutation } from "../../../api/authApiSlice";
import { setCredentials } from "../../../app/features/authSlice";

interface UsernameCardProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  password: string;
}

const UsernameCard = (props: UsernameCardProps) => {
  const { setStep, username, setUsername, email, password } = props;

  const [isError, setIsError] = useState<boolean>(false);
  const [register] = useRegisterMutation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setUsername("");
  }, []);

  const isUsernameValid = (): boolean => {
    if (username.length < 2) {
      setIsError(true);
      return false;
    }
    return true;
  };

  const handleRegister = async (
    e: React.MouseEvent<HTMLElement>
  ): Promise<void> => {
    e.preventDefault();
    if (!isUsernameValid) return;
    try {
      const res = await register({
        email: email,
        password: password,
        username: username,
      }).unwrap();
      dispatch(setCredentials(res));
      navigate("/")
      console.log(res);
    } catch (err: any) {
      console.log(err.data);
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
        <h5 className="text-h5 text-txtGrey mb-1">Step 2 of 2</h5>
        <h4 className="text-h4">Tell us about yourself</h4>
      </div>
      {isError && (
        <span className="text-[red] text-h5 absolute top-40">
          Must be at least 2 chars
        </span>
      )}
      <div className="flex flex-col">
        <label className="text-h5 mb-2">Username</label>
        <input
          type="text"
          className="w-[300px] h-12 rounded-sm bg-transparent border px-2 text-h6"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button
        className="w-[300px] bg-lightGreen text-black text-h5 mt-8 py-4 rounded-full"
        onClick={handleRegister}
      >
        <strong>Next</strong>
      </button>
    </section>
  );
};

export default UsernameCard;
