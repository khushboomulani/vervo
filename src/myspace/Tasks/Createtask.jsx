import React from 'react';

const Createtask = () => {
    return (
        <main className="flex-grow-1 p-3" style={{ background: '#f5f7fb' }}>
        <div className="container-fluid">
         
          <div className="row g-3">
         
  
            <div className="col-12 col-lg-12">
            <h4>Add Task</h4>
              <div className="card p-3">
               
                <p className="text-muted mb-4">
        <small>Fields marked with <span className="text-danger">*</span> are mandatory</small>
      </p>
                <form className="card p-4 shadow-sm">
        <div className="row mb-3">
          {/* Row 1 */}
          <div className="col-md-6">
            <div className="row align-items-center mb-3 mb-md-0">
              <label className="col-sm-4 col-form-label">Title</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row align-items-center mb-3 mb-md-0">
              <label className="col-sm-4 col-form-label">Assignee Name</label>
              <div className="col-sm-8">
                <input type="text" className="form-control"  />
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-3'>
        <div className="col-md-6">
            <div className="row align-items-center mb-3 mb-md-0">
              <label className="col-sm-4 col-form-label">Team Name</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
  <div className="row align-items-center mb-3 mb-md-0">
    <label className="col-sm-4 col-form-label">Work Type</label>

    <div className="col-sm-8 d-flex align-items-center gap-3">

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="workType"
          id="retail"
          value="Retail"
        />
        <label className="form-check-label" htmlFor="retail">
          Retail
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="workType"
          id="project"
          value="Project"
        />
        <label className="form-check-label" htmlFor="project">
          Project
        </label>
      </div>

    </div>
  </div>
</div>

        </div>

        {/* Row 2 */}
        <div className="row mb-3">
        <div className="col-md-6">
            <div className="row align-items-center">
              <label className="col-sm-4 col-form-label">Job <span className="text-danger">*</span></label>
              <div className="col-sm-8">
              <select className="form-select">
        <option>Option</option>
      </select>
              </div>
            </div>
          </div>
          <div className="col-md-6">
  <div className="row align-items-center">
    <label className="col-sm-4 col-form-label">
      Priorities <span className="text-danger">*</span>
    </label>

    <div className="col-sm-8">
      <select className="form-select">
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
        <option>Critical</option>
      </select>
    </div>
  </div>
</div>

        </div>

        {/* Row 3 */}
      
  {/* Row 4 */}
      <div className="row mb-3">
            <div className="col-md-6">
                <div className="row align-items-center">
                  <label className="col-sm-4 col-form-label">Type  <span className="text-danger">*</span></label>
                  <div className="col-sm-8">
                  <select className='form-control' >
                  <option>Task</option>
                  <option>Feature</option>
                  <option>Bug</option>
                  <option>Improvement</option></select>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row align-items-center mb-3 mb-md-0">
                  <label className="col-sm-4 col-form-label">Status </label>
                  <div className="col-sm-8">
                  <select className='form-control' >
                  <option>Assigned</option>
                  <option>In Progress</option>
                  <option>Log</option>
                  <option>Completed</option>
                  <option>Cancelled</option></select>
                  </div>
                </div>
              </div>
            </div>
            {/* Row 4 */}
      <div className="row mb-3">
          
      <div className="col-md-6">
  <div className="row align-items-center mb-3">
    <label className="col-sm-4 col-form-label">
      Start Date <span className="text-danger">*</span>
    </label>
    <div className="col-sm-8">
      <input type="date" className="form-control" />
    </div>
  </div>
</div>

<div className="col-md-6">
  <div className="row align-items-center mb-3">
    <label className="col-sm-4 col-form-label">
      End Date <span className="text-danger">*</span>
    </label>
    <div className="col-sm-8">
      <input type="date" className="form-control" />
    </div>
  </div>
</div>

          
            </div>
            <div className="row mb-3">
          
          <div className="col-md-6">
        <div className="row align-items-center mb-3 mb-md-0">
          <label className="col-sm-4 col-form-label">Estimated Hrs</label>
          <div className="col-sm-8">
           <input type='text' className='form-control'></input>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row align-items-center mb-3 mb-md-0">
          <label className="col-sm-4 col-form-label">Attachments</label>
          <div className="col-sm-8">
           <input type='file' className='form-control'></input>
          </div>
        </div>
      </div>
      
        </div>
        
            {/* Row 4 */}
     
        <div className="text-end">
        <button type="submit" className="btn btn-sm btn-outline-primary me-2">Save Draft</button> &nbsp;
          <button type="submit" className="btn btn-primary px-4">Add</button>
        </div>
      </form>
      </div>
      </div>
      </div>
      </div>
      </main>
    );
}

export default Createtask;
