import React, { useState, useEffect } from 'react';
import { useDynamicCss } from '../hooks/useDynamicCss';
import { formatName } from '../utils/formatName';

export const FloatingToolbar: React.FC = () => {
  const [group, setGroup] = useDynamicCss('admin');
  const [availableGroups, setAvailableGroups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGroups = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://tony-jjjentinc.github.io/assets/config/groupColors.json');
        const data = await res.json();
        
        // Use all available group variants as selectable themes
        setAvailableGroups(Object.keys(data));
      } catch (err) {
        console.error('Failed to fetch available groups:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchGroups();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGroup(e.target.value);
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
      padding: '8px 16px',
      borderRadius: '50px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      border: '1px solid rgba(255,255,255,0.4)'
    }}>
      <label htmlFor="theme-select" className="form-label mb-0 d-flex align-items-center gap-2" style={{ fontSize: '0.95rem', fontWeight: 600, margin: 0, color: '#444' }}>
        <i className="bi bi-palette" style={{ fontSize: '1.2rem', color: '#666' }}></i>
      </label>
      <select 
        id="theme-select"
        className="form-select border-0 shadow-none" 
        style={{ fontWeight: 500 }}
        value={group} 
        onChange={handleChange}
        aria-label="Select theme group"
        disabled={isLoading || availableGroups.length === 0}
      >
        {isLoading ? (
          <option value={group}>Loading themes...</option>
        ) : (
          availableGroups.map((g) => (
            <option key={g} value={g}>
              {formatName(g)}
            </option>
          ))
        )}
      </select>
    </div>
  );
};
