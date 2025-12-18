import React, { useState } from "react";

const MyTimecard = () => {
  const [activeTab, setActiveTab] = useState("all");

  const renderTable = () => (
    <div className="table-responsive shadow-sm rounded bg-white p-3">
      <table className="table table-bordered align-middle text-center">
        <thead className="table-light">
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>No.</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Working Hours</th>
            <th>Extra Hours</th>
            <th>Date</th>
            <th>Approver Name</th>
            <th>Project</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map((num) => (
            <tr key={num}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{num}</td>
              <td>Doe</td>
              <td>Manager</td>
              <td>8 hr</td>
              <td>0</td>
              <td>12/9/25</td>
              <td>Test</td>
              <td>Banner</td>
              <td>Done</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <main className="flex-grow-1 p-3" style={{ background: "#f5f7fb" }}>
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-12 col-lg-12">
            {/* Header + Search */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="mb-0">My Time Card</h3>
              <div className="input-group" style={{ width: "50%" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Name, Project and Approval..."
                  aria-label="Search"
                />
                <button className="btn btn-primary" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>

            {/* Summary Cards */}
            <div className="row text-center mb-4">
              <div className="col-md-3 col-sm-6">
                <div className="card shadow-sm p-2 border-0 bg-primary text-white hover-effect">
                  <h6>Total Working Hours</h6>
                  <h5>168 hrs</h5>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="card shadow-sm p-2 border-0 bg-warning text-dark hover-effect">
                  <h6>Pending</h6>
                  <h5>3</h5>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="card shadow-sm p-2 border-0 bg-success text-white hover-effect">
                  <h6>Approved</h6>
                  <h5>12</h5>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="card shadow-sm p-2 border-0 bg-danger text-white hover-effect">
                  <h6>Rejected</h6>
                  <h5>1</h5>
                </div>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="card p-3">
              <ul className="nav nav-tabs mb-3">
                {["all", "pending", "approved", "rejected"].map((tab) => (
                  <li className="nav-item" key={tab}>
                    <button
                      className={`nav-link ${
                        activeTab === tab ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Dynamic Tab Content */}
              <div className="tab-content border p-4 rounded bg-light">
                {activeTab === "all" && (
                  <>
                    <h5>All Timesheets</h5>
                    {renderTable()}
                  </>
                )}
                {activeTab === "pending" && (
                  <>
                    <h5>Pending Timesheets</h5>
                    {renderTable()}
                  </>
                )}
                {activeTab === "approved" && (
                  <>
                    <h5>Approved Timesheets</h5>
                    {renderTable()}
                  </>
                )}
                {activeTab === "rejected" && (
                  <>
                    <h5>Rejected Timesheets</h5>
                    {renderTable()}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hover-effect:hover {
          transform: translateY(-3px);
          transition: 0.2s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
      `}</style>
    </main>
  );
};

export default MyTimecard;
