import React, { useEffect, useState } from 'react';
import { Pencil, Eye } from 'lucide-react';

export default function TicketTable({ searchQuery }) {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [viewModal, setViewModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  useEffect(() => {
    fetch('/mockdata/tickets.json')
      .then((res) => res.json())
      .then(setTickets)
      .catch(console.error);
  }, []);

  const openEditModal = (ticket) => {
    setSelectedTicket(ticket);
    setEditModal(true);
  };

  const openViewModal = (ticket) => {
    setSelectedTicket(ticket);
    setViewModal(true);
  };

  const closeModals = () => {
    setSelectedTicket(null);
    setViewModal(false);
    setEditModal(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updatedTickets = tickets.map((ticket) =>
      ticket.id === selectedTicket.id ? selectedTicket : ticket
    );
    setTickets(updatedTickets);
    closeModals();
  };

  const handleChange = (field, value) => {
    setSelectedTicket((prev) => ({ ...prev, [field]: value }));
  };

  const filteredTickets = tickets.filter((ticket) =>
    ticket.issue.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Submitted Tickets</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="py-3 px-4">Ticket ID</th>
              <th className="py-3 px-4">User</th>
              <th className="py-3 px-4">Issue</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Created</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id} className="border-b last:border-none hover:bg-gray-50">
                <td className="py-3 px-4 font-medium text-gray-900">TKT-{ticket.id}</td>
                <td className="py-3 px-4 text-gray-700">{ticket.user}</td>
                <td className="py-3 px-4 text-gray-700">{ticket.issue}</td>
                <td className="py-3 px-4 text-gray-700">{ticket.description}</td>
                <td className="py-3 px-4 text-gray-700">{ticket.status}</td>
                <td className="py-3 px-4 text-gray-700">{ticket.created}</td>
                <td className="py-3 px-4 flex gap-3 text-blue-600">
                  <Eye
                    size={18}
                    className="cursor-pointer hover:text-blue-800"
                    onClick={() => openViewModal(ticket)}
                  />
                  <Pencil
                    size={18}
                    className="cursor-pointer hover:text-blue-800"
                    onClick={() => openEditModal(ticket)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredTickets.length === 0 && (
          <div className="text-center text-gray-500 py-8">No tickets found.</div>
        )}
      </div>

      {viewModal && selectedTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6">
            <h3 className="text-xl font-semibold text-black mb-4">Ticket TKT-{selectedTicket.id}</h3>
            <p className="text-lg font-semibold mb-1">{selectedTicket.issue}</p>
            <p className="text-gray-600 text-sm mb-4">{selectedTicket.description}</p>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div><span className="font-medium">Submitted By:</span> {selectedTicket.user}</div>
              <div><span className="font-medium">Status:</span> {selectedTicket.status}</div>
            </div>
            <p className="mt-4 text-sm text-gray-500">Created on {selectedTicket.created}</p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModals}
                className="bg-gray-100 hover:bg-gray-200 text-sm px-4 py-2 rounded-md"
              >Close</button>
            </div>
          </div>
        </div>
      )}
      {editModal && selectedTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6">
            <h3 className="text-xl font-semibold text-black mb-4">Edit Ticket</h3>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Issue</label>
                <input
                  type="text"
                  value={selectedTicket.issue}
                  onChange={(e) => handleChange('issue', e.target.value)}
                  className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={selectedTicket.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  value={selectedTicket.status}
                  onChange={(e) => handleChange('status', e.target.value)}
                  className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
                >
                  <option>Open</option>
                  <option>In Progress</option>
                  <option>Resolved</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={closeModals}
                  className="bg-gray-100 hover:bg-gray-200 text-sm px-4 py-2 rounded-md"
                >Cancel</button>
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-md"
                >Save Ticket</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
