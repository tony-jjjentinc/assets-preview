import React, { useState, useEffect, useMemo } from 'react';
import { useDynamicCss } from '../hooks/useDynamicCss';
import { formatName } from '../utils/formatName';

export const FloatingToolbar: React.FC = () => {
  const [activeTheme, setActiveTheme] = useDynamicCss('gmo');
  const [availableThemes, setAvailableThemes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGroups = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://tony-jjjentinc.github.io/assets/config/groupColors.json');
        const data = await res.json();
        
        // Use all available group variants as selectable themes
        setAvailableThemes(Object.keys(data));
      } catch (err) {
        console.error('Failed to fetch available groups:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchGroups();
  }, []);

  // activeTheme looks like "group" or "group:variant"
  const activeGroup = activeTheme.split(':')[0] || 'gmo';
  const activeVariant = activeTheme.includes(':') ? activeTheme.split(':')[1] : 'base color';

  // Extract unique groups
  const groups = useMemo(() => {
    const groupSet = new Set<string>();
    availableThemes.forEach(theme => {
      groupSet.add(theme.split(':')[0]);
    });
    return Array.from(groupSet);
  }, [availableThemes]);

  // Extract variants for the active group
  const variants = useMemo(() => {
    const groupVariants: string[] = [];
    availableThemes.forEach(theme => {
      const parts = theme.split(':');
      if (parts[0] === activeGroup) {
        groupVariants.push(parts[1] || 'base color');
      }
    });
    return groupVariants;
  }, [availableThemes, activeGroup]);

  const handleGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newGroup = e.target.value;
    // Default to the un-varianted version if it exists, otherwise the first variant
    const defaultTheme = availableThemes.includes(newGroup) ? newGroup : availableThemes.find(t => t.startsWith(`${newGroup}:`)) || newGroup;
    setActiveTheme(defaultTheme);
  };

  const handleVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newVariant = e.target.value;
    const newTheme = newVariant === 'base color' ? activeGroup : `${activeGroup}:${newVariant}`;
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
        disabled={isLoading || groups.length === 0}
      >
        {isLoading ? (
          <option value={activeGroup}>Loading...</option>
        ) : (
          groups.map((g) => (
            <option key={g} value={g}>
              {formatName(g)}
            </option>
          ))
        )}
      </select>

      <select 
        className="form-select border-1 rounded-pill shadow-none" 
        style={{ fontWeight: 500, minWidth: '120px' }}
        value={activeVariant} 
        onChange={handleVariantChange}
        aria-label="Select theme variant"
        disabled={isLoading || variants.length === 0}
      >
        {isLoading ? (
          <option value={activeVariant}>Loading...</option>
        ) : (
          variants.map((v) => (
            <option key={v} value={v}>
              {formatName(v)}
            </option>
          ))
        )}
      </select>
    </div>
  );
};
