import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  // Background animation state
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Generate static floating elements (from Hero)
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
    <div className="min-h-screen flex flex-col relative">
      {/* Animated Background - moved from Hero */}
      {/* ADD pointer-events-none HERE */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pointer-events-none">
        {/* Animated gradient overlay */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `
              linear-gradient(151deg, #121212, #000 16%, rgba(0, 191, 255, 0.3) 38%, #00BFFF 57%, #004766 76%, #000 96%)
            `,
            animation: 'gradient-shift 8s ease-in-out infinite alternate'
          }}
        />

        {/* Floating elements */}
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

        {/* Simple geometric shapes with cars */}
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

        {/* Car outlines - scattered around */}
        <div
          className="absolute top-1/2 left-1/6 opacity-10"
          style={{
            animation: 'float 8s ease-in-out infinite',
            transform: `translate(${scrollY * 0.03}px, ${scrollY * 0.02}px)`
          }}
        >
          <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 16C8 17.1046 7.10457 18 6 18C4.89543 18 4 17.1046 4 16C4 14.8954 4.89543 14 6 14C7.10457 14 8 14.8954 8 16Z" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1"/>
            <path d="M56 16C56 17.1046 55.1046 18 54 18C52.8954 18 52 17.1046 52 16C52 14.8954 52.8954 14 54 14C55.1046 14 56 14.8954 56 16Z" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1"/>
            <path d="M2 16H4M8 16H52M56 16H58M12 8H48L54 16H6L12 8Z" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 8L14 4H20L18 8" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M44 8L42 4H48L46 8" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div
          className="absolute top-3/4 right-1/3 opacity-8"
          style={{
            animation: 'float 6s ease-in-out infinite reverse',
            transform: `translate(${-scrollY * 0.04}px, ${scrollY * 0.03}px)`
          }}
        >
          <svg width="50" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 14C7 14.8284 6.32843 15.5 5.5 15.5C4.67157 15.5 4 14.8284 4 14C4 13.1716 4.67157 12.5 5.5 12.5C6.32843 12.5 7 13.1716 7 14Z" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
            <path d="M46 14C46 14.8284 45.3284 15.5 44.5 15.5C43.6716 15.5 43 14.8284 43 14C43 13.1716 43.6716 12.5 44.5 12.5C45.3284 12.5 46 13.1716 46 14Z" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
            <path d="M2 14H4M7 14H43M46 14H48M10 7H40L44.5 14H5.5L10 7Z" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 7L13 4H17L16 7" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M36 7L35 4H39L38 7" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div
          className="absolute top-1/6 right-1/5 opacity-12"
          style={{
            animation: 'rotate 25s linear infinite',
            transform: `translate(${scrollY * 0.02}px, ${-scrollY * 0.04}px)`
          }}
        >
          <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12Z" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1"/>
            <path d="M36 12C36 12.5523 35.5523 13 35 13C34.4477 13 34 12.5523 34 12C34 11.4477 34.4477 11 35 11C35.5523 11 36 11.4477 36 12Z" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1"/>
            <path d="M2 12H4M6 12H34M36 12H38M8 6H32L35 12H5L8 6Z" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 6L11.5 3H14.5L14 6" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28 6L27.5 3H30.5L30 6" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

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

        {/* Background animations styles */}
        <style jsx>{`
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
      </div>

      {/* Header - positioned above background with higher z-index and pointer-events-auto */}
      <div className="relative z-[9999] pointer-events-auto">
        <Header />
      </div>

      {/* Main content - positioned above background with higher z-index and pointer-events-auto */}
      <main className="flex-grow relative z-10 pointer-events-auto">
        {children}
      </main>

      {/* Footer - positioned above background, only show on homepage, with pointer-events-auto */}
      {isLandingPage && (
        <div className="relative z-10 pointer-events-auto">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;