import React from 'react';
import earthImage from '../assets/earth.png'; // Assuming an image asset like this exists

const CommunityFirst = () => {
  return (
    <section
      className="relative overflow-hidden min-h-[600px] lg:min-h-[700px]"
      style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,71,102,0.9) 100%, rgba(0,0,0,1) 100%)'
      }}
    >

    {/* Centered glowing gradient */}
    <div
        className="absolute z-0 pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          width: 'min(100vw)',
          height: '20rem',
          // borderRadius: '%',
          transform: 'translate(-50%, -50%)',
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundRepeat: 'repeat',
          filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.15))',
          opacity: 0.8
        }}
      />

      <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 mt-16 text-white">Community First</h2>

        {/* Content: Image and Text/Buttons */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-start ">
          {/* Left Column: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            {/* Placeholder for the earth image */}
  
            {/* Uncomment and replace src when image is available */}
            <img src={earthImage} alt="Hands holding earth" className="w-70 h-70 object-cover" />
          </div>

          {/* Right Column: Text and Buttons */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-8">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              Traveling far shouldn't break the bank. Seat Ridez empowers users to support
              each other by offering rides to those headed in the same direction—building
              community and turning everyday trips into shared experiences.
              Offer a ride, cover your travel costs, and make new friends along the way.
              Welcome to Seat Ridez.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow hover:bg-yellow-500 transition-colors">
                Sign up
              </button>
              <button className="px-8 py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-200 transition-colors">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityFirst; 