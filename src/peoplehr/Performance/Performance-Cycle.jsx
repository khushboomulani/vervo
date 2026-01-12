import React from "react";

const PerformanceCycleSetup = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* PAGE HEADER */}
        <div className="mb-4">
          <h3>Performance Cycle Setup</h3>
          <p className="text-muted">
            Configure performance review cycle, KPIs, competencies & approvals
          </p>
        </div>

        {/* STEP INDICATOR */}
        <div className="d-flex flex-wrap gap-2 mb-4">
          <span className="badge bg-primary">1 Cycle Details</span>
          <span className="badge bg-secondary">2 Assessment Types</span>
          <span className="badge bg-secondary">3 KPIs & Competencies</span>
          <span className="badge bg-secondary">4 Calibration</span>
          <span className="badge bg-secondary">5 Approval Chain</span>
          <span className="badge bg-secondary">6 Review & Save</span>
        </div>

        <div className="row">

          {/* LEFT PANEL */}
          <div className="col-md-8">

            {/* STEP 1: CYCLE DETAILS */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Step 1: Cycle Details
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Cycle Name</label>
                    <input className="form-control" placeholder="FY 2025 – Annual Review" />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label className="form-label">Start Date</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label className="form-label">End Date</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Roles Included</label>
                    <select className="form-select">
                      <option>All Employees</option>
                      <option>Managers</option>
                      <option>Executives</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 2: ASSESSMENT TYPES */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Step 2: Assessment Types & Weightage
              </div>
              <div className="card-body">
                <table className="table table-bordered align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Assessment Type</th>
                      <th className="text-center">Enabled</th>
                      <th className="text-center">Weight (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Self Review</td>
                      <td className="text-center"><input type="checkbox" /></td>
                      <td><input className="form-control" placeholder="20" /></td>
                    </tr>
                    <tr>
                      <td>Manager Review</td>
                      <td className="text-center"><input type="checkbox" /></td>
                      <td><input className="form-control" placeholder="60" /></td>
                    </tr>
                    <tr>
                      <td>Peer Review</td>
                      <td className="text-center"><input type="checkbox" /></td>
                      <td><input className="form-control" placeholder="20" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* STEP 3: KPI & COMPETENCY */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Step 3: KPI Library & Competencies
              </div>
              <div className="card-body">

                <h6 className="mb-3">KPI Library</h6>
                <div className="mb-4">
                  <select className="form-select">
                    <option>Select KPI Set</option>
                    <option>Sales KPIs</option>
                    <option>Engineering KPIs</option>
                    <option>Leadership KPIs</option>
                  </select>
                </div>

                <h6 className="mb-3">Competency Setup</h6>
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Competency</th>
                      <th>Description</th>
                      <th className="text-center">Weight (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Technical Skills</td>
                      <td>Role-based technical proficiency</td>
                      <td><input className="form-control" placeholder="40" /></td>
                    </tr>
                    <tr>
                      <td>Communication</td>
                      <td>Clarity, collaboration & articulation</td>
                      <td><input className="form-control" placeholder="30" /></td>
                    </tr>
                    <tr>
                      <td>Ownership</td>
                      <td>Accountability & initiative</td>
                      <td><input className="form-control" placeholder="30" /></td>
                    </tr>
                  </tbody>
                </table>

                <button className="btn btn-outline-primary btn-sm">
                  + Add Competency
                </button>

              </div>
            </div>

            {/* STEP 4: CALIBRATION */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Step 4: Calibration Rules
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">Calibration Method</label>
                  <select className="form-select">
                    <option>Bell Curve</option>
                    <option>Forced Distribution</option>
                    <option>No Calibration</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Calibration Notes</label>
                  <textarea className="form-control" rows="3" placeholder="Optional guidance for reviewers" />
                </div>
              </div>
            </div>

            {/* STEP 5: APPROVAL CHAIN */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Step 5: Approval Chain
              </div>
              <div className="card-body">
                <ol className="list-group list-group-numbered">
                  <li className="list-group-item">HR Review</li>
                  <li className="list-group-item">Department Head Approval</li>
                  <li className="list-group-item">Executive Approval</li>
                </ol>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL */}
          <div className="col-md-4">

            {/* SUMMARY */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Cycle Summary
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between">
                    Cycle Type
                    <strong>Annual</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    Assessments
                    <strong>Self, Manager, Peer</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    Total Competencies
                    <strong>3</strong>
                  </li>
                </ul>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <button className="btn btn-success w-100 mb-2">
                  Save & Launch Cycle
                </button>
                <button className="btn btn-outline-primary w-100 mb-2">
                  Save as Template
                </button>
                <button className="btn btn-outline-secondary w-100">
                  Cancel
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
};

export default PerformanceCycleSetup;
