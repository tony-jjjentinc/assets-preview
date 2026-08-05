import React from 'react';

interface MobileHeaderProps {
  toggleSidebar: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ toggleSidebar }) => {
  return (
    <div className="d-flex d-md-none justify-content-between align-items-center p-3 bg-white shadow-sm border-bottom">
      <img 
        src="https://cdn.jsdelivr.net/gh/tony-jjjentinc/assets@main/images/logo/jjjei_stacked.svg" 
        alt="Marymart Logo" 
        style={{ height: '50px', objectFit: 'contain' }} 
      />
      <button className="btn" onClick={toggleSidebar}>
        <i className="bi bi-list fs-3"></i>
      </button>
    </div>
  );
};

export default MobileHeader;
