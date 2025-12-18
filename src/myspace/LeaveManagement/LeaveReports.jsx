import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

  

export default function LeaveReports() {
    const [activeTab, setActiveTab] = React.useState("ledger");
    const monthlyData = [
        { month: "Jan", CL: 1, SL: 0, PL: 2, CO: 0 },
        { month: "Feb", CL: 0, SL: 1, PL: 1, CO: 0 },
        { month: "Mar", CL: 2, SL: 0, PL: 0, CO: 1 },
        { month: "Apr", CL: 1, SL: 1, PL: 2, CO: 0 },
      ];
      
    
  return (
    <main className="p-4" style={{ background: "#f5f7fb", minHeight: "100vh" }}>
      <div className="container-fluid">

        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Reports</h4>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary btn-sm">Download PDF</button>
            <button className="btn btn-outline-success btn-sm">Download Excel</button>
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="card mb-4">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-3">
                <label className="form-label">Year</label>
                <select className="form-select">
                  <option>2025</option>
                  <option>2024</option>
                  <option>2023</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label">Employee</label>
                <input className="form-control" placeholder="Search employee" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Department</label>
                <select className="form-select">
                  <option>All</option>
                  <option>HR</option>
                  <option>Sales</option>
                  <option>Tech</option>
                </select>
              </div>
              <div className="col-md-3 d-flex align-items-end">
                <button className="btn btn-primary w-100">Apply Filters</button>
              </div>
            </div>
          </div>
        </div>

        {/* SUMMARY CARDS */}
        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h6>Total Leaves</h6>
                <h4 className="fw-bold">42</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h6>Approved</h6>
                <h4 className="fw-bold text-success">34</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h6>Pending</h6>
                <h4 className="fw-bold text-warning">6</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h6>Rejected</h6>
                <h4 className="fw-bold text-danger">2</h4>
              </div>
            </div>
          </div>
        </div>

        {/* LEAVE LEDGER */}
        <div className="card mb-4">
          <div className="card-body">
          <ul className="nav nav-tabs mb-3">
  <li className="nav-item">
    <button
      className={`nav-link ${activeTab === "ledger" ? "active" : ""}`}
      onClick={() => setActiveTab("ledger")}
    >
      Leave Ledger (Year-wise)
    </button>
  </li>
  <li className="nav-item">
    <button
      className={`nav-link ${activeTab === "pending" ? "active" : ""}`}
      onClick={() => setActiveTab("pending")}
    >
      Pending Approvals
    </button>
  </li>
</ul>
{activeTab === "ledger" && (
  <div className="card">
    <div className="card-body">
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Month</th>
              <th>CL</th>
              <th>SL</th>
              <th>PL</th>
              <th>CO</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jan</td>
              <td>1</td>
              <td>0</td>
              <td>2</td>
              <td>0</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Feb</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)}
{activeTab === "pending" && (
  <div className="card">
    <div className="card-body">
    
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>Employee</th>
              <th>Department</th>
              <th>Leave Type</th>
              <th>Dates</th>
              <th>Pending With</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rahul Sharma</td>
              <td>Sales</td>
              <td>PL</td>
              <td>12 Jul – 15 Jul</td>
              <td>Manager</td>
            </tr>
            <tr>
              <td>Anita Verma</td>
              <td>HR</td>
              <td>SL</td>
              <td>05 Aug – 06 Aug</td>
              <td>HR</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)}

           
          </div>
        </div>

        {/* MONTHLY UTILISATION CHART (UI PLACEHOLDER) */}
      {/* MONTHLY UTILISATION CHART */}
<div className="card mb-4">
  <div className="card-body">
    <h6 className="mb-3">Monthly Utilisation</h6>

            <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
                <BarChart data={monthlyData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="CL" fill="#0d6efd" />   {/* Blue */}
                <Bar dataKey="SL" fill="#198754" />   {/* Green */}
                <Bar dataKey="PL" fill="#ffc107" />   {/* Yellow */}
                <Bar dataKey="CO" fill="#dc3545" />   {/* Red */}

                </BarChart>
            </ResponsiveContainer>
            </div>

        </div>
        </div>



      </div>
    </main>
  );
}
