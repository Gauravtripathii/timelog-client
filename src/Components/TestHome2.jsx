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
  const featureSectionRef = useRef(null);
  
  const [expanded, setExpanded] = useState(Array(3).fill(false));
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const nav = navRef.current;
    const title = titleRef.current;
    const content = contentRef.current;
    const canvas = canvasRef.current;
    const featureSection = featureSectionRef.current;

    if (!container || !nav || !title || !content || !canvas || !featureSection) {
      console.error("One or more refs are null");
      return;
    }

    // Handle scroll effects for navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);

    // Canvas for particle effects
    const ctx = canvas.getContext("2d");
    let particles = [];
    const particleCount = 40; // Reduced for better performance
    const clockImage = new Image();
    clockImage.src = clock_img;

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 15 + 5; // Smaller size range
        this.speedX = Math.random() * 1.5 - 0.75; // Reduced speed
        this.speedY = Math.random() * 1.5 - 0.75;
        this.rotation = Math.random() * Math.PI * 2;
        this.opacity = Math.random() * 0.5 + 0.3; // Add opacity variation
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += 0.03;
        
        // Wrap around edges instead of bouncing
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
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
    
    // Delay particle animation to improve page load performance
    setTimeout(() => {
      animateParticles();
    }, 200);

    // Animation timeline for nav, title, and content
    const tl = gsap.timeline();

    tl.from(nav, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    tl.from(
      title,
      {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.4"
    );

    tl.from(
      content,
      {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.8"
    );

    // Scroll-triggered animations
    gsap.from(featureSection, {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: featureSection,
        start: "top 80%",
        end: "top 60%",
        scrub: 1,
      }
    });

    // Improved scroll-triggered animations for features
    gsap.utils.toArray(".feature-item").forEach((el, i) => {
      gsap.from(el, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Parallax effect for hero section
    gsap.utils.toArray(".parallax").forEach((el) => {
      gsap.to(el, {
        y: (i, target) => -ScrollTrigger.maxScroll(window) * parseFloat(target.dataset.speed || 0.1),
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
      window.removeEventListener("scroll", handleScroll);
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
    <div ref={containerRef} className="min-h-screen text-white bg-gradient-to-b from-[#050505] to-[#111] relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 opacity-70"></canvas>

      {/* Improved navbar with scroll effect */}
      <nav 
        ref={navRef} 
        className={`fixed top-0 left-0 right-0 flex justify-between items-center py-4 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md shadow-md px-8" : "bg-transparent px-8"
        }`}
      >
        <div className="flex items-center gap-2 text-white text-lg sm:text-xl font-bold">
          <img src={Logo} className="h-8 w-8 sm:h-10 sm:w-10" alt="TimeLog Logo" />
          TimeLog
        </div>
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li className="hover:text-purple-400 transition-colors cursor-pointer">ABOUT</li>
          <li className="hover:text-purple-400 transition-colors cursor-pointer">FEATURES</li>
          <li className="hover:text-purple-400 transition-colors cursor-pointer">PRICING</li>
          <li className="hover:text-purple-400 transition-colors cursor-pointer">CONTACT</li>
        </ul>
        <div className="flex space-x-4 items-center">
          <button className="hidden sm:block text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
            Sign in
          </button>
          <button className="text-sm font-medium bg-purple-600 hover:bg-purple-700 transition-colors px-4 py-2 rounded-lg">
            Get Started
          </button>
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div ref={titleRef} className="text-center z-10 relative h-screen flex flex-col justify-center items-center pt-16 px-4">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/20 to-black/50 z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-orange-400">Automated </span>
            <span className="block text-gray-100">mail made easy</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Make the time capsule
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mt-6 parallax" data-speed="0.1">
            Track time, boost productivity, and let AI handle your communications. Welcome to the future of time management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center text-lg md:text-xl mt-10">
            <button className="w-full sm:w-auto border-2 bg-purple-600 border-purple-600 rounded-xl py-3 px-8 text-white hover:bg-purple-700 hover:border-purple-700 transition-colors duration-300">
              Get Started Free
            </button>
            <button className="w-full sm:w-auto border-2 bg-transparent border-purple-600 rounded-xl py-3 px-8 text-purple-400 hover:bg-purple-600/10 transition-colors duration-300">
              See How It Works
            </button>
          </div>
          
          <div className="mt-12 opacity-70 text-sm">
            <p>No credit card required • Free 14-day trial</p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <div ref={contentRef} className="pb-20 text-center z-10 relative pt-4 px-4">
        <p className="text-xl text-gray-300">Explore our features and discover how we can help you manage time efficiently.</p>
      </div>

      {/* Features Section */}
      <div ref={featureSectionRef} className="w-full bg-gradient-to-b from-[#101010] to-[#080808] pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Our Features
            </span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Powerful tools designed to make your time management seamless and efficient.
          </p>

          <div className="space-y-16 lg:space-y-24">
            {[
              { 
                title: "MAIL AUTOMATION", 
                description: "Automate your emails and communication with AI, so you can focus on what really matters.", 
                details: "With mail automation, your emails are handled effortlessly. Schedule, customize, and send professional emails without lifting a finger. Our AI analyzes your communication patterns and suggests the best times to send emails, generates contextual replies, and manages follow-ups automatically. Perfect for project managers and busy professionals who need to maintain regular communication without the time investment.", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              { 
                title: "AI ASSISTANT", 
                description: "Let our AI generate personalized responses, reports, and tasks based on your time logs.", 
                details: "Our AI assistant doesn't just save you time—it transforms how you work. Using advanced natural language processing, it creates professional responses tailored to your communication style, generates detailed reports from your time data, and intelligently prioritizes tasks based on your work patterns. It learns from your interactions, becoming more personalized and effective over time, whether you're tracking personal projects or managing a team.", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                )
              },
              { 
                title: "TIME CAPSULE", 
                description: "Store and access your past logs with our advanced time capsule feature, helping you reflect and optimize.", 
                details: "With the Time Capsule feature, easily access your past activities, analyze productivity trends, and learn from your time usage history. Our intuitive visualization tools help you identify patterns, set realistic goals, and make data-driven decisions about your time management. All your logs are securely stored and available whenever you need them, whether for personal reflection or team reporting.", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="feature-item sm:flex items-start gap-8 p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black shadow-2xl border border-gray-800 transition-all duration-300 hover:border-purple-900 hover:shadow-purple-900/5">
                <div className="flex flex-col items-center sm:items-start sm:flex-row sm:gap-5 w-full sm:w-1/4 pb-4 sm:pb-0">
                  <div className="mb-4 sm:mb-0 bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl">{feature.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{feature.title}</h3>
                </div>

                <div className="flex-1 text-gray-300">
                  <p className="pb-4 text-lg">{feature.description}</p>
                  {/* View More Toggle */}
                  {expanded[index] ? (
                    <div className="mt-4 text-gray-400">
                      <p>{feature.details}</p>
                      <button
                        onClick={() => handleToggle(index)}
                        className="mt-4 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        View Less
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleToggle(index)}
                      className="mt-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      View More
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full bg-gradient-to-b from-[#080808] to-[#050505] py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to revolutionize your time management?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of professionals who have already transformed their productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 text-lg">
              Get Started Free
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-gray-700 text-gray-300 rounded-xl font-medium hover:border-gray-500 hover:text-white transition-all duration-300 text-lg">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>

      {/* Improved Footer */}
      <footer className="w-full bg-black py-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
                <img src={Logo} className="h-8 w-8" alt="TimeLog Logo" />
                TimeLog
              </div>
              <p className="text-gray-400 mb-6">
                Transforming how you manage time and communication.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold text-xl mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-xl mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-900 mt-12 pt-8 text-center">
            <p className="text-gray-500">© {new Date().getFullYear()} TimeLog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;