import React from "react";

const TraineeAssignment = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* ================= HEADER ================= */}
        <div className="mb-4">
          <h3>Assign Trainees</h3>
          <p className="text-muted">
            Select employees to assign for the training and notify them
          </p>
        </div>

        {/* ================= FORM CARD ================= */}
        <div className="card shadow-sm">
          <div className="card-body">

            {/* Training Selection */}
            <h4 className="section-title mb-3">Training</h4>
            <div className="mb-4">
              <label className="form-label">Select Training *</label>
              <select className="form-select">
                <option>Select Training</option>
                <option>React Basics</option>
                <option>Advanced Node.js</option>
                <option>Leadership Program</option>
              </select>
            </div>

            {/* Employee Selection */}
            <h4 className="section-title mb-3">Trainees</h4>
            <div className="mb-4">
              <label className="form-label">Select Employees *</label>
              <select className="form-select" multiple>
                <option>John Doe</option>
                <option>Jane Smith</option>
                <option>Michael Brown</option>
                <option>Emily Davis</option>
                <option>Robert Johnson</option>
              </select>
              <small className="text-muted">
                Hold Ctrl (Cmd on Mac) to select multiple employees
              </small>
            </div>

            {/* Notification */}
            <h4 className="section-title mb-3">Notification</h4>
            <div className="mb-4">
              <label className="form-label">Notify Trainees</label>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="notifyEmail"
                />
                <label className="form-check-label" htmlFor="notifyEmail">
                  Send Email Notification
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="notifyApp"
                />
                <label className="form-check-label" htmlFor="notifyApp">
                  Send App Notification
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-secondary">Save Draft</button>
              <button className="btn btn-danger">Cancel</button>
              <button className="btn btn-primary">Assign Trainees</button>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default TraineeAssignment;
