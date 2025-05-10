import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import Sidebar from './layout/Sidebar';

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1">
          <Routes />
        </div>
      </div>
    </Router>
  );
}
