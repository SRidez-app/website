import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Updates', href: '/updates' },
    { label: 'Support', href: '/support' },
  ];

  const navStyle = {
    backgroundImage: 'linear-gradient(90deg,rgba(86, 40, 40, 0.38) 12%, #f7f7f761 58%)',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-4 py-3">
      <div className="max-w-2xl mx-auto">
        <nav 
          className="flex items-center justify-between rounded-full px-6"
          style={navStyle}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-4 py-2">
              <div className="w-[40px] h-[40px] rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src={logo} 
                  alt="Supify Logo" 
                  className="w-full h-full object-cover p-2"
                  style={{ minWidth: '100px', minHeight: '100px' }}
                />
              </div>
              <span className="text-white text-2xl font-semibold">Supify</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-white/90 hover:text-white text-base font-medium transition-colors py-4"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Join Now Button */}
            <Link
              to="/join"
              className="bg-white text-black text-base font-medium px-6 h-10 rounded-full hover:bg-white/90 transition-all flex items-center"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
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
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 