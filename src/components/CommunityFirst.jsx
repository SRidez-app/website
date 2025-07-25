import React from 'react';

import earthImage from '../assets/earth.png'; // Example relative path, adjust as needed

const CommunityFirst = () => {
  return (
    <section className="relative pt-24 pb-90 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-transparent" >
      {/* Animated gradient overlay (Note: these background elements were moved to Layout.jsx/globals.css in previous steps) */}

      {/* Floating elements - Dynamic elements typically handled in a Layout component or global wrapper */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animation: `float ${Math.random() * 3 + 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
          }}
        />
      ))}

      {/* Geometric shapes - Dynamic elements typically handled in a Layout component or global wrapper */}
      <div
        className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rounded-full"
        style={{ animation: 'rotate 20s linear infinite' }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-blue-400/20 rotate-45"
        style={{ animation: 'rotate 15s linear infinite reverse' }}
      />

      {/* Grid overlay - Dynamic elements typically handled in a Layout component or global wrapper */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl w-full mx-auto flex flex-col items-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 mt-16 text-center">
          <span className="gradient-text">Community First</span>
        </h2>

        <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Image - Earth frame updated here */}
          <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
            <img
              src={earthImage.src || earthImage} // Use .src if Next.js Image optimization is implied, otherwise directly use earthImage
              alt="Hands holding earth"
              className="w-80 h-80 object-cover rounded-full shadow-lg"
              style={{
                border: '3px solid rgba(59, 130, 246, 0.5)',
                boxShadow: '0 0 40px rgba(59, 130, 246, 0.4)',
              }}
              onError={(e) => {
                // Fallback for broken image, e.g., a placeholder or hiding the image
                // This is useful if the path is incorrect or image fails to load.
                e.currentTarget.src = "https://placehold.co/350x350/00BFFF/FFFFFF?text=Image+Error";
                e.currentTarget.onerror = null; // Prevent infinite loop if fallback also fails
              }}
            />
          </div>

          {/* Text + Buttons */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0 order-1 md:order-2">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              Traveling far shouldn't break the bank. <span className="font-semibold text-blue-400">Seat Ridez</span> empowers users to support
              each other by offering rides to those headed in the same direction—building
              community and turning everyday trips into shared experiences.
              Offer a ride, cover your travel costs, and make new friends along the way.
              <br /><br />Welcome to <span className="font-semibold text-cyan-400">Seat Ridez</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button className="btn-primary group w-full sm:w-auto px-12 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                <span className="relative z-10">Sign up</span>
              </button>
              <button className="btn-secondary group w-full sm:w-auto px-12 py-3 rounded-full bg-white/10 backdrop-blur-xl text-white font-semibold text-base border border-white/30 shadow-lg hover:bg-white/20 hover:border-blue-400 transition-all duration-300 hover:scale-105 transform">
                Download Now
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Styles - assuming these keyframes are already in your global CSS now */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease-in-out infinite alternate;
        }
        /*
          Removed duplicate keyframe definitions here.
          These should ideally be in your global CSS file (e.g., globals.css)
          as discussed in previous turns.
        */
      `}</style>
    </section>
  );
};

export default CommunityFirst;