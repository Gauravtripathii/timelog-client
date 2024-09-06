import React from "react";
import projectimg from "../assets/Images/Hero.png";
import { useState, useRef, useEffect } from "react";

const Home = () => {
  const [isNav, setIsNav] = useState(false);
  const NavRef = useRef();
  const CloseRef = useRef();
  useEffect(() => {
    if (!isNav) {
      NavRef.current.style.height = 0;
      NavRef.current.style.fontSize = 0;
      CloseRef.current.style.fontSize = 0;
    } else {
      NavRef.current.style.height = "50vh";
      NavRef.current.style.fontSize = "1.25rem";
      CloseRef.current.style.fontSize = "2.25rem";
    }
  }, [isNav]);
  return (
    <div className="h-full">
      <div className=" h-screen w-full top-0 text p-4 ">
        <header>
          <nav className="relative">
            <div className=" flex items-center gap-2 text-white">
              <svg
                className="h-8 w-8 xl:h-10 xl:w-10 text-purple-400 lg:skew-x-[20deg]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>{" "}
              TimeLog
            </div>
            <div
              className="text-white absolute rotate-90 right-0 top-0 cursor-pointer "
              onClick={() => setIsNav(true)}
            >
              |||
            </div>
            <ul
              className="text-white fixed left-0  top-0 bg-[rgba(0,0,0,0.73)]  backdrop-blur-lg w-screen  flex items-center justify-center flex-col  gap-3 transition-all"
              ref={NavRef}
            >
              <li
                className="absolute top-0 right-0 px-3 cursor-pointer  "
                onClick={() => setIsNav(false)}
                ref={CloseRef}
              >
                &times;
              </li>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
            </ul>
          </nav>
        </header>

        <div className="h-full flex flex-col items-center justify-center px-4">
         
          <div className="text-2xl text-white ">
            Automated mail made easy <span className="text-3xl">/</span>
            <span className="text-purple-600">make the time capsule</span>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
      <div className="absolute top-0 w-screen h-screen bg-black -z-10 opacity-60"></div>
      <div className="w-screen h-screen absolute top-0 -z-20">
        <img
          className=" object-cover w-full h-full opacity-95"
          src={projectimg}
          alt="image description"
        />
      </div>
    </div>
  );
};

export default Home;
