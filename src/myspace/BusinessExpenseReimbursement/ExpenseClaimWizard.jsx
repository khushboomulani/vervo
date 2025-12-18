import React from "react";

export default function ExpenseClaimWizard() {
  return (
    <main className="p-4 bg-light min-vh-100">
      <div className="container-fluid">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Business Expense Reimbursement</h4>
          <span className="badge bg-secondary">Create Claim</span>
        </div>

        {/* Wizard Steps */}
        <div className="card mb-4">
          <div className="card-body">
            <ul className="nav nav-pills justify-content-between">
              <li className="nav-item">
                <span className="nav-link active">1. Header</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">2. Line Items</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">3. Attachments</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">4. Review</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">5. Submit</span>
              </li>
            </ul>
          </div>
        </div>

        {/* STEP 1: HEADER */}
        <div className="card mb-4">
          <div className="card-header fw-semibold">Claim Header</div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label">Employee Name</label>
                <input className="form-control" placeholder="Auto-filled" disabled />
              </div>
              <div className="col-md-4">
                <label className="form-label">Department</label>
                <input className="form-control" placeholder="Department" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Expense Period</label>
                <input type="month" className="form-control" />
              </div>
            </div>

            <div className="mt-4 d-flex justify-content-end">
              <button className="btn btn-primary">Next</button>
            </div>
          </div>
        </div>

        {/* STEP 2: LINE ITEMS */}
        <div className="card mb-4">
          <div className="card-header fw-semibold">Expense Line Items</div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="date" className="form-control" /></td>
                    <td>
                      <select className="form-select">
                        <option>Travel</option>
                        <option>Food</option>
                        <option>Accommodation</option>
                        <option>Other</option>
                      </select>
                    </td>
                    <td><input className="form-control" /></td>
                    <td><input className="form-control" /></td>
                    <td><button className="btn btn-sm btn-outline-danger">Remove</button></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button className="btn btn-outline-primary btn-sm">+ Add Line Item</button>

            <div className="mt-4 d-flex justify-content-between">
              <button className="btn btn-outline-secondary">Back</button>
              <button className="btn btn-primary">Next</button>
            </div>
          </div>
        </div>

        {/* STEP 3: ATTACHMENTS */}
        <div className="card mb-4">
          <div className="card-header fw-semibold">Attachments</div>
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label">Upload Bills / Receipts</label>
              <input type="file" className="form-control" multiple />
            </div>

            <div className="alert alert-info">
              Supported formats: PDF, JPG, PNG
            </div>

            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-secondary">Back</button>
              <button className="btn btn-primary">Next</button>
            </div>
          </div>
        </div>

        {/* STEP 4: REVIEW */}
        <div className="card mb-4">
          <div className="card-header fw-semibold">Review Claim</div>
          <div className="card-body">
            <p className="mb-2"><strong>Employee:</strong> John Doe</p>
            <p className="mb-2"><strong>Department:</strong> Sales</p>
            <p className="mb-3"><strong>Total Amount:</strong> ₹12,500</p>

            <div className="alert alert-warning">
              Please review all details carefully before submission.
            </div>

            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-secondary">Back</button>
              <button className="btn btn-primary">Proceed to Submit</button>
            </div>
          </div>
        </div>

        {/* STEP 5: SUBMIT */}
        <div className="card">
          <div className="card-header fw-semibold">Submit Claim</div>
          <div className="card-body text-center">
            <h5 className="mb-3">Ready to Submit?</h5>
            <p className="text-muted mb-4">
              Once submitted, the claim will be sent for manager approval.
            </p>
            <button className="btn btn-success me-2">Submit Claim</button>
            <button className="btn btn-outline-secondary">Cancel</button>
          </div>
        </div>

      </div>
    </main>
  );
}
