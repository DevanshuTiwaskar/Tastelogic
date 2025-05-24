import React from "react";
import { useNavigate } from "react-router-dom";

const GetStart = () => {
  const navigate = useNavigate();

const handleLogin = () => navigate("/login");
const handleSignUp = () => navigate("/signup");



  // const handleGoHome = () => {
  //   navigate("/home");
  // };

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative flex flex-col items-center justify-between">
      <img
        src="/getStartPhoto.jpg"
        className="absolute left-[10%] w-[80%] h-[54%] object-cover mt-5"
        alt="Delicious dish"
      />

      <div className="absolute top-[60vh] flex flex-col -mt-5">
        <h1 className="text-[2vh] font-semibold text-left text-red-600 mb-2">
          UNLIMITED PREMIUM RECIPES
        </h1>

        <div className="text-7xl flex flex-col gap-3 text-black mb-4 font-extrabold">
          <h1>Start</h1>
          <h1>Cooking</h1>
        </div>

        <div className="text-2xl text-black flex gap-5 mt-4 font-semibold">
          <button
            className="bg-[#FFCE5D] px-12 py-6 border-[3px] border-black rounded-full shadow transition duration-300 hover:bg-[#e6b94d]"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="bg-[#32ae94] px-12 py-6 border-[3px] border-black rounded-full shadow transition duration-300 hover:bg-[#2a957f]"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
