import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faInstagram, 
  faTwitter, 
  faLinkedinIn, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png';

const Footer = () => {
  const columnOne = [
    { name: 'What is Seat Ridez? ', href: '#' },
    { name: 'Why Choose Us? ', href: '#' },
    { name: 'How It Works ', href: '#' },
    { name: 'Our Story', href: '#' },
  ];

  const sitemap = [
    { name: 'Accounts & Payments ', href: '#' },
    { name: 'Safety & Security ', href: '#' },
    { name: 'Legal & Compliance ', href: '#' },
    { name: 'Privacy & User Conduct ', href: '#' },
   
  ];

  const socialLinks= [
    { name: 'Data Collection & Use  ', href: '#' },
    { name: 'Your Privacy Rights  ', href: '#' },
    { name: 'Security & Retention  ', href: '#' },
    { name: 'Policy & Compliance  ', href: '#' },
   
  ];

  // const socialLinks = [
  //   { name: 'Facebook', href: '#', icon: faFacebookF },
  //   { name: 'Instagram', href: '#', icon: faInstagram },
  //   { name: 'X', href: '#', icon: faTwitter },
  //   { name: 'LinkedIn', href: '#', icon: faLinkedinIn },
  //   { name: 'YouTube', href: '#', icon: faYoutube },
  // ];

  return (
    <footer className="bg-black text-white relative">
           
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 bg-repeat opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
         {/* CTA Section */}
         <div className="py-24 px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            {/* Text Content */}
            <div className="max-w-[800px]">
              <h3 className="text-4xl leading-[1.1] font-semibold mb-8">
                Join the biggest Webflow{' '}
                <span className="inline-flex items-center">
                  <img 
                    src="/webflow-icon.svg" 
                    alt="Webflow" 
                    className="w-12 h-12 mx-2 -mt-2"
                  />
                </span>
                <br />
                Community on Discord{' '}
                <span className="inline-flex items-center">
                  <img 
                    src="/discord-icon.svg" 
                    alt="Discord" 
                    className="w-12 h-12 mx-2 -mt-2"
                  />
                </span>
                <br />
                for free.
              </h3>
              <p className="text-lg text-white/70 max-w-2xl">
                Join the largest Webflow community on Discord completely free of charge. Connect with a diverse group of Webflow enthusiasts, gain insights, and collaborate on exciting projects. It's the perfect place to expand your network and enhance your skills at no cost!
              </p>
            </div>
            
            {/* Button */}
            <div className="lg:mt-8">
              <a href="/join" className="inline-flex items-center justify-center bg-white text-black px-8 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors text-lg">
                Get Started for Free
              </a>
            </div>
          </div>
        </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Newsletter - Left Side */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Supply Logo" className="w-6 h-6" />
              <span className="text-lg font-medium">Supply</span>
            </div>
            <p className="text-white/60 mb-6 max-w-md text-sm">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your Email"
                className="bg-transparent border border-white/30 text-white placeholder-white/60 px-4 py-2 rounded-full focus:outline-none w-full sm:max-w-[200px] text-sm"
              />
              <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap">
                Get Started
              </button>
            </div>
          </div>

          {/* Column One */}
          <div>
            <h4 className="text-sm text-lg md:text-lg font-medium mb-6 uppercase tracking-wide">
              About Us
            </h4>
            <ul className="space-y-3">
              {columnOne.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sitemap - Separate Column */}
          <div>
            <h4 className="text-sm text-lg md:text-lg font-medium mb-6 uppercase tracking-wide">
            Terms and Condtions 
            </h4>
            <ul className="space-y-3">
              {sitemap.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us - Separate Column */}
          <div>
            <h4 className="text-sm  text-lg md:text-lg font-medium mb-6 uppercase tracking-wide">
            Privacy Policy 
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 text-white/60 text-xs">
          <p>© 2024 Supply. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;