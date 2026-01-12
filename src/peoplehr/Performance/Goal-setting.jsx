import React from "react";

const GoalSetting = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* ================= HR SECTION ================= */}
        <div className="mb-5">
          <h3 className="mb-1">Performance Cycle Setup</h3>
          <p className="text-muted">HR Configuration Screen</p>

          {/* Cycle Details */}
          <div className="card mb-4">
            <div className="card-header fw-semibold">Cycle Details</div>
            <div className="card-body row g-3">
              <div className="col-md-6">
                <label className="form-label">Cycle Name</label>
                <input className="form-control" placeholder="Annual Review 2026" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Start Date</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-3">
                <label className="form-label">End Date</label>
                <input type="date" className="form-control" />
              </div>

              <div className="col-12">
                <label className="form-label">Assessment Types</label><br />
                <input type="checkbox" /> Self &nbsp;
                <input type="checkbox" /> Manager &nbsp;
                <input type="checkbox" /> Peer
              </div>
            </div>
          </div>

          {/* Weightage */}
          <div className="card mb-4">
            <div className="card-header fw-semibold">Weightage Configuration</div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th>Assessment Type</th>
                    <th>Weight (%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Self</td>
                    <td><input className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Manager</td>
                    <td><input className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Peer</td>
                    <td><input className="form-control" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* KPI Setup */}
          <div className="card mb-4">
            <div className="card-header fw-semibold">KPI & Competency Setup</div>
            <div className="card-body row">
              <div className="col-md-6">
                <h6>KPI Library</h6>
                <ul className="list-group">
                  <li className="list-group-item"><input type="checkbox" /> Sales Growth</li>
                  <li className="list-group-item"><input type="checkbox" /> Customer Satisfaction</li>
                  <li className="list-group-item"><input type="checkbox" /> Quality Score</li>
                </ul>
              </div>

              <div className="col-md-6">
                <h6>Selected KPIs</h6>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Sales Growth</td>
                      <td><input className="form-control" /></td>
                    </tr>
                    <tr>
                      <td>Quality Score</td>
                      <td><input className="form-control" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Approval Chain */}
          <div className="card mb-4">
            <div className="card-header fw-semibold">Approval Chain</div>
            <div className="card-body row">
              <div className="col-md-4">
                <label className="form-label">HR Approver</label>
                <select className="form-select"></select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Head Approver</label>
                <select className="form-select"></select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Executive Approver</label>
                <select className="form-select"></select>
              </div>
            </div>
          </div>

          <div className="text-end">
            <button className="btn btn-secondary me-2">Save Draft</button>
            <button className="btn btn-primary">Submit for Approval</button>
          </div>
        </div>

        <hr />

        {/* ================= EMPLOYEE SECTION ================= */}
        <div>
          <h3 className="mb-1">My Goals</h3>
          <p className="text-muted">Employee Goal Setting</p>

          <div className="card mb-4">
            <div className="card-header fw-semibold">Goal 1</div>
            <div className="card-body row g-3">
              <div className="col-md-6">
                <label className="form-label">Goal Title</label>
                <input className="form-control" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Due Date</label>
                <input type="date" className="form-control" />
              </div>

              <div className="col-12">
                <label className="form-label">Description</label>
                <textarea className="form-control"></textarea>
              </div>

              <div className="col-md-4">
                <label className="form-label">Target</label>
                <input className="form-control" />
              </div>

              <div className="col-md-4">
                <label className="form-label">Metric</label>
                <select className="form-select">
                  <option>Percentage</option>
                  <option>Count</option>
                  <option>Revenue</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">Company Goal Alignment</label>
                <select className="form-select"></select>
              </div>

              <div className="col-12">
                <label className="form-label">Attachments</label>
                <input type="file" className="form-control" />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Goal Progress</label>
            <div className="progress">
              <div className="progress-bar bg-success" style={{ width: "40%" }}>
                40%
              </div>
            </div>
          </div>

          <div>
            <button className="btn btn-secondary me-2">Save Draft</button>
            <button className="btn btn-success me-2">Submit to Manager</button>
            <button className="btn btn-danger">Withdraw</button>
          </div>
        </div>

      </div>
    </main>
  );
};

export default GoalSetting;
