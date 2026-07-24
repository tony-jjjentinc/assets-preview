import React, { useState } from 'react';

const PATTERN_CONFIG: Record<string, number> = {
  'bubbles.svg': 150,
  'circuit-board.svg': 300,
  'diagonal-lines.svg': 60,
  'diagonal-stripes.svg': 80,
  'hexagons.svg': 120,
  'texture.svg': 400,
  'topography.svg': 500,
};
const PATTERNS = Object.keys(PATTERN_CONFIG);

const BASE_URL = 'https://tony-jjjentinc.github.io/assets/images/misc/background-pattern/';

const getLuminance = (hex: string) => { const r = parseInt(hex.slice(1, 3), 16)/255, g = parseInt(hex.slice(3, 5), 16)/255, b = parseInt(hex.slice(5, 7), 16)/255; const a = [r, g, b].map(v => v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4)); return a[0]*0.2126 + a[1]*0.7152 + a[2]*0.0722; };

const PatternPreview: React.FC = () => {
  const [containerBgColor, setContainerBgColor] = useState('#f8f9fa');
  const [patternColor, setPatternColor] = useState('#0d6efd');
  const [patternSize, setPatternSize] = useState(PATTERN_CONFIG[PATTERNS[0]]);
  const [selectedPattern, setSelectedPattern] = useState(PATTERNS[0]);

  const handlePatternChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPattern = e.target.value;
    setSelectedPattern(newPattern);
    setPatternSize(PATTERN_CONFIG[newPattern]);
  };

  const isDark = getLuminance(containerBgColor) < 0.5; const txt = isDark ? 'text-white' : 'text-dark'; const glass = isDark ? 'bg-dark bg-opacity-50 border-light' : 'bg-white bg-opacity-50 border-dark';

  return (
    <div className="position-relative min-vh-100 d-flex flex-column align-items-center justify-content-center overflow-hidden w-100" style={{
      backgroundColor: containerBgColor,
      fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
      boxSizing: 'border-box',
      transition: 'background-color 0.4s ease'
    }}>
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          zIndex: 0,
          backgroundColor: patternColor,
          WebkitMaskImage: `url('${BASE_URL}${selectedPattern}')`,
          maskImage: `url('${BASE_URL}${selectedPattern}')`,
          WebkitMaskSize: `${patternSize}px`,
          maskSize: `${patternSize}px`,
          WebkitMaskRepeat: 'repeat',
          maskRepeat: 'repeat',
          transition: 'background-color 0.4s ease, -webkit-mask-size 0.3s ease, mask-size 0.3s ease'
        }}
      />

      <div className="position-relative" style={{ zIndex: 1, width: '100%', maxWidth: '800px', padding: '2rem' }}>
        <div className={`d-flex flex-row flex-wrap align-items-center justify-content-center gap-4 p-3 px-4 rounded-pill shadow-lg border border-opacity-25 ${glass}`} style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
          
          <div className="d-flex align-items-center gap-2">
            <label className={`form-label small fw-medium mb-0 ${txt}`}>Background</label>
            <input 
              type="color" 
              value={containerBgColor} 
              onChange={(e) => setContainerBgColor(e.target.value)} 
              className="form-control form-control-color border-0 shadow-sm p-1 bg-white bg-opacity-50"
              style={{ width: '32px', height: '32px', borderRadius: '50%' }}
            />
          </div>

          <div className="d-flex align-items-center gap-2">
            <label className={`form-label small fw-medium mb-0 ${txt}`}>Pattern</label>
            <input 
              type="color" 
              value={patternColor} 
              onChange={(e) => setPatternColor(e.target.value)} 
              className="form-control form-control-color border-0 shadow-sm p-1 bg-white bg-opacity-50"
              style={{ width: '32px', height: '32px', borderRadius: '50%' }}
            />
          </div>

          <div className="d-flex align-items-center gap-2">
            <label className={`form-label small fw-medium mb-0 ${txt}`}>Size</label>
            <input 
              type="range" 
              min="20" 
              max="400" 
              value={patternSize} 
              onChange={(e) => setPatternSize(Number(e.target.value))} 
              className="form-range"
              style={{ width: '120px' }}
            />
          </div>

          <div className="d-flex align-items-center gap-2">
            <select 
              value={selectedPattern} 
              onChange={handlePatternChange}
              className={`form-select form-select-sm bg-transparent border-0 shadow-none fw-medium ${txt}`}
              style={{ cursor: 'pointer' }}
            >
              {PATTERNS.map(pattern => (
                <option key={pattern} value={pattern} className="text-dark">
                  {pattern.replace('.svg', '').replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </option>
              ))}
            </select>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PatternPreview;
