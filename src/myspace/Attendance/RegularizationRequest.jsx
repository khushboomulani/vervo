import React from "react";

export default function RegularizationRequest() {
  return (
    <main className="p-4 bg-light min-vh-100">
      <div className="container-fluid">
        <h4 className="mb-4">Regularization Request</h4>

        <div className="card mb-4">
          <div className="card-body">
            <label>Date of Missing Punch</label>
            <input type="date" className="form-control mb-3" />

            <label>Reason</label>
            <textarea className="form-control mb-3" rows={4} placeholder="Explain reason for missing punch"></textarea>

            <button className="btn btn-primary">Submit Request</button>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h6>My Previous Requests</h6>
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Manager Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12 Aug</td>
                  <td><span className="badge bg-success">Approved</span></td>
                  <td>Checked and approved</td>
                </tr>
                <tr>
                  <td>14 Aug</td>
                  <td><span className="badge bg-warning">Pending</span></td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
