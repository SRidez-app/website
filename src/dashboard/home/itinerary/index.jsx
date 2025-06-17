import React, { useState, useEffect } from 'react';

// Mock data - replace with actual props/API calls
const mockItinerary = {
  itinerary_id: '1',
  type: 'Offering a ride',
  price: 45,
  first_name: 'Sarah',
  last_name: 'Johnson',
  pronoun: 'she/her',
  owner_id: 'user123',
  smoking: false,
  carry_on: true,
  pet_friendly: true,
  seats: 3,
  origin: { city: 'Lincoln', state: 'NE' },
  destination: { city: 'Omaha', state: 'NE' },
  leave_time: new Date('2025-01-20T15:00:00').toISOString(),
  arrival_time: new Date('2025-01-20T17:30:00').toISOString(),
  return_time: new Date('2025-01-22T19:00:00').toISOString(),
  notes: 'Looking forward to meeting new people! I love good music and interesting conversations. No smoking please, but pets are welcome!',
  gender_preference: [{ name: 'Woman' }, { name: 'Man' }],
  preferences: [
    { type: 'Music', name: 'Rock' },
    { type: 'Music', name: 'Jazz' },
    { type: 'Hobby', name: 'Photography' },
    { type: 'Hobby', name: 'Hiking' },
    { type: 'Travel_Vibe', name: 'Adventurous and fun-loving' }
  ]
};

const mockVehicleInfo = {
  vehicleDetails: {
    color: 'Silver',
    year: '2022',
    make: 'Honda',
    model: 'Civic',
    condition: 'Excellent'
  }
};

const mockVehiclePhotos = [
  'https://images.unsplash.com/photo-1549824354-d0dc1b9c4b2a?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=200&fit=crop'
];

// Header Component
const ModernHeader = ({ title, onBack }) => (
  <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10" style={{ background: 'rgba(15, 23, 42, 0.9)' }}>
    <div className="flex items-center px-6 py-4">
      <button
        onClick={onBack}
        className="p-2 hover:bg-white/10 rounded-xl transition-colors mr-4"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>
      <h1 className="text-xl font-bold gradient-text">{title}</h1>
    </div>
  </div>
);

// Profile Card Component
const ProfileCard = ({ itinerary, profilePicture, onMessage, onBook, isOwner }) => (
  <div 
    className="backdrop-blur-2xl rounded-3xl p-6 border border-white/20 shadow-2xl mb-6"
    style={{
      background: 'rgba(255, 255, 255, 0.08)',
      boxShadow: '0 25px 80px rgba(59, 130, 246, 0.2)'
    }}
  >
    <div className="flex items-center mb-6">
      <div className="relative">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center overflow-hidden border-2 border-white/30">
          {profilePicture ? (
            <img src={profilePicture} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <span className="text-3xl">👤</span>
          )}
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
          <span className="text-xs font-bold">✓</span>
        </div>
      </div>
      
      <div className="ml-6 flex-1">
        <h2 className="text-2xl font-bold text-white mb-1">
          {`${itinerary.first_name} ${itinerary.last_name[0]}.`}
        </h2>
        <p className="text-white/60 mb-2">{itinerary.pronoun}</p>
        <div className="flex items-center">
          <div className="flex text-yellow-400 mr-2">
            {'★★★★★'.split('').map((star, i) => (
              <span key={i} className="text-sm">{star}</span>
            ))}
          </div>
          <span className="text-white/60 text-sm">4.9 rating</span>
        </div>
      </div>
    </div>

    <div className="flex gap-4">
      <button
        onClick={onBook}
        className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg"
      >
        {isOwner ? 'Edit Trip' : 'Book Ride'}
      </button>
      <button
        onClick={onMessage}
        className="flex-1 bg-white/10 backdrop-blur-xl border border-white/30 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
      >
        {isOwner ? 'Delete' : 'Message'}
      </button>
    </div>
  </div>
);

