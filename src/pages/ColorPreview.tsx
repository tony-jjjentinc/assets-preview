import React, { useState, useEffect } from 'react';
import { formatName } from '../utils/formatName';
import { colorGroups } from '../config/colorMapping';

const ColorPreview: React.FC = () => {
  const [groupHexValues, setGroupHexValues] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [subtleGroups, setSubtleGroups] = useState<Record<string, boolean>>({});

  const [copiedHex, setCopiedHex] = useState<string | null>(null);

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

  const toggleSubtle = (groupName: string) => {
    setSubtleGroups(prev => ({ ...prev, [groupName]: !prev[groupName] }));
  };

  const handleCopy = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(null), 4000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
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

  const renderSwatch = (name: string, hex: string, formatter: (n: string) => string = formatName, isSubtle = false) => {
    const displayHex = isSubtle ? getSubtleHex(hex) : hex;
    const isCopied = copiedHex === displayHex;
    
    return (
      <div key={name} className="col">
        <div 
          className="d-flex flex-column align-items-center h-100"
          style={{ cursor: 'pointer', transition: 'transform 0.2s ease' }}
          onClick={() => handleCopy(displayHex)}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          title="Click to copy hex value"
        >
          <div 
            style={{ width: '100%', height: '67px', backgroundColor: displayHex, borderRadius: '4px', boxShadow: '0 8px 16px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.05)' }}
            className="mb-3"
          ></div>
          <span className="fw-bold text-center w-100 text-capitalize" style={{ fontSize: '0.9rem' }}>{formatter(name)}</span>
          <span 
            className={`small ${isCopied ? 'text-success fw-bold' : 'text-muted'}`} 
            style={{ fontSize: '0.8rem', fontFamily: 'monospace', transition: 'color 0.2s ease' }}
          >
            {isCopied ? (
              <><i className="bi bi-check2 me-1"></i>Copied!</>
            ) : (
              displayHex
            )}
          </span>
        </div>
      </div>
    );
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
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="mb-0 fw-semibold">{groupName} Department</h4>
                  <div className="form-check form-switch fs-5">
                    <label className="form-check-label fs-6 text-muted ms-2" htmlFor={`switch-${groupName}`} style={{ cursor: 'pointer' }}>
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
                <div className="bg-white p-4 border rounded-4 shadow-sm row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 m-0">
                  {Object.entries(variants).map(([variantName, cssFilename]) => {
                    const rawKey = cssFilename.replace('.css', '');
                    const hex = groupHexValues[rawKey] || '#E0E0E0';
                    return renderSwatch(variantName, hex, (name) => name, !!subtleGroups[groupName]);
                  })}
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
