import React from "react";

const TrainingDetail = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* ================= HEADER ================= */}
        <div className="mb-4">
          <h3>Training Details</h3>
          <p className="text-muted">
            View attendance, completion status, and certificates of trainees
          </p>
        </div>

        {/* ================= TRAINING INFO CARD ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h4 className="section-title mb-3">Training Info</h4>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Training Title</label>
                <input
                  type="text"
                  className="form-control"
                  value="React Basics"
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Trainer</label>
                <input
                  type="text"
                  className="form-control"
                  value="John Doe"
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Schedule</label>
                <input
                  type="text"
                  className="form-control"
                  value="10 Jan 2026 - 20 Jan 2026"
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Content Uploaded</label>
                <input
                  type="text"
                  className="form-control"
                  value="5 Files"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================= ATTENDANCE ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-bold">Attendance</div>
          <div className="card-body">
            <table className="table table-bordered table-hover mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Employee Name</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>10 Jan 2026</td>
                  <td>Present</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jane Smith</td>
                  <td>10 Jan 2026</td>
                  <td>Absent</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Michael Brown</td>
                  <td>10 Jan 2026</td>
                  <td>Present</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= COMPLETION ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-bold">Completion</div>
          <div className="card-body">
            <table className="table table-bordered table-hover mb-0">
              <thead>
                <tr>
                  <th>Employee Name</th>
                  <th>Completion Status</th>
                  <th>Score / Progress</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>Completed</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>In Progress</td>
                  <td>60%</td>
                </tr>
                <tr>
                  <td>Michael Brown</td>
                  <td>Completed</td>
                  <td>95%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= CERTIFICATES ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-bold">Certificates</div>
          <div className="card-body">
            <table className="table table-bordered table-hover mb-0">
              <thead>
                <tr>
                  <th>Employee Name</th>
                  <th>Certificate</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>React Basics Certificate</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Download</button>
                  </td>
                </tr>
                <tr>
                  <td>Michael Brown</td>
                  <td>React Basics Certificate</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Download</button>
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

export default TrainingDetail;
