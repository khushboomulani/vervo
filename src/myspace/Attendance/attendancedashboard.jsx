import React from "react";

export default function AttendanceDashboard() {
  return (
    <main className="p-4 bg-light min-vh-100">
      <div className="container-fluid">

        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Attendance Dashboard</h4>
          <button className="btn btn-primary btn-sm">
            View Full Attendance
          </button>
        </div>

        {/* KPI CARDS */}
        <div className="row g-3 mb-4">
          {[
            { label: "Present Today", value: "120", color: "success" },
            { label: "Absent Today", value: "8", color: "danger" },
            { label: "Late Arrivals", value: "12", color: "warning" },
            { label: "Overtime (Month)", value: "86 hrs", color: "info" },
          ].map((item, i) => (
            <div className="col-md-3" key={i}>
              <div className={`card text-center border-${item.color}`}>
                <div className="card-body">
                  <h6 className="text-muted">{item.label}</h6>
                  <h3 className={`fw-bold text-${item.color}`}>
                    {item.value}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* STATUS + SHIFT */}
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="mb-3">Today's Status</h6>
                <p><strong>Status:</strong> Clocked In</p>
                <p><strong>Punch In:</strong> 9:42 AM</p>
                <p><strong>Working Hours:</strong> 6h 18m</p>

                <div className="d-flex gap-2 mt-3">
                  <button className="btn btn-success btn-sm">
                    Punch In
                  </button>
                  <button className="btn btn-danger btn-sm">
                    Punch Out
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="mb-3">My Shift</h6>
                <p><strong>Shift Group:</strong> General</p>
                <p><strong>Timing:</strong> 9:30 AM – 6:30 PM</p>
                <p><strong>Grace Window:</strong> 15 mins</p>

                <button className="btn btn-outline-primary btn-sm mt-2" data-bs-toggle="modal" data-bs-target="#viewshift">
                  View Shift Details
                </button>
              
<div class="modal fade" id="viewshift" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Assigned Shift Group</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <h4 className="mb-4">Shift Overview</h4>

    <p><strong>Group:</strong> General</p>
    <p><strong>Timing:</strong> 09:30 AM – 06:30 PM</p>
    <p><strong>Grace Window:</strong> 15 minutes</p>
    <p><strong>Weekdays:</strong> Mon – Fri</p>
    <hr></hr>
    <h6>Shift Rules / Notes</h6>
    <ul className="bg-warning">
      <li>Late punch beyond grace window counts as late.</li>
      <li>Overtime more than 9 hours automatically added to timesheet.</li>
      <li>Shift swaps require manager approval.</li>
    </ul>
      </div>
     
      <div class="modal-footer">
        
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
              </div>
            </div>
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="card mb-4">
          <div className="card-body">
            <h6 className="mb-3">Quick Actions</h6>
            <div className="d-flex flex-wrap gap-2">
              <button className="btn btn-outline-primary btn-sm">
                Request Regularization
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                View Overtime Summary
              </button>
              <button className="btn btn-outline-info btn-sm">
                Attendance Reports
              </button>
            </div>
          </div>
        </div>

        {/* ALERTS + APPROVALS */}
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="mb-3">Alerts & Notifications</h6>
                <ul className="list-group">
                  <li className="list-group-item text-warning">
                    Late arrival today
                  </li>
                  <li className="list-group-item text-danger">
                    Missing punch on 12 Aug
                  </li>
                  <li className="list-group-item text-info">
                    GPS deviation detected
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="mb-3">Pending Approvals</h6>
                <p><strong>Regularization Requests:</strong> 3</p>
                <p><strong>Attendance Exceptions:</strong> 1</p>

                <button className="btn btn-outline-success btn-sm mt-2">
                  Go to Approval Inbox
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* REPORT PREVIEW */}
        <div className="card">
          <div className="card-body text-center text-muted">
            Attendance trends, late arrivals & GPS reports
            <br />
            <button className="btn btn-link mt-2">
              View Detailed Reports
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
