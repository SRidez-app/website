import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoFooter.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    // { label: 'Home', href: '/' }, // This was commented out in your original
    { label: 'About us', href: '/about-us' },
    // { label: 'Login', href: '/login' },
    { label: 'How it works', href: '/how-it-works' },
  ];

  const navStyle = {
    // You might want to consider making this a Tailwind class if you're using Tailwind extensively
    backgroundImage: 'linear-gradient(90deg,rgba(86, 40, 40, 0.38) 0%, #f7f7f761 0%)',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
  };

  return (
    // Increase z-index significantly to ensure it's on top
    // Also, ensure the header is truly `fixed` relative to the viewport.
    <header className="fixed top-0 left-0 right-0 z-[9999] px-4 py-3"> {/* Increased z-index */}
     <div className="max-w-md mx-auto"> {/* Keep max-width here if desired, but ensure it doesn't limit overall header interaction   <div className="max-w-2xl mx-auto"> */}
        {/* <nav
          className="flex items-center justify-between rounded-full px-6"
          style={navStyle}
        >*/}
<nav
  className="flex items-center justify-start gap-8 rounded-full px-6"
  style={navStyle}
>
  
          {/* Logo */}
          <div className="flex items-center translate-y-[-2px]">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center ">
                <img
                  src={logo}
                  alt="Seat Ridez Logo"
                  className="w-auto h-full object-contain"
                />
              </div>
              <span className="text-black text-xl font-bold">
                Seat Ridez
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {/* <div className="hidden md:flex items-center gap-8"> BIGGER GAP*/}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-black hover:text-black text-base font-medium transition-colors py-4"
              >
                {item.label}
              </Link>
            ))}

            {/* Join Now Button */}
            {/* <Link
              to="/signup"
              className="bg-white text-black text-base font-medium px-6 h-10 rounded-full hover:bg-white/90 transition-all flex items-center"
            >
              Join Now
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white" // text-white here seems inconsistent with text-black on desktop links
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden absolute left-4 right-4 top-full mt-2 p-4 rounded-2xl border border-white/10"
            style={navStyle}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block py-2 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-lg text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* Add Join Now button to mobile menu too if desired */}
            {/* <Link
              to="/signup"
              className="block py-2 px-4 mt-2 bg-white text-black text-base font-medium rounded-lg text-center hover:bg-white/90 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Now
            </Link> */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;