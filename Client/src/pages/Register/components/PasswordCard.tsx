import { IoIosArrowBack } from "react-icons/io";

const PasswordCard = () => {
  return (
    <section className="bg-[#0f0f0f] text-white p-24 w-[600px] flex flex-col items-center rounded-lg relative">
      <div className="w-[300px] mb-10 relative">
        <div className="h-10 w-10 absolute left-[-50px] cursor-pointer">
          <IoIosArrowBack size={"100%"} color="grey"/>
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
        />
      </div>

      <div className="flex flex-col items-start w-[300px] mt-5 gap-2">
        <p className="text-h5">Your password must contain at least</p>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full border" />
          <span className="text-h6">1 letter</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full border" />
          <span className="text-h6">10 characters</span>
        </div>
      </div>
      <button className="w-[300px] bg-lightGreen text-black text-h5 mt-8 py-4 rounded-full">
        <strong>Next</strong>
      </button>
    </section>
  );
};

export default PasswordCard;
