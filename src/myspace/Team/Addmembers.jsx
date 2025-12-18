import React from 'react';

const Addmembers = () => {
  return (
    <main className="p-4 bg-light min-vh-100">
      <div className="container-fluid">

        {/* HEADER */}
      

        {/* VIEW MEMBER DRAWER (UI ONLY) */}
        <div className="card mt-4">
          <div className="card-header fw-bold">
            Member Details (Preview)
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-6">
                <p><strong>Name:</strong> Ravi Kumar</p>
                <p><strong>Employee ID:</strong> EMP-1023</p>
                <p><strong>Department:</strong> Tech</p>
                <p><strong>Role:</strong> Frontend Developer</p>
              </div>
              <div className="col-md-6">
                <p><strong>Date of Joining:</strong> 12 Feb 2023</p>
                <p><strong>Exit Date:</strong> —</p>
                <p><strong>Status:</strong> Active</p>
                <p><strong>Reporting Manager:</strong> Sunil Mehta</p>
              </div>
            </div>
          </div>
        </div>

        {/* ADD / EDIT MEMBER FORM (UI ONLY) */}
        <div className="card mt-4">
          <div className="card-header fw-bold">
            Add / Edit Team Member
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-4">
                <input className="form-control" placeholder="Employee Name" />
              </div>
              <div className="col-md-4">
                <input className="form-control" placeholder="Employee ID" />
              </div>
              <div className="col-md-4">
                <select className="form-select">
                  <option>Department</option>
                  <option>Tech</option>
                  <option>HR</option>
                  <option>Sales</option>
                </select>
              </div>

              <div className="col-md-4">
                <input type="date" className="form-control" />
                <small className="text-muted">Date of Joining</small>
              </div>

              <div className="col-md-4">
                <input type="date" className="form-control" />
                <small className="text-muted">Exit Date</small>
              </div>

              <div className="col-md-4">
                <select className="form-select">
                  <option>Status</option>
                  <option>Active</option>
                  <option>Exited</option>
                </select>
              </div>
            </div>

            <div className="mt-3 d-flex gap-2">
              <button className="btn btn-success">Save</button>
              <button className="btn btn-outline-secondary">Cancel</button>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

export default Addmembers;
