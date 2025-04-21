import React from 'react';

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="text-center p-6 transition-all duration-300 h-full">
      {/* Icon with gradient background */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto relative"
        style={{
          backgroundImage: `
            radial-gradient(circle farthest-corner at 50% 50%, transparent, transparent 11%, #000 75%),
            linear-gradient(151deg, #000, #000 4%, rgb(0,191,255) 22%, rgb(0,191,255) 57%, #000 100%)
          `,
          backgroundPosition: '0 0, 0 0',
          backgroundSize: 'auto, auto',
          borderRadius: '100rem',
          padding: '1rem',
          boxShadow: '0 0 20px rgba(0, 191, 255, 0.5)', // Blue glow
        }}
        

      >
        {/* Ensure the icon is black */}
        <div className="text-black">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: 'Help Forum',
      description:
        'Get answers to your questions quickly in our Help Forum. Connect with experienced Webflow users, troubleshoot issues, and find solutions to enhance your projects.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor" // This will inherit the black color from the parent
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 17h-2v-2h2zm2.07-7.75l-.9.92c-.5.51-.86.97-1.04 1.69c-.08.32-.13.68-.13 1.14h-2v-.5a3.997 3.997 0 0 1 1.17-2.83l1.24-1.26c.46-.44.68-1.1.55-1.8a1.99 1.99 0 0 0-1.39-1.53c-1.11-.31-2.14.32-2.47 1.27c-.12.37-.43.65-.82.65h-.3C8.4 9 8 8.44 8.16 7.88a4.008 4.008 0 0 1 3.23-2.83c1.52-.24 2.97.55 3.87 1.8c1.18 1.63.83 3.38-.19 4.4" />
        </svg>
      ),
    },
    {
      title: 'Show and Tell',
      description:
        'Showcase your latest projects and see what others in the community are creating. Get inspired, receive feedback, and celebrate your achievements in our "Show and Tell" section.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor" // This will inherit the black color from the parent
        >
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3" />
        </svg>
      ),
    },
    {
      title: 'Looking for work',
      description:
        'Searching for your next project or job opportunity? Explore our "Looking for Work" section to connect with potential clients and employers. Showcase your skills and find new freelance gigs.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor" // This will inherit the black color from the parent
        >
          <path d="M18 11c1.49 0 2.87.47 4 1.26V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h7.68A6.995 6.995 0 0 1 18 11m-8-7h4v2h-4z" />
          <path d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-black text-white relative">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 bg-repeat opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider mb-2 text-gray-400">
            FEATURES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Where Developers Learn, Share &<br />Build Careers
          </h2>
          <p className="text-gray-400 text-base max-w-3xl mx-auto">
            Dive into a dynamic community where developers exchange knowledge,
            showcase their work, and advance their careers. Whether you're a
            beginner or a seasoned pro, find resources, mentorship, and
            opportunities to grow and succeed in the Webflow ecosystem.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm">
            Get more information
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;