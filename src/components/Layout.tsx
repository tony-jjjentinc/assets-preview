import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import MobileHeader from './MobileHeader';

const Layout: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="d-flex flex-column h-100 w-100">
      <MobileHeader toggleSidebar={() => setIsMobileOpen(prev => !prev)} />
      <div className="d-flex flex-grow-1 overflow-hidden">
        <Sidebar isMobileOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
        <div className="flex-grow-1 overflow-auto bg-body-tertiary">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
