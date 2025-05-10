import React from 'react';
import { Bell } from 'lucide-react';

export default function TodoSearch() {
  return (
    <div className="bg-[#8A8784] text-white rounded-xl px-6 py-10 flex items-center justify-between shadow-sm">
      <div>
        <h2 className="text-2xl font-semibold">Todo List 🔍</h2>
        <p className="text-sm text-white/80 mt-1">
        Keep track of your daily tasks and stay organized.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-white/20 p-2 rounded-full">
          <Bell size={20} className="text-white" />
        </div>
        <div className="bg-white text-black font-semibold w-10 h-10 rounded-full flex items-center justify-center">
          MV
        </div>
      </div>
    </div>
  );
}