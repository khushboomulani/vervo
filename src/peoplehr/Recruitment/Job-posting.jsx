import React from "react";

const JobPostingManagement = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* HEADER */}
        <div className="mb-4">
          <h3>Job Posting Management</h3>
          <p className="text-muted">
            Manage job postings across internal and external hiring channels
          </p>
        </div>

        {/* FILTER / SUMMARY CARD */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="row g-3">

              <div className="col-md-3">
                <label className="form-label">Posting Status</label>
                <select className="form-select">
                  <option>All</option>
                  <option>Draft</option>
                  <option>Published</option>
                  <option>Expired</option>
                </select>
              </div>

              <div className="col-md-3">
                <label className="form-label">Channel</label>
                <select className="form-select">
                  <option>All Channels</option>
                  <option>Internal</option>
                  <option>Job Portal</option>
                  <option>Referral</option>
                </select>
              </div>

              <div className="col-md-3">
                <label className="form-label">Posted Date</label>
                <input type="date" className="form-control" />
              </div>

              <div className="col-md-3 d-flex align-items-end">
                <button className="btn btn-primary w-100">
                  Apply Filters
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* JOB POSTING TABLE */}
        <div className="card shadow-sm">
          <div className="card-header fw-semibold">
            Active Job Postings
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Posting Title</th>
                  <th>Channels</th>
                  <th>Status</th>
                  <th>Posted Date</th>
                  <th>Expiry Date</th>
                  <th>Referral Count</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Senior React Developer</td>
                  <td>
                    <span className="badge bg-secondary me-1">Internal</span>
                    <span className="badge bg-info">Portal</span>
                  </td>
                  <td>
                    <span className="badge bg-success">Published</span>
                  </td>
                  <td>10 Feb 2026</td>
                  <td>10 Mar 2026</td>
                  <td>12</td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-primary me-1">
                      Edit
                    </button>
                    <button className="btn btn-sm btn-outline-warning me-1">
                      Unpublish
                    </button>
                    <button className="btn btn-sm btn-outline-success">
                      Push to Portals
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>HR Executive</td>
                  <td>
                    <span className="badge bg-secondary me-1">Internal</span>
                    <span className="badge bg-dark">Referral</span>
                  </td>
                  <td>
                    <span className="badge bg-warning text-dark">Draft</span>
                  </td>
                  <td>—</td>
                  <td>—</td>
                  <td>3</td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-success me-1">
                      Publish
                    </button>
                    <button className="btn btn-sm btn-outline-primary">
                      Edit
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
};

export default JobPostingManagement;
