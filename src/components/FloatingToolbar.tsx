import React, { useMemo } from 'react';
import { useDynamicCss } from '../hooks/useDynamicCss';
import { colorGroups } from '../config/colorMapping';

export const FloatingToolbar: React.FC = () => {
  const [activeTheme, setActiveTheme] = useDynamicCss('jjjei_gmo:0');

  const groups = Object.keys(colorGroups);

  const activeGroup = useMemo(() => {
    for (const [groupName, variants] of Object.entries(colorGroups)) {
      if (Object.values(variants).includes(`${activeTheme}.css`)) {
        return groupName;
      }
    }
    return groups[0];
  }, [activeTheme, groups]);

  const variants = colorGroups[activeGroup] || {};
  
  const activeVariantFilename = `${activeTheme}.css`;

  const handleGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newGroup = e.target.value;
    const newTheme = colorGroups[newGroup]["Base"].replace('.css', '');
    setActiveTheme(newTheme);
  };

  const handleVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.target.value.replace('.css', '');
    setActiveTheme(newTheme);
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      zIndex: 1030,
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      padding: '8px 8px',
      borderRadius: '50px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      border: '1px solid rgba(255,255,255,0.4)'
    }}>
      <label className="form-label mb-0 d-flex align-items-center gap-2 ms-3 me-2" style={{ fontSize: '0.95rem', fontWeight: 600, margin: 0, color: '#444' }}>
        <i className="bi bi-palette" style={{ fontSize: '1.2rem', color: '#666' }}></i>
      </label>
      
      <select 
        className="form-select border-1 rounded-pill shadow-none" 
        style={{ fontWeight: 500, minWidth: '120px' }}
        value={activeGroup} 
        onChange={handleGroupChange}
        aria-label="Select theme group"
      >
        {groups.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>

      <select 
        className="form-select border-1 rounded-pill shadow-none" 
        style={{ fontWeight: 500, minWidth: '120px' }}
        value={activeVariantFilename} 
        onChange={handleVariantChange}
        aria-label="Select theme variant"
      >
        {Object.entries(variants).map(([variantName, filename]) => (
          <option key={filename} value={filename}>
            {variantName}
          </option>
        ))}
      </select>
    </div>
  );
};
