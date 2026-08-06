import React, { useState } from 'react';

const PATTERN_CONFIG: Record<string, number> = {
  'circuit-board.svg': 200,
  'topography.svg': 670,
  'bubbles.svg': 100,
  'diagonal-lines.svg': 30,
  'diagonal-stripes.svg': 30,
  'hexagons.svg': 30,
  'texture.svg': 15,
  'texture2.svg': 25,
};
const PATTERNS = Object.keys(PATTERN_CONFIG);

const BASE_URL = 'https://cdn.jsdelivr.net/gh/tony-jjjentinc/assets@main/images/misc/background-pattern/';

const PatternPreview: React.FC = () => {
  const [patternScale, setPatternScale] = useState(50);
  const [selectedPattern, setSelectedPattern] = useState(PATTERNS[0]);

  const handlePatternChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPattern(e.target.value);
    setPatternScale(50);
  };

  const actualPixelSize = (patternScale / 50) * PATTERN_CONFIG[selectedPattern];

  return (
    <div className="position-relative min-vh-100 d-flex flex-column align-items-center justify-content-center overflow-hidden w-100 bg-primary-subtle" style={{
      fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
      boxSizing: 'border-box'
    }}>
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 bg-primary"
        style={{
          zIndex: 0,
          WebkitMaskImage: `url('${BASE_URL}${selectedPattern}')`,
          maskImage: `url('${BASE_URL}${selectedPattern}')`,
          WebkitMaskSize: `${actualPixelSize}px`,
          maskSize: `${actualPixelSize}px`,
          WebkitMaskRepeat: 'repeat',
          maskRepeat: 'repeat',
          transition: '-webkit-mask-size 0.3s ease, mask-size 0.3s ease'
        }}
      />

      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          zIndex: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.15) 100%)'
        }}
      />

      <div className="position-relative" style={{ zIndex: 1, width: '100%', padding: '2rem' }}>
        <div className="d-flex flex-row flex-wrap align-items-center justify-content-center gap-4 p-3 rounded shadow-lg border border-dark border-opacity-10 bg-white bg-opacity-75" style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
          
          <div className="d-flex align-items-center gap-2">
            <label className="form-label small fw-medium mb-0 text-dark">Scale</label>
            <input 
              type="range" 
              min="10" 
              max="100" 
              value={patternScale} 
              onChange={(e) => setPatternScale(Number(e.target.value))} 
              className="form-range"
              style={{ width: '120px' }}
            />
            {/* <span className="small fw-bold text-dark ms-1" style={{ width: '4ch' }}>{patternScale}%</span> */}
          </div>

          <div className="d-flex align-items-center gap-2">
            <select 
              value={selectedPattern} 
              onChange={handlePatternChange}
              className="form-select form-select-sm bg-transparent border-0 shadow-none fw-medium text-dark"
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
