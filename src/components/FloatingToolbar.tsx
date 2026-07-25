
import { useDynamicCss } from '../hooks/useDynamicCss';

const GROUPS = [
  'gmo',
  'admin',
  'admin_2',
  'admin_3',
  'admin_4',
  'admin_5',
  'admin_6',
  'controller',
  'facilities',
  'facilities_2',
  'facilities_3',
  'facilities_4',
  'facilities_5',
  'facilities_6',
  'facilities_7',
  'hr',
  'leasing',
  'procurement',
  'treasury'
];

export const FloatingToolbar: React.FC = () => {
  const [group, setGroup] = useDynamicCss('gmo');

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
