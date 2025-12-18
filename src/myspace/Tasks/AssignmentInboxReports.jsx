import React from "react";

export default function AssignmentInboxReports() {
  return (
    <main className="p-4 bg-light min-vh-100">
      <div className="container-fluid">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Assignment Inbox & Reports</h4>
          <button className="btn btn-primary btn-sm">+ New Task</button>
        </div>

        {/* Assignment Inbox */}
        <div className="card mb-4">
          <div className="card-header fw-semibold">Assignment Inbox</div>
          <div className="card-body">
            <div className="d-flex justify-content-between mb-3">
              <div>
                <button className="btn btn-sm btn-outline-primary me-2">Claim Selected</button>
                <button className="btn btn-sm btn-outline-success me-2">Assign Selected</button>
                <button className="btn btn-sm btn-outline-secondary">Bulk Actions</button>
              </div>
              <input type="text" className="form-control form-control-sm w-auto" placeholder="Search task" />
            </div>

            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th><input type="checkbox" /></th>
                    <th>Task ID</th>
                    <th>Task Name</th>
                    <th>Assigned To</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Created At</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>101</td>
                    <td>Design Leave Module</td>
                    <td>Unassigned</td>
                    <td><span className="badge bg-warning">High</span></td>
                    <td><span className="badge bg-secondary">Pending</span></td>
                    <td>2025-12-16</td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>102</td>
                    <td>Reports Page</td>
                    <td>John Doe</td>
                    <td><span className="badge bg-info">Medium</span></td>
                    <td><span className="badge bg-primary">In Progress</span></td>
                    <td>2025-12-15</td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>103</td>
                    <td>Payroll Task</td>
                    <td>Unassigned</td>
                    <td><span className="badge bg-danger">Critical</span></td>
                    <td><span className="badge bg-secondary">Pending</span></td>
                    <td>2025-12-14</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Reports & Analytics */}
        <div className="card">
          <div className="card-header fw-semibold">Reports & Analytics</div>
          <div className="card-body">
            <div className="d-flex justify-content-between mb-3">
              <div>
                <button className="btn btn-sm btn-outline-primary me-2">CSV</button>
                <button className="btn btn-sm btn-outline-success me-2">XLS</button>
                <button className="btn btn-sm btn-outline-danger">PDF</button>
              </div>
              <input type="text" className="form-control form-control-sm w-auto" placeholder="Search reports" />
            </div>

            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead className="table-light">
                  <tr>
                    <th>User / Team</th>
                    <th>Project</th>
                    <th>Tasks Completed</th>
                    <th>Pending Tasks</th>
                    <th>SLA Metrics</th>
                    <th>Last Updated</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>Leave Module</td>
                    <td>5</td>
                    <td>2</td>
                    <td>90%</td>
                    <td>2025-12-16</td>
                  </tr>
                  <tr>
                    <td>Team HR</td>
                    <td>Reports Page</td>
                    <td>8</td>
                    <td>1</td>
                    <td>95%</td>
                    <td>2025-12-15</td>
                  </tr>
                  <tr>
                    <td>Project PM</td>
                    <td>Payroll</td>
                    <td>3</td>
                    <td>2</td>
                    <td>85%</td>
                    <td>2025-12-14</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}