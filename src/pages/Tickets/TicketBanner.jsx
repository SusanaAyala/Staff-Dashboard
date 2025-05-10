import React from 'react';


export default function TicketBanner({ searchQuery, setSearchQuery }) {
  return (
    <div className="bg-[#8A8784] text-white rounded-xl px-6 py-10 flex items-center justify-between shadow-sm">
      <div>
        <h2 className="text-2xl font-semibold">Tickets ✅</h2>
        <p className="text-sm text-white/80 mt-1">See what’s been reported, what’s in progress, and what’s resolved:</p>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search tickets..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="rounded-md px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div className="bg-white text-black font-semibold w-10 h-10 rounded-full flex items-center justify-center">
          MV
        </div>
      </div>
    </div>
  );
}
