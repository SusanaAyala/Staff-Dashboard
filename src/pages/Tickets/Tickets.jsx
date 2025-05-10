import React, {useState} from 'react';
import TicketBanner from '../Tickets/TicketBanner';
import TicketTable from '../Tickets/TicketTable';


export default function Tickets() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="p-20 lg:p-10 space-y-6">
      <TicketBanner searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TicketTable searchQuery={searchQuery}/>
    </div>
  );
}