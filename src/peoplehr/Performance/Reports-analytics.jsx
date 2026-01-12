import React from "react";

const ReportsAnalytics = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* ================= HEADER ================= */}
        <div className="mb-4">
          <h3>Reports & Analytics</h3>
          <p className="text-muted">
            Performance insights, comparisons, and downloadable reports
          </p>
        </div>

        {/* ================= FILTER BAR ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-body row g-3 align-items-end">
            <div className="col-md-3">
              <label className="form-label">Performance Cycle</label>
              <select className="form-select">
                <option>Select Cycle</option>
                <option>FY 2025 – Annual Review</option>
              </select>
            </div>

            <div className="col-md-3">
              <label className="form-label">Department</label>
              <select className="form-select">
                <option>All Departments</option>
                <option>Engineering</option>
                <option>Sales</option>
              </select>
            </div>

            <div className="col-md-3">
              <label className="form-label">Date Range</label>
              <input type="date" className="form-control" />
            </div>

            <div className="col-md-3">
              <button className="btn btn-primary w-100">
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* ================= STANDARD REPORTS ================= */}
        <h5 className="mb-3">Standard Reports</h5>

        <div className="row g-4 mb-4">

          <div className="col-md-3">
            <div className="card shadow-sm text-center h-100">
              <div className="card-body">
                <h6>Rating Distribution</h6>
                <div className="bg-secondary-subtle rounded p-4 mt-3">
                  Chart Placeholder
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm text-center h-100">
              <div className="card-body">
                <h6>Goal Completion Rate</h6>
                <div className="bg-secondary-subtle rounded p-4 mt-3">
                  Chart Placeholder
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm text-center h-100">
              <div className="card-body">
                <h6>Top Performers</h6>
                <div className="bg-secondary-subtle rounded p-4 mt-3">
                  Leaderboard Placeholder
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm text-center h-100">
              <div className="card-body">
                <h6>Bottom Performers</h6>
                <div className="bg-secondary-subtle rounded p-4 mt-3">
                  List Placeholder
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ================= DEPARTMENT COMPARISON ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-bold">
            Department Comparison
          </div>
          <div className="card-body">
            <div className="bg-secondary-subtle rounded p-5 text-center">
              Comparative Chart Placeholder (Avg Rating, Completion %)
            </div>
          </div>
        </div>

        {/* ================= CALIBRATION LOGS ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-bold">
            Calibration Logs
          </div>
          <div className="card-body">

            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Cycle</th>
                  <th>Department</th>
                  <th>Round</th>
                  <th>Adjusted By</th>
                  <th>Date</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>FY 2025</td>
                  <td>Engineering</td>
                  <td>Round 1</td>
                  <td>HR Manager</td>
                  <td>15 Mar 2026</td>
                  <td>Normalized ratings</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

        {/* ================= CUSTOM REPORT BUILDER ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-bold">
            Custom Report Builder
          </div>
          <div className="card-body row g-3">

            <div className="col-md-4">
              <label className="form-label">Select Metrics</label>
              <select multiple className="form-select" style={{ height: "120px" }}>
                <option>Final Rating</option>
                <option>Goal Completion %</option>
                <option>Increment %</option>
                <option>Manager Rating</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Group By</label>
              <select className="form-select">
                <option>Department</option>
                <option>Role</option>
                <option>Manager</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Output Format</label>
              <select className="form-select">
                <option>PDF</option>
                <option>CSV</option>
                <option>XLS</option>
              </select>
            </div>

          </div>
        </div>

        {/* ================= EXPORT ACTIONS ================= */}
        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-outline-secondary">
            Preview Report
          </button>
          <button className="btn btn-success">
            Export Report
          </button>
        </div>

      </div>
    </main>
  );
};

export default ReportsAnalytics;
