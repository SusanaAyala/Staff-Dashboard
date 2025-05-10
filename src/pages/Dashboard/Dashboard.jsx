import React from 'react';
import Banner from '../Dashboard/Banner';
import InfoCards from '../Dashboard/InfoCards';
import LatestUpdates from '../Dashboard/LatestUpdates';

export default function Dashboard() {
  return (
    <div className="p-20 lg:p-10 space-y-6">
      <Banner />
      <InfoCards />
      <LatestUpdates/>
    </div>
  );
}