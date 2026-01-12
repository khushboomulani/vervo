import React from "react";

const FinalizationLetters = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* ================= HEADER ================= */}
        <div className="mb-4">
          <h3>Finalization & Appraisal Letters</h3>
          <p className="text-muted">
            Finalize ratings, trigger increments, and generate appraisal letters
          </p>
        </div>

        {/* ================= CYCLE SELECTION ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-body row g-3">
            <div className="col-md-4">
              <label className="form-label">Performance Cycle</label>
              <select className="form-select">
                <option>Select Cycle</option>
                <option>FY 2025 – Annual Review</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Department</label>
              <select className="form-select">
                <option>All Departments</option>
                <option>Engineering</option>
                <option>Sales</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Finalization Status</label>
              <select className="form-select">
                <option>Pending</option>
                <option>Finalized</option>
              </select>
            </div>
          </div>
        </div>

        {/* ================= FINAL RATING TABLE ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-bold">
            Final Ratings & Increment Recommendation
          </div>
          <div className="card-body">

            <table className="table table-striped align-middle">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Final Rating</th>
                  <th>Increment %</th>
                  <th>Effective Date</th>
                  <th>Status</th>
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
                    <input
                      className="form-control form-control-sm"
                      placeholder="8%"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      className="form-control form-control-sm"
                    />
                  </td>
                  <td>
                    <span className="badge bg-warning">Pending</span>
                  </td>
                </tr>

                <tr>
                  <td>Anita Verma</td>
                  <td>Sales</td>
                  <td>
                    <span className="badge bg-primary">Meets</span>
                  </td>
                  <td>
                    <input
                      className="form-control form-control-sm"
                      placeholder="5%"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      className="form-control form-control-sm"
                    />
                  </td>
                  <td>
                    <span className="badge bg-success">Finalized</span>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

        {/* ================= LETTER GENERATION ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-bold">
            Appraisal Letter Generation
          </div>
          <div className="card-body row g-3">

            <div className="col-md-4">
              <label className="form-label">Letter Template</label>
              <select className="form-select">
                <option>Select Template</option>
                <option>Standard Appraisal Letter</option>
                <option>Promotion Letter</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">HR Letters Module</label>
              <input
                className="form-control"
                value="Connected"
                disabled
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Delivery Mode</label>
              <select className="form-select">
                <option>Employee Portal</option>
                <option>Email + Portal</option>
              </select>
            </div>

          </div>
        </div>

        {/* ================= EMPLOYEE ACKNOWLEDGMENT ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-bold">
            Employee Notification & Acknowledgment
          </div>
          <div className="card-body">

            <table className="table table-bordered align-middle text-center">
              <thead className="table-light">
                <tr>
                  <th>Employee</th>
                  <th>Letter Sent</th>
                  <th>Acknowledged</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rahul Sharma</td>
                  <td>
                    <span className="badge bg-success">Yes</span>
                  </td>
                  <td>
                    <span className="badge bg-warning">Pending</span>
                  </td>
                  <td>—</td>
                </tr>

                <tr>
                  <td>Anita Verma</td>
                  <td>
                    <span className="badge bg-success">Yes</span>
                  </td>
                  <td>
                    <span className="badge bg-success">Acknowledged</span>
                  </td>
                  <td>02 Apr 2026</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

        {/* ================= ACTION FOOTER ================= */}
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-secondary">
            Push to Compensation Workflow
          </button>

          <div className="d-flex gap-2">
            <button className="btn btn-secondary">
              Save Draft
            </button>
            <button className="btn btn-primary">
              Finalize & Generate Letters
            </button>
          </div>
        </div>

      </div>
    </main>
  );
};

export default FinalizationLetters;
