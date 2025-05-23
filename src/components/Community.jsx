import React from 'react';
import communityImage from '../assets/community.jpg';
import starIcon from '../assets/star.png';
import playstore from '../assets/star.png'; // Assuming this path
import appstore from '../assets/appstore.png'; // Assuming this path

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
    <section
      className="w-full py-4  text-white flex justify-center"
      style={{
        // background: 'linear-gradient(to bottom, #0A1C2A 50%, #000000 50%)',
        background: 'linear-gradient(180deg,rgb(0,71,102,0.9) 0%,rgb(0,0,0,1) 70%, #000000 100%)',// Top half bluish, bottom half black
      }}
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
        {/* Top Row: Heading and App Icons */}
        <div className="w-full flex justify-center items-center mb-2">
          <h2 className="text-4xl md:text-5xl font-bold">We got you covered!</h2>
        </div>
        <div className="w-full flex items-end justify-end">
          <div className="flex gap-4">
            {/* <img src={playstore} alt="Google Play Store" className="h-10" /> */}
            <img src={appstore} alt="Apple App Store" className="w-50 h-30 object-cover" />
          </div>
        </div>

        {/* Bottom Row: Two Columns */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start gap-12">
          {/* Left Column: Image Card */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-center mt-16">
            <div
              className="relative rounded-2xl border-2 border-white overflow-hidden shadow-2xl bg-black/70 p-8 w-full"
              style={{
                backgroundImage: `url(${communityImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '300px',
              }}
            >
              <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay */}
              <div className="relative z-10 text-white text-left mt-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Need a ride out of state?</h3>
                <p className="text-base leading-relaxed">
                  Seat Ridez has you covered.<br />
                  Book one-way trips or plan a full round-trip itinerary—no surge pricing, no meters, no stress. Just affordable, hassle-free travel.<br /><br />
                  That's the Seat Ridez way.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Star List */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-white">
            <div className="grid grid-cols-1">
              {rideOptions.map((option) => (
                <div key={option.id} className="p-4 rounded-lg transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                      <img
                        src={option.image}
                        alt={option.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{option.title}</h4>
                      <p className="text-gray-400 text-sm">{option.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
