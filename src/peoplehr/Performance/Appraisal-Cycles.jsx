import React from "react";

const AppraisalCyclesDashboard = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* ================= HEADER ================= */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h3>Appraisal Cycles</h3>
            <p className="text-muted">
              Manage performance cycles across departments and roles
            </p>
          </div>

          <button className="btn btn-primary">
            + Create New Cycle
          </button>
        </div>

        {/* ================= FILTERS ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-body row g-3">

            <div className="col-md-3">
              <label className="form-label">Cycle Name</label>
              <input className="form-control" placeholder="Search cycle..." />
            </div>

            <div className="col-md-2">
              <label className="form-label">Year</label>
              <select className="form-select">
                <option>All</option>
                <option>2026</option>
                <option>2025</option>
              </select>
            </div>

            <div className="col-md-2">
              <label className="form-label">Department</label>
              <select className="form-select">
                <option>All</option>
                <option>Sales</option>
                <option>HR</option>
                <option>IT</option>
              </select>
            </div>

            <div className="col-md-2">
              <label className="form-label">Unit</label>
              <select className="form-select">
                <option>All</option>
                <option>North</option>
                <option>South</option>
              </select>
            </div>

            <div className="col-md-2">
              <label className="form-label">Role</label>
              <select className="form-select">
                <option>All</option>
                <option>Employee</option>
                <option>Manager</option>
                <option>Leadership</option>
              </select>
            </div>

            <div className="col-md-1 d-flex align-items-end">
              <button className="btn btn-outline-secondary w-100">
                Reset
              </button>
            </div>

          </div>
        </div>

        {/* ================= CYCLES TABLE ================= */}
        <div className="card shadow-sm">
          <div className="card-body p-0">

            <table className="table table-hover mb-0 align-middle">
              <thead className="table-light">
                <tr>
                  <th>Cycle Name</th>
                  <th>Duration</th>
                  <th>Department</th>
                  <th>Roles</th>
                  <th>Status</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <strong>Annual Appraisal 2026</strong>
                    <div className="text-muted small">Company-wide</div>
                  </td>
                  <td>01 Jan 2026 – 31 Dec 2026</td>
                  <td>All</td>
                  <td>All Employees</td>
                  <td>
                    <span className="badge bg-success">In Progress</span>
                  </td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-primary me-2">
                      Edit
                    </button>
                    <button className="btn btn-sm btn-outline-secondary me-2">
                      View Reports
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      Close
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <strong>Mid-Year Review 2025</strong>
                  </td>
                  <td>01 Jun 2025 – 30 Jun 2025</td>
                  <td>Sales</td>
                  <td>Sales Team</td>
                  <td>
                    <span className="badge bg-secondary">Closed</span>
                  </td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-secondary">
                      View Reports
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <strong>Leadership Review Q4</strong>
                  </td>
                  <td>01 Oct 2026 – 31 Dec 2026</td>
                  <td>Management</td>
                  <td>Managers</td>
                  <td>
                    <span className="badge bg-warning text-dark">Draft</span>
                  </td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-primary me-2">
                      Edit
                    </button>
                    <button className="btn btn-sm btn-outline-success">
                      Publish
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

        {/* ================= FOOTER NOTE ================= */}
        <div className="text-muted small mt-3">
          Showing appraisal cycles across all business units
        </div>

      </div>
    </main>
  );
};

export default AppraisalCyclesDashboard;
