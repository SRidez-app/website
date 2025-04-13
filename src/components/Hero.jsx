import React from 'react';

const Hero = () => {
  const headingStyle = {
    fontSize: '3.5rem',
    lineHeight: '1.2',
    fontWeight: '500',
    margin: '0',
    transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    transformStyle: 'preserve-3d',
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background grid and gradient effects */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(153deg, rgba(0, 0, 0, 0.67), transparent 100%),
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(151deg, #292929, #000 16%, rgba(116, 93, 9, 0.79) 38%, #b4d600 57%, #242a00 76%, #000 96%)
          `,
          backgroundPosition: '0 0, 0 0, 0 0',
          backgroundSize: 'auto, 40px 40px, auto',
          backgroundRepeat: 'no-repeat, repeat, no-repeat',
        }}
      />

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Product Update Banner - Positioned at Top Center */}
          <div className="bg-black/40 backdrop-blur-lg rounded-full px-6 py-2 mb-8 flex items-center gap-3 border border-white/20">
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

          {/* Email Input and Get Started Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg bg-[#4A4A4A]/50 backdrop-blur-sm rounded-full p-1">
            <div className="w-full sm:w-auto flex-1">
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full px-6 py-4 bg-transparent border-none rounded-full text-white placeholder-[#A0A0A0] focus:outline-none"
              />
            </div>
            <button className="w-full sm:w-auto px-8 py-4 bg-white rounded-full text-black text-base font-medium hover:bg-white/90 transition-colors">
              Get Started
            </button>
          </div>



        </div>
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-60 h-60 bg-gradient-to-br from-[#b4d600] to-[#242a00] rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-gradient-to-br from-[#b4d600] to-[#242a00] rounded-full blur-[100px] opacity-20"></div>
    </section>
  );
};

export default Hero;