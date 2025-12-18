import React, { useState } from "react";


export  function Approvalleave() {
 
  return (
    <main className="p-4" style={{ background: "#f5f7fb", minHeight: "100vh" }}>
      <div className="container">
   

      <h4 className="mb-4">Approve Leave</h4>
      <div className="card">
<div className="card-body">
<div className="row g-3">
<div className="col-md-3">
<label className="form-label">Department</label>
<select className="form-select">
<option>All</option>
<option>Sales</option>
<option>HR</option>
<option>Tech</option>
</select>
</div>
<div className="col-md-3">
<label className="form-label">Leave Type</label>
<select className="form-select">
<option>All</option>
<option>CL</option>
<option>SL</option>
<option>PL</option>
<option>MTL</option>
<option>PTL</option>
</select>
</div>
<div className="col-md-3">
<label className="form-label">From Date</label>
<input type="date" className="form-control" />
</div>
<div className="col-md-3">
<label className="form-label">To Date</label>
<input type="date" className="form-control" />
</div>
</div>
<br></br>
<h6 className="mb-3">Pending Leave Requests</h6>
<div className="table-responsive">
<table className="table table-hover table-bordered align-middle">
<thead className="table-light">
<tr>
<th>Employee</th>
<th>Department</th>
<th>Leave Type</th>
<th>Dates</th>
<th>Status</th>
<th className="text-end">Action</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<strong>Rahul Sharma</strong>
<div className="text-muted small">EMP1023</div>
</td>
<td>Sales</td>
<td><span className="badge bg-warning">PL</span></td>
<td>12 Jul – 15 Jul</td>
<td><span className="badge bg-secondary">Pending</span></td>
<td className="text-end">
<button className="btn btn-sm btn-outline-primary">
View
</button>
</td>
</tr>
<tr>
<td>
<strong>Anita Verma</strong>
<div className="text-muted small">EMP1107</div>
</td>
<td>HR</td>
<td><span className="badge bg-info">MTL</span></td>
<td>01 Aug – 30 Sep</td>
<td><span className="badge bg-secondary">Pending</span></td>
<td className="text-end">
<button className="btn btn-sm btn-outline-primary">
View
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div className="row">
    <div className="col-md-4">
    <div className="card mt-4">
<div className="card-body">
<h6 className="mb-3">Request Details</h6>


<div className="row mb-3">
<div className="col-md-4">
<strong>Employee:</strong> Rahul Sharma
</div>
<div className="col-md-4">
<strong>Leave Type:</strong> PL
</div>
<div className="col-md-4">
<strong>Dates:</strong> 12 Jul – 15 Jul
</div>
</div>


<div className="mb-3">
<strong>Reason:</strong>
<p className="mb-0 text-muted">Family function</p>
</div>


<div className="mb-3">
<strong>Proof Documents:</strong>
<div>
<button className="btn btn-link p-0">View Attachment</button>
</div>
</div>


<div className="mb-3">
<strong>Employee Leave History:</strong>
<ul className="small text-muted">
<li>CL – Jan (2 days)</li>
<li>SL – Mar (1 day)</li>
<li>PL – Apr (5 days)</li>
</ul>
</div>


<div className="d-flex gap-2">
<button className="btn btn-success">Approve</button>
<button className="btn btn-danger">Reject</button>
<button className="btn btn-outline-secondary">More Info</button>
</div>
</div>
</div>
    </div>
</div>




      </div>
    </main>
  );
}
export default Approvalleave;