import React from "react";

const Teamtask = () => {
  return (
    <main className="flex-grow-1 p-3" style={{ background: "#f5f7fb" }}>
      <div className="container-fluid">
        
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
          <h3 className="mb-0">Team Task</h3>
        </div>

        <div className="row">
          
          {/* ------------------ CARD 1 (ASSIGNED) ------------------ */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div
              className="p-3 bg-white rounded shadow-sm"
              style={{ borderLeft: "5px solid #0d6efd" }}
            >
              <div className="d-flex justify-content-between align-items-start">
                <h5 className="fw-bold mb-1">
                  <i className="fa fa-user-check me-2" style={{ color: "#0d6efd" }}></i>
                  Task A
                </h5>
                <button
                  className="btn btn-sm btn-outline-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#taskA"
                >
                  View
                </button>
              </div>

              <span className="badge bg-primary mb-2 text-uppercase">Assigned</span>

              <div className="small text-muted">
                <div>Assignee: Rohan</div>
                <div>Created By: Admin</div>
                <div>Priority: High</div>
                <div>Logged Hours: 10</div>
                <div>Estimated Hours: 20</div>
                <div>End Date: 25 Dec 2025</div>
              </div>
            </div>
          </div>

          {/* MODAL 1 */}
          <div className="modal fade" id="taskA">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content p-3">
                <div className="modal-header">
                  <h5 className="modal-title">Task A</h5>
                  <button className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                  <p>Status: Assigned</p>
                  <p>Full details here...</p>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>


          {/* ------------------ CARD 2 (IN PROGRESS) ------------------ */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div
              className="p-3 bg-white rounded shadow-sm"
              style={{ borderLeft: "5px solid #fd7e14" }}
            >
              <div className="d-flex justify-content-between align-items-start">
                <h5 className="fw-bold mb-1">
                  <i className="fa fa-spinner me-2" style={{ color: "#fd7e14" }}></i>
                  Task B
                </h5>
                <button
                  className="btn btn-sm btn-outline-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#taskB"
                >
                  View
                </button>
              </div>

              <span className="badge bg-warning mb-2 text-uppercase">In Progress</span>

              <div className="small text-muted">
                <div>Assignee: Mehul</div>
                <div>Created By: Manager</div>
                <div>Priority: Medium</div>
                <div>Logged Hours: 5</div>
                <div>Estimated Hours: 12</div>
                <div>End Date: 26 Dec 2025</div>
              </div>
            </div>
          </div>

          {/* MODAL 2 */}
          <div className="modal fade" id="taskB">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content p-3">
                <div className="modal-header">
                  <h5 className="modal-title">Task B</h5>
                  <button className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                  <p>Status: In Progress</p>
                  <p>Full details here...</p>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>


          {/* ------------------ CARD 3 (COMPLETED) ------------------ */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div
              className="p-3 bg-white rounded shadow-sm"
              style={{ borderLeft: "5px solid #198754" }}
            >
              <div className="d-flex justify-content-between align-items-start">
                <h5 className="fw-bold mb-1">
                  <i className="fa fa-check-circle me-2" style={{ color: "#198754" }}></i>
                  Task C
                </h5>
                <button
                  className="btn btn-sm btn-outline-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#taskC"
                >
                  View
                </button>
              </div>

              <span className="badge bg-success mb-2 text-uppercase">Completed</span>

              <div className="small text-muted">
                <div>Assignee: Simran</div>
                <div>Created By: Admin</div>
                <div>Priority: Low</div>
                <div>Logged Hours: 8</div>
                <div>Estimated Hours: 8</div>
                <div>End Date: 20 Dec 2025</div>
              </div>
            </div>
          </div>

          {/* MODAL 3 */}
          <div className="modal fade" id="taskC">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content p-3">
                <div className="modal-header">
                  <h5 className="modal-title">Task C</h5>
                  <button className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                  <p>Status: Completed</p>
                  <p>Full details here...</p>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default Teamtask;
