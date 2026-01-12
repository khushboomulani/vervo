import React from "react";

const OfferApprovalRelease = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* ================= HEADER ================= */}
        <div className="mb-4">
          <h3>Offer Approval & Release</h3>
          <p className="text-muted">
            Create, approve, and release candidate offers
          </p>
        </div>

        {/* ================= CANDIDATE SUMMARY ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-3">
                <strong>Candidate Name</strong>
                <div className="text-muted">Amit Sharma</div>
              </div>
              <div className="col-md-3">
                <strong>Role</strong>
                <div className="text-muted">Frontend Developer</div>
              </div>
              <div className="col-md-3">
                <strong>Department</strong>
                <div className="text-muted">Engineering</div>
              </div>
              <div className="col-md-3">
                <strong>Offer Status</strong>
                <span className="badge bg-secondary ms-2">
                  Draft
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= OFFER DETAILS ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-semibold">
            Offer Details
          </div>
          <div className="card-body row g-3">

            <div className="col-md-6">
              <label className="form-label">Offer Template</label>
              <select className="form-select">
                <option>Select Offer Template</option>
                <option>Standard Engineering Offer</option>
                <option>Senior Role Offer</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Proposed Joining Date</label>
              <input type="date" className="form-control" />
            </div>

          </div>
        </div>

        {/* ================= CTC BREAKDOWN ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-semibold">
            CTC & Compensation Breakdown
          </div>
          <div className="card-body">

            <div className="row g-3 mb-3">
              <div className="col-md-4">
                <label className="form-label">Annual CTC</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="₹12,00,000"
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Fixed Pay</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="₹9,00,000"
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Variable Pay</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="₹3,00,000"
                />
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label">Bonus</label>
                <input type="text" className="form-control" placeholder="₹50,000" />
              </div>

              <div className="col-md-4">
                <label className="form-label">Other Allowances</label>
                <input type="text" className="form-control" placeholder="₹1,00,000" />
              </div>

              <div className="col-md-4">
                <label className="form-label">ESOP / Benefits</label>
                <input type="text" className="form-control" placeholder="Optional" />
              </div>
            </div>

          </div>
        </div>

        {/* ================= APPROVER CHAIN ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-semibold">
            Approval Chain
          </div>
          <div className="card-body row g-3">

            <div className="col-md-4">
              <label className="form-label">Level 1 Approver</label>
              <input
                type="text"
                className="form-control"
                placeholder="Hiring Manager"
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Level 2 Approver</label>
              <input
                type="text"
                className="form-control"
                placeholder="Department Head"
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Final Approver</label>
              <input
                type="text"
                className="form-control"
                placeholder="HR / Finance"
              />
            </div>

          </div>
        </div>

        {/* ================= ACTIONS ================= */}
        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-secondary">
            Save Draft
          </button>
          <button className="btn btn-outline-primary">
            Send for Approval
          </button>
          <button className="btn btn-warning">
            Approve
          </button>
          <button className="btn btn-danger">
            Reject
          </button>
          <button className="btn btn-success">
            Release Offer
          </button>
          <button className="btn btn-primary">
            Trigger Onboarding
          </button>
        </div>

      </div>
    </main>
  );
};

export default OfferApprovalRelease;
