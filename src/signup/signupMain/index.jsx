import React, { useState } from 'react';

const ContactInfoSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const [formData, setFormData] = useState({
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    emergencyFirstName: '',
    emergencyLastName: '',
    relationship: '',
    emergencyPhone: '',
  });

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (text) => {
    const cleaned = text.replace(/\D/g, '').slice(0, 10);
    
    if (cleaned.length <= 3) {
      setPhoneNumber(cleaned);
    } else if (cleaned.length <= 6) {
      setPhoneNumber(`(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`);
    } else {
      const formatted = cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
      setPhoneNumber(formatted);
    }
  };

  const saveAndContinue = async () => {
    if (
      !formData.streetAddress ||
      !formData.city ||
      !formData.state ||
      !formData.zipCode ||
      !formData.emergencyFirstName ||
      !formData.emergencyLastName ||
      !formData.relationship ||
      !phoneNumber
    ) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsLoading(true);

    const newAddress = {
      street: formData.streetAddress,
      city: formData.city,
      state: formData.state,
      zip: formData.zipCode,
    };

    const newFormData = {
      address: newAddress,
      emergencyFirstName: formData.emergencyFirstName,
      emergencyLastName: formData.emergencyLastName,
      emergencyPhone: phoneNumber,
      relationship: formData.relationship,
    };

    try {
      // Save data to localStorage
      localStorage.setItem('signupForm', JSON.stringify(newFormData));
      console.log('Form data saved:', newFormData);

      // Simulate navigation delay
      setTimeout(() => {
        alert('Information saved successfully! Redirecting...');
        setIsLoading(false);
        // Replace with actual navigation
        // router.push('/signup/about-you');
      }, 1500);
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Failed to save data.');
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

  const addressFields = [
    { 
      icon: (
        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ), 
      placeholder: 'Street Address', 
      name: 'streetAddress',
      type: 'text'
    },
    { 
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ), 
      placeholder: 'City', 
      name: 'city',
      type: 'text'
    },
    { 
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ), 
      placeholder: 'State', 
      name: 'state',
      type: 'text'
    },
    { 
      icon: (
        <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ), 
      placeholder: 'Zip Code', 
      name: 'zipCode',
      type: 'text'
    },
  ];

  const emergencyFields = [
    { 
      icon: (
        <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      ), 
      placeholder: 'First Name', 
      name: 'emergencyFirstName',
      type: 'text'
    },
    { 
      icon: (
        <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      ), 
      placeholder: 'Last Name', 
      name: 'emergencyLastName',
      type: 'text'
    },
    { 
      icon: (
        <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      ), 
      placeholder: 'Relationship', 
      name: 'relationship',
      type: 'text'
    },
  ];

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
            <span className="gradient-text">Contact Information</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto px-4 pb-12">
          {/* Introduction */}
          <div className="text-center mb-8">
            <p className="text-white/80 text-lg leading-relaxed">
              Complete the form to set up your profile.
            </p>
          </div>

          {/* Form Card */}
          <div 
            className="backdrop-blur-xl rounded-3xl p-8 border border-blue-400/30 shadow-2xl space-y-8"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              boxShadow: '0 25px 80px rgba(59, 130, 246, 0.2)'
            }}
          >
            
            {/* Address Section */}
            <div>
              <h2 className="text-xl font-bold text-blue-400 mb-6">Where's home for you?</h2>
              <div className="space-y-4">
                {addressFields.map(({ icon, placeholder, name, type }) => (
                  <div key={name} className="flex items-center gap-3 px-4 py-4 rounded-xl bg-gray-800/50 border border-white/20 transition-all duration-300 hover:bg-gray-800/70 hover:border-blue-400/50">
                    {icon}
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={formData[name]}
                      onChange={(e) => handleInputChange(name, e.target.value)}
                      className="flex-1 bg-transparent text-white placeholder-white/60 outline-none text-base"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact Section */}
            <div>
              <h2 className="text-xl font-bold text-blue-400 mb-6">Emergency Contact</h2>
              <div className="space-y-4">
                {emergencyFields.map(({ icon, placeholder, name, type }) => (
                  <div key={name} className="flex items-center gap-3 px-4 py-4 rounded-xl bg-gray-800/50 border border-white/20 transition-all duration-300 hover:bg-gray-800/70 hover:border-blue-400/50">
                    {icon}
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={formData[name]}
                      onChange={(e) => handleInputChange(name, e.target.value)}
                      className="flex-1 bg-transparent text-white placeholder-white/60 outline-none text-base"
                    />
                  </div>
                ))}

                {/* Emergency Phone Number - Special handling */}
                <div className="flex items-center gap-3 px-4 py-4 rounded-xl bg-gray-800/50 border border-white/20 transition-all duration-300 hover:bg-gray-800/70 hover:border-blue-400/50">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder-white/60 outline-none text-base"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={saveAndContinue}
              disabled={isLoading}
              className={`w-full py-4 px-6 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 ${
                isLoading 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-xl hover:scale-105 transform'
              } text-white`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent mr-2"></div>
                  Saving...
                </div>
              ) : (
                'Save & Continue'
              )}
            </button>
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
            <p className="text-white text-lg font-semibold">Saving your information...</p>
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

export default ContactInfoSignup;