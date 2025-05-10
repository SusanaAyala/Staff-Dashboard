import React from 'react';
import StaffCards from '../StaffDirectory/StaffCards';
import StaffTable from '../StaffDirectory/StaffTable'


export default function StaffDirectory() {
  return (
    <div className="p-20 md:p-10 space-y-6">
       <StaffCards/>
       <StaffTable/>

    </div>
  );
}