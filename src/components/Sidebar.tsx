import React from 'react';
import { NavLink } from 'react-router-dom';

const sidebarStyles = `
  .custom-nav-link {
    transition: all 0.2s ease-in-out;
    border-radius: 0.5rem;
    font-weight: 500;
  }
  .custom-nav-link:hover:not(.active) {
    background-color: rgba(0,0,0,0.05);
    transform: translateX(4px);
  }
  @media (max-width: 767.98px) {
    .sidebar-container {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      z-index: 1050;
      transform: translateX(-100%);
      transition: transform 0.3s ease;
    }
    .sidebar-container.open {
      transform: translateX(0);
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .sidebar-container {
      width: 80px !important;
      transition: width 0.3s ease;
    }
  }
`;

interface SidebarProps {
  isMobileOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobileOpen, onClose }) => {
  const handleNavClick = () => {
    if (isMobileOpen && onClose) {
      onClose();
    }
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) => 
    `nav-link custom-nav-link d-flex align-items-center justify-content-start justify-content-md-center justify-content-lg-start ${isActive ? 'active bg-primary-subtle shadow-sm text-body-emphasis' : 'link-dark'}`;

  return (
    <>
      <style>{sidebarStyles}</style>
      {isMobileOpen && (
        <div 
          className="d-md-none position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" 
          style={{ zIndex: 1040 }} 
          onClick={onClose}
        ></div>
      )}
      <div className={`d-flex flex-column flex-shrink-0 p-3 bg-white shadow-sm border-end sidebar-container ${isMobileOpen ? 'open' : ''}`} style={{ width: '280px', height: '100vh' }}>
        <div className="d-flex align-items-center justify-content-between justify-content-md-center mb-4 w-100 px-2">
          <a href="/assets-preview/" className="text-decoration-none">
            <img src="https://tony-jjjentinc.github.io/assets/images/logo/marymart_compact.svg" alt="Marymart Logo" className="d-block d-md-none d-lg-block" style={{ height: '64px', maxWidth: '100%', objectFit: 'contain' }} />
            <img src="https://tony-jjjentinc.github.io/assets/images/logo/logo.svg" alt="Marymart Logo Compact" className="d-none d-md-block d-lg-none" style={{ height: '40px', maxWidth: '100%', objectFit: 'contain' }} />
          </a>
          <button onClick={onClose} className="btn-close d-md-none mt-2" aria-label="Close"></button>
        </div>
        <hr className="mb-4 mt-0 opacity-10" />
        <ul className="nav nav-pills flex-column mb-auto gap-2">
          <li className="nav-item">
            <NavLink to="/" onClick={handleNavClick} className={navLinkClass} end>
              <i className="bi bi-ui-checks me-3 me-md-0 me-lg-3 fs-5"></i>
              <span className="d-inline d-md-none d-lg-inline">Components</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/images" onClick={handleNavClick} className={navLinkClass}>
              <i className="bi bi-images me-3 me-md-0 me-lg-3 fs-5"></i>
              <span className="d-inline d-md-none d-lg-inline">Images</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/typography" onClick={handleNavClick} className={navLinkClass}>
              <i className="bi bi-type me-3 me-md-0 me-lg-3 fs-5"></i>
              <span className="d-inline d-md-none d-lg-inline">Typography</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/patterns" onClick={handleNavClick} className={navLinkClass}>
              <i className="bi bi-grid-3x3 me-3 me-md-0 me-lg-3 fs-5"></i>
              <span className="d-inline d-md-none d-lg-inline">Patterns</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
