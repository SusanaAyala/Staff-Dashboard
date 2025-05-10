import React from 'react';
import { Ticket, CheckCircle, Clock } from 'lucide-react';

export default function LatestUpdates() {
  const updates = [
    {
      icon: <Ticket className="text-customIndigo"/>,
      bg: 'bg-indigo-100',
      title: 'New IT ticket submitted',
      message: 'Sarah Davis reported a network connectivity issue',
      time: '10 minutes ago',
    },
    {
      icon: <CheckCircle className="text-green-500" />,
      bg: 'bg-green-100',
      title: 'Ticket resolved',
      message: 'Software installation request for Michael Johnson completed',
      time: '1 hour ago',
    },
    {
      icon: <Clock className="text-yellow-500" />,
      bg: 'bg-yellow-100',
      title: 'Reminder',
      message: 'Weekly IT team meeting at 3:00 PM today',
      time: '2 hours ago',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-10">
      <h2 className="text-lg font-bold text-gray-800 mb-6">Latest Updates</h2>
      <div className="space-y-6">
        {updates.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.bg}`}>
              {item.icon}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{item.title}</p>
              <p className="text-gray-500">{item.message}</p>
              <p className="text-sm text-gray-400 mt-1">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
