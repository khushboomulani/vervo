import React from "react";

const PreBoardingSummary = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* PAGE HEADER */}
        <div className="mb-4 d-flex justify-content-between align-items-center">
          <div>
            <h3>Final Pre-Boarding Summary</h3>
            <p className="text-muted">
              Review completion status before employee onboarding
            </p>
          </div>

          <span className="badge bg-success fs-6 px-3 py-2">
            PRE-BOARDING STATUS: READY
          </span>
        </div>

        <div className="row">

          {/* LEFT PANEL */}
          <div className="col-md-8">

            {/* EMPLOYEE INFO */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Employee Overview
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 mb-2">
                    <strong>Name:</strong> Rohit Sharma
                  </div>
                  <div className="col-md-4 mb-2">
                    <strong>Email:</strong> rohit.sharma@email.com
                  </div>
                  <div className="col-md-4 mb-2">
                    <strong>Employee Code:</strong> AUTO-GEN-1042
                  </div>
                  <div className="col-md-4 mb-2">
                    <strong>Department:</strong> Engineering
                  </div>
                  <div className="col-md-4 mb-2">
                    <strong>Designation:</strong> Software Engineer
                  </div>
                  <div className="col-md-4 mb-2">
                    <strong>Reporting Manager:</strong> Amit Verma
                  </div>
                </div>
              </div>
            </div>

            {/* STEP STATUS TABLE */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Pre-Boarding Checklist
              </div>

              <div className="card-body">
                <table className="table table-bordered align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Step</th>
                      <th>Description</th>
                      <th className="text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Onboarding Portal Registration</td>
                      <td className="text-center">
                        <span className="badge bg-success">Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Basic Employee Details</td>
                      <td className="text-center">
                        <span className="badge bg-success">Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Aadhaar Authentication</td>
                      <td className="text-center">
                        <span className="badge bg-success">Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Document Upload & Verification</td>
                      <td className="text-center">
                        <span className="badge bg-success">Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Digital Contract Signing</td>
                      <td className="text-center">
                        <span className="badge bg-success">Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>HR Review & Approval</td>
                      <td className="text-center">
                        <span className="badge bg-success">Approved</span>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>IT Setup & Asset Allocation</td>
                      <td className="text-center">
                        <span className="badge bg-success">Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>MIS Account Creation</td>
                      <td className="text-center">
                        <span className="badge bg-success">Active</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL */}
          <div className="col-md-4">

            {/* SUMMARY CARD */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Summary Snapshot
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between">
                    Total Steps
                    <strong>8</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    Completed
                    <strong className="text-success">8</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    Pending
                    <strong className="text-danger">0</strong>
                  </li>
                </ul>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <button className="btn btn-primary w-100 mb-2">
                  Download Pre-Boarding Summary (PDF)
                </button>
                <button className="btn btn-outline-secondary w-100">
                  View Employee File
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
};

export default PreBoardingSummary;
