import React, { useState, useEffect } from 'react';
import { formatName } from '../utils/formatName';

const ColorPreview: React.FC = () => {
  const [groupedColors, setGroupedColors] = useState<Record<string, Record<string, string>>>({});
  const [systemColors, setSystemColors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  useEffect(() => {
    const fetchColors = async () => {
      setIsLoading(true);
      try {
        const [gRes, sRes] = await Promise.all([
          fetch('https://tony-jjjentinc.github.io/assets/config/groupColors.json'),
          fetch('https://tony-jjjentinc.github.io/assets/config/systemColors.json')
        ]);
        const gData = await gRes.json();
        const sData = await sRes.json();
        
        // Group colors by base name (e.g., 'gmo', 'admin')
        const grouped: Record<string, Record<string, string>> = {};
        Object.entries(gData).forEach(([key, hex]) => {
          // Under the new format, the separator between base group and variant is a colon
          const baseName = key.split(':')[0];
          if (!grouped[baseName]) {
            grouped[baseName] = {};
          }
          grouped[baseName][key] = hex as string;
        });
        
        setGroupedColors(grouped);
        setSystemColors(sData);
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

  const renderSwatch = (name: string, hex: string) => {
    const isCopied = copiedHex === hex;
    
    return (
      <div 
        key={name} 
        className="d-flex flex-column align-items-center"
        style={{ cursor: 'pointer', transition: 'transform 0.2s ease', width: '100px' }}
        onClick={() => handleCopy(hex)}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        title="Click to copy hex value"
      >
        <div 
          style={{ width: '90px', height: '90px', backgroundColor: hex, borderRadius: '16px', boxShadow: '0 8px 16px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.05)' }}
          className="mb-3"
        ></div>
        <span className="fw-bold text-center text-truncate w-100" style={{ fontSize: '0.9rem' }}>{formatName(name)}</span>
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
    );
  };

  return (
    <div className="container-fluid min-vh-100 py-5 p-4 p-md-5 bg-primary-subtle">
      <h1 className="mb-5 fw-bold text-center">Color Swatches</h1>
      
      <section className="row mb-5">
        <div className="col-12">
          <h2 className="mb-4">System Utility Colors</h2>
          <div className="bg-white p-4 border rounded-4 shadow-sm d-flex flex-wrap gap-4">
            {Object.entries(systemColors).map(([name, hex]) => renderSwatch(name, hex))}
          </div>
        </div>
      </section>

      {Object.entries(groupedColors).map(([baseName, colors]) => (
        <section key={baseName} className="row mb-5">
          <div className="col-12">
            <h2 className="mb-4">{formatName(baseName)} Group Colors</h2>
            <div className="bg-white p-4 border rounded-4 shadow-sm d-flex flex-wrap gap-4">
              {Object.entries(colors).map(([name, hex]) => renderSwatch(name, hex))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ColorPreview;
