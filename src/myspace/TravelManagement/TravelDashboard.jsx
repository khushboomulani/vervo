import React from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const TravelDashboard = () => {
    const pieData = [
        { name: "Within SLA", value: 83 },
        { name: "Delayed", value: 12 },
        { name: "Escalated", value: 5 }
        ];
        
        
        const barData = [
        { name: "Project A", delays: 4, escalations: 1 },
        { name: "Project B", delays: 6, escalations: 3 },
        { name: "Project C", delays: 2, escalations: 1 }
        ];
        
        
        const COLORS = ["#198754", "#ffc107", "#dc3545"];
  return (
    <main className="flex-grow-1 p-3" style={{ background: "#f5f7fb" }}>
      <div className="container-fluid">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
          <h3 className="mb-0">Travel Dashboard</h3>
        </div>
        <div className="row g-3 mb-4">
<div className="col-md-3">
<div className="card shadow-sm rounded-3">
<div className="card-body">
<p className="text-muted mb-1">Total Trips</p>
<h4 className="fw-bold">120</h4>
</div>
</div>
</div>
<div className="col-md-3">
<div className="card shadow-sm rounded-3">
<div className="card-body">
<p className="text-muted mb-1">Completed Trips</p>
<h4 className="fw-bold text-success">85</h4>
</div>
</div>
</div>
<div className="col-md-3">
<div className="card shadow-sm rounded-3">
<div className="card-body">
<p className="text-muted mb-1">In Progress</p>
<h4 className="fw-bold text-primary">25</h4>
</div>
</div>
</div>
<div className="col-md-3">
<div className="card shadow-sm rounded-3 border-start border-4 border-danger">
<div className="card-body">
<p className="text-muted mb-1">Overdue Approvals</p>
<h4 className="fw-bold text-danger">10</h4>
</div>
</div>
</div>
</div>
        {/* SLA Table */}
        <div className="card shadow-sm rounded-3 mb-4">
            
          <div className="card-body p-4">
            <h5 className="fw-semibold mb-3">SLA Metrics</h5>

            <div className="table-responsive">
              <table className="table table-bordered align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Date</th>
                    <th>Project</th>
                    <th>Traveller</th>
                    <th className="text-center">Approval Time (hrs)</th>
                    <th className="text-center">SLA Status</th>
                    <th className="text-center">Escalation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>02 Sep 2025</td>
                    <td>Project A</td>
                    <td>John Doe</td>
                    <td className="text-center">6</td>
                    <td className="text-center">
                      <span className="badge bg-warning text-dark">
                        Delayed
                      </span>
                    </td>
                    <td className="text-center">No</td>
                  </tr>

                  <tr>
                    <td>07 Sep 2025</td>
                    <td>Project B</td>
                    <td>Jane Smith</td>
                    <td className="text-center">10</td>
                    <td className="text-center">
                      <span className="badge bg-danger">
                        Breached
                      </span>
                    </td>
                    <td className="text-center">Yes</td>
                  </tr>

                  <tr>
                    <td>11 Sep 2025</td>
                    <td>Project C</td>
                    <td>Rahul Verma</td>
                    <td className="text-center">3</td>
                    <td className="text-center">
                      <span className="badge bg-success">
                        Within SLA
                      </span>
                    </td>
                    <td className="text-center">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="row g-3 mb-4">
  <div className="col-md-8">
    <div className="row">
          {/* Approval Delays */}
          <div className="col-md-12">
            <div className="card shadow-sm rounded-3 p-3">
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-medium">Approval Delays</span>
                <span className="text-muted">12 / 100 Requests</span>
              </div>
              <div className="progress" style={{ height: 10 }}>
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "12%" }}
                />
              </div>
            </div>
          </div>

          {/* Escalations */}
          <div className="col-md-12 mt-4">
            <div className="card shadow-sm rounded-3 p-3">
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-medium">Escalations</span>
                <span className="text-muted">5 / 100 Requests</span>
              </div>
              <div className="progress" style={{ height: 10 }}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "5%" }}
                />
              </div>
            </div>
          </div>
    </div>
  </div>
  <div className="col-md-4">
      {/* List-based Summary */}
      <div className="list-group shadow-sm rounded-3">

<div className="list-group-item d-flex justify-content-between align-items-center">
  <div>
    <div className="fw-medium">Requests Within SLA</div>
    <small className="text-muted">Approved on time</small>
  </div>
  <span className="badge bg-success rounded-pill">83</span>
</div>

<div className="list-group-item d-flex justify-content-between align-items-center">
  <div>
    <div className="fw-medium">Delayed Approvals</div>
    <small className="text-muted">Exceeded SLA threshold</small>
  </div>
  <span className="badge bg-warning text-dark rounded-pill">
    12
  </span>
</div>

<div className="list-group-item d-flex justify-content-between align-items-center">
  <div>
    <div className="fw-medium">Escalations Raised</div>
    <small className="text-muted">Critical SLA breaches</small>
  </div>
  <span className="badge bg-danger rounded-pill">5</span>
</div>

</div>
  </div>
        

        </div>

      
        <div className="row g-4 mt-4">
{/* SLA Distribution */}
<div className="col-12 col-md-5">
<div className="card shadow-sm rounded-3 h-100">
<div className="card-body">
<h6 className="fw-semibold mb-3">SLA Status Distribution</h6>
<ResponsiveContainer width="100%" height={250}>
<PieChart>
<Pie
data={pieData}
dataKey="value"
nameKey="name"
innerRadius={60}
outerRadius={90}
>
{pieData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={COLORS[index]} />
))}
</Pie>
<Tooltip />
</PieChart>
</ResponsiveContainer>
</div>
</div>
</div>


{/* Project-wise SLA Issues */}
<div className="col-12 col-md-7">
<div className="card shadow-sm rounded-3 h-100">
<div className="card-body">
<h6 className="fw-semibold mb-3">Project-wise SLA Issues</h6>
<ResponsiveContainer width="100%" height={250}>
<BarChart data={barData}>
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Bar dataKey="delays" fill="#ffc107" />
<Bar dataKey="escalations" fill="#dc3545" />
</BarChart>
</ResponsiveContainer>
</div>
</div>
</div>
</div>

      </div>
    </main>
  );
};

export default TravelDashboard;
