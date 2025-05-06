// import React from 'react';

// const FeatureCard = ({ title, description, icon }) => {
//   return (
//     <div className="flex flex-col items-center justify-start text-center p-6 transition-all duration-300 h-full">
//       {/* Icon with gradient background */}
//       <div
//         className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto relative"
//         style={{
//           backgroundImage: `
//             radial-gradient(circle farthest-corner at 50% 50%, transparent, transparent 11%, #000 75%),
//             linear-gradient(151deg, #000, #000 4%, rgb(0,191,255) 22%, rgb(0,191,255) 57%, #000 100%)
//           `,
//           backgroundPosition: '0 0, 0 0',
//           backgroundSize: 'auto, auto',
//           borderRadius: '100rem',
//           padding: '1rem',
//           boxShadow: '0 0 20px rgba(0, 191, 255, 0.5)', // Blue glow
//         }}
//       >
//         <div className="text-black">{icon}</div>
//       </div>
//       {/* Fixed height for title area for alignment */}
//       <div style={{ minHeight: 56, display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="w-full">
//         <h3 className="text-xl font-semibold mb-3 flex-shrink-0 w-full">{title}</h3>
//       </div>
//       <p className="text-gray-400 text-sm text-lg md:text-lg text-white/70 leading-relaxed flex-grow">{description}</p>
//     </div>
//   );
// };

// const Features = () => {
//   const features = [
//     {
//       title: 'Your Ride, Your Rules',
//       description:
//         'Set your price, choose who you ride with, and even select driver/passenger gender for a more comfortable experience.',
//       icon: (
//         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//           <circle cx="12" cy="12" r="10" />
//           <line x1="12" y1="8" x2="12" y2="13" />
//           <circle cx="12" cy="16" r="1.2" fill="currentColor" />
//         </svg>
//       ),
//     },
//     {
//       title: 'Safety & Trust',
//       description:
//         'View profiles, ratings, and reviews before booking—know exactly who you\'re riding with.',
//       icon: (
//         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//           <ellipse cx="12" cy="12" rx="8" ry="6" />
//           <circle cx="12" cy="12" r="2.5" fill="currentColor" />
//         </svg>
//       ),
//     },
//     {
//       title: 'Fair, Flexible Pricing',
//       description:
//         'No fixed rates or hidden fees. Pay what works for you.',
//       icon: (
//         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M12 17l-2.5-2.5M12 17l2.5-2.5M12 17v-4" />
//           <path d="M19 12v-2a2 2 0 0 0-2-2h-2.5a2 2 0 0 0-1.5.67l-1 1.16a2 2 0 0 1-3 0l-1-1.16A2 2 0 0 0 5.5 8H3a2 2 0 0 0-2 2v2" />
//           <path d="M2 12v2a2 2 0 0 0 2 2h2.5a2 2 0 0 0 1.5-.67l1-1.16a2 2 0 0 1 3 0l1 1.16A2 2 0 0 0 16.5 16H19a2 2 0 0 0 2-2v-2" />
//         </svg>
//       ),
//     },
//     {
//       title: 'In-App Messaging',
//       description:
//         'Chat with riders and drivers securely—no need to share personal contact info.',
//       icon: (
//         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//           <rect x="3" y="5" width="18" height="14" rx="3" />
//           <path d="M7 10h10M7 14h6" />
//         </svg>
//       ),
//     },
//     {
//       title: 'Real-Time Matching',
//       description:
//         'Get paired with people who share your music taste, hobbies, and vibe.',
//       icon: (
//         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//           <circle cx="8" cy="12" r="3" />
//           <circle cx="16" cy="12" r="3" />
//           <path d="M8 15v2M16 15v2" />
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <section className="py-16 bg-black text-white relative">
//       {/* Background Grid Pattern */}
//       <div
//         className="absolute inset-0 bg-repeat opacity-10"
//         style={{
//           backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
//                            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
//           backgroundSize: '40px 40px',
//         }}
//       ></div>

//       <div className="container mx-auto px-4 mb-16 relative z-10 max-w-7xl">
//         {/* Header Section */}
//         <div className="text-center mt-6 mb-12">
//           <p className="text-sm uppercase tracking-wider mb-2 text-gray-400">
//             FEATURES
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
//           Why Seat Ridez?
//           </h2>
//           <p className="text-gray-400  text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
//           Because your ride should reflect you. We've built features that prioritize your comfort, safety, and freedom—so every ride feels just right..
//           </p>

