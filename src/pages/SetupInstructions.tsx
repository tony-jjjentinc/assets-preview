import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CodeSnippet = ({ code }: { code: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="position-relative">
      <pre className="bg-dark text-light p-3 rounded shadow-sm mb-0 overflow-auto" style={{ fontSize: '0.9rem' }}>
        <code>{code}</code>
      </pre>
      <button 
        className={`btn btn-sm position-absolute top-0 end-0 m-2 ${isCopied ? 'btn-success' : 'btn-outline-light'}`}
        onClick={() => handleCopy(code)}
      >
        {isCopied ? <><i className="bi bi-check2"></i> Copied</> : <><i className="bi bi-clipboard"></i> Copy</>}
      </button>
    </div>
  );
};

const ColorRow = ({ title, desc, classes }: { title: string, desc: React.ReactNode, classes: {className: string, label: string}[] }) => (
  <div className="mb-4">
    <h5 className="fw-bold">{title}</h5>
    <p className="text-muted small mb-3">{desc}</p>
    <div className="row g-3">
      {classes.map((cls, idx) => (
        <div key={idx} className="col-12 col-md-6 col-lg-4">
          <div className="d-flex align-items-center p-2 border rounded bg-white shadow-sm h-100">
            <div className={`rounded border ${cls.className}`} style={{ width: '40px', height: '40px', minWidth: '40px' }}></div>
            <div className="ms-3 overflow-hidden">
              <div className="fw-semibold text-truncate">{cls.label}</div>
              <code className="small text-muted text-truncate">.{cls.className}</code>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SetupInstructions: React.FC = () => {
  const htmlSnippet = `<!-- 1. Bootstrap 5 Core CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

<!-- 2. Bootstrap 5 JS Bundle (Optional but recommended) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmxc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

<!-- 3. JJJEI Assets Design System (MUST be after Bootstrap) -->
<!-- Example: loading the GMO theme base -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/tony-jjjentinc/assets@main/colors/v1/jjjei_gmo:0.css">
`;

  return (
    <div className="container-fluid min-vh-100 py-5 p-4 p-md-5 bg-primary-subtle">
      <div className="row justify-content-center">
        <div className="col-12 col-xl-10">
          
          <div className="mb-4 text-center text-md-start">
            <h1 className="mb-3 fw-bold text-center">Setup and Instructions</h1>
            <p className="text-muted text-center fs-5">Everything you need to integrate the JJJEI design system into your project.</p>
          </div>

          {/* Section 1: Bootstrap */}
          <div className="card border-0 shadow-sm mb-5 rounded-4 overflow-hidden">
            <div className="card-header bg-white border-bottom-0 pt-4 pb-0 px-4">
              <h3 className="fw-bold text-primary mb-0"><i className="bi bi-1-circle me-2"></i>Bootstrap 5 Foundation</h3>
            </div>
            <div className="card-body p-4">
              <p>
                The foundation of the JJJEI design system is built entirely on top of <strong>Bootstrap 5</strong>. This means that out of the box, you have access to the entire suite of standard Bootstrap utility classes for layout, spacing, typography, and flexbox.
              </p>
              <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary shadow-sm mt-2">
                <i className="bi bi-journal-code me-2"></i>Official Bootstrap 5 Documentation
              </a>
            </div>
          </div>

          {/* Section 2: CDNs */}
          <div className="card border-0 shadow-sm mb-5 rounded-4 overflow-hidden">
            <div className="card-header bg-white border-bottom-0 pt-4 pb-0 px-4">
              <h3 className="fw-bold text-primary mb-0"><i className="bi bi-2-circle me-2"></i>Include the CDNs</h3>
            </div>
            <div className="card-body p-4">
              <p className="mb-4">
                To start using the design system, you must import the necessary CSS and JS files in your HTML <code>&lt;head&gt;</code>. 
                <br/><strong>Crucial:</strong> The JJJEI Assets CSS file must be imported <em>after</em> the Bootstrap CSS so that it can successfully override the default variables!
              </p>
              <CodeSnippet code={htmlSnippet} />
            </div>
          </div>

          {/* Section 3: Colors */}
          <div className="card border-0 shadow-sm mb-5 rounded-4 overflow-hidden">
            <div className="card-header bg-white border-bottom-0 pt-4 pb-0 px-4">
              <h3 className="fw-bold text-primary mb-0"><i className="bi bi-3-circle me-2"></i>Custom Color Utilities</h3>
            </div>
            <div className="card-body p-4">
              <p className="mb-4">
                In addition to standard Bootstrap colors, the Assets repository introduces specific utility classes mapped to the current theme.
              </p>
              
              <ColorRow 
                title="Page Background" 
                desc="The default washed-out background color. It should typically be applied to your <body> or root app container."
                classes={[{ className: 'bg-primary-subtle', label: 'Primary Subtle' }]}
              />

              <ColorRow 
                title="Base Primary" 
                desc="The solid, flat version of the current theme's primary color. (Note: standard elements use bg-primary-gradient by default, use this when you need a flat alternative)."
                classes={[{ className: 'bg-primary-base', label: 'Primary Base' }]}
              />

              <ColorRow 
                title="JJJEI Brand Colors" 
                desc="The overarching corporate brand colors for JJJEI, completely independent of the selected sub-theme."
                classes={[
                  { className: 'bg-jjjei-primary', label: 'JJJEI Primary' },
                  { className: 'bg-jjjei-secondary', label: 'JJJEI Secondary' }
                ]}
              />

              <ColorRow 
                title="System Utilities" 
                desc="Standard Bootstrap functional colors re-mapped perfectly to the JJJEI palette."
                classes={[
                  { className: 'bg-success', label: 'Success' },
                  { className: 'bg-danger', label: 'Danger' },
                  { className: 'bg-warning', label: 'Warning' },
                  { className: 'bg-info', label: 'Info' }
                ]}
              />

              <ColorRow 
                title="Status Colors" 
                desc={<>Dynamic semantic status colors (0-9). Use these for badges, indicators, and data visualizations. See the <Link to="/status">Status Colors page</Link> for the full mapping and class names.</>}
                classes={[
                  { className: 'bg-status-0', label: 'Status 0' },
                  { className: 'bg-status-1', label: 'Status 1' },
                  { className: 'bg-status-2', label: 'Status 2' }
                ]}
              />

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SetupInstructions;
