import React, { useState, useEffect, useMemo } from 'react';

const BOOTSTRAP_METADATA_URL = 'https://unpkg.com/bootstrap-icons@1.11.3/font/bootstrap-icons.json';
const FA_METADATA_URL = 'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.5.1/metadata/icons.json';

interface FaIconMetadata {
  styles: string[];
  label: string;
  search?: {
    terms?: string[];
  };
}

interface FaIconData {
  name: string;
  style: string; // solid, regular, brands
}

interface IconCardProps {
  iconName: string;
  className: string;
  snippet: string;
  library: 'bootstrap' | 'fontawesome';
  style?: string;
}

const IconCard = ({ iconName, className, snippet, library, style = 'solid' }: IconCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedImage, setCopiedImage] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleCopyCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(snippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyImage = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const svgUrl = library === 'bootstrap' 
        ? `https://raw.githubusercontent.com/twbs/icons/main/icons/${iconName}.svg`
        : `https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.5.1/svgs/${style}/${iconName}.svg`;

      const response = await fetch(svgUrl);
      if (!response.ok) throw new Error('Network response was not ok');
      const svgText = await response.text();

      const img = new Image();
      const svgBlob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });

      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas context unavailable');

      ctx.drawImage(img, 0, 0, 256, 256);
      URL.revokeObjectURL(url);

      const pngBlob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));
      if (!pngBlob) throw new Error('Failed to create PNG blob');

      if (navigator.clipboard && navigator.clipboard.write) {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': pngBlob })
        ]);
        setCopiedImage(true);
        setTimeout(() => setCopiedImage(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy image to clipboard', err);
    }
  };

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      setDownloading(true);
      const svgUrl = library === 'bootstrap' 
        ? `https://raw.githubusercontent.com/twbs/icons/main/icons/${iconName}.svg`
        : `https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.5.1/svgs/${style}/${iconName}.svg`;

      const response = await fetch(svgUrl);
      if (!response.ok) throw new Error('Network response was not ok');
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `${iconName}.svg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error('Failed to download icon SVG', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div 
      className="card border-0 shadow-sm text-center p-3 h-100 bg-white" 
      style={{ transition: 'transform 0.2s, box-shadow 0.2s' }}
      onMouseEnter={(e) => {
        setIsHovered(true);
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.classList.add('shadow');
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.classList.remove('shadow');
      }}
    >
      <div className="card-body p-2 d-flex flex-column align-items-center justify-content-center">
        <i className={`${className} fs-2 mb-3 ${copiedCode || copiedImage ? 'text-success' : 'text-dark'}`}></i>
        
        <div className="w-100 d-flex align-items-center justify-content-center" style={{ height: '30px' }}>
          {isHovered ? (
            <div className="d-flex align-items-center justify-content-center gap-2">
              <button 
                type="button"
                className={`btn btn-sm ${copiedCode ? 'btn-success text-white' : 'btn-outline-secondary'} rounded-circle d-flex align-items-center justify-content-center p-0`}
                style={{ width: '28px', height: '28px' }}
                onClick={handleCopyCode}
                title="Copy code snippet "
              >
                {copiedCode ? <i className="bi bi-check-lg" style={{ fontSize: '0.8rem' }}></i> : <i className="bi bi-code-slash" style={{ fontSize: '0.8rem' }}></i>}
              </button>
              <button 
                type="button"
                className={`btn btn-sm ${copiedImage ? 'btn-success text-white' : 'btn-outline-secondary'} rounded-circle d-flex align-items-center justify-content-center p-0`}
                style={{ width: '28px', height: '28px' }}
                onClick={handleCopyImage}
                title="Copy Image to Clipboard"
              >
                {copiedImage ? <i className="bi bi-check-lg" style={{ fontSize: '0.8rem' }}></i> : <i className="bi bi-image" style={{ fontSize: '0.8rem' }}></i>}
              </button>
              <button 
                type="button"
                className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center p-0"
                style={{ width: '28px', height: '28px' }}
                onClick={handleDownload}
                disabled={downloading}
                title="Download SVG File"
              >
                {downloading ? <i className="bi bi-arrow-repeat" style={{ fontSize: '0.8rem' }}></i> : <i className="bi bi-download" style={{ fontSize: '0.8rem' }}></i>}
              </button>
            </div>
          ) : (
            <div className="small text-truncate w-100 fw-medium" title={iconName}>
              {iconName}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const IconPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bootstrap' | 'fontawesome'>('bootstrap');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [bootstrapIcons, setBootstrapIcons] = useState<string[]>([]);
  const [faIcons, setFaIcons] = useState<FaIconData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [visibleCount, setVisibleCount] = useState(50);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        setIsLoading(true);
        // Fetch Bootstrap
        const bsRes = await fetch(BOOTSTRAP_METADATA_URL);
        const bsData = await bsRes.json();
        const bsList = Object.keys(bsData); // ['123', 'activity', ...]
        setBootstrapIcons(bsList);

        // Fetch FontAwesome
        const faRes = await fetch(FA_METADATA_URL);
        const faData: Record<string, FaIconMetadata> = await faRes.json();
        const faList: FaIconData[] = [];
        Object.entries(faData).forEach(([name, meta]) => {
          meta.styles.forEach(style => {
            faList.push({ name, style });
          });
        });
        setFaIcons(faList);
        setError(null);
      } catch (err) {
        console.error("Failed to load icon metadata", err);
        setError("Failed to load icon metadata from CDN.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMetadata();
  }, []);

  const handleTabChange = (tab: 'bootstrap' | 'fontawesome') => {
    setActiveTab(tab);
    setVisibleCount(100);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setVisibleCount(100);
  };

  const filteredBootstrap = useMemo(() => {
    if (!searchQuery) return bootstrapIcons;
    const lowerQ = searchQuery.toLowerCase();
    return bootstrapIcons.filter(name => name.toLowerCase().includes(lowerQ));
  }, [bootstrapIcons, searchQuery]);

  const filteredFa = useMemo(() => {
    if (!searchQuery) return faIcons;
    const lowerQ = searchQuery.toLowerCase();
    return faIcons.filter(icon => icon.name.toLowerCase().includes(lowerQ) || icon.style.includes(lowerQ));
  }, [faIcons, searchQuery]);

  const currentListLength = activeTab === 'bootstrap' ? filteredBootstrap.length : filteredFa.length;
  const hasMore = visibleCount < currentListLength;

  return (
    <div className="container-fluid min-vh-100 py-5 p-4 p-md-5 bg-primary-subtle">
      <div className="row justify-content-center mb-5">
        <div className="col-12">
          
          <div className="mb-4 text-center">
            <h1 className="mb-3 fw-bold">Icons Index</h1>
            <p className="text-muted fs-5 mb-3">Browse and copy icons from Bootstrap Icons and FontAwesome.</p>
            
            <div className="alert alert-info border-0 shadow-sm d-inline-block text-start mb-3">
              <i className="bi bi-info-circle-fill me-2"></i>
              <strong>Usage Note:</strong> Ensure the respective CDNs for Bootstrap Icons or FontAwesome are properly imported in your project to use these icons!
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-5">
            <div className="card-header bg-white border-bottom pt-4 px-4 pb-3 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
              <div className="btn-group" role="group">
                <input type="radio" className="btn-check" name="iconLib" id="lib-bs" checked={activeTab === 'bootstrap'} onChange={() => handleTabChange('bootstrap')} />
                <label className="btn btn-outline-primary" htmlFor="lib-bs"><i className="bi bi-bootstrap-fill me-2"></i>Bootstrap</label>

                <input type="radio" className="btn-check" name="iconLib" id="lib-fa" checked={activeTab === 'fontawesome'} onChange={() => handleTabChange('fontawesome')} />
                <label className="btn btn-outline-primary" htmlFor="lib-fa"><i className="fa-brands fa-font-awesome me-2"></i>FontAwesome</label>
              </div>

              <div className="input-group" style={{ maxWidth: '300px' }}>
                <span className="input-group-text bg-light border-end-0"><i className="bi bi-search"></i></span>
                <input 
                  type="text" 
                  className="form-control border-start-0 ps-0 bg-light" 
                  placeholder="Search icons..." 
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            </div>

            <div className="card-body p-4 bg-light">
              {isLoading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : error ? (
                <div className="alert alert-danger text-center">{error}</div>
              ) : currentListLength === 0 ? (
                <div className="text-center py-5 text-muted">
                  <i className="bi bi-search fs-1 mb-3 d-block opacity-50"></i>
                  No icons found matching "{searchQuery}"
                </div>
              ) : (
                <>
                  <div className="d-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(256px, 1fr))', gap: '1rem' }}>
                    {activeTab === 'bootstrap' && filteredBootstrap.slice(0, visibleCount).map((name) => (
                      <IconCard 
                        key={name} 
                        iconName={name} 
                        className={`bi bi-${name}`} 
                        snippet={`<i class="bi bi-${name}"></i>`}
                        library="bootstrap"
                      />
                    ))}

                    {activeTab === 'fontawesome' && filteredFa.slice(0, visibleCount).map((icon, idx) => {
                      const prefix = icon.style === 'brands' ? 'fa-brands' : icon.style === 'regular' ? 'fa-regular' : 'fa-solid';
                      return (
                        <IconCard 
                          key={`${icon.style}-${icon.name}-${idx}`} 
                          iconName={icon.name} 
                          className={`${prefix} fa-${icon.name}`} 
                          snippet={`<i class="${prefix} fa-${icon.name}"></i>`}
                          library="fontawesome"
                          style={icon.style}
                        />
                      );
                    })}
                  </div>

                  {hasMore && (
                    <div className="text-center mt-5">
                      <button 
                        className="btn btn-outline-primary px-5 rounded-pill shadow-sm"
                        onClick={() => setVisibleCount(prev => prev + 100)}
                      >
                        Load More Icons ({currentListLength - visibleCount} remaining)
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IconPreview;
