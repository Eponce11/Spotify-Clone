const LoginCard = () => {
  return (
    <section className="bg-[#0f0f0f] text-white p-24 w-[600px] flex flex-col items-center rounded-lg">
      <h3 className="text-h3 mb-12">Login in to Spotify</h3>
      <div className="h-[1px] w-full bg-lightGrey mb-12" />
      <div className="flex flex-col">
        <label className="text-h5 mb-2">Email</label>
        <input
          type="text"
          className="w-[300px] h-12 rounded-sm bg-transparent border px-2 text-h6"
          placeholder="Email"
        />
      </div>
      <div className="flex flex-col mt-5">
        <label className="text-h5 mb-2">Password</label>
        <input
          type="text"
          className="w-[300px] h-12 rounded-sm bg-transparent border px-2 text-h6"
          placeholder="Password"
        />
      </div>
      <button className="w-[300px] bg-lightGreen text-black text-h5 my-10 py-4 rounded-full">
        <strong>Log in</strong>
      </button>
      <span className="text-h5 underline">Forgot your password?</span>
      <div className="h-[1px] w-full bg-lightGrey my-12" />
      <p className="text-txtGrey text-h5">
        Don't Have an account? <span className="text-white underline">Sign up for Spotify</span>
      </p>
    </section>
  );
};

export default LoginCard;
