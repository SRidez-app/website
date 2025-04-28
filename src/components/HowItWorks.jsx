import React, { useRef, useState, useEffect } from 'react';
import step1 from '../assets/p2.png';
import step2 from '../assets/p1.png';
import step3 from '../assets/p3.png';
import step4 from '../assets/p4.png';

const steps = [
  {
    title: 'Get Started',
    description: 'Once you\'re logged in, head to "New Itinerary" to create your travel plan or browse available rides on your Seat Ridez Dashboard.',
    image: step1,
  },
  {
    title: 'Set you trip schedule',
    description: 'Select your ride preferences, number of seats, and ideal travel conditions to make the ride work best fo you.',
    image: step2,
  },
  {
    title: 'Discover Channels',
    description: 'Choose whether you\'re offering or looking for a ride, then enter your schedule and destination.',
    image: step3,
  },
  {
    title: 'Post & Go!',
    description: 'Review your itinerary, set a fair price, and post it to connect with other riders instantly!',
    image: step4,
  },
];

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const totalHeight = rect.height;
      const windowHeight = window.innerHeight;
      const sectionTop = section.offsetTop;
      const progress = Math.min(
        1,
        Math.max(0, (window.scrollY + windowHeight / 2 - sectionTop) / (totalHeight - windowHeight))
      );
      const stepIdx = Math.min(
        steps.length - 1,
        Math.floor(progress * steps.length)
      );
      setActiveStep(stepIdx);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black"
      style={{ height: `${steps.length * 100}vh` }}
    >
      <div className="text-center ">
        <p className="text-sm uppercase tracking-wider mb-2 text-gray-400">Step-by-Step</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">How it works</h2>
      </div>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto h-full flex items-center justify-center relative">
          {/* Centered Image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
            <img
              src={steps[activeStep].image}
              alt={steps[activeStep].title}
              className="w-[320px] h-[640px] object-contain rounded-3xl shadow-2xl transition-all duration-700"
              style={{ boxShadow: '0 8px 40px 0 rgba(0,0,0,0.4)' }}
            />
          </div>
          {/* Step Content - Alternating Sides */}
          {steps.map((step, idx) => {
            if (idx !== activeStep) return null;
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`absolute top-1/2 z-20 w-[40vw] max-w-md -translate-y-1/2 ${isLeft ? 'left-0 text-left' : 'right-0 text-right'} flex flex-col items-${isLeft ? 'start' : 'end'} justify-center`}
              >
                <div className="bg-black/80 p-6 rounded-2xl shadow-xl transition-all duration-700">
                  <h3 className="text-3xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-lg max-w-md">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 