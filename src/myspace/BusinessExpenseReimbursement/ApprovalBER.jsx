
import React from "react";

export default function ManagerApprovalInbox() {
  return (
    <main className="p-4 bg-light min-vh-100">
      <div className="container-fluid">

        <h4 className="mb-4">Manager Approval</h4>

        {/* STEPPER */}
        <div className="card mb-4">
          <div className="card-body">
            <ul className="stepper d-flex justify-content-between list-unstyled mb-0">
              <li className="fw-bold text-primary">Claim Received</li>
              <li className="fw-bold text-primary">Review Items</li>
              <li className="fw-bold text-secondary">Decision</li>
              <li className="fw-bold text-muted">Completed</li>
            </ul>
          </div>
        </div>

        {/* CLAIM SUMMARY */}
        <div className="card mb-4">
          <div className="card-body">
            <h6>Claim Summary</h6>
            <p><strong>Employee:</strong> Rahul Sharma</p>
            <p><strong>Claim ID:</strong> EXP-1023</p>
            <p><strong>Total Amount:</strong> ₹18,500</p>
            <p><strong>Period:</strong> 10 Jul – 12 Jul</p>
          </div>
        </div>

        {/* LINE ITEMS */}
        <div className="card mb-4">
          <div className="card-body">
            <h6>Line Items</h6>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10 Jul</td>
                  <td>Travel</td>
                  <td>Client visit</td>
                  <td>₹5,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="card">
          <div className="card-body">
            <h6>Manager Decision</h6>

            <textarea
              className="form-control mb-3"
              rows="3"
              placeholder="Add remarks (optional)"
            />

            <div className="d-flex gap-2">
              <button className="btn btn-success">
                Approve
              </button>
              <button className="btn btn-warning">
                Request Changes
              </button>
              <button className="btn btn-danger">
                Reject
              </button>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
