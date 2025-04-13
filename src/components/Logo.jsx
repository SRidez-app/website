import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="w-12 h-12 relative">
        <div className="absolute inset-0 rounded-full border-2 border-primary"></div>
        <div className="absolute inset-2">
          <div className="w-full h-full relative">
            {/* Car shape */}
            <div className="absolute inset-1 bg-primary rounded-sm transform -rotate-12"></div>
            {/* Speed lines */}
            <div className="absolute -right-2 top-1/2 w-3 h-0.5 bg-[#FF4444]"></div>
            <div className="absolute -right-1 top-1/2 w-2 h-0.5 bg-[#FFD700]"></div>
            <div className="absolute -right-1.5 top-1/2 w-2.5 h-0.5 bg-[#00FF00]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo; 