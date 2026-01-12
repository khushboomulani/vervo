import React from "react";

const JobRequest = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* ================= HEADER ================= */}
        <div className="mb-4">
          <h3>Requisition / Job Request</h3>
          <p className="text-muted">
            Create and submit a new hiring requisition
          </p>
        </div>

        {/* ================= FORM CARD ================= */}
        <div className="card shadow-sm">
          <div className="card-body row g-3 align-items-end">

            {/* Job Details */}
            <h4 className="section-title mb-3">Job Details</h4>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label">Job Title *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter job title"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Department *</label>
                <select className="form-select">
                  <option>Select Department</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Location</label>
                <select className="form-select">
                  <option>Select Location</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Hiring Manager *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Select hiring manager"
                />
              </div>
            </div>

            {/* Position & Budget */}
            <h4 className="section-title mb-3">Position & Budget</h4>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label">Number of Positions</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="e.g. 2"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Budget</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. ₹8,00,000"
                />
              </div>
            </div>

            {/* Job Content */}
            <h4 className="section-title mb-3">Job Content</h4>
            <div className="mb-3">
              <label className="form-label">Job Description</label>
              <textarea
                rows="5"
                className="form-control"
                placeholder="Enter detailed job description"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="form-label">Required Skills</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add skills (e.g. React, Node.js)"
              />
            </div>

            {/* Timeline */}
            <h4 className="section-title mb-3">Timeline</h4>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label">Open Date *</label>
                <input type="date" className="form-control" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Expected Close Date</label>
                <input type="date" className="form-control" />
              </div>
            </div>

            {/* Attachments */}
            <h4 className="section-title mb-3">Attachments</h4>
            <div className="mb-4">
              <label className="form-label">Attach Job Description (JD)</label>
              <input type="file" className="form-control" />
            </div>

            {/* Actions */}
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-secondary">Save Draft</button>
              <button className="btn btn-outline-secondary">Preview Posting</button>
              <button className="btn btn-danger">Cancel</button>
              <button className="btn btn-primary">Submit Requisition</button>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default JobRequest;
