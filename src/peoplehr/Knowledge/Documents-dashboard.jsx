import React from "react";

const DocumentDashboard = () => {
  return (
    <main className="p-4 bg-light min-vh-100">
      <div className="container-fluid">

        {/* PAGE HEADER */}
        <div className="mb-4">
          <h3>Document Dashboard</h3>
          <p className="text-muted">
            Access categories, search documents & view recent uploads
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa fa-search"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search by document title, category or version"
              />
            </div>
          </div>
        </div>

        {/* CATEGORY GRID */}
        <div className="mb-4">
          <h5 className="mb-3">Categories</h5>

          <div className="row">

            <div className="col-md-3 mb-3">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center">
                  <i className="fa fa-file-text-o fa-2x mb-2 text-primary"></i>
                  <h6>Offer Letters</h6>
                  <small className="text-muted">12 Documents</small>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center">
                  <i className="fa fa-briefcase fa-2x mb-2 text-success"></i>
                  <h6>Appointment Letters</h6>
                  <small className="text-muted">8 Documents</small>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center">
                  <i className="fa fa-shield fa-2x mb-2 text-warning"></i>
                  <h6>Policies</h6>
                  <small className="text-muted">20 Documents</small>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center">
                  <i className="fa fa-gavel fa-2x mb-2 text-danger"></i>
                  <h6>Compliance</h6>
                  <small className="text-muted">6 Documents</small>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RECENT UPLOADS */}
        <div>
          <h5 className="mb-3">Recent Uploads</h5>

          <div className="card shadow-sm">
            <div className="table-responsive">
              <table className="table mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Document</th>
                    <th>Category</th>
                    <th>Version</th>
                    <th>Uploaded By</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Offer Letter – Standard</td>
                    <td>Offer Letters</td>
                    <td>v3</td>
                    <td>HR Admin</td>
                    <td>12 Jan 2026</td>
                  </tr>
                  <tr>
                    <td>Employee Handbook</td>
                    <td>Policies</td>
                    <td>v2</td>
                    <td>HR Manager</td>
                    <td>10 Jan 2026</td>
                  </tr>
                  <tr>
                    <td>Appointment Letter – Senior</td>
                    <td>Appointment Letters</td>
                    <td>v1</td>
                    <td>HR Admin</td>
                    <td>08 Jan 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default DocumentDashboard;
