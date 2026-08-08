import React from 'react';

const TypographyPreview: React.FC = () => {
  return (
    <div className="container-fluid min-vh-100 py-5 p-4 p-md-5 bg-primary-subtle">
      <style>
        {`
          @font-face {
            font-family: 'Inter';
            src: url('https://cdn.jsdelivr.net/gh/tony-jjjentinc/assets@main/fonts/Inter.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Gill Sans Nova';
            src: url('https://cdn.jsdelivr.net/gh/tony-jjjentinc/assets@main/fonts/GillSansNova-Bold.woff2') format('woff2');
            font-weight: bold;
          }
        `}
      </style>

      <div className="row justify-content-center">
        <div className="col-12">

          <div className="mb-4 text-center">
            <h1 className="mb-3 fw-bold">Font and Typography</h1>
            <p className="text-muted fs-5 mb-4">Official typographic hierarchy, primary typefaces, and text styling standards.</p>
          </div>

      <section className="row mb-5 row-cols-1 row-cols-xl-2 text-start">
        <div className="col">
          <h2 className="h4 mb-3">Inter</h2>
          <div className="bg-white p-4 p-md-5 border rounded-4 shadow-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            <h1 className="mb-3">Heading 1 (H1)</h1>
            <h2 className="mb-3">Heading 2 (H2)</h2>
            <h3 className="mb-3">Heading 3 (H3)</h3>
            <h4 className="mb-3">Heading 4 (H4)</h4>
            <h5 className="mb-3">Heading 5 (H5)</h5>
            <h6 className="mb-3">Heading 6 (H6)</h6>
            <p className="mb-3">This is a standard paragraph. The quick brown fox jumps over the lazy dog.</p>
            <p className="mb-3"><strong>This is a bold paragraph. The quick brown fox jumps over the lazy dog.</strong></p>
            <p className="mb-3"><em>This is an italic paragraph. The quick brown fox jumps over the lazy dog.</em></p>
            <p className="mb-0"><strong><em>This is a bold italic paragraph. The quick brown fox jumps over the lazy dog.</em></strong></p>
          </div>
        </div>
        <div className="col">
          <h2 className="h4 mb-3">Gill Sans Nova (Bold)</h2>
          <div className="bg-white p-4 p-md-5 border rounded-4 shadow-sm" style={{ fontFamily: '"Gill Sans Nova", sans-serif', fontWeight: 'bold' }}>
            <h1 className="mb-3 fw-bold">Heading 1 (H1)</h1>
            <h2 className="mb-3 fw-bold">Heading 2 (H2)</h2>
            <h3 className="mb-3 fw-bold">Heading 3 (H3)</h3>
            <h4 className="mb-3 fw-bold">Heading 4 (H4)</h4>
            <h5 className="mb-3 fw-bold">Heading 5 (H5)</h5>
            <h6 className="mb-3 fw-bold">Heading 6 (H6)</h6>
            <p className="mb-3">This is a standard paragraph. The quick brown fox jumps over the lazy dog.</p>
            <p className="mb-0 fst-italic">This is an italic paragraph. The quick brown fox jumps over the lazy dog.</p>
          </div>
        </div>
        </section>
        </div>
      </div>
    </div>
  );
};

export default TypographyPreview;
