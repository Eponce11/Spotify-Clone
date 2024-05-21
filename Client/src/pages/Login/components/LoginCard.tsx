import React, { useState } from "react";
import { useLoginMutation } from "../../../api/authApiSlice";
import { useAppDispatch } from "../../../app/hooks";
import { setCredentials } from "../../../app/features/authSlice";

const LoginCard = () => {
  const [login] = useLoginMutation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleLogin = async (
    e: React.MouseEvent<HTMLElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const res: any = await login({
        email: email,
        password: password,
      }).unwrap();
      console.log(res);
      dispatch(setCredentials(res));
    } catch (err: any) {
      console.log(err.data.error);
      setError(err.data.error);
    }
  };

  return (
    <section className="bg-[#0f0f0f] text-white p-24 w-[600px] flex flex-col items-center rounded-lg relative">
      <h3 className="text-h3 mb-12">Login in to Spotify</h3>
      <div className="h-[1px] w-full bg-lightGrey mb-12" />
      <span className="text-[red] text-h5 absolute top-52">{error}</span>
      <div className="flex flex-col">
        <label className="text-h5 mb-2">Email</label>
        <input
          type="text"
          className="w-[300px] h-12 rounded-sm bg-transparent border px-2 text-h6"
          value={email}
          placeholder="Email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
      </div>
      <div className="flex flex-col mt-5">
        <label className="text-h5 mb-2">Password</label>
        <input
          type="text"
          className="w-[300px] h-12 rounded-sm bg-transparent border px-2 text-h6"
          value={password}
          placeholder="Password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
      </div>
      <button
        className="w-[300px] bg-lightGreen text-black text-h5 my-10 py-4 rounded-full"
        onClick={handleLogin}
      >
        <strong>Log in</strong>
      </button>
      <span className="text-h5 underline">Forgot your password?</span>
      <div className="h-[1px] w-full bg-lightGrey my-12" />
      <p className="text-txtGrey text-h5">
        Don't Have an account?{" "}
        <span className="text-white underline">Sign up for Spotify</span>
      </p>
    </section>
  );
};

export default LoginCard;
