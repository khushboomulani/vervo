import React from 'react';

const NewTimecard = () => {
    return (
        <main className="flex-grow-1 p-4" style={{ background: '#f5f7fb' }}>
        <div className="container-fluid">
         
          <div className="row g-3">
         
  
            <div className="col-12 col-lg-12">
            <h4>New Time Card</h4>
              <div className="card p-3">
               
                <p className="text-muted mb-4">
        <small>Fields marked with <span className="text-danger">*</span> are mandatory</small>
      </p>
                <form className="card p-4 shadow-sm">
        <div className="row mb-3">
          {/* Row 1 */}
          <div className="col-md-6">
            <div className="row align-items-center mb-3 mb-md-0">
              <label className="col-sm-4 col-form-label">Name</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row align-items-center mb-3 mb-md-0">
              <label className="col-sm-4 col-form-label">Department</label>
              <div className="col-sm-8">
                <input type="text" className="form-control"  />
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-3'>
        <div className="col-md-6">
            <div className="row align-items-center mb-3 mb-md-0">
              <label className="col-sm-4 col-form-label">Designation</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row align-items-center mb-3 mb-md-0">
              <label className="col-sm-4 col-form-label">Employee Code</label>
              <div className="col-sm-8">
                <input type="text" className="form-control"/>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row mb-3">
        <div className="col-md-6">
            <div className="row align-items-center">
              <label className="col-sm-4 col-form-label">Date <span className="text-danger">*</span></label>
              <div className="col-sm-8">
                <input type="date" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row align-items-center mb-3 mb-md-0">
              <label className="col-sm-4 col-form-label">Job</label>
              <div className="col-sm-8">
                <input type="number" className="form-control" />
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row mb-3">
          <div className="col-md-12">
            <div className="row align-items-center">
              <label className="col-sm-2 col-form-label">Day Type <span className="text-danger">*</span></label>
              <div className="col-sm-10">
              <div className="d-flex flex-wrap gap-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="dayType"
                      id="workingDay"
                      value="Working Day"
                      required
                    />
                    <label className="form-check-label" htmlFor="workingDay">
                      Working Day
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="dayType"
                      id="workingDay"
                      value="Working Day"
                      required
                    />
                    <label className="form-check-label" htmlFor="workingDay">
                      Working Off
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="dayType"
                      id="workingDay"
                      value="Working Day"
                      required
                    />
                    <label className="form-check-label" htmlFor="workingDay">
                    Public Holiday
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="dayType"
                      id="workingDay"
                      value="Working Day"
                      required
                    />
                    <label className="form-check-label" htmlFor="workingDay">
                    Leave
                    </label>
                  </div>
                  </div>
              </div>
            </div>
          </div>
       
        </div>
  {/* Row 4 */}
      <div className="row mb-3">
            <div className="col-md-6">
                <div className="row align-items-center">
                  <label className="col-sm-4 col-form-label">Approver Name  <span className="text-danger">*</span></label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row align-items-center mb-3 mb-md-0">
                  <label className="col-sm-4 col-form-label">Division</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control"  />
                  </div>
                </div>
              </div>
            </div>
            {/* Row 4 */}
      <div className="row mb-3">
            <div className="col-md-6">
                <div className="row align-items-center">
                  <label className="col-sm-4 col-form-label">Location  <span className="text-danger">*</span></label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row align-items-center mb-3 mb-md-0">
                  <label className="col-sm-4 col-form-label">Discipline Dept</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control"  />
                  </div>
                </div>
              </div>
            </div>
            {/* Row 4 */}
      <div className="row mb-3">
            <div className="col-md-6">
                <div className="row align-items-center">
                  <label className="col-sm-4 col-form-label">Unit  <span className="text-danger">*</span></label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row align-items-center mb-3 mb-md-0">
                  <label className="col-sm-4 col-form-label">Activity</label>
                  <div className="col-sm-8">
                    <input type="number" className="form-control"  />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
            <div className="col-md-12">
                <div className="row align-items-center">
                  <label className="col-sm-2 col-form-label">Notes  <span className="text-danger">*</span></label>
                  <div className="col-sm-10">
                   <textarea rows={3} className="form-control" ></textarea>
                  </div>
                </div>
              </div>
            
            </div>
            <div className="row mb-3">
            <div className="col-md-6">
                <div className="row align-items-center">
                  <label className="col-sm-4 col-form-label">Standard Man Hours  <span className="text-danger">*</span></label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row align-items-center mb-3 mb-md-0">
                  <label className="col-sm-4 col-form-label">Extra Man Hours</label>
                  <div className="col-sm-8">
                    <input type="number" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
        <div className="text-end">
          <button type="submit" className="btn btn-warning px-4">Save as draft</button>&nbsp;
          <button type="submit" className="btn btn-primary px-4">Add</button>
        </div>
      </form>
                  </div>
            </div>
          </div>
        </div>
  
        {/* Small hover effect for cards */}
        <style>{`
          .hover-effect:hover {
            transform: translateY(-3px);
            transition: 0.2s ease;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          }
        `}</style>
      </main>
    );
}

export default NewTimecard;
