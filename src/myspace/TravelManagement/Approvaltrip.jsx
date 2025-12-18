import React, { useState } from "react";
import { CgOverflow } from "react-icons/cg";

const Approvaltrip = () => {
  const [activeTab, setActiveTab] = useState("Manager Approval");

  const data = [
    {
      id: 1,
      employee: "Amit Shah",
      tripType: "Official",
      projectCode: "ALP-001",
      purpose: "Hoardings",
      dates: "12/12/25 - 05/01/26",
      origin: "Mumbai",
      destination: "Delhi",
      mode: "Flight",
      vendor: "Indigo",
      budget: 25000,
      advanceAmount: 10000,
      advanceReason: "Travel booking",
      status: "pending", // pending | approved | rejected
      approvalLevel: "Manager Approval"
    },
    {
      id: 2,
      employee: "Sara Khan",
      tripType: "Official",
      projectCode: "BET-002",
      purpose: "Client Meeting",
      dates: "10/01/26 - 12/01/26",
      origin: "Pune",
      destination: "Bangalore",
      mode: "Train",
      vendor: "IRCTC",
      budget: 12000,
      advanceAmount: 0,
      advanceReason: "-",
      status: "approved",
      approvalLevel: "Project Manager Approval"
    }
  ];
  

  const getBadgeClass = (status) => {
    switch (status) {
      case "approved":
        return "bg-success";
      case "pending":
        return "bg-warning text-dark";
      case "rejected":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  };

  const renderTable = () => {
    const filtered = data.filter(
      (item) => item.approvalLevel === activeTab
    );
  
    return (
      <div className="table-scroll table-responsive" >
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>Employee</th>
              <th className="text-nowrap">Trip Type</th>
              <th className="text-nowrap">Project Code</th>
              <th>Purpose</th>
              <th>Dates</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Mode</th>
              <th>Vendor</th>
              <th>Budget</th>
              <th className="text-nowrap">Advance Amt</th>
              <th className="text-nowrap">Advance Reason</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
  
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id}>
                <td>{item.employee}</td>
                <td>{item.tripType}</td>
                <td>{item.projectCode}</td>
                <td>{item.purpose}</td>
                <td>{item.dates}</td>
                <td>{item.origin}</td>
                <td>{item.destination}</td>
                <td>{item.mode}</td>
                <td>{item.vendor}</td>
                <td>₹{item.budget}</td>
                <td>₹{item.advanceAmount}</td>
                <td>{item.advanceReason}</td>
                <td>
                  <span className={`badge ${getBadgeClass(item.status)}`}>
                    {item.status.toUpperCase()}
                  </span>
                </td>
                <td>
                <div class="form-check form-switch d-flex align-items-center gap-2">
  <input
    class="form-check-input"
    type="checkbox"
    role="switch"
  />
  <label class="form-check-label fw-semibold text-warning">
    Pending
  </label>
</div>
  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

  return (
    <>
    
  
    <main className="flex-grow-1 p-3" style={{ background: "#f5f7fb" }}>
      <div className="container-fluid">
      <h4>Approval Trip</h4>
        <div className="card p-3">

          {/* Tabs */}
          <ul className="nav nav-tabs mb-3">
            {[
                "Manager Approval",
                "Project Manager Approval",
                "Finance Approval"
            ].map((tab) => (
                <li className="nav-item" key={tab}>
                <button
                    className={`nav-link ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
                </li>
            ))}
            </ul>


          {/* Content */}
          <div className="border p-3 rounded bg-light">
            <h5 className="mb-3">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} 
            </h5>
            {renderTable()}
          </div>

        </div>
      </div>
    </main>
    </>
  );
};

export default Approvaltrip;
