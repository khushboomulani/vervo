import React from "react";

const ReportsAnalytics = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* ================= HEADER ================= */}
        <div className="mb-4">
          <h3>Reports & Analytics</h3>
          <p className="text-muted">
            Recruitment performance insights and downloadable reports
          </p>
        </div>

        {/* ================= FILTER BAR ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-body row g-3 align-items-end">

            <div className="col-md-3">
              <label className="form-label">Date Range</label>
              <input type="date" className="form-control" />
            </div>

            <div className="col-md-3">
              <label className="form-label">Department</label>
              <select className="form-select">
                <option>All Departments</option>
                <option>Engineering</option>
                <option>Sales</option>
                <option>HR</option>
              </select>
            </div>

            <div className="col-md-3">
              <label className="form-label">Job Role</label>
              <select className="form-select">
                <option>All Roles</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>HR Executive</option>
              </select>
            </div>

            <div className="col-md-3 d-grid">
              <button className="btn btn-primary">
                Run Report
              </button>
            </div>

          </div>
        </div>

        {/* ================= FUNNEL METRICS ================= */}
        <h5 className="mb-3">Recruitment Funnel Metrics</h5>

        <div className="row g-4 mb-4">
          <div className="col-md-3">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <h6>Applications</h6>
                <h4 className="mt-2">320</h4>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <h6>Shortlisted</h6>
                <h4 className="mt-2">120</h4>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <h6>Interviewed</h6>
                <h4 className="mt-2">65</h4>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <h6>Hired</h6>
                <h4 className="mt-2">18</h4>
              </div>
            </div>
          </div>
        </div>

        {/* ================= TIME TO HIRE ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-semibold">
            Time-to-Hire Analysis
          </div>
          <div className="card-body text-center">
            <div className="bg-secondary-subtle rounded p-5">
              Time-to-Hire Chart Placeholder (Avg Days per Role)
            </div>
          </div>
        </div>

        {/* ================= SOURCE EFFECTIVENESS ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-semibold">
            Source Effectiveness
          </div>
          <div className="card-body text-center">
            <div className="bg-secondary-subtle rounded p-5">
              Source-wise Applications vs Hires (Job Portal / Referral / Internal)
            </div>
          </div>
        </div>

        {/* ================= TEST & INTERVIEW PASS RATES ================= */}
        <div className="row g-4 mb-4">

          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-header fw-semibold">
                Written Test Pass Rates
              </div>
              <div className="card-body text-center">
                <div className="bg-secondary-subtle rounded p-4">
                  Written Test Pass % Chart Placeholder
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-header fw-semibold">
                Interview Round Pass Rates
              </div>
              <div className="card-body text-center">
                <div className="bg-secondary-subtle rounded p-4">
                  Interview Round-wise Pass % Chart Placeholder
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ================= ACTION BAR ================= */}
        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-outline-secondary">
            Save Preset
          </button>
          <button className="btn btn-outline-primary">
            Schedule Report
          </button>
          <button className="btn btn-success">
            Export PDF
          </button>
          <button className="btn btn-success">
            Export Excel
          </button>
          <button className="btn btn-success">
            Export CSV
          </button>
        </div>

      </div>
    </main>
  );
};

export default ReportsAnalytics;
