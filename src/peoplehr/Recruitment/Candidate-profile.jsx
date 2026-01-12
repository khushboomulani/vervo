import React from "react";

const CandidateProfileAudit = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* ================= HEADER ================= */}
        <div className="mb-4 d-flex justify-content-between align-items-center">
          <div>
            <h3>Candidate Profile</h3>
            <p className="text-muted">
              Complete candidate history, assessments, and audit trail
            </p>
          </div>

          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary">Change Status</button>
            <button className="btn btn-outline-primary">Trigger Background Check</button>
          </div>
        </div>

        {/* ================= BASIC DETAILS ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-semibold">
            Candidate Details
          </div>
          <div className="card-body row g-3">

            <div className="col-md-4">
              <label className="form-label">Candidate Name</label>
              <input type="text" className="form-control" value="Rahul Sharma" readOnly />
            </div>

            <div className="col-md-4">
              <label className="form-label">Applied Role</label>
              <input type="text" className="form-control" value="Frontend Developer" readOnly />
            </div>

            <div className="col-md-4">
              <label className="form-label">Source</label>
              <input type="text" className="form-control" value="Job Portal" readOnly />
            </div>

            <div className="col-md-4">
              <label className="form-label">Email</label>
              <input type="text" className="form-control" value="rahul@email.com" readOnly />
            </div>

            <div className="col-md-4">
              <label className="form-label">Phone</label>
              <input type="text" className="form-control" value="+91 98765 43210" readOnly />
            </div>

            <div className="col-md-4">
              <label className="form-label">Current Status</label>
              <span className="badge bg-info-subtle text-dark d-block p-2">
                Interview – Technical Round
              </span>
            </div>

          </div>
        </div>

        {/* ================= RESUME ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-semibold">
            Resume
          </div>
          <div className="card-body d-flex justify-content-between align-items-center">
            <span>rahul_sharma_resume.pdf</span>
            <button className="btn btn-outline-primary btn-sm">View / Download</button>
          </div>
        </div>

        {/* ================= WRITTEN TEST SUBMISSIONS ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-semibold">
            Written Test Submissions
          </div>
          <div className="table-responsive">
            <table className="table table-bordered mb-0">
              <thead className="table-light">
                <tr>
                  <th>Test Title</th>
                  <th>Submitted On</th>
                  <th>Score</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Frontend Assessment</td>
                  <td>12 Mar 2026</td>
                  <td>78 / 100</td>
                  <td>
                    <span className="badge bg-success">Pass</span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-secondary">
                      View Submission
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= INTERVIEW FEEDBACK ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-semibold">
            Interview Feedback
          </div>
          <div className="table-responsive">
            <table className="table table-bordered mb-0">
              <thead className="table-light">
                <tr>
                  <th>Round</th>
                  <th>Interviewer</th>
                  <th>Rating</th>
                  <th>Result</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Technical Round</td>
                  <td>Amit Verma</td>
                  <td>4 / 5</td>
                  <td>
                    <span className="badge bg-success">Pass</span>
                  </td>
                  <td>Strong React fundamentals</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= APPROVAL HISTORY ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-semibold">
            Approval History
          </div>
          <div className="table-responsive">
            <table className="table table-bordered mb-0">
              <thead className="table-light">
                <tr>
                  <th>Stage</th>
                  <th>Action</th>
                  <th>By</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Shortlisting</td>
                  <td>Approved</td>
                  <td>HR Team</td>
                  <td>10 Mar 2026</td>
                </tr>
                <tr>
                  <td>Technical Interview</td>
                  <td>Approved</td>
                  <td>Tech Manager</td>
                  <td>14 Mar 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= INTERNAL NOTES ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-semibold">
            Internal Notes
          </div>
          <div className="card-body">
            <textarea
              rows="4"
              className="form-control mb-3"
              placeholder="Add internal notes (visible only to HR / Interviewers)"
            ></textarea>
            <button className="btn btn-primary">
              Add Note
            </button>
          </div>
        </div>

        {/* ================= AUDIT LOG ================= */}
        <div className="card shadow-sm">
          <div className="card-header fw-semibold">
            Audit Log
          </div>
          <div className="table-responsive">
            <table className="table table-bordered mb-0">
              <thead className="table-light">
                <tr>
                  <th>Timestamp</th>
                  <th>Action</th>
                  <th>User</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>14 Mar 2026, 11:30 AM</td>
                  <td>Interview Feedback Submitted</td>
                  <td>Amit Verma</td>
                  <td>Recommended for next round</td>
                </tr>
                <tr>
                  <td>12 Mar 2026, 04:15 PM</td>
                  <td>Test Evaluated</td>
                  <td>HR Admin</td>
                  <td>Passed written assessment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
};

export default CandidateProfileAudit;
