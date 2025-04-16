import React, { useEffect, useRef } from 'react';

const TestimonialCard = ({ name, company, content }) => {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[2px] rounded-[20px] p-6 md:p-8 transition-all duration-500 hover:bg-[rgba(255,255,255,0.05)]">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-[#00BFFF]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-white text-base md:text-lg mb-6 md:mb-8 leading-relaxed">{content}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-[rgba(255,255,255,0.1)]">
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-3 md:ml-4">
          <h4 className="text-white font-medium text-sm md:text-base">{name}</h4>
          <p className="text-[#999999] text-xs md:text-sm">{company}</p>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  { name: "Rachel Adams", company: "DesignHive", content: "The Webflow Community Discord Server is my go-to place for feedback and collaboration. The support from other designers and developers is phenomenal." },
  { name: "Sarah Mitchell", company: "PixelCraft", content: "Joining the Webflow Community Discord Server was the best decision I made this year. The exclusive content and early feature access have significantly improved my workflow." },
  { name: "Emily Turner", company: "CodeWave", content: "The amount of knowledge and assistance available in this community is incredible. I've learned so much from the experts and fellow members on the Webflow Discord." },
  { name: "Laura Evans", company: "PixelPerfect", content: "The networking opportunities on the Webflow Discord Server are fantastic. I've connected with so many talented individuals and found new project collaborations." },
  { name: "Mark Thompson", company: "CreativeWorks", content: "Being part of the Webflow Community Discord has provided me with direct access to the Webflow team for feedback and feature requests. It's amazing to have a voice in the platform's development." },
  { name: "Olivia Brown", company: "WebGenius", content: "I love how active and helpful everyone is. The Discord server is a must for any Webflow user!" },
  { name: "James Lee", company: "FlowMasters", content: "The best place to get real-time advice and feedback on your projects. Highly recommended!" },
  { name: "Sophia Green", company: "PixelNest", content: "I've made so many friends and collaborators through this community. It's a game changer." },
  { name: "Liam White", company: "DesignForge", content: "The resources and support here are unmatched. My skills have grown so much thanks to this group." },
  { name: "Ava Black", company: "CreativePulse", content: "A welcoming space for both beginners and pros. The feedback and encouragement are amazing." },
  { name: "Noah Gray", company: "WebflowPros", content: "I always find inspiration and solutions here. The community is top-notch!" },
  { name: "Mia Blue", company: "DesignSprint", content: "The events and workshops organized by the community are super helpful and fun." },
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const targetY = useRef(0);
  const currentY = useRef(0);
  const animationFrame = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const grid = gridRef.current;
      if (!section || !grid) return;
      
      const sectionRect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const gridHeight = grid.scrollHeight;
      const sectionHeight = sectionRect.height;
      
      // Only animate when section is in view
      if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
        const scrollProgress = Math.min(
          1,
          Math.max(0, (windowHeight - sectionRect.top) / (sectionHeight + windowHeight))
        );
        
        // Reduce the scroll amount for smoother movement
        const maxTranslate = Math.max(0, gridHeight - 800); // Increased visible area
        targetY.current = -(scrollProgress * maxTranslate * 0.8); // Reduced scroll amount
      }
    };

    const animate = () => {
      const grid = gridRef.current;
      if (!grid) return;
      
      // Slower, smoother lerp
      const ease = 0.05; // Reduced from 0.08 for smoother movement
      currentY.current += (targetY.current - currentY.current) * ease;
      
      // Round to prevent sub-pixel rendering
      const roundedY = Math.round(currentY.current * 100) / 100;
      grid.style.transform = `translateY(${roundedY}px)`;
      
      animationFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll);
    animationFrame.current = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="h-[100vh] md:h-[120vh] relative overflow-hidden bg-gradient-to-b from-black via-[#004766] to-black"
    >
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 max-w-[1400px] mx-auto w-full">
          {/* Left side - Heading and text */}
          <div className="text-center lg:text-left lg:sticky lg:top-1/4">
            <h2 className="text-[40px] md:text-[56px] font-medium text-white mb-4 md:mb-6 leading-tight">
              Customer testimonials
            </h2>
            <p className="text-[#999999] text-lg md:text-xl max-w-md mx-auto lg:mx-0 mb-6 md:mb-8">
              Discover what our community members have to say about their experience.
            </p>
            <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all text-base">
              Try it yourself
            </button>
          </div>

          {/* Right side - Parallax testimonial grid */}
          <div className="relative min-h-[600px]">
            <div
              ref={gridRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 absolute top-0 left-0 w-full"
              style={{ 
                willChange: 'transform',
                transition: 'transform 0.05s linear'
              }}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 