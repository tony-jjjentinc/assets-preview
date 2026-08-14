import React, { useState } from 'react';

interface SwatchCardProps {
  name: string;
  description?: string;
  hex: string;
  isSubtle?: boolean;
}

const getSubtleHex = (hex: string): string => {
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

const SwatchCard: React.FC<SwatchCardProps> = ({ name, description = "", hex, isSubtle = false }) => {
  const displayHex = isSubtle ? getSubtleHex(hex) : hex;
  const [hover, setHover] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyHex = (value: string) => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard
        .writeText(value)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        })
        .catch(() => {});
    }
  };

  return (
    <div className="col">
      <div
        className="card h-100 border-0"
        style={{
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          transform: hover ? 'scale(1.02)' : 'scale(1)',
          boxShadow: hover ? '0 10px 20px rgba(0,0,0,0.15)' : '0 2px 4px rgba(0,0,0,0.09)',
          borderRadius: '1rem',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
        onClick={() => copyHex(displayHex)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className="d-flex align-items-start justify-content-end p-3"
          style={{ height: '150px', backgroundColor: displayHex, transition: 'background-color 0.3s ease' }}
        >
          <span className="badge bg-white text-dark rounded-pill shadow-sm" style={{ fontSize: '0.75rem', opacity: hover ? 1 : 0.8 }}>
            {copied ? 'Copied!' : displayHex}
          </span>
        </div>
        <div className="card-body p-3">
          <p className="small mb-0 text-muted" style={{fontSize: "0.75rem"}}>{description}</p>
          <h6 className="card-title mb-0 fw-bold">{name}</h6>
        </div>
      </div>
    </div>
  );
};

export default SwatchCard;
