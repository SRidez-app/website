// import React, { useEffect, useRef, useState } from 'react';

// const TestimonialCard = ({ name, company, content }) => {
//   return (
//     <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[2px] rounded-[20px] p-4 transition-all duration-500 hover:bg-[rgba(255,255,255,0.05)] border border-white/10 shadow-lg shadow-black/30">
//       <div className="flex mb-3">
//         {[...Array(5)].map((_, i) => (
//           <svg key={i} className="w-4 h-4 text-[#00BFFF]" fill="currentColor" viewBox="0 0 20 20">
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//           </svg>
//         ))}
//       </div>
//       <p className="text-white text-sm leading-relaxed mb-4">{content}</p>
//       <div className="flex items-center">
//         <div className="w-8 h-8 rounded-full overflow-hidden bg-[rgba(255,255,255,0.1)]">
//           <img
//             src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`}
//             alt={name}
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="ml-2">
//           <h4 className="text-white font-medium text-xs">{name}</h4>
//           <p className="text-[#999999] text-xs">{company}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const testimonials = [
//   { name: "Rachel Adams", company: "DesignHive", content: "The Webflow Community Discord Server is my go-to place for feedback and collaboration. The support from other designers and developers is phenomenal." },
//   { name: "Sarah Mitchell", company: "PixelCraft", content: "Joining the Webflow Community Discord Server was the best decision I made this year. The exclusive content and early feature access have significantly improved my workflow." },
//   { name: "Emily Turner", company: "CodeWave", content: "The amount of knowledge and assistance available in this community is incredible. I've learned so much from the experts and fellow members on the Webflow Discord." },
//   { name: "Laura Evans", company: "PixelPerfect", content: "The networking opportunities on the Webflow Discord Server are fantastic. I've connected with so many talented individuals and found new project collaborations." },
//   { name: "Mark Thompson", company: "CreativeWorks", content: "Being part of the Webflow Community Discord has provided me with direct access to the Webflow team for feedback and feature requests. It's amazing to have a voice in the platform's development." },
//   { name: "Olivia Brown", company: "WebGenius", content: "I love how active and helpful everyone is. The Discord server is a must for any Webflow user!" },
//   { name: "James Lee", company: "FlowMasters", content: "The best place to get real-time advice and feedback on your projects. Highly recommended!" },
//   { name: "Sophia Green", company: "PixelNest", content: "I've made so many friends and collaborators through this community. It's a game changer." },
//   { name: "Liam White", company: "DesignForge", content: "The resources and support here are unmatched. My skills have grown so much thanks to this group." },
//   { name: "Ava Black", company: "CreativePulse", content: "A welcoming space for both beginners and pros. The feedback and encouragement are amazing." },
//   { name: "Noah Gray", company: "WebflowPros", content: "I always find inspiration and solutions here. The community is top-notch!" },
//   { name: "Mia Blue", company: "DesignSprint", content: "The events and workshops organized by the community are super helpful and fun." },
//   { name: "Sophia Green", company: "PixelNest", content: "I've made so many friends and collaborators through this community. It's a game changer." },
//   { name: "Liam White", company: "DesignForge", content: "The resources and support here are unmatched. My skills have grown so much thanks to this group." },
//   { name: "Ava Black", company: "CreativePulse", content: "A welcoming space for both beginners and pros. The feedback and encouragement are amazing." },
//   { name: "Noah Gray", company: "WebflowPros", content: "I always find inspiration and solutions here. The community is top-notch!" },
//   { name: "Mia Blue", company: "DesignSprint", content: "The events and workshops organized by the community are super helpful and fun." },
//   { name: "Rachel Adams", company: "DesignHive", content: "The Webflow Community Discord Server is my go-to place for feedback and collaboration. The support from other designers and developers is phenomenal." },
//   { name: "Sarah Mitchell", company: "PixelCraft", content: "Joining the Webflow Community Discord Server was the best decision I made this year. The exclusive content and early feature access have significantly improved my workflow." },
//   { name: "Emily Turner", company: "CodeWave", content: "The amount of knowledge and assistance available in this community is incredible. I've learned so much from the experts and fellow members on the Webflow Discord." },
//   { name: "Laura Evans", company: "PixelPerfect", content: "The networking opportunities on the Webflow Discord Server are fantastic. I've connected with so many talented individuals and found new project collaborations." },
//   { name: "Mark Thompson", company: "CreativeWorks", content: "Being part of the Webflow Community Discord has provided me with direct access to the Webflow team for feedback and feature requests. It's amazing to have a voice in the platform's development." },
//   { name: "Olivia Brown", company: "WebGenius", content: "I love how active and helpful everyone is. The Discord server is a must for any Webflow user!" },
//   { name: "James Lee", company: "FlowMasters", content: "The best place to get real-time advice and feedback on your projects. Highly recommended!" },
//   { name: "Sophia Green", company: "PixelNest", content: "I've made so many friends and collaborators through this community. It's a game changer." },
//   { name: "Liam White", company: "DesignForge", content: "The resources and support here are unmatched. My skills have grown so much thanks to this group." },
//   { name: "Ava Black", company: "CreativePulse", content: "A welcoming space for both beginners and pros. The feedback and encouragement are amazing." },
//   { name: "Noah Gray", company: "WebflowPros", content: "I always find inspiration and solutions here. The community is top-notch!" },
//   { name: "Mia Blue", company: "DesignSprint", content: "The events and workshops organized by the community are super helpful and fun." },
//   { name: "Sophia Green", company: "PixelNest", content: "I've made so many friends and collaborators through this community. It's a game changer." },
//   { name: "Liam White", company: "DesignForge", content: "The resources and support here are unmatched. My skills have grown so much thanks to this group." },
//   { name: "Ava Black", company: "CreativePulse", content: "A welcoming space for both beginners and pros. The feedback and encouragement are amazing." },

