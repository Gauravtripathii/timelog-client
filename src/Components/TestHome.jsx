import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Logo from "../assets/Images/TimeLog.png";
import clock_img from "../assets/Images/clock.png";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const HomePage = () => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const canvasRef = useRef(null);
  
  const [expanded, setExpanded] = useState(Array(3).fill(false));

  useEffect(() => {
    const container = containerRef.current;
    const nav = navRef.current;
    const title = titleRef.current;
    const content = contentRef.current;
    const canvas = canvasRef.current;

    if (!container || !nav || !title || !content || !canvas) {
      console.error("One or more refs are null");
      return;
    }

    // Canvas for particle effects
    const ctx = canvas.getContext("2d");
    let particles = [];
    const particleCount = 50;
    const clockImage = new Image();
    clockImage.src = clock_img;

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 20 + 5;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.rotation = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += 0.05;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.drawImage(clockImage, -this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animateParticles);
    }

    function resizeCanvas() {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      initParticles();
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animateParticles();

    // Animation timeline for nav, title, and content
    const tl = gsap.timeline();

    tl.from(nav, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    tl.from(
      title,
      {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.5"
    );

    tl.from(
      content,
      {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.5"
    );

    // Scroll-triggered parallax and fade-in effect for intro sections
    gsap.utils.toArray(".intro").forEach((el) => {
      gsap.from(el, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    });

    gsap.utils.toArray(".parallax").forEach((el) => {
      gsap.to(el, {
        y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const handleToggle = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <div ref={containerRef} className="min-h-screen text-white  relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>

      <nav ref={navRef} className="flex justify-between items-center pb-12 z-10 relative p-8">
        <div className="flex items-center gap-2 text-white text-lg sm:text-xl font-bold">
          <img src={Logo} className="h-8 w-8 sm:h-10 sm:w-10" alt="TimeLog Logo" />
          TimeLog
        </div>
        <ul className="flex space-x-6 text-sm text-gray-400">
          <li className="hover:text-white cursor-pointer">ABOUT</li>
          <li className="hover:text-white cursor-pointer">SERVICES</li>
          <li className="hover:text-white cursor-pointer">CONTACT</li>
        </ul>
        {/* <div className="flex space-x-2">
          <div className="hover:text-white cursor-pointer">Sign up</div>
          <div className="hover:text-white cursor-pointer">Sign in </div>

        </div> */}
      </nav>

      <div ref={titleRef} className="text-center z-10 relative h-screen pt-16">
        <h1 className="text-7xl font-extrabold pb-6 ">
          <span className="text-orange-400">Automated </span>
          <span className="block text-gray-100">mail made easy</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Make the time capsule
          </span>
        </h1>
        <p className="text-2xl text-gray-300 max-w-2xl mx-auto parallax" data-speed="0.1">
          "Track time, boost productivity, and let AI handle your communications. Welcome to the future of time management."
        </p>


        <div className="flex gap-10 items-center justify-center  text-2xl pt-6 font-sans">
        <span className="border-2 bg-black border-purple-600 rounded-xl p-2 hover:!bg-purple-600  px-4 text-purple-600 hover:text-white">
          Register
          </span>
          <span className="border-2 hover:bg-black border-purple-600 rounded-xl p-2 bg-purple-600  px-4 hover:text-purple-600 text-white">
            Login
          </span>
          
        </div>

      </div>

      <div ref={contentRef} className="pb-20 text-center z-10 relative pt-4 text-2xl">
        <p className="text-xl text-gray-300">Explore our features and discover how we can help you manage time efficiently.</p>
      </div>

      {/* Our Features Title */}
      <h2 className="text-4xl font-bold text-center text-indigo-400 mb-10">Our Features</h2>

      {/* Improved Intro Section with Scroll Effect */}
      <div className="w-full bg-[#101010] pt-16 pb-8 ">
        <div className="px-8 space-y-16 s">
          {[
            { 
              title: "MAIL AUTOMATION", 
              description: "Automate your emails and communication with AI, so you can focus on what really matters.", 
              details: "With mail automation, your emails are handled effortlessly. Schedule, customize, and send professional emails without lifting a finger. Perfect for project managers and busy professionals." 
            },
            { 
              title: "AI ASSISTANT", 
              description: "Let our AI generate personalized responses, reports, and tasks based on your time logs.", 
              details: "AI not only saves you time but also provides intelligent suggestions, generates content, and handles repetitive tasks. Whether you're tracking personal or professional tasks, Gen AI adapts to your needs." 
            },
            { 
              title: "TIME CAPSULE", 
              description: "Store and access your past logs with our advanced time capsule feature, helping you reflect and optimize.", 
              details: "With the Time Capsule feature, easily access your past activities, analyze productivity trends, and learn from your time usage history. You’ll have all your logs securely stored and available whenever you need them." 
            }
          ].map((feature, index) => (
            <div key={index} className="intro sm:flex items-start gap-8  p-6 rounded-lg shadow-xl ">
              <div className="flex items-center text-gray-500 font-semibold gap-4 sm:gap-5 w-[25%]">
                <div className="text-6xl sm:text-7xl font-bold text-blue ">{index + 1}</div>
                <h3 className="text-2xl font-bold text-gray-200 ">{feature.title}</h3>
              </div>

              <div className="flex-1 text-gray-300  pt-4">
                <p className="pb-4">{feature.description}</p>
                {/* View More Toggle */}
                {expanded[index] ? (
                  <div className="mt-4 ">
                    <p className="text-gray-400">{feature.details}</p>
                    <button
                      onClick={() => handleToggle(index)}
                      className="mt-2 text-blue-300 hover:underline"
                    >
                      View Less
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleToggle(index)}
                    className="mt-2 text-blue-300 hover:underline"
                  >
                    View More
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>

    {/* FOOTER */}
    <footer className="py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6">
        <span className="flex gap-2 items-center text-white font-semibold text-lg sm:text-xl">
          <img src={Logo} className="h-7 w-7 sm:h-9 sm:w-9" alt="TimeLog Logo" />
          TimeLog
        </span>
        <span className="text-gray-500">
          <ul className="flex flex-col ">
            <li className="hover:text-white cursor-pointer">About us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Products</li>
          </ul>
        </span>
      </div>
      <div className="text-gray-500 text-center py-6">
        <span className="block text-sm sm:text-lg">Made @ TimeLog</span>
        <span className="block text-sm sm:text-lg">Copyright © All rights reserved</span>
      </div>
    </footer>
  </div>
);
};

export default HomePage;
