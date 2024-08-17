import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1]">
      <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-600 to-purple-500"></div>
    </div>
  );
};

export default Background;
