// Production-ready Footer.jsx with newsletter functionality and toast notifications
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logoFooter.png';
import { Link } from "react-router-dom";

const Footer = () => {
  // Newsletter state
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Toast state
  const [toast, setToast] = useState({
    show: false,
    type: '',
    title: '',
    message: '',
    duration: 5000
  });

  const columnOne = [
    { name: 'What is Seat Ridez? ', href: '/about-us' },
    { name: 'Why Choose Us? ', href: '/about-us' },
    { name: 'How It Works ', href: '/how-it-works' },
    { name: 'Our Story', href: '/about-us' },
  ];

  const sitemap = [
    { name: 'Accounts & Payments ', href: '/TermsAndConditions#accounts-payments' },
    { name: 'Safety & Security ', href: '/TermsAndConditions#safety-security' },
    { name: 'Legal & Compliance ', href: '/TermsAndConditions#legal-compliance' },
    { name: 'Privacy & User Conduct ', href: '/TermsAndConditions#privacy-conduct' },
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
    { name: 'LinkedIn', href: '#', icon: faLinkedinIn },
    { name: 'YouTube', href: '#', icon: faYoutube },
  ];

  // Email validation
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Toast function
  const showToast = (type, title, message, duration = 5000) => {
    setToast({
      show: true,
      type,
      title,
      message,
      duration
    });
  };

  // Auto-hide toast
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast(prev => ({ ...prev, show: false }));
      }, toast.duration);

      return () => clearTimeout(timer);
    }
  }, [toast.show, toast.duration]);

  // Close toast manually
  const closeToast = () => {
    setToast(prev => ({ ...prev, show: false }));
  };

  // Newsletter subscription handler
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !isValidEmail(email)) {
      showToast('error', 'Invalid Email', 'Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 
                      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmb2tsZ3JtYXV5ZW9xZW93ZG52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExMDMyMjcsImV4cCI6MjA0NjY3OTIyN30.iMjKHXdpAmCJ-Xw5mWQa2jV3CXL6RQqOvOkPaVBcJdA';
      
      const response = await fetch('https://qfoklgrmauyeoqeowdnv.supabase.co/functions/v1/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${anonKey}`,
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.message && data.message.includes('already')) {
          showToast('success', 'Already Subscribed!', 'You\'re already part of our community! 🎉');
        } else {
          showToast('success', 'Welcome to Seat Ridez!', 'Thank you for subscribing! Get ready for exciting updates, exclusive deals, and travel tips.');
        }
        
        setEmail('');
      } else {
        if (response.status === 400) {
          showToast('error', 'Invalid Email', 'Please check your email address and try again.');
        } else if (response.status === 401) {
          showToast('error', 'Authentication Error', 'There was an issue with our service. Please contact support.');
        } else if (response.status === 500) {
          showToast('error', 'Server Error', 'Our servers are experiencing issues. Please try again in a few minutes.');
        } else {
          showToast('error', 'Subscription Failed', data.error || 'Something went wrong. Please try again.');
        }
      }
    } catch (error) {
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        showToast('error', 'Network Error', 'Please check your internet connection and try again.');
      } else {
        showToast('error', 'Unexpected Error', 'Something went wrong. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-4 right-4 z-50 max-w-sm w-full animate-toast-slide-in">
          <div className={`rounded-lg shadow-lg border backdrop-blur-md ${
            toast.type === 'success' 
              ? 'bg-green-500/90 border-green-400 text-white' 
              : 'bg-red-500/90 border-red-400 text-white'
          }`}>
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className={`h-5 w-5 rounded-full flex items-center justify-center ${
                    toast.type === 'success' ? 'bg-white/20' : 'bg-white/20'
                  }`}>
                    <span className="text-white text-sm font-bold">
                      {toast.type === 'success' ? '✓' : '!'}
                    </span>
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-semibold">{toast.title}</p>
                  <p className="text-sm opacity-90 mt-1">{toast.message}</p>
                </div>
                <div className="ml-4 flex-shrink-0 flex">
                  <button
                    onClick={closeToast}
                    className="inline-flex text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 transition-colors"
                    aria-label="Close notification"
                  >
                    <span className="text-lg">×</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="h-1 bg-black/20">
              <div 
                className="h-full bg-white/30 animate-toast-progress"
                style={{ animationDuration: `${toast.duration}ms` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      <footer className="relative pt-24 pb-90 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-transparent">
        
        {/* Floating elements */}
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
            
            {/* Logo and Newsletter */}
            <div className="lg:col-span-2">
              <div className="flex flex-col items-start gap-3 mb-6">
                <img src={logo} alt="Seat Ridez Logo" className="w-28" />
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
                    disabled={isLoading}
                    aria-label="Email address"
                  />
                  <button 
                    type="submit"
                    disabled={isLoading || !email}
                    className={`btn-primary-small px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium hover:shadow-md transition-all duration-300 ${
                      isLoading || !email ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
                    }`}
                    aria-label={isLoading ? 'Subscribing to newsletter' : 'Subscribe to newsletter'}
                  >
                    {isLoading ? 'Subscribing...' : 'Get Started'}
                  </button>
                </div>
              </form>
            </div>

            {/* About Us */}
            <div>
              <h4 className="text-lg font-medium mb-6 uppercase tracking-wide text-blue-300">
                About Us
              </h4>
              <ul className="space-y-3">
                {columnOne.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-white/70 hover:text-blue-400 transition-colors text-base"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Terms and Conditions */}
            <div>
              <h4 className="text-lg font-medium mb-6 uppercase tracking-wide text-blue-300">
                Terms and Conditions
              </h4>
              <ul className="space-y-3">
                {sitemap.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-white/70 hover:text-blue-400 transition-colors text-base"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Privacy Policy */}
            <div>
              <h4 className="text-lg font-medium mb-6 uppercase tracking-wide text-blue-300">
                Privacy Policy
              </h4>
              <ul className="space-y-3">
                {socialLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-white/70 hover:text-blue-400 transition-colors text-base"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright and Contact */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-white/60 text-sm gap-4">
            <div className="text-center md:text-left w-full md:w-auto">
              © 2025 Seat Ridez. All rights reserved.
            </div>
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
                    aria-label={`Visit our ${social.name} page`}
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

          @keyframes toast-slide-in {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes toast-progress {
            from {
              width: 100%;
            }
            to {
              width: 0%;
            }
          }

          .animate-toast-slide-in {
            animation: toast-slide-in 0.3s ease-out;
          }

          .animate-toast-progress {
            animation: toast-progress linear;
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;

   