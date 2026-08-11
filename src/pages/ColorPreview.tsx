import React, { useState, useEffect } from 'react';

import { colorGroups } from '../config/colorMapping';

const ColorPreview: React.FC = () => {


  const [groupHexValues, setGroupHexValues] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [subtleGroups, setSubtleGroups] = useState<Record<string, boolean>>({});



  const getSubtleHex = (hex: string): string => {
    let cleanHex = hex.replace('#', '');
    if (cleanHex.length === 3) {
      cleanHex = cleanHex.split('').map(c => c + c).join('');
    }
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    // Updated to 25% base color and 75% white for a softer look.
    const mix = (c: number) => Math.round(c * 0.25 + 255 * 0.75);
    const sr = mix(r).toString(16).padStart(2, '0');
    const sg = mix(g).toString(16).padStart(2, '0');
    const sb = mix(b).toString(16).padStart(2, '0');
    return `#${sr}${sg}${sb}`.toUpperCase();
  };

  // Swatch card component with header and hover overlay
  interface SwatchCardProps {
    name: string;
    hex: string;
    isSubtle: boolean;
  }

  const SwatchCard: React.FC<SwatchCardProps> = ({ name, hex, isSubtle }) => {
    const displayHex = isSubtle ? getSubtleHex(hex) : hex;
    const [hover, setHover] = useState(false);
    const [copied, setCopied] = useState(false);
    const copyHex = (hex: string) => {
      if (navigator && navigator.clipboard) {
        navigator.clipboard.writeText(hex)
          .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          })
          .catch(() => { });
      }
    };
    return (
      <div className="col">
        <div
          className="card h-100 border-0"
          style={{
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            transform: hover ? 'scale(1.02)' : 'scale(1)',
            boxShadow: hover ? '0 10px 20px rgba(0,0,0,0.15)' : '0 2px 4px rgba(0,0,0,0.2)',
            borderRadius: '1rem',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => copyHex(displayHex)}
        >
          <div className="d-flex align-items-end p-3" style={{ height: '140px', backgroundColor: displayHex, transition: 'background-color 0.3s ease', cursor: 'pointer' }}>
            <span className="badge bg-white text-dark rounded-pill shadow-sm" style={{ fontSize: '0.75rem', opacity: hover ? 1 : 0.8 }}>
              {copied ? 'Copied!' : displayHex}
            </span>
          </div>
          <div className="card-body p-3">
            <h6 className="card-title mb-0 fw-bold">{name}</h6>
          </div>
        </div>
      </div>
    );
  };

  const toggleSubtle = (groupName: string) => {
    setSubtleGroups(prev => ({ ...prev, [groupName]: !prev[groupName] }));
  };

  useEffect(() => {
    const fetchColors = async () => {
      setIsLoading(true);
      try {
        const cacheBuster = Date.now();
        const gRes = await fetch(`https://raw.githubusercontent.com/tony-jjjentinc/assets/main/config/groupColors.json?t=${cacheBuster}`);
        const gData = await gRes.json();

        setGroupHexValues(gData);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchColors();
  }, []);

  if (isLoading) {
    return (
      <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-primary-subtle">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const renderSwatch = (name: string, hex: string, isSubtle = false) => {
    return <SwatchCard key={name} name={name} hex={hex} isSubtle={!!isSubtle} />;
  };


  return (
    <div className="container-fluid min-vh-100 py-5 p-4 p-md-5 bg-primary-subtle">
      <div className="row justify-content-center">
        <div className="col-12">

          <div className="mb-4 text-center">
            <h1 className="mb-3 fw-bold">Departmental Colors</h1>
            <p className="text-muted fs-5 mb-4">Explore corporate department color palettes and background variants.</p>
          </div>

          {Object.entries(colorGroups).map(([groupName, variants]) => (
            <section key={groupName} className="row mb-5">
              <div className="col-12">
                <div className="p-4 rounded-3 shadow bg-light">
                  <div className="mb-0 d-flex justify-content-between align-items-center">
                    <h4 className="h4 fw-bold mb-0 fw-semibold">{groupName} Department</h4>
                    <div className=" form-check-reverse form-switch fs-5">
                      <label className="form-check-label small text-muted ms-2" htmlFor={`switch-${groupName}`} style={{ cursor: 'pointer' }}>
                        Background
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id={`switch-${groupName}`}
                        checked={!!subtleGroups[groupName]}
                        onChange={() => toggleSubtle(groupName)}
                        style={{ cursor: 'pointer' }}
                      />
                    </div>
                  </div>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 m-0 pb-3">
                    {Object.entries(variants).map(([variantName, cssFilename]) => {
                      const rawKey = cssFilename.replace('.css', '');
                      const hex = groupHexValues[rawKey] || '#E0E0E0';
                      return renderSwatch(variantName, hex, !!subtleGroups[groupName]);
                    })}
                  </div>
                </div>
              </div>
            </section>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ColorPreview;
