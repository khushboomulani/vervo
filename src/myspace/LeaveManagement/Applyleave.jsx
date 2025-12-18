import React, { useState } from "react";


export  function Applyleave() {
 
  return (
    <main className="p-4" style={{ background: "#f5f7fb", minHeight: "100vh" }}>
      <div className="container">
      <h4 className="mb-4">Apply Leave</h4>
        <div className="card shadow-sm mx-auto">
          <div className="card-body">

            {/* STEP 1 – LEAVE TYPE */}
            <div className="alert alert-warning mb-4">
  <h6 className="alert-heading mb-2">Important Leave Rules</h6>
  <ul className="mb-0 ps-3">
    <li>PL needs <strong>3-day advance notice</strong>.</li>
    <li><strong>MTL / PTL</strong> cannot be backdated.</li>
    <li><strong>PL</strong> is not allowed during probation.</li>
    <li><strong>SL &gt; 3 days</strong> requires a mandatory medical certificate.</li>
  </ul>
</div>
            <div className="mb-4">
              <label className="form-label fw-semibold">Leave Type</label>
              <select className="form-select">
                <option>Select Leave Type</option>
                <option>Casual Leave</option>
                <option>Sick Leave</option>
                <option>Privilege Leave</option>
                <option>Bereavement Leave</option>
                <option>Maternity Leave</option>
                <option>Paternity Leave</option>
              </select>
            </div>

            {/* STEP 2 – DATES */}
            <div className="row mb-4">
              <div className="col-md-6">
                <label className="form-label fw-semibold">From Date</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">To Date</label>
                <input type="date" className="form-control" />
              </div>
            </div>

            {/* STEP 3 – REASON */}
            <div className="mb-4">
              <label className="form-label fw-semibold">Reason</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter reason for leave"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Attachment</label>
              <input type="file" className="form-control" />
            </div>

            {/* FOOTER BUTTONS */}
            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-secondary">
                Back
              </button>
              <button className="btn btn-primary">
                Submit
              </button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
export default Applyleave;