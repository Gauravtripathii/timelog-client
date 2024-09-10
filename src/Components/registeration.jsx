import React, { useState } from "react";
import clock_img from "../assets/Images/clock.png";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => setIsSignUp(!isSignUp);

  return (
    <div className="flex h-screen bg-gray-100"> 
      <div className="bg-white shadow-lg overflow-hidden flex flex-col h-screen w-screen relative lg:flex-row">
        <div className="w-full h-1/2 bg-[#22243d] text-white -skew-y-[15deg] -translate-y-[40%] shadow-xl lg:w-1/2 xl:w-[65%] lg:h-full lg:skew-y-[0] lg:translate-y-[0%] lg:-skew-x-[20deg] lg:-translate-x-[22%]">
          <div className="flex flex-col items-center justify-between gap-7 h-[60%] w-full absolute top-[25%] pt-20 skew-y-[15deg] lg:w-1/2 lg:skew-y-[0] lg:translate-x-[30%] lg:top-0">
            <div className="flex items-center gap-2 md:pt-12 lg:-translate-x-6">
              <svg
                className="h-8 w-8 xl:h-10 xl:w-10 text-purple-400 lg:skew-x-[20deg]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <h2 className="text-2xl xl:text-4xl font-bold uppercase lg:skew-x-[20deg]">TimeLog</h2>
            </div>
            <h1 className="text-[6.5vw] md:text-[5.7vw] font-bold uppercase text-center lg:text-[1.5vw] lg:skew-x-[20deg] lg:pt-4 lg:pl-10">
              Add an upcoming event/
              <br />
              Make a Time Capsule
            </h1>
            <p className="text-lg w-2/3 hidden lg:block lg:text-[1.5vw] lg:skew-x-[20deg] lg:w-full lg:translate-x-24 lg:pt-6 lg:text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quia perferendis molestias tempore modi ipsa, fugit
              assumenda dolore sit vel debitis!.
            </p>
            {/* <button className="w-fit bg-purple-500 hover:bg-purple-600 text-xl text-white font-bold py-3 px-5 rounded-2xl hidden lg:block lg:skew-x-[20deg] lg:translate-x-[12vw] lg:translate-y-10 lg:rounded-full">
              LEARN MORE
            </button> */}
          </div>
          {/* clock icon from top */}
          <div className="absolute skew-y-[15deg] lg:skew-x-[20deg] lg:skew-y-0 w-[25vw] h-[25vw] md:w-[17vw] md:h-[17vw] bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 border border-purple-500 rounded-full flex items-center justify-center lg:w-[10vw] lg:h-[10vw] lg:translate-x-[20vw] lg:-translate-y-[20vw] xl:h-[15vw] xl:w-[15vw] xl:-translate-x-1/2 xl:translate-y-1/2 xl:left-full xl:bottom-1/2">
            <div className="w-3/4 h-3/4 p-2 bg-gradient-to-r from-[#a269fe] to-purple-400 rounded-full flex items-center justify-center">
              <img src={clock_img} alt="clock icon" className="w-[90%] h-[90%]" />
            </div>
          </div>
        </div>

        <div className="w-full h-4/6 flex flex-col items-center justify-center gap-5 absolute bottom-0 pt-10 lg:top-24 lg:translate-x-[20%] xl:w-1/2 xl:h-full xl:translate-x-[100%] xl:top-0">
          <h2 className="text-3xl font-semibold md:text-4xl">
            {isSignUp ? "Sign up to join" : "Sign in to continue"}
          </h2>
          <form className="flex flex-col gap-3 md:w-96 lg:w-1/3 xl:w-[60%]">
            {isSignUp && (
              <div>
                <input
                  className="w-full px-5 py-3 border rounded-full outline-purple-500 xl:text-xl 2xl:text-2xl 2xl:px-7 2xl:py-5"
                  type="email"
                  placeholder="Email"
                />
              </div>
            )}
            <div>
              <input
                className="w-full px-5 py-3 border rounded-full outline-purple-500 xl:text-xl 2xl:text-2xl 2xl:px-7 2xl:py-5"
                type="text"
                placeholder="Username"
              />
            </div>
            <div>
              <input
                className="w-full px-5 py-3 border rounded-full outline-purple-500 xl:text-xl 2xl:text-2xl 2xl:px-7 2xl:py-5"
                type="password"
                placeholder="Password"
              />
            </div>
            {isSignUp && (
              <div>
                <input
                  className="w-full px-5 py-3 border rounded-full outline-purple-500 xl:text-xl 2xl:text-2xl 2xl:px-7 2xl:py-5"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
            )}
            {!isSignUp && (
              <div className="flex gap-5 md:justify-between xl:text-xl">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
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
            <button className="w-full bg-gradient-to-r from-[#a269fe] to-purple-400 hover:bg-purple-600 text-white font-bold px-5 py-3 rounded-full xl:text-xl 2xl:text-2xl 2xl:px-7 2xl:py-5">
              {isSignUp ? "SIGN UP" : "LOGIN"}
            </button>
          </form>
          <div className="text-center xl:text-xl">
            {isSignUp ? (
              <p>
                Already have an account?{" "}
                <button
                  onClick={toggleMode}
                  className="text-purple-500 hover:text-purple-600 font-semibold hover:underline"
                >
                  Sign in
                </button>
              </p>
            ) : (
              <p>
                Don't have an account?{" "}
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
            <div>
              {/* <p className="text-center">or login with</p> */}
              <div className="flex justify-center space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-fit xl:text-2xl xl:px-7 xl:py-5">
                  Google
                </button>
              </div>
            </div>
          )}
        </div>
        <span className="absolute bottom-0 right-0 text-slate-500 text-sm">
          <p>©2024 TimeLog</p>
        </span>
      </div>
    </div>
  );
};

export default AuthPage;
