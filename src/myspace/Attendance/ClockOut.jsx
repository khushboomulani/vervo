import React from "react";

export default function ClockOutPanel() {
  return (
    <main className="p-4 bg-light min-vh-100">
      <div className="container-fluid">
        <h4 className="mb-4">Clock-Out Panel</h4>
<div className="row">
    <div className="col-md-6">
    <div className="card mb-4 text-center">
          <div className="card-body">
            <h6>End-of-Day Punch</h6>
            <p><strong>Punch In:</strong> 09:30 AM</p>
            <p><strong>Current Time:</strong> 06:15 PM</p>
            <p><strong>Total Hours:</strong> 8h 45m</p>

            <button className="btn btn-danger btn-lg mt-3">
              Punch Out
            </button>
          </div>
        </div>
    </div>
    <div className="col-md-6">
    <div className="card">
          <div className="card-body">
            <h6>Today’s Summary</h6>
            <ul className="list-group">
              <li className="list-group-item">Regular Hours: 8h</li>
              <li className="list-group-item">Overtime: 45m</li>
              <li className="list-group-item">Late Arrival: 0</li>
            </ul>
          </div>
        </div>
    </div>
</div>
    

       
      </div>
    </main>
  );
}
