import React from "react";

const DocumentUploadWizard = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* PAGE HEADER */}
        <div className="mb-4">
          <h3>Document Upload Portal</h3>
          <p className="text-muted">
            Upload required documents step-by-step to complete onboarding
          </p>
        </div>

        {/* PROGRESS BAR */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="progress mb-2" style={{ height: "10px" }}>
              <div
                className="progress-bar bg-success"
                style={{ width: "35%" }}
              />
            </div>
            <small className="text-muted">
              2 of 6 sections completed
            </small>
          </div>
        </div>

        {/* STEP INDICATOR */}
        <div className="d-flex justify-content-between mb-4 flex-wrap gap-2">
          <span className="badge bg-success">1 Identity</span>
          <span className="badge bg-success">2 Address</span>
          <span className="badge bg-secondary">3 Qualification</span>
          <span className="badge bg-secondary">4 Employment</span>
          <span className="badge bg-secondary">5 Statutory</span>
          <span className="badge bg-secondary">6 Banking</span>
        </div>

        <div className="row">

          {/* LEFT PANEL – DOCUMENT UPLOAD */}
          <div className="col-md-8">

            {/* STEP CARD */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Step 3: Qualification Documents
              </div>

              <div className="card-body">

                {/* FILE INPUT */}
                <div className="mb-3">
                  <label className="form-label">
                    Upload Highest Qualification Certificate
                  </label>
                  <input
                    type="file"
                    className="form-control"
                  />
                  <small className="text-muted">
                    Supported formats: PNG, JPG, PDF | Max size: 10MB
                  </small>
                </div>

                {/* UPLOADED FILE PREVIEW */}
                <div className="border rounded p-3 mb-3 bg-light">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <strong>Bachelor_Degree.pdf</strong>
                      <div className="text-muted small">
                        Uploaded on 12 Jan 2026
                      </div>
                    </div>

                    <div className="btn-group">
                      <button className="btn btn-sm btn-outline-primary">
                        Preview
                      </button>
                      <button className="btn btn-sm btn-outline-warning">
                        Replace
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

                {/* OCR INFO (FUTURE SCOPE UI) */}
                <div className="alert alert-info">
                  <small>
                    Document clarity check (OCR validation) will be applied
                    automatically after upload.
                  </small>
                </div>

              </div>
            </div>

            {/* NAVIGATION BUTTONS */}
            <div className="d-flex justify-content-between mb-4">
              <button className="btn btn-outline-secondary">
                Back
              </button>

              <div>
                <button className="btn btn-outline-secondary me-2">
                  Save Draft
                </button>
                <button className="btn btn-primary">
                  Continue
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL – STATUS */}
          <div className="col-md-4">

            {/* SECTION STATUS */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Upload Status
              </div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                  Identity
                  <span className="badge bg-success">Completed</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  Address
                  <span className="badge bg-success">Completed</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  Qualification
                  <span className="badge bg-warning">Pending</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  Employment
                  <span className="badge bg-secondary">Not Started</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  Statutory
                  <span className="badge bg-secondary">Not Started</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  Banking
                  <span className="badge bg-secondary">Not Started</span>
                </li>
              </ul>
            </div>

            {/* HELP CARD */}
            <div className="card shadow-sm">
              <div className="card-body">
                <h6>Need Help?</h6>
                <p className="small text-muted mb-2">
                  Ensure documents are clear, readable, and valid.
                </p>
                <button className="btn btn-link p-0 text-decoration-none">
                  View upload guidelines
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
};

export default DocumentUploadWizard;
