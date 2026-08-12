import React from 'react';

const TypographyPreview: React.FC = () => {
  return (
    <div className="container-fluid min-vh-100 py-5 p-4 p-md-5 bg-primary-subtle" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="row justify-content-center">
        <div className="col-12">

          <div className="mb-4 text-center">
            <h1 className="mb-3 fw-bold">Font and Typography</h1>
            <p className="text-muted fs-5 mb-4">Official typographic hierarchy, Inter primary typeface and text styling standards.</p>
          </div>

          <section className="row mb-5 row-cols-1 text-start g-4">
            <div className="col">
              <div className="bg-white p-4 p-md-5 border rounded-4 shadow-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                <h1 className="mb-3">Heading 1 (H1)</h1>
                <h2 className="mb-3">Heading 2 (H2)</h2>
                <h3 className="mb-3">Heading 3 (H3)</h3>
                <h4 className="mb-3">Heading 4 (H4)</h4>
                <h5 className="mb-3">Heading 5 (H5)</h5>
                <h6 className="mb-3">Heading 6 (H6)</h6>
                <hr className="my-4" />
                <p className="mb-3">This is a standard paragraph in Inter. The quick brown fox jumps over the lazy dog.</p>
                <p className="mb-3"><strong>This is a bold paragraph in Inter. The quick brown fox jumps over the lazy dog.</strong></p>
                <p className="mb-3"><em>This is an italic paragraph in Inter. The quick brown fox jumps over the lazy dog.</em></p>
                <p className="mb-0"><strong><em>This is a bold italic paragraph in Inter. The quick brown fox jumps over the lazy dog.</em></strong></p>
                <hr className="my-4" />
                <h3 className="h5 mb-3 fw-bold text-primary">Standard Weight (Regular 400)</h3>
                <p className="fs-5 mb-4 text-muted">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz<br />
                  0123456789 (!@#$%^&*()_+)
                </p>
                <h3 className="h5 mb-3 fw-bold text-primary">Bold Weight (Bold 700)</h3>
                <p className="fs-5 fw-bold mb-4 text-muted">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz<br />
                  0123456789 (!@#$%^&*()_+)
                </p>
                <h3 className="h5 mb-3 fw-bold text-primary">Italic Style</h3>
                <p className="fs-5 fst-italic mb-0 text-muted">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz<br />
                  0123456789 (!@#$%^&*()_+)
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TypographyPreview;
