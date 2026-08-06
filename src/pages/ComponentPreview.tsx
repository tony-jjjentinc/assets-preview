import React, { useState } from 'react';

const ComponentPreview: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container-fluid min-vh-100 py-5 p-4 p-md-5 bg-primary-subtle">
      <h1 className="mb-3 fw-bold text-center">Web Components Demo</h1>

      <section className="row mb-5">
        <div className="col-12">
          <h2 className="mb-3">Buttons</h2>
          <div className="bg-white p-4 border rounded-4 shadow-sm">
            <h3 className="h5 mb-3">Solid Buttons</h3>
            <div className="d-flex flex-wrap gap-3 mb-4">
              <button type="button" className="btn btn-primary">Primary</button>
              <button type="button" className="btn btn-secondary">Secondary</button>
              <button type="button" className="btn btn-success">Success</button>
              <button type="button" className="btn btn-danger">Danger</button>
              <button type="button" className="btn btn-warning">Warning</button>
              <button type="button" className="btn btn-info">Info</button>
              <button type="button" className="btn btn-link">Link</button>
            </div>

            <h3 className="h5 mb-3">Outline Buttons</h3>
            <div className="d-flex flex-wrap gap-3 mb-4">
              <button type="button" className="btn btn-outline-primary">Primary</button>
              <button type="button" className="btn btn-outline-secondary">Secondary</button>
              <button type="button" className="btn btn-outline-success">Success</button>
              <button type="button" className="btn btn-outline-danger">Danger</button>
              <button type="button" className="btn btn-outline-warning">Warning</button>
              <button type="button" className="btn btn-outline-info">Info</button>
            </div>
            
            <h3 className="h5 mb-3">Button Group</h3>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-primary">Left</button>
              <button type="button" className="btn btn-primary">Middle</button>
              <button type="button" className="btn btn-primary">Right</button>
            </div>
          </div>
        </div>
      </section>

      <section className="row mb-5">
        <div className="col-12">
          <h2 className="mb-3">Cards</h2>
          <div className="bg-white p-4 border rounded-4 shadow-sm">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Card title 1</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Card title 2</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Card title 3</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="row row-cols-1 row-cols-md-2">
        <div className="col-12 mb-5">
          <h2 className="mb-3">Alerts</h2>
          <div className="bg-white p-4 border rounded-4 shadow-sm">
            <div className="alert alert-primary" role="alert">
              A simple primary alert—check it out!
            </div>
            <div className="alert alert-success" role="alert">
              A simple success alert—check it out!
            </div>
            <div className="alert alert-danger" role="alert">
              A simple danger alert—check it out!
            </div>
            <div className="alert alert-warning alert-dismissible fade show mb-0" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>
        </div>

        <div className="col-12 h-100 mb-5">
          <h2 className="mb-3">List Group</h2>
          <div className="bg-white p-4 border rounded-4 shadow-sm">
            <ul className="list-group">
              <li className="list-group-item active" aria-current="true">An active item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="row mb-5">
        <div className="col-12">
          <h2 className="mb-3">Badges</h2>
          <div className="bg-white p-4 border rounded-4 shadow-sm">
            <div className="d-flex flex-wrap gap-3">
              <span className="badge bg-primary">Primary</span>
              <span className="badge bg-secondary">Secondary</span>
              <span className="badge bg-success">Success</span>
              <span className="badge bg-danger">Danger</span>
              <span className="badge bg-warning text-dark">Warning</span>
              <span className="badge bg-info text-dark">Info</span>
              <span className="badge rounded-pill bg-dark">Dark Pill</span>
            </div>
          </div>
        </div>
      </section>

      <section className="row mb-5">
        <div className="col-12">
          <h2 className="mb-3">Pagination</h2>
          <div className="bg-white p-4 border rounded-4 shadow-sm">
            <nav aria-label="Page navigation example">
              <ul className="pagination mb-0">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item active"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section className="row mb-5">
        <div className="col-12">
          <h2 className="mb-3">Breadcrumb</h2>
          <div className="bg-white p-4 border rounded-4 shadow-sm">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Library</a></li>
                <li className="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="row mb-5 row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <div className="col-12">
          <h2 className="mb-3">Forms</h2>
          <div className="bg-white p-4 border rounded-4 shadow-sm">
            <div style={{ maxWidth: '800px' }} className="mx-auto">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                  <label htmlFor="disabledSelect" className="form-label">Disabled select menu</label>
                  <select id="disabledSelect" className="form-select">
                    <option>Disabled select</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <fieldset className="mb-3">
                  <legend className="col-form-label pt-0">Radios</legend>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" defaultChecked />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      First radio
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Second radio
                    </label>
                  </div>
                </fieldset>
                <div className="mb-3">
                  <label htmlFor="customRange1" className="form-label">Example range</label>
                  <input type="range" className="form-range" id="customRange1" />
                </div>
                <button type="button" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="row mb-5">
        <div className="col-12">
          <h2 className="mb-3">Progress</h2>
          <div className="bg-white p-4 border rounded-4 shadow-sm">
            <div className="progress mb-3">
              <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
            </div>
            <div className="progress mb-3">
              <div className="progress-bar bg-success" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%</div>
            </div>
            <div className="progress mb-0">
              <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75%</div>
            </div>
          </div>
        </div>
      </section>

      <section className="row mb-5">
        <div className="col-12">
          <h2 className="mb-3">Spinners</h2>
          <div className="bg-white p-4 border rounded-4 shadow-sm">
            <div className="d-flex flex-wrap gap-3">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="row mb-5">
        <div className="col-12">
          <h2 className="mb-3">Modal</h2>
          <div className="bg-white p-4 border rounded-4 shadow-sm">
            <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>
              Launch demo modal
            </button>

            {showModal && (
              <div className="modal show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Modal title</h5>
                      <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary bg-secondary-subtle" onClick={() => setShowModal(false)}>Close</button>
                      <button type="button" className="btn btn-primary" onClick={() => setShowModal(false)}>Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="row mb-5">
        <div className="col-12">
          <h2 className="mb-3">Accordion</h2>
          <div className="bg-white p-4 border rounded-4 shadow-sm">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="alert alert-info border-0 shadow-sm mx-auto mb-5 mt-5" style={{ maxWidth: '800px' }}>
        <i className="bi bi-info-circle-fill me-2"></i>
        <strong>Note:</strong> All standard Bootstrap 5 components are supported out of the box and will automatically inherit the active theme colors. View the <a href="https://getbootstrap.com/docs/5.3/components/" target="_blank" rel="noopener noreferrer" className="alert-link">official Bootstrap 5 Components documentation</a> for complete usage details.
      </div>
    </div>
  );
};

export default ComponentPreview;
