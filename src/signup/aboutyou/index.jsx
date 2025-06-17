import React, { useState, useEffect, useRef } from 'react';

const AboutYou = () => {
  const [firstName, setFirstName] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [preferences, setPreferences] = useState({
    pronouns: '',
    genderIdentity: '',
    travelVibes: '',
    musicGenres: [],
    hobbies: [],
  });

  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [selectedMusic, setSelectedMusic] = useState([]);
  const [hobbiesOptions, setHobbiesOptions] = useState([]);
  const [musicOptions, setMusicOptions] = useState([]);
  const [pronounOptions, setPronounOptions] = useState([]);
  const [genderIdentityOptions, setGenderIdentityOptions] = useState([]);
  const [travelVibeOptions, setTravelVibeOptions] = useState([]);
  const [currentSelection, setCurrentSelection] = useState('');
  const [currentItems, setCurrentItems] = useState([]);

  const isMounted = useRef(false);

  // Mock data for development - replace with actual API calls
  const mockData = {
    Pronoun: ['He/Him', 'She/Her', 'They/Them', 'Ze/Zir', 'Other'],
    Gender: ['Male', 'Female', 'Non-binary', 'Genderfluid', 'Agender', 'Other'],
    Travel_Vibe: ['Chatty & Social', 'Quiet & Peaceful', 'Music Lover', 'Professional', 'Friendly'],
    Hobby: ['Reading', 'Gaming', 'Sports', 'Music', 'Art', 'Cooking', 'Travel', 'Photography', 'Fitness', 'Movies', 'Dancing', 'Writing'],
    Music: ['Pop', 'Rock', 'Hip-Hop', 'Jazz', 'Classical', 'Electronic', 'Country', 'R&B', 'Reggae', 'Blues', 'Folk', 'Alternative']
  };

  const fetchPreferencesByType = async (type) => {
    try {
      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 100));
      return mockData[type] || [];
    } catch (err) {
      console.error('Unexpected error fetching preferences:', err);
      return [];
    }
  };

  useEffect(() => {
    if (isMounted.current) return;
    isMounted.current = true;

    const initializeFields = async () => {
      console.log('Fetching preferences...');
      const pronouns = await fetchPreferencesByType('Pronoun');
      const hobbies = await fetchPreferencesByType('Hobby');
      const musicGenres = await fetchPreferencesByType('Music');
      const genderIdentities = await fetchPreferencesByType('Gender');
      const travelVibes = await fetchPreferencesByType('Travel_Vibe');

      setPronounOptions(pronouns);
      setHobbiesOptions(hobbies);
      setMusicOptions(musicGenres);
      setGenderIdentityOptions(genderIdentities);
      setTravelVibeOptions(travelVibes);
    };

    initializeFields();

    // Mock getting firstName from localStorage
    const storedData = localStorage.getItem('new_signup');
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setFirstName(parsedData.firstName || '');
      } catch (error) {
        console.error('Error parsing stored data:', error);
      }
    }
  }, []);

  const openDropdown = (field, fieldList) => {
    if (dropdownVisible) return;
    setCurrentSelection(field);
    setCurrentItems(fieldList);
    setDropdownVisible(true);
  };

  const toggleItemSelection = (item) => {
    if (currentSelection === 'hobbies') {
      setSelectedHobbies((prev) => {
        if (prev.includes(item)) {
          const updatedHobbies = prev.filter((i) => i !== item);
          setPreferences((prevPreferences) => ({
            ...prevPreferences,
            hobbies: updatedHobbies,
          }));
          return updatedHobbies;
        } else if (prev.length < 3) {
          const updatedHobbies = [...prev, item];
          setPreferences((prevPreferences) => ({
            ...prevPreferences,
            hobbies: updatedHobbies,
          }));
          return updatedHobbies;
        }
        return prev;
      });
    } else if (currentSelection === 'musicGenres') {
      setSelectedMusic((prev) => {
        if (prev.includes(item)) {
          const updatedMusic = prev.filter((i) => i !== item);
          setPreferences((prevPreferences) => ({
            ...prevPreferences,
            musicGenres: updatedMusic,
          }));
          return updatedMusic;
        } else if (prev.length < 3) {
          const updatedMusic = [...prev, item];
          setPreferences((prevPreferences) => ({
            ...prevPreferences,
            musicGenres: updatedMusic,
          }));
          return updatedMusic;
        }
        return prev;
      });
    }
  };

  const handleSelect = (value) => {
    setPreferences((prev) => ({ ...prev, [currentSelection]: value }));
    setDropdownVisible(false);
  };

  const handleSubmit = async () => {
    const missingFields = Object.entries(preferences).filter(([_, value]) => {
      return Array.isArray(value) ? value.length === 0 : !value;
    });

    if (missingFields.length > 0) {
      alert('Please complete all fields.');
      return;
    }

    setIsLoading(true);

    try {
      // Save preferences to localStorage
      localStorage.setItem('aboutYou', JSON.stringify(preferences));
      console.log('Preferences saved:', preferences);
      
      // Simulate navigation delay
      setTimeout(() => {
        alert('Preferences saved successfully! Redirecting...');
        setIsLoading(false);
        // Replace with actual navigation
        // router.push('/signup/picture-upload');
      }, 1500);
    } catch (error) {
      console.error('Error saving preferences:', error);
      alert('Failed to save preferences. Please try again.');
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

  const renderDropdownItem = (item, index) => {
    const isSingleSelect = ['pronouns', 'genderIdentity', 'travelVibes'].includes(currentSelection);
    
    const isSelected = isSingleSelect
      ? preferences[currentSelection] === item
      : currentSelection === 'hobbies'
      ? selectedHobbies.includes(item)
      : selectedMusic.includes(item);

    return (
      <button
        key={index}
        onClick={() => {
          if (isSingleSelect) {
            handleSelect(item);
          } else {
            toggleItemSelection(item);
          }
        }}
        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 border-b border-white/10 last:border-b-0 hover:bg-white/10 ${
          isSelected ? 'bg-blue-500/30 text-blue-400 font-semibold' : 'text-white/80'
        }`}
      >
        {item}
      </button>
    );
  };

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
            <span className="gradient-text">About You</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto px-4 pb-12">
          {/* Introduction */}
          <div className="text-center mb-8">
            <p className="text-white/80 text-lg leading-relaxed">
              Hey {firstName || 'there'}, Share about yourself to find like-minded users on Seat Ridez.
            </p>
          </div>

          {/* Form Card */}
          <div 
            className="backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl space-y-8"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              boxShadow: '0 25px 80px rgba(59, 130, 246, 0.2)'
            }}
          >
            
            {/* Step 1: Pronouns */}
            <div>
              <label className="block text-lg font-semibold text-white mb-4">
                1. What are your preferred pronouns?
              </label>
              <button
                onClick={() => openDropdown('pronouns', pronounOptions)}
                className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-left transition-all duration-300 hover:bg-white/20 hover:border-blue-400/50 flex items-center gap-3"
              >
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span className={`${preferences.pronouns ? 'text-blue-400 font-semibold' : 'text-white/70'}`}>
                  {preferences.pronouns || 'Select your pronoun'}
                </span>
              </button>
            </div>

            {/* Step 2: Gender Identity */}
            <div>
              <label className="block text-lg font-semibold text-white mb-4">
                2. Which gender best represents you?
              </label>
              <button
                onClick={() => openDropdown('genderIdentity', genderIdentityOptions)}
                className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-left transition-all duration-300 hover:bg-white/20 hover:border-blue-400/50 flex items-center gap-3"
              >
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zM8 6a2 2 0 114 0v1H8V6z" clipRule="evenodd" />
                </svg>
                <span className={`${preferences.genderIdentity ? 'text-blue-400 font-semibold' : 'text-white/70'}`}>
                  {preferences.genderIdentity || 'Select your gender'}
                </span>
              </button>
            </div>

            {/* Step 3: Travel Vibes */}
            <div>
              <label className="block text-lg font-semibold text-white mb-4">
                3. What's your social vibe while riding?
              </label>
              <button
                onClick={() => openDropdown('travelVibes', travelVibeOptions)}
                className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-left transition-all duration-300 hover:bg-white/20 hover:border-blue-400/50 flex items-center gap-3"
              >
                <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
                </svg>
                <span className={`${preferences.travelVibes ? 'text-blue-400 font-semibold' : 'text-white/70'}`}>
                  {preferences.travelVibes || 'Select your vibe'}
                </span>
              </button>
            </div>

            {/* Step 4: Hobbies */}
            <div>
              <label className="block text-lg font-semibold text-white mb-2">
                4. What are your hobbies?
              </label>
              <p className="text-sm text-white/60 mb-4">(Please select 3 options)</p>
              <button
                onClick={() => openDropdown('hobbies', hobbiesOptions)}
                className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-left transition-all duration-300 hover:bg-white/20 hover:border-blue-400/50 flex items-center gap-3"
              >
                <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                <span className={`${selectedHobbies.length > 0 ? 'text-blue-400 font-semibold' : 'text-white/70'}`}>
                  {selectedHobbies.length > 0 ? selectedHobbies.join(', ') : 'Select your hobbies'}
                </span>
              </button>
            </div>

            {/* Step 5: Music Genres */}
            <div>
              <label className="block text-lg font-semibold text-white mb-2">
                5. What are your favorite music genres?
              </label>
              <p className="text-sm text-white/60 mb-4">(Please select 3 options)</p>
              <button
                onClick={() => openDropdown('musicGenres', musicOptions)}
                className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-left transition-all duration-300 hover:bg-white/20 hover:border-blue-400/50 flex items-center gap-3"
              >
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6.21a3 3 0 00-2.13 2.83L6.48 9.85C6.216 9.95 6 10.2 6 10.5v1.51a3.01 3.01 0 00-1.5-.4C3.12 11.61 2 12.73 2 14.13s1.12 2.52 2.5 2.52 2.5-1.12 2.5-2.52V9.88l8-2.99v4.62c-.31-.05-.64-.08-1-.08-1.38 0-2.5 1.12-2.5 2.52s1.12 2.52 2.5 2.52 2.5-1.12 2.5-2.52V3z" clipRule="evenodd" />
                </svg>
                <span className={`${selectedMusic.length > 0 ? 'text-blue-400 font-semibold' : 'text-white/70'}`}>
                  {selectedMusic.length > 0 ? selectedMusic.join(', ') : 'Select your music genre'}
                </span>
              </button>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 ${
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
                'Continue'
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Modal */}
      {dropdownVisible && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div 
            className="w-full max-w-md backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl max-h-[80vh] overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0 25px 80px rgba(59, 130, 246, 0.3)'
            }}
          >
            <div className="p-6 border-b border-white/20">
              <h3 className="text-lg font-semibold text-white">
                Select {currentSelection === 'pronouns' ? 'Pronouns' : 
                        currentSelection === 'genderIdentity' ? 'Gender' :
                        currentSelection === 'travelVibes' ? 'Travel Vibe' :
                        currentSelection === 'hobbies' ? 'Hobbies (max 3)' : 'Music Genres (max 3)'}
              </h3>
            </div>
            
            <div className="max-h-96 overflow-y-auto p-4 space-y-2">
              {currentItems.map((item, index) => renderDropdownItem(item, index))}
            </div>
            
            <div className="p-4 border-t border-white/20">
              <button
                onClick={() => setDropdownVisible(false)}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-lg transition-all duration-300"
              >
                Done
              </button>
            </div>
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

export default AboutYou;