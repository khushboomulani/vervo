import React from "react"; 
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const slaData = [
    { project: "Project A", delays: 2, escalations: 0 },
    { project: "Project B", delays: 6, escalations: 1 },
    { project: "Project C", delays: 1, escalations: 0 },
  ];

const TripReports = () =>
     { 
        const expenseTrendData = [
            { date: "01 Sep", cost: 45000 },
            { date: "05 Sep", cost: 60000 },
            { date: "10 Sep", cost: 35000 },
          ];
          
    return (
    <main className="flex-grow-1 p-3" style={{ background: "#f5f7fb" }}>
        <div className="container-fluid">
    
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                <h3 className="mb-0">Travel Report</h3>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card shadow-sm rounded-3">
                        <div className="card-body p-4">
                            {/* Header */}
                            <div className="d-flex align-items-center mb-4">
                                <h5 className="mb-0 fw-semibold">Report Filters</h5>
                            </div>
    
    
                            {/* Filters */}
                            <div className="row g-3 align-items-center">
                                {/* Project */}
                                <div className="col-3">
                                    <div className="row align-items-center">
                                        <div className="col-sm-12">
                                            <select className="form-select ">
                                                <option>Select Project</option>
                                                <option>Project A</option>
                                                <option>Project B</option>
                                                <option>Project C</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
    
    
                                {/* Date */}
                                <div className="col-2">
                                    <div className="row align-items-center">
                                        <div className="col-sm-12">
                                            <input type="date" className="form-control " />
                                        </div>
                                    </div>
                                </div>
    
    
                                {/* Traveller */}
                                <div className="col-md-3">
                                    <div className="row align-items-center">
                                        <div className="col-sm-12">
                                            <select className="form-select ">
                                                <option>Select Traveller</option>
                                                <option>John Doe</option>
                                                <option>Jane Smith</option>
                                                <option>Rahul Verma</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
    
    
                                {/* Status */}
                                <div className="col-2">
                                    <div className="row align-items-center">
                                        <div className="col-sm-12">
                                            <select className="form-select ">
                                                <option>Select Status</option>
                                                <option>All</option>
                                                <option>Approved</option>
                                                <option>Pending</option>
                                                <option>Cancelled</option>
                                                <option>Completed</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="row align-items-center">
                                        <div className="col-sm-12">
                                            <button className="btn btn-primary  px-4">
                                                Apply Filters
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
    
    
    
                            <div className="table-responsive">
                                <table className="table table-bordered align-middle mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Project</th>
                                            <th>Date</th>
                                            <th>Traveller</th>
                                            <th>Status</th>
                                            <th className="text-end">Total Cost</th>
                                            <th className="text-center">Approval Delay</th>
                                            <th className="text-center">Escalation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Project A</td>
                                            <td>12 Sep 2025</td>
                                            <td>John Doe</td>
                                            <td>
                                                <span className="badge bg-success">Approved</span>
                                            </td>
                                            <td className="text-end">₹25,000</td>
                                            <td className="text-center">2 hrs</td>
                                            <td className="text-center">No</td>
                                        </tr>
    
    
                                        <tr>
                                            <td>Project B</td>
                                            <td>15 Sep 2025</td>
                                            <td>Jane Smith</td>
                                            <td>
                                                <span className="badge bg-warning text-dark">Pending</span>
                                            </td>
                                            <td className="text-end">₹18,500</td>
                                            <td className="text-center">6 hrs</td>
                                            <td className="text-center">Yes</td>
                                        </tr>
    
    
                                        <tr>
                                            <td>Project C</td>
                                            <td>18 Sep 2025</td>
                                            <td>Rahul Verma</td>
                                            <td>
                                                <span className="badge bg-danger">Cancelled</span>
                                            </td>
                                            <td className="text-end">₹0</td>
                                            <td className="text-center">—</td>
                                            <td className="text-center">No</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* Footer */}
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <small className="text-muted">Showing 1–3 of 3 records</small>
                                <div className="btn-group">
                                    <button className="btn btn-outline-secondary btn-sm">Previous</button>
                                    <button className="btn btn-outline-secondary btn-sm">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-sm rounded-3 mt-4">
                        <div className="card-body p-3">
                            <div className="row g-3 mb-4">
                                <div className="col-12 col-md-4">
                                    <div className="card shadow-sm rounded-3 ">
                                        <div className="card-body p-3 bg-primary text-white">
                                            <p className=" mb-1">Total Expense</p>
                                            <h4 className="fw-bold mb-0">₹ 2,40,000</h4>
                                            <small className="">All projects</small>
                                        </div>
                                    </div>
                                </div>
    
    
                                <div className="col-12 col-md-4">
                                    <div className="card shadow-sm rounded-3 ">
                                        <div className="card-body p-3 bg-success text-white">
                                            <p className=" mb-1">Average Cost</p>
                                            <h4 className="fw-bold mb-0">₹ 20,000</h4>
                                            <small className="">Per project</small>
                                        </div>
                                    </div>
                                </div>
    
    
                                <div className="col-12 col-md-4">
                                    <div className="card shadow-sm rounded-3 ">
                                        <div className="card-body p-3 bg-warning text-white">
                                            <p className="mb-1">Cost per Trip</p>
                                            <h4 className="fw-bold mb-0">₹ 8,000</h4>
                                            <small className="">Average per trip</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow-sm rounded-3">
                                <div className="card-body p-4">
                                    <h5 className="fw-semibold mb-3">Date-wise Expense Analysis</h5>
    
    
                                    <div className="table-responsive">
                                        <table className="table table-bordered align-middle mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Project</th>
                                                    <th className="text-end">Total Cost</th>
                                                    <th className="text-end">Avg Cost</th>
                                                    <th className="text-end">Cost per Trip</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>01 Sep 2025</td>
                                                    <td>Project A</td>
                                                    <td className="text-end">₹ 45,000</td>
                                                    <td className="text-end">₹ 15,000</td>
                                                    <td className="text-end">₹ 7,500</td>
                                                </tr>
                                                <tr>
                                                    <td>05 Sep 2025</td>
                                                    <td>Project B</td>
                                                    <td className="text-end">₹ 60,000</td>
                                                    <td className="text-end">₹ 20,000</td>
                                                    <td className="text-end">₹ 10,000</td>
                                                </tr>
                                                <tr>
                                                    <td>10 Sep 2025</td>
                                                    <td>Project C</td>
                                                    <td className="text-end">₹ 35,000</td>
                                                    <td className="text-end">₹ 17,500</td>
                                                    <td className="text-end">₹ 8,750</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                {/* Summary Cards */}
                                <div className="row g-3 mb-4">
                                    <div className="col-12 col-md-4">
                                        <div className="card shadow-sm rounded-3 h-100">
                                            <div className="card-body p-4">
                                                <p className="text-muted mb-1">Total Expense</p>
                                                <h4 className="fw-bold mb-0">₹ 2,40,000</h4>
                                                <small className="text-muted">All projects</small>
                                            </div>
                                        </div>
                                    </div>
    
    
                                    <div className="col-12 col-md-4">
                                        <div className="card shadow-sm rounded-3 h-100">
                                            <div className="card-body p-4">
                                                <p className="text-muted mb-1">Average Cost</p>
                                                <h4 className="fw-bold mb-0">₹ 20,000</h4>
                                                <small className="text-muted">Per project</small>
                                            </div>
                                        </div>
                                    </div>
    
    
                                    <div className="col-12 col-md-4">
                                        <div className="card shadow-sm rounded-3 h-100">
                                            <div className="card-body p-4">
                                                <p className="text-muted mb-1">Cost per Trip</p>
                                                <h4 className="fw-bold mb-0">₹ 8,000</h4>
                                                <small className="text-muted">Average per trip</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                        </div>
    
                    </div>
                    
                    <div className="card shadow-sm rounded-3 mt-4">
    <div className="card-body p-4">
      <h5 className="fw-semibold mb-3">Expense Trend (Date-wise)</h5>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={expenseTrendData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="cost"
            stroke="#0d6efd"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
  <div className="card shadow-sm rounded-3 mt-4">
    <div className="card-body p-4">
      <h5 className="fw-semibold mb-3">SLA Performance</h5>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={slaData}>
          <XAxis dataKey="project" />
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
     export default TripReports;