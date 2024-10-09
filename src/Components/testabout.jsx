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
      role: "Lead Developer",
      skills: ["Full Stack", "React", "Node.js"],
      description: "Architecting robust and scalable solutions.",
      specialty: "Backend Architecture",
      image: "/api/placeholder/128/128",
    },
    {
      name: "Suyash Parganiha",
      role: "Frontend Lead",
      skills: ["Frontend", "UI/UX", "React"],
      description: "Crafting delightful user experiences.",
      specialty: "Interactive Animations",
      image: "/api/placeholder/128/128",
    },
    {
      name: "Rahul Behera",
      role: "UI/UX Designer",
      skills: ["Frontend", "UI/UX", "Design"],
      description: "Bringing visions to life through design.",
      specialty: "Visual Design",
      image: "/api/placeholder/128/128",
    },
    {
      name: "Shrey Jha",
      role: "Frontend Developer",
      skills: ["Frontend", "React", "Mobile"],
      description: "Building responsive and intuitive interfaces.",
      specialty: "Responsive Design",
      image: "/api/placeholder/128/128",
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

        if (
          this.x < 0 ||
          this.x > canvas.width ||
          this.y < 0 ||
          this.y > canvas.height
        ) {
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
            ctx.strokeStyle = `rgba(147, 51, 234, ${
              0.2 * (1 - distance / 100)
            })`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Glitch effect animation
    const glitchText = document.querySelector(".glitch-text");

    const createGlitchAnimation = () => {
      const timeline = gsap.timeline({
        defaults: { duration: 0.1 },
      });

      timeline
        .to(glitchText, {
          skewX: () => Math.random() * 10 - 5,
          skewY: () => Math.random() * 10 - 5,
          filter: "blur(2px)",
          color: "rgba(255,255,255,0.8)",
          textShadow: `
            ${Math.random() * 10 - 5}px ${
            Math.random() * 10 - 5
          }px 0 rgba(255,0,255,0.7),
            ${Math.random() * 10 - 5}px ${
            Math.random() * 10 - 5
          }px 0 rgba(0,255,255,0.7)
          `,
        })
        .to(glitchText, {
          skewX: 0,
          skewY: 0,
          filter: "blur(0)",
          color: "white",
          textShadow: "none",
        });

      clips.forEach((clip, index) => {
        timeline.to(glitchText, {
          clipPath: clip,
          duration: 0.05,
          delay: index * 0.05,
        });
      });

      timeline.to(glitchText, {
        clipPath: "inset(0 0 0 0)",
        duration: 0.05,
      });
    };

    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        createGlitchAnimation();
      }
    }, 2000);

    cardRefs.current.forEach((card, index) => {
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
        delay: index * 0.2,
      });
    });

    return () => {
      clearInterval(glitchInterval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const TeamMember = ({ member, index }) => (
    <div
      className="team-card relative group"
      ref={(el) => (cardRefs.current[index] = el)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-purple-900/20 to-black/40 backdrop-blur-lg border border-purple-500/10 transition-all duration-500 hover:border-purple-500/30 hover:transform hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/0 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="p-8">
          <div className="flex flex-col items-center">
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

            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-purple-400 font-medium mb-3">{member.role}</p>

            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {member.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-purple-900/30 text-purple-300 border border-purple-500/20 hover:bg-purple-900/50 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className="text-gray-400 text-center mb-6 group-hover:text-gray-300 transition-colors duration-300">
              {member.description}
            </p>

            <div className="bg-purple-900/20 px-4 py-2 rounded-full mb-6 hover:bg-purple-900/30 transition-colors duration-300">
              <p className="text-sm text-purple-300">
                <span className="font-semibold">Specialty:</span>{" "}
                {member.specialty}
              </p>
            </div>

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
      <canvas
        id="grid-canvas"
        className="fixed inset-0 w-full h-full opacity-30"
        style={{ zIndex: 0 }}
      ></canvas>

      <div
        className="fixed inset-0 bg-gradient-to-b from-black/20 via-purple-900/10 to-black/20 pointer-events-none"
        style={{ zIndex: 1 }}
      ></div>

      <div className="relative z-10">
        <nav className="fixed w-full backdrop-blur-sm bg-black/80 border-b border-purple-500/10 p-6 z-20">
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

        <div
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center px-4"
        >
          <div className="text-center">
            <h1 className="glitch-text text-5xl md:text-8xl font-bold mb-8 text-white tracking-tight">
              THE CREATORS OF TIMELOG
            </h1>
            <p className="text-xl text-purple-400/70 max-w-2xl mx-auto leading-relaxed">
              Pioneering the Future of Time Management with AI-Driven Solutions
            </p>
          </div>
        </div>

        <div className="relative py-32 px-4">
          {/* Background gradients and effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1),transparent_50%)]"></div>

          <div className="max-w-4xl mx-auto">
            {/* Left side - Mission Statement */}
            <div className="relative">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Our Motivation
                </h2>
                <div className="relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-purple-400 to-purple-500/10"></div>
                  <p className="text-xl md:text-2xl text-white leading-relaxed font-light pl-8">
                    We are a team of innovators and AI enthusiasts, dedicated to
                    transforming how people manage time in an ever-evolving
                    digital landscape.
                    <span className="block mt-6 text-purple-400 font-medium">
                      we're developing intelligent systems that redefine productivity and
                      streamline everyday tasks like email management.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-24 px-6 bg-gradient-to-b from-black via-purple-900/10 to-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              <h2 className="text-5xl font-bold text-white mb-4 mt-8">
                Meet Our Team
              </h2>
              <p className="text-xl text-purple-400 max-w-2xl mx-auto">
                Visionaries Shaping the Future of Time Management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>

        <footer className="pt-24 pb-12 bg-gradient-to-b from-black to-purple-900/10 border-t border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4">
            {/* Grid with Justified Spacing */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 justify-between">
              {/* Company Info */}
              <div className="space-y-6">
                <span className="flex gap-2 items-center text-white font-bold text-xl">
                  <img src={Clock} className="h-8 w-8" alt="TimeLog" />
                  TimeLog
                </span>
                <p className="text-gray-400 leading-relaxed">
                  Redefining time management for the digital age :)
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-6 text-lg">
                  Quick Links
                </h4>
                <ul className="space-y-4">
                  {["Product", "Features", "About Us", "Contact"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:w-3 transition-all duration-300"></span>
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-white font-semibold mb-4">
                  Connect With Us
                </h4>
                <div className="flex space-x-4">
                  {[Github, Twitter, Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="transform hover:scale-110 transition-transform duration-300"
                    >
                      <Icon className="h-6 w-6 text-purple-400 hover:text-purple-300" />
                    </a>
                  ))}
                </div>
                <p className="mt-4 text-gray-400">
                  Stay updated with our latest developments
                </p>
              </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="border-t border-purple-900/30 pt-8 mt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400">
                  © 2024 TimeLog. All rights reserved.
                </p>
                <p className="text-gray-500 text-sm">
                  Crafted with passion by the TimeLog team
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
