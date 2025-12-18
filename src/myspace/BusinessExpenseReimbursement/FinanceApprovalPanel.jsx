
 import React from "react";

export default function FinanceApprovalPanel() {
  return (
    <main className="p-4 bg-light min-vh-100">
      <div className="container-fluid">

        <h4 className="mb-4">Finance Approval</h4>

        {/* STEPPER */}
        <div className="card mb-4">
          <div className="card-body">
            <ul className="stepper d-flex justify-content-between list-unstyled mb-0">
              <li className="fw-bold text-primary">Received</li>
              <li className="fw-bold text-primary">Policy Check</li>
              <li className="fw-bold text-primary">GST / ITC</li>
              <li className="fw-bold text-secondary">Decision</li>
            </ul>
          </div>
        </div>

        {/* CLAIM DETAILS */}
        <div className="card mb-4">
          <div className="card-body">
            <h6>Claim Details</h6>
            <p><strong>Claim ID:</strong> EXP-1023</p>
            <p><strong>Approved By Manager:</strong> Yes</p>
            <p><strong>Total Amount:</strong> ₹18,500</p>
          </div>
        </div>

        {/* VERIFICATION CHECKS */}
        <div className="card mb-4">
          <div className="card-body">
            <h6>Finance Verification</h6>

            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                Policy compliance verified
              </label>
            </div>

            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                GST invoice validated
              </label>
            </div>

            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                ITC eligibility confirmed
              </label>
            </div>
          </div>
        </div>

        {/* FINANCE ACTIONS */}
        <div className="card">
          <div className="card-body">
            <h6>Finance Decision</h6>

            <textarea
              className="form-control mb-3"
              rows="3"
              placeholder="Finance remarks"
            />

            <div className="d-flex gap-2">
              <button className="btn btn-success">
                Approve
              </button>
              <button className="btn btn-warning">
                Route to Super Admin
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
