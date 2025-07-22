import React, { useState, useEffect } from 'react';

const NewsletterPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check if user has seen the popup before OR already subscribed
    const hasSeenPopup = localStorage.getItem('seatridez-newsletter-popup-seen');
    const hasSubscribed = localStorage.getItem('seatridez-newsletter-subscribed');
    
    // Don't show popup if user has seen it before OR already subscribed
    if (!hasSeenPopup && !hasSubscribed) {
      // Show popup after 3 seconds delay for new visitors
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPopup(false);
      setIsClosing(false);
      // Mark that user has seen the popup
      localStorage.setItem('seatridez-newsletter-popup-seen', 'true');
    }, 300);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Enhanced email validation
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate form
  const isFormValid = () => {
    return formData.firstName.trim() && 
           formData.lastName.trim() && 
           formData.email.trim() && 
           isValidEmail(formData.email);
  };

  // Newsletter subscription handler
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    // Enhanced validation
    if (!formData.firstName.trim()) {
      setMessage('Please enter your first name');
      return;
    }
    if (!formData.lastName.trim()) {
      setMessage('Please enter your last name');
      return;
    }
    if (!formData.email.trim() || !isValidEmail(formData.email)) {
      setMessage('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      // Get environment variable for Vite (with fallback)
      const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 
                      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmb2tsZ3JtYXV5ZW9xZW93ZG52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExMDMyMjcsImV4cCI6MjA0NjY3OTIyN30.iMjKHXdpAmCJ-Xw5mWQa2jV3CXL6RQqOvOkPaVBcJdA';
      
      // Call your Supabase Edge Function
      const response = await fetch('https://qfoklgrmauyeoqeowdnv.supabase.co/functions/v1/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${anonKey}`,
        },
        body: JSON.stringify({ 
          email: formData.email.trim(),
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim()
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.message && data.message.includes('already')) {
          setMessage(`Welcome back! You're already subscribed! 🎉`);
        } else {
          setMessage(`Welcome ${formData.firstName}! Successfully subscribed! 🎉`);
          // Mark user as subscribed so popup won't show again
          localStorage.setItem('seatridez-newsletter-subscribed', 'true');
        }
        setFormData({ firstName: '', lastName: '', email: '' }); // Clear the form
        
        // Auto-close popup after successful signup
        setTimeout(() => {
          closePopup();
        }, 2000);
      } else {
        // More specific error handling
        if (response.status === 400) {
          setMessage('Please check your information and try again.');
        } else if (response.status === 401) {
          setMessage('Authentication error. Please contact support.');
        } else if (response.status === 500) {
          setMessage('Server error. Please try again in a few minutes.');
        } else {
          setMessage(data.error || 'Something went wrong. Please try again.');
        }
      }
    } catch (error) {
      // More specific error message for network issues
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        setMessage('Network error. Please check your connection and try again.');
      } else {
        setMessage('Something went wrong. Please try again later.');
      }
    } finally {
      setIsLoading(false);
      // Clear message after 4 seconds
      setTimeout(() => setMessage(''), 4000);
    }
  };

  // Don't render anything if popup shouldn't show
  if (!showPopup) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4 pt-20 sm:pt-4 transition-opacity duration-300 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative overflow-hidden transform transition-all duration-300 ${
          isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
        style={{ marginTop: 'env(safe-area-inset-top, 0px)' }}
      >
        {/* Close button - Black background with white X */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 z-10 bg-black hover:bg-gray-800 rounded-full p-2 transition-colors"
          aria-label="Close popup"
        >
          <span className="text-white text-lg font-bold">×</span>
        </button>

        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Insider Commute Scoop! </h2>
          <p className="text-blue-100 text-sm">
            Stay in the loop with Seat Ridez!
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <p className="text-gray-800 text-sm leading-relaxed">
              Get the latest app updates, new features, safety tips, and exclusive deals delivered straight to your inbox. Plus, be the first to know about beta features and community highlights.
            </p>
          </div>

          {/* Newsletter form with name fields */}
          <form onSubmit={handleNewsletterSubmit} className="space-y-4">
            {/* Name fields row */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-500"
                required
                disabled={isLoading}
                aria-label="First Name"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-500"
                required
                disabled={isLoading}
                aria-label="Last Name"
              />
            </div>

            {/* Email field */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-500"
              required
              disabled={isLoading}
              aria-label="Email Address"
            />

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading || !isFormValid()}
              className={`w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 ${
                isLoading || !isFormValid() ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
              }`}
              aria-label={isLoading ? 'Subscribing to newsletter' : 'Subscribe to newsletter'}
            >
              {isLoading ? 'Subscribing...' : 'Get Started for Free'}
            </button>
            
            {/* Success/Error Message */}
            {message && (
              <div className={`text-sm text-center p-3 rounded-lg ${
                message.includes('Successfully') || message.includes('Welcome') || message.includes('already')
                  ? 'text-green-700 bg-green-50 border border-green-200' 
                  : 'text-red-700 bg-red-50 border border-red-200'
              }`}>
                {message}
              </div>
            )}
          </form>

          {/* Footer */}
          <p className="text-xs text-gray-500 text-center mt-4">
            No spam, unsubscribe at any time. By signing up, you agree to our{' '}
            <a href="/PrivacyPolicy" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;