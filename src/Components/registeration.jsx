import React from 'react';
import Authpic from '/src/assets/Images/authpic.jpeg'
const RegistrationForm = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col md:flex-row">
        <form className="bg-white p-6 rounded-lg shadow-md md:w-1/2">
          <h2 className="text-2xl font-bold text-center mb-4">Registration</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            type="submit"
          >
            Register
          </button>
        </form>
        <div className="md:ml-4">
          <img src={Authpic} alt="authpic" className="w-full h-auto md:max-h-screen" />
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;