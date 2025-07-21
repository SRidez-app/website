import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const heroHeight = rect.height;
      let progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + heroHeight), 0), 1);
      progress = Math.min(progress * 1.2, 1);
      setScrollProgress(progress);
    };

    checkMobile();
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
      checkMobile();
      handleScroll();
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Generate static floating elements (much lighter)
  const generateFloatingElements = () => {
    const elements = [];
    for (let i = 0; i < 15; i++) {
      elements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 4,
      });
    }
    return elements;
  };

  const floatingElements = generateFloatingElements();

  return (
   <section className="relative pt-24 pb-90 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-transparent">

      {/* Simplified animated background */}
      <div className="absolute inset-0">
        {/* Animated gradient overlay */}

        {/* Floating elements - much simpler */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full bg-white/20 backdrop-blur-sm"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              animation: `float ${element.duration}s ease-in-out infinite`,
              animationDelay: `${element.delay}s`,
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
            }}
          />
        ))}

        {/* Simple geometric shapes */}
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rounded-full"
          style={{
            animation: 'rotate 20s linear infinite',
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-blue-400/20 rotate-45"
          style={{
            animation: 'rotate 15s linear infinite reverse',
            transform: `translate(${-scrollY * 0.08}px, ${scrollY * 0.06}px)`
          }}
        />

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.02}px)`
          }}
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 pt-32 pb-20 md:mt-8 relative z-10">
        <div 
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          style={{
            transform: `translateY(${scrollProgress * -20}px)`,
            opacity: 1 - scrollProgress * 0.3
          }}
        >
          
          {/* Main Headline */}
          <h1 className="text-white mb-6 hero-title">
            <span className="gradient-text">
              Affordable Rides
            </span>
            <br />
            <span className="font-extrabold tracking-tight">Anywhere!</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 py-12 max-w-3xl leading-relaxed font-light hero-subtitle">
            Join the carpooling community that puts you in control. 
            <br />
            With <span className="font-semibold text-blue-400">Seat Ridez</span>, you skip the surge pricing and ride on your terms. 
            <span className="font-medium text-white"> Set your own price, choose driver and passenger genders, and match based on preferences that matter to you.</span>
          </p>

          <h2 className="text-white pt-6 pb-8 hero-subtitle-2">
            This is carpooling, reimagined
          </h2>

          {/* COMING SOON - Big Bold Letters */}
          <div className="coming-soon-container mt-50 mb-2">
            <h3 className="coming-soon-text">
              COMING SOON
            </h3>
          </div>

          {/* Buttons */}
          {/* <div className="w-full max-w-lg flex justify-center mb-12 hero-buttons">
            <div className="flex gap-4 md:gap-12 lg:gap-12 w-full max-w-md justify-center flex-wrap">
              <button className="btn-primary group w-full sm:w-auto px-12 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                <span className="relative z-10">Offer a ride</span>
              </button>
              <button className="btn-secondary group w-full sm:w-auto px-12 py-3 rounded-full bg-white/10 backdrop-blur-xl text-white font-semibold text-base border border-white/30 shadow-lg hover:bg-white/20 hover:border-blue-400 transition-all duration-300 hover:scale-105 transform">
                Find a ride
              </button>
            </div>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        .hero-title {
          font-size: clamp(2.3rem, 5vw, 3.5rem);
          line-height: 1.2;
          font-weight: 700;
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          letter-spacing: -0.02em;
          text-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
          animation: fadeInUp 0.8s ease-out;
        }

        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease-in-out infinite alternate;
        }

        .hero-subtitle {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .hero-subtitle-2 {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          line-height: 1.3;
          font-weight: 600;
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          letter-spacing: -0.01em;
          background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .coming-soon-container {
          animation: fadeInUp 0.8s ease-out 0.5s both, pulse 2s ease-in-out infinite;
        }

        .coming-soon-text {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #ef4444 0%, #f59e0b 50%, #eab308 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 8px 32px rgba(239, 68, 68, 0.4);
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          filter: drop-shadow(0 4px 12px rgba(239, 68, 68, 0.3));
        }

        .coming-soon-container {
          animation: fadeInUp 0.8s ease-out 0.5s both, pulse 2s ease-in-out infinite;
        }

        .coming-soon-text {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #ef4444 0%, #f59e0b 50%, #eab308 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 8px 32px rgba(239, 68, 68, 0.4);
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          filter: drop-shadow(0 4px 12px rgba(239, 68, 68, 0.3));
        }

        .hero-buttons {
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        .btn-primary {
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
        }

        .btn-secondary {
          backdrop-filter: blur(20px);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-shift {
          0% { 
            background-position: 0% 50%;
            filter: hue-rotate(0deg);
          }
          50% { 
            background-position: 100% 50%;
            filter: hue-rotate(180deg);
          }
          100% { 
            background-position: 0% 50%;
            filter: hue-rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 4px 12px rgba(239, 68, 68, 0.3));
          }
          50% {
            transform: scale(1.02);
            filter: drop-shadow(0 6px 20px rgba(239, 68, 68, 0.5));
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 4px 12px rgba(239, 68, 68, 0.3));
          }
          50% {
            transform: scale(1.02);
            filter: drop-shadow(0 6px 20px rgba(239, 68, 68, 0.5));
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;