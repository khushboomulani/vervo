import React from "react";

const ManagerAssessment = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* PAGE HEADER */}
        <div className="mb-4">
          <h3>Manager Assessment</h3>
          <p className="text-muted">
            Review employee goals and competencies, provide ratings and comments
          </p>
        </div>

        {/* EMPLOYEE SUMMARY */}
        <div className="card mb-4">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-1">Employee: Rahul Verma</h6>
              <small className="text-muted">
                Designation: Sales Executive | Department: Sales
              </small>
            </div>
            <span className="badge bg-info">
              Awaiting Manager Review
            </span>
          </div>
        </div>

        {/* ================= GOAL ASSESSMENT ================= */}
        <div className="card mb-4">
          <div className="card-header fw-bold">
            Goal Assessment
          </div>
          <div className="card-body">

            {/* GOAL CARD */}
            <div className="border rounded p-3 mb-4">
              <h6>Goal: Increase Quarterly Sales</h6>
              <p className="text-muted">
                Achieve a 20% increase in quarterly sales revenue.
              </p>

              <div className="row g-3">
                <div className="col-md-3">
                  <label className="form-label">Employee Rating</label>
                  <input className="form-control" value="4 - Exceeds" disabled />
                </div>

                <div className="col-md-3">
                  <label className="form-label">Manager Rating</label>
                  <select className="form-select">
                    <option>Select Rating</option>
                    <option>1 - Needs Improvement</option>
                    <option>2 - Below Expectations</option>
                    <option>3 - Meets Expectations</option>
                    <option>4 - Exceeds Expectations</option>
                    <option>5 - Outstanding</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Manager Comments</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Provide feedback and observations..."
                  ></textarea>
                </div>

                <div className="col-md-12">
                  <label className="form-label">Clarification Request (Optional)</label>
                  <textarea
                    className="form-control"
                    rows="2"
                    placeholder="Ask employee for clarification or additional evidence..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* GOAL CARD 2 */}
            <div className="border rounded p-3">
              <h6>Goal: Improve Customer Satisfaction</h6>
              <p className="text-muted">
                Maintain CSAT above 90% across key accounts.
              </p>

              <div className="row g-3">
                <div className="col-md-3">
                  <label className="form-label">Employee Rating</label>
                  <input className="form-control" value="3 - Meets" disabled />
                </div>

                <div className="col-md-3">
                  <label className="form-label">Manager Rating</label>
                  <select className="form-select">
                    <option>Select Rating</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Manager Comments</label>
                  <textarea className="form-control" rows="3"></textarea>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= COMPETENCY ASSESSMENT ================= */}
        <div className="card mb-4">
          <div className="card-header fw-bold">
            Competency Assessment
          </div>
          <div className="card-body">

            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Competency</th>
                  <th>Employee Rating</th>
                  <th>Manager Rating</th>
                  <th>Manager Comments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Communication</td>
                  <td>
                    <input className="form-control" value="4" disabled />
                  </td>
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
                      placeholder="Feedback..."
                    ></textarea>
                  </td>
                </tr>

                <tr>
                  <td>Teamwork</td>
                  <td>
                    <input className="form-control" value="3" disabled />
                  </td>
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
                    <textarea className="form-control" rows="2"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

        {/* OVERALL RATING */}
        <div className="card mb-4">
          <div className="card-header fw-bold">
            Overall Recommendation
          </div>
          <div className="card-body row g-3">
            <div className="col-md-4">
              <label>Suggested Final Rating</label>
              <select className="form-select">
                <option>Select</option>
                <option>Outstanding</option>
                <option>Exceeds Expectations</option>
                <option>Meets Expectations</option>
                <option>Below Expectations</option>
              </select>
            </div>
            <div className="col-md-8">
              <label>Overall Manager Remarks</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Summary remarks for HR calibration..."
              ></textarea>
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="text-end mb-4">
          <button className="btn btn-warning me-2">
            Request Clarification
          </button>
          <button className="btn btn-secondary me-2">
            Save Draft
          </button>
          <button className="btn btn-primary">
            Submit to HR for Calibration
          </button>
        </div>

      </div>
    </main>
  );
};

export default ManagerAssessment;
