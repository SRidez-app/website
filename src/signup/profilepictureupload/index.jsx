import React, { useState, useEffect, useRef } from 'react';

const PictureUploadSignup = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  // Mock user session - replace with actual auth
  const userId = 'user_123';
  const cacheKey = `profilePicture-${userId}`;

  useEffect(() => {
    const loadCachedImage = () => {
      const cached = localStorage.getItem(cacheKey);
      if (cached) setProfilePicture(cached);
    };
    loadCachedImage();
  }, [cacheKey]);

  const uploadImageToStorage = async (file) => {
    if (!userId) return;

    setIsLoading(true);

    try {
      // Create a data URL for the image
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        localStorage.setItem('profilePicture', imageUrl);
        setProfilePicture(imageUrl);
        alert('Profile picture uploaded successfully!');
      };
      reader.readAsDataURL(file);

      // In a real app, you would upload to your storage service here
      console.log('Uploading file:', file.name);
      
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload image.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = (file) => {
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file.');
      return;
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB.');
      return;
    }

    uploadImageToStorage(file);
  };

  const handleChooseFromGallery = () => {
    fileInputRef.current?.click();
  };

  const handleTakePhoto = () => {
    cameraInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleProceed = () => {
    if (!isLoading) {
      alert('Proceeding to I.D. verification...');
      // Replace with actual navigation
      // router.push('/signup/id-verification');
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
            <span className="gradient-text">Profile Picture</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto px-4 pb-12">
          {/* Introduction */}
          <div className="text-center mb-12">
            <p className="text-white/80 text-lg leading-relaxed max-w-lg mx-auto">
              Please upload a clear profile photo of yourself, captured from above the waist, with your entire face fully visible.
            </p>
          </div>

          {/* Profile Picture Upload Area */}
          <div className="flex flex-col items-center mb-12">
            {/* Image Display Circle */}
            <div 
              className={`w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-blue-400 shadow-2xl mb-8 overflow-hidden transition-all duration-300 ${
                isDragging ? 'border-cyan-400 scale-105' : ''
              }`}
              style={{
                boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)'
              }}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {profilePicture ? (
                <img 
                  src={profilePicture} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-800/50 flex flex-col items-center justify-center text-white/60">
                  <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-sm font-medium">No profile picture</span>
                </div>
              )}
            </div>

            {/* Upload Buttons */}
            <div className="flex flex-col items-center gap-4">
              {/* Take Photo Button */}
              <button
                onClick={handleTakePhoto}
                disabled={isLoading}
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-gray-800/50 border border-blue-400 text-white font-semibold hover:bg-gray-800/70 hover:border-cyan-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Take a Photo
              </button>

              {/* Choose from Gallery Button */}
              <button
                onClick={handleChooseFromGallery}
                disabled={isLoading}
                className="text-blue-400 hover:text-cyan-400 font-medium underline transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Choose from Gallery
              </button>
            </div>

            {/* Drag and Drop Area */}
            <div 
              className={`mt-8 p-6 border-2 border-dashed rounded-xl transition-all duration-300 cursor-pointer ${
                isDragging 
                  ? 'border-cyan-400 bg-cyan-400/10' 
                  : 'border-white/30 hover:border-blue-400/50 hover:bg-white/5'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleChooseFromGallery}
            >
              <div className="text-center">
                <svg className="w-8 h-8 text-white/60 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-white/60 text-sm">
                  Drag and drop an image here, or click to select
                </p>
                <p className="text-white/40 text-xs mt-1">
                  Maximum file size: 5MB
                </p>
              </div>
            </div>
          </div>

          {/* Proceed Button */}
          <button
            onClick={handleProceed}
            disabled={isLoading}
            className={`w-full py-4 px-6 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 ${
              isLoading
                ? 'bg-gray-600 cursor-not-allowed text-white/60' 
                : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-xl hover:scale-105 transform text-white'
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent mr-2"></div>
                Uploading...
              </div>
            ) : (
              'Proceed to I.D. verification'
            )}
          </button>
        </div>
      </div>

      {/* Hidden File Inputs */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="user"
        onChange={handleFileChange}
        className="hidden"
      />

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
            <p className="text-white text-lg font-semibold">Uploading your photo...</p>
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

export default PictureUploadSignup;