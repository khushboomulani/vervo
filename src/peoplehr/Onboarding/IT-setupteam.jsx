import React from "react";

const ITSetupDashboard = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* PAGE HEADER */}
        <div className="mb-4">
          <h3>IT Setup Dashboard</h3>
          <p className="text-muted">
            Employee IT account & asset provisioning checklist
          </p>
        </div>

        <div className="row">

          {/* LEFT PANEL */}
          <div className="col-md-8">

            {/* EMPLOYEE INFO */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Employee Information
              </div>
              <div className="card-body">
                <div className="row">

                  <div className="col-md-4 mb-3">
                    <label className="form-label">Employee Name</label>
                    <input className="form-control" value="Rohit Sharma" disabled />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label className="form-label">Employee Code</label>
                    <input className="form-control" value="VERVA-EMP-1042" disabled />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label className="form-label">Department</label>
                    <input className="form-control" value="Engineering" disabled />
                  </div>

                </div>
              </div>
            </div>

            {/* ACCOUNT CREATION CHECKLIST */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Account Creation Checklist
              </div>

              <div className="card-body">
                <table className="table table-bordered align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Account</th>
                      <th className="text-center">Pending</th>
                      <th className="text-center">Completed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Official Email</td>
                      <td className="text-center">
                        <input type="radio" name="email" />
                      </td>
                      <td className="text-center">
                        <input type="radio" name="email" />
                      </td>
                    </tr>
                    <tr>
                      <td>Active Directory (AD) Access</td>
                      <td className="text-center">
                        <input type="radio" name="ad" />
                      </td>
                      <td className="text-center">
                        <input type="radio" name="ad" />
                      </td>
                    </tr>
                    <tr>
                      <td>Internal Tools Access</td>
                      <td className="text-center">
                        <input type="radio" name="tools" />
                      </td>
                      <td className="text-center">
                        <input type="radio" name="tools" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* HARDWARE CHECKLIST */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Hardware Allocation Checklist
              </div>

              <div className="card-body">
                <table className="table table-bordered align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Asset</th>
                      <th className="text-center">Pending</th>
                      <th className="text-center">Completed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Laptop</td>
                      <td className="text-center">
                        <input type="radio" name="laptop" />
                      </td>
                      <td className="text-center">
                        <input type="radio" name="laptop" />
                      </td>
                    </tr>
                    <tr>
                      <td>Mouse</td>
                      <td className="text-center">
                        <input type="radio" name="mouse" />
                      </td>
                      <td className="text-center">
                        <input type="radio" name="mouse" />
                      </td>
                    </tr>
                    <tr>
                      <td>Laptop Bag</td>
                      <td className="text-center">
                        <input type="radio" name="bag" />
                      </td>
                      <td className="text-center">
                        <input type="radio" name="bag" />
                      </td>
                    </tr>
                    <tr>
                      <td>SIM / Internet Device</td>
                      <td className="text-center">
                        <input type="radio" name="sim" />
                      </td>
                      <td className="text-center">
                        <input type="radio" name="sim" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL */}
          <div className="col-md-4">

            {/* STATUS SUMMARY */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Setup Status
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between">
                    Accounts Setup
                    <span className="badge bg-warning">Pending</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    Hardware Allocation
                    <span className="badge bg-success">Completed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* COMMENTS */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                IT Comments / Asset Notes
              </div>
              <div className="card-body">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Enter asset serial numbers, allocation notes, or remarks..."
                ></textarea>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <button className="btn btn-success w-100 mb-2">
                  Mark IT Setup Completed
                </button>
                <button className="btn btn-outline-secondary w-100">
                  Save Progress
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
};

export default ITSetupDashboard;
