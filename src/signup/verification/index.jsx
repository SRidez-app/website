import React, { useState, useEffect, useCallback } from 'react';

const IdVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [verified, setVerified] = useState(false);
  const [verificationStarted, setVerificationStarted] = useState(false);

  // Mock user session - replace with actual auth
  const session = { user: { id: 'user_123' } };

  // Mock push token
  const expoPushToken = 'mock_push_token';

  // Function to check verification status
  const checkVerificationStatus = useCallback(async () => {
    if (!session?.user?.id) return false;

    try {
      // Mock verification check - replace with actual API call
      const isVerified = localStorage.getItem('userVerified') === 'true';
      return isVerified;
    } catch (error) {
      console.error('Error checking verification status:', error);
      return false;
    }
  }, [session]);

  // Effect to continuously check verification status
  useEffect(() => {
    if (!verificationStarted) return;

    const interval = setInterval(async () => {
      const isVerified = await checkVerificationStatus();
      if (isVerified) {
        setVerified(true);
        clearInterval(interval);
      }
    }, 5000); // Poll every 5 seconds

    return () => clearInterval(interval);
  }, [verificationStarted, checkVerificationStatus]);

  const handleStartVerification = async () => {
    setIsLoading(true);
    setError(null);
    setVerificationStarted(true);

    try {
      // Collect all stored data
      const aboutYouData = localStorage.getItem('aboutYou');
      const newSignupData = localStorage.getItem('new_signup');
      const signupFormData = localStorage.getItem('signupForm');

      if (!aboutYouData || !newSignupData || !signupFormData || !session?.user?.id) {
        throw new Error('Missing required data. Please start the sign-up again.');
      }

      const globalData = {
        aboutYou: JSON.parse(aboutYouData),
        newSignup: JSON.parse(newSignupData),
        signup: {
          ...JSON.parse(signupFormData),
          userId: session.user.id,
        },
      };

      console.log('Starting verification with data:', globalData);

      // Mock Stripe identity verification
      // In a real app, this would call your backend to start Stripe identity verification
      setTimeout(() => {
        // Simulate opening external verification URL
        const verificationUrl = 'https://verify.stripe.com/start';
        window.open(verificationUrl, '_blank', 'width=800,height=600');
        
        // For demo purposes, simulate verification completion after 10 seconds
        setTimeout(() => {
          localStorage.setItem('userVerified', 'true');
          setVerified(true);
          alert('Verification completed successfully!');
        }, 10000);
        
        setIsLoading(false);
      }, 2000);

    } catch (err) {
      console.error('Verification error:', err);
      setError(err.message || 'Something went wrong during verification.');
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!session?.user?.id) return;

    setIsLoading(true);
    setError(null);

    try {
      // Re-check verification status
      const isVerified = await checkVerificationStatus();
      if (!isVerified) {
        throw new Error('Verification not completed yet. Please complete the ID verification process first.');
      }

      // Mock updating user metadata
      console.log('Updating user with push token:', expoPushToken);
      
      // Save completion status
      localStorage.setItem('signupCompleted', 'true');

      // Simulate navigation delay
      setTimeout(() => {
        alert('Account setup completed! Redirecting to dashboard...');
        // Replace with actual navigation
        // router.push('/dashboard/travel-itinerary');
      }, 1500);

    } catch (err) {
      console.error('Submission error:', err);
      setError(err.message || 'Submission failed');
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
            <span className="gradient-text">I.D. Verification</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto px-4 pb-12">
          {/* Introduction */}
          <div className="text-center mb-12">
            <p className="text-white/80 text-lg leading-relaxed">
              Upload your ID to proceed with account verification.
            </p>
          </div>

          {/* Verification Steps */}
          <div className="space-y-8">
            
            {/* Step 1: Driver License Verification */}
            <div 
              className="backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                boxShadow: '0 25px 80px rgba(59, 130, 246, 0.2)'
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-400 mb-2">Driver License</h3>
                  <p className="text-white/70 text-base leading-relaxed">
                    Tap below to launch secure identity verification powered by Stripe.
                  </p>
                </div>
              </div>

              {/* Verification Status */}
              {verified ? (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/20 border border-green-400/50 mb-6">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-300 font-semibold">Verification Completed Successfully!</span>
                </div>
              ) : verificationStarted ? (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-yellow-500/20 border border-yellow-400/50 mb-6">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-yellow-400 border-t-transparent"></div>
                  <span className="text-yellow-300 font-semibold">Verification in Progress...</span>
                </div>
              ) : null}

              <button
                onClick={handleStartVerification}
                disabled={isLoading || verified}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                  verified
                    ? 'bg-green-600 text-white cursor-not-allowed'
                    : isLoading
                    ? 'bg-gray-600 cursor-not-allowed text-white/60'
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-xl hover:scale-105 transform text-white'
                }`}
              >
                {verified ? (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </>
                ) : isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Starting Verification...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Verify My Identity
                  </>
                )}
              </button>
            </div>

            {/* Error Display */}
            {error && (
              <div className="p-4 rounded-xl bg-red-500/20 border border-red-400/50">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              </div>
            )}

            {/* Submit Section */}
            {verified ? (
              <div 
                className="backdrop-blur-xl rounded-3xl p-8 border border-green-400/30 shadow-2xl"
                style={{
                  background: 'rgba(34, 197, 94, 0.1)',
                  boxShadow: '0 25px 80px rgba(34, 197, 94, 0.2)'
                }}
              >
                <div className="text-center mb-6">
                  <svg className="w-16 h-16 text-green-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-bold text-green-300 mb-2">Ready to Complete Setup</h3>
                  <p className="text-green-200/80">Your identity has been verified successfully!</p>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 ${
                    isLoading
                      ? 'bg-gray-600 cursor-not-allowed text-white/60'
                      : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-xl hover:scale-105 transform text-white'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent mr-2"></div>
                      Completing Setup...
                    </div>
                  ) : (
                    'Submit Driver\'s License'
                  )}
                </button>
              </div>
            ) : (
              <div 
                className="backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl text-center"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  boxShadow: '0 25px 80px rgba(59, 130, 246, 0.2)'
                }}
              >
                <div className="text-white/60 mb-4">
                  <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <p className="text-white/70 text-base">
                  Please complete the identity verification process first.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && !verificationStarted && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div 
            className="backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl text-center"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0 25px 80px rgba(59, 130, 246, 0.3)'
            }}
          >
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-400 border-t-transparent mx-auto mb-4"></div>
            <p className="text-white text-lg font-semibold">Starting verification process...</p>
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

export default IdVerification;