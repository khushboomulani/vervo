import React from "react";

const TrainingCreation = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* ================= HEADER ================= */}
        <div className="mb-4">
          <h3>Create Training</h3>
          <p className="text-muted">
            Configure training details, trainer, schedule, and learning content
          </p>
        </div>

        {/* ================= FORM CARD ================= */}
        <div className="card shadow-sm">
          <div className="card-body">

            {/* Training Details */}
            <h4 className="section-title mb-3">Training Details</h4>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label">Training Title *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter training title"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Trainer *</label>
                <select className="form-select">
                  <option>Select Trainer</option>
                  <option>Internal Trainer</option>
                  <option>External Trainer</option>
                </select>
              </div>
            </div>

            {/* Schedule */}
            <h4 className="section-title mb-3">Schedule</h4>
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <label className="form-label">Start Date *</label>
                <input type="date" className="form-control" />
              </div>

              <div className="col-md-4">
                <label className="form-label">End Date *</label>
                <input type="date" className="form-control" />
              </div>

              <div className="col-md-4">
                <label className="form-label">Time / Duration</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. 10:00 AM - 1:00 PM"
                />
              </div>
            </div>

            {/* Training Content */}
            <h4 className="section-title mb-3">Training Content</h4>
            <div className="mb-4">
              <label className="form-label">Description</label>
              <textarea
                rows="4"
                className="form-control"
                placeholder="Brief overview of the training"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="form-label">Upload Content</label>
              <input
                type="file"
                className="form-control"
                multiple
              />
              <small className="text-muted">
                Supported formats: PDF, PPT, DOC, Video
              </small>
            </div>

            {/* Actions */}
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-secondary">
                Save Draft
              </button>
              <button className="btn btn-danger">
                Cancel
              </button>
              <button className="btn btn-primary">
                Create Training
              </button>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default TrainingCreation;
