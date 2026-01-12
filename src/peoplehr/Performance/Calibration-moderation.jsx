import React from "react";

const CalibrationModeration = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* ================= HEADER ================= */}
        <div className="mb-4">
          <h3>Calibration & Moderation</h3>
          <p className="text-muted">
            Review, compare, and moderate performance ratings
          </p>
        </div>

        {/* ================= CYCLE & ROUND SELECTION ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-body row g-3">
            <div className="col-md-4">
              <label className="form-label">Performance Cycle</label>
              <select className="form-select">
                <option>Select Cycle</option>
                <option>FY 2025 – Annual</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Calibration Round</label>
              <select className="form-select">
                <option>Round 1</option>
                <option>Round 2</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Department</label>
              <select className="form-select">
                <option>All</option>
                <option>Engineering</option>
                <option>Sales</option>
              </select>
            </div>
          </div>
        </div>

        {/* ================= DISTRIBUTION OVERVIEW ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-bold">
            Rating Distribution Overview
          </div>
          <div className="card-body">

            <table className="table table-bordered text-center">
              <thead className="table-light">
                <tr>
                  <th>Rating</th>
                  <th>Before Calibration</th>
                  <th>After Calibration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Outstanding</td>
                  <td>12%</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Exceeds</td>
                  <td>28%</td>
                  <td>30%</td>
                </tr>
                <tr>
                  <td>Meets</td>
                  <td>45%</td>
                  <td>48%</td>
                </tr>
                <tr>
                  <td>Needs Improvement</td>
                  <td>15%</td>
                  <td>12%</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

        {/* ================= EMPLOYEE CALIBRATION TABLE ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-bold">
            Employee Rating Moderation
          </div>
          <div className="card-body">

            <table className="table table-striped align-middle">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Manager Rating</th>
                  <th>Calibrated Rating</th>
                  <th>Calibration Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rahul Sharma</td>
                  <td>Engineering</td>
                  <td>
                    <span className="badge bg-success">Exceeds</span>
                  </td>
                  <td>
                    <select className="form-select form-select-sm">
                      <option>Outstanding</option>
                      <option selected>Exceeds</option>
                      <option>Meets</option>
                      <option>Needs Improvement</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Justification..."
                    />
                  </td>
                </tr>

                <tr>
                  <td>Anita Verma</td>
                  <td>Sales</td>
                  <td>
                    <span className="badge bg-warning">Meets</span>
                  </td>
                  <td>
                    <select className="form-select form-select-sm">
                      <option>Outstanding</option>
                      <option>Exceeds</option>
                      <option selected>Meets</option>
                      <option>Needs Improvement</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Reason for change..."
                    />
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

        {/* ================= VERSIONING & AUDIT TRAIL ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-bold">
            Calibration History & Audit Trail
          </div>
          <div className="card-body">

            <ul className="list-group">
              <li className="list-group-item">
                <strong>Round 1</strong> – 20 Mar 2026 – Adjusted 8 ratings
                <span className="text-muted ms-2">(Saved Snapshot)</span>
              </li>
              <li className="list-group-item">
                <strong>Round 2</strong> – 25 Mar 2026 – Adjusted 3 ratings
                <span className="text-muted ms-2">(Saved Snapshot)</span>
              </li>
            </ul>

          </div>
        </div>

        {/* ================= ACTION FOOTER ================= */}
        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-outline-secondary">
            Save Draft
          </button>
          <button className="btn btn-primary">
            Finalize Calibration
          </button>
        </div>

      </div>
    </main>
  );
};

export default CalibrationModeration;
