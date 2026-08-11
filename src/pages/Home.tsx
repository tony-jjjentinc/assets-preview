import React from 'react';
import { Link } from 'react-router-dom';

const modules = [
  {
    title: 'Departmental Colors',
    description: 'Color preview assigned for the departments and sub-departments',
    icon: 'bi-palette-fill',
    link: '/colors',
    color: 'text-primary'
  },
  {
    title: 'System and Status Colors',
    description: 'Functional system utility colors and status level indicators',
    icon: 'bi-palette-fill',
    link: '/status',
    color: 'text-primary'
  },
  {
    title: 'Image Assets',
    description: 'Images assets, including variants and colors of the JJJEI and Marymart logo',
    icon: 'bi-images',
    link: '/images',
    color: 'text-primary'
  },
  {
    title: 'Font and Typography',
    description: 'Primary typeface and typographic preview for the standard font (Inter)',
    icon: 'bi-type',
    link: '/typography',
    color: 'text-primary'
  },
  {
    title: 'Icons Index',
    description: 'Searchable library of icons from Bootstrap and FontAwesome',
    icon: 'bi-hand-thumbs-up-fill',
    link: '/icons',
    color: 'text-primary'
  },
  /* Temporarily hidden Patterns preview
  {
    title: 'Patterns',
    description: 'Vector background mask patterns for UI sections.',
    icon: 'bi-grid-3x3',
    link: '/patterns',
    color: 'text-primary'
  },
  */

  
  // {
  //   title: 'Components',
  //   description: 'Pre-styled Bootstrap 5 UI elements and interactive widgets.',
  //   icon: 'bi-ui-checks-grid',
  //   link: '/components',
  //   color: 'text-primary'
  // },


  {
    title: 'Setup and Usage',
    description: 'Integration guide for existing and new projects.',
    icon: 'bi-gear',
    link: '/setup',
    color: 'text-primary'
  }
];

const Home: React.FC = () => {
  return (
    <div className="container-fluid min-vh-100 py-5 p-4 p-md-5 bg-primary-gradient">
      <div className="row justify-content-center">
        <div className="col-12">

          {/* Hero Section */}
          <div className="d-flex flex-column justify-content-center align-items-center" style={{height: '67vh'}}>
            <img 
              src="https://cdn.jsdelivr.net/gh/tony-jjjentinc/assets@main/images/logo/jjjei_stacked.svg" 
              alt="JJJEI Logo" 
              style={{ maxHeight: '156px', objectFit: 'contain' }}
              className="mb-4"
            />
            <h1 className="display-5 fw-bold text-dark mb-3 text-center">Dashboard Design Hub</h1>
            <p className="lead text-muted mx-auto mb-4 text-center">
              The central source of truth for the standardized designs, color, and design guidelines of dashboards and projects
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link to="/components" className="btn btn-outline-secondary btn-lg rounded-pill px-4 bg-white shadow-sm">
                Design preview
              </Link>
              <Link to="/setup" className="btn btn-primary btn-lg rounded-pill px-4 shadow-sm">
                Get Started <i className="bi bi-arrow-right me-1"></i>
              </Link>
            </div>
          </div>

          {/* Feature Modules Grid */}
          <div className="row g-4 mb-5">
            {modules.map((mod) => (
              <div key={mod.title} className="col-12 col-md-6 col-lg-4">
                <Link to={mod.link} className="text-decoration-none">
                  <div 
                    className="card h-100 border-0 rounded-4 shadow-sm p-4 bg-white text-start"
                    style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.classList.add('shadow');
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.classList.remove('shadow');
                    }}
                  >
                    <div className="d-flex align-items-center mb-3">
                      <div className="rounded-3 p-3 bg-none me-3 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                        <i className={`bi ${mod.icon} fs-4 ${mod.color}`}></i>
                      </div>
                      <h5 className="fw-bold text-dark mb-0">{mod.title}</h5>
                    </div>
                    <p className="text-muted small mb-0 flex-grow-1">{mod.description}</p>
                    <div className="mt-3 text-primary small fw-semibold d-flex align-items-center justify-content-end gap-2">
                      View <i className="bi bi-chevron-right ms-1"></i>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
