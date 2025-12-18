import React from 'react';
import { NavLink } from "react-router-dom";
const TeamMembers = () => {
    return (
        <main className="flex-grow-1 p-3" style={{ background: "#f5f7fb" }}>
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-12 col-lg-12">
            <div className='d-flex justify-content-between align-items-center mb-3'>
            <h3 className="mb-10">Team Members</h3>
            <NavLink to="/dashboard/addmembers" className="">   <button className="btn btn-primary btn-sm">
            + Add Team Member
          </button>
          </NavLink>  </div>
       

        {/* FILTERS */}
        <div className="card mb-4">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-3">
                <input className="form-control" placeholder="Search name" />
              </div>
              <div className="col-md-3">
                <select className="form-select">
                  <option>Status</option>
                  <option>Active</option>
                  <option>Exited</option>
                </select>
              </div>
              <div className="col-md-3">
                <select className="form-select">
                  <option>Department</option>
                  <option>Tech</option>
                  <option>HR</option>
                  <option>Sales</option>
                </select>
              </div>
              <div className="col-md-3">
                <button className="btn btn-outline-primary w-100">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* TEAM TABLE */}
        <div className="card">
          <div className="card-body">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Employee</th>
                  <th>Role</th>
                  <th>Department</th>
                  <th>Joining Date</th>
                  <th>Exit Date</th>
                  <th>Status</th>
                  <th width="180">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Ravi Kumar</strong><br />
                    <small className="text-muted">EMP-1023</small>
                  </td>
                  <td>Frontend Developer</td>
                  <td>Tech</td>
                  <td>12 Feb 2023</td>
                  <td>—</td>
                  <td>
                    <span className="badge bg-success">Active</span>
                  </td>
                  <td>
                    <button className="btn btn-outline-primary btn-sm me-2" data-bs-toggle="modal" data-bs-target="#edittem">
                      <i className='fa fa-eye'></i>
                    </button>
                    <div class="modal fade" id="edittem" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Member Details </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
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
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>
                    <button className="btn btn-outline-warning btn-sm me-2" >
                    <i className='fa fa-pencil'></i>
                    </button>

                    <button className="btn btn-outline-danger btn-sm">
                    <i className='fa fa-times'></i>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <strong>Anita Verma</strong><br />
                    <small className="text-muted">EMP-1012</small>
                  </td>
                  <td>HR Executive</td>
                  <td>HR</td>
                  <td>05 Aug 2021</td>
                  <td>30 Jun 2024</td>
                  <td>
                    <span className="badge bg-secondary">Exited</span>
                  </td>
                  <td>
                  <NavLink to="/dashboard/viewprofile" className="">   <button className="btn btn-outline-primary btn-sm me-2" >
                      <i className='fa fa-eye' />
                    </button></NavLink>
                    <button className="btn btn-outline-warning btn-sm me-2">
                    <i className='fa fa-pencil' />
                    </button>
                    <button className="btn btn-outline-danger btn-sm">
                    <i className='fa fa-times' />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
           </div>
           </div>
           </div>
           </main>   
    );
}

export default TeamMembers;
