import React from 'react';
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, } from "recharts";
  

const Taskdashboard = () => {
    const monthlyData = [
        { month: "Jan", CL: 1, SL: 0, PL: 2, CO: 0 },
        { month: "Feb", CL: 0, SL: 1, PL: 1, CO: 0 },
        { month: "Mar", CL: 2, SL: 0, PL: 0, CO: 1 },
        { month: "Apr", CL: 1, SL: 1, PL: 2, CO: 0 },
      ];
      
    return (
        <main className="p-4 bg-light min-vh-100">
      <div className="container-fluid">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Task Board</h4>
          <Link to="/dashboard/createtask" className="btn btn-primary btn-sm">+ Add Task</Link>
        </div>

        {/* Kanban Board */}
        <div className="row g-3">

          {/* TO DO */}
          <div className="col">
            <div className="card h-100">
              <div className="card-header text-center fw-semibold bg-white">
                To-Do <span className="badge bg-secondary ms-1">2</span>
              </div>
              <div className="card-body">
                <div className="card mb-2 shadow-sm">
                  <div className="card-body p-2">
                    Apply Leave Module
                  </div>
                </div>
                <div className="card mb-2 shadow-sm">
                  <div className="card-body p-2">
                    Design Reports Page
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IN PROGRESS */}
          <div className="col">
            <div className="card h-100">
              <div className="card-header text-center fw-semibold bg-white">
                In Progress <span className="badge bg-primary ms-1">1</span>
              </div>
              <div className="card-body">
                <div className="card mb-2 shadow-sm border-primary">
                  <div className="card-body p-2">
                    Manager Approval Panel
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WAITING */}
          <div className="col">
            <div className="card h-100">
              <div className="card-header text-center fw-semibold bg-white">
                Waiting <span className="badge bg-warning text-dark ms-1">1</span>
              </div>
              <div className="card-body">
                <div className="card mb-2 shadow-sm border-warning">
                  <div className="card-body p-2">
                    HR Policy Confirmation
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COMPLETED */}
          <div className="col">
            <div className="card h-100">
              <div className="card-header text-center fw-semibold bg-white">
                Completed <span className="badge bg-success ms-1">1</span>
              </div>
              <div className="card-body">
                <div className="card mb-2 shadow-sm border-success">
                  <div className="card-body p-2">
                    Login UI Completed
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* OVERDUE */}
          <div className="col">
            <div className="card h-100">
              <div className="card-header text-center fw-semibold bg-white">
                Overdue <span className="badge bg-danger ms-1">1</span>
              </div>
              <div className="card-body">
                <div className="card mb-2 shadow-sm border-danger">
                  <div className="card-body p-2">
                    Payroll Bug Fix
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='row mt-3'>
            <div className='col-md-12'>
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
          <Bar dataKey="CL" fill="#0d6efd" />
          <Bar dataKey="SL" fill="#198754" />
          <Bar dataKey="PL" fill="#ffc107" />
          <Bar dataKey="CO" fill="#dc3545" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
</div>
</div>

        </div>
      </div>
    </main>
    );
}

export default Taskdashboard;
