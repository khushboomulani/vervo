import React from 'react';
import { useState } from "react";

const TeamTimecard = () => {
   const [activeTab, setActiveTab] = useState("all");
    return (
      <main className="flex-grow-1 p-3" style={{ background: "#f5f7fb" }}>
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-12 col-lg-12">
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
                  <i className="fa fa-search"></i> {/* Bootstrap Icon */}
                </button>
              </div>
            </div>
            {/* Summary Cards */}
            <div className="row text-center mb-4 work">
              <div className="col-md-3">
                <div className="card shadow-sm p-1 border-0 bg-primary text-white">
                  <h6>Total Working Hours</h6>
                  <h5>168 hrs</h5>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow-sm p-1 border-0 bg-warning text-dark">
                  <h6>Pending</h6>
                  <h5>3</h5>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow-sm p-1 border-0 bg-success text-white">
                  <h6>Approved</h6>
                  <h5>12</h5>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow-sm p-1 border-0 bg-danger text-white">
                  <h6>Rejected</h6>
                  <h5>1</h5>
                </div>
              </div>
            </div>

            <div className="card p-3">
              {/* Tabs */}
              <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === "all" ? "active" : ""}`}
                    onClick={() => setActiveTab("all")}
                  >
                    All
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "pending" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("pending")}
                  >
                    Pending
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "approved" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("approved")}
                  >
                    Approved
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "rejected" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("rejected")}
                  >
                    Rejected
                  </button>
                </li>
              </ul>

              {/* Tab Content */}
              <div className="tab-content border p-4 rounded bg-light">
                {activeTab === "all" && (
                  <div>
                    <h5>All Timesheets</h5>
                    <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Working Hour	</th>
                        <th>Extra Hours	</th>
                        <th>Date</th>
                        <th>Approver Name	</th>
                        <th>Project</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Doe</td>
                        <td>Manager</td>
                        <td>8 hr</td>
                        <td>0</td>
                        <td>12/9/25</td>
                        <td>Test</td>
                        <td>Banner</td>
                        <td>Done</td>
                      </tr>
                      <tr>
                      <td>1</td>
                        <td>Doe</td>
                        <td>Manager</td>
                        <td>8 hr</td>
                        <td>0</td>
                        <td>12/9/25</td>
                        <td>Test</td>
                        <td>Banner</td>
                        <td>Done</td>
                      </tr>
                      <tr>
                      <td>1</td>
                        <td>Doe</td>
                        <td>Manager</td>
                        <td>8 hr</td>
                        <td>0</td>
                        <td>12/9/25</td>
                        <td>Test</td>
                        <td>Banner</td>
                        <td>Done</td>
                      </tr>
                      <tr>
                      <td>1</td>
                        <td>Doe</td>
                        <td>Manager</td>
                        <td>8 hr</td>
                        <td>0</td>
                        <td>12/9/25</td>
                        <td>Test</td>
                        <td>Banner</td>
                        <td>Done</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                )}

                {activeTab === "pending" && (
                  <div>
                    <h5>Pending Timesheets</h5>
                    <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Working Hour	</th>
                        <th>Extra Hours	</th>
                        <th>Date</th>
                        <th>Approver Name	</th>
                        <th>Project</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Doe</td>
                        <td>Manager</td>
                        <td>8 hr</td>
                        <td>0</td>
                        <td>12/9/25</td>
                        <td>Test</td>
                        <td>Banner</td>
                        <td>Done</td>
                      </tr>
                      <tr>
                      <td>1</td>
                        <td>Doe</td>
                        <td>Manager</td>
                        <td>8 hr</td>
                        <td>0</td>
                        <td>12/9/25</td>
                        <td>Test</td>
                        <td>Banner</td>
                        <td>Done</td>
                      </tr>
                      <tr>
                      <td>1</td>
                        <td>Doe</td>
                        <td>Manager</td>
                        <td>8 hr</td>
                        <td>0</td>
                        <td>12/9/25</td>
                        <td>Test</td>
                        <td>Banner</td>
                        <td>Done</td>
                      </tr>
                      <tr>
                      <td>1</td>
                        <td>Doe</td>
                        <td>Manager</td>
                        <td>8 hr</td>
                        <td>0</td>
                        <td>12/9/25</td>
                        <td>Test</td>
                        <td>Banner</td>
                        <td>Done</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                )}

                {activeTab === "approved" && (
                  <div>
                    <h5>Approved Timesheets</h5>
                    <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Working Hour	</th>
                        <th>Extra Hours	</th>
                        <th>Date</th>
                        <th>Approver Name	</th>
                        <th>Project</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Doe</td>
                        <td>Manager</td>
                        <td>8 hr</td>
                        <td>0</td>
                        <td>12/9/25</td>
                        <td>Test</td>
                        <td>Banner</td>
                        <td>Done</td>
                      </tr>
                      <tr>
                      <td>1</td>
                        <td>Doe</td>
                        <td>Manager</td>
                        <td>8 hr</td>
                        <td>0</td>
                        <td>12/9/25</td>
                        <td>Test</td>
                        <td>Banner</td>
                        <td>Done</td>
                      </tr>
                      <tr>
                      <td>1</td>
                        <td>Doe</td>
                        <td>Manager</td>
                        <td>8 hr</td>
                        <td>0</td>
                        <td>12/9/25</td>
                        <td>Test</td>
                        <td>Banner</td>
                        <td>Done</td>
                      </tr>
                      <tr>
                      <td>1</td>
                        <td>Doe</td>
                        <td>Manager</td>
                        <td>8 hr</td>
                        <td>0</td>
                        <td>12/9/25</td>
                        <td>Test</td>
                        <td>Banner</td>
                        <td>Done</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                )}

                {activeTab === "rejected" && (
                  <div>
                    <h5>Rejected Timesheets</h5>
                    <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Working Hour	</th>
                        <th>Extra Hours	</th>
                        <th>Date</th>
                        <th>Approver Name	</th>
                        <th>Project</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Doe</td>
                        <td>Manager</td>
                        <td>8 hr</td>
                        <td>0</td>
                        <td>12/9/25</td>
                        <td>Test</td>
                        <td>Banner</td>
                        <td>Done</td>
                      </tr>
                      <tr>
                      <td>1</td>
                        <td>Doe</td>
                        <td>Manager</td>
                        <td>8 hr</td>
                        <td>0</td>
                        <td>12/9/25</td>
                        <td>Test</td>
                        <td>Banner</td>
                        <td>Done</td>
                      </tr>
                      <tr>
                      <td>1</td>
                        <td>Doe</td>
                        <td>Manager</td>
                        <td>8 hr</td>
                        <td>0</td>
                        <td>12/9/25</td>
                        <td>Test</td>
                        <td>Banner</td>
                        <td>Done</td>
                      </tr>
                      <tr>
                      <td>1</td>
                        <td>Doe</td>
                        <td>Manager</td>
                        <td>8 hr</td>
                        <td>0</td>
                        <td>12/9/25</td>
                        <td>Test</td>
                        <td>Banner</td>
                        <td>Done</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small hover effect for cards */}
      <style>{`
        .hover-effect:hover {
          transform: translateY(-3px);
          transition: 0.2s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
      `}</style>
    </main>
    );
}

export default TeamTimecard;
