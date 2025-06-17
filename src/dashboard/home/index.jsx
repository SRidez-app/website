import React, { useState, useEffect, useRef } from 'react';

// Modern Search Component with better UX
const ModernSearchBar = ({ placeholder, inputValue, onSelectSuggestion }) => {
  const [query, setQuery] = useState(inputValue || '');
  const [suggestions, setSuggestions] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleInputChange = (value) => {
    setQuery(value);
    setIsExpanded(value.length > 0);
    if (value.length > 2) {
      setSuggestions([
        { id: 1, text: value + ' - New York, NY', type: 'city' },
        { id: 2, text: value + ' - Los Angeles, CA', type: 'city' },
        { id: 3, text: value + ' - Chicago, IL', type: 'city' }
      ]);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="fixed top-6 left-6 right-6 z-50">
      <div 
        className={`backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl transition-all duration-500 ${
          isExpanded ? 'bg-white/15' : 'bg-white/10'
        }`}
        style={{
          background: isExpanded ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.10)',
          boxShadow: '0 25px 80px rgba(59, 130, 246, 0.4)'
        }}
      >
        <div className="flex items-center p-4">
          <div className="flex items-center flex-1">
            <svg className="w-6 h-6 text-cyan-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder={placeholder}
              value={query}
              onChange={(e) => handleInputChange(e.target.value)}
              className="flex-1 bg-transparent text-lg outline-none text-white placeholder-white/60 font-light"
            />
          </div>
          {query && (
            <button
              onClick={() => {
                setQuery('');
                setIsExpanded(false);
                setSuggestions([]);
              }}
              className="ml-2 text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        
        {suggestions.length > 0 && (
          <div className="border-t border-white/10 max-h-60 overflow-y-auto">
            {suggestions.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setQuery(item.text);
                  onSelectSuggestion(item.text);
                  setSuggestions([]);
                  setIsExpanded(false);
                }}
                className="w-full text-left px-6 py-3 hover:bg-white/10 text-white/90 transition-all duration-200 flex items-center"
              >
                <svg className="w-4 h-4 text-cyan-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {item.text}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Sleek Header with better branding
const SleekHeader = () => (
  <div className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl border-b border-white/10" style={{ background: 'rgba(15, 23, 42, 0.8)' }}>
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-3">
          <span className="text-white font-bold text-lg">S</span>
        </div>
        <h1 className="text-xl font-bold gradient-text">SeatRidez</h1>
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-white/10 rounded-xl transition-colors">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l-2-2" />
          </svg>
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
      </div>
    </div>
  </div>
);

// Modern Navigation Tabs
const ModernTabs = ({ activeTab, setActiveTab, filterType, setFilterType }) => {
  const tabs = [
    { id: 'nearby', label: 'Nearby Rides', icon: '📍' },
    { id: 'trips', label: 'My Trips', icon: '🚗' },
    { id: 'drivers', label: 'Drivers', icon: '👨‍✈️' },
    { id: 'riders', label: 'Riders', icon: '👥' }
  ];

  return (
    <div className="fixed top-24 left-6 right-6 z-30">
      <div 
        className="backdrop-blur-2xl rounded-2xl p-2 border border-white/20"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          boxShadow: '0 15px 50px rgba(59, 130, 246, 0.2)'
        }}
      >
        <div className="flex overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg transform scale-105'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Beautiful Ride Card with modern design
const ModernRideCard = ({ item }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div 
      className="backdrop-blur-2xl rounded-3xl p-6 border border-white/20 shadow-2xl hover:transform hover:scale-[1.02] transition-all duration-500 group"
      style={{
        background: 'rgba(255, 255, 255, 0.08)',
        boxShadow: '0 25px 80px rgba(59, 130, 246, 0.15)'
      }}
    >
      {/* Header with price and type */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-400 mr-2 animate-pulse"></div>
          <span className="text-white/70 text-sm">Active now</span>
        </div>
        <div className="flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 rounded-full">
          <span className="text-white font-bold">${item.price}</span>
        </div>
      </div>

      {/* Profile section */}
      <div className="flex items-center mb-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center overflow-hidden">
            {item.profile_picture_url ? (
              <img src={item.profile_picture_url} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-2xl">👤</span>
            )}
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-xs">✓</span>
          </div>
        </div>
        
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-semibold text-white">
            {item.first_name ? `${item.first_name} ${item.last_name?.charAt(0)}.` : 'Anonymous'}
          </h3>
          <div className="flex items-center mt-1">
            <div className="flex text-yellow-400 mr-2">
              {'★★★★★'.split('').map((star, i) => (
                <span key={i} className="text-sm">{star}</span>
              ))}
            </div>
            <span className="text-white/60 text-sm">4.9</span>
          </div>
        </div>

        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`p-2 rounded-full transition-all duration-300 ${
            isLiked ? 'text-red-400 bg-red-400/20' : 'text-white/60 hover:text-white hover:bg-white/10'
          }`}
        >
          <svg className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Route */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 rounded-full bg-blue-400 mr-3"></div>
              <div>
                <p className="text-white font-medium">{item.origin?.city || 'Lincoln'}</p>
                <p className="text-white/60 text-sm">{item.origin?.state || 'NE'}</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="flex items-center">
              <div className="w-16 h-px bg-gradient-to-r from-blue-400 to-cyan-400"></div>
              <svg className="w-5 h-5 text-cyan-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <div className="w-16 h-px bg-gradient-to-r from-cyan-400 to-blue-400"></div>
            </div>
          </div>
          
          <div className="flex-1 text-right">
            <div className="flex items-center justify-end mb-2">
              <div className="mr-3">
                <p className="text-white font-medium">{item.destination?.city || 'Omaha'}</p>
                <p className="text-white/60 text-sm">{item.destination?.state || 'NE'}</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-3">
          <span className="text-white/70 text-sm">2h 30min • Today 3:00 PM</span>
        </div>
      </div>

      {/* Amenities */}
      <div className="flex justify-center gap-4 mb-6">
        {[
          { icon: '🚭', label: 'No Smoking', active: !item.smoking },
          { icon: '🧳', label: 'Luggage', active: item.carry_on },
          { icon: '🐕', label: 'Pet Friendly', active: item.pet_friendly },
          { icon: '🪑', label: `${item.seats || 3} seats`, active: true }
        ].map((amenity, index) => (
          <div key={index} className={`flex flex-col items-center p-2 rounded-xl transition-all duration-300 ${
            amenity.active ? 'text-cyan-400 bg-cyan-400/20' : 'text-white/40'
          }`}>
            <span className="text-lg mb-1">{amenity.icon}</span>
            <span className="text-xs">{amenity.label}</span>
          </div>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button className="flex-1 bg-white/10 backdrop-blur-xl border border-white/30 text-white py-3 rounded-2xl font-medium hover:bg-white/20 transition-all duration-300">
          Message
        </button>
        <button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-2xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg">
          Book Ride
        </button>
      </div>
    </div>
  );
};

// Modern Filter Panel
const ModernFilterPanel = ({ isVisible, onClose, filters, setFilters }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end justify-center z-50 md:items-center">
      <div 
        className="w-full max-w-md mx-4 max-h-[80vh] overflow-y-auto backdrop-blur-2xl rounded-t-3xl md:rounded-3xl border border-white/20 shadow-2xl"
        style={{
          background: 'rgba(255, 255, 255, 0.12)',
          boxShadow: '0 25px 80px rgba(59, 130, 246, 0.4)'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold gradient-text">Filters</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-xl transition-colors"
          >
            <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Price Range */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Price Range</h3>
            <div className="relative">
              <input
                type="range"
                min="10"
                max="200"
                value={filters.priceRange?.[1] || 100}
                onChange={(e) => setFilters({...filters, priceRange: [0, parseInt(e.target.value)]})}
                className="w-full accent-cyan-400"
              />
              <div className="flex justify-between text-sm text-white/70 mt-2">
                <span>$10</span>
                <span className="text-cyan-400 font-semibold">${filters.priceRange?.[1] || 100}</span>
                <span>$200</span>
              </div>
            </div>
          </div>

          {/* Departure Time */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Departure Time</h3>
            <div className="grid grid-cols-2 gap-3">
              {['Morning', 'Afternoon', 'Evening', 'Night'].map((time) => (
                <button
                  key={time}
                  className="p-3 rounded-xl border border-white/30 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Amenities</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { key: 'pet_friendly', label: 'Pet Friendly', icon: '🐕' },
                { key: 'smoking', label: 'Smoking', icon: '🚬' },
                { key: 'carry_on', label: 'Luggage OK', icon: '🧳' },
                { key: 'music', label: 'Music', icon: '🎵' }
              ].map(({ key, label, icon }) => (
                <button
                  key={key}
                  onClick={() => setFilters({...filters, [key]: !filters[key]})}
                  className={`p-4 rounded-xl border transition-all duration-300 flex flex-col items-center ${
                    filters[key] 
                      ? 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border-blue-400 text-white' 
                      : 'border-white/30 text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-2xl mb-2">{icon}</span>
                  <span className="text-sm font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 flex gap-3">
          <button
            onClick={() => setFilters({})}
            className="flex-1 py-3 px-4 rounded-2xl border border-white/30 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            Reset
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

// Empty State Component
const EmptyState = ({ type }) => (
  <div className="flex flex-col items-center justify-center py-20 px-6">
    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6">
      <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">No rides found</h3>
    <p className="text-white/60 text-center max-w-xs">
      Try adjusting your filters or expanding your search area to find more rides.
    </p>
    <button className="mt-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:shadow-xl hover:scale-105 transition-all duration-300">
      Expand Search
    </button>
  </div>
);

// Main Dashboard Component
const SeatRidezDashboard = () => {
  const [activeTab, setActiveTab] = useState('nearby');
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [filters, setFilters] = useState({});

  // Generate floating elements for background
  const generateFloatingElements = () => {
    const elements = [];
    for (let i = 0; i < 20; i++) {
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

  // Mock data
  const mockRides = [
    {
      itinerary_id: '1',
      type: 'Offer',
      price: 35,
      first_name: 'Sarah',
      last_name: 'Johnson',
      smoking: false,
      carry_on: true,
      pet_friendly: true,
      seats: 3,
      origin: { city: 'Lincoln', state: 'NE' },
      destination: { city: 'Omaha', state: 'NE' },
    },
    {
      itinerary_id: '2',
      type: 'Request',
      price: 28,
      first_name: 'Mike',
      last_name: 'Chen',
      smoking: false,
      carry_on: false,
      pet_friendly: false,
      seats: 2,
      origin: { city: 'Des Moines', state: 'IA' },
      destination: { city: 'Kansas City', state: 'MO' },
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
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

        {/* Refined grid pattern */}
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
        <SleekHeader />
        
        <ModernSearchBar
          placeholder="Where would you like to go?"
          inputValue=""
          onSelectSuggestion={(location) => console.log('Selected:', location)}
        />

        <ModernTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Filter Button */}
        <button
          onClick={() => setIsFilterVisible(true)}
          className="fixed top-36 right-6 z-30 p-4 backdrop-blur-2xl rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300 shadow-xl"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            boxShadow: '0 15px 50px rgba(59, 130, 246, 0.2)'
          }}
        >
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </button>

        {/* Content Area */}
        <div className="pt-48 pb-8 px-6">
          {activeTab === 'nearby' && (
            <div className="space-y-6 max-w-md mx-auto">
              {mockRides.map((ride) => (
                <ModernRideCard key={ride.itinerary_id} item={ride} />
              ))}
              {mockRides.length === 0 && <EmptyState type="nearby" />}
            </div>
          )}

          {activeTab === 'trips' && (
            <EmptyState type="trips" />
          )}

          {(activeTab === 'drivers' || activeTab === 'riders') && (
            <div className="space-y-6 max-w-md mx-auto">
              {mockRides.map((ride) => (
                <ModernRideCard key={ride.itinerary_id} item={ride} />
              ))}
            </div>
          )}
        </div>

        <ModernFilterPanel
          isVisible={isFilterVisible}
          onClose={() => setIsFilterVisible(false)}
          filters={filters}
          setFilters={setFilters}
        />
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease-in-out infinite alternate;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
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

export default SeatRidezDashboard;