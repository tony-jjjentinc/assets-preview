import React, { useState, useEffect } from 'react';

import { colorGroups } from '../config/colorMapping';
import SwatchCard from '../components/SwatchCard';

const ColorPreview: React.FC = () => {


  const [groupHexValues, setGroupHexValues] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [subtleGroups, setSubtleGroups] = useState<Record<string, boolean>>({});

  const toggleSubtle = (groupName: string) => {
    setSubtleGroups(prev => ({ ...prev, [groupName]: !prev[groupName] }));
  };

  useEffect(() => {
    const fetchColors = async () => {
      setIsLoading(true);
      try {
        const cacheBuster = Date.now();
        const gRes = await fetch(`https://raw.githubusercontent.com/tony-jjjentinc/assets/main/config/groupColors.json?t=${cacheBuster}`);
        const gData = await gRes.json();

        setGroupHexValues(gData);
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

  const renderSwatch = (name: string, description: string, hex: string, isSubtle = false) => {
    return <SwatchCard key={name} description={description} name={name} hex={hex} isSubtle={!!isSubtle} />;
  };


  return (
    <div className="container-fluid min-vh-100 py-5 p-4 p-md-5 bg-primary-subtle">
      <div className="row justify-content-center">
        <div className="col-12">

          <div className="mb-4 text-center">
            <h1 className="mb-3 fw-bold">Departmental Colors</h1>
            <p className="text-muted fs-5 mb-4">Explore corporate department color palettes and background variants.</p>
          </div>

          {Object.entries(colorGroups).map(([groupName, variants]) => (
            <section key={groupName} className="row mb-5">
              <div className="col-12">
                <div className="p-4 rounded-3 shadow bg-light">
                  <div className="mb-0 d-flex justify-content-between align-items-center">
                    <h4 className="h4 fw-bold mb-0 fw-semibold">{groupName} Department</h4>
                    <div className=" form-check-reverse form-switch fs-5">
                      <label className="form-check-label small text-muted ms-2" htmlFor={`switch-${groupName}`} style={{ cursor: 'pointer' }}>
                        Background
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id={`switch-${groupName}`}
                        checked={!!subtleGroups[groupName]}
                        onChange={() => toggleSubtle(groupName)}
                        style={{ cursor: 'pointer' }}
                      />
                    </div>
                  </div>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 m-0 pb-3">
                    {Object.entries(variants).map(([variantName, cssFilename]) => {
                      const rawKey = cssFilename.replace('.css', '');
                      const hex = groupHexValues[rawKey] || '#E0E0E0';
                      return renderSwatch(variantName, groupName ,hex, !!subtleGroups[groupName]);
                    })}
                  </div>
                </div>
              </div>
            </section>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ColorPreview;
