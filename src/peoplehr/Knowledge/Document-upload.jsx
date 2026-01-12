import React from "react";

const DocumentUpload = () => {
  return (
    <main className="p-4 bg-light min-vh-100">
      <div className="container-fluid">

        {/* PAGE HEADER */}
        <div className="mb-4">
          <h3>Upload Document</h3>
          <p className="text-muted">
            Upload new document or create a new version
          </p>
        </div>

        <div className="row ">
          <div className="col-md-8">

            <div className="card shadow-sm">
              <div className="card-header fw-bold">
                Document Details
              </div>

              <div className="card-body">

                {/* DOCUMENT TITLE */}
                <div className="mb-3">
                  <label className="form-label">
                    Document Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Offer Letter – Standard"
                  />
                </div>

                {/* CATEGORY */}
                <div className="mb-3">
                  <label className="form-label">
                    Category
                  </label>
                  <select className="form-select">
                    <option>Select Category</option>
                    <option>Offer Letters</option>
                    <option>Appointment Letters</option>
                    <option>Policy Documents</option>
                    <option>HR Circulars</option>
                    <option>Compliance</option>
                  </select>
                </div>

                {/* FILE UPLOAD */}
                <div className="mb-3">
                  <label className="form-label">
                    Upload File
                  </label>
                  <input
                    type="file"
                    className="form-control"
                  />
                  <small className="text-muted">
                    Supported formats: PDF, DOCX
                  </small>
                </div>

                {/* VERSION NOTES */}
                <div className="mb-4">
                  <label className="form-label">
                    Version Notes
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Describe what changed in this version"
                  ></textarea>
                </div>

                {/* ACTION BUTTONS */}
                <div className="d-flex justify-content-end gap-2">
                  <button className="btn btn-outline-secondary">
                    Cancel
                  </button>
                  <button className="btn btn-primary">
                    Upload Document
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default DocumentUpload;
