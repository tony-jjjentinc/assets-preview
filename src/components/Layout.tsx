import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FloatingToolbar } from './FloatingToolbar';

const Layout: React.FC = () => {
  return (
    <div className="d-flex w-100 h-100">
      <Sidebar />
      <div className="flex-grow-1 p-3 overflow-auto">
        <Outlet />
      </div>
      <FloatingToolbar />
    </div>
  );
};

export default Layout;
