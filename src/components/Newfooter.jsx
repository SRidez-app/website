import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logoFooter.png';
import appstore from '../assets/appstore.png'; // Assuming this path
import playstore from '../assets/star.png'; // Assuming a placeholder for Play Store if not already there
import { Link } from "react-router-dom";
import footerLogo from '../assets/footerlogo.png'; // This might be redundant if 'logo' is already for the footer
import Qrcode from '../assets/Qrcode.png';


const Footer = () => {
  const columnOne = [
    { name: 'What is Seat Ridez? ', href: '#' },
    { name: 'Why Choose Us? ', href: '#' },
    { name: 'How It Works ', href: '#' },
    { name: 'Our Story', href: '#' },
  ];

  const finalSocials = [
    { name: 'X', href: '#', icon: faTwitter },
    { name: 'Facebook', href: '#', icon: faFacebookF },
    { name: 'Instagram', href: '#', icon: faInstagram },
    { name: 'LinkedIn', href: '#', icon: faLinkedinIn },
    { name: 'YouTube', href: '#', icon: faYoutube },
  ];


  return (
    <footer  className="relative pt-24 pb-90 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-transparent"     
    >


      {/* Floating elements (simplified) */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/5 backdrop-blur-sm" // Lighter opacity for footer
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
        className="absolute inset-0 opacity-8" // Adjusted opacity for footer
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
        
 

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
          {/* Logo and Newsletter - Left Side */}
          <div className="lg:col-span-2">
            <div className="flex flex-col items-start gap-3 mb-6">
              <img src={logo} alt="Seat Ridez Logo" className="w-28" />
              <h2 className="text-3xl font-bold text-white gradient-text">Seat Ridez</h2>
            </div>
            <p className="text-white/70 mb-6 max-w-md text-sm">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your Email"
                className="bg-white/10 border border-white/20 text-white placeholder-white/60 px-4 py-2 rounded-full focus:outline-none w-full sm:max-w-[200px] text-sm focus:border-blue-400 transition-colors"
              />
              <button className="btn-primary-small px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium hover:shadow-md transition-all duration-300">
                Get Started
              </button>
            </div>
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

          {/* Terms and Conditions Column */}
          <div>
            <h4 className="text-lg font-medium mb-6 uppercase tracking-wide text-blue-300">
              Terms and Conditions
            </h4>
            <ul className="space-y-3">
              {/* Terms & Conditions Links */}
              <li><Link to="/TermsAndConditions#accounts-payments" className="text-white/70 hover:text-blue-400 transition-colors text-base">Accounts & Payments</Link></li>
              <li><Link to="/TermsAndConditions#safety-security" className="text-white/70 hover:text-blue-400 transition-colors text-base">Safety & Security</Link></li>
              <li><Link to="/TermsAndConditions#legal-compliance" className="text-white/70 hover:text-blue-400 transition-colors text-base">Legal & Compliance</Link></li>
              <li><Link to="/TermsAndConditions#privacy-conduct" className="text-white/70 hover:text-blue-400 transition-colors text-base">Privacy & User Conduct</Link></li>
            </ul>
          </div>

          {/* Privacy Policy Column */}
          <div>
            <h4 className="text-lg font-medium mb-6 uppercase tracking-wide text-blue-300">
              Privacy Policy
            </h4>
            <ul className="space-y-3">
              {/* Privacy Policy Links */}
              <li><Link to="/PrivacyPolicy#data-collection" className="text-white/70 hover:text-blue-400 transition-colors text-base">Data Collection & Use</Link></li>
              <li><Link to="/PrivacyPolicy#privacy-rights" className="text-white/70 hover:text-blue-400 transition-colors text-base">Your Privacy Rights</Link></li>
              <li><Link to="/PrivacyPolicy#security-retention" className="text-white/70 hover:text-blue-400 transition-colors text-base">Security & Retention</Link></li>
              <li><Link to="/PrivacyPolicy#policy-compliance" className="text-white/70 hover:text-blue-400 transition-colors text-base">Policy & Compliance</Link></li>
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
                <a key={social.name} href={social.href} aria-label={social.name} className="hover:text-blue-400 transition-colors">
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Re-add the styles block from the Hero component for animations and gradients */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease-in-out infinite alternate;
        }

        .gradient-text-dark { /* A variant for text on white background */
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