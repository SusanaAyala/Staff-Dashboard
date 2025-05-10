import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  ChevronDown,
  ChevronUp,
  Users,
  Laptop,
  Ticket,
  ListTodo,
  X,
  Menu,
} from 'lucide-react';
import logo from '../assets/logo.png';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-black text-white flex items-center justify-between px-4 py-3 shadow">
        <Menu size={24} onClick={() => setIsOpen(true)} className="cursor-pointer" />
        <div></div>
      </div>

      {/* Sidebar */}
      <div className="flex">
        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 z-50 h-full w-64 bg-black text-white transform transition-transform duration-300 lg:hidden ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <img src={logo} alt="Logo" className="h-8" />
            <X size={24} onClick={() => setIsOpen(false)} className="cursor-pointer" />
          </div>

          <nav className="flex flex-col gap-6 text-[16px] px-6 pt-6">
            <NavLink to="/dashboard" className="flex items-center gap-3 hover:text-yellow-300">
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </NavLink>
            <NavLink to="/staff-directory" className="flex items-center gap-3 hover:text-yellow-300">
              <Users size={20} />
              <span>Staff Directory</span>
            </NavLink>
            <NavLink to="/it-request" className="flex items-center gap-3 hover:text-yellow-300">
              <Laptop size={20} />
              <span>IT Request</span>
            </NavLink>
            <NavLink to="/tickets" className="flex items-center gap-3 hover:text-yellow-300">
              <Ticket size={20} />
              <span>Tickets</span>
            </NavLink>
            <NavLink to="/todo-list" className="flex items-center gap-3 hover:text-yellow-300">
              <ListTodo size={20} />
              <span>Todo List</span>
            </NavLink>
          </nav>

          <div className="absolute bottom-6 left-6 flex items-center space-x-3">
            <div className="bg-yellow-300 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center">
              JS
            </div>
            <div>
              <div className="font-semibold leading-tight">Mohamed Virji</div>
              <div className="text-sm text-gray-400">Tech Lead</div>
            </div>
            <div className="flex flex-col items-center -space-y-1 text-gray-400 ml-6">
              <ChevronUp size={16} />
              <ChevronDown size={16} />
            </div>
          </div>
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden lg:flex lg:flex-col w-64 h-screen bg-black text-white">
          <div className="flex items-center space-x-2 px-6 pt-6 pb-2">
            <img src={logo} alt="BRR Logo" className="h-10" />
          </div>

          <nav className="flex flex-col gap-6 text-[16px] px-6 pt-6">
            <NavLink to="/dashboard" className="flex items-center gap-3 hover:text-yellow-300">
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </NavLink>
            <NavLink to="/staff-directory" className="flex items-center gap-3 hover:text-yellow-300">
              <Users size={20} />
              <span>Staff Directory</span>
            </NavLink>
            <NavLink to="/it-request" className="flex items-center gap-3 hover:text-yellow-300">
              <Laptop size={20} />
              <span>IT Request</span>
            </NavLink>
            <NavLink to="/tickets" className="flex items-center gap-3 hover:text-yellow-300">
              <Ticket size={20} />
              <span>Tickets</span>
            </NavLink>
            <NavLink to="/todo-list" className="flex items-center gap-3 hover:text-yellow-300">
              <ListTodo size={20} />
              <span>Todo List</span>
            </NavLink>
          </nav>

          <div className="mt-auto px-6 py-6 flex items-center space-x-3">
            <div className="bg-yellow-300 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center">
              MV
            </div>
            <div>
              <div className="font-semibold leading-tight">Mohamed Virji</div>
              <div className="text-sm text-gray-400">Tech Lead</div>
            </div>
            <div className="flex flex-col items-center -space-y-1 text-gray-400 ml-6">
              <ChevronUp size={16} />
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden h-[56px]"></div>
    </>
  );
}
