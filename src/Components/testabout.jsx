import React from 'react'

import Logo from "../assets/Images/TimeLog.png";

import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Testabout = () => {
  return (
    
<div className=" h-screen w-screen">
    {/* <nav className="">
        <ul className="flex flex-row-reverse justify-center text-white">
            <li className="p-2 sm:text-4xl">Home</li>
            <li className="p-2 sm:text-4xl">Services</li>
            <li className="p-2 sm:text-4xl">About us</li>
        </ul>
    </nav> */}
    <div className=" flex flex-col  items-center h-[80%] p-1   gap-4">
    <div className=" border border-white w-[160px] h-[170px]  rounded-full -rotate-45 shadow-2xl  shadow-purple-400 sm:w-[300px] sm:h-[340px]"></div>

     <div className=" text-white w-full flex flex-col items-center  shadow-xl">
        <div className="">
        <span className="text-4xl text-orange-400 sm:font-archivo sm:text-7xl">About </span> <span className="text-4xl sm:font-archivo sm:text-7xl">TimeLog</span>
        </div>
        <p className='  text-[1.3rem] p-3  flex justify-between sm:text-[2.3rem]'>Time Log provide a cutting-edge service designed to capture and manage your future memories. Our innovative platform not only helps you keep track of your time but also ensures that important dates and occasions never slip your mind.</p>
     </div>

    </div>
    {/* <footer className="border border-white flex flex-wrap gap-56 p-4 h-1/2">
    <div className=" border border-white w-[50px] h-[50px]  rounded-full text-white"></div>
   <h1 className="pt-5 w-1/2"> Gaurav kumar Tripathi</h1>
    </div>
       {/* <div className="border">
       Gaurav kumar Tripathi
       </div> */}
            {/* <h1 className="">Gaurav kumar Tripathi</h1> */}
    
    {/* <div className=" border border-white w-[50px] h-[50px]  rounded-full text-white justify-evenly">
    <h1 className="pt-5 w-1/2">Rahul Behera</h1>
    </div> */}
   
    {/* </footer> */} */
    <footer className="flex flex-wrap px-3 pt-3">
        <div className="w-1/2  flex flex-col  gap-2 items-center">
            <div className="border border-white w-[70px] h-[70px]  rounded-full text-white shadow-2xl  shadow-purple-400 sm:w-[175px] sm:h-[175px]"></div>
        <h1 className=" text-white text-xl sm:text-4xl">Gaurav Tripathi</h1>
        <div className="flex gap-2 ">
        <a href="" className="text-4xl sm:text-6xl"><FaLinkedin className='bg-white hover:text-blue-600 '/></a>
        <a href="/" className="text-4xl  sm:text-6xl"><FaSquareGithub className='bg-white hover:text-green-500'/></a>
        </div>
        </div>
        <div className="w-1/2  flex flex-col  gap-2 items-center">
            <div className="border border-white w-[70px] h-[70px]  rounded-full text-white shadow-2xl  shadow-purple-400 sm:w-[175px] sm:h-[175px]"></div>
        <h1 className=" text-white text-xl sm:text-4xl">Rahul Behera</h1>
        <div className="flex gap-2 ">
        <a href="" className="text-4xl flex sm:text-6xl"><FaLinkedin className='bg-white hover:text-blue-600 '/></a>
        <a href="/" className="text-4xl flex sm:text-6xl"><FaSquareGithub className='bg-white hover:text-green-500'/></a>
        </div>
        </div>
        <div className="w-1/2  flex flex-col  gap-2 items-center pt-4">
            <div className="border border-white w-[70px] h-[70px]  rounded-full text-white shadow-2xl  shadow-purple-400 sm:w-[175px] sm:h-[175px]"></div>
        <h1 className=" text-white text-xl sm:text-4xl">Shrey Kumar Jha</h1>
        <div className="flex gap-2">
        <a href="" className="text-4xl flex sm:text-6xl"><FaLinkedin className='bg-white hover:text-blue-600 '/></a>
        <a href="/" className="text-4xl flex sm:text-6xl"><FaSquareGithub className='bg-white hover:text-green-500'/></a>
        </div>
        </div>
        <div className="w-1/2  flex flex-col  gap-2 items-center pt-4">
            <div className="border border-white w-[70px] h-[70px]  rounded-full text-white shadow-2xl  shadow-purple-400 sm:w-[175px] sm:h-[175px]"></div>
        <h1 className=" text-white text-xl sm:text-4xl">Suyash Parganiha</h1>
        <div className="flex gap-2">
        <a href="" className="text-4xl flex sm:text-6xl"><FaLinkedin className='bg-white hover:text-blue-600 '/></a>
        <a href="/" className="text-4xl flex sm:text-6xl"><FaSquareGithub className='bg-white hover:text-green-500'/></a>
        </div>
        </div>

    </footer>
    </div>
 
)
}

export default Testabout
