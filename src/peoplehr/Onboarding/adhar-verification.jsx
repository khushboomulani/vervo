import React from "react";

const AadhaarAuthentication = () => {
  return (
    <main className="p-4 bg-light min-vh-100">
      <div className="container">

        {/* HEADER */}
        <div className="row mb-4">
          <div className="col">
            <h3>Aadhaar Authentication</h3>
            <p className="text-muted">
              Verify your identity using Aadhaar-linked mobile OTP
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">

            {/* CARD */}
            <div className="card shadow-sm">
              <div className="card-body p-4">

                {/* AADHAAR INPUT */}
                <h5 className="mb-3">Step 1: Enter Aadhaar Number</h5>

                <div className="row align-items-end">
                  <div className="col-md-8 mb-3">
                    <label className="form-label">
                      Aadhaar Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="XXXX-XXXX-XXXX"
                    />
                    <small className="text-muted">
                      12-digit Aadhaar number (masked for security)
                    </small>
                  </div>

                  <div className="col-md-4 mb-3">
                    <button className="btn btn-primary w-100">
                      Send OTP
                    </button>
                  </div>
                </div>

                <hr />

                {/* OTP SECTION */}
                <h5 className="mb-3">Step 2: OTP Verification</h5>

                <div className="row align-items-end">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Enter OTP
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="6-digit OTP"
                    />
                    <small className="text-muted">
                      OTP sent to Aadhaar-linked mobile number
                    </small>
                  </div>

                  <div className="col-md-3 mb-3">
                    <button className="btn btn-success w-100">
                      Verify OTP
                    </button>
                  </div>

                  <div className="col-md-3 mb-3">
                    <button className="btn btn-outline-secondary w-100">
                      Resend OTP
                    </button>
                  </div>
                </div>

                {/* OTP INFO */}
                <div className="alert alert-warning mt-3">
                  <small>
                    You have <strong>3 attempts</strong> to verify OTP.
                    After that, verification will be temporarily locked.
                  </small>
                </div>

                <hr />

                {/* AUTO-FILLED DETAILS */}
                <h5 className="mb-3">Verified Aadhaar Details</h5>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value="Auto-filled Name"
                      disabled
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      value="XXXXXX1234"
                      disabled
                    />
                  </div>

                  <div className="col-md-12 mb-3">
                    <label className="form-label">Address</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      disabled
                      value="Auto-filled Aadhaar address"
                    />
                  </div>
                </div>

                <hr />

                {/* UI STATE EXAMPLES */}
                <h6 className="mb-2">Verification Status</h6>

                <div className="d-flex gap-2 mb-4">
                  <span className="badge bg-warning">Pending</span>
                  <span className="badge bg-success">Verified</span>
                  <span className="badge bg-danger">Failed</span>
                  <span className="badge bg-secondary">Locked</span>
                </div>

                {/* ACTION BUTTONS */}
                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-secondary">
                    Back
                  </button>

                  <div>
                    <button className="btn btn-link text-decoration-none me-2">
                      Help
                    </button>
                    <button className="btn btn-primary">
                      Continue
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* FOOTNOTE */}
            <div className="text-center mt-3">
              <small className="text-muted">
                Aadhaar data is fetched securely and used only for verification
              </small>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default AadhaarAuthentication;
