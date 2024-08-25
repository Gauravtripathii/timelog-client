import React, { useState } from 'react';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => setIsSignUp(!isSignUp);

  return (
    <div className="flex h-screen bg-gray-100 ">
      <div className="m-auto bg-white shadow-lg overflow-hidden flex h-screen w-screen">
        <div className="w-1/2 bg-[#22243d] p-12 text-white transform  origin-top-right -skew-x-[20deg] h-screen">
          <div className="">
            <div className="flex items-center mb-8">
              <svg className="h-8 w-8 text-purple-400 mr-2 skew-x-[20deg]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <h2 className="text-2xl font-bold skew-x-[20deg]">TimeLog</h2>
            </div>
            <h1 className="text-4xl font-bold mb-4 skew-x-[20deg] ml-[10%] mt-[25%]">Add an upcoming event/<br />Make a Time Capsule</h1>
           <p className="mb-8 text-sm w-2/3 ml-[18%] skew-x-[20deg] mt-[8%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perferendis molestias tempore modi ipsa, fugit assumenda dolore sit vel debitis!.</p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded left-8 skew-x-[20deg] ml-[26%] mt-[6%] ">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="w-1/2 p-12">
          <h2 className="text-3xl font-bold mb-8 flex justify-between mt-[12rem]">{isSignUp ? 'Sign up to join' : 'Sign in to continue'}</h2>
          <form>
            {isSignUp && (
              <div className="mb-4">
                <input className="w-full p-2 border rounded-lg" type="email" placeholder="Email" />
              </div>
            )}
            <div className="mb-4">
              <input className="w-full p-2 border rounded-lg" type="text" placeholder="Username" />
            </div>
            <div className="mb-4">
              <input className="w-full p-2 border rounded-lg" type="password" placeholder="Password" />
            </div>
            {isSignUp && (
              <div className="mb-4">
                <input className="w-full p-2 border rounded-lg" type="password" placeholder="Confirm Password" />
              </div>
            )}
            {!isSignUp && (
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Remember Me</span>
                </label>
                <a href="#" className="text-purple-500 hover:text-purple-600 hover:underline">forgot password?</a>
              </div>
            )}
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
              {isSignUp ? 'SIGN UP' : 'LOGIN'}
            </button>
          </form>
          <div className="mt-6 text-center">
            {isSignUp ? (
              <p>Already have an account? <button onClick={toggleMode} className="text-purple-500 hover:text-purple-600 font-semibold">Sign in</button></p>
            ) : (
              <p>Don't have an account? <button onClick={toggleMode} className="text-purple-500 hover:text-purple-600 font-semibold hover:underline">Sign up</button></p>
            )}
          </div>
          {!isSignUp && (
            <div className="mt-8">
              <p className="text-center mb-2">or login with</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-blue-500  hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-1/3">
                  Google
                </button>
                
              </div>
            </div>
          )}
        </div>
        <span className='flex items-end'>
          <p>Credits©2024</p>
        </span>
      </div>
    </div>
  );
};

export default AuthPage;