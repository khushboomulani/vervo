import React from "react";

const ESignContract = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* PAGE HEADER */}
        <div className="mb-4">
          <h3>Digital Contract Signing</h3>
          <p className="text-muted">
            Review contract and complete Aadhaar-based eSign
          </p>
        </div>

        <div className="row">

          {/* LEFT PANEL – CONTRACT PREVIEW */}
          <div className="col-md-8">

            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold d-flex justify-content-between align-items-center">
                <span>Contract Preview</span>
                <span className="badge bg-info">Draft Preview</span>
              </div>

              <div className="card-body" style={{ minHeight: "420px" }}>
                <p>
                  <strong>Employment Agreement</strong>
                </p>
                <p>
                  This agreement is made between <strong>Verva Corporation</strong>
                  and <strong>Rohit Sharma</strong>, effective from
                  <strong> 01 January 2026</strong>.
                </p>
                <p>
                  The employee agrees to the terms and conditions including
                  confidentiality, compensation, and responsibilities as
                  defined in this contract.
                </p>
                <p>
                  <em>
                    (This is a PDF-style preview. Final signed document will be
                    stored in employee records.)
                  </em>
                </p>
              </div>
            </div>

            {/* POST SIGNING CONFIRMATION */}
            <div className="card shadow-sm">
              <div className="card-header fw-bold">
                Post-Signing Status
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between">
                    eSign Status
                    <span className="badge bg-success">Completed</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    Signed On
                    <span>02-Jan-2026 | 11:45 AM</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    Document Saved In
                    <span className="text-primary">
                      Employee File Repository
                    </span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL – eSIGN ACTIONS */}
          <div className="col-md-4">

            {/* AADHAAR eSIGN */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Aadhaar-based eSign
              </div>

              <div className="card-body">

                <div className="mb-3">
                  <label className="form-label">
                    Aadhaar Number
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="XXXX-XXXX-1234"
                  />
                  <small className="text-muted">
                    Aadhaar number is masked for security
                  </small>
                </div>

                <button className="btn btn-primary w-100 mb-3">
                  Initiate eSign via Aadhaar OTP
                </button>

                <button className="btn btn-outline-secondary w-100">
                  Cancel Signing
                </button>

              </div>
            </div>

            {/* REAL-TIME STATUS */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Signing Status
              </div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                  API Status
                  <span className="badge bg-warning">Pending</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  OTP Verification
                  <span className="badge bg-secondary">Awaiting</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  Signature Completion
                  <span className="badge bg-secondary">Not Started</span>
                </li>
              </ul>
            </div>

            {/* SECURITY NOTE */}
            <div className="card shadow-sm">
              <div className="card-body">
                <h6>Security & Compliance</h6>
                <p className="text-muted mb-0">
                  eSign is compliant with IT Act 2000 and UIDAI guidelines.
                  Signed documents are tamper-proof and legally valid.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
};

export default ESignContract;
