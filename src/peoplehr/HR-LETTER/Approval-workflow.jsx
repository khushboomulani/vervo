import React from 'react';

const ApprovalWorkflow = () => {
    return (
        <main className="p-4 bg-light min-vh-100">
        <div className="container-fluid">
  
          {/* PAGE HEADER */}
          <div className="mb-4">
            <h3>Letter Approval Workflow</h3>
            <p className="text-muted">
              Review letter details, add comments, and take approval action
            </p>
          </div>
  
          <div className="row">
  
            {/* LEFT: LETTER PREVIEW */}
            <div className="col-md-7">
  
              <div className="card shadow-sm mb-4">
                <div className="card-header fw-bold d-flex justify-content-between">
                  <span>Letter Preview</span>
                  <span className="badge bg-info">Pending Approval</span>
                </div>
  
                <div className="card-body bg-white">
                  <p>
                    Dear <strong>Employee Name</strong>,
                    <br /><br />
                    We are pleased to offer you the position of{" "}
                    <strong>Software Engineer</strong> with a salary of{" "}
                    <strong>₹50,000</strong> per month effective from{" "}
                    <strong>01-Jan-2026</strong>.
                    <br /><br />
                    Your place of posting will be <strong>Indore</strong>.
                    <br /><br />
                    Regards,<br />
                    HR Department
                  </p>
                </div>
              </div>
  
              {/* EDITABLE FIELDS */}
              <div className="card shadow-sm mb-4">
                <div className="card-header fw-bold">
                  Editable Fields (Approver Only)
                </div>
                <div className="card-body">
                  <div className="row">
  
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Salary Amount</label>
                      <input
                        type="text"
                        className="form-control"
                        value="₹50,000"
                        readOnly
                      />
                      <small className="text-muted">
                        Editable if policy allows
                      </small>
                    </div>
  
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Effective Date</label>
                      <input type="date" className="form-control" />
                    </div>
  
                  </div>
                </div>
              </div>
  
            </div>
  
            {/* RIGHT PANEL */}
            <div className="col-md-5">
  
              {/* COMMENTS */}
              <div className="card shadow-sm mb-4">
                <div className="card-header fw-bold">
                  Approver Comments
                </div>
                <div className="card-body">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Add your comments here..."
                  ></textarea>
                </div>
              </div>
  
              {/* APPROVER HIERARCHY */}
              <div className="card shadow-sm mb-4">
                <div className="card-header fw-bold">
                  Approval Hierarchy
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Reporting Manager</span>
                    <span className="badge bg-success">Approved</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>HR Manager</span>
                    <span className="badge bg-warning">Pending</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Finance Head</span>
                    <span className="badge bg-secondary">Upcoming</span>
                  </li>
                </ul>
              </div>
  
              {/* CHANGE LOG */}
              <div className="card shadow-sm mb-4">
                <div className="card-header fw-bold">
                  Change Log
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>HR</strong> updated salary from ₹45,000 to ₹50,000
                  </li>
                  <li className="list-group-item">
                    <strong>Manager</strong> approved on 10-Jan-2026
                  </li>
                </ul>
              </div>
  
              {/* NOTIFICATION INFO */}
              <div className="alert alert-info">
                All stakeholders will be notified once action is taken.
              </div>
  
            </div>
          </div>
  
          {/* ACTION BUTTONS */}
          <div className="d-flex justify-content-end gap-2 mt-4">
            <button className="btn btn-outline-danger">
              Reject
            </button>
            <button className="btn btn-outline-warning">
              Request Changes
            </button>
            <button className="btn btn-success">
              Approve
            </button>
          </div>
  
        </div>
      </main>
    );
}

export default ApprovalWorkflow;
