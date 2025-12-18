import React from "react";

export default function IntegrationStatus() {
    const integrations = [
        {
          module: "Leave",
          field: "leave_sync_flag",
          description: "Automatically mark leave days from attendance.",
          status: "Connected",
        },
        {
          module: "Payroll",
          field: "payroll_sync_hours",
          description: "Sync working hours for salary calculation.",
          status: "Connected",
        },
        {
          module: "Timesheet",
          field: "timesheet_auto_fill",
          description: "Auto-fill timesheet from attendance punches.",
          status: "Partial",
        },
        {
          module: "Travel",
          field: "travel_on_duty",
          description: "Match attendance with approved trips.",
          status: "Connected",
        },
        {
          module: "Business Expense",
          field: "ber_trip_validation",
          description: "Validate expenses against trip days.",
          status: "Disconnected",
        },
      ];
    
      const getBadgeColor = (status) => {
        if (status === "Connected") return "success";
        if (status === "Partial") return "warning";
        if (status === "Disconnected") return "danger";
        return "secondary";
      };
    
  return (
    
    <main className="p-4 bg-light min-vh-100">
    <div className="container-fluid">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0">Attendance Integration Status</h4>
        <span className="badge bg-primary">System Overview</span>
      </div>

      {/* INTEGRATION TABLE */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Module</th>
                  <th>Integration Field</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {integrations.map((item, i) => (
                  <tr key={i}>
                    <td>{item.module}</td>
                    <td><code>{item.field}</code></td>
                    <td>{item.description}</td>
                    <td>
                      <span className={`badge bg-${getBadgeColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FOOTER NOTES */}
      <div className="alert alert-info mt-3">
        <strong>Note:</strong> Integration status affects payroll, leave, timesheet, and expense validations.
        Ensure proper connections before processing data.
      </div>

    </div>
  </main>
  );
}
