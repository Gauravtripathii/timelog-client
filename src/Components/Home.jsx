import React from "react";
import projectimg from "../assets/Images/Hero.gif";
import { useState, useRef, useEffect } from "react";
import "./customDots.css";

import Calendar from "../assets/Images/calendar.gif";
import Email from "../assets/Images/email.gif";
import Ai from "../assets/Images/ai.gif";
import quoatation_up from "../assets/Images/quotation_Upper.png";
import quoatation_low from "../assets/Images/quotation_Lower.png";
import Logo from "../assets/Images/TimeLog.png";
import info_icon from "../assets/Images/info.gif";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { SocialIcon } from "react-social-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
      NavRef.current.style.fontSize = "1.50rem";
      CloseRef.current.style.fontSize = "2.25rem";
    }
  }, [isNav]);
  const responsive = {
    // superLargeDesktop: {
    //   // the naming can be any, depends on you.
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 5,
    // },
    // desktop: {
    //   breakpoint: { max: 3000, min: 1024 },
    //   items: 3,
    // },
    // tablet: {
    //   breakpoint: { max: 1024, min: 464 },
    //   items: 2,
    // },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="">
      <div className=" h-[100svh] w-full p-4 ">
        {/* HEADER */}
        <div className="fixed w-full h-16 top-0 z-40 left-0 bg-black bg-[rgba(0, 0, 0, 0.5)] sm:p-10"></div>
        <header className="fixed z-50 w-screen left-0 top-0 p-4 h-16 sm:p-8">
          <nav className="relative">
            <div className=" flex items-center gap-2 text-white text-lg sm:text-xl md:text-3xl font-bold md:pl-6">
              <img src={Logo} className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
              TimeLog
            </div>
            <div
              className="text-white absolute rotate-90 right-0 top-0 cursor-pointer text-2xl sm:text-4xl md:text-5xl md:mr-6"
              onClick={() => setIsNav(true)}
            >
              |||
            </div>
            <ul
              className="text-gray-400 fixed left-0  top-0 bg-[rgba(0,0,0,0.55)]  backdrop-blur-xl w-screen  flex items-center justify-center flex-col  gap-3 transition-all z-20 "
              ref={NavRef}
            >
              <li
                className="absolute top-0 right-0 px-3 md:mr-4 cursor-pointer text-white"
                onClick={() => setIsNav(false)}
                ref={CloseRef}
              >
                &times;
              </li>
              <li className="hover:text-white ">Home</li>
              <li className="hover:text-white">About Us</li>
              <li className="hover:text-white">Services</li>
            </ul>
          </nav>
        </header>

        {/* HERO */}
        <div className="h-[100svh] w-[100vw] flex flex-col items-center justify-center px-4 gap-16 fixed top-0 left-0 sm:px-1 sm:gap-28">
          <div className="text-4xl text-[#6627F9] backdrop-blur-sm font-bold sm:text-5xl sm:px-2 md:text-6xl md:mx-6">
            Automated mail made easy <span className="text-3xl md:text-6xl">/ </span>
            <span className="text-white">make the time capsule</span>
          </div>

          <div className="text-white px-2 rounded-2xl sm:text-2xl md:text-3xl sm:px-10 backdrop-blur-[5px] border-red-500 p-4 shadow-purple-500 md:mx-6">
            <img
              src={quoatation_up}
              className="w-6 h-6 inline mr-1 -mt-3 sm:w-8 sm:h-8 sm:-mt-5"
            />
            <span className="text-[#6627F9] font-bold text-lg sm:text-3xl md:text-4xl">
              Unleash
            </span>{" "}
            the power of smart emails-because your messages should work as hard
            as you do!
            <img
              src={quoatation_low}
              className="w-6 h-6 inline ml-1 -mb-2 sm:-mb-3 sm:w-8 sm:h-8 "
            />
          </div>

          {/* Bootstrap Carousel */}
          <div className="w-full relative md:px-6">
            <div
              id="carouselExampleIndicators"
              className="carousel slide sm:px-2"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators -mb-6 ">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="flex gap-4 border rounded-2xl p-1 backdrop-blur-3xl items-center justify-between border-purple-500 md:p-3">
                    <img
                      src={Email}
                      className="h-32 rounded-xl sm:p-1 md:h-40"
                      alt="Email"
                    />
                    <div className="sm:flex flex-col gap-3">
                      <p className="text-[#6422ce] font-bold text-lg backdrop-blur-sm sm:text-2xl md:text-4xl">
                        Mail Automation
                      </p>
                      <span className="text-white italic font-normal sm:text-xl md:text-2xl md:p-2">
                        Our email automation is like a personal assistant who
                        never needs coffee breaks.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="flex gap-4 border rounded-2xl p-1 backdrop-blur-3xl items-center justify-between border-purple-500 md:p-3">
                    <img
                      src={Ai}
                      className="h-32 rounded-xl sm:p-1 md:h-40"
                      alt="Email"
                    />
                    <div className="sm:flex flex-col gap-3">
                      <p className="text-[#6422ce] font-bold text-lg backdrop-blur-sm sm:text-2xl md:text-4xl">
                        Using Gen AI
                      </p>
                      <span className="text-white italic font-normal sm:text-xl md:text-2xl md:p-2">
                        Effortlessly enhance or create email content with our AI
                        tool.🚀
                      </span>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="flex gap-4 border rounded-2xl p-1 backdrop-blur-3xl items-center justify-between border-purple-500 md:p-3">
                    <img
                      src={Calendar}
                      className="h-32 rounded-xl sm:p-1 md:h-40"
                      alt="Email"
                    />
                    <div className="sm:flex flex-col gap-3">
                      <p className="text-[#6422ce] font-bold text-lg backdrop-blur-sm sm:text-2xl md:text-4xl">
                        Time Capsule
                      </p>
                      <span className="text-white italic font-normal sm:text-xl md:text-2xl md:p-2">
                        Travel through time tomorrow with our built-in digital
                        time capsule!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2ND PAGE */}
      <div className="w-full h-fit bg-[#040400] pt-16 py-3 absolute">
        <div className="px-8 md:px-10s flex flex-col gap-6">
          <div className="intro sm:flex gap-4 flex-col">
            {/* <img src={info_icon} alt="" /> */}
            <div className="title flex items-center text-gray-500 font-semibold gap-4 sm:gap-5">
              <div className="text text-7xl sm:text-8xl md:text-[8rem]">01</div>
              <div className="w-12 md:w-1/6 border border-gray-500"></div>
              <span className="font-normal sm:text-2xl md:text-3xl">MAIL AUTOMATION</span>
            </div>
            <div className="content text-white text-justify sm:text-xl md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium soluta obcaecati saepe omnis consequuntur totam
              molestias quas recusandae illum provident.
            </div>
            <div className="content text-white text-justify sm:text-xl md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium soluta obcaecati saepe omnis consequuntur totam
              molestias quas recusandae illum provident.
            </div>
          </div>

          <div className="intro sm:flex gap-4 flex-col">
            {/* <img src={info_icon} alt="" /> */}
            <div className="title flex flex-row-reverse items-center text-gray-500 font-semibold gap-4 sm:gap-5">
              <div className="text text-7xl sm:text-8xl  md:text-[8rem]">02</div>
              <div className="w-12 md:w-1/6 border border-gray-500"></div>
              <span className="font-normal sm:text-2xl md:text-3xl">GEN AI</span>
            </div>
            <div className="content text-white text-justify sm:text-xl md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium soluta obcaecati saepe omnis consequuntur totam
              molestias quas recusandae illum provident.
            </div>
            <div className="content text-white text-justify sm:text-xl md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium soluta obcaecati saepe omnis consequuntur totam
              molestias quas recusandae illum provident.
            </div>
          </div>

          <div className="intro sm:flex gap-4 flex-col">
            {/* <img src={info_icon} alt="" /> */}
            <div className="title flex items-center text-gray-500 font-semibold gap-4 sm:gap-5">
              <div className="text text-7xl sm:text-8xl  md:text-[8rem]">03</div>
              <div className="w-12 md:w-1/6 border border-gray-500"></div>
              <span className="font-normal sm:text-2xl md:text-3xl">TIME CAPSULE</span>
            </div>
            <div className="content text-white text-justify pb-20 sm:text-xl sm:pb-14 md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium soluta obcaecati saepe omnis consequuntur totam
              molestias quas recusandae illum provident.
            </div>
          </div>
        </div>

        {/* FOOTER */}

        <span className="text-gray-500">
          <hr />
        </span>
        <footer>
          <div className="h-[15vh] w-full p-2 md:p-4 flex  justify-between">
            <span className="flex gap-2 py-6 sm:px-4 items-center">
              <img src={Logo} className="h-7 w-7 sm:h-9 sm:w-9 md:h-12 md:w-12" />
              <span className="text-white font-semibold text-lg sm:text-xl md:text-3xl">
                TimeLog
              </span>
            </span>
            <span className="text-gray-500 px-6 sm:text-xl sm:pt-3 md:text-2xl">
              <ul>
                <li className="hover:text-white">About us</li>
                <li className="hover:text-white">Services</li>
                <li className="hover:text-white">Products</li>
              </ul>
            </span>
          </div>
          <span className="text-gray-500 flex items-center justify-center pb-1 flex-col sm:text-lg md:text-xl">
            <span className="pb-1">Made@TimeLog</span>
            Copyright©All rights reserved
          </span>
        </footer>
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
      {/* <div className="h-[50vh] border bg-[#6422ce] w-full pt-16"></div> */}
    </div>
  );
};
const CustomDot = ({ onClick, ...rest }) => {
  const { active } = rest;
  return (
    <li className={`custom-dot ${active ? "active" : ""}`} onClick={onClick} />
  );
};
export default Home;
