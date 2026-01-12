import React from "react";

const TrainingDashboard = () => {
  return (
    <main className="bg-light min-vh-100 p-4">
      <div className="container-fluid">

        {/* ================= HEADER ================= */}
        <div className="mb-4">
          <h3>Training Dashboard</h3>
          <p className="text-muted">
            Overview of upcoming and mandatory trainings
          </p>
        </div>

        {/* ================= UPCOMING TRAININGS ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-bold">Upcoming Trainings</div>
          <div className="card-body">
            <table className="table table-bordered table-hover mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Training Title</th>
                  <th>Trainer</th>
                  <th>Schedule</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>React Basics</td>
                  <td>John Doe</td>
                  <td>15 Jan 2026 - 20 Jan 2026</td>
                  <td>Scheduled</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Advanced Node.js</td>
                  <td>Jane Smith</td>
                  <td>18 Jan 2026 - 25 Jan 2026</td>
                  <td>Scheduled</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Soft Skills Training</td>
                  <td>Michael Brown</td>
                  <td>22 Jan 2026 - 28 Jan 2026</td>
                  <td>Scheduled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= MANDATORY TRAININGS ================= */}
        <div className="card shadow-sm mb-4">
          <div className="card-header fw-bold">Mandatory Trainings</div>
          <div className="card-body">
            <table className="table table-bordered table-hover mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Training Title</th>
                  <th>Trainer</th>
                  <th>Deadline</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Compliance & Ethics</td>
                  <td>HR Team</td>
                  <td>31 Jan 2026</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Workplace Safety</td>
                  <td>Safety Officer</td>
                  <td>28 Feb 2026</td>
                  <td>In Progress</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Data Security Awareness</td>
                  <td>IT Security</td>
                  <td>15 Jan 2026</td>
                  <td>Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
};

export default TrainingDashboard;
