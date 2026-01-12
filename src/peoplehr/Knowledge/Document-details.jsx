import React from "react";

const DocumentDetail = () => {
  return (
    <main className="p-4 bg-light min-vh-100">
      <div className="container-fluid">

        {/* PAGE HEADER */}
        <div className="mb-4 d-flex justify-content-between align-items-center">
          <div>
            <h3>Document Details</h3>
            <p className="text-muted mb-0">
              View document preview, versions & download
            </p>
          </div>

          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary">
              Download
            </button>
            <button className="btn btn-primary">
              Upload New Version
            </button>
          </div>
        </div>

        <div className="row">

          {/* LEFT: DOCUMENT PREVIEW */}
          <div className="col-md-8">
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Document Preview
              </div>

              <div className="card-body bg-white" style={{ minHeight: "500px" }}>
                {/* PDF / DOC PREVIEW PLACEHOLDER */}
                <div className="border rounded p-4 text-center text-muted">
                  <i className="fa fa-file-pdf-o fa-3x mb-3"></i>
                  <p className="mb-1">Preview not interactive (Design Only)</p>
                  <small>Final PDF will render here</small>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: DOCUMENT META & VERSION HISTORY */}
          <div className="col-md-4">

            {/* DOCUMENT INFO */}
            <div className="card shadow-sm mb-4">
              <div className="card-header fw-bold">
                Document Information
              </div>
              <div className="card-body">
                <div className="mb-2">
                  <strong>Title:</strong>
                  <div className="text-muted">Offer Letter – Standard</div>
                </div>

                <div className="mb-2">
                  <strong>Category:</strong>
                  <div className="text-muted">Offer Letters</div>
                </div>

                <div className="mb-2">
                  <strong>Current Version:</strong>
                  <div className="text-muted">v3</div>
                </div>

                <div className="mb-2">
                  <strong>Last Updated:</strong>
                  <div className="text-muted">12 Jan 2026</div>
                </div>

                <div className="mb-2">
                  <strong>Status:</strong>
                  <span className="badge bg-success ms-2">
                    Active
                  </span>
                </div>
              </div>
            </div>

            {/* VERSION HISTORY */}
            <div className="card shadow-sm">
              <div className="card-header fw-bold">
                Version History
              </div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <div>
                      <strong>v3</strong>
                      <div className="text-muted small">
                        Salary structure updated
                      </div>
                    </div>
                    <small className="text-muted">
                      12 Jan 2026
                    </small>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <div>
                      <strong>v2</strong>
                      <div className="text-muted small">
                        Formatting changes
                      </div>
                    </div>
                    <small className="text-muted">
                      05 Jan 2026
                    </small>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <div>
                      <strong>v1</strong>
                      <div className="text-muted small">
                        Initial release
                      </div>
                    </div>
                    <small className="text-muted">
                      20 Dec 2025
                    </small>
                  </div>
                </li>
              </ul>

            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default DocumentDetail;
