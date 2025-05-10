import React from 'react';
import { Ticket, ClipboardList, CheckCircle } from 'lucide-react';

export default function InfoCards() {
  const cards = [
    {
      title: 'Open Tickets',
      count: 7,
      subtitle: '3 require your attention',
      icon: <Ticket className="text-customIndigo" />,
      bg: 'bg-indigo-100',
    },
    {
      title: 'Tasks Pending',
      count: 4,
      subtitle: '2 due today',
      icon: <ClipboardList className="text-yellow-500" />,
      bg: 'bg-yellow-100',
    },
    {
      title: 'Resolved This Week',
      count: 12,
      subtitle: '+3 from last week',
      icon: <CheckCircle className="text-green-500" />,
      bg: 'bg-green-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-xl shadow p-6 flex items-start gap-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${card.bg}`}>
            {card.icon}
          </div>
          <div>
            <h4 className="text-sm text-gray-500">{card.title}</h4>
            <p className="text-2xl font-bold">{card.count}</p>
            <p className="text-sm text-gray-500 mt-1">{card.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
