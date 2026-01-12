import React from "react";

const HRLettersDashboard = () => {
  return (
    <main className="p-4 bg-light min-vh-100">
      <div className="container-fluid">

        {/* PAGE HEADER */}
        <div className="mb-4">
          <h3>HR Letters</h3>
          <p className="text-muted">
            Unified view of all issued letters & digital contracts
          </p>
        </div>

        {/* VIEW TOGGLE */}
        <div className="mb-3 d-flex gap-2">
          <button className="btn btn-primary btn-sm">Employee View</button>
          <button className="btn btn-outline-primary btn-sm">HR View</button>
        </div>

        {/* SEARCH & FILTER BAR */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="row g-2">

              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by title or keyword"
                />
              </div>

              <div className="col-md-2">
                <select className="form-select">
                  <option>All Categories</option>
                  <option>Offer</option>
                  <option>Appointment</option>
                  <option>Promotion</option>
                  <option>Increment</option>
                  <option>Warning</option>
                  <option>Confirmation</option>
                  <option>Relieving</option>
                  <option>Transfer</option>
                  <option>Others</option>
                </select>
              </div>

              <div className="col-md-2">
                <select className="form-select">
                  <option>All Status</option>
                  <option>Draft</option>
                  <option>Awaiting Approval</option>
                  <option>Approved</option>
                  <option>Issued</option>
                  <option>Revoked</option>
                </select>
              </div>

              <div className="col-md-2">
                <input type="date" className="form-control" />
              </div>

              <div className="col-md-3 text-end">
                <button className="btn btn-outline-secondary btn-sm">
                  Clear Filters
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* LETTER LIST */}
        <div className="card shadow-sm">
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Document</th>
                  <th>Category</th>
                  <th>Issued By</th>
                  <th>Issue Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <i className="fa fa-file-pdf-o fa-lg text-danger me-2"></i>
                      <div>
                        <div className="fw-semibold">Offer Letter</div>
                        <small className="text-muted">v3 • Digital Contract</small>
                      </div>
                    </div>
                  </td>
                  <td>Offer</td>
                  <td>HR Manager</td>
                  <td>12 Jan 2026</td>
                  <td>
                    <span className="badge bg-success">Issued</span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-1">
                      Preview
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      Download
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <i className="fa fa-file-text-o fa-lg text-primary me-2"></i>
                      <div>
                        <div className="fw-semibold">Promotion Letter</div>
                        <small className="text-muted">v1</small>
                      </div>
                    </div>
                  </td>
                  <td>Promotion</td>
                  <td>HR Admin</td>
                  <td>08 Jan 2026</td>
                  <td>
                    <span className="badge bg-warning text-dark">
                      Awaiting Approval
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-1">
                      Preview
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      Download
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <i className="fa fa-file-o fa-lg text-secondary me-2"></i>
                      <div>
                        <div className="fw-semibold">Warning Letter</div>
                        <small className="text-muted">Draft</small>
                      </div>
                    </div>
                  </td>
                  <td>Warning</td>
                  <td>HR Manager</td>
                  <td>05 Jan 2026</td>
                  <td>
                    <span className="badge bg-secondary">Draft</span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-1">
                      Preview
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      Download
                    </button>
                  </td>
                </tr>
              </tbody>

            </table>
          </div>

          {/* PAGINATION */}
          <div className="card-footer d-flex justify-content-between align-items-center">
            <small className="text-muted">
              Showing 1–3 of 28 letters
            </small>
            <nav>
              <ul className="pagination pagination-sm mb-0">
                <li className="page-item disabled">
                  <span className="page-link">Previous</span>
                </li>
                <li className="page-item active">
                  <span className="page-link">1</span>
                </li>
                <li className="page-item">
                  <span className="page-link">2</span>
                </li>
                <li className="page-item">
                  <span className="page-link">Next</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>

      </div>
    </main>
  );
};

export default HRLettersDashboard;
