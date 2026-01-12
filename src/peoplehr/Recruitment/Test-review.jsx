import React from "react";

const WrittenTestReviewScoring = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* ================= HEADER ================= */}
        <div className="mb-4">
          <h3>Written Test Review & Scoring</h3>
          <p className="text-muted">
            Review candidate submission and record evaluation details
          </p>
        </div>

        {/* ================= CANDIDATE INFO ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-body row g-3">
            <div className="col-md-4">
              <strong>Candidate Name:</strong>
              <div className="text-muted">Amit Sharma</div>
            </div>
            <div className="col-md-4">
              <strong>Applied Role:</strong>
              <div className="text-muted">Frontend Developer</div>
            </div>
            <div className="col-md-4">
              <strong>Test Title:</strong>
              <div className="text-muted">React Fundamentals Test</div>
            </div>
          </div>
        </div>

        {/* ================= SUBMISSION VIEWER ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-semibold d-flex justify-content-between align-items-center">
            Submission Viewer
            <button className="btn btn-sm btn-outline-primary">
              Open Submission
            </button>
          </div>

          <div className="card-body">
            <div className="border rounded p-3 bg-white" style={{ minHeight: "180px" }}>
              <p className="text-muted mb-0">
                Candidate answers / uploaded document preview will appear here.
              </p>
            </div>
          </div>
        </div>

        {/* ================= SCORING ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-semibold">
            Scoring & Evaluation
          </div>

          <div className="card-body">

            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <label className="form-label">Score</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter score"
                />
                <small className="text-muted">Max Score: 100</small>
              </div>

              <div className="col-md-4">
                <label className="form-label">Result</label>
                <select className="form-select">
                  <option>Pending</option>
                  <option>Pass</option>
                  <option>Fail</option>
                </select>
              </div>
            </div>

            {/* Comments */}
            <div className="mb-4">
              <label className="form-label">Evaluator Comments</label>
              <textarea
                rows="4"
                className="form-control"
                placeholder="Add evaluation comments or feedback"
              ></textarea>
            </div>

            {/* Actions */}
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-warning">
                Request Resubmission
              </button>
              <button className="btn btn-secondary">
                Add Comment
              </button>
              <button className="btn btn-primary">
                Save Score
              </button>
            </div>

          </div>
        </div>

        {/* ================= FOOTER NOTE ================= */}
        <div className="text-muted small text-center">
          Evaluation changes are logged for audit purposes.
        </div>

      </div>
    </main>
  );
};

export default WrittenTestReviewScoring;
