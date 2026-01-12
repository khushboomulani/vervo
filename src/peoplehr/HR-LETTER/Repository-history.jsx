import React from "react";

const LetterRepository = () => {
  return (
    <main className="p-4 bg-light min-vh-100">
      <div className="container-fluid">

        {/* PAGE HEADER */}
        <div className="mb-4">
          <h3>Letter Repository & History</h3>
          <p className="text-muted">
            Track issued letters, versions, changes & acknowledgments
          </p>
        </div>

        {/* FILTER PANEL */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-bold">
            Filters
          </div>
          <div className="card-body">
            <div className="row">

              <div className="col-md-2 mb-3">
                <label className="form-label">Department</label>
                <select className="form-select">
                  <option>All</option>
                </select>
              </div>

              <div className="col-md-2 mb-3">
                <label className="form-label">Band</label>
                <select className="form-select">
                  <option>All</option>
                </select>
              </div>

              <div className="col-md-3 mb-3">
                <label className="form-label">Reporting Manager</label>
                <select className="form-select">
                  <option>All</option>
                </select>
              </div>

              <div className="col-md-2 mb-3">
                <label className="form-label">Role</label>
                <select className="form-select">
                  <option>All</option>
                </select>
              </div>

              <div className="col-md-3 mb-3">
                <label className="form-label">Date Range</label>
                <input type="date" className="form-control" />
              </div>

            </div>
          </div>
        </div>

        <div className="row">

          {/* LEFT: LETTER LIST */}
          <div className="col-md-7">

            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Issued Letters
              </div>

              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Employee</th>
                      <th>Letter Type</th>
                      <th>Version</th>
                      <th>Issued On</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Rahul Sharma</td>
                      <td>Offer Letter</td>
                      <td>
                        <span className="badge bg-primary">v3</span>
                      </td>
                      <td>12-Jan-2026</td>
                      <td>
                        <span className="badge bg-success">
                          Acknowledged
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>Neha Verma</td>
                      <td>Appointment Letter</td>
                      <td>
                        <span className="badge bg-secondary">v1</span>
                      </td>
                      <td>08-Jan-2026</td>
                      <td>
                        <span className="badge bg-warning text-dark">
                          Pending
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>Amit Singh</td>
                      <td>Policy Letter</td>
                      <td>
                        <span className="badge bg-info">v2</span>
                      </td>
                      <td>05-Jan-2026</td>
                      <td>
                        <span className="badge bg-danger">
                          Rejected
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>

          </div>

          {/* RIGHT: VERSION & COMPARISON */}
          <div className="col-md-5">

            {/* VERSION HISTORY */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Version History
              </div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                  <span>v3 – Salary updated</span>
                  <small className="text-muted">12-Jan-2026</small>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>v2 – Date corrected</span>
                  <small className="text-muted">10-Jan-2026</small>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>v1 – Initial issue</span>
                  <small className="text-muted">08-Jan-2026</small>
                </li>
              </ul>
            </div>

            {/* COMPARISON VIEW */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Version Comparison
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 border-end">
                    <h6 className="text-muted">Previous (v2)</h6>
                    <p className="small">
                      Salary: ₹45,000<br />
                      Effective Date: 01-Jan-2026
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h6 className="text-muted">Current (v3)</h6>
                    <p className="small">
                      Salary: ₹50,000<br />
                      Effective Date: 01-Jan-2026
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ACKNOWLEDGMENT TRACKER */}
            <div className="card shadow-sm">
              <div className="card-header fw-bold">
                Acknowledgment Tracker
              </div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Employee:</strong> Rahul Sharma<br />
                  <span className="badge bg-success mt-1">
                    Accepted on 13-Jan-2026
                  </span>
                </li>
                <li className="list-group-item">
                  <strong>Policy:</strong> IT Security Policy<br />
                  <span className="badge bg-warning text-dark mt-1">
                    Pending Acceptance
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default LetterRepository;
