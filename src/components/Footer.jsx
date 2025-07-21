import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const columnOne = [
    { name: 'What is Seat Ridez? ', href: '/about-us' },
    { name: 'Why Choose Us? ', href: '/about-us' },
    { name: 'How It Works ', href: '/how-it-works' },
    { name: 'Our Story', href: '/about-us' },
  ];

  const sitemap = [
    { name: 'Accounts & Payments ', href: '/TermsAndConditions#section2' }, 
    { name: 'Safety & Security ', href: '/TermsAndConditions#section5' },
    { name: 'Legal & Compliance ', href: '/TermsAndConditions#section7' }, 
    { name: 'Privacy & User Conduct ', href: '/TermsAndConditions#section9' }, 
  ];

  const socialLinks = [
    { name: 'Data Collection & Use', href: '/PrivacyPolicy#section1' },
    { name: 'Your Privacy Rights', href: '/PrivacyPolicy#section4' },
    { name: 'Security & Retention', href: '/PrivacyPolicy#section5' },
    { name: 'Policy & Compliance', href: '/PrivacyPolicy#section10' },
  ];

  const finalSocials = [
    { 
      name: 'X', 
      href: 'https://x.com/SeatRidez', 
      icon: faTwitter 
    },
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/profile.php?id=61572004978150', 
      icon: faFacebookF 
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/seatridez/', 
      icon: faInstagram 
    },
  ];

  // Newsletter subscription handler
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      // Option 1: Send to your own backend API
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Successfully subscribed to newsletter!');
        setEmail(''); // Clear the input
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      // For now, we'll simulate success since you don't have backend set up yet
      console.log('Newsletter signup for:', email);
      setMessage('Thanks for subscribing! We\'ll be in touch soon.');
      setEmail(''); // Clear the input
    } finally {
      setIsLoading(false);
      // Clear message after 3 seconds
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <footer className="relative pt-24 pb-90 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-transparent">
      
      {/* Floating elements (simplified) */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/5 backdrop-blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            animation: `float ${Math.random() * 3 + 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.05)'
          }}
        />
      ))}

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Main Content */}
      <div className="container mx-auto py+25 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* CTA Section */}
        {/* <div className="py-16 px-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl mb-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
              <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center px-8 py-8 max-w-3xl w-full"> */}
                {/* Left: Headline */}
                {/* <div className="flex-1 text-left mb-6 md:mb-0">
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
                    Travel farther,<br />pay less.<br /><span className="gradient-text-dark">Scan to ride!</span>
                  </h2>
                  <ol className="text-gray-800 text-sm list-decimal pl-5">
                    <li>Download the Seat Ridez app using the QR code</li>
                    <li>Create your account</li>
                    <li>Post or Find a ride: Plan your trip itinerary.</li>
                    <li>Travel Together: Save money and enjoy the journey</li>
                  </ol>
                </div> */}
                {/* Right: QR code */}
                {/* <div className="flex flex-col items-center justify-center ml-0 md:ml-8">
                  <img src={Qrcode} alt="QR Code" className="w-28 h-28 mb-4" />
                </div>
              </div> */}

              {/* Button and App Store Icons */}
              {/* <div className="flex flex-col items-center ml-0 md:ml-8 mt-8 md:mt-0">
                <button className="btn-primary group w-full sm:w-auto px-12 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform mb-6">
                  <span className="relative z-10">Get Started for Free</span>
                </button>
                <div className="flex gap-4 flex-wrap justify-center">
                  <img src={appstore} alt="Apple App Store" className="h-75 w-auto object-contain" />
        
                </div> */}
              {/* </div>
            </div>
          </div>
        </div> */}
        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
          
          {/* Logo and Newsletter - Left Side */}
          <div className="lg:col-span-2">
            <div className="flex flex-col items-start gap-3 mb-6">
              <h2 className="text-3xl font-bold text-white gradient-text">Seat Ridez</h2>
            </div>
            <p className="text-white/70 mb-6 max-w-md text-sm">
              Join our newsletter to stay up to date on features and releases.
            </p>
            
            {/* Newsletter Signup Form */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  className="bg-white/10 border border-white/20 text-white placeholder-white/60 px-4 py-2 rounded-full focus:outline-none w-full sm:max-w-[200px] text-sm focus:border-blue-400 transition-colors"
                  required
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className={`px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium hover:shadow-md transition-all duration-300 ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
                  }`}
                >
                  {isLoading ? 'Subscribing...' : 'Get Started'}
                </button>
              </div>
              
              {/* Success/Error Message */}
              {message && (
                <p className={`text-sm ${
                  message.includes('Successfully') || message.includes('Thanks') 
                    ? 'text-green-400' 
                    : 'text-red-400'
                }`}>
                  {message}
                </p>
              )}
            </form>
          </div>

          {/* Column One: About Us */}
          <div>
            <h4 className="text-lg font-medium mb-6 uppercase tracking-wide text-blue-300">
              About Us
            </h4>
            <ul className="space-y-3">
              {columnOne.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-blue-400 transition-colors text-base"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sitemap: Terms and Conditions */}
          <div>
            <h4 className="text-lg font-medium mb-6 uppercase tracking-wide text-blue-300">
              Terms and Conditions
            </h4>
            <ul className="space-y-3">
              {sitemap.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-blue-400 transition-colors text-base"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Privacy Policy Section */}
          <div>
            <h4 className="text-lg font-medium mb-6 uppercase tracking-wide text-blue-300">
              Privacy Policy
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-blue-400 transition-colors text-base"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright and Contact Row */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-white/60 text-sm gap-4">
          {/* Left: Copyright */}
          <div className="text-center md:text-left w-full md:w-auto">
            © 2025 Seat Ridez. All rights reserved.
          </div>
          {/* Right: Contact and Socials */}
          <div className="flex flex-col md:flex-row items-center w-full md:w-auto justify-end gap-2 md:gap-6">
            <div className="font-semibold text-white text-base mb-1 md:mb-0">Contact us</div>
            <div className="text-white text-base mb-1 md:mb-0">
              Email : <a href="mailto:support@seatridez.com" className="underline hover:text-blue-400 text-base">support@seatridez.com</a>
            </div>
            <div className="flex items-center gap-4 text-white text-lg mt-1 md:mt-0">
              {finalSocials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  aria-label={social.name} 
                  className="hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease-in-out infinite alternate;
        }

        .gradient-text-dark {
          background: linear-gradient(135deg, #1a56db 0%, #0891b2 50%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
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
            transform: translateY(-15px) rotate(180deg);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;