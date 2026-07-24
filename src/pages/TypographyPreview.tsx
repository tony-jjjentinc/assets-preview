import React from 'react';

const TypographyPreview: React.FC = () => {
  return (
    <div>
      <style>
        {`
          @font-face {
            font-family: 'Inter';
            src: url('https://tony-jjjentinc.github.io/assets/fonts/Inter.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Gill Sans Nova';
            src: url('https://tony-jjjentinc.github.io/assets/fonts/GillSansNova-Bold.woff2') format('woff2');
            font-weight: bold;
          }
        `}
      </style>

      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '2rem' }}>Typography Preview</h1>

        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ borderBottom: '1px solid #ccc', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontFamily: 'sans-serif' }}>Inter</h2>
          <div style={{ fontFamily: 'Inter, sans-serif' }}>
            <h1 style={{ margin: '0 0 1rem 0' }}>Heading 1 (H1)</h1>
            <h2 style={{ margin: '0 0 1rem 0' }}>Heading 2 (H2)</h2>
            <h3 style={{ margin: '0 0 1rem 0' }}>Heading 3 (H3)</h3>
            <h4 style={{ margin: '0 0 1rem 0' }}>Heading 4 (H4)</h4>
            <h5 style={{ margin: '0 0 1rem 0' }}>Heading 5 (H5)</h5>
            <h6 style={{ margin: '0 0 1rem 0' }}>Heading 6 (H6)</h6>
            <p style={{ margin: '0 0 1rem 0' }}>This is a standard paragraph. The quick brown fox jumps over the lazy dog.</p>
            <p style={{ margin: '0 0 1rem 0' }}><strong>This is a bold paragraph. The quick brown fox jumps over the lazy dog.</strong></p>
            <p style={{ margin: '0 0 1rem 0' }}><em>This is an italic paragraph. The quick brown fox jumps over the lazy dog.</em></p>
            <p style={{ margin: '0 0 1rem 0' }}><strong><em>This is a bold italic paragraph. The quick brown fox jumps over the lazy dog.</em></strong></p>
          </div>
        </section>

        <section>
          <h2 style={{ borderBottom: '1px solid #ccc', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontFamily: 'sans-serif' }}>Gill Sans Nova (Bold)</h2>
          <div style={{ fontFamily: '"Gill Sans Nova", sans-serif', fontWeight: 'bold' }}>
            <h1 style={{ margin: '0 0 1rem 0', fontWeight: 'bold' }}>Heading 1 (H1)</h1>
            <h2 style={{ margin: '0 0 1rem 0', fontWeight: 'bold' }}>Heading 2 (H2)</h2>
            <h3 style={{ margin: '0 0 1rem 0', fontWeight: 'bold' }}>Heading 3 (H3)</h3>
            <h4 style={{ margin: '0 0 1rem 0', fontWeight: 'bold' }}>Heading 4 (H4)</h4>
            <h5 style={{ margin: '0 0 1rem 0', fontWeight: 'bold' }}>Heading 5 (H5)</h5>
            <h6 style={{ margin: '0 0 1rem 0', fontWeight: 'bold' }}>Heading 6 (H6)</h6>
            <p style={{ margin: '0 0 1rem 0' }}>This is a standard paragraph. The quick brown fox jumps over the lazy dog.</p>
            <p style={{ margin: '0 0 1rem 0', fontStyle: 'italic' }}>This is an italic paragraph. The quick brown fox jumps over the lazy dog.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TypographyPreview;
