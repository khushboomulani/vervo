import React from "react";

export default function ApprovalInbox() {
  return (
    <main className="p-4 bg-light min-vh-100">
      <div className="container-fluid">
        <h4 className="mb-4">Attendance Approval Inbox</h4>

        <div className="card">
          <div className="card-body">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>Employee</th>
                  <th>Date</th>
                  <th>Issue</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ravi Kumar</td>
                  <td>12 Aug</td>
                  <td>Missing Punch</td>
                  <td>
                    <button className="btn btn-success btn-sm me-2">Approve</button>
                    <button className="btn btn-danger btn-sm me-2">Reject</button>
                    <button className="btn btn-warning btn-sm">Request Info</button>
                  </td>
                </tr>
                <tr>
                  <td>Anita Verma</td>
                  <td>14 Aug</td>
                  <td>Late Arrival</td>
                  <td>
                    <button className="btn btn-success btn-sm me-2">Approve</button>
                    <button className="btn btn-danger btn-sm me-2">Reject</button>
                    <button className="btn btn-warning btn-sm">Request Info</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
