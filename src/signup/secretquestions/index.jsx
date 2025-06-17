import React, { useState, useEffect } from 'react';

const SecretQuestionsScreen = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [answer, setAnswer] = useState('');
  const [userId, setUserId] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Mock questions data - replace with actual API call
  const mockQuestions = [
    { question_id: '1', full_question: 'What was the name of your first pet?' },
    { question_id: '2', full_question: 'In what city were you born?' },
    { question_id: '3', full_question: 'What is your mother\'s maiden name?' },
    { question_id: '4', full_question: 'What was the name of your elementary school?' },
    { question_id: '5', full_question: 'What was the make of your first car?' },
    { question_id: '6', full_question: 'What is the name of the street you grew up on?' },
    { question_id: '7', full_question: 'What was your childhood nickname?' },
    { question_id: '8', full_question: 'What is your favorite book?' },
  ];

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        setQuestions(mockQuestions);
      } catch (error) {
        console.error('Failed to load questions:', error);
        alert('Failed to load questions');
      }
    };

    const getUser = async () => {
      try {
        // Mock user session - replace with actual auth check
        const mockUserId = 'user_123';
        setUserId(mockUserId);
      } catch (error) {
        console.error('No user session found:', error);
        alert('No user session found.');
      }
    };

    fetchQuestions();
    getUser();
  }, []);

  const hashAnswer = async (text) => {
    // Simple web-compatible hash function
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const handleContinue = async () => {
    if (!selectedQuestionId || !answer.trim() || !userId) {
      alert('Please select a question and provide an answer.');
      return;
    }

    setIsLoading(true);

    try {
      const hashedAnswer = await hashAnswer(answer.trim());

      // Mock saving to database - replace with actual API call
      const secretAnswerData = {
        user_id: userId,
        question_id: selectedQuestionId,
        answer_hash: hashedAnswer,
      };

      // Save to localStorage for now
      localStorage.setItem('userSecretAnswer', JSON.stringify(secretAnswerData));
      console.log('Secret answer saved:', secretAnswerData);

      // Simulate navigation delay
      setTimeout(() => {
        alert('Secret question saved successfully! Redirecting...');
        setIsLoading(false);
        // Replace with actual navigation
        // router.push('/signup/next-step');
      }, 1500);

    } catch (error) {
      console.error('Failed to save answer:', error);
      alert('Failed to save your answer.');
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
            <span className="gradient-text">Secret Question</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto px-4 pb-12">
          {/* Introduction */}
          <div className="text-center mb-8">
            <p className="text-white/80 text-lg leading-relaxed">
              Please select one of the following options below. Keep your answer safe and don't share with anyone.
            </p>
          </div>

          {/* Questions Card */}
          <div 
            className="backdrop-blur-xl rounded-3xl p-8 border border-blue-400/30 shadow-2xl mb-8"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0 25px 80px rgba(59, 130, 246, 0.2)'
            }}
          >
            <div className="space-y-4">
              {questions.map((q) => (
                <button
                  key={q.question_id}
                  onClick={() => setSelectedQuestionId(q.question_id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 border ${
                    selectedQuestionId === q.question_id
                      ? 'bg-blue-500/20 border-blue-400 text-white shadow-lg'
                      : 'bg-white/5 border-blue-400/20 text-white/80 hover:bg-white/10 hover:border-blue-400/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      selectedQuestionId === q.question_id
                        ? 'border-blue-400 bg-blue-400'
                        : 'border-white/40'
                    }`}>
                      {selectedQuestionId === q.question_id && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <span className="text-base leading-relaxed">{q.full_question}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Answer Input Section */}
          {selectedQuestionId && (
            <div 
              className="backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-8"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                boxShadow: '0 25px 80px rgba(59, 130, 246, 0.2)'
              }}
            >
              <label className="block text-blue-400 font-semibold mb-4 text-lg">
                Your Answer
              </label>
              <div className="relative">
                <input
                  type={showAnswer ? "text" : "password"}
                  placeholder="Type your answer here"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-full px-4 py-4 pr-12 rounded-xl bg-white/10 border border-blue-400/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-xl text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowAnswer(!showAnswer)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                >
                  {showAnswer ? (
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

              {/* Security Notice */}
              <div className="mt-4 p-4 rounded-xl bg-yellow-500/10 border border-yellow-400/30">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-yellow-200 text-sm font-medium">Security Reminder</p>
                    <p className="text-yellow-100/80 text-sm mt-1">Choose an answer you'll remember but others won't easily guess. This will help recover your account if needed.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            disabled={!selectedQuestionId || !answer.trim() || isLoading}
            className={`w-full py-4 px-6 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 ${
              (!selectedQuestionId || !answer.trim() || isLoading)
                ? 'bg-gray-600 cursor-not-allowed text-white/60' 
                : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-xl hover:scale-105 transform text-white'
            }`}
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
            <p className="text-white text-lg font-semibold">Securing your information...</p>
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

export default SecretQuestionsScreen;