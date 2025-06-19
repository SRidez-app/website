import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../components/newfooter";


const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    optInSMS: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePhoneChange = (e) => {
    const text = e.target.value;
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
    
    setFormData(prev => ({ ...prev, phoneNumber: formatted }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = async () => {
    if (!formData.agreeTerms) {
      alert('You must agree to the Terms & Conditions before signing up.');
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.email || !formData.password || !formData.confirmPassword) {
      alert('Please fill out all fields.');
      return;
    }

    if (!isValidEmail(formData.email)) {
      alert('This email format is invalid.');
      return;
    }

    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    
    try {
    const rawPhone = phoneNumber.replace(/\D/g, '');
    const formattedPhone = `+1${rawPhone}`;

    // Call your sign-up logic (e.g. Supabase)
    // await supabase.auth.signUp({ email, password }); ← Optional if you're using phone as auth

    // Send OTP via SMS instead of email
    const smsSent = await sendOtpToPhone(formattedPhone);

    if (!smsSent) {
      alert('Failed to send OTP. Please verify your phone number.');
      setIsLoading(false);
      return;
    }

    // Save user data in localStorage or context for later use
    localStorage.setItem('new_signup', JSON.stringify({ firstName, lastName, email, phoneNumber }));

    // Navigate to OTP screen with phone number
    window.location.href = `/verify-otp?phone=${encodeURIComponent(formattedPhone)}`;
  } catch (err) {
    console.error('Signup error:', err);
    alert('Something went wrong. Please try again.');
  } finally {
    setIsLoading(false);
  }
};

  const handleGoogleSignIn = () => {
    console.log('Google sign in clicked');
    // Implement Google sign in logic here
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
 <div className="min-h-screen flex flex-col justify-center items-center px-4 py-45  relative overflow-hidden bg-gradient-to-br ...">


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

        {/* Geometric shapes */}
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rounded-full"
          style={{
            animation: 'rotate 20s linear infinite'
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-blue-400/20 rotate-45"
          style={{
            animation: 'rotate 15s linear infinite reverse'
          }}
        />

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

      {/* Sign Up Form Container */}
    <div className="relative z-10 w-full max-w-3xl">

        <div 
          className="backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 80px rgba(59, 130, 246, 0.3)'
          }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome to <span className="gradient-text">Seat Ridez</span>
            </h1>
            <p className="text-white/70 text-base mb-4">
              Your go-to carpooling platform, offering low-cost travel options for in-city commutes and out-of-state journeys.
            </p>
            <h2 className="text-xl font-semibold text-white">Let's Get Started!</h2>
          </div>

          {/* Sign Up Form */}
          <div className="space-y-4">
            {/* Name Fields Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-xl"
                  placeholder="First Name"
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-xl"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-white/80 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-xl"
                placeholder="Phone Number"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-xl"
                placeholder="Email Address"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-xl pr-12"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              <p className="text-xs text-white/60 mt-1">Must be at least 8 characters long</p>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/80 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-xl pr-12"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                >
                  {showConfirmPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="text-xs text-red-400 mt-1">Passwords do not match</p>
              )}
            </div>

            {/* Google Sign In Button */}
            <button
              onClick={handleGoogleSignIn}
              className="w-full py-3 px-4 rounded-xl bg-white/10 backdrop-blur-xl text-white font-medium border border-white/20 hover:bg-white/20 hover:border-blue-400/50 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </button>

            {/* Checkboxes */}
            <div className="space-y-4 mt-6">
              {/* SMS Agreement Checkbox - Required */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="w-5 h-5 mt-0.5 text-blue-500 bg-white/10 border-white/20 rounded focus:ring-blue-400 focus:ring-2"
                />
                <label htmlFor="agreeTerms" className="text-sm text-white/80 leading-relaxed">
                  By creating an account and checking this box, you agree to receive SMS messages with ride confirmations, driver updates, and important account notifications from Seat Ridez. Message and data rates may apply.
                </label>
              </div>

              {/* Optional SMS Marketing */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="optInSMS"
                  name="optInSMS"
                  checked={formData.optInSMS}
                  onChange={handleChange}
                  className="w-5 h-5 mt-0.5 text-blue-500 bg-white/10 border-white/20 rounded focus:ring-blue-400 focus:ring-2"
                />
                <label htmlFor="optInSMS" className="text-sm text-white/80 leading-relaxed">
                  I would like to receive promotional SMS messages and offers from Seat Ridez (optional).
                </label>
              </div>
            </div>

            {/* Terms & Privacy Policy */}
            <div className="text-center mt-6">
              <p className="text-sm text-white/70 leading-relaxed">
                By signing up, you agree to our{' '}
                <a 
                  href="https://seatridez.com/terms-conditions/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Terms
                </a>{' '}
                &{' '}
                <a 
                  href="https://seatridez.com/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* Sign Up Button */}
            <button
              onClick={handleSignUp}
              disabled={!formData.agreeTerms || isLoading}
              className={`w-full py-3 px-4 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform ${
                formData.agreeTerms 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' 
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              } ${isLoading ? 'opacity-50 cursor-not-allowed transform-none' : ''}`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                  Creating Account...
                </div>
              ) : (
                'Sign Up'
              )}
            </button>
          </div>

  {/* Footer Links */}
<div className="flex flex-wrap justify-center gap-4 mt-8 text-sm">
  <a 
    href="https://seatridez.com/faq/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-300 transition-colors"
  >
    Help
  </a>

  <Link 
    to="/TermsAndConditions" 
    className="text-blue-400 hover:text-blue-300 transition-colors"
  >
    Terms of Service
  </Link>

  <Link 
    to="/PrivacyPolicy" 
    className="text-blue-400 hover:text-blue-300 transition-colors"
  >
    Privacy Policy
  </Link>
</div>


          {/* Already a member link */}
          <div className="text-center mt-6">
            <p className="text-white/70 text-sm">
              Already a member?{' '}
            <Link to="/login" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
 Login
</Link>

            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <button className="text-white/60 hover:text-white text-sm transition-colors flex items-center justify-center gap-2 mx-auto">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
        </div>
      </div>

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

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
   
    <Footer/>
      </div>
   
  );
};

export default SignUp;