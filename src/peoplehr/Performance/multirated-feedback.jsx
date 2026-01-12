import React from "react";

const MultiRaterFeedback = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* ================= PAGE HEADER ================= */}
        <div className="mb-4">
          <h3>Multi-Rater Feedback</h3>
          <p className="text-muted">
            Collect peer, client & subordinate feedback anonymously
          </p>
        </div>

        {/* ================= FEEDBACK REQUEST CREATION ================= */}
        <div className="card mb-4 shadow-sm">
          <div className="card-header fw-bold">
            Create Feedback Request
          </div>
          <div className="card-body row g-3">

            <div className="col-md-4">
              <label className="form-label">Employee</label>
              <select className="form-select">
                <option>Select Employee</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Reviewer Type</label>
              <select className="form-select">
                <option>Peer</option>
                <option>Client</option>
                <option>Subordinate</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Deadline</label>
              <input type="date" className="form-control" />
            </div>

            <div className="col-md-12">
              <label className="form-label">Feedback Template</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Provide feedback on strengths, improvement areas, collaboration..."
              ></textarea>
            </div>

            <div className="col-md-6">
              <div className="form-check mt-2">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">
                  Anonymous Feedback
                </label>
              </div>
            </div>

            <div className="col-md-6 text-end">
              <button className="btn btn-primary">
                Send Request
              </button>
            </div>

          </div>
        </div>

        {/* ================= REVIEWER DASHBOARD ================= */}
        <div className="card mb-4 shadow-sm">
          <div className="card-header fw-bold">
            Reviewer Dashboard
          </div>
          <div className="card-body">

            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Employee</th>
                  <th>Reviewer Type</th>
                  <th>Deadline</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rahul Sharma</td>
                  <td>Peer</td>
                  <td>30-Mar-2026</td>
                  <td>
                    <span className="badge bg-warning">Pending</span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary">
                      Give Feedback
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>Anita Verma</td>
                  <td>Subordinate</td>
                  <td>28-Mar-2026</td>
                  <td>
                    <span className="badge bg-success">Submitted</span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-secondary" disabled>
                      Submitted
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

        {/* ================= AGGREGATED FEEDBACK VIEW ================= */}
        <div className="card shadow-sm">
          <div className="card-header fw-bold">
            Aggregated Feedback (Manager / HR View)
          </div>
          <div className="card-body">

            <div className="mb-3">
              <label className="form-label">Employee</label>
              <select className="form-select">
                <option>Select Employee</option>
              </select>
            </div>

            <div className="border rounded p-3 mb-3">
              <h6>Strengths</h6>
              <ul>
                <li>Strong team collaboration</li>
                <li>Delivers tasks on time</li>
                <li>Positive attitude</li>
              </ul>
            </div>

            <div className="border rounded p-3 mb-3">
              <h6>Areas of Improvement</h6>
              <ul>
                <li>Improve documentation</li>
                <li>More proactive communication</li>
              </ul>
            </div>

            <div className="border rounded p-3">
              <h6>Overall Summary</h6>
              <p className="text-muted">
                Feedback is collected anonymously from multiple reviewers.
              </p>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default MultiRaterFeedback;
