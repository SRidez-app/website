import React, { useState, useEffect, useRef } from 'react';
import hero from '../assets/hero.png';

const Hero = () => {
  const [rotation, setRotation] = useState(30);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const heroHeight = rect.height;
      let progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + heroHeight), 0), 1);
      progress = Math.min(progress * 1.2, 1);
      const baseRotation = isMobile ? 0 : 50; // Disable rotation on mobile
      const newRotation = baseRotation * (1 - progress);
      setRotation(newRotation);
    };

    const handleMouseMove = (e) => {
      if (isMobile) return; // Disable mouse effects on mobile
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30;
      const y = (clientY / window.innerHeight - 0.5) * 15;
      setMousePosition({ x, y });
    };

    // Initial check
    checkMobile();
    handleScroll();

    // Event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
      checkMobile();
      handleScroll();
    });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  const headingStyle = {
    fontSize: 'clamp(2.3rem, 5vw, 3.5rem)',
    lineHeight: '1.2',
    fontWeight: '500',
    margin: '0',
    transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    transformStyle: 'preserve-3d',
    opacity: 1
  };

  const imageStyle = {
    opacity: 1,
    transform: `
      perspective(${isMobile ? '1000px' : '2000px'})
      translate3d(0px, ${isMobile ? 0 : rotation * -2}px, 0px)
      scale3d(${isMobile ? 0.9 : 1}, ${isMobile ? 0.9 : 1}, 1)
      rotateX(${isMobile ? 0 : rotation + mousePosition.y * 0.2}deg)
      rotateY(${isMobile ? 0 : mousePosition.x * 0.1}deg)
      rotateZ(0deg)
      skew(0deg, 0deg)
    `,
    transformStyle: 'preserve-3d',
    transformOrigin: 'center top',
    willChange: isMobile ? 'auto' : 'transform',
    transition: isMobile ? 'none' : 'transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1)',
  };

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212] overflow-x-hidden"
    >
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
      

      <div className="container mx-auto px-4 pt-32 pb-20  md:mt-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Product Update Banner */}
          {/* <div className="bg-black/40 backdrop-blur-lg rounded-full px-4 py-2 mb-8 flex items-center gap-3 border border-white/20">
            <span className="text-white/70 text-sm">Product Update</span>
            <div className="h-4 w-px bg-white/30"></div>
            <span className="text-white text-sm">
              New Channel added "looking-to-hire" →
            </span>
          </div> */}

          <h1 className="heading-style-h1 text-white mb-6" style={headingStyle}>
            Affordable Rides
            <br />
            Anywhere!
          </h1>

          <p className="text-lg md:text-xl text-white/70 py-12  max-w-3xl leading-relaxed">
            Join the carpooling community that puts you in control. 
            <br />
            With Seat Ridez, you skip the surge pricing and ride on your terms. Set your own price, choose driver and passenger genders, and match based on preferences that matter to you. This is carpooling, reimagined.
          </p>

          <h2 className="heading-style-h2 text-white pt-6 pb-12" style={headingStyle}>
          This is carpooling, reimagined
          </h2>

          {/* Improved Email Input and Button for Mobile */}
          <div className="w-full max-w-lg flex justify-center mb-12">
            <div className="flex gap-4 md:gap-12 lg:gap-12 w-full max-w-md justify-center flex-wrap">
              <button className="w-full sm:w-auto px-12 py-3 rounded-full bg-[#00BFFF] text-white font-semibold text-base shadow hover:bg-[#0099cc] transition-colors">
                Offer a ride
              </button>
              <button className="w-full sm:w-auto px-12 py-3 rounded-full bg-white text-black font-semibold text-base border border-[#00BFFF] shadow hover:bg-gray-100 transition-colors">
                Find a ride
              </button>
            </div>
          </div>

          {/* Discord Screenshot with 3D Effect */}
          {/* <div className="mt-16  pt-6 
          w-full max-w-full lg:max-w-5xl mx-auto" style={{ perspective: '2000px' }}>
            <div 
              className="relative w-full rounded-lg overflow-hidden shadow-2xl"
              style={{
                ...imageStyle,
                maxWidth: '100%',
                width: '100%',
                height: 'auto',
                minWidth: 0,
              }}
            >
              <img
                src={hero}
                alt="Discord Community Screenshot"
                className="w-full h-auto object-contain"
                style={{
                  filter: 'brightness(1.1) contrast(1.1)',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                }}
              />
              {/* Enhanced reflection effect */}
              {/* <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                  mixBlendMode: 'overlay',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div> */} 
        </div>
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-60 h-60 bg-gradient-to-br from-[#00BFFF] to-[#004766] rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-gradient-to-br from-[#00BFFF] to-[#004766] rounded-full blur-[100px] opacity-20"></div>
    </section>
  );
};

export default Hero;
