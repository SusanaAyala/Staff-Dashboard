import React from 'react';

export default function Banner() {
  return (
    <div className="bg-[#8A8784] text-white rounded-xl px-6 py-10 flex items-center justify-between shadow-sm">
      {/* Left side */}
      <div>
        <h2 className="text-2xl font-semibold">Good afternoon, Mohamed Virji 👋</h2>
        <p className="text-sm text-white/80 mt-1">Here is what’s happening in your workspace today:</p>
      </div>

      {/* Right side button */}
      <button className="bg-white text-black font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition text-sm">
        What’s New!
      </button>
    </div>
  );
}
