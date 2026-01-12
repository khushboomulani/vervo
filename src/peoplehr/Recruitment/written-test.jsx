import React from "react";

const WrittenTestManagement = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* ================= HEADER ================= */}
        <div className="mb-4">
          <h3>Written Test Management</h3>
          <p className="text-muted">
            Create, assign, and evaluate written tests for candidates
          </p>
        </div>

        {/* ================= TEST CREATION ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-semibold">
            Create Written Test
          </div>

          <div className="card-body">

            {/* Test Details */}
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label">Test Title *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. React Developer – Written Test"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Deadline *</label>
                <input type="date" className="form-control" />
              </div>
            </div>

            {/* Instructions */}
            <div className="mb-4">
              <label className="form-label">Instructions</label>
              <textarea
                rows="5"
                className="form-control"
                placeholder="Enter test instructions (rich text editor placeholder)"
              ></textarea>
            </div>

            {/* Attachments */}
            <div className="mb-4">
              <label className="form-label">Attachments</label>
              <input type="file" className="form-control" />
              <small className="text-muted">
                Upload question paper or reference files (PDF/DOC)
              </small>
            </div>

            {/* Scoring Rules */}
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <label className="form-label">Max Score *</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="e.g. 100"
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Passing Criteria *</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="e.g. 60"
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Allow Resubmission</label>
                <select className="form-select">
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>
            </div>

            {/* Actions */}
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-secondary">Save Draft</button>
              <button className="btn btn-primary">Create Test</button>
            </div>

          </div>
        </div>

        {/* ================= ASSIGN TEST ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-semibold">
            Assign Test to Candidates
          </div>

          <div className="card-body row g-3 align-items-end">
            <div className="col-md-4">
              <label className="form-label">Select Test</label>
              <select className="form-select">
                <option>Select Test</option>
                <option>React Developer – Written Test</option>
              </select>
            </div>

            <div className="col-md-5">
              <label className="form-label">Select Candidate(s)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Search & select candidates"
              />
            </div>

            <div className="col-md-3">
              <button className="btn btn-primary w-100">
                Assign Test
              </button>
            </div>
          </div>
        </div>

        {/* ================= SUBMISSIONS TABLE ================= */}
        <div className="card shadow-sm">
          <div className="card-header fw-semibold">
            Test Submissions
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Candidate Name</th>
                  <th>Test Title</th>
                  <th>Submitted On</th>
                  <th>Score</th>
                  <th>Status</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td><strong>Ankit Sharma</strong></td>
                  <td>React Developer – Written Test</td>
                  <td>15 Feb 2026</td>
                  <td>—</td>
                  <td>
                    <span className="badge bg-warning text-dark">
                      Pending Evaluation
                    </span>
                  </td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-primary me-1">
                      View Submission
                    </button>
                    <button className="btn btn-sm btn-success me-1">
                      Score
                    </button>
                    <button className="btn btn-sm btn-danger">
                      Mark Fail
                    </button>
                  </td>
                </tr>

                <tr>
                  <td><strong>Pooja Verma</strong></td>
                  <td>React Developer – Written Test</td>
                  <td>14 Feb 2026</td>
                  <td>82 / 100</td>
                  <td>
                    <span className="badge bg-success">
                      Passed
                    </span>
                  </td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-secondary">
                      View Submission
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
};

export default WrittenTestManagement;
