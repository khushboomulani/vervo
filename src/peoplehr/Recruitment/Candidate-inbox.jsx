import React from "react";

const CandidateApplicationInbox = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* HEADER */}
        <div className="mb-4">
          <h3>Candidate Application Inbox</h3>
          <p className="text-muted">
            Review and manage candidate applications across all hiring channels
          </p>
        </div>

        {/* FILTER BAR */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="row g-3 align-items-end">

              <div className="col-md-3">
                <label className="form-label">Applied Role</label>
                <select className="form-select">
                  <option>All Roles</option>
                  <option>Senior React Developer</option>
                  <option>HR Executive</option>
                </select>
              </div>

              <div className="col-md-2">
                <label className="form-label">Source</label>
                <select className="form-select">
                  <option>All</option>
                  <option>Job Portal</option>
                  <option>Referral</option>
                  <option>Internal</option>
                </select>
              </div>

              <div className="col-md-2">
                <label className="form-label">Status</label>
                <select className="form-select">
                  <option>All</option>
                  <option>Applied</option>
                  <option>Shortlisted</option>
                  <option>Rejected</option>
                  <option>Interview Scheduled</option>
                </select>
              </div>

              <div className="col-md-2">
                <label className="form-label">Applied Date</label>
                <input type="date" className="form-control" />
              </div>

              <div className="col-md-3">
                <button className="btn btn-primary w-100">
                  Apply Filters
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* APPLICATION TABLE */}
        <div className="card shadow-sm">
          <div className="card-header fw-semibold">
            Candidate Applications
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Candidate Name</th>
                  <th>Applied Role</th>
                  <th>Source</th>
                  <th>Resume</th>
                  <th>Status</th>
                  <th>Rating</th>
                  <th>Applied Date</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <strong>Ankit Sharma</strong>
                  </td>
                  <td>Senior React Developer</td>
                  <td>
                    <span className="badge bg-info">Job Portal</span>
                  </td>
                  <td>
                    <a href="#" className="text-decoration-none">
                      View Resume
                    </a>
                  </td>
                  <td>
                    <span className="badge bg-warning text-dark">
                      Applied
                    </span>
                  </td>
                  <td>★★★★☆</td>
                  <td>12 Feb 2026</td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-success me-1">
                      Shortlist
                    </button>
                    <button className="btn btn-sm btn-danger me-1">
                      Reject
                    </button>
                    <button className="btn btn-sm btn-outline-primary me-1">
                      Interview
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      View Profile
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <strong>Pooja Verma</strong>
                  </td>
                  <td>HR Executive</td>
                  <td>
                    <span className="badge bg-dark">Referral</span>
                  </td>
                  <td>
                    <a href="#" className="text-decoration-none">
                      View Resume
                    </a>
                  </td>
                  <td>
                    <span className="badge bg-success">
                      Shortlisted
                    </span>
                  </td>
                  <td>★★★★★</td>
                  <td>10 Feb 2026</td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-primary me-1">
                      Written Test
                    </button>
                    <button className="btn btn-sm btn-outline-success me-1">
                      Interview
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      View Profile
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

export default CandidateApplicationInbox;
