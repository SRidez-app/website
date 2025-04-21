import React, { useState, useEffect, useRef } from 'react';
import hero from '../assets/hero.png';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const headingStyle = {
    fontSize: 'clamp(2.3rem, 5vw, 3.5rem)',
    lineHeight: '1.2',
    fontWeight: '500',
    margin: '0',
    transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    transformStyle: 'preserve-3d',
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const windowHeight = window.innerHeight;
      const maxScroll = document.documentElement.scrollHeight - windowHeight;
      const scrollPercentage = (position / maxScroll) * 100;
      
      // Start with 15 degrees and gradually decrease to -5 degrees as we scroll
      const baseRotation = 15;
      const rotationX = Math.max(baseRotation - (scrollPercentage * 0.2), -5);
      setScrollPosition(rotationX);
    };

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30; // Increased range
      const y = (clientY / window.innerHeight - 0.5) * 15; // Reduced vertical sensitivity
      setMousePosition({ x, y });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll(); // Initialize scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const imageStyle = {
    opacity: 1,
    transform: `
      perspective(2000px)
      translate3d(0px, ${scrollPosition * -2}px, 0px) 
      scale3d(1, 1, 1) 
      rotateX(${scrollPosition + (mousePosition.y * 0.2)}deg) 
      rotateY(${mousePosition.x * 0.1}deg) 
      rotateZ(0deg) 
      skew(0deg, 0deg)
    `,
    transformStyle: 'preserve-3d',
    transformOrigin: 'center top',
    willChange: 'transform',
    transition: 'transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1)',
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212]">
      {/* Background grid and gradient effects */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(153deg, rgba(0, 0, 0, 0.67), transparent 100%),
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(151deg, #121212, #000 16%, rgba(0, 191, 255, 0.3) 38%, #00BFFF 57%, #004766 76%, #000 96%)
          `,
          backgroundPosition: '0 0, 0 0, 0 0',
          backgroundSize: 'auto, 40px 40px, 40px 40px, auto',
          backgroundRepeat: 'no-repeat, repeat, repeat, no-repeat',
        }}
      />

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Product Update Banner */}
          <div className="bg-black/40 backdrop-blur-lg rounded-full px-4 py-2 mb-8 flex items-center gap-3 border border-white/20">
            <span className="text-white/70 text-sm">Product Update</span>
            <div className="h-4 w-px bg-white/30"></div>
            <span className="text-white text-sm">
              New Channel added "looking-to-hire" →
            </span>
          </div>

          <h1 className="heading-style-h1 text-white mb-6" style={headingStyle}>
            Enhance Your Productivity
            <br />
            with the Ultimate Webflow
            <br />
            Community
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl leading-relaxed">
            Join a vibrant network of Webflow enthusiasts and experts. Get
            real-time support, share your projects, and discover tips and tricks
            to maximize your Webflow experience. Connect, collaborate, and
            elevate your productivity today!
          </p>

          {/* Improved Email Input and Button for Mobile */}
          <div className="w-full max-w-lg">
            <div className="flex items-center gap-2 sm:gap-4 w-full bg-[#4A4A4A]/50 backdrop-blur-sm rounded-full p-1">
              <div className="flex-1 min-w-0">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-transparent border-none rounded-full text-white placeholder-[#A0A0A0] focus:outline-none text-sm sm:text-base"
                />
              </div>
              <button className="px-4 sm:px-8 py-3 sm:py-4 bg-white rounded-full text-black text-sm sm:text-base font-medium hover:bg-white/90 transition-colors whitespace-nowrap shrink-0">
                Get Started
              </button>
            </div>
          </div>

          {/* Discord Screenshot with 3D Effect */}
          <div className="mt-16 w-full max-w-5xl" style={{ perspective: '2000px' }}>
            <div 
              className="relative w-full rounded-lg overflow-hidden shadow-2xl"
              style={imageStyle}
            >
              <img
                src={hero}
                alt="Discord Community Screenshot"
                className="w-full h-auto"
                style={{
                  filter: 'brightness(1.1) contrast(1.1)',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                }}
              />
              {/* Enhanced reflection effect */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                  mixBlendMode: 'overlay',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-60 h-60 bg-gradient-to-br from-[#00BFFF] to-[#004766] rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-gradient-to-br from-[#00BFFF] to-[#004766] rounded-full blur-[100px] opacity-20"></div>
    </section>
  );
};

export default Hero;