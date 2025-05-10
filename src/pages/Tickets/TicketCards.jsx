// TicketCard.jsx
import React from 'react';
import { Users, Ticket, Clock, CheckCircle } from 'lucide-react';

const cards = [
  {
    title: 'Total Tickets',
    count: 7,
    icon: <Users size={24} className="text-blue-500" />,
  },
  {
    title: 'Open Tickets',
    count: 3,
    icon: <Ticket size={24} className="text-yellow-500" />,
  },
  {
    title: 'In Progress',
    count: 2,
    icon: <Clock size={24} className="text-indigo-500" />,
  },
  {
    title: 'Resolved',
    count: 2,
    icon: <CheckCircle size={24} className="text-green-500" />,
  },
];

export default function TicketCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex justify-between items-center border rounded-xl p-4 bg-white shadow-sm"
        >
          <div>
            <p className="text-sm text-gray-500">{card.title}</p>
            <p className="text-2xl font-semibold text-gray-900">{card.count}</p>
          </div>
          {card.icon}
        </div>
      ))}
    </div>
  );
}
