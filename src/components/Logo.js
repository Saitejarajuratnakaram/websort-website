import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-900 rounded-full mr-2 sm:mr-3 lg:mr-4 flex-shrink-0">
        {/* This is a placeholder for the logo icon */}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-blue-900 text-xl sm:text-2xl lg:text-3xl font-bold leading-none truncate">WebSort</span>
        <span className="text-blue-900 text-xs sm:text-sm leading-none truncate">Your Vision Our Web</span>
      </div>
    </div>
  );
};

export default Logo; 