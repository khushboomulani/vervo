import React from "react";

export default function PaymentProcessingConsole() {
  return (
    <main className="p-4" style={{ background: "#f5f7fb", minHeight: "100vh" }}>
      <div className="container-fluid">

        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Payment Processing Console</h4>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary btn-sm">
              Export
            </button>
            <button className="btn btn-primary btn-sm">
              Process Payments
            </button>
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="card mb-4">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-3">
                <label className="form-label">Payment Status</label>
                <select className="form-select">
                  <option>All</option>
                  <option>Pending</option>
                  <option>Processed</option>
                  <option>Failed</option>
                </select>
              </div>

              <div className="col-md-3">
                <label className="form-label">Payment Mode</label>
                <select className="form-select">
                  <option>All</option>
                  <option>Bank Transfer</option>
                  <option>UPI</option>
                  <option>Cheque</option>
                </select>
              </div>

              <div className="col-md-3">
                <label className="form-label">Date</label>
                <input type="date" className="form-control" />
              </div>

              <div className="col-md-3 d-flex align-items-end">
                <button className="btn btn-primary w-100">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* PAYMENT QUEUE TABLE */}
        <div className="card">
          <div className="card-body">
            <h6 className="mb-3">Payment Queue</h6>

            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>
                      <input type="checkbox" />
                    </th>
                    <th>Employee</th>
                    <th>Claim ID</th>
                    <th>Amount</th>
                    <th>Payment Mode</th>
                    <th>Status</th>
                    <th>Processed On</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>
                      Rahul Sharma<br />
                      <small className="text-muted">Sales</small>
                    </td>
                    <td>EXP-1024</td>
                    <td>₹18,500</td>
                    <td>Bank Transfer</td>
                    <td>
                      <span className="badge bg-warning text-dark">
                        Pending
                      </span>
                    </td>
                    <td>—</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary">
                        Process
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>
                      Anita Verma<br />
                      <small className="text-muted">HR</small>
                    </td>
                    <td>EXP-1018</td>
                    <td>₹6,200</td>
                    <td>UPI</td>
                    <td>
                      <span className="badge bg-success">
                        Processed
                      </span>
                    </td>
                    <td>12 Jul 2025</td>
                    <td>
                      <button className="btn btn-sm btn-outline-secondary">
                        View
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>
                      Suresh Patel<br />
                      <small className="text-muted">Tech</small>
                    </td>
                    <td>EXP-1012</td>
                    <td>₹9,800</td>
                    <td>Cheque</td>
                    <td>
                      <span className="badge bg-danger">
                        Failed
                      </span>
                    </td>
                    <td>11 Jul 2025</td>
                    <td>
                      <button className="btn btn-sm btn-outline-danger">
                        Retry
                      </button>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
