import React from "react";

const EmployeeCreationForm = () => {
  return (
    <main className="p-4 bg-light min-vh-100">
      <div className="container">

        {/* HEADER */}
        <div className="row mb-4">
          <div className="col">
            <h3>Employee Creation</h3>
            <p className="text-muted">
              Enter basic personal details to begin onboarding
            </p>
          </div>
        </div>

        {/* FORM CARD */}
        <div className="row ">
          <div className="col-md-8">

            <div className="card shadow-sm">
              <div className="card-body p-4">

                {/* BASIC DETAILS */}
                <h5 className="mb-3">Basic Personal Details</h5>

                <div className="row">
                  {/* EMAIL */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="employee@company.com"
                    />
                    <small className="text-muted">
                      Official communication email
                    </small>
                  </div>

                  {/* ALTERNATE CONTACT */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Alternate Contact Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="+91 9XXXXXXXXX"
                    />
                    <small className="text-muted">
                      Optional – for emergency communication
                    </small>
                  </div>

                  {/* DOB */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Date of Birth <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                    />
                  </div>

                  {/* INFO BOX */}
                  <div className="col-md-6 mb-3">
                    <div className="alert alert-info h-100 d-flex align-items-center">
                      <small>
                        Aadhaar verification will be required in the next step.
                        Ensure details match official records.
                      </small>
                    </div>
                  </div>
                </div>

                <hr />

                {/* ACTION BUTTONS */}
                <div className="d-flex justify-content-between align-items-center">

                  {/* LEFT ACTIONS */}
                  <div>
                    <button className="btn btn-outline-secondary me-2">
                      Save Draft
                    </button>
                    <button className="btn btn-link text-decoration-none">
                      Logout
                    </button>
                  </div>

                  {/* RIGHT ACTIONS */}
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
                Fields marked with * are mandatory
              </small>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default EmployeeCreationForm;
