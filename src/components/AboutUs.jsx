import React, { useState, useEffect } from 'react';

const AboutUs = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate floating elements for background animation
  const generateFloatingElements = () => {
    const elements = [];
    for (let i = 0; i < 12; i++) {
      elements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 4,
      });
    }
    return elements;
  };

  const floatingElements = generateFloatingElements();

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
            `,
            animation: 'gradient-shift 8s ease-in-out infinite alternate'
          }}
        />

        {/* Floating elements */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              animation: `float ${element.duration}s ease-in-out infinite`,
              animationDelay: `${element.delay}s`,
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)'
            }}
          />
        ))}

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${scrollY * 0.02}px, ${scrollY * 0.01}px)`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen pt-20">
        {/* Header */}
        <div className="text-center pt-8 pb-12 px-4">
          {/* <button className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 mx-auto mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button> */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">About Seat Ridez</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
           Carpooling Made Simple, Affordable, and Community-Driven
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 pb-12">
          <div 
            className="backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              boxShadow: '0 25px 80px rgba(59, 130, 246, 0.2)'
            }}
          >
            <div className="text-white/90 leading-relaxed space-y-12">
              
              {/* Introduction */}
              <section className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed">
                  At Seat Ridez, we believe that traveling shouldn't break the bank. Our platform connects drivers with empty seats to passengers looking for affordable, long-distance rides—making travel more cost-effective, convenient, and community-driven.
                </p>
              </section>

              {/* Why Choose Seat Ridez */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold gradient-text">Why Choose Seat Ridez?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-3 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Shared Rides, Shared Costs</h3>
                        <p className="text-white/80">Drivers can offset their travel expenses, and passengers get an affordable alternative to traditional rideshare services.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-3 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Plan Ahead or Ride on Demand</h3>
                        <p className="text-white/80">Book a ride in advance or find a driver going your way for last-minute travel plans.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-3 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Safety Comes First</h3>
                        <p className="text-white/80">We ensure driver verification, trip tracking, and emergency contact features for a secure ride experience.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-3 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Transparent Pricing</h3>
                        <p className="text-white/80">No hidden fees. Seat Ridez takes a 15% platform fee, keeping transactions smooth and reliable.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-3 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Built for Long-Distance and Event Travel</h3>
                        <p className="text-white/80">Whether you're headed to a music festival, sports event, college town, or weekend getaway, Seat Ridez helps you find or offer rides over 15 miles.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* How It Works */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold gradient-text">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <h3 className="font-semibold text-white mb-2">Find or Offer a Ride</h3>
                    <p className="text-white/80 text-sm">Search for available rides or post your own trip.</p>
                  </div>

                  <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <h3 className="font-semibold text-white mb-2">Book and Confirm</h3>
                    <p className="text-white/80 text-sm">Secure your seat or approve a passenger.</p>
                  </div>

                  <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <h3 className="font-semibold text-white mb-2">Travel and Save</h3>
                    <p className="text-white/80 text-sm">Enjoy a comfortable, affordable ride with a verified driver.</p>
                  </div>
                </div>
              </section>

              {/* Our Story */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold gradient-text">Our Story: Why We Built Seat Ridez</h2>
                <div className="space-y-4 text-lg">
                  <p>
                    It all started with a simple problem—long-distance travel was either too expensive or too inconvenient. Flights cost too much, buses were slow, and rideshare apps charged outrageous prices for trips over 15 miles.
                  </p>
                  <p className="font-medium text-white">
                    We thought: What if there was an easier way?
                  </p>
                  <p>
                    That's how Seat Ridez was born—a peer to peer carpooling platform designed for longer trips, connecting people who are already traveling with those who need a ride. Whether it's a college student heading home for the weekend, a concert-goer traveling to a festival, or a commuter looking for an affordable option—Seat Ridez makes carpooling effortless.
                  </p>
                  <p className="font-medium text-blue-300">
                    Our mission? To make long-distance travel affordable, accessible, and community-driven—one shared ride at a time.
                  </p>
                </div>
              </section>

              {/* Join the Movement */}
              <section className="space-y-6 text-center">
                <h2 className="text-3xl font-bold gradient-text">Join the Movement</h2>
                <div className="space-y-4">
                  <p className="text-lg">
                    Seat Ridez is more than just a rideshare platform—it's a community built on trust, affordability, and convenience. Whether you're a driver looking to split travel costs or a passenger seeking a budget-friendly way to get to your destination, we're here to help.
                  </p>
                  <p className="text-xl font-semibold text-white">
                    Find or offer a ride today and be part of the future of long-distance travel.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-8">
                  {/* <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                    Get Started Today
                  </button> */}
                </div>
              </section>

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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;