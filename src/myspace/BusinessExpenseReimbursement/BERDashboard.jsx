import React from 'react';

const BERDashboard = () => {
    return (
        <main className="p-4 bg-light min-vh-100">
        <div className="container-fluid">
  
          <h4 className="mb-4">Expense Reimbursement Dashboard</h4>
  
          {/* KPI CARDS */}
          <div className="row g-3 mb-4">
            {["Pending", "Approved", "Paid", "Rejected"].map((kpi, i) => (
              <div className="col-md-3" key={i}>
                <div className="card text-center">
                  <div className="card-body">
                    <h6>{kpi}</h6>
                    <h4 className="fw-bold">12</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* QUICK ACTIONS */}
          <div className="card">
            <div className="card-body d-flex gap-3">
              <button className="btn btn-primary">Create New Claim</button>
              <button className="btn btn-outline-secondary">View My Claims</button>
            </div>
          </div>
  
        </div>
      </main>
    );
}

export default BERDashboard;
