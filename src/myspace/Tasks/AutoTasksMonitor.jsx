import React from "react";

export default function AutoTasksMonitor() {
  return (
    <main className="p-4 bg-light min-vh-100">
      <div className="container-fluid">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Auto-Tasks Monitor</h4>
          <button className="btn btn-primary btn-sm">Refresh</button>
        </div>

        {/* Filters / Search */}
        <div className="card mb-4">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-3">
               
                <select className="form-select">
                  <option>Status</option>
                  <option>All</option>
                  <option>Pending</option>
                  <option>Processing</option>
                  <option>Completed</option>
                  <option>Error</option>
                </select>
              </div>
              <div className="col-md-3">
               
                <select className="form-select">
                <option>Queue Type</option>
                  <option>All</option>
                  <option>Production</option>
                  <option>Test</option>
                </select>
              </div>
              <div className="col-md-3">
              
                <input className="form-control" placeholder="Search task" />
              </div>
              <div className="col-md-3 d-flex align-items-end">
                <button className="btn btn-primary w-100">Apply Filters</button>
              </div>
            </div>
            <br></br>
            <h6 className="mb-3">Task Queue</h6>
            <div className="table-responsive">
              <table className="table table-hover table-bordered align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Task ID</th>
                    <th>Task Name</th>
                    <th>Status</th>
                    <th>Queue</th>
                    <th>Created At</th>
                    <th>Retry Count</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>101</td>
                    <td>Generate Payroll</td>
                    <td><span className="badge bg-warning">Processing</span></td>
                    <td>Production</td>
                    <td>2025-12-16 10:20</td>
                    <td>0</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-1">Retry</button>
                      <button className="btn btn-sm btn-outline-danger">Cancel</button>
                    </td>
                  </tr>
                  <tr>
                    <td>102</td>
                    <td>Generate Reports</td>
                    <td><span className="badge bg-danger">Error</span></td>
                    <td>Production</td>
                    <td>2025-12-16 09:50</td>
                    <td>1</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-1">Retry</button>
                      <button className="btn btn-sm btn-outline-danger">Cancel</button>
                    </td>
                  </tr>
                  <tr>
                    <td>103</td>
                    <td>Sync Inventory</td>
                    <td><span className="badge bg-success">Completed</span></td>
                    <td>Test</td>
                    <td>2025-12-15 16:30</td>
                    <td>0</td>
                    <td>
                      <button className="btn btn-sm btn-outline-secondary" disabled>Retry</button>
                    </td>
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
