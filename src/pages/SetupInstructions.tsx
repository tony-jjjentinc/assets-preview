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
  const [activeTab, setActiveTab] = useState<'existing' | 'new'>('existing');

  const existingOverrideOnly = `<!-- JJJEI Assets Design System -->
<!-- Example: loading the GMO theme base -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/tony-jjjentinc/assets@main/colors/v3/jjjei_gmo:0.css">
`;

  const newProjectSnippet = `<!-- 1. Create a new index.html file -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project</title>

  <!-- 2. Bootstrap 5 Core CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">

  <!-- 3. Assets Design System (MUST be after Bootstrap) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/tony-jjjentinc/assets@main/colors/v3/jjjei_gmo:0.css">
</head>
<body>
  <h1>Hello, World!</h1>

  <!-- 4. Bootstrap 5 JS Bundle -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
</html>
`;

  return (
    <div className="container-fluid min-vh-100 py-5 p-4 p-md-5 bg-primary-subtle">
      <div className="row justify-content-center">
        <div className="col-12">
          
          <div className="mb-4 text-center">
            <h1 className="mb-3 fw-bold text-center">Setup and Usage</h1>
            
            <div className='d-flex flex-row gap-3 align-items-center justify-content-center justify-content-md-start flex-wrap mt-5'>
              <h5 className="p text-muted mb-0">Setup instructions for:</h5>
              <div className="btn-group shadow-sm" role="group" aria-label="Setup variants">
                <input type="radio" className="btn-check" name="setupVariant" id="existingProj" autoComplete="off" checked={activeTab === 'existing'} onChange={() => setActiveTab('existing')} />
                <label className="btn btn-outline-primary btn-sm px-4 py-2 fw-bold" htmlFor="existingProj">Existing Projects</label>

                <input type="radio" className="btn-check" name="setupVariant" id="newProj" autoComplete="off" checked={activeTab === 'new'} onChange={() => setActiveTab('new')} />
                <label className="btn btn-outline-primary btn-sm px-4 py-2 fw-bold" htmlFor="newProj">New Projects</label>
              </div>
            </div>
          </div>

          {activeTab === 'existing' && (
            <div className="fade show">
              <div className="card border-0 shadow-sm mb-5 rounded-4 overflow-hidden">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0 px-4">
                  <h3 className="fw-bold text-dark mb-0">Import the Design System</h3>
                </div>
                <div className="card-body p-4 pt-2">
                  <p className="mb-4">
                    If you just want the colors for your existing project, you can simply import the override CDN into your HTML <code>&lt;head&gt;</code>.
                  </p>
                  <CodeSnippet code={existingOverrideOnly} />

                  <div className="alert alert-primary mt-4 mb-0 border-0 shadow-sm">
                    <i className="bi bi-info-circle-fill me-3"></i>
                    <strong>Using Bootstrap?</strong> We highly recommend importing the core Bootstrap 5 CDNs (CSS and JS) to leverage the full layout system. Ensure the Assets CDN URL is imported <em>after</em> Bootstrap CSS!
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'new' && (
            <div className="fade show">
              <div className="card border-0 shadow-sm mb-5 rounded-4 overflow-hidden">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0 px-4">
                  <h3 className="fw-bold text-dark mb-0">Start a New Project</h3>
                </div>
                <div className="card-body p-4 pt-2">
                  <p className="mb-4">
                    For brand new projects, <strong>we strongly recommend Bootstrap 5</strong> as the foundation of your layout. Create a standard <code>index.html</code> file and paste the following boilerplate. It includes the core Bootstrap CSS/JS alongside the custom JJJEI theme override (loaded in the correct order).
                  </p>
                  <CodeSnippet code={newProjectSnippet} />
                </div>
              </div>
            </div>
          )}

          {/* Usage Section */}
          <div className="mt-5 pt-4">
            <h2 className="mb-4 fw-bold text-center">Basic Usage</h2>

            <div className="card border-0 shadow-sm mb-5 rounded-4 overflow-hidden">
              <div className="card-header bg-white border-bottom-0 pt-4 pb-0 px-4">
                <h3 className="fw-bold text-dark mb-0"><i className="bi bi-palette me-3"></i>Color Classes</h3>
              </div>
              <div className="card-body p-4 pt-2">
                <p className="mb-4">
                  In addition to standard Bootstrap colors, the Assets repository introduces specific utility classes mapped to the current theme. You can use these exactly like standard Bootstrap color utilities (e.g., <code>bg-*</code>, <code>text-*</code>, <code>border-*</code>).
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

            <div className="card border-0 shadow-sm mb-5 rounded-4 overflow-hidden">
              <div className="card-header bg-white border-bottom-0 pt-4 pb-0 px-4">
                <h3 className="fw-bold text-dark mb-0"><i className="bi bi-image me-3"></i>Images and Assets</h3>
              </div>
              <div className="card-body p-4 pt-2">
                <p className="mb-4">
                  The design system includes a suite of brand-approved images, backgrounds, and logos. These can be used directly from the CDN.
                </p>
                <CodeSnippet code={`<!-- Standard Image Usage -->\n<img src="https://cdn.jsdelivr.net/gh/tony-jjjentinc/assets@main/images/logo/jjjei_horizontal.png" class="img-fluid" alt="JJJEI Logo">\n\n<!-- Background Image Usage -->\n<div style="background-image: url('https://cdn.jsdelivr.net/gh/tony-jjjentinc/assets@main/images/patterns/pattern1.png'); background-size: cover;">\n  ...\n</div>`} />
                <p className="mt-3 mb-0 text-muted small">
                  See the <Link to="/images">Images</Link> and <Link to="/patterns">Patterns</Link> preview pages for a complete directory of available assets.
                </p>
              </div>
            </div>

            <div className="card border-0 shadow-sm mb-5 rounded-4 overflow-hidden">
              <div className="card-header bg-white border-bottom-0 pt-4 pb-0 px-4">
                <h3 className="fw-bold text-dark mb-0"><i className="bi bi-star me-3"></i>Icons</h3>
              </div>
              <div className="card-body p-4 pt-2">
                <p className="mb-4">
                  We recommend both <strong>Bootstrap Icons</strong> and <strong>FontAwesome</strong> for iconography. You can include either (or both) CDNs into your project <code>&lt;head&gt;</code> depending on your project needs.
                </p>
                <CodeSnippet code={`<!-- 1. Bootstrap Icons CDN -->\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">\n\n<!-- 2. FontAwesome 6 CDN -->\n<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">`} />
                <p className="mt-3 mb-0 text-muted small">
                  Explore and search all available icons on the <Link to="/icons">Icons Index page</Link>.
                </p>
              </div>
            </div>

            <div className="card border-0 shadow-sm mb-5 rounded-4 overflow-hidden">
              <div className="card-header bg-white border-bottom-0 pt-4 pb-0 px-4">
                <h3 className="fw-bold text-dark mb-0"><i className="bi bi-type me-3"></i>Fonts and Typography</h3>
              </div>
              <div className="card-body p-4 pt-2">
                <p className="mb-4">
                  Typography is automatically configured when you import the CSS CDN. We utilize <strong>Inter</strong> (loaded directly from the assets repository) as the primary typeface for clean, modern, and highly readable text across all UI elements and headings.
                </p>
                <CodeSnippet code={`<link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">`} />
                <div className="row g-4">
                  <div className="col-12">
                    <div className="p-4 border rounded bg-light">
                      <h4 className="fw-bold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Primary Font (Inter)</h4>
                      <p className="text-muted mb-0">Automatically applied to the <code>body</code>, headings (<code>h1</code> - <code>h6</code>), buttons, and UI components.</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 mb-0 text-muted small">
                  See the <Link to="/typography">Typography preview page</Link> for full styling examples.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupInstructions;
