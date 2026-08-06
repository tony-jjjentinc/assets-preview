import React, { useState, useEffect } from 'react';
import { statusColors } from '../config/statusConfig';

const StatusPreview: React.FC = () => {
  const [hexValues, setHexValues] = useState<Record<string, string>>({});
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  useEffect(() => {
    const fetchHex = async () => {
      try {
        const cacheBuster = Date.now();
        const res = await fetch(`https://raw.githubusercontent.com/tony-jjjentinc/assets/main/config/statusColors.json?t=${cacheBuster}`);
        const data = await res.json();
        setHexValues(data);
      } catch (err) {
        console.error('Failed to fetch status hex values', err);
      }
    };
    fetchHex();
  }, []);

  const handleCopy = async (text: string) => {
    if (text === '#------') return;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedHex(text);
      setTimeout(() => setCopiedHex(null), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="container-fluid min-vh-100 py-5 p-4 p-md-5 bg-primary-subtle">
      <h1 className="mb-4 fw-bold text-center">Status Colors</h1>
      <div className="bg-white p-4 border rounded-4 shadow-sm mb-5">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th scope="col">Status Intensity</th>
                <th scope="col">Meaning / Usage</th>
                <th scope="col" className="ps-3">Hex Value</th>
                <th scope="col">Default Classes</th>
                <th scope="col">Subtle Classes</th>
              </tr>
            </thead>
            <tbody>
              {statusColors.map((status) => {
                const statusIndex = status.class.replace('status-', '');
                const hex = hexValues[statusIndex] || '#------';
                const isCopied = copiedHex === hex;
                return (
                  <tr key={status.class}>
                    <td className="fw-bold">Status #{statusIndex}</td>
                    <td className="fw-medium">{status.meaning}</td>
                    <td className="ps-3">
                      <div className="d-flex align-items-center gap-2">
                        <div 
                          style={{ width: '20px', height: '20px', backgroundColor: hex !== '#------' ? hex : 'transparent', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.1)' }}
                        ></div>
                        <span className="fw-monospace text-muted">{hex}</span>
                        <button 
                          className="btn btn-sm btn-light border d-flex align-items-center justify-content-center" 
                          style={{ width: '32px', height: '32px' }}
                          onClick={() => handleCopy(hex)}
                          title="Copy Hex"
                          disabled={hex === '#------'}
                        >
                          {isCopied ? <i className="bi bi-check-lg text-success"></i> : <i className="bi bi-clipboard"></i>}
                        </button>
                      </div>
                    </td>
                    <td>
                      <span 
                        className={`badge bg-${status.class} p-2`} 
                        style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                        onClick={() => handleCopy(`bg-${status.class}`)}
                        title="Click to copy class"
                      >
                        {copiedHex === `bg-${status.class}` ? <><i className="bi bi-check2"></i> Copied</> : `bg-${status.class}`}
                      </span>
                    </td>
                    <td>
                      <span 
                        className={`badge bg-${status.class}-subtle text-${status.class} p-2 border border-${status.class}-subtle`} 
                        style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                        onClick={() => handleCopy(`bg-${status.class}-subtle`)}
                        title="Click to copy class"
                      >
                        {copiedHex === `bg-${status.class}-subtle` ? <><i className="bi bi-check2"></i> Copied</> : `bg-${status.class}-subtle`}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className='mt-5 mb-0 text-center'>Note: Click the color badges to <b>copy the <i>Class</i> and <i>Hex Values</i></b> of the status colors</p>
        </div>
      </div>
    </div>
  );
};

export default StatusPreview;
