import React from "react";

export default function Campoff() {
  return (
    <main className="p-4" style={{ background: "#f5f7fb", minHeight: "100vh" }}>
      <div className="container">
        <div className="card shadow-sm mx-auto" >
          <div className="card-body">

            {/* HEADER */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="mb-0">Comp-Off Management</h4>
              <span className="badge bg-info">Validity: 6 Months</span>
            </div>

            {/* INFO ALERT */}
            <div className="alert alert-warning">
              <strong>Process:</strong>
              <ol className="mb-0 ps-3">
                <li>Extra hours fetched from Timesheet</li>
                <li>Unit / Manager approval required</li>
                <li>Approved comp-off added to balance</li>
              </ol>
            </div>

            {/* EXTRA HOURS TABLE */}
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-3">Extra Hours from Timesheet</h6>
                <div className="table-responsive">
                  <table className="table table-bordered align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Date</th>
                        <th>Shift</th>
                        <th>Worked Hours</th>
                        <th>Extra Hours</th>
                        <th>Status</th>
                        <th className="text-center">Select</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>10 Jul 2025</td>
                        <td>General</td>
                        <td>10h</td>
                        <td><span className="text-success fw-semibold">+2h</span></td>
                        <td><span className="badge bg-success">Approved</span></td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>12 Jul 2025</td>
                        <td>Night</td>
                        <td>11h</td>
                        <td><span className="text-success fw-semibold">+3h</span></td>
                        <td><span className="badge bg-secondary">Pending</span></td>
                        <td className="text-center">
                          <input type="checkbox" disabled />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* VALIDATION MESSAGE */}
            <div className="alert alert-info mb-4">
              <strong>Note:</strong> Only approved extra hours can be converted into Comp-Off.
            </div>

            {/* CONVERT SECTION */}
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-3">Convert to Comp-Off</h6>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Comp-Off Date</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Duration</label>
                    <select className="form-select">
                      <option>Full Day</option>
                      <option>Half Day</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Remarks</label>
                  <textarea className="form-control" rows="3" placeholder="Optional remarks"></textarea>
                </div>

                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary">Submit for Approval</button>
                </div>
              </div>
            </div>

            {/* STATUS FLOW */}
            <div className="card">
              <div className="card-body">
                <h6 className="mb-3">Approval Flow</h6>
                <div className="d-flex justify-content-between text-center">
                  <div>
                    <div className="badge bg-secondary mb-2">Submitted</div>
                    <div className="small text-muted">Employee</div>
                  </div>
                  <div>
                    <div className="badge bg-warning mb-2">Pending</div>
                    <div className="small text-muted">Manager</div>
                  </div>
                  <div>
                    <div className="badge bg-light text-dark mb-2">Upcoming</div>
                    <div className="small text-muted">Balance Update</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
