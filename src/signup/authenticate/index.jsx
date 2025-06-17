import React, { useState, useRef, useEffect } from 'react';

const AuthenticateEmail = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState(Array(6).fill(''));
  const [resendTimer, setResendTimer] = useState(30);
  const [isVerifying, setIsVerifying] = useState(false);
  const inputs = useRef([]);

  // Mock email from URL params or localStorage
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramEmail = urlParams.get('email');
    const source = urlParams.get('source');
    
    if (paramEmail) {
      setEmail(paramEmail);
    } else {
      // Try to get from localStorage
      const storedData = localStorage.getItem('new_signup');
      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData);
          setEmail(parsedData.email || '');
        } catch (error) {
          console.error('Error parsing stored data:', error);
        }
      }
    }
  }, []);

  const fullCode = code.join('');

  // Handle OTP verification
  const handleOtpVerification = async () => {
    if (fullCode.length < 6) {
      alert('Please enter all 6 digits.');
      return;
    }

    setIsVerifying(true);

    try {
      // Mock OTP verification - replace with actual API call
      console.log('Verifying OTP:', fullCode, 'for email:', email);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful verification
      if (fullCode === '123456') {
        // Handle user consent if opted in
        const storedData = localStorage.getItem('new_signup');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          if (parsedData.optInSMS) {
            console.log('Recording user SMS consent');
          }
        }

        // Save verification status
        localStorage.setItem('emailVerified', 'true');
        
        alert('Email verified successfully! Redirecting...');
        
        // Simulate navigation based on source
        setTimeout(() => {
          const urlParams = new URLSearchParams(window.location.search);
          const source = urlParams.get('source');
          
          if (source === 'new_signup') {
            // New user -> continue signup
            // router.push('/signup/contact-info');
            console.log('Redirecting to signup continuation...');
          } else {
            // Existing user -> dashboard
            // router.push('/dashboard');
            console.log('Redirecting to dashboard...');
          }
        }, 1500);
      } else {
        throw new Error('Invalid OTP');
      }

    } catch (error) {
      console.error('OTP Verification Error:', error);
      alert('Invalid OTP or an error occurred. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  // Handle resend OTP
  const resendOtp = async () => {
    if (resendTimer > 0) {
      alert(`Please wait ${resendTimer}s before resending.`);
      return;
    }

    try {
      // Mock resend OTP - replace with actual API call
      console.log('Resending OTP to:', email);
      
      alert('A new OTP has been sent to your email.');
      setResendTimer(30);
      setCode(Array(6).fill(''));
      
      // Focus first input
      if (inputs.current[0]) {
        inputs.current[0].focus();
      }
    } catch (error) {
      console.error('Resend OTP Error:', error);
      alert('Unable to resend the code. Please try again.');
    }
  };

  // Countdown timer
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  // Handle input change
  const handleInputChange = (text, index) => {
    const updatedCode = [...code];
    updatedCode[index] = text;
    setCode(updatedCode);

    // Auto-focus next input
    if (text && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      const updatedCode = [...code];
      if (code[index]) {
        updatedCode[index] = '';
        setCode(updatedCode);
      } else if (index > 0) {
        updatedCode[index - 1] = '';
        setCode(updatedCode);
        inputs.current[index - 1]?.focus();
      }
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
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          
          {/* Logo Section */}
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/20">
              <svg className="w-16 h-16 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold italic text-blue-400 mb-4">Seat Ridez</h1>
            <p className="text-white/80 text-base mb-2">
              Enter 6-digit code from your two-factor authentication APP
            </p>
            <p className="text-white/60 text-sm mb-2">We've sent an email to</p>
            <p className="text-white font-medium text-base">{email}</p>
          </div>

          {/* Verification Form Card */}
          <div 
            className="backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-6"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              boxShadow: '0 25px 80px rgba(59, 130, 246, 0.2)'
            }}
          >
            
            {/* OTP Input Fields */}
            <div className="flex justify-center gap-3 mb-8">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleInputChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-14 text-center text-xl font-bold bg-gray-800/50 border-2 border-blue-400 rounded-xl text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  style={{
                    caretColor: 'transparent'
                  }}
                />
              ))}
            </div>

            {/* Verify Button */}
            <button
              onClick={handleOtpVerification}
              disabled={isVerifying || fullCode.length < 6}
              className={`w-full py-4 px-6 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 mb-6 ${
                (isVerifying || fullCode.length < 6)
                  ? 'bg-gray-600 cursor-not-allowed text-white/60'
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-xl hover:scale-105 transform text-white'
              }`}
            >
              {isVerifying ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent mr-2"></div>
                  Verifying...
                </div>
              ) : (
                'Verify Code'
              )}
            </button>

            {/* Resend Code */}
            <div className="text-center">
              <button
                onClick={resendOtp}
                disabled={resendTimer > 0}
                className={`text-sm transition-colors ${
                  resendTimer > 0 
                    ? 'text-white/40 cursor-not-allowed' 
                    : 'text-white/70 hover:text-blue-400'
                }`}
              >
                {resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Resend Code'}
              </button>
            </div>
          </div>

          {/* Helper Text */}
          <div className="text-center mb-8">
            <p className="text-white/60 text-sm">
              Didn't receive the code? Check your spam folder or try resending.
            </p>
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

          {/* Demo Helper */}
          <div className="mt-6 p-4 rounded-xl bg-yellow-500/10 border border-yellow-400/30">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-yellow-200 text-sm font-medium">Demo Mode</p>
                <p className="text-yellow-100/80 text-xs mt-1">Enter "123456" to simulate successful verification</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {isVerifying && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div 
            className="backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl text-center"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0 25px 80px rgba(59, 130, 246, 0.3)'
            }}
          >
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-400 border-t-transparent mx-auto mb-4"></div>
            <p className="text-white text-lg font-semibold">Verifying your code...</p>
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

export default AuthenticateEmail;