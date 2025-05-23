import React from 'react';
import safety from '../assets/safety.png';
import ride from '../assets/ride.png';
import flexible from '../assets/flexible.png';

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 sm:p-6 transition-all duration-300 h-full">
      {/* Icon with gradient background */}
      <div
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto relative"
        style={{
          backgroundImage: `
            radial-gradient(circle farthest-corner at 50% 50%, transparent, transparent 11%, #000 75%),
            linear-gradient(151deg, #000, #000 4%, rgb(0,191,255) 22%, rgb(0,191,255) 57%, #000 100%)
          `,
          backgroundPosition: '0 0, 0 0',
          backgroundSize: 'auto, auto',
          borderRadius: '100rem',
          padding: '0.75rem',
          boxShadow: '0 0 20px rgba(0, 191, 255, 0.5)',
        }}
      >
        <img src={icon} alt={title} className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
      </div>

      {/* Title and description */}
      <div className="w-full space-y-2 sm:space-y-3">
        <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: 'Your Ride, Your Rules',
      description:
        'Set your price, choose who you ride with, and even select driver/passenger gender for a more comfortable experience.',
      icon:ride,
    },
    {
      title: 'Safety & Trust',
      description:
        'View profiles, ratings, and reviews before booking—know exactly who you\'re riding with.',
      icon:safety,
    },
    {
      title: 'Fair, Flexible Pricing',
      description:
        'No fixed rates or hidden fees. Pay what works for you.',
      icon:  flexible,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-black text-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Centered glowing gradient */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          width: 'min(80rem, 100vw)',
          height: '40rem',
          borderRadius: '50%',
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

      <div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mt-16 relative z-10 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-wider mb-2 text-gray-400">
            FEATURES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
            Why Seat Ridez?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Because your ride should reflect you. We've built features that prioritize your comfort, safety, and freedom—so every ride feels just right.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Button */}
        <div className="flex flex-col  sm:flex-row  justify-center align-items:center py-12  gap-12">
              <button className="px-16 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow hover:bg-yellow-500 transition-colors">
                Sign up
              </button>
              <button className="px-12 py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-200 transition-colors">
                Download Now
              </button>
            </div>
      </div>
    </section>
  );
};

export default Features;
