import React, { useEffect, useState } from 'react';
import { CheckCircle, Clock4, Loader2, Pencil, Trash2 } from 'lucide-react';

export default function TodoTable() {
  const [todos, setTodos] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    fetch('./mockdata/todos.json')
      .then((res) => res.json())
      .then(setTodos)
      .catch(console.error);
  }, []);

  const statusColors = {
    'Pending': 'bg-yellow-100 text-yellow-800',
    'In Progress': 'bg-blue-100 text-blue-800',
    'Completed': 'bg-green-100 text-green-800'
  };

  const filteredTodos = statusFilter === 'All Status'
    ? todos
    : todos.filter((todo) => todo.status === statusFilter);

  const handleSaveTask = () => {
    if (modalType === 'add') {
      const newTask = {
        ...currentTask,
        id: Date.now(),
        created_at: new Date().toLocaleDateString('en-GB')
      };
      setTodos([...todos, newTask]);
    } else {
      setTodos(todos.map(t => t.id === currentTask.id ? currentTask : t));
    }
    setShowModal(false);
  };

  const handleDeleteTask = () => {
    setTodos(todos.filter(t => t.id !== currentTask.id));
    setShowModal(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Task Management</h2>
          <p className="text-sm text-gray-500">Manage and track your organization's tasks</p>
        </div>
        <div className="flex items-center gap-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border py-2 rounded-md text-sm"
          >
            <option>All Status</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <button
            onClick={() => {
              setModalType('add');
              setCurrentTask({ title: '', description: '', due_date: '', status: 'Pending' });
              setShowModal(true);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg"
          >
            + Add New Task
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="py-3 px-4">Task Title</th>
              <th className="py-3 px-4">Date Created</th>
              <th className="py-3 px-4">Due Date</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTodos.map((todo) => (
              <tr key={todo.id} className="border-b last:border-none hover:bg-gray-50">
                <td className="py-3 px-4">
                  <p className="font-semibold text-gray-800">{todo.title}</p>
                  <p className="text-gray-500">{todo.description}</p>
                </td>
                <td className="py-3 px-4 text-gray-700">{todo.created_at}</td>
                <td className="py-3 px-4 text-gray-700">{todo.due_date}</td>
                <td className="py-3 px-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusColors[todo.status]}`}>
                    {todo.status === 'Completed' && <CheckCircle size={14} className="mr-1" />}
                    {todo.status === 'Pending' && <Clock4 size={14} className="mr-1" />}
                    {todo.status === 'In Progress' && <Loader2 size={14} className="mr-1 animate-spin" />}
                    {todo.status}
                  </span>
                </td>
                <td className="py-3 px-4 flex gap-3 text-blue-500">
                  <Pencil size={18} className="cursor-pointer hover:text-blue-700" onClick={() => {
                    setModalType('edit');
                    setCurrentTask(todo);
                    setShowModal(true);
                  }} />
                  <Trash2 size={18} className="cursor-pointer hover:text-red-600" onClick={() => {
                    setModalType('delete');
                    setCurrentTask(todo);
                    setShowModal(true);
                  }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredTodos.length === 0 && (
          <div className="text-center text-gray-500 py-8">No tasks found.</div>
        )}
      </div>

      {showModal && modalType === 'delete' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow text-center">
            <div className="text-red-500 text-4xl mb-4">⚠️</div>
            <h3 className="text-lg font-semibold mb-2">Delete Task</h3>
            <p className="text-gray-600 mb-4">Are you sure you want to delete this task? This action cannot be undone.</p>
            <div className="flex justify-center gap-3">
              <button className="bg-gray-200 px-4 py-2 rounded" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={handleDeleteTask}>Delete</button>
            </div>
          </div>
        </div>
      )}

      {showModal && (modalType === 'add' || modalType === 'edit') && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow space-y-4">
            <h3 className="text-xl font-semibold">
              {modalType === 'add' ? 'Add New Task' : 'Edit Task'}
            </h3>
            <input type="text" className="w-full border p-2 rounded" placeholder="Task Title"
              value={currentTask?.title || ''}
              onChange={e => setCurrentTask({...currentTask, title: e.target.value})} />
            <textarea className="w-full border p-2 rounded" placeholder="Description"
              value={currentTask?.description || ''}
              onChange={e => setCurrentTask({...currentTask, description: e.target.value})} />
            <input type="date" className="w-full border p-2 rounded"
              value={currentTask?.due_date || ''}
              onChange={e => setCurrentTask({...currentTask, due_date: e.target.value})} />
            <select className="w-full border p-2 rounded"
              value={currentTask?.status || ''}
              onChange={e => setCurrentTask({...currentTask, status: e.target.value})}>
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowModal(false)} className="bg-gray-200 px-4 py-2 rounded">Cancel</button>
              <button onClick={handleSaveTask} className="bg-blue-600 text-white px-4 py-2 rounded">
                Save Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
