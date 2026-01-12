import React from "react";

const GoalReview = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* PAGE HEADER */}
        <div className="mb-4">
          <h3>Goal Review</h3>
          <p className="text-muted">
            Review employee goals, provide feedback, approve or request changes
          </p>
        </div>

        {/* FILTER BAR */}
        <div className="card mb-4">
          <div className="card-body row g-3 align-items-end">
            <div className="col-md-4">
              <label className="form-label">Employee</label>
              <select className="form-select">
                <option>All Employees</option>
              </select>
            </div>

            <div className="col-md-3">
              <label className="form-label">Department</label>
              <select className="form-select">
                <option>All Departments</option>
              </select>
            </div>

            <div className="col-md-3">
              <label className="form-label">Status</label>
              <select className="form-select">
                <option>Pending Review</option>
                <option>Approved</option>
                <option>Sent Back</option>
              </select>
            </div>

            <div className="col-md-2">
              <button className="btn btn-primary w-100">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* BULK ACTION BAR */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <button className="btn btn-success me-2">
              Bulk Approve
            </button>
            <button className="btn btn-warning">
              Bulk Send Back
            </button>
          </div>

          <span className="badge bg-secondary">
            Lock Date: 31-Mar-2026
          </span>
        </div>

        {/* GOAL REVIEW CARD */}
        <div className="card mb-4">
          <div className="card-header d-flex justify-content-between align-items-center">
            <div>
              <strong>Employee:</strong> Rahul Sharma<br />
              <small className="text-muted">Sales Executive | Sales</small>
            </div>

            <span className="badge bg-warning text-dark">
              Pending Review
            </span>
          </div>

          <div className="card-body">

            {/* GOAL DETAILS */}
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label className="form-label">Goal Title</label>
                <input
                  className="form-control"
                  value="Increase Quarterly Sales"
                  readOnly
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">Target</label>
                <input
                  className="form-control"
                  placeholder="₹ 50 Lakhs"
                />
                <small className="text-muted">
                  Editable by Manager
                </small>
              </div>

              <div className="col-md-3">
                <label className="form-label">Due Date</label>
                <input
                  type="date"
                  className="form-control"
                  readOnly
                />
              </div>

              <div className="col-12">
                <label className="form-label">Goal Description</label>
                <textarea
                  className="form-control"
                  rows="3"
                  readOnly
                >
                  Achieve a 20% increase in quarterly sales revenue through
                  new client acquisition and upselling.
                </textarea>
              </div>
            </div>

            {/* PROGRESS */}
            <div className="mb-3">
              <label className="form-label">Progress</label>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  style={{ width: "55%" }}
                >
                  55%
                </div>
              </div>
            </div>

            {/* MANAGER COMMENTS */}
            <div className="mb-3">
              <label className="form-label">Manager Comments</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Add feedback or revision notes..."
              ></textarea>
            </div>

            {/* ACTION BUTTONS */}
            <div className="text-end">
              <button className="btn btn-warning me-2">
                Send Back for Revision
              </button>
              <button className="btn btn-success">
                Approve Goal
              </button>
            </div>

          </div>
        </div>

        {/* LOCKED STATE (VISUAL ONLY) */}
        <div className="card border-secondary">
          <div className="card-body text-center">
            <h6 className="text-muted mb-1">Goal Locked</h6>
            <p className="mb-0 text-muted">
              This goal is locked after approval or lock date.
              Editing is disabled.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default GoalReview;
