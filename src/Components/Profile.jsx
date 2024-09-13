import profile_icon from "../assets/Images/profile_page/profile_icon.gif";
import Logo from "../assets/Images/TimeLog.png"

import { FaUser } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

import { useState, useRef, useEffect } from "react";

import { NavLink } from "react-router-dom";

const Profile = () => {
    const [profile, setProfile] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        dob: ""
    });

    const handle_change = event => {
        event.preventDefault();
        console.log(profile);
    }


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
    return (
        <div className="h-[100vh] relative">
            <nav className="absolute top-0 z-10 w-full p-3">
            <div className=" flex items-center gap-2 text-white text-lg sm:text-xl md:text-3xl font-bold md:pl-6">
              <img src={Logo} className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
              TimeLog
            </div>
            <div
              className="text-white absolute rotate-90 right-3 top-3 cursor-pointer text-2xl sm:text-4xl md:text-5xl md:mr-6"
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
              <li className="hover:text-white ">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="hover:text-white">About Us</li>
              <li className="hover:text-white">Services</li>
            </ul>
          </nav>

            {/* top circle */}
            <div className="bg-purple-600 w-[120vw] h-[120vw] rounded-full absolute -translate-y-1/2 -left-[10vw]">
                <div className="bg-[#101010] w-[100vw] h-[100vw] rounded-full absolute bottom-2 left-[10vw] shadow-3xl flex items-end justify-center">
                    <div className="h-1/2 w-full flex flex-col items-center gap-3">  
                        <div className="w-[30vw] h-[30vw] bg-white rounded-full">
                            <img src={profile_icon} alt="profile icon" className="rounded-full" />
                        </div>
                        <p className="text-white text-xl font-semibold">Yuval Harari</p>
                    </div>
                </div>
            </div>

            <form className="absolute top-[60vw] px-3 pt-3 w-full h-[calc(100svh-60vw)] flex flex-col justify-evenly">
                <div className="flex flex-col items-center gap-3 w-full bg-[#151515] rounded-2xl py-5">
                <p className="flex items-center gap-3 w-[85%] text-purple-600 text-3xl">
                    <FaUserCircle />
                    <span className="flex items-center bg-black p-2 px-3 w-full rounded-full text-lg hover:border border-purple-600">
                        <input type="text" placeholder="Username" value={profile.username} onChange={e => setProfile({...profile, username: e.target.value})} className="border-0 outline-none w-full bg-black text-white" />
                        <FiEdit className="text-2xl" />
                    </span>
                </p>
            
            <p className="flex items-center gap-3 w-[85%] text-purple-600 text-2xl">
                    <FaUser />
                    <span className="flex items-center bg-black p-2 px-3 w-full rounded-full text-lg hover:border border-purple-600">
                        <input type="text" placeholder="Name" value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} className="border-0 outline-none w-full bg-black text-white" />
                        <FiEdit className="text-2xl" />
                    </span>
                </p>

                <p className="flex items-center gap-3 w-[85%] text-purple-600 text-2xl">
                    <MdEmail />
                    <span className="flex items-center bg-black p-2 px-3 w-full rounded-full text-lg hover:border border-purple-600">
                        <input type="email" placeholder="Email" value={profile.email} onChange={e => setProfile({...profile, email: e.target.value})} className="border-0 outline-none w-full bg-black text-white" />
                        <FiEdit className="text-2xl" />
                    </span>
                </p>

                <p className="flex items-center gap-3 w-[85%] text-purple-600 text-2xl">
                    <FaLock />
                    <span className="flex items-center bg-black p-2 px-3 w-full rounded-full text-lg hover:border border-purple-600">
                        <input type="password" placeholder="Password" value={profile.password} onChange={e => setProfile({...profile, password: e.target.value})} className="border-0 outline-none w-full bg-black text-white" />
                        <FiEdit className="text-2xl" />
                    </span>
                </p>

                <p className="flex items-center gap-3 w-[85%] text-purple-600 text-2xl">
                    <FaBirthdayCake />
                    <span className="flex items-center bg-black p-2 px-3 w-full rounded-full text-lg hover:border border-purple-600">
                    <input type="text" placeholder="Birthday (dd/mm/yy)" value={profile.dob} onChange={e => setProfile({...profile, dob: e.target.value})} className="border-0 outline-none w-full bg-black text-white" />
                        <FiEdit className="text-2xl" />
                    </span>
                </p>

                <button onClick={handle_change} className="border-1 border-purple-600 bg-purple-600 hover:bg-[#151515] text-white hover:text-purple-600 rounded-full py-3 w-[85%] text-xl">Update</button>
                </div>

                <footer className="w-full flex flex-col gap-3 px-2 py-3 mt-4 border-t border-gray-500">
                <div className="w-full flex justify-between">
                    <span className="flex gap-2 items-center">
                        <img src={Logo} className="h-5 w-5" />
                        <span className="text-white font-semibold text-md">
                            TimeLog
                        </span>
                    </span>
                    <ul className="flex items-center gap-2 text-gray-500 text-sm">
                        <li className="hover:text-white">About us</li>
                        <li className="hover:text-white">Services</li>
                        <li className="hover:text-white">Products</li>
                    </ul>
                </div>
                <span className="text-gray-500 w-full text-center text-sm">
                    Copyright©All rights reserved
                </span>
            </footer>
            </form>
        </div>
    )
}

export default Profile;