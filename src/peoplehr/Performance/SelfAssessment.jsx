import React from "react";

const SelfAssessment = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* PAGE HEADER */}
        <div className="mb-4">
          <h3>Self Assessment</h3>
          <p className="text-muted">
            Rate your goals and competencies, add comments and supporting evidence
          </p>
        </div>

        {/* CYCLE INFO */}
        <div className="card mb-4">
          <div className="card-body d-flex justify-content-between">
            <div>
              <strong>Performance Cycle:</strong> Annual Review 2026<br />
              <small className="text-muted">Submission Deadline: 31-Mar-2026</small>
            </div>
            <span className="badge bg-warning text-dark align-self-start">
              Draft
            </span>
          </div>
        </div>

        {/* ================= GOAL SELF ASSESSMENT ================= */}
        <div className="card mb-4">
          <div className="card-header fw-bold">
            Goal Self Assessment
          </div>
          <div className="card-body">

            {/* GOAL CARD */}
            <div className="border rounded p-3 mb-4">
              <h6 className="mb-2">Goal: Increase Quarterly Sales</h6>
              <p className="text-muted">
                Achieve a 20% increase in quarterly sales revenue through new
                client acquisition.
              </p>

              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label">Self Rating</label>
                  <select className="form-select">
                    <option>Select Rating</option>
                    <option>1 - Needs Improvement</option>
                    <option>2 - Below Expectations</option>
                    <option>3 - Meets Expectations</option>
                    <option>4 - Exceeds Expectations</option>
                    <option>5 - Outstanding</option>
                  </select>
                </div>

                <div className="col-md-8">
                  <label className="form-label">Self Comments</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Describe your achievements, challenges, and outcomes..."
                  ></textarea>
                </div>

                <div className="col-md-12">
                  <label className="form-label">Evidence / Supporting Links</label>
                  <input
                    type="file"
                    className="form-control mb-2"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Paste supporting URL (optional)"
                  />
                </div>
              </div>
            </div>

            {/* GOAL CARD 2 */}
            <div className="border rounded p-3">
              <h6 className="mb-2">Goal: Improve Customer Satisfaction</h6>
              <p className="text-muted">
                Maintain CSAT score above 90% for assigned accounts.
              </p>

              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label">Self Rating</label>
                  <select className="form-select">
                    <option>Select Rating</option>
                    <option>1 - Needs Improvement</option>
                    <option>2 - Below Expectations</option>
                    <option>3 - Meets Expectations</option>
                    <option>4 - Exceeds Expectations</option>
                    <option>5 - Outstanding</option>
                  </select>
                </div>

                <div className="col-md-8">
                  <label className="form-label">Self Comments</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Describe outcomes and learnings..."
                  ></textarea>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= COMPETENCY SELF ASSESSMENT ================= */}
        <div className="card mb-4">
          <div className="card-header fw-bold">
            Competency Self Assessment
          </div>
          <div className="card-body">

            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Competency</th>
                  <th>Description</th>
                  <th width="180">Self Rating</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Communication</td>
                  <td>Ability to communicate clearly and effectively</td>
                  <td>
                    <select className="form-select">
                      <option>Select</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </td>
                  <td>
                    <textarea
                      className="form-control"
                      rows="2"
                      placeholder="Examples or justification"
                    ></textarea>
                  </td>
                </tr>

                <tr>
                  <td>Teamwork</td>
                  <td>Collaboration with team members</td>
                  <td>
                    <select className="form-select">
                      <option>Select</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </td>
                  <td>
                    <textarea
                      className="form-control"
                      rows="2"
                      placeholder="Examples or justification"
                    ></textarea>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="text-end mb-4">
          <button className="btn btn-secondary me-2">
            Save Draft
          </button>
          <button className="btn btn-success">
            Final Submit
          </button>
        </div>

      </div>
    </main>
  );
};

export default SelfAssessment;
