import React, { useState, useEffect } from 'react';
import safety from '../assets/safety.png';
import ride from '../assets/ride.png';
import flexible from '../assets/flexible.png';

const FeatureCard = ({ title, description, icon, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
      }}
    >
      <div className="flex flex-col items-center text-center p-6 sm:p-8 transition-all duration-500 h-full relative overflow-hidden rounded-2xl backdrop-blur-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:from-white/10 hover:to-white/[0.05] hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            background: `
              radial-gradient(ellipse at 30% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 70%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)
            `
          }}
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mb-6 sm:mb-8">
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto relative transition-all duration-500 group-hover:scale-110"
            style={{
              background: `
                linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(6, 182, 212, 0.8) 50%, rgba(139, 92, 246, 0.8) 100%)
              `,
              boxShadow: isHovered 
                ? '0 0 40px rgba(59, 130, 246, 0.6), 0 0 80px rgba(6, 182, 212, 0.3)' 
                : '0 0 20px rgba(59, 130, 246, 0.4)',
              filter: isHovered ? 'brightness(1.2)' : 'brightness(1)'
            }}
          >
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-50" />
            <img src={icon} alt={title} className="w-7 h-7 sm:w-9 sm:h-9 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110" />
          </div>
        </div>

        <div className="w-full space-y-3 sm:space-y-4 relative z-10">
          <h3 className="text-xl sm:text-2xl font-bold text-white transition-all duration-300 group-hover:text-blue-200">
            {title}
          </h3>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed transition-all duration-300 group-hover:text-white/90 font-light">
            {description}
          </p>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500 group-hover:w-16 rounded-full" />
      </div>
    </div>
  );
};

const Features = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: 'Your Ride, Your Rules',
      description: 'Set your price, choose who you ride with, and even select driver/passenger gender for a more comfortable experience.',
      icon: ride,
    },
    {
      title: 'Safety & Trust',
      description: 'View profiles, ratings, and reviews before booking—know exactly who you\'re riding with.',
      icon: safety,
    },
    {
      title: 'Fair, Flexible Pricing',
      description: 'No fixed rates or hidden fees. Pay what works for you.',
      icon: flexible,
    },
  ];

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-transparent">
      {/* Background: identical to Hero for smooth blending */}
      <div className="absolute inset-0">
  
   
        <div 
          className="absolute top-1/4 left-1/6 w-24 h-24 border border-blue-400/20 rounded-full"
          style={{
            animation: 'rotate 25s linear infinite',
            transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.03}px)`
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/6 w-32 h-32 border border-cyan-400/20 rotate-45"
          style={{
            animation: 'rotate 20s linear infinite reverse',
            transform: `translate(${-scrollY * 0.04}px, ${scrollY * 0.06}px)`
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-xs sm:text-sm uppercase tracking-wider mb-4 text-blue-400/80 font-medium">
            FEATURES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-white">
            Why <span className="gradient-text">Seat Ridez</span>?
          </h2>
          <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-light">
            Because your ride should reflect you. We've built features that prioritize your comfort, safety, and freedom—so every ride feels just right.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8">
          <button className="group relative px-16 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform overflow-hidden">
            <span className="relative z-10">Sign up</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button className="group relative px-12 py-4 rounded-full bg-white/10 backdrop-blur-xl text-white font-semibold text-lg border border-white/30 shadow-lg hover:bg-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 transform">
            <span className="relative z-10">Download Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </button>
        </div> */}
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease-in-out infinite alternate;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-15px) scale(1.1);
            opacity: 1;
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

export default Features;