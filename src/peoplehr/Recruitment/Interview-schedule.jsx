import React from "react";

const InterviewSchedulingRounds = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* ================= HEADER ================= */}
        <div className="mb-4">
          <h3>Interview Scheduling & Rounds Configuration</h3>
          <p className="text-muted">
            Configure interview rounds, assign interviewers, and manage schedules
          </p>
        </div>

        {/* ================= ROUND TEMPLATE CONFIG ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-semibold d-flex justify-content-between align-items-center">
            Interview Rounds Configuration
            <button className="btn btn-sm btn-outline-primary">
              Add New Round
            </button>
          </div>

          <div className="card-body">

            {/* Round 1 */}
            <div className="border rounded p-3 mb-3">
              <div className="row g-3 align-items-end">
                <div className="col-md-3">
                  <label className="form-label">Round Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Technical Round"
                  />
                </div>

                <div className="col-md-3">
                  <label className="form-label">Round Type</label>
                  <select className="form-select">
                    <option>Technical</option>
                    <option>Managerial</option>
                    <option>HR</option>
                  </select>
                </div>

                <div className="col-md-3">
                  <label className="form-label">Assign Interviewers</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Select interviewers"
                  />
                </div>

                <div className="col-md-2">
                  <label className="form-label">Round Order</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="1"
                  />
                </div>

                <div className="col-md-1 d-flex gap-1">
                  <button className="btn btn-outline-secondary btn-sm">
                    ↑
                  </button>
                  <button className="btn btn-outline-secondary btn-sm">
                    ↓
                  </button>
                </div>
              </div>

              <div className="d-flex justify-content-end gap-2 mt-3">
                <button className="btn btn-outline-danger btn-sm">
                  Remove Round
                </button>
              </div>
            </div>

            {/* Round 2 */}
            <div className="border rounded p-3 mb-3">
              <div className="row g-3 align-items-end">
                <div className="col-md-3">
                  <label className="form-label">Round Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="HR Discussion"
                  />
                </div>

                <div className="col-md-3">
                  <label className="form-label">Round Type</label>
                  <select className="form-select">
                    <option>HR</option>
                    <option>Technical</option>
                    <option>Managerial</option>
                  </select>
                </div>

                <div className="col-md-3">
                  <label className="form-label">Assign Interviewers</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Select interviewers"
                  />
                </div>

                <div className="col-md-2">
                  <label className="form-label">Round Order</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="2"
                  />
                </div>

                <div className="col-md-1 d-flex gap-1">
                  <button className="btn btn-outline-secondary btn-sm">
                    ↑
                  </button>
                  <button className="btn btn-outline-secondary btn-sm">
                    ↓
                  </button>
                </div>
              </div>

              <div className="d-flex justify-content-end gap-2 mt-3">
                <button className="btn btn-outline-danger btn-sm">
                  Remove Round
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* ================= SCHEDULING PANEL ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-semibold">
            Schedule Interview Round
          </div>

          <div className="card-body">
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <label className="form-label">Select Round</label>
                <select className="form-select">
                  <option>Technical Round</option>
                  <option>HR Discussion</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">Interview Date</label>
                <input type="date" className="form-control" />
              </div>

              <div className="col-md-4">
                <label className="form-label">Interview Time</label>
                <input type="time" className="form-control" />
              </div>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label">Interview Mode</label>
                <select className="form-select">
                  <option>Video Call</option>
                  <option>In-Person</option>
                  <option>Telephonic</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Meeting Link / Location</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter meeting link or address"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-secondary">
                Create Round Template
              </button>
              <button className="btn btn-outline-primary">
                Send Invites
              </button>
              <button className="btn btn-warning">
                Reschedule
              </button>
              <button className="btn btn-danger">
                Cancel
              </button>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default InterviewSchedulingRounds;
