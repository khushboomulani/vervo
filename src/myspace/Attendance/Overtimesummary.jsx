import React from "react";

export default function OvertimeSummary() {
  return (
    <main className="p-4 bg-light min-vh-100">
      <div className="container-fluid">
        <h4 className="mb-4">Overtime Summary</h4>

        <div className="card mb-4">
          <div className="card-body">
            <h6>Monthly Overtime</h6>
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Employee</th>
                  <th>Total OT Hours</th>
                  <th>Approved</th>
                  <th>Pending</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ravi Kumar</td>
                  <td>12.5 hrs</td>
                  <td>10 hrs</td>
                  <td>2.5 hrs</td>
                </tr>
                <tr>
                  <td>Anita Verma</td>
                  <td>9.0 hrs</td>
                  <td>7 hrs</td>
                  <td>2 hrs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
