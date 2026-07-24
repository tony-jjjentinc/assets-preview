import React, { useState } from 'react';

const logos = [
  'logo.svg',
  'marymart_compact.svg',
  'marymart_horizontal.svg'
];

const baseUrl = 'https://tony-jjjentinc.github.io/assets/images/logo/';

const ImagePreview: React.FC = () => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <div className="container my-5 p-4 p-md-5">
        <h2 className="mb-4">Logo Gallery</h2>
        <div className="row g-4">
          {logos.map((logo, index) => {
            const url = `${baseUrl}${logo}`;
            const embedSnippet = `<img src="${url}" alt="${logo}" />`;
            return (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                  <div 
                    className="card-img-top p-4 d-flex align-items-center justify-content-center" 
                    style={{ height: '220px', backgroundColor: '#f8f9fa' }}
                  >
                    <img src={url} alt={logo} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div className="card-body d-flex align-items-center justify-content-between bg-white border-top">
                    <h6 className="card-title text-truncate mb-0 fw-semibold text-dark me-3" title={logo}>
                      {logo}
                    </h6>
                    <div className="btn-group shadow-sm">
                      <button 
                        className="btn btn-light border btn-sm" 
                        title="Copy Direct URL"
                        onClick={() => handleCopy(url)}
                      >
                        <i className="bi bi-link-45deg"></i>
                      </button>
                      <button 
                        className="btn btn-light border btn-sm" 
                        title="Copy Embed Code"
                        onClick={() => handleCopy(embedSnippet)}
                      >
                        <i className="bi bi-code-slash"></i>
                      </button>
                      <a 
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-light border btn-sm"
                        title="Open/Download"
                      >
                        <i className="bi bi-download"></i>
                      </a>
                      <button 
                        className="btn btn-light border btn-sm" 
                        title="Fullscreen Preview"
                        onClick={() => setFullscreenImage(url)}
                      >
                        <i className="bi bi-arrows-fullscreen"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {fullscreenImage && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ zIndex: 9999, backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)' }}
          onClick={() => setFullscreenImage(null)}
        >
          <button 
            className="btn btn-dark position-absolute top-0 end-0 m-4 rounded-circle"
            onClick={() => setFullscreenImage(null)}
            style={{ width: '48px', height: '48px' }}
          >
            <i className="bi bi-x-lg"></i>
          </button>
          <img 
            src={fullscreenImage} 
            alt="Fullscreen preview" 
            style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }} 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default ImagePreview;
