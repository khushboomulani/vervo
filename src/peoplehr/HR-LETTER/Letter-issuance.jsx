import React from "react";

const LetterIssuance = () => {
  return (
    <main className="p-4 bg-light min-vh-100">
      <div className="container-fluid">

        {/* PAGE HEADER */}
        <div className="mb-4 d-flex justify-content-between align-items-center">
          <div>
            <h3>Letter Issuance</h3>
            <p className="text-muted">
              Final review and issue employee letter
            </p>
          </div>
          <span className="badge bg-success fs-6">Approved</span>
        </div>

        <div className="row">

          {/* LEFT: FINAL LETTER PREVIEW */}
          <div className="col-md-8">
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Final Letter Preview (No Watermark)
              </div>

              <div className="card-body bg-white p-4" style={{ minHeight: "450px" }}>
                <p className="text-end fw-semibold">Date: 12-Jan-2026</p>

                <p>
                  Dear <strong>Employee Name</strong>,
                  <br /><br />
                  We are pleased to confirm your appointment as{" "}
                  <strong>Software Engineer</strong> at our organization.
                </p>

                <p>
                  Your monthly salary will be <strong>₹50,000</strong>,
                  effective from <strong>01-Jan-2026</strong>. Your place of
                  posting will be <strong>Indore</strong>.
                </p>

                <p>
                  You are requested to report to the HR department on your
                  joining date with the necessary documents.
                </p>

                <p className="mt-4">
                  Regards,<br />
                  <strong>HR Department</strong><br />
                  Company Name
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="col-md-4">

            {/* EMPLOYEE INFO */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Employee Details
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Name:</strong> Employee Name
                </li>
                <li className="list-group-item">
                  <strong>Employee ID:</strong> EMP1023
                </li>
                <li className="list-group-item">
                  <strong>Department:</strong> Engineering
                </li>
                <li className="list-group-item">
                  <strong>Email:</strong> employee@email.com
                </li>
              </ul>
            </div>

            {/* ISSUANCE OPTIONS */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Issuance Options
              </div>
              <div className="card-body">

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked
                    readOnly
                  />
                  <label className="form-check-label">
                    Notify employee via MIS
                  </label>
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked
                    readOnly
                  />
                  <label className="form-check-label">
                    Send letter via Email
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                  />
                  <label className="form-check-label">
                    Enable eSign (Optional)
                  </label>
                  <small className="text-muted d-block">
                    Applicable for offer & appointment letters
                  </small>
                </div>

              </div>
            </div>

            {/* STATUS INFO */}
            <div className="alert alert-info">
              Once issued, the final PDF will be generated and shared with
              the employee automatically.
            </div>

          </div>
        </div>

        {/* ACTION BAR */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <button className="btn btn-outline-secondary">
            Back to Preview
          </button>

          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary">
              Download PDF
            </button>
            <button className="btn btn-success">
              Issue Letter
            </button>
          </div>
        </div>

      </div>
    </main>
  );
};

export default LetterIssuance;
