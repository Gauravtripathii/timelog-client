import React, { useState } from "react";

import clock_img from "../assets/Images/clock.png";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => setIsSignUp(!isSignUp);

  return (
    <div className="flex h-screen bg-gray-100 ">
      <div className="bg-white shadow-lg overflow-hidden flex flex-col h-screen w-screen relative">
        <div className="w-full h-1/2 sm:h-[60%] bg-[#22243d] text-white -skew-y-[15deg] -translate-y-[40%] shadow-xl">
          <div className="flex flex-col items-center justify-between gap-7 h-[60%] w-full absolute top-[25%] pt-20 skew-y-[15deg]">
            <div className="flex items-center gap-2 md:pt-12">
              <svg
                className="h-8 w-8 text-purple-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <h2 className="text-2xl font-bold uppercase">TimeLog</h2>
            </div>
            <h1 className="text-[6.5vw] md:text-[5.7vw]  font-bold uppercase text-center">
              Add an upcoming event/
              <br />
              Make a Time Capsule
            </h1>
            <p className="text-lg w-2/3 hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quia perferendis molestias tempore modi ipsa, fugit
              assumenda dolore sit vel debitis!.
            </p>
            <button className="w-fit bg-purple-500 hover:bg-purple-600 text-xl text-white font-bold py-3 px-5 rounded-2xl hidden">
              LEARN MORE
            </button>
          </div>
          {/* clock icon from top */}
          <div className="absolute skew-y-[15deg] w-[25vw] h-[25vw] md:w-[17vw] md:h-[17vw] bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 border border-purple-500 rounded-full flex items-center justify-center">
            <div className="w-3/4 h-3/4 p-2 bg-gradient-to-r from-[#a269fe] to-purple-400 rounded-full flex items-center justify-center">
              <img src={clock_img} alt="clock icon" className="w-[90%] h-[90%]" />
            </div>
          </div>
        </div>

























        <div className="w-full h-4/6 flex flex-col items-center justify-center gap-5 absolute bottom-0 pt-10 ">
          <h2 className="text-3xl font-semibold md:text-4xl">
            {isSignUp ? "Sign up to join" : "Sign in to continue"}
          </h2>
          <form className="flex flex-col gap-3 md:w-96 ">
            {isSignUp && (
              <div className="">
                <input
                  className="w-full px-5 py-3 border rounded-full outline-purple-500"
                  type="email"
                  placeholder="Email"
                />
              </div>
            )}
            <div className="">
              <input
                className="w-full px-5 py-3 border rounded-full outline-purple-500"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="">
              <input
                className="w-full px-5 py-3 border rounded-full outline-purple-500"
                type="password"
                placeholder="Password"
              />
            </div>
            {isSignUp && (
              <div className="">
                <input
                  className="w-full px-5 py-3 border rounded-full outline-purple-500"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
            )}
            {!isSignUp && (
              <div className="flex gap-5">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="" />
                  <span>Remember Me</span>
                </label>
                <a
                  href="#"
                  className="text-purple-500 hover:text-purple-600 hover:underline"
                >
                  forgot password?
                </a>
              </div>
            )}
            <button className="w-full bg-gradient-to-r from-[#a269fe] to-purple-400 hover:bg-purple-600 text-white font-bold px-5 py-3 rounded-full">
              {isSignUp ? "SIGN UP" : "LOGIN"}
            </button>
          </form>
          <div className="text-center">
            {isSignUp ? (
              <p>
                Already have an account?{" "}
                <button
                  onClick={toggleMode}
                  className="text-purple-500 hover:text-purple-600 font-semibold"
                >
                  Sign in
                </button>
              </p>
            ) : (
              <p>
                Don't have an account?
                <button
                  onClick={toggleMode}
                  className="text-purple-500 hover:text-purple-600 font-semibold hover:underline"
                >
                  Sign up
                </button>
              </p>
            )}
          </div>
          {!isSignUp && (
            <div className="">
              {/* <p className="text-center">or login with</p> */}
              <div className="flex justify-center space-x-4">
                <button className="bg-blue-500  hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-fit">
                  Google
                </button>
              </div>
            </div>
          )}
        </div>
        <span className="absolute bottom-0 left-0 text-slate-500 text-sm">
          <p>©2024 TimeLog</p>
        </span>
      </div>
    </div>
  );
};

export default AuthPage;
