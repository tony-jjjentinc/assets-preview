import React, { useState } from 'react';

const PATTERNS = [
  'bubbles.svg',
  'circuit-board.svg',
  'diagonal-lines.svg',
  'diagonal-stripes.svg',
  'hexagons.svg',
  'texture.svg',
  'topography.svg',
];

const BASE_URL = 'https://tony-jjjentinc.github.io/assets/images/misc/background-pattern/';

const PatternPreview: React.FC = () => {
  const [containerBgColor, setContainerBgColor] = useState('#0f172a');
  const [patternColor, setPatternColor] = useState('#38bdf8');
  const [patternSize, setPatternSize] = useState(120);
  const [selectedPattern, setSelectedPattern] = useState(PATTERNS[0]);

  return (
    <>
      <style>
        {`
          .pattern-studio-layout {
            display: grid;
            grid-template-columns: minmax(300px, 350px) 1fr;
            gap: 40px;
            align-items: start;
          }
          @media (max-width: 900px) {
            .pattern-studio-layout {
              grid-template-columns: 1fr;
            }
          }
          .custom-select:focus {
            border-color: #38bdf8 !important;
            box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.2);
          }
          .color-picker-input {
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            background: none;
            border: 0;
            cursor: pointer;
            padding: 0;
            width: 48px;
            height: 48px;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          .color-picker-input::-webkit-color-swatch-wrapper {
            padding: 0;
          }
          .color-picker-input::-webkit-color-swatch {
            border: none;
            border-radius: 12px;
          }
          .color-picker-input::-moz-color-swatch {
            border: none;
            border-radius: 12px;
          }
          .range-slider {
            -webkit-appearance: none;
            width: 100%;
            height: 6px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            outline: none;
          }
          .range-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #38bdf8;
            cursor: pointer;
            transition: background 0.15s ease-in-out;
            box-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
          }
          .range-slider::-webkit-slider-thumb:hover {
            background: #7dd3fc;
          }
          .range-slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border: 0;
            border-radius: 50%;
            background: #38bdf8;
            cursor: pointer;
            transition: background 0.15s ease-in-out;
            box-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
          }
          .range-slider::-moz-range-thumb:hover {
            background: #7dd3fc;
          }
        `}
      </style>
      <div style={{
        fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
        minHeight: '100vh',
        backgroundColor: '#020617',
        color: '#f8fafc',
        padding: '5%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box'
      }}>
        <div style={{
          maxWidth: '1400px',
          width: '100%',
        }}>
          <header style={{ marginBottom: '50px', textAlign: 'center' }}>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Pattern Studio
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              Interactive showcase of dynamic SVG patterns using CSS masks for seamless colorization and scaling.
            </p>
          </header>

          <div className="pattern-studio-layout">
            {/* Control Panel */}
            <div style={{
              backgroundColor: 'rgba(30, 41, 59, 0.6)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: '24px',
              padding: '32px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              gap: '28px'
            }}>
              <h2 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '600', 
                margin: 0, 
                color: '#e2e8f0',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                paddingBottom: '16px'
              }}>Controls</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <label style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: '500' }}>Container Background</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <input 
                    type="color" 
                    value={containerBgColor} 
                    onChange={(e) => setContainerBgColor(e.target.value)} 
                    className="color-picker-input"
                  />
                  <span style={{ 
                    fontFamily: 'monospace', 
                    color: '#94a3b8', 
                    fontSize: '1.1rem',
                    backgroundColor: 'rgba(15, 23, 42, 0.8)',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.05)'
                  }}>
                    {containerBgColor.toUpperCase()}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <label style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: '500' }}>Pattern Color</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <input 
                    type="color" 
                    value={patternColor} 
                    onChange={(e) => setPatternColor(e.target.value)} 
                    className="color-picker-input"
                  />
                  <span style={{ 
                    fontFamily: 'monospace', 
                    color: '#94a3b8', 
                    fontSize: '1.1rem',
                    backgroundColor: 'rgba(15, 23, 42, 0.8)',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.05)'
                  }}>
                    {patternColor.toUpperCase()}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: '500' }}>
                    Pattern Size
                  </label>
                  <span style={{ fontSize: '0.9rem', color: '#38bdf8', fontWeight: '600' }}>{patternSize}px</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="400" 
                  value={patternSize} 
                  onChange={(e) => setPatternSize(Number(e.target.value))} 
                  className="range-slider"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <label style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: '500' }}>Select Pattern</label>
                <div style={{ position: 'relative' }}>
                  <select 
                    value={selectedPattern} 
                    onChange={(e) => setSelectedPattern(e.target.value)}
                    className="custom-select"
                    style={{
                      appearance: 'none',
                      width: '100%',
                      padding: '14px 16px',
                      backgroundColor: 'rgba(15, 23, 42, 0.8)',
                      color: '#e2e8f0',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      outline: 'none',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {PATTERNS.map(pattern => (
                      <option key={pattern} value={pattern}>
                        {pattern.replace('.svg', '').replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </option>
                    ))}
                  </select>
                  <div style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    color: '#94a3b8',
                    fontSize: '0.8rem'
                  }}>
                    ▼
                  </div>
                </div>
              </div>
            </div>

            {/* Preview Area */}
            <div style={{
              position: 'relative',
              width: '100%',
              minHeight: '600px',
              height: '100%',
              backgroundColor: containerBgColor,
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255,255,255,0.05)',
              transition: 'background-color 0.4s ease'
            }}>
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
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
              {/* Vignette Overlay for depth */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.6) 150%)',
                pointerEvents: 'none'
              }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatternPreview;
