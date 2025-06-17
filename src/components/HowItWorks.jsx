import React, { useRef, useState, useEffect } from 'react';
import step1 from '../assets/p2.png';
import step2 from '../assets/p1.png';
import step3 from '../assets/p3.png';
import step4 from '../assets/p4.png';

const steps = [
  {
    title: 'Seamless Onboarding',
    description: 'Jump right in! After a quick login, effortlessly create your travel plan or explore available rides directly from your personalized Seat Ridez Dashboard. Your journey begins here.',
    image: step1,
  },
  {
    title: 'Tailored Travel Preferences',
    description: 'Customize every detail of your ride. Choose your ideal seat preferences, specify the number of passengers, and set the perfect travel conditions for a truly comfortable and personalized experience.',
    image: step2,
  },
  {
    title: 'Effortless Connection',
    description: 'Whether you\'re offering an empty seat or searching for your next ride, our intuitive interface guides you. Simply enter your desired schedule and destination to connect with your perfect match.',
    image: step3,
  },
  {
    title: 'Instant Ride Matching',
    description: 'Finalize your itinerary with confidence. Set a fair, transparent price, and with a single tap, post your ride to instantly connect with compatible riders. Experience carpooling reimagined, faster than ever!',
    image: step4,
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null); // Refers to the main <section>
  const [currentStep, setCurrentStep] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      setCurrentStep(0); // Reset step for mobile when switching to ensure correct display
      return;
    }

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect(); // Get position relative to viewport
      const windowHeight = window.innerHeight;

      // Calculate the scroll progress *within the sticky animation phase*.
      // The animation starts when the top of the 'sticky-content-wrapper' (inside container)
      // hits `top: 0` in the viewport.
      // The total scroll range for the animation is `(steps.length - 1) * 100vh`.
      // The first 100vh of the parent section is for the header to scroll up and the sticky container to enter.
      // The subsequent (steps.length - 1) * 100vh is for the animation.

      // `rect.top` is the distance from the viewport top to the section's top.
      // When `rect.top` is 0, the section has started, and the sticky part should be pinning.
      // We need to determine how far the user has scrolled *into* the 400vh section.
      const scrollYInContainer = -rect.top; // How much of the container is above the viewport top

      // The animation "active" zone:
      // It starts once the section's header has scrolled past, and the sticky content is at `top: 0`.
      // It ends when the last step has been shown, effectively (steps.length - 1) * 100vh later.
      const animationStartScroll = 0; // The sticky element pins at the top of the viewport
      const animationEndScroll = (steps.length - 1) * windowHeight; // Total scroll for steps to animate

      // Calculate progress within the animation range
      const currentScrollForAnimation = Math.max(0, Math.min(animationEndScroll, scrollYInContainer));
      let scrollProgress = 0;
      if (animationEndScroll > 0) { // Avoid division by zero if only one step or error
        scrollProgress = currentScrollForAnimation / animationEndScroll;
      }

      // Map scroll progress (0 to 1) to step index (0 to steps.length - 1)
      // We multiply by steps.length to get a range from 0 to 4 (for 4 steps),
      // then floor it to get 0, 1, 2, 3.
      const newStepIndex = Math.floor(scrollProgress * steps.length);
      const clampedStepIndex = Math.min(newStepIndex, steps.length - 1); // Ensure index doesn't go out of bounds

      if (clampedStepIndex !== currentStep) {
        setCurrentStep(clampedStepIndex);
      }
    };

    // Attach scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call to set the step correctly if page is loaded mid-scroll or resized
    handleScroll();

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDesktop, currentStep]); // Depend on isDesktop to re-attach/detach listener; currentStep to re-evaluate calculation

  return (
    <section
      ref={containerRef}
      className="relative w-full text-white font-inter"
      style={{
        // On desktop, the total height is calculated to accommodate the scroll animation.
        // It provides the "scroll space" for the sticky element to animate its content.
        height: isDesktop ? `${steps.length * 100}vh` : 'auto',
        minHeight: '100vh', // Ensures content is visible on smaller screens
      }}
    >
      {/* Header - This will scroll away as the main section comes into view. */}
      {/* It's positioned outside the 'sticky' div so it's not pinned. */}
      <div className="relative z-30 text-center pt-16 pb-12">
        <p className="text-sm uppercase tracking-wider mb-2 text-blue-400 font-semibold">
          Effortless Process
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-600">
          Your Journey, Simplified
        </h2>
        <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto font-light">
          Discover how easy it is to find or offer rides with Seat Ridez.
        </p>
      </div>

      {/* Desktop Sticky Scroll Animation Wrapper */}
      {isDesktop && (
        // This div is `sticky`. It will stick to `top: 0` of the viewport
        // as its parent `section` scrolls, providing the "pinned" effect.
        // Its height is `h-screen` (100vh) to fill the viewport when pinned.
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-7xl px-8">

            {/* iPhone Image - This will change based on `currentStep` */}
            <div className="flex justify-center">
              <img
                src={steps[currentStep].image}
                alt={`Step ${currentStep + 1}`}
                className="w-80 h-[640px] object-contain rounded-[3rem] shadow-2xl transition-all duration-700 ease-out"
                style={{
                  boxShadow: '0 25px 100px rgba(59, 130, 246, 0.4)',
                  filter: 'brightness(1.05)',
                }}
              />
            </div>

            {/* Step Cards - These will animate in/out based on `currentStep` */}
            {steps.map((step, index) => {
              const isActive = index === currentStep;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`absolute top-1/2 ${isLeft ? 'left-0' : 'right-0'} w-80 transform -translate-y-1/2 transition-all duration-1000 ease-out`}
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: `translateY(-50%) translateX(${isActive ? '0' : isLeft ? '-100px' : '100px'}) scale(${isActive ? 1 : 0.9})`,
                    zIndex: isActive ? 20 : 10,
                    pointerEvents: isActive ? 'auto' : 'none', // Prevent interaction with hidden cards
                  }}
                >
                  <div
                    className={`glass-card p-8 rounded-2xl ${isLeft ? 'text-right' : 'text-left'}`}
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: isActive ? '1px solid rgba(59, 130, 246, 0.5)' : '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: isActive ? '0 25px 80px rgba(59, 130, 246, 0.3)' : '0 10px 40px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <div className={`inline-flex items-center gap-2 mb-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-blue-300 text-sm font-bold uppercase tracking-wider">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Mobile / Tablet Fallback - Scrolls normally */}
      {!isDesktop && (
        <div className="flex flex-col gap-8 px-4 py-8 relative z-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center glass-card p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:border-blue-400"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-48 h-auto rounded-2xl shadow-lg mb-4"
              />
              <div className="w-full max-w-md text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </div>
                  <span className="text-blue-300 text-sm font-bold">STEP {index + 1}</span>
                </div>
                <h3 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Inlined CSS for glass-card effect */}
      <style jsx>{`
        .glass-card {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background-color: rgba(255, 255, 255, 0.05); /* Fallback */
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;