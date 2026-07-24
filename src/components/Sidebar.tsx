import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '280px', height: '100vh' }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <span className="fs-4">Preview App</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link link-dark">
            <i className="bi bi-ui-checks me-2"></i>
            Components
          </Link>
        </li>
        <li>
          <Link to="/images" className="nav-link link-dark">
            <i className="bi bi-images me-2"></i>
            Images
          </Link>
        </li>
        <li>
          <Link to="/patterns" className="nav-link link-dark">
            <i className="bi bi-grid-3x3 me-2"></i>
            Patterns
          </Link>
        </li>
        <li>
          <Link to="/typography" className="nav-link link-dark">
            <i className="bi bi-type me-2"></i>
            Typography
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
