import React, { useState } from 'react';

const ComponentPreview: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container py-5">
      <h1 className="mb-5 border-bottom pb-2">Bootstrap 5 Component Preview</h1>

      <div className="row mb-5">
        <div className="col-12">
          <h2>Navbar</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                  </li>
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="button">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-6">
          <h2>Buttons</h2>
          <div className="d-flex flex-wrap gap-2 mb-3">
            <button type="button" className="btn btn-primary">Primary</button>
            <button type="button" className="btn btn-secondary">Secondary</button>
            <button type="button" className="btn btn-success">Success</button>
            <button type="button" className="btn btn-danger">Danger</button>
            <button type="button" className="btn btn-warning">Warning</button>
            <button type="button" className="btn btn-info">Info</button>
            <button type="button" className="btn btn-light">Light</button>
            <button type="button" className="btn btn-dark">Dark</button>
            <button type="button" className="btn btn-link">Link</button>
          </div>

          <h2>Outline Buttons</h2>
          <div className="d-flex flex-wrap gap-2 mb-3">
            <button type="button" className="btn btn-outline-primary">Primary</button>
            <button type="button" className="btn btn-outline-secondary">Secondary</button>
            <button type="button" className="btn btn-outline-success">Success</button>
            <button type="button" className="btn btn-outline-danger">Danger</button>
            <button type="button" className="btn btn-outline-warning">Warning</button>
            <button type="button" className="btn btn-outline-info">Info</button>
            <button type="button" className="btn btn-outline-light">Light</button>
            <button type="button" className="btn btn-outline-dark">Dark</button>
          </div>
          
          <h2>Button Group</h2>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary">Left</button>
            <button type="button" className="btn btn-primary">Middle</button>
            <button type="button" className="btn btn-primary">Right</button>
          </div>
        </div>
        
        <div className="col-md-6">
          <h2>Alerts</h2>
          <div className="alert alert-primary" role="alert">
            A simple primary alert—check it out!
          </div>
          <div className="alert alert-success" role="alert">
            A simple success alert—check it out!
          </div>
          <div className="alert alert-danger" role="alert">
            A simple danger alert—check it out!
          </div>
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-4">
          <h2>Card</h2>
          <div className="card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Placeholder" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <h2>List Group</h2>
          <ul className="list-group mb-3">
            <li className="list-group-item active" aria-current="true">An active item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
          
          <h2>Badges</h2>
          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-primary">Primary</span>
            <span className="badge bg-secondary">Secondary</span>
            <span className="badge bg-success">Success</span>
            <span className="badge bg-danger">Danger</span>
            <span className="badge bg-warning text-dark">Warning</span>
            <span className="badge bg-info text-dark">Info</span>
            <span className="badge rounded-pill bg-dark">Dark Pill</span>
          </div>
        </div>
        
        <div className="col-md-4">
          <h2>Pagination</h2>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item active"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>
          
          <h2>Breadcrumb</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Library</a></li>
              <li className="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-6">
          <h2>Forms</h2>
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
        
        <div className="col-md-6">
          <h2>Progress</h2>
          <div className="progress mb-3">
            <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
          </div>
          <div className="progress mb-3">
            <div className="progress-bar bg-success" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%</div>
          </div>
          <div className="progress mb-4">
            <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75%</div>
          </div>

          <h2>Spinners</h2>
          <div className="mb-4">
            <div className="spinner-border text-primary me-2" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-secondary me-2" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-success me-2" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger me-2" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning me-2" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>

          <h2>Modal</h2>
          <button type="button" className="btn btn-primary mb-3" onClick={() => setShowModal(true)}>
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
                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={() => setShowModal(false)}>Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <h2>Accordion</h2>
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
    </div>
  );
};

export default ComponentPreview;
