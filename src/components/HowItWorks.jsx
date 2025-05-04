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
    title: 'Set your trip schedule',
    description: 'Select your ride preferences, number of seats, and ideal travel conditions to make the ride work best for you.',
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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [bgRotate, setBgRotate] = useState(0);
  const [centeredStepIdx, setCenteredStepIdx] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth < 992) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const totalHeight = rect.height;
      const windowHeight = window.innerHeight;
      const sectionTop = section.offsetTop;
      
      const progress = Math.min(
        steps.length,
        Math.max(0, ((window.scrollY + windowHeight / 2 - sectionTop) / (totalHeight - windowHeight)) * steps.length)
      );
      setScrollProgress(progress);
      setBgRotate(progress / (steps.length - 1));

      let minDist = Infinity;
      let bestIdx = 0;
      for (let i = 0; i < steps.length; i++) {
        const stepProgress = progress - i;
        const dist = Math.abs(stepProgress - 0.5);
        if (dist < minDist) {
          minDist = dist;
          bestIdx = i;
        }
      }
      setCenteredStepIdx(bestIdx);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [windowWidth]);

  const [delayedStepIdx, setDelayedStepIdx] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayedStepIdx(centeredStepIdx);
    }, 200);
    return () => clearTimeout(timeout);
  }, [centeredStepIdx]);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 992;
  const isMidRange = windowWidth >= 992 && windowWidth <= 1320;
  const isLarge = windowWidth > 1320;

  const holdAtStart = 0.7;
  let adjustedProgress = scrollProgress - holdAtStart;
  if (adjustedProgress < 0) adjustedProgress = 0;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black"
      style={{ 
        height: isMobile || isTablet ? 'auto' : `${(steps.length + 1) * 100}vh`,
        minHeight: isMobile || isTablet ? 'auto' : '100vh'
      }}
    >
      <div className="text-center pt-12 pb-8 md:pt-16 md:pb-12">
        <p className="text-sm uppercase tracking-wider mb-2 text-gray-400">Step-by-Step</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">How it works</h2>
      </div>

      {/* Desktop version (≥992px) */}
      {!isMobile && !isTablet && (
      
        
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="w-full max-w-[95vw] xl:max-w-6xl mx-auto h-full flex items-center justify-center relative px-4">
            {/* Background elements */}
            <div
              className="absolute z-0"
              style={{
                zIndex: -1,
                filter: 'blur(80px)',
                backgroundImage: 'linear-gradient(308deg,rgb(34, 46, 46) 25%,rgba(18, 154, 218, 0.72) 34%, #00BFFF 70%)',
                borderRadius: '500px',
                width: isMidRange ? '20rem' : '30.5rem',
                height: isMidRange ? '20rem' : '30.5rem',
                top: isMidRange ? '15%' : '5%',
                left: isMidRange ? '20%' : '25%',
                transform: `translate3d(${-20 + bgRotate * 20}vw, ${12 + bgRotate * 10}vh, 0px) scale3d(1, 1, 1) rotateZ(${bgRotate * 90}deg)`,
                transition: 'transform 0.7s cubic-bezier(.4,0,.2,1)'
              }}
            />
           {/* Centered glowing gradient - Added with responsive sizing */}
      <div
        className="absolute z-0 pointer-events-none hidden lg:block"
        style={{
          top: '50%',
          left: '50%',
          width: isMidRange ? '40rem' : '60rem',
          height: isMidRange ? '40rem' : '60rem',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundRepeat: 'repeat',
          filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.15))',
          zIndex: -1,
          opacity: 0.8
        }}
      />
            
              {/* Centered glowing gradient */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
              <img
                src={steps[delayedStepIdx].image}
                alt={steps[delayedStepIdx].title}
                className={`${isMidRange ? 'w-[200px] h-[400px]' : 'w-[320px] h-[640px]'} object-contain rounded-3xl shadow-2xl transition-all duration-700`}
                style={{ boxShadow: '0 8px 40px 0 rgba(0,0,0,0.4)' }}
              />
            </div>
            
            {/* Step Content */}
            {steps.map((step, idx) => {
              const stepScrollSpan = 2;
              const stepProgress = (adjustedProgress - idx) / stepScrollSpan + 0.5;
              if (stepProgress < 0 || stepProgress > 1) return null;
              const isLeft = idx % 2 === 0;

              let translateY = 0;
              let blur = 0;
              let opacity = 1;
              if (stepProgress < 0.5) {
                translateY = (1 - stepProgress * 2) * (isMidRange ? 300 : 600);
                blur = 2 * (1 - stepProgress * 2);
                opacity = 0.5 + 0.5 * stepProgress * 2;
              } else {
                translateY = -(stepProgress - 0.5) * 2 * (isMidRange ? 300 : 600);
                blur = 5 * ((stepProgress - 0.5) * 2);
                opacity = 1 - (stepProgress - 0.5) * 2 * 0.5;
              }

              return (
                <div
                  key={idx}
                  className={`absolute top-1/2 ${isMidRange ? 'w-[30vw]' : 'w-[40vw]'} max-w-md -translate-y-1/2
                    ${isLeft ? 'left-0 items-start' : 'right-0 items-start'}
                    flex flex-col justify-center transition-all duration-700`}
                  style={{
                    opacity,
                    transform: `translateY(${translateY}px) ${isLeft ? 'translateX(-30px)' : 'translateX(30px)'}`,
                    filter: `blur(${blur}px)`,
                    pointerEvents: opacity > 0.5 ? 'auto' : 'none',
                    zIndex: 20,
                  }}
                >
                  <div className={` ${isMidRange ? 'p-4' : 'p-8'} rounded-2xl`}>
                    <h3 className={`${isMidRange ? 'text-lg' : 'text-2xl'} font-bold text-white mb-2`}>{step.title}</h3>
                    <p className={`text-gray-300 ${isMidRange ? 'text-xs' : 'text-base'}`}>{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tablet version (768px-991px) */}
      {isTablet && (
        <div className="flex flex-col gap-8 px-4 py-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={step.image}
                alt={step.title}
                className="w-[180px] h-auto rounded-2xl shadow-lg mb-4"
              />
              <div className="p-6 rounded-2xl w-full max-w-md text-center">
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mobile version (<768px) */}
      {isMobile && (
        <div className="flex flex-col gap-6 px-4 py-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={step.image}
                alt={step.title}
                className="w-[160px] h-auto rounded-2xl shadow-lg mb-3"
              />
              <div className="bg-black/80 p-4 rounded-2xl w-full max-w-xs text-center">
                <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                <p className="text-gray-300 text-xs">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default HowItWorks;
