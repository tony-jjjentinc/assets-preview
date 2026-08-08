import React, { useState, useEffect } from 'react';
import { statusColors } from '../config/statusConfig';
import { systemColorMapping } from '../config/colorMapping';

const getSubtleHex = (hex: string): string => {
  if (!hex || hex === '#------') return '#------';
  let cleanHex = hex.replace('#', '');
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map(c => c + c).join('');
  }
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  const mix = (c: number) => Math.round(c * 0.25 + 255 * 0.75);
  const sr = mix(r).toString(16).padStart(2, '0');
  const sg = mix(g).toString(16).padStart(2, '0');
  const sb = mix(b).toString(16).padStart(2, '0');
  return `#${sr}${sg}${sb}`.toUpperCase();
};

interface StatusBadgeProps {
  className: string;
  badgeClass: string;
  extraClass?: string;
  hex: string;
  copiedText: string | null;
  onCopy: (text: string) => void;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ className, badgeClass, extraClass = '', hex, copiedText, onCopy }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isCopied = copiedText === hex;

  return (
    <span 
      className={`${badgeClass} badge p-2 fw-normal ${extraClass}`} 
      style={{ cursor: 'pointer', transition: 'all 0.2s ease-in-out', minWidth: '170px', display: 'inline-block', textAlign: 'center' }}
      onClick={() => onCopy(hex)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="Click to copy hex value, hover to reveal hex value"
    >
      {isCopied ? (
        <><i className="bi bi-check2 me-1"></i>Copied</>
      ) : isHovered ? (
        <span className="fw-semibold">{hex}</span>
      ) : (
        className
      )}
    </span>
  );
};

const StatusPreview: React.FC = () => {
  const [hexValues, setHexValues] = useState<Record<string, string>>({});
  const [systemColors, setSystemColors] = useState<Record<string, string>>({});
  const [copiedText, setCopiedText] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cacheBuster = Date.now();
        const [statusRes, sysRes] = await Promise.all([
          fetch(`https://raw.githubusercontent.com/tony-jjjentinc/assets/main/config/statusColors.json?t=${cacheBuster}`),
          fetch(`https://raw.githubusercontent.com/tony-jjjentinc/assets/main/config/systemColors.json?t=${cacheBuster}`)
        ]);
        const statusData = await statusRes.json();
        const sysData = await sysRes.json();
        setHexValues(statusData);
        setSystemColors(sysData);
      } catch (err) {
        console.error('Failed to fetch color data', err);
      }
    };
    fetchData();
  }, []);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="container-fluid min-vh-100 py-5 p-4 p-md-5 bg-primary-subtle">
      <div className="row justify-content-center">
        <div className="col-12">

          <div className="mb-4 text-center">
            <h1 className="mb-3 fw-bold">System and Status Colors</h1>
            <p className="text-muted fs-5 mb-4">Functional system utility colors and dynamic status level indicators.</p>
          </div>

          {/* Status Colors Table Section */}
          <section className="mb-5">
            <h4 className="mb-4 fw-semibold">Status Colors</h4>
            <div className="bg-white p-4 border rounded-4 shadow-sm">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0 text-nowrap">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">Intensity</th>
                      <th scope="col">Meaning / Usage</th>
                      <th scope="col">Default Color</th>
                      <th scope="col">Subtle Color</th>
                      <th scope="col" title='The class name used to reference the color on the project'>Class Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {statusColors.map((status) => {
                      const statusIndex = status.class.replace('status-', '');
                      const hex = hexValues[statusIndex] ? hexValues[statusIndex].toUpperCase() : '#------';
                      const subtleHex = getSubtleHex(hex);
                      const defaultClass = `bg-${status.class}`;
                      const subtleClass = `bg-${status.class}-subtle`;
                      const isClassCopied = copiedText === status.class;
                      
                      return (
                        <tr key={status.class}>
                          <td className="fw-normal">Status Level {statusIndex}</td>
                          <td className="fw-medium">{status.meaning}</td>
                          <td>
                            <StatusBadge 
                              className={defaultClass} 
                              badgeClass={defaultClass} 
                              hex={hex} 
                              copiedText={copiedText} 
                              onCopy={handleCopy} 
                            />
                          </td>
                          <td>
                            <StatusBadge 
                              className={subtleClass} 
                              badgeClass={subtleClass} 
                              extraClass={`text-dark border border-${status.class}-subtle`}
                              hex={subtleHex} 
                              copiedText={copiedText} 
                              onCopy={handleCopy} 
                            />
                          </td>
                          <td>
                            <code 
                              className="text-muted font-monospace px-2 py-1 rounded bg-light border" 
                              style={{ cursor: 'pointer', userSelect: 'none' }} 
                              onClick={() => handleCopy(status.class)}
                              title="Click to copy style class"
                            >
                              {isClassCopied ? <><i className="bi bi-check2 text-success me-1"></i>Copied</> : status.class}
                            </code>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <p className="mt-4 mb-0 text-center text-muted">Note: Click any color badge to copy its hex value (hover to reveal). Click the style class code to copy the class name.</p>
              </div>
            </div>
          </section>

          {/* System Utility Colors Section */}
          <section className="mb-5">
            <h4 className="mb-4 fw-semibold">Default System Colors</h4>
            <div className="bg-white p-4 border rounded-4 shadow-sm row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4 m-0">
              {Object.entries(systemColorMapping).map(([key, displayName]) => {
                let hex = systemColors[key];
                if (!hex && key === 'primary') {
                  const styleVal = typeof window !== 'undefined' ? getComputedStyle(document.documentElement).getPropertyValue('--bs-primary').trim() : '';
                  hex = styleVal ? styleVal.toUpperCase() : '#008000';
                }
                if (!hex) return null;
                const isCopied = copiedText === hex;

                return (
                  <div key={key} className="col">
                    <div 
                      className="d-flex flex-column align-items-center h-100"
                      style={{ cursor: 'pointer', transition: 'transform 0.2s ease' }}
                      onClick={() => handleCopy(hex)}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      title="Click to copy hex value"
                    >
                      <div 
                        style={{ width: '100%', height: '67px', backgroundColor: hex, borderRadius: '4px', boxShadow: '0 8px 16px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.05)' }}
                        className="mb-3"
                      ></div>
                      <span className="fw-bold text-center w-100 text-capitalize" style={{ fontSize: '0.9rem' }}>{displayName}</span>
                      <span 
                        className={`small ${isCopied ? 'text-success fw-bold' : 'text-muted'}`} 
                        style={{ fontSize: '0.8rem', fontFamily: 'monospace', transition: 'color 0.2s ease' }}
                      >
                        {isCopied ? (
                          <><i className="bi bi-check2 me-1"></i>Copied!</>
                        ) : (
                          hex
                        )}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StatusPreview;