//         </div>
//                {/* Centered glowing gradient, behind the image */}
//                <div
//             className="absolute z-0 pointer-events-none"
//             style={{
//             top: '70%',
//             left: '50%',
//             width: '80rem',
//             height: '40rem',
//             borderRadius: '50%',
//             transform: 'translate(-50%, -50%)',
//             backgroundImage: `
//               linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
//             `,
//             backgroundSize: '40px 40px',
//             backgroundRepeat: 'repeat',
//             filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.15))',
//             zIndex: -1,
//             opacity: 0.8
//             }}
//           />

//         {/* Feature Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//           {features.map((feature, index) => (
//             <FeatureCard key={index} {...feature} />
//           ))}
//         </div>

//         {/* Button */}
//         <div className="text-center mt-10">
//           <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm">
//             Get more information
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;






import React from 'react';

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
        <div className="text-black">{icon}</div>
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
  // const features = [
  //   {
  //     title: 'Your Ride, Your Rules',
  //     description: 'Set your price, choose who you ride with, and even select driver/passenger gender for a more comfortable experience.',
  //     icon: (
  //       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
  //         <circle cx="12" cy="12" r="10" />
  //         <line x1="12" y1="8" x2="12" y2="13" />
  //         <circle cx="12" cy="16" r="1.2" fill="currentColor" />
  //       </svg>
  //     ),
  //   },
  //   {
  //     title: 'Safety & Trust',
  //     description: 'View profiles, ratings, and reviews before booking—know exactly who you\'re riding with.',
  //     icon: (
  //       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
  //         <ellipse cx="12" cy="12" rx="8" ry="6" />
  //         <circle cx="12" cy="12" r="2.5" fill="currentColor" />
  //       </svg>
  //     ),
  //   },
  //   {
  //     title: 'Fair, Flexible Pricing',
  //     description: 'No fixed rates or hidden fees. Pay what works for you.',
  //     icon: (
  //       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
  //         <path d="M12 17l-2.5-2.5M12 17l2.5-2.5M12 17v-4" />
  //         <path d="M19 12v-2a2 2 0 0 0-2-2h-2.5a2 2 0 0 0-1.5.67l-1 1.16a2 2 0 0 1-3 0l-1-1.16A2 2 0 0 0 5.5 8H3a2 2 0 0 0-2 2v2" />
  //         <path d="M2 12v2a2 2 0 0 0 2 2h2.5a2 2 0 0 0 1.5-.67l1-1.16a2 2 0 0 1 3 0l1 1.16A2 2 0 0 0 16.5 16H19a2 2 0 0 0 2-2v-2" />
  //       </svg>
  //     ),
  //   },
  // ];
  const features = [
    {
      title: 'Your Ride, Your Rules',
      description:
        'Set your price, choose who you ride with, and even select driver/passenger gender for a more comfortable experience.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="13" />
          <circle cx="12" cy="16" r="1.2" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: 'Safety & Trust',
      description:
        'View profiles, ratings, and reviews before booking—know exactly who you\'re riding with.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="12" rx="8" ry="6" />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: 'Fair, Flexible Pricing',
      description:
        'No fixed rates or hidden fees. Pay what works for you.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 17l-2.5-2.5M12 17l2.5-2.5M12 17v-4" />
          <path d="M19 12v-2a2 2 0 0 0-2-2h-2.5a2 2 0 0 0-1.5.67l-1 1.16a2 2 0 0 1-3 0l-1-1.16A2 2 0 0 0 5.5 8H3a2 2 0 0 0-2 2v2" />
          <path d="M2 12v2a2 2 0 0 0 2 2h2.5a2 2 0 0 0 1.5-.67l1-1.16a2 2 0 0 1 3 0l1 1.16A2 2 0 0 0 16.5 16H19a2 2 0 0 0 2-2v-2" />
        </svg>
      ),
    },
    {
      title: 'In-App Messaging',
      description:
        'Chat with riders and drivers securely—no need to share personal contact info.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="M7 10h10M7 14h6" />
        </svg>
      ),
    },
    {
      title: 'Real-Time Matching',
      description:
        'Get paired with people who share your music taste, hobbies, and vibe.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="12" r="3" />
          <circle cx="16" cy="12" r="3" />
          <path d="M8 15v2M16 15v2" />
        </svg>
      ),
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

      <div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 relative z-10 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mt-16">
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
        <div className="text-center mt-8 sm:mt-10">
          <button className="bg-white text-black px-5 py-2 sm:px-6 sm:py-2 rounded-full font-medium hover:bg-gray-100 transition-colors text-xs sm:text-sm">
            Get more information
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