// Price Banner Component
const PriceBanner = ({ type, price }) => (
  <div 
    className="backdrop-blur-2xl rounded-3xl p-6 border border-white/20 shadow-2xl mb-6"
    style={{
      background: 'rgba(255, 255, 255, 0.08)',
      boxShadow: '0 25px 80px rgba(59, 130, 246, 0.2)'
    }}
  >
    <div className="text-center">
      <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-2xl shadow-lg">
        <span className="text-2xl font-bold text-white mr-2">{type}</span>
        <span className="text-3xl font-bold text-white">${price}</span>
      </div>
    </div>
  </div>
);

// Info Card Component
const InfoCard = ({ title, children, icon }) => (
  <div 
    className="backdrop-blur-2xl rounded-3xl p-6 border border-white/20 shadow-2xl mb-6"
    style={{
      background: 'rgba(255, 255, 255, 0.08)',
      boxShadow: '0 25px 80px rgba(59, 130, 246, 0.2)'
    }}
  >
    <div className="flex items-center mb-4">
      {icon && <span className="text-2xl mr-3">{icon}</span>}
      <h3 className="text-xl font-bold text-cyan-400">{title}</h3>
    </div>
    {children}
  </div>
);

// Route Display Component
const RouteDisplay = ({ origin, destination, leaveTime, arrivalTime, returnTime }) => (
  <InfoCard title="Trip Details" icon="🗺️">
    <div className="space-y-4">
      {/* Route */}
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 rounded-full bg-blue-400 mr-4"></div>
            <div>
              <p className="text-white font-semibold text-lg">{origin.city}</p>
              <p className="text-white/60">{origin.state}</p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center">
          <div className="flex items-center">
            <div className="w-16 h-px bg-gradient-to-r from-blue-400 to-cyan-400"></div>
            <svg className="w-6 h-6 text-cyan-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <div className="w-16 h-px bg-gradient-to-r from-cyan-400 to-blue-400"></div>
          </div>
        </div>
        
        <div className="flex-1 text-right">
          <div className="flex items-center justify-end mb-2">
            <div className="mr-4">
              <p className="text-white font-semibold text-lg">{destination.city}</p>
              <p className="text-white/60">{destination.state}</p>
            </div>
            <div className="w-4 h-4 rounded-full bg-green-400"></div>
          </div>
        </div>
      </div>

      {/* Times */}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
        <div>
          <p className="text-white/60 text-sm mb-1">Departure</p>
          <p className="text-white font-semibold">{new Date(leaveTime).toLocaleDateString()}</p>
          <p className="text-cyan-400 font-semibold">{new Date(leaveTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
        <div>
          <p className="text-white/60 text-sm mb-1">Arrival</p>
          <p className="text-white font-semibold">{new Date(arrivalTime).toLocaleDateString()}</p>
          <p className="text-cyan-400 font-semibold">{new Date(arrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
        {returnTime && (
          <div className="col-span-2 mt-2 pt-2 border-t border-white/10">
            <p className="text-yellow-400 text-sm mb-1">Return Trip</p>
            <p className="text-yellow-400 font-semibold">
              {new Date(returnTime).toLocaleDateString()} at {new Date(returnTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        )}
      </div>
    </div>
  </InfoCard>
);

// Preferences Display Component
const PreferencesDisplay = ({ itinerary }) => {
  const preferences = [
    itinerary.smoking && { icon: '🚬', label: 'Smoking OK' },
    itinerary.carry_on && { icon: '🧳', label: 'Luggage OK' },
    itinerary.pet_friendly && { icon: '🐕', label: 'Pet Friendly' },
    { icon: '🪑', label: `${itinerary.seats} seats` },
  ].filter(Boolean);

  return (
    <InfoCard title="Ride Preferences" icon="⚙️">
      <div className="grid grid-cols-2 gap-3">
        {preferences.map((pref, index) => (
          <div key={index} className="flex items-center p-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20">
            <span className="text-2xl mr-3">{pref.icon}</span>
            <span className="text-white font-medium">{pref.label}</span>
          </div>
        ))}
      </div>
    </InfoCard>
  );
};

// Gender Preferences Component
const GenderPreferences = ({ genderPreference, type }) => {
  const genders = genderPreference?.length ? genderPreference : [
    { name: 'Woman' }, { name: 'Man' }, { name: 'Other' }
  ];

  const getGenderIcon = (name) => {
    switch (name) {
      case 'Woman': return '👩';
      case 'Man': return '👨';
      case 'Other': return '🏳️‍🌈';
      default: return '👤';
    }
  };

  return (
    <InfoCard title={type === 'Offering a ride' ? 'Passenger Preferences' : 'Driver Preferences'} icon="👥">
      <div className="flex gap-3 flex-wrap">
        {genders.map((gender, index) => (
          <div key={index} className="flex items-center p-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20">
            <span className="text-2xl mr-3">{getGenderIcon(gender.name)}</span>
            <span className="text-white font-medium">
              {gender.name === 'Other' ? 'Love All' : gender.name}
            </span>
          </div>
        ))}
      </div>
    </InfoCard>
  );
};

// Vehicle Info Component
const VehicleInfo = ({ vehicleInfo, vehiclePhotos }) => (
  <InfoCard title="Vehicle Details" icon="🚗">
    {vehicleInfo && (
      <div className="mb-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          {Object.entries(vehicleInfo.vehicleDetails).map(([key, value]) => (
            <div key={key} className="flex justify-between">
              <span className="text-white/60 capitalize">{key}:</span>
              <span className="text-white font-semibold">{value}</span>
            </div>
          ))}
        </div>
      </div>
    )}
    
    {vehiclePhotos?.length > 0 && (
      <div>
        <h4 className="text-white font-semibold mb-3">Photos</h4>
        <div className="flex gap-3 overflow-x-auto">
          {vehiclePhotos.slice(0, 4).map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Vehicle ${index + 1}`}
              className="w-32 h-24 object-cover rounded-xl border border-white/20 flex-shrink-0"
            />
          ))}
        </div>
      </div>
    )}
  </InfoCard>
);

// About Me Component
const AboutMe = ({ preferences }) => {
  const preferencesText = {
    Music: preferences?.filter(p => p.type === 'Music').map(p => p.name) || [],
    Hobby: preferences?.filter(p => p.type === 'Hobby').map(p => p.name) || [],
    Travel_Vibe: preferences?.find(p => p.type === 'Travel_Vibe')?.name || ''
  };

  return (
    <InfoCard title="About Me" icon="😊">
      <div className="space-y-4">
        {preferencesText.Travel_Vibe && (
          <div className="flex items-start">
            <span className="text-2xl mr-3">🌟</span>
            <div>
              <p className="text-white/60 text-sm">Travel Vibe</p>
              <p className="text-white">{preferencesText.Travel_Vibe}</p>
            </div>
          </div>
        )}
        
        {preferencesText.Hobby.length > 0 && (
          <div className="flex items-start">
            <span className="text-2xl mr-3">🎯</span>
            <div>
              <p className="text-white/60 text-sm">Hobbies</p>
              <p className="text-white">{preferencesText.Hobby.join(', ')}</p>
            </div>
          </div>
        )}
        
        {preferencesText.Music.length > 0 && (
          <div className="flex items-start">
            <span className="text-2xl mr-3">🎵</span>
            <div>
              <p className="text-white/60 text-sm">Music</p>
              <p className="text-white">{preferencesText.Music.join(', ')}</p>
            </div>
          </div>
        )}
      </div>
    </InfoCard>
  );
};

// Travel Notes Component
const TravelNotes = ({ notes }) => (
  <InfoCard title="Travel Notes" icon="📝">
    <div 
      className="p-4 rounded-xl border border-yellow-400/30"
      style={{ background: 'rgba(255, 215, 0, 0.1)' }}
    >
      <p className="text-white leading-relaxed">{notes}</p>
    </div>
  </InfoCard>
);

// Report/Block Actions Component
const ActionButtons = ({ userId, onReport, onBlock }) => (
  <div className="flex gap-4 mb-6">
    <button
      onClick={onReport}
      className="flex-1 bg-yellow-500/20 backdrop-blur-xl border border-yellow-500/30 text-yellow-400 py-3 rounded-2xl font-medium hover:bg-yellow-500/30 transition-all duration-300"
    >
      🚨 Report User
    </button>
    <button
      onClick={onBlock}
      className="flex-1 bg-red-500/20 backdrop-blur-xl border border-red-500/30 text-red-400 py-3 rounded-2xl font-medium hover:bg-red-500/30 transition-all duration-300"
    >
      🚫 Block User
    </button>
  </div>
);

// Main Component
const ViewItinerary = () => {
  const [itinerary] = useState(mockItinerary);
  const [vehicleInfo] = useState(mockVehicleInfo);
  const [vehiclePhotos] = useState(mockVehiclePhotos);
  const [profilePicture] = useState(null);
  const [isOwner] = useState(false); // Mock - replace with actual logic

  // Generate floating elements for background
  const generateFloatingElements = () => {
    const elements = [];
    for (let i = 0; i < 15; i++) {
      elements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 6,
      });
    }
    return elements;
  };

  const floatingElements = generateFloatingElements();

  const handleBack = () => {
    console.log('Navigate back');
  };

  const handleMessage = () => {
    if (isOwner) {
      console.log('Delete itinerary');
    } else {
      console.log('Send message');
    }
  };

  const handleBook = () => {
    if (isOwner) {
      console.log('Edit itinerary');
    } else {
      console.log('Book ride');
    }
  };

  const handleReport = () => {
    console.log('Report user');
  };

  const handleBlock = () => {
    console.log('Block user');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 70%, rgba(6, 182, 212, 0.3) 0%, transparent 60%),
              radial-gradient(ellipse at 40% 90%, rgba(139, 92, 246, 0.3) 0%, transparent 60%)
            `,
            animation: 'gradient-shift 12s ease-in-out infinite alternate'
          }}
        />

        {/* Floating elements */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              animation: `float ${element.duration}s ease-in-out infinite`,
              animationDelay: `${element.delay}s`,
              boxShadow: '0 0 30px rgba(255, 255, 255, 0.1)'
            }}
          />
        ))}

        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <ModernHeader title="Trip Details" onBack={handleBack} />
        
        <div className="pt-20 pb-8 px-4 max-w-2xl mx-auto">
          <ProfileCard
            itinerary={itinerary}
            profilePicture={profilePicture}
            onMessage={handleMessage}
            onBook={handleBook}
            isOwner={isOwner}
          />

          <PriceBanner type={itinerary.type} price={itinerary.price} />

          <RouteDisplay
            origin={itinerary.origin}
            destination={itinerary.destination}
            leaveTime={itinerary.leave_time}
            arrivalTime={itinerary.arrival_time}
            returnTime={itinerary.return_time}
          />

          <PreferencesDisplay itinerary={itinerary} />

          <GenderPreferences 
            genderPreference={itinerary.gender_preference}
            type={itinerary.type}
          />

          {itinerary.type === 'Offering a ride' && (
            <VehicleInfo vehicleInfo={vehicleInfo} vehiclePhotos={vehiclePhotos} />
          )}

          <AboutMe preferences={itinerary.preferences} />

          <TravelNotes notes={itinerary.notes} />

          {!isOwner && (
            <ActionButtons
              userId={itinerary.owner_id}
              onReport={handleReport}
              onBlock={handleBlock}
            />
          )}
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
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-25px) rotate(180deg) scale(1.1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ViewItinerary;