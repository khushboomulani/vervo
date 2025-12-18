import React from 'react';

const Createtrip = () => {
    return (
        <main className="flex-grow-1 p-3" style={{ background: '#f5f7fb' }}>
        <div className="container-fluid">
         
          <div className="row g-3">
         
  
            <div className="col-12 col-lg-12">
            <h4>Create Trip</h4>
              <div className="card p-3">
               <p className="text-muted mb-4">
        <small>Fields marked with <span className="text-danger">*</span> are mandatory</small>
      </p>
      <form class="container">

<fieldset class="border p-3 mb-4 rounded">
  <legend class="float-none w-auto px-3 fw-semibold"> Trip Type
  </legend>

  <div class="row">
  <div className="col-md-6">
  <div className="row align-items-center">
    <label className="col-sm-4 col-form-label">
      Select Trip Type <span className="text-danger">*</span>
    </label>

    <div className="col-sm-8">
      <select className="form-select">
        <option>OneDay</option>
        <option>Local</option>
        <option>Install</option>
        <option>MultiDay</option>
      </select>
    </div>
  </div>
</div>
<div className="col-md-6">
  <div className="row align-items-center">
    <label className="col-sm-4 col-form-label">
      Project Code <span className="text-danger">*</span>
    </label>

    <div className="col-sm-8">
    <input type="text" className="form-control" />
    </div>
  </div>
</div>
 </div>
</fieldset>

<fieldset class="border p-3 mb-4 rounded">
  <legend class="float-none w-auto px-3 fw-semibold">
  Basic Details
  </legend>

  <div className="row mb-3">
          {/* Row 1 */}
          <div className="col-md-6">
            <div className="row align-items-center mb-3 mb-md-0">
              <label className="col-sm-4 col-form-label">Purpose</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row align-items-center mb-3 mb-md-0">
              <label className="col-sm-3  col-form-label">Dates</label>
              <div className="col-sm-4">
                <input type="text" className="form-control" placeholder='Start Date' />
              </div>
              <div className="col-sm-5">
                <input type="text" className="form-control" placeholder='End Date' />
              </div>
            </div>
          </div>
      
        </div>
        <div className="row mb-3">
          {/* Row 1 */}
          <div className="col-md-6">
            <div className="row align-items-center mb-3 mb-md-0">
              <label className="col-sm-4 col-form-label">Origin from</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row align-items-center mb-3 mb-md-0">
              <label className="col-sm-3 col-form-label">Destination</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" placeholder='Start Date' />
              </div>
            
            </div>
          </div>
      
        </div>
</fieldset>
<fieldset class="border p-3 mb-4 rounded">
  <legend class="float-none w-auto px-3 fw-semibold">
  Travel Details
  </legend>

  <div className="row mb-3">
          {/* Row 1 */}
          <div className="col-md-4">
            <div className="row align-items-center mb-3 mb-md-0">
              <label className="col-sm-6 col-form-label">Preferred Mode</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row align-items-center mb-3 mb-md-0">
              <label className="col-sm-3  col-form-label">vendor</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" />
              </div>
           
            </div>
          </div>
          <div className="col-md-4">
            <div className="row align-items-center mb-3 mb-md-0">
              <label className="col-sm-6 col-form-label">Estimated Budget</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
     
</fieldset>
<div class="form-check mb-3">
  <input class="form-check-input" type="checkbox" id="advanceReq" />
  <label class="form-check-label fw-semibold" for="advanceReq"> Click for Advance Request</label>
</div>

<fieldset className="border p-3 mb-4 rounded position-relative">
  <legend className="float-none w-auto px-3 fw-semibold d-flex align-items-center gap-2">
    Advance Request
    <span className="badge bg-warning text-dark">Pending</span>
    {/* bg-success = Approved, bg-danger = Rejected */}
  </legend>

  <div className="row mb-3">
    <div className="col-md-6">
      <div className="row align-items-center mb-3">
        <label className="col-sm-4 col-form-label">
          Advance Amount
        </label>
        <div className="col-sm-8">
          <input type="text" className="form-control" />
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="row align-items-center mb-3">
        <label className="col-sm-4 col-form-label">
          Advance Reason
        </label>
        <div className="col-sm-8">
          <input type="text" className="form-control" />
        </div>
      </div>
    </div>
  </div>
</fieldset>

<fieldset class="border p-3 mb-4 rounded">
  <legend class="float-none w-auto px-3 fw-semibold">
  Review & Submit 
  </legend>

  <div class="row">
    <div class="col-md-6 mb-3">
      <label class="form-label">Email</label>
      <input type="email" class="form-control" />
    </div>

    <div class="col-md-6 mb-3">
      <label class="form-label">Phone</label>
      <input type="text" class="form-control" />
    </div>
  </div>
</fieldset>
<div className="text-end">
      <button type="submit" className="btn btn-primary px-4">Submit</button>
      </div>
</form>    
     </div>
      </div>
      </div>
      </div>
      </main>
    );
}

export default Createtrip;
