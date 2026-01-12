import React from "react";

const OnboardingPortal = () => {
  return (
    <main className="bg-light min-vh-100 py-5">
      <div className="container">

        {/* ================= LOGIN SECTION ================= */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body p-4">

                <h4 className="text-center mb-2">Onboarding Login</h4>
                <p className="text-muted text-center">
                  Login using your temporary User ID
                </p>

                <div className="mb-3">
                  <label className="form-label">Temporary User ID</label>
                  <input className="form-control" placeholder="TEMP-EMP-1024" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Registered Email</label>
                  <input className="form-control" placeholder="employee@email.com" />
                </div>

                <button className="btn btn-primary w-100">
                  Send OTP
                </button>

              </div>
            </div>
          </div>
        </div>

        {/* ================= OTP SECTION ================= */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body p-4 text-center">

                <h4 className="mb-2">OTP Verification</h4>
                <p className="text-muted">
                  Enter the 6-digit OTP sent to your email
                </p>

                <div className="d-flex justify-content-between mb-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <input
                      key={i}
                      className="form-control text-center mx-1"
                      maxLength="1"
                      style={{ width: "45px" }}
                    />
                  ))}
                </div>

                <p className="text-muted mb-2">
                  OTP expires in <strong>01:30</strong>
                </p>

                <button className="btn btn-success w-100 mb-2">
                  Verify OTP
                </button>

                <button className="btn btn-link">
                  Resend OTP
                </button>

              </div>
            </div>
          </div>
        </div>

        {/* ================= DASHBOARD SECTION ================= */}
        <div className="row justify-content-center">
          <div className="col-md-10">

            {/* HEADER */}
            <div className="mb-4">
              <h3>Welcome to Employee Onboarding</h3>
              <p className="text-muted">
                Complete the steps below to finish your joining process
              </p>
            </div>

            {/* PROGRESS BAR */}
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-semibold">Overall Progress</span>
                  <span className="text-muted">40% Completed</span>
                </div>

                <div className="progress" style={{ height: "10px" }}>
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* ONBOARDING STEPS */}
            <div className="card shadow-sm">
              <ul className="list-group list-group-flush">

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Personal Information
                  <span className="badge bg-success">Completed</span>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Document Upload
                  <span className="badge bg-warning text-dark">Pending</span>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Policy Acknowledgment
                  <span className="badge bg-secondary">Not Started</span>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Offer Letter eSign
                  <span className="badge bg-secondary">Not Started</span>
                </li>

              </ul>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default OnboardingPortal;
