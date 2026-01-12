import React from "react";

const CategoryView = () => {
  return (
    <main className="p-4 bg-light min-vh-100">
      <div className="container-fluid">

        {/* PAGE HEADER */}
        <div className="mb-4">
          <h3>Document Categories</h3>
          <p className="text-muted">
            Browse documents by category, version & status
          </p>
        </div>

        {/* FILTER + SORT BAR */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="row align-items-end">

              <div className="col-md-3 mb-2">
                <label className="form-label">Category</label>
                <select className="form-select">
                  <option>All Categories</option>
                  <option>Offer Letters</option>
                  <option>Appointment Letters</option>
                  <option>Policy Documents</option>
                </select>
              </div>

              <div className="col-md-3 mb-2">
                <label className="form-label">Status</label>
                <select className="form-select">
                  <option>All</option>
                  <option>Active</option>
                  <option>Archived</option>
                </select>
              </div>

              <div className="col-md-3 mb-2">
                <label className="form-label">Sort By</label>
                <select className="form-select">
                  <option>Latest Updated</option>
                  <option>Document Name</option>
                  <option>Version</option>
                </select>
              </div>

              <div className="col-md-3 mb-2">
                <button className="btn btn-outline-secondary w-100">
                  Apply
                </button>
              </div>

            </div>
          </div>
        </div>

        <div className="row">

          {/* LEFT: DOCUMENT LIST */}
          <div className="col-md-7">

            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Documents
              </div>

              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Document Name</th>
                      <th>Category</th>
                      <th>Latest Version</th>
                      <th>Last Updated</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td>Offer Letter – Standard</td>
                      <td>Offer Letters</td>
                      <td>
                        <span className="badge bg-primary">v4</span>
                      </td>
                      <td>14-Jan-2026</td>
                      <td>
                        <span className="badge bg-success">Active</span>
                      </td>
                    </tr>

                    <tr>
                      <td>Appointment Letter – Manager</td>
                      <td>Appointment Letters</td>
                      <td>
                        <span className="badge bg-secondary">v2</span>
                      </td>
                      <td>09-Jan-2026</td>
                      <td>
                        <span className="badge bg-success">Active</span>
                      </td>
                    </tr>

                    <tr>
                      <td>IT Security Policy</td>
                      <td>Policy Documents</td>
                      <td>
                        <span className="badge bg-info">v5</span>
                      </td>
                      <td>02-Jan-2026</td>
                      <td>
                        <span className="badge bg-warning text-dark">
                          Archived
                        </span>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>

            </div>

          </div>

          {/* RIGHT: VERSION HISTORY */}
          <div className="col-md-5">

            <div className="card shadow-sm">
              <div className="card-header fw-bold">
                Version History
              </div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                  <span>v4 – Salary clause updated</span>
                  <small className="text-muted">14-Jan-2026</small>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>v3 – Legal formatting</span>
                  <small className="text-muted">10-Jan-2026</small>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>v2 – HR approval changes</span>
                  <small className="text-muted">07-Jan-2026</small>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>v1 – Initial draft</span>
                  <small className="text-muted">05-Jan-2026</small>
                </li>
              </ul>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
};

export default CategoryView;
