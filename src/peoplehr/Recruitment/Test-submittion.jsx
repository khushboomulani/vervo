import React from "react";

const WrittenTestSubmission = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* ================= HEADER ================= */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h3>Written Test Submission</h3>
            <p className="text-muted mb-0">
              Please read the instructions carefully before submitting your test
            </p>
          </div>

          {/* Remaining Time */}
          <div className="alert alert-warning mb-0 py-2 px-3">
            <strong>Remaining Time:</strong> 01:25:40
          </div>
        </div>

        {/* ================= INSTRUCTIONS ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-semibold d-flex justify-content-between align-items-center">
            Test Instructions
            <button className="btn btn-sm btn-outline-primary">
              View Instructions
            </button>
          </div>

          <div className="card-body">
            <ul className="mb-0">
              <li>Answer all questions clearly.</li>
              <li>Upload supporting files if required.</li>
              <li>Do not refresh the page during submission.</li>
              <li>Ensure submission before time expires.</li>
            </ul>
          </div>
        </div>

        {/* ================= ANSWER SUBMISSION ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-semibold">
            Submit Your Answers
          </div>

          <div className="card-body">

            {/* Upload Answer File */}
            <div className="mb-4">
              <label className="form-label">Upload Answer File</label>
              <input type="file" className="form-control" />
              <small className="text-muted">
                Accepted formats: PDF, DOC, DOCX (Max size: 10MB)
              </small>
            </div>

            {/* Text Area Answers */}
            <div className="mb-4">
              <label className="form-label">Write Your Answers</label>
              <textarea
                rows="10"
                className="form-control"
                placeholder="Type your answers here..."
              ></textarea>
            </div>

            {/* Save Draft Option */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="saveDraft"
              />
              <label className="form-check-label" htmlFor="saveDraft">
                Save draft automatically
              </label>
            </div>

            {/* Actions */}
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-secondary">
                Save Draft
              </button>
              <button className="btn btn-danger">
                Submit Test
              </button>
            </div>

          </div>
        </div>

        {/* ================= FOOTER NOTE ================= */}
        <div className="text-muted text-center small">
          Once submitted, answers cannot be edited.
        </div>

      </div>
    </main>
  );
};

export default WrittenTestSubmission;
