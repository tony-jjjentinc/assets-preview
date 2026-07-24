import React from 'react';
import { useDynamicCss } from '../hooks/useDynamicCss';

const GROUPS = [
  'admin',
  'controller',
  'facilities',
  'gmo',
  'hr',
  'leasing',
  'procurement',
  'treasury'
];

export const FloatingToolbar: React.FC = () => {
  const [group, setGroup] = useDynamicCss('admin');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGroup(e.target.value);
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 9999,
      backgroundColor: 'white',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    }}>
      <label htmlFor="theme-select" className="form-label mb-2" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
        Theme
      </label>
      <select 
        id="theme-select"
        className="form-select" 
        value={group} 
        onChange={handleChange}
        aria-label="Select theme group"
      >
        {GROUPS.map((g) => (
          <option key={g} value={g}>
            {g.charAt(0).toUpperCase() + g.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};
