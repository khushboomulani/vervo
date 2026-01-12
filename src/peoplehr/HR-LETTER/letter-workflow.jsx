import React from "react";

const LetterWorkflow = () => {
  return (
    <main className="p-4 bg-light min-vh-100">
      <div className="container-fluid mt-4">

        {/* PAGE TITLE */}
        <div className="mb-4">
          <h3>Create Letter Workflow</h3>
          <p className="text-muted">Step-wise letter creation & approval</p>
        </div>

        {/* STEP INDICATOR */}
        <div className="d-flex justify-content-between mb-4 flex-wrap gap-2">
          <span className="badge bg-primary">1 Employee</span>
          <span className="badge bg-secondary">2 Letter Type</span>
          <span className="badge bg-secondary">3 Template</span>
          <span className="badge bg-secondary">4 Placeholders</span>
          <span className="badge bg-secondary">5 Validation</span>
          <span className="badge bg-secondary">6 Preview</span>
          <span className="badge bg-secondary">7 Action</span>
        </div>

        <div className="row">

          {/* LEFT PANEL */}
          <div className="col-md-8">

            {/* STEP 1 */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Step 1: Select Employee
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Employee</label>
                    <select className="form-select">
                      <option>Select Employee</option>
                    </select>
                  </div>

                  <div className="col-md-4 mb-3">
                    <label className="form-label">Department</label>
                    <select className="form-select">
                      <option>All Departments</option>
                    </select>
                  </div>

                  <div className="col-md-4 mb-3">
                    <label className="form-label">Designation</label>
                    <select className="form-select">
                      <option>All Designations</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Step 2: Select Letter Type
              </div>
              <div className="card-body">
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" />
                  <label className="form-check-label">Offer Letter</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" />
                  <label className="form-check-label">Experience Letter</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" />
                  <label className="form-check-label">Appointment Letter</label>
                </div>
              </div>
            </div>

            {/* STEP 3 & 4 */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Step 3 & 4: Fill Letter Details
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Salary Amount</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="₹ 50,000"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Effective Date</label>
                    <input type="date" className="form-control" />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Joining Date</label>
                    <input type="date" className="form-control" />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Indore"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 6 PREVIEW */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Step 6: Letter Preview
              </div>
              <div className="card-body bg-light">
                <p>
                  Dear <strong>Employee Name</strong>,
                  <br /><br />
                  We are pleased to offer you a salary of{" "}
                  <strong>₹50,000</strong> effective from{" "}
                  <strong>01-Jan-2026</strong>.
                  <br /><br />
                  Regards,<br />
                  HR Team
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL */}
          <div className="col-md-4">

            {/* PLACEHOLDER STATUS */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Placeholder Status
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-success">
                  ✔ Employee Name
                </li>
                <li className="list-group-item text-success">
                  ✔ Salary
                </li>
                <li className="list-group-item text-danger">
                  ✖ Effective Date
                </li>
                <li className="list-group-item text-danger">
                  ✖ Location
                </li>
              </ul>
            </div>

            {/* VALIDATION MESSAGE */}
            <div className="alert alert-warning">
              Please fill all required placeholders before preview.
            </div>

          </div>
        </div>

        {/* FOOTER ACTIONS */}
        <div className="d-flex justify-content-end gap-2 mt-4">
          <button className="btn btn-outline-secondary">Back</button>
          <button className="btn btn-outline-dark">Save Draft</button>
          <button className="btn btn-primary">Send for Approval</button>
        </div>

      </div>
    </main>
  );
};

export default LetterWorkflow;
