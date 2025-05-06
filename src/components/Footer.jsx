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
import playstore from '../assets/playstore.png';
import footerLogo from '../assets/footerlogo.png';
import Qrcode from '../assets/Qrcode.png';


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
         <div className="py-24 px-4 bg-black rounded-2xl">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            {/* Text Content */}
            
        {/* <div className="w-full flex flex-col md:flex-row items-center justify-center py-12 bg-black"> */}
  
            <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center px-8 py-8 max-w-3xl w-full">
          {/* Left: Headline */}
          <div className="flex-1 text-left mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
              Travel farther,<br />pay less.<br />Scan to ride!
            </h2>
            <ol className="text-black text-sm list-decimal pl-5">
              <li>Download the Seat Ridez app using the QR code</li>
              <li>Create your account</li>
              <li>Post or Find a ride : Plan your trip itinerary.</li>
              <li>Travel Together: Save money and enjoy the journey</li>
            </ol>
          </div>
          {/* Right: QR code */}
          <div className="flex flex-col items-center justify-center ml-0 md:ml-8">
            <img src={Qrcode} alt="QR Code" className="w-24 h-24 mb-4" />
            {/* You can replace with your actual QR code image */}
          </div>
        </div> 
     
            
            {/* Button */}
            <div className="lg:mt-8">
            <div className="flex flex-col items-center ml-0 md:ml-8 mt-8 md:mt-0">
          <button className="mb-4 px-6 py-2 bg-white text-black rounded-full font-semibold shadow hover:bg-gray-100 transition">
            Get Started for Free
          </button>
          <div className="flex gap-2">
            <img src={playstore} alt="App Store" className="h-12" />
          </div>
        </div>
            </div>

            {/* </div> */}
          </div>
        </div>





      
        {/* App Store Buttons & CTA */}
     
    
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
          {/* Logo and Newsletter - Left Side */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={footerLogo} alt="Supply Logo" className="w-50" />
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
                    className="text-white/60 hover:text-white transition-colors text-base"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sitemap - Separate Column */}
          <div>
            <h4 className="text-base text-lg md:text-lg font-medium mb-6 uppercase tracking-wide">
            Terms and Condtions 
            </h4>
            <ul className="space-y-3">
              {sitemap.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors text-base"
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
                    className="text-white/60 hover:text-white transition-colors text-base flex items-center gap-2"
                  >
                    <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright and Contact Row */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-white/60 text-xs gap-4">
          {/* Left: Copyright */}
          <div className="text-left text-lg w-full md:w-auto">© 2024 Supply. All rights reserved.</div>
          {/* Right: Contact and Socials */}
          <div className="flex flex-col md:flex-row items-center w-full md:w-auto justify-end gap-2 md:gap-6">
            <div className="font-semibold text-black md:text-white text-lg md:text-lg mb-1 md:mb-0">Contact us</div>
            <div className="text-white text-lg mb-1 md:mb-0">Email : <a href="mailto:support@seatridez.com" className="underline hover:text-blue-400 text-lg">support@seatridez.com</a></div>
            <div className="flex items-center gap-4 text-white text-lg md:text-lg mt-1 md:mt-0">
              <a href="#" aria-label="X" className="hover:text-blue-400"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" aria-label="Facebook" className="hover:text-blue-400"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-blue-400"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
        </div>
      </div>

  
    </footer>
  );
};

export default Footer;
