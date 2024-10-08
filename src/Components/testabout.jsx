import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Github,
  Linkedin,
  Twitter,
  Clock as ClockIcon,
  Target,
  Zap,
} from "lucide-react";
import Clock from "../assets/Images/TimeLog.png";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const missionRef = useRef(null);
  const cardRefs = useRef([]);

  

  const teamMembers = [
    {
      name: "Gaurav Tripathi",
      role: "Web Developer",
      skills: ["Full Stack", "React", "Node.js"],
      description: "Developing end-to-end web applications.",
      specialty: "Backend Architecture",
      image: "/api/placeholder/128/128"
    },
    {
      name: "Suyash Parganiha",
      role: "Web Developer",
      skills: ["Frontend", "UI/UX", "React"],
      description: "Building engaging user interfaces.",
      specialty: "Interactive Animations",
      image: "/api/placeholder/128/128"
    },
    {
      name: "Rahul Behera",
      role: "Web Developer",
      skills: ["Frontend", "UI/UX", "Design"],
      description: "Creating visually appealing interfaces.",
      specialty: "Visual Design",
      image: "/api/placeholder/128/128"
    },
    {
      name: "Shrey Jha",
      role: "Web Developer",
      skills: ["Frontend", "React", "Mobile"],
      description: "Developing responsive front-end solutions.",
      specialty: "Responsive Design",
      image: "/api/placeholder/128/128"
    }
  ];

  const missionPoints = [
    {
      icon: ClockIcon,
      title: "Smart Time Analytics",
      description: "AI-powered insights into your productivity patterns",
    },
    {
      icon: Target,
      title: "Automated Workflows",
      description: "Streamline repetitive tasks and boost efficiency",
    },
    {
      icon: Zap,
      title: "Real-time Collaboration",
      description: "Seamless team coordination and progress tracking",
    },
  ];

  useEffect(() => {
    // Canvas Background Animation
    const canvas = document.getElementById("grid-canvas");
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.life = 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }

        this.life -= 0.003;
        if (this.life <= 0) this.reset();
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 51, 234, ${this.life * 0.5})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(147, 51, 234, ${0.2 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Scroll Animations
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          end: "top center",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: index * 0.1,
      });
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const TeamMember = ({ member, index }) => (
    <div className="team-card relative group" ref={(el) => (cardRefs.current[index] = el)}>
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-purple-900/20 to-black/40 backdrop-blur-lg border border-purple-500/10 transition-all duration-500 hover:border-purple-500/30">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/0 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="p-8">
          <div className="flex flex-col items-center">
            {/* Profile Image */}
            <div className="relative mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>

            {/* Name and Role */}
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-purple-400 font-medium mb-3">{member.role}</p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {member.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-purple-900/30 text-purple-300 border border-purple-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-400 text-center mb-6 group-hover:text-gray-300 transition-colors duration-300">
              {member.description}
            </p>

            {/* Specialty */}
            <div className="bg-purple-900/20 px-4 py-2 rounded-full mb-6">
              <p className="text-sm text-purple-300">
                <span className="font-semibold">Specialty:</span> {member.specialty}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <Icon className="h-5 w-5 text-purple-400 hover:text-purple-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="overflow-x-hidden bg-black min-h-screen">
      {/* Background Canvas */}
      <canvas
        id="grid-canvas"
        className="fixed inset-0 w-full h-full opacity-30"
        style={{ zIndex: 0 }}
      ></canvas>

      {/* Background Gradient */}
      <div
        className="fixed inset-0 bg-gradient-to-b from-black/20 via-purple-900/10 to-black/20 pointer-events-none"
        style={{ zIndex: 1 }}
      ></div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed w-full backdrop-blur-sm bg-black p-6 z-20">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={Clock} className="h-8 w-8" alt="TimeLog" />
              <span className="text-2xl font-bold text-white">TimeLog</span>
            </div>
            <ul className="flex space-x-8">
              {["About", "Features", "Team", "Contact"].map((item) => (
                <li key={item} className="relative group cursor-pointer">
                  <span className="text-gray-300 hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <div ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="glitch-text text-5xl md:text-8xl font-semibold mb-8 text-white">
              THE CREATORS OF TIMELOG
            </h1>
            <p className="text-xl text-purple-400/70 max-w-2xl mx-auto">
              Revolutionizing Productivity Through Intelligent Time Management
            </p>
          </div>
        </div>
        
         {/* Team Description Section (New) */}
         <div className="relative py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-white leading-relaxed font-poppins italic ">
              "We are a dedicated team of innovators and problem solvers, united by our passion for creating intuitive solutions
              that transform how people manage their time. With diverse expertise spanning full-stack development, UI/UX design,
              and artificial intelligence, we're committed to building tools that make productivity seamless and effortless."
            </p>
          </div>
        </div>

        {/* Mission Section */}
        {/* <div ref={missionRef} className="relative py-20 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {missionPoints.map((point, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-black/40 rounded-lg hover:bg-purple-900/20 transition-all duration-300 border border-purple-900/70"
                >
                  <div className="flex flex-col items-center text-center">
                    <point.icon className="w-12 h-12 text-purple-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                    <p className="text-gray-400">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Team Section */}
        <section className="py-24 px-6 bg-[#101010]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-purple-400 max-w-2xl mx-auto">
                Passionate developers building the future of time management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-black/30 backdrop-blur-sm border-t border-purple-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <span className="flex gap-2 items-center text-white font-bold text-xl mb-4">
                  <img src={Clock} className="h-6 w-6" alt="TimeLog" />
                  TimeLog
                </span>
                <p className="text-gray-400">
                  Redefining time management for the digital age
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {["Product", "Features", "About Us"].map((item) => (
                    <li
                      key={item}
                      className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  {[Github, Twitter, Linkedin].map((Icon, i) => (
                    <Icon
                      key={i}
                      className="h-6 w-6 text-purple-400 hover:text-purple-300 cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 TimeLog. All rights reserved.
              </p>
            </div>
          </div></footer>
      </div>
    </div>
  );
};

export default AboutPage;