// ];



// const Testimonials = () => {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       {
//         threshold: 0.2 // Start animation when 20% of the section is visible
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-x-hidden overflow-hidden min-h-screen lg:min-h-[800px]"
//       style={{
//         background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,71,102,0.9) 70%, rgba(0,0,0,1) 100%)'
//       }}
//     >
//       {/* Background grid pattern */}
//       <div className="absolute inset-0" style={{
//         backgroundImage: `
//           linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1.5px),
//           linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1.5px)
//         `,
//         backgroundSize: '40px 40px'
//       }} />

//       {/* Top fade shadow */}
//       <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/90 to-transparent z-20 pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 relative z-30 h-full flex flex-col lg:flex-row items-center lg:items-stretch w-full gap-x-12 py-16">
//         {/* Left side - Heading and text */}
//         <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/3 py-10 lg:py-0">
//           <div>
//             <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-white mb-3 leading-tight text-center lg:text-left">
//               Customer testimonials
//             </h2>
//             <p className="text-[#999999] text-sm sm:text-base max-w-md mx-auto lg:mx-0 mb-4 text-center lg:text-left">
//               Discover what our community members have to say about their experience.
//             </p>
//             <button className="px-4 py-1.5 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all text-sm inline-block mx-auto lg:mx-0">
//               Try it yourself
//             </button>
//           </div>
//         </div>

//         {/* Right side - Reviews grid */}
//         <div className="w-full lg:w-2/3 flex flex-col">
//         <div 
//   className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[400px] lg:h-[600px] overflow-y-auto pr-2 mt-6 lg:mt-0 no-scrollbar"
//   style={{
//     willChange: 'auto',
//     transition: 'none'
//   }}
// >
//   {testimonials.map((testimonial, index) => (
//     <TestimonialCard key={index} {...testimonial} />
//   ))}
// </div>
//         </div>
//       </div>

//       {/* Bottom fade shadow */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/90 to-transparent z-20 pointer-events-none" />
//     </section>
//   );
// };

// export default Testimonials;











import React, { useEffect, useRef, useState } from 'react';

const TestimonialCard = ({ name, company, content }) => {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[2px] rounded-[20px] p-4 transition-all duration-500 hover:bg-[rgba(255,255,255,0.05)] border border-white/10 shadow-lg shadow-black/30 h-full">
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-[#00BFFF]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-white text-sm leading-relaxed mb-4 line-clamp-4">{content}</p>
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full overflow-hidden bg-[rgba(255,255,255,0.1)]">
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-2">
          <h4 className="text-white font-medium text-xs">{name}</h4>
          <p className="text-[#999999] text-xs">{company}</p>
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
  { name: "Sophia Green", company: "PixelNest", content: "I've made so many friends and collaborators through this community. It's a game changer." },
  { name: "Liam White", company: "DesignForge", content: "The resources and support here are unmatched. My skills have grown so much thanks to this group." },
  { name: "Ava Black", company: "CreativePulse", content: "A welcoming space for both beginners and pros. The feedback and encouragement are amazing." },
  { name: "Noah Gray", company: "WebflowPros", content: "I always find inspiration and solutions here. The community is top-notch!" },
  { name: "Mia Blue", company: "DesignSprint", content: "The events and workshops organized by the community are super helpful and fun." },
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
  { name: "Sophia Green", company: "PixelNest", content: "I've made so many friends and collaborators through this community. It's a game changer." },
  { name: "Liam White", company: "DesignForge", content: "The resources and support here are unmatched. My skills have grown so much thanks to this group." },
  { name: "Ava Black", company: "CreativePulse", content: "A welcoming space for both beginners and pros. The feedback and encouragement are amazing." },

];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-[600px] lg:min-h-[800px]"
      style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,71,102,0.9) 70%, rgba(0,0,0,1) 100%)'
      }}
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1.5px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1.5px)
        `,
        backgroundSize: '40px 40px'
      }} />

      {/* Top fade shadow */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/90 to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-30 h-full flex flex-col lg:flex-row items-center lg:items-stretch w-full gap-x-12 py-16">
        {/* Left side - Heading and text */}
        <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/3 py-10 lg:py-0">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-white mb-3 leading-tight text-center lg:text-left">
              Customer testimonials
            </h2>
            <p className="text-[#999999] text-sm sm:text-base max-w-md mx-auto lg:mx-0 mb-4 text-center lg:text-left">
              Discover what our community members have to say about their experience.
            </p>
         <div className="flex justify-center lg:justify-start">
         <button className="px-4 py-1.5 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all text-sm">
    Try it yourself
          </button>
        </div>

          </div>
        </div>

        {/* Right side - Reviews grid */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[400px] lg:h-[600px] overflow-y-auto pr-2 mt-6 lg:mt-0 custom-scrollbar"
            style={{
              willChange: 'auto',
              transition: 'none'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/90 to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Testimonials;

// Add this to your global CSS
/*
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
*/ 


