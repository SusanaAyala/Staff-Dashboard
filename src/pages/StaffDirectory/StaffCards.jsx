import React from 'react';
import { Clock, HardDrive, MonitorSmartphone } from 'lucide-react';

export default function StaffCards() {
  const cards = [
    {
      title: 'Last Login',
      count: 'Today, 9:45 AM',
      subtitle: 'Most recent login by staff',
      icon: <Clock className="text-purple-500" />,
      bg: 'bg-purple-100',
    },
    {
      title: 'Drive Usage',
      count: '8.4 GB / 15 GB',
      subtitle: 'Current usage status',
      icon: <HardDrive className="text-blue-500" />,
      bg: 'bg-blue-100',
    },
    {
      title: 'Device Type',
      count: 'MacBook Pro',
      subtitle: 'Signed in from this device',
      icon: <MonitorSmartphone className="text-rose-500" />,
      bg: 'bg-rose-100',
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
