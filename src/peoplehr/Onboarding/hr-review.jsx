import React from "react";

const HRReviewDashboard = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* PAGE HEADER */}
        <div className="mb-4">
          <h3>HR Review Dashboard</h3>
          <p className="text-muted">
            Review employee profile and approve pre-boarding documents
          </p>
        </div>

        <div className="row">

          {/* LEFT PANEL – EMPLOYEE PROFILE */}
          <div className="col-md-8">

            {/* BASIC PROFILE */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Employee Draft Profile
              </div>

              <div className="card-body">
                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value="Rohit Sharma"
                      disabled
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value="rohit.sharma@company.com"
                      disabled
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      value="+91 98XXXXXX45"
                      disabled
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Date of Birth</label>
                    <input
                      type="text"
                      className="form-control"
                      value="12-Aug-1997"
                      disabled
                    />
                  </div>

                </div>
              </div>
            </div>

            {/* HR EDITABLE DETAILS */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                HR Editable Details
              </div>

              <div className="card-body">
                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Designation</label>
                    <select className="form-select">
                      <option>Select Designation</option>
                      <option>Software Engineer</option>
                      <option>Senior Engineer</option>
                      <option>HR Executive</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Unit / Business Unit</label>
                    <select className="form-select">
                      <option>Select Unit</option>
                      <option>Technology</option>
                      <option>HR</option>
                      <option>Operations</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Role</label>
                    <select className="form-select">
                      <option>Select Role</option>
                      <option>User</option>
                      <option>Manager</option>
                      <option>Admin</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Reporting Manager</label>
                    <select className="form-select">
                      <option>Select Manager</option>
                      <option>Amit Verma</option>
                      <option>Neha Singh</option>
                    </select>
                  </div>

                </div>
              </div>
            </div>

            {/* DOCUMENT STATUS */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Document Verification Status
              </div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                  Identity Documents
                  <span className="badge bg-success">Verified</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  Address Proof
                  <span className="badge bg-success">Verified</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  Qualification Documents
                  <span className="badge bg-warning">Pending Review</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  Banking Details
                  <span className="badge bg-secondary">Not Submitted</span>
                </li>
              </ul>
            </div>

          </div>

          {/* RIGHT PANEL – EMPLOYEE CODE & ACTIONS */}
          <div className="col-md-4">

            {/* EMPLOYEE CODE */}
            <div className="card shadow-sm mb-4">
              <div className="card-body text-center">
                <h6 className="text-muted">Auto-Generated Employee Code</h6>
                <h3 className="fw-bold text-primary mt-2">
                  EMP-2026-0145
                </h3>
                <small className="text-muted">
                  Generated upon approval
                </small>
              </div>
            </div>

            {/* HR ACTIONS */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                HR Actions
              </div>

              <div className="card-body">
                <button className="btn btn-success w-100 mb-2">
                  Approve Pre-Boarding Documents
                </button>

                <button className="btn btn-outline-danger w-100">
                  Send Back for Correction
                </button>
              </div>
            </div>

            {/* NOTES */}
            <div className="card shadow-sm">
              <div className="card-body">
                <h6>HR Notes</h6>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Add internal remarks (optional)"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
};

export default HRReviewDashboard;
