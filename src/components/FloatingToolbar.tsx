
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
      bottom: '30px',
      right: '30px',
      zIndex: 9999,
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      padding: '10px 20px',
      borderRadius: '50px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      border: '1px solid rgba(255,255,255,0.4)'
    }}>
      <label htmlFor="theme-select" className="form-label mb-0 d-flex align-items-center gap-2" style={{ fontSize: '0.95rem', fontWeight: 600, margin: 0, color: '#444' }}>
        <i className="bi bi-palette" style={{ fontSize: '1.2rem', color: '#666' }}></i> Theme
      </label>
      <select 
        id="theme-select"
        className="form-select border-0 shadow-sm" 
        style={{ borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.9)', fontWeight: 500 }}
        value={group} 
        onChange={handleChange}
        aria-label="Select theme group"
      >
        {GROUPS.map((g) => (
          <option key={g} value={g}>
            {g.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};
