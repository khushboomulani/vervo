import React from "react";

const MISAccountCreation = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* PAGE HEADER */}
        <div className="mb-4">
          <h3>MIS Account Activation</h3>
          <p className="text-muted">
            Create and activate employee MIS access (HR Only)
          </p>
        </div>

        <div className="row">

          {/* LEFT PANEL */}
          <div className="col-md-8">

            {/* EMPLOYEE BASIC INFO */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Employee Details
              </div>

              <div className="card-body">
                <div className="row">

                  <div className="col-md-4 mb-3">
                    <label className="form-label">Employee Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value="Rohit Sharma"
                      disabled
                    />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label className="form-label">Employee Code</label>
                    <input
                      type="text"
                      className="form-control"
                      value="VERVA-EMP-1042"
                      disabled
                    />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label className="form-label">Official Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value="rohit.sharma@verva.com"
                      disabled
                    />
                  </div>

                </div>
              </div>
            </div>

            {/* ROLE & DEPARTMENT MAPPING */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Role & Department Mapping
              </div>

              <div className="card-body">
                <div className="row">

                  <div className="col-md-4 mb-3">
                    <label className="form-label">Department</label>
                    <select className="form-select">
                      <option>Select Department</option>
                      <option>Engineering</option>
                      <option>HR</option>
                      <option>Finance</option>
                      <option>Operations</option>
                    </select>
                  </div>

                  <div className="col-md-4 mb-3">
                    <label className="form-label">Designation</label>
                    <select className="form-select">
                      <option>Select Designation</option>
                      <option>Software Engineer</option>
                      <option>Senior Engineer</option>
                      <option>Manager</option>
                    </select>
                  </div>

                  <div className="col-md-4 mb-3">
                    <label className="form-label">Role Profile</label>
                    <select className="form-select">
                      <option>Employee</option>
                      <option>Manager</option>
                      <option>HR Admin</option>
                      <option>Finance Admin</option>
                    </select>
                  </div>

                </div>
              </div>
            </div>

            {/* MODULE ACCESS */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Module Access (Auto-Assigned & Editable)
              </div>

              <div className="card-body">
                <div className="row">

                  <div className="col-md-6">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" checked />
                      <label className="form-check-label">
                        MySpace Dashboard
                      </label>
                    </div>

                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" checked />
                      <label className="form-check-label">
                        Attendance Management
                      </label>
                    </div>

                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Leave Management
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Travel Management
                      </label>
                    </div>

                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Expense Reimbursement
                      </label>
                    </div>

                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        HR Administration
                      </label>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL */}
          <div className="col-md-4">

            {/* REPORTING HIERARCHY */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Reporting Hierarchy
              </div>

              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">Reporting Manager</label>
                  <select className="form-select">
                    <option>Select Manager</option>
                    <option>Amit Verma (Engineering Head)</option>
                    <option>Neha Kapoor (HR Manager)</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Functional Head</label>
                  <select className="form-select">
                    <option>Select Functional Head</option>
                    <option>CTO</option>
                    <option>CHRO</option>
                  </select>
                </div>
              </div>
            </div>

            {/* ACTION PANEL */}
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <button className="btn btn-success w-100 mb-2">
                  Activate MIS Account
                </button>
                <button className="btn btn-outline-secondary w-100">
                  Save as Draft
                </button>

                <hr />

                <p className="text-muted mb-0">
                  Upon activation, login credentials and module access
                  will be emailed to the employee.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
};

export default MISAccountCreation;
