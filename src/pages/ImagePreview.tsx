import React, { useState } from 'react';

const logos = [
  'base-dark.png',
  'base-dark.svg',
  'base-light.png',
  'base-light.svg',
  'base.png',
  'base.svg',
  'jjjei_horizontal-dark.png',
  'jjjei_horizontal-light.png',
  'jjjei_horizontal.png',
  'jjjei_horizontal.svg',
  'jjjei_stacked-dark.png',
  'jjjei_stacked-fit-dark.png',
  'jjjei_stacked-fit-light.png',
  'jjjei_stacked-fit.png',
  'jjjei_stacked-fit.svg',
  'jjjei_stacked-light.png',
  'jjjei_stacked.png',
  'jjjei_stacked.svg',
  'logo.svg',
  'marymart_horizontal.png',
  'marymart_horizontal.svg',
  'marymart_stacked.png',
  'marymart_stacked.svg',
];

const baseUrl = 'https://cdn.jsdelivr.net/gh/tony-jjjentinc/assets@main/images/logo/';

const ImagePreview: React.FC = () => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [fullscreenLogo, setFullscreenLogo] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedEmbedId, setCopiedEmbedId] = useState<string | null>(null);

  const handleCopy = (text: string, logoName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(logoName);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const handleCopyEmbed = (code: string, logoName: string) => {
    navigator.clipboard.writeText(code);
    setCopiedEmbedId(logoName);
    setTimeout(() => setCopiedEmbedId(null), 1500);
  };

  const handleDownload = async (url: string, logoName: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = logoName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(a.href);
    } catch (err) {
      console.error('Failed to download image', err);
    }
  };

  const filteredLogos = logos.filter(logo => logo.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <div className="container-fluid min-vh-100 py-5 p-4 p-md-5 bg-primary-subtle">
        <div className="row justify-content-center">
          <div className="col-12">
            
            <div className="mb-4 text-center">
              <h1 className="mb-3 fw-bold">Images</h1>
              <p className="text-muted fs-5 mb-4">Images assets, including variants and colors of the JJJEI and Marymart logo</p>
            </div>

            <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-5">
              <div className="card-header bg-white border-bottom pt-4 px-4 pb-3 d-flex justify-content-end">
                <div className="input-group" style={{ maxWidth: '300px' }}>
                  <span className="input-group-text bg-light border-end-0 text-muted"><i className="bi bi-search"></i></span>
                  <input 
                    type="text" 
                    className="form-control border-start-0 ps-0 bg-light" 
                    placeholder="Search assets..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="card-body p-4 bg-light">
                {filteredLogos.length > 0 ? (
                  <div className="row g-3">
                    {filteredLogos.map((logo) => {
                      const url = `${baseUrl}${logo}`;
                      const isDarkVariant = logo.includes('-light') || logo.includes('base-light');
                      const isCopied = copiedId === logo;

                      return (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={logo}>
                          <div className="card h-100 border bg-white rounded-3 shadow-sm overflow-hidden">
                            <div 
                              className={`p-4 d-flex align-items-center justify-content-center position-relative ${isDarkVariant ? 'bg-dark' : 'bg-white'}`}
                              style={{ height: '160px' }}
                            >
                              <img 
                                src={url} 
                                alt={logo} 
                                style={{ maxWidth: '85%', maxHeight: '85%', objectFit: 'contain' }} 
                              />
                              <button 
                                className="position-absolute top-0 end-0 m-2 btn btn-sm btn-outline-secondary border-0"
                                onClick={() => { setFullscreenImage(url); setFullscreenLogo(logo); }}
                                title="Full Screen"
                                style={{ cursor: 'pointer' }}
                              >
                                <i className="bi bi-arrows-fullscreen"></i>
                              </button>
                            </div>

                            <div className="card-body p-3 d-flex align-items-center justify-content-between border-top">
                              <span className="small text-truncate fw-medium text-dark me-2" title={logo}>
                                {logo}
                              </span>

                              <div className="d-flex gap-2">
                                <button
                                  className={`btn btn-sm ${copiedEmbedId === logo ? 'btn-success' : 'btn-outline-secondary'} border-0`}
                                  onClick={() => handleCopyEmbed(`<img src="${url}" alt="${logo}" />`, logo)}
                                  title="Copy Embed Code"
                                  style={{ width: '32px', height: '32px', padding: 0 }}
                                >
                                  {copiedEmbedId === logo ? <i className="bi bi-check-lg"></i> : <i className="bi bi-code-slash"></i>}
                                </button>
                                <button 
                                  className={`btn btn-sm ${isCopied ? 'btn-success' : 'btn-outline-secondary border-0'}`} 
                                  onClick={() => handleCopy(url, logo)} 
                                  title="Copy Link" 
                                  style={{ width: '32px', height: '32px', padding: 0 }}> 
                                  {isCopied ? <i className="bi bi-check-lg"></i> : <i className="bi bi-clipboard"></i>} 
                                </button>
                                <button
                                  className="btn btn-sm btn-outline-secondary border-0"
                                  title="Download Image"
                                  style={{ width: '32px', height: '32px', padding: 0 }}
                                  onClick={() => handleDownload(url, logo)}
                                >
                                  <i className="bi bi-download"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-5 text-muted bg-white rounded-3 border">
                    <i className="bi bi-search fs-2 mb-2 d-block opacity-50"></i>
                    <p className="mb-0">No assets found matching "{searchQuery}"</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      {fullscreenImage && fullscreenLogo && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ zIndex: 9999, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          onClick={() => { setFullscreenImage(null); setFullscreenLogo(null); }}
        >
          <img 
            src={fullscreenImage} 
            alt="Fullscreen preview" 
            style={{ maxWidth: '85vw', maxHeight: '85vh', objectFit: 'contain' }} 
          />
          <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex gap-2">
            <button
              className={`btn btn-sm ${copiedId === fullscreenLogo ? 'btn-success' : 'btn-outline-secondary border-0'}`}
              onClick={(e) => { e.stopPropagation(); handleCopy(fullscreenImage!, fullscreenLogo!); }}
              title="Copy CDN Link"
              style={{ width: '32px', height: '32px', padding: 0 }}
            >
              {copiedId === fullscreenLogo ? <i className="bi bi-check-lg"></i> : <i className="bi bi-clipboard"/>}
            </button>
            <button
              className="btn btn-sm btn-outline-secondary border-0"
              onClick={(e) => { e.stopPropagation(); handleDownload(fullscreenImage!, fullscreenLogo!); }}
              title="Download Image"
              style={{ width: '32px', height: '32px', padding: 0 }}
            >
              <i className="bi bi-download"/>
            </button>
            <button
              className="btn btn-sm btn-outline-danger border-0"
              onClick={(e) => { e.stopPropagation(); setFullscreenImage(null); setFullscreenLogo(null); }}
              title="Close"
              style={{ width: '32px', height: '32px', padding: 0 }}
            >
              <i className="bi bi-x-lg"/>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImagePreview;
