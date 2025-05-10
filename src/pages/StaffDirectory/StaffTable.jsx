import React, { useEffect, useState } from 'react';
import { CircleCheck, CircleX, Laptop, Monitor, Smartphone } from 'lucide-react';

export default function StaffTable() {
  const [staff, setStaff] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/mockdata/staff.json')
      .then((res) => res.json())
      .then(setStaff)
      .catch(console.error);
  }, []);

  const getDeviceIcon = (device) => {
    if (/macbook/i.test(device)) return <Laptop className="text-purple-500" />;
    if (/imac/i.test(device)) return <Monitor className="text-blue-500" />;
    if (/windows/i.test(device)) return <Laptop className="text-gray-700" />;
    return <Smartphone className="text-green-500" />;
  };

  const filteredStaff = staff.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.email.toLowerCase().includes(search.toLowerCase()) ||
    s.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search staff by name, email or role..."
          className="border px-4 py-2 rounded-md w-full sm:max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="min-w-full text-sm text-left">
        <thead className="text-gray-500 border-b">
          <tr>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Role</th>
            <th className="py-3 px-4">Email</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Last Login</th>
            <th className="py-3 px-4">Drive Usage</th>
            <th className="py-3 px-4">Device</th>
          </tr>
        </thead>
        <tbody>
          {filteredStaff.map((user) => (
            <tr key={user.id} className="border-b last:border-none hover:bg-gray-50">
              <td className="py-3 px-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <span className="font-medium text-gray-900">{user.name}</span>
              </td>
              <td className="py-3 px-4 text-gray-700">{user.role}</td>
              <td className="py-3 px-4 text-gray-700">{user.email}</td>
              <td className="py-3 px-4">
                {user.status === 'active' ? (
                  <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                    <CircleCheck size={14} /> Active
                  </span>
                ) : (
                  <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                    <CircleX size={14} /> Inactive
                  </span>
                )}
              </td>
              <td className="py-3 px-4 text-gray-700">
                {new Date(user.lastLogin).toLocaleDateString()}
              </td>
              <td className="py-3 px-4 text-gray-700">{user.driveUsage}</td>
              <td className="py-3 px-4 flex items-center gap-2 text-gray-700">
                {getDeviceIcon(user.device)}
                {user.device}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredStaff.length === 0 && (
        <div className="text-center text-gray-500 py-8">No staff found.</div>
      )}
    </div>
  );
}
