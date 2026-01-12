import React from "react";

const InterviewFeedbackProgress = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* ================= HEADER ================= */}
        <div className="mb-4">
          <h3>Interview Feedback & Progress</h3>
          <p className="text-muted">
            Submit interview feedback and update candidate progress
          </p>
        </div>

        {/* ================= CANDIDATE SUMMARY ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-3">
                <strong>Candidate Name</strong>
                <div className="text-muted">Amit Sharma</div>
              </div>
              <div className="col-md-3">
                <strong>Applied Role</strong>
                <div className="text-muted">Frontend Developer</div>
              </div>
              <div className="col-md-3">
                <strong>Current Round</strong>
                <div className="text-muted">Technical Round</div>
              </div>
              <div className="col-md-3">
                <strong>Overall Status</strong>
                <span className="badge bg-warning text-dark ms-2">
                  In Progress
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= ROUND SELECTOR ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-body row g-3">
            <div className="col-md-4">
              <label className="form-label">Select Interview Round</label>
              <select className="form-select">
                <option>Technical Round</option>
                <option>Managerial Round</option>
                <option>HR Round</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Interviewer</label>
              <input
                type="text"
                className="form-control"
                value="Rahul Verma"
                disabled
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Round Status</label>
              <select className="form-select">
                <option>Pending</option>
                <option>Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* ================= FEEDBACK FORM ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-semibold">
            Interviewer Feedback
          </div>

          <div className="card-body">

            {/* Ratings */}
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <label className="form-label">Technical Skills</label>
                <select className="form-select">
                  <option>1 - Poor</option>
                  <option>2 - Average</option>
                  <option>3 - Good</option>
                  <option>4 - Very Good</option>
                  <option>5 - Excellent</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">Communication Skills</label>
                <select className="form-select">
                  <option>1 - Poor</option>
                  <option>2 - Average</option>
                  <option>3 - Good</option>
                  <option>4 - Very Good</option>
                  <option>5 - Excellent</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">Problem Solving</label>
                <select className="form-select">
                  <option>1 - Poor</option>
                  <option>2 - Average</option>
                  <option>3 - Good</option>
                  <option>4 - Very Good</option>
                  <option>5 - Excellent</option>
                </select>
              </div>
            </div>

            {/* Feedback Text */}
            <div className="mb-4">
              <label className="form-label">Detailed Feedback</label>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Provide qualitative feedback, strengths, concerns, and observations"
              ></textarea>
            </div>

            {/* Aggregate Round Result */}
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label">Aggregate Round Result</label>
                <select className="form-select">
                  <option>Pass</option>
                  <option>Fail</option>
                  <option>Hold</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Candidate Overall Status</label>
                <select className="form-select">
                  <option>Move to Next Round</option>
                  <option>Rejected</option>
                  <option>On Hold</option>
                </select>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-secondary">
                Save Draft
              </button>
              <button className="btn btn-outline-primary">
                Recommend Next Round
              </button>
              <button className="btn btn-warning">
                Put On Hold
              </button>
              <button className="btn btn-danger">
                Reject
              </button>
              <button className="btn btn-primary">
                Submit Feedback
              </button>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default InterviewFeedbackProgress;
