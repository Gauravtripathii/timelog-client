import React from "react";
import projectimg from "../assets/Images/Hero.gif";
import { useState, useRef, useEffect } from "react";
import "./customDots.css"

import Calendar from "../assets/Images/calendar.gif";
import Email from "../assets/Images/email.gif";
import Ai from "../assets/Images/ai.gif";
import quoatation_up from "../assets/Images/quotation_Upper.png"
import quoatation_low from "../assets/Images/quotation_Lower.png"
import Logo from "../assets/Images/TimeLog.png"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  

  return (
    <div className="">
      <div className=" h-[100svh] w-full p-4 ">
        {/* HEADER */}
        <header className="fixed z-50 w-screen left-0 top-0 p-4 h-16">
          <nav className="relative">
            <div className=" flex items-center gap-2 text-white text-lg font-bold">
              <img src={Logo} className="h-8 w-8 "/>
              TimeLog
            </div>
            <div
              className="text-white absolute rotate-90 right-0 top-0 cursor-pointer text-2xl"
              onClick={() => setIsNav(true)}
            >
              |||
            </div>
            <ul
              className="text-gray-400 fixed left-0  top-0 bg-[rgba(0,0,0,0.55)]  backdrop-blur-xl w-screen  flex items-center justify-center flex-col  gap-3 transition-all z-20"
              ref={NavRef}
            >
              <li
                className="absolute top-0 right-0 px-3 cursor-pointer text-white"
                onClick={() => setIsNav(false)}
                ref={CloseRef}
              >
                &times;
              </li>
              <li className="hover:text-white">Home</li>
              <li className="hover:text-white">About Us</li>
              <li className="hover:text-white">Services</li>
            </ul>
          </nav>
        </header>




        {/* HERO */}
        <div className="h-[100svh] w-[100vw] flex flex-col items-center justify-center px-4 gap-16 fixed top-0 left-0">
          <div className="text-4xl text-[#6422ce] backdrop-blur-sm font-bold">
            Automated mail made easy <span className="text-3xl">/ </span>
            <span className="text-white">make the time capsule</span>
          </div>

          <div className="text-white backdrop-blur-[5px] p-2 rounded-2xl">
            <img src={quoatation_up} className="w-6 h-6 inline mr-1 -mt-3"/>
          <span className="text-[#6422ce] font-bold text-lg">Unleash</span> the power of smart emails-because your messages should work as hard as you do!
          <img src={quoatation_low} className="w-6 h-6 inline ml-1 -mb-2"/>
          </div>


          <div className="w-full relative pb-8  ">
            <Carousel className=""
              responsive={responsive}
              showDots={true}
              swipeable={true}
              draggable={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4500}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              renderDotsOutside
              renderButtonGroupOutside={false}
              customDot={<CustomDot />}
            >
              <div className=" flex gap-4 border rounded-2xl p-1 backdrop-blur-3xl items-center justify-center">
                <img src={Email} className="h-32 rounded-xl" />
                <div>
                  <p className="text-[#6422ce] font-bold text-lg backdrop-blur-sm">
                    Mail Automation
                  </p>
                  <span className="text-white italic font-normal">
                    Our email automation is like a personal assistant who never
                    needs coffee breaks.
                  </span>
                </div>
              </div>
              <div className=" flex gap-4 border rounded-2xl p-1 backdrop-blur-3xl">
                <img src={Ai} className="h-32 rounded-xl" />
                <div>
                  <p className="text-[#6422ce] font-bold text-lg backdrop-blur-sm">
                    Gen AI
                  </p>
                  <span className="text-white italic font-normal">
                  Effortlessly enhance or create email content with our AI tool.🚀
                  </span>
                </div>
              </div>
              <div className=" flex gap-4 border rounded-2xl p-1 backdrop-blur-3xl">
                <img src={Calendar} className="h-32 rounded-xl" />
                <div>
                  <p className="text-[#6422ce] font-bold text-lg backdrop-blur-sm">
                    Time Capsule
                  </p>
                  <span className="text-white italic font-normal">
                    Travel through time tomorrow with our built-in digital time
                    capsule!
                  </span>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>




      {/* 2ND PAGE */}
      <div className="w-full h-[100svh] bg-[#040400] pt-16 absolute">

        <div className="">

            

        </div>

      </div>





      {/* FOR BACKGROUND */}
      <div className="absolute top-0 w-screen h-[100svh] bg-black opacity-25 -z-20"></div>
      <div className="w-screen h-[100svh] fixed top-0 -z-30">
        <img
          className=" object-cover w-full h-full opacity-95"
          src={projectimg}
          alt="image description"
        />
      </div>
    </div>
  );
};
const CustomDot = ({ onClick, ...rest }) => {
  const { active } = rest;
  return (
      <li
          className={`custom-dot ${active ? 'active' : ''}`}
          onClick={onClick}/>
  );
};
export default Home;
