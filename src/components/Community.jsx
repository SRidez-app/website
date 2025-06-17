import React from 'react';
import communityImage from '../assets/community.jpg';
import starIcon from '../assets/star.png';
import playstore from '../assets/playstore.png'; // Corrected import path based on your request
import appstore from '../assets/appstore.png';   // Corrected import path based on your request

const Community = () => {
  const rideOptions = [
    {
      id: 1,
      title: "Tight Budget?",
      description: "Can't justify the cost of a long trip with traditional rideshare apps? Split the fare with someone heading the same direction.",
      image: starIcon,
    },
    {
      id: 2,
      title: "Gas Prices Too High?",
      description: "Offer a seat and let riders chip in for fuel. Cover your gas while helping someone else get where they need to go.",
      image: starIcon,
    },
    {
      id: 3,
      title: "Rush Hour Madness?",
      description: "Share your ride with someone to beat the traffic and save on costs.",
      image: starIcon,
    },
    {
      id: 4,
      title: "Big Event Coming Up?",
      description: "Concerts, festivals, and games—split parking costs and ride together.",
      image: starIcon,
    },
    {
      id: 5,
      title: "College Breaks?",
      description: "Heading home for break? Carpool with other students and save.",
      image: starIcon,
    },
  ];

  return (
  <section className="relative pt+25 pb-90 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-transparent">

      {/* Main content */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">
        {/* Top Row: Heading and App Icons */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-8 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 md:mb-0">
            <span className="gradient-text">We got you covered!</span>
          </h2>
          {/* NEW: App Store Icons */}
          <div className="flex justify-center md:justify-end gap-4 mt-4 md:mt-0">
            <a href="#" className="inline-block" aria-label="Download on Google Play">
            
            </a>
            <a href="#" className="inline-block" aria-label="Download on Apple App Store">
              <img src={appstore} alt="Apple App Store" className="h-75 w-auto transition-transform duration-300 hover:scale-105" />
            </a>
          </div>
        </div>

        {/* Bottom Row: Two Columns */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-12 mt-8">
          {/* Left Column: Image Card */}
          <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-16">
            <div
              className="relative rounded-2xl border border-blue-500/30 overflow-hidden shadow-2xl bg-black/70 backdrop-blur-sm p-10 w-full max-w-xl"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${communityImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '350px',
                boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
              }}
            >
              <div className="relative z-10 text-white text-left mt-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a ride out of state?</h3>
                <p className="text-base leading-relaxed text-white/80">
                  Seat Ridez has you covered.
                  Book one-way trips or plan a full round-trip itinerary—no surge pricing, no meters, no stress. Just affordable, hassle-free travel.<br /><br />
                  That's the <span className="font-semibold text-blue-400">Seat Ridez</span> way.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Star List */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-white mt-8 md:mt-0">
            <div className="grid grid-cols-1 gap-4">
              {rideOptions.map((option) => (
                <div
                  key={option.id}
                  className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-blue-400"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex-shrink-0 mt-1">
                      <img
                        src={option.image}
                        alt={option.title}
                        className="w-full h-full object-contain filter brightness-150"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-blue-300">{option.title}</h4>
                      <p className="text-gray-300 text-sm">{option.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease-in-out infinite alternate;
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
      `}</style>
    </section>
  );
};

export default Community;