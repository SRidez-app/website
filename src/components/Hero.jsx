
// import React, { useState, useEffect, useRef } from 'react';
// import hero from '../assets/hero.png';

// const Hero = () => {
//   const [rotation, setRotation] = useState(30); // Start with a strong tilt
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const heroRef = useRef(null);

//   const headingStyle = {
//     fontSize: 'clamp(2.3rem, 5vw, 3.5rem)',
//     lineHeight: '1.2',
//     fontWeight: '500',
//     margin: '0',
//     transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
//     transformStyle: 'preserve-3d',
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!heroRef.current) return;
//       const rect = heroRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;
//       // Calculate how much of the Hero section is visible from top to bottom
//       const heroHeight = rect.height;
//       // When top of hero is at top of viewport => progress = 0
//       // When bottom of hero is at top of viewport => progress = 1
//       let progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + heroHeight), 0), 1);
//       progress = Math.min(progress * 1.5, 1); // Straighten 1.5x faster
//       // Interpolate from 45deg (start) to 0deg (end)
//       const baseRotation = 45;
//       const newRotation = baseRotation * (1 - progress);
//       setRotation(newRotation);
//     };

//     const handleMouseMove = (e) => {
//       const { clientX, clientY } = e;
//       const x = (clientX / window.innerWidth - 0.5) * 30; // Increased range
//       const y = (clientY / window.innerHeight - 0.5) * 15; // Reduced vertical sensitivity
//       setMousePosition({ x, y });
//     };

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('resize', handleScroll);
//     window.addEventListener('mousemove', handleMouseMove);
//     handleScroll(); // Initialize scroll position

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   const imageStyle = {
//     opacity: 1,
//     transform: `
//       perspective(2000px)
//       translate3d(0px, ${rotation * -2}px, 0px)
//       scale3d(1, 1, 1)
//       rotateX(${rotation + mousePosition.y * 0.2}deg)
//       rotateY(${mousePosition.x * 0.1}deg)
//       rotateZ(0deg)
//       skew(0deg, 0deg)
//     `,
//     transformStyle: 'preserve-3d',
//     transformOrigin: 'center top',
//     willChange: 'transform',
//     transition: 'transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1)',
//   };

//   return (
//     <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212]">
//       {/* Background grid and gradient effects */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `
//             linear-gradient(153deg, rgba(0, 0, 0, 0.67), transparent 100%),
//             linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), 
//             linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
//             linear-gradient(151deg, #121212, #000 16%, rgba(0, 191, 255, 0.3) 38%, #00BFFF 57%, #004766 76%, #000 96%)
//           `,
//           backgroundPosition: '0 0, 0 0, 0 0',
//           backgroundSize: 'auto, 40px 40px, 40px 40px, auto',
//           backgroundRepeat: 'no-repeat, repeat, repeat, no-repeat',
//         }}
//       />

//       <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
//         <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
//           {/* Product Update Banner */}
//           <div className="bg-black/40 backdrop-blur-lg rounded-full px-4 py-2 mb-8 flex items-center gap-3 border border-white/20">
//             <span className="text-white/70 text-sm">Product Update</span>
//             <div className="h-4 w-px bg-white/30"></div>
//             <span className="text-white text-sm">
//               New Channel added "looking-to-hire" →
//             </span>
//           </div>

//           <h1 className="heading-style-h1 text-white mb-6" style={headingStyle}>
//           Affordable Rides
//             <br />
//             Anywhere!
//             <br />
//           </h1>

//           <p className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl leading-relaxed">
//           Join the carpooling community that puts you in control. 
//           <br />
//           With Seat Ridez, you skip the surge pricing and ride on your terms. Set your own price, choose driver and passenger genders, and match based on preferences that matter to you. This is carpooling, reimagined.
//           <br />
//           </p>

//           {/* Improved Email Input and Button for Mobile */}
//           <div className="w-full max-w-lg mb-6">
//             <div className="flex items-center gap-2 sm:gap-4 w-full bg-[#4A4A4A]/50 backdrop-blur-sm rounded-full p-1">
//               <div className="flex-1 min-w-0">
//                 <input
//                   type="email"
//                   placeholder="Enter your Email"
//                   className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-transparent border-none rounded-full text-white placeholder-[#A0A0A0] focus:outline-none text-sm sm:text-base"
//                 />
//               </div>
//               <button className="px-4 sm:px-8 py-3 sm:py-4 bg-white rounded-full text-black text-sm sm:text-base font-medium hover:bg-white/90 transition-colors whitespace-nowrap shrink-0">
//                 Get Started
//               </button>
//             </div>
//           </div>

//           {/* Discord Screenshot with 3D Effect */}
//           <div className="mt-16 w-full max-w-5xl" style={{ perspective: '3000px' }}>
//             <div 
//               className="relative w-full rounded-lg overflow-hidden shadow-2xl"
//               style={imageStyle}
//             >
//               <img
//                 src={hero}
//                 alt="Discord Community Screenshot"
//                 className="w-full h-auto"
//                 style={{
//                   filter: 'brightness(1.1) contrast(1.1)',
//                   transform: 'translateZ(0)',
//                   backfaceVisibility: 'hidden',
//                 }}
//               />
//               {/* Enhanced reflection effect */}
//               <div 
//                 className="absolute inset-0"
//                 style={{
//                   background: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
//                   backgroundSize: '40px 40px',
//                   mixBlendMode: 'overlay',
//                   pointerEvents: 'none',
//                 }}
//               />
//             </div>
//           </div>

          
//         </div>
//       </div>

      

//       {/* Floating gradient orbs */}
//       <div className="absolute top-1/4 -left-20 w-60 h-60 bg-gradient-to-br from-[#00BFFF] to-[#004766] rounded-full blur-[100px] opacity-20"></div>
//       <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-gradient-to-br from-[#00BFFF] to-[#004766] rounded-full blur-[100px] opacity-20"></div>
//     </section>
//   );
// };

// export default Hero;




import React, { useState, useEffect, useRef } from 'react';
import hero from '../assets/hero.png';

const Hero = () => {
  const [rotation, setRotation] = useState(30); // Start with a strong tilt
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const headingStyle = {
    fontSize: 'clamp(2.3rem, 5vw, 3.5rem)',
    lineHeight: '1.2',
    fontWeight: '500',
    margin: '0',
    transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    transformStyle: 'preserve-3d',
    opacity:1
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate how much of the Hero section is visible from top to bottom
      const heroHeight = rect.height;
      // When top of hero is at top of viewport => progress = 0
      // When bottom of hero is at top of viewport => progress = 1
      let progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + heroHeight), 0), 1);
      progress = Math.min(progress * 1.2, 1); // Straighten 1.5x faster
      // Interpolate from 30deg (start) to 0deg (end)
      const baseRotation = 50;
      const newRotation = baseRotation * (1 - progress);
      setRotation(newRotation);
    };

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30; // Increased range
      const y = (clientY / window.innerHeight - 0.5) * 15; // Reduced vertical sensitivity
      setMousePosition({ x, y });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll(); // Initialize scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const imageStyle = {
    opacity: 1,
    transform: `
      perspective(2000px)
      translate3d(0px, ${rotation * -2}px, 0px)
      scale3d(1, 1, 1)
      rotateX(${rotation + mousePosition.y * 0.2}deg)
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
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212]">
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
          Affordable Rides
            <br />
            Anywhere!
            <br />
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl leading-relaxed">
          Join the carpooling community that puts you in control. 
          <br />
          With Seat Ridez, you skip the surge pricing and ride on your terms. Set your own price, choose driver and passenger genders, and match based on preferences that matter to you. This is carpooling, reimagined.
          <br />
          </p>


              {/* Improved Email Input and Button for Mobile */}
              <div className="w-full max-w-lg flex justify-center mb-6">
            <div className="flex gap-4 w-full max-w-md justify-center">
              <button className="px-6 py-3 rounded-full bg-[#00BFFF] text-white font-semibold text-base shadow hover:bg-[#0099cc] transition-colors">
                Offer a ride
              </button>
              <button className="px-6 py-3 rounded-full bg-white text-black font-semibold text-base border border-[#00BFFF] shadow hover:bg-gray-100 transition-colors">
                Find a ride
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