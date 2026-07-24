import React from 'react';

const logos = [
  'logo.svg',
  'marymart_compact.svg',
  'marymart_horizontal.svg'
];

const baseUrl = 'https://tony-jjjentinc.github.io/assets/images/logo/';

const ImagePreview: React.FC = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Logo Gallery</h2>
      <div className="row g-4">
        {logos.map((logo, index) => {
          const url = `${baseUrl}${logo}`;
          const embedSnippet = `<img src="${url}" alt="${logo}" />`;
          return (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-img-top p-3 d-flex align-items-center justify-content-center bg-light border-bottom" style={{ height: '250px' }}>
                  <img src={url} alt={logo} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-truncate" title={logo}>{logo}</h5>
                  <p className="card-text small mb-3">
                    <strong className="d-block mb-1">Direct URL:</strong>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-break">{url}</a>
                  </p>
                  <div className="mb-4">
                    <strong className="d-block mb-1 small">Embed HTML:</strong>
                    <textarea 
                      className="form-control form-control-sm text-muted font-monospace" 
                      rows={3} 
                      readOnly 
                      value={embedSnippet} 
                      onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                    />
                  </div>
                  <div className="mt-auto">
                    <a href={url} download={logo} className="btn btn-primary w-100">
                      <i className="bi bi-download me-2"></i>Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImagePreview;
