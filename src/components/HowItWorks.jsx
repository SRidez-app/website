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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [bgRotate, setBgRotate] = useState(0);
  const [centeredStepIdx, setCenteredStepIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const totalHeight = rect.height;
      const windowHeight = window.innerHeight;
      const sectionTop = section.offsetTop;
      // Calculate continuous progress (0 to steps.length)
      const progress = Math.min(
        steps.length,
        Math.max(0, ((window.scrollY + windowHeight / 2 - sectionTop) / (totalHeight - windowHeight)) * steps.length)
      );
      setScrollProgress(progress);
      setBgRotate(progress / (steps.length - 1));

      // Find the step whose stepProgress is closest to 0.5 (centered)
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
  }, []);

  // For delayed image change (0.2s hold at center)
  const [delayedStepIdx, setDelayedStepIdx] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayedStepIdx(centeredStepIdx);
    }, 200); // 0.2s hold
    return () => clearTimeout(timeout);
  }, [centeredStepIdx]);

  const gradPos = 20 + (bgRotate * 30); // 20% to 50%
  const gradStyle = {
    width: '480px',
    height: '480px',
    borderRadius: '50%',
    background: 'conic-gradient(from 90deg at 50% 50%, rgba(255,255,255,0.05), #00BFFF 40%, #121212 80%,  #00BFFF 80%)',
      // backgroundImage: 'linear-gradient(308deg, #121212 25%, rgba(255,255,255,0.05) 44%, #00BFFF 80%)',
    filter: 'blur(60px)',
    opacity: 0.5,
    left: `${gradPos}%`,
    top: `${gradPos}%`,
    transform: `translate(-50%, -50%) rotate(${bgRotate * 90}deg)`,
    transition: 'left 0.7s cubic-bezier(.4,0,.2,1), top 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
    willChange: 'transform'
  };

  const holdAtStart = 0.7; // How much scroll before animation starts (tweak as needed)
  let adjustedProgress = scrollProgress - holdAtStart;
  if (adjustedProgress < 0) adjustedProgress = 0;

  // Step animation: timeline effect, scrolls from bottom to top, alternating left/right
  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black"
      style={{ height: `${(steps.length + 1) * 100}vh` }}
    >

      
      <div className="text-center mt-12 ">
        <p className="text-sm uppercase tracking-wider mb-2 text-gray-400">Step-by-Step</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">How it works</h2>
      </div>
      <div className="sticky top-0 h-screen flex items-center justify-center hidden md:block">
        <div className="w-full max-w-6xl mx-auto h-full flex items-center justify-center relative">
          {/* Moving & Rotating Gradient Box */}
          <div
            className="absolute z-0"
            style={{
              zIndex: -1,
              filter: 'blur(80px)',
              backgroundImage: 'linear-gradient(308deg,rgb(34, 46, 46) 25%,rgba(18, 154, 218, 0.72) 34%, #00BFFF 70%)',
              // backgroundImage: 'linear-gradient(308deg, #121212 25%, rgba(255,255,255,0.05) 44%, #00BFFF 80%)',
              borderRadius: '500px',
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              width: '30.5rem',
              height: '30.5rem',
              display: 'flex',
              position: 'absolute',
              top: '5%',
              left: '25%',
              willChange: 'transform',
              transform: `translate3d(${-20 + bgRotate * 20}vw, ${12 + bgRotate * 10}vh, 0px) scale3d(1, 1, 1) rotateZ(${bgRotate * 90}deg)`,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.7s cubic-bezier(.4,0,.2,1)'
            }}

          />


          {/* Centered glowing gradient, behind the image */}
          <div
            className="absolute z-0 pointer-events-none"
            style={{
            //   top: '70%',
            //   left: '40%',
            //   width: '48rem',
            //   height: '58rem',
            //   borderRadius: '40%',
            //   position: 'absolute',
            //   transform: 'translate(-50%, -50%)',
            //   backgroundImage: `
            //   linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
            //   linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
            // `,
            // backgroundSize: '40px 40px',
            // backgroundPosition: '0 0, 0 0',
            //   backgroundRepeat: 'repeat',
      
            //   zIndex: -1,
            top: '70%',
            left: '40%',
            width: '60rem',
            height: '60rem',
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
          {/* Centered Image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
            <img
              src={steps[delayedStepIdx].image}
              alt={steps[delayedStepIdx].title}
              className="w-[320px] h-[640px] object-contain rounded-3xl shadow-2xl transition-all duration-700"
              style={{ boxShadow: '0 8px 40px 0 rgba(0,0,0,0.4)' }}
            />
          </div>
          {/* Step Content - Timeline scroll from bottom to top, alternating left/right */}
          {steps.map((step, idx) => {
            const stepScrollSpan = 2; // Try 2 or 2.5 for slower transitions
            const stepProgress = (adjustedProgress - idx) / stepScrollSpan + 0.5;
            if (stepProgress < 0 || stepProgress > 1) return null; // Only show steps in transition
            const isLeft = idx % 2 === 0;

            // Animate from bottom (stepProgress = 0) to center (0.5), then to top (1)
            let translateY = 0;
            let blur = 0;
            let opacity = 1;
            if (stepProgress < 0.5) {
              // From bottom to center (more dramatic)
              translateY = (1 - stepProgress * 2) * 600;
              blur = 2* (1 - stepProgress * 2); // 16px to 0px
              opacity = 0.5 + 0.5 * stepProgress * 2; // Fade in from 0.5 to 1
            } else {
              // From center to top (more dramatic)
              translateY = -(stepProgress - 0.5) * 2 * 600;
              blur = 5 * ((stepProgress - 0.5) * 2); // 0px to 16px
              opacity = 1 - (stepProgress - 0.5) * 2 * 0.5; // Fade out to 0.5
            }

            return (
              <div
                key={idx}
                className={`absolute top-1/2 w-[40vw] max-w-md -translate-y-1/2
                  ${isLeft ? 'left-0 items-start' : 'right-0 items-start'}
                  flex flex-col justify-center transition-all duration-700`}
                style={{
                  opacity,
                  transform: `translateY(${translateY}px) ${isLeft ? 'translateX(-60px)' : 'translateX(60px)'}`,
                  filter: `blur(${blur}px)`,
                  pointerEvents: opacity > 0.5 ? 'auto' : 'none',
                  zIndex: 20,
                  textAlign: 'left',
                }}
              >
                <div className="bg-black/80 p-10 rounded-2xl">
                  <h3 className="text-3xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-lg max-w-md">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>


           {/* Mobile: Simple vertical steps */}
           <div className="flex flex-col gap-12 px-4 py-8 md:hidden">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={step.image}
              alt={step.title}
              className="w-[220px] h-auto rounded-2xl shadow-lg mb-4"
            />
            <div className="bg-black/80 p-6 rounded-2xl w-full max-w-xs text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300 text-base">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks; 
