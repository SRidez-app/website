import React, { useState } from 'react';

const ForgotEmail = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlePhoneChange = (text) => {
    // Remove all non-digit characters
    const cleaned = text.replace(/\D/g, '');
    
    // Limit to 10 digits
    const limited = cleaned.slice(0, 10);
    
    // Format as (xxx) xxx-xxxx
    let formatted = '';
    if (limited.length <= 3) {
      formatted = limited;
    } else if (limited.length <= 6) {
      formatted = `(${limited.slice(0, 3)}) ${limited.slice(3)}`;
    } else {
      formatted = limited.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }
    
    setPhoneNumber(formatted);
  };

  const handleSendOTP = async () => {
    if (!firstName || !lastName || !phoneNumber) {
      alert('Please fill out all fields.');
      return;
    }

    setIsLoading(true);

    try {
      // Mock user lookup - replace with actual API call
      console.log('Looking up user with:', { firstName, lastName, phoneNumber });
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock user lookup logic
      const mockUsers = [
        { first_name: 'John', last_name: 'Doe', phone: '(555) 123-4567', email: 'john.doe@example.com' },
        { first_name: 'Jane', last_name: 'Smith', phone: '(555) 987-6543', email: 'jane.smith@example.com' },
      ];

      const foundUser = mockUsers.find(user => 
        user.first_name.toLowerCase() === firstName.toLowerCase() &&
        user.last_name.toLowerCase() === lastName.toLowerCase() &&
        user.phone === phoneNumber
      );

      if (!foundUser) {
        // Increment failed attempts
        setFailedAttempts(prev => prev + 1);

        if (failedAttempts >= 2) {
          // Show comprehensive help options
          const shouldCreateAccount = confirm(
            "We couldn't find an account with the provided details. Please try the following options:\n\n" +
            "- Email us at support@seatridez.com\n" +
            "- Use the Help link below for more guidance\n" +
            "- Create a new account if needed.\n\n" +
            "Would you like to create a new account?"
          );
          
          if (shouldCreateAccount) {
            // Navigate to signup
            alert('Redirecting to create account...');
            // router.push('/signup');
          } else {
            alert('Please contact support@seatridez.com for assistance.');
          }
        } else {
          alert('No account found with the provided details. Please double-check your information.');
        }
        return;
      }

      const userEmail = foundUser.email;
      
      if (!isValidEmail(userEmail)) {
        alert('Invalid email format found in our records. Please contact support.');
        return;
      }

      // Mock sending OTP
      console.log('Sending OTP to:', userEmail);
      
      alert(`An OTP has been sent to ${userEmail}. Please check your email to verify.`);
      
      // Store email for next step
      localStorage.setItem('recoveryEmail', userEmail);
      
      // Navigate to authentication with email
      setTimeout(() => {
        alert('Redirecting to email verification...');
        // In a real app, you would navigate to the authentication page
        // router.push(`/authenticate-email?email=${userEmail}&source=forgot_password`);
      }, 1500);

    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Generate floating elements for background animation
  const generateFloatingElements = () => {
    const elements = [];
    for (let i = 0; i < 12; i++) {
      elements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 4,
      });
    }
    return elements;
  };

  const floatingElements = generateFloatingElements();

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
            `,
            animation: 'gradient-shift 8s ease-in-out infinite alternate'
          }}
        />

        {/* Floating elements */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full bg-white/20 backdrop-blur-sm"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              animation: `float ${element.duration}s ease-in-out infinite`,
              animationDelay: `${element.delay}s`,
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
            }}
          />
        ))}

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <div className="text-center pt-8 pb-6 px-4">
          <button className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 mx-auto mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="gradient-text">Recover Account</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="max-w-md mx-auto px-4 pb-12">
          {/* Introduction */}
          <div className="text-center mb-8">
            <p className="text-white/80 text-base leading-relaxed">
              Enter your details to find your account. If we find a match, we'll email you a one-time password (OTP) for verification.
            </p>
          </div>

          {/* Recovery Form */}
          <div 
            className="backdrop-blur-xl rounded-3xl p-8 border border-blue-400/30 shadow-2xl mb-8"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              boxShadow: '0 25px 80px rgba(59, 130, 246, 0.2)'
            }}
          >
            <div className="space-y-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-xl"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-xl"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-xl"
                />
              </div>
            </div>
          </div>

          {/* Back to Login Link */}
          <div className="text-center mb-6">
            <button className="text-white/80 hover:text-blue-400 transition-colors text-base font-medium">
              Back to login?
            </button>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSendOTP}
            disabled={isLoading || !firstName || !lastName || !phoneNumber}
            className={`w-full py-4 px-6 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 mb-8 ${
              (isLoading || !firstName || !lastName || !phoneNumber)
                ? 'bg-gray-600 cursor-not-allowed text-white/60'
                : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-xl hover:scale-105 transform text-white'
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent mr-2"></div>
                Searching...
              </div>
            ) : (
              'Submit'
            )}
          </button>

          {/* Failed Attempts Warning */}
          {failedAttempts > 0 && (
            <div className="mb-6 p-4 rounded-xl bg-yellow-500/10 border border-yellow-400/30">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-yellow-200 text-sm font-medium">
                    {failedAttempts === 1 ? '1 failed attempt' : `${failedAttempts} failed attempts`}
                  </p>
                  <p className="text-yellow-100/80 text-xs mt-1">
                    Please double-check your information. After 3 failed attempts, additional help options will be provided.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Demo Helper */}
          <div className="mb-8 p-4 rounded-xl bg-blue-500/10 border border-blue-400/30">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-blue-200 text-sm font-medium">Demo Account</p>
                <p className="text-blue-100/80 text-xs mt-1">
                  Try: John Doe, (555) 123-4567 or Jane Smith, (555) 987-6543
                </p>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="border-t border-blue-400/30 pt-6">
            <div className="flex justify-center gap-8 mb-4">
              <a 
                href="https://seatridez.com/faq/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-blue-400 text-sm transition-colors"
              >
                Help
              </a>
              <a 
                href="https://seatridez.com/terms-conditions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-blue-400 text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="https://seatridez.com/privacy-policy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-blue-400 text-sm transition-colors"
              >
                Privacy Policy
              </a>
            </div>
            <div className="h-0.5 bg-blue-400/30 w-full"></div>
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div 
            className="backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl text-center"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0 25px 80px rgba(59, 130, 246, 0.3)'
            }}
          >
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-400 border-t-transparent mx-auto mb-4"></div>
            <p className="text-white text-lg font-semibold">Searching for your account...</p>
          </div>
        </div>
      )}

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
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ForgotEmail;