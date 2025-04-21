import React, { useEffect, useRef, useState } from 'react';

const NotificationCard = ({ message, time, index, isVisible }) => {
  return (
    <div 
      className={`bg-[rgba(255,255,255,0.08)] backdrop-blur-[2px] rounded-[16px] p-3 transition-all duration-700 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-[60px]'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`
      }}
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[#00bfff] rounded-xl flex items-center justify-center flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-black">
            <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm8 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-8 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[13px] text-white/90 font-medium">Capsule</span>
            <span className="text-[11px] text-white/40">{time}</span>
          </div>
          <p className="text-[13px] text-white/70 truncate">{message}</p>
        </div>
      </div>
    </div>
  );
};

const notifications = [
  { message: "You got help by Daniel Wayne", time: "Now" },
  { message: "Haha that's terrifying 😅", time: "Now" },
  { message: "Hey Alex, wanna connect?", time: "1m ago" },
  { message: "Wow, looking sooo sick man 🔥", time: "2m ago" },
  { message: "Please send me the read-only link!", time: "5m ago" }
];

const Notification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black py-20"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 max-w-6xl mx-auto items-center">
          {/* Left content */}
          <div className={`text-center lg:text-left transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-block px-3 py-1 bg-[rgba(255,255,255,0.1)] rounded-full text-white/60 text-sm mb-4">
              Up to date
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
              Get Notifications of the Status of your Questions
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto lg:mx-0">
              Stay informed about the status of your queries with our notification system. 
              Receive updates and responses to your questions in real-time, ensuring you 
              never miss important information or solutions from the community.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left max-w-xl mx-auto lg:mx-0">
              <div>
                <h3 className="text-white text-xl mb-2">Boost Efficiency</h3>
                <p className="text-white/60">
                  Enhance your workflow with tips, tools, and support from our community.
                </p>
              </div>
              <div>
                <h3 className="text-white text-xl mb-2">Improve Collaboration</h3>
                <p className="text-white/60">
                  Strengthen your teamwork with insights and feedback from our community.
                </p>
              </div>
            </div>
            <button className="mt-8 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all">
              Try it for free
            </button>
          </div>

          {/* Right notifications */}
          <div className="relative">
            <div className="space-y-3 max-w-md mx-auto">
              {notifications.map((notification, index) => (
                <NotificationCard
                  key={index}
                  index={index}
                  message={notification.message}
                  time={notification.time}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notification; 