import React from "react";

const AdminSettings = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* ================= HEADER ================= */}
        <div className="mb-4">
          <h3>Admin & Settings</h3>
          <p className="text-muted">
            Configure performance KPIs, competencies, roles, templates, and SLA rules
          </p>
        </div>

        {/* ================= KPI LIBRARY ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-bold">
            KPI Library Management
          </div>
          <div className="card-body">

            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>KPI Name</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sales Growth</td>
                  <td>Business</td>
                  <td>Quarterly revenue increase</td>
                  <td><span className="badge bg-success">Active</span></td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2">Edit</button>
                    <button className="btn btn-sm btn-outline-danger">Disable</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <button className="btn btn-primary">Add New KPI</button>
          </div>
        </div>

        {/* ================= COMPETENCY DEFINITIONS ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-bold">
            Competency Definitions
          </div>
          <div className="card-body row g-3">

            <div className="col-md-6">
              <label className="form-label">Competency Name</label>
              <input className="form-control" placeholder="Leadership" />
            </div>

            <div className="col-md-3">
              <label className="form-label">Weight (%)</label>
              <input className="form-control" placeholder="20" />
            </div>

            <div className="col-md-3">
              <label className="form-label">Status</label>
              <select className="form-select">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <div className="col-md-12">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows="2"></textarea>
            </div>

            <div className="col-md-12">
              <button className="btn btn-primary">Save Competency</button>
            </div>

          </div>
        </div>

        {/* ================= WEIGHT ADJUSTMENTS ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-bold">
            Assessment Weight Adjustments
          </div>
          <div className="card-body">

            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Assessment Type</th>
                  <th>Weight (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Self Assessment</td>
                  <td><input className="form-control" /></td>
                </tr>
                <tr>
                  <td>Manager Assessment</td>
                  <td><input className="form-control" /></td>
                </tr>
                <tr>
                  <td>Peer Feedback</td>
                  <td><input className="form-control" /></td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

        {/* ================= ROLE MAPPING ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-bold">
            Role & Access Mapping
          </div>
          <div className="card-body row g-3">

            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select className="form-select">
                <option>Employee</option>
                <option>Manager</option>
                <option>HR</option>
                <option>Admin</option>
              </select>
            </div>

            <div className="col-md-8">
              <label className="form-label">Permissions</label>
              <div className="border rounded p-3">
                <div><input type="checkbox" /> Goal Setting</div>
                <div><input type="checkbox" /> Assessment</div>
                <div><input type="checkbox" /> Calibration</div>
                <div><input type="checkbox" /> Reports Access</div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= TEMPLATES ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-bold">
            Templates Management
          </div>
          <div className="card-body">

            <table className="table">
              <thead>
                <tr>
                  <th>Template Name</th>
                  <th>Module</th>
                  <th>Last Updated</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Appraisal Letter</td>
                  <td>Performance</td>
                  <td>10 Apr 2026</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2">Edit</button>
                    <button className="btn btn-sm btn-outline-secondary">Clone</button>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

        {/* ================= SLA SETTINGS ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-bold">
            SLA & Timeline Settings
          </div>
          <div className="card-body row g-3">

            <div className="col-md-4">
              <label className="form-label">Goal Submission SLA (Days)</label>
              <input className="form-control" />
            </div>

            <div className="col-md-4">
              <label className="form-label">Manager Review SLA (Days)</label>
              <input className="form-control" />
            </div>

            <div className="col-md-4">
              <label className="form-label">Calibration SLA (Days)</label>
              <input className="form-control" />
            </div>

          </div>
        </div>

        {/* ================= ACTION BUTTONS ================= */}
        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-secondary">Reset</button>
          <button className="btn btn-success">Save All Settings</button>
        </div>

      </div>
    </main>
  );
};

export default AdminSettings;
